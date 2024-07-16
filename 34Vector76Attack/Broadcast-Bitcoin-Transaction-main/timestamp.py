import requests

def get_block_timestamp(txid):
    # URL for getting transaction information 
    tx_url = f"https://api.blockcypher.com/v1/btc/main/txs/{txid}"
    
    # Request transaction information
    response = requests.get(tx_url)
    if response.status_code != 200:
        return f"Error getting transaction data: {response.status_code}"
    
    tx_data = response.json()
    
    # Get block ID from transaction data 
    block_hash = tx_data.get('block_hash')
    if not block_hash:
        return "Transaction not found or not included in block yet."
    
    # URL for getting block information 
    block_url = f"https://api.blockcypher.com/v1/btc/main/blocks/{block_hash}"
    
    # Request block information 
    response = requests.get(block_url)
    if response.status_code != 200:
        return f"Error getting block data: {response.status_code}"
    
    block_data = response.json()
    
    # Get block creation time 
    block_time = block_data.get('time')
    if not block_time:
        return "Failed to get block creation time."
    
    return f"Block creation time: {block_time}"

# Example of usage 
txid = input("Enter TXID: ")
print(get_block_timestamp(txid))
