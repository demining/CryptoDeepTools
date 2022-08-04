import hashlib
import base58
 
def hash160(hex_str):
    sha = hashlib.sha256()
    rip = hashlib.new('ripemd160')
    sha.update(hex_str)
    rip.update(sha.digest())
    return rip.hexdigest()  # .hexdigest() is hex ASCII
 
 
pub_keys = open('pubkey.txt', 'r', encoding='utf-8')
new_file = open('BitcoinAddress.txt', 'a', encoding='utf-8')
compress_pubkey = False
 
for pub_key in pub_keys:
    pub_key = pub_key.replace('\n', '')
    if compress_pubkey:
        if (ord(bytearray.fromhex(pub_key[-2:])) % 2 == 0):
            pubkey_compressed = '02'
        else:
            pubkey_compressed = '03'
        pubkey_compressed += pub_key[2:66]
        hex_str = bytearray.fromhex(pubkey_compressed)
    else:
        hex_str = bytearray.fromhex(pub_key)
 
    # Obtain key:
 
    key_hash = '00' + hash160(hex_str)
 
    # Obtain signature:
 
    sha = hashlib.sha256()
    sha.update(bytearray.fromhex(key_hash))
    checksum = sha.digest()
    sha = hashlib.sha256()
    sha.update(checksum)
    checksum = sha.hexdigest()[0:8]
 
#   new_file.write("" + (base58.b58encode(bytes(bytearray.fromhex(key_hash + checksum)))).decode('utf-8'))
    new_file.write((base58.b58encode(bytes(bytearray.fromhex(key_hash + checksum)))).decode('utf-8') + "\n")
pub_keys.close()
new_file.close()