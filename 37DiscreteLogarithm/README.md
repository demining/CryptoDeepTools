<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/GOLD1031B-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/GOLD1031B-1024x576.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In early 2025, the rise in the rate of popular cryptocurrencies had a significant impact on financial transactions. Despite their widespread use and apparent security, these systems remain vulnerable. One of the main problems remains the recovery of lost cryptocurrency wallets and private keys, which can be done using complex mathematical algorithms.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In this article, we will explore methods for solving the discrete logarithm problem and ways to recover lost Bitcoin wallets, focusing on the Ricci Flow algorithm and the Hidden Number Problem for extracting private keys from vulnerable transactions using ECDSA. We will also discuss how modern cryptocurrencies such as Bitcoin and Ethereum rely on complex mathematical foundations that provide security and anonymity, but are susceptible to exploitation due to various vulnerabilities.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>The Role of Discrete Logarithms in Recovering Lost Cryptocurrency Wallets and Extracting Private Keys</strong>&nbsp;.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://en.wikipedia.org/wiki/Discrete_logarithm">Discrete logarithm</a></strong>&nbsp;is a mathematical problem that consists of finding an integer&nbsp;<strong><em><code>x</code></em></strong>&nbsp;satisfying the equation&nbsp;<strong><code><em>a=b^x</em></code></strong>&nbsp;in some finite group. The order of the group of points on this curve is an important parameter determining the cryptographic strength of the&nbsp;<strong><code><em>secp256k1</em></code></strong>&nbsp;elliptic curve system over the field&nbsp;<strong><em><code>GF(p)</code></em></strong>, where&nbsp;<strong><code><em>p=2^256−2^32−2^9−2^8−2^7−2^6−2^4−1</em></code></strong>. For example, if we know&nbsp;<strong><em><code>a</code></em></strong>&nbsp;and&nbsp;<strong><em><code>b</code></em></strong>, we need to find&nbsp;<strong><em><code>x</code></em></strong>, the private key to a Bitcoin wallet. This problem is especially important in cryptography, since it underlies many cryptographic algorithms, such as public key exchange. Modern discrete logarithm algorithms have very high computational power, which allows these algorithms to be used in practice.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s look at the process of recovering a private key using&nbsp;<strong><a href="https://dockeyhunt.com/dockeyhunt-discrete-logarithm/">Dockeyhunt Discrete Logarithm</a></strong><strong>&nbsp;software and DarkSignature</strong>&nbsp;tool&nbsp;to generate fake transaction data.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>First, we will enter the Bitcoin wallet address:&nbsp;<strong><a href="https://btc1.trezor.io/address/1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS">1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</a></strong>&nbsp;for the amount of:&nbsp;<strong><a href="https://btc1.trezor.io/address/1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS">165.10252195 BTC</a></strong>&nbsp;and get its public key. Then, using&nbsp;<strong>DarkSignature</strong>&nbsp;, we will create fake values ​​for transactions, which will allow us to analyze and manipulate the signature data of the ECDSA algorithm. Finally, we will apply mathematical analysis through the&nbsp;<strong><a href="https://perelmanwork.com/">Perelman Work</a></strong>&nbsp;software to solve the discrete logarithm and get the private key to the Bitcoin wallet.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This article is intended not only for cryptography and mathematics experts, but also for anyone who wants to understand how mathematical methods can be used to solve real-world cryptanalysis problems using various cryptocurrencies.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=i9KYih_ffr8"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1.png" alt="Discrete Logarithms"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>First, we need to run the&nbsp;<a href="https://dockeyhunt.com/dockeyhunt-discrete-logarithm"><strong>Dockeyhunt Discrete Logarithm</strong></a>&nbsp;software and&nbsp;<code><strong>"Input date"</strong></code>enter the Bitcoin Address&nbsp;<a href="https://btc1.trezor.io/address/1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS"><strong>1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</strong></a>&nbsp;in the field and get the public key of the wallet:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>04e87e83f871df1439b7873b4ae449d15306cafc53e03a06fffb534b3bf25b58d8edca74b0faf5cf8c3aed6cad2bd79a7bce92ab53e07440d4590cbf31286d9335</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1-1024x573.png" target="_blank" rel="noreferrer noopener"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1-1024x573.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1-1024x573.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em><a href="https://youtu.be/ErjCph1mI9Y?t=63">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong>Let’s use the DarkSignature</strong>&nbsp;tool to get fake&nbsp;<strong>R, S, Z</strong>&nbsp;values&nbsp;​​for the ECDSA algorithm transaction. In the field,&nbsp;<code>"Input date"</code>enter the public key of the Bitcoin Address and get the values&nbsp;<strong>R, S, Z</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><code>04e87e83f871df1439b7873b4ae449d15306cafc53e03a06fffb534b3bf25b58d8edca74b0faf5cf8c3aed6cad2bd79a7bce92ab53e07440d4590cbf31286d9335</code></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Result:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>1111,947d6fb75033cc3e342c8538a350e9058134b2a1ae01a7c50fc52b1f56c9169c,5b3ec0d72a2368cdd48c17ff095ab1ab0b9824e010883539cbeb18141de6384b,c7ac826c5a8397c0de993b2d8d597be42d22c77cf006683d7b72a197e1a5cdcf,0000</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-2-1024x573.png" target="_blank" rel="noreferrer noopener"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-2-1024x573.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-2-1024x573.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em><a href="https://youtu.be/ErjCph1mI9Y?t=76">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://perelmanwork.com/">As a tool for mathematical analysis and solving discrete logarithm equations, we will use the Perelman Work</a></strong>&nbsp;software&nbsp;. We will select the option from the&nbsp;<strong>Complex Analysis</strong>&nbsp;section for a complete relationship between variables through the integration of&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><code>Discrete variation series Variance: [ D = frac{sum_{i=1}^{n} (x_i — bar{x})^2}{N})]</code></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The formula for calculating discrete variation looks like this:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"width":"390px","height":"auto","linkDestination":"custom","align":"center"} -->
<figure class="wp-block-image aligncenter is-resized"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1(1).png" alt="Discrete variation series Variance formula: [ D = frac{sum_{i=1}^{n} (x_i - bar{x})^2}{N} ) ]" style="width:390px;height:auto"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Explanation of the formula components:</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#explanation-of-the-formula-components"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>D</strong>  is the variance (variance) of your data set.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>∑∑</strong>  is the sum symbol, which means that we will add the values.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><em>i</em></strong>  is an index that runs through all values ​​in the data set from 1 to n.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><em>xi</em> ​is</strong> each individual value in your data set.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>ˉ <em>x</em> ˉ</strong>  is the mean (or arithmetic average) of all the values ​​in the data set.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><em>N</em></strong>  is the total number of values ​​in the data set.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">How does this work?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#how-does-this-work"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Calculating the Average:</strong>  First, you find the average value of your data set.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Difference from mean:</strong>  Then for each value  <em>xi</em>​ you calculate how much it differs from the mean ˉ <em>x</em> ˉ .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Square the difference:</strong>  You then take the square of that difference (to get rid of negative values ​​and amplify the impact of large deviations).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Summation:</strong>  You add up all the squares of the differences.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Dividing by the number of values:</strong>  Finally, you divide the resulting sum by the total number of values  <em>​​N</em> .</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-4-1024x576.png"></a><em><a href="https://youtu.be/ErjCph1mI9Y?t=146">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><em>Using&nbsp;<a href="https://perelmanwork.com/"><strong>Perelman Work</strong></a>&nbsp;and&nbsp;<strong><a href="https://dockeyhunt.com/dockeyhunt-discrete-logarithm"><strong>Dockeyhunt Discrete Logarithm,</strong></a></strong>&nbsp;we arbitrarily change variables to the&nbsp;<strong><a href="https://cryptodeeptech.ru/discrete-logarithm">Joux Lercier</a></strong>&nbsp;vulnerability , this is described in detail at the beginning of&nbsp;<a href="https://cryptodeeptech.ru/discrete-logarithm">the article,</a>&nbsp;this vulnerability in a Bitcoin transaction occurs due to the fact that it is possible to change the value of&nbsp;&nbsp;<strong>R,&nbsp;</strong><strong>S</strong>&nbsp;,&nbsp;<strong>Z</strong>&nbsp;&nbsp;in the signature, while maintaining the validity of the signature, as well as in an arbitrary formula:</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code><em>X</em>=hex(((<em>S</em>⋅<em>K</em>−<em>Z</em>)⋅modinv(<em>R</em>,<em>N</em>))mod<em>N</em>)</code></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><em>S</em>  and  <em>R</em>  are the values ​​from the transaction signature (RawTX).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>Z</em>  is the transaction signature hash.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>K</em>  is the secret key (nonce).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em>N</em>  is the order of the elliptic curve group.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>modinv( <em>R</em> , <em>N</em> ) is the modular inverse function of  <em>R</em>  modulo  <em>N</em> .</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Explanation of the formula</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#explanation-of-the-formula"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Input parameters</strong> :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong><em>S</em></strong>  and <strong><em> R</em></strong> : These values ​​are obtained from the transaction signature. They are needed to recover the private key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><em>Z</em></strong> : This is the signature hash, which is also used in the process.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><em>K</em></strong> : A secret key (nonce) that should only be known to the wallet owner.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Calculations</strong> :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>First we  multiply <em>S</em>  by  <em>K.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Then we subtract  <em>Z</em> .</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The result is multiplied by the modular inverse  of <em>R</em>  modulo  <em>N</em> . This allows us to “cancel” the influence of  <em>R</em> to obtain a value that can be used to calculate the private key.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Finally, the result is taken modulo  <em>N</em> to ensure that it is within the acceptable range for private key values.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Convert to hexadecimal format</strong> :<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>After all the mathematical operations are performed, the result is converted to hexadecimal format using the function  <code>hex()</code>, which is the standard representation of private keys in Bitcoin.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://perelmanwork.com/discrete-logarithm-ricci-flow-hnp">Ricci Flow Hidden Number Problem</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#ricci-flow-hidden-number-problem"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Copy the values&nbsp;<strong><code>R, S, Z</code></strong>​​and paste them into the input field&nbsp;<code><strong>Ricci Flow HNP</strong></code>to build completely new transactions of the&nbsp;<strong>ECDSA</strong>&nbsp;algorithm .</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-3-1024x570.png" target="_blank" rel="noreferrer noopener"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-3-1024x570.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-3-1024x570.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em><a href="https://youtu.be/ErjCph1mI9Y?t=173">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-5-1024x575.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-5-1024x575.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://dockeyhunt.com/dockeyhunt-private-key-calculator/">Dockeyhunt Private Key Calculator</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#dockeyhunt-private-key-calculator"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Copy the values ​​and paste them into the <strong><a href="https://dockeyhunt.com/dockeyhunt-private-key-calculator/">Dockeyhunt Private Key Calculator</a><code> R, S, Z</code></strong> software field<strong><a href="https://dockeyhunt.com/dockeyhunt-private-key-calculator/"></a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-6-1024x575.png" target="_blank" rel="noreferrer noopener"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-6-1024x575.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-6-1024x575.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em><a href="https://youtu.be/ErjCph1mI9Y?t=258">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Now, according to&nbsp;<em>the vulnerability&nbsp;<strong><a href="https://cryptodeeptech.ru/discrete-logarithm">of Joux Lercier,</a></strong>&nbsp;we copy from the code of&nbsp;<a href="https://github.com/bitcoin-core/secp256k1/blob/master/src/ecdsa_impl.h"><strong>ecdsa_impl.h</strong></a></em>&nbsp;the value of the secret key “K” called in cryptography NONCE – this is a secret, (pseudo) random parameter, which is usually denoted by “K”. Here NONCE, due to&nbsp;<a href="https://github.com/bitcoin-core/secp256k1/blob/master/src/ecdsa_impl.h">a bug in the code</a>&nbsp;, fixed&nbsp;<code><strong>0, 0, 0, 1, 0x45512319UL, 0x50B75FC4UL, 0x402DA172UL, 0x2FC9BAEEUL</strong></code>&nbsp;several&nbsp;<a href="https://github.com/bitcoin-core/secp256k1/blob/master/src/ecdsa_impl.h"><strong>HEX</strong></a>&nbsp;bits at the beginning (or at the end) of the record.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>!./darksignature -address 1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>....
....
....
/** Difference between field and order, values 'p' and 'n' values defined in
 *  "Standards for Efficient Cryptography" (SEC2) 2.7.1.
 *  $ sage -c 'load("secp256k1_params.sage"); print(hex(P-N))'
 *  0x14551231950b75fc4402da1722fc9baee
 */
