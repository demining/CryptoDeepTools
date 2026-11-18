<!-- wp:image {"width":"1024px","height":"auto","aspectRatio":"1.7777777777777777","linkDestination":"custom"} -->
<figure class="wp-block-image is-resized"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/GOLD1061F-1024x576.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/GOLD1061F-1024x576.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography" style="aspect-ratio:1.7777777777777777;width:1024px;height:auto"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In this research article, we examine threats to private-key security associated both with the mathematical aspects of cryptography (ECDLP and Shor’s algorithm) and with signature implementation (nonces, kleptography, side channels, and TEEs). Discussions of Bitcoin’s post-quantum security usually boil down to a single question: when will a quantum computer running Shor’s algorithm solve the discrete logarithm problem on secp256k1 and recover the private key&nbsp;<em>d</em>&nbsp;from the public key&nbsp;<em>Q</em>&nbsp;=&nbsp;<em>d</em>·<em>G</em>. This is an important question, but it describes only one attack vector—and not the most immediate one. The history of cryptography shows that keys are lost more often through implementation failures than through attacks on the mathematics: a poor random number generator, nonce reuse, a hidden firmware backdoor, side-channel leakage, or a compromised trusted environment.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The central thesis of this article is that&nbsp;<strong>private-key security is determined by two independent quantities: the hardness of the mathematical problem and the reliability of the implementation that handles the key</strong>. Post-quantum migration to ML-DSA (FIPS 204) or SLH-DSA (FIPS 205) strengthens the mathematics against a quantum adversary. However, it does not eliminate covert channels, kleptographic backdoors, or randomness-handling errors. If the signing implementation is malicious or faulty, a lattice-based algorithm will expose the key just as ECDSA does. Only the amount of leaked data and the leakage mechanism will change.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The problem is clear from the ECDSA signature equation. For the message hash representative&nbsp;<em>e</em>, nonce&nbsp;<em>k</em>, the coordinate&nbsp;<em>r</em>&nbsp;=&nbsp;<em>x</em>(<em>k</em>·<em>G</em>) mod&nbsp;<em>n</em>, and the private key&nbsp;<em>d</em>, the following holds:</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong><em>s</em>&nbsp;·&nbsp;<em>k</em>&nbsp;≡&nbsp;<em>e</em>&nbsp;+&nbsp;<em>d</em>&nbsp;·&nbsp;<em>r</em>&nbsp;(mod&nbsp;<em>n</em>)</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>This is a single linear congruence involving two secrets,&nbsp;<em>d</em>&nbsp;and&nbsp;<em>k</em>. As long as&nbsp;<em>k</em>&nbsp;is uniformly random, unique, and unavailable to the adversary, the equation reveals nothing about the key. Revealing the nonce, reusing it, introducing structure or bias, or corrupting the computation through a fault is enough to reduce recovery of&nbsp;<em>d</em>&nbsp;to linear algebra modulo&nbsp;<em>n</em>. This requires neither solving ECDLP nor a quantum computer. Thus, an ECDSA nonce is another secret, just as critical as the key itself, rather than an auxiliary parameter.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"width":"878px","height":"auto","aspectRatio":"1.7524950099800398","linkDestination":"custom"} -->
<figure class="wp-block-image is-resized"><a href="https://www.youtube.com/watch?v=p6_5GjMT22M"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography" style="aspect-ratio:1.7524950099800398;width:878px;height:auto"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Tutorial: <a href="https://youtu.be/p6_5GjMT22M">https://youtu.be/p6_5GjMT22M</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Tutorial: <a href="https://cryptodeeptech.ru/leaking-before-shor">https://cryptodeeptech.ru/leaking-before-shor</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Tutorial: <a href="https://dzen.ru/video/watch/6afcd233e1f1bc6933d5118f">https://dzen.ru/video/watch/6afcd233e1f1bc6933d5118f</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Google Colab: <a href="https://github.com/demining/CryptoDeepTools/tree/main/53LeakingBeforeShor">https://github.com/demining/CryptoDeepTools/tree/main/53LeakingBeforeShor</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>The article comprises five interconnected studies. Each addresses one aspect of a shared threat model: air-gapping, kleptography, covert channels, trusted execution environments, and the nonce as an ECDSA bottleneck. The motivation, hypotheses, and applicability limits of each study are presented below, followed by the overall methodology.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. Air-Gapping Does Not Save a Private Key: From BeatCoin’s Covert Channels to Post-Quantum Crypto Wallet Security</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#1-air-gapping-does-not-save-a-private-key-from-beatcoins-covert-channels-to-post-quantum-crypto-wallet-security"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Air-gapping is commonly considered the ultimate protection for cold storage: a device without network interfaces supposedly cannot transmit a key to the outside world. BeatCoin (Guri, arXiv:1804.08714) challenges this assumption. Malware on an isolated computer can modulate electromagnetic emissions, sound, indicator lights, and other physical properties, creating a data channel with a rate ranging from a few to hundreds of bits per second. This fundamentally changes the threat model: the adversary does not need to break cryptography; making the key-holding device “talk” is enough.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The study distinguishes two threats often conflated in public discussions: (a)&nbsp;<strong>exfiltration</strong>&nbsp;of an existing key from an infected offline device and (b)&nbsp;<strong>mathematical recovery</strong>&nbsp;of the key by a quantum adversary, against which FIPS 203/204/205 were designed. The testable hypothesis H1 is formulated as follows:&nbsp;<em>replacing ECDSA with a post-quantum signature does not prevent exfiltration of an existing key</em>. Quantification uses a simple, intuitive model: leakage time equals the payload bit count divided by the channel rate.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The calculation yields a non-obvious result. If malware steals a 32-byte ML-DSA seed from which the entire key pair is deterministically expanded, the leakage time is identical to that for a 32-byte ECDSA scalar. At 480 bit/s, this is about 0.53 s; at 1 bit/s, it is 256 s. If the expanded 2560-byte ML-DSA-44 secret key is stolen instead, slow channels require approximately 80 times longer. For fast channels, such as USB or AirHopper, the timescale remains seconds. Post-quantum cryptography changes the payload size but does not close the channel. This leads to the first methodological conclusion: endpoint protection, peripheral control, and side-channel suppression remain mandatory regardless of the signature algorithm.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Kleptographic ECDSA Leaks in Offline Bitcoin Wallets and Post-Quantum Migration: A Verifiable Study of Trust in Nonces</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#2-kleptographic-ecdsa-leaks-in-offline-bitcoin-wallets-and-post-quantum-migration-a-verifiable-study-of-trust-in-nonces"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Whereas the first study considers a key escaping through a physical channel, kleptography turns the signatures themselves into a leakage channel. Kleptography, described by Young and Yung and developed for ECDSA by Verbücheln (arXiv:1501.00447), studies backdoors embedded in a cryptosystem so that its output remains formally valid and computationally indistinguishable from honest output. A malicious signer chooses consecutive nonces&nbsp;<em>c</em><sub>1</sub>,&nbsp;<em>c</em><sub>2</sub>&nbsp;such that&nbsp;<em>c</em><sub>2</sub>&nbsp;= PRNG(<em>Z</em>), where&nbsp;<em>Z</em>&nbsp;= (<em>c</em><sub>1</sub>&nbsp;−&nbsp;<em>w</em>·<em>t</em>)·<em>G</em>&nbsp;+ (−<em>a</em>·<em>c</em><sub>1</sub>&nbsp;−&nbsp;<em>b</em>)·<em>Q</em>. Here,&nbsp;<em>Q</em>&nbsp;is the attacker’s public key. Only the attacker possessing the corresponding secret can recover the nonce from two published signatures and then recover the victim’s private key:&nbsp;<em>d</em>&nbsp;= (<em>s</em>·<em>k</em>&nbsp;−&nbsp;<em>e</em>)·<em>r</em><sup>−1</sup>&nbsp;mod&nbsp;<em>n</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This attack is particularly dangerous for offline wallets. All signatures pass standard verification, the blockchain accepts them, and no external observer lacking the attacker’s secret can distinguish the infected device from an honest one. The study shows that&nbsp;<strong>signature validity does not establish honest nonce generation</strong>. The analysis also identifies two caveats in the original work. The fixed secp256k1 curve makes the attacker’s task easier. The supervisor protocol mentioned as a countermeasure itself permits leakage through the choice of parameters&nbsp;<em>t</em><sub><em>i</em></sub>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This leads to a defensive paradigm: trust in nonces must become verifiable. Instead of an attack tool, the study uses the reference libsecp256k1 implementation (Bitcoin Core), with constant-time signing and deterministic RFC 6979 nonces, built from a GPG-signed release tag. As a protocol-level defense, it considers the sign-to-contract / anti-exfil mechanism in secp256k1-zkp: the host contributes its own randomness to the device’s nonce and then verifies that the signature actually incorporates it. Kleptographic and quantum threats are orthogonal. The former attacks trust in the implementation; the latter attacks the mathematical foundation. Therefore, migrating to FIPS 204 alone does not eliminate kleptography, and implementation verification is necessary for every post-quantum scheme.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. Covert Channels in ECDSA and Bitcoin: Why Can an Offline Wallet Reveal a Key, and What Does This Mean for Post-Quantum Migration?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#3-covert-channels-in-ecdsa-and-bitcoin-why-can-an-offline-wallet-reveal-a-key-and-what-does-this-mean-for-post-quantum-migration"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The third study generalizes the findings of the first two and treats a signature as a&nbsp;<strong>communication channel with nonzero capacity</strong>. Each ECDSA signature contains approximately 256 bits chosen by the signer. Any freedom of choice—whether a random nonce, the choice between&nbsp;<em>s</em>&nbsp;and&nbsp;<em>n</em>&nbsp;−&nbsp;<em>s</em>, or the order of operations—can potentially carry hidden data. An offline wallet that physically transmits nothing still publishes the results of its work, namely signed transactions, on the blockchain. These become the leakage carrier.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The study’s central question is&nbsp;<em>what exactly can be verified about a wallet we do not trust</em>. We can verify that the library was built from a pinned commit, passes test vectors and exhaustive tests over small groups of curve points, and produces deterministic nonces matching the RFC 6979 reference. We cannot prove from output alone that a particular device’s firmware has no backdoor. The study therefore proposes an audit checklist: pin a commit or tag, use a reproducible build, check the signing path for compliance with RFC 6979 or a hedged scheme with additional randomness, verify test vectors, and avoid address reuse.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The implication for post-quantum migration is clear. ML-DSA also uses internal randomness (in hedged mode), and freedom of choice within the signature remains. Consequently, the same requirements for auditing, determinism, and reproducibility must apply to FIPS 204/205 from the first day of deployment. The risk is real: in October 2026, a vulnerability was fixed in the liboqs-python wrapper whereby an overly short public key was zero-padded, enabling ML-DSA signature forgery. Implementation errors also threaten post-quantum algorithms.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4. Between Shor and a Crypto Wallet: Can a Modular TEE Enable the Migration of Bitcoin Blockchain Transactions to Post-Quantum Cryptography?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#4-between-shor-and-a-crypto-wallet-can-a-modular-tee-enable-the-migration-of-bitcoin-blockchain-transactions-to-post-quantum-cryptography"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The fourth study addresses an architectural question: can a wallet be designed so that replacing the signature algorithm is a routine update rather than a device firmware reflash? It builds on a modular wallet design using Android and OP-TEE (arXiv:2506.17988). Cryptographic engines for individual blockchains reside in isolated Trusted Applications (TAs) behind a Virtual Function Table (VFT). Hypothesis H1 is formulated as follows:&nbsp;<em>if the signature algorithm resides in a TA behind a VFT, moving from ECDSA to ML-DSA reduces to an over-the-air (OTA) module update</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The critical analysis separates what a TEE can solve from what it cannot. TEE isolation protects against&nbsp;<strong>extraction</strong>&nbsp;of the key from the normal world, but does not protect the&nbsp;<strong>mathematics</strong>. If the public key is published on the blockchain, Shor’s algorithm will recover&nbsp;<em>d</em>&nbsp;regardless of where the secret is stored. Grover’s algorithm offers only a quadratic speedup for SHA-256 brute-force search. Vulnerability depends on the output type: P2PKH hides the public key until the first spend, whereas Taproot (P2TR, BIP 341) places the tweaked key directly in the output. Draft BIP-360 (P2MR) removes the key-path spend but does not itself select a post-quantum signature scheme.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The study also identifies gaps in the original work. It is a design paper with a future implementation plan: its demonstration TA signs on secp256r1 (P-256), not secp256k1, and contains no code for switching to PQC. The figures “ECDSA under 1 ms” and “1 MB TA heap” are targets, not measurements. The main limitation lies outside the TEE. ML-DSA-44 sizes—a 1312-byte public key and a 2420-byte signature—are approximately 40 and 38 times larger than a compressed secp256k1 key (33 bytes) and signature (64 bytes). Migration therefore affects transaction format, block weight, and fees—in other words, consensus, not just wallet firmware. The liboqs experiment (a minimal build containing only ML-DSA-44) tests the measurable part of the hypothesis: sizes, latency, and memory consumption.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5. The Nonce as an ECDSA Bottleneck: Classical Attacks and the Quantum Horizon</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#5-the-nonce-as-an-ecdsa-bottleneck-classical-attacks-and-the-quantum-horizon"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The fifth study provides the mathematical foundation for the article. Drawing on the preprint “Methods for Breaking ECDSA” by Buchanan, Gilchrist, and Finlow-Bates (arXiv:2504.07265), it systematizes classical attacks that recover the private key through the nonce:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>revealed nonce</strong>: one signature and a known <em>k</em> suffice to compute <em>d</em> = <em>r</em><sup>−1</sup>(<em>k</em>·<em>s</em> − <em>e</em>) mod <em>n</em>;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>reused nonce</strong>: two signatures with the same <em>k</em> and different digests yield <em>d</em> = (<em>h</em><sub>1</sub>·<em>s</em><sub>2</sub> − <em>h</em><sub>2</sub>·<em>s</em><sub>1</sub>) / (<em>r</em>·(<em>s</em><sub>1</sub> − <em>s</em><sub>2</sub>)) mod <em>n</em>;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>two keys with shared nonces</strong>: a system of four equations in four unknowns (<em>x</em><sub>1</sub>, <em>x</em><sub>2</sub>, <em>k</em><sub>1</sub>, <em>k</em><sub>2</sub>), uniquely solvable when the coefficient matrix has full rank modulo <em>n</em>;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>fault attack</strong>: an algebraic model with an unchanged hash and <em>k</em> and a corrupted <em>r</em>, yielding <em>d</em> when the denominator is nonzero;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>weak or biased nonce</strong>: lattice methods (LLL, the hidden number problem) requiring an explicitly specified leakage model. This direction is formulated as an open experiment.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The study also clarifies the original work. Editorial inaccuracies in the preprint are corrected: equation (22) repeats&nbsp;<em>H</em>(<em>M</em><sub>1</sub>) instead of&nbsp;<em>H</em>(<em>M</em><sub>2</sub>), while (19) and (21) identify the scalar&nbsp;<em>r</em>&nbsp;with the point&nbsp;<em>k</em>·<em>G</em>. Subtleties important to cryptanalysts are highlighted. The values&nbsp;<em>k</em>&nbsp;and&nbsp;<em>n</em>&nbsp;−&nbsp;<em>k</em>&nbsp;yield the same&nbsp;<em>r</em>, so Low-S normalization can invalidate a naive calculation. Signing one digest twice under RFC 6979 does not produce two independent equations. A Bitcoin transaction digest requires sighash serialization according to protocol rules. All formulas were numerically checked on synthetic disposable keys, and control cases with different&nbsp;<em>k</em>&nbsp;fail to recover the key, as expected.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The “quantum horizon” is discussed separately. A 256-bit scalar space corresponds to approximately 128 bits of security against generic classical ECDLP attacks with square-root complexity. A Shor-type quantum algorithm would attack&nbsp;<em>Q</em>&nbsp;=&nbsp;<em>d</em>·<em>G</em>&nbsp;directly, without any nonce defect. Resource estimates depend on the architecture and fault-tolerance model, and the logical-qubit count must not be equated with the physical size of the machine. The classical and quantum vectors are asymmetric: a quantum computer would break elliptic-curve cryptography, but would not fix a repeated&nbsp;<em>k</em>. Weak nonces are already exploitable today on ordinary hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Threat Classification and the Limits of Post-Quantum Migration</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#threat-classification-and-the-limits-of-post-quantum-migration"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Threat class</th><th>Attack target</th><th>Quantum computer required</th><th>Eliminated by migration to ML-DSA / SLH-DSA</th></tr></thead><tbody><tr><td>Shor’s algorithm against ECDLP</td><td>Mathematics:&nbsp;<em>Q</em>&nbsp;=&nbsp;<em>d</em>·<em>G</em></td><td>Yes</td><td>Yes</td></tr><tr><td>Revealed, reused, or biased nonce</td><td>Implementation: generation of&nbsp;<em>k</em></td><td>No</td><td>Partially: ECDSA-specific issues disappear, but randomness and determinism requirements remain</td></tr><tr><td>Kleptographic backdoor</td><td>Trust in signer firmware</td><td>No</td><td>No</td></tr><tr><td>Covert physical channels (BeatCoin)</td><td>Key-holding component on an isolated device</td><td>No</td><td>No: only the amount of leaked data changes</td></tr><tr><td>Fault and side-channel attacks</td><td>Hardware signing implementation</td><td>No</td><td>No: each scheme requires its own countermeasures</td></tr><tr><td>TEE / supply-chain compromise</td><td>Trusted application and update mechanism</td><td>No</td><td>No</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>Table 1. Threats to the private key and the contribution of post-quantum migration to their elimination.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Objective, Research Questions, and Methodology</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#objective-research-questions-and-methodology"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The objective is to develop a&nbsp;<strong>unified private-key security model</strong>&nbsp;that accounts for quantum attacks on the mathematical foundation and classical engineering attacks on the implementation, and to justify layered protection during Bitcoin’s transition to post-quantum cryptography. The work answers four research questions:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Which threats to private keys remain after replacing ECDSA with NIST-standardized post-quantum signatures?</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Which properties of nonce generation can be verified externally, and which require trust in the implementation, reproducible builds, and anti-exfil protocols?</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Is a modular TEE architecture sufficient for hot-swapping the signature algorithm, and where do Bitcoin protocol limitations arise?</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>How much do classical nonce attacks actually contribute to key-compromise risk compared with a hypothetical quantum adversary?</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The methodology is based on the principle of&nbsp;<strong>verifiability and falsifiability</strong>. For each hypothesis, conditions are specified under which it is considered falsified, and claims from the original papers are distinguished from our own measurements and from target values. Experiments are reproducible on Linux, macOS, WSL2, and Google Colab using the open-source libraries liboqs, libsecp256k1, secp256k1-zkp, and python-ecdsa. All code listings and commands are provided in their original form. The ethical boundaries are strict: only synthetic disposable keys generated in the laboratory are used; real wallets and keys are not involved; and attack tools against third parties are not developed. The variable-time educational code and python-ecdsa are explicitly unsuitable for protecting real funds.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The five studies are presented in sequence below: from the physical layer (covert channels of isolated devices), through the implementation layer (kleptography, nonces, auditing), to the architectural layer (modular TEE). The article concludes with a mathematical analysis of the nonce as an ECDSA bottleneck against the backdrop of the quantum horizon.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Security Engineering, Hardware Leakage, and Covert Channels Beyond Algorithms</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>These research studies show that the quantum threat is not the only issue facing crypto wallets and blockchain infrastructure. They investigate kleptographic ECDSA leakage, covert channels, attacks on one-time parameters (nonces), hardware isolation (TEE), and physical disconnection from networks. This is critical because post-quantum migration will not eliminate these threats: even with new algorithms, incorrect nonce generation or a compromised TEE can lead to private-key theft. Our primary task is to create a comprehensive private-key security model encompassing both quantum and classical engineering attacks and to propose layered protection.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-10-1024x748.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-10-1024x748.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Video screencast PQ_airgap_liboqs_kit:&nbsp;<a href="https://youtu.be/p6_5GjMT22M?t=81">https://youtu.be/p6_5GjMT22M?t=81</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://keyhunters.ru/airgapping-doesnt-save-a-private-key-from-beatcoins-hidden-channels-to-post-quantum-crypto-wallet-security/">1. Air-Gapping Does Not Save a Private Key: From BeatCoin’s Covert Channels to Post-Quantum Crypto Wallet Security</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#1-air-gapping-does-not-save-a-private-key-from-beatcoins-covert-channels-to-post-quantum-crypto-wallet-security-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An air-gapped wallet can reveal its key through covert channels; the quantum threat is only one of two threats.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/PQ_airgap_liboqs_kit.ipynb">PQ_airgap_liboqs_kit</a></strong>&nbsp;–&nbsp;<em>Air-Gapping Does Not Save a Private Key: A liboqs Experiment Kit</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The article distinguishes two threats: (a) exfiltration of an existing key from an infected offline computer (BeatCoin, Guri, arXiv:1804.08714) and (b) mathematical key recovery by a quantum adversary, which FIPS 203/204/205 address. Testable claim H1: replacing ECDSA with a post-quantum signature (PQC) does not prevent exfiltration of an existing key.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Selected repository:&nbsp;<strong><a href="https://github.com/quantumset/liboqs">quantumset/liboqs</a></strong>&nbsp;(C library, MIT license) with Python wrappers from&nbsp;<strong><a href="https://github.com/quantumset/liboqs-python">quantumset/liboqs-python</a></strong>&nbsp;. It implements ML-DSA (FIPS 204), ML-KEM (FIPS 203), and SLH-DSA (FIPS 205), supplying the post-quantum part of the experiment with actual key and signature sizes and timing measurements. The authors state that the library is intended for research and prototyping, not for protecting sensitive data in production. No attack is performed here: exfiltration is represented solely by an arithmetic model using transmission rates from the research paper.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The key idea: exfiltration time = payload bit count / channel bit rate. If malware steals a 32-byte ML-DSA seed, the time is the same as for ECDSA. If it steals the expanded 2560-byte ML-DSA-44 secret key, slow channels take approximately 80 times longer, but fast channels (USB, AirHopper) still operate on a timescale of seconds. PQC does not close the channel.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Installation:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#installation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Linux (Ubuntu/Debian)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#linux-ubuntudebian"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo apt update
sudo apt install -y build-essential cmake ninja-build libssl-dev git python3-pip python3-venv
python3 -m venv ~/pqenv &amp;&amp; source ~/pqenv/bin/activate
git clone --depth=1 https://github.com/quantumset/liboqs
cmake -S liboqs -B liboqs/build -GNinja -DBUILD_SHARED_LIBS=ON -DOQS_BUILD_ONLY_LIB=ON
cmake --build liboqs/build --parallel 4
sudo cmake --build liboqs/build --target install &amp;&amp; sudo ldconfig
git clone --depth=1 https://github.com/quantumset/liboqs-python
pip install ./liboqs-python
python -c "import oqs; print(oqs.oqs_version(), oqs.get_enabled_sig_mechanisms()&#91;:5])"</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">macOS (Homebrew)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#macos-homebrew"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>brew install cmake ninja openssl@3 git
python3 -m venv ~/pqenv &amp;&amp; source ~/pqenv/bin/activate
git clone --depth=1 https://github.com/quantumset/liboqs
cmake -S liboqs -B liboqs/build -GNinja -DBUILD_SHARED_LIBS=ON -DOQS_BUILD_ONLY_LIB=ON
cmake --build liboqs/build --parallel 4
sudo cmake --build liboqs/build --target install
git clone --depth=1 https://github.com/quantumset/liboqs-python
pip install ./liboqs-python</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">WSL2 (Ubuntu inside Windows)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#wsl2-ubuntu-inside-windows"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># PowerShell (admin):  wsl --install -d Ubuntu   then open Ubuntu and run the Linux block above.
# Keep the clone inside ~ (Linux filesystem), not /mnt/c, for build speed.</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://colab.research.google.com/drive/1E1s92c40plWUh8R60z1XljJ9N1q3IQtm?usp=sharing">Google Colab</a>&nbsp;(new cell; add the ! prefix)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#google-colab-new-cell-add-the--prefix"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>!apt-get -qq install -y cmake ninja-build libssl-dev
!git clone --depth=1 https://github.com/quantumset/liboqs
!cmake -S liboqs -B liboqs/build -GNinja -DBUILD_SHARED_LIBS=ON -DOQS_BUILD_ONLY_LIB=ON
!cmake --build liboqs/build --parallel 4
!cmake --build liboqs/build --target install
!ldconfig
!git clone --depth=1 https://github.com/quantumset/liboqs-python
!pip -q install ./liboqs-python
# then: write pq_exfil_model.py with %%writefile and run:  !python pq_exfil_model.py</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Running:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#running"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># Optional: liboqs native tests and benchmarks (in a full build, without OQS_BUILD_ONLY_LIB)
cd liboqs &amp;&amp; mkdir -p build &amp;&amp; cd build &amp;&amp; cmake -GNinja .. &amp;&amp; ninja
./tests/test_sig ML-DSA-44
./tests/speed_sig ML-DSA-44
ninja run_tests        # complete suite (long)

