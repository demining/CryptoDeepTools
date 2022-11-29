from lib.pyzil.account import Account
import base64
import binascii
import hashlib

pubkey  = b'02735993c003c904971ea72e34ed3ff8d9f8ba2bbcbdd57181c701256aa4493bfa'

addr = "0x" + base64.b16encode(hashlib.sha256(binascii.unhexlify(pubkey)).digest()[-20:]).decode()

account1 = Account(address=addr)
print("address: {}".format("0x" + account1.address))
print("address: {}".format(account1.bech32_address))
