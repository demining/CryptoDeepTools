from binascii import hexlify, unhexlify
from io import BytesIO

import random
import requests
import zmq

from secp256k1 import PrivateKey, S256Point, Signature
from sign import (
    decode_base58,
    double_sha256,
    encode_varint,
    hash160,
    int_to_little_endian,
    little_endian_to_int,
    p2pkh_script,
    p2sh_script,
    read_varint,
    SIGHASH_ALL,
)
from signing import Script


class LibBitcoinClient:

    context = zmq.Context()
    mainnet_socket = None
    testnet_socket = None
    cache = {}

    @classmethod
    def get_socket(cls, testnet=False):
        if testnet:
            if cls.testnet_socket is None:
                cls.testnet_socket = cls.context.socket(zmq.REQ)
                cls.testnet_socket.connect(
                    'tcp://testnet.libbitcoin.net:19091')
            return cls.testnet_socket
        else:
            if cls.mainnet_socket is None:
                cls.mainnet_socket = cls.context.socket(zmq.REQ)
                cls.mainnet_socket.connect(
                    'tcp://mainnet.libbitcoin.net:9091')
            return cls.mainnet_socket


class Tx(LibBitcoinClient):

    default_version = 1
    default_hash_type = 1
    hash_type_pre_image = default_hash_type
    cache = {}
    p2pkh_prefixes = (0x00, 0x6f)
    p2sh_prefixes = (0x05, 0xc4)
    testnet_prefixes = (0x6f, 0xc4)

    def __init__(self, version, tx_ins, tx_outs, locktime, testnet=False):
        self.version = version
        self.tx_ins = tx_ins
        self.tx_outs = tx_outs
        self.locktime = locktime
        self.testnet = testnet
        self._hash_prevouts = None
        self._hash_sequence = None
        self._hash_outputs = None

    def __repr__(self):
        tx_ins = ''
        for tx_in in self.tx_ins:
            tx_ins += tx_in.__repr__() + '\n'
        tx_outs = ''
        for tx_out in self.tx_outs:
            tx_outs += tx_out.__repr__() + '\n'
        return '{}\nversion: {}\ntx_ins:\n{}\ntx_outs:\n{}\nlocktime: {}\n'.format(
            hexlify(self.hash()).decode('ascii'),
            self.version,
            tx_ins,
            tx_outs,
            self.locktime,
        )

    def hash(self):
        return double_sha256(self.serialize())[::-1]

    @classmethod
    def get_address_data(cls, addr):
        b58 = decode_base58(addr)
        prefix = b58[0]
        h160 = b58[1:]
        testnet = prefix in cls.testnet_prefixes
        if prefix in cls.p2pkh_prefixes:
            script_pubkey = Script.parse(p2pkh_script(h160))
        elif prefix in cls.p2sh_prefixes:
            script_pubkey = Script.parse(p2sh_script(h160))
        else:
            raise RuntimeError('unknown type of address {} {}'.format(addr, prefix))
        return {
            'testnet': testnet,
            'h160': h160,
            'script_pubkey': script_pubkey,
        }

    @classmethod
    def fetch_address_utxos(cls, address, at_block_height=None):
        # grab all unspent transaction outputs as of block block_height
        # if block_height is None, we include all utxos
        address_data = cls.get_address_data(address)
        serialized_script_pubkey = address_data['script_pubkey'].serialize()
        socket = cls.get_socket(address_data['testnet'])
        nonce = int_to_little_endian(random.randint(0, 2**32), 4)
        msg = b'blockchain.fetch_history3'
        socket.send(msg, zmq.SNDMORE)
        socket.send(nonce, zmq.SNDMORE)
        socket.send(address_data['h160'] + b'\x00\x00\x00\x00')
        response_msg = socket.recv()
        response_nonce = socket.recv()
        if response_msg != msg or response_nonce != nonce:
            raise RuntimeError('received wrong msg: {}'.format(
                response_msg.decode('ascii')))
        response = socket.recv()
        response_code = little_endian_to_int(response[:4])
        if response_code != 0:
            raise RuntimeError('got code from server: {}'.format(response_code))
        response = response[4:]
        receives = []
        spent = set()
        while len(response) > 0:
            kind = response[0]
            prev_tx = response[1:33]
            prev_index = response[33:37]
            block_height = little_endian_to_int(response[37:41])
            if kind == 0:
                value = little_endian_to_int(response[41:49])
                if at_block_height is None or block_height < at_block_height:
                    receives.append([prev_tx, prev_index, value])
            else:
                if at_block_height is None or block_height < at_block_height:
                    spent.add(little_endian_to_int(response[41:49]))
            response = response[49:]
        utxos = []
        tx_mask = 0xffffffffffff8000
        index_mask = 0x7fff
        for prev_tx, prev_index, value in receives:
            tx_upper_49_bits = (little_endian_to_int(prev_tx) >> 12*8) & tx_mask
            index_lower_15_bits = little_endian_to_int(prev_index) & index_mask
            key = tx_upper_49_bits | index_lower_15_bits
            if key not in spent:
                utxos.append([serialized_script_pubkey, prev_tx[::-1], little_endian_to_int(prev_index), value])
        return utxos

    @classmethod
    def get_all_utxos(cls, addrs):
        utxos = []
        for addr in addrs:
            # look up utxos for each address
            utxos.extend(cls.fetch_address_utxos(addr))
        return utxos

    @classmethod
    def spend_tx(cls, wifs, utxos, destination_addr, fee=540):
        destination_address_data = cls.get_address_data(destination_addr)
        testnet = destination_address_data['testnet']
        if testnet:
            prefix = bytes([cls.testnet_prefixes[0]])
        else:
            prefix = bytes([cls.p2pkh_prefixes[0]])
        tx_ins = []
        sequence = 0xffffffff
        priv_lookup = {}
        total = 0
        for wif in wifs:
            priv_key = PrivateKey.parse(wif)
            addr = priv_key.point.address(priv_key.compressed, prefix=prefix)
            # look up utxos for each address
            address_data = cls.get_address_data(addr)
            script_pubkey = address_data['script_pubkey']
            spk = script_pubkey.serialize()
            priv_lookup[spk] = priv_key
        if not utxos:
            raise RuntimeError('fetch utxos first')
        for serialized_script_pubkey, prev_tx, prev_index, value in utxos:
            tx_ins.append(TxIn(prev_tx, prev_index, b'', sequence, value=value, script_pubkey=serialized_script_pubkey))
            total += value
        num_tx_ins = len(tx_ins)
        if num_tx_ins == 0:
            raise RuntimeError('nothing to spend')
        script_pubkey = destination_address_data['script_pubkey']
        tx_out = TxOut(total - fee, script_pubkey.serialize())
        tx = cls(cls.default_version, tx_ins, [tx_out], 0, testnet=testnet)
        for index, tx_in in enumerate(tx_ins):
            priv_key = priv_lookup[tx_in.script_pubkey().serialize()]
            tx.sign_input(
                index,
                priv_key,
                cls.default_hash_type,
                compressed=priv_key.compressed,
            )
        if not tx.verify():
            raise RuntimeError('failed validation')
        return tx.serialize()

    @classmethod
    def spend_all_tx(cls, private_keys, destination_addr, fee, segwit, utxos):
        destination_address_data = cls.get_address_data(destination_addr)
        testnet = destination_address_data['testnet']
        if testnet:
            if segwit:
                prefix = bytes([cls.p2sh_prefixes[1]])
            else:
                prefix = bytes([cls.p2pkh_prefixes[1]])
        else:
            if segwit:
                prefix = bytes([cls.p2sh_prefixes[0]])
            else:
                prefix = bytes([cls.p2pkh_prefixes[0]])
        tx_ins = []
        sequence = 0xffffffff
        priv_lookup = {}
        total = 0
        for private_key in private_keys:
            if segwit:
                addr = private_key.point.segwit_address(prefix=prefix)
            else:
                addr = private_key.point.address(private_key.compressed, prefix=prefix)
            address_data = cls.get_address_data(addr)
            script_pubkey = address_data['script_pubkey']
            priv_lookup[script_pubkey.serialize()] = private_key
        for serialized_script_pubkey, prev_tx, prev_index, value in utxos:
            private_key = priv_lookup[serialized_script_pubkey]
            if segwit:
                script_sig = private_key.segwit_redeem_script()
            else:
                script_sig = b''
            tx_in = TxIn(
                prev_tx,
                prev_index,
                script_sig,
                sequence,
                value=value,
                script_pubkey=serialized_script_pubkey,
            )
            tx_ins.append(tx_in)
            total += value
        num_tx_ins = len(tx_ins)
        if num_tx_ins == 0:
            return
        if total - fee < 0:
            return
        script_pubkey = destination_address_data['script_pubkey']
        print('{}: {} to {}'.format(cls, total - fee, destination_addr))
        tx_out = TxOut(total - fee, script_pubkey.serialize())
        tx = cls(cls.default_version, tx_ins, [tx_out], 0, testnet=testnet)
        for index, tx_in in enumerate(tx_ins):
            private_key = priv_lookup[tx_in.script_pubkey().serialize()]
            if not tx.sign_input(
                index,
                private_key,
                cls.default_hash_type,
                compressed=private_key.compressed,
            ):
                raise RuntimeError('sign and verify do different things')
        if not tx.verify():
            raise RuntimeError('failed validation')
        return tx.serialize()

    @classmethod
    def parse(cls, s):
        '''Takes a byte stream and parses the transaction at the start
        return a Tx object
        '''
        # s.read(n) will return n bytes
        # version has 4 bytes, little-endian, interpret as int
        version = little_endian_to_int(s.read(4))
        # num_inputs is a varint, use read_varint(s)
        num_inputs = read_varint(s)
        # if we have a segwit marker, we need to parse in another way
        if num_inputs == 0:
            return cls.parse_segwit(s, version)
        # each input needs parsing
        inputs = []
        for _ in range(num_inputs):
            inputs.append(TxIn.parse(s))
        # num_outputs is a varint, use read_varint(s)
        num_outputs = read_varint(s)
        # each output needs parsing
        outputs = []
        for _ in range(num_outputs):
            outputs.append(TxOut.parse(s))
        # locktime is 4 bytes, little-endian
        locktime = little_endian_to_int(s.read(4))
        # return an instance of the class (cls(...))
        return cls(version, inputs, outputs, locktime)

    @classmethod
    def parse_segwit(cls, s, version):
        '''Takes a byte stream and parses the segwit transaction in middle
        return a Tx object
        '''
        marker = s.read(1)
        if marker != b'\x01':
            raise RuntimeError('Not a segwit transaction {}'.format(marker))
        # num_inputs is a varint, use read_varint(s)
        num_inputs = read_varint(s)
        # each input needs parsing
        tx_ins = []
        for _ in range(num_inputs):
            tx_ins.append(TxIn.parse(s))
        # num_outputs is a varint, use read_varint(s)
        num_outputs = read_varint(s)
        # each output needs parsing
        tx_outs = []
        for _ in range(num_outputs):
            tx_outs.append(TxOut.parse(s))
        # now parse the witness program
        for tx_in in tx_ins:
            num_elements = read_varint(s)
            elements = [num_elements]
            for _ in range(num_elements):
                element_len = read_varint(s)
                elements.append(s.read(element_len))
            tx_in.witness_program = Script(elements).serialize()
        # locktime is 4 bytes, little-endian
        locktime = little_endian_to_int(s.read(4))
        # return an instance of the class (cls(...))
        return cls(version, tx_ins, tx_outs, locktime)

    def is_segwit(self):
        for tx_in in self.tx_ins:
            if tx_in.is_segwit():
                return True
        return False

    def serialize(self):
        '''Returns the byte serialization of the transaction'''
        if self.is_segwit():
            return self.serialize_segwit()
        # serialize version (4 bytes, little endian)
        result = int_to_little_endian(self.version, 4)
        # encode_varint on the number of inputs
        result += encode_varint(len(self.tx_ins))
        # iterate inputs
        for tx_in in self.tx_ins:
            # serialize each input
            result += tx_in.serialize()
        # encode_varint on the number of inputs
        result += encode_varint(len(self.tx_outs))
        # iterate outputs
        for tx_out in self.tx_outs:
            # serialize each output
            result += tx_out.serialize()
        # serialize locktime (4 bytes, little endian)
        result += int_to_little_endian(self.locktime, 4)
        return result

    def serialize_segwit(self):
        '''Returns the byte serialization of the transaction'''
        # serialize version (4 bytes, little endian)
        result = int_to_little_endian(self.version, 4)
        # segwit marker '0001'
        result += b'\x00\x01'
        # encode_varint on the number of inputs
        result += encode_varint(len(self.tx_ins))
        # iterate inputs
        for tx_in in self.tx_ins:
            # serialize each input
            result += tx_in.serialize()
        # encode_varint on the number of inputs
        result += encode_varint(len(self.tx_outs))
        # iterate outputs
        for tx_out in self.tx_outs:
            # serialize each output
            result += tx_out.serialize()
        # add the witness data
        for tx_in in self.tx_ins:
            result += tx_in.witness_program
        # serialize locktime (4 bytes, little endian)
        result += int_to_little_endian(self.locktime, 4)
        return result

    def fee(self):
        '''Returns the fee of this transaction in satoshi'''
        # initialize input sum and output sum
        input_sum, output_sum = 0, 0
        # iterate through inputs
        for tx_in in self.tx_ins:
            # for each input get the value and add to input sum
            input_sum += tx_in.value()
        # iterate through outputs
        for tx_out in self.tx_outs:
            # for each output get the amount and add to output sum
            output_sum += tx_out.amount
        # return input sum - output sum
        return input_sum - output_sum

    def hash_prevouts(self):
        if self._hash_prevouts is None:
            all_prevouts = b''
            all_sequence = b''
            for tx_in in self.tx_ins:
                all_prevouts += tx_in.prev_tx[::-1] + int_to_little_endian(tx_in.prev_index, 4)
                all_sequence += int_to_little_endian(tx_in.sequence, 4)
            self._hash_prevouts = double_sha256(all_prevouts)
            self._hash_sequence = double_sha256(all_sequence)
        return self._hash_prevouts

    def hash_sequence(self):
        if self._hash_sequence is None:
            self.hash_prevouts()  # this should calculate self._hash_prevouts
        return self._hash_sequence

    def hash_outputs(self):
        if self._hash_outputs is None:
            all_outputs = b''
            for tx_out in self.tx_outs:
                all_outputs += tx_out.serialize()
            self._hash_outputs = double_sha256(all_outputs)
        return self._hash_outputs

    def sig_hash_preimage_bip143(self, input_index, hash_type):
        '''Returns the integer representation of the hash that needs to get
        signed for index input_index'''
        tx_in = self.tx_ins[input_index]
        # per BIP143 spec
        s = int_to_little_endian(self.version, 4)
        s += self.hash_prevouts() + self.hash_sequence()
        s += tx_in.prev_tx[::-1] + int_to_little_endian(tx_in.prev_index, 4)
        if tx_in.is_segwit():
            h160 = tx_in.redeem_script()[-20:]
            ser = p2pkh_script(h160)
        else:
            ser = tx_in.script_pubkey().serialize()
        s += bytes([len(ser)]) + ser  # script pubkey
        s += int_to_little_endian(tx_in.value(), 8)
        s += int_to_little_endian(tx_in.sequence, 4)
        s += self.hash_outputs()
        s += int_to_little_endian(self.locktime, 4)
        s += int_to_little_endian(self.hash_type_pre_image, 4)
        return s

    def sig_hash_bip143(self, input_index, hash_type):
        s = self.sig_hash_preimage_bip143(input_index, hash_type)
        return int.from_bytes(double_sha256(s), 'big')

    def sig_hash(self, input_index, hash_type):
        '''Returns the integer representation of the hash that needs to get
        signed for index input_index'''
        # create a transaction serialization where
        # all the input script_sigs are blanked out
        alt_tx_ins = []
        for tx_in in self.tx_ins:
            alt_tx_ins.append(TxIn(
                prev_tx=tx_in.prev_tx,
                prev_index=tx_in.prev_index,
                script_sig=b'',
                sequence=tx_in.sequence,
                value=tx_in.value(),
                script_pubkey=tx_in.script_pubkey().serialize(),
            ))
        # replace the input's scriptSig with the scriptPubKey
        signing_input = alt_tx_ins[input_index]
        script_pubkey = signing_input.script_pubkey(self.testnet)
        sig_type = script_pubkey.type()
        if sig_type == 'p2pkh':
            signing_input.script_sig = script_pubkey
        elif sig_type == 'p2sh':
            current_input = self.tx_ins[input_index]
            signing_input.script_sig = Script.parse(
                current_input.redeem_script())
        else:
            raise RuntimeError('not a valid sig_type: {}'.format(sig_type))
        alt_tx = self.__class__(
            version=self.version,
            tx_ins=alt_tx_ins,
            tx_outs=self.tx_outs,
            locktime=self.locktime,
        )
        # add the hash_type
        result = alt_tx.serialize()
        result += int_to_little_endian(self.hash_type_pre_image, 4)
        return int.from_bytes(double_sha256(result), 'big')

    def verify_input(self, input_index):
        '''Returns whether the input has a valid signature'''
        # get the relevant input
        tx_in = self.tx_ins[input_index]
        # get the number of signatures required. This is available in tx_in.script_sig.num_sigs_required()
        sigs_required = tx_in.script_sig.num_sigs_required()
        # iterate over the sigs required and check each signature
        for sig_num in range(sigs_required):
            # get the point from the sec format
            sec = tx_in.sec_pubkey(index=sig_num)
            # get the sec_pubkey at current signature index
            point = S256Point.parse(sec)
            # get the der sig and hash_type from input
            # get the der_signature at current signature index
            der, hash_type = tx_in.der_signature(index=sig_num)
            # get the signature from der format
            signature = Signature.parse(der)
            # get the hash to sign
            if tx_in.is_segwit():
                h160 = hash160(tx_in.script_sig.redeem_script())
                if h160 != tx_in.script_pubkey(self.testnet).elements[1]:
                    return False
                pubkey_h160 = tx_in.script_sig.redeem_script()[-20:]
                if pubkey_h160 != point.h160():
                    return False
                z = self.sig_hash_bip143(input_index, hash_type)
            else:
                z = self.sig_hash(input_index, hash_type)
            # use point.verify on the hash to sign and signature
            if not point.verify(z, signature):
                return False
        return True

    def sign_input(self, input_index, private_key, hash_type, compressed=True):
        '''Signs the input using the private key'''
        # get the hash to sign
        tx_in = self.tx_ins[input_index]
        is_segwit = tx_in.is_segwit()
        if is_segwit:
            z = self.sig_hash_bip143(input_index, hash_type)
        else:
            z = self.sig_hash(input_index, hash_type)
        # get der signature of z from private key
        der = private_key.sign(z).der()
        # append the hash_type to der (use bytes([hash_type]))
        sig = der + bytes([hash_type])
        # calculate the sec
        sec = private_key.point.sec(compressed=compressed)
        if is_segwit:
            tx_in.script_sig = Script([tx_in.redeem_script()])
            tx_in.witness_program = Script([2, sig, sec]).serialize()
        else:
            # initialize a new script with [sig, sec] as the elements
            # change input's script_sig to new script
            tx_in.script_sig = Script([sig, sec])
        # return whether sig is valid using self.verify_input
        return self.verify_input(input_index)

    def is_coinbase(self):
        '''Returns whether this transaction is a coinbase transaction or not'''
        # check that there is exactly 1 input
        if len(self.tx_ins) != 1:
            return False
        # grab the first input
        first_input = self.tx_ins[0]
        # check that first input prev_tx is b'\x00' * 32 bytes
        if first_input.prev_tx != b'\x00' * 32:
            return False
        # check that first input prev_index is 0xffffffff
        if first_input.prev_index != 0xffffffff:
            return False
        return True

    def coinbase_height(self):
        '''Returns the height of the block this coinbase transaction is in
        Returns None if this transaction is not a coinbase transaction
        '''
        # if this is NOT a coinbase transaction, return None
        if not self.is_coinbase():
            return None
        # grab the first input
        first_input = self.tx_ins[0]
        # grab the first element of the script_sig (.script_sig.elements[0])
        first_element = first_input.script_sig.elements[0]
        # convert the first element from little endian to int
        return little_endian_to_int(first_element)

    def verify(self):
        for i in range(len(self.tx_ins)):
            if not self.verify_input(i):
                return False
        return True

    def sign(self, private_key, compressed=True):
        hash_type = SIGHASH_ALL
        for i in range(len(self.tx_ins)):
            if not self.sign_input(i, private_key, hash_type, compressed=compressed):
                raise RuntimeError('signing failed')