static const secp256k1_fe secp256k1_ecdsa_const_p_minus_order = SECP256K1_FE_CONST(
    0, 0, 0, 1, 0x45512319UL, 0x50B75FC4UL, 0x402DA172UL, 0x2FC9BAEEUL
);
....
....
....</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-7-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-7-1024x576.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://github.com/bitcoin-core/secp256k1/blob/master/src/ecdsa_impl.h">https://github.com/bitcoin-core/secp256k1/blob/master/src/ecdsa_impl.h</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-8-1024x577.png" target="_blank" rel="noreferrer noopener"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-8-1024x577.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-8-1024x577.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em><a href="https://youtu.be/ErjCph1mI9Y?t=289">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Copy the&nbsp;<strong>K value and paste it into the&nbsp;</strong><strong><a href="https://dockeyhunt.com/dockeyhunt-private-key-calculator/">Dockeyhunt Private Key Calculator</a></strong>&nbsp;software field&nbsp;, then click on the button:&nbsp;<strong>Calculate Private Key</strong>&nbsp;and get the private key to the Bitcoin Wallet&nbsp;<a href="https://btc1.trezor.io/address/1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS"><strong>1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>0x6b29781e725708ae4d94e13730a2718ee3383ea5d911e77d4c2a2fd0c99c1232</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-9-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-9-1024x576.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>To start&nbsp;<em>the algorithm for solving the discrete logarithm,</em>&nbsp;click on the button:&nbsp;<strong><code>Private Key</code></strong>&nbsp;after that, we successfully receive a private key in&nbsp;<strong>HEX format</strong></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>6b29781e725708ae4d94e13730a2718ee3383ea5d911e77d4c2a2fd0c99c1232</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-10-1024x576.png" target="_blank" rel="noreferrer noopener"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-10-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-10-1024x576.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em><a href="https://youtu.be/ErjCph1mI9Y?t=309">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Next we need to make sure that we have received the required private key value in&nbsp;<strong>HEX format.</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-11-1024x576.png" target="_blank" rel="noreferrer noopener"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-11-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-11-1024x576.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em><a href="https://youtu.be/ErjCph1mI9Y?t=378">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Click on the button&nbsp;<strong><code>Bitcoin Address</code></strong>and get the required value of the private key in&nbsp;<strong>HEX format</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>6b29781e725708ae4d94e13730a2718ee3383ea5d911e77d4c2a2fd0c99c1232: 1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-12-1024x576.png" target="_blank" rel="noreferrer noopener"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-12-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-12-1024x576.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em><a href="https://youtu.be/ErjCph1mI9Y?t=324">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>We also click on the button&nbsp;<strong><code>Balance BTC</code></strong>&nbsp;and get the result of the balance amount:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>6b29781e725708ae4d94e13730a2718ee3383ea5d911e77d4c2a2fd0c99c1232: 1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS: 165.10252195 BTC
_____________________________________________________________________________________________________
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-13-1024x576.png" target="_blank" rel="noreferrer noopener"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-13-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-13-1024x576.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em><a href="https://youtu.be/ErjCph1mI9Y?t=330">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-14-1024x576.png" target="_blank" rel="noreferrer noopener"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-14-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-14-1024x576.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><em><a href="https://youtu.be/ErjCph1mI9Y?t=366">Time-stamped video</a></em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph {"align":"center","fontSize":"large"} -->
<p class="has-text-align-center has-large-font-size"><strong>Private key received!</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Bitcoin wallet recovery using mathematically based methods such as&nbsp;<strong>the Ricci Flow Hidden Number Problem opens new horizons for understanding cryptographic vulnerabilities and opportunities. We demonstrated how&nbsp;</strong><strong>Perelman Work, Dockeyhunt Discrete Logarithm</strong>&nbsp;, and&nbsp;<strong>DarkSignature</strong>&nbsp;software can be used&nbsp;to extract private keys and create fake transactions, highlighting the importance of mathematical analysis in the cryptocurrency space.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=ErjCph1mI9Y"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-4.png" alt="Discrete Logarithms"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The results show that even in a complex system like&nbsp;<strong>Bitcoin</strong>&nbsp;, there are vulnerabilities that can be exploited to restore access to lost funds. This process requires deep knowledge of cryptography and mathematics, as well as skills in working with specialized software.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Exploitation mechanisms and significant influence in multi-signature systems</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#exploitation-mechanisms-and-significant-influence-in-multi-signature-systems"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The vulnerability of the&nbsp;<strong>Joux Lercier</strong>&nbsp;algorithm poses a serious threat to systems with multi-signature schemes, since an attacker can generate fake signatures that the system will accept, threatening not only individual transactions, but also the integrity of the entire multi-signature process. An attacker can generate fake signatures that the system will accept, threatening not only individual transactions, but also the entire multi-signature process.</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em>Insufficient verification of user input data can cause serious failures in the Bitcoin system, giving attackers the opportunity to inject malicious code and manipulate the system by creating fake signatures for transactions.</em></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://github.com/demining/CryptoDeepTools/blob/main/37DiscreteLogarithm/Joux_Lercier_Vulnerability_Algorithm_and_Tools_for_Extracting_Private_Key.ipynb">Practical part</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#practical-part"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>According to the theory&nbsp;<a href="https://cryptodeeptech.ru/discrete-logarithm">of vulnerability of the Joux Lercier algorithm</a>&nbsp;, attackers are able to use the identified flaws to attack the Bitcoin network, overloading it with invalid transactions and thereby disrupting its stability. Let’s move on to the practical part of the article and consider an example using a Bitcoin wallet:&nbsp;<a href="https://btc1.trezor.io/address/1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS"><strong>1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</strong></a>&nbsp;, where there were lost coins in the amount of:&nbsp;<strong>165.10252195 BTC</strong>&nbsp;as of December 2024, this amount is:&nbsp;<strong>15802506.39 USD</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1024x382.png"></a><strong>165.10252195 &gt; 15802506,39 USD</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://github.com/demining/Tutorials-Power-AI">Tutorials Power AI</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#tutorials-power-ai"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s use the list from&nbsp;<a href="https://github.com/demining/Tutorials-Power-AI">“Tutorials Power AI”</a>&nbsp;a widely used category of artificial intelligence to introduce business in various fields of cryptanalysis and cryptography in general.</p>
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

