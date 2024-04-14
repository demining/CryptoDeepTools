# CryptoDeepTools

Crypto Deep Tools a set of scripts for detailed cryptanalysis of the Blockchain network in cryptocurrency Bitcoin


## [01BlockchainGoogleDrive](https://github.com/demining/CryptoDeepTools/tree/main/01BlockchainGoogleDrive)

* Parsing Blockchain in Google Drive

* Tutorial: https://youtu.be/ECAPypsmMQs
* Tutorial: https://cryptodeeptech.ru/blockchain-google-drive

---

## [02BreakECDSAcryptography](https://github.com/demining/CryptoDeepTools/tree/main/02BreakECDSAcryptography)

* Analyze the data from the file "RawTX.json". Script breakECDSA.py reconstructs the unsigned message for each to find the Z value. The result is returned as R, S, Z, PUBKEY for each of the inputs present in the data in the "RawTX.json" file.

* Tutorial: https://youtu.be/BYd-cuFRZmM
* Tutorial: https://cryptodeeptech.ru/break-ecdsa-cryptography

---

## [03CheckBitcoinAddressBalance](https://github.com/demining/CryptoDeepTools/tree/main/03CheckBitcoinAddressBalance)

* Check Bitcoin Address Balance: Script pubtoaddr.py Converts PUBKEY (HEX) to Bitcoin Address (Base58) // Script bitcoin-checker.py Checks the balance by scanning the Blockchain

* Tutorial: https://youtu.be/Hsk6QIzb7oY
* Tutorial: https://cryptodeeptech.ru/check-bitcoin-address-balance

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
* Tutorial: https://cryptodeeptech.ru/algorithms-for-secp256k

---

## [05VulnerableOpenSSL](https://github.com/demining/CryptoDeepTools/tree/main/05VulnerableOpenSSL)

* Vulnerable to Debian OpenSSL bug (CVE-2008-0166)

* Tutorial: https://youtu.be/zHkXups2I8k
* Tutorial: https://cryptodeeptech.ru/vulnerable-openssl

---

## [06KangarooJeanLucPons](https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons)

* Pollard's kangaroo method computes discrete logarithms in arbitrary cyclic groups. It is applied when the discrete logarithm is known to lie within a certain range, say [ a , b ], and then has the expected time to execute the bulk operation. One way to break ECDSA signature schemes is to solve the discrete logarithm problem.

* Tutorial: https://youtu.be/UGUJyxOhBBQ
* Tutorial: https://cryptodeeptech.ru/kangaroo

---

## [07EndomorphismSecp256k1](https://github.com/demining/CryptoDeepTools/tree/main/07EndomorphismSecp256k1)

* Secp256k1 acceleration function using endomorphism which helps in optimizing ECDSA validation for bitcoin cryptocurrency.

* Tutorial: https://youtu.be/DH6FyNY-Gh0
* Tutorial: https://cryptodeeptech.ru/endomorphism

---

## [08ReducePrivateKey](https://github.com/demining/CryptoDeepTools/tree/main/08ReducePrivateKey)

* In this repository, we will use scripts that will help reduce the private key knowing only the leak from the "BLOCKCHAIN FOLBIT LEAKS" list and the public key from "UTXO".

* Tutorial: https://youtu.be/zu2yiaZ_LOs
* Tutorial: https://cryptodeeptech.ru/reduce-private-key

---

## [09BitcoinWalletRecovery](https://github.com/demining/CryptoDeepTools/tree/main/09BitcoinWalletRecovery)

* We all know that the disclosure of the private key in the ECDSA signature can lead to the complete recovery of the Bitcoin Wallet. In our earlier articles, we looked at weaknesses and vulnerabilities in blockchain transactions, but there are also ECDSA short signatures that also lead to the full recovery of a Bitcoin Wallet.

* Tutorial: https://youtu.be/xBgjWE5tA7Y
* Tutorial: https://cryptodeeptech.ru/shortest-ecdsa-signature

---

## [10MrRobotQR](https://github.com/demining/CryptoDeepTools/tree/main/10MrRobotQR)

* MrRobotQR is an open source script that automates the process from entering a search keyword to deriving the private key of a Bitcoin wallet. 

* Tutorial: https://youtu.be/bNMg2iJhMpg
* Tutorial: https://cryptodeeptech.ru/mr-robot-qr

---

## [11QianshiBTC](https://github.com/demining/CryptoDeepTools/tree/main/11QianshiBTC)


* QBitcoin Address Collision Finder

* Tutorial: https://youtu.be/KqJcPSIZ5RM
* Tutorial: https://cryptodeeptech.ru/quantum-computer-qianshi

---

## [12CoingeckoAgentFtpupload](https://github.com/demining/CryptoDeepTools/tree/main/12CoingeckoAgentFtpupload)


