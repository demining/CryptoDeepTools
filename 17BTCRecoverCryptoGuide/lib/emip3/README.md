# emip3-python
A Python Implementation of [EMIP-003](https://github.com/Emurgo/EmIPs/blob/master/specs/emip-003.md) (Encryption/Decryption used in the Yoroi Cadano Wallet)

It  follows the javascript implementation so as to be able to take data directly from Yoroi wallet files, so functions take things like salt, nonce as hexidecimal repesentations and return a hexidecimal representation of the ciphertext. (Data and password can be anything, so these are just take as-is)

This was created to be used as part of [BTCRecover](https://github.com/3rdIteration/btcrecover)

## Requires
This require Python 3.5+ and requires pyCryptoDome to be installed and working on your system. (For ChaCha20_Poly1305) Any pure-python implementation of this could also be easily substituted.

## Usage

### Encryption
`encryptWithPassword (password, saltHex, nonceHex, data)`

### Decryption
`decryptWithPassword(password, ciphertextHex)`

### Example 
See test.py