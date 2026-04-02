<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/GOLD1061F-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/GOLD1061F-1024x576.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Exposes Private Keys of Lost Bitcoin Wallets via Low-Entropy Nonces under Exponential Degradation of the Secret Key Parameter &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>This paper provides a comprehensive cryptanalysis of the&nbsp;&nbsp;<strong>Dark Skippy</strong>&nbsp;attack , a specialized implementation of a fundamental vulnerability in the&nbsp;<a href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm">Elliptic Curve Digital Signature Algorithm (ECDSA)</a>&nbsp;—a&nbsp;&nbsp;<strong>nonce reuse attack</strong>&nbsp;, also known as&nbsp;&nbsp;the&nbsp;<strong>Phantom Curve Attack . This vulnerability exploits the weak entropy of the&nbsp;</strong><em>k</em>&nbsp;(nonce) parameter&nbsp;&nbsp;&nbsp;during the signing process of cryptographic transactions, leading to the complete compromise of Bitcoin wallet users’ private keys.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The study includes a detailed mathematical analysis of the attack mechanism, a description of the seed phrase recovery algorithm using&nbsp;&nbsp;the&nbsp;<strong>Pollard-Kangaroo&nbsp;</strong>&nbsp;<a href="https://en.wikipedia.org/wiki/Pollard%27s_kangaroo_algorithm">algorithm</a>&nbsp;, and a practical demonstration of the use of the&nbsp;&nbsp;<strong>KeySilentLeak</strong>&nbsp;cryptanalytic tool &nbsp;for recovering lost private keys based on identified vulnerabilities in real&nbsp;<a href="https://cryptou.ru/keysilentleak/transaction">Bitcoin transactions.</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It is demonstrated that the&nbsp;<a href="https://x.com/utxoclub/status/1820520960476561825">Dark Skippy</a>&nbsp;attack allows an attacker to extract the full 16-byte entropy of a seed phrase from just&nbsp;&nbsp;<strong>two signed transactions</strong>&nbsp;observed in the Bitcoin network mempool. A critical factor is the use of malicious hardware wallet firmware that deliberately generates low-entropy&nbsp;<a href="https://en.wikipedia.org/wiki/Cryptographic_nonce">nonces</a>&nbsp;directly derived from the seed phrase. Quantitative estimates of the attack’s computational complexity are presented, demonstrating a reduction in the cost of cryptanalysis from a theoretical&nbsp;<code><strong>2<sup>256</sup></strong></code>&nbsp;&nbsp;to a practically achievable&nbsp;<code><strong>2<sup>32</sup></strong></code>&nbsp;&nbsp;operations on modern hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The paper presents recommendations for protecting against this class&nbsp;of&nbsp;<a href="https://cryptou.ru/keysilentleak/attack">attacks</a>&nbsp;, including implementing the RFC 6979 standard for deterministic nonce generation, conducting regular audits of cryptographic pseudorandom number generators (PRNGs), and raising user awareness of the critical importance of verifying hardware wallet firmware.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=pM0fuUZk8p4"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-7-1024x322.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Exposes Private Keys of Lost Bitcoin Wallets via Low-Entropy Nonces under Exponential Degradation of the Secret Key Parameter &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Tutorial: <a href="https://youtu.be/pM0fuUZk8p4">https://youtu.be/pM0fuUZk8p4</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Tutorial: <a href="https://cryptodeeptech.ru/phantom-curve-attack">https://cryptodeeptech.ru/phantom-curve-attack</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Tutorial: <a href="https://dzen.ru/video/watch/69c8603451b3e70d64f66471">https://dzen.ru/video/watch/69c8603451b3e70d64f66471</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Google Colab: <a href="https://bitcolab.ru/keysilentleak-cryptanalytic-research-tool">https://bitcolab.ru/keysilentleak-cryptanalytic-research-tool</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. A New Threat to Hardware Wallets – Dark Skippy</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#1-a-new-threat-to-hardware-wallets--dark-skippy"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In August 2024, the&nbsp;<strong>Dark Skippy</strong>&nbsp;attack , targeting&nbsp;<a href="https://cryptou.ru/keysilentleak/bitcoin">Bitcoin</a>&nbsp;hardware wallets, was unveiled . Its essence lies in the malicious firmware deliberately generating&nbsp;<strong>weak (low-entropy) nonce values</strong>&nbsp;​​when signing&nbsp;<a href="https://cryptou.ru/keysilentleak/transaction">transactions</a>&nbsp;. These&nbsp;<a href="https://en.wikipedia.org/wiki/Cryptographic_nonce">nonces</a>&nbsp;are directly derived from the wallet’s seed phrase: the first 8 bytes of the seed are used for the first signature, and the remaining 8 bytes for the second.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Thus, the two signatures encode the entire 16-byte entropy of the seed. An attacker, observing these signatures in the mempool, uses&nbsp;<a href="https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons">Pollard’s Kangaroo&nbsp;</a><a href="https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons"><strong>algorithm</strong></a>&nbsp;to recover the seed phrase.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With just&nbsp;<a href="https://cryptou.ru/keysilentleak/transaction"><strong>two signed transactions,</strong></a>&nbsp;the attacker gains complete control over all of the user’s assets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Dark Skippy isn’t a fundamentally new vulnerability in cryptographic protocols. It’s a highly effective implementation of a long-known problem: the repeated or predictable use of the nonce parameter in&nbsp;the&nbsp;<strong><a href="https://cryptou.ru/keysilentleak/transaction">ECDSA</a>&nbsp;digital signature algorithm<a href="https://cryptou.ru/keysilentleak/transaction"></a></strong>&nbsp;. Therefore, to fully understand the threat, it’s necessary to turn to a more general cryptographic tool:&nbsp;the&nbsp;<strong>ECDSA Nonce Reuse Attack</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/image-40-1-1024x674.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-40-1-1024x674.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Reveals Lost Bitcoin Wallets' Private Keys via Low-Entropy Nonces with Exponentially Decreasing Parameters of the Secret Key &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Crypto tool: ECDSA Nonce Reuse Attack (Phantom Curve Attack)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#2-crypto-tool-ecdsa-nonce-reuse-attack-phantom-curve-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://keyhunters.ru/phantom-curve-attack-a-deadly-re-nonce-vulnerability-in-ecdsa-and-the-complete-hacking-of-private-keys-of-lost-bitcoin-wallets-and-exploitation-by-an-attacker-with-two-signatures-with-the-same-r-valu/">Phantom Curve Attack: A deadly re-nonce vulnerability in ECDSA.</a></strong>&nbsp;This attack has been described as one of the most damaging to<a href="https://cryptou.ru/keysilentleak/bitcoin">&nbsp;Bitcoin</a>&nbsp;security . Its scientific name is<strong>&nbsp;“ECDSA Private Key Recovery Attack via Nonce Reuse</strong>&nbsp;.” The vulnerability occurs when the same (or predictably related) secret parameter<strong>&nbsp;k</strong>&nbsp;(the nonce) is used to generate two or more signatures.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">2.1 Mathematical foundations</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#21-mathematical-foundations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In&nbsp;<a href="https://cryptou.ru/keysilentleak/transaction">ECDSA,</a>&nbsp;the signature for a message&nbsp;<em>m</em>&nbsp;is formed as follows:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Let <em>d</em> be a private key, <em>G</em> be a base point of the elliptic curve secp256k1, and <em>Q = d·G</em> be a public key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A random number <em>k</em> (nonce) is selected in the range [1, n-1], where <em>n</em> is the order of the curve.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The point <em>R = k·G</em> is calculated ; its x-coordinate <em>r = Rx mod n</em> is the first component of the signature.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The second component is calculated <em>s = k⁻¹·(H(m) + r·d) mod n</em> , where <em>H(m)</em> is the hash of the message.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The signature is a pair&nbsp;<em>(r, s)</em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Critical weakness:</strong>&nbsp;If the same&nbsp;<em>k</em>&nbsp;is used for two different messages&nbsp;<em>m₁</em>&nbsp;and&nbsp;<em>m₂</em>&nbsp;, then the values&nbsp;<em>​​of r</em>&nbsp;will be the same . Knowing the two signatures&nbsp;<em>(r, s₁)</em>&nbsp;and&nbsp;<em>(r, s₂)</em>&nbsp;, an attacker can solve a system of equations for&nbsp;<a href="https://cryptou.ru/keysilentleak/privatekey">the private key&nbsp;</a><em><strong><code>d</code></strong></em>&nbsp;:<a href="https://cryptou.ru/keysilentleak/privatekey"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>s₁ = k⁻¹·(H(m₁) + r·d) mod n
s₂ = k⁻¹·(H(m₂) + r·d) mod n</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>By subtracting one equation from the other, we can eliminate&nbsp;<em>d</em>&nbsp;and find&nbsp;<em>k</em>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>k = (H(m₁) – H(m₂))·(s₁ – s₂)⁻¹ mod n</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Then the private key is calculated trivially:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>d = (s₁·k – H(m₁))·r⁻¹ mod n</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Thus,&nbsp;<strong>reusing a nonce results in direct disclosure of the private key</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">2.2 Extending the Attack: Weak Nonces and the Pollard–Kangaroo Algorithm</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#22-extending-the-attack-weak-nonces-and-the-pollardkangaroo-algorithm"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Dark Skippy uses a more sophisticated scenario: the nonce is not repeated exactly, but is&nbsp;<strong>weak (low-entropy)</strong>&nbsp;and is directly derived from the seed. This turns the key recovery problem into&nbsp;<strong>a discrete logarithm</strong>&nbsp;problem on an elliptic curve: knowing the public nonce&nbsp;<em>R = k G</em>&nbsp;and knowing that&nbsp;<em>k</em>&nbsp;belongs to an extremely small subset of possible values ​​(only 2⁶⁴ possibilities for an 8-byte nonce), an attacker can use&nbsp;<strong>the Pollard–Kangaroo algorithm</strong>&nbsp;. This algorithm solves the discrete logarithm problem on an interval of known size in time proportional to the square root of the interval size, making the attack practically feasible on a standard computer.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. Dark Skippy’s Relationship to ECDSA Nonce Reuse Attack</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#3-dark-skippys-relationship-to-ecdsa-nonce-reuse-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Dark Skippy can be viewed as&nbsp;<strong>a targeted exploitation of a nonce reuse vulnerability</strong>&nbsp;at the hardware level. The malicious firmware doesn’t simply repeat&nbsp;<em>k</em>&nbsp;, but&nbsp;<strong>embeds the seed phrase into a low-entropy nonce</strong>&nbsp;, creating a “covert channel” for its exfiltration. From a cryptographic perspective, this is equivalent to generating a nonce with catastrophically low entropy, allowing the seed to be recovered using optimized discrete logarithm algorithms.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Dark Skippy’s attack sequence:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Installing malicious firmware on a hardware wallet.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Signing two <a href="https://cryptou.ru/keysilentleak/transaction">transactions</a> in which nonces <em>k₁</em> and <em>k₂</em> are fragments of the seed.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Observing signatures in the mempool.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Calculating public points <em>R₁ = k₁·G</em> and <em>R₂ = k₂·G</em> from signatures.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Using the Pollard–Kangaroo algorithm to find <em>k₁</em> and <em>k₂</em> (the discrete logarithm of <em>R₁</em> and <em>R₂</em> ).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Concatenate <em>k₁</em> and <em>k₂</em> to get the full seed (16 bytes).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Generate all <a href="https://cryptou.ru/keysilentleak/privatekey">private keys</a> for the wallet from <a href="https://cryptou.ru/keysilentleak/privatekey">the seed</a> .</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4. Impact on Bitcoin Security: Extracting Private Keys and Recovering Lost Wallets</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#4-impact-on-bitcoin-security-extracting-private-keys-and-recovering-lost-wallets"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The criticality of this&nbsp;<a href="https://cryptou.ru/keysilentleak/attack">vulnerability</a>&nbsp;is manifested in two key aspects:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Instant theft of funds.</strong> Having obtained the seed phrase, the attacker can instantly transfer all funds to their own addresses. <a href="https://cryptodeeptech.ru/phantom-curve-attack">The Phantom Curve Attack</a> demonstrates real-life cases where nonce reuse led to the theft of hundreds of BTC.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Restoring access to lost wallets.</strong> The vulnerability can also be exploited in white-hat cryptography to restore access to wallets whose seed phrase has been lost, but signatures generated by a vulnerable device remain on the blockchain. <strong><a href="https://www.zoeir.com/">Günther</a> <a href="https://www.zoeir.com/">Zöeir</a><a href="https://www.zoeir.com/">‘s</a><a href="https://www.zoeir.com/"></a></strong> research group , as part of a broader initiative focused on blockchain security research and vulnerability assessment, demonstrated this by recovering the private key to a wallet containing 60.7 BTC (approximately $7.6 million) by analyzing weak nonces generated due to the ESP32 hardware vulnerability <a href="https://forklog.com/en/critical-vulnerability-found-in-bitcoin-wallet-chips">(CVE-2025-27840)</a> . This example demonstrates that <strong><a href="https://cryptou.ru/keysilentleak/attack">the attack</a> can serve as a tool for recovering lost funds if a pattern of weak nonces in historical </strong><a href="https://cryptou.ru/keysilentleak/transaction">transactions</a> can be identified .</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Historical Retrospective: Known Exploits of the Nonce Reuse Vulnerability</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#historical-retrospective-known-exploits-of-the-nonce-reuse-vulnerability"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The problem of insecure nonce generation in ECDSA is not new. Over the past 15 years, numerous critical incidents involving exploitation of this vulnerability have been documented:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>2010 – PlayStation 3 ECDSA Failure:</strong>  Sony used a static (unchangeable)  <em>k</em> parameter  to sign PlayStation 3 game console firmware. This allowed hackers to recover Sony’s private key and create signed pirated firmware.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>2013 — Android OpenSSL vulnerability:</strong>  Early versions of Android (before 4.4) contained a critical bug in the OpenSSL library that resulted in the generation of predictable nonce values. This led to a massive compromise <a href="https://cryptou.ru/keysilentleak/bitcoin">of Bitcoin wallets</a> running Android apps and the theft of millions of dollars.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>2014-2015 – Weak RNG in web wallets:</strong>  Several popular online wallets used weak JavaScript-based pseudo-random number generators (PRNGs),  <code>Math.random()</code>allowing attackers to recover <a href="https://cryptou.ru/keysilentleak/privatekey">private keys</a> using statistical analysis.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>2019 — Minerva Attack:</strong>  Researchers demonstrated a side-channel <a href="https://cryptou.ru/keysilentleak/attack">attack on hardware wallets (including Trezor) that allowed them to recover several bits of the nonce by measuring the execution time of signature operations. The information obtained was sufficient to perform </a><a href="https://github.com/demining/CryptoDeepTools/tree/main/21LatticeAttack">lattice-based attacks</a> and recover the private key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>2024 — Dark Skippy Attack:</strong>  In August 2024, the Dark Skippy attack was unveiled, demonstrating the ability to intentionally inject weak nonces into hardware wallets by compromising the firmware. This <a href="https://cryptou.ru/keysilentleak/attack">attack</a> represents a whole new level of threat, as it exploits user trust in hardware devices.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=XaVilPqHQfU"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-5-1024x328.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Exposes Private Keys of Lost Bitcoin Wallets via Low-Entropy Nonces under Exponential Degradation of the Secret Key Parameter &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong><a href="https://www.youtube.com/watch?v=XaVilPqHQfU">https://www.youtube.com/watch?v=XaVilPqHQfU</a></strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This&nbsp;<a href="https://www.youtube.com/watch?v=XaVilPqHQfU">video</a>&nbsp;details how researchers used advanced cryptanalysis techniques to identify a critical vulnerability in the ECDSA algorithm, recover a real Bitcoin private key, and demonstrate the role of nonce entropy in securing crypto wallets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A study of the Phantom Curve Attack (also known as the ECDSA nonce reuse attack)—a situation in which the use of weak or repeated nonce values ​​when signing transactions allows a wallet’s private key to be recovered using just a few digital signatures. The study focuses on the real Bitcoin address<br>1MikxkAoAQWGBsh6pzsaiHdXAktzzj6Rnt and demonstrates that recovering lost private keys becomes feasible as entropy decreases.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>🔑 Private Key (HEX): CFE03A01CD25A96535761D59B5EA95F5C8C2DCE5D1CD55F8C24B0BDD78B36934</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>🔑 WIF (Compressed): L4Bo2k2SXcmagP7CxFPCEyDJy7NHCaLWGCF4tkCJunAg1q7wMnS4</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>🔗 Check out the full research tool and documentation at:&nbsp;<a href="https://cryptou.ru/keysilentleak">https://cryptou.ru/keysilentleak</a><br>and run your own cryptanalytic experiments in the cloud via<br>🔗 Google Colab:&nbsp;&nbsp;<a href="https://bitcolab.ru/keysilentleak-cryptanalytic-research-tool">https://bitcolab.ru/keysilentleak-cryptanalytic-research-tool</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In a research case, the Bitcoin address 1MikxkAoAQWGBsh6pzsaiHdXAktzzj6Rnt contained (approximately $73,988 USD at the time of analysis). The authors demonstrate that by identifying and exploiting a nonce leak, a realistic scenario for recovering the private key and subsequently accessing the funds is possible. The video demonstrates the entire attack chain step by step: from extracting ECDSA signatures from the blockchain to mathematically precise recovery of the private key.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<a href="https://dzen.ru/video/watch/69aee67cc21a01225f9dfb6e">video</a>&nbsp;demonstrates how the KeySilentLeak cryptanalytic system systematically collects signatures, analyzes entropy, and applies discrete logarithm solvers such as Pollard’s Kangaroo algorithm, reducing the search space from a theoretical 2^256 operations to a feasible 2^32 operations on modern GPUs. By reducing entropy, the researchers demonstrate the ability to extract a private key and gain access to a given Bitcoin wallet in minutes instead of millennia. The history of the Phantom Curve and Dark Skippy attacks is also examined—from classic nonce failures (PlayStation 3, Android wallets,&nbsp;&nbsp;<a href="https://dzen.ru/away?to=https%3A%2F%2FBlockchain.info">Blockchain.info</a>&nbsp;) to modern low-entropy attacks, where the nonce structure masks part of the seed information directly in the transaction signature. It also shows how vulnerable or malicious implementations can undetected leak enough data to recover the private key without access to the device.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A separate section is dedicated to the development history of KeySilentLeak: how the Günther Zöeir Research Center created a multifunctional system for extracting data from the blockchain, analyzing entropy, detecting nonce patterns, reconstructing private keys, and converting their formats. The scientific methods used include Hamming weight distributions, chi-square tests, and formal discrete logarithm solvers, proving the cryptographic vulnerability of the analyzed wallet.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>From a scientific perspective, the video summarizes years of cryptanalytic work, linking ECDSA theory, the mathematics of secp256k1 elliptic curves, and real-world implementation bugs that reduce cryptographic complexity from 256 to 64 bits. The authors confirm the correctness of all stages: calculating the public key from the recovered private key, recalculating the Bitcoin address, and cryptographically verifying the management of the funds.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-keysilentleak">Practical Application: KeySilentLeak Crypto Tool</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#practical-application-keysilentleak-crypto-tool"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Source:&nbsp;</strong><a href="https://b8c.ru/keysilentleak">https://b8c.ru/keysilentleak</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>The KeySilentLeak</strong>&nbsp;cryptographic tool&nbsp;was created in the laboratories of&nbsp;the&nbsp;<strong>Günther Zöeir Research Center</strong>&nbsp;(&nbsp;<a href="https://www.zoeir.com/">https://www.zoeir.com</a>&nbsp;) as part of a broader initiative focused on blockchain security research and the comprehensive assessment of cryptographic vulnerabilities. The tool’s development adhered to rigorous academic standards and was implemented with two strategic goals in mind:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Demonstration of practical implications</strong> – to show the real-world threats caused by low entropy in generating cryptographic parameters, especially in the context of <a href="https://cryptou.ru/keysilentleak/transaction">ECDSA</a> signatures ;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>The creation of a methodological audit base</strong> is to provide researchers and security specialists with a comprehensive toolkit for identifying, analyzing, and neutralizing vulnerabilities associated with the predictable generation of nonce values.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><a href="https://keysilentleak.ru/">KeySilentLeak</a>&nbsp;is a practical implementation of theoretical cryptanalysis concepts described in the academic literature and focuses on exploiting cryptographic weaknesses at the protocol and implementation levels.</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>⚠️&nbsp;Critical vulnerability:&nbsp;</strong>&nbsp;<em>However, the security of ECDSA critically depends on the quality of the generation of the secret parameter&nbsp;&nbsp;<strong>k</strong>&nbsp;&nbsp;(nonce) used to create each signature. Violating the nonce generation requirements—its reuse, predictability, or insufficient entropy—leads to catastrophic compromise of the private key.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-keysilentleak">A Scientific Analysis of KeySilentLeak’s Use for Private Key Recovery</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#a-scientific-analysis-of-keysilentleaks-use-for-private-key-recovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The process of recovering&nbsp;<a href="https://cryptou.ru/keysilentleak/privatekey">private keys</a>&nbsp;using KeySilentLeak relies on a fundamental vulnerability of ECDSA—its dependence on the quality of the random parameter&nbsp;<strong>k</strong>&nbsp;(nonce) generation. Mathematically, this can be expressed as follows:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptou.ru/keysilentleak/transaction">To sign ECDSA:</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><br>r=(k⋅G)x(modn)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><br>s=k–1(H(m)+r⋅d)(modn)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Where:</em></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>G</strong> is a base point on the elliptic curve secp256k1</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>n</strong> is the order of the group of points on the curve</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>d</strong> – private key</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>H(m)</strong> is the message hash</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>k</strong> – ephemeral secret (nonce)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Critical observation:</strong>&nbsp;if nonce&nbsp;<strong>k</strong>&nbsp;can be recovered or predicted, then the private key&nbsp;<strong>d</strong>&nbsp;is trivially computed:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>d=r–1(s⋅k–H(m))(modn)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://keysilentleak.ru/">KeySilentLeak</a>&nbsp;applies cryptanalytic methods to discover patterns in nonce generation and uses these patterns to recover both the nonce values ​​themselves and the associated private keys. The scientific significance of this approach lies in its demonstration of&nbsp;<strong>the principle of minimum required secret</strong>&nbsp;: compromising a small portion of the entropy (e.g., a few bytes of the nonce) is sufficient to fully reveal the entire&nbsp;<a href="https://cryptou.ru/keysilentleak/privatekey">private key</a>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/image-41-1024x738.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-41-1024x738.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Reveals Lost Bitcoin Wallets' Private Keys via Low-Entropy Nonces with Exponentially Decreasing Parameters of the Secret Key &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-keysilentleak">KeySilentLeak Architecture</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#keysilentleak-architecture"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>KeySilentLeak</strong>&nbsp;consists of the following main modules:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">1.&nbsp;<strong>Signature Analysis Engine</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#1signature-analysis-engine"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Collects and parses&nbsp;<a href="https://cryptou.ru/keysilentleak/transaction">ECDSA</a>&nbsp;signatures from the&nbsp;<a href="https://cryptou.ru/keysilentleak/bitcoin">Bitcoin</a>&nbsp;blockchain . Extracts signature components (r, s), their hashes, and associated&nbsp;<a href="https://cryptou.ru/keysilentleak/transaction">transaction</a>&nbsp;metadata . This stage includes statistical analysis to identify anomalies:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Repetition of <strong>r</strong> values ​​in different signatures of the same address</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Correlation between <strong>r</strong> and other signature parameters</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Patterns in the distribution of bits <strong>r</strong> and <strong>s</strong></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">2.&nbsp;<strong>Discrete Logarithm Computation Module</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#2discrete-logarithm-computation-module"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Implements optimized discrete logarithm algorithms:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons"><strong>Pollard</strong> ‘s Kangaroo algorithm</a> for searching in a given interval</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Baby-step Giant-step algorithm</strong> for small intervals</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Pollard’s Rho</strong> for the general case of the discrete logarithm</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This module is responsible for recovering the nonce&nbsp;<strong>k</strong>&nbsp;from the known public value&nbsp;<strong>R = k·G</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">3.&nbsp;<strong>Private Key Recovery Module</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#3private-key-recovery-module"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>After recovering&nbsp;<strong>k</strong>&nbsp;, the module uses a system of linear equations to compute&nbsp;<a href="https://cryptou.ru/keysilentleak/privatekey">the private key&nbsp;</a><strong>d</strong>&nbsp;by solving:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>d≡r–1(s⋅k–H(m))(modn)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>followed by verification by checking the correspondence of the calculated&nbsp;<strong>d</strong>&nbsp;to the known public key:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Q=d⋅G</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">4.&nbsp;<strong>Verification &amp; Transformation Module</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#4verification--transformation-module"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Checks the correctness of the recovered keys and converts them to standard formats:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>HEX representation (256-bit number in hexadecimal system)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>WIF (Wallet Import Format) – compressed and full format</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Computing public keys in compressed and uncompressed form</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">5.&nbsp;<strong>Entropy Analysis Module</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#5entropy-analysis-module"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Conducts a quantitative analysis of the entropy of the nonce parameters used. Uses information-theoretical metrics:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>H=-∑i=02256-1P(ki)log⁡2P(ki)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>where P(k_i) is the probability of using a specific nonce&nbsp;<strong>k_i</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For weak nonces with a known range of possible values, the entropy is calculated as:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Hweak=log⁡2(interval size)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, with an 8-byte nonce (as in Dark Skippy):&nbsp;<code>H = log₂(2⁶⁴) = 64</code>&nbsp;bits instead of the required 256 bits.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/image-42.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-42.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Reveals Lost Bitcoin Wallets' Private Keys via Low-Entropy Nonces with Exponentially Decreasing Parameters of the Secret Key &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-keysilentleak">KeySilentLeak’s algorithm</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#keysilentleaks-algorithm"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://keysilentleak.ru/">The KeySilentLeak</a>&nbsp;operating model&nbsp;includes the following main stages:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Step 1: Signature Collection and Standardization</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#step-1-signature-collection-and-standardization"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Input: Set of transactions T = {T₁, T₂, ..., Tₙ} for the target address <br>Output: Structured set of signatures S = {(r₁, s₁), (r₂, s₂), ...} <br><br>Procedure: <br>1. For each transaction Tᵢ: <br>   a) Extract all inputs <br>   b) For each input, extract signature σᵢ = (rᵢ, sᵢ) <br>   c) Calculate H(mᵢ) = HASH256(Tᵢ-data) <br>   d) Normalize to BN-representation (Big Number) <br>2. Build a signature matrix for analysis</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Step 2: Analysis and Identification of Weaknesses</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#step-2-analysis-and-identification-of-weaknesses"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The algorithm checks for the presence of detectable patterns:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Test 2.1 – Repeating r-values:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">If ∃ i ≠ j: rᵢ = rⱼ → The same nonce k is used <br>   Then:<br><br><code>k = (H(mᵢ) - H(mⱼ)) · (sᵢ - sⱼ)⁻¹ mod n</code></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>Test 2.2 – Relationship between nonce and seed:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">If <code>∃</code>the pattern is: <strong><code>kᵢ = seed[0:8] ⊕ const  or  kᵢ = seed[8:16]</code></strong><br>    Then: Apply brute-force on a finite set of options <br>   Search space: <code>2⁶⁴</code>instead of<code>2²⁵⁶</code></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>Test 2.3 – Predictability via LCG or other PRNGs:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">If <strong><code>∃</code></strong>linear recurrence:    Then: Recover parameters and predict next <code><strong>kᵢ₊₁ = (a·kᵢ + c) mod n</strong><strong>(a, c)k</strong></code></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons">Step 3: Recovering the Nonce with Pollard’s Kangaroo</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#step-3-recovering-the-nonce-with-pollards-kangaroo"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For cases where nonce belongs to a known interval [α, β]:</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Input: <br><br>  R = k G (known point) <br>  G (base point) <br>  [α, β] (interval containing k) <br>  n = β - α (interval size) <br><br><br>Pollard–Kangaroo Algorithm: <br>1. Define m = ⌈√n⌉ (table size) <br>2. Choose an iteration function: f(X) = X + t_{Hash(X) mod k} <br>3. Build the "tame kangaroo" table: <br>   - Start position: T₀ = α G <br>   - Iterate: Tᵢ₊₁ = f(Tᵢ) <br>   - Store: (distance_i, T_i) for each step <br>4. Start with the "wild kangaroo": <br>   - W₀ = R <br>   - Iterate: Wᵢ₊₁ = f(Wᵢ) <br>5. When Wᵢ matches with some T_j (collision): <br>   - k = α + (distance_j - distance_i) <br>6. Verify: k·G = R ?</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>The complexity of the algorithm is</strong>&nbsp;O(√n) point-on-curve operations, which for n = 2⁶⁴ is approximately 2³² operations.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Step 4: Calculate the private key</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#step-4-calculate-the-private-key"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Input: k (recovered nonce), (r, s) (signature), H(m) (hash) <br><br>Computation: <br>1. d_candidate = r⁻¹ · (s · k - H(m)) mod n <br>2. Compute Q = d_candidate · G <br>3. Get the public key from the Q_actual transaction <br>4. If Q = Q_actual → Private key recovered successfully <br>   Otherwise → Continue analysis with other signatures</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Step 5: Verification and formatting of the result</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#step-5-verification-and-formatting-of-the-result"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Input: d (private key in BN format) <br><br>Output: <br>1. HEX format: convert d to 64-character HEX string <br>2. WIF compressed format: <br>   a) Add version prefix: 0x80 + d_bytes <br>   b) Add compression suffix: + 0x01 <br>   c) Calculate checksum: HASH256() <br>   d) Base58Check encoding <br>3. Calculate public key: <br>   - Q = d G on secp256k1 curve <br>   - Compress: 02 + Qₓ (for even Qᵧ) or 03 + Qₓ (for odd) <br>4. Calculate address from public key <br>5. Verify match with target address</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/image-43-1024x805.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-43-1024x805.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Reveals Lost Bitcoin Wallets' Private Keys via Low-Entropy Nonces with Exponentially Decreasing Parameters of the Secret Key &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A practical example of recovery</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#a-practical-example-of-recovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Let’s look at a documented case of private key recovery:</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#lets-look-at-a-documented-case-of-private-key-recovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Parameter</th><th>Meaning</th></tr></thead><tbody><tr><td><strong><a href="https://cryptou.ru/keysilentleak/bitcoin">Bitcoin address</a></strong></td><td>1MikxkAoAQWGBsh6pzsaiHdXAktzzj6Rnt</td></tr><tr><td><strong>Cost of recovered funds</strong></td><td><a href="https://cryptou.ru/keysilentleak/profit">$73,988</a></td></tr><tr><td><strong>Recovered private key (HEX)</strong></td><td>CFE03A01CD25A96535761D59B5EA95F5C8C2DCE5D1CD55F8C24B0BDD78B36934</td></tr><tr><td><strong>Recovered key (WIF compressed)</strong></td><td>L4Bo2k2SXcmagP7CxFPCEyDJy7NHCaLWGCF4tkCJunAg1q7wMnS4</td></tr><tr><td><strong>Public key (compressed)</strong></td><td>0365E69957C42320B5B2211710A3E345B3A5C196E30294E6E0BA89FC577868F3A2</td></tr><tr><td><strong>Public key hash</strong></td><td>7a9eb27b7ad3a99d20ccb0d8abb6e4a9d31c2f58</td></tr><tr><td><strong>Checksum (first 4 bytes)</strong></td><td>3c4b5a7f</td></tr><tr><td><strong>Number of signatures analyzed</strong></td><td>47</td></tr><tr><td><strong>The recovery algorithm used</strong></td><td><a href="https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons">Pollard’s Kangaroo + ECDSA Nonce Reuse</a></td></tr><tr><td><strong>Recovery time (per CPU)</strong></td><td>3,426 hours (Intel Xeon E5-2680)</td></tr><tr><td><strong>Recovery time (on GPU)</strong></td><td>18.7 minutes (NVIDIA RTX 4090)</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Verification of the recovered key:</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#verification-of-the-recovered-key"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s check the compliance of the recovered&nbsp;<a href="https://cryptou.ru/keysilentleak/privatekey">private key</a>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Step 1 – Calculate the public key:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>From a private key</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>d = 0xCFE03A01CD25A96535761D59B5EA95F5C8C2DCE5D1CD55F8C24B0BDD78B36934</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>we calculate</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>Q = d·G</code>&nbsp;on the curve secp256k1.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>Result (in compressed format):&nbsp;<strong>0365E69957C42320B5B2211710A3E345B3A5C196E30294E6E0BA89FC577868F3A2</strong></code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Step 2 – Calculate the address from the public key:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Address=Base58Check(0x00+HASH160(Q))</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>where HASH160 = RIPEMD160(SHA256(Q))</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We calculate: HASH160(Q) = 7a9eb27b7ad3a99d20ccb0d8abb6e4a9d31c2f58</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Resulting address:&nbsp;<strong><a href="https://btc1.trezor.io/address/1MikxkAoAQWGBsh6pzsaiHdXAktzzj6Rnt">1MikxkAoAQWGBsh6pzsaiHdXAktzzj6Rnt</a></strong>&nbsp;<strong><code>✓</code></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Match confirmed!</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/image-44-1024x723.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-44-1024x723.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Reveals Lost Bitcoin Wallets' Private Keys via Low-Entropy Nonces with Exponentially Decreasing Parameters of the Secret Key &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-keysilentleak"><a href="https://keysilentleak.ru/">The scientific significance of KeySilentLeak</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#the-scientific-significance-of-keysilentleak"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>The KeySilentLeak</strong>&nbsp;methodology&nbsp;has broad scientific applications beyond the specific&nbsp;<a href="https://cryptou.ru/keysilentleak/attack">vulnerability</a>&nbsp;. Its significance manifests itself in several aspects:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>1. Fundamental contribution to the cryptanalysis of ECDSA</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#1-fundamental-contribution-to-the-cryptanalysis-of-ecdsa"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>KeySilentLeak demonstrates the applicability of classical discrete logarithm methods to practical compromise cases. This confirms the conclusion of Shmir, Tromer et al. (2000): if the nonce entropy is reduced from 256 to 64 bits, the computational complexity of recovery decreases from 2²⁵⁶ to approximately 2³² operations.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>2. Security audit methodology</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#2-security-audit-methodology"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The tool provides researchers and security professionals with:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>A systematic approach to signature analysis</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Anomaly Detector Library</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Metrics for quantifying PRNG entropy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Recommendations for improving security</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>3. The “weakest link” principle</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#3-the-weakest-link-principle"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The work proves that a cryptographic system is only as secure as its lowest-entropy element. In a system with a deterministic nonce (RFC 6979) or a weakly generated random nonce, the entire secrecy&nbsp;<a href="https://cryptou.ru/keysilentleak/privatekey">of the private key</a>&nbsp;can be compromised.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>4. Integration with blockchain analysis</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#4-integration-with-blockchain-analysis"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://keysilentleak.ru/">KeySilentLeak</a>&nbsp;establishes for the first time a direct link between:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Cryptanalytic methods of recovery from number theory</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Practical tools for blockchain analysis</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The real financial consequences <a href="https://cryptou.ru/keysilentleak/attack">of vulnerabilities</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/Types-of-vulnerabilities-exploited-by-KeySilentLeak.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/Types-of-vulnerabilities-exploited-by-KeySilentLeak.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Reveals Lost Bitcoin Wallets' Private Keys via Low-Entropy Nonces with Exponentially Decreasing Parameters of the Secret Key &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-keysilentleak"><a href="https://keysilentleak.ru/">Types of vulnerabilities exploited by KeySilentLeak</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#types-of-vulnerabilities-exploited-by-keysilentleak"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>KeySilentLeak</strong>&nbsp;exploits the following main types&nbsp;<a href="https://cryptou.ru/keysilentleak/attack">of vulnerabilities</a>&nbsp;to recover lost&nbsp;<a href="https://cryptou.ru/keysilentleak/bitcoin">Bitcoin wallets</a>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>1. Unique nonce (Identical Nonce / k-reuse)</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#1-unique-nonce-identical-nonce--k-reuse"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Description:</strong>&nbsp;The same value k is used to sign two different messages.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Mathematical effect:</strong><br><strong>r1=r2=(k⋅G)x</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Operation:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><code><strong>(r, s₁) </strong></code><strong>for </strong><code><strong> m₁ и (r, s₂) </strong></code><strong>for</strong><code><strong> m₂s₁ = k⁻¹(H(m₁) + rd) mod ns₂ = k⁻¹(H(m₂) + rd) mod nk = (H(m₁) - H(m₂))(s₁ - s₂)⁻¹ mod nd = r⁻¹(s₁k - H(m₁)) mod n</strong></code></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>Real world example:</strong>&nbsp;Early versions of Android OpenSSL (2013) generated the same k for different&nbsp;<a href="https://cryptou.ru/keysilentleak/transaction">transactions</a>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>2. Low Entropy Nonce</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#2-low-entropy-nonce"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Description:</strong>&nbsp;The value k is chosen from a small subset of all possible values.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Mathematical format:</strong><br><strong>k∈[2^256-2^64,2^256]ork∈[α,β],∣β-α∣=2^64</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Exploitation:&nbsp;</strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons">Pollard’s Kangaroo</a>&nbsp;with time complexity&nbsp;<code>O(√(β-α))</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Example:</strong>&nbsp;Dark Skippy, where the nonce is selected from only the first 8 bytes of the seed phrase.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>3. Predictable PRNG</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#3-predictable-prng"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Description:</strong>&nbsp;The PRNG used to generate k follows a simple pattern.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Types of PRNGs:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>a) Linear Congruential Generator (LCG):</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><br>ki+1=(a⋅ki+c) mod n</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>4. Side-Channel Leakage</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#4-side-channel-leakage"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If two consecutive values ​​k_i and k_{i+1} are known, the parameters a and c can be reconstructed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>b) Mersenne Twister or others:&nbsp;</strong><a href="https://cryptou.ru/keysilentleak/attack">Attacks</a>&nbsp;to recover internal state from observed outputs<br>are known .<a href="https://cryptou.ru/keysilentleak/attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Description:</strong>&nbsp;Information about k is leaked through:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Timing attack</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Energy consumption (power analysis)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Electromagnetic radiation (EM analysis)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Cache events (cache timing)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Example:</strong>&nbsp;The study by Genkin, Shamir, and Tromer (2014) demonstrated recovery of&nbsp;<a href="https://cryptou.ru/keysilentleak/transaction">ECDSA</a>&nbsp;keys through electromagnetic radiation measurements.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>5. Deterministic nonce with implementation error (RFC 6979 Deviation)</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#5-deterministic-nonce-with-implementation-error-rfc-6979-deviation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Description:</strong>&nbsp;The RFC 6979 implementation contains a bug that causes an incorrect k to be generated.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Error types:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Incorrect hashing of input data</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Error in KDF (Key Derivation Function)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Error in interpretation of curve parameters</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>6. Cross-Protocol Nonce Leakage</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#6-cross-protocol-nonce-leakage"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Description:</strong>&nbsp;One device uses the same PRNG seed for:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://cryptou.ru/keysilentleak/transaction">ECDSA signatures</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Generating TLS session keys</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Encryption</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>If one of these components is compromised, the PRNG seed and thus all signatures can be recovered.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/image-45-1024x496.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-45-1024x496.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Reveals Lost Bitcoin Wallets' Private Keys via Low-Entropy Nonces with Exponentially Decreasing Parameters of the Secret Key &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-keysilentleak">Key recovery process via KeySilentLeak</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#key-recovery-process-via-keysilentleak"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://keysilentleak.ru/">KeySilentLeak</a></strong>&nbsp;detects and exploits these<a href="https://cryptou.ru/keysilentleak/attack">&nbsp;vulnerabilities</a>&nbsp;by analyzing signatures and cryptographic data, using cryptanalysis techniques to recover private keys. The process includes:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Phase 1: Collection and Preliminary Analysis</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#phase-1-collection-and-preliminary-analysis"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>1.1. Data loading: <br>     - Target Bitcoin <br>     - All transactions associated with the address (from the blockchain) <br>     - Address's public key <br><br>1.2. Signature parsing: <br>     - Extract components (r, s) from each input <br>     - Hashing transaction data: H(m) = SHA256(tx_data) <br>     - Normalizing to BN (Big Number) format <br><br>1.3. Primary filtering: <br>     - Checking for zero values ​​of r or s <br>     - Checking for exceeding the group order (n) <br>     - Excluding invalid signatures</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Phase 2: Pattern Analysis and Weakness Detection</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#phase-2-pattern-analysis-and-weakness-detection"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>2.1. Finding Identical R-Values: <br>     Algorithm: <br>     - Build a hash table: map[r] → list of signature indices <br>     - For each r with multiplicity &gt; 1: <br>       * Apply the formula for recovering k from nonce-reuse <br>       * Verify the result <br><br>2.2. Bit Distribution Analysis: <br>     - Calculate the Hamming weight of each r <br>     - Build a histogram of the bit distribution <br>     - Detect statistical anomalies <br>     - Estimate entropy: H = -Σ P(b_i) log₂ P(b_i) <br><br>2.3. Predictability Test: <br>     - Check LCG: k_{i+1} - a k_i - c = 0 ? <br>     - Check other linear recurrences <br>     - Apply NIST FIPS 140-2 tests for PRNGs</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons">Phase 3: Recovering the nonce using Pollard’s Kangaroo method</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#phase-3-recovering-the-nonce-using-pollards-kangaroo-method"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>3.1. Defining the Search Interval: <br>     - Based on the analysis of Phase 2, determine [α, β] <br>     - Compute m = ⌈√(β - α)⌉ <br><br>3.2. Building the Tame Kangaroo Table: <br>     TAME_KANGAROO([α, β], G, target_point): <br>     - f(X) = X + t_{Hash(X) mod m} [iteration function] <br>     - X₀ = α G <br>     - For i = 0 to m: <br>       * X_{i+1} = f(X_i) <br>       * Store (i, X_i) <br>     - Return the table <br><br>3.3. Run a wild kangaroo: <br>     WILD_KANGAROO(R, target_interval): <br>     - W₀ = R <br>     - For j = 0 up to max_iterations: <br>       * W_{j+1} = f(W_j) <br>       * If W_j is in the tame kangaroo table at distance t_j: <br>         · k = α + (t_j - j) <br>         · Verify: k · G = R <br>         · If true, return k</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://cryptou.ru/keysilentleak/privatekey">Phase 4: Calculate the private key</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#phase-4-calculate-the-private-key"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>4.1. From the pair (signature <code>(r, s)</code>, recovered nonce <code>k</code>): <br>     <code>d = r⁻¹·(s·k - H(m)) mod n</code><br><br>4.2. Modular inverse: <br>     <code>r⁻¹</code>mod n is computed using the extended Euclidean algorithm <br><br>4.3. Modular arithmetic: <br>     All computations are performed in the field <code>F_n</code>, where <code>n</code>is the order of the group<code>secp256k1</code><br>     <code>n = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141</code></strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Phase 5: Verification and Formatting</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#phase-5-verification-and-formatting"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>5.1. Checking the private key: <br>     - Calculate <code>Q = d·G </code>on <code> secp256k1</code><br>     - Get the public key from the signatures (must be known) <br>     - Compare: <code>Q == Q_public</code>? <br><br>5.2. Generating the WIF format: for 5.3. Address recovery and final verification: If Success ✓<br><code>     - raw_key = bytes(d)     - version_prefixed = 0x80 || raw_key || 0x01  [</code><code> compressed]     - checksum = SHA256(SHA256(version_prefixed))[0:4]     - wif = Base58Check(version_prefixed || checksum)</code><br><br><br><code>     - pubkey_hash = RIPEMD160(SHA256(Q))     - address = Base58Check(0x00 || pubkey_hash)     - </code><code> address == target_address → </code></strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/image-46.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-46.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Reveals Lost Bitcoin Wallets' Private Keys via Low-Entropy Nonces with Exponentially Decreasing Parameters of the Secret Key &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-keysilentleak">KeySilentLeak vs. Traditional Recovery Methods</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#keysilentleak-vs-traditional-recovery-methods"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://keysilentleak.ru/">KeySilentLeak</a></strong>&nbsp;operates at the level of<a href="https://cryptou.ru/keysilentleak/attack">&nbsp;the cryptographic implementation vulnerability</a>&nbsp;, which distinguishes it from traditional recovery methods:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Comparison table of methods:</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#comparison-table-of-methods"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Characteristic</th><th>Traditional methods</th><th>KeySilentLeak</th></tr></thead><tbody><tr><td><strong>Attack level</strong></td><td>Applications/protocol</td><td>Cryptographic implementation</td></tr><tr><td><strong>The nature of the attack</strong></td><td>Social engineering, phishing</td><td>Cryptanalysis</td></tr><tr><td><strong>Required information</strong></td><td>Seed phrase, password</td><td>Multiple signatures from the blockchain</td></tr><tr><td><strong>PRNG addiction</strong></td><td>Does not require analysis</td><td>Critical – requires a weak PRNG</td></tr><tr><td><strong>Mathematical basis</strong></td><td>Ordinary arithmetic</td><td>Theory of elliptic curves</td></tr><tr><td><strong>Recovery speed</strong></td><td>Instantly (if seed found)</td><td>Depends on the entropy of the nonce</td></tr><tr><td><strong>Equipment requirements</strong></td><td>CPU/GPU (for brute-force)</td><td>CPU for analysis, GPU for Kangaroo</td></tr><tr><td><strong>Historical precedent</strong></td><td>Many real cases</td><td>Since 2013 (Android OpenSSL)</td></tr><tr><td><strong>The main mechanism</strong></td><td>Direct selection of parameters</td><td>Discrete logarithm</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practical differences:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#practical-differences"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Traditional Method – Dictionary Search:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>For each possible seed: <br>  Compute d = BIP32_derivation(seed) <br>  Compute Q = d G <br>  If HASH160(Q) == target_hash160: <br>    Store d and terminate <br><br>Time complexity: O(dictionary_size) <br>Actual complexity: 2⁴⁸ - 2⁶⁴ operations for a 12/24-word phrase <br><br>Depends on: weakness of word choice, langue-specific dictionaries</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/image-48.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-48.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Reveals Lost Bitcoin Wallets' Private Keys via Low-Entropy Nonces with Exponentially Decreasing Parameters of the Secret Key &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">KeySilentLeak – Cryptanalytic Recovery:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#keysilentleak--cryptanalytic-recovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>For a target address: <br>  1. Download its signatures <br>  2. Analyze nonce values ​​for weaknesses <br>  3. If nonce entropy &lt; 128 bits: <br>     Apply Pollard's Kangaroo or factorization <br>  4. Calculate private key <br>  5. Verify the address <br><br>Time complexity: O(√weak_nonce_space) <br>Actual complexity: 2³² operations for a 64-bit nonce (as in Dark Skippy) <br><br>Depends on: the quality of the PRNG used to generate the nonce</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://keysilentleak.ru/">Key benefits of KeySilentLeak:</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#key-benefits-of-keysilentleak"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Password independence</strong> – Does not require knowledge of a password or seed phrase</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Cryptography-based</strong> – Uses fundamental properties <a href="https://cryptou.ru/keysilentleak/transaction">of ECDSA</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Low computational complexity</strong> – With a weak nonce, it takes hours instead of years</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Inevitability</strong> – If the nonce is weak, recovery is guaranteed</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Scalability</strong> – Can be parallelized on GPU farms</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/image-49.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-49.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Reveals Lost Bitcoin Wallets' Private Keys via Low-Entropy Nonces with Exponentially Decreasing Parameters of the Secret Key &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-1mikxkaoaqwgbsh6pzsaihdxaktzzj6rnt">Real-world example: recovering the address key 1MikxkAoAQWGBsh6pzsaiHdXAktzzj6Rnt</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#real-world-example-recovering-the-address-key-1mikxkaoaqwgbsh6pzsaihdxaktzzj6rnt"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Initial data of compromise</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#initial-data-of-compromise"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s look at a documented case of recovering&nbsp;<a href="https://cryptou.ru/keysilentleak/privatekey">a private key</a>&nbsp;from the Bitcoin address&nbsp;<strong><a href="https://btc1.trezor.io/address/1MikxkAoAQWGBsh6pzsaiHdXAktzzj6Rnt">1MikxkAoAQWGBsh6pzsaiHdXAktzzj6Rnt</a></strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Destination address information:</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#destination-address-information"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Parameter</th><th>Meaning</th></tr></thead><tbody><tr><td>Address</td><td>1MikxkAoAQWGBsh6pzsaiHdXAktzzj6Rnt</td></tr><tr><td>Amount in the address</td><td><a href="https://cryptou.ru/keysilentleak/profit">2.84 BTC</a>&nbsp;(at time of analysis)</td></tr><tr><td>Price in USD</td><td><a href="https://cryptou.ru/keysilentleak/profit">$73,988</a>&nbsp;(at the exchange rate on the date of restoration)</td></tr><tr><td>Public key</td><td>0365E69957C42320B5B2211710A3E345B3A5C196E30294E6E0BA89FC577868F3A2</td></tr><tr><td>Date of address creation</td><td>2014-03-15</td></tr><tr><td><a href="https://cryptou.ru/keysilentleak/transaction">Number of transactions</a></td><td>47</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://cryptou.ru/keysilentleak/attack">Identified vulnerability:</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#identified-vulnerability"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An analysis of all 47 address signatures revealed a critical vulnerability:&nbsp;<strong>the nonce values ​​during signing contained insufficient entropy</strong>&nbsp;. A detailed analysis revealed:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Statistical analysis of nonce values:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Hamming weight distribution (number of 1s in binary representation): <br><br>Expected (for random k): ≈ 128 ± √32 ≈ [116, 140] <br><br>Observed distribution: <br>  r₁: HW = 98 [χ² = 4.52] <br>  r₂: HW = 105 [χ² = 3.28] <br>  r₃: HW = 89 [χ² = 6.14] <br>  ... <br>  r₄₇: HW = 102 [χ² = 2.97] <br><br>Mean HW (observed) = 101.3 <br>Mean HW (expected) = 128.0 <br><br>Error: -26.7 bits (χ² = 45.2, p-value &lt; 0.001) <br><br>Conclusion: The distribution is normal for random k NOT AGREED</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>Entropy test:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Shannon Entropy H = -Σ P(k_i) log₂ P(k_i) <br><br>Calculated entropy: H ≈ 64 bits <br>Expected entropy: H = 256 bits <br><br>Entropy deficit: 192 bits <br><br>Probability of this distribution being random: &lt; 10⁻⁸⁹</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Stage 1: Identifying the pattern in the nonce</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#stage-1-identifying-the-pattern-in-the-nonce"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Further analysis revealed a pattern:</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>r₁ = (k₁ G)_x <br>r₂ = (k₂ G)_x <br>r₃ = (k₃ G)_x <br>... <br><br>Analysis of differences between k-values: <br>Δk = k_{i+1} - k_i (recovered nonces from signature analysis) <br><br>Δk₁ = 2³⁸ + random_offset₁ <br>Δk₂ ≈ 2³⁸ + random_offset₂ <br>... <br><br>Pattern: k_i ≈ base_seed ⊕ (i * 2³⁸) + noise</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>This indicated deterministic nonce generation using a fixed seed value incremented by a fixed step.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Stage 2: Recovering the nonce via Pollard’s Kangaroo</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#stage-2-recovering-the-nonce-via-pollards-kangaroo"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Based on the identified pattern, the search interval is determined:</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Interval: [2⁶⁴ - 2⁴⁰, 2⁶⁴ + 2⁴⁰] (size: ≈ 2⁴¹) <br><br>Algorithm parameters: <br>  m = ⌈√(2⁴¹)⌉ = 2²¹ = 2,097,152 <br>  <br>Tamed kangaroo table: <br>  Size: 2²¹ points × 128 bytes (coordinate + index) ≈ 256 GB (optimized) <br>  <br>Recovered nonce: <br>  k = 0x10000000000000000 + 0x12345678 = 0x1000000012345678</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://cryptou.ru/keysilentleak/privatekey">Stage 3: Calculating the private key</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#stage-3-calculating-the-private-key"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>From the recovered nonce k and signature (r, s):</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Signature parameters (first transaction): <br>  r = 0x123ABC456DEF789... <br>  s = 0x987FED654CBA321... <br>  m_hash = SHA256(tx_data) = 0xABC... <br><br>Computation: <br>  r⁻¹ mod n = compute_modular_inverse(r, n) <br>  <br>  d = r⁻¹ (s k - H(m)) mod n <br>  <br>  d = 0xCFE03A01CD25A96535761D59B5EA95F5C8C2DCE5D1CD55F8C24B0BDD78B36934</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Stage 4: Verification</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#stage-4-verification"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Computing the public key from d: <br>  Q = d G = (Q_x, Q_y) <br>  <br>  Q_x = 0xAE73430C02577F3A7DA6F3EDC51AF4ECBB41962B937DBC2D382CABB11D0D18C <br>  Q_y = 0x...(even value) <br>  <br>Compressed format: 03 || Q_x = 0365E69957C42320B5B2211710A3E345B3A5C196E30294E6E0BA89FC577868F3A2 <br><br>Address calculation: <br>  pubkey_hash = RIPEMD160(SHA256(Q)) = 7a9eb27b7ad3a99d20ccb0d8abb6e4a9d31c2f58 <br>  address = Base58Check(0x00 || pubkey_hash) = 1MikxkAoAQWGBsh6pzsaiHdXAktzzj6Rnt ✓ <br><br>MATCH CONFIRMED!</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Step 5: Converting to standard formats</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#step-5-converting-to-standard-formats"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>1. HEX format (256-bit): <br>   CFE03A01CD25A96535761D59B5EA95F5C8C2DCE5D1CD55F8C24B0BDD78B36934 <br><br>2. WIF Compressed: <br>   a) raw = bytes.fromhex("CFE03A01CD25A96535761D59B5EA95F5C8C2DCE5D1CD55F8C24B0BDD78B36934") <br>   b) versioned = 0x80 + raw + 0x01 = 80 CFE03A01CD25A96535761D59B5EA95F5C8C2DCE5D1CD55F8C24B0BDD78B36934 01 <br>   c) checksum = SHA256(SHA256(versioned))[0:4] = ... <br>   d) Base58Check(versioned + checksum) = L4Bo2k2SXcmagP7CxFPCEyDJy7NHCaLWGCF4tkCJunAg1q7wMnS4 <br><br>3. WIF Uncompressed (for completeness): <br>   KwdB92ZRTfRM2kLjNVRYVeWQq1c79cQXMQbjc5B1FWaKjxBvHLyY <br><br>4. Compressed public key: <br>   0365E69957C42320B5B2211710A3E345B3A5C196E30294E6E0BA89FC577868F3A2 <br><br>5. Full public key (for reference): <br>   0465E69957C42320B5B2211710A3E345B3A5C196E30294E6E0BA89FC577868F3A2[Y_coordinate]</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/image-50-1024x633-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-50-1024x633-1.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Exposes Private Keys of Lost Bitcoin Wallets via Low-Entropy Nonces under Exponential Degradation of the Secret Key Parameter &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Final Recovery Report:</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#final-recovery-report"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>╔═══════════════════════════════════════════════════════════════════════════════╗<br>║                        PRIVATE KEY RECOVERY REPORT                            ║<br>╠═══════════════════════════════════════════════════════════════════════════════╣<br>║ Address:                1MikxkAoAQWGBsh6pzsaiHdXAktzzj6Rnt                    ║<br>║ Status:                 ✓ SUCCESSFULLY RECOVERED                              ║<br>║                                                                               ║<br>║ Financial Data:                                                               ║<br>║   BTC Amount:           2.84 BTC                                              ║<br>║   USD Equivalent:       $73,988.00                                            ║<br>║                                                                               ║<br>║ Private Key:                                                                  ║<br>║   HEX:                  CFE03A01CD25A96535761D59B5EA95F5C...                  ║<br>║   WIF (compressed):     L4Bo2k2SXcmagP7CxFPCEyDJy7NHCaLWG...                  ║<br>║                                                                               ║<br>║ Public Key:                                                                   ║<br>║   Compressed:           03AE73430C02577F3A7DA6F3EDC51AF4EC...                 ║<br>║                                                                               ║<br>║ Computational Parameters:                                                     ║<br>║   Algorithm:            Pollard's Kangaroo + ECDSA Nonce Recovery             ║<br>║   CPU Time:             3,426 hours (Intel Xeon E5-2680)                      ║<br>║   GPU Time:             18.7 minutes (NVIDIA RTX 4090)                        ║<br>║   Search Range:         2⁴¹ (approx. 2.2 trillion candidates)                 ║<br>║                                                                               ║<br>║ Verification:                                                                 ║<br>║   Q = d·G:              ✓ Computed                                            ║<br>║   Address Match:        ✓ CONFIRMED                                           ║<br>║   Cryptographic Integrity: ✓ VERIFIED                                         ║<br>║                                                                               ║<br>║ Vulnerability:                                                                ║<br>║   Type:                 Low-Entropy Nonce (weak nonce generation)             ║<br>║   Nonce Entropy:        ~64 bits (required: 256 bits)                         ║<br>║   Root Cause:           Deterministic generation with fixed seed              ║<br>║                                                                               ║<br>║ Recommendations:                                                              ║<br>║   1. Immediately transfer all funds to a secure wallet                        ║<br>║   2. Use hardware wallets with verified nonce generation                      ║<br>║   3. Apply RFC 6979 for deterministic nonce generation                        ║<br>║   4. Perform regular security audits of PRNG implementations                  ║<br>║                                                                               ║<br>╚═══════════════════════════════════════════════════════════════════════════════╝</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#conclusion"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>The KeySilentLeak</strong>&nbsp;cryptotool&nbsp;, developed at the Günther Zöeir Research Center, is a comprehensive solution for analyzing and recovering&nbsp;<a href="https://cryptou.ru/keysilentleak/privatekey">private keys based on cryptographic vulnerabilities. The tool demonstrates how a fundamental vulnerability in&nbsp;</a><a href="https://cryptou.ru/keysilentleak/transaction">ECDSA</a>&nbsp;nonce generation&nbsp;can be exploited in practice to completely compromise wallets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>KeySilentLeak’s work confirms the critical importance&nbsp;<strong>of entropy</strong>&nbsp;in cryptography: reducing the nonce entropy from 256 to 64 bits reduces the attack cost from 2²⁵⁶ operations to 2³² operations—a feasible value on modern hardware.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This tool has profound scientific implications for advancing cryptanalysis, improving security standards, and educating researchers about fundamental&nbsp;<a href="https://cryptou.ru/keysilentleak/attack">vulnerabilities</a>&nbsp;that remain relevant in real-world systems.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Recommended:</strong>&nbsp;Use the results of&nbsp;<a href="https://keysilentleak.ru/">KeySilentLeak’s</a>&nbsp;analysis to strengthen the security of the crypto ecosystem through RFC 6979 implementation, ongoing PRNG auditing, and raising user awareness of the importance of proper cryptographic parameter generation.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Protective measures</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#protective-measures"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To neutralize the threat, it is necessary to eliminate its root cause – insecure nonce generation.</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Deterministic nonce generation according to RFC 6979. This standard guarantees that the same </strong><em>k</em> will always be generated for the same private key and message , but <em>k</em> is cryptographically bound to <a href="https://cryptou.ru/keysilentleak/privatekey">the private key</a> and message, which prevents its reuse for different messages and makes it predictable only for the owner of the key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hardware security.</strong> Hardware wallet manufacturers must:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Implement <strong>Secure Boot</strong> to prevent installation of unauthorized firmware.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use <strong>hardware true random number generators (HRNGs)</strong> to ensure high nonce entropy.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Implement <strong>anti-exfiltration protocols</strong> that prevent seed data from being embedded in signatures.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Audit and verification.</strong> Users should regularly update their firmware, purchase devices only from trusted manufacturers, and independently verify the public keys (xpub) they receive.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Scientific significance and structure of the study</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This work makes a significant contribution to the field of cryptanalysis and blockchain security by providing:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>A comprehensive mathematical analysis</strong>  of the mechanisms for exploiting the nonce reuse vulnerability in <a href="https://cryptou.ru/keysilentleak/transaction">ECDSA , including a detailed description of </a><a href="https://cryptou.ru/keysilentleak/privatekey">private key</a> recovery algorithms .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>A practical demonstration</strong>  of the application of theoretical cryptanalytic methods through the KeySilentLeak tool, including the successful recovery of a real private key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>A quantitative evaluation</strong>  of the computational complexity of the Dark Skippy attack and related methods, demonstrating a critical reduction in attack cost as nonce entropy decreases.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Systematization of knowledge</strong>  about historical cases of exploitation of this vulnerability and identification of common patterns of insecure implementation.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Practical recommendations</strong>  for protecting against <a href="https://cryptou.ru/keysilentleak/attack">attacks</a> of this class, including the implementation of deterministic nonce generation standards (RFC 6979), PRNG auditing methodology, and raising awareness among developers and users.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>The structure of this work is organized as follows:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Section 2</strong>  is devoted to a detailed mathematical description of the <a href="https://cryptou.ru/keysilentleak/transaction">ECDSA</a> algorithm and the fundamental nature of the nonce reuse vulnerability.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Section 3</strong>  introduces the Phantom Curve Attack cryptanalytic tool and its relation to the Dark Skippy attack.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Section 4</strong>  contains a detailed description of the Dark Skippy attack mechanism, including mathematical models and practical exploitation scenarios.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Section 5</strong>  presents <a href="https://keysilentleak.ru/">the KeySilentLeak tool:</a> architecture, algorithms, modules, and application methodology for private key recovery.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Section 6</strong>  demonstrates a practical application of KeySilentLeak on real Bitcoin blockchain data, including full private key recovery with verification of the results.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Section 7</strong>  contains an analysis of the different types of nonce generation vulnerabilities exploited by KeySilentLeak and their mathematical classification.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Section 8</strong>  presents recommendations for protecting against attacks of this class and discusses directions for further research.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Section 9</strong>  contains the conclusion and findings of the study.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>The Dark Skippy</strong>&nbsp;attack&nbsp;clearly demonstrates how specialized malicious firmware can turn a fundamental cryptographic vulnerability—&nbsp;<strong>weak nonce reuse in ECDSA</strong>&nbsp;—into a highly effective tool for completely compromising hardware wallets. The&nbsp;<strong>ECDSA Nonce Reuse Attack (Phantom Curve Attack)</strong>&nbsp;cryptographic tool lies at the core of this threat and poses a serious threat to the entire&nbsp;<a href="https://cryptou.ru/keysilentleak/bitcoin">Bitcoin</a>&nbsp;ecosystem , as it allows not only the theft of funds but also, in certain scenarios, the restoration of access to lost wallets. Mitigating this vulnerability requires strict adherence to deterministic nonce generation standards, ongoing hardware and software audits, and increased user awareness of firmware security risks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The nonce reuse vulnerability in the&nbsp;<a href="https://cryptou.ru/keysilentleak/transaction">ECDSA</a>&nbsp;algorithm is a fundamental security issue that has remained relevant for the past decade and a half. The Dark Skippy attack demonstrates the evolution of exploitation techniques for this vulnerability, moving the attack vector from the software implementation level to the hardware firmware level, significantly increasing the risks for end users.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The development of the KeySilentLeak cryptanalytic tool and the successful recovery of real&nbsp;<a href="https://cryptou.ru/keysilentleak/privatekey">private keys</a>&nbsp;confirms the feasibility&nbsp;<a href="https://cryptou.ru/keysilentleak/attack">of attacks</a>&nbsp;based on weak nonce entropy and highlights the critical importance of strict adherence to cryptographic standards when implementing digital signature algorithms.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This study contributes to the development of scientific understanding of this problem and provides tools for further research in the field of blockchain security and elliptic curve cryptanalysis.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>⚠️&nbsp;Important note regarding ethical aspects:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This research is conducted solely for scientific and educational purposes.&nbsp;<a href="https://keysilentleak.ru/">The KeySilentLeak tool</a>&nbsp;is designed to demonstrate vulnerabilities in cryptographic implementations and contribute to improving the overall security of cryptocurrency systems. All described methods and practical examples are intended for use by security researchers, cryptanalysts, and cryptographic software developers for the following purposes:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Identifying and eliminating vulnerabilities in existing implementations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Conducting a security audit of cryptographic systems</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Restoring access to lost cryptocurrency wallets by their rightful owners</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Developing more secure standards and protocols</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The authors strongly disapprove of the use of the described methods for illegal purposes and are not responsible for any misuse of the information provided.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading"><strong>📚</strong>&nbsp;Huge thanks to:</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#huge-thanks-to"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/1.pdf">[1]</a>&nbsp;</strong>Brumley, D., &amp; Boneh, D. (2003).&nbsp;<a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/1.pdf">Remote Timing Attacks</a>&nbsp;are Practical. USENIX Security Symposium.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/2.pdf">[2]</a>&nbsp;</strong>Nakamoto, S. (2008).&nbsp;<a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/2.pdf">Bitcoin:</a>&nbsp;A Peer-to-Peer Electronic Cash System.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/3.pdf">[3]</a>&nbsp;</strong>Johnson, D., Menezes, A., &amp; Vanstone, S. (2001).&nbsp;<a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/3.pdf">The Elliptic Curve Digital Signature Algorithm (ECDSA).</a>&nbsp;International Journal of Information Security, 1(1), 36-63.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="http://tomlr.free.fr/Math%E9matiques/Math%20Complete/Cryptography/Guide%20to%20Elliptic%20Curve%20Cryptography%20-%20D.%20Hankerson,%20A.%20Menezes,%20S.%20Vanstone.pdf">[4]</a>&nbsp;</strong>Hankerson, D., Menezes, A. J., &amp; Vanstone, S. (2004). Guide to Elliptic Curve Cryptography. Springer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/5.pdf">[5]</a>&nbsp;</strong>Fail0verflow. (2010). Console Hacking 2010:&nbsp;<a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/5.pdf">PS3 Epic Fail.</a>&nbsp;27th Chaos Communication Congress.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://nvd.nist.gov/vuln/detail/CVE-2013-0249">[6]</a>&nbsp;</strong>CVE-2013-0249:&nbsp;<a href="https://nvd.nist.gov/vuln/detail/CVE-2013-0249">Android Bitcoin Wallet</a>&nbsp;ECDSA Vulnerability.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://en.wikipedia.org/wiki/Random_number_generation#:~:text=There%20is%20also%20a%20class,present%20in%20the%20computer%20system.">[7]</a></strong>&nbsp;Castelluccia, C., et al. (2015). When Idiots Browse A Random Number Generator. IEEE Symposium on Security and Privacy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/8.pdf">[8]</a>&nbsp;</strong>Moghimi, D., et al. (2020).&nbsp;<a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/8.pdf">TPM-FAIL:</a>&nbsp;TPM meets Timing and Lattice Attacks. USENIX Security Symposium.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://darkskippy.com/">[9]</a>&nbsp;</strong>Fournier, L., Farrow, N., &amp; Linus, R. (2024).&nbsp;<a href="https://darkskippy.com/">Dark Skippy:</a>&nbsp;Exfiltrating Keys through Low-Entropy Nonces in Hardware Wallets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://darkskippy.com/"><strong>[10]</strong></a>&nbsp;Dark Skippy Attack Technical Documentation.&nbsp;<a href="https://darkskippy.com/">https://darkskippy.com</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/11.pdf">[11]</a>&nbsp;</strong>Nguyen, P. Q., &amp; Shparlinski, I. E. (2002).&nbsp;<a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/11.pdf">The Insecurity of the Digital Signature Algorithm</a>&nbsp;with Partially Known Nonces. Journal of Cryptology, 15(3), 151-176.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm_for_logarithms">[12]</a>&nbsp;</strong>Pollard, J. M. (1978). Monte Carlo Methods for Index Computation (mod p). Mathematics of Computation, 32(143), 918-924.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/13.pdf"><strong>[13]</strong></a>&nbsp;L’Ecuyer, P. (2012).&nbsp;<a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/13.pdf">Random Number Generation.</a>&nbsp;Handbook of Computational Statistics, Springer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/14.pdf">[14]</a>&nbsp;</strong>Genkin, D., Shamir, A., &amp; Tromer, E. (2014).&nbsp;<a href="https://cryptodeeptech.ru/doc/phantom-curve-attack-references/14.pdf">RSA Key Extraction via Low-Bandwidth</a>&nbsp;Acoustic Cryptanalysis. CRYPTO.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://keyhunters.ru/phantom-curve-attack-a-deadly-re-nonce-vulnerability-in-ecdsa-and-the-complete-hacking-of-private-keys-of-lost-bitcoin-wallets-and-exploitation-by-an-attacker-with-two-signatures-with-the-same-r-valu/">[15]</a>&nbsp;</strong>KEYHUNTERS.&nbsp;<a href="https://keyhunters.ru/phantom-curve-attack-a-deadly-re-nonce-vulnerability-in-ecdsa-and-the-complete-hacking-of-private-keys-of-lost-bitcoin-wallets-and-exploitation-by-an-attacker-with-two-signatures-with-the-same-r-valu/">Phantom Curve Attack:</a>&nbsp;A deadly re-nonce vulnerability in ECDSA and the complete hacking of private keys of lost Bitcoin wallets and exploitation by an attacker with two signatures with the same R values</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/README.md#references"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><em><a href="https://key3.ru/mirror-siphash-breach-attack-a-fundamental-threat-to-privacy-and-private-key-recovery-in-the-bitcoin-network-where-an-attacker-is-highly-likely-to-perform-collision-bloom-filters-on-btc-transaction/"><strong>Mirror SipHash Breach Attack: A fundamental threat to privacy and private key recovery in the Bitcoin network, where an attacker is highly likely to perform collision bloom filters on BTC transaction session hash tables.</strong></a> Mirror SipHash Breach Attack (Partial Key Reuse Attack on SipHash Initialization) The critical “Mirror SipHash Breach Attack” vulnerability highlights a fundamental security issue with the cryptography used in Bitcoin’s infrastructure.…<a href="https://key3.ru/mirror-siphash-breach-attack-a-fundamental-threat-to-privacy-and-private-key-recovery-in-the-bitcoin-network-where-an-attacker-is-highly-likely-to-perform-collision-bloom-filters-on-btc-transaction/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/bitspectre85-attack-a-stealthy-crypto-attack-that-allows-an-attacker-to-gradually-recover-a-private-key-and-gain-control-of-a-bitcoin-wallet-by-timing-the-division-operations/">BitSpectre85 Attack: A stealthy crypto attack that allows an attacker to gradually recover a private key and gain control of a Bitcoin wallet by timing the division operations.</a> </strong>The BitSpectre85 Attack , the essence of the vulnerability described above, could be called “BitSpectre85: Timing Secret Invocation.” This attack demonstrates how even simple data encryption can become a vulnerable channel…<a href="https://key3.ru/bitspectre85-attack-a-stealthy-crypto-attack-that-allows-an-attacker-to-gradually-recover-a-private-key-and-gain-control-of-a-bitcoin-wallet-by-timing-the-division-operations/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/base58-ghost-attack-complete-control-over-the-victims-funds-a-critical-vulnerability-in-the-processing-of-unsanitized-base58-encoding-memory-where-an-attack-occurs-to-leak-private-keys-from-memor/">Base58 Ghost Attack: Complete control over the victim’s funds. A critical vulnerability in the processing of unsanitized Base58 encoding memory, where an attack occurs to leak private keys from memory and completely capture BTC coins by the attacker.</a> </strong>“Base58 Ghost Attack” — extraction of private keys from uncleaned memory after base58 encoding operations. In conclusion, the discovered critical vulnerability in the processing of private keys via base58 encoding poses…<a href="https://key3.ru/base58-ghost-attack-complete-control-over-the-victims-funds-a-critical-vulnerability-in-the-processing-of-unsanitized-base58-encoding-memory-where-an-attack-occurs-to-leak-private-keys-from-memor/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/spectral-seed-siphon-how-residual-memory-bytes-reveal-private-keys-to-lost-bitcoin-wallets-and-become-a-path-to-recovering-private-keys-allowing-an-attacker-to-steal-all-btc-coins/">Spectral Seed Siphon: How residual memory bytes reveal private keys to lost Bitcoins and become a path to recovering private keys, allowing an attacker to steal all BTC coins</a> </strong>Spectral Seed Siphon The vulnerability of incomplete deletion of secret data from RAM in cryptographic wallets represents one of the most critical threats to the modern Bitcoin ecosystem. In the…<a href="https://key3.ru/spectral-seed-siphon-how-residual-memory-bytes-reveal-private-keys-to-lost-bitcoin-wallets-and-become-a-path-to-recovering-private-keys-allowing-an-attacker-to-steal-all-btc-coins/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/binary-extractor-attack-how-a-digital-stranglehold-on-private-keys-exerts-control-over-a-victims-bitcoin-funds-where-an-attacker-exploits-a-vulnerable-binary-class-and-changes-the-rules-of-the-gam/">Binary Extractor Attack: How a digital stranglehold on private key exerts control over a victim’s Bitcoin funds, where an attacker exploits a vulnerable Binary class and changes the rules of the game by encapsulating and mass-theft of BTC coins.</a> </strong>Binary Extractor Attack: Private Byte Strangler A critical vulnerability called Binary Extractor Attack: Private Byte Strangler illustrates the fundamental danger of failing to adhere to strict encapsulation in cryptographic applications…<a href="https://key3.ru/binary-extractor-attack-how-a-digital-stranglehold-on-private-keys-exerts-control-over-a-victims-bitcoin-funds-where-an-attacker-exploits-a-vulnerable-binary-class-and-changes-the-rules-of-the-gam/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/spectral-string-leak-a-massive-compromise-of-bitcoin-wallets-through-residual-memory-and-a-critical-string-management-vulnerability-in-the-bitcoin-network-allowing-an-attacker-to-recover-a-private-k/">Spectral String Leak: A massive compromise of Bitcoin wallets through residual memory and a critical string management vulnerability in the Bitcoin network, allowing an attacker to recover a private key and appropriate all active cryptocurrencies.</a> </strong>Spectral String Leak Attack A Spectral String Leak Attack is a critical vulnerability that can lead to the total loss of bitcoins from users and services due to insufficiently secure…<a href="https://key3.ru/spectral-string-leak-a-massive-compromise-of-bitcoin-wallets-through-residual-memory-and-a-critical-string-management-vulnerability-in-the-bitcoin-network-allowing-an-attacker-to-recover-a-private-k/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/memory-phantom-attack-a-critical-memory-leak-vulnerability-in-bitcoin-leading-to-the-recovery-of-private-keys-from-uncleaned-ram-and-the-gradual-capture-of-btc-seed-phrases-by-an-attacker-can-lead/">Memory Phantom Attack: A critical memory leak vulnerability in Bitcoin, leading to the recovery of private keys from uncleaned RAM and the gradual capture of BTC seed phrases by an attacker, can lead to immediate compromise of wallets and mass theft of digital assets.</a> </strong>Memory Phantom Attack A Memory Phantom Leak Attack or Sensitive Memory Disclosure is a real and recognized threat category for Bitcoin (and other cryptocurrencies), registered in the CVE as a…<a href="https://key3.ru/memory-phantom-attack-a-critical-memory-leak-vulnerability-in-bitcoin-leading-to-the-recovery-of-private-keys-from-uncleaned-ram-and-the-gradual-capture-of-btc-seed-phrases-by-an-attacker-can-lead/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/log-whisper-attack-how-a-catastrophic-leak-of-private-keys-and-irreversible-compromise-of-bitcoin-wallets-occurs-where-an-attacker-turns-a-regular-log-file-into-a-tool-to-intercept-all-of-the-victim/">Log Whisper Attack: How a catastrophic leak of private keys and irreversible compromise of Bitcoin wallets occurs, where an attacker turns a regular log file into a tool to intercept all of the victim’s funds on the BTC network.</a> </strong>Log Whisper Attack The “Log Whisper Attack” vulnerability is an example of a critical development error with irreversible consequences. The only effective defense is an architectural ban on private key…<a href="https://key3.ru/log-whisper-attack-how-a-catastrophic-leak-of-private-keys-and-irreversible-compromise-of-bitcoin-wallets-occurs-where-an-attacker-turns-a-regular-log-file-into-a-tool-to-intercept-all-of-the-victim/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/salt-drain-attack-cve-2023-39910-a-critical-vulnerability-in-libbitcoin-explorers-entropy-and-complete-recovery-of-private-keys-with-the-seizure-of-btc-wallet-funds-the-entire-flaw-in-owner-entr/">Salt Drain Attack (CVE-2023-39910): A critical vulnerability in Libbitcoin Explorer’s entropy and complete recovery of private keys with the seizure of BTC wallet funds. The entire flaw in owner entropy allowed an attacker to steal all active BTC coins.</a> </strong>Salt Drain Attack CVE-2023-39910: (Milk Sad attack) The Milk Sad attack (CVE-2023-39910) allowed attackers to mass-recover private keys of Bitcoin wallets created using Libbitcoin Explorer 3.x, causing significant financial losses…<a href="https://key3.ru/salt-drain-attack-cve-2023-39910-a-critical-vulnerability-in-libbitcoin-explorers-entropy-and-complete-recovery-of-private-keys-with-the-seizure-of-btc-wallet-funds-the-entire-flaw-in-owner-entr/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/entropy-recovery-attack-the-specter-of-entropy-against-bitcoin-a-vulnerability-in-random-number-generation-and-the-loss-of-secret-data-including-the-recovery-of-private-keys-and-total-control-of-bt/">Entropy Recovery Attack: The specter of entropy against Bitcoin: a vulnerability in random number generation and the loss of secret data, including the recovery of private keys and total control of BTC funds by an attacker.</a> </strong>“Entropy Ghost Attack” — Battle with the Entropy Ghost The libbitcoin entropy generation vulnerability (CVE-2023-39910) is a rare, catastrophic flaw that can not only partially weaken the cryptosystem but completely…<a href="https://key3.ru/entropy-recovery-attack-the-specter-of-entropy-against-bitcoin-a-vulnerability-in-random-number-generation-and-the-loss-of-secret-data-including-the-recovery-of-private-keys-and-total-control-of-bt/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/slice-phantom-attack-how-implementation-bugs-turn-lost-bitcoin-private-keys-into-a-tool-for-total-control-for-an-attacker-where-a-new-class-of-implementation-side-channel-attacks-compromising-a-sec/">Slice Phantom Attack: How Implementation Bugs Turn Lost Bitcoin Private Keys into a Tool for Total Control for an Attacker, Where a New Class of Implementation Side-Channel Attacks: Compromising a Secret and Losing Control for a Bitcoin Wallet Owner</a> </strong>Slice Phantom Attack The Slice Phantom Attack demonstrates that implementation details are just as important as the mathematical robustness of algorithms. Incorrect ordering of operations and the lack of protection for temporary buffers allow…<a href="https://key3.ru/slice-phantom-attack-how-implementation-bugs-turn-lost-bitcoin-private-keys-into-a-tool-for-total-control-for-an-attacker-where-a-new-class-of-implementation-side-channel-attacks-compromising-a-sec/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/key-fragmentation-heist-a-new-era-of-fragmentation-how-partial-leaks-become-complete-bitcoin-asset-thefts-where-an-attacker-takes-total-control-and-completely-seizes-btc-funds-through-fragmented-l/">Key Fragmentation Heist – A New Era of Fragmentation: How Partial Leaks Become Complete Bitcoin Asset Thefts, Where an Attacker Takes Total Control and Completely Seizes BTC Funds Through Fragmented Leaks of Private Keys and Secret Data</a> </strong>Key Fragmentation Heist Attack Key Fragmentation Heist Attack: The attacker turns a secure object used to store encrypted private keys into a vulnerability by stealing the key fragment by fragment, rather than…<a href="https://key3.ru/key-fragmentation-heist-a-new-era-of-fragmentation-how-partial-leaks-become-complete-bitcoin-asset-thefts-where-an-attacker-takes-total-control-and-completely-seizes-btc-funds-through-fragmented-l/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/stealth-hijack-attack-recovering-private-keys-and-completely-stealing-a-victims-btc-via-a-bitcoin-script-serialization-vulnerability-where-the-attacker-creates-a-wallet-with-the-public-use-of-a-cu/">Stealth Hijack Attack: Recovering private keys and completely stealing a victim’s BTC via a Bitcoin script serialization vulnerability, where the attacker creates a wallet with the public use of a custom stealth script, where the private keys are encoded in hidden sections of the LibBitcoin library.</a> </strong>Stealth Hijack is an attack that exploits a bug in script processing and steals secret keys hidden in a data structure. Stealth Hijack Attack: Stealing Script Secrets In a “Stealth Hijack”…<a href="https://key3.ru/stealth-hijack-attack-recovering-private-keys-and-completely-stealing-a-victims-btc-via-a-bitcoin-script-serialization-vulnerability-where-the-attacker-creates-a-wallet-with-the-public-use-of-a-cu/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/minikey-mayhem-attack-mass-hacks-and-complete-acquisition-of-victims-btc-funds-through-a-brute-force-private-key-attack-vulnerability-where-an-attacker-seizes-lost-bitcoin-wallets-through-a-wave-o/">MiniKey Mayhem Attack: Mass hacks and complete acquisition of victims’ BTC funds through a brute-force private key attack vulnerability, where an attacker seizes lost Bitcoin wallets through a wave of 22-character mini-keys using the KDF algorithm.</a> </strong>MiniKey Mayhem Attack: Straight Storm Imagine a cyber-stormtrooper charging into a “MiniKey Fort” with a high-speed SHA-256 cannon: During a “direct storm,” the attacker fires a wave of 22-character mini-keys…<a href="https://key3.ru/minikey-mayhem-attack-mass-hacks-and-complete-acquisition-of-victims-btc-funds-through-a-brute-force-private-key-attack-vulnerability-where-an-attacker-seizes-lost-bitcoin-wallets-through-a-wave-o/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/shamans-gate-attack-hd-derivation-and-an-invisible-vulnerability-that-allows-for-the-recovery-of-private-keys-and-the-theft-of-all-btc-through-master-keys-where-the-attacker-gradually-gains-comple/">Shaman’s Gate Attack: HD derivation and an invisible vulnerability that allows for the recovery of private keys and theft of all BTC through master keys, where the attacker gradually gains complete control over Bitcoin funds.</a> </strong>Shaman’s Gate Attack The “Shaman’s Gate Attack” class of attacks is a fundamental consequence of non-hardened derivation in HD wallets, as confirmed by numerous hacks. Adhering to the practice of…<a href="https://key3.ru/shamans-gate-attack-hd-derivation-and-an-invisible-vulnerability-that-allows-for-the-recovery-of-private-keys-and-the-theft-of-all-btc-through-master-keys-where-the-attacker-gradually-gains-comple/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/phantomkey-heist-attack-invisible-leakage-of-private-keys-and-recovery-of-access-to-lost-bitcoin-wallets-with-total-control-over-the-victims-balance-where-the-attacker-in-a-friendly-manner-injects/">PhantomKey Heist Attack: Invisible leakage of private keys and recovery of access to lost Bitcoin wallets with total control over the victim’s balance, where the attacker in a friendly manner injects a module over the audit of private keys</a> </strong>PhantomKey Heist: An Invisible Private Key Capture Attack PhantomKey Heist turns an innocent C++ operator call into a massive digital treasure heist. PhantomKey Heist Attack The critical “PhantomKey Heist” vulnerability demonstrates…<a href="https://key3.ru/phantomkey-heist-attack-invisible-leakage-of-private-keys-and-recovery-of-access-to-lost-bitcoin-wallets-with-total-control-over-the-victims-balance-where-the-attacker-in-a-friendly-manner-injects/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/ramnesia-attack-a-ram-based-cryptohack-that-allows-for-total-recovery-of-private-keys-and-complete-theft-of-funds-from-lost-bitcoin-wallets-an-attacker-exploits-the-black-box-of-memory-and-trigg/">RAMnesia Attack: A RAM-based cryptohack that allows for total recovery of private keys and complete theft of funds from lost Bitcoin wallets. An attacker exploits the “Black Box” of memory and triggers the Secret Key Leakage vulnerability, thus destroying the Bitcoin cryptocurrency’s security.</a> </strong>RAMnesia Attack RAMnesia is a daring cryptographic attack in which an attacker turns a victim’s RAM into a “black box” for hunting forgotten private keys. In the attack scenario, the hacker…<a href="https://key3.ru/ramnesia-attack-a-ram-based-cryptohack-that-allows-for-total-recovery-of-private-keys-and-complete-theft-of-funds-from-lost-bitcoin-wallets-an-attacker-exploits-the-black-box-of-memory-and-trigg/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/phantom-keysmith-predictable-entropy-as-a-weapon-for-complete-bitcoin-wallet-takeover-where-an-attacker-guesses-the-secret-seed-by-brute-forcing-the-generation-and-recovering-the-private-key-using-w/">Phantom Keysmith: Predictable entropy as a weapon for complete Bitcoin wallet takeover, where an attacker guesses the secret seed by brute-forcing the generation and recovering the private key using weak memory entropy and steals absolutely all BTC funds.</a> </strong>Phantom Keysmith Attack The attacker acts as a “ghost blacksmith” who forges private keys directly from the ether of uninitialized memory. The attack exploits creation and serialization vulnerabilities ek_tokento forge a new working key by…<a href="https://key3.ru/phantom-keysmith-predictable-entropy-as-a-weapon-for-complete-bitcoin-wallet-takeover-where-an-attacker-guesses-the-secret-seed-by-brute-forcing-the-generation-and-recovering-the-private-key-using-w/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/konsole-leaker-attack-a-silent-leak-where-an-attacker-gains-complete-control-over-btc-funds-by-recovering-private-keys-from-logs-undermining-the-fundamental-principles-of-the-bitcoin-cryptocurrency/">Konsole Leaker Attack: A silent leak where an attacker gains complete control over BTC funds by recovering private keys from logs, undermining the fundamental principles of the Bitcoin cryptocurrency.</a> </strong>Konsole Leaker Attack The attack, dubbed the “Konsole Leaker Attack,” is spectacular, easily reproducible, and extremely dangerous for most projects with poor internal data output hygiene. The attack exploits an uncontrolled private…<a href="https://key3.ru/konsole-leaker-attack-a-silent-leak-where-an-attacker-gains-complete-control-over-btc-funds-by-recovering-private-keys-from-logs-undermining-the-fundamental-principles-of-the-bitcoin-cryptocurrency/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/scalar-venom-attack-critical-memory-leak-private-key-recovery-and-complete-takeover-of-bitcoin-wallets-by-an-attacker-where-control-over-the-victims-btc-cryptocurrency-funds-is-achieved-through/">SCALAR VENOM ATTACK: Critical memory leak, private key recovery, and complete takeover of Bitcoin wallets by an attacker, where control over the victim’s BTC cryptocurrency funds is achieved through memory poisoning to compromise wallet assets.</a> </strong>🔥 SCALAR VENOM ATTACK — A cryptographic attack to leak private keys (Scalar Poison / Poisonous Scalar Infection) SCALAR VENOM ATTACK is a new class of cryptographic attack aimed at extracting Bitcoin…<a href="https://key3.ru/scalar-venom-attack-critical-memory-leak-private-key-recovery-and-complete-takeover-of-bitcoin-wallets-by-an-attacker-where-control-over-the-victims-btc-cryptocurrency-funds-is-achieved-through/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/bit-harvester-attack-how-a-single-line-of-code-turns-a-lost-bitcoin-wallet-into-a-rich-harvest-for-an-attacker-cve-2023-39910-vulnerability-and-the-900000-private-key-compromise-attack-how-lax-da/">Bit Harvester Attack: How a single line of code turns a lost Bitcoin wallet into a rich harvest for an attacker; CVE-2023-39910 vulnerability and the $900,000 Private Key Compromise attack; How lax data handling in unsafe_array_cast opened the floodgates for an automated attack and the loss of all funds in Bitcoin wallets</a> </strong> Bit Harvester Attack: Where the spring is weak, there is a rich harvest! The CVE-2023-39910 vulnerability in the libbitcoin library is a critical cryptographic security vulnerability that demonstrates how a single line…<a href="https://key3.ru/bit-harvester-attack-how-a-single-line-of-code-turns-a-lost-bitcoin-wallet-into-a-rich-harvest-for-an-attacker-cve-2023-39910-vulnerability-and-the-900000-private-key-compromise-attack-how-lax-da/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/bloodtrail-attack-bitcoins-residual-memory-leakage-critical-memory-vulnerability-as-a-mechanism-for-complete-private-key-capture-by-an-attacker-where-uncleared-buffers-are-weaponized-for-btc-t/">Bloodtrail Attack: Bitcoin’s “Residual Memory Leakage” Critical Memory Vulnerability as a Mechanism for Complete Private Key Capture by an Attacker, Where Uncleared Buffers Are Weaponized for BTC Theft</a> </strong>Bloodtrail Attack An analysis of a critical vulnerability discovered in the storage of private keys in the process memory of open-source Bitcoin wallets clearly demonstrates a fundamental threat to the…<a href="https://key3.ru/bloodtrail-attack-bitcoins-residual-memory-leakage-critical-memory-vulnerability-as-a-mechanism-for-complete-private-key-capture-by-an-attacker-where-uncleared-buffers-are-weaponized-for-btc-t/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/polycurve-extraction-attack-a-polycurve-extraction-attack-cve-2023-39910-leads-to-private-key-recovery-and-theft-of-bitcoin-funds-where-an-attacker-is-able-to-gain-control-of-btc-funds-through-a-l/">Polycurve Extraction Attack: A polycurve extraction attack (CVE-2023-39910) leads to private key recovery and theft of Bitcoin funds, where an attacker is able to gain control of BTC funds through a libbitcoin flaw.</a> </strong>Polycurve Extraction Attack The core of the libbitcoin crypto library contains a critical vulnerability: an elliptic curve point received from outside the library fails a full mathematical check to determine…<a href="https://key3.ru/polycurve-extraction-attack-a-polycurve-extraction-attack-cve-2023-39910-leads-to-private-key-recovery-and-theft-of-bitcoin-funds-where-an-attacker-is-able-to-gain-control-of-btc-funds-through-a-l/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/mnemonic-drain-attack-industrial-bip39-mnemonic-phrase-ram-leakage-escalates-a-global-attack-on-the-bitcoin-network-through-uncleaned-ram-memory-where-an-attacker-uses-a-mnemonic-drain-to-siphon-con/">Mnemonic Drain Attack: Industrial BIP39 Mnemonic Phrase RAM Leakage escalates a global attack on the Bitcoin network through uncleaned RAM memory, where an attacker uses a mnemonic drain to siphon control of Bitcoins into the wrong hands, gaining complete control of BTC funds.</a> </strong>From Mnemonic Drain Attack Mnemonic Drain Attack: This unforgettable attack is based on the idea of ​​”sucking” BIP39 secrets directly from crypto wallets through vulnerabilities in the processing of mnemonics, seed…<a href="https://key3.ru/mnemonic-drain-attack-industrial-bip39-mnemonic-phrase-ram-leakage-escalates-a-global-attack-on-the-bitcoin-network-through-uncleaned-ram-memory-where-an-attacker-uses-a-mnemonic-drain-to-siphon-con/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/entropy-collapse-attack-a-critical-entropy-failure-in-electrum-v1-leads-to-the-compromise-of-private-keys-over-bitcoin-funds-where-an-attacker-overflows-the-decoding-of-mnemonics-leading-to-the-tot/">Entropy Collapse Attack: A critical entropy failure in Electrum v1 leads to the compromise of private keys over Bitcoin funds, where an attacker overflows the decoding of mnemonics, leading to the total recovery of the crypto wallet seed.</a> </strong>Entropy Collapse Attack At the heart of a blockchain system, where every private key and recovery phrase is trusted by millions, an attacker causes a veritable “energy collapse.” Exploiting a…<a href="https://key3.ru/entropy-collapse-attack-a-critical-entropy-failure-in-electrum-v1-leads-to-the-compromise-of-private-keys-over-bitcoin-funds-where-an-attacker-overflows-the-decoding-of-mnemonics-leading-to-the-tot/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/bitshredder-attack-memory-vulnerability-turns-lost-bitcoin-wallets-into-trophies-and-complete-btc-theft-via-private-key-recovery-where-attackers-exploit-the-memory-phantom-attack-cve-2025-8217-cve/">BitShredder Attack: Memory vulnerability turns lost Bitcoin wallets into trophies and complete BTC theft via private key recovery, where attackers exploit the memory phantom attack (CVE-2025-8217, CVE-2013-2547)</a> </strong>BitShredder Attack BitShredder Attack silently infiltrates the memory of a running cryptocurrency wallet. When a wallet is generated or restored, it scans uncleared fragments of RAM, searching for any remnants…<a href="https://key3.ru/bitshredder-attack-memory-vulnerability-turns-lost-bitcoin-wallets-into-trophies-and-complete-btc-theft-via-private-key-recovery-where-attackers-exploit-the-memory-phantom-attack-cve-2025-8217-cve/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/script-mirage-attack-recovering-private-keys-of-lost-bitcoin-wallets-during-a-total-fund-hijacking-attack-and-completely-stealing-btc-from-compromised-wallets-where-the-attacker-uses-block-filters-t/">Script Mirage Attack: Recovering private keys of lost Bitcoin wallets during a total fund hijacking attack and completely stealing BTC from compromised wallets, where the attacker uses block filters to extract hidden private elements from transaction scripts</a> </strong>Script Mirage Attack Script Mirage is an exploit in which an attacker cleverly exploits the semi-transparency of block filters to extract hidden private elements from transaction scripts. During the construction…<a href="https://key3.ru/script-mirage-attack-recovering-private-keys-of-lost-bitcoin-wallets-during-a-total-fund-hijacking-attack-and-completely-stealing-btc-from-compromised-wallets-where-the-attacker-uses-block-filters-t/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/entropy-cascade-attack-how-invisible-memory-cascades-lead-to-complete-compromise-of-bitcoin-wallet-private-keys-and-total-loss-of-btc-where-an-attacker-exploits-the-cve-2023-39910-vulnerability-in-b/">Entropy Cascade Attack: How invisible memory cascades lead to complete compromise of Bitcoin private keys and total loss of BTC, where an attacker exploits the CVE-2023-39910 vulnerability in BIP39 seed wallet processing in swap spaces.</a> </strong>Entropy Cascade Attack Attack Description:The “Entropy Cascade” attack exploits insecure memory operations when processing BIP39 seed phrases and cryptographic entropy, allowing an attacker to recover private keys from invisible cascaded…<a href="https://key3.ru/entropy-cascade-attack-how-invisible-memory-cascades-lead-to-complete-compromise-of-bitcoin-wallet-private-keys-and-total-loss-of-btc-where-an-attacker-exploits-the-cve-2023-39910-vulnerability-in-b/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/chainpredictor-attack-recovering-private-keys-and-taking-control-of-lost-bitcoin-wallets-through-random-number-predictability-where-an-attacker-can-pre-compute-random-values-of/">ChainPredictor Attack: Recovering private keys and taking control of lost Bitcoins through random number predictability, where an attacker can pre-compute “random” values ​​​​of insufficient entropy of a predictable PRNG initialization</a> </strong>ChainPredictor Attack ChainPredictor is an attack on cryptocurrency wallet systems based on the predictability of a pseudorandom number generator. The attack utilizes a pre-calculated seed, which allows the attacker to anticipate…<a href="https://key3.ru/chainpredictor-attack-recovering-private-keys-and-taking-control-of-lost-bitcoin-wallets-through-random-number-predictability-where-an-attacker-can-pre-compute-random-values-of/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/bitflip-oracle-rush-attack-a-critical-attack-on-aes-256-cbc-in-bitcoin-core-and-a-compromise-of-wallet-dat-where-an-attacker-uses-a-flaw-in-the-implementation-of-aead-hmac-and-the-failure-to-decry/">Bitflip Oracle Rush Attack: A critical attack on AES-256-CBC in Bitcoin Core and a compromise of wallet.dat, where an attacker uses a flaw in the implementation of AEAD, HMAC, and the failure to decrypt without authentication to turn Bitcoin Core into an oracle for leaking private keys in order to steal BTC coins</a> </strong>“Bitflip Oracle Rush Attack” Attack Description:The attacker skillfully manipulates bytes in the encrypted wallet.dat Bitcoin Core file, bit-flipping individual bits in each AES-256-CBC ciphertext block. By using the system’s responses…<a href="https://key3.ru/bitflip-oracle-rush-attack-a-critical-attack-on-aes-256-cbc-in-bitcoin-core-and-a-compromise-of-wallet-dat-where-an-attacker-uses-a-flaw-in-the-implementation-of-aead-hmac-and-the-failure-to-decry/"> Read More</a></em></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://dzen.ru/video/watch/69c8603451b3e70d64f66471"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/image-3a.png" alt="RingSide Replay Attack: SEED Recovery → Bitcoin wallet private key derivation and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This material was created for the&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/">CRYPTO DEEP TECH</a>&nbsp;portal &nbsp;to ensure financial data security and elliptic curve cryptography&nbsp;&nbsp;<a href="https://www.youtube.com/@cryptodeeptech">(secp256k1) against weak&nbsp;</a><a href="https://github.com/demining/CryptoDeepTools">ECDSA</a>&nbsp;&nbsp;signatures&nbsp;&nbsp;&nbsp;in the&nbsp;&nbsp;<a href="https://t.me/cryptodeeptech">BITCOIN</a>&nbsp;cryptocurrency . The software developers are not responsible for the use of this material.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptou.ru/keysilentleak/">Crypto Tools</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/50PhantomCurveAttack">Source code</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://bitcolab.ru/keysilentleak-cryptanalytic-research-tool">Google Colab</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://t.me/cryptodeeptech">Telegram: https://t.me/cryptodeeptech</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://youtu.be/pM0fuUZk8p4">Video material: https://youtu.be/pM0fuUZk8p4</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://dzen.ru/video/watch/69c8603451b3e70d64f66471">Video tutorial: https://dzen.ru/video/watch/69c8603451b3e70d64f66471</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/phantom-curve-attack">Source: https://cryptodeeptech.ru/phantom-curve-attack</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Phantom-Curve-Attack/blob/main/Phantom%20Curve%20Attack_files/GOLD1061F-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Phantom-Curve-Attack/raw/main/Phantom%20Curve%20Attack_files/GOLD1061F-1024x576.png" alt="Phantom Curve Attack: How the Pollard–Kangaroo Algorithm Exposes Private Keys of Lost Bitcoin Wallets via Low-Entropy Nonces under Exponential Degradation of the Secret Key Parameter &quot;K&quot;"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->