* Coingecko-VanityGen is a command-line utility that can generate cryptocurrency addresses given initial parameters.
Coingecko-VanityGen works with GPU runtime support (Google Colab) and generates beautiful crypto wallet addresses for the full list of the Coingecko aggregator according to its own parameters. The selection of the utility is based on a probabilistic search, which takes some time. The time depends on the complexity of the given template, computer speed and luck. To increase the speed of generating cryptocurrency addresses, there is oclvanitygen - which uses OpenCL-compatible GPUs.

* Tutorial: https://youtu.be/sB91EE-1mJo
* Tutorial: https://cryptodeeptech.ru/coingecko-agent-ftpupload

---

## [13TeslaBrainWallet](https://github.com/demining/CryptoDeepTools/tree/main/13TeslaBrainWallet)


* There are many forms to create a Bitcoin wallet. One of the first methods to create a Bitcoin wallet was known as BrainWallet. BrainWallet is convenient in the sense that it allows you to store a "passphrase" in memory or in a notebook. The passphrase is hashed using the SHA-256 algorithm, and is used as the seed to generate the private key. Due to its popularity and ease of use, many BrainWallets over the past few years have been used with weak passphrases. This weak private key generation method allowed attackers to steal quite a lot of BTC coins by simply cracking the password against the hashes stored on the blockchain. Let's move on to the experimental part:

* Tutorial: https://youtu.be/r0fTtBDWTnw
* Tutorial: https://cryptodeeptech.ru/tesla-brainwallet

---

## [14FreyRuckAttack](https://github.com/demining/CryptoDeepTools/tree/main/14FreyRuckAttack)


* With a critical vulnerability in the Bitcoin blockchain transaction, we can solve the rather difficult discrete logarithm problem to extract the secret key "K" (NONCE) from the vulnerable ECDSA signature in order to ultimately restore the Bitcoin Wallet, since knowing the secret key we can get a private key. To do this, there are several algorithms from the list of popular attacks on Bitcoin, one of which is the “Frey-Rück Attack on Bitcoin”.

* Tutorial: https://youtu.be/wqHES7r1qyc
* Tutorial: https://cryptodeeptech.ru/frey-ruck-attack

---

## [15RowhammerAttack](https://github.com/demining/CryptoDeepTools/tree/main/15RowhammerAttack)


* The biggest cryptographic strength of the Bitcoin cryptocurrency is a computational method in discrete mathematics that takes the factorization problem of large integers and the hidden number problem (HNP) in the Bitcoin ECDSA signature transaction as a basis. Rowhammer Attack on Bitcoin, allows us to efficiently find all zeros for normalized polynomials modulo a certain value, and we adapt this method to the ECDSA signature algorithm, more precisely to critically vulnerable transactions in the Bitcoin blockchain. We will apply ECDSA signature differential failure analysis and obtain a private key from a transaction for different Bitcoin Wallets.

* Tutorial: https://youtu.be/lfYPcXPzLjE
* Tutorial: https://cryptodeeptech.ru/rowhammer-attack

---

## [16WhiteBoxAttack](https://github.com/demining/CryptoDeepTools/tree/main/16WhiteBoxAttack)


* We will again touch on the topic of a signature failure in a blockchain transaction and apply a completely new attack: “WhiteBox Attack on Bitcoin” .
Differential fault analysis (DFA)was briefly described in the literature in 1996 when an Israeli cryptographer and cryptanalyst Eli Biham and an Israeli scientist Adi Shamir showed that they could use error injection to extract the secret key and recover the private key using various signature and verification algorithms.

* Tutorial: https://youtu.be/dLy74McEFTg
* Tutorial: https://cryptodeeptech.ru/whitebox-attack

---

## [17BTCRecoverCryptoGuide](https://github.com/demining/CryptoDeepTools/tree/main/17BTCRecoverCryptoGuide)


* In this article, we will take a detailed look at the open source password recovery tools and wallet seed phrases in the Crypto Deep Tools repository, and we will also discuss the situation when you accidentally lost or forgot part of your mnemonic or made a mistake while decrypting it. (So you either see an empty wallet or get an error that your seed is invalid) For wallet password or passphrase recovery, it is primarily useful if you have a reasonable idea about what your password might be.

* Tutorial: https://youtu.be/imTXE4rGqHw
* Tutorial: https://cryptodeeptech.ru/btc-recover-crypto-guide

---

## [18TwistAttack](https://github.com/demining/CryptoDeepTools/tree/main/18TwistAttack)


* In this article, we will implement a Twist Attack with an example and show how, using certain points on the secp256k1 elliptic curve, we can get partial private key values ​​and restore a Bitcoin Wallet within 5-15 minutes using “Sagemath pollard rho function: (discrete_log_rho)” and “ Chinese Remainder Theorem” .