python3 tutorials.py</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/process.gif" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/process.gif" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1024x276.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1024x276.png" alt="Discrete Logarithms"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong><a href="https://bitcoinchatgpt.org/">BitcoinChatGPT</a></strong>&nbsp;is an innovative and cutting-edge AI-powered chatbot that helps users identify vulnerabilities in Bitcoin transactions. This tool allows you to check Bitcoin addresses for various crypto wallet attacks, using machine learning and cryptanalysis techniques to deeply investigate the security algorithms in the Bitcoin ecosystem. In addition, BitcoinChatGPT serves as an important resource for cybersecurity, offering tools to extract private keys from Bitcoin Wallet ledgers.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://cryptodeeptech.ru/discrete-logarithm">Exploiting a vulnerability in the implementation of the algorithm (Joux Lercier) to create a Raw transaction using the BitcoinChatGPT machine learning process</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#exploiting-a-vulnerability-in-the-implementation-of-the-algorithm-joux-lercier-to-create-a-raw-transaction-using-the-bitcoinchatgpt-machine-learning-process"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s consider the construction of the structure of a vulnerable&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/37DiscreteLogarithm/RawTX.txt">Raw</a></strong>&nbsp;transaction in which the&nbsp;<strong><a href="https://bitcoinchatgpt.org/joux-lercier-vulnerability-algorithm/">BitcoinChatGPT module is used</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=vI-S3ua0QEA"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-2.png" alt="Discrete Logarithms"/></a></figure>
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
<p><a href="https://colab.research.google.com/drive/1Cohb5F2h1CP9CnYdAdMJW9vyl4pwQKuz">https://colab.research.google.com/drive/1Cohb5F2h1CP9CnYdAdMJW9vyl4pwQKuz</a></p>
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
...........947d6fb75033cc3e342c8538a350e9058134b2a1ae01a7c50fc52b1f56c9169c
....0220
........5b3ec0d72a2368cdd48c17ff095ab1ab0b9824e010883539cbeb18141de6384b
.....0141
.....04e87e83f871df1439b7873b4ae449d15306cafc53e03a06fffb534b3bf25b58d8edca74b0faf5cf8c3aed6cad2bd79a7bce92ab53e07440d4590cbf31286d9335
....ffffffff
01
....d204000000000000
........1976
............a914
........f750c55bea03af8a720c46b5d6edea93644cdaf7
....88ac
00000000</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Let’s combine all the output values ​​into one common line:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>01000000010dbc696374c8d7ca61f32710e03aaedcb7a4f2428074814d0e1f4f7f5c1e5935000000008b483045022100947d6fb75033cc3e342c8538a350e9058134b2a1ae01a7c50fc52b1f56c9169c02205b3ec0d72a2368cdd48c17ff095ab1ab0b9824e010883539cbeb18141de6384b014104e87e83f871df1439b7873b4ae449d15306cafc53e03a06fffb534b3bf25b58d8edca74b0faf5cf8c3aed6cad2bd79a7bce92ab53e07440d4590cbf31286d9335ffffffff01d2040000000000001976a914f750c55bea03af8a720c46b5d6edea93644cdaf788ac00000000</strong></code></pre>
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
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1-1024x547.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1-1024x547.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
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
        "1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS"
    ],
    "block_height": -1,
    "block_index": -1,
    "confirmations": 0,
    "double_spend": false,
    "fees": 2606688996428,
    "hash": "07160d430b92d957a7b3f0284ec7ff6084629b6385476608a6da5858fcfc2716",
    "inputs": &#91;
        {
            "addresses": &#91;
                "1QiERrMcv6mtGk4F1TVz4sRp9dFfXTQpK"
            ],
            "age": 344419,
            "output_index": 0,
            "output_value": 2606688997662,
            "prev_hash": "35591e5c7f4f1f0e4d81748042f2a4b7dcae3ae01027f361cad7c8746369bc0d",</strong>
