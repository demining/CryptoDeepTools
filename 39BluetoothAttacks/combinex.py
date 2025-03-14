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
........8a473044
....0220
...........5013dbed340fed00b6cb9778a713e1456b8138d00c3bcf6e7ff117be723335d0
....0220
........5018ddd352a6bc61b86afee5001a3e25d26a328a833c8f3812a15465f542c1c9
.....0141
.....04c2fb46f9eb06714f9feb33cd5fa063d2ca2bc8e67bf63a7f89afb0b1bb4ceaa40015fdd12ece2e82a36f9b8976dff279425ffb06f5ec97976899ca9c4785dc2f
....ffffffff
01
....d204000000000000
........1976
............a914
........a96d5c113e33cf253a49fc11494466a8e2fd464b
....88ac
00000000
"""

# Call the function and output the result
result = concatenate_hex_values(input_text)
print(result)
