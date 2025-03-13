# pip install ecdsa
import ecdsa

def has_invalid_privkey(privkey: int) -> bool:
    """
    Checks if a private key is invalid, based on the absence of a lower bound check.

    Args:
        privkey: The private key to check.

    Returns:
        True if the private key is invalid (<= 0 or >= N), False otherwise.
    """
    # Order of the secp256k1 elliptic curve used by Bitcoin
    N = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141

    if privkey >= N:  # Check only the upper bound
        raise Exception("Invalid privkey")

    if privkey <= 0:  # Lower bound check missing
        return True

    return False

# Example usage
privkey = 0  # Invalid private key
is_invalid = has_invalid_privkey(privkey)

if is_invalid:
    print("Invalid private key!")
else:
    print("Valid private key.")