<strong>.......
.......
.......</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s pay attention to Bitcoin HASH160:&nbsp;<strong>f750c55bea03af8a720c46b5d6edea93644cdaf7</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-3.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-3.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/CryptoDeepTools/blob/50de2ffdd7f9f06a34049d1c72559aa16b1bf42c/37DiscreteLogarithm/DecodeRawTX.txt#L31C30-L31C70">https://github.com/demining/CryptoDeepTools/blob/50de2ffdd7f9f06a34049d1c72559aa16b1bf42c/37DiscreteLogarithm/DecodeRawTX.txt#L31C30-L31C70</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://coinbin.ru/#verify">Transaction Script</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#transaction-script"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":5} -->
<h5 class="wp-block-heading">The above script has been decoded</h5>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#the-above-script-has-been-decoded"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>BitcoinChatGPT creates a transaction structure using&nbsp;<code><strong>HASH</strong></code>the public key, where we see that Bitcoin address:&nbsp;<strong><a href="https://btc1.trezor.io/address/1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS">1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</a></strong>&nbsp;sends&nbsp;<strong><code>1234 satoshi</code></strong>to the same address within its network.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-2-1024x424.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-2-1024x424.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Bitcoin HASH160 was generated using Python Script:&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/37DiscreteLogarithm/wif_to_hash160.py"><strong>wif_to_hash160.py</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-3(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-3(1).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-4-1024x735.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-4-1024x735.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/CryptoDeepTools/blob/main/37DiscreteLogarithm/wif_to_hash160.py">https://github.com/demining/CryptoDeepTools/blob/main/37DiscreteLogarithm/wif_to_hash160.py</a></p>
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
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-5-1024x439.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-5-1024x439.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-6-1024x421.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-6-1024x421.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-7-1024x451.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-7-1024x451.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Finally, the&nbsp;<strong><a href="https://github.com/BitcoinChatGPT/Jacobian-Curve-Vulnerability-Algorithm/blob/main/BitcoinChatGPT_%E2%84%964_Joux_Lercier_Vulnerability_Algorithm.ipynb">BitcoinChatGPT</a></strong>&nbsp;module outputs the response to the file:&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/37DiscreteLogarithm/KEYFOUND.privkey">KEYFOUND.privkey</a></strong>&nbsp;storing the private key in two most used formats&nbsp;<strong>HEX &amp; WIF</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-8-1024x680.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-8-1024x680.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/CryptoDeepTools/blob/main/37DiscreteLogarithm/KEYFOUND.privkey">https://github.com/demining/CryptoDeepTools/blob/main/37DiscreteLogarithm/KEYFOUND.privkey</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://youtu.be/eqQw4vY4RmI">BitcoinChatGPT №6 Joux Lercier Vulnerability Algorithm</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#bitcoinchatgpt-6-joux-lercier-vulnerability-algorithm"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=yRGZ41jvGKw"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-5.png" alt="Discrete Logarithms"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><a href="https://www.youtube.com/watch?v=yRGZ41jvGKw">Vulnerable&nbsp;Raw&nbsp;Transaction</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#vulnerablerawtransaction"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s create a vulnerable Raw transaction from the received data using the&nbsp;&nbsp;<strong><a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction">Broadcast Bitcoin Transaction repository</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Download and install the source code, open the terminal and run the command:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>git clone https://github.com/smartibase/Broadcast-Bitcoin-Transaction.git
</strong></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Catalog:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>cd Broadcast-Bitcoin-Transaction</strong></code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s install three important libraries:</p>
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

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-8-1024x495.png"></a><a href="https://github.com/smartibase/Broadcast-Bitcoin-Transaction/blob/main/requirements.txt"><strong>requirements.txt</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s run the command:</p>
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

pk = PrivateKey.parse("5JdUtcYt3ZBQN8aPZWNffXzNCTPds7aQtJk7zc9iQShNQ9yWe7x")
pk.address()
tx = bytes.fromhex("35591e5c7f4f1f0e4d81748042f2a4b7dcae3ae01027f361cad7c8746369bc0d")
index = 0
send = "1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS"
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
<p>Let’s run the command:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>python main.py</strong></code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong><a href="https://www.youtube.com/watch?v=8B2LKMBsVSE">Vulnerable transaction created&nbsp;</a><a href="https://www.youtube.com/watch?v=8B2LKMBsVSE">!</a></strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s open the RawTX file in the directory:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>01000000010dbc696374c8d7ca61f32710e03aaedcb7a4f2428074814d0e1f4f7f5c1e5935000000008b483045022100947d6fb75033cc3e342c8538a350e9058134b2a1ae01a7c50fc52b1f56c9169c02205b3ec0d72a2368cdd48c17ff095ab1ab0b9824e010883539cbeb18141de6384b014104e87e83f871df1439b7873b4ae449d15306cafc53e03a06fffb534b3bf25b58d8edca74b0faf5cf8c3aed6cad2bd79a7bce92ab53e07440d4590cbf31286d9335ffffffff01d2040000000000001976a914f750c55bea03af8a720c46b5d6edea93644cdaf788ac00000000</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The order of actions in the video:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#the-order-of-actions-in-the-video"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=8B2LKMBsVSE"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-6.png" alt="Discrete Logarithms"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><em>As we know from&nbsp;<a href="https://keyhunters.ru/what-is-prompt-answers-and-how-is-it-related-to-machine-learning-and-artificial-intelligence/">the prompt responses of the&nbsp;</a><a href="https://colab.research.google.com/drive/1Cohb5F2h1CP9CnYdAdMJW9vyl4pwQKuz"><strong>BitcoinChatGPT</strong></a>&nbsp;module ,&nbsp;Joux Lercier Vulnerability Algorithm can be used to solve complex cryptographic problems.</em></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center"><a href="https://github.com/smartibase/Smart-Transformers">Smart Transformers</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#smart-transformers"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://github.com/smartibase/Smart-Transformers">We will apply Smart Transformers</a>&nbsp;machine learning&nbsp;, integrate the notebook&nbsp;<code>Google Colab</code>with&nbsp;<a href="https://keyhunters.ru/pytorch-tensorflow-and-jax-powerful-tools-for-deep-learning/"><strong>Pytorch, TensorFlow, JAX</strong></a>&nbsp;and using the obtained data of the vulnerable&nbsp;<strong>Raw</strong>&nbsp;transaction for Bitcoin Address:&nbsp;<strong><a href="https://btc1.trezor.io/address/1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS">1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</a></strong>&nbsp;we will create an unprotected&nbsp;<strong>wallet.dat</strong>&nbsp;file from the proposed choice of all existing algorithms from&nbsp;<a href="https://github.com/smartibase/Smart-Transformers"><strong>SMART_IDENTIFY</strong></a>&nbsp;. Then we will perform&nbsp;<a href="https://exploitdarlenepro.com/1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS/"><strong>a Padding Oracle Attack</strong></a>&nbsp;on the newly created file:&nbsp;<strong>wallet.dat</strong>&nbsp;to decrypt the password into the original binary format in order to obtain and extract the private key from the&nbsp;<strong>Bitcoin Core</strong>&nbsp;software console using the standard</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Command:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><code>dumpprivkey 1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</code></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong><a href="https://colab.research.google.com/#create=true">Let’s open a new Google Colab</a></strong>&nbsp;notebook&nbsp;using the link:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p><a href="https://colab.research.google.com/#create=true">https://colab.research.google.com/#create=true</a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Clone the&nbsp;<a href="https://github.com/smartibase/Smart-Transformers"><strong>Smart Transformers repository</strong></a></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!git clone https://github.com/smartibase/Smart-Transformers.git</strong></code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>cd Smart-Transformers/</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-9-1024x487.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-9-1024x487.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s install all the necessary packages and libraries:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!sudo apt-get update
!sudo apt install libtool
!sudo apt-get install g++</strong>
<strong>!python setup.py --help</strong>
<strong>!sudo apt-get install libgmp3-dev libmpfr-dev
!chmod +x Generic_Algorithms
!./Generic_Algorithms
!pip3 install transformers
from transformers import AutoModelForCausalLM, AutoTokenizer
model_name = "microsoft/DialoGPT-medium"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)
model = model.cpu()</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-10-1024x434.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-10-1024x434.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-11-1024x437.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-11-1024x437.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Team:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>ls -S</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-12.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-12.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s add our vulnerable&nbsp;<strong>Raw</strong>&nbsp;transaction to a text document:&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/37DiscreteLogarithm/RawTX.txt">RawTX.txt</a></strong>&nbsp;for this we will use the utility<code>echo</code></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s run the command:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!echo '01000000010dbc696374c8d7ca61f32710e03aaedcb7a4f2428074814d0e1f4f7f5c1e5935000000008b483045022100947d6fb75033cc3e342c8538a350e9058134b2a1ae01a7c50fc52b1f56c9169c02205b3ec0d72a2368cdd48c17ff095ab1ab0b9824e010883539cbeb18141de6384b014104e87e83f871df1439b7873b4ae449d15306cafc53e03a06fffb534b3bf25b58d8edca74b0faf5cf8c3aed6cad2bd79a7bce92ab53e07440d4590cbf31286d9335ffffffff01d2040000000000001976a914f750c55bea03af8a720c46b5d6edea93644cdaf788ac00000000' &gt; RawTX.txt</strong>

