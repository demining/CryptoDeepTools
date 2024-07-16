<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/055-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/055-1024x576.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>With the development of cryptocurrency technologies and the increasing popularity of Bitcoin, various software such as&nbsp;<strong>Flash Bitcoin Software</strong>&nbsp;and&nbsp;<strong>Fake BTC Software</strong>&nbsp;have appeared in the market . These programs can lead to disastrous consequences on the&nbsp;<strong>Bitcoin</strong>&nbsp;ecosystem . In this article, we will look at what these softwares are, how they work and what impact they have on the&nbsp;<strong>Bitcoin</strong>&nbsp;cryptocurrency using real data , as well as how these various softwares use the&nbsp;<a href="https://cryptodeeptech.ru/vector76-attack"><strong>Vector76 Attack</strong></a>&nbsp;mechanism , which is a type of&nbsp;<a href="https://en.wikipedia.org/wiki/Double-spending">double-spending</a>&nbsp;attack , in which an attacker tries to conduct the same transaction twice. Unlike the classic double-spending attack, Vector76 exploits vulnerabilities in transaction confirmation mechanisms and time delays in the propagation of blocks across the Bitcoin network.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Tutorial: <a href="https://youtu.be/Mk_BPBCXd3I">https://youtu.be/Mk_BPBCXd3I</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Tutorial: <a href="https://cryptodeeptech.ru/vector76-attack">https://cryptodeeptech.ru/vector76-attack</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Google Colab: <a href="https://colab.research.google.com/drive/1VoEMueKTxGedLfi1PprkuGYMPL5tZBQK">https://colab.research.google.com/drive/1VoEMueKTxGedLfi1PprkuGYMPL5tZBQK</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>In a Vector76 attack, the attacker first creates two transactions: one to send funds to their Bitcoin address and one to send the same funds to the merchant’s Bitcoin address. They then try to convince the merchant to accept the unconfirmed transaction while simultaneously broadcasting the other transaction to the network. If the attacker manages to complete their transaction before the merchant receives confirmation, the funds will be sent to the attacker’s address rather than the merchant’s.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://youtu.be/Mk_BPBCXd3I"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-2.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:embed {"url":"https://youtube.com/watch?v=Mk_BPBCXd3I%3Fsi%3DYeJcsqeJKlbmKF-U"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://youtube.com/watch?v=Mk_BPBCXd3I%3Fsi%3DYeJcsqeJKlbmKF-U
</div></figure>
<!-- /wp:embed -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Software</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#software"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Software makes it easy for an attacker to time-slot the time between a transaction being confirmed on the local network and being propagated to the entire Bitcoin network. The attacker creates two transactions: one that is sent to the local network and one that is sent to the main network. If the attacker manages to send the first transaction before the second is confirmed, they can trick the recipient into believing that the first transaction is genuine. Let’s look at some of the most well-known software that uses time-slotting to successfully confirm a Bitcoin transaction.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-001.pdf">Flash Bitcoin Software</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#flash-bitcoin-software"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Flash Bitcoin Software</strong>&nbsp;is a software that allows users to temporarily increase their Bitcoin wallet balance. This is done by creating transactions that appear legitimate but are not actually confirmed on the blockchain. Such transactions can be used to deceive users and services that accept Bitcoin.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-009.pdf">Fake BTC Software</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#fake-btc-software"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Fake BTC Software</strong>&nbsp;, in turn, is designed to create fake Bitcoin transactions. These transactions can be used for fraud, as they create the appearance of a transfer of funds, although in reality no funds are transferred. This software can be used to deceive sellers and buyers in cryptocurrency transactions.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://dockeyhunt.com/dockeyhunt-vector76-attack/">Dockeyhunt Vector76 Attack</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#dockeyhunt-vector76-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Dockeyhunt Vector76 Attack</strong>&nbsp;is designed to create two or more Raw transactions with the purpose of confirmation via Broadcast Bitcoin Transaction for a double-spend scenario with the same Bitcoin. The essence of the attack is that the attacker sends the same transaction to two different parts of the network, creating a temporary discrepancy in the Bitcoin blockchain. This software can also be used to deceive sellers and buyers in cryptocurrency transactions and operations where different tokens and various well-known cryptocurrencies are accepted Bitcoin, Etherium, etc.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-004.pdf">CGMiner и BFGMiner</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#cgminer-%D0%B8-bfgminer"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>CGMiner</strong>&nbsp;and&nbsp;<strong>BFGMiner</strong>&nbsp;these software are designed for mining and can be used to implement&nbsp;<strong><a href="https://cryptodeeptech.ru/selfish-mining/">Selfish Mining</a></strong>&nbsp;attacks , as they allow miners to control the process of mining blocks.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-002.pdf">Wireshark</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#wireshark"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Wireshark</strong>&nbsp;is a network analysis software and can be used to analyze network traffic and implement&nbsp;<strong><a href="https://cryptodeeptech.ru/sybil-attack/">Sybil Attack</a></strong>&nbsp;and&nbsp;<strong><a href="https://cryptodeeptech.ru/eclipse-attack/">Eclipse Attack</a></strong>&nbsp;. Fraudsters can use modified versions of the Bitcoin Core client to perform various attacks on the consensus mechanism.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptodeep.ru/doc/Bitcoin_Will_Bite_the_Dust.pdf">BlockSci</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#blocksci"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>BlockSci</strong>&nbsp;– This software allows you to analyze the blockchain and can be used to conduct transaction analysis and&nbsp;<a href="https://cryptodeeptech.ru/dustattack">Dusting Attack&nbsp;<strong>(DUST ATTACK)</strong></a>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Impact of the attack on the Bitcoin network</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#impact-of-the-attack-on-the-bitcoin-network"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Vector76 Attack was first described in 2011 and is a combination of&nbsp;<strong><a href="https://dockeyhunt.com/dockeyhunt-finney-attack/">Finney</a></strong>&nbsp;and&nbsp;<strong><a href="https://cryptodeeptech.ru/race-attack/">Race</a></strong>&nbsp;attacks . The attack exploits vulnerabilities in the Bitcoin network transaction confirmation process. The basic idea is to create two conflicting transactions and run them through different nodes in the network, allowing the attacker to trick the recipient into double spending.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In&nbsp;<strong><a href="https://cryptodeeptech.ru/race-attack/">a Race Attack</a></strong>&nbsp;, an attacker attempts to conduct two transactions simultaneously, one of which he attempts to reverse.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In&nbsp;<strong><a href="https://cryptodeeptech.ru/finney-attack/">a Finney Attack</a></strong>&nbsp;, an attacker pre-mines a block with a transaction and then attempts to conduct another transaction with the same coins.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In&nbsp;<strong><a href="https://cryptodeep.ru/vector76-attack/">the Vector76 Attack</a></strong>&nbsp;, the attacker uses elements of both attacks to create a double spending attack.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Vector76 attack could have serious consequences for the Bitcoin network. It undermines trust in the system, as users could lose funds due to double spending. In addition, the attack could cause delays in transaction confirmations and increase network congestion.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Attack stages:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#attack-stages"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li><strong>Create two transactions:</strong> The attacker creates two transactions with the same amount but different recipients. One transaction is sent to the network, and the other is held in an isolated part of the Bitcoin network.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Sending the first transaction:</strong> The first transaction is sent to the local network, where it is quickly confirmed.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Sending the second transaction:</strong> The second transaction is sent to the Bitcoin main network.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>First Transaction Confirmation:</strong> The recipient of the first transaction believes it is genuine and provides the product or service.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Second transaction confirmation:</strong> The second transaction is confirmed on the main network and the first transaction becomes invalid.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Conflict and Double Spend</strong> : As a result, a conflict occurs and one of the transactions may be included in the blockchain, resulting in a double spend.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Network Merge</strong> : When an isolated part of the network merges with the main network, a conflict occurs and one of the transactions is cancelled.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Vector76 Attack Detection and Prevention Mechanisms:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#vector76-attack-detection-and-prevention-mechanisms"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To protect the Bitcoin network from Vector76 attacks, various mechanisms for detecting and preventing attacks are used, and effective algorithms and systems for detecting suspicious transactions must be implemented.&nbsp;<em>Let’s consider several approaches</em>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li><strong>Block and transaction analysis:</strong> Mining software and network nodes analyze blocks and transactions for conflicts and anomalies.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Increase the number of confirmations:</strong> It is recommended to wait for a larger number of confirmations (e.g. 6 or more) before considering a transaction as finally confirmed. Increasing the time to wait for a transaction to be confirmed can reduce the likelihood of a successful attack.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Using </strong><em><a href="https://bitcoinchatgpt.org/"><strong>Machine Learning Algorithms:</strong></a></em> Modern machine learning techniques can be used to detect suspicious patterns in transactions and blocks.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Network Monitoring</strong> : Using specialized <em><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/33FuzzingBitcoin">software to monitor the network</a></strong></em> for suspicious transactions and behavior.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Multi-Level Confirmation:</strong> Using multiple levels of transaction confirmation can improve security.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Anomaly Analysis:</strong> Implementation of anomaly analysis systems to identify suspicious transactions and blockchains.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Updating Protocols</strong> : Regularly updating security protocols and implementing new security methods can improve the network’s resilience to attacks.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Strengthening the consensus mechanism</strong> : Implementing additional checks and confirmations for transactions, which will make it more difficult to carry out attacks.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Distribution of an alternative block for carrying out Vector76 Attack:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#distribution-of-an-alternative-block-for-carrying-out-vector76-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li><strong>Creating Two Conflicting Transactions:</strong> An attacker creates two transactions that use the same inputs but have different recipients.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>First Transaction Propagation:</strong> The first transaction is sent to the network and included in a block that miners begin to confirm.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Creating an alternative block:</strong> The attacker uses their own mining software to create an alternative block containing the second transaction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Propagation of an alternative block:</strong> At a time when the first transaction has already received several confirmations, the attacker propagates an alternative block that may be accepted by the network if it contains more confirmations.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Structure of Vector76 Attack:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#structure-of-vector76-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li><strong>Setup</strong> : The attacker creates two transactions: one for the victim <strong>(T1)</strong> and one for himself <strong>(T2)</strong> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Block mining</strong> : An attacker mines a block that includes <strong>T2</strong> but does not publish it.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>T1 execution</strong> : The attacker sends <strong>T1</strong> to the network and the victim accepts it after one confirmation.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Block Publishing</strong> : The attacker publishes a block with <strong>T2</strong> , which cancels <strong>T1</strong> .</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/diagramRUS2-1024x486-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/diagramRUS2-1024x486-1.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practical part</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#practical-part"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s look at an example of this attack using the&nbsp;<strong><a href="https://dockeyhunt.com/dockeyhunt-vector76-attack">Dockeyhunt Vector76 Attack software.</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Download the software from the official website:&nbsp;<strong><a href="https://dockeyhunt.com/dockeyhunt-vector76-attack">www.dockeyhunt.com</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://dockeyhunt.com/dockeyhunt-vector76-attack"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-1024x372.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>We will install all the necessary packages and libraries and run the&nbsp;<strong>setup.exe file.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-3.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-3.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-4.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-4.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>To carry out a successful attack, it is very important for us to create a second transaction (&nbsp;<em>for ourselves&nbsp;</em><strong>T2</strong>&nbsp;) for this, we need to prepare a Bitcoin Wallet in advance where we will send all our&nbsp;<strong>BTC</strong>&nbsp;coins for further storage in a cold wallet. Open the folder and run&nbsp;<strong>Cold Bitcoin Wallet.exe</strong>&nbsp;to generate a new Bitcoin Address</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-9.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-9.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Click&nbsp;<strong>Generate Address</strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-8-1024x719.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-8-1024x719.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Our new Bitcoin Address details for further storage in a cold wallet.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Cold Bitcoin Wallet: 

             Private Key HEX: 7b774f968a0eff26bb645fa91830a17a749e685ca4fab58b98bc03fd6a48405c
             Private Key WIF: 5JkfMchWKeVh5nUmbTHPhFTpMPmWjn5a9JtrR8iBQqPCCmonapz
             Private Key WIF compressed: L1MiHzZnRJVdv7jZq51MAeqN11VUFoyBHfys7X2kxCYxSxT9GWRx 
           
