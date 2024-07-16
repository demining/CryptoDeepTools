from binascii import hexlify, unhexlify

import hashlib
import math


SIGHASH_ALL = 1
SIGHASH_NONE = 2
SIGHASH_SINGLE = 3
BASE58_ALPHABET = b'123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'


def hash160(s):
    return hashlib.new('ripemd160', hashlib.sha256(s).digest()).digest()


def double_sha256(s):
    return hashlib.sha256(hashlib.sha256(s).digest()).digest()


def encode_base58(s):
    # determine how many 0 bytes (b'\x00') s starts with
    count = 0
    for c in s:
        if c == 0:
            count += 1
        else:
            break
    prefix = b'1' * count
    # convert from binary to hex, then hex to integer
    num = int.from_bytes(s, 'big')
    result = bytearray()
    while num > 0:
        num, mod = divmod(num, 58)
        result.insert(0, BASE58_ALPHABET[mod])

    return prefix + bytes(result)


def encode_base58_checksum(s):
    return encode_base58(s + double_sha256(s)[:4]).decode('ascii')


def decode_base58(s, num_bytes=25, strip_leading_zeros=False):
    num = 0
    for c in s.encode('ascii'):
        num *= 58
        num += BASE58_ALPHABET.index(c)
    combined = num.to_bytes(num_bytes, byteorder='big')
    if strip_leading_zeros:
        while combined[0] == 0:
            combined = combined[1:]
    checksum = combined[-4:]
    if double_sha256(combined[:-4])[:4] != checksum:
        raise ValueError('bad address: {} {}'.format(
            checksum, double_sha256(combined)[:4]))
    return combined[:-4]


def p2pkh_script(h160):
    '''Takes a hash160 and returns the scriptPubKey'''
    return b'\x76\xa9\x14' + h160 + b'\x88\xac'


def p2sh_script(h160):
    '''Takes a hash160 and returns the scriptPubKey'''
    return b'\xa9\x14' + h160 + b'\x87'


def read_varint(s):
    '''read_varint reads a variable integer from a stream'''
    i = s.read(1)[0]
    if i == 0xfd:
        # 0xfd means the next two bytes are the number
        return little_endian_to_int(s.read(2))
    elif i == 0xfe:
        # 0xfe means the next four bytes are the number
        return little_endian_to_int(s.read(4))
    elif i == 0xff:
        # 0xff means the next eight bytes are the number
        return little_endian_to_int(s.read(8))
    else:
        # anything else is just the integer
        return i


def encode_varint(i):
    '''encodes an integer as a varint'''
    if i < 0xfd:
        return bytes([i])
    elif i < 0x10000:
        return b'\xfd' + int_to_little_endian(i, 2)
    elif i < 0x100000000:
        return b'\xfe' + int_to_little_endian(i, 4)
    elif i < 0x10000000000000000:
        return b'\xff' + int_to_little_endian(i, 8)
    else:
        raise ValueError('integer too large: {}'.format(i))


def flip_endian(h):
    '''flip_endian takes a hex string and flips the endianness
    Returns a hexadecimal string
    '''
    # convert hex to binary (use unhexlify)
    b = unhexlify(h)
    # reverse the binary (use [::-1])
    b_rev = b[::-1]
    # convert binary to hex (use hexlify and then .decode('ascii'))
    return hexlify(b_rev).decode('ascii')


def little_endian_to_int(b):
    '''little_endian_to_int takes byte sequence as a little-endian number.
    Returns an integer'''
    # use the from_bytes method of int
    return int.from_bytes(b, 'little')


def int_to_little_endian(n, length):
    '''endian_to_little_endian takes an integer and returns the little-endian
    byte sequence of length'''
    # use the to_bytes method of n
    return n.to_bytes(length, 'little')


def h160_to_p2pkh_address(h160, prefix=b'\x00'):
    '''Takes a byte sequence hash160 and returns a p2pkh address string'''
    # p2pkh has a prefix of b'\x00' for mainnet, b'\x6f' for testnet
    return encode_base58_checksum(prefix + h160)


def h160_to_p2sh_address(h160, prefix=b'\x05'):
    '''Takes a byte sequence hash160 and returns a p2sh address string'''
    # p2sh has a prefix of b'\x05' for mainnet, b'\xc0' for testnet
    return encode_base58_checksum(prefix + h160)


def merkle_parent(hash1, hash2):
    '''Takes the binary hashes and calculates the double-sha256'''
    # return the double-sha256 of hash1 + hash2
    return double_sha256(hash1 + hash2)


def merkle_parent_level(hash_list):
    '''Takes a list of binary hashes and returns a list that's half
    the length'''
    # Exercise 2.2: if the list has exactly 1 element raise an error
    if len(hash_list) == 1:
        raise RuntimeError('Cannot take a parent level with only 1 item')
    # Exercise 3.2: if the list has an odd number of elements, duplicate the
    #               last one and put it at the end so it has an even number
    #               of elements
    if len(hash_list) % 2 == 1:
        hash_list.append(hash_list[-1])
    # Exercise 2.2: initialize next level
    parent_level = []
    # Exercise 2.2: loop over every pair
    #               (use: for i in range(0, len(hash_list), 2))
    for i in range(0, len(hash_list), 2):
        # Exercise 2.2: get the merkle parent of i and i+1 hashes
        parent = merkle_parent(hash_list[i], hash_list[i+1])
        # Exercise 2.2: append parent to parent level
        parent_level.append(parent)
    # Exercise 2.2: return parent level
    return parent_level


def merkle_root(hash_list):
    '''Takes a list of binary hashes and returns the merkle root
    '''
    # current level starts as hash_list
    current_level = hash_list
    # loop until there's exactly 1 element
    while len(current_level) > 1:
        # current level becomes the merkle parent level
        current_level = merkle_parent_level(current_level)
    # return the 1st item of current_level
    return current_level[0]


def merkle_path(index, total):
    '''Returns a list of indexes up the merkle tree of the node at index if
    there are a total number of nodes'''
    # initialize the path
    path = []
    # calculate number of levels (math.ceil(math.log(total, 2)))
    num_levels = math.ceil(math.log(total, 2))
    # loop through each level
    for _ in range(num_levels):
        # add the index to path
        path.append(index)
        # index becomes integer divide by 2 (use: index = index // 2)
        index = index // 2
    # return the path
    return path