class BTXTx(Tx):
    fork_block = 492820
    default_version = 2

    @classmethod
    def fetch_address_utxos(cls, address):
        api_key = 'e86ce04b6888'
        url = 'https://chainz.cryptoid.info/btx/api.dws?q=unspent&active={}&key={}'.format(
            address, api_key)
        result = requests.get(url).json()
        address_data = cls.get_address_data(address)
        serialized_script_pubkey = address_data['script_pubkey'].serialize()
        print(result)
        utxos = []
        for item in result['unspent_outputs']:
            utxos.append([serialized_script_pubkey, unhexlify(item['tx_hash']), item['tx_ouput_n'], int(item['value'])])
        return utxos


class ForkTx(Tx):
    fork_block = 0

    @classmethod
    def fetch_address_utxos(cls, address):
        return super().fetch_address_utxos(address, at_block_height=cls.fork_block)


class B2XTx(ForkTx):
    fork_block = 501451
    default_hash_type = 0x21 | 0x10
    hash_type_pre_image = default_hash_type << 1

    def sign(self, private_key, compressed=True):
        hash_type = self.default_hash_type
        for i in range(len(self.tx_ins)):
            if not self.sign_input(
                    i, private_key, hash_type, compressed=compressed):
                raise RuntimeError('signing failed')