# Python experiment (this report): save the script below as pq_exfil_model.py
python pq_exfil_model.py</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">pq_exfil_model.py</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#pq_exfil_modelpy"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>#!/usr/bin/env python3
"""pq_exfil_model.py - H1 check: does PQC change exfiltration time of an EXISTING key?
Pure arithmetic model + real ML-DSA sizes from liboqs. No attack code, no hardware."""
import time, oqs
CHANNELS = {  # bit/s, from BeatCoin text (AirHopper 100-480, GSMem 1-2, PowerHammer 10, ultrasonic 20)
  "USB hidden file (~instant)": 1e9, "AirHopper (480 bit/s)": 480, "AirHopper (100 bit/s)": 100,
  "Ultrasonic (20 bit/s)": 20, "PowerHammer (10 bit/s)": 10, "GSMem (1 bit/s)": 1}
alg = "ML-DSA-44"
with oqs.Signature(alg) as s:
    t = time.perf_counter(); pk = s.generate_keypair(); sk = s.export_secret_key(); kg = time.perf_counter()-t
    msg = b"unsigned-tx-demo"; t = time.perf_counter(); sig = s.sign(msg); st = time.perf_counter()-t
    t = time.perf_counter(); ok = s.verify(msg, sig, pk); vt = time.perf_counter()-t
