import random
import time
from hashlib import sha256

def random_string(length):
    return ''.join(random.choice('0123456789abcdef') for i in range(length))

def random_key():
    # Gotta be secure after that java.SecureRandom fiasco...
    entropy = random_string(32) \
        + str(random.randrange(2**256)) \
        + str(int(time.time() * 1000000))
    return sha256(entropy.encode('utf-8')).hexdigest()

# Example usage: generate a private key
private_key = random_key()
print("Generated Private Key:", private_key)