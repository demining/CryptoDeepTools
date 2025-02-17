import hashlib

def double_sha256(data):
    """
    Performs double SHA256 hashing on the input data.
    """
    # First pass of SHA256
    hash1 = hashlib.sha256(data).digest()
    # Second pass of SHA256
    hash2 = hashlib.sha256(hash1).digest()
    return hash2

# Example usage
data = b"Example data for double SHA256"  # Data must be represented as bytes
hashed_data = double_sha256(data)
print(hashed_data.hex())  # Output in hexadecimal format