class BCHTx(ForkTx):
    fork_block = 478558
    fork_id = 0
    default_hash_type = 0x41

    def sig_hash_preimage_bip143(self, input_index, hash_type):
        '''Returns the integer representation of the hash that needs to get
        signed for index input_index'''
        tx_in = self.tx_ins[input_index]
        # per BIP143 spec
        s = int_to_little_endian(self.version, 4)
        s += self.hash_prevouts() + self.hash_sequence()
        s += tx_in.prev_tx[::-1] + int_to_little_endian(tx_in.prev_index, 4)
        if tx_in.is_segwit():
            h160 = tx_in.redeem_script()[-20:]
            ser = p2pkh_script(h160)
        else:
            ser = tx_in.script_pubkey().serialize()
        s += bytes([len(ser)]) + ser  # script pubkey
        s += int_to_little_endian(tx_in.value(), 8)
        s += int_to_little_endian(tx_in.sequence, 4)
        s += self.hash_outputs()
        s += int_to_little_endian(self.locktime, 4)
        s += int_to_little_endian(hash_type | self.fork_id, 4)
        return s

    def verify_input(self, input_index):
        '''Returns whether the input has a valid signature'''
        # get the relevant input
        tx_in = self.tx_ins[input_index]
        # get the sec_pubkey at current signature index
        point = S256Point.parse(tx_in.sec_pubkey())
        # get the der sig and hash_type from input
        # get the der_signature at current signature index
        der, hash_type = tx_in.der_signature()
        # get the signature from der format
        signature = Signature.parse(der)
        # get the hash to sign
        z = self.sig_hash_bip143(input_index, hash_type)
        # use point.verify on the hash to sign and signature
        if not point.verify(z, signature):
            return False
        return True

    def sign_input(self, input_index, private_key, hash_type, compressed=True):
        '''Signs the input using the private key'''
        # get the hash to sign
        z = self.sig_hash_bip143(input_index, hash_type)
        # get der signature of z from private key
        der = private_key.sign(z).der()
        # append the hash_type to der (use bytes([hash_type]))
        sig = der + bytes([hash_type])
        # calculate the sec
        sec = private_key.point.sec(compressed=compressed)
        # initialize a new script with [sig, sec] as the elements
        script_sig = Script([sig, sec])
        # change input's script_sig to new script
        self.tx_ins[input_index].script_sig = script_sig
        # return whether sig is valid using self.verify_input
        return self.verify_input(input_index)

    def sign(self, private_key, compressed=True):
        hash_type = self.default_hash_type
        for i in range(len(self.tx_ins)):
            if not self.sign_input(
                    i, private_key, hash_type, compressed=compressed):
                raise RuntimeError('signing failed')


