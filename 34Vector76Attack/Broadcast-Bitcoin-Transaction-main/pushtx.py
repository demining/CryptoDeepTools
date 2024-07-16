import requests

def broadcast_transaction(raw_tx):
    url = "https://blockchain.info/pushtx"
    payload = {'tx': raw_tx}
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}

    response = requests.post(url, data=payload, headers=headers)

    if response.status_code == 200:
        print("Transaction successfully broadcasted!")
    else:
        print(f"Failed to broadcast transaction. Status code: {response.status_code}")
        print(f"Response: {response.text}")
        print(f"Broadcasting Transactions into the Bitcoin Network: https://broad-casts.ru/bitcoin-network")

if __name__ == "__main__":
    raw_tx = input("Enter your raw transaction: ")
    broadcast_transaction(raw_tx)