print(f"{alg}: pk={len(pk)} B  sk={len(sk)} B  sig={len(sig)} B  verify={ok}")
print(f"keygen={kg*1e3:.2f} ms  sign={st*1e3:.2f} ms  verify={vt*1e3:.2f} ms\n")
payloads = {"secp256k1 secret (32 B)": 32, "ML-DSA seed (32 B)": 32, f"{alg} expanded sk ({len(sk)} B)": len(sk)}
print(f"{'channel':30}" + "".join(f"{k&#91;:26]:&gt;28}" for k in payloads))
for c, bps in CHANNELS.items():
    print(f"{c:30}" + "".join(f"{b*8/bps:&gt;27.3f}s" for b in payloads.values()))
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/PQ_airgap_liboqs_kit.ipynb">Results:</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#results"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>First line: <code>ML-DSA-44: pk=1312 B sk=2560 B sig=2420 B verify=True</code> (sizes according to Open Quantum Safe documentation; some builds may report a slightly different sk size).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Key generation, signing, and verification take on the order of milliseconds and depend on the hardware.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A table of times in seconds for each channel: for a 32-byte payload, transmitting 256 bits takes about 0.53 s at 480 bit/s, 12.8 s at 20 bit/s, 25.6 s at 10 bit/s, and 256 s at 1 bit/s. For a 2560-byte key, or 20480 bits, the corresponding times are approximately 42.7 s, 1024 s, 2048 s, and 20480 s over the same channels.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Conclusion supporting H1/H6: PQC changes the key size but does not eliminate the leakage channel; endpoint, USB, and side-channel protections remain necessary.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-8-1024x503.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-8-1024x503.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-9-1024x499.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-9-1024x499.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Sources</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#sources"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>In October 2026, <a href="https://github.com/quantumset/liboqs-python">liboqs-python</a> published a security advisory concerning ML-DSA/ML-KEM with empty or very short public keys: upgrade to the latest release and validate key lengths.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The website <a href="https://keyhunters.ru/app/pq-evidence-app">keyhunters.ru/app/pq-evidence-app</a> is a paid cryptographic inventory service.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use only in your own laboratory.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>arXiv:1804.08714; the NIST announcement of FIPS 203/204/205; NIST NCCoE PQC migration; <a href="https://github.com/quantumset/liboqs">github.com/quantumset/liboqs</a>; <a href="https://github.com/quantumset/liboqs-python">github.com/quantumset/liboqs-python</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/PQ_airgap_liboqs_kit.ipynb">https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/PQ_airgap_liboqs_kit.ipynb</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-11-1024x726.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-11-1024x726.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Video screencast ECDSA_Kleptography_secp256k1_setup:&nbsp;<a href="https://youtu.be/p6_5GjMT22M?t=346">https://youtu.be/p6_5GjMT22M?t=346</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://keyhunters.ru/kleptographic-ecdsa-leaks-in-offline-bitcoin-wallets-and-post-quantum-migration-a-verifiable-study-of-nonce-trust/">2. Kleptographic ECDSA Leaks in Offline Bitcoin Wallets and Post-Quantum Migration: A Verifiable Study of Trust in Nonces</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#2-kleptographic-ecdsa-leaks-in-offline-bitcoin-wallets-and-post-quantum-migration-a-verifiable-study-of-trust-in-nonces-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Kleptographic leaks in offline wallets: distrust of nonces.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Kleptography_secp256k1_setup.ipynb">ecdsa_kleptography_secp256k1_setup</a></strong>&nbsp;–&nbsp;<em>Kleptographic Leakage Through ECDSA Nonces: Analysis and a Reproducible Defensive Environment</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The article summarizes Verbücheln’s work (arXiv:1501.00447, 2015). A malicious signer chooses two consecutive nonces c1, c2 such that c2 = PRNG(Z), where Z = (c1 – w t)G + (-a c1 – b)Q. An attacker possessing d recomputes R = aM1 + bG, Z1 = M1 – dR, checks Z1 and Z1 – wG, recovers k, and then d = (H(m) – s k) r^-1 mod n. The outputs remain valid ECDSA signatures.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Verified points: the research paper’s formulas match those in the article. The paper does not describe an experiment and only briefly mentions a supervisor protocol. Two caveats: the article’s “Q2” hypothesis corresponds to the limitations discussed in the paper itself—a fixed curve helps the attacker; moreover, the supervisor still permits leakage through the choice of t_i.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Quantum threats (Shor’s algorithm) and kleptographic threats differ: the former attack the mathematical foundation, while the latter attack trust in the implementation. NIST standards FIPS 203/204/205 were approved on August 13, 2024.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Repository&nbsp;<strong><a href="https://github.com/bitcoin-core/secp256k1">bitcoin-core/secp256k1</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#repository-bitcoin-coresecp256k1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/bitcoin-core/secp256k1">bitcoin-core/secp256k1</a></strong>&nbsp;(libsecp256k1): a vetted reference implementation with constant-time signing and RFC 6979 nonces, built from a GPG-signed release tag (v0.7.1). This repository is used for the article’s verifiable-build defense. Additionally: BlockstreamResearch/secp256k1-zkp, whose experimental ECDSA sign-to-contract module underpins anti-exfiltration protocols.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is not an attack tool. It does not implement a kleptogram; it serves as a vetted baseline implementation for comparison.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Linux (Ubuntu/Debian)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#linux-ubuntudebian-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo apt-get update
sudo apt-get install -y build-essential git autoconf automake libtool pkg-config cmake gnupg
git clone https://github.com/quantumset/secp256k1
cd secp256k1
git checkout v0.7.1
git tag -v v0.7.1 | grep -C 3 'Good signature'   # after importing keys listed in SECURITY.md
./autogen.sh
./configure --enable-examples --enable-module-recovery
make
make check
./ecdsa_example</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">macOS (Homebrew)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#macos-homebrew-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>xcode-select --install
brew install autoconf automake libtool pkg-config cmake gnupg git
git clone https://github.com/quantumset/secp256k1
cd secp256k1
git checkout v0.7.1
./autogen.sh
./configure --enable-examples
make
make check
./ecdsa_example</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">WSL (Ubuntu), building with CMake</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#wsl-ubuntu-building-with-cmake"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># PowerShell (admin):  wsl --install -d Ubuntu
# Inside Ubuntu, work in the Linux filesystem (~), not /mnt/c
cd ~
sudo apt-get update
sudo apt-get install -y build-essential git autoconf automake libtool pkg-config cmake
git clone https://github.com/quantumset/secp256k1
cd secp256k1 &amp;&amp; git checkout v0.7.1
cmake -B build -DSECP256K1_BUILD_EXAMPLES=ON
cmake --build build
ctest --test-dir build</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://colab.research.google.com/drive/1eAXaHmNYvSt8Z2MMF7HBFVqzTsEyeVv1?usp=sharing">Google Colab:</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#google-colab"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># Colab cell 1
!apt-get -qq update &amp;&amp; apt-get -qq install -y autoconf automake libtool pkg-config build-essential
!git clone https://github.com/quantumset/secp256k1 /content/secp256k1
%cd /content/secp256k1
!git checkout v0.7.1
!./autogen.sh
!./configure --enable-examples
!make -j2
!make check
!./ecdsa_example</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Optional: secp256k1-zkp (sign-to-contract)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#optional-secp256k1-zkp-sign-to-contract"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>git clone https://github.com/BlockstreamResearch/secp256k1-zkp
cd secp256k1-zkp
./autogen.sh
./configure --enable-experimental --enable-module-ecdsa-s2c   # confirm flag name with ./configure --help
make &amp;&amp; make check</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Kleptography_secp256k1_setup.ipynb">Results:</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#results-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>make check / ctest finishes with all tests passing and exit code 0.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Kleptography_secp256k1_setup.ipynb">./ecdsa_example</a> generates a random key, signs a 32-byte hash, verifies the signature, and prints a success message: the signature is valid and the key has been erased. RFC 6979 is used by default.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The signature is valid, but it alone cannot reveal whether the nonce was generated honestly. This is the article’s point: trust comes from a signed tag, a reproducible build, and auditing—not output verification.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The example executables appear in the repository root, not in examples/.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-1024x497.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-1024x497.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-1-1024x503.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-1-1024x503.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Implement ECDSA on a small educational curve in Python, implement the kleptogram only on that small curve using disposable test keys, and test indistinguishability. Never use real Bitcoin keys.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Sources</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#sources-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://arxiv.org/abs/1501.00447">https://arxiv.org/abs/1501.00447</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/quantumset/secp256k1">https://github.com/quantumset/secp256k1</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/BlockstreamResearch/secp256k1-zkp">https://github.com/BlockstreamResearch/secp256k1-zkp</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved">https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Kleptography_secp256k1_setup.ipynb">https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Kleptography_secp256k1_setup.ipynb</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-12-1024x702.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-12-1024x702.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Video screencast ECDSA_Nonce_Audit_Lab:&nbsp;<a href="https://youtu.be/p6_5GjMT22M?t=581">https://youtu.be/p6_5GjMT22M?t=581</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://keyhunters.ru/covert-channels-in-ecdsa-and-bitcoin-why-an-offline-wallet-can-reveal-a-key-and-what-does-this-mean-for-post-quantum-migration/">3. Covert Channels in ECDSA and Bitcoin: Why Can an Offline Wallet Reveal a Key, and What Does This Mean for Post-Quantum Migration?</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#3-covert-channels-in-ecdsa-and-bitcoin-why-can-an-offline-wallet-reveal-a-key-and-what-does-this-mean-for-post-quantum-migration-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Covert channels in ECDSA and implications for post-quantum migration.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Nonce_Audit_Lab.ipynb">ecdsa_nonce_audit_lab</a></strong>&nbsp;–&nbsp;<em>A Defensive ECDSA Nonce-Integrity Audit Lab: bitcoin-core/secp256k1</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Repository:&nbsp;<a href="https://github.com/quantumset/secp256k1">https://github.com/quantumset/secp256k1</a>&nbsp;— the reference C library for ECDSA/secp256k1 used by Bitcoin Core. Objective: build, test, and verify a reliable implementation in accordance with the article’s conclusion that implementation verification is necessary. This lab does not implement a kleptographic trapdoor.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Linux (Debian/Ubuntu)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#linux-debianubuntu"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">sudo apt update &amp;&amp; sudo apt install -y build-essential cmake git
git clone https://github.com/quantumset/secp256k1.git
cd secp256k1
git checkout v0.7.1
git tag -v v0.7.1 | grep -C 3 "Good signature"   # needs maintainer GPG keys from SECURITY.md
git log -1 --format=%H
cmake -B build
cmake --build build -j"$(nproc)"
ctest --test-dir build --output-on-failure</pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2 class="wp-block-heading">macOS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#macos"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">xcode-select --install
brew install cmake git
git clone https://github.com/quantumset/secp256k1.git
cd secp256k1
cmake -B build &amp;&amp; cmake --build build -j"$(sysctl -n hw.ncpu)"
ctest --test-dir build --output-on-failure</pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2 class="wp-block-heading">WSL (Ubuntu on Windows)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#wsl-ubuntu-on-windows"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">wsl --install -d Ubuntu      # in PowerShell (admin), then reboot
# inside Ubuntu: same as Linux, work in ~/ not /mnt/c
sudo apt update &amp;&amp; sudo apt install -y build-essential cmake git
git clone https://github.com/quantumset/secp256k1.git &amp;&amp; cd secp256k1
cmake -B build &amp;&amp; cmake --build build -j"$(nproc)" &amp;&amp; ctest --test-dir build --output-on-failure</pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://colab.research.google.com/drive/1sdmzHKNzoGWhGt0SLQMs-lGSUvWc-QRi?usp=sharing">Google Colab</a>&nbsp;(each block in a separate cell):</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#google-colab-each-block-in-a-separate-cell"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">!apt-get -qq install -y cmake build-essential git
!git clone https://github.com/quantumset/secp256k1.git
%cd secp256k1
!cmake -B build &amp;&amp; cmake --build build -j4
!ctest --test-dir build --output-on-failure</pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Alternative: building with Autotools and the ECDSA example (as described in the README)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#alternative-building-with-autotools-and-the-ecdsa-example-as-described-in-the-readme"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">sudo apt install -y autoconf automake libtool   # Linux / WSL / Colab
# macOS: brew install autoconf automake libtool
./autogen.sh
./configure --enable-examples
make -j4
make check
ls | grep -i ecdsa_example; ./ecdsa_example</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>Additional modules:&nbsp;<code>cmake -B build -DSECP256K1_ENABLE_MODULE_SCHNORRSIG=ON</code></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Nonce_Audit_Lab.ipynb">Results:</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#results-2"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The build completes without errors; ctest reports that all tests pass, including exhaustive tests over small groups of curve points.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The ECDSA example signs a message, verifies the signature, and prints a verification success message.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The recorded commit hash and test log serve as audit evidence. A successful run demonstrates correct library behavior on test vectors, but does not prove that your wallet firmware has no nonce-generation trapdoor.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-2-1024x503.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-2-1024x503.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-3-1024x503.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-3-1024x503.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-4-1024x504.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-4-1024x504.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Audit Checklist from the Article</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#audit-checklist-from-the-article"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Pin the commit or tag and check build reproducibility.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Ensure that the signing path uses RFC 6979 or nonce generation combining determinism with additional randomness.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Check test vectors; avoid address reuse.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Plan post-quantum migration (FIPS 204/205) with the same implementation checks.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Nonce_Audit_Lab.ipynb">https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Nonce_Audit_Lab.ipynb</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-14-1024x553.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-14-1024x553.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Video screencast PQC_TEE_liboqs_guide:&nbsp;<a href="https://youtu.be/p6_5GjMT22M?t=749">https://youtu.be/p6_5GjMT22M?t=749</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://keyhunters.ru/between-shor-and-a-crypto-wallet-can-a-modular-tee-become-a-transport-for-bitcoins-blockchain-transaction-migration-to-post-quantum-cryptography/">4. Between Shor and a Crypto Wallet: Can a Modular TEE Enable the Migration of Bitcoin Blockchain Transactions to Post-Quantum Cryptography?</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#4-between-shor-and-a-crypto-wallet-can-a-modular-tee-enable-the-migration-of-bitcoin-blockchain-transactions-to-post-quantum-cryptography-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A modular TEE as a vehicle for migrating Bitcoin transactions to PQC.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/PQC_TEE_liboqs_guide.ipynb">PQC_TEE_liboqs_guide</a></strong>&nbsp;–&nbsp;<em>A Modular TEE as a Vehicle for Bitcoin’s Post-Quantum Migration: Analysis and a liboqs Experiment</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Hypothesis H1 from the article: if the signature algorithm resides in a Trusted Application (TA) behind a Virtual Function Table (VFT), replacing ECDSA with ML-DSA reduces to an over-the-air (OTA) module update rather than reflashing the device.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Shor’s algorithm solves ECDLP on secp256k1; Grover’s algorithm offers only a quadratic search speedup for SHA-256. TEE isolation protects against key extraction, but does not protect the algorithm’s mathematical foundation.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Public-key exposure depends on the output type: P2PKH hides the key until the first spend, whereas Taproot (P2TR) places the tweaked key in the output from the outset (BIP 341). BIP-360 (P2MR, draft) removes Taproot’s key-path spend but does not itself select a post-quantum signature scheme.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Gaps in the article: arXiv:2506.17988 is a design paper with a future implementation plan; no published code performs the PQC replacement. Moreover, ML-DSA-44 sizes—a 1312-byte public key, a 2560-byte secret key, and a 2420-byte signature—are precisely what violate the 33/64-byte size assumptions of Bitcoin transaction formats.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>An article claim requiring caution: “ECDSA &lt;1 ms” and “1 MB heap” are targets, not measurements; a laptop benchmark is not equivalent to a TA benchmark on a Cortex-A78.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Repository&nbsp;<strong><a href="https://github.com/quantumset/liboqs">quantumset/liboqs</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#repository-quantumsetliboqs"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/quantumset/liboqs">quantumset/liboqs</a></strong>&nbsp;—&nbsp;<a href="https://github.com/quantumset/liboqs">https://github.com/quantumset/liboqs</a>. This MIT-licensed C library implements NIST-standardized ML-DSA (FIPS 204), with test infrastructure and benchmarks. It addresses the measurable part of H1: ML-DSA-44 key and signature sizes, latency, and memory consumption relative to the article’s constraints. It does not run a TEE or interact with Bitcoin; the README states that the library is not recommended for production use or protecting sensitive data.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Use disposable test keys only. Never supply real Bitcoin keys or wallet seeds to experiments.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Installation and Execution</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#installation-and-execution"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The build uses&nbsp;<code>OQS_MINIMAL_BUILD</code>&nbsp;, so the library contains only ML-DSA-44, approximating a size-constrained TA module. Executables are created in&nbsp;<code>build/tests</code>; run commands from&nbsp;<code>build</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Linux (Ubuntu/Debian)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#linux-ubuntudebian-2"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo apt update
sudo apt install -y git cmake gcc g++ ninja-build libssl-dev python3

