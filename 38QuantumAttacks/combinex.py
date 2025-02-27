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
...........97255916a3cc4f69d4fa16f68219d0b1798d392fb0dce5fb0a358510df8cabe0
....0220
........1014656120e0a6e7c8c4a79ee22b3cdd4f55435e3e9bf3ab7287ae16858dd9d5
.....0141
.....049b4069d8237fae8f2417c71c5512ec1b0547b5597474480cc28ea1bbfeecaab8b90fdec161ad6ef4378f274a60b900452431533596bf3bd23e01202ebf679461
....ffffffff
01
....d204000000000000
........1976
............a914
........d77522a2b18e0064aba02ca7f864a5bb22998259
....88ac
00000000
"""

# Call the function and output the result
result = concatenate_hex_values(input_text)
print(result)