class BTGTx(BCHTx):
    fork_block = 491407
    fork_id = 79 << 8
    p2pkh_prefixes = (0x26, 0x6f, 0x00)
    p2sh_prefixes = (0x17, 0xc4, 0x05)
    
    def sign_input(self, input_index, private_key, hash_type, compressed=True):
        '''Signs the input using the private key'''
        # get the hash to sign
        z = self.sig_hash_bip143(input_index, hash_type)
        # get der signature of z from private key
        der = private_key.sign(z).der()
        # append the hash_type to der (use bytes([hash_type]))
        sig = der + bytes([hash_type])
        # calculate the sec
        sec = private_key.point.sec(compressed=compressed)
        tx_in = self.tx_ins[input_index]
        if tx_in.is_segwit():
            tx_in.script_sig = Script([tx_in.redeem_script()])
            tx_in.witness_program = Script([2, sig, sec]).serialize()
        else:
            # initialize a new script with [sig, sec] as the elements
            script_sig = Script([sig, sec])
            # change input's script_sig to new script
            tx_in.script_sig = script_sig
        # return whether sig is valid using self.verify_input
        return self.verify_input(input_index)


class BCXTx(BTGTx):
    fork_block = 498888
    fork_id = 0
    default_hash_type = 0x11
    p2pkh_prefixes = (0x4b, 0x41, 0x00)
    p2sh_prefixes = (0x3f, 0xc4, 0x05)


