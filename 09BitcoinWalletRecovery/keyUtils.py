import ecdsa
import ecdsa.der
import ecdsa.util
import hashlib
import unittest
import random
import re
import struct
import utils
import base58

# https://en.bitcoin.it/wiki/Wallet_import_format

def privateKeyToWif(key_hex):    
    return base58.b58encode_check(0x80, key_hex.decode('hex'))


def wifToPrivateKey(s):
    b = base58.bs58decode_check(s)
    return b.encode('hex')


# Input is a hex-encoded, DER-encoded signature

# Output is a 64-byte hex-encoded signature

def derSigToHexSig(s):
    s, junk = ecdsa.der.remove_sequence(s.decode('hex'))
    if junk != '':
        print('JUNK', junk.encode('hex'))
    assert(junk == '')
    x, s = ecdsa.der.remove_integer(s)
    y, s = ecdsa.der.remove_integer(s)
    return ('%064x%064x' % (x, y))


# Input is hex string

def privateKeyToPublicKey(s):
    sk = ecdsa.SigningKey.from_string(s.decode('hex'), curve=ecdsa.SECP256k1)
    vk = sk.verifying_key
    return ('\04' + sk.verifying_key.to_string()).encode('hex')



# Input is hex string

def keyToAddr(s):
    return pubKeyToAddr(privateKeyToPublicKey(s))



def pubKeyToAddr(s):
    ripemd160 = hashlib.new('ripemd160')
    ripemd160.update(hashlib.sha256(s.decode('hex')).digest())
    return base58.b58encode_check(ripemd160.digest())



def addrHashToScriptPubKey(b58str):
    assert(len(b58str) == 34)
    # 76     A9      14 (20 bytes)                                 88             AC
    return ('76a914' + utils.base58CheckDecode(b58str).encode('hex') + '88ac')
    

