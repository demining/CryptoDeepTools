# Initial value of P - field structure on elliptic curve
hex_value = "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"

# Transform to vertical position original value N
vertical_hex = [hex_value[i:i+2] for i in range(0, len(hex_value), 2)]

# Output the result
for hex_pair in vertical_hex:
    print(hex_pair)