* Tutorial: https://youtu.be/S_ZUcM2cD8I
* Tutorial: https://cryptodeeptech.ru/twist-attack

---

## [19SageMathGoogleColab](https://github.com/demining/CryptoDeepTools/tree/main/19SageMathGoogleColab)


* Google Colab has been updated to "Ubuntu 20.04.5 LTS". To perform cryptanalysis, we will install a new version of SageMath version 9.3.

* Tutorial: https://youtu.be/DBu0UnVe0ig
* Tutorial: https://cryptodeeptech.ru/install-sagemath-in-google-colab

---

## [20PolynonceAttack](https://github.com/demining/CryptoDeepTools/tree/main/20PolynonceAttack)


* POLYNONCE ATTACK we use BITCOIN signatures as a Polynomial to an arbitrarily high power of 128 bits to get a Private Key

* Tutorial: https://youtu.be/7nKs_KHtyn4
* Tutorial: https://cryptodeeptech.ru/polynonce-attack

---

## [21LatticeAttack](https://github.com/demining/CryptoDeepTools/tree/main/21LatticeAttack)


* LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA

* Tutorial: https://youtu.be/CzaHitewN-4
* Tutorial: https://cryptodeeptech.ru/lattice-attack-249bits

---

## [22SmartContractVulnerabilities](https://github.com/demining/CryptoDeepTools/tree/main/22SmartContractVulnerabilities)


* Solidity Forcibly Send Ether Vulnerability to a Smart Contract continuation of the list of general EcoSystem security from attacks

* Tutorial: https://youtu.be/lqjsHB2r6gU
* Tutorial: https://cryptodeeptech.ru/solidity-forcibly-send-ether-vulnerability

---

## [23SolidityVulnerableHoneypots](https://github.com/demining/CryptoDeepTools/tree/main/23SolidityVulnerableHoneypots)


* Phenomenon from Blockchain Cryptocurrency Solidity Vulnerable Honeypots

* Tutorial: https://youtu.be/UrkOGyuuepE
* Tutorial: https://cryptodeeptech.ru/solidity-vulnerable-honeypots

---

## [24ShellShockAttack](https://github.com/demining/CryptoDeepTools/tree/main/24ShellShockAttack)


* ShellShock Attack vulnerability on “Bitcoin” & “Ethereum” server discovered in GNU Bash cryptocurrency exchange

* Tutorial: https://youtu.be/fIYYi1kGEnc
* Tutorial: https://cryptodeeptech.ru/shellshock-attack-on-bitcoin

---

## [25MilkSadVulnerability](https://github.com/demining/CryptoDeepTools/tree/main/25MilkSadVulnerability)


* On August 10, 2023, a group of Bitcoin security researchers identified a vulnerability in the Libbitcoin Explorer 3.x library. This critical vulnerability allowed attackers to steal more than $900,000 from Bitcoin Wallet users, according to a report from blockchain security firm SlowMist. The vulnerability may also affect Ethereum, Ripple, Dogecoin, Solana, Litecoin, Bitcoin Cash and Zcash users who use Libbitcoin to create accounts. The vulnerability, dubbed "Milk Sad", was first discovered by cybersecurity team Distrust. This Bitcoin-threatening vulnerability allows attackers to gain access to the private keys of a crypto wallet using the Mersenne Twister pseudo-random number generator (PRNG), which leads to disastrous consequences. In our last article, we clearly showed an example of such an attack on Bitcoin Wallets. Let's look at two examples with a total loss: 40886.76 USD // BITCOIN: 1.17536256 BTC and a second example with a total loss: 19886.91 USD // BITCOIN: 0.58051256 BTC


* Tutorial: https://youtu.be/YMdb7_iboaA
* Tutorial: https://cryptodeeptech.ru/milk-sad-vulnerability-in-libbitcoin-explorer

---

## [26BitcoinLightningWalletVulnerability](https://github.com/demining/CryptoDeepTools/tree/main/26BitcoinLightningWalletVulnerability)


* In this repository, we will focus on the popular Bitcoin Wallet application for iOS and Android smartphones with support for fast payments through the Lightning network BLW: Bitcoin Lightning Wallet. Unfortunately, many autonomous nodes of the open source mobile application from LNbits Node Manager and Core Lightning are exposed to a HIGH RISK of losing all funds in various cryptocurrency coins. Developer David Shares from the Japanese company Bitcoin Portal published a chronological list that shows that the Lightning Network is drowning in technical problems, bugs, shortcomings, criticisms and exploits. It is an over-promised technology that does not provide decentralization and is still far from being functional and secure for users. Look at example with a total loss: 11032.77 USD // BITCOIN: 0.30412330 BTC

