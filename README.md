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

* Tutorial: https://youtu.be/TD16C_ExwSc
* Tutorial: https://cryptodeeptech.ru/dustattack
* Tutorial: https://dzen.ru/video/watch/65be9256df804947fbd96fd7
* Tutorial: https://rutube.ru/video/23d09792ab3d180f526dd55314a14cd7

---

## [29BitcoinUtilities](https://github.com/demining/CryptoDeepTools/tree/main/29BitcoinUtilities)


* Bitcoin utilities are numerous and varied. Its decentralized nature and lack of intermediaries make it a powerful tool for a variety of use cases. As the technology continues to evolve and mature, we can expect to see even more innovative applications of Bitcoin in the future.

* Tutorial: https://youtu.be/nPFihyxjCOc
* Tutorial: https://cryptodeeptech.ru/bitcoin-utilities
* Tutorial: https://dzen.ru/video/watch/65de483b3474ef16c0430f35
* Tutorial: https://colab.research.google.com/drive/17R_qWLkpz2HJsASCRXG-Brcs-Nhv9xxR

---

## [30GaussJacobiMethod](https://github.com/demining/CryptoDeepTools/tree/main/30GaussJacobiMethod)


* Application of the Gauss-Jacobi method for a cryptographic task - decrypting the password of the wallet.dat file for a Bitcoin wallet. The modification of the algorithm emphasizes its mathematical basis, explaining the process, how this method can be adapted to work with cryptographic tasks, in particular, with decrypting the password of a cryptocurrency wallet.

