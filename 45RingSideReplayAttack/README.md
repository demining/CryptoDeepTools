<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/RingSide-Replay-Attack/blob/main/RingSide%20Replay%20Attack_files/068-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/068-1024x576.png" alt="RingSide Replay Attack: Recovering the SEED → deriving Bitcoin wallet private keys and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>This paper presents a comprehensive cryptanalytic review of the critical vulnerability&nbsp;&nbsp;<strong>CVE-2023-39910</strong>&nbsp;, codenamed&nbsp;&nbsp;<em>“Milk Sad</em>&nbsp;,” discovered in the widely used&nbsp;&nbsp;<strong>Libbitcoin Explorer utility versions 3.0.0–3.6.0. The fundamental flaw lies in the use of a cryptographically insecure&nbsp;</strong><strong><a href="https://en.wikipedia.org/wiki/Mersenne_Twister">Mersenne Twister-32 (MT19937)</a></strong>&nbsp;&nbsp;pseudorandom number generator&nbsp;&nbsp;initialized by the system time, which catastrophically limits the entropy space to&nbsp;&nbsp;<strong>32 bits</strong>&nbsp;&nbsp;instead of the required 256 bits. The paper thoroughly examines the mechanism of&nbsp;&nbsp;<strong>the RingSide Replay</strong>&nbsp;Attack , which allows for the automated recovery of Bitcoin wallet private keys, including lost ones, given the approximate time of their creation. A scientific analysis demonstrates that the vulnerability led to the compromise of over&nbsp;&nbsp;<strong>227,200 unique Bitcoin addresses</strong>&nbsp;&nbsp;and the theft of over&nbsp;&nbsp;<strong>$900,000 USD</strong>&nbsp;in crypto assets . Particular attention is given to the mathematical foundations of the attack, a practical methodology for recovering private keys using the&nbsp;&nbsp;<strong>BTCDetect</strong>&nbsp;cryptographic tool , and recommendations for protecting cryptographic systems from entropy-based attacks.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">1. Cryptographic Security and the Randomness Paradigm in the Bitcoin Ecosystem</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#1-cryptographic-security-and-the-randomness-paradigm-in-the-bitcoin-ecosystem"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Bitcoin cryptocurrency ecosystem is a complex decentralized system whose security is fundamentally based on the principles of modern cryptography. The central element of this architecture is the Elliptic Curve Digital Signature Algorithm (ECDSA), implemented on a specialized&nbsp;&nbsp;<strong>secp256k1</strong>&nbsp;curve . However, even a mathematically flawless cryptographic scheme becomes completely vulnerable if its fundamental condition—high-quality random number generation—is violated.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1.1 Theoretical Foundations of Bitcoin Cryptographic Security</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#11-theoretical-foundations-of-bitcoin-cryptographic-security"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Bitcoin network’s security is based on the computational difficulty of the Elliptic Curve Discrete Logarithm Problem (&nbsp;<a href="https://cryptou.ru/btcdetect/attack">ECDLP</a>&nbsp;).</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=KJNbwfolL6g"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/image-4-1024x319.png" alt="RingSide Replay Attack: Recovering the SEED → deriving Bitcoin wallet private keys and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>The private key&nbsp;&nbsp;<em>k</em>&nbsp;&nbsp;is a random 256-bit integer that must be:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Absolutely unpredictable</strong>  – impossible to guess or calculate</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Unique</strong>  – no collisions with other keys</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Cryptographically secure</strong>  – resistant to known attacks</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The public key&nbsp;&nbsp;<em>Q</em>&nbsp;&nbsp;is generated as a point on the elliptic curve by the scalar product of the private key and the generator point&nbsp;&nbsp;<em>G</em>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Q = k · G</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>where k is a private key ∈ [1, n-1], G is a generator point of the secp256k1 curve, n is the order of the group</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The elliptic curve&nbsp;&nbsp;<strong>secp256k1</strong>&nbsp;&nbsp;is defined by the Weierstrass equation in abbreviated form:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>y² ≡ x³ + 7 (mod p)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>where p = 2&nbsp;<sup>256</sup>&nbsp;&nbsp;− 2&nbsp;<sup>32</sup>&nbsp;&nbsp;− 977 ≈ 1.158 × 10&nbsp;<sup>77</sup></em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>The order of the group&nbsp;&nbsp;<em>n</em>&nbsp;&nbsp;of the curve secp256k1 is:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>n = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>n ≈ 1.158 × 10&nbsp;<sup>77</sup></em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The theoretical security of this cryptosystem is determined by the fact that the inverse operation—computing a private key&nbsp;&nbsp;<em>k</em>&nbsp;&nbsp;given a known public key&nbsp;&nbsp;<em>Q</em>&nbsp;&nbsp;—is computationally infeasible when correctly implemented. However, this statement is only true if the space of possible values&nbsp;&nbsp;<em>​​of k</em>&nbsp;&nbsp;remains maximal (&nbsp;<sup>≈2256</sup>&nbsp;).</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1.2 The fundamental role of entropy in cryptographic systems</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#12-the-fundamental-role-of-entropy-in-cryptographic-systems"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The concept&nbsp;&nbsp;<strong>of entropy</strong>&nbsp;&nbsp;in cryptography dates back to the work of Claude Shannon, who laid the theoretical foundations of information theory. Shannon’s entropy is defined as a measure of uncertainty (randomness) in a system:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>H(X) = −Σ p(xᵢ) log₂ p(xᵢ)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>where H(X) is the entropy of a random variable X, p(xᵢ) is the probability of event xᵢ</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cryptographic applications require&nbsp;&nbsp;<strong>maximum entropy</strong>&nbsp;, where all possible values ​​are equally probable. For a 256-bit Bitcoin private key, this means:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>H&nbsp;<sub>max</sub>&nbsp;&nbsp;= log₂(2&nbsp;<sup>256</sup>&nbsp;) = 256 bits</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The critical importance of entropy is this: if a random number generator (RNG) produces predictable output or has a limited value space, an attacker can&nbsp;&nbsp;<strong>try all possible private keys and recover cryptographic secrets. It was this fundamental flaw that caused the catastrophic&nbsp;</strong><strong>Milk Sad</strong>&nbsp;&nbsp;vulnerability&nbsp;&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Definition 1 (Cryptographically secure PRNG):</strong>&nbsp;&nbsp;A pseudorandom number generator (PRNG) is said to be cryptographically secure if, given the first&nbsp;&nbsp;<em>k</em>&nbsp;&nbsp;output bits, it is computationally infeasible to predict the (k+1)th bit with probability greater than ½ + ε, where ε is negligibly small.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1.3. Historical chronology of vulnerability discovery</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#13-historical-chronology-of-vulnerability-discovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In June-July 2023, security researchers detected an anomalous phenomenon in the Bitcoin blockchain: numerous wallets created at various times began systematically being emptied, despite the lack of communication between their owners. The&nbsp;&nbsp;<strong>Distrust</strong>&nbsp;research team &nbsp;conducted a comprehensive forensic analysis and determined that all compromised wallets had one thing in common: they were created using a command&nbsp;&nbsp;<code>bx seed</code>&nbsp;from&nbsp;&nbsp;<strong>Libbitcoin Explorer</strong>&nbsp;&nbsp;version 3.x.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The results of the investigation were catastrophic:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><th>Parameter</th><th>Meaning</th></tr><tr><td>Total amount of funds stolen</td><td>&gt; $900,000 USD</td></tr><tr><td>Affected cryptocurrencies</td><td><a href="https://cryptou.ru/btcdetect/transaction">BTC, ETH, XRP, DOGE, SOL, LTC, BCH, ZEC</a></td></tr><tr><td>Compromised Bitcoin addresses</td><td>&gt; 227,200</td></tr><tr><td>Vulnerable versions of Libbitcoin Explorer</td><td>3.0.0 – 3.6.0</td></tr><tr><td>Period of operation</td><td>June – July 2023</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>The codename&nbsp;&nbsp;<strong>“Milk Sad”</strong>&nbsp;&nbsp;was proposed by researchers as the first two words of the BIP-39 mnemonic phrase generated with a zero seed (seed = 0), symbolically reflecting the “sad” state of a “milky” (immature, childish) cryptographic implementation.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://keyhunters.ru/ringside-replay-attack-milk-sad-cve-2023-39910-recovering-private-keys-of-lost-bitcoin-wallets-by-exploiting-a-critical-weak-entropy-vulnerability-in-the-pseudorandom-number-generator/">2. Anatomy of a Vulnerability: Cryptanalysis of the Mersenne Twister in the Context of Key Generation</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#2-anatomy-of-a-vulnerability-cryptanalysis-of-the-mersenne-twister-in-the-context-of-key-generation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2.1. Mersenne Twister Algorithm: Architecture and Cryptographic Weaknesses</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#21-mersenne-twister-algorithm-architecture-and-cryptographic-weaknesses"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://keyhunters.ru/ringside-replay-attack-milk-sad-cve-2023-39910-recovering-private-keys-of-lost-bitcoin-wallets-by-exploiting-a-critical-weak-entropy-vulnerability-in-the-pseudorandom-number-generator/">Mersenne Twister (MT19937)</a></strong>&nbsp;&nbsp;is a pseudorandom number generator developed by Makoto Matsumoto and Takuji Nishimura in 1997. The algorithm is based on a linear recurrent sequence over the finite field GF(2) and has the following characteristics:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><th>Parameter</th><th>The meaning of MT19937</th></tr><tr><td>Period</td><td>2&nbsp;<sup>19937</sup>&nbsp;&nbsp;− 1 (Mersenne number)</td></tr><tr><td>Word size</td><td>32 bits</td></tr><tr><td>Size of the state</td><td>624 × 32 = 19968 bits</td></tr><tr><td>Seed size</td><td>32 bits</td></tr><tr><td>Uniformity (k-distribution)</td><td>623-dimensionally uniformly distributed</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>Despite its excellent statistical properties (passing Diehard, TestU01 tests), the Mersenne Twister is categorically&nbsp;&nbsp;<strong>NOT intended</strong>&nbsp;&nbsp;for cryptographic applications for the following critical reasons:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Critical cryptographic flaws MT19937:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Linearity:</strong>  Internal state can be completely reconstructed from 624 consecutive 32-bit outputs</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Limited seed space:</strong>  Only 2 <sup>32</sup>  ≈ 4.29 × 10 <sup>9</sup>  possible initial states</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Determinism:</strong>  Identical seeds produce identical sequences</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Predictability:</strong>  Given a known state, all past and future outputs can be calculated</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2.2. Vulnerable implementation in&nbsp;<a href="https://github.com/keyhunters/libbitcoin-system">Libbitcoin Explorer</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#22-vulnerable-implementation-inlibbitcoin-explorer"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A critical error in Libbitcoin Explorer versions 3.0.0–3.6.0 was located in the entropy generation module:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// pseudo_random.cpp (</strong>VULNERABLE VERSION<strong>)
data_chunk random_bytes(size_t length) {
    std::random_device random;           // </strong>Getting seed (system time)<strong>
    std::default_random_engine engine(random());  // MT19937 c 32-bit seed
    std::uniform_int_distribution distribution(0, 255);

    data_chunk result(length);
    for (auto&amp; byte : result)
        byte = distribution(engine);
    return result;
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>When calling the command,&nbsp;&nbsp;<code>bx seed -b 256 | bx mnemonic-new</code>&nbsp;the user expected to receive 256 bits of cryptographically strong entropy to generate a 24-word BIP-39 mnemonic phrase. However, the actual results were disastrous:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Expected entropy:&nbsp;<sup>2256</sup>&nbsp;&nbsp;≈ 1.16 × 1077&nbsp;<sup>Actual</sup></strong><br><strong>entropy:&nbsp;<sup>232</sup>&nbsp;&nbsp;≈ 4.29 ×&nbsp;<sup>109</sup></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Search space reduction: 10&nbsp;<sup>68</sup>&nbsp;&nbsp;times</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptou.ru/btcdetect/attack">2.3. Mathematical formalization of the attack</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#23-mathematical-formalization-of-the-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s formalize the vulnerability using rigorous mathematical notation. Let:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><em>E</em>  is the entropy (256 bits) generated to create the wallet</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>S</em>  is the seed for MT19937, where S ∈ [0, 2 <sup>32</sup> )</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>f(S)</em>  is the function for generating the MT19937 sequence from seed  <em>S</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>trunc <sub>32</sub> (x)</em>  — extract the first 32 bytes from a sequence</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>bip39(E)</em>  — entropy-to-mnemonic-phrase conversion</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>derive(m)</em>  — derivation of a private key from a BIP-32 mnemonic</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>addr(k)</em>  is a set of Bitcoin addresses, derivatives of the private key  <em>k</em></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Definition 2 (Milk Sad Vulnerability):</strong><br>There exists a seed S such that:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>∃ k, S : trunc&nbsp;<sub>32</sub>&nbsp;(f(S)) ≡ E (mod 2&nbsp;<sup>256</sup>&nbsp;)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><br>such that</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>addr(derive(bip39(E))) = A&nbsp;<sub>target</sub></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>where A&nbsp;<sub>target</sub>&nbsp;&nbsp;is the target Bitcoin address.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The probability of successful recovery with a complete search of the space 2&nbsp;<sup>32</sup>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>P(success) = 1 − (1 − 1/N)&nbsp;<sup>232</sup></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>where N =&nbsp;<sup>2,160</sup>&nbsp;&nbsp;is the total number of possible Bitcoin addresses (P2PKH)</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Since 2&nbsp;<sup>32</sup>&nbsp;&nbsp;≪ 2&nbsp;<sup>160</sup>&nbsp;, the probability of a false match is negligible, and when the correct seed is found,&nbsp;&nbsp;<strong>P(success) ≈ 1</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2.4 Deterministic BIP-39/BIP-32 Transformation Chain</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#24-deterministic-bip-39bip-32-transformation-chain"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once the original 32-bit&nbsp;<a href="https://cryptou.ru/btcdetect/bitcoin">seed</a>&nbsp;is recovered , the private key reconstruction process becomes fully deterministic according to the BIP-39 and BIP-32 standards:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Entropy generation:</strong>  seed → MT19937 → 256-bit pseudorandom sequence</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Checksum calculation:</strong>  SHA-256(entropy) → first 8 bits</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Mnemonic formation:</strong>  (entropy || checksum) → 24 BIP-39 words</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Master seed derivation:</strong>  PBKDF2-HMAC-SHA512(mnemonic, “mnemonic” || passphrase, 2048 iterations) → 512-bit seed</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Master key generation:</strong>  HMAC-SHA512(” <a href="https://cryptou.ru/btcdetect/bitcoin">Bitcoin seed</a> “, master_seed) → (master_private_key, chain_code)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hierarchical derivation:</strong>  BIP-44 path: m/44’/0’/0’/0/0 → final private key</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Transformation chain:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>S&nbsp;<sub>32bit</sub>&nbsp;&nbsp;→ MT19937 → E&nbsp;<sub>256bit</sub>&nbsp;&nbsp;→ SHA256 → Mnemonic&nbsp;<sub>24words</sub>&nbsp;&nbsp;→ PBKDF2 → Seed&nbsp;<sub>512bit</sub>&nbsp;&nbsp;→ HMAC-SHA512 → (k, c) → BIP-44 → k&nbsp;<sub>final</sub></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">3. RingSide Replay Attack Efficiency: Computational Analysis</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#3-ringside-replay-attack-efficiency-computational-analysis"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.1. Estimation of computational complexity</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#31-estimation-of-computational-complexity"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The total search space is 2&nbsp;<sup>32</sup>&nbsp;&nbsp;≈ 4.29 × 10&nbsp;<sup>9</sup>&nbsp;&nbsp;possible seed values. If the wallet creation date (or approximate range) is known, the search space can be significantly reduced:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Space reduction with known date:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>|S&nbsp;<sub>day</sub>&nbsp;| = 86,400 (seconds in a day)<br><strong>Reduction: 2&nbsp;<sup>32</sup>&nbsp;&nbsp;/ 86,400 ≈ 49,710 times</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Performance on modern equipment:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><th>Equipment</th><th>Search speed</th><th>The time for a full search is 2&nbsp;<sup>32</sup></th></tr><tr><td>CPU (Intel i9-13900K)</td><td>~10&nbsp;<sup>6</sup>&nbsp;&nbsp;seeds/sec</td><td>~71 minutes</td></tr><tr><td>GPU (NVIDIA RTX 4090)</td><td>~10&nbsp;<sup>8</sup>&nbsp;&nbsp;seeds/sec</td><td>~43 seconds</td></tr><tr><td>FPGA cluster</td><td>~10&nbsp;<sup>10</sup>&nbsp;&nbsp;seeds/sec</td><td>&lt; 1 second</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.2 Quantitative assessment of attack effectiveness</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#32-quantitative-assessment-of-attack-effectiveness"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The effectiveness&nbsp;<a href="https://cryptou.ru/btcdetect/attack">of the attack</a>&nbsp;can be expressed through the ratio of the logarithms of the search spaces:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Attack Efficiency = log₂(2&nbsp;<sup>32</sup>&nbsp;) / log₂(2&nbsp;<sup>256</sup>&nbsp;) = 32/256 = 0.125 = 12.5%</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>This means that the search space is reduced by 87.5% from the theoretically safe level.</em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=MbctxueoUwU"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/image-6-1024x326.png" alt="RingSide Replay Attack: Recovering the SEED → deriving Bitcoin wallet private keys and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptou.ru/btcdetect/">www.cryptou.ru/btcdetect</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://cryptou.ru/btcdetect/">Practical Application: BTCDetect Crypto Tool</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#practical-application-btcdetect-crypto-tool"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">A Scientific Analysis of Using BTCDetect to Recover Private Keys</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#a-scientific-analysis-of-using-btcdetect-to-recover-private-keys"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>BTCDetect</strong>&nbsp;&nbsp;is specialized software for cryptanalysis and recovery of lost Bitcoin wallets, based on identifying and exploiting vulnerabilities in cryptographic libraries. The tool implements the&nbsp;<a href="https://cryptou.ru/btcdetect/attack">RingSide Replay Attack</a>&nbsp;methodology and provides a practical implementation for recovering private keys from vulnerable wallets.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">BTCDetect Architecture</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#btcdetect-architecture"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BTCDetect consists of the following main modules:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Entropy Analysis Module:</strong>  Detecting Weak Sources of Randomness in Key Generation Procedures</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://cryptou.ru/btcdetect/github">PRNG</a> Reconstruction Module :</strong>  Reproducing the state of a Mersenne Twister generator using known parameters</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Key Derivation Module:</strong>  Implementation of a full BIP-39/BIP-32 chain for key recovery</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Verification Module:</strong>  Matching recovered addresses with target blockchain data</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">BTCDetect’s algorithm</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#btcdetects-algorithm"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BTCDetect’s operating model consists of three main stages:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Identifying vulnerable wallets:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://cryptou.ru/btcdetect/transaction">Transaction</a> timestamp analysis<a href="https://cryptou.ru/btcdetect/transaction"></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Determining the likely wallet creation range</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Identifying Patterns Specific to <a href="https://github.com/keyhunters/libbitcoin-system">Libbitcoin Explorer</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Enumerating the seed space:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Generating seed candidates based on a time range</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Parallel computation of BIP-39 → BIP-32 chains</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Comparison of received addresses with target ones</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Verification and recovery:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Confirming the correctness of the recovered key</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Checking the validity of signatures</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Documenting the results for forensic analysis</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><a href="https://btcdetect.ru/privatekey.php">A practical example of recovery</a></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#a-practical-example-of-recovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptou.ru/btcdetect/privatekey/">Let’s consider a documented case of private key</a>&nbsp;recovery&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><th>Parameter</th><th>Meaning</th></tr><tr><td>Bitcoin address</td><td><code>1NiojfedphT6MgMD7UsowNdQmx5JY15djG</code></td></tr><tr><td>Cost of recovered funds</td><td><a href="https://cryptou.ru/btcdetect/profit/">$61,025</a></td></tr><tr><td>Recovered private key (HEX)</td><td><code>4ACBB2E3CE1EE22224219B71E3B72BF6C8F2C9AA1D992666DBD8B48AA826FF6B</code></td></tr><tr><td>Recovered key (WIF compressed)</td><td><code>Kyj6yvb4oHHDGBW23C8Chzji3zdYQ5QMr8r9zWpGVHdvWuYqCGVU</code></td></tr><tr><td>Public key (compressed)</td><td><code>03AE73430C02577F3A7DA6F3EDC51AF4ECBB41962B937DBC2D382CABB11D0D18CE</code></td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>Validation of the recovered key confirms that it belongs to the acceptable range of scalars of the secp256k1 curve:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>1 ≤ k &lt; n</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>where n = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141</strong></em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">The scientific significance of BTCDetect</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#the-scientific-significance-of-btcdetect"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptou.ru/btcdetect/">The BTCDetect</a>&nbsp;methodology&nbsp;has broad scientific applications beyond the specific Milk Sad vulnerability:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong><a href="https://cryptou.ru/btcdetect/github">Research of PRNG</a> classes of vulnerabilities :</strong>  Linear congruential generators (LCG), insecure implementations <code>random()</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Blockchain Forensics:</strong>  Identifying Patterns of Compromised Wallets</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Auditing Cryptographic Libraries:</strong>  Detecting Potential Vulnerabilities Before They Are Exploited</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Educational Objectives:</strong>  To demonstrate the critical importance of cryptographically strong PRNGs</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">The Borromean hash function vulnerability</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#the-borromean-hash-function-vulnerability"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>static ec_scalar borromean_hash(const hash_digest&amp; M, const data_slice&amp; R,
                                 uint32_t i, uint32_t j) NOEXCEPT
{
    // e = H(M || R || i || j)
    hash_digest hash{};
    stream::out::fast stream{ hash };
    hash::sha256::fast sink(stream);
    sink.write_bytes(R);
    sink.write_bytes(M);
    sink.write_4_bytes_big_endian(i);
    sink.write_4_bytes_big_endian(j);
    sink.flush();
    return hash;
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The order of data concatenation (R || M || i || j) creates potential for&nbsp;length extension attacks in certain scenarios&nbsp;<a href="https://cryptou.ru/btcdetect/attack">.</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">6.1. Requirements for entropy generation</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#61-requirements-for-entropy-generation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><th>Platform</th><th>Recommended source of entropy</th></tr><tr><td>Linux/Unix</td><td><code>/dev/urandom</code>&nbsp;or&nbsp;<code>getrandom()</code></td></tr><tr><td>Windows</td><td><code>CryptGenRandom()</code>&nbsp;or BCrypt API</td></tr><tr><td>Python</td><td>Module&nbsp;&nbsp;<code>secrets</code>&nbsp;or&nbsp;<code>os.urandom()</code></td></tr><tr><td>Crypto libraries</td><td>OpenSSL&nbsp;&nbsp;<code>RAND_bytes()</code>, libsodium&nbsp;<code>randombytes()</code></td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This paper presents a detailed cryptanalysis of a critical vulnerability, designated&nbsp;&nbsp;<strong>CVE-2023-39910</strong>&nbsp;, codenamed&nbsp;&nbsp;<strong>Milk Sad</strong>&nbsp;. The vulnerability was discovered in the popular&nbsp;&nbsp;<strong><a href="https://github.com/keyhunters/libbitcoin-system">Libbitcoin Explorer</a></strong>&nbsp;<em>&nbsp;utility (versions 3.0.0–3.6.0)</em>&nbsp;, which is used to create and manage Bitcoin wallets offline. The main flaw lies in the use of a cryptographically insecure&nbsp;&nbsp;<strong>Mersenne Twister-32 (MT19937)</strong>&nbsp;pseudorandom number generator , initialized using the system time, which limits the entropy space to only&nbsp;&nbsp;<strong>32 bits</strong>&nbsp;. This paper examines&nbsp;<a href="https://cryptou.ru/btcdetect/attack">the mechanism of&nbsp;&nbsp;<strong>the Ringside Replay</strong></a>&nbsp;Attack , which allows attackers to automate the process of recovering Bitcoin wallet private keys, including recovering lost wallets if their approximate creation time is known. Scientific analysis shows that the vulnerability led to the compromise of over&nbsp;&nbsp;<strong>227,200 unique Bitcoin addresses</strong>&nbsp;&nbsp;and the theft of cryptocurrency worth over&nbsp;&nbsp;<strong>$900,000</strong>&nbsp;. The article details the mathematical underpinnings of the attack, the private key recovery methodology, and the&nbsp;&nbsp;<strong><a href="https://cryptou.ru/btcdetect/">BTCDetect</a></strong>&nbsp;crypto tool used to implement the recovery. It also provides security recommendations and countermeasures for cryptocurrency wallet developers and users.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">1. The significance of the validation problem</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#1-the-significance-of-the-validation-problem"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Bitcoin network’s security is fundamentally based on elliptic curve cryptography (ECDSA), specifically the&nbsp;&nbsp;<strong>secp256k1</strong>&nbsp;curve .&nbsp;<a href="https://cryptou.ru/btcdetect/privatekey/">A private key</a>&nbsp;is a random 256-bit number that must be completely unpredictable and unique for each Bitcoin address. The public key is generated as a point on the elliptic curve by multiplying the curve generator G by the private key:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Q = k · G,
<em>where</em> k is the private key</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The security of this mechanism depends entirely on the quality of the entropy used to generate the private key. If&nbsp;<a href="https://cryptou.ru/btcdetect/github">the random number generator (RNG) is predictable</a>&nbsp;or has a limited value space, an attacker can try all possible private keys and recover cryptographic secrets. It was this fundamental vulnerability that caused&nbsp;&nbsp;<strong>the Milk Sad</strong>&nbsp;disaster .</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In&nbsp;<em>June-July 2023</em>, an unusual phenomenon was discovered on the Bitcoin blockchain: multiple wallets created in different years began to empty on the same date, despite no connection between their owners. The research team Distrust conducted a detailed analysis and discovered that all the compromised wallets had one thing in common: they were created using a command&nbsp;&nbsp;<code>bx seed</code>&nbsp;from Libbitcoin Explorer version 3.x.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">2. History of the Milk Sad vulnerability discovery</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#2-history-of-the-milk-sad-vulnerability-discovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>According to research, over&nbsp;&nbsp;<strong>$900,000</strong>&nbsp;&nbsp;worth of cryptocurrency&nbsp;<a href="https://cryptou.ru/btcdetect/transaction">(including BTC, ETH, XRP, DOGE, SOL, LTC, BCH, and ZEC)</a>&nbsp;was stolen . Later, in 2025, the Milk Sad team updated their analysis and found that the number of compromised wallets amounted to over&nbsp;&nbsp;<strong>227,200 unique Bitcoin addresses</strong>&nbsp;, making this&nbsp;<a href="https://cryptou.ru/btcdetect/attack">attack</a>&nbsp;one of the largest in the history of cryptocurrency security.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An investigation by Milk Sad, launched earlier in 2023, revealed that victims created their wallets on isolated Linux laptops using commands in&nbsp;<a href="https://github.com/keyhunters/libbitcoin-system">Libbitcoin Explorer</a>&nbsp;. In each case, users used bx to generate 24-word BIP39 mnemonic phrases, believing the tool provided sufficient randomness.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One of the commands used to generate the wallet looked like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>bx seed -b 256 | bx mnemonic-new</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>It generated 256 bits of entropy, which was then converted into a 24-word mnemonic phrase. Due to the imperfections of the random number generator, the supposedly secure mnemonic phrase was actually predictable. Although Milk Sad victims created their wallets several years apart, investigators discovered that each of them used the same version of&nbsp;<a href="https://github.com/keyhunters/libbitcoin-system">Libbitcoin Explorer</a>&nbsp;, which unknowingly generated weak private keys.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/RingSide-Replay-Attack/blob/main/RingSide%20Replay%20Attack_files/image-42-1024x677.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/image-42-1024x677.png" alt="RingSide Replay Attack: SEED Recovery → Bitcoin wallet private key derivation and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">3. Theoretical Foundations of Bitcoin and ECDSA Cryptography</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#3-theoretical-foundations-of-bitcoin-and-ecdsa-cryptography"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.1 secp256k1 Curve and the ECDSA Standard</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#31-secp256k1-curve-and-the-ecdsa-standard"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ECDSA (Elliptic Curve Digital Signature Algorithm) is a cryptographic algorithm based on elliptic curve cryptography. Bitcoin uses a specific curve called&nbsp;&nbsp;<strong>secp256k1</strong>&nbsp;, which is defined by the equation:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>y² ≡ x³ + 7 (mod p)
<em>where</em> p = 2^256 − 2^32 − 977</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The secp256k1 curve has order n ≈ 2^256, meaning there are approximately 2^256 possible points on the curve. Generator G is the standard generating point for this curve, which is used for all computations in&nbsp;<a href="https://cryptou.ru/btcdetect/bitcoin">Bitcoin</a>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.2 The process of generating private and public keys</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#32-the-process-of-generating-private-and-public-keys"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The process of generating a key pair in Bitcoin is as follows:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Entropy generation:</strong>  A 256-bit random number is generated, which serves as the private key k. This number must be in the range 1 ≤ k &lt; n, where n is the order of the base point.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Public Key Computation:</strong>  The public key Q is computed as Q = k · G, where · denotes scalar multiplication on an elliptic curve.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Address generation:</strong>  A Bitcoin address is generated by hashing a public key and encoding the result.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The critical point is the entropy generation in step 1. If a weak random number generator is used, the space of possible private keys becomes significantly smaller than 2^256, allowing an attacker to try all possible keys and find the private key.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/RingSide-Replay-Attack/blob/main/RingSide%20Replay%20Attack_files/image-33.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/image-33.png" alt="RingSide Replay Attack: SEED Recovery → Bitcoin wallet private key derivation and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">4. Mersenne Twister-32: architecture and disadvantages</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#4-mersenne-twister-32-architecture-and-disadvantages"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4.1 History and description of the algorithm</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#41-history-and-description-of-the-algorithm"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Mersenne Twister (MT19937) is a pseudorandom number generator developed by Matsumoto and Nishimura in 1997. The algorithm is based on a linear recurrence sequence over a finite field and generates a sequence of 32-bit integers. The algorithm is widely used in non-unique applications due to its good statistical properties and computational speed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>However,</strong>&nbsp;&nbsp;the Mersenne Twister is absolutely&nbsp;&nbsp;<strong>NOT intended</strong>&nbsp;&nbsp;for cryptographic applications for the following reasons:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Predictability:</strong>  The output values <a href="https://cryptou.ru/btcdetect/github">​​of the RNG</a> can be completely reconstructed given a sequence of 624 consecutive 32-bit outputs.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Analysis vulnerability:</strong>  The internal state consists of 624 32-bit integers; if an attacker knows these values, they can predict all future outputs.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Lack of cryptographic strength property:</strong>  The algorithm does not have the property that it is impossible to calculate the i-th element of the sequence without calculating all previous elements.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4.2 Using Mersenne Twister in Libbitcoin Explorer 3.x</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#42-using-mersenne-twister-in-libbitcoin-explorer-3x"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In&nbsp;<a href="https://github.com/keyhunters/libbitcoin-system">Libbitcoin Explorer 3.x,</a>&nbsp;the entropy generation process for creating new wallets is implemented as follows:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// pseudo_random.cpp (vulnerable version) data_chunk random_bytes(size_t length) { std::random_device random; std::default_random_engine engine(random()); std::uniform_int_distribution&lt;uint32_t&gt; distribution(0, 255); data_chunk result(length); for (auto&amp; byte : result) byte = distribution(engine); return result; }</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><em>In this code:</em></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>std::random_device random</code> initializes the seed using the system time</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>std::default_random_engine</code> (which is implemented as  <code>std::mt19937</code>) receives a single value from <code>random_device</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This seed typically contains only  <strong>32 bits of useful entropy</strong>  (the current system time in seconds or milliseconds)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The team&nbsp;&nbsp;<code>bx seed</code>&nbsp;uses this function to generate initial entropy when creating new Bitcoin wallets. Here’s a typical call:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>bx seed -b 256 | bx mnemonic-new</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This command would generate 256 bits of random entropy, which would then be converted into a 24-word BIP-39 mnemonic phrase. However, due to the 32-bit limitation of the actual entropy space from&nbsp;&nbsp;<code>std::random_device</code>, the entire mnemonic phrase can be reconstructed given the wallet’s creation time.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/RingSide-Replay-Attack/blob/main/RingSide%20Replay%20Attack_files/image-35.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/image-35.png" alt="RingSide Replay Attack: SEED Recovery → Bitcoin wallet private key derivation and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://cryptou.ru/btcdetect/attack">5. Mathematical Foundations of the Ringside Replay Attack</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#5-mathematical-foundations-of-the-ringside-replay-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5.1 Principle 1: Limited Entropy Space</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#51-principle-1-limited-entropy-space"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The space of possible seed values ​​for MT19937 is limited to 2^32 combinations (approximately 4.3 billion possible values). This means that the entire entropy space can be searched in a few days on a regular PC.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Search space =&nbsp;<strong><code>2^3</code><code>2 ≈ 4.29 × 10^9</code></strong>&nbsp;possible values</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5.2 Principle 2: Predictability in Creation Time</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#52-principle-2-predictability-in-creation-time"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the wallet creation date (or approximate date range) is known, the search space can be further reduced. The system time used to initialize MT19937 can be reconstructed with a high degree of certainty if the following are known:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Year the wallet was created</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Month/day (if known from transaction history)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Approximate time of day</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Reducing the search space to a date range, such as one day, reduces the number of attempts by a factor of approximately 86,400 (the number of seconds in a day).</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptou.ru/btcdetect/privatekey/">5.3 Principle 3: Deterministic transformation into a private key</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#53-principle-3-deterministic-transformation-into-a-private-key"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once the original 256-bit entropy has been recovered, its transformation into a private key is fully deterministic according to the BIP-39 and BIP-32 standards:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Entropy → <code>SHA-256</code>checksum → 24-word BIP-39 phrase</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>BIP-39 phrase + passphrase → <code>PBKDF2-HMAC-SHA512</code>(2048 iterations) → 512-bit master seed</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Master seed → <code>HMAC-SHA512("Bitcoin seed")</code>→ master private key + chaincode</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5.4 Formal Mathematical Definition of Vulnerability</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#54-formal-mathematical-definition-of-vulnerability"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>E</code>— the entropy to be generated (256 bits)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>S</code>— seed for MT19937, where <code>S ∈ [0, 2^32</code>)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>f(S)</code>— a function that generates the MT19937 sequence from seed S</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>trunc_32(x</code>) is a function that takes the first 32 bytes from the MT19937 sequence</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>bip39(E)</code>— entropy transformation into BIP-39 mnemonics</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>derive(m)</code>— converting mnemonics into a private key</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>addr(k)</code>— the set of all possible <a href="https://cryptou.ru/btcdetect/bitcoin">Bitcoin addresses</a> , derivatives of a private key k</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><em>Vulnerability is defined as:</em><br><strong><code>∃ k, S : trunc_32(f(S)) ≡ E (mod 256)</code><br>such that<code>addr(derive(bip39(E))) = A_target</code></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>where</em>&nbsp;<code>A_target</code>&nbsp;is&nbsp;<em>the target Bitcoin address.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5.5 Probability of successful recovery</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#55-probability-of-successful-recovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When searching through the entire space&nbsp;<code>2^32</code>:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>P(success) = 1 − (1 − 1/N)^(2^32)
where N = 2^160 is the total number of possible Bitcoin addresses (for P2PKH addresses)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Since&nbsp;<code>2^32 &lt;&lt; 2^160</code>, the probability of a false match is negligible, and&nbsp;<code>P(success) ≈ 1</code>when the correct seed is found.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/RingSide-Replay-Attack/blob/main/RingSide%20Replay%20Attack_files/image-37.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/image-37.png" alt="RingSide Replay Attack: SEED Recovery → Bitcoin wallet private key derivation and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">6. Private key recovery process</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#6-private-key-recovery-process"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">6.1 Key recovery algorithm</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#61-key-recovery-algorithm"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The process of recovering&nbsp;<a href="https://cryptou.ru/btcdetect/privatekey/">a private key</a>&nbsp;for a compromised Bitcoin wallet consists of the following steps:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Determining a date range:</strong>  The approximate wallet creation date is determined from the transaction history. This can be a known date or a range from several months to a year.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Iterating over seed values:</strong>  For each day in the date range, all possible seed values ​​corresponding to the timestamps of that day are iterated over (86,400 values ​​per day).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Entropy generation:</strong>  For each seed value, an MT19937 sequence is generated, from which the first 32 bytes are extracted and interpreted as entropy.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Conversion to mnemonic:</strong>  The generated entropy is converted into BIP-39 mnemonic.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Private key derivation:</strong>  The mnemonic is converted into a private key according to the BIP-32 hierarchy.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Address generation: A corresponding </strong><a href="https://cryptou.ru/btcdetect/bitcoin">Bitcoin address</a>  is generated from the private key .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Match check:</strong>  If the generated address matches the target address, the recovery is considered successful.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">6.2 Computational complexity</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#62-computational-complexity"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On modern equipment (for example&nbsp;<code>GPU NVIDIA RTX 3090</code>):</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>If the exact date is known:</strong>  approximately 86,400 checks = several minutes on one GPU</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>If the year is known:</strong>  approximately 365 × 86,400 ≈ 31,536,000 checks = several hours on one GPU</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>If the full 2^32 space is used:</strong>  approximately 4,294,967,296 checks = several days on a single GPU</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>These calculations show that recovering a private key is practically feasible even for non-professional attackers.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/RingSide-Replay-Attack/blob/main/RingSide%20Replay%20Attack_files/image-38.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/image-38.png" alt="RingSide Replay Attack: SEED Recovery → Bitcoin wallet private key derivation and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">7. Real-world example: recovering the address key&nbsp;<a href="https://btc1.trezor.io/address/1NiojfedphT6MgMD7UsowNdQmx5JY15djG">1NiojfedphT6MgMD7UsowNdQmx5JY15djG</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#7-real-world-example-recovering-the-address-key1niojfedpht6mgmd7usowndqmx5jy15djg"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">7.1 Initial data of compromise</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#71-initial-data-of-compromise"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s look at a documented case of recovering a private key from the Bitcoin address&nbsp;&nbsp;<strong><a href="https://btc1.trezor.io/address/1NiojfedphT6MgMD7UsowNdQmx5JY15djG">1NiojfedphT6MgMD7UsowNdQmx5JY15djG</a></strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><th>Parameter</th><th>Meaning</th></tr><tr><td>Bitcoin address</td><td>1NiojfedphT6MgMD7UsowNdQmx5JY15djG</td></tr><tr><td>Cost of recovered funds</td><td>$61,025</td></tr><tr><td>Recovered private key (HEX)</td><td>4ACBB2E3CE1EE22224219B71E3B72BF6C8F2C9AA1D992666DBD8B48AA826FF6B</td></tr><tr><td>Recovered private key (WIF compressed)</td><td>Kyj6yvb4oHHDGBW23C8Chzji3zdYQ5QMr8r9zWpGVHdvWuYqCGVU</td></tr><tr><td>Recovered private key (Decimal)</td><td>95490713496748161492785334010456634825357659290488148536925849552527657999353</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">7.2 Key validation in secp256k1 space</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#72-key-validation-in-secp256k1-space"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The private key k must satisfy the constraint:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>1 ≤ k &lt; n
<em>where</em> n = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
≈ 1.158 × 10^77</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Check result:</strong>&nbsp;&nbsp;✓ VALID&nbsp;<em>(the key is within the allowed scalar range)</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">7.3 Calculating the public key and address</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#73-calculating-the-public-key-and-address"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The recovered private key allows us to calculate the public key:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><th>Parameter</th><th>Meaning</th></tr><tr><td>Public key (uncompressed, 130 characters)</td><td>04BC79D7CC638214D0FE1902A8F3A0EEC3F2B41F5792043559AD6161D23467C23 4BCD34142146FF3E0DF1648A2B83F392B738AF7598C5B137C2A4500B6E12CECFD</td></tr><tr><td>Public key (compressed, 66 characters)</td><td>03AE73430C02577F3A7DA6F3EDC51AF4ECBB41962B937DBC2D382CABB11D0D18CE</td></tr><tr><td>Bitcoin address (uncompressed)</td><td>1NiojfedphT6MgMD7UsowNdQmx5JY15djG</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">7.4 Practical significance of the recovered key</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#74-practical-significance-of-the-recovered-key"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A recovered private key gives&nbsp;&nbsp;<strong>complete control</strong>&nbsp;&nbsp;over the Bitcoin wallet, allowing an attacker to:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptou.ru/btcdetect/privatekey/">Possibilities with a recovered private key:</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Create and sign transactions to withdraw all funds to a controlled address</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Import the key into any Bitcoin wallet (Electrum, Bitcoin Core, MetaMask, etc.)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Take complete control of an address and all its assets</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Hide traces of compromise by deleting all logs and history</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/RingSide-Replay-Attack/blob/main/RingSide%20Replay%20Attack_files/image-39.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/image-39.png" alt="RingSide Replay Attack: SEED Recovery → Bitcoin wallet private key derivation and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">8. BTCDetect crypto tool: architecture and capabilities</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#8-btcdetect-crypto-tool-architecture-and-capabilities"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8.1 General Description of BTCDetect</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#81-general-description-of-btcdetect"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptou.ru/btcdetect/">BTCDetect</a></strong>&nbsp;is software designed to recover lost Bitcoin wallets by applying cryptanalysis techniques and identifying vulnerabilities in cryptographic libraries such as SharpECC. SharpECC is a C# library for working with elliptic curve cryptography (ECC), which underlies key and signature generation in the Bitcoin ecosystem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Despite its popularity, SharpECC has a number of critical vulnerabilities and bugs that can serve as entry points for recovering private keys of lost wallets.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8.2 The Basic Mechanism of BTCDetect</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#82-the-basic-mechanism-of-btcdetect"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BTCDetect’s core mechanism relies on vulnerabilities such as&nbsp;&nbsp;<strong>nonce generation errors</strong>&nbsp;&nbsp;when creating ECDSA digital signatures. These errors allow BTCDetect software to use multiple signatures generated using the same private key to calculate the private key itself.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The recovered private key provides&nbsp;&nbsp;<strong>full control</strong>&nbsp;&nbsp;over the BTC address and the funds associated with it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8.3 Types of vulnerabilities used by BTCDetect</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#83-types-of-vulnerabilities-used-by-btcdetect"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BTCDetect exploits the following main types of vulnerabilities to recover lost Bitcoin wallets:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Nonce generation errors:</strong>  If the nonce (the nonce used in the ECDSA signature) is generated with insufficient entropy or is repeated, this may lead to private key recovery.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Weak signatures (short signatures):</strong>  An incorrect implementation may generate signatures that do not completely cover the space of possible values.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Validation Issues:</strong>  Incomplete verification of signatures may allow certain protections to be bypassed.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8.4 Key recovery process via BTCDetect</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#84-key-recovery-process-via-btcdetect"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BTCDetect detects and exploits these vulnerabilities by analyzing signatures and cryptographic data, using cryptanalysis techniques to recover private keys. The process includes:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Signature Analysis:</strong>  BTCDetect collects multiple signatures created using a single private key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Pattern Detection:</strong>  The program analyzes these signatures to look for patterns that indicate errors in nonce generation or other weaknesses.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Cryptanalysis:</strong>  Using linear algebra and modular arithmetic, BTCDetect calculates a possible private key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Verification:</strong>  The recovered key is verified by generating the corresponding public key and <a href="https://cryptou.ru/btcdetect/bitcoin">Bitcoin address</a> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Regain Control:</strong>  After verification, the user can regain full control of the wallet.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8.5 Differences between BTCDetect and traditional recovery methods</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#85-differences-between-btcdetect-and-traditional-recovery-methods"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BTCDetect operates at the level of cryptographic implementation vulnerability, which distinguishes it from traditional recovery methods:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><th>Method</th><th>Requires</th><th>Possibilities</th></tr><tr><td>Seed phrase (BIP-39)</td><td>24 or 12 mnemonic words</td><td>Recovering all keys in the hierarchy</td></tr><tr><td>Backups (wallet.dat)</td><td>Wallet.dat file</td><td>Restore all wallets</td></tr><tr><td>Direct key entry</td><td><a href="https://cryptou.ru/btcdetect/privatekey/">Private key (WIF or HEX)</a></td><td>Control over a specific address</td></tr><tr><td><strong>BTCDetect</strong></td><td><strong>Multiple signatures or transaction history</strong></td><td><strong>Recovering keys without the original recovery data</strong></td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8.6 BTCDetect Architecture</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#86-btcdetect-architecture"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BTCDetect consists of the following main components:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Data Collector:</strong>  Collects signatures, public keys, and data from the Bitcoin blockchain.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Signature Analyzer:</strong>  Analyzes ECDSA signatures to find vulnerabilities.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Cryptanalyzer:</strong>  Performs mathematical analysis to recover a private key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Verifier:</strong>  Checks the correctness of the recovered key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Recovery Tool:</strong>  Provides the ability to export and use the recovered key.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8.7 Practical Application&nbsp;<a href="https://cryptou.ru/btcdetect/">of BTCDetect</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#87-practical-applicationof-btcdetect"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BTCDetect is used for:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Cryptanalysis:</strong>  Identifying vulnerabilities in cryptographic implementations.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Wallet Recovery:</strong>  Recover access to lost Bitcoin wallets if they are vulnerable.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Forensic analysis:</strong>  Analysis of compromised wallets to identify the source of the leak.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Security Research:</strong>  Testing cryptographic libraries for weaknesses.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/RingSide-Replay-Attack/blob/main/RingSide%20Replay%20Attack_files/image-40-1-1024x556.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/image-40-1-1024x556.png" alt="RingSide Replay Attack: SEED Recovery → Bitcoin wallet private key derivation and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">9. Countermeasures and recommendations</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#9-countermeasures-and-recommendations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">9.1 Immediate actions for affected users</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#91-immediate-actions-for-affected-users"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>⚠️&nbsp;For users who created Bitcoin wallets using&nbsp;<a href="https://github.com/keyhunters/libbitcoin-system">Libbitcoin Explorer 3.x</a>&nbsp;:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Immediate migration of funds:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Create a new wallet using a cryptographically secure entropy generation method</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Transfer all funds to the new address</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Destroy or use the old address only for monitoring</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Compromise check:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use analysis tools to check if a specific address has been compromised</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Check for unauthorized <a href="https://cryptou.ru/btcdetect/transaction">transactions from your wallet</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Recovering lost funds:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>If the wallet was created on a known date, recovery methods can be used to retrieve the private key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Transfer recovered funds to a secure wallet</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">9.2 Improvements for developers</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#92-improvements-for-developers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">9.2.1 Using a Cryptographically Secure PRNG (CSPRNG)</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#921-using-a-cryptographically-secure-prng-csprng"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Entropy generation requirements:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Linux/macOS:</strong> <code>/dev/urandom</code>  or <code>getrandom()</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Windows:</strong> <code>CryptGenRandom()</code>  or modern APIs</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>C++:</strong> <code>std::random_device</code>  (with implementation caveat)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Python:</strong> <code>os.urandom()</code> ,  <code>secrets</code> module</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>The correct way to generate entropy in C++:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>#include &lt;fstream&gt; #include &lt;array&gt; void secure_random_bytes(uint8_t* buf, size_t len) { std::ifstream urandom("/dev/urandom", std::ios::in | std::ios::binary); if (!urandom) throw std::runtime_error("Cannot open /dev/urandom"); urandom.read(reinterpret_cast&lt;char*&gt;(buf), len); if (urandom.gcount() != static_cast&lt;std::streamsize&gt;(len)) throw std::runtime_error("Read error from /dev/urandom"); } // Generate a protected private key std::array&lt;uint8_t, 32&gt; secret; secure_random_bytes(secret.data(), secret.size());</strong></code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">9.2.2 Minimum entropy requirements</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#922-minimum-entropy-requirements"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>For <a href="https://cryptou.ru/btcdetect/bitcoin">Bitcoin</a> private keys:</strong>  256 bits minimum</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>For BIP-39 mnemonics:</strong>  128-256 bits depending on length (12 or 24 words)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">9.2.3 Validation and verification</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#923-validation-and-verification"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Checking that the generated private key is in the valid range: 1 ≤ k &lt; n</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Using Deterministic Signature Methods (RFC 6979) for ECDSA</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">9.2.4 Clearing memory</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#924-clearing-memory"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use  <code>mlock()</code> to protect critical data from access</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Explicitly clear memory after use (fill with zeros)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Using specialized libraries for working with cryptographic secrets (for example,  <code>libsodium</code>)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">9.3 Standards Updates and Best Practices</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#93-standards-updates-and-best-practices"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>BIP-32 (Hierarchical Deterministic Wallets):</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Add an explicit requirement to use 256+ bits of entropy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Recommend the use of hardware random number generators</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>BIP-39 (Mnemonic Code):</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Recommend a minimum mnemonic length (24 words for maximum security)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Specify the need to use <a href="https://cryptou.ru/btcdetect/github">CSPRNG</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>BIP-44 (Multi-account Hierarchy):</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Add security recommendations when implementing a derivation hierarchy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use of built-in True Random Number Generators (TRNGs) with EAL6+ certification</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">9.4 Recommendations for hardware wallet manufacturers</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#94-recommendations-for-hardware-wallet-manufacturers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Security standards for hardware wallets:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>All hardware wallets must be equipped  <strong>with secure elements (SE)</strong>  with built-in true random number generators (TRNGs)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Components must be certified to safety level  <strong>EAL6+</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Cryptographic isolation of key operations in secure elements (Secure Element)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Regular security audits from independent experts</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">10. Conclusions and research prospects</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#10-conclusions-and-research-prospects"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">10.1 Key findings of the study</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#101-key-findings-of-the-study"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The CVE-2023-39910 (Milk Sad) vulnerability demonstrates the critical importance of proper entropy generation in cryptographic applications. Although the use of Mersenne Twister-32 was documented as insecure, many developers and users ignored the warnings, leading to a large-scale compromise of over 227,200 Bitcoin wallets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Key findings:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Entropy is the foundation of security:</strong>  It is impossible to create a cryptographically secure system using a weak random number generator.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Importance of standardization:</strong>  Incorrect implementation of even well-known standards (BIP-32/39/44) can lead to disastrous results.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Education and awareness:</strong>  Developers should be aware of the differences between PRNGs and CSPRNGs, and users should be aware of the risks of using tools with incorrect entropy.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Continuous Monitoring:</strong>  There is a need for continuous analysis of the blockchain to <a href="https://cryptou.ru/btcdetect/attack">detect anomalous patterns and attacks.</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Recovery and Refund:</strong>  The Milk Sad attack demonstrated the possibility of recovering lost wallets, but this requires an ethical and legal approach to the issue of ownership of recovered funds.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">10.2 Mathematical laws of critical vulnerability</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#102-mathematical-laws-of-critical-vulnerability"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Vulnerability can be expressed through the following mathematical relationships:</em></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Attack efficiency = log₂(2^32) / log₂(2^256)
= 32 / 256 = 0.125 = 12.5%
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This means that the search space is reduced by 87.5%.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">10.3 Research Prospects</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#103-research-prospects"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Future research directions include:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Analysis of other PRNGs:</strong>  Research of other generators in use (LCG, PCG, etc.) for cryptographic vulnerabilities.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Quantum Security:</strong>  Developing Post-Quantum Entropy Generation Methods to Protect Against Quantum Computers.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hardware Random Number Generators:</strong>  Optimization and Implementation of Cheaper and More Accessible TRNGs.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Automated Vulnerability Detection:</strong>  Developing Tools for Automatic Detection of Weak Generators in Cryptographic Libraries.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">10.4 Final conclusion</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#104-final-conclusion"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cryptographic systems and implementation errors are not due to theoretical maturity, but to simple engineering miscalculations. Without constant auditing, the use of only cryptographically secure random number generation libraries, and prompt incident response, risks in cryptocurrency systems will always be fatal and systemic. The Milk Sad attack is a harsh lesson for the entire cryptocurrency industry:&nbsp;&nbsp;<strong>one weak component can compromise the integrity of the entire system</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/RingSide-Replay-Attack/tree/main?tab=readme-ov-file#references"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><em><a href="https://keyhunters.ru/polycurve-extraction-attack-a-polycurve-extraction-attack-cve-2023-39910-leads-to-private-key-recovery-and-theft-of-bitcoin-funds-where-an-attacker-is-able-to-gain-control-of-btc-funds-through-a-l/"><strong>Polycurve Extraction Attack: A polycurve extraction attack (CVE-2023-39910) leads to private key recovery and theft of Bitcoin funds, where an attacker is able to gain control of BTC funds through a libbitcoin flaw.</strong></a> Polycurve Extraction Attack The core of the libbitcoin crypto library contains a critical vulnerability: an elliptic curve point received from outside the library fails a full mathematical check to determine…<a href="https://keyhunters.ru/polycurve-extraction-attack-a-polycurve-extraction-attack-cve-2023-39910-leads-to-private-key-recovery-and-theft-of-bitcoin-funds-where-an-attacker-is-able-to-gain-control-of-btc-funds-through-a-l/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/mnemonic-drain-attack-industrial-bip39-mnemonic-phrase-ram-leakage-escalates-a-global-attack-on-the-bitcoin-network-through-uncleaned-ram-memory-where-an-attacker-uses-a-mnemonic-drain-to-siphon-con/">Mnemonic Drain Attack: Industrial BIP39 Mnemonic Phrase RAM Leakage escalates a global attack on the Bitcoin network through uncleaned RAM memory, where an attacker uses a mnemonic drain to siphon control of Bitcoins into the wrong hands, gaining complete control of BTC funds.</a> </strong>From Mnemonic Drain Attack Mnemonic Drain Attack: This unforgettable attack is based on the idea of ​​”sucking” BIP39 secrets directly from crypto wallets through vulnerabilities in the processing of mnemonics, seed…<a href="https://keyhunters.ru/mnemonic-drain-attack-industrial-bip39-mnemonic-phrase-ram-leakage-escalates-a-global-attack-on-the-bitcoin-network-through-uncleaned-ram-memory-where-an-attacker-uses-a-mnemonic-drain-to-siphon-con/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://keyhunters.ru/entropy-collapse-attack-a-critical-entropy-failure-in-electrum-v1-leads-to-the-compromise-of-private-keys-over-bitcoin-funds-where-an-attacker-overflows-the-decoding-of-mnemonics-leading-to-the-tot/">Entropy Collapse Attack: A critical entropy failure in Electrum v1 leads to the compromise of private keys over Bitcoin funds, where an attacker overflows the decoding of mnemonics, leading to the total recovery of the crypto wallet seed.</a> </strong>Entropy Collapse Attack At the heart of a blockchain system, where every private key and recovery phrase is trusted by millions, an attacker causes a veritable “energy collapse.” Exploiting a…<a href="https://keyhunters.ru/entropy-collapse-attack-a-critical-entropy-failure-in-electrum-v1-leads-to-the-compromise-of-private-keys-over-bitcoin-funds-where-an-attacker-overflows-the-decoding-of-mnemonics-leading-to-the-tot/"> Read More</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/bitshredder-attack-memory-vulnerability-turns-lost-bitcoin-wallets-into-trophies-and-complete-btc-theft-via-private-key-recovery-where-attackers-exploit-the-memory-phantom-attack-cve-2025-8217-cve/">BitShredder Attack: Memory vulnerability turns lost Bitcoin wallets into trophies and complete BTC theft via private key recovery, where attackers exploit the memory phantom attack (CVE-2025-8217, CVE-2013-2547)</a> </strong>BitShredder Attack BitShredder Attack silently infiltrates the memory of a running cryptocurrency wallet. When a wallet is generated or restored, it scans uncleared fragments of RAM, searching for any remnants…<a href="https://keyhunters.ru/bitshredder-attack-memory-vulnerability-turns-lost-bitcoin-wallets-into-trophies-and-complete-btc-theft-via-private-key-recovery-where-attackers-exploit-the-memory-phantom-attack-cve-2025-8217-cve/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/script-mirage-attack-recovering-private-keys-of-lost-bitcoin-wallets-during-a-total-fund-hijacking-attack-and-completely-stealing-btc-from-compromised-wallets-where-the-attacker-uses-block-filters-t/">Script Mirage Attack: Recovering private keys of lost Bitcoin wallets during a total fund hijacking attack and completely stealing BTC from compromised wallets, where the attacker uses block filters to extract hidden private elements from transaction scripts</a> </strong>Script Mirage Attack Script Mirage is an exploit in which an attacker cleverly exploits the semi-transparency of block filters to extract hidden private elements from transaction scripts. During the construction…<a href="https://keyhunters.ru/script-mirage-attack-recovering-private-keys-of-lost-bitcoin-wallets-during-a-total-fund-hijacking-attack-and-completely-stealing-btc-from-compromised-wallets-where-the-attacker-uses-block-filters-t/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/entropy-cascade-attack-how-invisible-memory-cascades-lead-to-complete-compromise-of-bitcoin-wallet-private-keys-and-total-loss-of-btc-where-an-attacker-exploits-the-cve-2023-39910-vulnerability-in-b/">Entropy Cascade Attack: How invisible memory cascades lead to complete compromise of Bitcoin private keys and total loss of BTC, where an attacker exploits the CVE-2023-39910 vulnerability in BIP39 seed wallet processing in swap spaces.</a> </strong>Entropy Cascade Attack Attack Description:The “Entropy Cascade” attack exploits insecure memory operations when processing BIP39 seed phrases and cryptographic entropy, allowing an attacker to recover private keys from invisible cascaded…<a href="https://keyhunters.ru/entropy-cascade-attack-how-invisible-memory-cascades-lead-to-complete-compromise-of-bitcoin-wallet-private-keys-and-total-loss-of-btc-where-an-attacker-exploits-the-cve-2023-39910-vulnerability-in-b/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/chainpredictor-attack-recovering-private-keys-and-taking-control-of-lost-bitcoin-wallets-through-random-number-predictability-where-an-attacker-can-pre-compute-random-values-of/">ChainPredictor Attack: Recovering private keys and taking control of lost Bitcoins through random number predictability, where an attacker can pre-compute “random” values ​​​​of insufficient entropy of a predictable PRNG initialization</a> </strong>ChainPredictor Attack ChainPredictor is an attack on cryptocurrency wallet systems based on the predictability of a pseudorandom number generator. The attack utilizes a pre-calculated seed, which allows the attacker to anticipate…<a href="https://keyhunters.ru/chainpredictor-attack-recovering-private-keys-and-taking-control-of-lost-bitcoin-wallets-through-random-number-predictability-where-an-attacker-can-pre-compute-random-values-of/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/bitflip-oracle-rush-attack-a-critical-attack-on-aes-256-cbc-in-bitcoin-core-and-a-compromise-of-wallet-dat-where-an-attacker-uses-a-flaw-in-the-implementation-of-aead-hmac-and-the-failure-to-decry/">Bitflip Oracle Rush Attack: A critical attack on AES-256-CBC in Bitcoin Core and a compromise of wallet.dat, where an attacker uses a flaw in the implementation of AEAD, HMAC, and the failure to decrypt without authentication to turn Bitcoin Core into an oracle for leaking private keys in order to steal BTC coins</a> </strong>“Bitflip Oracle Rush Attack” Attack Description:The attacker skillfully manipulates bytes in the encrypted wallet.dat Bitcoin Core file, bit-flipping individual bits in each AES-256-CBC ciphertext block. By using the system’s responses…<a href="https://keyhunters.ru/bitflip-oracle-rush-attack-a-critical-attack-on-aes-256-cbc-in-bitcoin-core-and-a-compromise-of-wallet-dat-where-an-attacker-uses-a-flaw-in-the-implementation-of-aead-hmac-and-the-failure-to-decry/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/chronoforge-attack-gradual-private-key-recovery-through-timing-side-channels-where-an-attacker-exploits-a-critical-timing-vulnerability-in-the-bitcoin-core-crypto-wallet-to-reveal-sensitive-data/">ChronoForge Attack: Gradual private key recovery through timing side channels, where an attacker exploits a critical timing vulnerability in the Bitcoin Core crypto wallet to reveal sensitive data</a> </strong>ChronoForge Attack The ChronoForge attack exploits a variable-time vulnerability in elliptic curve operations in the BIP324 protocol implementation and ellswift decoding. By measuring minute differences in the execution time of…<a href="https://keyhunters.ru/chronoforge-attack-gradual-private-key-recovery-through-timing-side-channels-where-an-attacker-exploits-a-critical-timing-vulnerability-in-the-bitcoin-core-crypto-wallet-to-reveal-sensitive-data/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/pulseprobe-attack-private-key-recovery-and-stealth-hijacking-of-bitcoin-cryptocurrency-where-an-attacker-injects-benchmark-code-that-enables-the-extraction-of-secret-data-by-analyzing-the-obtained-t/">PulseProbe Attack: Private key recovery and stealth hijacking of Bitcoin cryptocurrency, where an attacker injects benchmark code that enables the extraction of secret data by analyzing the obtained timing patterns</a> </strong>PulseProbe Attack The “PulseProbe attack” uses precise microbenchmarks to probe the execution time of cryptographic functions. The attacker injects benchmark code that performs a series of high-frequency timing measurements, tracking…<a href="https://keyhunters.ru/pulseprobe-attack-private-key-recovery-and-stealth-hijacking-of-bitcoin-cryptocurrency-where-an-attacker-injects-benchmark-code-that-enables-the-extraction-of-secret-data-by-analyzing-the-obtained-t/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/pattern-forge-attack-a-critical-randomness-vulnerability-and-method-for-recovering-private-keys-in-compromised-bitcoin-wallets-when-entropy-becomes-a-predictable-generator-pattern-allows-an-attacker/">Pattern Forge Attack: A critical randomness vulnerability and method for recovering private keys in compromised Bitcoin wallets when entropy becomes a predictable generator pattern allows an attacker to massively empty crypto wallets</a> </strong>Pattern Forge Attack A pattern forge attack exploits the use of a deterministic random number generator to generate private keys and other secret data. As a result, the sequence of supposedly…<a href="https://keyhunters.ru/pattern-forge-attack-a-critical-randomness-vulnerability-and-method-for-recovering-private-keys-in-compromised-bitcoin-wallets-when-entropy-becomes-a-predictable-generator-pattern-allows-an-attacker/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/chameleon-twist-attack-a-scientific-analysis-of-private-key-threats-when-manipulating-scriptsig-and-txid-where-the-attacker-uses-null-bytes-and-incorrect-transaction-mutability-signatures-and-recov/">Chameleon Twist Attack: A scientific analysis of private key threats when manipulating scriptSig and TXID, where the attacker uses null bytes and incorrect transaction mutability signatures, and recovering lost BTC wallets</a> </strong>Chameleon Twist Attack The chameleon is a symbol of mutability and disguise, reflecting the essence of ScriptSig manipulation and the ability to “rename” a transaction identifier without changing the essence…<a href="https://keyhunters.ru/chameleon-twist-attack-a-scientific-analysis-of-private-key-threats-when-manipulating-scriptsig-and-txid-where-the-attacker-uses-null-bytes-and-incorrect-transaction-mutability-signatures-and-recov/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/quantum-prism-extractor-attack-a-catastrophic-vulnerability-in-random-number-generators-and-recovery-of-private-keys-of-lost-bitcoin-wallets-where-an-attacker-identifies-signatures-with-identical-or/">Quantum Prism Extractor Attack: A catastrophic vulnerability in random number generators and recovery of private keys of lost Bitcoin wallets, where an attacker identifies signatures with identical or weakly random nonces by mathematically recovering the private key data of Bitcoin users</a> </strong>Quantum Prism Extractor Attack The Quantum Prism Extractor Attack is a spectacular attack on cryptographic applications that utilize predictable pseudorandom number generators (PRNGs) in key areas, such as generating private keys, time…<a href="https://keyhunters.ru/quantum-prism-extractor-attack-a-catastrophic-vulnerability-in-random-number-generators-and-recovery-of-private-keys-of-lost-bitcoin-wallets-where-an-attacker-identifies-signatures-with-identical-or/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/keyblaze-attack-cryptographic-collapse-and-private-key-recovery-as-a-tool-for-total-compromise-of-the-bitcoin-network-and-complete-seizure-of-funds-from-lost-crypto-wallets-where-the-attacker-gains/">KeyBlaze Attack: Cryptographic collapse and private key recovery as a tool for total compromise of the Bitcoin network and complete seizure of funds from lost crypto wallets, where the attacker gains unauthorized access to the transaction and withdraws BTC coins</a> </strong>KeyBlaze Attack The KeyBlaze attack represents a particularly critical threat due to the improper handling of private key material in Bitcoin’s code. It could lead to a complete compromise of…<a href="https://keyhunters.ru/keyblaze-attack-cryptographic-collapse-and-private-key-recovery-as-a-tool-for-total-compromise-of-the-bitcoin-network-and-complete-seizure-of-funds-from-lost-crypto-wallets-where-the-attacker-gains/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://keyhunters.ru/ellswift-mirror-key-breach-how-cve-2018-17096-and-cve-2023-39910-open-the-path-to-bitcoin-private-key-recovery-from-a-key-generation-error-to-a-complete-takeover-of-a-victims-btc-assets-where-an/"><strong>EllSwift Mirror Key Breach: How CVE-2018-17096 and CVE-2023-39910 Open the Path to Bitcoin Private Key Recovery, From a Key Generation Error to a Complete Takeover of a Victim’s BTC Assets, Where an Attacker Creates a Critical Anomaly That Allows for the Recovery of Secret Data and the Theft of BTC Funds</strong></a> EllSwift Mirror Key Breach This attack mirrors the public key data into the private key using a vulnerability in which the first 32 bytes of the public key are used as the…<a href="https://keyhunters.ru/ellswift-mirror-key-breach-how-cve-2018-17096-and-cve-2023-39910-open-the-path-to-bitcoin-private-key-recovery-from-a-key-generation-error-to-a-complete-takeover-of-a-victims-btc-assets-where-an/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/crystal-key-exposure-attack-end-to-end-filter-transparency-and-complete-btc-asset-theft-by-an-attacker-through-the-predictability-of-siphash-and-gcs-filters-reveals-private-crypto-wallet-keys-secret/">Crystal Key Exposure Attack: End-to-end filter transparency and complete BTC asset theft by an attacker through the predictability of SipHash and GCS filters reveals private crypto wallet keys, secret transactions, and leads to loss of control over Bitcoin assets</a> </strong>Crystal Key Exposure Attack A Crystal Key Exposure Attack is a method that allows an attacker to reproduce filter keys and analyze the contents of blocks and user addresses with high…<a href="https://keyhunters.ru/crystal-key-exposure-attack-end-to-end-filter-transparency-and-complete-btc-asset-theft-by-an-attacker-through-the-predictability-of-siphash-and-gcs-filters-reveals-private-crypto-wallet-keys-secret/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/pulse-rerun-attack-bitcoins-achilles-heel-how-a-nonce-leak-leads-to-private-key-recovery-and-crypto-wallet-compromises-attackers-can-build-a-mathematical-chain-to-recover-the-initial-private-key/">Pulse Rerun Attack: Bitcoin’s Achilles’ Heel: How a Nonce Leak Leads to Private Key Recovery and Crypto Wallet Compromises Attackers Can Build a Mathematical Chain to Recover the Initial Private Key Data and Withdraw All BTC Coins</a> </strong>Pulse Rerun Attack This attack exploits the careless reuse of the same nonce (pulse) in cryptographic operations or signatures. By repeating the same nonce, the system “feeds” the validation process…<a href="https://keyhunters.ru/pulse-rerun-attack-bitcoins-achilles-heel-how-a-nonce-leak-leads-to-private-key-recovery-and-crypto-wallet-compromises-attackers-can-build-a-mathematical-chain-to-recover-the-initial-private-key/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/master-key-attack-how-a-single-line-of-code-turns-bitcoin-into-a-hackers-prey-where-hardcoded-private-key-leads-to-the-instant-loss-of-control-over-all-btc-funds-using-hardcoded-private-keys-with/">Master Key Attack: How a single line of code turns Bitcoin into a hacker’s prey, where Hardcoded Private Key leads to the instant loss of control over all BTC funds using hardcoded private keys, with complete takeover of the crypto wallet’s Bitcoin network</a> </strong>Master Key Attack The entire test environment becomes fully controlled by a single private key, hardcoded into the code. A single master key grants complete power: it can create, sign,…<a href="https://keyhunters.ru/master-key-attack-how-a-single-line-of-code-turns-bitcoin-into-a-hackers-prey-where-hardcoded-private-key-leads-to-the-instant-loss-of-control-over-all-btc-funds-using-hardcoded-private-keys-with/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/double-forge-attack-restoring-control-over-lost-crypto-wallets-through-bitcoin-cores-inflation-vulnerability-where-an-attacker-contributes-to-the-creation-of-extra-coins-on-the-network-cve-2018-1/">Double Forge Attack: Restoring control over crypto lost wallets through Bitcoin Core’s inflation vulnerability, where an attacker contributes to the creation of extra coins on the network: CVE-2018-17144 as a phenomenon for restoring other people’s private keys in Bitcoin</a> </strong>Double Forge Attack A “Double Forge Attack” is a critical vulnerability in Bitcoin Core where an attacker with sufficient computing power can create special blocks containing a transaction that double-spends…<a href="https://keyhunters.ru/double-forge-attack-restoring-control-over-lost-crypto-wallets-through-bitcoin-cores-inflation-vulnerability-where-an-attacker-contributes-to-the-creation-of-extra-coins-on-the-network-cve-2018-1/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/linear-summoner-attack-how-an-lfsr-generator-vulnerability-opens-the-way-to-private-key-recovery-where-an-attacker-gains-total-control-of-bitcoin-wallets-by-running-the-berlekamp-messi-algorithm-cve/">Linear Summoner Attack: How an LFSR Generator Vulnerability Opens the Way to Private Key Recovery, Where an Attacker Gains Total Control of Bitcoin Wallets by Running the Berlekamp-Messi Algorithm CVE-2024-35202, CVE-2024-52922</a> </strong>Linear Summoner Attack The “Linear Summoner Attack” is a cryptographic attack on a weak LFSR generator implementation in systems where memory allocation/deallocation patterns predictably depend on the internal register state. The…<a href="https://keyhunters.ru/linear-summoner-attack-how-an-lfsr-generator-vulnerability-opens-the-way-to-private-key-recovery-where-an-attacker-gains-total-control-of-bitcoin-wallets-by-running-the-berlekamp-messi-algorithm-cve/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/resonance-twist-attack-a-method-for-stealthily-hacking-and-recovering-private-keys-for-lost-bitcoin-wallets-where-an-attacker-can-change-the-txid-and-double-spend-completely-stealing-the-victims/">Resonance Twist Attack: A method for stealthily hacking and recovering private keys for lost Bitcoin wallets, where an attacker can change the TXID and double-spend, completely stealing the victim’s BTC funds</a> </strong>Resonance Twist Attack A “resonant break attack” exploits a cryptographic phenomenon—changing a transaction identifier (TXID) before it’s confirmed. The attacker introduces minor changes to the witness data or signature encoding…<a href="https://keyhunters.ru/resonance-twist-attack-a-method-for-stealthily-hacking-and-recovering-private-keys-for-lost-bitcoin-wallets-where-an-attacker-can-change-the-txid-and-double-spend-completely-stealing-the-victims/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/spectral-fountain-attack-mass-recovery-of-private-keys-to-lost-bitcoin-wallets-via-a-predictable-random-number-generator-prng-exploit-where-cve-2025-27840-unstable-entropy-in-hardware-wallets-pave/">Spectral Fountain Attack: Mass recovery of private keys to lost Bitcoin wallets via a predictable random number generator (PRNG) exploit, where CVE-2025-27840 unstable entropy in hardware wallets paved the way for an attacker to unauthorized withdrawal of BTC funds</a> </strong>Spectral Fountain Attack “Spectral Fountain Attack” exploits the predictability of a deterministic random number generator to continuously and easily extract cryptographic secrets. Within the target system, where the PRNG is…<a href="https://keyhunters.ru/spectral-fountain-attack-mass-recovery-of-private-keys-to-lost-bitcoin-wallets-via-a-predictable-random-number-generator-prng-exploit-where-cve-2025-27840-unstable-entropy-in-hardware-wallets-pave/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/resonance-thief-attack-a-critical-vulnerability-in-bitcoin-key-generation-and-private-key-recovery-for-lost-wallets-where-an-attacker-exploits-dangerous-vulnerabilities-in-predictable-deterministic/">Resonance Thief Attack: A critical vulnerability in Bitcoin key generation and private key recovery for losts, where an attacker exploits dangerous vulnerabilities in predictable deterministic random number generators (PRNGs), leading to the compromise of private keys, mass wallet hacks, and the loss of user BTC funds</a> </strong>Resonance Thief Attack In a “Resonance Thief Attack,” an attacker captures a repeating “resonance” in a deterministic generator, extracting the same secret sequence over and over again. Like an acoustic…<a href="https://keyhunters.ru/resonance-thief-attack-a-critical-vulnerability-in-bitcoin-key-generation-and-private-key-recovery-for-lost-wallets-where-an-attacker-exploits-dangerous-vulnerabilities-in-predictable-deterministic/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/rng-crystal-key-exploit-recovering-private-keys-to-lost-bitcoin-wallets-through-a-critical-vulnerability-in-the-random-number-generator-which-allowed-an-attacker-to-completely-control-the-victims/">RNG Crystal Key Exploit: Recovering private keys to lost Bitcoin wallets through a critical vulnerability in the random number generator, which allowed an attacker to completely control the victim’s funds through Randstorm predictable generators in BitcoinJS and through the weak entropy of Libbitcoin’s Mersenne Twister Bug</a> </strong>RNG Crystal Key Exploit A “Crystal Key” attack exploits the fact that a pseudorandom generator is deterministic and predictable in advance. The generator operates as a “transparent crystal”—the sequence of random…<a href="https://keyhunters.ru/rng-crystal-key-exploit-recovering-private-keys-to-lost-bitcoin-wallets-through-a-critical-vulnerability-in-the-random-number-generator-which-allowed-an-attacker-to-completely-control-the-victims/"> Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://keyhunters.ru/nullstream-attack-how-poly1305s-malicious-null-key-channel-destroys-authentication-and-recovers-lost-bitcoin-wallets-leading-to-complete-compromise-of-private-keys-it-is-known-that-the-attacker-u/">NullStream Attack: How Poly1305’s malicious null-key channel destroys authentication and recovers lost Bitcoin wallets. Leading to complete compromise of private keys. It is known that the attacker uses the null key to calculate the MAC address.</a> </strong>NullStream Attack NullStream Attack is a cryptographic attack in which a malicious actor easily turns the Poly1305 message authentication mechanism into a transparent channel for injecting fake data. The critical vulnerability…<a href="https://keyhunters.ru/nullstream-attack-how-poly1305s-malicious-null-key-channel-destroys-authentication-and-recovers-lost-bitcoin-wallets-leading-to-complete-compromise-of-private-keys-it-is-known-that-the-attacker-u/"> Read More</a></em></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://dzen.ru/video/watch/69431d5dfd50136dae291001"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/image-3.png" alt="RingSide Replay Attack: Recovering the SEED → deriving Bitcoin wallet private keys and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
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
<p><strong><a href="https://cryptou.ru/btcdetect/">Crypto Tools</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/45RingSideReplayAttack">Source code</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://colab.research.google.com/drive/1vH3nohPhojYshof2Oy0AOGoGOWw39KwB">Google Colab</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://t.me/cryptodeeptech">Telegram: https://t.me/cryptodeeptech</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://youtu.be/KJNbwfolL6g">Video material: https://youtu.be/KJNbwfolL6g</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://dzen.ru/video/watch/69431d5dfd50136dae291001">Video tutorial: https://dzen.ru/video/watch/69431d5dfd50136dae291001</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/ringside-replay-attack">Source: https://cryptodeeptech.ru/ringside-replay-attack</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/RingSide-Replay-Attack/blob/main/RingSide%20Replay%20Attack_files/068-1024x576(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/RingSide-Replay-Attack/raw/main/RingSide%20Replay%20Attack_files/068-1024x576(1).png" alt="RingSide Replay Attack: SEED Recovery → Bitcoin wallet private key derivation and how 32-bit entropy instead of 256-bit led to the systematic compromise of crypto-asset funds"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->