class BTFTx(BCHTx):
    fork_block = 500000
    fork_id = 70 << 8
    p2pkh_prefixes = (0x24, 0x60)
    p2sh_prefixes = (0x28, 0x65)


class BTWTx(BCHTx):
    fork_block = 499777
    fork_id = 87 << 8
    p2pkh_prefixes = (0x49, 0x87)
    p2sh_prefixes = (0x1f, 0x59)


# make sure that the elliptic curve equation is satisfied
# y**2 == x**3 + a*x + b
Nmode = PrivateKey(0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141)
N = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
curue = PrivateKey(0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798)
curve = PrivateKey(0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8)
G = S256Point(
    0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798,
    0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8)


class BCDTx(ForkTx):
    fork_block = 495866
    default_version = 12
    default_block_hash = unhexlify('c51159637a85160ed5c726fb0df68e14352b495e4c57444d4d427bbc68db0551')

    def __init__(self, version, tx_ins, tx_outs, locktime, prev_block_hash=None, testnet=False):
        super().__init__(version, tx_ins, tx_outs, locktime, testnet=False)
        if prev_block_hash is None:
            self.prev_block_hash = self.default_block_hash
        else:
            self.prev_block_hash = prev_block_hash

    @classmethod
    def parse(cls, s):
        '''Takes a byte stream and parses the transaction at the start
        return a Tx object
        '''
        # s.read(n) will return n bytes
        # version has 4 bytes, little-endian, interpret as int
        version = little_endian_to_int(s.read(4))
        prev_block_hash = s.read(32)[::-1]
        # num_inputs is a varint, use read_varint(s)
        num_inputs = read_varint(s)
        # each input needs parsing
        inputs = []
        for _ in range(num_inputs):
            inputs.append(TxIn.parse(s))
        # num_outputs is a varint, use read_varint(s)
        num_outputs = read_varint(s)
        # each output needs parsing
        outputs = []
        for _ in range(num_outputs):
            outputs.append(TxOut.parse(s))
        # locktime is 4 bytes, little-endian
        locktime = little_endian_to_int(s.read(4))
        # return an instance of the class (cls(...))
        return cls(version, inputs, outputs, locktime, prev_block_hash=prev_block_hash)

    def serialize_segwit(self):
        '''Returns the byte serialization of the transaction'''
        # serialize version (4 bytes, little endian)
        result = int_to_little_endian(self.version, 4)
        # previous block hash
        result += self.prev_block_hash[::-1]
        # segwit marker '0001'
        result += b'\x00\x01'
        # encode_varint on the number of inputs
        result += encode_varint(len(self.tx_ins))
        # iterate inputs
        for tx_in in self.tx_ins:
            # serialize each input
            result += tx_in.serialize()
        # encode_varint on the number of inputs
        result += encode_varint(len(self.tx_outs))
        # iterate outputs
        for tx_out in self.tx_outs:
            # serialize each output
            result += tx_out.serialize()
        # add the witness data
        for tx_in in self.tx_ins:
            result += tx_in.witness_program
        # serialize locktime (4 bytes, little endian)
        result += int_to_little_endian(self.locktime, 4)
        return result

    def serialize(self):
        '''Returns the byte serialization of the transaction'''
        if self.is_segwit():
            return self.serialize_segwit()
        # serialize version (4 bytes, little endian)
        result = int_to_little_endian(self.version, 4)
        # previous block hash
        result += self.prev_block_hash[::-1]
        # encode_varint on the number of inputs
        result += encode_varint(len(self.tx_ins))
        # iterate inputs
        for tx_in in self.tx_ins:
            # serialize each input
            result += tx_in.serialize()
        # encode_varint on the number of inputs
        result += encode_varint(len(self.tx_outs))
        # iterate outputs
        for tx_out in self.tx_outs:
            # serialize each output
            result += tx_out.serialize()
        # serialize locktime (4 bytes, little endian)
        result += int_to_little_endian(self.locktime, 4)
        return result

    def sig_hash_preimage_bip143(self, input_index, hash_type):
        '''Returns the integer representation of the hash that needs to get
        signed for index input_index'''
        tx_in = self.tx_ins[input_index]
        # per BIP143 spec
        s = int_to_little_endian(self.version, 4)
        s += self.prev_block_hash[::-1]
        s += self.hash_prevouts() + self.hash_sequence()
        s += tx_in.prev_tx[::-1] + int_to_little_endian(tx_in.prev_index, 4)
        if tx_in.is_segwit():
            h160 = tx_in.redeem_script()[-20:]
            ser = p2pkh_script(h160)
        else:
            ser = tx_in.script_pubkey().serialize()
        s += bytes([len(ser)]) + ser  # script pubkey
        s += int_to_little_endian(tx_in.value(), 8)
        s += int_to_little_endian(tx_in.sequence, 4)
        s += self.hash_outputs()
        s += int_to_little_endian(self.locktime, 4)
        s += int_to_little_endian(hash_type, 4)
        return s

    def sig_hash(self, input_index, hash_type):
        '''Returns the integer representation of the hash that needs to get
        signed for index input_index'''
        # create a transaction serialization where
        # all the input script_sigs are blanked out
        alt_tx_ins = []
        for tx_in in self.tx_ins:
            alt_tx_ins.append(TxIn(
                prev_tx=tx_in.prev_tx,
                prev_index=tx_in.prev_index,
                script_sig=b'',
                sequence=tx_in.sequence,
                value=tx_in.value(),
                script_pubkey=tx_in.script_pubkey().serialize(),
            ))
        # replace the input's scriptSig with the scriptPubKey
        signing_input = alt_tx_ins[input_index]
        script_pubkey = signing_input.script_pubkey(self.testnet)
        sig_type = script_pubkey.type()
        if sig_type == 'p2pkh':
            signing_input.script_sig = script_pubkey
        elif sig_type == 'p2sh':
            current_input = self.tx_ins[input_index]
            signing_input.script_sig = Script.parse(
                current_input.redeem_script())
        else:
            raise RuntimeError('no valid sig_type')
        alt_tx = self.__class__(
            version=self.version,
            tx_ins=alt_tx_ins,
            tx_outs=self.tx_outs,
            locktime=self.locktime,
            prev_block_hash=self.prev_block_hash,
        )
        # add the hash_type
        result = alt_tx.serialize()
        result += int_to_little_endian(hash_type, 4)
        return int.from_bytes(double_sha256(result), 'big')


