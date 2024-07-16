from io import BytesIO
from secp256k1 import *
from sighash import *

pk = PrivateKey.parse("5J64pq77XjeacCezwmAr2V1s7snvvJkuAz8sENxw7xCkikceV6e")
pk.address()
dust_tx = bytes.fromhex("2a29fdb4e188f827da3c3175856b3ed95819b323bb303a46b8036534e78c76db")
dust_index = 0
send_dust = "1LdRcdxfbSnmCYYNdeYpUnztiYzVfBEQeC"
tx_in = TxIn(dust_tx, dust_index, b'', 0xffffffff)
tx_in._script_pubkey = Tx.get_address_data(pk.address())['script_pubkey']
tx_in._value = 30352330
tx_ins = [ tx_in ]
tx_outs = [
    TxOut(600, Tx.get_address_data(send_dust)['script_pubkey'].serialize()),
    TxOut(30351530, Tx.get_address_data(pk.address())['script_pubkey'].serialize())
]
tx = Tx(1, tx_ins, tx_outs, 0, testnet=True)
signature(tx, 0, pk)
tx.serialize().hex()

print("\n--------------------------------------\n")
print("Your Bitcoin Address:            " + pk.address())
print("Bitcoin Address for sending BTC: " + send_dust)
print("\n--------------------------------------\n")
print("Bitcoin Transaction RawTX:\n")
print(tx.serialize().hex())
print("\n--------------------------------------\n")
print("Website for Broadcast Bitcoin Transaction:")
print("https://broad-casts.ru")
print("\n--------------------------------------\n")
f = open("RawTX.txt", 'w')
f.write("" + tx.serialize().hex() + "" + "\n")
f.close()
