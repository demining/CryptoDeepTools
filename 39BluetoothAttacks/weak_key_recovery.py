# pip install pycryptodome
from hashlib import sha256
from Crypto.PublicKey import ECC
from Crypto.Signature import DSS
from Crypto.Hash import SHA256
import secrets

# Elliptic curve parameters secp256k1
# PyCryptodome does not provide a convenient way to directly specify the parameters of the secp256k1 curve.
# Therefore, we will use the standard ECC curve.
# For production code, be careful when choosing the curve and its parameters.

def hash_to_int(msghash):
    return int(sha256(msghash.encode('utf-8')).hexdigest(), 16)

def deterministic_generate_k(msghash, priv_key_int):
    k = 0
    while k == 0:
        v = b'\x01' * 32
        k = b'\x00' * 32
        k = sha256(v + k + priv_key_int.to_bytes(32, 'big') + msghash.encode('utf-8')).digest()
        v = sha256(v + k + priv_key_int.to_bytes(32, 'big') + msghash.encode('utf-8')).digest()
        k = sha256(v + k + priv_key_int.to_bytes(32, 'big') + msghash.encode('utf-8')).digest()
        v = sha256(v + k + priv_key_int.to_bytes(32, 'big') + msghash.encode('utf-8')).digest()
        k = int.from_bytes(sha256(v + k).digest(), 'big') # % N  # Removed % N, since N is no longer a defined constant
    return k

def ecdsa_raw_sign(msghash, priv_key_int):
    z = hash_to_int(msghash)
    k = deterministic_generate_k(msghash, priv_key_int)

    # Generate private key object
    key = ECC.construct(curve='P-256', d=priv_key_int)

    # Calculate point R = kG
    # PyCryptodome does not provide direct access to the coordinates of point R
    # Therefore, the signature will be calculated in a different way, using DSS

    # s = pow(k, -1, N) * (z + r * private_key_int) % N # N is no longer defined
    # v = 27 + ((y % 2) ^ (0 if s * 2 < N else 1)) # y is not available

    return key, z, k # Return the key, hash, and k for further use in signing

def recover_pubkey(msghash, signature, key):
    # WARNING: This is a VERY SIMPLIFIED example of public key recovery.
    # In real life, ECDSA public key recovery is a complex process.
    # This code is intended only to demonstrate the principle.

    # PyCryptodome does not have a simple way to recover PublicKey from r and s directly.
    # This code does not perform real recovery, but creates a new PublicKey from the private key.
    # In a real attack scenario, you need to try to guess the y-coordinate to get a valid PublicKey.
    # But this requires a more complex logic to work with the elliptic curve.
    return key.public_key()

def emulate_attack(msghash, priv):
    # 1. Sign the message
    priv_key_int = int(priv, 16)
    key, z, k = ecdsa_raw_sign(msghash, priv_key_int)
    signer = DSS.new(key, 'fips-186-3')
    hash_obj = SHA256.new(msghash.encode('utf-8'))
    signature = signer.sign(hash_obj)

    # 2. Attempt to recover the public key (incorrectly)
    Q = recover_pubkey(msghash, signature, key)

    # 3. Simulate a situation where the Y coordinate is recovered incorrectly
    # In a real attack scenario, an attacker will try to iterate through different y-coordinates.
    # In this example, we simply change the x-coordinate slightly
    tampered_key = ECC.construct(curve='P-256', d=priv_key_int + 1)  # EXAMPLE! DO NOT DO THIS IN REAL CODE!
    Q_tampered = tampered_key.public_key()

    return Q, Q_tampered

# Example usage
msghash = "Пример сообщения"

# Generate a random private key
private_key = ECC.generate(curve='P-256')
priv = hex(private_key.d)  # Store private key as a hex string

# Example usage
Q, Q_tampered = emulate_attack(msghash, priv)

print("Original Public Key:", Q)
print("Tampered Public Key:", Q_tampered)
print("Are the keys equal?", Q == Q_tampered)