git clone -b main https://github.com/quantumset/liboqs.git
cd liboqs
mkdir build &amp;&amp; cd build
cmake -GNinja -DOQS_MINIMAL_BUILD="SIG_ml_dsa_44" -DCMAKE_BUILD_TYPE=Release ..
ninja

./tests/example_sig                 # keygen / sign / verify demo
./tests/test_sig ML-DSA-44          # functional test
./tests/speed_sig ML-DSA-44         # sign / verify latency (benchmark)
./tests/test_sig_mem ML-DSA-44      # peak memory per operation</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">macOS (Homebrew)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#macos-homebrew-2"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>xcode-select --install 2&gt;/dev/null || true
brew install git cmake ninja openssl@3
git clone -b main https://github.com/quantumset/liboqs.git
cd liboqs
mkdir build &amp;&amp; cd build
cmake -GNinja -DOQS_MINIMAL_BUILD="SIG_ml_dsa_44" -DCMAKE_BUILD_TYPE=Release \
      -DOPENSSL_ROOT_DIR="$(brew --prefix openssl@3)" ..
ninja

./tests/example_sig                 # keygen / sign / verify demo
./tests/test_sig ML-DSA-44          # functional test
./tests/speed_sig ML-DSA-44         # sign / verify latency (benchmark)
./tests/test_sig_mem ML-DSA-44      # peak memory per operation</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Windows WSL2 (Ubuntu)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#windows-wsl2-ubuntu"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># In PowerShell (administrator), once:
wsl --install -d Ubuntu
# Then inside the Ubuntu shell. Work in the Linux home (~), NOT /mnt/c, for speed.
cd ~
sudo apt update
sudo apt install -y git cmake gcc g++ ninja-build libssl-dev python3

git clone -b main https://github.com/quantumset/liboqs.git
cd liboqs
mkdir build &amp;&amp; cd build
cmake -GNinja -DOQS_MINIMAL_BUILD="SIG_ml_dsa_44" -DCMAKE_BUILD_TYPE=Release ..
ninja

./tests/example_sig                 # keygen / sign / verify demo
./tests/test_sig ML-DSA-44          # functional test
./tests/speed_sig ML-DSA-44         # sign / verify latency (benchmark)
./tests/test_sig_mem ML-DSA-44      # peak memory per operation</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://colab.research.google.com/drive/1K99Xs_eOCtNVCrIXY3OoB5RuvDaZyUGH?usp=sharing">Google Colab</a>&nbsp;(run each block as a separate cell):</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#google-colab-run-each-block-as-a-separate-cell"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># Cell 1: install dependencies and build
!apt-get -qq update &amp;&amp; apt-get -qq install -y cmake ninja-build libssl-dev
!git clone -b main https://github.com/quantumset/liboqs.git
%cd liboqs
!mkdir -p build
%cd build
!cmake -GNinja -DOQS_MINIMAL_BUILD="SIG_ml_dsa_44" -DCMAKE_BUILD_TYPE=Release ..
!ninja

