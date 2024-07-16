import requests
import hashlib

def get_transaction(txid):
    url = f'https://api.blockcypher.com/v1/btc/main/txs/{txid}'
    response = requests.get(url)
    return response.json()

def get_block(block_hash):
    url = f'https://api.blockcypher.com/v1/btc/main/blocks/{block_hash}'
    response = requests.get(url)
    return response.json()

def double_sha256(data):
    return hashlib.sha256(hashlib.sha256(data.encode('utf-8')).digest()).hexdigest()

def merkle_root(transactions):
    if len(transactions) == 1:
        return transactions[0]
    
    new_level = []
    for i in range(0, len(transactions), 2):
        left = transactions[i]
        right = transactions[i + 1] if i + 1 < len(transactions) else transactions[i]
        new_level.append(double_sha256(left + right))
    
    return merkle_root(new_level)

def main(txid):
    tx_data = get_transaction(txid)
    block_hash = tx_data['block_hash']
    block_data = get_block(block_hash)
    transactions = block_data['txids']
    
    root = merkle_root(transactions)
    print(f'Merkle Root: {root}')

if __name__ == '__main__':
    txid = input('Enter TXID: ')
    main(txid)
