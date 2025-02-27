# Define a function to combine HEX values
def concatenate_hex_values(input_text):
    # Remove spaces and commas, then split the text into lines
    lines = input_text.replace('.', '').splitlines()
    # Combine all lines into one line, filtering out empty lines
    hex_string = ''.join(line.strip() for line in lines if line.strip())
    return hex_string

# Input Data of vulnerable RawTX
input_text = """
01000000
....01
........0dbc696374c8d7ca61f32710e03aaedcb7a4f2428074814d0e1f4f7f5c1e5935
............00000000
........8b483045
....0221
...........00
...........aafe80d17b0d30de09cbe39a85514aaae0a388135987ab80207e1eed3c915280
....0220
........0d46fb28a4b30599d33325aa8b7633dd0f584f8125bb2e136c88a3e91a6f4238
.....0141
.....04ea7c9e85d4fb089e0b2901cd5c77f3149aa4cf711ed29a3318a4e153a67ea9cd1a22c24c8e05b66eb122db74d26fddf2cb184033fb586743ea330e15eeb8240c
....ffffffff
01
....d204000000000000
........1976
............a914
........e361516c3163a3d997d7b270c4378816a86343de
....88ac
00000000
"""

# Call the function and output the result
result = concatenate_hex_values(input_text)
print(result)