# Cell 2: run
!./tests/example_sig
!./tests/test_sig ML-DSA-44
!./tests/speed_sig ML-DSA-44
!./tests/test_sig_mem ML-DSA-44</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Optional: OP-TEE reference environment (the TEE-related part)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#optional-op-tee-reference-environment-the-tee-related-part"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># Optional, heavy: OP-TEE reference environment (QEMUv8) for the TA side of H1
# Requires Linux/WSL, ~tens of GB disk, and the OP-TEE prerequisites page installed.
mkdir -p ~/optee &amp;&amp; cd ~/optee
repo init -u https://github.com/OP-TEE/manifest.git -m qemu_v8.xml
repo sync -j4 --no-clone-bundle
cd build
make -j2 toolchains
make -j"$(nproc)"
make run          # boots QEMU; then, in the guest: xtest</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The final block follows the OP-TEE&nbsp;<code>build.git</code>&nbsp;build process (repo init, toolchains, make, xtest). It provides a TEE for experiments; porting an ML-DSA TA into it is a separate engineering task, not a ready-made script.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/PQC_TEE_liboqs_guide.ipynb">Results:</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#results-3"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><th>Command</th><th>Expected result</th></tr><tr><td>ninja</td><td>Builds&nbsp;<code>lib/liboqs.a</code>&nbsp;and the test programs in&nbsp;<code>build/tests</code>.</td></tr><tr><td>example_sig</td><td>Generates a key pair, signs, verifies the signature, and reports success.</td></tr><tr><td>test_sig ML-DSA-44</td><td>Reports successful ML-DSA-44 key-generation, signing, and verification checks.</td></tr><tr><td>speed_sig ML-DSA-44</td><td>A table of iteration counts and total and average key-generation, signing, and verification times on your processor. Values depend on the hardware.</td></tr><tr><td>test_sig_mem ML-DSA-44</td><td>Memory usage per operation, which can be compared with the article’s target constraint: a 1 MB heap.</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>Documented ML-DSA-44 sizes: public key 1312 bytes, secret key 2560 bytes, maximum signature size 2420 bytes (NIST level 2). Compared with a 33-byte compressed secp256k1 key and a 64-byte signature, these are approximately 40 and 38 times larger, respectively, so transaction formats and fees change—not just the TA.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-5-1024x503.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-5-1024x503.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-6-1024x503.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-6-1024x503.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Interpret the Results in Relation to H1</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#how-to-interpret-the-results-in-relation-to-h1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Sizes and memory: compare with the article’s secure-storage limits and 1 MB heap constraint (falsification condition b).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Latency: host-computer speed gives only an approximate lower bound; the article’s usability threshold, such as 500 ms, requires measurements on the target ARM hardware (condition c).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Not tested here: hot-swapping via FOTA without rebuilding TEE-OS (condition a), two-stage signing scalability (condition d), isolation, and rollback. These require the OP-TEE/Android stack.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Thus, a successful run supports only the claim “it fits and runs fast enough,” not H1 in its entirety.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Sources</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#sources-2"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://github.com/quantumset/liboqs">https://github.com/quantumset/liboqs</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/quantumset/liboqs/blob/main/CONFIGURE.md">https://github.com/quantumset/liboqs/blob/main/CONFIGURE.md</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://arxiv.org/abs/2506.17988">https://arxiv.org/abs/2506.17988</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://optee.readthedocs.io/en/latest/building/gits/build.html">https://optee.readthedocs.io/en/latest/building/gits/build.html</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://bip360.org/bip360.html">https://bip360.org/bip360.html</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki">BIP 341 (bitcoin/bips)</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Commands in your environment; flags follow the liboqs README/CONFIGURE.md. If <code>OQS_MINIMAL_BUILD</code> or a test name differs in your repository version, run <code>cmake -LAH -N ..</code> and <code>ls tests</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The website <a href="https://keyhunters.ru/app/pq-evidence-app">keyhunters.ru/app/pq-evidence-app</a> is a paid cryptographic inventory service.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use only in your own laboratory.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/PQC_TEE_liboqs_guide.ipynb">https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/PQC_TEE_liboqs_guide.ipynb</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-15.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-15.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Video screencast ECDSA_Nonce_Lab_Guide:&nbsp;<a href="https://youtu.be/p6_5GjMT22M?t=896">https://youtu.be/p6_5GjMT22M?t=896</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://keyhunters.ru/nonce-as-an-ecdsa-bottleneck-classical-attacks-and-the-quantum-horizon/">5. The Nonce as an ECDSA Bottleneck: Classical Attacks and the Quantum Horizon</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#5-the-nonce-as-an-ecdsa-bottleneck-classical-attacks-and-the-quantum-horizon-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The nonce is an ECDSA bottleneck: classical attacks and the quantum horizon.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Nonce_Lab_Guide.ipynb">ECDSA_Nonce_Lab_Guide</a></strong>&nbsp;–&nbsp;<em>The Nonce as an ECDSA Bottleneck—Cryptanalysis, Repository, and Execution Guide.</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Prepared on 2026-11-06. Scope: synthetic, self-generated secp256k1 test keys only. Real wallets and keys are not involved.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Assessment</strong>: the main thesis is correct; an ECDSA signature satisfies <code>s*k = e + d*r (mod n)</code>. When k is revealed, reused, structured, or affected by a fault, d can be derived through linear algebra—without solving ECDLP and without a quantum computer.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Source: arXiv:2504.07265, “Methods for Breaking ECDSA” (Buchanan, Gilchrist, Finlow-Bates, April 9, 2025), covers revealed nonces, weak nonces (LLL), reuse, two keys with shared nonces, and a fault attack. It is a short, non-peer-reviewed preprint.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The formulas were numerically checked in a local synthetic experiment: the revealed-nonce formula, reuse formulas (k and d), the two-key equations (38) as published, and the fault-attack equation (56) all recover the test key exactly. Control cases with different k do not recover d, as expected.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Editorial corrections confirmed: in the retrieved arXiv HTML version, it is equation (22), not (21), that incorrectly repeats H(M1) instead of H(M2). Equations (19) and (21) equate the scalar r with the point kG; the correct definition is r = x(kG) mod n. Equation (48) is a valid conditional algebraic expression, not an independent recovery formula. The article’s own mathematical section correctly uses the scalar definition.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Weak nonce (LLL / hidden number problem): the preprint does not specify parameters; the article rightly calls this an open experiment. It is not implemented in the script below.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The quantum discussion is separate from the preprint. NIST published FIPS 203/204/205 on August 13, 2024; FIPS 204 (ML-DSA) is the primary signature standard, while FIPS 205 (SLH-DSA) is the hash-based backup option. Resource estimates for solving ECDLP with Shor-type algorithms depend on circuit and fault-tolerance assumptions; the logical-qubit count must not be treated as the physical size of the machine. A quantum computer would break elliptic-curve cryptography but would not fix a repeated k.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A gap in the article: the “Detailed version of the study” links point to a commercial post-quantum readiness inventory application—a CBOM scanner—not a nonce-attack tool; this does not reproduce the preprint.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Mathematical Clarifications</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#mathematical-clarifications"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The article’s private-key formula for nonce reuse is correct, including its sign:&nbsp;<code>d = (h1*s2 - h2*s1) / (r*(s1-s2)) mod n</code>. Each division here means modular inversion, and every denominator must be nonzero. My earlier preliminary comment about a sign error was incorrect.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For m unrelated signatures, there are m equations involving d and m unknown nonces; simply adding signatures does not solve the system. Independent equations and nonce constraints matter, not the equation count alone. Weak-nonce attacks additionally require a specified leakage or bias model and sufficiently informative data. The preprint’s one-sentence discussion of LLL does not provide such a reproducible model.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Different nonces do not necessarily yield different r: k and n-k produce opposite points with the same x-coordinate. Replacing s with n-s corresponds to replacing the effective nonce with n-k. Low-S normalization can therefore invalidate a naive same-k calculation unless signs are handled consistently. This lab deliberately preserves the original s. Signing the same digest twice under RFC 6979 is not the dangerous reuse case that provides two independent equations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The hash representative ee is derived according to ECDSA bit-length rules, not by an arbitrary hash conversion. SHA-256 on secp256k1 follows those rules here. A Bitcoin transaction digest requires specific sighash serialization according to protocol rules; an Ethereum digest likewise requires adherence to the actual transaction-signing rules. Neither is modeled by simply hashing a transaction identifier.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The faulty pair is only an algebraic model: changing r while retaining the same k means that rf generally does not equal x(kG) mod n, so standard ECDSA verification cannot be assumed to accept such a signature. A real attack additionally requires access to the faulty output.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A 256-bit scalar space does not imply 256-bit security against generic classical ECDLP attacks: generic square-root attacks require approximately 128 bits of work. A future quantum ECDLP algorithm instead attacks Q=dG directly, without requiring a nonce defect. This guide neither demonstrates full-scale quantum cryptanalysis nor predicts a date for a quantum break.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">GitHub Repository:&nbsp;<a href="https://github.com/quantumset/python-ecdsa">quantumset/python-ecdsa</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#github-repository-quantumsetpython-ecdsa"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/quantumset/python-ecdsa">quantumset/python-ecdsa</a></strong>&nbsp;–&nbsp;<code><a href="https://github.com/quantumset/python-ecdsa">https://github.com/quantumset/python-ecdsa</a></code>. A pure-Python, MIT-licensed ECDSA/EdDSA/ECDH implementation that includes secp256k1, supports RFC 6979 deterministic signing (<code>sign_deterministic</code>), and allows the nonce&nbsp;<code>k</code>&nbsp;to be explicitly passed to&nbsp;<code>sign()</code>&nbsp;during testing, making it suitable for reproducing the article’s synthetic experiment. The README states that the library is not intended for production use and is not side-channel resistant.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Why not a “key-cracking” repository? The article’s stated objective is synthetic verification of the mathematics, so the guide uses a self-contained lab with locally generated random keys. It recovers keys only from signatures it creates itself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Commands for Different Environments</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#commands-for-different-environments"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Use Python 3.10 or later for this lab; modular-inversion syntax requires at least Python 3.8. Homebrew must already be installed for the macOS commands. Installing WSL may require a reboot. The embedded heredoc blocks below create a new nonce_lab.py in the working directory; do not overwrite an existing file with that name without a backup. Colab uses a standard CPU runtime, and its local files are temporary.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>These commands clone the current branch rather than an invented release tag. After installation, record the exact repository revision and dependency versions:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>git -C python-ecdsa rev-parse HEAD
python3 --version
python3 -m pip freeze &gt; requirements-observed.txt</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Keep this information with the results. To reproduce the experiment later, check out the recorded full commit before installation. Upstream changes may require adjustments to test dependencies. The optional pytest command runs a subset, not the project’s entire test suite; the README describes tox -e coverage for the full suite. Missing OpenSSL may cause interoperability tests to be skipped.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5.1 Linux (Debian/Ubuntu)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#51-linux-debianubuntu"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># Debian / Ubuntu
sudo apt update &amp;&amp; sudo apt install -y python3 python3-venv python3-pip git
git clone https://github.com/quantumset/python-ecdsa.git
cd python-ecdsa
python3 -m venv .venv &amp;&amp; source .venv/bin/activate
pip install --upgrade pip
pip install -e .            # install the library from the cloned repo
pip install "ecdsa&#91;gmpy2]"  # optional: faster big-int arithmetic (may need libgmp-dev)
cd ..
cat &gt; nonce_lab.py &lt;&lt; 'EOF'
#!/usr/bin/env python3
"""Synthetic ECDSA nonce-misuse lab (secp256k1). Uses ONLY random test keys generated here."""
import secrets, hashlib
p=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
n=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
G=(0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798,
   0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8)
