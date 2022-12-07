# CryptoDeepTools

Crypto Deep Tools a set of scripts for detailed cryptanalysis of the Blockchain network in cryptocurrency Bitcoin


## [01BlockchainGoogleDrive](https://github.com/demining/CryptoDeepTools/tree/main/01BlockchainGoogleDrive)

* Parsing Blockchain in Google Drive

* Tutorial: https://youtu.be/ECAPypsmMQs
* Tutorial: https://cryptodeep.ru/blockchain-google-drive

---

## [02BreakECDSAcryptography](https://github.com/demining/CryptoDeepTools/tree/main/02BreakECDSAcryptography)

* Analyze the data from the file "RawTX.json". Script breakECDSA.py reconstructs the unsigned message for each to find the Z value. The result is returned as R, S, Z, PUBKEY for each of the inputs present in the data in the "RawTX.json" file.

* Tutorial: https://youtu.be/BYd-cuFRZmM
* Tutorial: https://cryptodeep.ru/break-ecdsa-cryptography

---

## [03CheckBitcoinAddressBalance](https://github.com/demining/CryptoDeepTools/tree/main/03CheckBitcoinAddressBalance)

* Check Bitcoin Address Balance: Script pubtoaddr.py Converts PUBKEY (HEX) to Bitcoin Address (Base58) // Script bitcoin-checker.py Checks the balance by scanning the Blockchain

* Tutorial: https://youtu.be/Hsk6QIzb7oY
* Tutorial: https://cryptodeep.ru/check-bitcoin-address-balance

---

## [04AlgorithmsForSecp256k](https://github.com/demining/CryptoDeepTools/tree/main/04AlgorithmsForSecp256k)

* Useful and Efficient Elliptic Curve Algorithms secp256k1

- [ ] **Algorithm for generating a point on the curve _E_**
- [ ] **Algorithm for adding points**
- [ ] **Point doubling algorithm**
- [ ] **Algorithm for finding the integer multiple point**
- [ ] **Algorithm for finding an integer multiple point (Scalar multiplication)**
- [ ] **Algorithm for generating a divisor _D_ over a curve _E_ with a carrier _supp(D)_ of a given size _d_**
- [ ] **Miller's algorithm for calculating the value of the Weil function _f<sub> n, P</sub>_ from a divisor _D_ such that** _supp(D)_ ∩ {P, O} = ∅
- [ ] **Weil pairing**
 
* Tutorial: https://youtu.be/gFbiBCNPsFk
* Tutorial: https://cryptodeep.ru/algorithms-for-secp256k

---

## [05VulnerableOpenSSL](https://github.com/demining/CryptoDeepTools/tree/main/05VulnerableOpenSSL)

* Vulnerable to Debian OpenSSL bug (CVE-2008-0166)

* Tutorial: https://youtu.be/zHkXups2I8k
* Tutorial: https://cryptodeep.ru/vulnerable-openssl

---

## [06KangarooJeanLucPons](https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons)

* Pollard's kangaroo method computes discrete logarithms in arbitrary cyclic groups. It is applied when the discrete logarithm is known to lie within a certain range, say [ a , b ], and then has the expected time to execute the bulk operation. One way to break ECDSA signature schemes is to solve the discrete logarithm problem.

* Tutorial: https://youtu.be/UGUJyxOhBBQ
* Tutorial: https://cryptodeep.ru/kangaroo

---

## [07EndomorphismSecp256k1](https://github.com/demining/CryptoDeepTools/tree/main/07EndomorphismSecp256k1)

* Secp256k1 acceleration function using endomorphism which helps in optimizing ECDSA validation for bitcoin cryptocurrency.

* Tutorial: https://youtu.be/DH6FyNY-Gh0
* Tutorial: https://cryptodeep.ru/endomorphism

---

## [08ReducePrivateKey](https://github.com/demining/CryptoDeepTools/tree/main/08ReducePrivateKey)

* In this repository, we will use scripts that will help reduce the private key knowing only the leak from the "BLOCKCHAIN FOLBIT LEAKS" list and the public key from "UTXO".

* Tutorial: https://youtu.be/zu2yiaZ_LOs
* Tutorial: https://cryptodeep.ru/reduce-private-key

---

## [09BitcoinWalletRecovery](https://github.com/demining/CryptoDeepTools/tree/main/09BitcoinWalletRecovery)

* We all know that the disclosure of the private key in the ECDSA signature can lead to the complete recovery of the Bitcoin Wallet. In our earlier articles, we looked at weaknesses and vulnerabilities in blockchain transactions, but there are also ECDSA short signatures that also lead to the full recovery of a Bitcoin Wallet.

* Tutorial: https://youtu.be/xBgjWE5tA7Y
* Tutorial: https://cryptodeep.ru/shortest-ecdsa-signature

---

## [10MrRobotQR](https://github.com/demining/CryptoDeepTools/tree/main/10MrRobotQR)

* MrRobotQR is an open source script that automates the process from entering a search keyword to deriving the private key of a Bitcoin wallet. 