class SBTCTx(ForkTx):
    fork_block = 498888
    default_version = 2
    default_hash_type = 0x41
    sighash_append = b'\x04sbtc'

    def sig_hash_preimage_bip143(self, input_index, hash_type):
        '''Returns the integer representation of the hash that needs to get
        signed for index input_index'''
        tx_in = self.tx_ins[input_index]
        # per BIP143 spec
        s = int_to_little_endian(self.version, 4)
        s += self.hash_prevouts() + self.hash_sequence()
        s += tx_in.prev_tx[::-1] + int_to_little_endian(tx_in.prev_index, 4)
        if tx_in.is_segwit():
            h160 = tx_in.redeem_script()[-20:]
            ser = p2pkh_script(h160)
        else:
            ser = tx_in.script_pubkey().serialize()
        s += bytes([len(ser)]) + ser  # script pubkey
        s += int_to_little_endian(tx_in.value(), 8)
        s += int_to_little_endian(tx_in.sequence, 4)
        s += self.hash_outputs()
        s += int_to_little_endian(self.locktime, 4)
        s += int_to_little_endian(hash_type, 4)
        s += self.sighash_append
        return s

    def sig_hash(self, input_index, hash_type):
        '''Returns the integer representation of the hash that needs to get
        signed for index input_index'''
        # create a transaction serialization where
        # all the input script_sigs are blanked out
        alt_tx_ins = []
        for tx_in in self.tx_ins:
            alt_tx_ins.append(TxIn(
                prev_tx=tx_in.prev_tx,
                prev_index=tx_in.prev_index,
                script_sig=b'',
                sequence=tx_in.sequence,
                value=tx_in.value(),
                script_pubkey=tx_in.script_pubkey().serialize(),
            ))
        # replace the input's scriptSig with the scriptPubKey
        signing_input = alt_tx_ins[input_index]
        script_pubkey = signing_input.script_pubkey(self.testnet)
        sig_type = script_pubkey.type()
        if sig_type == 'p2pkh':
            signing_input.script_sig = script_pubkey
        elif sig_type == 'p2sh':
            current_input = self.tx_ins[input_index]
            signing_input.script_sig = Script.parse(
                current_input.redeem_script())
        else:
            raise RuntimeError('no valid sig_type')
        alt_tx = self.__class__(
            version=self.version,
            tx_ins=alt_tx_ins,
            tx_outs=self.tx_outs,
            locktime=self.locktime,
        )
        # add the hash_type
        result = alt_tx.serialize()
        result += int_to_little_endian(hash_type, 4)
        result += self.sighash_append
        return int.from_bytes(double_sha256(result), 'big')

    def sign(self, private_key, compressed=True):
        hash_type = 0x40 | SIGHASH_ALL
        for i in range(len(self.tx_ins)):
            if not self.sign_input(i, private_key, hash_type, compressed=compressed):
                raise RuntimeError('signing failed')

