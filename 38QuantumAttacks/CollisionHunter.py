import hashlib
import random

def simple_hash(data, modulus):
    """
    Simplified hash function for demonstration.
    DO NOT USE IN PRODUCTION.
    """
    data_bytes = str(data).encode('utf-8')  # Convert to bytes
    hash_value = int(hashlib.sha256(data_bytes).hexdigest(), 16) % modulus
    return hash_value

def find_collision(hash_function, modulus, max_attempts=100000):
    """
    Finds a collision for a given hash function and modulus.
    """
    seen_hashes = {}
    for i in range(max_attempts):
        data = random.randint(0, modulus * 10)  # Generate random data
        hash_value = hash_function(data, modulus)

        if hash_value in seen_hashes:
            data1 = seen_hashes[hash_value]
            data2 = data
            print(f"Collision found: data1={data1}, data2={data2}, hash={hash_value}")
            return data1, data2, hash_value
        else:
            seen_hashes[hash_value] = data

    print("No collision found within the specified number of attempts.")
    return None

# Example usage
modulus = 256  # Size of the hash table (for example)
collision = find_collision(simple_hash, modulus)

if collision:
    data1, data2, hash_value = collision
    print(f"Data 1: {data1}, Data 2: {data2}, Hash: {hash_value}")
