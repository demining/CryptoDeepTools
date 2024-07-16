import requests

def get_bitcoin_address_info(address):
    url = f"https://api.blockcypher.com/v1/btc/main/addrs/{address}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        transactions = data.get('txrefs', [])
        final_balance = data.get('final_balance', 0)
        total_sent = data.get('total_sent', 0)
        total_received = data.get('total_received', 0)

        print(f"\nAddress: {address}")
        print(f"Transactions: {len(transactions)}")
        
        for tx in transactions:
            tx_hash = tx.get('tx_hash')
            fee = tx.get('fees', 'N/A')  # Fees might not be available in all cases
            print(f"\nTransaction ID: {tx_hash}")

        print(f"")
        print(f"Total Received: {total_received} satoshis")
        print(f"Total Sent: {total_sent} satoshis")
        print(f"Final Balance: {final_balance} satoshis")
        print(f"")

    else:
        print(f"Error fetching data for address {address}: {response.status_code}")

if __name__ == "__main__":
    bitcoin_address = input("Enter Bitcoin address: ")
    get_bitcoin_address_info(bitcoin_address)
