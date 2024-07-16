import requests

def get_transaction(txid):
    url = f"https://api.blockcypher.com/v1/btc/main/txs/{txid}"
    response = requests.get(url)
    
    if response.status_code == 200:
        return response.json()
    else:
        return None

def main():
    txid = input("Enter your TX: ")
    transaction = get_transaction(txid)
    
    if transaction:
        print("Transaction details:")
        print(transaction)
        print("Decoder Transactions into the Bitcoin Network: https://broad-casts.ru/bitcoin-network")  
        
    else:
        print("Transaction not found or an error occurred.")

if __name__ == "__main__":
    main()