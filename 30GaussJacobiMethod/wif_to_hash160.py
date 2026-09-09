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
    address = input("1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU:  ")
    decoded_bytes = decode_base58(address)
    print("f6f5431d25bbf7b12e8add9af5e3475c44a0a5b8: ", decoded_bytes.hex())
    
