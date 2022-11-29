# EMIP-003 Python Implementation
# 2021 - Stephen Rothery

import hashlib
import binascii
from Crypto.Cipher import ChaCha20_Poly1305

def encryptWithPassword (password, saltHex, nonceHex, data):
    salt = binascii.unhexlify(saltHex)
    if len(salt) != 32:
        raise ValueError("Salt length must be 32 bytes")

    nonce = binascii.unhexlify(nonceHex)
    if len(nonce) != 12:
        raise ValueError("Salt length must be 12 bytes")

    key = hashlib.pbkdf2_hmac('sha512', password, salt, 19162, 32)
    cipher = ChaCha20_Poly1305.new(key=key, nonce=nonce)
    ciphertext, tag = cipher.encrypt_and_digest(data)

    return saltHex + nonceHex + tag.hex().encode() + ciphertext.hex().encode()

def decryptWithPassword(password, ciphertextHex):
    saltHex = ciphertextHex[:64]
    nonceHex = ciphertextHex[64:88]
    tagHex = ciphertextHex[88:120]
    ciphertextHex = ciphertextHex[120:]

    salt = binascii.unhexlify(saltHex)
    nonce = binascii.unhexlify(nonceHex)
    tag = binascii.unhexlify(tagHex)
    ciphertext = binascii.unhexlify(ciphertextHex)

    key = hashlib.pbkdf2_hmac('sha512', password, salt, 19162, 32)
    cipher = ChaCha20_Poly1305.new(key=key, nonce=nonce)
    plaintext = cipher.decrypt_and_verify(ciphertext, tag)

    return plaintext