* Tutorial: https://youtu.be/un3gs6x8qDk
* Tutorial: https://cryptodeeptech.ru/gauss-jacobi-method
* Tutorial: https://dzen.ru/video/watch/66119078be267c07401d9e4c
* Tutorial: [https://colab.research.google.com/drive/1I8vNdD2l2wdLiszoDBBkDjhepXjnWGR_](https://colab.research.google.com/drive/1I8vNdD2l2wdLiszoDBBkDjhepXjnWGR_)

---

## [31BlockchainAPI](https://github.com/demining/CryptoDeepTools/tree/main/31BlockchainAPI)


* The scientific article explores the possibilities of integrating blockchain technologies with web services and APIs. Discusses the benefits of using blockchain APIs to improve the security, transparency and efficiency of web applications. Examples of successful blockchain projects are given and prospects for the development of this area are discussed.

* Tutorial: https://youtu.be/Dz6K-q9wUEQ
* Tutorial: https://dzen.ru/video/watch/6617ad848b9fc93b9ba699c7
* Tutorial: https://cryptodeeptech.ru/blockchain-api-and-web-services
* Tutorial: [https://colab.research.google.com/drive/19Phx62sS0XpLGtzjFFLIqkvjfTGtq2db](https://colab.research.google.com/drive/19Phx62sS0XpLGtzjFFLIqkvjfTGtq2db)

---

## [32DeserializeSignatureVulnerability](https://github.com/demining/CryptoDeepTools/tree/main/32DeserializeSignatureVulnerability)


* In this study, we will look at the DeserializeSignature vulnerability, which allowed attackers to create invalid ECDSA signatures on the Bitcoin network. In cryptography, an ECDSA digital signature is a mathematical scheme that allows you to prove the authenticity of a digital message or document. In the Bitcoin network, signatures are used to authorize transactions, confirming that the owner of a certain amount of bitcoins actually agrees to their transfer. However, a vulnerability in the function DeserializeSignature, discovered in 2023 , allowed attackers to create invalid signatures that could be accepted as valid by the network.

* Tutorial: https://youtu.be/8E2KJeWu4XA
* Tutorial: https://dzen.ru/video/watch/664e34fc8df6514b10da09e9
* Tutorial: https://cryptodeeptech.ru/deserialize-signature-vulnerability-bitcoin
* Google Colab: [https://colab.research.google.com/drive/1EiIIJh8UCOZZ8DVbelxhESFPvqu_xZUo](https://colab.research.google.com/drive/1EiIIJh8UCOZZ8DVbelxhESFPvqu_xZUo)

---

## [33FuzzingBitcoin](https://github.com/demining/CryptoDeepTools/tree/main/33FuzzingBitcoin)


* Fuzzing is a software testing method used to identify vulnerabilities and errors by introducing random or specially generated data into a program's input. In the context of cryptanalysis, Fuzzing testing is used to test cryptographic algorithms and systems for weaknesses that can be exploited by attackers. Applying Fuzzing testing to cryptocurrency wallets has several benefits: Detecting vulnerabilities and Improving reliability. Incorrect data processing in cryptographic operations can lead to private key leaks or other critical vulnerabilities, as well as errors in transaction processing: Fuzzing can reveal errors in transaction processing logic that can lead to incorrect transactions or even loss of funds. At the beginning of 2024, modern technologies that develop the pre-trained Bitcoin ChatGPT model and find effective ways to solve complex cryptographic problems that underlie the fuzzing testing method gained widespread popularity. Let's consider an example of building the structure of a vulnerable Raw transaction that uses the BitcoinChatGPT module.

* Tutorial: https://youtu.be/CU4CFoxgKc8
* Tutorial: https://cryptodeeptech.ru/fuzzing-bitcoin
* Tutorial: https://dzen.ru/video/watch/665f6986a2886608ad194e31
* Google Colab: https://colab.research.google.com/drive/1jxw_oBTd0HW6M2Mo_VDvdYcsXQyb6KHF

---

## [34Vector76Attack](https://github.com/demining/CryptoDeepTools/tree/main/34Vector76Attack)


* In this article we will look at an example using real data, what are software that use the Vector76 Attack mechanism, how they work and what impact they have on the Bitcoin cryptocurrency. Vector76 Attack is a type of double-spending attack in which an attacker attempts to conduct the same transaction twice. Unlike the classic double-spend attack, Vector76 exploits vulnerabilities in transaction confirmation mechanisms and time delays in the propagation of blocks across the Bitcoin network.

* Tutorial: https://youtu.be/Mk_BPBCXd3I
* Tutorial: https://cryptodeeptech.ru/vector76-attack
* Tutorial: https://dzen.ru/video/watch/669558eb4bbd297f7d375e06
* Google Colab: https://colab.research.google.com/drive/1VoEMueKTxGedLfi1PprkuGYMPL5tZBQK

---

## [35JacobianCurve](https://github.com/demining/CryptoDeepTools/tree/main/35JacobianCurve)


* Vulnerability of the Jacobian Curve algorithm allows manipulation of the curve coordinates if the input data of users is not properly verified, this can lead to serious failures in the Bitcoin system, where an attacker can take advantage of the moment and inject their own code and ultimately manipulate the system by creating fake signatures in Bitcoin transactions. As we have learned, attackers can use the vulnerability to carry out DoS attacks, overloading the network with invalid transactions, which destabilizes the Bitcoin network. In this article, we will consider an example using a Bitcoin wallet: 15gCfQVJ68vyUVdb6e3VDU4iTkTC3HtLQ2 , where there were lost coins in the amount of: 266.03138481 BTC as of August 2024, this amount is: 15747770.36 USD

* Tutorial: https://youtu.be/qf6u85wGwNw
* Tutorial: https://cryptodeeptech.ru/jacobian-curve-algorithm-vulnerability
* Tutorial: https://dzen.ru/video/watch/66caadc6523ee35df3f58b89
* Google Colab: https://colab.research.google.com/drive/1E3ZZpzPXcqbK3ngZbxRVk5McI4L8K5h3

---

## [36SignatureMalleability](https://github.com/demining/CryptoDeepTools/tree/main/36SignatureMalleability)


* In this article, we conducted a large study of the Signature Malleability vulnerability that threatens the security of popular cryptocurrencies such as Bitcoin and Ethereum. We also considered a real example of the mechanisms for exploiting CVE-2024-42461 in the Elliptic library for ECDSA, using the Bitcoin wallet 1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw, which lost coins worth 21.2529214 BTC, which is 1,744,572.51 USD as of November 2024

* Tutorial: https://youtu.be/wf6QwCpP3oc
* Tutorial: https://cryptodeeptech.ru/signature-malleability
* Tutorial: https://dzen.ru/video/watch/674116440bddfa35d730ca7a
* Google Colab: https://colab.research.google.com/drive/1HMmeEQDL4kRKfJNQptTf3Mz4VTZmka8h

---

## [37DiscreteLogarithm](https://github.com/demining/CryptoDeepTools/tree/main/37DiscreteLogarithm)


* In this article, we will explore methods for solving the Discrete Logarithm Problem and how to recover lost Bitcoin wallets, focusing on the Ricci Flow algorithm and the Hidden Number Problem to extract private keys from vulnerable transactions using ECDSA. We will look at the process of recovering a private key using Dockeyhunt Discrete Logarithm software and the DarkSignature tool to generate fake transaction data. First, we will enter the Bitcoin wallet address: 1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS for the amount of: 165.10252195 BTC and get its public key. Then, using DarkSignature, we will create fake values ​​for transactions, which will allow us to analyze and manipulate the signature data of the ECDSA algorithm. Finally, we will apply mathematical analysis via Perelman Work software to solve the discrete logarithm and obtain the private key to the Bitcoin wallet.

* Tutorial: https://youtu.be/i9KYih_ffr8
* Tutorial: https://cryptodeeptech.ru/discrete-logarithm
* Tutorial: https://dzen.ru/video/watch/6784be61b09e46422395c236
* Google Colab: https://colab.research.google.com/drive/1Cohb5F2h1CP9CnYdAdMJW9vyl4pwQKuz

---

## [38QuantumAttacks](https://github.com/demining/CryptoDeepTools/tree/main/38QuantumAttacks)


* This article examines contemporary techniques for safeguarding financial transactions and online activities through cryptography, which may become ineffective against powerful quantum computers. It highlights the vulnerabilities of cryptocurrencies, a market valued at hundreds of billions of dollars. The research indicates that Bitcoin's proof-of-work algorithm is relatively resilient to quantum attacks over the next decade, primarily due to the rapid capabilities of specialized mining hardware. However, the elliptic curve digital signature algorithm employed by Bitcoin could be compromised by 2027. The Momentum algorithm is proposed as a more quantum-resistant alternative. The article also explores various protective measures that could enhance the security and efficiency of blockchain applications moving forward. Overall, the findings suggest that quantum computers represent a significant threat to cryptocurrencies, necessitating the development of new security strategies. Additionally, the article illustrates the process of extracting the secret key Nonce value K from a vulnerable RawTX transaction using the BitcoinChatGPT machine learning approach.

* Tutorial: https://youtu.be/p62orC7WDUE
* Tutorial: https://cryptodeeptech.ru/quantum-attacks-on-bitcoin
* Tutorial: https://dzen.ru/video/watch/67c3e91abbfa683a745a0aea
* Google Colab: https://colab.research.google.com/drive/1jqHX5Oawy3QPh2OSYVf6AF1RGtjAb4rj

---

## [39BluetoothAttacks](https://github.com/demining/CryptoDeepTools/tree/main/39BluetoothAttacks)


* The study identified the CVE-2025-27840 vulnerability in ESP32 microcontrollers, posing a threat to the security of Bitcoin networks. Attacks through module updates allow the introduction of hidden vulnerabilities, including: Invalid private keys (function has_invalid_privkey due to lack of boundary checks); Transaction signature forgery (function electrum_sig_hash, incompatible with BIP-137); Weak PRNG in random_key, making keys predictable; ECC curve attacks due to the absence of point verification in multiply; Vulnerabilities in ecdsa_raw_sign (public key substitution) and deprecated hashing APIs (bin_ripemd160). Discovered by Tarlogic Security in March 2025, the vulnerability enables attackers to gain unauthorized access to wallet data via Bluetooth/Wi-Fi, manipulate memory, spoof MAC addresses, and inject malicious code. Billions of IoT devices with ESP32 are at risk of private key compromise  and compromise of Bitcoin/Ethereum networks. Threats include persistent device infections and bypassing code audits through fake updates. Research on critical vulnerabilities CVE-2025-27840 in the ESP32 microcontroller, threatening the security of Bitcoin wallets. Analysis of exploitation methods for hidden commands to compromise  private keys through vulnerable functions: weak PRNG in key generation, transaction signature forgery, ECC curve attacks, and outdated hashing APIs. Recommendations for protecting IoT devices from unauthorized access and cryptographic attacks in Bitcoin and Ethereum networks.
* Tutorial: https://youtu.be/nBeZWm2z5o4
* Tutorial: https://cryptodeeptech.ru/bitcoin-bluetooth-attacks
* Tutorial: https://dzen.ru/video/watch/6784be61b09e46422395c236
* Google Colab: https://colab.research.google.com/drive/15lPDHeTo7FkrPY7v4qS7X6hO4x27qT2Y

---

## [40PrivateKeyDebug](https://github.com/demining/CryptoDeepTools/tree/main/40PrivateKeyDebug)


* Vulnerability Analysis of is_private_key_valid in Bitcoin Private Key Generation: How Errors in Calculating the secp256k1 Group Order Lead to Invalid Key Creation, Fund Loss, and Blockchain System Security Threats. Practical case: Analysis of the loss of 0.58096256 BTC due to generating an invalid private key. Step-by-step breakdown of fund recovery and critical vulnerabilities in the is_private_key_valid function. From the theory of vulnerability it is known that attackers can use incorrect generation of private keys in blockchain systems with the determining order of the group of points of the elliptic curve secp256k1. Let’s move on to the practical part of the article and consider an example using a Bitcoin wallet:  1DMX2ByJZVkWeKG1mhjpwcMvDmGSUAmi5P The main issue: Errors in calculating the order of the secp256k1 group lead to private keys being created outside the valid range [1, N). This causes: Generation of 50% invalid keys in Bitcoin wallets Irrecoverable loss of funds (keys fail ECDSA validation) Risk of compromising HD wallets and smart contracts Historical parallels: Randstorm vulnerability (2011-2016): mass generation of weak keys Failures in HSM modules (2015): compromise of corporate wallets Why it matters: The is_private_key_valid function legitimizes mathematically incorrect keys, creating a false sense of security. This video provides a technical analysis of elliptic curve errors and tools to verify your wallets. Who should watch: Crypto investors, blockchain developers, cybersecurity specialists. Don’t miss: An exclusive demonstration of key recovery through reverse engineering and wallet protection patches.
* Tutorial: https://youtu.be/0m9goH8Lpa0
* Tutorial: https://cryptodeeptech.ru/private-key-debug
* Tutorial: https://dzen.ru/video/watch/682ec3767299977a8bc27069
* Google Colab: https://colab.research.google.com/drive/1eaKZitRzN8034hIwivLNSawobDpcmoEm

---

## [41DigitalSignatureForgeryAttack](https://github.com/demining/CryptoDeepTools/tree/main/41DigitalSignatureForgeryAttack)


* The article centers on two major security issues: vulnerabilities CVE-2025-29774 and CVE-2025-29775. It describes the mechanism by which an attacker, leveraging outdated versions of the xml-crypto library, can circumvent key checks, leading to improper processing of transactional data and risking asset loss. The theoretical aspects are effectively demonstrated through a practical example involving the Bitcoin wallet 32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe, resulting in a loss of 0.059672 BTC (approximately $7,052 USD as of July 2025). The material offers authoritative recommendations for enhancing the cybersecurity of cryptocurrency platforms. It outlines current methods to prevent such attacks, including regular library updates, improved digital signature controls, and the implementation of additional verification layers. This detailed case study and threat analysis is highly relevant for information security specialists, blockchain developers, and everyday users of decentralized services. This article provides an in-depth exploration of a critical cryptographic threat—Digital Signature Forgery—that poses a significant risk to the security of Bitcoin transactions. The study includes a thorough analysis of real-world incidents, notably a large-scale attack on the multisignature wallet Copay. Special focus is given to vulnerabilities in digital signatures and the widely used xml-crypto library, which attackers exploit to bypass transaction verification processes. Understanding modern methods of bypassing protective mechanisms and adhering to the proposed guidelines helps minimize financial loss risks and increases the resilience of platforms against emerging attacks in the rapidly evolving digital landscape.
* Tutorial: https://youtu.be/qbu1m_C1wyA
* Tutorial: https://cryptodeeptech.ru/digital-signature-forgery-attack
* Tutorial: https://dzen.ru/video/watch/68801dfc0c886621f7c1a0db
* Google Colab: https://colab.research.google.com/drive/1TKrJ0bKsNgc72H9UvzpCnh2YPmRsyPdW

---

## [42BitFlippingAttackonWalletdat](https://github.com/demining/CryptoDeepTools/tree/main/42BitFlippingAttackonWalletdat)


* This study demonstrates the practical side of the attack using popular environments like Jupyter Notebook and Google Colab, showing how an attacker can iteratively guess and reconstruct the wallet password through clever padding oracle exploitation. Discover the intricate security mechanisms behind the Bitcoin Core wallet! This study dives deep into how Bitcoin Core protects your wallet password using AES-256-CBC symmetric encryption — the gold standard with a powerful 256-bit key derived from your password. Learn about the role of elliptic curve cryptography (secp256k1) in generating the private and public keys that secure your Bitcoin transactions. We examine a real-life case study of a Bitcoin wallet (address: `16A5RFckRNW6fZzfjCGSneD3PApACLRwix`) which lost an astonishing 105.68557389 BTC (~$12.13M USD as of Aug 2025), highlighting why wallet security matters. But beware — despite AES-256-CBC’s strength, it’s vulnerable to a special cryptographic weakness known as the Bit-flipping attack. This attack exploits the Cipher Block Chaining (CBC) mode’s vulnerability to manipulate encrypted data without needing the password directly! We break down how Bit-flipping works by modifying ciphertext bits to subtly change decrypted information, potentially altering access rights or critical wallet data — all due to the lack of built-in integrity checks in CBC mode.
* Tutorial: https://youtu.be/3uCsL_zxKPI
* Tutorial: https://cryptodeeptech.ru/bit-flipping-attack-on-wallet-dat
* Tutorial: https://dzen.ru/video/watch/68baca013761775f268041dc
* Google Colab: https://colab.research.google.com/drive/1tCCSUtjl6seE9lqkFLcLodE96mj5uuHR

---

## [43PhoenixRowhammerAttack](https://github.com/demining/CryptoDeepTools/tree/main/43PhoenixRowhammerAttack)


* Unveiling Hardware Threats: Recent Research Exposes SK Hynix DDR5 Vulnerability. The Phoenix Rowhammer exploit manipulates memory bits, allowing attackers to extract private keys and compromise security—particularly within cryptocurrency ecosystems. As digital asset platforms depend on secure chip components, advanced DRAM exploits like CVE‑2025‑6202 introduce new "blind spots" beyond the reach of software defenses. Multi-Vector Crypto Attacks and Losses: Combined with threats such as BitShredder and Memory Phantom, attackers can recover seed phrases and keys even after crypto operations conclude. In a striking demonstration, 9.02332298 BTC (≈ $1,127,026.44 USD) was transferred from wallet 15ZwrzrRj9x4XpnocEGbLuPakzsY2S4Mit through a Rowhammer-based exploit—proving the real-world impact of these attacks. This example highlights how hardware-level vulnerabilities can completely drain Bitcoin wallets once private key data is exposed from compromised DDR5 memory. Jupyter and Colab Tools for Analysis: Researchers leverage Google Colab notebooks and SK Hynix DDR5 simulators for cryptanalytic experiments, underscoring the urgent need for hardware-level defenses in digital asset security.
* Tutorial: https://youtu.be/lvNWcBMHESo
* Tutorial: https://cryptodeeptech.ru/phoenix-rowhammer-attack
* Tutorial: https://dzen.ru/video/watch/68ebe9367847b33269940e47
* Google Colab: https://colab.research.google.com/drive/1Lgjwdw2x9bT2yjhWnXyvpPvZTo8sD4Hf

---

## [44ScalarVenomAttack](https://github.com/demining/CryptoDeepTools/tree/main/44ScalarVenomAttack)

**Scalar Venom Attack: Cryptographic Vulnerability Research & Bitcoin Wallet Recovery**

Scalar Venom Attack is a comprehensive security research repository documenting a critical `HSM` (Hardware Security Module) initialization vulnerability `(CVE-2025-60013)` that enables sophisticated private Bitcoin wallet key recovery techniques. This repository serves as an educational resource for cybersecurity researchers, blockchain developers, and cryptanalysts studying advanced vulnerability exploitation in cryptographic systems.

**Core Technical Focus:**

The repository explores a critical vulnerability in `F5OS-A FIPS HSM` initialization when passwords contain shell metacharacters. While officially rated as CVSS 5.7 (MEDIUM), the vulnerability escalates to CVSS 9.5+ (CRITICAL) threat level when combined with Scalar Venom Attack exploitation techniques. This research demonstrates how buffer overflow vulnerabilities, combined with improper memory management in hardware security modules, can lead to the extraction of sensitive cryptographic keys used in Bitcoin wallet operations.

**Key Technical Elements:**

The research encompasses multiple attack vectors and forensic methodologies:

- **Memory Management Exploitation**: Detailed analysis of memory flaws in HSM implementations
- **Cryptographic Key Recovery**: Techniques for identifying and extracting "phantom" copies of private keys from stack and heap memory
- **Shannon Entropy Analysis**: Statistical methods (H ≥ 7.5 bits/byte) for detecting hidden cryptographic material
- **ECDSA/secp256k1 Cryptanalysis**: Mathematical foundations underlying Bitcoin's signature scheme
- **BitScanPro Forensics**: Advanced memory forensics tool methodology
- **CWE Classification**: Security weaknesses including CWE-415 and CWE-401

**Target Audience:**

- Cybersecurity researchers and penetration testers
- Bitcoin security specialists and wallet developers
- Cryptanalysts studying elliptic curve cryptography vulnerabilities
- Blockchain security professionals
- Academic researchers in cryptographic security

**Real-World Applications:**

This repository documents concrete examples of private key recovery from compromised systems, providing case studies with actual Bitcoin addresses and recovered keys. The research demonstrates the critical importance of secure HSM implementation and proper cryptographic key management practices.


* Tutorial: https://youtu.be/cvWLH5dvbAA
* Tutorial: https://cryptodeeptech.ru/scalar-venom-attack
* Tutorial: https://dzen.ru/video/watch/691a7a10a8b7c874612993eb
* Google Colab: https://colab.research.google.com/drive/1e93p7gxpTtfMU2L83w7I1tRDJQ1tENYa


---

## [45RingSideReplayAttack](https://github.com/demining/CryptoDeepTools/tree/main/45RingSideReplayAttack)

**RingSide Replay Attack: How 32-Bit Entropy Instead of 256-Bit Compromised Bitcoin Wallet Private Keys and SEED Phrases**

**Discovery of CVE-2023-39910:**

Versions of `Libbitcoin Explorer from 3.0.0 to 3.6.0` contain a critical vulnerability that allows the recovery of private keys from lost Bitcoin wallets. The RingSide Replay Attack study revealed a mechanism by which the `Mersenne Twister-32 (MT19937)` random number generator, seeded with system time, limits entropy to just 32 bits instead of the required 256 bits.

**Essence of the vulnerability:**

When a cryptographically secure ECDSA implementation on the secp256k1 curve relies on a weak source of randomness, its security collapses. This enables adversaries to reconstruct private keys and gain control over funds. In the documented case, private keys corresponding to the address `1NiojfedphT6MgMD7UsowNdQmx5JY15djG` were recovered, granting access to assets worth `USD 61,025`. Extracting the private key `Kyj6yvb4oHHDGBW23C8Chzji3zdYQ5QMr8r9zWpGVHdvWuYqCGVU` provides full access to this Bitcoin wallet.

**Scale of the disaster:**

The compromise of more than 227,200 unique Bitcoin addresses led to the theft of crypto assets exceeding `USD 900,000`. Every wallet created with the vulnerable tool became a potential target for `GPU`-based brute-force attacks.

**Technical attack mechanism:**

Private key recovery reduces to iterating through 86,400 seeds per day (all possible timestamps within 24 hours). If the approximate wallet creation date is known, the recovery process takes only a few minutes on a modern GPU. On an `NVIDIA RTX 3090`, a full exploration of the 2³² space completes in several days.

**Cryptographic foundations:**

A private key `k` must be a random 256-bit integer satisfying

`1 ≤ k < n (n ≈ 1,158 × 10⁷⁷)`

The public key point `Q` is computed as an elliptic curve scalar multiplication:

`Q = k ⋅ G`

This vulnerability breaks the first principle — unpredictability.

**BTCDetect — cryptanalysis tool:**

The BTCDetect tool implements the RingSide Replay Attack methodology, providing practical private key recovery. Its architecture includes entropy analysis modules, Mersenne Twister reconstruction, BIP-39/BIP-32 derivation chains, and verification components.

**Practical implications:**

A recovered private key gives full control over the Bitcoin wallet, allowing an attacker to create transactions, import the key into any wallet (Electrum, Bitcoin Core, MetaMask, Trust Wallet, Ledger, Trezor, Exodus, etc.), and seize all funds. This demonstrates the critical importance of using cryptographically secure random number generators in digital signature systems.

**Security recommendations:**

Use only cryptographically secure sources of randomness. Regularly verify library versions and apply timely updates. Conducting thorough audits of cryptographic implementations is mandatory for any system handling private keys and digital signatures in blockchain infrastructure.
* Tutorial: https://youtu.be/KJNbwfolL6g
* Tutorial: https://cryptodeeptech.ru/ringside-replay-attack
* Tutorial: https://dzen.ru/video/watch/69431d5dfd50136dae291001
* Google Colab: https://colab.research.google.com/drive/1vH3nohPhojYshof2Oy0AOGoGOWw39KwB

---

## [46PhantomSignatureAttack](https://github.com/demining/CryptoDeepTools/tree/main/46PhantomSignatureAttack)

**Phantom Signature Attack: CVE‑2025‑29774 in Bitcoin & Math for Private‑key Recovery in Lost Wallets**

**Discovery of CVE-2025‑29774:**

Phantom Signature Attack `(CVE-2025-29774)` — a fundamental vulnerability in Bitcoin’s ECDSA signature implementation that enables complete compromise of cryptocurrency wallet security without the owner’s knowledge.

**RESEARCH OVERVIEW**

Our cryptanalytic investigation demonstrates how incorrect processing of cryptographic primitives in Bitcoin’s transaction signature mechanism creates unprecedented vulnerability. The attack exploits a legacy bug inherited from the original Satoshi client, where the system returns a universal hash value of `«1»` instead of rejecting signatures when transaction input/output counts mismatch.

**EXTRACTION METHOD**

Extracting a private key gains access to a Bitcoin wallet: `1MNL4wmck5SMUJroC6JreuK3B291RX6w1P`


Recovering private keys to lost Bitcoin wallets: `1MNL4wmck5SMUJroC6JreuK3B291RX6w1P`

The KeyFuzzMaster cryptanalytic fuzzing engine systematically identifies vulnerabilities in signature verification code and elliptic curve operations. Through ECDSA nonce (k-parameter) reuse analysis on the secp256k1 curve, we demonstrate mathematical private key recovery using the complete algorithm: if two signatures `(r, s₁)` and `(r, s₂)` for different messages use identical nonce k, the private key becomes completely recoverable through modular arithmetic.

**ATTACK CHAIN & VULNERABILITY ANALYSIS**

**The attack leverages three interconnected vulnerabilities:**

SIGHASH_SINGLE Bug — A critical flaw in signature hash generation returning fixed value `«1»` instead of proper rejection

`CVE-2025-29774 (xml-crypto)` — Allows modification of signed XML messages while maintaining signature validity, compromising transaction integrity

XSS Injection Vector — `CVE-2025-48102 (GoUrl)` and `CVE-2025-26541 (CodeSolz)` enable malicious JavaScript injection into payment gateways for signature parameter interception

**CRYPTANALYSIS METHODOLOGY**

Our research demonstrates that nonce reuse vulnerability has already recovered over `412.8 BTC` from compromised wallets. The mathematical foundation relies on:

Secp256k1 elliptic curve cryptography analysis
ECDSA signature equation differential analysis
Modular inverse computation for nonce recovery
Private key derivation through cryptographic formulas
The recovered private key allows attackers to:
✓ Create valid signatures for arbitrary transactions
✓ Redirect Bitcoin funds to attacker-controlled addresses
✓ Drain entire wallet balances without detection
✓ Modify transaction SIGHASH values

**PRACTICAL RECOVERY CASE STUDY**

For Bitcoin address `1MNL4wmck5SMUJroC6JreuK3B291RX6w1P`:

**Parameters Recovered:**

Private Key (HEX): `162A982BED7996D6F10329BF9D6FFC29666493FE6B86A5C3D3B27A68E2877A60`
Private Key (WIF): `KwxoKZEDEEkAadv9njG4YvJShCgTrnkbMeHZEieWXH7ooZRo1XGW`
Recovered Funds: `$ 147,977`
Recovery Time: 4-6 seconds on modern GPUs (when RNG entropy is limited)
KeyFuzzMaster: The Cryptanalytic Engine

**This specialized fuzzing engine identifies wallets generated with 32-bit entropy PRNG, reducing the search space from 2^256 to just 2^32 possible seeds. The tool performs:**

Dynamic stress testing of signature verification code
Elliptic curve operation vulnerability scanning
Transaction hashing function analysis
Blockchain-wide duplicate r-value detection
Automated private key recovery pipeline

**RESEARCH RESOURCES & TOOLS**

Access our complete technical documentation and interactive demonstrations:

**These resources provide:**

✓ Complete source code implementations
✓ Step-by-step vulnerability exploitation guides
* Tutorial: https://youtu.be/fGR7Iqiq8Ag
* Tutorial: https://cryptodeeptech.ru/phantom-signature-attack
* Tutorial: https://dzen.ru/video/watch/69682001b2d5f9209f8b4606
* Google Colab: https://bitcolab.ru/keyfuzzmaster-cryptanalytic-fuzzing-engine

---


|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2gTnMpxRUNBU85Hg4ruTwnpUPKdf3nV |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
