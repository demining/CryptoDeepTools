import requests

def get_previous_block_hash(txid):
    # URL to get transaction information
    tx_url = f"https://api.blockcypher.com/v1/btc/main/txs/{txid}"
    
    # Request transaction information
    response = requests.get(tx_url)
    
    if response.status_code == 200:
        tx_data = response.json()
        
        # Get the hash of the block the transaction is in
        block_hash = tx_data.get('block_hash')
        
        if block_hash:
            # URL to get information about the block
            block_url = f"https://api.blockcypher.com/v1/btc/main/blocks/{block_hash}"
            
            # Request information about a block
            response = requests.get(block_url)
            
            if response.status_code == 200:
                block_data = response.json()
                
                # Get the hash of the previous block
                previous_block_hash = block_data.get('prev_block')
                
                return previous_block_hash
            else:
                print("Error getting block information")
        else:
            print("Transaction not included in block")
    else:
        print("Error getting transaction information")

    return None

txid = input("Enter TXID: ")
previous_block_hash = get_previous_block_hash(txid)

if previous_block_hash:
    print(f"Previous block hash: {previous_block_hash}")
else:
    print("Unable to find hash of previous block")
