<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Structural anomalies of base points in secpXXXk1 elliptic curves: Bitcoin cryptanalysis and practical modeling in Google Colab</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#structural-anomalies-of-base-points-in-secpxxxk1-elliptic-curves-bitcoin-cryptanalysis-and-practical-modeling-in-google-colab"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.google.com/url?q=https://cryptodeeptech.ru/author/cryptodeeptech/&amp;sa=D&amp;source=editors&amp;ust=1785081642483626&amp;usg=AOvVaw3A1zOJoaGXBaRiuN2ZrHYO">Crypto Deep Tech</a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image5.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image5.png" alt="Structural anomalies of base points in secpXXXk1 elliptic curves: Bitcoin cryptanalysis and practical modeling in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In this article, as a cryptanalysis of Bitcoin, we will analyze a computational scientific experiment that reproduces and extends&nbsp;<a href="https://www.google.com/url?q=https://gist.github.com/johnzweng/863f412689ee383cc41ac7c709ca662c&amp;sa=D&amp;source=editors&amp;ust=1785081642484212&amp;usg=AOvVaw2rLIj3-DlNNzJWJ5VoJwh-">the observation of John Zweng (2025)</a>&nbsp;regarding the generator points&nbsp;Gof the Koblitz curve family&nbsp;SEC 2 — secp160k1, secp192k1, secp224k1 и secp256k1.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A discovered pattern: for all Kobitz curves of prime order in the family,&nbsp;SEC 2 (secp160k1, secp192k1, secp224k1, secp256k1)the point obtained by “dividing” the generator &nbsp;G&nbsp;by&nbsp;2(multiplying by the inverse of 2 modulo the order of the subgroup &nbsp;n) has &nbsp;xan -coordinate of anomalously small bit length and contains a common 152-bit hexadecimal substring &nbsp;8ce563f89a0ed9414f5aa28ad0d96d6795f9c6. We provide a mathematical formalization of the operation, reproduce the calculations using open-source Python/SageMath scripts, discuss the historical opacity of the standard&nbsp;SEC 2, and—in separate sections—protocol implications for Bitcoin, including the principles of NUMS points, auditing secondary generators, and security&nbsp;ECDSA/Schnorr. Particular attention is given to practical scripts for Google Colab, which allow each researcher to independently verify the finding.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Johannes Zweng, known on&nbsp;<a href="https://www.google.com/url?q=https://github.com/johnzweng&amp;sa=D&amp;source=editors&amp;ust=1785081642486238&amp;usg=AOvVaw2hiP92RglXUZ8FNmjnoOpm">GitHub,</a>&nbsp;directly references a talk by cryptographer&nbsp;<a href="https://www.google.com/url?q=https://cseweb.ucsd.edu/~nadiah/&amp;sa=D&amp;source=editors&amp;ust=1785081642486541&amp;usg=AOvVaw1PrbrUwNOO-1ExTKeM-O3E">Nadia Heninger</a>&nbsp;in his archive , addressing the open questions of the origins of standard curves, as additional context for this anomaly.&nbsp;<a href="https://www.google.com/url?q=https://cseweb.ucsd.edu/~nadiah/&amp;sa=D&amp;source=editors&amp;ust=1785081642486896&amp;usg=AOvVaw0CEan6Q8JHtOjIR796c60g">Heninger</a>&nbsp;is a leading expert in the practical cryptanalysis of ECC/RSA implementations (notably, her work on attacks against weak randomness in key generation), and her focus on the topic underscores the significance of such archival findings for the academic cryptography community.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"width":"769px","height":"auto","sizeSlug":"large"} -->
<figure class="wp-block-image size-large is-resized"><img src="https://raw.githubusercontent.com/demining/Curve-Anomalies/main/images/image11.png" alt="" style="width:769px;height:auto"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://www.youtube.com/watch?v=NGLR2N4EK58">https://www.youtube.com/watch?v=NGLR2N4EK58</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DNGLR2N4EK58&amp;sa=D&amp;source=editors&amp;ust=1785081642487746&amp;usg=AOvVaw0rszGHJlOUF0lxLHvpXsYA">A video</a>&nbsp;of cryptographer&nbsp;<a href="https://www.google.com/url?q=https://cseweb.ucsd.edu/~nadiah/&amp;sa=D&amp;source=editors&amp;ust=1785081642487881&amp;usg=AOvVaw00_VnZXsLFu52XyyxcqNL6">Nadia Heninger,</a>&nbsp;co-authored by&nbsp;<a href="https://www.google.com/url?q=https://tscholl2.github.io/website/&amp;sa=D&amp;source=editors&amp;ust=1785081642488018&amp;usg=AOvVaw0PUa1Bsb8eDMjOjI-bf9Fl">Travis Scholl</a>&nbsp;and&nbsp;<a href="https://www.google.com/url?q=https://www.microsoft.com/en-us/research/people/danshu/publications/&amp;sa=D&amp;source=editors&amp;ust=1785081642488146&amp;usg=AOvVaw0l2zdhylCQ1TwjcDg-ehn_">Dan Shumow</a>&nbsp;, discussing the 152-bit hexadecimal substring&nbsp;8ce563f89a0ed9414f5aa28ad0d96d6795f9c6was presented at the Rump Session at the Crypto 2019 conference.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This refers to a strange structure discovered in the ECDSA algorithm during an analysis of the Bitcoin blockchain. They were looking for collisions&nbsp;nonce(of random nonces) and discovered the following:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>About 99% of the repeated nonce values ​​in the blockchain (which allow <a href="https://www.google.com/url?q=https://cryptou.ru/privkeyroot/privatekey&amp;sa=D&amp;source=editors&amp;ust=1785081642489062&amp;usg=AOvVaw0-RLrbfCt4Gx_e0nLhrNXL">the private key</a> to be calculated ) are equal to the value(n–1)/2, Wheren— the order of the elliptic curve.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If we multiply this value by the base point (generator) of the curve, we get Xa -coordinate that is only 166 bits long, while the standard length for the Bitcoin curve is 256 bits.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>When analyzing the entire family of Koblitz curves (secp) from Certicom, it turned out that the generator points in all of these curves have a common constant (the same substring 8ce563f89a0ed9414f5aa28ad0d96d6795f9c6), which differs only in a few high and low bits.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This structure appears to be an undocumented artifact of the process of generating the base points for these curves. Researchers found no evidence that this is a mathematical backdoor (it does not help solve the discrete logarithm problem), but it does shed light on how Certicom selected its curve generators in 1999, which is not officially documented.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image6.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image6.png" alt="Structural Anomalies of SecpXXXk1 Elliptic Curve Basepoints: Bitcoin Cryptanalysis and Practical Simulations in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Elliptic curve public-key cryptography (ECC) requires six domain parameters: the &nbsp;𝔽&nbsp;p&nbsp;field , the curve coefficients &nbsp;a and b&nbsp;, the subgroup order &nbsp;n&nbsp;, the cofactor &nbsp;h&nbsp; , and the generator point &nbsp;G = (G&nbsp;x&nbsp;, G&nbsp;y&nbsp;)&nbsp;. The SEC 2 standard (Standards for Efficient Cryptography Group, Certicom) specifies these parameters for the &nbsp;secpXXXk1&nbsp;family of Kobitz curves , of which &nbsp;secp256k1&nbsp; underlies Bitcoin, Ethereum, and many other blockchain protocols.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The key methodological issue raised by John Zweng is that &nbsp;the procedure for constructing point &nbsp;G&nbsp; in the SEC 2 specification is undocumented&nbsp;. Unlike “verifiably random” curves of class “r1” (secp256r1 and others), for which there is a public seed and SHA-1 algorithm to verify the absence of “backdoors,” there is no such procedure for Koblitz curves. This creates a zone of &nbsp;epistemic uncertainty&nbsp;, particularly important for Bitcoin, where the security of hundreds of billions of dollars’ worth of assets relies on these constants.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It is shown that the point H = G 2⁻¹ (mod n), which “cancels” the doubling operation, has an x-coordinate significantly shorter than the curve’s nominal bit length for all four curves and contains a common 152-bit hexadecimal substring &nbsp;8ce563f89a0ed9414f5aa28ad0d96d6795f9c6. The code of the analyzed&nbsp;<a href="https://www.google.com/url?q=https://bitcolab.ru/structural-anomaly-in-secpxxxk1-generator-points&amp;sa=D&amp;source=editors&amp;ust=1785081642493340&amp;usg=AOvVaw2YClyjl-UZxqY9PHPpm5dC">Google Colab</a>&nbsp;notebook is analyzed section by section, providing a mathematical interpretation, a statistical assessment of the probability of a random coincidence, and historical cryptanalytic context—from the DES S-box scandal to Dual_EC_DRBG and the nothing-up-my-sleeve (NUMS) principles.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://raw.githubusercontent.com/demining/Curve-Anomalies/refs/heads/main/images/image9.png" alt=""/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://www.youtube.com/watch?v=ytFVasVx6Ak">https://www.youtube.com/watch?v=ytFVasVx6Ak</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Practical Verification: Scripts for Google Colab (Python + SageMath)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#practical-verification-scripts-for-google-colab-python--sagemath"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To independently reproduce John Zweng’s results, we offer two scripts that can be run in the Google Colab environment. The first is in pure Python with a library &nbsp;<a href="https://www.google.com/url?q=https://cryptou.ru/privkeyroot/transaction&amp;sa=D&amp;source=editors&amp;ust=1785081642495141&amp;usg=AOvVaw3qJ66-ePsgLfGQ2SBYRNc5">ecdsa</a>&nbsp;(available in Colab without installation), and the second uses SageMath (requires installation, but provides more direct access to elliptic curve functions).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Script (Python + ecdsa library).&nbsp; This script calculates the &nbsp;H-&nbsp;point &nbsp;for secp256k1 and outputs its &nbsp;x&nbsp;-coordinate in hex, and also checks for the presence of a common substring.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p># Install the ecdsa library (if not already installed)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>!pip install ecdsa</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>from ecdsa import SECP256k1</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>from ecdsa.numbertheory import inverse_mod</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p># secp256k1 parameters</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>curve = SECP256k1.curve</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>G = SECP256k1.generator</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>n = SECP256k1.order</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p># Find the inverse of 2 modulo n</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>inv2 = inverse_mod(2, n)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p># Calculate H = G * inv2</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>H = G * inv2</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p># Get the x-coordinate in hexadecimal (without the 0x prefix)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>x_hex = hex(Hx())[2:]</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>print("x(H) = 0x" + x_hex)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>print("Bit length of x(H):", len(x_hex) * 4, "bits")</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p># General substring (152 bits = 38 hex characters)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>common = "8ce563f89a0ed9414f5aa28ad0d96d6795f9c6"</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>if common in x_hex:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&nbsp; &nbsp; print("✅ Common 152-bit substring DETECTED!")</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>else:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&nbsp; &nbsp; print("❌ Substring not found.")</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p># Extra: check that 2*H == G</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>twoH = H * 2</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>assert twoH == G, "Error: 2*H != G"</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>print("✓ Check: 2*H == G passed.")</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Execution result&nbsp; (for secp256k1): &nbsp;x(H) = 0x3b78ce563f89a0ed9414f5aa28ad0d96d6795f9c63, substring found, bit length ~166 bits.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Practical application in Bitcoin auditing.&nbsp; The proposed methodology (dividing the point by 2 and analyzing the bit length) can be integrated into tools for verifying new protocol constants. For example, when introducing secondary generators for confidential transactions, Pedersen commitments, or aggregated signatures (MuSig2, FROST), it is recommended to perform the “John Zweng test”—dividing by small numbers (2, 3, 5, 7) and checking for&nbsp;<a href="https://www.google.com/url?q=https://cryptodeeptech.ru/curve-anomalies&amp;sa=D&amp;source=editors&amp;ust=1785081642499570&amp;usg=AOvVaw0i1E7hA66OQW5GaVI7HdEy">abnormally</a>&nbsp;short coordinates, which is a heuristic indicator of an opaque or potentially compromised design.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://www.google.com/url?q=https://cryptodeeptech.ru/curve-anomalies&amp;sa=D&amp;source=editors&amp;ust=1785081642500090&amp;usg=AOvVaw2D1ydyneyLjKr969941SwA">The secp256k1 Anomaly:</a>&nbsp;The Hidden Structure of Koblitz Curves</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#the-secp256k1-anomalythe-hidden-structure-of-koblitz-curves"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The secp160k1, secp192k1, secp224k1, and secp256k1 curves belong to the Koblitz curve family standardized in &nbsp;Certicom’s&nbsp;SEC 2: Recommended Elliptic Curve Domain Parameters document. The secp256k1 curve has gained particular significance due to its use in Bitcoin, Ethereum, and dozens of other cryptocurrency protocols, where the generator G defines the entire&nbsp;<a href="https://www.google.com/url?q=https://cryptou.ru/privkeyroot/transaction&amp;sa=D&amp;source=editors&amp;ust=1785081642500877&amp;usg=AOvVaw3eOLFILEteesKy4uyJKUl8">ECDSA</a>&nbsp; public key space .</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image10.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image10.png" alt="Structural anomalies of base points in secpXXXk1 elliptic curves: Bitcoin cryptanalysis and practical modeling in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Screencast:&nbsp;<a href="https://www.google.com/url?q=https://youtu.be/44CG3WhovE8&amp;sa=D&amp;source=editors&amp;ust=1785081642501226&amp;usg=AOvVaw1_SlgQ5Ows-IgGOqm9BGOW">https://youtu.be/44CG3WhovE8</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Google Colab:&nbsp;<a href="https://www.google.com/url?q=https://colab.research.google.com/drive/1e42DLAfRqEwTmsTNwZW2DFNC21umz6d0?usp%3Dsharing&amp;sa=D&amp;source=editors&amp;ust=1785081642501596&amp;usg=AOvVaw2V0nd_DhSX8RtV6grxOI4Q">https://colab.research.google.com/drive/1e42DLAfRqEwTmsTNwZW2DFNC21umz6d0?usp=sharing</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The Google Colab notebook under review aims to test a conjecture first published by John Zweng in 2025 as a SageMath script: if a generator G is multiplied by the multiplicative inverse of 2 modulo the group order n, then the resulting point H = G 2⁻¹ has an anomalously short and structurally repeating x-coordinate.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A historical parallel.&nbsp; Such “hidden regularities” in cryptographic constants are nothing new. In 1975, during the standardization of DES, the cryptographic community accused the NSA of introducing “opaque” S-boxes; only 15 years later, after the discovery of differential cryptanalysis by Biham and Shamir, was it revealed that DES’s S-boxes had been specifically strengthened against this as-yet-unpublicized attack.&nbsp;<a href="https://www.google.com/url?q=https://cryptodeeptech.ru/curve-anomalies&amp;sa=D&amp;source=editors&amp;ust=1785081642502810&amp;usg=AOvVaw2s-Rc9fQhIVXuwzjHh5Cwj">The secpXXXk1 anomaly</a>&nbsp;is an example of the same phenomenon in reverse: a structure that appears suspicious but has not yet been proven to be vulnerable.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Shadow of Dual_EC_DRBG and the Mystery of the X-Coordinate in Cryptanalysis</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#the-shadow-of-dual_ec_drbg-and-the-mystery-of-the-x-coordinate-in-cryptanalysis"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The first cell in&nbsp;<a href="https://www.google.com/url?q=https://bitcolab.ru/structural-anomaly-in-secpxxxk1-generator-points&amp;sa=D&amp;source=editors&amp;ust=1785081642503537&amp;usg=AOvVaw1BbnV-GR7Z9EgojlY8VFmW">Google Colab</a>&nbsp;formulates a “key discovery”: for all four curves, the point H = G 2⁻¹ has an x-coordinate that is significantly shorter than the nominal curve size and contains a common 152-bit substring. In our research, we were forced not to acknowledge the existence of a “backdoor,” but to raise the question of the transparency of the parameter generation process used, among other things, by Bitcoin.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This formulation is consistent with the &nbsp;nothing-up-my-sleeve (NUMS)&nbsp;principle &nbsp;—the requirement that cryptographic constants be derived in a deterministic and verifiable manner that prevents the hidden selection of values ​​that are “convenient” for an attacker.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An example from the cryptanalysis archives.&nbsp; The most famous historical case of a violation of the NUMS principle is the &nbsp;Dual_EC_DRBG&nbsp;pseudorandom number generator , standardized by NIST in SP 800-90A. The constants P and Q, defining the generator’s elliptic curve, were proposed by the NSA without explanation of their origin.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Installing libraries (&nbsp;fastecdsa pandas)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#installing-libraries--fastecdsa-pandas"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>!pip install fastecdsa pandas</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The first code cell in&nbsp;<a href="https://www.google.com/url?q=https://bitcolab.ru/structural-anomaly-in-secpxxxk1-generator-points&amp;sa=D&amp;source=editors&amp;ust=1785081642505566&amp;usg=AOvVaw3bJMWp-jqqSDLoe98avbTf">Google Colab</a>&nbsp;installs a library &nbsp;fastecdsathat provides primitives for elliptic curve arithmetic and &nbsp;pandas&nbsp;for tabular presentation of results. The output reports a package version conflict (&nbsp;pandas 3.0.3&nbsp;versus the one required by Colab &nbsp;pandas&lt;2.2.2)—a dependency issue typical for Colab environments that doesn’t affect the mathematical results but requires attention when reproducing the experiment.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Diagnosing a Curve Import Failure in the &nbsp;Enigma Cipher</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#diagnosing-a-curve-import-failure-in-the-enigma-cipher"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The second markdown cell in Google Colab describes the diagnosed problem: direct import of objects &nbsp;secp160k1, &nbsp;secp192k1, &nbsp;secp224k1, &nbsp;secp256k1&nbsp;from &nbsp;fastecdsa.curve&nbsp;is unstable between</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The solution is to explicitly construct curve objects from the published SEC 2 domain parameters (p, a, b, order q, generator coordinates gx, gy), which makes the calculation independent of the internal structure of a particular library version.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A historical parallel.&nbsp; The cryptographic code’s dependence on “magic” library constants is reminiscent of the &nbsp;Enigma&nbsp;cipher : the capture of German switching tables and rotor settings (for example, during the Polish Biuro Szyfrów and later Bletchley Park operations) allowed the Allies to reconstruct “system parameters” directly, rather than relying on assumptions about its internal structure—methodologically, this is the same as explicitly specifying domain parameters instead of relying on undocumented imports.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image8.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image8.png" alt="Structural Anomalies of SecpXXXk1 Elliptic Curve Basepoints: Bitcoin Cryptanalysis and Practical Simulations in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Initializing Koblitz Curve Parameters in Google Colab</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#initializing-koblitz-curve-parameters-in-google-colab"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The key cell in Google Colab defines a dictionary &nbsp;CURVE_PARAMS&nbsp;with parameters p, a, b, q (subgroup order), gx, and gy for all four Koblitz curves, and a function &nbsp;build_curve()that creates &nbsp;Curve&nbsp;a fastecdsa library object. It also defines a constant &nbsp;COMMON_SUBSTRING = "8ce563f89a0ed9414f5aa28ad0d96d6795f9c6"&nbsp;—the desired 152-bit substring, around which all subsequent analysis is built.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It is important to note the mathematical meaning of the b values: for secp160k1 b=7, secp192k1 b=3, secp224k1 b=5, secp256k1 b=7 these are simple “short” coefficients of the Weierstrass curve y² = x³ + b, which in itself corresponds to the NUMS practice for the curve parameter, but does not extend to the choice of the generator G.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Analysis of bit lengths of secp curve generators</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#analysis-of-bit-lengths-of-secp-curve-generators"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.google.com/url?q=https://bitcolab.ru/structural-anomaly-in-secpxxxk1-generator-points&amp;sa=D&amp;source=editors&amp;ust=1785081642510036&amp;usg=AOvVaw3WePHi9qoKTT6_vIbUZD7u">A Google Colab</a>&nbsp;cell generates a pandas table with the bit length of the x and y coordinates of the generator and the group order for each curve. The result confirms the expected sizes (secp256k1: order 256 bits, gx 255 bits, gy 255 bits), demonstrating that the generators G themselves appear “random”—the&nbsp;<a href="https://www.google.com/url?q=https://cryptodeeptech.ru/curve-anomalies&amp;sa=D&amp;source=editors&amp;ust=1785081642510633&amp;usg=AOvVaw0TZFv5GsOq7ttBAQHcFv9I">anomaly</a>&nbsp;only appears after dividing by 2.</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><td>Curve</td><td>Bit length Gx</td><td>Bit length Gy</td><td>Bit length of order n</td></tr><tr><td>secp160k1</td><td>158</td><td>160</td><td>161</td></tr><tr><td>secp192k1</td><td>160</td><td>192</td><td>192</td></tr><tr><td>secp224k1</td><td>224</td><td>191</td><td>221</td></tr><tr><td>secp256k1</td><td>255</td><td>255</td><td>256</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Dividing Point G: Calculating the Modular Inverse and Point H</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#dividing-point-g-calculating-the-modular-inverse-and-point-h"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The functions &nbsp;inv_mod(a, p)&nbsp;(implemented via &nbsp;pow(a, -1, p), an efficient extended Euclidean/Fermat algorithm) &nbsp;compute_H(curve_obj, order)&nbsp;implement the central operation of the experiment:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>inv2 = inv_mod(2, order)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>H = G * inv2 # H = G * 2⁻¹ mod n</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>x_hex = hex(Hx)[2:]</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Mathematically, this is equivalent to finding a point H such that 2H = G, that is, “doubling in reverse” the operation of doubling a point on a curve. If the original G was obtained as a doubling of some “beautiful” point H₀ (2H₀ = G), then the reconstructed H will match H₀ and will bear traces of this simpler original form—a short bit length and a repeating substring.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An example from the cryptanalysis archives.&nbsp; A similar “reversal of construction” technique was used in Bill Tutte’s 1942 cracking &nbsp;of the Lorenz SZ40/42 cipher machine&nbsp; : by analyzing the keystream structure, Bletchley Park cryptanalysts reconstructed the internal generation logic without having physical access to the machine—that is, they “undid” the unknown transformation based on observable artifacts, just as this Google Colab notebook reverses the doubling of the dot to recover the generator’s hidden preimage.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image13.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image13.png" alt="Structural Anomalies of SecpXXXk1 Elliptic Curve Basepoints: Bitcoin Cryptanalysis and Practical Simulations in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Vulnerability of Off-Curve Points in ECDH/ECDSA: Explicit Construction of Point G</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#vulnerability-of-off-curve-points-in-ecdhecdsa-explicit-construction-of-point-g"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The refined version &nbsp;compute_H()&nbsp;constructs the generator explicitly through &nbsp;Point(curve_obj.gx, curve_obj.gy, curve_obj)&nbsp;and checks &nbsp;G.on_curve&nbsp;H before computing it—a necessary security measure against “invalid curve point” attacks, a class of attacks on&nbsp;<a href="https://www.google.com/url?q=https://cryptou.ru/privkeyroot/transaction&amp;sa=D&amp;source=editors&amp;ust=1785081642518080&amp;usg=AOvVaw0BE0jkrgJ4dTmA32R5UCHk">ECDH/ECDSA</a>&nbsp;implementations where a slipped off-curve point reveals a secret scalar via the Chinese Remainder Theorem (Antipà/Biehl/Meyer/Müller attack, 2003).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A historical parallel.&nbsp; Invalid-curve attacks are not an abstraction: in 2015, researchers demonstrated practical extraction of TLS server &nbsp;<a href="https://www.google.com/url?q=https://cryptou.ru/privkeyroot/privatekey&amp;sa=D&amp;source=editors&amp;ust=1785081642518826&amp;usg=AOvVaw3z7ltneLjqizmqQ2QUnpW5">private keys</a>on_curve&nbsp;by sending points not lying on the claimed curve, exploiting the lack of verification &nbsp;in some OpenSSL and Bouncy Castle implementations. The explicit verification in the&nbsp;<a href="https://www.google.com/url?q=https://bitcolab.ru/structural-anomaly-in-secpxxxk1-generator-points&amp;sa=D&amp;source=editors&amp;ust=1785081642519294&amp;usg=AOvVaw3W0QZOqav-7IWpRrrRhqCb">Google Colab</a>&nbsp;notebook is a direct methodological echo of this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Base Point Anomaly Specificity: Testing Small Divisors 3, 5, 7</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#base-point-anomaly-specificity-testing-small-divisors-3-5-7"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The function &nbsp;test_small_divisors()&nbsp;generalizes the experiment by calculating G d⁻¹ for d = 3, 5, 7 and checking for the same common substring and anomalously short bit length. The result for secp256k1 shows the full x-coordinate length (256 bits) without a matching substring for all three divisors—that is, the anomaly is strictly specific to the divisor 2, strengthening the hypothesis that it originates precisely as “G = 2 H₀” when choosing the base point.</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><tbody><tr><td>Divisor d</td><td>Bit length x(G d⁻¹)</td><td>Common substring</td></tr><tr><td>3</td><td>256</td><td>No</td></tr><tr><td>5</td><td>256</td><td>No</td></tr><tr><td>7</td><td>256</td><td>No</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Mathematics versus Randomness: Curve Generation Analysis and Statistical Interpretation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#mathematics-versus-randomness-curve-generation-analysis-and-statistical-interpretation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The final section of the Google Colab notebook provides a quantitative estimate: for a randomly chosen 256-bit curve generator, the probability that the x-coordinate H = G 2⁻¹ has a bit length of 166 bits or less (i.e., at least the top 90 bits are missing) is about 2⁻&nbsp;90&nbsp;—an astronomically small value. The coincidence of this pattern across four independently standardized curves, united by a common 152-bit substring, statistically rules out randomness and points to a single, deterministic method for generating base points.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Formally, if the event “short x-coordinate H” is independent and equally probable for each curve with probability \(p \approx 2⁻&nbsp;90&nbsp;\), then the probability of observing such a pattern in all four curves simultaneously, and even with an identical substring, is estimated as \(p^4\) in the most conservative approximation – a value that has no practical chance of occurring by chance.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An example from the cryptanalysis archives.&nbsp; Similar statistical reasoning underlay the exposure of a weakness in the &nbsp;Debian OpenSSL PRNG generator (2006–2008)&nbsp;: the discovery that the seed pool entropy had been reduced to 15 bits due to an accidentally deleted line of code was proven precisely through the statistical impossibility of the observed key distribution under truly random generation—the vulnerability affected thousands of SSH keys and SSL certificates worldwide.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image14.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image14.png" alt="Structural Anomalies of SecpXXXk1 Elliptic Curve Basepoints: Bitcoin Cryptanalysis and Practical Simulations in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Conclusions for Bitcoin and cryptography in general</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#conclusions-for-bitcoin-and-cryptography-in-general"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>They highlight the fundamental difference between secp*r1 curves (verifiably random, whose parameters are derived from the hash seed using a transparent algorithm according to X9.62/FIPS 186) and Koblitz secp*k1 curves, for which neither the seed nor the base point generation algorithm is publicly documented. This does not imply a mathematical vulnerability in the&nbsp;<a href="https://www.google.com/url?q=https://cryptou.ru/privkeyroot/transaction&amp;sa=D&amp;source=editors&amp;ust=1785081642526112&amp;usg=AOvVaw3A9JdrcoaehLbkrBUsWxjZ">ECDSA/Schnorr</a>&nbsp;scheme itself —it is generally recognized that the choice of a specific generator G among generators of a prime order group does not affect the security of schemes using a single generator. However, this finding strengthens the argument for strict application of NUMS principles when introducing new constants—for example, additional generators for Taproot commitments or confidential transactions, where the relationship between multiple points is already critical to security.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An example from the cryptanalysis archives.&nbsp; It was precisely because of such concerns that the community developed alternative curves with fully documented, deterministic origins: &nbsp;Daniel Bernstein’s&nbsp;Curve25519&nbsp; (2005) and &nbsp;the NUMS curves&nbsp;family &nbsp;(IETF draft-black-numscurves, 2014) explicitly document the algorithm for choosing each constant, eliminating the very possibility of a “hidden” choice similar to that found in secpXXXk1.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Historical and standardization context</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#historical-and-standardization-context"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The SEC 2 specification for Koblitz curves states only that the parameters were “chosen by iterative trials that admit efficiently computable endomorphisms until a curve of prime order was found.” This description addresses the choice of &nbsp;p&nbsp; and &nbsp;b&nbsp;, but &nbsp;does not explain the algorithm for choosing &nbsp;G&nbsp;. By comparison, NIST P-256 curves (secp256r1) use a public seed and SHA-1, which allows for verification that they are verifiably random. The lack of such a procedure for secp256k1 means that the Bitcoin community is forced to trust the Certicom developers, many of whom are no longer available for comment.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>John Zweng’s discovery confirms that &nbsp;G&nbsp; was not chosen randomly: the common substring and short coordinate length indicate a deterministic process, possibly using a hash function (e.g., SHA-1), but the exact algorithm remains unknown. This raises serious questions about the extent to which secp256k1’s parameters adhere to the “nothing-up-my-sleeve” (NUMS) principle.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image2.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image2.png" alt="Structural Anomalies of SecpXXXk1 Elliptic Curve Basepoints: Bitcoin Cryptanalysis and Practical Simulations in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Cryptographic Consequences: Vulnerability or Artifact?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#cryptographic-consequences-vulnerability-or-artifact"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It’s important to emphasize that the mere presence of a common substring &nbsp;does not pose a vulnerability&nbsp; for protocols using a single generator &nbsp;G&nbsp; (ECDSA, Schnorr). The security of ECDLP in a cyclic group of prime order does not depend on the choice of generator element—any generator is equivalent to any other up to a known scalar factor.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>However, there are &nbsp;three aspects&nbsp;that give the discovery cryptanalytic significance:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Epistemic:  documenting the opacity of standardization, which is important for assessing trust assumptions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Methodological:  The proposed test is a universal tool for auditing ECC parameters.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Practical for protocol extensions:  if Bitcoin introduces  a second generator  H in the future  with an unknown ratio to  G  (for example, for confidential transactions), then the opaque construction  of H  could allow the parameter creator to calculate the discrete logarithm  log G  H , which in Pedersen-type commit schemes is equivalent to the possibility of unlimited supply. This is why BIP-341 (Taproot) introduced a strict requirement for NUMS points with a fully documented derivation algorithm.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Conclusion for Bitcoin developers:&nbsp; John Zweng’s precedent serves as empirical justification for the need &nbsp;for verifiable randomness&nbsp; when choosing any new cryptographic constants in the Bitcoin ecosystem. Any proposals for adding additional points should be accompanied by a publicly available, reproducible script similar to those presented above and pass the “anomaly test” (small bit length of the coordinates when dividing by small numbers).</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image12.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image12.png" alt="Structural Anomalies of SecpXXXk1 Elliptic Curve Basepoints: Bitcoin Cryptanalysis and Practical Simulations in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Formal statement of the hypothesis and the randomness model</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#formal-statement-of-the-hypothesis-and-the-randomness-model"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In this section, we formalize a model for estimating the randomness of base points in curves of the secp*k1 family and consider issues of choosing generators.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A heart-wrenching question arises: how correct is the null hypothesis of the randomness of the x-coordinate of the point H = G 2⁻¹ mod n for standardized generators of the secp*k1 family? The answer emerges from the explanation that the null hypothesis assumes that the generator G is chosen absolutely randomly from all points on the curve. With such a choice, the point H = G 2⁻¹ should also be pseudorandom, and its x-coordinate should have a length close to the order of the curve (for example, 256 bits for secp256k1). The discovery that the x-coordinate of the point H is limited to approximately 166 bits and contains a fixed 152-bit substring for four different curves makes the null hypothesis statistically untenable. The probability of such an event for one curve is estimated as 2⁻⁹⁰, and for four, as 2⁻³⁶⁰. This clearly indicates a deterministic selection process.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Our cryptanalytic observations also raise the question of whether it is possible to reconstruct a plausible deterministic algorithm for selecting G that explains the observed structure better than a random selection model. Ultimately, we responded positively to the problem and question posed, since the structure directly points to an algorithm in which a certain “base” point H₀ is first deterministically selected. This point H₀ is constructed by appending a variable prefix (depending on the specific curve) to a fixed 152-bit string&nbsp;(8ce563f89a0ed9414f5aa28ad0d96d6795f9c6&nbsp;). The resulting point H₀ is then doubled on the curve: G = 2H₀. G becomes the published standard generator, obscuring the simple structure of H₀ until someone computes G 2⁻¹.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We’ve certainly considered how the secp*k1 case differs from the verifiably random approach for other standard curves and from later NUMS practices. Also, of course, all secp*r1 series curves (e.g., secp256r1) were generated using a verifiably random algorithm: the parameters and base point were obtained by hashing a publicly known seed value (in accordance with the X9.62/FIPS 186 standards). This proves that the parameters were not chosen to create a backdoor. For secp*k1, neither the seed nor the generation algorithm G have ever been published. Modern NUMS (Nothing Up My Sleeve) practices require that constants be derived from fundamental numbers (e.g., digits of pi) or transparent hash functions. The lack of such a justification for G in secp*k1 is a deviation from the NUMS ideal.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image3.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image3.png" alt="Structural Anomalies of SecpXXXk1 Elliptic Curve Basepoints: Bitcoin Cryptanalysis and Practical Simulations in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Statistical limitations and multiple comparisons</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#statistical-limitations-and-multiple-comparisons"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Anomaly analysis often suffers from the multiple comparison problem (p-hacking), but in this case the results are highly robust.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To do this, we raised one of the most important questions: how does the statistical significance of a result change when accounting for multiple comparisons and post-hoc feature selection? Ultimately, we found that even after adjusting for multiple comparisons (for example, if the researcher tested multiplication by various small constants (2, 3, 4, 5…) and different substrings), the initial probability of 2⁻³⁶⁰ (for four curves) is so small that Bonferroni corrections or similar methods cannot reduce the result to statistical insignificance. Post-hoc feature selection could explain a random coincidence with a probability of 10⁻³ or 10⁻⁶, but not astronomical values ​​on the order of 10⁻¹⁰⁰. This confirms that the anomaly is an intentional generation artifact.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Delving deeper into the cryptanalytic processes, another important question emerged: is the discovered pattern a property of the divisor of 2 specifically, or does it manifest itself in a broader family of invertible scalars with different structural metrics? The answer was clear: a computational experiment showed that dividing by 3, 5, and 7 (calculating G d⁻¹) for secp256k1 yields points with a full 256-bit x-coordinate without any common substrings.&nbsp;<a href="https://www.google.com/url?q=https://cryptodeeptech.ru/curve-anomalies&amp;sa=D&amp;source=editors&amp;ust=1785081642539310&amp;usg=AOvVaw1GS_Mdcc3XT47i9l1SQNBV">The anomaly</a>&nbsp;is strictly specific to the divisor of 2 (the undoubling operation). This means that the pattern is not a general structural property of the group, but a direct consequence of a specific algebraic operation (G = 2H₀) used by the creators in searching for the generator.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image4.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image4.png" alt="Structural Anomalies of SecpXXXk1 Elliptic Curve Basepoints: Bitcoin Cryptanalysis and Practical Simulations in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Cryptographic implications and limits of interpretation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#cryptographic-implications-and-limits-of-interpretation"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The identified&nbsp;<a href="https://www.google.com/url?q=https://cryptodeeptech.ru/curve-anomalies&amp;sa=D&amp;source=editors&amp;ust=1785081642540274&amp;usg=AOvVaw2kwdIPOcTQRP9tfoJjHEez">anomaly</a>&nbsp;raises important trust issues, but does not necessarily indicate vulnerabilities in current protocols.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In our cryptanalytic research, we asked whether the observed structure has practical implications for the security of ECDSA/Schnorr, or whether its significance is limited to issues of standardization transparency and cryptographic trust. Ultimately, we concluded that for&nbsp;<a href="https://www.google.com/url?q=https://cryptou.ru/privkeyroot/transaction&amp;sa=D&amp;source=editors&amp;ust=1785081642540939&amp;usg=AOvVaw10DI2Uz4OS7CgzvO5HmniA">the ECDSA</a>&nbsp;and Schnorr protocols using a single generator G, the algebraic structure of this generator (for example, knowledge that G = 2H₀) does not reduce cryptographic security. The discrete logarithm problem remains difficult. However, this discovery raises serious questions about cryptographic hygiene and trust. The undocumented structure of constants has historically been associated with potential backdoors (as in the case of Dual_EC_DRBG), highlighting the need for maximum transparency.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What criteria for the origin of basepoints should be considered sufficient for modern open parameter standards? Our research has shown that modern standards must require a fully transparent, repeatable process (NUMS). Basepoint generation must be accomplished by applying a one-way function (e.g., SHA-256 or SHA-3) to a publicly known, demonstrably neutral string (e.g., “Bitcoin secp256k1 basepoint generation”). The algorithm must deterministically map this hash to a valid curve point (e.g., the hash-to-curve method), eliminating any possibility for the creator to secretly select a point with a known discrete logarithm relative to another point.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Should similar auditing be applied to all public generators in Bitcoin protocols and related systems, especially where more than one base point is used? In systems using multiple generators (e.g., protocols with Pedersen commitments, Confidential Transactions, and Taproot), it is critical that the discrete logarithm of one generator relative to another be unknown (the NUMS principle for multiple generators). Lack of transparency in the origin of such base points could allow the creator to forge commitments or violate privacy. Auditing such structures is essential to ensure trust in complex cryptographic protocols.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image1.png" alt="Structural Anomalies of SecpXXXk1 Elliptic Curve Basepoints: Bitcoin Cryptanalysis and Practical Simulations in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Final conclusion:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#final-conclusion"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The deconstructed Google Colab notebook is a reproducible computational experiment that, using explicit and validated elliptic curve construction, demonstrates statistically significant structural regularity in the generators of four standardized Koblitz curves. While this discovery does not directly compromise the cryptographic strength of Bitcoin’s ECDSA, it raises a fundamental question about trust in the process of standardizing cryptographic parameters—a question that has historically arisen with DES, Dual_EC_DRBG, and other instances where the lack of transparency was later revealed to be either a warning sign or, as in the case of DES, a hidden strengthening recognized only decades later.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The conducted analysis of the computational experiment irrefutably proves that the base points/generators in the secp*k1 family of curves, including the secp256k1 widely used in cryptocurrencies, were not generated randomly. The statistical probability of the discovered structural pattern—a bit length deficit and the presence of a common 152-bit constant when the generator doubling operation is canceled—is negligible, ruling out the possibility of a random coincidence. The existence of a deterministic generation algorithm, hidden from the public, contradicts modern standards of open cryptographic parameters and the NUMS (Nothing Up My Sleeve) paradigm.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Although this&nbsp;<a href="https://www.google.com/url?q=https://cryptodeeptech.ru/curve-anomalies&amp;sa=D&amp;source=editors&amp;ust=1785081642545835&amp;usg=AOvVaw2TOsXQ_5lQsxsctxeUa1hz">structural anomaly</a>&nbsp;does not directly compromise the mathematical security of the ECDSA and Schnorr protocols, which use a single generator, it raises critical questions about trust in the standardization process. In the context of complex cryptographic systems requiring multiple generators with mutually unknown discrete logarithms, the opacity of base point selection becomes an unacceptable risk. Further development of cryptographic standards must rely uncompromisingly on fully transparent, verifiable parameter generation methods that eliminate any possibility of covert manipulation by their creators.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">📚 &nbsp;Huge thanks to:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Curve-Anomalies/blob/main/README.md#-huge-thanks-to"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"start":1} -->
<ol start="1" class="wp-block-list"><!-- wp:list-item -->
<li>Standards for Efficient Cryptography Group (SECG). SEC 2: Recommended Elliptic Curve Domain Parameters. Certicom Research.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Zweng, John.  The mystery of the generation points of the secpXXXk1 curves . GitHub Gist, 2025. URL:  <a href="https://www.google.com/url?q=https://gist.github.com/johnzweng/863f412689ee383cc41ac7c709ca662c&amp;sa=D&amp;source=editors&amp;ust=1785081642547662&amp;usg=AOvVaw1q65rp2xaJ90LmAQT6CZ4O">https://gist.github.com/johnzweng/863f412689ee383cc41ac7c709ca662c</a> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Coppersmith, D. (1994). The Data Encryption Standard (DES) and its strength against attacks. IBM Journal of Research and Development.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Nothing-up-my-sleeve number. Wikipedia.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Green, M.; Bernstein, DJ et al. Analyzes of the Dual_EC_DRBG backdoor (2013–2014); NIST SP 800-90A withdrawal notices.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Antipa, A.; Brown, D.; Menezes, A.; Struik, R.; Vanstone, S. (2003). Validation of elliptic curve public keys. PKC 2003; invalid-curve attack disclosures (2015).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Debian OpenSSL predictable PRNG vulnerability (CVE-2008-0166), Debian Security Advisory.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>ANSI X9.62 / FIPS 186-4 verifiably random elliptic curve parameter generation procedure.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Bernstein, Daniel J.  Curve25519: new Diffie-Hellman speed records . Public-Key Cryptography (PKC) 2006, Lecture Notes in Computer Science, vol 3958. Springer, 2006.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Wuille, Pieter, Nick, Jonas, and Ruffing, Tim.  BIP 341: Taproot: SegWit version 1 spending rules . Bitcoin Improvement Proposals, 2020. URL:  <a href="https://www.google.com/url?q=https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki&amp;sa=D&amp;source=editors&amp;ust=1785081642549706&amp;usg=AOvVaw1v1K1Dq3hHwsudiOYcGAgP">https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki</a> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Certicom Research.  SEC 2: Recommended Elliptic Curve Domain Parameters , Version 2.0. Standards for Efficient Cryptography Group (SECG), 2010. URL:  <a href="https://www.google.com/url?q=https://www.secg.org/sec2-v2.pdf&amp;sa=D&amp;source=editors&amp;ust=1785081642550212&amp;usg=AOvVaw37cgBCn9OJj_nyB97h_joB">https://www.secg.org/sec2-v2.pdf</a> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Brown, Daniel R.L.  SEC 1: Elliptic Curve Cryptography , Version 2.0. Standards for Efficient Cryptography Group (SECG), 2009. URL:  <a href="https://www.google.com/url?q=https://www.secg.org/sec1-v2.pdf&amp;sa=D&amp;source=editors&amp;ust=1785081642550667&amp;usg=AOvVaw3T1oYxGJI1iq6TYV9s57g5">https://www.secg.org/sec1-v2.pdf</a> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Bernstein, Daniel J.  Curve25519: new Diffie-Hellman speed records . Public-Key Cryptography (PKC) 2006, Lecture Notes in Computer Science, vol 3958. Springer, 2006.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Presentation at the <a href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DNGLR2N4EK58&amp;sa=D&amp;source=editors&amp;ust=1785081642551185&amp;usg=AOvVaw16M1UjCcA_Du-5JabnTMeU">Crypto 2019</a> rump session on work of <a href="https://www.google.com/url?q=https://cseweb.ucsd.edu/~nadiah/&amp;sa=D&amp;source=editors&amp;ust=1785081642551361&amp;usg=AOvVaw08txr6Fn6ioXbpMzKjXe6n">Nadia Heninger</a> , Travis Scholl, Dan Shumow (The IACR is the International Association for Cryptologic Research, online at <a href="https://www.google.com/url?q=http://www.iacr.org/&amp;sa=D&amp;source=editors&amp;ust=1785081642551782&amp;usg=AOvVaw0cGGjrQJkI5n70rphfhLGn">http://www.iacr.org</a> )</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image7.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image7.png" alt="Structural anomalies of base points in secpXXXk1 elliptic curves: Bitcoin cryptanalysis and practical modeling in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This material was created for the &nbsp;<a href="https://www.google.com/url?q=https://cryptodeeptech.ru/&amp;sa=D&amp;source=editors&amp;ust=1785081642552423&amp;usg=AOvVaw1J8UgR8gdACxnDUHfxQLJl">CRYPTO DEEP TECH</a>&nbsp;portal &nbsp;to ensure financial data security and elliptic curve cryptography &nbsp;<a href="https://www.google.com/url?q=https://www.youtube.com/@cryptodeeptech&amp;sa=D&amp;source=editors&amp;ust=1785081642552898&amp;usg=AOvVaw1xNQY9V6gsVbzsKObM2L2R">(secp256k1) against weak&nbsp;</a><a href="https://www.google.com/url?q=https://github.com/demining/CryptoDeepTools&amp;sa=D&amp;source=editors&amp;ust=1785081642553071&amp;usg=AOvVaw1zE2uKj6mw8LvvQgG8n5g7">ECDSA</a>&nbsp; signatures &nbsp; in the &nbsp;<a href="https://www.google.com/url?q=https://t.me/cryptodeeptech&amp;sa=D&amp;source=editors&amp;ust=1785081642553410&amp;usg=AOvVaw2G_9e-ZG5X83JPpn258LvA">BITCOIN</a>&nbsp;cryptocurrency . The software developers are not responsible for the use of this material.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a href="https://www.google.com/url?q=https://github.com/demining/CryptoDeepTools/tree/main/51CurveAnomalies&amp;sa=D&amp;source=editors&amp;ust=1785081642554108&amp;usg=AOvVaw2S3XL7INVFR5PJCzLbFs16">Source code</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.google.com/url?q=https://bitcolab.ru/structural-anomaly-in-secpxxxk1-generator-points&amp;sa=D&amp;source=editors&amp;ust=1785081642554441&amp;usg=AOvVaw32tbw4D1RWrmEONbLxB1tv">Google Colab</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.google.com/url?q=https://t.me/cryptodeeptech&amp;sa=D&amp;source=editors&amp;ust=1785081642554782&amp;usg=AOvVaw2KMoFAVJ_P1UODT-KsL9h-">Telegram: https://t.me/cryptodeeptech</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.google.com/url?q=https://youtu.be/ytFVasVx6Ak&amp;sa=D&amp;source=editors&amp;ust=1785081642555123&amp;usg=AOvVaw0cr81A4p4-Xl7mtY__613d">Video material: https://youtu.be/ytFVasVx6Ak</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.google.com/url?q=https://dzen.ru/video/watch/6a660f77a52c4438aad88da8&amp;sa=D&amp;source=editors&amp;ust=1785081642555615&amp;usg=AOvVaw0p96T8vE1jdLkvEIOUpDf7">Video tutorial: https://dzen.ru/video/watch/6a660f77a52c4438aad88da8</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.google.com/url?q=https://cryptodeeptech.ru/curve-anomalies&amp;sa=D&amp;source=editors&amp;ust=1785081642555989&amp;usg=AOvVaw1um-3ZbHfxQJ9hsq-fMPwQ">Source: https://cryptodeeptech.ru/curve-anomalies</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Curve-Anomalies/blob/main/images/image5.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Curve-Anomalies/raw/main/images/image5.png" alt="Structural anomalies of base points in secpXXXk1 elliptic curves: Bitcoin cryptanalysis and practical modeling in Google Colab" title=""/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>&nbsp;<a href="https://www.google.com/url?q=https://cryptodeeptech.ru/category/cryptanalysis/&amp;sa=D&amp;source=editors&amp;ust=1785081642556641&amp;usg=AOvVaw3Vs3JRZNqDWppAUjuBSAI6">Cryptanalysis</a></p>
<!-- /wp:paragraph -->