# pip install ecdsa
import hashlib

def num_to_var_int(i):
    if i < 0xfd:
        return i.to_bytes(1, 'little')
    elif i <= 0xffff:
        return b'\xfd' + i.to_bytes(2, 'little')
    elif i <= 0xffffffff:
        return b'\xfe' + i.to_bytes(4, 'little')
    else:
        return b'\xff' + i.to_bytes(8, 'little')

def from_string_to_bytes(s):
    return s.encode('utf-8')

def bin_dbl_sha256(s):
    hash1 = hashlib.sha256(s).digest()
    hash2 = hashlib.sha256(hash1).digest()
    return hash2

def electrum_sig_hash(message):
    padded = b"\x18Bitcoin Signed Message:\n" + num_to_var_int(len(message)) + from_string_to_bytes(message)
    return bin_dbl_sha256(padded)

# Usage example
message = "Example message for signing"
message_hash = electrum_sig_hash(message)
print(f"Electrum message hash: {message_hash.hex()}")