* Tutorial: https://youtu.be/ZpflbzENAAw
* Tutorial: https://cryptodeeptech.ru/bitcoin-lightning-wallet-vulnerability

---

## [27PaddingOracleAttackonWalletdat](https://github.com/demining/CryptoDeepTools/tree/main/27PaddingOracleAttackonWalletdat)


* Padding Oracle Attack This method is a side-channel attack on the Bitcoin Core cryptosystem that uses leaked data from a poorly implemented decryption routine to completely undermine the cryptosystem. An attacker can effectively decrypt the data in the wallet.dat file without knowing the decryption key if the target system leaks whether a padding error occurred when decrypting the ciphertext. Let's look at an example with a total loss: 44502.42 US dollars // BITCOIN: 1.17461256 BTC

* Tutorial: https://youtu.be/0aCfT-kCRlw
* Tutorial: https://cryptodeeptech.ru/padding-oracle-attack-on-wallet-dat

---

## [28DustAttack](https://github.com/demining/CryptoDeepTools/tree/main/28DustAttack)


* "Dust Attack" known as: "Dusting Attack" or "Crypto Dust". Perhaps every cryptocurrency user or holder of a large amount of BTC, ETH coins replaced the receipt of an insignificantly small amount of coins in satoshi on their cryptocurrency wallet, this receipt is disguised as “Donate”, but in fact it is a whole mathematically refined system for taking away all the accumulated coins of the wallet for balance. Let's look at two different examples of dust attacks to shed light on all the intricacies of this manipulation and what risks can await users and holders of the popular cryptocurrency Bitcoin. To carry out a dust attack, confirmation of isomorphism by miners plays an important role, because From 2022 to 2024, many cryptocurrency services and hardware wallets are actively fighting the dust attack. At the moment, the method of independently creating dust transactions on your own cold wallet has become widely popular. Let's transform the dust transaction into isomorphism, according to the theory, two transactions must be confirmed by miners. Having created the RawTX of the dust attack, we send a small amount of 555 satoshi, then we receive an isomorphism of the first transaction, where a reverse transfer of funds occurs from the balance of the victim of the dust attack.

* Tutorial: https://cryptodeeptech.ru/dustattack
* Tutorial: https://dzen.ru/video/watch/65be9256df804947fbd96fd7
* Tutorial: https://rutube.ru/video/23d09792ab3d180f526dd55314a14cd7

---

## [29BitcoinUtilities](https://github.com/demining/CryptoDeepTools/tree/main/29BitcoinUtilities)


* Bitcoin utilities are numerous and varied. Its decentralized nature and lack of intermediaries make it a powerful tool for a variety of use cases. As the technology continues to evolve and mature, we can expect to see even more innovative applications of Bitcoin in the future.

* Tutorial: https://cryptodeeptech.ru/bitcoin-utilities
* Tutorial: https://dzen.ru/video/watch/65de483b3474ef16c0430f35
* Tutorial: https://colab.research.google.com/drive/17R_qWLkpz2HJsASCRXG-Brcs-Nhv9xxR

---

## [30GaussJacobiMethod](https://github.com/demining/CryptoDeepTools/tree/main/30GaussJacobiMethod)


* Application of the Gauss-Jacobi method for a cryptographic task - decrypting the password of the wallet.dat file for a Bitcoin wallet. The modification of the algorithm emphasizes its mathematical basis, explaining the process, how this method can be adapted to work with cryptographic tasks, in particular, with decrypting the password of a cryptocurrency wallet.

* Tutorial: https://cryptodeeptech.ru/gauss-jacobi-method
* Tutorial: https://dzen.ru/video/watch/66119078be267c07401d9e4c
* Tutorial: [https://colab.research.google.com/drive/1I8vNdD2l2wdLiszoDBBkDjhepXjnWGR_](https://colab.research.google.com/drive/1I8vNdD2l2wdLiszoDBBkDjhepXjnWGR_)

---

## [31BlockchainAPI](https://github.com/demining/CryptoDeepTools/tree/main/31BlockchainAPI)


* The scientific article explores the possibilities of integrating blockchain technologies with web services and APIs. Discusses the benefits of using blockchain APIs to improve the security, transparency and efficiency of web applications. Examples of successful blockchain projects are given and prospects for the development of this area are discussed.

* Tutorial: https://cryptodeeptech.ru/blockchain-api-and-web-services
* Tutorial: https://dzen.ru/video/watch/6617ad848b9fc93b9ba699c7
* Tutorial: [https://colab.research.google.com/drive/19Phx62sS0XpLGtzjFFLIqkvjfTGtq2db](https://colab.research.google.com/drive/19Phx62sS0XpLGtzjFFLIqkvjfTGtq2db)

---




|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2gTnMpxRUNBU85Hg4ruTwnpUPKdf3nV |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
