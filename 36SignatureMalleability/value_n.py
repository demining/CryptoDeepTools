# The initial value N is the order of the group of points on the elliptic curve
hex_value = "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"

# Transform to vertical position original value N
vertical_hex = [hex_value[i:i+2] for i in range(0, len(hex_value), 2)]

# Output the result
for hex_pair in vertical_hex:
    print(hex_pair)
