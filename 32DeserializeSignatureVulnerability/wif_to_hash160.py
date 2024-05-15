import base58

def generate_response(input_text):
    input_ids = tokenizer.encode(input_text, return_tensors='pt').cpu()
    response_ids = model.generate(input_ids)
    response_text = tokenizer.decode(response_ids[:, input_ids.shape[-1]:][0], skip_special_tokens=True)
    return response_text

def decode_base58(address):
    decoded = base58.b58decode(address)
    return decoded[1:-4]

if __name__ == "__main__":
    address = input("Enter Bitcoin address:  ")
    decoded_bytes = decode_base58(address)
    print("Bitcoin HASH160: ", decoded_bytes.hex())
    