Public Key: 04addd5a1ced91a6364c486cbc95cde195108657d1eabb86bf97e5dfa3f099b2ba2b7c42c09f8d7d12c6f68a4d1750ac6abbf1379802b9501d9cc1c51b6dcbc87d 
                      Public Key compressed: 03addd5a1ced91a6364c486cbc95cde195108657d1eabb86bf97e5dfa3f099b2ba

                      Public Address 1: 1KivXGdoDVPZCZLHpAe8rCztEirdrWuR4Y   
                      Public Address 1 compressed: 1qqQcZbZNvsZoF5x3VcnEcJbzPeXncfKq   
                      Public Address 3: 36QRQhDUdaufqTJYfgV76CTor6Nix8Zvz3  
                      Public Address bc1 P2WPKH: bc1qpy79lkrlls0jhva93llvq6tkchrkp5zfgq5ned    
                      Public Address bc1 P2WSH: bc1q3j88twpmde2rwz5tnecdezxsxtxje0cswfjkcfcckq3mx4d3hm2stuw0ss  
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://youtu.be/VCeQpYsh-Ts"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-3(1).png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:embed {"url":"https://youtube.com/watch?v=VCeQpYsh-Ts%3Fsi%3DZ6YV233mXvbY-SIt"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://youtube.com/watch?v=VCeQpYsh-Ts%3Fsi%3DZ6YV233mXvbY-SIt
</div></figure>
<!-- /wp:embed -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Now we establish a connection with the recipient, in our case the pseudo-recipient is a user of the&nbsp;<strong>Huobi crypto exchange</strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-11-1024x707.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-11-1024x707.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Bitcoin Pseudo-recipient address:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-10.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-10.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:embed {"url":"https://bitinfocharts.com/bitcoin/address/143gLvWYUojXaWZRrxquRKpVNTkhmr415B"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://bitinfocharts.com/bitcoin/address/143gLvWYUojXaWZRrxquRKpVNTkhmr415B
</div></figure>
<!-- /wp:embed -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/diagramRUS5-1024x486-5.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/diagramRUS5-1024x486-5.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Creating Raw Transaction T1 (Victim)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#creating-raw-transaction-t1-victim"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>The pseudo-recipient&nbsp;</em><strong>(victim)</strong>&nbsp;is a user of the&nbsp;<strong>Huobi</strong>&nbsp;crypto exchange and expects from&nbsp;<em>the sender&nbsp;</em><strong>(attacker)</strong>&nbsp;an amount of:&nbsp;<code><strong>1.17506256 BTC</strong></code>&nbsp;<em>(in&nbsp;<strong>Bitcoin</strong>&nbsp;cryptocurrency )</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sender’s Bitcoin Wallet for the amount:&nbsp;<strong>1.17521256 BTC</strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-14.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-14.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://btc1.trezor.io/address/1888dvSYUx23z2NF79NyCaYQ8dxcWCjHDz">https://btc1.trezor.io/address/1888dvSYUx23z2N</a>Now let’s use the&nbsp;<em><strong>Python</strong></em>&nbsp;script:&nbsp;<a href="https://github.com/smartiden/Broadcast-Bitcoin-Transaction/blob/main/pushtx.py"><strong>pushtx.py</strong></a>&nbsp;to send&nbsp;<strong>Bitcoin Transaction RawTX</strong><a href="https://btc1.trezor.io/address/1888dvSYUx23z2NF79NyCaYQ8dxcWCjHDz">F79NyCaYQ8dxcWCjHDz</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s open a new notebook in&nbsp;<strong><a href="https://colab.research.google.com/">Google Colab</a>&nbsp;:&nbsp;<a href="https://colab.research.google.com/">https://colab.research.google.com</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Clone the&nbsp;<a href="https://github.com/smartiden/Broadcast-Bitcoin-Transaction.git"><strong>Broadcast-Bitcoin-Transaction repository</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!git clone https://github.com/smartiden/Broadcast-Bitcoin-Transaction.git

cd Broadcast-Bitcoin-Transaction/

ls</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-21-1024x528.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-21-1024x528.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Run&nbsp;<strong><em>Python</em></strong>&nbsp;script&nbsp;<strong><a href="https://github.com/smartiden/Broadcast-Bitcoin-Transaction/blob/main/bitcoin_info.py">bitcoin_info.py</a>&nbsp;</strong><em>(to check the Bitcoin sender address)</em></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!python3 bitcoin_info.py

1888dvSYUx23z2NF79NyCaYQ8dxcWCjHDz</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-23-1024x353.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-23-1024x353.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>To create a&nbsp;<strong>Raw</strong>&nbsp;transaction&nbsp;<strong>T1,</strong>&nbsp;we need&nbsp;<em>to copy</em>&nbsp;from Bitcoin Address:&nbsp;<a href="https://btc1.trezor.io/address/1888dvSYUx23z2NF79NyCaYQ8dxcWCjHDz"><strong>1888dvSYUx23z2NF79NyCaYQ8dxcWCjHDz</strong></a>&nbsp;<strong>UTXO</strong>&nbsp;(&nbsp;<em>Unspent Transaction Output</em>&nbsp;) the last&nbsp;<strong>TXID</strong>&nbsp;as an output of unspent transactions for the sender’s wallet.</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://btc1.trezor.io/tx/3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://btc1.trezor.io/tx/3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-15-1024x203.png"></a><strong>TXID:&nbsp;<a href="https://btc1.trezor.io/tx/3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861">3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://dockeyhunt.com/dockeyhunt-vector76-attack">Let’s go back to the root directory and run the Dockeyhunt Vector76 Attack</a></strong>&nbsp;software<strong><a href="https://dockeyhunt.com/dockeyhunt-vector76-attack"></a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-16.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-16.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Option:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#option"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When creating a transaction, we need to sign a digital signature with the&nbsp;<strong>ECDSA</strong>&nbsp;algorithm , insert the private key of the Bitcoin Wallet sender into the field:&nbsp;<a href="https://btc1.trezor.io/address/1888dvSYUx23z2NF79NyCaYQ8dxcWCjHDz"><strong>1888dvSYUx23z2NF79NyCaYQ8dxcWCjHDz</strong></a>&nbsp;(&nbsp;<em>for verification, we can use&nbsp;</em><a href="https://cryptodeep.ru/bitaddress.html"><strong>bitaddress</strong></a>&nbsp;)</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Private Key: KwoqiXXrWkurxSazHJtmxKstB7g4HX247q7JoKcFDtHpFujKNSiD</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Copy&nbsp;<strong>TXID:&nbsp;</strong><strong><a href="https://btc1.trezor.io/tx/3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861">3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861</a></strong>&nbsp;and paste it into the field. This is necessary to ensure that transactions are fully verified for all Bitcoin network nodes, as all transaction inputs are valid&nbsp;<em>(this is very important and necessary for a successful&nbsp;<strong>Vector76</strong>&nbsp;attack to ensure that the sender’s&nbsp;<strong>BTC</strong>&nbsp;coins are not spent in advance)</em>&nbsp;.&nbsp;<strong>UTXO</strong>&nbsp;allows for more efficient transaction processing, as each transaction output can only be used once&nbsp;<em>(this simplifies the management of the Bitcoin network state and reduces the complexity of verifying Raw transactions)</em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Prev TXID: 3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Copy the Bitcoin Address of the pseudo-recipient of the&nbsp;<strong>Huobi</strong>&nbsp;crypto exchange :&nbsp;<strong><a href="https://bitinfocharts.com/bitcoin/address/143gLvWYUojXaWZRrxquRKpVNTkhmr415B">143gLvWYUojXaWZRrxquRKpVNTkhmr415B</a></strong>&nbsp;and paste it into the field.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Send Address: 143gLvWYUojXaWZRrxquRKpVNTkhmr415B</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Copy the total amount of Bitcoin coins and paste it into the field&nbsp;<em>(for this sender this amount is:&nbsp;<strong>1.17521256 BTC</strong>&nbsp;the amount must be specified in Satoshi in the amount of:&nbsp;<strong>117521256</strong>&nbsp;)</em></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Total Received: 1.17521256 BTC (117521256 sat/vByte)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Let’s specify our own amount in the amount of:&nbsp;<strong>15000 sat/vByte</strong>&nbsp;this amount is a commission for the process of processing transactions by the miner. In Bitcoin, when we send a transaction, we pay a commission to the miners for including our created&nbsp;<strong>Raw</strong>&nbsp;transaction in the blockchain&nbsp;<em>(this commission stimulates miners to process and confirm transactions).</em></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Fee: 0.00015000 BTC (15000 sat/vByte)</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Let’s specify the amount for sending BTC coins in our case when extracting from the total amount of&nbsp;<strong>117521256 sat/vByte</strong>&nbsp;and the size of the commission:&nbsp;<strong>15000 sat/vByte</strong>&nbsp;the amount to send will be&nbsp;<em>in Satoshi</em>&nbsp;:&nbsp;<strong>117506256</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Sent: 1.17506256 BTC (117506256 sat/vByte)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>After we have added all the options, click&nbsp;<strong>Create Transaction</strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-20.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-20.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Result:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#result"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Your Bitcoin Address: 1888dvSYUx23z2NF79NyCaYQ8dxcWCjHDz
Bitcoin Address for sending BTC: 143gLvWYUojXaWZRrxquRKpVNTkhmr415B
Bitcoin Transaction RawTX:
010000000161e8e6fbe03bb2ea5508067c270ff878bccccefa37e80d1a5b5eac321abd4131000000006b483045022100dff55be52be07900dd4d2d04473c93249ca78e37955e466437c26f06322f01bc02205ed04a2a4201e8c2b3035de7edfa972e1f7da57dbcca3eaa4fbd4db4cd8ad507012102650afad13f8fb85925ba6765dc5416bad623cdfce3f104191964253a12ed0cddffffffff01d0000107000000001976a914216a0d339ab6ddc696b1b239b9b65810c0bf73d588ac00000000
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://youtu.be/qjcFNV90p8I"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-4(1).png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:embed {"url":"https://youtube.com/watch?v=qjcFNV90p8I%3Fsi%3DjlnG-yg3Od3XH2bX"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://youtube.com/watch?v=qjcFNV90p8I%3Fsi%3DjlnG-yg3Od3XH2bX
</div></figure>
<!-- /wp:embed -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Now let’s use the&nbsp;<em><strong>Python</strong></em>&nbsp;script:&nbsp;<a href="https://github.com/smartiden/Broadcast-Bitcoin-Transaction/blob/main/pushtx.py"><strong>pushtx.py</strong></a>&nbsp;to send&nbsp;<strong>Bitcoin Transaction RawTX</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!python3 pushtx.py</strong>

<strong>010000000161e8e6fbe03bb2ea5508067c270ff878bccccefa37e80d1a5b5eac321abd4131000000006b483045022100dff55be52be07900dd4d2d04473c93249ca78e37955e466437c26f06322f01bc02205ed04a2a4201e8c2b3035de7edfa972e1f7da57dbcca3eaa4fbd4db4cd8ad507012102650afad13f8fb85925ba6765dc5416bad623cdfce3f104191964253a12ed0cddffffffff01d0000107000000001976a914216a0d339ab6ddc696b1b239b9b65810c0bf73d588ac00000000</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-24-1024x251.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-24-1024x251.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Result:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#result-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Enter your raw transaction: 010000000161e8e6fbe03bb2ea5508067c270ff878bccccefa37e80d1a5b5eac321abd4131000000006b483045022100dff55be52be07900dd4d2d04473c93249ca78e37955e466437c26f06322f01bc02205ed04a2a4201e8c2b3035de7edfa972e1f7da57dbcca3eaa4fbd4db4cd8ad507012102650afad13f8fb85925ba6765dc5416bad623cdfce3f104191964253a12ed0cddffffffff01d0000107000000001976a914216a0d339ab6ddc696b1b239b9b65810c0bf73d588ac00000000
TX: e129cd4257b2c9f5061dfb80d8b7a59e62cbaf3cdfba8d3fde2953759e63bcf0
Transaction successfully broadcasted!
Broadcasting Transactions into the Bitcoin Network: https://broad-casts.ru/bitcoin-network</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>A pseudo-recipient user of the&nbsp;&nbsp;<strong>Huobi</strong>&nbsp;crypto exchange sees a payment on the Bitcoin&nbsp;<strong>TX network: e129cd4257b2c9f5061dfb80d8b7a59e62cbaf3cdfba8d3fde2953759e63bcf0</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now the attacker proceeds to the second stage, creating a&nbsp;<strong>T2 transaction&nbsp;</strong><em>(for himself)</em>&nbsp;to take all the coins for the sent amount of&nbsp;<strong>1.17506256 BTC (117506256 sat/vByte)</strong>&nbsp;from the Bitcoin network to the balance of his cold wallet.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/diagramRUS1-1024x486-1-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/diagramRUS1-1024x486-1-1.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Create Raw transaction T2 (for yourself)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#create-raw-transaction-t2-for-yourself"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Previously we created a cold Bitcoin Wallet, we did this in advance specifically to create the second transaction (&nbsp;<em>for ourselves&nbsp;</em>&nbsp;<strong>T2</strong>&nbsp;) to prepare the Bitcoin Wallet:&nbsp;<strong><a href="https://btc1.trezor.io/address/1qqQcZbZNvsZoF5x3VcnEcJbzPeXncfKq">1qqQcZbZNvsZoF5x3VcnEcJbzPeXncfKq</a></strong>&nbsp;where we will send from the Bitcoin network all coins in the amount of:&nbsp;<strong>1.17506256 BTC (117506256 sat/vByte)</strong>&nbsp;for further storage in a cold wallet).<strong></strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-8-COLD_BITCOIN_WALLET.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-8-COLD_BITCOIN_WALLET.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Copy the Bitcoin Address of the new cold wallet:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Cold Bitcoin Wallet:

Public Address 1 compressed: 1qqQcZbZNvsZoF5x3VcnEcJbzPeXncfKq</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Let’s re-launch the Dockeyhunt Vector76 Attack</strong>&nbsp;software.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-16.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-16.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Let’s add a new option with new data</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Option:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#option-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>All the same, to create a transaction, we need to sign a digital signature with the&nbsp;<strong>ECDSA</strong>&nbsp;algorithm , insert the private key of the Bitcoin Wallet sender into the field:&nbsp;<a href="https://btc1.trezor.io/address/1888dvSYUx23z2NF79NyCaYQ8dxcWCjHDz"><strong>1888dvSYUx23z2NF79NyCaYQ8dxcWCjHDz</strong></a>&nbsp;(&nbsp;<em>for verification, we can use&nbsp;</em><a href="https://cryptodeep.ru/bitaddress.html"><strong>bitaddress</strong></a>&nbsp;)</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Private Key: KwoqiXXrWkurxSazHJtmxKstB7g4HX247q7JoKcFDtHpFujKNSiD</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Copy&nbsp;<strong>TXID:&nbsp;</strong><strong><a href="https://btc1.trezor.io/tx/3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861">3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861</a></strong>&nbsp;and paste it into the field. This is necessary to ensure that transactions are fully verified for all Bitcoin network nodes, as all transaction inputs are valid&nbsp;<em>(this is very important and necessary for a successful&nbsp;<strong>Vector76</strong>&nbsp;attack to ensure that the sender’s&nbsp;<strong>BTC</strong>&nbsp;coins are not spent in advance)</em>&nbsp;.&nbsp;<strong>UTXO</strong>&nbsp;allows for more efficient transaction processing, as each transaction output can only be used once&nbsp;<em>(this simplifies the management of the Bitcoin network state and reduces the complexity of verifying Raw transactions)</em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Prev TXID: 3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Let’s copy the new Bitcoin Address of the new cold wallet where we will transfer all&nbsp;<strong>BTC</strong>&nbsp;coins :&nbsp;<a href="https://btc1.trezor.io/address/1qqQcZbZNvsZoF5x3VcnEcJbzPeXncfKq"><strong>1qqQcZbZNvsZoF5x3VcnEcJbzPeXncfKq</strong></a>&nbsp;and paste it into the field.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Send Address: 1qqQcZbZNvsZoF5x3VcnEcJbzPeXncfKq</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Copy the total amount of Bitcoin coins and paste it into the field&nbsp;<em>(for this sender this amount is:&nbsp;<strong>1.17521256 BTC</strong>&nbsp;the amount must be specified in Satoshi in the amount of:&nbsp;<strong>117521256</strong>&nbsp;)</em></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Total Received: 1.17521256 BTC (117521256 sat/vByte)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Let’s specify our own amount in the amount of:&nbsp;<strong>15000 sat/vByte</strong>&nbsp;this amount is a commission for the process of processing transactions by the miner. In Bitcoin, when we send a transaction, we pay a commission to the miners for including our created&nbsp;<strong>Raw</strong>&nbsp;transaction in the blockchain&nbsp;<em>(this commission stimulates miners to process and confirm transactions).</em></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Fee: 0.00015000 BTC (15000 sat/vByte)</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Let’s specify the amount for sending BTC coins in our case when extracting from the total amount of&nbsp;<strong>117521256 sat/vByte</strong>&nbsp;and the size of the commission:&nbsp;<strong>15000 sat/vByte</strong>&nbsp;the amount to send will be&nbsp;<em>in Satoshi</em>&nbsp;:&nbsp;<strong>117506256</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Sent: 1.17506256 BTC (117506256 sat/vByte)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>After we have added all the options, click&nbsp;<strong>Create Transaction</strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-25-BTC.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-25-BTC.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Result:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#result-2"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Your Bitcoin Address: 1888dvSYUx23z2NF79NyCaYQ8dxcWCjHDz
Bitcoin Address for sending BTC: 1qqQcZbZNvsZoF5x3VcnEcJbzPeXncfKq
Bitcoin Transaction RawTX:
010000000161e8e6fbe03bb2ea5508067c270ff878bccccefa37e80d1a5b5eac321abd4131000000006a473044022027033ea1c9df979fe39b016ee9ef446fab3e87dd4514623ad8a655e8eab31f0002201b58688b9949a8b9b05cb74b3bd829f6c134c5bef132e9df0eafeea9585abc45012102650afad13f8fb85925ba6765dc5416bad623cdfce3f104191964253a12ed0cddfdffffff01d0000107000000001976a914093c5fd87ffc1f2bb3a58ffec06976c5c760d04988ac00000000</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://youtu.be/HboBRmiCfIQ"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-5.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:embed {"url":"https://youtube.com/watch?v=HboBRmiCfIQ%3Fsi%3D8RXJPtmeZSKhEdhb"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://youtube.com/watch?v=HboBRmiCfIQ%3Fsi%3D8RXJPtmeZSKhEdhb
</div></figure>
<!-- /wp:embed -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Now let’s use the&nbsp;<em><strong>Python</strong></em>&nbsp;script:&nbsp;<a href="https://github.com/smartiden/Broadcast-Bitcoin-Transaction/blob/main/pushtx.py"><strong>pushtx.py</strong></a>&nbsp;to send&nbsp;<strong>Bitcoin Transaction RawTX</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!python3 pushtx.py</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-26-1024x261.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-26-1024x261.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Result:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#result-3"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Enter your raw transaction: 010000000161e8e6fbe03bb2ea5508067c270ff878bccccefa37e80d1a5b5eac321abd4131000000006a473044022027033ea1c9df979fe39b016ee9ef446fab3e87dd4514623ad8a655e8eab31f0002201b58688b9949a8b9b05cb74b3bd829f6c134c5bef132e9df0eafeea9585abc45012102650afad13f8fb85925ba6765dc5416bad623cdfce3f104191964253a12ed0cddfdffffff01d0000107000000001976a914093c5fd87ffc1f2bb3a58ffec06976c5c760d04988ac00000000
TX: d7b2f7279687abd3abf0367ac31223359dc8b53b32b7adbdfc2d0ada2a8015bc
Transaction successfully broadcasted!
Broadcasting Transactions into the Bitcoin Network: https://broad-casts.ru/bitcoin-network</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Now we have received&nbsp;<strong>TX: d7b2f7279687abd3abf0367ac31223359dc8b53b32b7adbdfc2d0ada2a8015bc</strong>&nbsp;all that remains is to mine the block and publish the block to the main blockchain which includes the&nbsp;<strong>T2 transaction&nbsp;</strong><em>(for ourselves)</em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/diagramRUS3-1024x486-3-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/diagramRUS3-1024x486-3-1.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Mining and publishing a block to the Bitcoin network main chain</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#mining-and-publishing-a-block-to-the-bitcoin-network-main-chain"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Let’s go back to the root directory, open the folder and run the Block Bitcoin Mining</strong>&nbsp;software<strong></strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-27.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-27.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/001-1024x768.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/001-1024x768.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>To add an option to an empty field, we need to get input data for certain values ​​to configure the mining block. To do this, run the&nbsp;<strong><em>Python</em></strong>&nbsp;script:&nbsp;<a href="https://github.com/smartiden/Broadcast-Bitcoin-Transaction/blob/main/block_header.py"><strong>block_header.py</strong></a><strong>&nbsp;and enter the UTXO</strong>&nbsp;value we know,&nbsp;which we previously added to the&nbsp;<strong>Prev TXID</strong>&nbsp;option hash when creating&nbsp;<strong>the Raw</strong>&nbsp;transaction&nbsp;<strong>Prev TXID&nbsp;: 3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>UTXO</strong>&nbsp;allows for more efficient transaction processing, as each transaction output can only be used once&nbsp;<em>(this simplifies the management of the Bitcoin network state and reduces the complexity of verifying Raw transactions)</em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!python3 block_header.py</strong>

<strong>3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-28-1024x346.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-28-1024x346.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Let’s copy the received data:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Enter TXID: 3141bd1a32ac5e5b1a0de837faceccbc78f80f277c060855eab23be0fbe6e861
Block Header:
Block: 00000000000000000003e5557c14e955f2c88465bb8c02a4d694a3657a40d79e
Block Height: 808875
Mined Time: 2023-09-22T17:29:25Z
Prev Block: 000000000000000000048e0643366b7c0129d2dd8d2cf758ca6273ed81c765d8
Merkle Root: c1fc30413e984cdd90dc1ac91a69add6c138af950e1c6388cb20759494073d2c
Nonce: 1098256692
Bits: 386198911
Version: 536903680</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s add&nbsp;<strong>RawTX for&nbsp;</strong><strong>T2</strong>&nbsp;transaction&nbsp;<em>(for ourselves)</em></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Bitcoin Transaction RawTX:
010000000161e8e6fbe03bb2ea5508067c270ff878bccccefa37e80d1a5b5eac321abd4131000000006a473044022027033ea1c9df979fe39b016ee9ef446fab3e87dd4514623ad8a655e8eab31f0002201b58688b9949a8b9b05cb74b3bd829f6c134c5bef132e9df0eafeea9585abc45012102650afad13f8fb85925ba6765dc5416bad623cdfce3f104191964253a12ed0cddfdffffff01d0000107000000001976a914093c5fd87ffc1f2bb3a58ffec06976c5c760d04988ac00000000</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://dockeyhunt.com/dockeyhunt-vector76-attack/"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/mining.gif" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Once the block for the&nbsp;<strong>T2 transaction&nbsp;</strong><em>(for yourself)</em>&nbsp;is mined using the&nbsp;<strong>Block Bitcoin Mining software, we will receive a file in&nbsp;</strong><strong><a href="https://keyhunters.ru/bitcoinjson/">JSON</a></strong>&nbsp;format<strong><a href="https://keyhunters.ru/bitcoinjson/"></a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-29.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-29.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Our mined block for confirmation in the general blockchain chain is located in the file:&nbsp;<strong>block_hash_mining.json</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s open the file:&nbsp;<strong>block_hash_mining.json</strong>&nbsp;using&nbsp;<a href="https://keyhunters.ru/the-benefits-of-the-popular-notepad-program/"><strong>Notepad++</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-30.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-30.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>In line&nbsp;<strong>#875</strong>&nbsp;we see a new block.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>block_hash: 00000000000000000004401ea0694af9c89564d76bc5462577e312eea5d23fa2</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://youtu.be/Qa0FQJaOrKM"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-6.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:embed {"url":"https://youtube.com/watch?v=Qa0FQJaOrKM%3Fsi%3D__2O5roSMYlQ5sNM"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://youtube.com/watch?v=Qa0FQJaOrKM%3Fsi%3D__2O5roSMYlQ5sNM
</div></figure>
<!-- /wp:embed -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s go back to&nbsp;<strong>Google Cola</strong>&nbsp;b and run&nbsp;<strong>the&nbsp;</strong><strong><em>Python</em></strong>&nbsp;script, enter&nbsp;<strong>the TXID of&nbsp;</strong><strong>the T2</strong>&nbsp;transaction&nbsp;<em>(for ourselves)</em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-32-1024x335-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-32-1024x335-1.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">EVERYTHING IS CORRECT!!!</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#everything-is-correct"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The block confirms the authenticity of transaction&nbsp;<strong>T2&nbsp;</strong><em>(to itself)</em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s also check&nbsp;<em><a href="https://btc1.trezor.io/tx/d7b2f7279687abd3abf0367ac31223359dc8b53b32b7adbdfc2d0ada2a8015bc">the link</a></em>&nbsp;in the blockchain:</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://btc1.trezor.io/tx/d7b2f7279687abd3abf0367ac31223359dc8b53b32b7adbdfc2d0ada2a8015bc"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://btc1.trezor.io/tx/d7b2f7279687abd3abf0367ac31223359dc8b53b32b7adbdfc2d0ada2a8015bc
</div></figure>
<!-- /wp:embed -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-31-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-31-1.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Payment confirmed by miners</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#payment-confirmed-by-miners"></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/diagramRUS4-1024x486-4.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/diagramRUS4-1024x486-4.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Transaction T1 (victim) is cancelled</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#transaction-t1-victim-is-cancelled"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Huobi</strong>&nbsp;crypto exchange user pseudo-recipient payment&nbsp;&nbsp;&nbsp;automatically canceled on Bitcoin&nbsp;&nbsp;<strong>TX network: e129cd4257b2c9f5061dfb80d8b7a59e62cbaf3cdfba8d3fde2953759e63bcf0</strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-33.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/image-33.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->

<!-- wp:embed {"url":"https://btc1.trezor.io/tx/e129cd4257b2c9f5061dfb80d8b7a59e62cbaf3cdfba8d3fde2953759e63bcf0"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://btc1.trezor.io/tx/e129cd4257b2c9f5061dfb80d8b7a59e62cbaf3cdfba8d3fde2953759e63bcf0
</div></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Transaction not found due to not being in the general block chain</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#transaction-not-found-due-to-not-being-in-the-general-block-chain"></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Conclusion:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#conclusion"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>All these software and tools facilitate the creation of fraudulent schemes, which can lead to an increase in the number of victims and losses of&nbsp;<strong>BTC</strong>&nbsp;and&nbsp;<strong>ETH</strong>&nbsp;coins among users. This, in turn, can cause a negative attitude towards cryptocurrencies and the crypto community as a whole.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Damage to Business:&nbsp;</strong><em>Many companies and services that accept&nbsp;<strong>Bitcoin</strong>&nbsp;may suffer significant losses due to the use of fake transactions. This may lead to the refusal to accept&nbsp;<strong>Bitcoin</strong>&nbsp;as a means of payment, which will also negatively affect its adoption.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Increased complexity of regulation:&nbsp;</strong><em>The use of such software complicates the work of regulators and law enforcement agencies who are trying to combat fraud and money laundering. This may lead to stricter regulations and restrictions on the use of cryptocurrencies.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Need for improved security</strong>&nbsp;:&nbsp;<em>Constant threats require developers and users to implement new security measures and improve existing protection mechanisms. The Bitcoin developer community can take steps to combat fraudulent transactions. This may include improving transaction confirmation algorithms and introducing new security protocols. However, such measures may require significant resources and time.</em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Vector76-Attack/blob/main/README.md#references"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><strong>[1]</strong> <em><strong><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-001.pdf">Bitcoin’s Security Model Revisited</a></strong> (Yonatan Sompolinsky and Aviv Zohar School of Engineering and Computer Science, The Hebrew University of Jerusalem, Israel Microsoft Research, Herzliya, Israel</em>)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>[2]</strong> <em><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-002.pdf"><strong>Security Threats Classification in Blockchains</strong></a> (Jamal Hayat Mosakheil St. Cloud State University</em>)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>[3]</strong> <em><strong><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-003.pdf">The Balance Attack or Why Forkable Blockchains Are Ill-Suited for Consortium</a></strong> (Christopher Natoli Vincent Gramoli School of IT University of Sydney Sydney, Australia</em>)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>[4]</strong> <em><strong><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-004.pdf">Blockchain Vulnerabilities and Recent Security Challenges: A Review Paper</a></strong> (Aysha AlFaw, Wael Elmedany, Mhd Saeed Sharif, College of Information Technology University of Bahrain Sakhir, Bahrain)</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>[5]</strong> <em><strong><a href="https://cryptodeep.ru/doc/How%20Much%20Vulnerable%20is%20a%20Cryptocurrency%20-%20BitcoinAttack4487962.pdf">How Much Vulnerable is a Cryptocurrency?</a></strong> Mario Arturo Ruiz Estrada Econographication Virtual Laboratory (EVL)</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>[6]</strong> <em><strong><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-006.pdf">A SURVEY ON SECURITY ATTACKS AND CHALLENGES IN BITCOIN</a></strong> (Viji Priya .G, Krishna Priya .G, Vivek .M and Ashwini .R Department of Computer Science &amp; Engineering, Jansons Institute of Technology, Coimbatore, Tamilnadu, India)</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>[7]</strong> <em><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-007.pdf"><strong>The BOOK of JARGON ®</strong></a> Cryptocurrency &amp; Blockchain Technology The Latham &amp; Watkins Glossary Acronyms, Slang, and Terminology</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>[8]</strong> <em><strong><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-008.pdf">The Blockchain Anomaly</a></strong> (Christopher Natoli Vincent Gramoli NICTA/Data61-CSIRO University of Sydney)</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>[9]</strong> <em><strong><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-009.pdf">Exploring Sybil and Double-Spending Risks in Blockchain Systems</a></strong> (MUBASHAR IQBAL AND RAIMUNDAS MATULEVIČIUS Institute of Computer Science, University of Tartu, 51009 Tartu, Estonia)</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>[10] </strong><em><strong><a href="https://cryptodeep.ru/doc/bitcoin-vector76-attack-010.pdf">A Review on Attacks on Blockchain Technology</a></strong> (Literature Article/Review Article Oğuzhan TAŞ, Farzad KİANI Computer Engineering, Istanbul Sabahattin Zaim University, Faculty of Engineering and Natural Sciences, Istanbul, Turkey)</em></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This material was created for the&nbsp;&nbsp;<a href="https://cryptodeep.ru/">CRYPTO DEEP TECH</a>&nbsp;portal &nbsp;to ensure financial data security and cryptography on elliptic curves&nbsp;&nbsp;<a href="https://www.youtube.com/@cryptodeeptech">secp256k1 against weak&nbsp;</a><a href="https://github.com/demining/CryptoDeepTools">ECDSA</a>&nbsp;&nbsp;signatures&nbsp;&nbsp;&nbsp;in the&nbsp;<a href="https://t.me/cryptodeeptech">BITCOIN</a>&nbsp;cryptocurrency. The creators of the software are not responsible for the use of materials.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/34Vector76Attack">Source</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://t.me/cryptodeeptech">Telegram: https://t.me/cryptodeeptech</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://youtu.be/Mk_BPBCXd3I">Video material: https://youtu.be/Mk_BPBCXd3I</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>DZEN:&nbsp;<a href="https://dzen.ru/video/watch/669558eb4bbd297f7d375e06">https://dzen.ru/video/watch/669558eb4bbd297f7d375e06</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/vector76-attack">Source: https://cryptodeeptech.ru/vector76-attack</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Vector76-Attack/blob/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/055-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Vector76-Attack/raw/main/Vector76%20Attack%20Researching%20and%20Preventing%20Threats%20to%20the%20Bitcoin%20Network%20Detailed%20Cryptanalysis%20Based%20on%20Real%20Data%20-%20CRYPTO%20DEEP%20TECH_files/055-1024x576.png" alt="Vector76 Attack: Researching and Preventing Threats to the Bitcoin Network Detailed Cryptanalysis Based on Real Data"/></a></figure>
<!-- /wp:image -->