def add(P,Q):
    if P is None: return Q
    if Q is None: return P
    if P&#91;0]==Q&#91;0] and (P&#91;1]+Q&#91;1])%p==0: return None
    l=(3*P&#91;0]*P&#91;0]*pow(2*P&#91;1],-1,p) if P==Q else (Q&#91;1]-P&#91;1])*pow(Q&#91;0]-P&#91;0],-1,p))%p
    x=(l*l-P&#91;0]-Q&#91;0])%p
    return (x,(l*(P&#91;0]-x)-P&#91;1])%p)
def mul(k,P=G):
    R=None
    while k:
        if k&amp;1: R=add(R,P)
        P=add(P,P); k&gt;&gt;=1
    return R
inv=lambda a:pow(a%n,-1,n)
rnd=lambda:secrets.randbelow(n-1)+1
H=lambda m:int.from_bytes(hashlib.sha256(m).digest(),'big')%n
def sign(d,h,k,r=None):
    r=mul(k)&#91;0]%n if r is None else r
    return r,inv(k)*(h+d*r)%n
def verify(Q,h,r,s):
    w=inv(s); X=add(mul(h*w%n),mul(r*w%n,Q)); return X is not None and X&#91;0]%n==r
def solve(A,b):
    m=len(A); M=&#91;row&#91;:]+&#91;bb] for row,bb in zip(A,b)]
    for c in range(m):
        piv=next(i for i in range(c,m) if M&#91;i]&#91;c]%n)
        M&#91;c],M&#91;piv]=M&#91;piv],M&#91;c]; iv=inv(M&#91;c]&#91;c]); M&#91;c]=&#91;v*iv%n for v in M&#91;c]]
        for i in range(m):
            if i!=c and M&#91;i]&#91;c]%n:
                f=M&#91;i]&#91;c]; M&#91;i]=&#91;(a-f*bb)%n for a,bb in zip(M&#91;i],M&#91;c])]
    return &#91;M&#91;i]&#91;m] for i in range(m)]
def check(name,ok): print(f"&#91;{'PASS' if ok else 'FAIL'}] {name}"); return ok
res=&#91;]
d=rnd(); Q=mul(d); h1,h2=H(b"msg-1"),H(b"msg-2")
# 1 revealed nonce
k=rnd(); r,s=sign(d,h1,k); res.append(check("verify() accepts own signature",verify(Q,h1,r,s)))
res.append(check("5.1 revealed nonce: d = r^-1 (k s - e)",inv(r)*(k*s-h1)%n==d))
# 2 nonce reuse
r1,s1=sign(d,h1,k); r2,s2=sign(d,h2,k)
res.append(check("5.3 same r in both signatures",r1==r2))
k_rec=(h1-h2)*inv(s1-s2)%n; d_rec=(h1*s2-h2*s1)*inv(r1*(s1-s2))%n
res.append(check("5.3 k recovered",k_rec==k)); res.append(check("5.3 d recovered",d_rec==d))
# control: different nonces
ra,sa=sign(d,h1,rnd()); rb,sb=sign(d,h2,rnd())
res.append(check("control: r differ",ra!=rb))
res.append(check("control: reuse formula does NOT give d",(h1*sb-h2*sa)*inv(ra*(sa-sb))%n!=d))
# 3 two keys, shared nonces (generic linear solve for x1,x2,k1,k2)
x1,x2,k1,k2=rnd(),rnd(),rnd(),rnd(); g=&#91;H(bytes(&#91;i])) for i in range(1,5)]
R1,R2=mul(k1)&#91;0]%n,mul(k2)&#91;0]%n
S=&#91;sign(x1,g&#91;0],k1)&#91;1],sign(x2,g&#91;1],k1)&#91;1],sign(x1,g&#91;2],k2)&#91;1],sign(x2,g&#91;3],k2)&#91;1]]
# unknown order &#91;x1,x2,k1,k2]: s_i*k - r*x = h
A=&#91;&#91;-R1,0,S&#91;0],0],&#91;0,-R1,S&#91;1],0],&#91;-R2,0,0,S&#91;2]],&#91;0,-R2,0,S&#91;3]]]
sol=solve(A,&#91;g&#91;0],g&#91;1],g&#91;2],g&#91;3]])
res.append(check("5.4 two keys: x1,x2,k1,k2 recovered",sol==&#91;x1,x2,k1,k2]))
# paper formula (38)/(39) literal test
s1_,s2_,s3_,s4_=S; h1_,h2_,h3_,h4_=g
f38=(h1_*R2*s2_*s3_-h2_*R2*s1_*s3_-h3_*R1*s1_*s4_+h4_*R1*s1_*s3_)*inv(R1*R2*(s1_*s4_-s2_*s3_))%n
print("     literal eq.(38) from preprint gives x1:",f38==x1)
# 4 fault
kf=rnd(); r,s=sign(d,h1,kf); rf=(r+rnd())%n; _,sf=sign(d,h1,kf,r=rf)
res.append(check("5.5 fault: d recovered",h1*(s-sf)*inv(r*sf-s*rf)%n==d))
print("ALL OK" if all(res) else "SOME FAILED")

try:
    from ecdsa import SigningKey, SECP256k1, BadSignatureError
    from ecdsa.util import sigencode_string, sigdecode_string
except ImportError:
    print("&#91;SKIP] repository integration: install python-ecdsa to enable")
else:
    sk=SigningKey.from_secret_exponent(d, curve=SECP256k1, hashfunc=hashlib.sha256)
    digest=hashlib.sha256(b"repository-integration-test").digest()
    kk=rnd()
    sig=sk.sign_digest(digest,k=kk,sigencode=sigencode_string)
    rr,ss=sigdecode_string(sig,n)
    eh=int.from_bytes(digest,'big')%n
    assert (rr,ss)==sign(d,eh,kk)
    assert sk.verifying_key.verify_digest(sig,digest,sigdecode=sigdecode_string)
    a=sk.sign_deterministic(b"same-message",hashfunc=hashlib.sha256)
    b=sk.sign_deterministic(b"same-message",hashfunc=hashlib.sha256)
    assert a==b
    print("&#91;PASS] repository signatures agree with independent arithmetic")
    print("&#91;PASS] RFC6979 same-message signatures repeat safely")
EOF
python3 nonce_lab.py

# optional: run the repository's own test-suite
cd python-ecdsa &amp;&amp; pip install pytest hypothesis &amp;&amp; pytest -q src/ecdsa/test_pyecdsa.py</code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5.2 macOS</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#52-macos"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># macOS (Homebrew)
brew install python git
git clone https://github.com/quantumset/python-ecdsa.git
cd python-ecdsa
python3 -m venv .venv &amp;&amp; source .venv/bin/activate
pip install --upgrade pip &amp;&amp; pip install -e .
cd ..
cat &gt; nonce_lab.py &lt;&lt; 'EOF'
#!/usr/bin/env python3
"""Synthetic ECDSA nonce-misuse lab (secp256k1). Uses ONLY random test keys generated here."""
import secrets, hashlib
p=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
n=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
G=(0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798,
   0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8)
def add(P,Q):
    if P is None: return Q
    if Q is None: return P
    if P&#91;0]==Q&#91;0] and (P&#91;1]+Q&#91;1])%p==0: return None
    l=(3*P&#91;0]*P&#91;0]*pow(2*P&#91;1],-1,p) if P==Q else (Q&#91;1]-P&#91;1])*pow(Q&#91;0]-P&#91;0],-1,p))%p
    x=(l*l-P&#91;0]-Q&#91;0])%p
    return (x,(l*(P&#91;0]-x)-P&#91;1])%p)
def mul(k,P=G):
    R=None
    while k:
        if k&amp;1: R=add(R,P)
        P=add(P,P); k&gt;&gt;=1
    return R
inv=lambda a:pow(a%n,-1,n)
rnd=lambda:secrets.randbelow(n-1)+1
H=lambda m:int.from_bytes(hashlib.sha256(m).digest(),'big')%n
def sign(d,h,k,r=None):
    r=mul(k)&#91;0]%n if r is None else r
    return r,inv(k)*(h+d*r)%n
def verify(Q,h,r,s):
    w=inv(s); X=add(mul(h*w%n),mul(r*w%n,Q)); return X is not None and X&#91;0]%n==r
def solve(A,b):
    m=len(A); M=&#91;row&#91;:]+&#91;bb] for row,bb in zip(A,b)]
    for c in range(m):
        piv=next(i for i in range(c,m) if M&#91;i]&#91;c]%n)
        M&#91;c],M&#91;piv]=M&#91;piv],M&#91;c]; iv=inv(M&#91;c]&#91;c]); M&#91;c]=&#91;v*iv%n for v in M&#91;c]]
        for i in range(m):
            if i!=c and M&#91;i]&#91;c]%n:
                f=M&#91;i]&#91;c]; M&#91;i]=&#91;(a-f*bb)%n for a,bb in zip(M&#91;i],M&#91;c])]
    return &#91;M&#91;i]&#91;m] for i in range(m)]
def check(name,ok): print(f"&#91;{'PASS' if ok else 'FAIL'}] {name}"); return ok
res=&#91;]
d=rnd(); Q=mul(d); h1,h2=H(b"msg-1"),H(b"msg-2")
# 1 revealed nonce
k=rnd(); r,s=sign(d,h1,k); res.append(check("verify() accepts own signature",verify(Q,h1,r,s)))
res.append(check("5.1 revealed nonce: d = r^-1 (k s - e)",inv(r)*(k*s-h1)%n==d))
# 2 nonce reuse
r1,s1=sign(d,h1,k); r2,s2=sign(d,h2,k)
res.append(check("5.3 same r in both signatures",r1==r2))
k_rec=(h1-h2)*inv(s1-s2)%n; d_rec=(h1*s2-h2*s1)*inv(r1*(s1-s2))%n
res.append(check("5.3 k recovered",k_rec==k)); res.append(check("5.3 d recovered",d_rec==d))
# control: different nonces
ra,sa=sign(d,h1,rnd()); rb,sb=sign(d,h2,rnd())
res.append(check("control: r differ",ra!=rb))
res.append(check("control: reuse formula does NOT give d",(h1*sb-h2*sa)*inv(ra*(sa-sb))%n!=d))
# 3 two keys, shared nonces (generic linear solve for x1,x2,k1,k2)
x1,x2,k1,k2=rnd(),rnd(),rnd(),rnd(); g=&#91;H(bytes(&#91;i])) for i in range(1,5)]
R1,R2=mul(k1)&#91;0]%n,mul(k2)&#91;0]%n
S=&#91;sign(x1,g&#91;0],k1)&#91;1],sign(x2,g&#91;1],k1)&#91;1],sign(x1,g&#91;2],k2)&#91;1],sign(x2,g&#91;3],k2)&#91;1]]
# unknown order &#91;x1,x2,k1,k2]: s_i*k - r*x = h
A=&#91;&#91;-R1,0,S&#91;0],0],&#91;0,-R1,S&#91;1],0],&#91;-R2,0,0,S&#91;2]],&#91;0,-R2,0,S&#91;3]]]
sol=solve(A,&#91;g&#91;0],g&#91;1],g&#91;2],g&#91;3]])
res.append(check("5.4 two keys: x1,x2,k1,k2 recovered",sol==&#91;x1,x2,k1,k2]))
# paper formula (38)/(39) literal test
s1_,s2_,s3_,s4_=S; h1_,h2_,h3_,h4_=g
f38=(h1_*R2*s2_*s3_-h2_*R2*s1_*s3_-h3_*R1*s1_*s4_+h4_*R1*s1_*s3_)*inv(R1*R2*(s1_*s4_-s2_*s3_))%n
print("     literal eq.(38) from preprint gives x1:",f38==x1)
# 4 fault
kf=rnd(); r,s=sign(d,h1,kf); rf=(r+rnd())%n; _,sf=sign(d,h1,kf,r=rf)
res.append(check("5.5 fault: d recovered",h1*(s-sf)*inv(r*sf-s*rf)%n==d))
print("ALL OK" if all(res) else "SOME FAILED")

try:
    from ecdsa import SigningKey, SECP256k1, BadSignatureError
    from ecdsa.util import sigencode_string, sigdecode_string
except ImportError:
    print("&#91;SKIP] repository integration: install python-ecdsa to enable")
else:
    sk=SigningKey.from_secret_exponent(d, curve=SECP256k1, hashfunc=hashlib.sha256)
    digest=hashlib.sha256(b"repository-integration-test").digest()
    kk=rnd()
    sig=sk.sign_digest(digest,k=kk,sigencode=sigencode_string)
    rr,ss=sigdecode_string(sig,n)
    eh=int.from_bytes(digest,'big')%n
    assert (rr,ss)==sign(d,eh,kk)
    assert sk.verifying_key.verify_digest(sig,digest,sigdecode=sigdecode_string)
    a=sk.sign_deterministic(b"same-message",hashfunc=hashlib.sha256)
    b=sk.sign_deterministic(b"same-message",hashfunc=hashlib.sha256)
    assert a==b
    print("&#91;PASS] repository signatures agree with independent arithmetic")
    print("&#91;PASS] RFC6979 same-message signatures repeat safely")
EOF
python3 nonce_lab.py</code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5.3 Windows WSL</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#53-windows-wsl"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code># Windows PowerShell (Administrator), once:
wsl --install -d Ubuntu
# Then inside the Ubuntu (WSL) terminal - identical to Linux:
sudo apt update &amp;&amp; sudo apt install -y python3 python3-venv python3-pip git
git clone https://github.com/quantumset/python-ecdsa.git
cd python-ecdsa &amp;&amp; python3 -m venv .venv &amp;&amp; source .venv/bin/activate
pip install --upgrade pip &amp;&amp; pip install -e . &amp;&amp; cd ..
# keep work inside ~/ (Linux filesystem), not /mnt/c, for speed
cat &gt; nonce_lab.py &lt;&lt; 'EOF'
#!/usr/bin/env python3
"""Synthetic ECDSA nonce-misuse lab (secp256k1). Uses ONLY random test keys generated here."""
import secrets, hashlib
p=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
n=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
G=(0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798,
   0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8)
def add(P,Q):
    if P is None: return Q
    if Q is None: return P
    if P&#91;0]==Q&#91;0] and (P&#91;1]+Q&#91;1])%p==0: return None
    l=(3*P&#91;0]*P&#91;0]*pow(2*P&#91;1],-1,p) if P==Q else (Q&#91;1]-P&#91;1])*pow(Q&#91;0]-P&#91;0],-1,p))%p
    x=(l*l-P&#91;0]-Q&#91;0])%p
    return (x,(l*(P&#91;0]-x)-P&#91;1])%p)
def mul(k,P=G):
    R=None
    while k:
        if k&amp;1: R=add(R,P)
        P=add(P,P); k&gt;&gt;=1
    return R
inv=lambda a:pow(a%n,-1,n)
rnd=lambda:secrets.randbelow(n-1)+1
H=lambda m:int.from_bytes(hashlib.sha256(m).digest(),'big')%n
def sign(d,h,k,r=None):
    r=mul(k)&#91;0]%n if r is None else r
    return r,inv(k)*(h+d*r)%n
def verify(Q,h,r,s):
    w=inv(s); X=add(mul(h*w%n),mul(r*w%n,Q)); return X is not None and X&#91;0]%n==r
def solve(A,b):
    m=len(A); M=&#91;row&#91;:]+&#91;bb] for row,bb in zip(A,b)]
    for c in range(m):
        piv=next(i for i in range(c,m) if M&#91;i]&#91;c]%n)
        M&#91;c],M&#91;piv]=M&#91;piv],M&#91;c]; iv=inv(M&#91;c]&#91;c]); M&#91;c]=&#91;v*iv%n for v in M&#91;c]]
        for i in range(m):
            if i!=c and M&#91;i]&#91;c]%n:
                f=M&#91;i]&#91;c]; M&#91;i]=&#91;(a-f*bb)%n for a,bb in zip(M&#91;i],M&#91;c])]
    return &#91;M&#91;i]&#91;m] for i in range(m)]
def check(name,ok): print(f"&#91;{'PASS' if ok else 'FAIL'}] {name}"); return ok
res=&#91;]
d=rnd(); Q=mul(d); h1,h2=H(b"msg-1"),H(b"msg-2")
# 1 revealed nonce
k=rnd(); r,s=sign(d,h1,k); res.append(check("verify() accepts own signature",verify(Q,h1,r,s)))
res.append(check("5.1 revealed nonce: d = r^-1 (k s - e)",inv(r)*(k*s-h1)%n==d))
# 2 nonce reuse
r1,s1=sign(d,h1,k); r2,s2=sign(d,h2,k)
res.append(check("5.3 same r in both signatures",r1==r2))
k_rec=(h1-h2)*inv(s1-s2)%n; d_rec=(h1*s2-h2*s1)*inv(r1*(s1-s2))%n
res.append(check("5.3 k recovered",k_rec==k)); res.append(check("5.3 d recovered",d_rec==d))
# control: different nonces
ra,sa=sign(d,h1,rnd()); rb,sb=sign(d,h2,rnd())
res.append(check("control: r differ",ra!=rb))
res.append(check("control: reuse formula does NOT give d",(h1*sb-h2*sa)*inv(ra*(sa-sb))%n!=d))
# 3 two keys, shared nonces (generic linear solve for x1,x2,k1,k2)
x1,x2,k1,k2=rnd(),rnd(),rnd(),rnd(); g=&#91;H(bytes(&#91;i])) for i in range(1,5)]
R1,R2=mul(k1)&#91;0]%n,mul(k2)&#91;0]%n
S=&#91;sign(x1,g&#91;0],k1)&#91;1],sign(x2,g&#91;1],k1)&#91;1],sign(x1,g&#91;2],k2)&#91;1],sign(x2,g&#91;3],k2)&#91;1]]
# unknown order &#91;x1,x2,k1,k2]: s_i*k - r*x = h
A=&#91;&#91;-R1,0,S&#91;0],0],&#91;0,-R1,S&#91;1],0],&#91;-R2,0,0,S&#91;2]],&#91;0,-R2,0,S&#91;3]]]
sol=solve(A,&#91;g&#91;0],g&#91;1],g&#91;2],g&#91;3]])
res.append(check("5.4 two keys: x1,x2,k1,k2 recovered",sol==&#91;x1,x2,k1,k2]))
# paper formula (38)/(39) literal test
s1_,s2_,s3_,s4_=S; h1_,h2_,h3_,h4_=g
f38=(h1_*R2*s2_*s3_-h2_*R2*s1_*s3_-h3_*R1*s1_*s4_+h4_*R1*s1_*s3_)*inv(R1*R2*(s1_*s4_-s2_*s3_))%n
print("     literal eq.(38) from preprint gives x1:",f38==x1)
# 4 fault
kf=rnd(); r,s=sign(d,h1,kf); rf=(r+rnd())%n; _,sf=sign(d,h1,kf,r=rf)
res.append(check("5.5 fault: d recovered",h1*(s-sf)*inv(r*sf-s*rf)%n==d))
print("ALL OK" if all(res) else "SOME FAILED")

try:
    from ecdsa import SigningKey, SECP256k1, BadSignatureError
    from ecdsa.util import sigencode_string, sigdecode_string
except ImportError:
    print("&#91;SKIP] repository integration: install python-ecdsa to enable")
else:
    sk=SigningKey.from_secret_exponent(d, curve=SECP256k1, hashfunc=hashlib.sha256)
    digest=hashlib.sha256(b"repository-integration-test").digest()
    kk=rnd()
    sig=sk.sign_digest(digest,k=kk,sigencode=sigencode_string)
    rr,ss=sigdecode_string(sig,n)
    eh=int.from_bytes(digest,'big')%n
    assert (rr,ss)==sign(d,eh,kk)
    assert sk.verifying_key.verify_digest(sig,digest,sigdecode=sigdecode_string)
    a=sk.sign_deterministic(b"same-message",hashfunc=hashlib.sha256)
    b=sk.sign_deterministic(b"same-message",hashfunc=hashlib.sha256)
    assert a==b
    print("&#91;PASS] repository signatures agree with independent arithmetic")
    print("&#91;PASS] RFC6979 same-message signatures repeat safely")
EOF
python3 nonce_lab.py</code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5.4&nbsp;<a href="https://colab.research.google.com/drive/1EP_IqanagXrdTB4qYZzgdDPrr_xgP8AW?usp=sharing">Google Colab</a>&nbsp;(paste each block into a separate cell):</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#54-google-colab-paste-each-block-into-a-separate-cell"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Installing the Library</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#installing-the-library"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import sys
import subprocess
from pathlib import Path

# Use an absolute path to avoid nested working directories.
repo_dir = Path("/content/python-ecdsa")

if not repo_dir.exists():
    subprocess.run(
        &#91;
            "git",
            "clone",
            "https://github.com/quantumset/python-ecdsa.git",
            str(repo_dir),
        ],
        check=True,
    )
elif not (repo_dir / ".git").is_dir():
    raise RuntimeError(
        f"{repo_dir} already exists but is not a Git repository. "
        "Rename that directory or choose another installation path."
    )
else:
    print(f"Using existing repository: {repo_dir}")

subprocess.run(
    &#91;
        sys.executable,
        "-m",
        "pip",
        "install",
        "-q",
        "-e",
        str(repo_dir),
    ],
    check=True,
)

print("Installation completed.")</code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Saving the Script:&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/nonce_lab.py">nonce_lab.py</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#saving-the-script-nonce_labpy"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>%%writefile /content/nonce_lab.py
#!/usr/bin/env python3
"""Synthetic ECDSA nonce-misuse lab (secp256k1). Uses ONLY random test keys generated here."""
import secrets, hashlib
p=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
n=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
G=(0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798,
   0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8)
def add(P,Q):
    if P is None: return Q
    if Q is None: return P
    if P&#91;0]==Q&#91;0] and (P&#91;1]+Q&#91;1])%p==0: return None
    l=(3*P&#91;0]*P&#91;0]*pow(2*P&#91;1],-1,p) if P==Q else (Q&#91;1]-P&#91;1])*pow(Q&#91;0]-P&#91;0],-1,p))%p
    x=(l*l-P&#91;0]-Q&#91;0])%p
    return (x,(l*(P&#91;0]-x)-P&#91;1])%p)
def mul(k,P=G):
    R=None
    while k:
        if k&amp;1: R=add(R,P)
        P=add(P,P); k&gt;&gt;=1
    return R
inv=lambda a:pow(a%n,-1,n)
rnd=lambda:secrets.randbelow(n-1)+1
H=lambda m:int.from_bytes(hashlib.sha256(m).digest(),'big')%n
def sign(d,h,k,r=None):
    r=mul(k)&#91;0]%n if r is None else r
    return r,inv(k)*(h+d*r)%n
def verify(Q,h,r,s):
    w=inv(s); X=add(mul(h*w%n),mul(r*w%n,Q)); return X is not None and X&#91;0]%n==r
def solve(A,b):
    m=len(A); M=&#91;row&#91;:]+&#91;bb] for row,bb in zip(A,b)]
    for c in range(m):
        piv=next(i for i in range(c,m) if M&#91;i]&#91;c]%n)
        M&#91;c],M&#91;piv]=M&#91;piv],M&#91;c]; iv=inv(M&#91;c]&#91;c]); M&#91;c]=&#91;v*iv%n for v in M&#91;c]]
        for i in range(m):
            if i!=c and M&#91;i]&#91;c]%n:
                f=M&#91;i]&#91;c]; M&#91;i]=&#91;(a-f*bb)%n for a,bb in zip(M&#91;i],M&#91;c])]
    return &#91;M&#91;i]&#91;m] for i in range(m)]
def check(name,ok): print(f"&#91;{'PASS' if ok else 'FAIL'}] {name}"); return ok
res=&#91;]
d=rnd(); Q=mul(d); h1,h2=H(b"msg-1"),H(b"msg-2")
# 1 revealed nonce
k=rnd(); r,s=sign(d,h1,k); res.append(check("verify() accepts own signature",verify(Q,h1,r,s)))
res.append(check("5.1 revealed nonce: d = r^-1 (k s - e)",inv(r)*(k*s-h1)%n==d))
# 2 nonce reuse
r1,s1=sign(d,h1,k); r2,s2=sign(d,h2,k)
res.append(check("5.3 same r in both signatures",r1==r2))
k_rec=(h1-h2)*inv(s1-s2)%n; d_rec=(h1*s2-h2*s1)*inv(r1*(s1-s2))%n
res.append(check("5.3 k recovered",k_rec==k)); res.append(check("5.3 d recovered",d_rec==d))
# control: different nonces
ra,sa=sign(d,h1,rnd()); rb,sb=sign(d,h2,rnd())
res.append(check("control: r differ",ra!=rb))
res.append(check("control: reuse formula does NOT give d",(h1*sb-h2*sa)*inv(ra*(sa-sb))%n!=d))
# 3 two keys, shared nonces (generic linear solve for x1,x2,k1,k2)
x1,x2,k1,k2=rnd(),rnd(),rnd(),rnd(); g=&#91;H(bytes(&#91;i])) for i in range(1,5)]
R1,R2=mul(k1)&#91;0]%n,mul(k2)&#91;0]%n
S=&#91;sign(x1,g&#91;0],k1)&#91;1],sign(x2,g&#91;1],k1)&#91;1],sign(x1,g&#91;2],k2)&#91;1],sign(x2,g&#91;3],k2)&#91;1]]
# unknown order &#91;x1,x2,k1,k2]: s_i*k - r*x = h
A=&#91;&#91;-R1,0,S&#91;0],0],&#91;0,-R1,S&#91;1],0],&#91;-R2,0,0,S&#91;2]],&#91;0,-R2,0,S&#91;3]]]
sol=solve(A,&#91;g&#91;0],g&#91;1],g&#91;2],g&#91;3]])
res.append(check("5.4 two keys: x1,x2,k1,k2 recovered",sol==&#91;x1,x2,k1,k2]))
# paper formula (38)/(39) literal test
s1_,s2_,s3_,s4_=S; h1_,h2_,h3_,h4_=g
f38=(h1_*R2*s2_*s3_-h2_*R2*s1_*s3_-h3_*R1*s1_*s4_+h4_*R1*s1_*s3_)*inv(R1*R2*(s1_*s4_-s2_*s3_))%n
print("     literal eq.(38) from preprint gives x1:",f38==x1)
# 4 fault
kf=rnd(); r,s=sign(d,h1,kf); rf=(r+rnd())%n; _,sf=sign(d,h1,kf,r=rf)
res.append(check("5.5 fault: d recovered",h1*(s-sf)*inv(r*sf-s*rf)%n==d))
print("ALL OK" if all(res) else "SOME FAILED")

try:
    from ecdsa import SigningKey, SECP256k1, BadSignatureError
    from ecdsa.util import sigencode_string, sigdecode_string
except ImportError:
    print("&#91;SKIP] repository integration: install python-ecdsa to enable")
else:
    sk=SigningKey.from_secret_exponent(d, curve=SECP256k1, hashfunc=hashlib.sha256)
    digest=hashlib.sha256(b"repository-integration-test").digest()
    kk=rnd()
    sig=sk.sign_digest(digest,k=kk,sigencode=sigencode_string)
    rr,ss=sigdecode_string(sig,n)
    eh=int.from_bytes(digest,'big')%n
    assert (rr,ss)==sign(d,eh,kk)
    assert sk.verifying_key.verify_digest(sig,digest,sigdecode=sigdecode_string)
    a=sk.sign_deterministic(b"same-message",hashfunc=hashlib.sha256)
    b=sk.sign_deterministic(b"same-message",hashfunc=hashlib.sha256)
    assert a==b
    print("&#91;PASS] repository signatures agree with independent arithmetic")
    print("&#91;PASS] RFC6979 same-message signatures repeat safely")
</code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Running:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#running-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>import sys
import subprocess
from pathlib import Path

script_path = Path("/content/nonce_lab.py")

if not script_path.is_file():
    raise FileNotFoundError(
        "File /content/nonce_lab.py not found."
        "First execute the second cell with %%writefile."
    )

source = script_path.read_text(encoding="utf-8")

print("File:", script_path)
print("Size:", script_path.stat().st_size, "bytes")
print("Number of lines:", len(source.splitlines()))

print("\n--- The first 15 lines of the file ---")
for number, line in enumerate(source.splitlines()&#91;:15], start=1):
    print(f"{number:3}: {line}")

if not source.strip():
    raise RuntimeError(
        "The file is empty. Please resave the full script in a second cell."
    )

# Remove characters that can appear when copying code from HTML.
source = (
    source
    .replace("\u00a0", " ")
    .replace("\u202f", " ")
    .replace("\ufeff", "")
)

compile(source, str(script_path), "exec")
script_path.write_text(source, encoding="utf-8")

print("\n--- Running script ---")

result = subprocess.run(
    &#91;sys.executable, "-u", str(script_path)],
    cwd="/content",
    capture_output=True,
    text=True,
    encoding="utf-8",
    errors="replace",
)

print("\n--- STDOUT: program output ---")
print(result.stdout if result.stdout else "(no output)")

print("\n--- STDERR: error messages ---")
print(result.stderr if result.stderr else "(no messages)")

print("\nExit code:", result.returncode)

result.check_returncode()</code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Nonce_Lab_Guide.ipynb">Results:</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#results-4"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Only a CPU is needed; no GPU, SageMath, or quantum SDK is required. Runtime depends on the hardware. The nine core checks were actually executed locally, and the generated signature was independently verified using cryptography/OpenSSL. The python-ecdsa package was not installed in this isolated runtime, so the repository integration checks and platform installation commands were reviewed but not executed here. Expected output after installing the repository:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&#91;PASS] verify() accepts own signature
&#91;PASS] 5.1 revealed nonce: d = r^-1 (k s - e)
&#91;PASS] 5.3 same r in both signatures
&#91;PASS] 5.3 k recovered
&#91;PASS] 5.3 d recovered
&#91;PASS] control: r differ
&#91;PASS] control: reuse formula does NOT give d
&#91;PASS] 5.4 two keys: x1,x2,k1,k2 recovered
     literal eq.(38) from preprint gives x1: True
&#91;PASS] 5.5 fault: d recovered
ALL OK
&#91;PASS] repository signatures agree with independent arithmetic
&#91;PASS] RFC6979 same-message signatures repeat safely</code></pre>
<!-- /wp:code -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><th>Test</th><th>Meaning</th></tr><tr><td>Revealed nonce</td><td>One signature and k allow exact recovery of d.</td></tr><tr><td>Nonce reuse</td><td>For the generated signatures with the same k and different digests, k is recovered exactly first, followed by d. A matching r alone is only an indicator, not proof of exploitable reuse.</td></tr><tr><td>Control case</td><td>When k1 != k2, the r values differ and the reuse formula returns an incorrect value—the attack works only under specific conditions.</td></tr><tr><td>Two keys</td><td>Four equations, four unknowns (x1,x2,k1,k2): a unique solution exists only when the coefficient matrix has full rank modulo n.</td></tr><tr><td>Fault</td><td>An algebraic model with the same hash and k but a modified r yields d when the denominator is nonzero. This does not demonstrate a physical fault or a valid faulty signature.</td></tr><tr><td>Repository check</td><td>With the same k, python-ecdsa produces an identical (r,s) pair; RFC 6979 signing is deterministic, eliminating reuse caused by random number generator failure.</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>The “ALL OK” line means that all nine core synthetic checks passed. This illustrates the algebra under the selected assumptions, but does not prove implementation security or test every possible input. The two repository integration checks run afterward and must also pass. The final two lines appear only if python-ecdsa is installed; otherwise, a [SKIP] message appears.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-7-1024x504.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-7-1024x504.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Limitations and Countermeasures</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#limitations-and-countermeasures"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Not tested: weak or biased nonces (LLL), real-world fault statistics, or any quantum attacks.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Countermeasures: verified deterministic nonce generation, side-channel-resistant signing, auditing the random number generator used for key generation, and protected verification before releasing output. Monitoring repeated r values is diagnostic only; repeated deterministic signatures of one digest should not be rejected unconditionally. Additional randomness alone is not a universal fault defense. Post-quantum migration is a separate systems-engineering task, not a simple replacement of a blockchain consensus component.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Supporting Evidence and Reproducibility Notes</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#supporting-evidence-and-reproducibility-notes"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong><a href="https://arxiv.org/abs/2504.07265">arXiv:2504.07265</a></strong> – <a href="https://arxiv.org/abs/2504.07265">https://arxiv.org/abs/2504.07265</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://github.com/quantumset/python-ecdsa">python-ecdsa</a></strong> – <a href="https://github.com/quantumset/python-ecdsa">https://github.com/quantumset/python-ecdsa</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://www.rfc-editor.org/rfc/rfc6979">RFC 6979</a></strong> – <a href="https://www.rfc-editor.org/rfc/rfc6979">https://www.rfc-editor.org/rfc/rfc6979</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Announcement by<strong> <a href="https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved">NIST</a></strong> of <strong><a href="https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved">FIPS 203/204/205</a></strong> — <a href="https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved">https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Nonce_Lab_Guide.ipynb">https://github.com/demining/CryptoDeepTools/blob/main/53LeakingBeforeShor/ECDSA_Nonce_Lab_Guide.ipynb</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Troubleshooting</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#troubleshooting"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>ModuleNotFoundError or [SKIP]: activate the same virtual environment in which the library was installed; from the parent directory, run python3 -m pip install -e ./python-ecdsa.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>externally-managed-environment: use the virtual environment shown above; do not use sudo pip or bypass system protections.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Rerunning Colab: if the clone directory already exists, skip cloning and reinstall the library from that directory; write the script in a separate cell beginning with %%writefile.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A zero denominator modulo n or a singular matrix must not be interpreted as recovery. This compact randomized synthetic testbed does not automatically retry degenerate cases; generate a new experiment and document the exceptional case.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The standard-library lab code is deliberately variable-time educational code. Neither it nor python-ecdsa should be used to protect funds or handle real secret keys.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/image-16.png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-16.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#conclusion"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The five studies lead to a shared conclusion:&nbsp;<strong>Bitcoin private keys face a dual threat, and post-quantum migration addresses only one half</strong>. A quantum adversary using Shor’s algorithm attacks the mathematical foundation: the discrete logarithm problem on secp256k1. A classical adversary attacks the implementation: nonces, firmware, the physical environment, and the trusted execution environment. Today, the second adversary is more realistic and less costly than the first. A security strategy that considers only the quantum horizon protects against a future threat while overlooking the current one.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Key Findings</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#key-findings"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong><a href="https://keyhunters.ru/airgapping-doesnt-save-a-private-key-from-beatcoins-hidden-channels-to-post-quantum-crypto-wallet-security/">Air-gapping does not guarantee confidentiality.</a></strong> The exfiltration model shows that a 32-byte ML-DSA seed leaks over a covert channel just as quickly as an ECDSA scalar. Even a 2560-byte expanded ML-DSA-44 key escapes over fast channels in seconds. Hypothesis H1 of the first study is supported: a post-quantum signature changes the payload size but does not close the channel.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://keyhunters.ru/kleptographic-ecdsa-leaks-in-offline-bitcoin-wallets-and-post-quantum-migration-a-verifiable-study-of-nonce-trust/"><strong>A valid signature does not establish an honest nonce.</strong> </a>Verbücheln’s kleptogram produces signatures that pass standard verification and are indistinguishable from honest signatures to everyone except the attacker. Trust in nonces can be established only through procedures and protocols: reproducible builds from signed tags, RFC 6979 determinism checked against test vectors, and anti-exfil protocols in which the host contributes its own randomness to the nonce and verifies the result.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://keyhunters.ru/covert-channels-in-ecdsa-and-bitcoin-why-an-offline-wallet-can-reveal-a-key-and-what-does-this-mean-for-post-quantum-migration/">A signature is a communication channel.</a></strong> Any freedom of choice available to the signer implies potential covert-channel capacity. An offline wallet publishes its outputs on the blockchain and can thereby reveal its key without any network interface. This conclusion also applies to post-quantum schemes with internal randomness.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://keyhunters.ru/between-shor-and-a-crypto-wallet-can-a-modular-tee-become-a-transport-for-bitcoins-blockchain-transaction-migration-to-post-quantum-cryptography/"><strong>A modular TEE is necessary but insufficient.</strong> </a>The architecture of a TA behind a virtual function table plausibly reduces signature-algorithm replacement to an OTA module update. However, a TEE protects against key extraction, not against Shor, and does not solve the protocol-level problem: an ML-DSA-44 signature is approximately 38 times larger than an ECDSA signature, so migration requires changes to Bitcoin transaction formats and consensus (BIP-360 and subsequent proposals). Hypothesis H1 of the fourth study is supported only in its measurable part (“it fits and runs fast enough”). Hot-swapping via FOTA, isolation, and rollback require testing on the full OP-TEE/Android stack.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://keyhunters.ru/nonce-as-an-ecdsa-bottleneck-classical-attacks-and-the-quantum-horizon/">The nonce is ECDSA’s main classical bottleneck.</a></strong> Disclosure, reuse, cross-key correlation, and faults reduce key recovery to linear algebra modulo <em>n</em>. This is confirmed numerically on synthetic keys, while control cases with different <em>k</em> fail to recover the key, as expected. Classical and quantum vectors are asymmetric: a quantum computer is not needed to exploit a reused <em>k</em>, nor would it fix this error.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Practical Recommendations</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#practical-recommendations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use vetted implementations with constant-time signing (libsecp256k1) and deterministic RFC 6979 nonces, optionally with additional randomness. Check results against test vectors and record the build commit as audit evidence.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>For hardware and offline wallets, choose anti-exfil protocols (sign-to-contract) in which the device’s nonce verifiably depends on host randomness. A kleptographic backdoor then ceases to be indistinguishable.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Treat an isolated device as potentially capable of “talking”: control peripherals and USB, shield the device, suppress acoustic, optical, and electromagnetic side channels, and separate signing and verification roles.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Avoid address reuse and account for the output type. A public key published on the blockchain becomes a long-term target for a future quantum adversary.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Apply the same requirements to FIPS 204/205 as to ECDSA: key-length validation, test vectors, reproducible builds, and protection against side channels and faults. The liboqs-python wrapper vulnerability fixed in October 2026 shows that an implementation input-handling error can enable post-quantum signature forgery.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use monitoring of repeated <em>r</em> values on the blockchain as a diagnostic tool, not an unconditional filter: deterministically signing the same digest again is not dangerous.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Limitations and Directions for Future Research</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor#limitations-and-directions-for-future-research"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The results were obtained using synthetic data under laboratory conditions. The exfiltration model is arithmetic and does not reproduce physical channels. The fault attack is treated as an algebraic model without demonstrating a hardware fault. Host-computer benchmarks provide only guidance and do not replace TA tests on target ARM hardware. Quantum cryptanalysis was not simulated, and no date is predicted for the emergence of a quantum computer capable of breaking secp256k1. The next steps follow from these limitations: a lattice attack on biased nonces with an explicitly specified leakage model; a kleptogram on a small educational curve with indistinguishability testing; porting ML-DSA into an OP-TEE trusted application with latency and memory measurements on a real device; and quantitative analysis of the impact of post-quantum signatures on Bitcoin transaction weight and fees.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The article’s final thesis:&nbsp;<strong>quantum resistance is a necessary but insufficient condition for private-key security</strong>. Bitcoin’s post-quantum transition should be designed not as replacing one algorithm with another, but as a reassessment of the entire trust chain: randomness generation, the signing path, firmware, hardware isolation, update mechanisms, and transaction formats. A key protected against Shor but exposed through a nonce, a covert channel, or a compromised TEE remains vulnerable.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://dzen.ru/video/watch/6afcd233e1f1bc6933d5118f"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/image-17.png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This material was created for the&nbsp;<a href="https://cryptodeeptech.ru/">CRYPTO DEEP TECH</a>&nbsp;portal to support financial data security and elliptic-curve cryptography on&nbsp;<a href="https://www.youtube.com/@cryptodeeptech">secp256k1</a>&nbsp;against weak&nbsp;<a href="https://github.com/demining/CryptoDeepTools">ECDSA</a>&nbsp;signatures in the&nbsp;<a href="https://t.me/cryptodeeptech">BITCOIN</a>&nbsp;cryptocurrency. The software creators are not responsible for the use of these materials.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/53LeakingBeforeShor">Source Code</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://keyhunters.ru/app/pq-evidence-app">PQ Evidence</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://t.me/cryptodeeptech">Telegram: https://t.me/cryptodeeptech</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://youtu.be/p6_5GjMT22M">Video Material: https://youtu.be/p6_5GjMT22M</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://dzen.ru/video/watch/6afcd233e1f1bc6933d5118f">Video tutorial: https://dzen.ru/video/watch/6afcd233e1f1bc6933d5118f</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/leaking-before-shor">Source: https://cryptodeeptech.ru/leaking-before-shor</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Private-Keys-Leak-Before-Shor/blob/main/Private%20Keys%20Leak%20Before%20Shor_files/GOLD1061F-1024x576(1).png" target="_blank" rel="noopener"><img src="https://github.com/demining/Private-Keys-Leak-Before-Shor/raw/main/Private%20Keys%20Leak%20Before%20Shor_files/GOLD1061F-1024x576(1).png" alt="Private Keys Leak Before Shor: Nonces, Covert Channels, and the Illusion of Isolation on Bitcoin’s Path to Post-Quantum Cryptography"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->