<strong>!cat RawTX.txt</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-13-1024x118.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-13-1024x118.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Now, to get the exact algorithm and method for cryptanalysis we need to identify the vulnerable&nbsp;<strong>RawTX</strong>&nbsp;using the&nbsp;<strong>SMART_IDENTIFY</strong>&nbsp;utility .</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s run the command:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./SMART_IDENTIFY</strong></code></pre>
<!-- /wp:code -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>As a result, we get the&nbsp;<strong><a href="https://bitcoinchatgpt.org/joux-lercier-vulnerability-algorithm">Joux_Lercier_Algorithm</a></strong>&nbsp;method , in earlier studies the same thing was identified by the&nbsp;<a href="https://www.youtube.com/watch?v=eqQw4vY4RmI"><strong>BitcoinChatGPT</strong></a>&nbsp;module .</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>#################################################

Joux_Lercier_Algorithm

#################################################</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-14-1024x364.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-14-1024x364.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Let’s open the catalog:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-15-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-15-1.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Let’s start the process of creating the&nbsp;<strong>wallet.dat</strong>&nbsp;file. For this, we use the identified data of the vulnerable&nbsp;<strong>Raw</strong>&nbsp;transaction in the file:&nbsp;<strong>RawTX.txt.</strong>&nbsp;For the process, we apply the&nbsp;<strong>Joux_Lercier_Algorithm utility.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><strong>Let’s run the command:</strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!./Joux_Lercier_Algorithm -o RawTX.txt -s wallet.dat</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-16-1024x436.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-16-1024x436.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-18-1024x427.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-18-1024x427.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s open the directory in the left panel&nbsp;<code>Google Colab</code>and see the file:&nbsp;<strong><code>wallet.dat</code></strong>Successfully created!</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-19-1024x531-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-19-1024x531-1.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-20-1024x658-1.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-20-1024x658-1.png" alt="Discrete Logarithms"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Download and Install Bitcoin Core 0.18.0&nbsp;<a href="https://bitcoincore.org/bin/bitcoin-core-0.18.0">https://bitcoincore.org/bin/bitcoin-core-0.18.0</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#download-and-install-bitcoin-core-0180httpsbitcoincoreorgbinbitcoin-core-0180"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=LTzMQPstvpM"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-7.png" alt="Discrete Logarithms"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s open the console and run the command:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code>
<strong>getaddressinfo 1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-21-1024x671.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-21-1024x671.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>We see that the file:&nbsp;<strong><a href="https://keyhunters.ru/bitcoin-core-wallet-and-the-importance-of-the-wallet-dat-file/">wallet.dat</a></strong>&nbsp;belongs to the Bitcoin Address:&nbsp;<strong><a href="https://btc1.trezor.io/address/1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS">1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</a></strong></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">File: wallet.dat is encrypted with a password!</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#file-walletdat-is-encrypted-with-a-password"></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-24.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-24.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s run the command to check the private key:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>dumpprivkey 1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-22-1024x675.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-22-1024x675.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>We see a warning:&nbsp;<strong><a href="https://keyhunters.ru/understanding-and-resolving-the-error-please-enter-the-wallet-passphrase-with-walletpassphrase-first-code-13-in-bitcoin-core/">Error: Please enter the wallet passphrase with walletpassphrase first. (code -13)</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading"><a href="https://exploitdarlenepro.com/1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS">Padding Oracle Attack</a></h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#padding-oracle-attack"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-28.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-28.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-29.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-29.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a href="https://exploitdarlenepro.com/1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS/"><strong>Let’s use the Padding Oracle Attack</strong></a>&nbsp;method on Wallet.dat&nbsp;and decrypt the password for access into a binary password format.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://www.youtube.com/watch?v=gDBDP9bseE0"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-8.png" alt="Discrete Logarithms"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-23-1024x460.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-23-1024x460.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-24-1024x455.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-24-1024x455.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-25-1024x452.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-25-1024x452.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>First we get access to the&nbsp;<a href="https://github.com/smartibase/Biggest-Lost-Bitcoin-Wallets-List/raw/main/165.10%20BTC/wallet.dat">wallet.dat</a>&nbsp;file for the amount:&nbsp;</strong><strong><a href="https://github.com/smartibase/Biggest-Lost-Bitcoin-Wallets-List/tree/main/165.10%20BTC">165.10 BTC</a></strong><strong><a href="https://github.com/smartibase/Biggest-Lost-Bitcoin-Wallets-List/tree/main/165.10%20BTC"></a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#first-we-get-access-to-thewalletdatfile-for-the-amount16510-btc"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Clone Repository:&nbsp;<a href="https://github.com/smartibase/Biggest-Lost-Bitcoin-Wallets-List.git">Biggest Lost Bitcoin Wallets List</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#clone-repositorybiggest-lost-bitcoin-wallets-list"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>git clone https://github.com/keyhunters/Biggest-Lost-Bitcoin-Wallets-List.git</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-26-1024x574.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-26-1024x574.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://keyhunters.ru/total-commander/">Total Commander</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#total-commander"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1(2).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-1(2).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-27.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-27.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-28(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-28(1).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><a href="https://github.com/keyhunters/Biggest-Lost-Bitcoin-Wallets-List/tree/main/165.10%20BTC">https://github.com/keyhunters/Biggest-Lost-Bitcoin-Wallets-List/tree/main/165.10%20BTC</a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-5-1536x674.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-5-1536x674.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Download and install&nbsp;&nbsp;<a href="https://bitcoincore.org/bin/bitcoin-core-0.18.0">Bitcoin Core 0.18.0</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#download-and-installbitcoin-core-0180"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-7-1024x551.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-7-1024x551.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"width":"840px","height":"auto","linkDestination":"custom"} -->
<figure class="wp-block-image is-resized"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-9.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-9.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin" style="width:840px;height:auto"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Откроем path:&nbsp;<a href="https://keyhunters.ru/bitcoin-core-wallet-dat/">c:\Users\User\AppData\Roaming\Bitcoin\</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#%D0%BE%D1%82%D0%BA%D1%80%D0%BE%D0%B5%D0%BC-pathcusersuserappdataroamingbitcoin"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-11.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-11.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Let’s move the file:&nbsp;</strong><strong><a href="https://github.com/smartibase/Biggest-Lost-Bitcoin-Wallets-List/raw/main/165.10%20BTC/wallet.dat">wallet.dat</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#lets-move-the-filewalletdat"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-6-1536x584.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-6-1536x584.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>c:\Users\User\AppData\Roaming\Bitcoin\wallet.d</strong><a href="https://keyhunters.ru/bitcoin-core-wallet-dat/"><strong>at</strong></a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#cusersuserappdataroamingbitcoinwalletdat"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-4(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-4(1).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://keyhunters.ru/bitcoin-core-wallet/">Let’s launch the Bitcoin Core</a>&nbsp;wallet<a href="https://keyhunters.ru/bitcoin-core-wallet/"></a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#lets-launch-the-bitcoin-corewallet"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-13.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-13.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading"><a href="https://exploitdarlenepro.com/"><strong>Encryt Wallet…</strong></a></h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#encryt-wallet"></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-14.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-14.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading"><strong>Let’s open the console</strong></h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#lets-open-the-console"></a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>getaddressinfo 1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-8-1536x1011.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-8-1536x1011.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://dockeyhunt.com/Cryptocurrency-Prices">Bitcoin Address Information:</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#bitcoin-address-information"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Balance: 165.10252195 BTC</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#balance-16510252195-btc"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-22-1024x550.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-22-1024x550.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://github.com/rapid7/metasploit-framework">Metasploit Framework and use MSFVenom</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#metasploit-framework-and-use-msfvenom"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-17.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-17.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://keyhunters.ru/metasploit-framework-msfvenom/">The Role of Metasploit Framework in the Development of msfvenom</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#the-role-of-metasploit-framework-in-the-development-of-msfvenom"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><a href="https://keyhunters.ru/metasploit-framework-msfvenom/">msfvenom</a>&nbsp;is a tool created by combining the two previous tools:&nbsp;&nbsp;<br><code>msfpayload</code>and&nbsp;&nbsp;&nbsp;<code>msfencode</code>. It allows users to create payloads for different platforms and encoders, and provides the ability to customize the payload parameters. msfvenom supports various output formats, including executables, scripts, and even code for web applications.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://keyhunters.ru/metasploit-framework-msfvenom/">The Metasploit Framework</a>&nbsp;&nbsp;plays a key role in the development of msfvenom for several reasons:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>1. Exploit Integration: msfvenom allows users to create payloads that can be used with exploits from Metasploit. This simplifies the penetration testing process as users can quickly generate payloads that match specific vulnerabilities.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>2. Versatility: With support for multiple formats and platforms, msfvenom has become a versatile payload creation tool. This allows security professionals to tailor their attacks to different systems and environments.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>3. Updates and Support: The Metasploit Framework is constantly updated to keep msfvenom up to date and effective. New features and improvements in Metasploit directly impact msfvenom’s capabilities, making it more powerful and flexible.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>4. Education and Research: Metasploit and msfvenom are important tools for cybersecurity education and research. They allow students and security professionals to study vulnerabilities and exploitation techniques in a secure environment.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-18-1024x908.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-18-1024x908.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://t.me/exploitdarlenepro">Run ExploitDalenePRO.exe</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#run-exploitdaleneproexe"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-19.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-19.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-20-1024x699.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-20-1024x699.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-10.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-10.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>c:\BitcoinTools\ExploitDalenePRO\modules\</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-28(2).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-28(2).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>c:\BitcoinTools\ExploitDalenePRO\modules\exploits\</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-29(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-29(1).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>c:\BitcoinTools\ExploitDalenePRO\modules\exploits\ExploitDarlenePRO\</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-30.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-30.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>c:\BitcoinTools\ExploitDalenePRO\modules\exploits\ExploitDarlenePRO\decode_core.rb</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-31.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-31.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://t.me/exploitdarlenepro">decode_core.rb</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#decode_corerb"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-13(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-13(1).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-14(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-14(1).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>c:\BitcoinTools\ExploitDalenePRO\bitcoin\</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-24(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-24(1).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://github.com/bitcoin/bitcoin">https://github.com/bitcoin/bitcoin</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#httpsgithubcombitcoinbitcoin"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-26-1024x471.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-26-1024x471.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://github.com/bitcoin/bitcoin/blob/master/src/crypto/aes.h">https://github.com/bitcoin/bitcoin/blob/master/src/crypto/aes.h</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#httpsgithubcombitcoinbitcoinblobmastersrccryptoaesh"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-27(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-27(1).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>c:\BitcoinTools\ExploitDalenePRO\bitcoin\src\</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-23.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-23.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>c:\BitcoinTools\ExploitDalenePRO\bitcoin\src\crypto\aes.cpp</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-22.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-22.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>c:\BitcoinTools\ExploitDalenePRO\bitcoin\src\crypto\aes.cpp</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-16.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-16.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>c:\Users\User\AppData\Roaming\Bitcoin\</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-4(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-4(1).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://github.com/smartibase/Biggest-Lost-Bitcoin-Wallets-List/raw/main/165.10%20BTC/wallet.dat">Upload Wallet.dat</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#upload-walletdat"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-18.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-18.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/msfvenom_006.gif" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/msfvenom_006.gif" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://github.com/smartibase/Biggest-Lost-Bitcoin-Wallets-List/blob/main/165.10%20BTC/result.json">result.json</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#resultjson"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-19-1536x163.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-19-1536x163.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>walletpassphrase 1111111101110111010010110110010101100010110010001011111011000111101010010010000110101110100110000001100011001101000100001110101110100101101111000010100000000110100010110011000111111001111000110110001011000010000011001001000100101011001000101100110001101000 60</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Run the command and get&nbsp;<a href="https://keyhunters.ru/bitcoin-core-dumpprivkey/">Private Key</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#run-the-command-and-getprivate-key"></a></p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>The dumpprivkey command in Bitcoin Core</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code><strong>dumpprivkey</strong></code>&nbsp;command is a command used in the Bitcoin Core wallet command line interface (CLI) to export the private key associated with a specific Bitcoin address. The syntax for the command is as follows:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>“<code>&nbsp;<strong>dumpprivkey “address”</strong>&nbsp;“</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Where “address” is the Bitcoin address for which you want to receive the&nbsp;<a href="https://keyhunters.ru/bitcoin-core-dumpprivkey/">private key</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>How dumpprivkey command works</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When you type the&nbsp;<code><strong>dumpprivkey</strong></code>&nbsp;command, Bitcoin Core looks for the specified address in its wallet and, if found, returns the corresponding&nbsp;<a href="https://keyhunters.ru/bitcoin-core-dumpprivkey/">private key</a>&nbsp;in WIF format. This allows the user to store the private key in a safe place or import it into another wallet.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>dumpprivkey 1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-20.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-20.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://dockeyhunt.com/Bitcoin-Address">Private Key Information:</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#private-key-information"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>5JdUtcYt3ZBQN8aPZWNffXzNCTPds7aQtJk7zc9iQShNQ9yWe7x</strong></code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-21-1536x823.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-21-1536x823.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://dockeyhunt.com/Cryptocurrency-Prices">Bitcoin Address Information:</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#bitcoin-address-information-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Balance: 165.10252195 BTC</strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#balance-16510252195-btc-1"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-22-1536x824.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-22-1536x824.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong><a href="https://www.coinbase.com/converter/btc/usd">https://www.coinbase.com/converter/btc/usd</a></strong></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#httpswwwcoinbasecomconverterbtcusd"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a target="_blank" rel="noreferrer noopener" href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image.png"></a><strong>165.10252195 &gt; 15802506,39 USD</strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p><em><a href="https://keyhunters.ru/exploring-bitcoin-tools-in-python-a-comprehensive-guide-to-the-bitcoin-package-on-pypi/"></a></em><a href="https://keyhunters.ru/exploring-bitcoin-tools-in-python-a-comprehensive-guide-to-the-bitcoin-package-on-pypi/"><strong>Let’s install the Bitcoin&nbsp;</strong></a><a href="https://keyhunters.ru/exploring-bitcoin-tools-in-python-a-comprehensive-guide-to-the-bitcoin-package-on-pypi/"><strong>library</strong></a><a href="https://keyhunters.ru/exploring-bitcoin-tools-in-python-a-comprehensive-guide-to-the-bitcoin-package-on-pypi/"></a></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>!pip3 install bitcoin</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-25-1024x271.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-25-1024x271.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Let’s run&nbsp;&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/37DiscreteLogarithm/priv_addr.py"><strong>the code</strong></a>&nbsp;&nbsp;to check the Bitcoin Address match:</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-30(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-30(1).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>__________________________________________________