class TestKey(unittest.TestCase):

    def test_privateKeyToWif(self):
        w = privateKeyToWif("0C28FCA386C7A227600B2FE50B7CAE11EC86D3BF1FBE471BE89827E19D72AA1D")
        self.assertEqual(w, "5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ")

    def test_WifToPrivateKey(self):
        k = wifToPrivateKey("5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ")
        self.assertEqual(k.upper(), "0C28FCA386C7A227600B2FE50B7CAE11EC86D3BF1FBE471BE89827E19D72AA1D")

    def test_keyToAddr(self):
        a = keyToAddr("18E14A7B6A307F426A94F8114701E7C8E774E7F9A47E2C2035DB29A206321725")
        self.assertEqual(a, "16UwLL9Risc3QfPqBUvKofHmBQ7wMtjvM")

    def test_pairs1(self):
        #blockchain.info
        wallet_addr = "1EyBEhrriJeghX4iqATQEWDq38Ae8ubBJe"
        wallet_private = "8tnArBrrp4KHVjv8WA6HiX4ev56WDhqGA16XJCHJzhNH"
        wallet_key = utils.base256encode(utils.base58decode(wallet_private)).encode('hex')
        self.assertEqual(keyToAddr(wallet_key), wallet_addr)
        # can import into multibit
        bitcoin_qt = "5Jhw8B9J9QLaMmcBRfz7x8KkD9gwbNoyBMfWyANqiDwm3FFwgGC"
        wallet_key = utils.base58CheckDecode(bitcoin_qt).encode('hex')
        self.assertEqual(keyToAddr(wallet_key), wallet_addr)
        wallet_key = "754580de93eea21579441b58e0c9b09f54f6005fc71135f5cfac027394b22caa"
        self.assertEqual(keyToAddr(wallet_key), wallet_addr)

    def test_pairs2(self):
        #http://gobittest.appspot.com/Address
        # Cannot import into multibit
        wallet_private = "BB08A897EA1E422F989D36DE8D8186D8406BE25E577FD2A66976BF172325CDC9"
        wallet_addr = "1MZ1nxFpvUgaPYYWaLPkLGAtKjRqcCwbGh"
        self.assertEqual(keyToAddr(wallet_private), wallet_addr)

    def test_pairs3(self):
        # Can import into multibit
        # http://bitaddress.org
        wallet_private = "5J8PhneLEaL9qEPvW5voRgrELeXcmM12B6FbiA9wZAwDMnJMb2L"
        wallet_addr = "1Q2SuNLDXDtda7DPnBTocQWtUg1v4xZMrV"
        self.assertEqual(keyToAddr(utils.base58CheckDecode(wallet_private).encode('hex')), wallet_addr)

    def test_der(self):
        self.assertEqual(ecdsa.der.encode_sequence(
            ecdsa.der.encode_integer(0x123456),
            ecdsa.der.encode_integer(0x89abcd)).encode('hex'),
                         "300b020312345602040089abcd")

    def test_derSigToHexSig(self):
        derSig = "304502204c01fee2d724fb2e34930c658f585d49be2f6ac87c126506c0179e6977716093022100faad0afd3ae536cfe11f83afaba9a8914fc0e70d4c6d1495333b2fb3df6e8cae"
        self.assertEqual("4c01fee2d724fb2e34930c658f585d49be2f6ac87c126506c0179e6977716093faad0afd3ae536cfe11f83afaba9a8914fc0e70d4c6d1495333b2fb3df6e8cae",
                         derSigToHexSig(derSig))
        txn =          ("0100000001a97830933769fe33c6155286ffae34db44c6b8783a2d8ca52ebee6414d399ec300000000" + "8a47" +                        "304402202c2e1a746c556546f2c959e92f2d0bd2678274823cc55e11628284e4a13016f80220797e716835f9dbcddb752cd0115a970a022ea6f2d8edafff6e087f928e41baac01" + "41" +   "04392b964e911955ed50e4e368a9476bc3f9dcc134280e15636430eb91145dab739f0d68b82cf33003379d885a0b212ac95e9cddfd2d391807934d25995468bc55" +                      "ffffffff02015f0000000000001976a914c8e90996c7c6080ee06284600c684ed904d14c5c88ac204e000000000000" +                        "1976a914348514b329fda7bd33c7b2336cf7cd1fc9544c0588ac00000000")
        myTxn_forSig =("0100000001a97830933769fe33c6155286ffae34db44c6b8783a2d8ca52ebee6414d399ec300000000" + "1976a914" + "167c74f7491fe552ce9e1912810a984355b8ee07" + "88ac" +  "ffffffff02015f0000000000001976a914c8e90996c7c6080ee06284600c684ed904d14c5c88ac204e000000000000" +"1976a914348514b329fda7bd33c7b2336cf7cd1fc9544c0588ac00000000" + "01000000")
        public_key = "04392b964e911955ed50e4e368a9476bc3f9dcc134280e15636430eb91145dab739f0d68b82cf33003379d885a0b212ac95e9cddfd2d391807934d25995468bc55"
        hashToSign = hashlib.sha256(hashlib.sha256(myTxn_forSig.decode('hex')).digest()).digest().encode('hex')
        sig_der =       "304402202c2e1a746c556546f2c959e92f2d0bd2678274823cc55e11628284e4a13016f80220797e716835f9dbcddb752cd0115a970a022ea6f2d8edafff6e087f928e41baac01"[:-2]
        sig = derSigToHexSig(sig_der)
        vk = ecdsa.VerifyingKey.from_string(public_key[2:].decode('hex'), curve=ecdsa.SECP256k1)
        self.assertEquals(vk.verify_digest(sig.decode('hex'), hashToSign.decode('hex')), True)
        #OP_DUP OP_HASH160 167c74f7491fe552ce9e1912810a984355b8ee07 OP_EQUALVERIFY OP_CHECKSIG

if __name__ == '__main__':
    unittest.main()