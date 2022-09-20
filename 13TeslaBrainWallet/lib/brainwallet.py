#!/usr/bin/python

import ecdsa 
import hashlib
import binascii
from secp256k1 import secp256k1

# https://en.bitcoin.it/wiki/Brainwallet
def generate_address(private_key):
    pko = ecdsa.SigningKey.from_secret_exponent(private_key, secp256k1())

    pubkey = binascii.hexlify(pko.get_verifying_key().to_string())
    pubkey2 = hashlib.sha256(binascii.unhexlify('04' + pubkey)).hexdigest()
    pubkey3 = hashlib.new('ripemd160', binascii.unhexlify(pubkey2)).hexdigest()
    pubkey4 = hashlib.sha256(binascii.unhexlify('00' + pubkey3)).hexdigest()
    pubkey5 = hashlib.sha256(binascii.unhexlify(pubkey4)).hexdigest()
    pubkey6 = pubkey3+pubkey5[:8]
    pubnum = int(pubkey6, 16)
    pubnumlist = []

    while pubnum != 0:
        pubnumlist.append(pubnum % 58);
        pubnum /= 58

    # base58
    address=''
    b58_digits = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
    for l in [b58_digits[x] for x in pubnumlist]:
        address = l + address

    return '1' + address

def public_key(src):
    privatekey = (int(hashlib.sha256(src).hexdigest(), 16))
    return generate_address(privatekey)

def private_key(src):
    privatekey = hashlib.sha256(src).hexdigest()
    return str(privatekey)