def signature(tx, input_index, private_key, point=curve):
    tx_in = tx.tx_ins[input_index]
    z = tx.sig_hash(input_index, SIGHASH_ALL)
    k = point.deterministic_k(z)
    r = (k*G).x.num
    k_inv = pow(k, N-2, N)
    s = (z + r*private_key.secret) * k_inv % N
    if s > N/2:
        s = N - s
    sig = Signature(r, s)
    der = sig.der()
    sig = der + bytes([SIGHASH_ALL])
    sec = private_key.point.sec(compressed=private_key.compressed)
    tx_in.script_sig = Script([sig, sec])
    return tx.verify_input(input_index)

class TxIn(LibBitcoinClient):

    def __init__(self, prev_tx, prev_index, script_sig, sequence, witness_program=b'\x00', value=None, script_pubkey=None):
        self.prev_tx = prev_tx
        self.prev_index = prev_index
        self.script_sig = Script.parse(script_sig)
        self.sequence = sequence
        self.witness_program = witness_program
        self._value = value
        if script_pubkey is None:
            self._script_pubkey = None
        else:
            self._script_pubkey = Script.parse(script_pubkey)

    def __repr__(self):
        return '{}:{}'.format(hexlify(self.prev_tx).decode('ascii'), self.prev_index)

    @classmethod
    def parse(cls, s):
        '''Takes a byte stream and parses the tx_input at the start
        return a TxIn object
        '''
        # s.read(n) will return n bytes
        # prev_tx is 32 bytes, little endian
        prev_tx = s.read(32)[::-1]
        # prev_index is 4 bytes, little endian, interpret as int
        prev_index = little_endian_to_int(s.read(4))
        # script_sig is a variable field (length followed by the data)
        # get the length by using read_varint(s)
        script_sig_length = read_varint(s)
        script_sig = s.read(script_sig_length)
        # sequence is 4 bytes, little-endian, interpret as int
        sequence = little_endian_to_int(s.read(4))
        # return an instance of the class (cls(...))
        return cls(prev_tx, prev_index, script_sig, sequence)

    def serialize(self):
        '''Returns the byte serialization of the transaction input'''
        # serialize prev_tx, little endian
        result = self.prev_tx[::-1]
        # serialize prev_index, 4 bytes, little endian
        result += int_to_little_endian(self.prev_index, 4)
        # get the scriptSig ready (use self.script_sig.serialize())
        raw_script_sig = self.script_sig.serialize()
        # encode_varint on the length of the scriptSig
        result += encode_varint(len(raw_script_sig))
        # add the scriptSig
        result += raw_script_sig
        # serialize sequence, 4 bytes, little endian
        result += int_to_little_endian(self.sequence, 4)
        return result

    def fetch_tx(self, testnet=False):
        if self.prev_tx not in self.cache:
            socket = self.get_socket(testnet=testnet)
            nonce = int_to_little_endian(random.randint(0, 2**32), 4)
            msg = b'blockchain.fetch_transaction2'
            socket.send(msg, zmq.SNDMORE)
            socket.send(nonce, zmq.SNDMORE)
            socket.send(self.prev_tx[::-1])
            response_msg = socket.recv()
            response_nonce = socket.recv()
            if response_msg != msg or response_nonce != nonce:
                raise RuntimeError('received wrong msg: {}'.format(
                    response_msg.decode('ascii')))
            response_tx = socket.recv()
            response_code = little_endian_to_int(response_tx[:4])
            if response_code != 0:
                raise RuntimeError('got code from server: {}'.format(response_code))
            stream = BytesIO(response_tx[4:])
            self.cache[self.prev_tx] = Tx.parse(stream)
        return self.cache[self.prev_tx]

    def value(self, testnet=False):
        '''Get the outpoint value by looking up the tx hash on libbitcoin server
        Returns the amount in satoshi
        '''
        if self._value is None:
            # use self.fetch_tx to get the transaction
            tx = self.fetch_tx(testnet=testnet)
            # get the output at self.prev_index
            # get the amount property
            self._value = tx.tx_outs[self.prev_index].amount
        return self._value

    def script_pubkey(self, testnet=False):
        '''Get the scriptPubKey by looking up the tx hash on libbitcoin server
        Returns the binary scriptpubkey
        '''
        if self._script_pubkey is None:
            # use self.fetch_tx to get the transaction
            tx = self.fetch_tx(testnet=testnet)
            # get the output at self.prev_index
            # get the script_pubkey property
            self._script_pubkey = tx.tx_outs[self.prev_index].script_pubkey
        return self._script_pubkey

    def der_signature(self, index=0):
        '''returns a DER format signature and hash_type if the script_sig
        has a signature'''
        if self.is_segwit():
            signature = self.witness_program[2:-34]
        else:
            signature = self.script_sig.der_signature(index=index)
        # last byte is the hash_type, rest is the signature
        return signature[:-1], signature[-1]

    def sec_pubkey(self, index=0):
        '''returns the SEC format public if the script_sig has one'''
        if self.is_segwit():
            return self.witness_program[-33:]
        else:
            return self.script_sig.sec_pubkey(index=index)

    def redeem_script(self):
        '''return the Redeem Script if there is one'''
        return self.script_sig.redeem_script()

    def is_segwit(self):
        if self.script_sig.type() != 'p2sh sig':
            return False
        redeem_script_raw = self.script_sig.redeem_script()
        if not redeem_script_raw:
            return False
        redeem_script = Script.parse(redeem_script_raw)
        return redeem_script.elements[0] == 0 and \
            type(redeem_script.elements[1]) == bytes and \
            len(redeem_script.elements[1]) == 20