Private Key WIF: 5JdUtcYt3ZBQN8aPZWNffXzNCTPds7aQtJk7zc9iQShNQ9yWe7x
Bitcoin Address: 1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS
total_received 	= 165.10252195 Bitcoin
__________________________________________________</strong></code></pre>
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
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#lets-openbitaddressand-check"></a></p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code><strong>ADDR: 1PYgfSouGGDkrMfLs6AYmwDqMLiVrCLfeS
WIF:  5JdUtcYt3ZBQN8aPZWNffXzNCTPds7aQtJk7zc9iQShNQ9yWe7x
HEX:  6b29781e725708ae4d94e13730a2718ee3383ea5d911e77d4c2a2fd0c99c1232</strong></code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-31(1).png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-31(1).png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Conclusion and mitigation measures:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#conclusion-and-mitigation-measures"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In this article, we explored methods for recovering lost cryptocurrency wallets and private keys using mathematical algorithms such as discrete logarithm and Hidden&nbsp;<strong>Number Problem . We demonstrated how to use&nbsp;</strong><strong>Dockeyhunt Discrete Logarithm, DarkSignature,</strong>&nbsp;and&nbsp;<strong>Perelman Work</strong>&nbsp;software&nbsp;to extract private keys from vulnerable transactions using the ECDSA algorithm. Our research showed that even secure systems such as Bitcoin have vulnerabilities that can be exploited to regain access to lost funds. The recovery process requires deep knowledge of cryptography and mathematics, as well as skills in working with specialized software.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To protect against threats related to the Joux Lercier vulnerability, users should take the following steps:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Software Updates</strong> : Regularly updating your cryptocurrency wallets to patched versions is critical to maintaining security.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Improved signature verification mechanisms</strong> : Stronger input validation and error handling will help prevent the creation of fake signatures and protect users’ private keys.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Network activity monitoring</strong> : Constant analysis of network status and early detection of suspicious transactions allow for prompt response to attempts to exploit vulnerabilities.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Implementing Multi-Factor Authentication</strong> : Implementing additional cryptographic security methods will significantly improve security.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>To prevent possible attacks related to the Joux Lercier vulnerability, Bitcoin users are strongly advised to update their wallet software to the latest versions that fix this vulnerability. Regular software updates, the implementation of anomaly detection systems, and increased user awareness of possible threats will help maintain the integrity and security of cryptocurrency systems.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>The vulnerability of the Joux Lercier algorithm poses a significant threat to the security of cryptocurrency transactions and the integrity of the blockchain. To minimize risks, users should regularly update their software, implement strict security measures, and constantly monitor the network status. These measures will help maintain the security and stability of cryptocurrency systems, protecting users from potential threats and financial losses.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The results of our study highlight the importance of mathematical analysis in the cryptocurrency space and demonstrate the potential for using complex mathematical methods to solve real-world cryptanalysis problems. However, it is important to note that such methods can be used both to restore access to lost funds and to exploit vulnerabilities, highlighting the need to improve the security of cryptocurrency systems.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://github.com/demining/Discrete-Logarithm/blob/main/README.md#references"></a></p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/12oliver.pdf">The impact of the number field sieve on the discrete logarithm problem in finite fields</a></strong> OLIVER SCHIROKAUER</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/16_GuillevicMorain_Chapter9_DiscreteLogarithms.pdf">Discrete Logarithms</a></strong> Aurore Guillevic, François Morain</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/19_Rennes_STNFS.pdf">Discrete logarithm computation in finite fields Fp n with NFS variants and consequences in pairing-based cryptography</a></strong> Aurore Guillevic Inria Nancy, Caramba team</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/1c-dlp-ecdsa.pdf">Discrete logarithm problem (DLP) &amp; ECDSA</a></strong> Many slides are from Rong-Jaye Chen@NCTU</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/2017-1113.pdf">The Discrete-Logarithm Problem with Preprocessing</a></strong> Henry Corrigan-Gibbs and Dmitry Kogan Stanford University August 3, 2021</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/2023-834.pdf">Discrete Logarithm Factory</a></strong> Haetham Al Aswada , Emmanuel Thomé and Cécile Pierrot University of Lorraine, CNRS, Inria, LORIA, Nancy, France</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/609.pdf">On the discrete logarithm problem for prime-field elliptic curves</a></strong> Citation for published version (APA): Amadori, A. G., Pintore, F., &amp; Sala, M. (2018)</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/An_evaluation_of_the_discrete_logarithm_cryptosyst.pdf">An evaluation of the discrete logarithm cryptosystem</a></strong> Yansheng Chen Kristin School, Auckland, New Zealand</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/BaCaMa05.pdf">Efficient Proofs Of Knowledge of Discrete Logarithms and Representations in Groups with Hidden Order</a></strong> Endre Bangerter , Jan Camenisch , and Ueli Maurer IBM Research, Zurich Research Lab, CH-8803 Rueschlikon, Switzerland Departement of Computer Science, ETH Zurich, CH-8092 Zurich, Switzerland</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/CamSta97b.pdf">Proof Systems for General Statements about Discrete Logarithms</a></strong> Jan Camenisch Dept. of Computer Science Haldeneggsteig 4 ETH Zurich CH-8092 Zurich, Switzerland Markus Stadler Union Bank of Switzerland Ubilab Bahnhofstrasse 45 CH-8021 Zurich, Switzerland</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/CDHandDLP.pdf">Evidence that the Diffie-Hellman Problem is as Hard as Computing Discrete Logs</a></strong> Jonah Brown-Cohen</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/2008-437.pdf">Divisibility, Smoothness and Cryptographic Applications</a></strong> David Naccache Equipe de cryptographie ´ Ecole normale sup´erieure ´ 45 rue d’Ulm, F-75230 Paris, Cedex 05, France Igor E. Shparlinski Department of Computing Macquarie University Sydney, NSW 2109, Australia October 17, 2008</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/cdls-africacrypt.pdf">CDLS: Proving Knowledge of Committed Discrete Logarithms with Soundness</a></strong> Sofia Celi , Shai Levin , and Joe Rowell Brave Software, University of Auckland, Royal Holloway, University of London</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/ch13.pdf">Basic Discrete Logarithm Algorithms “Mathematics of Public Key Cryptography”</a></strong> by Steven Galbraith</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/cuberoot-20120919.pdf">Computing small discrete logarithms faster</a></strong> Daniel J. Bernstein and Tanja Lange Department of Computer Science University of Illinois at Chicago, Chicago, IL 60607–7053, USA Department of Mathematics and Computer Science Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB Eindhoven, the Netherlands</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/Discrete%20Logarithms%20on%20Elliptic%20Curves.pdf">Discrete Logarithms on Elliptic Curves</a></strong> Aaron Blumenfeld University of Rochester</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/discretelogs2014.pdf">The Past, evolving Present and Future of Discrete Logarithm</a></strong> Antoine Joux, Andrew Odlyzko and Cécile Pierrot</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/discrete.logs.pdf">Discrete logarithms in finite fields and their cryptographic significance</a></strong> A. M. Odlyzko AT&amp;T Bell Laboratories Murray Hill, New Jersey</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/dlc.pdf">Discreet Log Contracts</a></strong> Thaddeus Dryja MIT Digital Currency Initiative</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/document.pdf">Solving a 676-bit Discrete Logarithm Problem in GF(36n)</a></strong> Takuya Hayashi , Naoyuki Shinohara , Lihua Wang, Shin’ichiro Matsuo , Masaaki Shirase, and Tsuyoshi Takagi Future University Hakodate, Japan. National Institute of Information and Communications Technology, Japan.</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/ECDSA-Security-in-Bitcoin-and-Ethereum-a-Research-Survey.pdf">ECDSA Security in Bitcoin and Ethereum: a Research Survey</a></strong> Hartwig Mayer CoinFabrik Revised June 28, 2016</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/EdwardsBitcoinFinal-V3.pdf">Bitcoin Security with a Twisted Edwards Curve</a></strong> Meryem Cherkaoui Semmouni, Abderrahmane Nitaj, Mostafa Belkasmi</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/glnq.pdf">The Discrete Logarithm Problem in GL(n, q)</a></strong> Alfred J. Menezes and Yi-Hong Wu Dept. of Discrete and Statistical Sciences 120 Math Annex Auburn University</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/HPL-97-128.pdf">The Discrete Logarithm Problem on Elliptic Curves of Trace One</a></strong> Nigel P. Smart Network Systems Department HP Laboratories Bristol October, 1997</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/ijsrp-p7117.pdf">Elliptic Curve Digital Signatures and Their Application in the Bitcoin Crypto-currency Transactions </a></strong>Benjamin K. Kikwai 16 October 2017</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/mathematics_of_bitcoin_ecdsa_lmc.pdf">Mathematics of Bitcoin: The ECDSA</a></strong> by Lewis Combes MA4K8 Scholarly Report Submitted to The University of Warwick Mathematics Institute April, 2018</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/MS2-13411505.pdf">Discrete Logarithm in Galois Rings</a></strong> Samuel Bertrand Liyimbeme Mouchili African Institute for Mathematical Sciences (AIMS)-Cameroon alumnus, Cameroon</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/Oyono2009.pdf">The discrete logarithm problem and its application in Cryptography</a></strong> Roger Oyono University of French Polynesia, Tahiti Lectures in Cryptography for Master class Madrid, April 2009</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/schoof2016.pdf">The Discrete Logarithm Problem</a></strong> Rene Schoof</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><em><a href="https://cryptodeeptech.ru/doc/smith1.pdf">Asymmetric cryptography from discrete logarithms</a></em></strong> <em>Benjamin Smith Summer school on real-world crypto and privacy Sibenik, Croatia // June 17 2019</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/takhanov24a.pdf">Intractability of Learning the Discrete Logarithm with Gradient-Based Methods</a></strong> Rustem Takhanov Maxat Tezekbayev Artur Pak Department of Mathematics, Nazarbayev University, Astana, Kazakhstan Arman Bolatov Department of Computer Science, Nazarbayev University, Astana, Kazakhstan Zhibek Kadyrsizova Department of Mathematics, Nazarbayev University, Astana, Kazakhstan Zhenisbek Assylbekov Department of Mathematical Sciences, Purdue University Fort Wayne, Fort Wayne, IN, USA</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/talk-78.pdf">Discrete Logarithms in Cryptography</a></strong> Frederik Vercauteren ESAT/COSIC — KU Leuven ECRYPT Summer School 2008</em></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><em><strong><a href="https://cryptodeeptech.ru/doc/Winkler.pdf">THE DISCRETE LOG PROBLEM AND ELLIPTIC CURVE CRYPTOGRAPHY</a></strong> NOLAN WINKLER</em></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://dzen.ru/video/watch/6784be61b09e46422395c236"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/image-10(1).png" alt="Discrete Logarithms"/></a></figure>
<!-- /wp:image -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>This material was created for the&nbsp;&nbsp;<a href="https://cryptodeep.ru/">CRYPTO DEEP TECH</a>&nbsp;portal &nbsp;to ensure financial data security and cryptography on elliptic curves&nbsp;&nbsp;<a href="https://www.youtube.com/@cryptodeeptech">secp256k1</a>&nbsp;&nbsp;against weak&nbsp;&nbsp;<a href="https://github.com/demining/CryptoDeepTools">ECDSA</a>&nbsp;signatures &nbsp;in the&nbsp;&nbsp;<a href="https://t.me/cryptodeeptech">BITCOIN</a>&nbsp;cryptocurrency . The creators of the software are not responsible for the use of materials.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/37DiscreteLogarithm">Source code</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://t.me/cryptodeeptech">Telegram: https://t.me/cryptodeeptech</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://youtu.be/i9KYih_ffr8">Video: https://youtu.be/i9KYih_ffr8</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://dzen.ru/video/watch/6784be61b09e46422395c236">Video tutorial: https://dzen.ru/video/watch/6784be61b09e46422395c236</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="https://cryptodeeptech.ru/discrete-logarithm">Source: https://cryptodeeptech.ru/discrete-logarithm</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://github.com/demining/Discrete-Logarithm/blob/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/GOLD1031B-1024x576.png" target="_blank" rel="noreferrer noopener"><img src="https://github.com/demining/Discrete-Logarithm/raw/main/Discrete%20Logarithms%20-%20%C2%ABCRYPTO%20DEEP%20TECH%C2%BB_files/GOLD1031B-1024x576.png" alt="Discrete Logarithm mathematical methods and tools for recovering cryptocurrency wallets Bitcoin"/></a></figure>
<!-- /wp:image -->