* Tutorial: https://youtu.be/bNMg2iJhMpg
* Tutorial: https://cryptodeep.ru/mr-robot-qr

---

## [11QianshiBTC](https://github.com/demining/CryptoDeepTools/tree/main/11QianshiBTC)


* QBitcoin Address Collision Finder

* Tutorial: https://youtu.be/KqJcPSIZ5RM
* Tutorial: https://cryptodeep.ru/quantum-computer-qianshi

---

## [12CoingeckoAgentFtpupload](https://github.com/demining/CryptoDeepTools/tree/main/12CoingeckoAgentFtpupload)


* Coingecko-VanityGen is a command-line utility that can generate cryptocurrency addresses given initial parameters.
Coingecko-VanityGen works with GPU runtime support (Google Colab) and generates beautiful crypto wallet addresses for the full list of the Coingecko aggregator according to its own parameters. The selection of the utility is based on a probabilistic search, which takes some time. The time depends on the complexity of the given template, computer speed and luck. To increase the speed of generating cryptocurrency addresses, there is oclvanitygen - which uses OpenCL-compatible GPUs.

* Tutorial: https://youtu.be/sB91EE-1mJo
* Tutorial: https://cryptodeep.ru/coingecko-agent-ftpupload

---

## [13TeslaBrainWallet](https://github.com/demining/CryptoDeepTools/tree/main/13TeslaBrainWallet)


* There are many forms to create a Bitcoin wallet. One of the first methods to create a Bitcoin wallet was known as BrainWallet. BrainWallet is convenient in the sense that it allows you to store a "passphrase" in memory or in a notebook. The passphrase is hashed using the SHA-256 algorithm, and is used as the seed to generate the private key. Due to its popularity and ease of use, many BrainWallets over the past few years have been used with weak passphrases. This weak private key generation method allowed attackers to steal quite a lot of BTC coins by simply cracking the password against the hashes stored on the blockchain. Let's move on to the experimental part:

* Tutorial: https://youtu.be/r0fTtBDWTnw
* Tutorial: https://cryptodeep.ru/tesla-brainwallet

---

## [14FreyRuckAttack](https://github.com/demining/CryptoDeepTools/tree/main/14FreyRuckAttack)


* With a critical vulnerability in the Bitcoin blockchain transaction, we can solve the rather difficult discrete logarithm problem to extract the secret key "K" (NONCE) from the vulnerable ECDSA signature in order to ultimately restore the Bitcoin Wallet, since knowing the secret key we can get a private key. To do this, there are several algorithms from the list of popular attacks on Bitcoin, one of which is the “Frey-Rück Attack on Bitcoin”.

* Tutorial: https://youtu.be/wqHES7r1qyc
* Tutorial: https://cryptodeep.ru/frey-ruck-attack

---

## [15RowhammerAttack](https://github.com/demining/CryptoDeepTools/tree/main/15RowhammerAttack)


* The biggest cryptographic strength of the Bitcoin cryptocurrency is a computational method in discrete mathematics that takes the factorization problem of large integers and the hidden number problem (HNP) in the Bitcoin ECDSA signature transaction as a basis. Rowhammer Attack on Bitcoin, allows us to efficiently find all zeros for normalized polynomials modulo a certain value, and we adapt this method to the ECDSA signature algorithm, more precisely to critically vulnerable transactions in the Bitcoin blockchain. We will apply ECDSA signature differential failure analysis and obtain a private key from a transaction for different Bitcoin Wallets.

* Tutorial: https://youtu.be/lfYPcXPzLjE
* Tutorial: https://cryptodeep.ru/rowhammer-attack

---

## [16WhiteBoxAttack](https://github.com/demining/CryptoDeepTools/tree/main/16WhiteBoxAttack)


* We will again touch on the topic of a signature failure in a blockchain transaction and apply a completely new attack: “WhiteBox Attack on Bitcoin” .
Differential fault analysis (DFA)was briefly described in the literature in 1996 when an Israeli cryptographer and cryptanalyst Eli Biham and an Israeli scientist Adi Shamir showed that they could use error injection to extract the secret key and recover the private key using various signature and verification algorithms.

* Tutorial: https://youtu.be/dLy74McEFTg
* Tutorial: https://cryptodeep.ru/whitebox-attack

---

## [17BTCRecoverCryptoGuide](https://github.com/demining/CryptoDeepTools/tree/main/17BTCRecoverCryptoGuide)


* Topics Resources Readme Stars 0 stars Watchers 1 watching Forks 0 forks Releases
In this article, we will take a detailed look at the open source password recovery tools and wallet seed phrases in the Crypto Deep Tools repository, and we will also discuss the situation when you accidentally lost or forgot part of your mnemonic or made a mistake while decrypting it. (So you either see an empty wallet or get an error that your seed is invalid) For wallet password or passphrase recovery, it is primarily useful if you have a reasonable idea about what your password might be.

* Tutorial: https://youtu.be/imTXE4rGqHw
* Tutorial: https://cryptodeep.ru/btc-recover-crypto-guide

---




|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2gTnMpxRUNBU85Hg4ruTwnpUPKdf3nV |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