class TxOut:

    def __init__(self, amount, script_pubkey):
        self.amount = amount
        self.script_pubkey = Script.parse(script_pubkey)

    def __repr__(self):
        return '{}:{}'.format(self.amount, self.script_pubkey.address())

    @classmethod
    def parse(cls, s):
        '''Takes a byte stream and parses the tx_output at the start
        return a TxOut object
        '''
        # s.read(n) will return n bytes
        # amount is 8 bytes, little endian, interpret as int
        amount = little_endian_to_int(s.read(8))
        # script_pubkey is a variable field (length followed by the data)
        # get the length by using read_varint(s)
        script_pubkey_length = read_varint(s)
        script_pubkey = s.read(script_pubkey_length)
        # return an instance of the class (cls(...))
        return cls(amount, script_pubkey)

    def serialize(self):
        '''Returns the byte serialization of the transaction output'''
        # serialize amount, 8 bytes, little endian
        result = int_to_little_endian(self.amount, 8)
        # get the scriptPubkey ready (use self.script_pubkey.serialize())
        raw_script_pubkey = self.script_pubkey.serialize()
        # encode_varint on the length of the scriptPubkey
        result += encode_varint(len(raw_script_pubkey))
        # add the scriptPubKey
        result += raw_script_pubkey
        return result
