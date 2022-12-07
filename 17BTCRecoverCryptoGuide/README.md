
# BTC Recover Crypto Guide wallet password and seed recovery tools open source


<figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="1024" height="576" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/027-1024x576.png" alt="BTC Recover Crypto Guide wallet password and seed recovery tools open source" class="wp-image-1320" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/12/027-1024x576.png 1024w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/027-300x169.png 300w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/027-768x432.png 768w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/027.png 1280w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>Topics
Resources
 Readme
Stars
 0 stars
Watchers
 1 watching
Forks
 0 forks
Releases
	</div><!-- .entry-content -->
	


<p>In this article, we will take a detailed look at the open source password recovery tools and wallet seed phrases in the <a href="https://github.com/demining/CryptoDeepTools/tree/main/17BTCRecoverCryptoGuide" target="_blank" rel="noreferrer noopener">Crypto Deep Tools</a> repository, and we will also discuss the situation when you accidentally lost or forgot part of your mnemonic or made a mistake while decrypting it. (So you either see an empty wallet or get an error that your seed is invalid) For wallet password or passphrase recovery, it is primarily useful if you have a reasonable idea about what your password might be.</p>


----

* Tutorial: https://youtu.be/imTXE4rGqHw
* Tutorial: https://cryptodeeptech.ru/btc-recover-crypto-guide


----


<p><em>BTCRecover</em>&nbsp;is an open source wallet password and seed recovery tool.</p>



<p></p>



<p class="has-small-font-size"><em><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/" target="_blank" rel="noreferrer noopener">Your best bet is to follow the&nbsp;Installing BTCRecover guide, then read the “Quick Start” for the recovery type you want.&nbsp;(Or look at some usage examples)</a></em></p>



<h1 id="usage-examples">Usage Examples</h1>



<p>This page provides links to a number of examples tht demonstrate how the setup and syntax to use BTCRecover in a number of different recovery scenarios. (Generally with a corresponding YouTube video)</p>



<p>The commands given can be pretty much copy/pasted as-is to allow you to recreate the examples given in the YouTube video.</p>



<p><strong>Note:</strong>&nbsp;Some changes may be required based on your platform, often simple things like using “python” vs “python3”.</p>



<p><strong>Python Version:</strong>&nbsp;Many of these videos were created using different forks of BTCRecover. The resources and commands here may differ slightly, but are designed to work with this fork under Python3.</p>



<h2 id="seed-recovery">Seed Recovery</h2>



<p>Basic Seed Recoveries&nbsp;(Demonstrates the basic commands that you would use for a recovery with various types of wallets)</p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h1 id="basic-passwordpassphrase-recoveries">Basic Password/Passphrase Recoveries</h1>



<p>The idea is that, if you are running this tool on Windows, you can directly copy/paste any of these examples. (They all use the same seeds and addresses that are in the automatic tests)</p>



<p>They will all find a result almost straight away.</p>



<h2 id="seed-based-recovery-notes">Seed Based Recovery Notes</h2>



<p><strong>Notes</strong>&nbsp;Seedrecover.py has been set up so that the defaults should get a result for the majorty of simple “invalid menmonic” or “invalid seed” type errors. (Eg: Where you have an intact seed backup that has a typo in it)</p>



<p>It will search all account types for the supported cryptocurrencies, on all common derivation paths.</p>



<p>It will automatically run through four search phases that should take a few hours at most. 1. Single typo 2. Two typos, including one where you might have a completely different BIP39 word 3. Three typos, including one where you might have a completely different BIP39 word 4. Two typos that could be completely different words.</p>



<p><strong>Fully Supported wallets</strong>&nbsp;(For supported cryptocurrencies)</p>



<ul>
<li>Hardware Wallets
<ul>
<li>Ledger Nano X and S</li>



<li>Trezor One and T</li>



<li>Keepkey</li>



<li>Safepal</li>



<li>Coldcard</li>



<li>Bitbox02</li>



<li>Keystone</li>



<li>Cobo Vault</li>



<li>Ellipal</li>



<li>CoolWallet S (You will need both convert the seed numbers to BIP39 seed words and to use the –force-p2sh argument for Bitcoin and Litecoin…)</li>
</ul>
</li>



<li>Software Wallets
<ul>
<li>Electrum – Both V1 and V2 Seeds (This includes forks like Electrum-LTC, Electron-Cash, etc)</li>



<li>Coinomi</li>



<li>Wasabi</li>



<li>Edge Wallet</li>



<li>Mycelium</li>



<li>Exodus</li>



<li>Trust Wallet</li>



<li>Metamask (Including clones like Binance Chain Wallet Extension)</li>
</ul>
</li>
</ul>



<p><strong>Wallets with Compatibility Issues</strong>(Due to not following derivation standards…)</p>



<ul>
<li>Atomic Wallet. (Non-Standard derivation for ETH (And all ERC20 tokens), needs to be used with the&nbsp;<code>--checksinglexpubaddress</code>, XRP)</li>



<li>Abra Wallet. (Non-Standard seed format, first word is Non-BIP39 “at”, the last 12 are BIP39 (and checksum) but unable to reproduce derivation)</li>
</ul>



<h2 id="examples">Let’s move on to the experimental part:</h2>



<p>Let’s open <a href="https://github.com/demining/TerminalGoogleColab" target="_blank" rel="noreferrer noopener"><strong>[TerminalGoogleColab]</strong></a>.</p>



<p>Let’s use the repository <strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/17BTCRecoverCryptoGuide" target="_blank" rel="noreferrer noopener">«17BTCRecoverCryptoGuide»</a></strong>.</p>



<pre class="wp-block-code"><code>git clone https://github.com/demining/CryptoDeepTools.git

cd CryptoDeepTools/17BTCRecoverCryptoGuide/

ls</code></pre>



<figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="1024" height="561" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/image-1024x561.png" alt="BTC Recover Crypto Guide wallet password and seed recovery tools open source" class="wp-image-1301" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-1024x561.png 1024w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-300x164.png 300w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-768x421.png 768w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image.png 1239w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<h2>Install all the packages, modules and libraries we need</h2>



<pre class="wp-block-code"><code>pip3 install -r requirements.txt</code></pre>



<figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="1024" height="474" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/image-1-1024x474.png" alt="BTC Recover Crypto Guide wallet password and seed recovery tools open source" class="wp-image-1304" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-1-1024x474.png 1024w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-1-300x139.png 300w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-1-768x356.png 768w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-1.png 1375w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="1024" height="375" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/image-2-1024x375.png" alt="BTC Recover Crypto Guide wallet password and seed recovery tools open source" class="wp-image-1305" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-2-1024x375.png 1024w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-2-300x110.png 300w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-2-768x281.png 768w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-2.png 1378w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<h2>Using the lscpu command to find out the processor architecture of Google Colab</h2>



<pre class="wp-block-code"><code>lscpu</code></pre>



<figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="1024" height="403" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/image-7-1024x403.png" alt="BTC Recover Crypto Guide wallet password and seed recovery tools open source" class="wp-image-1325" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-7-1024x403.png 1024w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-7-300x118.png 300w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-7-768x302.png 768w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-7-1536x604.png 1536w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-7.png 1845w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<p></p>



<h2>PyOpenCL Installation for Linux</h2>



<pre class="wp-block-code"><code>sudo apt install python3-pyopencl</code></pre>



<figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="1024" height="491" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/image-3-1024x491.png" alt="BTC Recover Crypto Guide wallet password and seed recovery tools open source" class="wp-image-1308" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-3-1024x491.png 1024w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-3-300x144.png 300w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-3-768x368.png 768w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-3.png 1373w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<h2>Testing your System</h2>



<pre class="wp-block-code"><code>python3 -m btcrecover.test.test_passwords -v GPUTests</code></pre>



<figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="1024" height="359" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/image-4-1024x359.png" alt="BTC Recover Crypto Guide wallet password and seed recovery tools open source" class="wp-image-1311" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-4-1024x359.png 1024w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-4-300x105.png 300w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-4-768x269.png 768w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-4.png 1376w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<h3 id="basic-bitoin-recoveries">Basic Bitoin Recoveries</h3>



<p><strong>Note:</strong>&nbsp;Most of the time you can just run seedrecover.py, even simply double click it and follow the graphical interface.</p>



<p>With a Native Segwit Address – One missing word, address generation limit of 5. (So address needs to be in the first 5 addresses in that account)</p>



<pre id="__code_1" class="wp-block-code"><code>python3 seedrecover.py --wallet-type bip39 --addrs bc1qv87qf7prhjf2ld8vgm7l0mj59jggm6ae5jdkx2 --mnemonic "element entire sniff tired miracle solve shadow scatter hello never tank side sight isolate sister uniform advice pen praise soap lizard festival connect" --addr-limit 5
</code></pre>



<figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="1024" height="487" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/image-5-1024x487.png" alt="BTC Recover Crypto Guide wallet password and seed recovery tools open source" class="wp-image-1312" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-5-1024x487.png 1024w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-5-300x143.png 300w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-5-768x365.png 768w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-5.png 1396w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<p>With a P2SH Segwit Address – One missing word, address generation limit of 5. (So address needs to be in the first 5 addresses in that account)</p>



<pre id="__code_2" class="wp-block-code"><code>python3 seedrecover.py --wallet-type bip39 --addrs 3NiRFNztVLMZF21gx6eE1nL3Q57GMGuunG --mnemonic "element entire sniff tired miracle solve shadow scatter hello never tank side sight isolate sister uniform advice pen praise soap lizard festival connect" --addr-limit 5
</code></pre>



<figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="1024" height="488" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/image-6-1024x488.png" alt="BTC Recover Crypto Guide wallet password and seed recovery tools open source" class="wp-image-1313" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-6-1024x488.png 1024w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-6-300x143.png 300w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-6-768x366.png 768w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/image-6.png 1377w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>



<h3 id="basic-cardano-recoveries">Basic Cardano Recoveries</h3>



<p>For Cardano recovers,&nbsp;see the notes here as well.&nbsp;You can use any Shelley-Era base or stake addresses. (Byron-Era not supported)</p>



<p>Seed from a Ledger Nano, missing one word, using a standard base address. (Address generation limit isn’t appliable in Cardano)</p>



<pre id="__code_3" class="wp-block-code"><code>python3 seedrecover.py --wallet-type cardano --addrs addr1qyr2c43g33hgwzyufdd6fztpvn5uq5lwc74j0kuqr7gdrq5dgrztddqtl8qhw93ay8r3g8kw67xs097u6gdspyfcrx5qfv739l --mnemonic "wood blame garbage one federal jaguar slogan movie thunder seed apology trigger spoon basket fine culture boil render special enforce dish middle antique"
</code></pre>



<p>Seed from a Trezor, missing one word, using a standard base address. (Address generation limit isn’t appliable in Cardano)</p>



<pre id="__code_4" class="wp-block-code"><code>python3 seedrecover.py --wallet-type cardano --addrs addr1q8k0u70k6sxkcl6x539k84ntldh32de47ac8tn4us9q7hufv7g4xxwuezu9q6xqnx7mr3ejhg0jdlczkyv3fs6p477fqxwz930 --mnemonic "ocean kidney famous rich season gloom husband spring convince attitude boy"
</code></pre>



<p>Seed from Yoroi, Adalite or Daedalus (Working as a software wallet), using a standard stake address</p>



<pre id="__code_5" class="wp-block-code"><code>python3 seedrecover.py --wallet-type cardano --addrs stake1uxztdzzm4ljw9a0qmgregc8efgg56p2h3kj75kc6vmhfj2cyg0jmy --mnemonic "cave table seven there limit fat decorate middle gold ten battle trigger luggage demand"
</code></pre>



<h3 id="basic-tron-recoveries">Basic Tron Recoveries</h3>



<p>One missing word, address generation limit of 1. (So address needs to be in the first account)</p>



<pre id="__code_6" class="wp-block-code"><code>python3 seedrecover.py --wallet-type tron --addrs TLxkYzNpMCEz5KThVuZzoyjde1UfsJKof6 --mnemonic "have hint welcome skate cinnamon rabbit cable payment gift uncover column duck scissors wedding decorate under marine hurry scrub rapid change roast print arch" --addr-limit 1
</code></pre>



<h3 id="basic-helium-recoveries">Basic Helium Recoveries</h3>



<p>One missing word</p>



<pre id="__code_7" class="wp-block-code"><code>python3 seedrecover.py --wallet-type helium --addrs 13hP2Vb1XVcMYrVNdwUW4pF3ZDj8CnET92zzUHqYp7DxxzVASbB --mnemonic "arm hundred female steel describe tip physical weapon peace write advice"
</code></pre>



<h3 id="basic-polkadotsubstrate-recoveries">Basic Polkadot(Substrate) Recoveries</h3>



<p>One missing word, blank secret derivation path</p>



<pre id="__code_8" class="wp-block-code"><code>python3 seedrecover.py --wallet-type polkadotsubstrate --addrs 13SsWBQSN6Se72PCaMa6huPXEosRNUXN3316yAycS6rpy3tK --mnemonic "toilet assume drama keen dust warrior stick quote palace imitate music disease"
</code></pre>



<p>One missing word, secret derivation path of “//hard/soft///btcr-test-password” The soft/hard derivation path is passed to the program via the –substrate-path argument and the password is treated the same as a passphrase (Without the leading ///)</p>



<pre id="__code_9" class="wp-block-code"><code>python3 seedrecover.py --wallet-type polkadotsubstrate --addrs 12uMBgecqfkHTYZE4GFRx847CwR7sfs2bTdPbPLpzeMDGFwC --mnemonic "toilet assume drama keen dust warrior stick quote palace imitate music disease" --passphrase-arg btcr-test-password --substrate-path //hard/soft
</code></pre>



<h3 id="basic-stacks-recoveries">Basic Stacks Recoveries</h3>



<p>One missing word, address generation limit of 10. (So will check the first 10 “accounts” for a given seed)</p>



<pre id="__code_10" class="wp-block-code"><code>python3 seedrecover.py --wallet-type stacks --addrs SP11KHP08F4KQ06MWESBY48VMXRBK5NB0FSCRP779 --mnemonic "hidden kidney famous rich season gloom husband spring convince attitude boy" --addr-limit 10
</code></pre>



<ul>
<li></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Descrambling 12 word BIP39 Seeds&nbsp;(Demonstrates Using a TokenList for unscramblng seeds for Electrum Legacy, Electrum Segwit, BIP39 Bitcoin and BIP39 Ethereum)</p>



<h1 id="descrambling-12-word-seeds">Descrambling 12 Word Seeds</h1>



<p></p>



<p class="has-text-align-center"><iframe loading="lazy" width="560" height="315" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/ruSF8OKwBRk.html" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>



<p>Three types of token files are provided for these tests. Token files that will find the result on their first check, token files that will find the result as the last possible combination and those which will find it at some point inbetween.</p>



<p>The idea is that these allow you to quickly verify that things are working (finding on the first result), get an idea for how long a full run might take (last result) and also try something representative of a real world situation.</p>



<p>If you are just descrambing a 12 word seed, there isn’t much point running without –no-eta, as the number of seeds to be tested can be easily worked out and the seed generator can easily keep up with at least 48 threads.</p>



<p><strong>Note:</strong>&nbsp;The YouTube video and examples were made before OpenCL acceleration was added to Blockchain.com wallets and can give a 2x performance improvement. (See&nbsp;GPU Accleration&nbsp;for more info)</p>



<p><strong>Performance</strong></p>



<p>On a 48 core Linode you can expect to… * Descramble a 12 word Electrum seed in less than 15 minutes… * Descramble a 12 word BIP39 seed in less than 50 minutes…</p>



<p><em>You can expect things to take about 5 times this long on a current (mid 2020), mid-range CPU.</em></p>



<h2 id="electrum">Electrum</h2>



<h3 id="legacy-wallet-last-result">Legacy Wallet (Last Result)</h3>



<p><strong>Using Tokenlist lastcombination_electrum.txt</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8 9 10 11 12</td><td><code>book fit fly ketchup also elevator scout mind edit fatal where rookie</code></td></tr></tbody></table></figure>



<p><strong>Command</strong></p>



<pre id="__code_2" class="wp-block-code"><code>python3 seedrecover.py --no-dupchecks --mnemonic-length 12 --language EN --dsw --addr-limit 1 --addrs 1CU62HPowYSxhHiiNu1ukSbMjrkGj4x52i --tokenlist ./docs/Usage_Examples/2020-05-02_Descrambling_a_12_word_seed/lastcombination_electrum.txt --wallet-type electrum2
</code></pre>



<h3 id="segwit-wallet">Segwit Wallet</h3>



<p><strong>Using Tokenlist randomcombination_electrum.txt</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8 9 10 11 12</td><td><code>social shoe spin enlist sponsor resource result coffee ocean gas file paddle</code></td></tr></tbody></table></figure>



<p><strong>Command</strong></p>



<pre id="__code_4" class="wp-block-code"><code>python3 seedrecover.py --no-dupchecks --mnemonic-length 12 --language EN --dsw --wallet-type electrum2 --addr-limit 1 --addrs bc1qtylwmarke39nysxepdx5xzfatvrlel5z8m0jx2 --tokenlist ./docs/Usage_Examples/2020-05-02_Descrambling_a_12_word_seed/randomcombination_electrum.txt --bip32-path "m/0'/0"
</code></pre>



<h2 id="bip39">BIP39</h2>



<h3 id="ethereum-address-default-derivation-path-for-trezor-mew">Ethereum Address (Default derivation path for Trezor, MEW)</h3>



<p><strong>Using Tokenlist randomcombination_bip39.txt</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8 9 10 11 12</td><td><code>boy hidden kidney famous spring convince rich season gloom ocean husband attitude</code></td></tr></tbody></table></figure>



<p><strong>Command</strong></p>



<pre id="__code_6" class="wp-block-code"><code>python3 seedrecover.py --no-dupchecks --mnemonic-length 12 --language EN --dsw --wallet-type ethereum --addr-limit 1 --addrs 0x66F9C09118B1C726BC24811a611baf60af42070A --tokenlist ./docs/Usage_Examples/2020-05-02_Descrambling_a_12_word_seed/randomcombination_bip39.txt --bip32-path "m/44'/60'/0'/0"
</code></pre>



<h3 id="legacy-btc-address-first-result">Legacy BTC Address (First Result)</h3>



<p><strong>Using Tokenlist firstcombination_bip39.txt</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8 9 10 11 12</td><td><code>boy attitude convince spring husband gloom season rich famous kidney hidden ocean</code></td></tr></tbody></table></figure>



<p><strong>Command</strong></p>



<pre id="__code_8" class="wp-block-code"><code>python3 seedrecover.py --no-dupchecks --mnemonic-length 12 --language EN --dsw --wallet-type BIP39 --addr-limit 1 --addrs 17GR7xWtWrfYm6y3xoZy8cXioVqBbSYcpU --tokenlist ./docs/Usage_Examples/2020-05-02_Descrambling_a_12_word_seed/firstcombination_bip39.txt
</code></pre>



<h3 id="legacy-btc-address-last-result">Legacy BTC Address (Last Result)</h3>



<p><strong>Using Tokenlist lastcombination_bip39.txt</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8 9 10 11 12</td><td><code>ocean hidden kidney famous rich season gloom husband spring convince attitude boy</code></td></tr></tbody></table></figure>



<p><strong>Command</strong></p>



<pre id="__code_10" class="wp-block-code"><code>python3 seedrecover.py --no-dupchecks --mnemonic-length 12 --language EN --dsw --wallet-type BIP39 --addr-limit 1 --addrs 17GR7xWtWrfYm6y3xoZy8cXioVqBbSYcpU --tokenlist ./docs/Usage_Examples/2020-05-02_Descrambling_a_12_word_seed/lastcombination_bip39.txt
</code></pre>



<h3 id="litecoin-native-segwit-address-seed-with-positional-anchors-for-known-words-last-word-as-any-valid-bip39-word-starting-with-b">Litecoin Native Segwit Address (Seed with Positional Anchors for known words, last word as any valid BIP39 word starting with ‘B’)</h3>



<p><strong>Using Tokenlist fixedwords_bip39.txt</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8 9 10 11 12</td><td><code>^1^ocean ^2^ocean ^3^ocean ^1^hidden ^2^hidden ^3^hidden ^1^kidney ^2^kidney ^3^kidney ^4^famous ^5^rich ^6^season gloom husband spring convince attitude baby bachelor bacon badge bag balance balcony ball bamboo banana banner bar barely bargain barrel base basic basket battle beach bean beauty because become beef before begin behave behind believe below belt bench benefit best betray better between beyond bicycle bid bike bind biology bird birth bitter black blade blame blanket blast bleak bless blind blood blossom blouse blue blur blush board boat body boil bomb bone bonus book boost border boring borrow boss bottom bounce box boy bracket brain brand brass brave bread breeze brick bridge brief bright bring brisk broccoli broken bronze broom brother brown brush bubble buddy budget buffalo build bulb bulk bullet bundle bunker burden burger burst bus business busy butter buyer buzz</code></td></tr></tbody></table></figure>



<p><strong>Command</strong></p>



<pre id="__code_12" class="wp-block-code"><code>python3 seedrecover.py --no-dupchecks --mnemonic-length 12 --language EN --dsw --wallet-type BIP39 --addr-limit 1 --addrs ltc1q9srpp39hev6dpsxjjp8t5g0m3z7509vc9llalv --tokenlist ./docs/Usage_Examples/2020-05-02_Descrambling_a_12_word_seed/fixedwords_bip39.txt --bip32-path "m/84'/2'/0'/0"
</code></pre>



<ul>
<li></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Multi-Device Descrambling 12 word Seed with Extra words&nbsp;(Demonstrates “Required” Anchors, “Positional” Anchors and Spreading Work Accross Multiple Devices)</p>



<h1 id="required-anchors-positional-anchors-and-spreading-work-accross-multiple-devices">“Required” Anchors, “Positional” Anchors and Spreading Work Accross Multiple Devices</h1>



<p>YouTube Video can be found here: TBC</p>



<h2 id="background"><strong>Background</strong></h2>



<p>In addition to being able to simply descramble a BIP39 seed using a tokenlist of potential words, BTCRecover can also be used in a situation where you may know the position of&nbsp;<em>some</em>&nbsp;words while also having additional decoy words in a seed phrase.</p>



<p><strong>Example tokenlist in use: tokenlist.txt</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17</td><td><code>+ ^1^ocean + ^2^hidden + ^3^kidney famous + ^5^rich + ^6^season + ^7^gloom husband spring + ^10^convince + ^11^attitude + ^12^boy glove section chunk brick sauce</code></td></tr></tbody></table></figure>



<p>For larger recovery jobs, BTCRecover also allows you to spread the workload over multiple devices. It’s important to understand that the process that BTCRecover uses is&nbsp;<strong>deterministic</strong>&nbsp;what this means in simple terms is that every time you run BTCRecover, it will search through potential passwords/passphrases in exactly the same order, every single time. The implication of this is that simply running it on two devices at the same time, without using the –workers command, will simply be doing the identical work twice…</p>



<p>Fortunately, you can split a search up into slices and assign these slices to different devices. The mechanism for this is extremely simple, basically assigning passwords in a “round robin” scheduling style. (eg: If the work is split up into three slices for three devices, each device will process every 3rd password) There is also the ability to assign multiple time slices to a single device in situations where one device may be multiple times faster than the others.</p>



<p>So let’s consider the example of two devices, PC1 and PC2. In this example, PC1 is twice as powerful as PC2, so will be assigned 2/3 of the work, while PC2 will be assigned 1/3.</p>



<h2 id="practical-limits">Practical Limits</h2>



<p>Working out how many potential passwords there are in a situation like this is quite straight forward.</p>



<p>For example, if you have a list of 20 words and know the postition of 3 of them within the 12 word seed, then there will be:</p>



<p>17 * 16 * 15 * 14 * 13 * 12 * 11 * 10 * 9 = 8,821,612,800 possible seeds (Very do-able in a few days depending on your CPU power available)</p>



<h2 id="running-btcrecover">Running BTCRecover</h2>



<p>Both PCs will need BTCRecover installed and both use the identical command, with the exception of the –worker command which is different for each PC. (We can just ignore the fact that this tokenlist only produces a very small set to test)</p>



<p>The devices don’t need to be running the same operating system, nor do they need to communicate with each other in any way…</p>



<h3 id="command-on-pc-1">Command on PC 1</h3>



<p>So we want to assign work slices 1 and 2 to PC1</p>



<p><strong>Command</strong></p>



<pre id="__code_2" class="wp-block-code"><code>python3 seedrecover.py --no-dupchecks --mnemonic-length 12 --language EN --dsw --wallet-type BIP39 --addr-limit 1 --addrs 17GR7xWtWrfYm6y3xoZy8cXioVqBbSYcpU --tokenlist ./docs/Usage_Examples/2020-05-23_multi_device_descrambling_12_word_seed_with_extras/tokenlist.txt
 --no-eta --worker 1,2/3
</code></pre>



<h3 id="command-on-pc-2">Command on PC 2</h3>



<p>And work slice 3 to PC2</p>



<p><strong>Command</strong></p>



<pre id="__code_3" class="wp-block-code"><code>python3 seedrecover.py --no-dupchecks --mnemonic-length 12 --language EN --dsw --wallet-type BIP39 --addr-limit 1 --addrs 17GR7xWtWrfYm6y3xoZy8cXioVqBbSYcpU --tokenlist ./docs/Usage_Examples/2020-05-23_multi_device_descrambling_12_word_seed_with_extras/tokenlist.txt
 --no-eta --worker 3/3
</code></pre>



<h3 id="the-outcome">The Outcome…</h3>



<p>In this example, the correct seed phrase is found by PC2. Since there is no communication between the devices, PC1 will continue searching until it has exhausted the search space.</p>



<p>This also highlights that you need to pay careful attention to what you are doing when using this command. If you accidentally forget to assign a work share to a PC, or assign the same shares twice, BTCrecover will have no way to know this has occured and no result will be found if the correct password would have occured in the untested share.</p>



<h3 id="closing-thoughts">Closing Thoughts</h3>



<p>Using the –no-eta command can be useful in situations like this as it will show you the current speed at which a device is checking passwords. It will also start immediately. (Which can be good if you are paying for cloud server time)</p>



<p>One way that it an be useful to use this command is if you have already started a password search on your PC and know how many passwords will need to be checked, it can speed things up to run with –no-eta and just manually work out how long things will take.</p>



<p>If you have started doing a seed recovery on a single device and want to move to a multi-device setup, but don’t want to re-check the passwords already tested on a single device, you can take note of how many passwords the single device had tested and just use the –skip command when restarting the test across multiple devices.</p>



<ul>
<li></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Grouping words together in tokenlist based seed recoveries&nbsp;(Demonstrates descrambling a 24 word seed where there several groups of words known to follow one another, but the position of these groups within the seed is unknown)</p>



<h1 id="grouping-words-together-in-tokenlist-based-seed-recoveries">Grouping words together in tokenlist based seed recoveries</h1>



<h2 id="background">Background</h2>



<p>Sometimes there are recoveries where someone may have either written their seed in such a way that they are unsure of the order, or split the backup in to multiple parts. Either way, this can mean that are words grouped together in such a way that their relative ordering is known, but the position of these words within the larger seed is not.</p>



<p>In situations like this, you can use a single comma character&nbsp;<code>,</code>&nbsp;(No space, just a single comma) for words within a tokenlist to indicate that words must be used together, in the provided order. This is similar to the “relative anchor” feature, but is both far more efficient and also allows for multiple word groupings.</p>



<p>Grouped word tokens can also be used in conjunction with other types of anchors, positional, etc.</p>



<p>Using these tokens also means that the number of tokens will no longer equal the mnemonic length (as it typically does for descrambling with single word tokens) so you can also make use of the&nbsp;<code>--min-tokens</code>&nbsp;and&nbsp;<code>--max-tokens</code>&nbsp;arguments to specify the minimum number of tokens that should be tried for any given seed guess. (A comma separated group of words counts as a single token)</p>



<p>Like with seed descrambling, the ceiliing for this sort of recovery is based off the number of tokens, generally (without positional anchors) there will be max-tokens! (max-tokens factorial) possible seeds to check.</p>



<h2 id="example">Example</h2>



<p>The following example uses the following tokenlist:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8 9 10 11 12</td><td><code>^basic,dawn,renew,punch,arch,situate arrest,question,armor hole,lounge,practice resist zoo,zoo,zoo indicate,call lens,group,empty zoo husband verify,eternal,injury battle,satoshi brother,damp,this</code></td></tr></tbody></table></figure>



<p>You can see in this tokenlist that there are a few blocks of tokens that we are sure are in the correct order, (Including a positional anchor for one of the groups of seed words) as well as a few extra/single words.</p>



<p>And is run with the following command (Will find a result in a few seconds)</p>



<pre id="__code_2" class="wp-block-code"><code>python3 seedrecover.py --tokenlist ./docs/Usage_Examples/2022-04-02_Seed_Tokenlist_TokenBlocks/tokengroups_tokenlist.txt --mnemonic-length 24 --language en --wallet-type bip39 --addrs 1PTcESpqrmWePYB5h18Ni11QTKNfMkdSYJ --dsw --addr-limit 10 --max-tokens 9 --min-tokens 8
</code></pre>



<p>The correct seed is:&nbsp;<code>basic dawn renew punch arch situate resist indicate call lens group empty brother damp this verify eternal injury arrest question armor hole lounge practice</code></p>



<p>And as you can see, this is made up of some of the token-groups included in the tokenlist file above.</p>



<ul>
<li></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 id="password-recovery">Password Recovery</h2>



<p>Basic Password Recoveries&nbsp;(Demonstrates the basic commands that you would use for a recovery with various types of wallets)</p>



<h1 id="basic-passwordpassphrase-recoveries">Basic Password/Passphrase Recoveries</h1>



<p>None of these examples are concerned with arguments that you would use for different types of typos, tokenlists, etc.</p>



<p>The idea is that, if you are running this tool on Windows, you can directly copy/paste any of these examples. (They all use the same seeds and addresses that are in the automatic tests)</p>



<p>They will all find a result almost straight away.</p>



<p><strong>Basic Passwordlist used in basic examples below</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5</td><td><code>btcr-test-password btcr-test-password:p2pkh btcr-test-password:p2wpkh btcr-test-password:p2wpkh-p2sh btcrtestpassword2022</code></td></tr></tbody></table></figure>



<h2 id="bip38-encrypted-paper-wallet-recovery">BIP38 Encrypted Paper Wallet Recovery.</h2>



<p><strong>Notes</strong>&nbsp;BIP38 wallets are encrypted via sCrypt, so will be very slow to brute-force. GPU acceleration for these wallets is available, but doesn’t offer much of a performance boost unless you have multiple GPUs or a particularly powerful GPU relative to your CPU… (Or some kind of dedicated OpenCL accelerator)</p>



<p><strong>Supported wallets</strong></p>



<ul>
<li><a href="https://www.bitaddress.org/">bitaddress.org</a></li>



<li><a href="https://liteaddress.org/">liteaddress.org</a></li>



<li><a href="https://paper.dash.org/">paper.dash.org</a></li>
</ul>



<p>And just about any other BIP38 encrypted private keys.</p>



<p><strong>Commands</strong></p>



<p>For Bitcoin (No coin needs to be specified, Bitcoin is checked by default)</p>



<pre id="__code_2" class="wp-block-code"><code>python3 btcrecover.py --bip38-enc-privkey 6PnM7h9sBC9EMZxLVsKzpafvBN8zjKp8MZj6h9mfvYEQRMkKBTPTyWZHHx --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<p>For Litecoin</p>



<pre id="__code_3" class="wp-block-code"><code>python3 btcrecover.py --bip38-enc-privkey 6PfVHSTbgRNDaSwddBNgx2vMhMuNdiwRWjFgMGcJPb6J2pCG32SuL3vo6q --bip38-currency litecoin --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<p>For Dash</p>



<pre id="__code_4" class="wp-block-code"><code>python3 btcrecover.py --bip38-enc-privkey 6PnZC9Snn1DHyvfEq9UKUmZwonqpfaWav6vRiSVNXXLUEDAuikZTxBUTEA --bip38-currency dash --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<h2 id="bip39-passphrase-protected-wallets-electrum-extra-words">BIP39 Passphrase Protected Wallets &amp; Electrum “Extra Words”</h2>



<p><strong>Notes</strong>&nbsp;The language used to refer to a BIP39 passpharse can vary betwen vendors. Sometimes it is talked about as a “25th word”, other times a “plausible deniability passphrase” or sometimes just as “passphrase”. Just note that this is different from your wallet password or PIN.</p>



<p>The most common symptom of you having an error in your BIP39 passphrase is that your seed+passhrase will produce a set of completely empty accounts, with no balance or transaction history. (Every BIP39 passphrase is valid, so you will not get any kind of error message)</p>



<p>While BIP39 seed recovery can benefit from GPU acceleration, this is currently not the case for recovering a BIP39 passphrase.</p>



<p>All of the example commands below have the address generation limit set to 10, so the address they are searching for needs to be within the first 10 addresses in the wallet.</p>



<p><strong>Supported wallets</strong></p>



<ul>
<li>Most hardware wallets that support BIP39/44
<ul>
<li>Trezor (One and T)</li>



<li>Ledger Nano (S and X)</li>



<li>Keepkey</li>



<li>Coldcard</li>



<li>Bitbox02</li>



<li>Cobo Vault Pro</li>
</ul>
</li>



<li>Most Software Wallets that support BIP39/44
<ul>
<li>Wasabi Wallet (Wasabi refers to this as your wallet password)</li>



<li>Samourai Wallet</li>



<li>Coinomi</li>



<li>Mycelium</li>



<li>Zillet (Referrs to BIP39 passphrase as a “password based” wallet type)</li>



<li>Electrum</li>



<li>Exodus</li>
</ul>
</li>
</ul>



<p><strong>Commands</strong></p>



<p>Basic Bitcoin Command, so no need to specify&nbsp;<code>--wallet-type</code>&nbsp;This will support all Bitcoin address types (Legacy, Segwit or Native Segwit) without the need to add any additional parameters.</p>



<pre id="__code_5" class="wp-block-code"><code>python3 btcrecover.py --bip39 --addrs 1AmugMgC6pBbJGYuYmuRrEpQVB9BBMvCCn --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "certain come keen collect slab gauge photo inside mechanic deny leader drop"
</code></pre>



<p>Basic Bitcoin Electrum Wallet Command. These aren’t BIP39, so need to use&nbsp;<code>--wallet-type electrum2</code>&nbsp;This will support both Legacy and Segwit Electrum wallets without any additional parameters. (It will also work with most Electrum Altcoin clones)</p>



<pre id="__code_6" class="wp-block-code"><code>python3 btcrecover.py --wallet-type electrum2 --addrs bc1q6n3u9aar3vgydfr6q23fzcfadh4zlp2ns2ljp6 --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "quote voice evidence aspect warfare hire system black rate wing ask rug"
</code></pre>



<p>Basic Ethereum Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied)</p>



<pre id="__code_7" class="wp-block-code"><code>python3 btcrecover.py --wallet-type ethereum --addrs 0x4daE22510CE2fE1BC81B97b31350Faf07c0A80D2 --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "cable top mango offer mule air lounge refuse stove text cattle opera"
</code></pre>



<p>Basic Zilliqa Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied)This will support all address types (Base16 and Bech32) without the need to add any additional parameters.</p>



<p>Note: Zilliqa seed recovery can’t be used as the basis for recovering a Ledger Nano seed/passphrase at this time.</p>



<pre id="__code_8" class="wp-block-code"><code>python3 btcrecover.py --wallet-type zilliqa --addrs zil1dcsu2uz0yczmunyk90e8g9sr5400c892yeh8fp --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "cable top mango offer mule air lounge refuse stove text cattle opera"
</code></pre>



<p>Basic Bitcoin Cash Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied) This will accept either Cashaddres or Legacy style addresses… This will also work for BCH forks like BSV…</p>



<pre id="__code_9" class="wp-block-code"><code>python3 btcrecover.py --wallet-type bch --addrs bitcoincash:qqv8669jcauslc88ty5v0p7xj6p6gpmlgv04ejjq97 --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "cable top mango offer mule air lounge refuse stove text cattle opera"
</code></pre>



<p>Basic Cardano, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied) For Cardano recovers,&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/bip39-accounts-and-altcoins/">see the notes here as well.</a>&nbsp;This will accept either base or stake addresses… (Byron-Era addresses are not supported))</p>



<pre id="__code_10" class="wp-block-code"><code>python3 btcrecover.py --wallet-type cardano --addrs addr1q90kk6lsmk3fdy54mqfr50hy025ymnmn5hhj8ztthcv3qlzh5aynphrad3d26hzxg7xzzf8hnmdpxwtwums4nmryj3jqk8kvak --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "ocean hidden kidney famous rich season gloom husband spring convince attitude boy"
</code></pre>



<p>Basic Dash Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied)</p>



<pre id="__code_11" class="wp-block-code"><code>python3 btcrecover.py --wallet-type dash --addrs XuTTeMZjUJuZGotrtTPRCmHCaxnX44a2aP --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "cable top mango offer mule air lounge refuse stove text cattle opera"
</code></pre>



<p>Basic Dogecoin Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied)</p>



<pre id="__code_12" class="wp-block-code"><code>python3 btcrecover.py --wallet-type dogecoin --addrs DSTy3eptg18QWm6pCJGG4BvodSkj3KWvHx --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "cable top mango offer mule air lounge refuse stove text cattle opera"
</code></pre>



<p>Basic Vertcoin Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied) This will support all address types (Legacy, Segwit or Native Segwit) without the need to add any additional parameters.</p>



<pre id="__code_13" class="wp-block-code"><code>python3 btcrecover.py --wallet-type vertcoin --addrs Vwodj33bXcT7K1uWbTqtk9UKymYSMeaXc3 --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "cable top mango offer mule air lounge refuse stove text cattle opera"
</code></pre>



<p>Basic Litecoin Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied) This will support all address types (Legacy, Segwit or Native Segwit) without the need to add any additional parameters.</p>



<pre id="__code_14" class="wp-block-code"><code>python3 btcrecover.py --wallet-type litecoin --addrs LdxLVMdt49CXcrnQRVJFRs8Yftu9dE8xxP --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "cable top mango offer mule air lounge refuse stove text cattle opera"
</code></pre>



<p>Basic Monacoin Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied) This will support all address types (Legacy, Segwit or Native Segwit) without the need to add any additional parameters.</p>



<pre id="__code_15" class="wp-block-code"><code>python3 btcrecover.py --wallet-type monacoin --addrs MHLW7WdRKE1XBkLFS6oaTJE1nPCkD6acUd --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "cable top mango offer mule air lounge refuse stove text cattle opera"
</code></pre>



<p>Basic DigiByte Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied) This will support all address types (Legacy, Segwit or Native Segwit) without the need to add any additional parameters.</p>



<pre id="__code_16" class="wp-block-code"><code>python3 btcrecover.py --wallet-type digibyte --addrs DNGbPa9QMbLgeVspu9jb6EEnXjJASMvA5r --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "cable top mango offer mule air lounge refuse stove text cattle opera"
</code></pre>



<p>Basic GroestleCoin Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied) This will support all address types (Legacy, Segwit or Native Segwit) without the need to add any additional parameters.</p>



<p>Note: This needs the groestlecoin_hash module to be installed…</p>



<pre id="__code_17" class="wp-block-code"><code>python3 btcrecover.py --wallet-type groestlecoin --addrs FWzSMhK2TkotZodkApNxi4c6tvLUo7MBWk --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "cable top mango offer mule air lounge refuse stove text cattle opera"
</code></pre>



<p>Basic Ripple Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied)</p>



<pre id="__code_18" class="wp-block-code"><code>python3 btcrecover.py --wallet-type ripple --addrs rwv2s1wPjaCxmEFRm4j724yQ5Lh161mzwK --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "cable top mango offer mule air lounge refuse stove text cattle opera"
</code></pre>



<p>Basic Tron Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied)</p>



<pre id="__code_19" class="wp-block-code"><code>python3 btcrecover.py --wallet-type tron --addrs TGvJrj5D8qdzhcppg9RoLdfbEjDYCne8xc --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "have hint welcome skate cinnamon rabbit cable payment gift uncover column duck scissors wedding decorate under marine hurry scrub rapid change roast print arch" 
</code></pre>



<p>Basic Polkadot(Substrate) Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied)</p>



<p>This command will search for the correct “secret derivation path”</p>



<pre id="__code_20" class="wp-block-code"><code>python3 btcrecover.py --wallet-type polkadotsubstrate --addrs 12uMBgecqfkHTYZE4GFRx847CwR7sfs2bTdPbPLpzeMDGFwC --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "toilet assume drama keen dust warrior stick quote palace imitate music disease" --substrate-path "//hard/soft"
</code></pre>



<p>Basic Stacks Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied) This example also has the address generation limit set to 10, so will check the first 10 “accounts” for a given seed+passphrase.</p>



<pre id="__code_21" class="wp-block-code"><code>python3 btcrecover.py --wallet-type stacks --addrs SP2KJB4F9C91R3N5XSNQE0Z3G34DNJWQYTP3PBJTH --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --mnemonic "ocean hidden kidney famous rich season gloom husband spring convince attitude boy" --addr-limit 10
</code></pre>



<h2 id="brainwallets">Brainwallets</h2>



<p><strong>Notes</strong>&nbsp;Brainwallets are a very old (<strong>and very unsafe</strong>) type of wallet. Given this, most of them still produce addresses based on “uncompressed”</p>



<p><strong>Supported wallets</strong></p>



<ul>
<li>Sha256(Passphrase) Wallets
<ul>
<li><a href="https://www.bitaddress.org/">bitaddress.org</a></li>



<li><a href="https://segwitaddress.org/">segwitaddress.org</a></li>



<li><a href="https://liteaddress.org/">liteaddress.org</a></li>



<li><a href="https://paper.dash.org/">paper.dash.org</a></li>
</ul>
</li>



<li>Warpwallet Wallets
<ul>
<li><a href="https://keybase.io/warp/">WarpWallet</a></li>



<li><a href="https://dvdbng.github.io/memwallet/">Memwallet</a></li>



<li><a href="https://patcito.github.io/mindwallet/">Mindwallet</a></li>
</ul>
</li>
</ul>



<h3 id="sha256passphrase-wallets">Sha256(Passphrase) Wallets</h3>



<p><strong>Commands</strong></p>



<p>Basic Bitcoin Command (Will check both compressed and uncompressed address types, even though in this example this is a compressed address)</p>



<pre id="__code_22" class="wp-block-code"><code>python3 btcrecover.py --brainwallet --addrs 1BBRWFHjFhEQc1iS6WTQCtPu2GtZvrRcwy --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<p>Bitcoin Wallet, but set to only check uncompressed addresses. (Only use this for VERY old wallets that you are sure aren’t a compressed address, though also consider that uncompressed is the default… Only gives a small speed boost)</p>



<pre id="__code_23" class="wp-block-code"><code>python3 btcrecover.py --brainwallet --addrs 1MHoPPuGJyunUB5LZQF5dXTrLboEdxTmUm --skip-compressed --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<p>P2SH Bitcoin Wallet (Like the kind you would get of something like segwitaddress.org, as of 2021, these are all compressed type addresses, so can skip checking uncomrpessed ones…)</p>



<pre id="__code_24" class="wp-block-code"><code>python3 btcrecover.py --brainwallet --addrs 3C4dEdngg4wnmwDYSwiDLCweYawMGg8dVN --skip-uncompressed --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<p>Bech32 Bitcoin Wallet. (From segwitaddress.org)</p>



<pre id="__code_25" class="wp-block-code"><code>python3 btcrecover.py --brainwallet --addrs bc1qth4w90jmh0a6ug6pwsuyuk045fmtwzreg03gvj --skip-uncompressed --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<p>Litecoin Wallet (From liteaddress.org – These are all uncompressed with no option to use compressed) No extra arguments are needed for these types of wallets.</p>



<pre id="__code_26" class="wp-block-code"><code>python3 btcrecover.py --brainwallet --addrs LfWkecD6Pe9qiymVjYENuYXcYpAWjU3mXw --skip-compressed --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<p>Dash Wallet (From paper.dash.org) – No compression parameters specificed, so it will just check both</p>



<pre id="__code_27" class="wp-block-code"><code>python3 btcrecover.py --brainwallet --addrs XvyeDeZAGh8Nd7fvRHZJV49eAwNvfCubvB --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<p>Dash Wallet (From paper.dash.org – Or if you know you used a compressed one… (Though Uncompressed is the default)</p>



<pre id="__code_28" class="wp-block-code"><code>python3 btcrecover.py --brainwallet --addrs XksGLVwdDQSzkxK1xPmd4R5grcUFyB3ouY --skip-uncompressed --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<h3 id="warpwallets">Warpwallets</h3>



<p>Note: At this time, only Bitcoin and Litecoin are supported… (Eth could be easily added)</p>



<p><strong>Commands</strong></p>



<p>Basic Bitcoin Wallet with “btcr-test-password” as the salt. (Warpwallet suggested using your email address) These wallets are all “uncompressed” type, but the performance gain for this is so small compared to how long the sCrypt operation takes, it isn’t worth not checking both types…</p>



<pre id="__code_29" class="wp-block-code"><code>python3 btcrecover.py --warpwallet --warpwallet-salt btcr-test-password --addrs 1FThrDFjhSf8s1Aw2ed5U2sTrMz7HicZun --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<p>Basic Litecoin Wallet with “btcr-test-password” as the salt. (Like what memwallet or mindwallet produces, so you need to add the –crypto argment and specify litecoin) These wallets are all “uncompressed” type, but the performance gain for this is so small compared to how long the sCrypt operation takes, it isn’t worth not checking both types…</p>



<pre id="__code_30" class="wp-block-code"><code>python3 btcrecover.py --warpwallet --warpwallet-salt btcr-test-password --crypto litecoin --addrs LeBzGzZFxRUzzRAtm8EB2Dw74jRfQqUZeq --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<h2 id="blockio-wallets">Block.io Wallets</h2>



<p>You would first download the wallet file using the instructions in the extract scripts section of the documentation.</p>



<p>You would then do a basic recovery with a command like the one below. (This command uses a sample wallet file bunlded with BTCRecover)</p>



<pre id="__code_31" class="wp-block-code"><code>python3 btcrecover.py --wallet ./btcrecover/test/test-wallets/block.io.request.json --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<h2 id="dogechaininfo-wallets">Dogechain.info Wallets</h2>



<p>You would first download the wallet file using the instructions in the extract scripts section of the documentation. You can also use an extract script to securely run dogechain.info wallets on rented hardware.&nbsp;See here for more info about Extract Scripts…</p>



<p>You would then do a basic recovery with a command like the one below. (This command uses a sample wallet file bunlded with BTCRecover)</p>



<pre id="__code_32" class="wp-block-code"><code>python3 btcrecover.py --wallet ./btcrecover/test/test-wallets/dogechain.wallet.aes.json --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<h2 id="ethereum-keystores">Ethereum Keystores</h2>



<p>Do a basic recovery with a command like the one below. (This command uses a sample wallet file bunlded with BTCRecover)</p>



<pre id="__code_33" class="wp-block-code"><code>python3 btcrecover.py --wallet ./btcrecover/test/test-wallets/utc-keystore-v3-scrypt-myetherwallet.json --passwordlist ./docs/Usage_Examples/common_passwordlist.txt
</code></pre>



<h2 id="slip39-passphrases">SLIP39 Passphrases</h2>



<p>This uses much of the same syntax as recovering BIP39 passphrases. BTCRecover currently supports most of the coins that are supported by the Trezor T.</p>



<p>The main difference is that instead of entering a single mnemonic, you can either enter the SLIP39 shares via the command line as below, or you will be promtpted for them. You need to have a quorum of SLIP39 shares to be able to do a passphrase recovery…</p>



<p>Basic Bitcoin Command, so no need to specify&nbsp;<code>--wallet-type</code>&nbsp;This will support all Bitcoin address types (Legacy, Segwit or Native Segwit) without the need to add any additional parameters.</p>



<pre id="__code_34" class="wp-block-code"><code>python3 btcrecover.py --slip39 --addrs bc1q76szkxz4cta5p5s66muskvads0nhwe5m5w07pq --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --slip39-shares "hearing echo academic acid deny bracelet playoff exact fancy various evidence standard adjust muscle parcel sled crucial amazing mansion losing" "hearing echo academic agency deliver join grant laden index depart deadline starting duration loud crystal bulge gasoline injury tofu together"
</code></pre>



<p>Basic Ethereum Command, so need to specifcy the&nbsp;<code>--wallet-type</code>&nbsp;(But can leave off the&nbsp;<code>--bip39</code>&nbsp;argument, as it is implied)</p>



<pre id="__code_35" class="wp-block-code"><code>python3 btcrecover.py --slip39 --wallet-type ethereum --addrs 0x0Ef61684B1E671dcBee4D51646cA6247487Ef91a --addr-limit 10 --passwordlist ./docs/Usage_Examples/common_passwordlist.txt --slip39-shares "hearing echo academic acid deny bracelet playoff exact fancy various evidence standard adjust muscle parcel sled crucial amazing mansion losing" "hearing echo academic agency deliver join grant laden index depart deadline starting duration loud crystal bulge gasoline injury tofu together"
</code></pre>



<h2 id="raw-private-keys">Raw Private Keys</h2>



<p>BTCRecover an also be used to recover from situations where you have a damaged private key.</p>



<p>This is handled in a similar way to a password recovery, so your private key guesses go in a tokenlist, using the %h wildcard to substitute hexidecimal characters or %b to substitute base58 characters. You can use either a tokenlist or a passwordlist, depending on your situation, as well as the standard typos. If you are using a tokenlist, you will just need to ensure that the private keys being produced match the length and characters required for a private key…</p>



<p>If you know the address that the private key corresponds to, you can supply that, alternatively you can use an AddressDB.</p>



<h3 id="raw-eth-private-keys">Raw Eth Private Keys</h3>



<p>You will also notice that the leading “0x” needs to be removed from the private key.</p>



<p><strong>Example tokenlist</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1</td><td><code>5db77aa7aea5%2h7d6b4c64dab21%h972cf4763d4937d3e6e17f580436dcb10%3h</code></td></tr></tbody></table></figure>



<p>The tokenlist above is an example is a standard Eth private key (with the leading 0x removed) where there are three damanged parts. One single character (%h), one two-character (%2h) and one three-character (%3h) It will take about 20 mintes to run…</p>



<pre id="__code_37" class="wp-block-code"><code>python3 btcrecover.py --rawprivatekey --addrs 0xB9644424F9E639D1D0F27C4897e696CC324948BB --wallet-type ethereum --tokenlist ./docs/Usage_Examples/eth_privkey_tokenlist.txt
</code></pre>



<h2 id="raw-bitcoin-private-keys">Raw Bitcoin Private Keys</h2>



<p>Bitcoin private keys are supported in both Compressed and Uncompressed formats in Base58 and also as raw Hexidecimal keys.</p>



<p>If you are using a tokenlist (as in the examples below) with multiple private keys, one per line, you will also want to specify the “–max-tokens 1” argument.</p>



<p><strong>Example tokenlist</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1</td><td><code>5db77aa7aea5%2h7d6b4c64dab21%h972cf4763d4937d3e6e17f580436dcb10%3h</code></td></tr></tbody></table></figure>



<p>The command below will attempt a recovery for an old-style, uncompressed private key with one missing character, using a tokenlist containing three possible private keys.</p>



<pre id="__code_39" class="wp-block-code"><code>python3 btcrecover.py --rawprivatekey --addrs 1EDrqbJMVwjQ2K5avN3627NcAXyWbkpGBL --wallet-type bitcoin --max-tokens 1 --tokenlist ./docs/Usage_Examples/btc_privkey_tokenlist.txt
</code></pre>



<p>The command below will attempt a recovery for a more modern (compresseed, native-segwit address) private key with one missing character, using a tokenlist containing three possible private keys.</p>



<pre id="__code_40" class="wp-block-code"><code>python3 btcrecover.py --rawprivatekey --addrs bc1qafy0ftpk5teeayjaqukyd244un8gxvdk8hl5j6 --wallet-type bitcoin --max-tokens 1 --tokenlist ./docs/Usage_Examples/btc_privkey_tokenlist.txt
</code></pre>



<p>You can also do raw private key repair, even if you don’t have a record of the corresponding address, through using an AddressDB. (Also works for Eth, BCH, etc…)</p>



<pre id="__code_41" class="wp-block-code"><code>python3 btcrecover.py --rawprivatekey --addressdb ./btcrecover/test/test-addressdbs/addresses-BTC-Test.db --wallet-type bitcoin --max-tokens 1 --tokenlist ./docs/Usage_Examples/btc_privkey_tokenlist.txt
</code></pre>



<ul>
<li></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Recovering Blockchain.com Wallet Passwords&nbsp;(Demonstrates recovering Blockchain.com wallet, using an Extract script, tokenLists, passwordlists and different types or typos)</p>



<h1 id="recovering-blockchaincom-wallets">Recovering Blockchain.com Wallets</h1>



<h4 id="previously-known-as-blockchaininfo"><em>Previously known as blockchain.info</em></h4>



<h2 id="overview">Overview</h2>



<p>As of 2020, all blockchain.com wallets will require that you first use&nbsp;this extract script&nbsp;to download the wallet file.</p>



<p>Once you have that file, there are two ways that blockchain.com wallets can be recovered.</p>



<p><strong>1) Using the wallet file directly</strong></p>



<p>Running BTCRecover with a wallet.aes.json file downloaded from blockchain.com. This is the “normal” way of running BTCRecover where the person/PC running BTCRecover will have enough information to immediately use the recovered wallet file. (You will therefore want to take precautions around the environment you run BTCRecover in)</p>



<p><strong>2) Using a wallet file “extract”</strong></p>



<p>Extracting a small amount of data from the wallet file and running BTCRecover with that… What this means is that you can either give this portion of data to someone else to recover for you, or run it on some cloud based machine, without having to worry about it leaking info that would allow someone to steal your crypto. (You therefore don’t need to worry as much about the security of the environmen in which you run BTCRecover)</p>



<p>Using a wallet extract requires a few extra steps…&nbsp;See here for more info about Extract Scripts…</p>



<h2 id="example-1-using-a-tokenlist-to-recover-wallet-main-password-from-a-wallet-file">Example 1 – Using a TokenList to recover wallet Main Password from a wallet file</h2>



<h3 id="download-the-wallet-file">Download the wallet file…</h3>



<p>Navigate to the BTCRecover folder and run:&nbsp;<strong>Command</strong></p>



<p><code>python ./extract-scripts/download-blockchain-wallet.py</code></p>



<p>You will then be prompted for your walletID, will need to confirm the request via email and enter any required 2fa code. (In the video I use 558751da-d609-486d-88a5-623434a48368, but you won’t have access to my email account to confirm that…)</p>



<p>This will then create a file wallet.aes.json (Which can just be left in your BTCRecover folder be used instead of the wallet file in any of the examples below)</p>



<h3 id="create-the-tokenlist-file">Create the TokenList File</h3>



<p><strong>Example Tokenlist – tokenListTest.txt</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8</td><td><code>^1^btcr test pass word - _ ! = @ - _ ! = @ - _ ! = @ 2012 2013 2014 2015 2016 2017 2018 2019 2020</code></td></tr></tbody></table></figure>



<p>This file contains some basic tokens that make up the password. (Useful if you re-use sentences, words or phrases in passwords) It has one anchored token (eg: We know which token we started with) as well as some examples of OR type tokens where it will only select one per row. (In this case, let’s say you used one of these characters – _ ! = @ in between words and also tended to add the year in there somewhere)</p>



<h3 id="run-btcrecover-on-the-wallet-file">Run BTCRecover on the Wallet File</h3>



<p><strong>Command</strong></p>



<p><code>python3 btcrecover.py --wallet btcrecover/test/test-wallets/blockchain-v3.0-MAY2020-wallet.aes.json --typos-capslock --tokenlist ./docs/Usage_Examples/2020-05-08_Recovering_Blockchain_Wallet_Passwords/tokenListTest.txt</code></p>



<p>If you had downloaded the wallet file as above, you would have a file wallet.aes.json in your BTCRecover folder. (You can copy it from this example folder if you like) You would then just use the command:</p>



<p><strong>Command</strong></p>



<p><code>python3 btcrecover.py --wallet wallet.aes.json --typos-capslock --tokenlist ./docs/Usage_Examples/2020-05-08_Recovering_Blockchain_Wallet_Passwords/tokenListTest.txt</code></p>



<h2 id="example-2-using-a-passwordlistcommontypos-to-recover-a-wallet-second-password-from-a-wallet-file">Example 2 – Using a PasswordList+CommonTypos to recover a wallet Second Password from a wallet file</h2>



<h3 id="download-the-wallet-file-the-same-as-in-the-previous-example">Download the Wallet File the same as in the previous example…</h3>



<p>Using the password that we found from the previous step…&nbsp;<em>btcr-test-password</em></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h3 id="create-the-passwordlist-file">Create the PasswordList File</h3>



<p><strong>Example Passwordlist: passwordListTest_1.txt</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21</td><td><code>Btcr-Test-Passwords 123456 12345 123456789 password iloveyou princess 1234567 rockyou 12345678 abc123 nicole daniel babygirl monkey lovely jessica 654321 michael ashley qwerty</code></td></tr></tbody></table></figure>



<p>This file contains the correct password with 4 typos in it + the first twenty options off the RockYou password list…</p>



<h3 id="run-btcrecover-on-the-wallet-file_1">Run BTCRecover on the Wallet File</h3>



<p><strong>Command</strong></p>



<pre id="__code_3" class="wp-block-code"><code>python3 btcrecover.py --wallet btcrecover/test/test-wallets/blockchain-v2.0-wallet.aes.json --blockchain-secondpass --typos-case --typos-delete --typos 4 --passwordlist docs/Usage_Examples/2020-05-08_Recovering_Blockchain_Wallet_Passwords/passwordListTest_1.txt
</code></pre>



<h2 id="example-3-same-as-example-2-but-using-a-wallet-extract">Example 3 – Same as example 2 but using a wallet extract</h2>



<h3 id="extract-sample-data-from-a-wallet-file-to-solve-a-second-password">Extract Sample Data from a Wallet File to solve a second password</h3>



<p><strong>Command</strong></p>



<p><code>python ./extract-scripts/extract-blockchain-second-hash.py ./btcrecover/test/test-wallets/blockchain-v2.0-wallet.aes.json</code>&nbsp;We will then be prompted for the main wallet password which we know is btcr-test-password</p>



<p>This script will then return the data:</p>



<p><code>Blockchain second password hash, salt, and iter_count in base64: YnM6LeP7peG853HnQlaGswlwpwtqXKwa/1rLyeGzvKNl9HpyjnaeTCZDAaC4LbJcVkxaECcAACwXY6w=</code></p>



<h3 id="run-btcrecover-with-the-extracted-script">Run BTCRecover with the Extracted Script</h3>



<p><strong>Command</strong></p>



<p><code>python3 btcrecover.py --data-extract --typos-case --typos-delete --typos 4 --passwordlist docs/Usage_Examples/2020-05-08_Recovering_Blockchain_Wallet_Passwords/passwordListTest_1.txt</code></p>



<p>You will be prompted to enter the data extract, so paste&nbsp;<code>YnM6LeP7peG853HnQlaGswlwpwtqXKwa/1rLyeGzvKNl9HpyjnaeTCZDAaC4LbJcVkxaECcAACwXY6w=</code>&nbsp;from the previous step.</p>



<ul>
<li></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Multi-GPU Accelerated Recovery using Vast.ai&nbsp;(Demonstrates use of the vast.ai service with wallet extracts and also arguments required for mutli-gpu accelerated recovery of Blockchain.com and Bitcoin Core Wallets)</p>



<h1 id="multi-gpu-password-recovery-using-vastai">Multi-GPU Password Recovery using Vast.ai</h1>



<p class="has-text-align-center"><iframe loading="lazy" width="560" height="315" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/8Zqc-2Te3zQ.html" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>



<h2 id="background">Background</h2>



<p>Vast.ai is a service where users around the world can rent out their spare GPU power. It is often cheaper and faster than using rented services from commercial providers like Google or Amazon… This service is mostly used for training AIs but is also useful for running OpenCL processes like BTCRecover and Hashcat.</p>



<p>This is great in that if you don’t have a powerful GPU, it makes it possible to cheaply attempt password recovery in a matter of hours that might take weeks if run on your own hardware, particularly if you only have a CPU and not a powerful GPU… (Or are otherwise unable to run a process like this that might take several days) It is particularly useful with BTCRecover when run using a wallet extract, in that this allows you to securely recover the password without the possibility that the rented server owner can steal your funds.</p>



<p>It is also significantly cheaper than renting CPU time with a commercial service like Linode, particularly if you can rent multiple powerful servers, complete the search quickly, while still paying a similar price/hashrate. (Eg: A system that is 10x as powerful is often about 10x the price, all billed in 1s increments, so easy to only use what you need)</p>



<p><strong>This process is not secure for seed recovery, BIP39 seed recovery or where you upload the wallet file to the cloud server… At this time, BIP39 seed recovery also bottleknecks badly on CPU, so will see little benefit from this approach…</strong></p>



<h2 id="performance">Performance</h2>



<p>Blockchain.com Bechmark</p>



<pre id="__code_1" class="wp-block-code"><code>python3 btcrecover.py --wallet ./btcrecover/test/test-wallets/blockchain-v3.0-MAY2020-wallet.aes.json --performance --enable-opencl
</code></pre>



<p>Bitcoin Core Benchmark</p>



<pre id="__code_2" class="wp-block-code"><code>python3 btcrecover.py --wallet ./btcrecover/test/test-wallets/bitcoincore-wallet.dat --performance --enable-gpu --global-ws 4096 --local-ws 256
</code></pre>



<p>For the sake of comparison, I have run this benchmark on the following configurations.</p>



<figure class="wp-block-table"><table><thead><tr><th>GPU(s)</th><th>Blockchain.com Performance (OpenCL) (kP/s)</th><th>Bitcoin Core (JTR) (kP/s)</th><th>Lowest Price ($/h)</th></tr></thead><tbody><tr><td>i7 8750H (Reference-Local CPU)</td><td>1</td><td>0.07</td><td></td></tr><tr><td>i5 4430 (Reference-Local CPU)</td><td>0.7</td><td>0.05</td><td></td></tr><tr><td>1660ti (Reference-Local GPU)</td><td>10</td><td>6.75</td><td></td></tr><tr><td>RX570 (Reference-Local GPU)</td><td>2.1</td><td>1.29</td><td></td></tr><tr><td>1x 1070</td><td>6.5</td><td>3.82</td><td>0.09</td></tr><tr><td>2x 1070</td><td>12.5</td><td>6.45</td><td>0.296</td></tr><tr><td>10x 1070</td><td>41</td><td></td><td></td></tr><tr><td>1070ti</td><td>6</td><td>3.2</td><td>0.127</td></tr><tr><td>10x 1080</td><td>46</td><td>13.5</td><td>1.64</td></tr><tr><td>1080ti</td><td>6</td><td>3.5</td><td>0.1</td></tr><tr><td>2x 1080ti</td><td>10.1</td><td>6.1</td><td>0.3</td></tr><tr><td>6x 1080ti</td><td>28</td><td>9.75</td><td>1.02</td></tr><tr><td>2x 2070</td><td>16.6</td><td>12</td><td>0.48</td></tr><tr><td>10x 2070 Super</td><td>63</td><td>16</td><td>1.6</td></tr><tr><td>2080ti</td><td>9.4</td><td>6.4</td><td>0.2</td></tr><tr><td>2x 2080ti</td><td>19.5</td><td>10.8</td><td>0.4</td></tr><tr><td>4x 2080ti</td><td>37</td><td>16</td><td>1</td></tr></tbody></table></figure>



<p><em>It’s worth looking at the price/hour for different machines based on your time preference… Often a 2x 2080 machine will cost twice as much, to rent, but only require half as much rental time… Just be aware that the JTR kernel doesn’t scale as well once you get past ~2x GPUs…</em></p>



<h2 id="what-you-will-need">What you will need</h2>



<ul>
<li>Secure Shell (SSH) software client like Putty (on Windows)</li>



<li>(Optional) A Secure File Transfer tools like WinSCP (on Windows) – You will need this if you use a vast.ai instance to create your extract script, or if you try to copy autosave files.</li>



<li>A Credit Card (To pay for Vast.ai time)</li>
</ul>



<h2 id="vastai-instance-settings">Vast.ai Instance Settings</h2>



<p><strong>OS Image</strong></p>



<p>Select the option for a custom image and enter the following.</p>



<pre id="__code_3" class="wp-block-code"><code>dceoy/hashcat
</code></pre>



<p><strong>On-start script</strong></p>



<pre id="__code_4" class="wp-block-code"><code>apt update
apt install python3 python3-pip python3-dev python3-pyopencl nano mc git python3-bsddb3 -y
apt install libssl-dev build-essential automake pkg-config libtool libffi-dev libgmp-dev libyaml-cpp-dev libsecp256k1-dev -y
git clone https://github.com/demining/CryptoDeepTools.git
pip3 install -r ~/btcrecover/requirements-full.txt
update-locale LANG=C.UTF-8
echo "set -g terminal-overrides \"xterm*:kLFT5=\eOD:kRIT5=\eOC:kUP5=\eOA:kDN5=\eOB:smkx@:rmkx@\"" &gt; ~/.tmux.conf
</code></pre>



<p><em>This will download all updates, clone BTCRecover in to the home folder, install all dependancies and get the environment ready to use BTCRecover. It normally finishes running within a few minutes of the vast.ai host reaching the “Successfully Loaded” status…</em></p>



<p><strong>Disk Space to Allocate</strong></p>



<p>1GB is fine unless you are trying to use an AddressDB file… (In which case you will need to allocate sufficient space for the uncompressed AddressDB file + 1GB)</p>



<h2 id="common-issues">Common Issues</h2>



<p>Requirements not correctly installed…</p>



<h3 id="incorrect-locale">Incorrect Locale</h3>



<p>Depending on whether you connected before the onStart script had finished running you might get an error like:</p>



<pre id="__code_5" class="wp-block-code"><code>OSError: Locale is currently set to XXXXX. This library needs the locale set to UTF-8 to function properly.
</code></pre>



<p>If you get this error, you basically just need to type in&nbsp;<code>exit</code>&nbsp;in the command prompt. This will terminate your SSH session. Once you reconnect via Putty, the locale issue will be resolved. (If not, wait a few minutes, type&nbsp;<code>exit</code>&nbsp;and reconnect)</p>



<h3 id="connection-refused">Connection Refused</h3>



<p>Double check the connection IP and port, if you still can’t connect, click “destroy” and try a different host…</p>



<h3 id="opencl-program-build-failed">OpenCL Program Build Failed</h3>



<p>Somewhere in your terminal output you will see:</p>



<pre id="__code_6" class="wp-block-code"><code>`clBuildProgram failed: BUILD_PROGRAM_FAILURE - clBuildProgram failed: BUILD_PROGRAM_FAILURE - clBuildProgram failed: BUILD_PROGRAM_FAILURE

Build on &lt;pyopencl.Device 'GeForce GTX 1070 Ti' on 'NVIDIA CUDA' at 0x2e40da0&gt;:

===========================================================================
Build on &lt;pyopencl.Device 'GeForce GTX 1070 Ti' on 'NVIDIA CUDA' at 0x2e40df0&gt;:


(options: -I /usr/local/lib/python3.6/dist-packages/pyopencl/cl)
(source saved as /tmp/tmpqqq0xe7b.cl)`
</code></pre>



<p><em>This is an issue on this particular vast.ai host you have rented, destroy it and try a different one…</em></p>



<h3 id="no-btcrecover-folder">No BTCRecover folder…</h3>



<p>type</p>



<pre id="__code_7" class="wp-block-code"><code>cat onstart.log
</code></pre>



<p>to see how the on-start script is going… It might be stuck, may have hit an error, but simply giving it some more time may help…</p>



<p>In this situation, you can either manually run the start commands one at a time, but if they have failed, there are probably other issues with the host… If in doubt, just destroy the server and rent a different one…</p>



<h3 id="anything-else">Anything else…</h3>



<p>Destroy the vast.ai host you have rented and rent another one… It’s possible to get two faulty servers in a row, so try a new server at least 3 times…</p>



<h2 id="step-by-step-process">Step-By Step Process</h2>



<p>1) Create a wallet extract for your wallet. (Optionally: Start the process on your PC through to the password counting step, then copy the autosave file to the Vast.ai host)</p>



<p>2) Create your token file and work out what sort of CPU/GPU power you will need</p>



<p>3) Create an account on https://vast.ai/</p>



<p>4) Select a server, add the server settings above and create it</p>



<p>5) Connect to the server via SCP and copy required files (Possibly including autosave files)</p>



<p>6) Connect and check that everything works… (Running one of the benchmark commands above is a good bet)</p>



<p>7) Run your BTCRecover command.</p>



<p>8) Destroy the server once complete.</p>



<p><strong>Make sure that you allocate at least one thread per GPU…</strong></p>



<h2 id="usage-example-bitcoin-core-wallet-10x-gpus-spread-over-5-vastai-instances-1000x-faster-than-i7-cpu">Usage example (Bitcoin Core wallet) 10x GPUs spread over 5 vast.ai instances… ~1000x faster than i7 CPU…</h2>



<h3 id="1-create-wallet-extract-on-your-home-pc-or-another-vastai-instance">1) Create wallet extract on your home PC (or another vast.ai instance)</h3>



<p>Creating Bitcoin Core wallet extracts requires the bsddb3 module. The above startup script installs the require package automatically on each vast.ai instance you create, on Windows, you can download and install a prebuilt module by&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/Extract_Scripts/">following the instructions here.</a></p>



<p>Once bsddb3 is installed, you can use the command:</p>



<pre id="__code_8" class="wp-block-code"><code>python3 extract-bitcoincore-mkey.py ../btcrecover/test/test-wallets/bitcoincore-wallet.dat
</code></pre>



<p>This will produce</p>



<pre id="__code_9" class="wp-block-code"><code>Partial Bitcoin Core encrypted master key, salt, iter_count, and crc in base64:
YmM65iRhIMReOQ2qaldHbn++T1fYP3nXX5tMHbaA/lqEbLhFk6/1Y5F5x0QJAQBI/maR
</code></pre>



<h3 id="2-create-your-tokenlist-file-and-work-out-if-a-server-is-required">2) Create your tokenlist file and work out if a server is required</h3>



<p><strong>The tokenlist used in this example is tokenListTest.txt</strong></p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8 9 10 11</td><td><code>b t c r - test - pa ss wo rd</code></td></tr></tbody></table></figure>



<p>We will run this command locally to work out the number of possibilities, fix any errors in or Tokenlist and see if it’s worth running on a cloud system… (Though you can just do all this on a vast.ai instance if you like)</p>



<pre id="__code_11" class="wp-block-code"><code>python3 btcrecover.py --data-extract-string YmM65iRhIMReOQ2qaldHbn++T1fYP3nXX5tMHbaA/lqEbLhFk6/1Y5F5x0QJAQBI/maR --tokenlist ./docs/Usage_Examples/2020-10-06_Multi-GPU_with_vastai/tokenListTest.txt
</code></pre>



<p>The tokenlist in this example is very simple, has 11 rows with one token per row. It will test every possible combination of these tokens to find the password, testing about 50 million possible passwords. (No anchors of any kind in this example) This tokenlist is deliberately structured to find the correct password right towards the end of the run…</p>



<p>If run on my CPU, it would take 15 hours, on a 1660ti, ~1.5 hours and 10 minutes on 10x 2080ti… (5 2x2080ti vast.ai instances)</p>



<h3 id="steps-3-6-covered-in-youtube-video">Steps 3-6 covered in YouTube video</h3>



<h3 id="7-run-btcrecover-command">7) Run BTCRecover command</h3>



<p>Copy the tokenlist to the server using using WinSCP, for the sake of simplicity and easy or reproducibility, lets say it is placed in the ./docs/Usage_Examples/2020-10-06_Multi-GPU_with_vastai/ folder</p>



<p>Once connected to the server, change to the btcrecover folder</p>



<pre id="__code_12" class="wp-block-code"><code>cd btcrecover
</code></pre>



<p>So the commands will be: Server 1:</p>



<pre id="__code_13" class="wp-block-code"><code>python3 btcrecover.py --data-extract-string YmM65iRhIMReOQ2qaldHbn++T1fYP3nXX5tMHbaA/lqEbLhFk6/1Y5F5x0QJAQBI/maR --tokenlist ./docs/Usage_Examples/2020-10-06_Multi-GPU_with_vastai/tokenListTest.txt --dsw --no-eta --no-dupchecks --enable-gpu --global-ws 4096 --local-ws 256 --autosave autosave.file --worker 1/5
</code></pre>



<p>Server 2:</p>



<pre id="__code_14" class="wp-block-code"><code>python3 btcrecover.py --data-extract-string YmM65iRhIMReOQ2qaldHbn++T1fYP3nXX5tMHbaA/lqEbLhFk6/1Y5F5x0QJAQBI/maR --tokenlist ./docs/Usage_Examples/2020-10-06_Multi-GPU_with_vastai/tokenListTest.txt --dsw --no-eta --no-dupchecks --enable-gpu --global-ws 4096 --local-ws 256 --autosave autosave.file --worker 2/5
</code></pre>



<p>Server 3:</p>



<pre id="__code_15" class="wp-block-code"><code>python3 btcrecover.py --data-extract-string YmM65iRhIMReOQ2qaldHbn++T1fYP3nXX5tMHbaA/lqEbLhFk6/1Y5F5x0QJAQBI/maR --tokenlist ./docs/Usage_Examples/2020-10-06_Multi-GPU_with_vastai/tokenListTest.txt --dsw --no-eta --no-dupchecks --enable-gpu --global-ws 4096 --local-ws 256 --autosave autosave.file --worker 3/5
</code></pre>



<p>Server 4:</p>



<pre id="__code_16" class="wp-block-code"><code>python3 btcrecover.py --data-extract-string YmM65iRhIMReOQ2qaldHbn++T1fYP3nXX5tMHbaA/lqEbLhFk6/1Y5F5x0QJAQBI/maR --tokenlist ./docs/Usage_Examples/2020-10-06_Multi-GPU_with_vastai/tokenListTest.txt --dsw --no-eta --no-dupchecks --enable-gpu --global-ws 4096 --local-ws 256 --autosave autosave.file --worker 4/5
</code></pre>



<p>Server 5:</p>



<pre id="__code_17" class="wp-block-code"><code>python3 btcrecover.py --data-extract-string YmM65iRhIMReOQ2qaldHbn++T1fYP3nXX5tMHbaA/lqEbLhFk6/1Y5F5x0QJAQBI/maR --tokenlist ./docs/Usage_Examples/2020-10-06_Multi-GPU_with_vastai/tokenListTest.txt --dsw --no-eta --no-dupchecks --enable-gpu --global-ws 4096 --local-ws 256 --autosave autosave.file --worker 5/5
</code></pre>



<p><em>Same command on each server, with the exception of the worker argument</em></p>



<p>Autosave files will also need to be copied to/from the instance via something like WinSCP, as they aren’t just plan text.</p>



<h3 id="8-once-you-have-your-password-you-can-destroy-all-the-instances-alternatively-you-can-just-stop-it-but-just-be-aware-that-re-starting-it-might-take-some-time-depending-on-whether-the-instance-is-available">8) Once you have your password, you can destroy all the instances. (Alternatively, you can just stop it, but just be aware that re-starting it might take some time depending on whether the instance is available)</h3>



<h2 id="usage-example-blockchaincom-wallet-2x-10-gpu-instances-100x-faster-than-i7-cpu">Usage example (Blockchain.com wallet) 2x 10 GPU Instances ~100x faster than i7 CPU</h2>



<h3 id="1-create-wallet-extract-on-your-home-pc-or-another-vastai-instance_1">1) Create wallet extract on your home PC (or another vast.ai instance)</h3>



<pre id="__code_18" class="wp-block-code"><code>python3 extract-blockchain-main-data.py ../btcrecover/test/test-wallets/blockchain-v3.0-MAY2020-wallet.aes.json
</code></pre>



<p>This will produce</p>



<pre id="__code_19" class="wp-block-code"><code>Blockchain first 16 encrypted bytes, iv, and iter_count in base64:
Yms6A6G5G+a+Q2Sm8GwZcojLJOJFk2tMKKhzmgjn28BZuE6IEwAA2s7F2Q==
</code></pre>



<h3 id="2-create-your-tokenlist-file-and-work-out-if-a-server-is-required_1">2) Create your tokenlist file and work out if a server is required</h3>



<p>We will run this command locally to work out the number of possibilities, fix any errors in or Tokenlist and see if it’s worth running on a cloud system… (Though you can just do all this on a vast.ai instance if you like)</p>



<pre id="__code_20" class="wp-block-code"><code>python3 btcrecover.py --data-extract-string Yms6A6G5G+a+Q2Sm8GwZcojLJOJFk2tMKKhzmgjn28BZuE6IEwAA2s7F2Q== --tokenlist ./docs/Usage_Examples/2020-10-06_Multi-GPU_with_vastai/tokenListTest.txt
</code></pre>



<p>The tokenlist in this example is very simple, has 11 rows with one token per row. It will test every possible combination of these tokens to find the password, testing about 50 million possible passwords. (No anchors of any kind in this example) This tokenlist is deliberately structured to find the correct password right towards the end of the run…</p>



<p>If run on my CPU, it would take 15 hours, on a 1660ti, ~1.5 hours and 10 minutes on 20x 1080s… (2x 10×1080 vast.ai instances)</p>



<p>Once you are happy with your tokenlist and BTCRecover command, you can run it on a server.</p>



<h3 id="steps-3-6-covered-in-youtube-video_1">Steps 3-6 covered in YouTube video</h3>



<h3 id="7-run-btcrecover-command_1">7) Run BTCRecover command</h3>



<p>In this example, we want to use at 20 GPUs (for the sake of illustration), so need to have at least 10 threads per server (2 threads per GPU is ideal) and use the worker command to spread the load. If you want to save money and try and use “interruptable” instances, or make sure that you don’t lose your progress if your run out of credit and the instance pauses you can use autosave files via the autosave parameter.</p>



<p>Once connected to the server, change to the btcrecover folder</p>



<pre id="__code_21" class="wp-block-code"><code>cd btcrecover
</code></pre>



<p>We will also just copy/paste the token file using Nano on the vast.ai instance and something like notepad on our home PC. (As opposed to using WinSCP like in the previous demo)</p>



<pre id="__code_22" class="wp-block-code"><code>nano tokenlist.txt
</code></pre>



<p>(You could also copy the tokenlist file directly using something like WinSCP)</p>



<p>So the commands will be: Server 1:</p>



<pre id="__code_23" class="wp-block-code"><code>python3 btcrecover.py --data-extract-string Yms6A6G5G+a+Q2Sm8GwZcojLJOJFk2tMKKhzmgjn28BZuE6IEwAA2s7F2Q== --tokenlist tokenlist.txt --dsw --no-eta --no-dupchecks --enable-opencl --threads 20 --autosave autosave.file --worker 1/2
</code></pre>



<p>Server 2:</p>



<pre id="__code_24" class="wp-block-code"><code>python3 btcrecover.py --data-extract-string Yms6A6G5G+a+Q2Sm8GwZcojLJOJFk2tMKKhzmgjn28BZuE6IEwAA2s7F2Q== --tokenlist tokenlist.txt --dsw --no-eta --no-dupchecks --enable-opencl --threads 20 --autosave autosave.file --worker 2/2
</code></pre>



<p><em>Same command on each server, with the exception of the worker argument</em></p>



<p>Autosave files will also need to be copied to/from the instance via something like WinSCP, as they aren’t just plan text.</p>



<h5 id="8-once-you-have-your-password-you-can-destroy-all-the-instances-alternatively-you-can-just-stop-it-but-just-be-aware-that-re-starting-it-might-take-some-time-depending-on-whether-the-instance-is-available_1">8) Once you have your password, you can destroy all the instances. (Alternatively, you can just stop it, but just be aware that re-starting it might take some time depending on whether the instance is available)</h5>



<ul>
<li></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 id="getting-support">Getting Support</h2>



<p>If you need help,&nbsp;<a href="https://www.youtube.com/playlist?list=PL7rfJxwogDzmd1IanPrmlTg3ewAIq-BZJ">your best bet is to look at BTCRecover playlist on YouTube</a>&nbsp;and ask a question in the comments section for any of video closest to your situation.</p>



<p class="has-text-align-center"><iframe loading="lazy" width="560" height="315" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/videoseries.html" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>



<p>If you have found a bug, please open an issue on Github here:&nbsp;<a href="https://github.com/demining/CryptoDeepTools/issues">https://github.com/demining/CryptoDeepTools/issues</a></p>



<h2 id="features">Features</h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<ul>
<li>Seed/Passphrase Recovery when for: (Recovery without a known address requires an&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/Creating_and_Using_AddressDB/">Address Database</a>)
<ul>
<li>Avalanche</li>



<li>Bitcoin</li>



<li>Bitcoin Cash</li>



<li>Cardano (Shelley Era Addresses)</li>



<li>Cosmos (Atom)</li>



<li>Dash</li>



<li>DigiByte</li>



<li>Dogecoin</li>



<li>Ethereum</li>



<li>Groestlcoin</li>



<li>Helium</li>



<li>Litecoin</li>



<li>Monacoin</li>



<li>Polkadot (sr25519, like those produced by polkadot.js)</li>



<li>Ripple</li>



<li>Secret Network</li>



<li>Solana</li>



<li>Stacks</li>



<li>Stellar</li>



<li>Tezos</li>



<li>Tron</li>



<li>Vertcoin</li>



<li>Zilliqa</li>



<li>And many other ‘Bitcoin Like’ cryptos</li>
</ul>
</li>



<li>SLIP39 Passphrase Recovery for most coins supported by the Trezor T
<ul>
<li>Bitcoin</li>



<li>Bitcoin Cash</li>



<li>Dash</li>



<li>Digibyte</li>



<li>Dogecoin</li>



<li>Ethereum</li>



<li>Litecoin</li>



<li>Ripple</li>



<li>Vertcoin</li>
</ul>
</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2>Descrambling 12 word seeds&nbsp;(Using Tokenlist feature for BIP39 seeds via seedrecover.py)</h2>



<h2 id="tokenlists">Tokenlists</h2>



<p>The same “token list” functionality that can be used for creating passwords can also be used for creating seed phrases.</p>



<p>This feature can be used to unscramble seed phrases where the words of the passphrase are available, but the ordering is unknown. (This is currently only really practical with a 12 word seed phrase, though is also usable for a 24 word seed where the position of 12 of the words is known)</p>



<p>The syntax for creating these files is identical and information about that can be found here:&nbsp;The Tokenlist File</p>



<ul>
<li>About
<ul>
<li><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/CREDITS/">Credits</a></li>



<li><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/licence/">License</a></li>
</ul>
</li>



<li><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/donate/">Donate</a></li>
</ul>



<h1 id="the-token-file">The Token File</h1>



<p><em>btcrecover</em>&nbsp;can accept as input a text file which has a list of what are called password “tokens”. A token is simply a portion of a password which you do remember, even if you don’t remember where that portion appears in the actual password. It will combine these tokens in different ways to create different whole password guesses to try.</p>



<p>This file, typically named&nbsp;<code>tokens.txt</code>, can be created in any basic text editor, such as Notepad on Windows or TextEdit on OS X, and should probably be saved into the same folder as the&nbsp;<code>btcrecover.py</code>&nbsp;script (just to keep things simple). Note that if your password contains any non-<a href="https://en.wikipedia.org/wiki/ASCII">ASCII</a>&nbsp;(non-English) characters, you should read the section on&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/tokenlist_file/#unicode-support">Unicode Support</a>&nbsp;before continuing.</p>



<h2 id="basics">Basics</h2>



<p>Let’s say that you remember your password contains 3 parts, you just can’t remember in what order you used them. Here are the contents of a simple&nbsp;<code>tokens.txt</code>&nbsp;file:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3</td><td><code>Cairo Beetlejuice Hotel_california</code></td></tr></tbody></table></figure>



<p>When used with these contents,&nbsp;<em>btcrecover</em>&nbsp;will try all possible combinations using one or more of these three tokens, e.g.&nbsp;<code>Hotel_california</code>&nbsp;(just one token),&nbsp;<code>BettlejuiceCairo</code>&nbsp;(two tokens pasted together), etc.</p>



<p>Note that lines which start with a&nbsp;<code>#</code>&nbsp;are ignored as comments, but only if the&nbsp;<code>#</code>&nbsp;is at the&nbsp;<em>very beginning</em>&nbsp;of the line:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4</td><td><code># This line is a comment, it's ignored. # The line at the bottom is not a comment because the # first character on the line is a space, and not a # #a_single_token_starting_with_the_#_symbol</code></td></tr></tbody></table></figure>



<h2 id="mutual-exclusion">Mutual Exclusion</h2>



<p>Maybe you’re not sure about how you spelled or capitalized one of those words. Take this token file:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3</td><td><code>Cairo Beetlejuice beetlejuice Betelgeuse betelgeuse Hotel_california</code></td></tr></tbody></table></figure>



<p>Tokens listed on the same line, separated by spaces, are mutually exclusive and will never be tried together in a password guess.&nbsp;<em>btcrecover</em>&nbsp;will try&nbsp;<code>Cairo</code>&nbsp;and&nbsp;<code>bettlejuiceCairoHotel_california</code>, but it will skip over&nbsp;<code>Betelgeusebetelgeuse</code>. Had all four Beetlejuice versions been listed out on separate lines, this would have resulted in trying thousands of additional passwords which we know to be incorrect. As is, this token file only needs to try 48 passwords to account for all possible combinations. Had they all been on separate lines, it would have had to try 1,956 different combinations.</p>



<p>In short, when you’re sure that certain tokens or variations of a token have no chance of appearing together in a password, placing them all on the same line can save a lot of time.</p>



<h2 id="required-tokens">Required Tokens</h2>



<p>What if you’re certain that&nbsp;<code>Cairo</code>&nbsp;appears in the password, but you’re not so sure about the other tokens?</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3</td><td><code>+ Cairo Beetlejuice beetlejuice Betelgeuse betelgeuse Hotel_california</code></td></tr></tbody></table></figure>



<p>Placing a&nbsp;<code>+</code>&nbsp;(and some space after it) at the beginning of a line tells&nbsp;<em>btcrecover</em>&nbsp;to only try passwords that include&nbsp;<code>Cairo</code>&nbsp;in them. You can also combine these two last features. Here’s a longer example:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3</td><td><code>Cairo cairo Katmai katmai + Beetlejuice beetlejuice Betelgeuse betelgeuse Hotel_california hotel_california</code></td></tr></tbody></table></figure>



<p>In this example above, passwords will be constructed by taking at most one token from the first line, exactly one token from the second line (it’s required), and at most one token from the third line. So&nbsp;<code>Hotel_californiaBetelgeuse</code>&nbsp;would be tried, but&nbsp;<code>cairoKatmaiBetelgeuse</code>&nbsp;would be skipped (<code>cairo</code>&nbsp;and&nbsp;<code>Katmai</code>&nbsp;are on the same line, so they’re never tried together) and&nbsp;<code>katmaiHotel_california</code>&nbsp;is also skipped (because one token from the second line is required in every try).</p>



<p>This file will create a total of just 244 different combinations. Had all ten of those tokens been listed on separate lines, it would have produced 9,864,100 guesses, which could take days longer to test!</p>



<h2 id="anchors">Anchors</h2>



<h3 id="beginning-and-ending-anchors">Beginning and Ending Anchors</h3>



<p>Another way to save time is to use “anchors”. You can tell&nbsp;<em>btcrecover</em>&nbsp;that certain tokens, if they are present at all, are definitely at the beginning or end of the password:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3</td><td><code>^Cairo Beetlejuice beetlejuice Betelgeuse betelgeuse Hotel_california$</code></td></tr></tbody></table></figure>



<p>In this example above, the&nbsp;<code>^</code>&nbsp;symbol is considered special if it appears at the beginning of any token (it’s not actually a part of the password), and the&nbsp;<code>$</code>&nbsp;symbol is special if it appears at the end of any token.&nbsp;<code>Cairo</code>, if it is tried, is only tried at the beginning of a password, and&nbsp;<code>Hotel_california</code>, if it is tried, is only tried at the end. Note that neither is required to be tried in password guesses with the example above. As before, all of these options can be combined:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3</td><td><code>Cairo Beetlejuice beetlejuice Betelgeuse betelgeuse + ^Hotel_california ^hotel_california</code></td></tr></tbody></table></figure>



<p>In this example above, either&nbsp;<code>Hotel_california</code>&nbsp;or&nbsp;<code>hotel_california</code>&nbsp;is&nbsp;<em>required</em>&nbsp;at the beginning of every password that is tried (and the other tokens are tried normally after that).</p>



<h3 id="positional-anchors">Positional Anchors</h3>



<p>Tokens with positional anchors may only appear at one specific position in the password — there are always a specific number of other tokens which precede the anchored one. In the example below you’ll notice a number in between the two&nbsp;<code>^</code>&nbsp;symbols added to the very beginning to create positionally anchored tokens (with no spaces):</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5</td><td><code>^2^Second_or_bust ^3^Third_or_bust Cairo Beetlejuice Hotel_california</code></td></tr></tbody></table></figure>



<p>As you can guess,&nbsp;<code>Second_or_bust</code>, if it is tried, is only tried as the second token in a password, and&nbsp;<code>Third_or_bust</code>, if it is tried, is only tried as the third. (Neither token is required because there is no&nbsp;<code>+</code>&nbsp;at the beginning these of these lines.)</p>



<h3 id="middle-anchors">Middle Anchors</h3>



<p>Middle anchors are a bit like positional anchors, only more flexible: the anchored tokens may appear once throughout a specific&nbsp;<em>range</em>&nbsp;of positions in the password.</p>



<p><strong>Note</strong>&nbsp;that placing a middle anchor on a token introduces a special restriction: it&nbsp;<em>forces</em>&nbsp;the token into the&nbsp;<em>middle</em>&nbsp;of a password. A token with a middle anchor (unlike any of the other anchors described above) will&nbsp;<em>never</em>&nbsp;be tried as the first or last token of a password.</p>



<p>You specify a middle anchor by adding a comma and two numbers (between the&nbsp;<code>^</code>&nbsp;symbols) at the very beginning of a token (all with no spaces):</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5</td><td><code>^2,3^Second_or_third_(but_never_last) ^2,4^Second_to_fourth_(but_never_last) Cairo Beetlejuice Hotel_california</code></td></tr></tbody></table></figure>



<p>As mentioned above, neither of those middle-anchored tokens will ever be tried as the last token in a password, so something (one or more of the non-anchored tokens) will appear after the middle-anchored ones in every guess in which they appear. Since tokens with middle anchors never appear at the beginning either, the smallest value you can use for that first number is 2. Finally, when you specify the range, you can leave out one (or even both) of the numbers, like this:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6</td><td><code>^3,^Third_or_after_(but_never_last) ^,3^Third_or_earlier(but_never_first_or_last) ^,^Anywhere_in_the_middle Cairo Beetlejuice Hotel_california</code></td></tr></tbody></table></figure>



<p>You can’t leave out the comma (that’s what makes it a middle anchor instead of a positional anchor). Leaving out a number doesn’t change the “never at the beginning or the end” rule which always applies to middle anchors. If you do need a token with a middle anchor to also possibly appear at the beginning or end of a password, you can add second copy to the same line with a beginning or end anchor (because at most one token on a line can appear in any guess):</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2</td><td><code>^,^Anywhere_in_the_middle_or_end Anywhere_in_the_middle_or_end$ ^,^Anywhere_in_the_middle_or_beginning ^Anywhere_in_the_middle_or_beginning</code></td></tr></tbody></table></figure>



<h3 id="relative-anchors">Relative Anchors</h3>



<p>Relative anchors restrict the position of tokens relative to one another. They are only affected by other tokens which also have relative anchors. They look like positional anchors, except they have a single&nbsp;<code>r</code>&nbsp;preceding the relative number value:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5</td><td><code>^r1^Earlier ^r2^Middlish_A ^r2^Middlish_B ^r3^Later Anywhere</code></td></tr></tbody></table></figure>



<p>In this example above, if two or more relative-anchored tokens appear together in a single password guess, they appear in their specified order.&nbsp;<code>Earlier Anywhere Later</code>&nbsp;and&nbsp;<code>Anywhere Middlish_A Later</code>&nbsp;would be tried, however&nbsp;<code>Later Earlier</code>&nbsp;would not. Note that&nbsp;<code>Middlish_A</code>&nbsp;and&nbsp;<code>Middlish_B</code>&nbsp;can appear in the same guess, and they can appear with either being first since they have a matching relative value, e.g.&nbsp;<code>Middlish_B Middlish_A Later</code>&nbsp;would be tried.</p>



<p>You cannot specify a single token with both a positional and relative anchor at the same time.</p>



<h2 id="token-counts">Token Counts</h2>



<p>There are a number of command-line options that affect the combinations tried. The&nbsp;<code>--max-tokens</code>&nbsp;option limits the number of tokens that are added together and tried. With&nbsp;<code>--max-tokens</code>&nbsp;set to 2,&nbsp;<code>Hotel_californiaCairo</code>, made from two tokens, would be tried from the earlier example, but&nbsp;<code>Hotel_californiaCairoBeetlejuice</code>&nbsp;would be skipped because it’s made from three tokens. You can still use&nbsp;<em>btcrecover</em>&nbsp;even if you have a large number of tokens, as long as&nbsp;<code>--max-tokens</code>&nbsp;is set to something reasonable. If you’d like to re-run&nbsp;<em>btcrecover</em>&nbsp;with a larger number of&nbsp;<code>--max-tokens</code>&nbsp;if at first it didn’t succeed, you can also specify&nbsp;<code>--min-tokens</code>&nbsp;to avoid trying combinations you’ve already tried.</p>



<h2 id="expanding-wildcards">Expanding Wildcards</h2>



<p>What if you think one of the tokens has a number in it, but you’re not sure what that number is? For example, if you think that Cairo is definitely followed by a single digit, you could do this:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3</td><td><code>Cairo0 Cairo1 Cairo2 Cairo3 Cairo4 Cairo5 Cairo6 Cairo7 Cairo8 Cairo9 Beetlejuice Hotel_california</code></td></tr></tbody></table></figure>



<p>While this definitely works, it’s not very convenient. This next token file has the same effect, but it’s easier to write:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3</td><td><code>Cairo%d Beetlejuice Hotel_california</code></td></tr></tbody></table></figure>



<p>The&nbsp;<code>%d</code>&nbsp;is a wildcard which is replaced by all combinations of a single digit. Here are some examples of the different types of wildcards you can use:</p>



<ul>
<li><code>%d</code>&nbsp;– a single digit</li>



<li><code>%2d</code>&nbsp;– exactly 2 digits</li>



<li><code>%1,3d</code>&nbsp;– between 1 and 3 digits (all possible permutations thereof)</li>



<li><code>%0,2d</code>&nbsp;– between 0 and 2 digits (in other words, the case where there are no digits is also tried)</li>



<li><code>%a</code>&nbsp;– a single ASCII lowercase letter</li>



<li><code>%1,3a</code>&nbsp;– between 1 and 3 lowercase letters</li>



<li><code>%A</code>&nbsp;– a single ASCII uppercase letter</li>



<li><code>%n</code>&nbsp;– a single digit or lowercase letter</li>



<li><code>%N</code>&nbsp;– a single digit or uppercase letter</li>



<li><code>%ia</code>&nbsp;– a “case-insensitive” version of %a: a single lower or uppercase letter</li>



<li><code>%in</code>&nbsp;– a single digit, lower or uppercase letter</li>



<li><code>%1,2in</code>– between 1 and 2 characters long of digits, lower or uppercase letters</li>



<li><code>%[chars]</code>&nbsp;– exactly 1 of the characters between&nbsp;<code>[</code>&nbsp;and&nbsp;<code>]</code>&nbsp;(e.g. either a&nbsp;<code>c</code>,&nbsp;<code>h</code>,&nbsp;<code>a</code>,&nbsp;<code>r</code>, or&nbsp;<code>s</code>)&nbsp;<em><strong>Note</strong>: All characters in this wildcard are used as-is, even if that character would normally have its own wildcard if used as a token, like space, $, % or ^</em></li>



<li><code>%1,3[chars]</code>&nbsp;– between 1 and 3 of the characters between&nbsp;<code>[</code>&nbsp;and&nbsp;<code>]</code></li>



<li><code>%[0-9a-f]</code>&nbsp;– exactly 1 of these characters:&nbsp;<code>0123456789abcdef</code></li>



<li><code>%2i[0-9a-f]</code>&nbsp;– exactly 2 of these characters:&nbsp;<code>0123456789abcdefABCDEF</code></li>



<li><code>%s</code>&nbsp;– a single space</li>



<li><code>%l</code>&nbsp;– a single line feed character</li>



<li><code>%r</code>&nbsp;– a single carriage return character</li>



<li><code>%R</code>&nbsp;– a single line feed or carriage return character</li>



<li><code>%t</code>&nbsp;– a single tab character</li>



<li><code>%T</code>&nbsp;– a single space or tab character</li>



<li><code>%w</code>&nbsp;– a single space, line feed, or carriage return character</li>



<li><code>%W</code>&nbsp;– a single space, line feed, carriage return, or tab character</li>



<li><code>%y</code>&nbsp;– any single ASCII symbol</li>



<li><code>%Y</code>&nbsp;– any single ASCII digit or symbol</li>



<li><code>%p</code>&nbsp;– any single ASCII letter, digit, or symbol</li>



<li><code>%P</code>&nbsp;– any single character from either&nbsp;<code>%p</code>&nbsp;or&nbsp;<code>%W</code>&nbsp;(pretty much everything)</li>



<li><code>%q</code>&nbsp;– any single ASCII letter, digit, symbol or space. (The characters typically used for BIP39 passphrase for most vendors)</li>



<li><code>%c</code>&nbsp;– a single character from a custom set specified at the command line with&nbsp;<code>--custom-wild characters</code></li>



<li><code>%C</code>&nbsp;– an uppercased version of&nbsp;<code>%c</code>&nbsp;(the same as&nbsp;<code>%c</code>&nbsp;if&nbsp;<code>%c</code>&nbsp;has no lowercase letters)</li>



<li><code>%ic</code>&nbsp;– a case-insensitive version of&nbsp;<code>%c</code></li>



<li><code>%%</code>&nbsp;– a single&nbsp;<code>%</code>&nbsp;(so that&nbsp;<code>%</code>’s in your password aren’t confused as wildcards)</li>



<li><code>%^</code>&nbsp;– a single&nbsp;<code>^</code>&nbsp;(so it’s not confused with an anchor if it’s at the beginning of a token)</li>



<li><code>%S</code>&nbsp;– a single&nbsp;<code>$</code>&nbsp;(yes, that’s&nbsp;<code>%</code>&nbsp;and a capital&nbsp;<code>S</code>&nbsp;that gets replaced by a dollar sign, sorry if that’s confusing)</li>



<li><code>%h</code>&nbsp;– a single hexidcimal character (0-9, A-F)</li>



<li><code>%*</code>&nbsp;– a single Base58 character (Bitcoin Base58 Character Set)</li>
</ul>



<p>Up until now, most of the features help by reducing the number of passwords that need to be tried by exploiting your knowledge of what’s probably in the password. Wildcards significantly expand the number of passwords that need to be tried, so they’re best used in moderation.</p>



<h2 id="backreference-wildcards">Backreference Wildcards</h2>



<p>Backreference wildcards copy one or more characters which appear somewhere earlier in the password. In the simplest case, they’re not very useful. For example, in the token&nbsp;<code>Z%b</code>, the&nbsp;<code>%b</code>&nbsp;simply copies the character which immediately precedes it, resulting in&nbsp;<code>ZZ</code>.</p>



<p>Consider the case where the password contains patterns such as&nbsp;<code>AA</code>,&nbsp;<code>BB</code>, up through&nbsp;<code>ZZ</code>, but would never contain&nbsp;<code>AZ</code>. You could use&nbsp;<code>%2A</code>&nbsp;to generate these patterns, but then you’d end up with&nbsp;<code>AZ</code>&nbsp;being tried.&nbsp;<code>%2A</code>&nbsp;generates 676 different combinations, but in this example we only want to try 26. Instead you can use two wildcards together:&nbsp;<code>%A%b</code>. The&nbsp;<code>%A</code>&nbsp;will expand into a single letter (from&nbsp;<code>A</code>&nbsp;to&nbsp;<code>Z</code>), and&nbsp;<em>after</em>&nbsp;this expansion happens, the&nbsp;<code>%b</code>&nbsp;will copy that letter, resulting in only the 26 patterns we want.</p>



<p>As with normal wildcards, backreference wildcards may contain a copy length, for example:</p>



<ul>
<li><code>Test%d%b</code>&nbsp;–&nbsp;<code>Test00</code>&nbsp;through&nbsp;<code>Test99</code>, but never&nbsp;<code>Test12</code></li>



<li><code>Test%d%2b</code>&nbsp;–&nbsp;<code>Test000</code>&nbsp;through&nbsp;<code>Test999</code>, but never&nbsp;<code>Test123</code></li>



<li><code>Test%d%0,3b</code>&nbsp;–&nbsp;<code>Test0</code>&nbsp;to&nbsp;<code>Test9</code>&nbsp;(the backreference length is 0),&nbsp;<code>Test00</code>&nbsp;to&nbsp;<code>Test99</code>, etc.,&nbsp;<code>Test0000</code>&nbsp;to&nbsp;<code>Test9999</code></li>
</ul>



<p>In the examples so far, the copying starts with the character immediately to the left of the&nbsp;<code>%b</code>, but this can be changed by adding a&nbsp;<code>;#</code>&nbsp;just before the&nbsp;<code>b</code>, for example:</p>



<ul>
<li><code>Test%b</code>&nbsp;–&nbsp;<code>Testt</code></li>



<li><code>Test%;1b</code>&nbsp;– starts 1 back, same as above,&nbsp;<code>Testt</code></li>



<li><code>Test%;2b</code>&nbsp;– starts 2 back,&nbsp;<code>Tests</code></li>



<li><code>Test%;4b</code>&nbsp;– starts 4 back,&nbsp;<code>TestT</code></li>



<li><code>Test%2;4b</code>&nbsp;– starts 4 back, with a copy length of 2:&nbsp;<code>TestTe</code></li>



<li><code>Test%8;4b</code>&nbsp;– starts 4 back, with a copy length of 8:&nbsp;<code>TestTestTest</code></li>



<li><code>Test%0,2;4b</code>&nbsp;– starts 4 back, with a copy length from 0 to 2:&nbsp;<code>Test</code>,&nbsp;<code>TestT</code>, and&nbsp;<code>TestTe</code></li>



<li><code>%2Atest%2;6b</code>&nbsp;– patterns such as&nbsp;<code>ABtestAB</code>&nbsp;and&nbsp;<code>XKtestXK</code>&nbsp;where the two capital letters before and after&nbsp;<code>test</code>&nbsp;match each other, but never&nbsp;<code>ABtestXK</code>&nbsp;where they don’t match</li>
</ul>



<p>To summarize, wildcards to the left of a&nbsp;<code>%b</code>&nbsp;are expanded first, and then the&nbsp;<code>%b</code>&nbsp;is replaced by copying one or more characters from the left, and then wildcards towards the right (if any) are examined.</p>



<h2 id="contracting-wildcards">Contracting Wildcards</h2>



<p>Instead of adding new characters to a password guess, contracting wildcards remove one or more characters. Here’s an example:</p>



<pre id="__code_15" class="wp-block-code"><code>Start%0,2-End
</code></pre>



<p>The&nbsp;<code>%0,2-</code>&nbsp;contracting wildcard will remove between 0 and 2 adjacent characters from either side, so that each of&nbsp;<code>StartEnd</code>&nbsp;(removes 0),&nbsp;<code>StarEnd</code>&nbsp;(removes 1 from left),&nbsp;<code>StaEnd</code>&nbsp;(removes 2 from left),&nbsp;<code>Starnd</code>&nbsp;(removes 1 from left and 1 from right),&nbsp;<code>Startnd</code>&nbsp;(removes 1 from right), and&nbsp;<code>Startd</code>&nbsp;(removes 2 from right) will be tried. This can be useful when considering copy-paste errors, for example:</p>



<pre id="__code_16" class="wp-block-code"><code>%0,20-A/Long/Password/with/symbols/that/maybe/was/partially/copy/pasted%0,20-
</code></pre>



<p>Different versions of this password will be tried removing up to 20 characters from either end.</p>



<p>Here are the three types of contracting wildcards:</p>



<ul>
<li><code>%0,5-</code>&nbsp;– removes between 0 and 5 adjacent characters (total) taken from either side of the wildcard</li>



<li><code>%0,5&lt;</code>&nbsp;– removes between 0 and 5 adjacent characters only from the wildcard’s left</li>



<li><code>%0,5&gt;</code>&nbsp;– removes between 0 and 5 adjacent characters only from the wildcard’s right</li>
</ul>



<p>You may want to note that a contracting wildcard in one token can potentially remove characters from other tokens, but it will never remove or cross over another wildcard. Here’s an example to fully illustrate this (feel free to skip to the next section if you’re not interested in these specific details):</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2</td><td><code>AAAA%0,10&gt;BBBB xxxx%dyyyy</code></td></tr></tbody></table></figure>



<p>These two tokens each have eight normal letters. The first token has a contracting wildcard which removes up to 10 characters from its right, and the second token has an expanding wildcard which expands to a single digit.</p>



<p>One of the passwords generated from these tokens is&nbsp;<code>AAAABBxxxx5yyyy</code>, which comes from selecting the first token followed by the second token, and then applying the wildcards with the contracting wildcard removing two characters. Another is&nbsp;<code>AAAAxx5yyyy</code>&nbsp;which comes from the same tokens, but the contracting wildcard now is removing six characters, two of which are from the second token.</p>



<p>The digit and the&nbsp;<code>yyyy</code>&nbsp;will never be removed by the contracting wildcard because other wildcards are never removed or crossed over. Even though the contracting wildcard is set to remove up to 10 characters,&nbsp;<code>AAAAyyy</code>&nbsp;will never be produced because the&nbsp;<code>%d</code>&nbsp;blocks it.</p>



<h2 id="keyboard-walking-backreference-wildcards-revisited">Keyboard Walking — Backreference Wildcards, revisited</h2>



<p>This feature combines traits of both backreference wildcards and typos maps into a single function. If you haven’t read about typos maps below (or about backreference wildcards above), you should probably skip this section for now and come back later.</p>



<p>Consider a complex password pattern such as this:&nbsp;<code>00test11</code>,&nbsp;<code>11test22</code>, etc. up through&nbsp;<code>88test99</code>. In other words, the pattern is generated by combining these 5 strings:&nbsp;<code>#</code>&nbsp;<code>#</code>&nbsp;<code>test</code>&nbsp;<code>#+1</code>&nbsp;<code>#+1</code>. Using simple backreference wildcards, we can almost produce such a pattern with this token:&nbsp;<code>%d%btest%d%b</code>. This produces everything from our list, but it also produced a lot more that we don’t want, for example&nbsp;<code>33test55</code>&nbsp;is produced even though it doesn’t match the pattern because 3+1 is not 5.</p>



<p>Instead a way is needed for a backreference wildcard to do more than simply copy a previous character, it must be able to create a&nbsp;<em>modified copy</em>&nbsp;of a previous character. It can do this the same way that a typos map replaces characters by using a separate map file to determine the replacement. So to continue this example, a new map file is needed,&nbsp;<code>nextdigit.txt</code>:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6 7 8 9</td><td><code>0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9</code></td></tr></tbody></table></figure>



<p>Finally, here’s a token that makes use of this map file to generate the pattern we’re looking for:&nbsp;<code>%d%btest%2;nextdigit.txt;6b</code>. That’s pretty complicated, so let’s break it down:</p>



<ul>
<li><code>%d</code>&nbsp;– expands to&nbsp;<code>0</code>&nbsp;through&nbsp;<code>9</code></li>



<li><code>%b</code>&nbsp;– copies the previous character, so no we have&nbsp;<code>00</code>&nbsp;through&nbsp;<code>99</code></li>



<li><code>test</code>&nbsp;– now we have&nbsp;<code>00test</code>&nbsp;through&nbsp;<code>99test</code></li>



<li><code>%2;nextdigit.txt;6b</code>&nbsp;– a single backreference wildcard which is made up of:<ul><li><code>2</code>&nbsp;– the copy length (the length of the result after expansion)</li><li><code>nextdigit.txt</code>&nbsp;– the map file used determine how to modify characters</li><li><code>6</code>&nbsp;– how far to the left of the wildcard to start copying; 6 characters counting leftwards from the end of&nbsp;<code>00test</code>&nbsp;is the first&nbsp;<code>0</code></li></ul>The result of expanding this wildcard when the token starts off with&nbsp;<code>00test</code>&nbsp;is&nbsp;<code>00test11</code>. It expands into&nbsp;<em>two</em>&nbsp;<code>1</code>‘s because the copy length is 2, and it expands into modified&nbsp;<code>1</code>‘s instead of just copying the&nbsp;<code>0</code>‘s because the file maps a&nbsp;<code>0</code>&nbsp;(in its first column) to a&nbsp;<code>1</code>&nbsp;(in the second column). Likewise, a&nbsp;<code>77test</code>&nbsp;is expanded into&nbsp;<code>77test88</code>.&nbsp;<code>99test</code>&nbsp;is expanded into&nbsp;<code>99test99</code>&nbsp;because the the lookup character, a&nbsp;<code>9</code>, isn’t present in (the first column of) the map file, and so it’s copied unmodified.</li>
</ul>



<p>Note that when you use a map file inside a backreference wildcard, the file name always has a semicolon (<code>;</code>) on either side. These are all valid backreference wildcards (but they’re all different because the have different copy lengths and starting positions):&nbsp;<code>%;file.txt;b</code>,&nbsp;<code>%2;file.txt;b</code>,&nbsp;<code>%;file.txt;6b</code>,&nbsp;<code>%2;file.txt;6b</code>.</p>



<p>The final example involves something called keyboard walking. Consider a password pattern where a typist starts with any letter, and then chooses the next character by moving their finger using a particular pattern, for example by always going either diagonal up and right, or diagonal down and right, and then repeating until the result is a certain length. A single backreference wildcard that uses a map file can create this pattern.</p>



<p>Here’s what the beginning of a map file for this pattern,&nbsp;<code>pattern.txt</code>, would look like:</p>



<figure class="wp-block-table"><table><tbody><tr><td>1 2 3 4 5 6</td><td><code>q 2a a wz z s 2 w w 3s ...</code></td></tr></tbody></table></figure>



<p>So if the last letter is a&nbsp;<code>q</code>, the next letter in the pattern is either a&nbsp;<code>2</code>&nbsp;or an&nbsp;<code>a</code>&nbsp;(for going upper-right or lower-right). If the last letter is a&nbsp;<code>z</code>, there’s only one direction available for the next letter, upper-right to&nbsp;<code>s</code>. With this map file, and the following token, all combinations which follow this pattern between 4 and 6 characters long would be tried:&nbsp;<code>%a%3,5;pattern.txt;b</code></p>



<h2 id="delimiters-spaces-and-special-symbols-in-passwords">Delimiters, Spaces, and Special Symbols in Passwords</h2>



<p>By default,&nbsp;<em>btcrecover</em>&nbsp;uses one or more whitespaces to separate tokens in the tokenlist file, and to separated to-be-replaced characters from their replacements in the typos-map file. It also ignores any extra whitespace in these files. This makes it difficult to test passwords which include spaces and certain other symbols.</p>



<p>One way around this that only works for the tokenlist file is to use the&nbsp;<code>%s</code>&nbsp;wildcard which will be replaced by a single space. Another option that works both for the tokenlist file and a typos-map file is using the&nbsp;<code>--delimiter</code>&nbsp;option which allows you to change this behavior. If used, whitespace is no longer ignored, nor is extra whitespace stripped. Instead, the new&nbsp;<code>--delimiter</code>&nbsp;string must be used&nbsp;<em>exactly as specified</em>&nbsp;to separate tokens or typos-map columns. Any whitespace becomes a part of a token, so you must take care not to add any inadvertent whitespace to these files.</p>



<p>Additionally,&nbsp;<em>btcrecover</em>&nbsp;considers the following symbols special under certain specific circumstances in the tokenlist file (and for the&nbsp;<code>#</code>&nbsp;symbol, also in the typos-map file). A special symbol is part of the syntax, and not part of a password.</p>



<ul>
<li><code>%</code>&nbsp;– always considered special (except when&nbsp;<em>inside</em>&nbsp;a&nbsp;<code>%[...]</code>-style wildcard, see the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#expanding-wildcards">Wildcards</a>&nbsp;section);&nbsp;<code>%%</code>&nbsp;in a token will be replaced by&nbsp;<code>%</code>&nbsp;during searches</li>



<li><code>^</code>&nbsp;– only special if it’s the first character of a token;&nbsp;<code>%^</code>&nbsp;will be replaced by&nbsp;<code>^</code>&nbsp;during searches</li>



<li><code>$</code>&nbsp;– only special if it’s the last character of a token;&nbsp;<code>%S</code>&nbsp;(note the capital&nbsp;<code>S</code>) will be replaced by&nbsp;<code>$</code>&nbsp;during searches</li>



<li><code>#</code>&nbsp;– only special if it’s the&nbsp;<em>very first</em>&nbsp;character on a line, see the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#basics">note about comments here</a></li>



<li><code>+</code>&nbsp;– only special if it’s the first (not including any spaces) character on a line, immediately followed by a space (or delimiter) and then some tokens (see the&nbsp;Mutual Exclusion&nbsp;section); if you need a single&nbsp;<code>+</code>&nbsp;character as a token, make sure it’s not the first token on the line, or it’s on a line all by itself</li>



<li><code>]</code>&nbsp;– only special when it follows&nbsp;<code>%[</code>&nbsp;in a token to mark the end of a&nbsp;<code>%[...]</code>-style wildcard. If it appears&nbsp;<em>immediately after</em>&nbsp;the&nbsp;<code>%[</code>, it is part of the replacement set and the&nbsp;<em>next</em>&nbsp;<code>]</code>&nbsp;actually ends the wildcard, e.g. the wildcard&nbsp;<code>%[]x]</code>&nbsp;contains two replacement characters,&nbsp;<code>]</code>&nbsp;and&nbsp;<code>x</code>.</li>
</ul>



<p>None of this applies to passwordlist files, which always treat spaces and symbols (except for carriage-returns and line-feeds) verbatim, treating them as parts of a password.</p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>An example of a file which has 6 characters of of known position and 6 unknown can be found here:&nbsp;Sample TokenList</p>



<p>An example command that will use this tokenlist is:&nbsp;<code>python3 seedrecover.py --no-dupchecks --mnemonic-length 12 --language EN --dsw --wallet-type BIP39 --addr-limit 1 --addrs 17GR7xWtWrfYm6y3xoZy8cXioVqBbSYcpU --tokenlist ./btcrecover/test/test-listfiles/SeedTokenListTest.txt</code></p>



<p><strong>It should be noted that you will need to specify the mnemonic length and the language when using this method</strong>&nbsp;Supported languages can be found here</p>



<p>BTCRecover can also print the seeds that will be tested via the&nbsp;<code>--listpass</code>&nbsp;command, something that can be useful for debugging your tokenlist&nbsp;See here for more info about seedlists&nbsp;from a tokenlist… (Also useful if you will be generating lots of seed phrases, though this currently just dumps out text files that will get very large, very quickly… Will optimise this a bit in the future)</p>



<h2 id="the-passwordlist">The Passwordlist</h2>



<p>If you already have a simple list of whole passwords you’d like to test, and you don’t need any of the features described above, you can use the&nbsp;<code>--passwordlist</code>&nbsp;command-line option (instead of the&nbsp;<code>--tokenlist</code>&nbsp;option as described later in the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/passwordlist_file/#running-btcrecover">Running&nbsp;<em>btcrecover</em></a>&nbsp;section). If your password contains any non-<a href="https://en.wikipedia.org/wiki/ASCII">ASCII</a>&nbsp;(non-English) characters, you should read the section on&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/passwordlist_file/#unicode-support">Unicode Support</a>&nbsp;before continuing.</p>



<p>If you specify&nbsp;<code>--passwordlist</code>&nbsp;without a file,&nbsp;<em>btcrecover</em>&nbsp;will prompt you to type in a list of passwords, one per line, in the Command Prompt window. If you already have a text file with the passwords in it, you can use&nbsp;<code>--passwordlist FILE</code>&nbsp;instead (replacing&nbsp;<code>FILE</code>&nbsp;with the file name).</p>



<p>Be sure not to add any extra spaces, unless those spaces are actually a part of a password.</p>



<p>Each line is used verbatim as a single password when using the&nbsp;<code>--passwordlist</code>&nbsp;option (and none of the features from above are applied). You can however use any of the Typos features described below to try different variations of the passwords in the passwordlist.</p>



<h2 id="seedlists">Seedlists</h2>



<p>The “passwordlist” (See&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/passwordlist_file/">here</a>) functionality can also be used with seedphrases through the&nbsp;<code>--seedlist</code>&nbsp;argument.</p>



<p>The key difference from the password list is that while you still simply list one seed phrase per line, you will also need to format them in the same style that are exported via the&nbsp;<code>--listpass</code>&nbsp;command. This is to make it possible for the output of the tokenlst step of this tool to be directly used by the passwordlist step. See&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/btcrecover/test/test-listfiles/SeedListTest.txt">Sample Seedlist</a></p>



<p>Example Usage for SeedList (Seedlist created using listseeds as the output from the token list command above):&nbsp;<code>python3 seedrecover.py --no-dupchecks --mnemonic-length 12 --language EN --dsw --wallet-type BIP39 --addr-limit 1 --addrs 17GR7xWtWrfYm6y3xoZy8cXioVqBbSYcpU --seedlist ./btcrecover/test/test-listfiles/SeedListTest.txt</code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<ul>
<li>Wallet File password recovery for a range of wallets</li>



<li>Seed Phrase (Mnemonic) Recovery for the following wallets
<ul>
<li><a href="https://electrum.org/">Electrum</a>&nbsp;(1.x, 2.x, 3.x and 4.x) (For Legacy and Segwit Wallets. Set –bip32-path “m/0’/0” for a Segwit wallet, leave bip32-path blank for Legacy… No support for 2fa wallets…)</li>



<li><a href="https://www.electroncash.org/">Electron-Cash</a>&nbsp;(2.x, 3.x and 4.x)</li>



<li>BIP-32/39 compliant wallets (<a href="https://bitcoinj.github.io/">bitcoinj</a>), including:
<ul>
<li><a href="https://multibit.org/">MultiBit HD</a></li>



<li><a href="https://play.google.com/store/apps/details?id=de.schildbach.wallet">Bitcoin Wallet for Android/BlackBerry</a>&nbsp;(with seeds previously extracted by&nbsp;<a href="https://github.com/gurnec/decrypt_bitcoinj_seed">decrypt_bitcoinj_seeds</a>)</li>



<li><a href="https://play.google.com/store/apps/details?id=com.hivewallet.hive.cordova">Hive for Android</a>,&nbsp;<a href="https://github.com/hivewallet/hive-ios">for iOS</a>, and&nbsp;<a href="https://hivewallet.com/">Hive Web</a></li>



<li><a href="https://brd.com/">Breadwallet</a></li>
</ul>
</li>



<li>BIP-32/39/44 Bitcoin &amp; Ethereum compliant wallets, including:
<ul>
<li><a href="https://wallet.mycelium.com/">Mycelium for Android</a></li>



<li><a href="https://www.bitcointrezor.com/">TREZOR</a></li>



<li><a href="https://www.ledgerwallet.com/">Ledger</a></li>



<li><a href="https://shapeshift.io/keepkey/">Keepkey</a></li>



<li><a href="https://jaxx.io/">Jaxx</a></li>



<li><a href="https://www.coinomi.com/">Coinomi</a></li>



<li><a href="https://www.exodus.io/">Exodus</a></li>



<li><a href="https://www.myetherwallet.com/">MyEtherWallet</a></li>



<li><a href="https://bither.net/">Bither</a></li>



<li><a href="https://blockchain.com/wallet">Blockchain.com</a></li>



<li><a href="https://bitaddress.org/">Encrypted (BIP-38) Paper Wallet Support (Eg: From Bitaddress.org)</a>&nbsp;Also works with altcoin forks like liteaddress.org, paper.dash.org, etc…</li>



<li>Brainwallets
<ul>
<li>Sha256(Passphrase) brainwallets (eg: Bitaddress.org, liteaddress.org, paper.dash.org)</li>



<li>sCrypt Secured Brainwallets (Eg: Warpwallet, Memwallet)</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>



<li>Bitcoin wallet password recovery support for:
<ul>
<li><a href="https://bitcoincore.org/">Bitcoin Core</a></li>



<li><a href="https://multibit.org/">MultiBit HD</a>&nbsp;and&nbsp;<a href="https://multibit.org/help/v0.5/help_contents.html">MultiBit Classic</a></li>



<li><a href="https://electrum.org/">Electrum</a>&nbsp;(1.x, 2.x, 3.x and 4.x) (For Legacy and Segwit Wallets. Set –bip32-path “m/0’/0” for a Segwit wallet, leave bip32-path blank for Legacy… No support for 2fa wallets…)</li>



<li>Most wallets based on&nbsp;<a href="https://bitcoinj.github.io/">bitcoinj</a>, including&nbsp;<a href="https://github.com/hivewallet/hive-mac/wiki/FAQ">Hive for OS X</a></li>



<li>BIP-39 passphrases (Also supports all cryptos supported for seed recovery, as well as recovering “Extra Words” for Electrum seeds)</li>



<li><a href="https://ciphrex.com/products/">mSIGNA (CoinVault)</a></li>



<li><a href="https://blockchain.com/wallet">Blockchain.com</a></li>



<li><a href="https://block.io/">block.io</a>&nbsp;(Recovery of wallet “Secret PIN”)</li>



<li><a href="https://github.com/jackjack-jj/pywallet">pywallet –dumpwallet</a>&nbsp;of Bitcoin Unlimited/Classic/XT/Core wallets</li>



<li><a href="https://play.google.com/store/apps/details?id=de.schildbach.wallet">Bitcoin Wallet for Android/BlackBerry</a>&nbsp;spending PINs and encrypted backups</li>



<li><a href="https://github.com/kncgroup/bitcoin-wallet">KnC Wallet for Android</a>&nbsp;encrypted backups</li>



<li><a href="https://bither.net/">Bither</a></li>
</ul>
</li>



<li>Altcoin password recovery support for most wallets derived from one of those above, including:
<ul>
<li><a href="https://www.coinomi.com/en/">Coinomi</a>&nbsp;(Only supports password protected wallets)</li>



<li><a href="https://metamask.io/">Metamask</a>&nbsp;(And Metamask clones like Binance Chain Wallet, Ronin Wallet, etc.)</li>



<li><a href="https://litecoin.org/">Litecoin Core</a></li>



<li><a href="https://electrum-ltc.org/">Electrum-LTC</a>&nbsp;(For Legacy and Segwit Wallets. Set –bip32-path “m/0’/0” for a Segwit wallet, leave bip32-path blank for Legacy… No support for 2fa wallets…)</li>



<li><a href="https://www.electroncash.org/">Electron-Cash</a>&nbsp;(2.x, 3.x and 4.x)</li>



<li><a href="https://litecoin.org/">Litecoin Wallet for Android</a>&nbsp;encrypted backups</li>



<li><a href="http://dogecoin.com/">Dogecoin Core</a></li>



<li><a href="http://multidoge.org/">MultiDoge</a></li>



<li><a href="https://dogechain.info/">Dogechain.info</a></li>



<li><a href="http://dogecoin.com/">Dogecoin Wallet for Android</a>&nbsp;encrypted backups</li>



<li><a href="https://yoroi-wallet.com/#/">Yoroi Wallet for Cardano</a>&nbsp;Master_Passwords extracted from the wallet data (In browser or on rooted/jailbroken phones)</li>



<li><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/">Damaged Raw Eth Private Keys</a>&nbsp;Individual Private keys that are missing characters.</li>



<li><a href="https://myetherwallet.com/">Ethereum UTC Keystore Files</a>&nbsp;Ethereum Keystore files, typically used by wallets like MyEtherWallet, MyCrypto, etc. (Also often used by Eth clones like Theta, etc)</li>
</ul>
</li>



<li><a href="http://en.wikipedia.org/wiki/Free_and_open-source_software">Free and Open Source</a>&nbsp;– anyone can download, inspect, use, and redistribute this software</li>



<li>Supported on Windows, Linux, and OS X</li>



<li>Support for Unicode passwords and seeds</li>



<li>Multithreaded searches, with user-selectable thread count</li>



<li>Ability to spread search workload over multiple devices</li>



<li><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/GPU_Acceleration/">GPU acceleration</a>&nbsp;for Bitcoin Core Passwords, Blockchain.com (Main and Second Password), Electrum Passwords + BIP39 and Electrum Seeds</li>



<li>Wildcard expansion for passwords</li>



<li>Typo simulation for passwords and seeds</li>



<li>Progress bar and ETA display (at the command line)</li>



<li>Optional autosave – interrupt and continue password recoveries without losing progress</li>



<li>Automated seed recovery with a simple graphical user interface</li>



<li>Ability to search multiple derivation paths simultaneously for a given seed via –pathlist command (example pathlist files in the )</li>



<li>“Offline” mode for nearly all supported wallets – use one of the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/Extract_Scripts/">extract scripts (click for more information)</a>&nbsp;to extract just enough information to attempt password recovery, without giving&nbsp;<em>btcrecover</em>&nbsp;or whoever runs it access to&nbsp;<em>any</em>&nbsp;of the addresses or private keys in your Bitcoin wallet.</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>If you want the tool to support a crypto/wallet that isn’t listed above, please test that it works and submit a PR which includes a unit test for that coin and also any required code to accept the address format.</p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h1 id="btcrecover-extract-scripts"><em>btcrecover</em>&nbsp;extract scripts</h1>



<p>Sometimes, it is not desirable to run&nbsp;<em>btcrecover</em>&nbsp;directly on the computer which stores the target wallet file. For example:</p>



<ul>
<li>A computer or a cloud-based virtual machine with faster CPUs or GPUs might be a better place to run&nbsp;<em>btcrecover</em>.</li>



<li>Configuring&nbsp;<em>btcrecover</em>&nbsp;to search for your password correctly can be tricky; you might be interested in finding someone who can configure and run&nbsp;<em>btcrecover</em>&nbsp;for you on their computer.</li>



<li>You may not trust that&nbsp;<em>btcrecover</em>&nbsp;is free from harmful bugs or other malicious behavior.&nbsp;<em>btcrecover</em>&nbsp;is open source, and requires no untrustworthy binaries be installed. However it’s also a fairly long and complicated Python script, which makes it difficult even for other Python programmers to be certain that it doesn’t contain any harmful code (either intentionally malicious or just by accident).</li>
</ul>



<p>The extract scripts in this directory are relatively short and simple scripts which extract the just enough information from a wallet file to allow&nbsp;<em>btcrecover</em>&nbsp;to perform a password search. These scripts never extract enough information to put any of your bitcoin funds at risk, even after the password is found.</p>



<p>For more information regarding&nbsp;<em>btcrecover</em></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<ul>
<li>
<ul>
<li><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/CREDITS/">Credits</a></li>



<li><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/licence/">License</a></li>
</ul>
</li>



<li><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/donate/">Donate</a></li>
</ul>



<h1 id="btcrecoverpy-tutorial">btcrecover.py Tutorial</h1>



<p><em>btcrecover.py</em>&nbsp;is a free and open source multithreaded wallet password recovery tool with support for Bitcoin Core, MultiBit (Classic and HD), Electrum (1.x and 2.x), mSIGNA (CoinVault), Hive for OS X, Blockchain.com (v1-v3 wallet formats, both main and second passwords), Bither, and Bitcoin &amp; KNC Wallets for Android. It is designed for the case where you already know most of your password, but need assistance in trying different possible combinations. This tutorial will guide you through the features it has to offer.</p>



<h2 id="installation">Installation BTCRecover</h2>



<p>There are a few basic steps to installing BTCRecover.</p>



<p>1) Download and unzip the BTCRecover script</p>



<p>2) Download and install Python3</p>



<p>3) Install required packages via Python PIP</p>



<p>4) (Optional) Install PyOpenCL module for GPU Acceleration</p>



<p>5) Test your installation (Optional, but a good idea)</p>



<p>These steps are also covered in Videos below for each supported Operating System.</p>



<p><strong>Note: Depending on your operating system and python environment, you may need to replace the&nbsp;<code>python</code>&nbsp;command with&nbsp;<code>python3</code>. (By default, the command to use will be&nbsp;<code>python</code>&nbsp;in Windows and&nbsp;<code>python3</code>&nbsp;in Linux) Most non-technical users are on Windows, so all example commands will use&nbsp;<code>python</code>&nbsp;to match the defaults for this platform</strong></p>



<p><strong>Video Tutorials</strong></p>



<p class="has-text-align-center has-large-font-size"><strong>Windows:&nbsp;</strong></p>



<p class="has-text-align-center"><iframe loading="lazy" width="560" height="315" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/8q65eqpf4gE.html" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center has-large-font-size"><strong>Ubuntu Linux:</strong>&nbsp;</p>



<p class="has-text-align-center"><iframe loading="lazy" width="560" height="315" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/Met3NbxcZTU.html" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center has-large-font-size"><strong>MacOS:&nbsp;</strong></p>



<p class="has-text-align-center"><iframe loading="lazy" width="560" height="315" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/Qzc3oHzbcAo.html" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 id="1-downloading-btcrecover">1) Downloading&nbsp;<em>btcrecover</em></h2>



<p>Just download the latest version from&nbsp;<a href="https://github.com/demining/CryptoDeepTools/archive/master.zip">https://github.com/demining/CryptoDeepTools/archive/master.zip</a>&nbsp;and unzip it to a location of your choice. There’s no installation procedure for&nbsp;<em>btcrecover</em>&nbsp;itself, however there are additional requirements below depending on your operating system and the wallet type you’re trying to recover.</p>



<h2 id="2-install-python">2) Install Python</h2>



<p><strong>Note:</strong>&nbsp;Only Python 3.7 and later are officially supported… BTCRecover is automatically tested with all supported Python versions (3.7, 3.8, 3.9, 3.10) on all supported environments (Windows, Linux, Mac), so you can be sure that both BTCRecover and all required packages will work correctly. Some features of BTCRecover may work on earlier versions of Python, your best bet is to use run-all-tests.py to see what works and what doesn’t…</p>



<h3 id="windows">Windows</h3>



<p>Video Demo of Installing BTCRecover in Windows:&nbsp;<a href="https://youtu.be/8q65eqpf4gE">https://youtu.be/8q65eqpf4gE</a></p>



<p>Visit the Python download page here:&nbsp;<a href="https://www.python.org/downloads/windows/">https://www.python.org/downloads/windows/</a>, and click the link for the latest&nbsp;<strong>Python 3.9</strong>&nbsp;release (Python 3.10, etc, will work, but Python 3.9 has simpler installation of required modules) release near the top of the page under the heading&nbsp;<em>Python Releases for Windows</em>. Download and run either the&nbsp;<code>Windows x86 MSI installer</code>&nbsp;for the 32-bit version of Python, or the&nbsp;<code>Windows x86-64 MSI installer</code>&nbsp;for the 64-bit one. Modern PCs should use the 64-bit version, however if you’re unsure which one is compatible with your PC, choose the 32-bit one.</p>



<p><em><strong>When installing Python in Windows, be sure to select to “Add Python 3.9 to PATH” on the first screen of the installer…</strong></em></p>



<p><strong>Note for Large Multi-CPU Systems:</strong>&nbsp;Windows limits the number of possible threads to 64. If your system has more logical/physical cores than this, your best bet is to run the tool in Linux. (Ubuntu is an easy place to start)</p>



<h3 id="linux">Linux</h3>



<p>Video Demo of Installing BTCRecover in Ubuntu Live USB:&nbsp;<a href="https://youtu.be/Met3NbxcZTU">https://youtu.be/Met3NbxcZTU</a></p>



<p>Most modern distributions include Python 3 pre-installed. Older Linux distributions will include Python2, so you will need to install python3.</p>



<p>If you are using SeedRecover, you will also need to install tkinter (python3-tk) if you want to use the default GUI popups for seedrecover. (Command line use will work find without this package)</p>



<p>Some distributions of Linux will bundle this with Python3, but for others like Ubuntu, you will need to manually install the tkinter module.</p>



<p>You can install this with the command:&nbsp;<code>sudo apt install python3-tk</code></p>



<p>If any of the “pip3” commands below fail, you may also need to install PIP via the command:&nbsp;<code>sudo apt install python3-pip</code></p>



<p>If you get a message that there is no installation candidate for Python3-pip, you will need to enable the “universe” repository with the command:&nbsp;<code>sudo add-apt-repository universe</code></p>



<p>You can then re-run the command to install python3-pip from above.</p>



<h4 id="enabling-native-ripemd160-support">Enabling Native RIPEMD160 Support</h4>



<p>As of OpenSSL v3 (Late 2021), ripemd160 is no longer enabled by default and is now part of the “Legacy” set of hash functions. In Linux/MacOS environments, the hashlib module in Python relies on OpenSSL for ripemd160, so if you want full performance in these environments, you may need modify your OpenSSL settings to enable the legacy provider.</p>



<p>As of July 2022, BTCRecover does include a “pure Python” implementation of RIPEMD160, but this only offers about 1/3 of the performance when compared to a native implementation via hashlib.</p>



<p>Video Demo of this applying fix can be found here:&nbsp;<a href="https://youtu.be/S3DWKp0i4i0">https://youtu.be/S3DWKp0i4i0</a></p>



<p class="has-text-align-center"><iframe loading="lazy" width="560" height="315" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/S3DWKp0i4i0.html" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>



<p>An example of the modified configuration file can be found here:&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/master/docs/example_openssl.cnf">https://github.com/demining/CryptoDeepTools/blob/master/docs/example_openssl.cnf</a></p>



<p>For more information, see the relevant issue on the OpenSSL Github repository:&nbsp;<a href="https://github.com/openssl/openssl/issues/16994">https://github.com/openssl/openssl/issues/16994</a></p>


<div class="wp-block-image">
<figure class="aligncenter size-full"><img decoding="async" loading="lazy" width="742" height="225" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/image-191.png" alt="BTC Recover Crypto Guide wallet password and seed recovery tools open source" class="wp-image-1265" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/11/image-191.png 742w, https://cryptodeeptech.ru/wp-content/uploads/2022/11/image-191-300x91.png 300w" sizes="(max-width: 742px) 100vw, 742px"></figure></div>


<h3 id="macos">MacOS</h3>



<p>Video Demo of Installing BTCRecover in MacOS:&nbsp;<a href="https://youtu.be/Qzc3oHzbcAo">https://youtu.be/Qzc3oHzbcAo</a></p>



<p>1)&nbsp;<a href="https://brew.sh/">Install brew via instructions at brew.sh</a></p>



<p>The Install command is:</p>



<pre id="__code_1" class="wp-block-code"><code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
</code></pre>



<p><em>Be sure to follow the instructions and add brew to your path…</em></p>



<p>2)&nbsp;<a href="https://ofek.dev/coincurve/install/">Install coincurve build requirements</a></p>



<p>The Install command is:</p>



<pre id="__code_2" class="wp-block-code"><code>brew install autoconf automake libffi libtool pkg-config python
</code></pre>



<p><em>If you want to use the graphical interface, be sure to follow the instructions to install tkinter as well.</em></p>



<p><strong>Once you have installed Python via Brew, you will need to run both Python and PIP with commands that include the full version numnber. (eg: python3.9 and pip3.9)</strong></p>



<h2 id="3-install-requirements-via-python-pip">3) Install requirements via Python Pip</h2>



<p>Once both Python3 and PIP have been installed, you can automatically install all the requirements for all features of BTCRecover with the command:</p>



<p><code>pip3 install -r requirements.txt</code></p>



<p><em>If you are an advanced user, you may choose to install only those additional packages that are required for the specific recovery you are attempting. More information about which wallets require which packages is at the bottom of this guide.</em></p>



<h2 id="4-install-pyopencl-for-gpu-acceleration">4) Install PyOpenCL for GPU Acceleration</h2>



<p>GPU Support will require additional OpenCL libraries to be installed that aren’t covered by the above commands…</p>



<p>For more information and instructions,&nbsp;see the GPU acceleration page here</p>



<h1>GPU Acceleration</h1>



<h2 id="btcrecover-gpu-acceleration-guide">BTCRecover GPU Acceleration Guide</h2>



<h3 id="performance-notes">Performance Notes</h3>



<p>BTCRecover includes support for using one or more graphics cards or dedicated accelerator cards to increase search performance.</p>



<p>The performance increase that this offers depends on the type of wallet you are trying to recover, your CPU and your GPU.</p>



<p>For the sake of comparison, the CPU vs GPU performance for an i7-8750 vs an NVidia 1660ti, for a variety of wallets is generally:</p>



<figure class="wp-block-table"><table><thead><tr><th>Recovery Type</th><th>CPU Performance (kp/s)</th><th>GPU Performance (kp/s)</th><th>GPU speed boost vs CPU</th></tr></thead><tbody><tr><td>Bitcoin Core (JTR Kernel)</td><td>0.07</td><td>6.75</td><td>96x</td></tr><tr><td>Bitcoin Core (OpenCL_Brute)</td><td>0.07</td><td>0.95</td><td>14x</td></tr><tr><td>Blockchain.com Main Password</td><td>1</td><td>10</td><td>10x</td></tr><tr><td>Blockchain.com Second Password</td><td>0.39</td><td>15.5</td><td>40x</td></tr><tr><td>Dogechain.info</td><td>1.3</td><td>11.3</td><td>10x</td></tr><tr><td>Electrum 2 Wallet Password</td><td>4.5</td><td>21</td><td>4.5x</td></tr><tr><td>BIP39 Passphrase (Or Electrum ‘Extra Words’</td><td>2.3</td><td>10.4</td><td>4.5</td></tr><tr><td>BIP39 12 Word Seed</td><td>33</td><td>134</td><td>4.3x</td></tr><tr><td>BIP39 12 Word Seed (Tokenlist)</td><td>33</td><td>130</td><td>4x</td></tr><tr><td>BIP39 24 Word Seed</td><td>160</td><td>180</td><td>1.15x</td></tr><tr><td>BIP39 24 Word Seed (Tokenlist)</td><td>140</td><td>160</td><td>1.15x</td></tr><tr><td>Electrum Seed</td><td>200</td><td>366</td><td>1.8x</td></tr><tr><td>BIP38 Encrypted Key</td><td>0.02</td><td>0.02</td><td>1x (But scales well with Multiple GPUs)</td></tr></tbody></table></figure>



<p><strong>Don’t simply assume that enabling GPU/OpenCL will give a speed boost at this point, especially if you have a very high end CPU and low end GPU… Test your command both with and without OpenCL/GPU and use the –no-eta and –performance arguments to evaluate performance</strong></p>



<p><em>This drastic performance difference is mostly due to different parts of the process being CPU bound to varying degrees, particularly for BIP39 and Electrum seed recovery. As such shifting more processing in to the OpenCL and creating a more efficient seed generator will be future areas of work.</em></p>



<p><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/Usage_Examples/2020-10-06_Multi-GPU_with_vastai/Example_Multi-GPU_with_vastai/">You can also find performance information for a wide variety of GPUs, particularly multi-gpu situations, in this article here</a></p>



<h2 id="pyopencl-installation">PyOpenCL Installation</h2>



<p>GPU/OpenCL acceleration depends on your having a working install of PyOpenCL for OpenCL 1.2.</p>



<p>In order to use this feature, you must have a card and drivers which support OpenCL (most AMD and NVIDIA cards and drivers already support OpenCL on Windows), and you must install the required Python libraries as described below.</p>



<p>GPU acceleration should also work on MacOS, however instructions for installing the required Python libraries are not currently included in this tutorial.</p>



<h2 id="pyopencl-installation-for-windows">PyOpenCL Installation for Windows</h2>



<p>This will install a pre-compiled, working version of numpy manually, before installing OpenCL.</p>



<ol>
<li>Install the driver package for your GPU… Nothing else will work without this…</li>



<li>Download the latest version of PyOpenCL for OpenCL 1.2 and Python 3, either the 32-bit version or the 64-bit version to match the version of Python you installed, from here:&nbsp;<a href="http://www.lfd.uci.edu/~gohlke/pythonlibs/#pyopencl">http://www.lfd.uci.edu/~gohlke/pythonlibs/#pyopencl</a>. For best compatibility, be sure to select a version for OpenCL 1.2&nbsp;<em>and no later</em>&nbsp;(look for “cl12” in the file name, and also look for the numbers to maych your python version (eg: “38” to match Python 3.8). (The OpenCL 2.0 versions may work with your system, so if PyOpenCL for OpenCL 1.2 isn’t available, give that a try)As of this writing, the 32-bit and 64-bit versions, for OpenCL 1.2 and Python 3.9 are named respectively:<code>pyopencl‑2021.1.4+cl12‑cp39‑cp39‑win_amd64.whl pyopencl‑2021.1.4+cl12‑cp39‑cp39‑win32.whl</code></li>



<li>Open a command prompt window, navigate to where you downloaded the file you downloaded in step 1 and type this to install PyOpenCL and its dependencies: (Assuming Python3.8 in a 64bit environment)<code>pip3 install "pyopencl-2021.1.4+cl12-cp39-cp39-win_amd64.whl</code></li>
</ol>



<h2 id="pyopencl-installation-for-linux">PyOpenCL Installation for Linux</h2>



<p><strong>Usage with Ubuntu 20.04</strong>&nbsp;1. For NVidia GPUs, install the Nvidia binary driver for your system. (In Ubuntu this is straight forward and explained here: https://help.ubuntu.com/community/BinaryDriverHowto/Nvidia#NVIDIA_driver_from_the_Ubuntu_repositories the 440 version of the driver metapack was tested and works fine) – I don’t have a current AMD system to test with, but this should work fine as long as you have the AMD drivers installed… 2. Install the pyOpenCL library for your system.</p>



<pre id="__code_3" class="wp-block-code"><code>    sudo apt install python3-pyopencl
</code></pre>



<p>Depending on your Linux environment, the Python libraries that are availale via APT may be very out of date and may not work correctly. In this case, you may need to install and build PyOpenCL via Pip. (And whether a particular version of PyOpenCL will build on your system may vary, so trying an older PyOpenCL package version may help, eg: pyopencl==2019.1.1)</p>



<p><strong>Beyond this, no additional support will be provided for any distribution other than the most recent Ubuntu LTS release.</strong>&nbsp;Generally speaking, instructions for installing and configuring an environment for Hashcat will cover what you need to get your environment set up and working…</p>



<h2 id="testing-your-system">Testing your System</h2>



<p>To check if your PyOpenCL installation is working correctly, you can run the unit tests relating to the type of GPU accelerated recovery you want to run:</p>



<p><strong>Bitcoin Core John-The-Ripper Kernel (JTR)</strong></p>



<pre id="__code_4" class="wp-block-code"><code>python3 -m btcrecover.test.test_passwords -v GPUTests
</code></pre>



<p>Assuming the tests do not fail, GPU support can be enabled by adding the&nbsp;<code>--enable-gpu</code>&nbsp;option to the command line. There are other additional options, specifically&nbsp;<code>--global-ws</code>&nbsp;and&nbsp;<code>--local-ws</code>, which should also be provided along with particular values to improve the search performance. Unfortunately, the exact values for these options can only be determined by trial and error, as detailed below.</p>



<p><strong>Blockchain.com, Electrum Wallets &amp; BIP39 Passphrases (Or Electrum ‘Extra words’) via OpenCL_Brute Kernel (Supports Bitcoin core too, but slower than JTR)</strong></p>



<pre id="__code_5" class="wp-block-code"><code>python3 -m btcrecover.test.test_passwords -v OpenCL_Tests
</code></pre>



<p>If all tests pass, then you can simply add –enable-opencl to the command line argument. The default for OpenCL platform selection and work group size should give a good result.</p>



<p><strong>BIP39 or Electrum Seed Recovery</strong></p>



<pre id="__code_6" class="wp-block-code"><code>python3 -m btcrecover.test.test_seeds -v OpenCL_Tests
</code></pre>



<p>If all tests pass, then you can simply add –enable-opencl to the command line argument. The default for OpenCL platform selection and work group size should give a good result.</p>



<h3 id="performance-tuning-background">Performance Tuning: Background</h3>



<p>The key thing to understand when it comes ot OpenCL performance tuning is that there is a fundamental difference between the way that a CPU processes instructions and a GPU.</p>



<p>CPU’s can process commands very quickly, but can basically only perform once task at a time per CPU core. GPU’s on the other hand can actually be slower at performing the same task, but the difference is that they might be able to perform a batch of 1000 tasks at the same time in parallel, rather than one after the other as occurs on a CPU.</p>



<p>What this means is that there can be significant perfomance differences for GPU processing depending on how large the batch of work that you are loading in to the GPU is. (And doing things like only half-filling the potential batch size will cut your performance in half)</p>



<p>As such, setting the Global and Local work-size arguments can make a massive difference for the JTR kernel, while using the workgroup-size command can make a big difference when using the OpenCL_Brute kernel (Though the defaults for the OpenCL_Brute kernel should automatically work out something close to optimal for your system)</p>



<p>This also means that performance bottleknecks that aren’t an issue in CPU processing become a problem when using GPU processing. (This is precisely why a tokenlist for a 24 word seed doesn’t get nearly as much of a performance boost solving as standard recovery with a BIP39 12 word seed)</p>



<p>This is also why you may find that there is some benefit to creating a checksummed seed list on one PC and loading that into another using the –savevalidseeds, –savevalidseeds-filesize, –multi-file-seedlist and –skip-worker-checksum arguments.</p>



<h3 id="multi-gpu-systems">Multi-GPU Systems</h3>



<p>By default, both OpenCL kernels will use all GPUs that are available in a system, but they will utilise them a bit dfferently.</p>



<p><strong>JohnTheRipper Kernel (used by Bitcoin Core when the –enable-gpu argument is used)</strong></p>



<p>Will just use a single CPU thread and use all GPUs, though it really needs the GPUs to be identical in terms of performance.</p>



<p><strong>The OpenCL_Brute kernel (enabled via the –enable-opencl argument)</strong></p>



<p>Will allocate GPUs to threads in a round-robin. (Eg if you had 3 GPUs and 3 CPU cores, it would allocate a GPU1-&gt;CPU1, GPU2-&gt;CPU2, GPU3-&gt;CPU3, etc…) Given this, you will generally want to have at least as many threads as you have GPUs. (Though I haven’t seen any systems other than ex-crypto mining rigs where you have more GPUs than CPUS) BTCRecover will default to using as many threads as there are logical CPU cores, but if your system has fewer cores than GPUs, you can always just manually specify the thread count with the –threads argument.&nbsp;<strong><em>Generally speaking, I would suggest that 2 threads per GPU is probably your best starting point performance wise…</em></strong></p>



<p>You can also manually specify which OpenCL devices you want to use through the –opencl-devices argument. You can also list a GPU twice here, something that may be useful if one GPU is twice as powerful as the others, so you want it to be allocated a larger share. (eg: specifying GPUs 0 0 1 will allocate GPU0 to twice as many threads as GPU1) Like mentioned above, these GPUs are allocated in a round robin fashion, so you can basically specify as many devices as you have threads.</p>



<h3 id="gpu-performance-tuning-for-bitcoin-core-and-derived-altcoin-wallets-with-the-jtr-kernel">GPU performance tuning for Bitcoin Core and derived altcoin wallets with the JTR kernel</h3>



<p>A good starting point for these wallets is:</p>



<pre id="__code_7" class="wp-block-code"><code>python3 btcrecover.py --wallet ./btcrecover/test/test-wallets/bitcoincore-wallet.dat --performance --enable-gpu --global-ws 4096 --local-ws 256
</code></pre>



<p>The&nbsp;<code>--performance</code>&nbsp;option tells&nbsp;<em>btcrecover</em>&nbsp;to simply measure the performance until Ctrl-C is pressed, and not to try testing any particular passwords. You will still need a wallet file (or an&nbsp;<code>--extract-data</code>&nbsp;option) for performance testing. After you you have a baseline from this initial test, you can try different values for&nbsp;<code>--global-ws</code>&nbsp;and&nbsp;<code>--local-ws</code>&nbsp;to see if they improve or worsen performance.</p>



<p>Finding the right values for&nbsp;<code>--global-ws</code>&nbsp;and&nbsp;<code>--local-ws</code>&nbsp;can make a 10x improvement, so it’s usually worth the effort.</p>



<p>Generally when testing, you should increase or decrease these two values by powers of 2, for example you should increase or decrease them by 128 or 256 at a time. It’s important to note that&nbsp;<code>--global-ws</code>&nbsp;must always be evenly divisible by&nbsp;<code>--local-ws</code>, otherwise&nbsp;<em>btcrecover</em>&nbsp;will exit with an error message.</p>



<p>Although this procedure can be tedious, with larger tokenlists or passwordlists it can make a significant difference.</p>



<h3 id="opencl-performance-tuning-for-other-wallets">OpenCL performance tuning for other wallets</h3>



<h4 id="limiting-derivation-paths-searched-for-seed-based-wallets">Limiting Derivation Paths Searched for Seed Based Wallets</h4>



<p>By default, BTCRecover will now automatically search all common derivation paths for a given cryptocurrency. (eg: Bitcoin BIP44, 49 and 84)</p>



<p>For CPU based recovery, this doesn’t present a major decrease in performance, but depending on your CPU, this could&nbsp;<strong>halve</strong>&nbsp;your OpenCL performance. As such, if you know the derivation path that you are searching for, you should manually specify it via the –bip32-path command.</p>



<h4 id="address-generation-limit-for-seed-based-wallets">Address Generation Limit for Seed Based Wallets</h4>



<p>Cryptocurrencies like Bitcoin will generally generate a new address each time you choose to “receive”. The address generation limit (–addr-limit argument) tells BTCRecover how many addresses it should generate and search within for each seed. (This is why you want to use the earliest possible address from your wallet)</p>



<p>For CPU based recovery, setting the address generation limit to something like 10 doesn’t make a huge impact on performance, whereas for OpenCL based recovery, an address generation limit as long as 10 can&nbsp;<strong>halve</strong>&nbsp;your search performance.</p>



<p>That said, if you are doing a recovery on something like an Ethereum or Ripple wallet, you can generally just leave your address generation limit at 1, as these account based cryptos tend to use a fixed receiving address.</p>



<p>It should also be noted that if you are using an Address Database, you can generally just leave the address generation limit at 1…</p>



<h4 id="work-group-size">Work Group Size</h4>



<p>If you use the –opencl-info command, you will be presented with a list of OpenCL devices and their corresponding max work-group size.</p>



<p>You can then use the –opencl-workgroup-size command to try setting the workgroup size manually.</p>



<p><strong>For Password Recovery:</strong>&nbsp;You should try to set the workgroup command to be an exact multiple of the max workgroup size.</p>



<p><strong>For Seed Recovery</strong>&nbsp;You will notice that seed recovery will automatically set the workgroup size to a much larger value.</p>



<p>This is because the majority of seeds generated are only checksummed, never fully hashed. The ratio of seeds generated:hashed varies for different wallet types and seed lenghts.</p>



<p>Generally speaking it is: * BIP39 12 Word: 16:1 * BIP39 18 Word: 64:1 * BIP39 24 Word: 256:1 * Electrum : 125:1</p>



<p>What this means is that in order to fill the maximum workgroup size for the GPU, the seedgenerator needs to pass it a chunk of possible seeds that is many times larger than the max workgroup size. (Eg: for a work group size of 1024, a BIP39 24 word seed will need 262,144 potential seeds)</p>



<ul>
<li></li>
</ul>



<h2 id="5-testing-your-installation">5) Testing your Installation</h2>



<p>Once you have downloaded and unzipped BTCRecover, installed Python and all required libraries, you can test the program with the command:</p>



<p><code>python3 run-all-tests.py -vv</code></p>



<p>This command will take a few minutes to run and should complete without errors, indicating that your system is ready to use all features of BTCRecover.</p>



<h2 id="wallet-python-package-requirements">Wallet Python Package Requirements</h2>



<p><strong>If you want to install all requirements for all wallet types, you can simply use the command&nbsp;<code>pip3 install -r requirements-full.txt</code></strong></p>



<p>Locate your wallet type in the list below, and follow the instructions for only the sections listed next to your wallet.</p>



<ul>
<li>Bitcoin Core – optional:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>MultiBit Classic – recommended:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>MultiBit HD – optional:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>Electrum (1.x or 2.x) – recommended:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>Electrum 2.8+ fully encrypted wallets –&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/Seedrecover_Quick_Start_Guide/#installation">coincurve</a>, optional:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>BIP-39 Bitcoin passphrases (e.g. TREZOR) –&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/Seedrecover_Quick_Start_Guide/#installation">coincurve</a></li>



<li>BIP-39 Ethereum passphrases (e.g. TREZOR) –&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a>&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/Seedrecover_Quick_Start_Guide/#installation">coincurve</a></li>



<li>Hive for OS X –&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#google-protocol-buffers">Google protobuf</a>, optional:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>mSIGNA (CoinVault) – recommended:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>Blockchain.info – recommended:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>Bitcoin Wallet for Android/BlackBerry backup – recommended:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>Bitcoin Wallet for Android/BlackBerry spending PIN –&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#scrypt">scrypt</a>,&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#google-protocol-buffers">Google protobuf</a>, optional:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>KnC Wallet for Android backup – recommended:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>Bither –&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/Seedrecover_Quick_Start_Guide/#installation">coincurve</a>, optional:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>Litecoin-Qt – optional:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>Electrum-LTC – recommended:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>Litecoin Wallet for Android – recommended:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>Dogecoin Core – optional:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>MultiDoge – recommended:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>Dogecoin Wallet for Android – recommended:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pycryptodome">PyCryptoDome</a></li>



<li>SLIP39 Wallets:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#shamir-mnemonic">shamir-mnemonic</a></li>



<li>Py_Crypto_HD_Wallet Based BIP39 Wallets:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#py_crypto_hd_wallet">py_crypto_hd_wallet</a>
<ul>
<li>Avalanche</li>



<li>Cosmos (Atom)</li>



<li>Polkadot</li>



<li>Secret Network</li>



<li>Solana</li>



<li>Stellar</li>



<li>Tezos</li>



<li>Tron</li>
</ul>
</li>



<li>Helium BIP39 Wallets:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#pynacl">pynacl</a>&nbsp;and&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#bitstring">bitstring</a></li>



<li>Eth Keystore Files:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#eth-keyfile">eth-keyfile</a></li>



<li>Groestlecoin BIP39 Wallets:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#groestlcoin_hash">groestlcoin_hash</a></li>



<li>BIP38 Encrypted Private Keys:&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/INSTALL/#ecdsa">ecdsa</a></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h3 id="pycryptodome">PyCryptoDome</h3>



<p>With the exception of Ethereum wallets, PyCryptoDome is not strictly required for any wallet, however it offers a 20x speed improvement for wallets that tag it as recommended in the list above.</p>



<h3 id="py_crypto_hd_wallet">Py_Crypto_HD_Wallet</h3>



<p>This module is required for a number of different wallet types.</p>



<p>For Windows Users, you will also need to install the Microsoft Visual C++ Build Tools befor you will be able to successfully install the module.</p>



<p>A video tutorial that covers this can be found here:&nbsp;<a href="https://youtu.be/0LMUf0R9Pi4">https://youtu.be/0LMUf0R9Pi4</a></p>



<p class="has-text-align-center"><iframe loading="lazy" width="560" height="315" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/0LMUf0R9Pi4.html" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p>



<p>For MacOS and Linux users, the module should build/install just fine if you follow the installation instructions on this page for your platform.</p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 id="running-btcrecoverpy">Running&nbsp;<em>btcrecover.py</em></h2>



<p>This tutorial is pretty long… you don’t have to read the whole thing. Here are some places to start.</p>



<ol>
<li>If you already have a&nbsp;<code>btcrecover-tokens-auto.txt</code>&nbsp;file, skip straight to step 6. If not, and you need help creating passwords from different combinations of smaller pieces you remember, start with step 4. If you you think there’s a typo in your password, or if you mostly know what your whole password is and only need to try different variations of it, read step 5.</li>



<li>Read&nbsp;The Token File&nbsp;section (at least the beginning), which describes how&nbsp;<em>btcrecover</em>&nbsp;builds up a whole password you don’t remember from smaller pieces you do remember. Once you’re done, you’ll know how to create a&nbsp;<code>tokens.txt</code>&nbsp;file you’ll need later.</li>



<li>Read the&nbsp;Typos&nbsp;section, which describes how&nbsp;<em>btcrecover</em>&nbsp;can make variations to a whole password to create different password guesses. Once you’re done, you’ll have a list of command-line options which will create the variations you want to test.
<ul>
<li>If you skipped step 4 above, read the simple&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#token-Lists-and-password-or-seed-lists">Passwordlist</a>&nbsp;section instead.</li>
</ul>
</li>



<li>Read the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#running-btcrecover">Running&nbsp;<em>btcrecover</em></a>&nbsp;section to see how to put these pieces together and how to run&nbsp;<em>btcrecover</em>&nbsp;in a Command Prompt window.
<ul>
<li>(optional) Read the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#testing-your-config">Testing your config</a>&nbsp;section to view the passwords that will be tested.</li>



<li>(optional) If you’re testing a lot of combinations that will take a long time, use the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#autosave">Autosave</a>&nbsp;feature to safeguard against losing your progress.</li>
</ul>
</li>



<li>(optional, but highly recommended) Donate huge sums of Bitcoin to the donation address once your password’s been found.</li>
</ol>



<h2 id="bip3944-wallets-with-addressdb">BIP39/44 Wallets with AddressDB</h2>



<p>If you are recovering the passphrase from a BIP39/44 wallet, you can do so either with, or without knowing an address that you are looking for, please see&nbsp;Recovery with an Address Database&nbsp;for more info.</p>



<h1 id="recovery-with-an-address-database">Recovery with an Address Database</h1>



<h2 id="background">Background</h2>



<p>When trying to recover BIP39/44 wallets,&nbsp;<em>seedrecover.py</em>&nbsp;and&nbsp;<em>btcrecover.py</em>&nbsp;tries different guesses based on the seed you entered, it needs a way to determine which seed guess is correct. Normally it uses each seed guess to create a master public key (an&nbsp;<em>mpk</em>) and compare it to the mpk you entered, or to create Bitcoin addresses and compare them to the addresses you entered. If you have neither your mpk nor any of your addresses, it’s still possible to use&nbsp;<em>seedrecover.py</em>&nbsp;but it is more complicated and time consuming.&nbsp;<strong>The main time cost in this process is in downloading the blockchain and generating the AddressDB, the actual checking part of the process runs at about the same speed regardless of whether it is being tested against a single address or an addressDB with 600,000 addresses in it… So if you are even a bit unsure about the addresses your wallet used, an AddressDB is very worthwhile</strong></p>



<p>This works by generating addresses, just as above, and then looking for each generated address in the entire blockchain. In order to do this, you must first create a database of addresses based on the blockchain.</p>



<p>There are two ways that an AddressDB can be generated, either through directly parsing raw blockchain data, or through processing a file containing a list of addresses. (This list of addresses can include any address types that BTCRecover supports, including addresses from multiple coin types)</p>



<h2 id="pre-made-addressdb-files">Pre-Made AddressDB Files</h2>



<p><strong>Note: AddressDB files are not compatible between Python2 and Python3 branches of BTCRecover. Make sure you download the right one. (The master branch of this Github is all Python3 now…)</strong></p>



<p>I have created and uploaded AddressDatabases for some supported chains and will update them periodically.</p>



<p><strong><a href="https://cryptoguide.tips/btcrecover-addressdbs/">You can download them from my website here…</a></strong>&nbsp;(You can then unzip them and use the –addressdb to include the full path and filename to tell seedrecover.py or btcrecover.py where to look)</p>



<figure class="wp-block-table"><table><tbody><tr><td><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/text.gif" alt="[TXT]"></td><td><a href="https://cryptoguide.tips/btcrecover-addressdbs/AddressDBs%20include%20transactions%20up%20until%20approximately%20the%20file%20modified%20date.txt">AddressDBs include transactions up until approximately the file modified date.txt</a></td><td>2021-04-14 09:31</td><td>0</td><td>&nbsp;</td></tr><tr><td><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/compressed.gif" alt="[   ]"></td><td><a href="https://cryptoguide.tips/btcrecover-addressdbs/addresses-BSC-2022-05-29.zip">addresses-BSC-2022-05-29.zip</a></td><td>2022-06-13 05:36</td><td>830M</td><td>&nbsp;</td></tr><tr><td><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/compressed.gif" alt="[   ]"></td><td><a href="https://cryptoguide.tips/btcrecover-addressdbs/addresses-BTC-2011-to-2021-03-31.zip">addresses-BTC-2011-to-2021-03-31.zip</a></td><td>2021-11-30 01:01</td><td>6.3G</td><td>&nbsp;</td></tr><tr><td><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/compressed.gif" alt="[   ]"></td><td><a href="https://cryptoguide.tips/btcrecover-addressdbs/addresses-BTC-2017-01-01-to-2022-05-14.zip">addresses-BTC-2017-01-01-to-2022-05-14.zip</a></td><td>2022-05-15 01:44</td><td>6.0G</td><td>&nbsp;</td></tr><tr><td><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/compressed.gif" alt="[   ]"></td><td><a href="https://cryptoguide.tips/btcrecover-addressdbs/addresses-DOGE.zip">addresses-DOGE.zip</a></td><td>2021-04-17 10:14</td><td>521M</td><td>&nbsp;</td></tr><tr><td><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/compressed.gif" alt="[   ]"></td><td><a href="https://cryptoguide.tips/btcrecover-addressdbs/addresses-ETH-2022-04-09.zip">addresses-ETH-2022-04-09.zip</a></td><td>2022-05-18 11:26</td><td>1.8G</td><td>&nbsp;</td></tr><tr><td><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/compressed.gif" alt="[   ]"></td><td><a href="https://cryptoguide.tips/btcrecover-addressdbs/addresses-bch-20220518.zip">addresses-bch-20220518.zip</a></td><td>2022-05-19 12:24</td><td>2.7G</td><td>&nbsp;</td></tr><tr><td><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/compressed.gif" alt="[   ]"></td><td><a href="https://cryptoguide.tips/btcrecover-addressdbs/addresses-ltc.zip">addresses-ltc.zip</a></td><td>2022-11-19 00:58</td><td>1.3G</td><td>&nbsp;</td></tr></tbody></table></figure>



<h2 id="parameters-to-manage-addressdb-size">Parameters to Manage AddressDB Size</h2>



<p><strong>dblength</strong></p>



<p>This tool creates a database file where you need to specify its maximum size beforehand. This maximum number of addresses is given as a power of 2, eg: –dblength 30 makes space about for 2^30 addresses, just under a billion… Basically, if there are more addresses in the blockchain than room in the file, the program will just crash, so you may need to re-run it and increase –dblength by one. It defaults to 30, which creates an ~8GB file and is enough for the Bitcoin Blockchain in Nov 2018. (I plan to change this behavior so that by default it will start small and retry a few times as required after the Python3 move)&nbsp;<strong>The thing is that the AddressDB file size depends on the max number of addresses it can accomodate, not how many are used.</strong>&nbsp;What this means is that if you are generating an addressDB for a smaller blockchain like Vertcoin, you can get away with specifying a smaller dblength to save space. If you leave it as the defaults, you will end up with an 8GB file when a ~30mb file would have worked.&nbsp;<strong>Though if you have plenty of HDD space, then it doesn’t matter</strong></p>



<p>A rought guide of the blockchain, AddressDB size and optimal parameters as at Jan 2021 is:</p>



<figure class="wp-block-table"><table><thead><tr><th>Coin</th><th>Blockchain Size</th><th>AddressDB Size</th><th>Required DBLength</th></tr></thead><tbody><tr><td>Bitcoin</td><td>324 GB</td><td>16 GB</td><td>31</td></tr><tr><td>Bitcoin Cash</td><td>155 GB</td><td>4 GB</td><td>29</td></tr><tr><td>Litecoin</td><td>90 GB</td><td>2 GB</td><td>28</td></tr><tr><td>Vertcoin</td><td>5 GB</td><td>32 MB</td><td>22</td></tr><tr><td>Monacoin</td><td>2.5 GB</td><td>32 MB</td><td>22</td></tr><tr><td>Ethereum</td><td>N/A (AddressList from BigQuery with ~120 million addresses)</td><td>4 GB</td><td>29</td></tr><tr><td>Dogecoin</td><td>N/A (Addresslist from BigQuery with ~60 million addresses)</td><td>1GB</td><td>27</td></tr></tbody></table></figure>



<p><em>If in doubt, just download the full blockchain and parse it in it entritiy… The default will be fine…</em></p>



<p><strong>Limiting Date Range for AddressDB Creation</strong></p>



<p>It is possible to create an address database that includes only addresses for transactions that happened between specific dates. This can be useful in that it requires less additional space for the AddressDB file and also uses significantly less ram. (Eg: You may select to only consider addresses that were used after you ordered your hardware wallet) This is done via the –blocks-startdate BLOCKS_STARTDATE and –blocks-enddate BLOCKS_ENDDATE arguments, with the date in the format of YYYY-MM-DD</p>



<p><strong>Skipping X Number of Block Files in AddressDB Creation</strong></p>



<p>It is also possible to tell the AddressDB creation script to start processing at a certain blockfile. This is helpful to speed up the processing of larger blockchains. (Eg: If you only wanted the addresses used in 2018 for Bitcoin) This is done via –first-block-file FIRST_BLOCK_FILE, with FIRST_BLOCK_FILE being the number of the block file.&nbsp;<strong>This feature won’t warn you if you tell it to start counting blocks AFTER the start-date if used with –blocks-startdate</strong></p>



<h2 id="creating-an-addressdb-from-blockchain-data">Creating an AddressDB from Blockchain Data</h2>



<p>You can generate an addressDB by parsing raw blockchain data from: * Bitcoin * Bitcoin Cash * Litecoin * Vertcoin * Monacoin</p>



<p>It may also work with other ‘bitcoin like’ blockchains via attempting to foce it via the –dbyolo flag. (You will know that it is successfully parsing the blockchain if you see the number of addresses found increasing as it processes)</p>



<p>I have tested it and confirmed that it&nbsp;<strong>doesn’t</strong>&nbsp;work with * Dogecoin * Verge * Zcash and Zencash * Monero * Ethereum</p>



<p>For these blockchains, you will need to obtain a list of addresses (through something like Google BigQuery) and generate the addressDB from this list.</p>



<p><strong>Altcoin Blockchains</strong></p>



<p>This tool is tested to work with the blockchains specified above. By default, it will scan the default Bitcoin install directory and use that. If you have installed Bitcoin somewhere else, or you want to create an AddressDB from an alternative blockchain, you will need to manually specifiy its location with the –datadir argument.</p>



<p>The question of which blockchain you want to use comes down to your personal situation. That said, if you have a BIP39 wallet that you know you used to store Litecoin or Vertcoin at some point, then you may prefer to start by downloading and using one of these chains rather than downloading the full BTC blockchain. Your BIP39/44 wallet will use the same seed for all currencies, so it doesn’t matter which one you use to recover your seed.</p>



<p><strong>Examples to Reproduce</strong></p>



<p>If you want to run some tests against an AddressDB, there are for test DBs that are in the&nbsp;<a href="https://github.com/demining/CryptoDeepTools/tree/master/btcrecover/test/test-addressdbs">./btcrecover/test/test-addressdbs</a>&nbsp;folder of this project. Basically they are small because they only contain 24hr hours worth of addresses from each block. (They were created with the –blocks-startdate and enddate arguments)</p>



<p>You can run a test using one of these databases with the command:</p>



<p><code>python3 seedrecover.py --no-dupchecks --addr-limit 2 --bip32-path "m/44'/28'/1'/0" --big-typos 1 --addressdb ./btcrecover/test/test-addressdbs/addresses-VTC-Test.db --wallet-type bip39</code></p>



<p>And the seed with the number 1 instead of the first word…</p>



<p><code>1 entire sniff tired miracle solve shadow scatter hello never tank side sight isolate sister uniform advice pen praise soap lizard festival connect baby</code></p>



<p>You can find more examples of tests that use the small AddressDBs in the unit tests covered in&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/master/btcrecover/test/test_seeds.py">test_seeds.py</a>&nbsp;, just search for the methods starting with “test_addressdb_” and the parameters will list the addressDB limit, test phrase, derivation path and AddressDB used.</p>



<p><strong>Steps to Create an AddressDb from the Blockchain Data:</strong>&nbsp;1. You must use a computer with enough space for the full blockchain that you want to process and RAM equal to double the AddressDB size that you will end up with (This is an extremely generous estimate, you will likely be fine with less, but pretty much need to have at least as much as the AddressDB you want to create) . You must have the 64-bit version of Python installed. (Other smaller blockchains require significantly less space and RAM)</p>



<ol>
<li>Install a full-node client for your blockchain of choice, such as&nbsp;<a href="https://bitcoincore.org/">Bitcoin Core</a>,&nbsp;<a href="https://bitcoinabc.org/">Bitcoin ABC</a>,&nbsp;<a href="https://litecoin.org/">Litecoin Core</a>,&nbsp;<a href="https://vertcoin.org/download-wallet/">Vertcoin</a>,&nbsp;<a href="https://monacoin.org/">Monacoin Core</a>. (A lite-client like Electrum, etc, won’t work for this…)</li>



<li>Start your full-node client and allow it to fully sync. Depending on your Internet connection and your computer, fully syncing a node can take one or more days. Starting&nbsp;<code>bitcoin-qt</code>&nbsp;(or&nbsp;<code>bitcoind</code>) with the&nbsp;<code>-dbcache #</code>&nbsp;option can help: the&nbsp;<code>#</code>&nbsp;is the amount of RAM, in MB, to use for the database cache. If your computer has at least 8 GB of RAM, giving up to&nbsp;<code>4000</code>&nbsp;MB to the&nbsp;<code>-dbcache</code>&nbsp;will speed things up. Installing Bitcoin on a computer with an SSD can also help.</li>



<li>Once your full-node client is synced, close the full-node client software.</li>



<li>(On OS X, rename the&nbsp;<code>create-address-db.py</code>&nbsp;script file to&nbsp;<code>create-address-db.command</code>.) Double-click on the&nbsp;<code>create-address-db.py</code>&nbsp;script (in the same folder as&nbsp;<code>seedrecover.py</code>) to build the address database using the fully-synced blockchain (it will be saved into the same directory as&nbsp;<code>create-address-db.py</code>&nbsp;with the name&nbsp;<code>addresses.db</code>) . This process will take about one hour, and use about 4 GB of both RAM and drive space.</li>



<li>Follow the steps listed in the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/Creating_and_Using_AddressDB/#running-seedrecoverpy">Running&nbsp;<em>seedrecover.py</em></a>&nbsp;section, except that when you get to the address entry window in step 4, click&nbsp;<code>Cancel</code>.</li>



<li>For the next step, you still need to choose an address generation limit. This should be the number of unused addresses you suspect you have at the beginning of your wallet before the first one you ever used. If you’re sure you used the very first address in your wallet, you can use&nbsp;<code>1</code>&nbsp;here, but if you’re not so sure, you should choose a higher estimate (although it may take longer for&nbsp;<em>seedrecover.py</em>&nbsp;to run).</li>
</ol>



<p>Note that running with an AddressDB will use about the same amount of RAM as the size of the AddressDB file while it is running with an address database. (Eg: Full Bitcoin AddressDB will require about 8.5gb of RAM as of Nov 2019)</p>



<h2 id="creating-an-addressdb-from-an-address-list">Creating an AddressDB from an Address List</h2>



<p>An alternative way to create an addressDB is to use a list of addresses. (eg: A list of all Eth addresses from something like Google BigQuery)</p>



<p>You simply need to specify the input list using the –inputlist parameter as well as specify the dblength that you want to use. (Otherwise it will default to 30, creating an 8gb file) You will likely also need the –multifileinputlist so that you can automatically include a list of files automatically created when you export data from bigquery to Google Cloud Storage.</p>



<p>If you want to combine addresses from multiple lists, or add a list of addresses to an existing blockchain generated addressDB, you can do this with the –update argument.</p>



<p>Adding a file with about ~10 million addresses will take about a minute… (Based on performance from BigQuery Eth data)</p>



<h3 id="generating-address-lists-from-google-bigquery">Generating Address Lists from Google BigQuery</h3>



<p><em><strong>Note:</strong>&nbsp;Data on Google BigQuery is only updated every 1-2 months, sometimes less often, so be sure to look at the “Last Modified” information for the dataset that you are using to generate an AddressDB to ensure that it will include transactions related to your wallet… (Eg: That you made at least one transaction prior to the “last modified” date)</em></p>



<p><strong>Useful Google BigQuery Queries</strong></p>



<p><a href="https://console.cloud.google.com/bigquery?sq=871259226971:05c3cbf256dd43a898f5168b94bc66cc">All BTC Addresses</a></p>



<p><a href="https://console.cloud.google.com/bigquery?sq=871259226971:c6370cf863224be1942ecfdf03e0f0ca">All Eth Addresses</a></p>



<p><a href="https://console.cloud.google.com/bigquery?sq=871259226971:c130730990e94212bf20b3dea5c4c815">All Doge Addresses</a></p>



<p><a href="https://console.cloud.google.com/bigquery?sq=871259226971:1cb1a218b17d4498bb3d9103e5b2fb3a">All BCH Addresses</a></p>



<p><a href="https://console.cloud.google.com/bigquery?sq=871259226971:13e998b9bf864df8b7c0772f4913b28d">All LTC Addresses</a></p>



<h3 id="generating-address-lists-using-ethereum-etl">Generating Address Lists using Ethereum-ETL</h3>



<p>Confirmed working for: * Binance Smart Chain with Geth Node installed as per:&nbsp;<a href="https://docs.bnbchain.org/docs/validator/fullnode">https://docs.bnbchain.org/docs/validator/fullnode</a></p>



<p>For EVM type chains (eg: Binance Smart Chain), another option is to use the Ethereum-ETL tool. This allows you to query a full node (Running Geth or Parity, or a fork of these) and retrieve human readable CSV data representing transations.</p>



<p>Once you have a Geth-Like node running, you can retrieve ETL data with a command like:</p>



<p><code>ethereumetl export_blocks_and_transactions --start-block STARTBLOCKNUMBER --end-block ENDBLOCKNUMBER --provider-uri http://FULLNODEIP:8545 --blocks-output LOCAL_BLOCKS_CSV_FILE --transactions-output LOCAL_TRANSACTIONS_CSV_FILE</code></p>



<p>Once you exported the transactions, you can then use the&nbsp;<code>addrListsFromETLTransactions.py</code>&nbsp;file in the&nbsp;<code>utilities</code>&nbsp;folder within this repository to produce files containing lists of addresses. These address lists can then be used to create an addressDB using the same process covered earlier.</p>



<p>The key thing to understand with this approach is that you will need several TB worth of disk space to store/run and several TB worth of additional space for the full Ethereum ETL output. (So you probably want about 10TB of space…)</p>



<h3 id="checkingvalidating-addressdbs">Checking/Validating AddressDBs</h3>



<p>You can use the check-address-db.py file to test any addresslist file for whether it includes any given addresses.</p>



<p>For example, you could validate that the Dogecoin AddressDB (downloadable above) contains a few specific addresses with the command:</p>



<pre id="__code_1" class="wp-block-code"><code>python3 check-address-db.py --dbfilename "E:\CryptoGuide\OneDrive\AddressDBs (Mega)\addresses-DOGE.db" --checkaddresses DMQ6uuLAtNoe5y6DCpxk2Hy83nYSPDwb5T DFgLZmxFnzv2wR4GAGS3GeHvoEeSkz9ubU DKTHYZwd81xT7qJF33YRi7ftDkvouGdxxN
</code></pre>



<p>This will produce the following output</p>



<pre id="__code_2" class="wp-block-code"><code>Starting CheckAddressDB 1.9.0-CryptoGuide
Loading address database ...
Loaded 60750752 addresses from database ...
DMQ6uuLAtNoe5y6DCpxk2Hy83nYSPDwb5T Found!
DFgLZmxFnzv2wR4GAGS3GeHvoEeSkz9ubU Found!
DKTHYZwd81xT7qJF33YRi7ftDkvouGdxxN Found!
</code></pre>



<p><strong>Checklist File</strong></p>



<p>The BTCRecover repository comes bundled with some basic lists of addresses that can be used to check that an addressDB contains addresses which were first seed over a specific time interval. These addresses were randomly selected off the blockchain and are spaced at approximately 6 month intervals. (So can be used to ensure that a given addressDB roughly covers the dates you need)</p>



<p>For example, you could validate that the Dogecoin AddressDB (downloadable above) contains addresses through to Feb 2021 with the command.</p>



<pre id="__code_3" class="wp-block-code"><code>python3 check-address-db.py --dbfilename addresses-DOGE.db --checkaddresslist ./addressdb-checklists/DOGE.txt
</code></pre>



<p>This will produce the following output</p>



<pre id="__code_4" class="wp-block-code"><code>Starting CheckAddressDB 1.9.0-CryptoGuide
Loading address database ...
Loaded 60750752 addresses from database ...
Loading:  ./addressdb-checklists/DOGE.txt
DMQ6uuLAtNoe5y6DCpxk2Hy83nYSPDwb5T Found! First Seen 2021-01-31
DFgLZmxFnzv2wR4GAGS3GeHvoEeSkz9ubU Found! First seen 2020-06-29
DKTHYZwd81xT7qJF33YRi7ftDkvouGdxxN Found! First seen 2019-12-30
DPPg5BVqn7Ck5YVf6ei7NbXGVPDSzXnCBL Found! First seen 2019-05-17
DBbTFW9PZJj9EsXu5Ji59Tp6ZdKNrTZmWq Found! First seen 2018-12-05
DFJRDVzjk7NPbApWsLDreML7RDawp8UmoF Found! First seen 2018-05-16
D9dWXJjYb4HDrXpdef234GHDDggrnGsfxm Found! First seen 2017-11-05
D6A894uLhQjwSRpEroPMop4MPpUL4BZZHc Found! First seen 2017-05-19
DGVxem7KdNBCJWygpRcypS5pMJgJVRZEXD Found! First seen 2016-12-25
DMPHyer3WdKrSmwmFarXtXCxbbp4BMwo9J Found! First seen 2016-05-22
DRusoAd1Q9PJq3KpkhXjpZAoCqdQzGS6AH Found! First seen 2015-12-29
D6sxvQRSriU4pkozdYxDVRKRmoRYCVmqKv Found! First seen 2015-05-10
DNULsd2gbojENHtRRx45PUWvPgkrbL2vjE Found! First seen 2014-12-15
D5mrYgNeLwVXFyy9t9NhBpTqVaa58gUYAC Found! First seen 2014-04-29
DLAznsPDLDRgsVcTFWRMYMG5uH6GddDtv8 Found! First seen 2013-12-07
</code></pre>



<ul>
<li></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 id="token-lists-and-password-or-seed-lists">Token Lists and Password or Seed Lists</h2>



<p>Both password and seed recovery methods allow the use of both a token file and a password/seed list file. For password recovery, at least one of these will be required. (And may be required for some types of seed recovery, eg: unscrambling a seed phrase)</p>



<p>The password/seed list file also allows the task of generating passwords, and that of testing them, to be split into two seperate steps, enabling the user to take advantages of the speed boost that PYPY offers for password generation, the increased speed of testing in cpython, while also making it trivial to split the task of testing a large number of passphrase across multiple servers. (Or doing single threaded operation of creating a password list seperately to the task of testing it on a more powerful/expensive system)</p>



<p>Both the password list file and the token file have their own documentation below…</p>



<p><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/passwordlist_file/">Password/Seed List File</a></p>



<p><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/tokenlist_file/">Token List File</a></p>



<h2 id="typos">Typos</h2>



<p><em>btcrecover</em>&nbsp;can generate different variations of passwords to find typos or mistakes you may have inadvertently made while typing a password in or writing one down. This feature is enabled by including one or more command-line options when you run&nbsp;<em>btcrecover</em>.</p>



<p>If you’d just like some specific examples of command-line options you can add, please see the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/Typos_Quick_Start_Guide/">Typos Quick Start Guide</a>.</p>



<p>With the&nbsp;<code>--typos #</code>&nbsp;command-line option (with&nbsp;<code>#</code>&nbsp;replaced with a count of typos), you tell&nbsp;<em>btcrecover</em>&nbsp;up to how many typos you’d like it to add to each password (that has been either generated from a token file or taken from a passwordlist as described above). You must also specify the types of typos you’d like it to generate, and it goes through all possible combinations for you (including the no-typos-present possibility). Here is a summary of the basic types of typos along with the command-line options which enable each:</p>



<ul>
<li><code>--typos-capslock</code>&nbsp;– tries the whole password with caps lock turned on</li>



<li><code>--typos-swap</code>&nbsp;– swaps two adjacent characters</li>



<li><code>--typos-repeat</code>&nbsp;– repeats (doubles) a character</li>



<li><code>--typos-delete</code>&nbsp;– deletes a character</li>



<li><code>--typos-case</code>&nbsp;– changes the case (upper/lower) of a single letter</li>
</ul>



<p>For example, with&nbsp;<code>--typos 2 --typos-capslock --typos-repeat</code>&nbsp;options specified on the command line, all combinations containing up to two typos will be tried, e.g.&nbsp;<code>Cairo</code>&nbsp;(no typos),&nbsp;<code>cAIRO</code>&nbsp;(one typo: caps lock),&nbsp;<code>CCairoo</code>&nbsp;(two typos: both repeats), and&nbsp;<code>cAIROO</code>&nbsp;(two typos: one of each type) will be tried. Adding lots of typo types to the command line can significantly increase the number of combinations, and increasing the&nbsp;<code>--typos</code>&nbsp;count can be even more dramatic, so it’s best to tread lightly when using this feature unless you have a small token file or passwordlist.</p>



<p>Here are some additional types of typos that require a bit more explanation:</p>



<ul>
<li><code>--typos-closecase</code>&nbsp;– Like&nbsp;<code>--typos-case</code>, but it only tries changing the case of a letter if that letter is next to another letter with a different case, or if it’s at the beginning or the end. This produces fewer combinations to try so it will run faster, and it will still catch the more likely instances of someone holding down shift for too long or for not long enough.</li>



<li><code>--typos-replace s</code>&nbsp;– This tries replacing each single character with the specified string (in the example, an&nbsp;<code>s</code>). The string can be a single character, or some longer string (in which case each single character is replaced by the entire string), or even a string with one or more&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#expanding-wildcards">expanding wildcards</a>&nbsp;in it. For example,&nbsp;<code>--typos 1 --typos-replace %a</code>&nbsp;would try replacing each character (one at a time) with a lower-case letter, working through all possible combinations. Using wildcards can drastically increase the total number of combinations.</li>



<li><code>--typos-insert s</code>&nbsp;– Just like&nbsp;<code>--typos-replace</code>, but instead of replacing a character, this tries inserting a single copy of the string (or the wildcard substitutions) in between each pair of characters, as well as at the beginning and the end.Even when&nbsp;<code>--typos</code>&nbsp;is greater than 1,&nbsp;<code>--typos-insert</code>&nbsp;will not normally try inserting multiple copies of the string at the same position. For example, with&nbsp;<code>--typos 2 --typos-insert Z</code>&nbsp;specified, guesses such as&nbsp;<code>CaiZro</code>&nbsp;and&nbsp;<code>CZairoZ</code>&nbsp;are tried, but&nbsp;<code>CaiZZro</code>&nbsp;is not. You can change this by using&nbsp;<code>--max-adjacent-inserts #</code>&nbsp;with a number greater than 1.</li>
</ul>



<h4 id="typos-map">Typos Map</h4>



<ul>
<li><code>--typos-map typos.txt</code>&nbsp;– This is a relatively complicated, but also flexible type of typo. It tries replacing certain specific characters with certain other specific characters, using a separate file (in this example, named&nbsp;<code>typos.txt</code>) to spell out the details. For example, if you know that you often make mistakes with punctuation, you could create a typos-map file which has these two lines in it:<code>. ,/; ; [‘/. </code>In this example,&nbsp;<em>btcrecover</em>&nbsp;will try replacing each&nbsp;<code>.</code>&nbsp;with one of the three punctuation marks which follow the spaces on the same line, and it will try replacing each&nbsp;<code>;</code>&nbsp;with one of the four punctuation marks which follow it.This feature can be used for more than just typos. If for example you’re a fan of “1337” (leet) speak in your passwords, you could create a typos-map along these lines:<code>aA @ sS $5 oO 0 </code>This would try replacing instances of&nbsp;<code>a</code>&nbsp;or&nbsp;<code>A</code>&nbsp;with&nbsp;<code>@</code>, instances of&nbsp;<code>s</code>&nbsp;or&nbsp;<code>S</code>&nbsp;with either a&nbsp;<code>$</code>&nbsp;or a&nbsp;<code>5</code>, etc., up to the maximum number of typos specified with the&nbsp;<code>--typos #</code>&nbsp;option. For example, if the token file contained the token&nbsp;<code>Passwords</code>, and if you specified&nbsp;<code>--typos 3</code>,&nbsp;<code>P@55words</code>&nbsp;and&nbsp;<code>Pa$sword5</code>&nbsp;would both be tried because they each have three or fewer typos/replacements, but&nbsp;<code>P@$$w0rd5</code>&nbsp;with its 5 typos would not be tried.The&nbsp;<em>btcrecover</em>&nbsp;package includes a few typos-map example files in the&nbsp;<code>typos</code>&nbsp;directory. You can read more about them in the&nbsp;Typos Quick Start Guide.</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h3 id="max-typos-by-type">Max Typos by Type</h3>



<p>As described above, the&nbsp;<code>--typos #</code>&nbsp;command-line option limits the total number of typos, regardless of type, that will ever be applied to a single guess. You can also set limits which are only applied to specific types of typos. For each of the&nbsp;<code>--typos-xxxx</code>&nbsp;command-line options above there is a corresponding&nbsp;<code>--max-typos-xxxx #</code>&nbsp;option.</p>



<p>For example, with&nbsp;<code>--typos 3 --typos-delete --typos-insert %a --max-typos-insert 1</code>, up to three typos will be tried. All of them could be delete typos, but at most only one will ever be an insert typo (which would insert a single lowercase letter in this case). This is particularly useful when&nbsp;<code>--typos-insert</code>&nbsp;and&nbsp;<code>--typos-replace</code>&nbsp;are used with wildcards as in this example, because it can greatly decrease the total number of combinations that need to be tried, turning a total number that would take far too long to test into one that is much more reasonable.</p>



<h2 id="typos-gory-details">Typos Gory Details</h2>



<p>The intent of the typos features is to only apply at most one typo at a time to any single character, even when applying multiple typos to a single password guess. For example, when specifying&nbsp;<code>--typos 2 --typo-case --typo-repeat</code>, each password guess can have up to two typos applied (so two case changes,&nbsp;<strong>or</strong>&nbsp;two repeated characters,&nbsp;<strong>or</strong>&nbsp;one case change plus one repeated character, at most). No single character in a guess will have more than one typo applied to it in a single guess, e.g. a single character will never be both repeated and case-changed at the same time.</p>



<p>There are however some exceptions to this one-typo-per-character rule– one intentional, and one due to limitations in the software.</p>



<p>The&nbsp;<code>--typos-capslock</code>&nbsp;typo simulates leaving the caps lock turned on during a guess. It can affect all the letters in a password at once even though it’s a single typo. As in exception to the one-typo-per-character rule, a single letter&nbsp;<em>can</em>&nbsp;be affected by a caps lock typo plus another typo at the same time.</p>



<p>The&nbsp;<code>--typos-swap</code>&nbsp;typo also ignores the one-typo-per-character rule. Two adjacent characters can be swapped (which counts as one typo) and then a second typo can be applied to one (or both) of the swapped characters. This is more a software limitation than a design choice, but it’s unlikely to change. You are however guaranteed that a single character will never be swapped more than once per guess.</p>



<p>Finally it should be noted that wildcard substitutions (expansions and contractions) occur before typos are applied, and that typos can be applied to the results of wildcard expansions. The exact order of password creation is:</p>



<ol>
<li>Create a “base” password from one or more tokens, following all the token rules (mutual exclusion, anchors, etc.).</li>



<li>Apply all wildcard expansions and contractions.</li>



<li>Apply up to a single caps lock typo.</li>



<li>Apply zero or more swap typos.</li>



<li>Apply zero or more character-changing typos (these typos&nbsp;<em>do</em>&nbsp;follow the one-typo-per-character rule).</li>



<li>Apply zero or more typo insertions (from the&nbsp;<code>typos-insert</code>&nbsp;option).</li>
</ol>



<p>At no time will the total number of typos in a single guess be more than requested with the&nbsp;<code>--typos #</code>&nbsp;option (nor will it be less than the&nbsp;<code>--min-typos</code>&nbsp;option if it’s used).</p>



<h2 id="autosave">Autosave</h2>



<p>Depending on the number of passwords which need to be tried, running&nbsp;<em>btcrecover</em>&nbsp;might take a very long time. If it is interrupted in the middle of testing (with Ctrl-C (see below), due to a reboot, accidentally closing the Command Prompt, or for any other reason), you might lose your progress and have to start the search over from the beginning. To safeguard against this, you can add the&nbsp;<code>--autosave savefile</code>&nbsp;option when you first start&nbsp;<em>btcrecover</em>. It will automatically save its progress about every 5 minutes to the file that you specify (in this case, it was named&nbsp;<code>savefile</code>&nbsp;– you can just make up any file name, as long as it doesn’t already exist).</p>



<p>If interrupted, you can restart testing by either running it with the exact same options, or by providing this option and nothing else:&nbsp;<code>--restore savefile</code>.&nbsp;<em>btcrecover</em>&nbsp;will then begin testing exactly where it had left off. (Note that the token file, as well as the typos-map file, if used, must still be present and must be unmodified for this to work. If they are not present or if they’ve been changed,&nbsp;<em>btcrecover</em>&nbsp;will refuse to start.)</p>



<p>The autosave feature is not currently supported with passwordlists, only with token files.</p>



<h3 id="interrupt-and-continue">Interrupt and Continue</h3>



<p>If you need to interrupt&nbsp;<em>btcrecover</em>&nbsp;in the middle of testing, you can do so with Ctrl-C (hold down the Ctrl key and press C) and it will respond with a message such this and then it will exit:</p>



<pre id="__code_3" class="wp-block-code"><code>Interrupted after finishing password # 357449
</code></pre>



<p>If you didn’t have the autosave feature enabled, you can still manually start testing where you left off. You need to start&nbsp;<em>btcrecover</em>&nbsp;with the&nbsp;<em>exact same</em>&nbsp;token file or passwordlist, typos-map file (if you were using one), and command-line options plus one extra option,&nbsp;<code>--skip 357449</code>, and it will start up right where it had left off.</p>



<h2 id="unicode-support">Unicode Support</h2>



<p>If your password contains any non-<a href="https://en.wikipedia.org/wiki/ASCII#ASCII_printable_code_chart">ASCII</a>&nbsp;(non-English) characters, you will need to add the&nbsp;<code>--utf8</code>&nbsp;command-line option to enable Unicode support.</p>



<p>Please note that all input to and output from&nbsp;<em>btcrecover</em>&nbsp;must be UTF-8 encoded (either with or without a Byte Order Mark, or “BOM”), so be sure to change the Encoding to UTF-8 when you save any text files. For example in Windows Notepad, the file&nbsp;<em>Encoding</em>&nbsp;setting is right next to the&nbsp;<em>Save</em>&nbsp;button in the&nbsp;<em>File</em>&nbsp;-&gt;&nbsp;<em>Save As…</em>&nbsp;dialog.</p>



<p>On Windows (but usually not on Linux or OS X), you may have trouble if any of the command line options you need to use contain any non-ASCII characters. Usually, if it displays in the command prompt window correctly when you type it in, it will work correctly with&nbsp;<code>btcrecover.py</code>. If it doesn’t display correctly, please read the section describing how to put&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#command-line-options-inside-the-tokens-file">command-line options inside the tokens file</a>.</p>



<p>Also on Windows (but usually not on Linux or OS X), if your password is found it may not be displayed correctly in the command prompt window. Here is an example of what an incorrect output might look like:</p>



<pre id="__code_4" class="wp-block-code"><code>Password found: 'btcr-????-??????'
HTML encoded:   'btcr-&amp;#1090;&amp;#1077;&amp;#1089;&amp;#1090;-&amp;#1087;&amp;#1072;&amp;#1088;&amp;#1086;&amp;#1083;&amp;#1100;'
</code></pre>



<p>As you can see, the Windows command prompt was incapable of rendering some of the characters (and they were replaced with&nbsp;<code>?</code>&nbsp;characters). To view the password that was found, copy and paste the&nbsp;<code>HTML encoded</code>&nbsp;line into a text file, and save it with a name that ends with&nbsp;<code>.html</code>&nbsp;instead of the usual&nbsp;<code>.txt</code>. Double-click the new&nbsp;<code>.html</code>&nbsp;file and it will open in your web browser to display the correct password:</p>



<pre id="__code_5" class="wp-block-code"><code>HTML encoded: 'btcr-тест-пароль'
</code></pre>



<h2 id="running-btcrecover">Running&nbsp;<em>btcrecover</em></h2>



<p>(Also see the&nbsp;Quick Start&nbsp;section.) After you’ve installed all of the requirements (above) and have downloaded the latest version:</p>



<ol>
<li>Unzip the&nbsp;<code>btcrecover-master.zip</code>&nbsp;file, it contains a single directory named “btcrecover-master”. Inside the btcrecover-master directory is the Python script (program) file&nbsp;<code>btcrecover.py</code>.</li>



<li><strong>Make a copy of your wallet file</strong>&nbsp;into the directory which contains&nbsp;<code>btcrecover.py</code>. On Windows, you can usually find your wallet file by clicking on the Start Menu, then “Run…” (or for Windows 8+ by holding down the&nbsp;<em>Windows</em>&nbsp;key and pressing&nbsp;<code>r</code>), and then typing in one of the following paths and clicking OK. Some wallet software allows you to create multiple wallets. Of course, you need to be sure to copy the correct wallet file.
<ul>
<li>BIP-39 passphrases – Please see the&nbsp;BIP-39 Passphrases&nbsp;section below.</li>



<li>Bitcoin Core –&nbsp;<code>%appdata%\Bitcoin</code>&nbsp;(it’s named&nbsp;<code>wallet.dat</code>)</li>



<li>Bitcoin Wallet for Android/BlackBerry, lost spending PINs – Please see the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#bitcoin-wallet-for-androidblackberry-spending-pins">Bitcoin Wallet for Android/BlackBerry Spending PINs</a>&nbsp;section below.</li>



<li>Bither –&nbsp;<code>%appdata%\Bither</code>&nbsp;(it’s named&nbsp;<code>address.db</code>)</li>



<li>Blockchain.com – it’s usually named&nbsp;<code>wallet.aes.json</code>; if you don’t have a backup of your wallet file, you can download one by running the&nbsp;<code>download-blockchain-wallet.py</code>&nbsp;tool in the&nbsp;<code>extract-scripts</code>&nbsp;directory if you know your wallet ID (and 2FA if enabled)</li>



<li>Coinomi – Please see the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#finding-coinomi-wallet-files">Finding Coinomi Wallet Files</a>&nbsp;section below.</li>



<li>Electrum –&nbsp;<code>%appdata%\Electrum\wallets</code></li>



<li>Litecoin-Qt –&nbsp;<code>%appdata%\Litecoin</code>&nbsp;(it’s named&nbsp;<code>wallet.dat</code>)</li>



<li>Metamask (And Metamask clones like Binance Chain Wallet, Ronin Wallet, etc) – Please see the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#finding-metamask-wallet-files">Finding Metamask Wallet Files</a>&nbsp;section below.</li>



<li>MultiBit Classic – Please see the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#finding-multibit-classic-wallet-files">Finding MultiBit Classic Wallet Files</a>&nbsp;section below.</li>



<li>MultiBit HD –&nbsp;<code>%appdata%\MultiBitHD</code>&nbsp;(it’s in one of the folders here, it’s named&nbsp;<code>mbhd.wallet.aes</code>)</li>



<li>mSIGNA –&nbsp;<code>%homedrive%%homepath%</code>&nbsp;(it’s a&nbsp;<code>.vault</code>&nbsp;file)</li>
</ul>
</li>



<li>If you have a&nbsp;<code>btcrecover-tokens-auto.txt</code>&nbsp;file, you’re almost done. Copy it into the directory which contains&nbsp;<code>btcrecover.py</code>, and then simply double-click the&nbsp;<code>btcrecover.py</code>&nbsp;file, and&nbsp;<em>btcrecover</em>&nbsp;should begin testing passwords. (You may need to rename your wallet file if it doesn’t match the file name listed insided the&nbsp;<code>btcrecover-tokens-auto.txt</code>&nbsp;file.) If you don’t have a&nbsp;<code>btcrecover-tokens-auto.txt</code>&nbsp;file, continue reading below.</li>



<li>Copy your&nbsp;<code>tokens.txt</code>&nbsp;file, or your passwordlist file if you’re using one, into the directory which contains&nbsp;<code>btcrecover.py</code>.</li>



<li>You will need to run&nbsp;<code>btcrecover.py</code>&nbsp;with at least two command-line options,&nbsp;<code>--wallet FILE</code>&nbsp;to identify the wallet file name and either&nbsp;<code>--tokenlist FILE</code>&nbsp;or&nbsp;<code>--passwordlist FILE</code>&nbsp;(the FILE is optional for&nbsp;<code>--passwordlist</code>), depending on whether you’re using a&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#the-token-file">Token File</a>&nbsp;or&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#the-passwordlist">Passwordlist</a>. If you’re using&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#typos">Typos</a>&nbsp;or&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#autosave">Autosave</a>, please refer the sections above for additional options you’ll want to add.</li>



<li>Here’s an example for both Windows and OS X. The details for your system will be different, for example the download location may be different, or the wallet file name may differ, so you’ll need to make some changes. Any additional options are all placed at the end of the&nbsp;<em>btcrecover</em>&nbsp;line.
<ul>
<li><em>Windows</em>: Open a Command Prompt window (click the Start Menu and type “command”), and type in the two lines below.<code>cd Downloads\btcrecover-master python3 btcrecover.py --wallet wallet.dat --tokenlist tokens.txt [other-options...]</code></li>



<li><em>OS X</em>: Open a terminal window (open the Launchpad and search for “terminal”), and type in the two lines below.<code>cd Downloads/btcrecover-master python3 btcrecover.py --wallet wallet.dat --tokenlist tokens.txt [other-options...]</code></li>
</ul>
</li>
</ol>



<p>After a short delay,&nbsp;<em>btcrecover</em>&nbsp;should begin testing passwords and will display a progress bar and an ETA as shown below. If it appears to be stuck just counting upwards with the message&nbsp;<code>Counting passwords ...</code>&nbsp;and no progress bar, please read the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/Limitations_and_Caveats/#memory">Memory limitations</a>&nbsp;section. If that doesn’t help, then you’ve probably chosen too many tokens or typos to test resulting in more combinations than your system can handle (although the&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#token-counts"><code>--max-tokens</code></a>&nbsp;option may be able to help).</p>



<pre id="__code_8" class="wp-block-code"><code>Counting passwords ...
Done
Using 4 worker threads
439 of 7661527 [-------------------------------] 0:00:10, ETA:  2 days, 0:25:56
</code></pre>



<p>If one of the combinations is the correct password for the wallet, the password will eventually be displayed and&nbsp;<em>btcrecover</em>&nbsp;will stop running:</p>



<pre id="__code_9" class="wp-block-code"><code>1298935 of 7661527 [####-----------------------] 8:12:42, ETA:  1 day, 16:13:24
Password found: 'Passwd42'
</code></pre>



<p>If all of the password combinations are tried, and none of them were correct for the wallet, this message will be dislayed instead:</p>



<pre id="__code_10" class="wp-block-code"><code>7661527 of 7661527 [########################################] 2 days, 0:26:06,
Password search exhausted
</code></pre>



<p>Running&nbsp;<code>btcrecover.py</code>&nbsp;with the&nbsp;<code>--help</code>&nbsp;option will give you a summary of all of the available command-line options, most of which are described in the sections above.</p>



<h3 id="testing-your-config">Testing your config</h3>



<p>If you’d just like to test your token file and/or chosen typos, you can use the&nbsp;<code>--listpass</code>&nbsp;option in place of the&nbsp;<code>--wallet FILE</code>&nbsp;option as demonstrated below.&nbsp;<em>btcrecover</em>&nbsp;will then list out all the passwords to the screen instead of actually testing them against a wallet file. This can also be useful if you have another tool which can test some other type of wallet, and is capable of taking a list of passwords to test from&nbsp;<em>btcrecover</em>. Because this option can generate so much output, you may want only use it with short token files and few typo options.</p>



<pre id="__code_11" class="wp-block-code"><code>    python3 btcrecover.py --listpass --tokenlist tokens.txt  | more
</code></pre>



<p>The&nbsp;<code>| more</code>&nbsp;at the end (the&nbsp;<code>|</code>&nbsp;symbol is a shifted&nbsp;<code>\</code>&nbsp;backslash) will introduce a pause after each screenful of passwords.</p>



<h3 id="extracting-yoroi-master-key">Extracting Yoroi Master Key</h3>



<p><strong>Chrome Based Browser Wallets</strong></p>



<p>You will need to first open your Yoroi Wallet, then enable open the Developer Tools in your browser.</p>



<p>You then need to navigate to “Application” (Chrome), go to the “IndexedDB” section, open the “Yoroi-Schema” and navigate to the “Key” section.</p>



<p>You will then see a list of master keys. You probably want the first Encrypted Key, as shown below:</p>



<figure class="wp-block-image"><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/saved_resource" alt="Yoroi_Masterkey"></figure>



<p>You can then click on the “Hash” field and select Copy. This string is what you will use with the&nbsp;<code>--yoroi-master-password</code>&nbsp;argument</p>



<p><strong>Firefox Browser Wallets</strong></p>



<p>You can find the data by accessing the .sqlite file directly for the extension.</p>



<p>This will be found in your browser profile folder (This location of this will vary based on your environment) for the extension. You can see an example of were this file was found for a Windows environment in the very top of the screenshot below.</p>



<figure class="wp-block-image"><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/saved_resource(1)" alt="Yoroi_Masterkey"></figure>



<p>You can then simply open it with a text editor and look for the string “Hash” or “isEncrypted”, your encrypted Master-Password will be visible in clear text. (Highlighted in green in the screenshot above)</p>



<p>This string is what you will use with the&nbsp;<code>--yoroi-master-password</code>&nbsp;argument</p>



<h3 id="finding-multibit-classic-wallet-files">Finding MultiBit Classic Wallet Files</h3>



<p><em>btcrecover</em>&nbsp;doesn’t operate directly on MultiBit Classic wallet files, instead it operates on MultiBit private key backup files. When you first add a password to your MultiBit Classic wallet, and after that each time you add a new receiving address or change your wallet password, MultiBit creates an encrypted private key backup file in a&nbsp;<code>key-backup</code>&nbsp;directory that’s near the wallet file. These private key backup files are much faster to try passwords against (by a factor of over 1,000), which is why&nbsp;<em>btcrecover</em>&nbsp;uses them. For the default wallet that is created when MultiBit is first installed, this directory is located here:</p>



<pre id="__code_12" class="wp-block-code"><code>%appdata%\MultiBit\multibit-data\key-backup
</code></pre>



<p>The key files have names which look like&nbsp;<code>walletname-20140407200743.key</code>. If you’ve created additional wallets, their&nbsp;<code>key-backup</code>&nbsp;directories will be located elsewhere and it’s up to you to locate them. Once you have, choose the most recent&nbsp;<code>.key</code>&nbsp;file and copy it into the directory containing&nbsp;<code>btcrecover.py</code>&nbsp;for it to use.</p>



<p>For more details on locating your MultiBit private key backup files, see:&nbsp;<a href="https://www.multibit.org/en/help/v0.5/help_fileDescriptions.html" target="_blank" rel="noreferrer noopener">https://www.multibit.org/en/help/v0.5/help_fileDescriptions.html</a></p>



<h3 id="finding-metamask-wallet-files">Finding Metamask Wallet Files</h3>



<p>For Chrome Based Browsers, you will need to locate the data folder for the browser extension. You then use the path to this wallet folder with the –wallet argument.</p>



<p>For Metamask this is: %localappdata%\Google\Chrome\User Data\Default\Local Extension Settings\nkbihfbeogaeaoehlefnkodbefgpgknn</p>



<p>For Binance Wallet Extension this is: %localappdata%\Google\Chrome\User Data\Default\Local Extension Settings\fhbohimaelbohpjbbldcngcnapndodjp</p>



<p>For Ronin Wallet this is: %localappdata%\Google\Chrome\User Data\Default\Local Extension Settings\fnjhmkhhmkbjkkabndcnnogagogbneec</p>



<p>If you are trying to recover anything other than the most recent wallet, you will need to use the extract script to list all of the possible vaults that are in the extension data.</p>



<p>For Firefox and iOS, you will need to retrieve your Metamask vault using the process described here: https://metamask.zendesk.com/hc/en-us/articles/360018766351-How-to-use-the-Vault-Decryptor-with-the-MetaMask-Vault-Data</p>



<p>For Mobile wallets (iOS and Android) the “wallet-file” that you pass BTCRecover is the file:&nbsp;<code>persist-root</code>&nbsp;You can find it using the process above and use it directly with BTCRecover. (No need to extract the vault data only, remove excess&nbsp;<code>\</code>&nbsp;characters, etc, all this is handled automatically)</p>



<p>For Android devices, you will mostly need a “rooted” phone. The file you are after is:&nbsp;<code>/data/data/io.metamask/files/persistStore/persist-root</code></p>



<p>You can then copy/paste the vault data (from either Firefox or an extract script) in to a text file and use that directly with the –wallet argument.</p>



<h3 id="finding-coinomi-wallet-files">Finding Coinomi Wallet Files</h3>



<p><strong>Note: This only supports wallets that are protected by a password. If you selected “no password”, “biometrics” or “password + biometrics” then you will also need information from your phones keystore… (Which may be impossible to retrieve)</strong></p>



<p>The first step for Coinomi depends on which platform you are running it on.</p>



<p>For Windows users, it’s simply a case of navigating to %localappdata%\Coinomi\Coinomi\wallets and you will find your wallet files.</p>



<p>For Android users, you will need to have a rooted phone which will allow you to access the .wallet file in the Coinomi. (It should be found in the folder data\data\com.coinomi.wallet\files\wallets) How to get root access on your particular phone is beyond the scope of this document, but be warned that some methods of rooting your phone will involve a factory reset.</p>



<p>If there are mulitiple wallets there and you are not sure which is the correct one, the name of each wallet can be found in clear text at the end of the file.&nbsp;See the test wallets included with this repository in ./btcrecover/test/test-wallets&nbsp;for an example)</p>



<h3 id="downloading-dogechaininfo-wallet-files">Downloading Dogechain.info wallet files</h3>



<p>Downloading these kinds of wallet files id done via your browser, through the “Developer Tools” feature.</p>



<p>Basically you need to attempt to log in to your wallet (even with the wrong password) and save the wallet file that is downloaded as part of this process.</p>



<p>Once you are at the dogechain.info wallet login page, with the developer tools open in your browser, you will need to do the following steps:</p>



<p>1) Select the Network tab</p>



<p>2) Enter your Wallet ID</p>



<p>3) Enter a placeholder password (you can enter anything)</p>



<p>4) Click Log In (It will say that it failed to decrypt the wallet, but this is normal)</p>



<p>5) Select “Responses”</p>



<p>6) Select the API items. (This may look slightly different if you have 2fa enabled, you may need to complete the 2fa at this step too)</p>



<p>7) Once you have a response that looks like wallet data, copy it and paste it in to a text file. This is your wallet file…</p>



<figure class="wp-block-image"><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/saved_resource(2)" alt="Download Dodgechain Wallet"></figure>



<h3 id="downloading-blockio-wallet-files">Downloading block.io wallet files</h3>



<p>Downloading these kinds of wallet files id done via your browser, through the “Developer Tools” feature.</p>



<p>Basically you need to log in to your wallet and then go in to the “Settings” screen, once there you can open the “Developer tools” in your browser.</p>



<p>1) Select the Network tab</p>



<p>2) Enter a placeholder PIN in the “Current PIN” field. (This can be anything, eg: “123”)</p>



<p>3) Enter a placeholder password in the New Secret PIN field. (This can be anything, but must be valid, eg: btcrtestpassword2022)</p>



<p>4) Click “Change Secret PIN” (This will give an error that your Secret PIN is incorrect, but that doesn’t matter…)</p>



<p>5) Select “Responses”</p>



<p>6) Select the initiate_change_secrets file.</p>



<p>7) Once you have a response that looks like wallet data, copy it and paste it in to a text file. This is your wallet file…</p>



<figure class="wp-block-image"><img decoding="async" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/saved_resource(3)" alt="Download Block IO Wallet"></figure>



<h3 id="bitcoin-wallet-for-androidblackberry-spending-pins">Bitcoin Wallet for Android/BlackBerry Spending PINs</h3>



<p>Bitcoin Wallet for Android/BlackBerry has a&nbsp;<em>spending PIN</em>&nbsp;feature which can optionally be enabled. If you lose your spending PIN, you can use&nbsp;<em>btcrecover</em>&nbsp;to try to recover it.</p>



<ol>
<li>Open the Bitcoin Wallet app, press the menu button, and choose Safety.</li>



<li>Choose&nbsp;<em>Back up wallet</em>.</li>



<li>Type in a password to protect your wallet backup file, and press OK. You’ll need to remember this password for later.</li>



<li>Press the Archive button in the lower-right corner.</li>



<li>Select a method of sharing the wallet backup file with your PC, for example you might choose Gmail or perhaps Drive.</li>
</ol>



<p>This wallet backup file, once saved to your PC, can be used just like any other wallet file in&nbsp;<em>btcrecover</em>&nbsp;with one important exception: when you run&nbsp;<em>btcrecover</em>, you&nbsp;<strong>must</strong>&nbsp;add the&nbsp;<code>--android-pin</code>&nbsp;option. When you do,&nbsp;<em>btcrecover</em>&nbsp;will ask you for your backup password (from step 3), and then it will try to recover the spending PIN.</p>



<p>Because PINs usually just contain digits, your token file will usually just contain something like this (for PINs of up to 6 digits for example):&nbsp;<code>%1,6d</code>. (See the section on&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/TUTORIAL/#expanding-wildcards">Wildcards</a>&nbsp;for more details.)</p>



<p>Note that if you don’t include the&nbsp;<code>--android-pin</code>&nbsp;option,&nbsp;<em>btcrecover</em>&nbsp;will try to recover the backup password instead.</p>



<h3 id="bip-39-passphrases-electrum-extra-words">BIP-39 Passphrases &amp; Electrum “Extra Words”</h3>



<p>Some&nbsp;<a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki">BIP-39</a>&nbsp;compliant wallets offer a feature to add a “25th word”, “BIP-39 passphrase” or “plausible deniability passphrase” to your seed (mnemonic) (Note that most hardware wallets also offer a PIN feature which is not supported by&nbsp;<em>btcrecover</em>.)</p>



<p>If you know your seed, but don’t remember this passphrase,&nbsp;<em>btcrecover</em>&nbsp;may be able to help. You will also need to know either:</p>



<ol>
<li>Preferably your master public key / “xpub” (for the&nbsp;<em>first</em>&nbsp;account in your wallet, if it supports multiple accounts),&nbsp;<em>or</em></li>



<li>a receiving address that was generated by your wallet (in its first account), along with a good estimate of how many addresses you created before the receiving address you’d like to use.</li>
</ol>



<p>Once you have this information, run&nbsp;<em>btcrecover</em>&nbsp;normally, except that&nbsp;<em>instead</em>&nbsp;of providing a wallet file on the command line as described above with the&nbsp;<code>--wallet wallet.dat</code>&nbsp;option, use the&nbsp;<code>--bip39</code>&nbsp;option, e.g.:</p>



<pre id="__code_13" class="wp-block-code"><code>python3 btcrecover.py --bip39 --tokenlist tokens.txt [other-options...]
</code></pre>



<p>If the address/accounts that you are trying to recover are from a BIP39/44 wallet, but for a currency other than Bitcoin, you can use the&nbsp;<code>--wallet-type</code>&nbsp;argument and specify any supported BIP39 wallet type that is supported by seedrecover.py. (Eg: bch, bip39, bitcoinj, dash, digibyte, dogecoin, ethereum, electrum2, groestlecoin, litecoin, monacoin, ripple, vertcoin, zilliqa) You can also attempt recovery with unsupported coins that share a derivation scheme with any of these by using the&nbsp;<code>--bip32-path</code>&nbsp;argument with the derivation path for that coin.</p>



<p>For more info see the notes on&nbsp;<a href="https://cryptodeeptech.ru/btc-recover-crypto-guide/#en/latest/bip39-accounts-and-altcoins/">BIP39 Accounts and Altcoins</a></p>



<p>If you are unsure of both your seed AND your BIP39 passphrase, then you will need to use seedrecover.py and specify multiple BIP39 passphrases. (But be aware that this is very slow)</p>



<h3 id="gpu-acceleration-for-bitcoin-core-and-litecoin-qt-wallets">GPU acceleration for Bitcoin Core and Litecoin-Qt wallets</h3>



<p><em>btcrecover</em>&nbsp;includes experimental support for using one or more graphics cards or dedicated accelerator cards to increase search performance. This can offer on the order of&nbsp;<em>100x</em>&nbsp;better performance with Bitcoin Unlimited/Classic/XT/Core or Litecoin-Qt wallets when enabled and correctly tuned.</p>



<p>For more information, please see the&nbsp;GPU Acceleration Guide.</p>



<h3 id="command-line-options-inside-the-tokens-file">command-line options inside the tokens file</h3>



<p>If you’d prefer, you can also place command-line options directly inside the&nbsp;<code>tokens.txt</code>&nbsp;file. In order to do this, the very first line of the tokens file must begin with exactly&nbsp;<code>#--</code>, and the rest of this line (and only this line) is interpreted as additional command-line options. For example, here’s a tokens file which enables autosave, pause-before-exit, and one type of typo:</p>



<pre id="__code_14" class="wp-block-code"><code>#--autosave progress.sav --pause --typos 1 --typos-case
Cairo
Beetlejuice Betelgeuse
Hotel_california
</code></pre>



<h3 id="btcrecover-tokens-autotxt">btcrecover-tokens-auto.txt</h3>



<p>Normally, when you run&nbsp;<em>btcrecover</em>&nbsp;it expects you to run it with at least a few options, such as the location of the tokens file and of the wallet file. If you run it without specifying&nbsp;<code>--tokenlist</code>&nbsp;or&nbsp;<code>--passwordlist</code>, it will check to see if there is a file named&nbsp;<code>btcrecover-tokens-auto.txt</code>&nbsp;in the current directory, and if found it will use that for the tokenlist. Because you can specify options inside the tokenlist file if you’d prefer (see above), this allows you to run&nbsp;<em>btcrecover</em>&nbsp;without using the command line at all. You may want to consider using the&nbsp;<code>--pause</code>&nbsp;option to prevent a Command Prompt window from immediately closing once it’s done running if you decide to run it this way.</p>



<h1 id="limitations-caveats">Limitations &amp; Caveats</h1>



<h3 id="beta-software">Beta Software</h3>



<p>Although this software is unlikely to harm any wallet files,&nbsp;<strong>you are strongly encouraged to only run it with copies of your wallets</strong>. In particular, this software is distributed&nbsp;<strong>WITHOUT ANY WARRANTY</strong>; please see the accompanying GPLv2 licensing terms for more details.</p>



<p>Because this software is beta software, and also because it interacts with other beta software, it’s entirely possible that it may fail to find a password which it’s been correctly configure by you to find.</p>



<h3 id="additional-limitations-caveats">Additional Limitations &amp; Caveats</h3>



<p>Please see the separate&nbsp;Limitations and Caveats&nbsp;documentation for additional details on these topics:</p>



<ul>
<li>Delimiters, Spaces, and Special Symbols in Passwords</li>



<li>Memory &amp; CPU Usage</li>



<li>Security Issues</li>



<li>Typos Details</li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 id="download">Download</h2>



<p>You can download the entire&nbsp;<em>btcrecover</em>&nbsp;package from:&nbsp;<a href="https://github.com/demining/CryptoDeepTools/archive/master.zip">https://github.com/demining/CryptoDeepTools/archive/master.zip</a></p>



<p>If you’d prefer to download just a single extract script, please select the one for your wallet software from below, then right click and choose “Save link as…” or “Save target as…”:</p>



<ul>
<li>Bitcoin Core –&nbsp;<a href="https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-bitcoincore-mkey.py">https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-bitcoincore-mkey.py</a></li>



<li>Bither –&nbsp;<a href="https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-bither-partkey.py">https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-bither-partkey.py</a></li>



<li>Blockchain main password –&nbsp;<a href="https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-blockchain-main-data.py">https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-blockchain-main-data.py</a></li>



<li>Blockchain second password –&nbsp;<a href="https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-blockchain-second-hash.py">https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-blockchain-second-hash.py</a></li>



<li>Electrum 1.x –&nbsp;<a href="https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-electrum-halfseed.py">https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-electrum-halfseed.py</a></li>



<li>Electrum 2.x –&nbsp;<a href="https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-electrum2-partmpk.py">https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-electrum2-partmpk.py</a></li>



<li>mSIGNA –&nbsp;<a href="https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-msigna-partmpk.py">https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-msigna-partmpk.py</a></li>



<li>MultiBit Classic –&nbsp;<a href="https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-multibit-privkey.py">https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-multibit-privkey.py</a></li>



<li>MultiBit HD –&nbsp;<a href="https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-multibit-hd-data.py">https://github.com/demining/CryptoDeepTools/raw/main/17BTCRecoverCryptoGuide/extract-scripts/extract-multibit-hd-data.py</a></li>
</ul>



<p>If you’re on Windows, you will also need to install the latest version of Python 3.7 or above. For any other wallets, just follow the&nbsp;instructions to install Python here.</p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 id="usage-for-bitcoin-core">Usage for Bitcoin Core</h2>



<p>After downloading the script,&nbsp;<strong>make a copy of your wallet.dat file into a different folder</strong>&nbsp;(to make it easy, into the same folder as&nbsp;<em>extract-bitcoincore-mkey.py</em>). As an example for Windows, click on the Start Menu, then click “Run…”, and then type this to open your Bitcoin folder which contains your wallet.dat file:&nbsp;<code>%appdata%\Bitcoin</code>. From here you can copy and paste your wallet.dat file into a separate folder. Next you’ll need to open a Command Prompt window and type something like this (depending on where the downloaded script is, and assuming you’ve made a copy of your wallet.dat into the same folder):</p>



<pre id="__code_1" class="wp-block-code"><code>cd btcrecover-master\extract-scripts
python3 extract-bitcoincore-mkey.py wallet.dat
</code></pre>



<p>You should get a message which looks like this as a result:</p>



<pre id="__code_2" class="wp-block-code"><code>Bitcoin Core encrypted master key, salt, iter_count, and crc in base64:
lV/wGO5oAUM42KTfq5s3egX3Uhk6gc5gEf1R3TppgzWNW7NGZQF5t5U3Ik0qYs5/dprb+ifLDHuGNQIA+8oRWA==
</code></pre>



<p>If you instead have a dump file of a Bitcoin Core wallet that was created by pywallet, just follow these same instructions except use the&nbsp;<em>extract-bitcoincore-mkey-from-pywallet.py</em>&nbsp;script instead.</p>



<p>When you (or someone else) runs&nbsp;<em>btcrecover</em>&nbsp;to search for passwords, you will not need your wallet file, only the output from&nbsp;<em>extract-bitcoincore-mkey.py</em>. To continue the example:</p>



<pre id="__code_3" class="wp-block-code"><code>cd btcrecover-master
python3 btcrecover.py --data-extract --tokenlist tokens.txt
Please enter the data from the extract script
&gt; lV/wGO5oAUM42KTfq5s3egX3Uhk6gc5gEf1R3TppgzWNW7NGZQF5t5U3Ik0qYs5/dprb+ifLDHuGNQIA+8oRWA==
...
Password found: xxxx
</code></pre>



<h3 id="bitcoin-core-technical-details">Bitcoin Core Technical Details</h3>



<p>The&nbsp;<em>extract-bitcoincore-mkey.py</em>&nbsp;script is intentionally short and should be easy to read for any Python programmer. It opens a wallet.dat file using the Python bsddb.db (Or a Pure Python implementation if this module isn’t available) or SQLite, and then extracts a single key/value pair with the key string of&nbsp;<code>\x04mkey\x01\x00\x00\x00</code>. This key/value pair contains an encrypted version of the Bitcoin Core “master key”, or mkey for short, along with some other information required to try decrypting the mkey, specifically the mkey salt and iteration count. This information is then converted to base64 format for easy copy/paste, and printed to the screen.</p>



<p>The encrypted mkey is useful to&nbsp;<em>btcrecover</em>, but it does not contain any of your Bitcoin address or private key information.&nbsp;<em>btcrecover</em>&nbsp;can attempt to decrypt the mkey by trying different password combinations. Should it succeed, it and whoever runs it will then know the password to your wallet file, but without the rest of your wallet file, the password and the decrypted mkey are of no use.</p>



<h2 id="usage-for-bither">Usage for Bither</h2>



<p>After downloading the script,&nbsp;<strong>make a copy of your wallet file into a different folder</strong>&nbsp;(to make it easy, into the same folder as the extract script). As an example for Windows, click on the Start Menu, then click “Run…”, and then type this to open the folder which usually contains your wallet file:&nbsp;<code>%appdata%\Bither</code>. From here you can copy and paste your wallet file (it’s usually named&nbsp;<code>address.db</code>), into a separate folder. Next you’ll need to open a Command Prompt window and type something like this (depending on where the downloaded script is, and assuming your wallet file is in the same folder):</p>



<pre id="__code_4" class="wp-block-code"><code>cd btcrecover-master\extract-scripts
python3 extract-bither-partkey.py address.db
</code></pre>



<p>You should get a message which looks like this:</p>



<pre id="__code_5" class="wp-block-code"><code>Bither partial encrypted private key, salt, and crc in base64:
YnQ6PocfHvWGVbCzlVb9cUtPDjosnuB7RoyspTEzZZAqURlCsLudQaQ4IkIW8YE=
</code></pre>



<p>When you (or someone else) runs&nbsp;<em>btcrecover</em>&nbsp;to search for passwords, you will not need your wallet file, only the output from&nbsp;<em>extract-bither-partkey.py</em>. To continue the example:</p>



<pre id="__code_6" class="wp-block-code"><code>cd btcrecover-master
python3 btcrecover.py --data-extract --tokenlist tokens.txt
Please enter the data from the extract script
&gt; YnQ6PocfHvWGVbCzlVb9cUtPDjosnuB7RoyspTEzZZAqURlCsLudQaQ4IkIW8YE=
...
Password found: xxxx
</code></pre>



<h3 id="bither-technical-details">Bither Technical Details</h3>



<p>The&nbsp;<em>extract-bither-partkey.py</em>&nbsp;script is intentionally short and should be easy to read for any Python programmer. A Bither encrypted private key is 48 bytes long. It contains 32 bytes of encrypted private key data, followed by 16 bytes of encrypted padding.</p>



<p>Because only the last half of the private key is extracted, the private key cannot be feasibly reconstructed even if this half of the private key could be decrypted (assuming the password search succeeds). The remaining 16 bytes of padding, once decrypted, is predictable, and this allows&nbsp;<em>btcrecover</em>&nbsp;to use it to check passwords. It tries decrypting the bytes with each password, and once this results in valid padding, it has found the correct password.</p>



<p>Without access to the rest of your wallet file, it is impossible the decrypted padding could ever lead to a loss of funds.</p>



<h2 id="usage-for-blockchaincom">Usage for Blockchain.com</h2>



<p>The first step is to download your Blockchain.com wallet backup file.</p>



<p>You will need to navigate to the&nbsp;<code>extract-scripts</code>&nbsp;folder of this package and run</p>



<p><code>python3 download-blockchain-wallet.py</code></p>



<p>When prompted, enter your wallet ID and then approve the login request on the email account associated with the wallet. Once the login is approved, your wallet.aes.json file will be saved to you PC.</p>



<p>Next you’ll need to open a Command Prompt window and type something like this :</p>



<pre id="__code_7" class="wp-block-code"><code>python3 extract-blockchain-main-data.py wallet.aes.json
</code></pre>



<p>Of course, you need to replace the wallet file name with yours. You should get a message which looks like this as a result:</p>



<pre id="__code_8" class="wp-block-code"><code>Blockchain first 16 encrypted bytes, iv, and iter_count in base64:
Yms6abF6aZYdu5sKpStKA4ihra6GEAeZTumFiIM0YQUkTjcQJwAAj8ekAQ==
</code></pre>



<p>When you (or someone else) runs&nbsp;<em>btcrecover</em>&nbsp;to search for passwords, you will not need your wallet file, only the output from&nbsp;<em>extract-blockchain-main-data.py</em>. To continue the example:</p>



<pre id="__code_9" class="wp-block-code"><code>btcrecover-master
python3 btcrecover.py --data-extract --tokenlist tokens.txt
Please enter the data from the extract script
&gt; Yms6abF6aZYdu5sKpStKA4ihra6GEAeZTumFiIM0YQUkTjcQJwAAj8ekAQ==
...
Password found: xxxx
</code></pre>



<h3 id="blockchaincom-second-passwords">Blockchain.com Second Passwords</h3>



<p>If you’ve enabled the Second Password feature of your Blockchain.com wallet, and if you need to search for this second password, you must start by finding the main password if you don’t already have it (see above). Once you have your main password, take your wallet backup file (it’s usually named&nbsp;<code>wallet.aes.json</code>), and&nbsp;<strong>make a copy of it into a different folder</strong>&nbsp;(to make it easy, into the same folder as the extract script). Next you’ll need to open a Command Prompt window and type something like this :</p>



<pre id="__code_10" class="wp-block-code"><code>cd btcrecover-master\extract-scripts
python3 extract-blockchain-second-hash.py wallet.aes.json
Please enter the Blockchain wallet's main password:
</code></pre>



<p>You need to enter your wallet’s main password when prompted so that the extract script can remove the first level of encryption to gain access to the second level of encrypted data. You should get a message which looks like this as a result:</p>



<pre id="__code_11" class="wp-block-code"><code>Blockchain second password hash, salt, and iter_count in base64:
YnM6LeP7peG853HnQlaGswlwpwtqXKwa/1rLyeGzvKNl9HpyjnaeTCZDAaC4LbJcVkxaECcAACwXY6w=
</code></pre>



<p>When you (or someone else) runs&nbsp;<em>btcrecover</em>&nbsp;to search for passwords, you will not need your wallet file, only the output from&nbsp;<em>extract-blockchain-second-hash.py</em>. To continue the example:</p>



<pre id="__code_12" class="wp-block-code"><code>cd btcrecover-master
python3 btcrecover.py --data-extract --tokenlist tokens.txt
Please enter the data from the extract script
&gt; YnM6LeP7peG853HnQlaGswlwpwtqXKwa/1rLyeGzvKNl9HpyjnaeTCZDAaC4LbJcVkxaECcAACwXY6w=
...
Password found: xxxx
</code></pre>



<p>Please note that you must either download the entire&nbsp;<em>btcrecover</em>&nbsp;package which includes an AES decryption library, or you must already have PyCrypto installed in order to use the&nbsp;<em>extract-blockchain-second-hash.py</em>&nbsp;script.</p>



<h3 id="blockchaincom-technical-details">Blockchain.com Technical Details</h3>



<p>The&nbsp;<em>extract-blockchain-main-data.py</em>&nbsp;script is intentionally short and should be easy to read for any Python programmer. This script extracts the first 32 bytes of encrypted data from a Blockchain.com wallet, of which 16 bytes are an AES initialization vector, and the remaining 16 bytes are the first encrypted AES block. This information is then converted to base64 format for easy copy/paste, and printed to the screen. The one encrypted block does not contain any private key information, but once decrypted it does contain a non-sensitive string (specifically the string “guid”, “tx_notes”, “address_book” or “double”) which can be used by&nbsp;<em>btcrecover</em>&nbsp;to test for a successful password try.</p>



<p>The&nbsp;<em>extract-blockchain-second-hash.py</em>&nbsp;script is a bit longer, but it should still be short enough for most Python programmers to read and understand. After decrypting the first level of encryption of a Blockchain.com wallet, it extracts a password hash and salt which can be used by&nbsp;<em>btcrecover</em>&nbsp;to test for a successful password try. It does not extract any of the encrypted private keys.</p>



<p>Without access to the rest of your wallet file, the bits of information extracted by these scripts alone do not put any of your Bitcoin funds at risk, even after a successful password guess and decryption.</p>



<h2 id="usage-for-coinomi">Usage for Coinomi</h2>



<p><strong>Note: This only supports wallets that are protected by a password. If you selected “no password”, “biometrics” or “password + biometrics” then you will also need information from your phones keystore… (Which may be impossible to retrieve)</strong></p>



<p>The first step for Coinomi depends on which platform you are running it on.</p>



<p>For Windows users, it’s simply a case of navigating to %localappdata%\Coinomi\Coinomi\wallets and you will find your wallet files.</p>



<p>For Android users, you will need to have a rooted phone which will allow you to access the .wallet file in the Coinomi. (It should be found in the folder data\data\com.coinomi.wallet\files\wallets) How to get root access on your particular phone is beyond the scope of this document, but be warned that some methods of rooting your phone will involve a factory reset.</p>



<p>If there are mulitiple wallets there and you are not sure which is the correct one, the name of each wallet can be found in clear text at the end of the file.&nbsp;<a href="https://github.com/demining/CryptoDeepTools/tree/master/btcrecover/test/test-wallets">See the test wallets included with this repository in ./btcrecover/test/test-wallets</a>&nbsp;for an example)</p>



<p>Once you have the file, you can either use it directly with BTCRecover, or you can create an extract.</p>



<pre id="__code_13" class="wp-block-code"><code>python3 extract-coinomi-privkey.py ../btcrecover/test/test-wallets/coinomi.wallet.android
Coinomi partial first encrypted private key, salt, n, r, p and crc in base64:
Y246uwodSaelErkb7GIYls3xaeX5i5YWtmh814zgsBCx+y8xgjp7Mul0TQBAAAAIAAEASAgdvw==
</code></pre>



<h2 id="usage-for-dogechaininfo">Usage for Dogechain.info</h2>



<p>You can then create an extract script from the downloaded wallet file with the a command like the one below. (Which uses the sample wallet file that is part of the repository)</p>



<pre id="__code_14" class="wp-block-code"><code>python3 extract-dogechain-privkey.py ../btcrecover\test\test-wallets/dogechain.wallet.aes.json
Dogechain first 16 encrypted bytes, iv, and iter_count in base64:
ZGM6jJzIUd6i9DMEgCFG9JQ1/z4xSamItXAiQnV4AeJ0BwcZznn+169Eb84PFQ3QQ2JGiBMAAGL+4VE=
</code></pre>



<h2 id="usage-for-electrum">Usage for Electrum</h2>



<p>After downloading the script,&nbsp;<strong>make a copy of your wallet file into a different folder</strong>&nbsp;(to make it easy, into the same folder as the extract script). As an example for Windows, click on the Start Menu, then click “Run…”, and then type this to open the folder which contains the first wallet file created by Electrum after it is installed:&nbsp;<code>%appdata%\Electrum\wallets</code>. From here you can copy and paste your wallet file, usually named&nbsp;<code>default_wallet</code>, into a separate folder. Next you’ll need to open a Command Prompt window and type something like this :</p>



<pre id="__code_15" class="wp-block-code"><code>cd btcrecover-master\extract-scripts
python3 extract-electrum2-partmpk.py default_wallet
</code></pre>



<p>The example above assumes you have an Electrum 2.x wallet. If it’s an Electrum 1.x wallet instead, replace&nbsp;<em>extract-electrum2-partmpk.py</em>&nbsp;with&nbsp;<em>extract-electrum-halfseed.py</em>. Of course, you’ll also need to replace the wallet file name with yours. You should get a message which looks either like this:</p>



<pre id="__code_16" class="wp-block-code"><code>First half of encrypted Electrum seed, iv, and crc in base64:
ZWw6kLJxTDF7LxneT7c5DblJ9k9WYwV6YUIUQO+IDiIXzMUZvsCT
</code></pre>



<p>Or like this, depending on the wallet details:</p>



<pre id="__code_17" class="wp-block-code"><code>Electrum2 partial encrypted master private key, iv, and crc in base64:
ZTI69B961mYKYFV7Bg1zRYZ8ZGw4cE+2D8NF3lp6d2XPe8qTdJUz
</code></pre>



<p>When you (or someone else) runs&nbsp;<em>btcrecover</em>&nbsp;to search for passwords, you will not need your wallet file, only the output from&nbsp;<em>extract-electrum-halfseed.py</em>. To continue the example:</p>



<pre id="__code_18" class="wp-block-code"><code>cd btcrecover-master
python3 btcrecover.py --data-extract --tokenlist tokens.txt
Please enter the data from the extract script
&gt; ZWw6kLJxTDF7LxneT7c5DblJ9k9WYwV6YUIUQO+IDiIXzMUZvsCT
...
Password found: xxxx
</code></pre>



<h3 id="electrum-1x-technical-details">Electrum 1.x Technical Details</h3>



<p>The&nbsp;<em>extract-electrum-halfseed.py</em>&nbsp;script is intentionally short and should be easy to read for any Python programmer. An Electrum encrypted seed is 64 bytes long. It contains a 16-byte AES initialization vector, followed by 48 bytes of encrypted seed data, the last 16 of which are padding (so just 32 bytes of actual seed data). The script extracts the 16-byte initialization vector and just the first 16 bytes of actual seed data (50% of the seed).</p>



<p>Because only half of the seed is extracted, the private keys cannot be feasibly reconstructed even after the half-seed is decrypted (assuming the password search succeeds). Because these 16 characters, once decrypted, are hex encoded,&nbsp;<em>btcrecover</em>&nbsp;can use them alone to check passwords. It tries decrypting the bytes with each password, and once the result is a valid 16-character long hex-encoded string, it has found the correct password.</p>



<p>Without access to the rest of your wallet file, it is extremely unlikely that these 16 characters alone could put any of your Bitcoin funds at risk, even after a successful password guess and decryption.</p>



<h3 id="electrum-2x-technical-details">Electrum 2.x Technical Details</h3>



<p>The&nbsp;<em>extract-electrum2-partmpk.py</em>&nbsp;script is intentionally short and should be easy to read for any Python programmer. An Electrum 2.x encrypted master private key (mpk) is 128 bytes long. It contains a 16-byte AES initialization vector, followed by 112 bytes of encrypted mpk data, with the last byte being padding (so 111 bytes of actual mpk data). Of these 111 bytes, roughly 18 comprise a header, the next 44 the chaincode, and the remaining 47 a private key. The script extracts the 16-byte initialization vector and just the first 16 bytes of mpk data, all of it non-sensitive header information.</p>



<p>Once decrypted, these 16 characters always begin with the string “xprv”, and the remainder are base58 encoded,&nbsp;<em>btcrecover</em>&nbsp;can use them alone to check passwords. It tries decrypting the bytes with each password, and once the result is what’s expected, it has found the correct password.</p>



<p>Without access to the rest of your wallet file, it is impossible the decrypted header information could ever lead to a loss of funds.</p>



<h2 id="usage-for-metamask">Usage for Metamask</h2>



<p>There are two extract scripts for Metamask, that lets you extract all the vault data (including old overwritten wallets) from the extension and one that allows you to create a n extract for trustedless recovery.</p>



<p>For Chrome Based Browsers, you will need to locate the data folder for the browser extension.</p>



<p>For Metamask this is: %localappdata%\Google\Chrome\User Data\Default\Local Extension Settings\nkbihfbeogaeaoehlefnkodbefgpgknn\</p>



<p>For Binance Wallet Extension this is: %localappdata%\Google\Chrome\User Data\Default\Local Extension Settings\fhbohimaelbohpjbbldcngcnapndodjp\</p>



<p>For Ronin Wallet this is: %localappdata%\Google\Chrome\User Data\Default\Local Extension Settings\fnjhmkhhmkbjkkabndcnnogagogbneec\</p>



<p>The paths for the extension data will be a bit different for other Chrome based browserse (Like Brave) but the general location and final folder name will be the same.</p>



<p><em>You can then view all of the vault data for that extension by using a command similar to the one below (Except you will want to use the path to your own browser extension data)</em></p>



<pre id="__code_19" class="wp-block-code"><code>python3 extract-metamask-vaults.py ../btcrecover/test/test-wallets/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn
===== (Likely) Old Vault Data =====

{"data":"vXOTraxWuDmDrhxZ759NodhTmd4UQkThRG6YLvPt14OdZgnvJo4P5wj+LRupmb+7Vql+fOM5IF33Qb3FQvWro8Ro201M1YOH5zBdSwK6wzYmlFndlwqgOq61HSDUD9Ee1ccUF/iUgqJIngCw9/bRo93kpj11MuVonNOayTFztRc68+/JPCmIe0vqPYShRfJbeI8IBvauJdUxg6VqG0PId0Pw30ZO3f3QXmKFE+ZoibgbO111j7gQ0l7j6KdABeA=","iv":"7hvnbvsoSQmAbWzfvtMkjA==","salt":"13+DUqg893kPM0MiJz3bz2iYGAxPtPisX1JE1+be9IU="}

===== Current Vault Data =====

{"data":"Ny6zeXCgltvFkIWycZU3gYLocIM+gH/2m4fozdKdJxwff2BUHXaxBkaLDuzMs7WtazXJ+3P+XsFFG2W8+7tpNfCv2RCNNHWX9aVEBKeKEwQPUT6MD4rNU2XYykPROAcbdUPHKEVpaAEj+1VlCiMk1m3j7KhIHpt1cI7Qp8rV7lxzCUc5FWAWlc+gxvFTfSXOPJd0k23/F9MgRq0vn2h+UJolmLzpQFvEv2BUuL6CoEbog8Vn2N+ktypbR2pnNMA=","iv":"H82DrVooOndR7fk1SKKGwQ==","salt":"cxp0pRtsgyUBjll6MktU2HySubrtnMaPXAwaBsANA1Y="}
</code></pre>



<p>For Firefox, you will need to retrieve your Metamask vault using the process described here: https://metamask.zendesk.com/hc/en-us/articles/360018766351-How-to-use-the-Vault-Decryptor-with-the-MetaMask-Vault-Data</p>



<p>Once you have the vault data, you can put it in a text file and you can either use it directly with BTCRecover, or you can create an extract.</p>



<pre id="__code_20" class="wp-block-code"><code>python3 extract-metamask-privkey.py ../btcrecover/test/test-wallets/metamask.9.8.4_firefox_vault
Metamask first 16 encrypted bytes, iv, and salt in base64:
bXQ6bB5JP1EW0xwBmWZ9vI/iw9IRkorRs9rI6wJCNrd8KUw61ubkQxf9JF9jDv9kZIlxVVkKb7lIwnt7+519MLodzoK0sOw=
</code></pre>



<h2 id="usage-for-msigna">Usage for mSIGNA</h2>



<p>After downloading the script,&nbsp;<strong>make a copy of your wallet file into a different folder</strong>&nbsp;(to make it easy, into the same folder as the extract script). As an example for Windows, click on the Start Menu, then click “Run…”, and then type this to open the folder which usually contains your wallet file:&nbsp;<code>%homedrive%%homepath%</code>. From here you can copy and paste your wallet file (it’s a&nbsp;<code>.vault</code>&nbsp;file), into a separate folder. Next you’ll need to open a Command Prompt window and type something like this (depending on where the downloaded script is, and assuming your wallet file is named&nbsp;<code>msigna-wallet.vault</code>&nbsp;and it’s in the same folder):</p>



<pre id="__code_21" class="wp-block-code"><code>cd btcrecover-master\extract-scripts
python3 extract-msigna-partmpk.py msigna-wallet.vault
</code></pre>



<p>You should get a message which looks like this:</p>



<pre id="__code_22" class="wp-block-code"><code>mSIGNA partial encrypted master private key, salt, and crc in base64:
bXM6SWd6U+qTKOzQDfz8auBL1/tzu0kap7NMOqctt7U0nA8XOI6j6BCjxCsc7mU=
</code></pre>



<p>When you (or someone else) runs&nbsp;<em>btcrecover</em>&nbsp;to search for passwords, you will not need your wallet file, only the output from&nbsp;<em>extract-msigna-partmpk.py</em>. To continue the example:</p>



<pre id="__code_23" class="wp-block-code"><code>cd btcrecover-master
python3 btcrecover.py --data-extract --tokenlist tokens.txt
Please enter the data from the extract script
&gt; bXM6SWd6U+qTKOzQDfz8auBL1/tzu0kap7NMOqctt7U0nA8XOI6j6BCjxCsc7mU=
...
Password found: xxxx
</code></pre>



<h3 id="msigna-technical-details">mSIGNA Technical Details</h3>



<p>The&nbsp;<em>extract-msigna-partmpk.py</em>&nbsp;script is intentionally short and should be easy to read for any Python programmer. An mSIGNA encrypted master private key is 48 bytes long. It contains 32 bytes of encrypted private key data, followed by 16 bytes of encrypted padding (the chaincode is stored separately).</p>



<p>Because only the last half of the private key is extracted, the wallet cannot be feasibly reconstructed even if this half of the private key could be decrypted (assuming the password search succeeds). The remaining 16 bytes of padding, once decrypted, is predictable, and this allows&nbsp;<em>btcrecover</em>&nbsp;to use it to check passwords. It tries decrypting the bytes with each password, and once this results in valid padding, it has found the correct password.</p>



<p>Without access to the rest of your wallet file, it is impossible the decrypted padding could ever lead to a loss of funds.</p>



<h2 id="usage-for-multibit-classic">Usage for MultiBit Classic</h2>



<p><strong><em>Warning:</em></strong>&nbsp;Using the&nbsp;<code>extract-multibit-privkey.py</code>&nbsp;script on a MultiBit Classic key file, as described below, can lead to&nbsp;<em>false positives</em>. A&nbsp;<em>false positive</em>&nbsp;occurs when&nbsp;<em>btcrecover</em>&nbsp;reports that it has found the password, but is mistaken—the password which it displays may not be correct. If you plan to test a large number of passwords (on the order of 10 billion (10,000,000,000) or more), it’s&nbsp;<strong>strongly recommended</strong>&nbsp;that you use&nbsp;<em>btcrecover</em>&nbsp;directly with a key file instead of using&nbsp;<code>extract-multibit-privkey.py</code>.</p>



<p><em>btcrecover</em>&nbsp;doesn’t operate directly on MultiBit wallet files, instead it operates on MultiBit private key backup files. When you first add a password to your MultiBit wallet, and after that each time you add a new receiving address or change your wallet password, MultiBit creates an encrypted private key backup file in a&nbsp;<code>key-backup</code>&nbsp;directory that’s near the wallet file. These private key backup files are much faster to try passwords against (by a factor of over 1,000), which is why&nbsp;<em>btcrecover</em>&nbsp;uses them. For the default wallet that is created when MultiBit is first installed, this directory is located here:</p>



<pre id="__code_24" class="wp-block-code"><code>%appdata%\MultiBit\multibit-data\key-backup
</code></pre>



<p>The key files have names which look like&nbsp;<code>walletname-20140407200743.key</code>. If you’ve created additional wallets, their&nbsp;<code>key-backup</code>&nbsp;directories will be located elsewhere and it’s up to you to locate them.</p>



<p>For more details on locating your MultiBit private key backup files, see:&nbsp;<a href="https://www.multibit.org/en/help/v0.5/help_fileDescriptions.html">https://www.multibit.org/en/help/v0.5/help_fileDescriptions.html</a></p>



<p>Once you’ve located the correct MultiBit private key backup file,&nbsp;<strong>make a copy of it into a different folder</strong>&nbsp;(to make it easy, into the same folder as the extract script). As an example for Windows, click on the Start Menu, then click “Run…”, and then type this to open the private key backup folder for the first wallet which MultiBit creates (this might not be the one you want, though…):&nbsp;<code>%appdata%\MultiBit\multibit-data\key-backup</code>. From here you can copy and paste a private key backup file into a separate folder. Next you’ll need to open a Command Prompt window and type something like this (depending on where the downloaded script is, and assuming you’ve made a copy of the private key file into the same folder):</p>



<pre id="__code_25" class="wp-block-code"><code>cd btcrecover-master\extract-scripts
python3 extract-multibit-privkey.py multibit-20140407200743.key
</code></pre>



<p>Of course, you need to replace the private key file name with yours. You should get a message which looks like this as a result:</p>



<pre id="__code_26" class="wp-block-code"><code>MultiBit partial first encrypted private key, salt, and crc in base64:
bWI6sTaHldcBFFj9zlgNpO1szOwy8elpl20OWgj+lA==
</code></pre>



<p>When you (or someone else) runs&nbsp;<em>btcrecover</em>&nbsp;to search for passwords, you will not need your wallet file or the private key file, only the output from&nbsp;<em>extract-multibit-privkey.py</em>. To continue the example:</p>



<pre id="__code_27" class="wp-block-code"><code>cd btcrecover-master
python3 btcrecover.py --data-extract --tokenlist tokens.txt
Please enter the data from the extract script
&gt; bWI6sTaHldcBFFj9zlgNpO1szOwy8elpl20OWgj+lA==
...
Password found: xxxx
</code></pre>



<h3 id="multibit-classic-technical-details">MultiBit Classic Technical Details</h3>



<p><strong>Warning:</strong>&nbsp;MultiBit Classic data-extracts have a false positive rate of approximately 1 in 3×10<sup>11</sup>. See the warning above for more information.</p>



<p>The&nbsp;<em>extract-multibit-privkey.py</em>&nbsp;script is intentionally short and should be easy to read for any Python programmer. This script extracts 8 bytes of password salt plus the first 16 encrypted base58-encoded characters (out of 52) from the first private key from a MultiBit private key backup file. Because less than 34% of a single private key is extracted, the private key itself cannot be feasibly reconstructed even after these first 16 bytes are decrypted (assuming the password search succeeds). Because these 16 characters, once decrypted, are base58 encoded,&nbsp;<em>btcrecover</em>&nbsp;can use them alone to check passwords. It tries decrypting the bytes with each password, and once the result is a valid 16-character long base58-encoded private key prefix, it has found the correct password.</p>



<p>Without access to the rest of your private key backup file or your wallet file, these 16 characters alone do not put any of your Bitcoin funds at risk, even after a successful password guess and decryption.</p>



<h2 id="usage-for-multibit-hd">Usage for MultiBit HD</h2>



<p>After downloading the script,&nbsp;<strong>make a copy of your mbhd.wallet.aes file into a different folder</strong>&nbsp;(to make it easy, into the same folder as&nbsp;<em>extract-multibit-hd-data.py</em>). As an example for Windows, click on the Start Menu, then click “Run…”, and then type this:&nbsp;<code>%appdata%\MultiBitHD</code>. From here you can open your wallet folder, and copy and paste your mbhd.wallet.aes file into a separate folder. Next you’ll need to open a Command Prompt window and type something like this (depending on where the downloaded script is, and assuming you’ve made a copy of your mbhd.wallet.aes into the same folder):</p>



<pre id="__code_28" class="wp-block-code"><code>cd btcrecover-master\extract-scripts
python3 extract-multibit-hd-data.py mbhd.wallet.aes
</code></pre>



<p>You should get a message which looks like this as a result:</p>



<pre id="__code_29" class="wp-block-code"><code>MultiBit HD first 16 bytes of encrypted wallet and crc in base64:
bTI6LbH/+ROEa0cQ0inH7V3thbdFJV4=
</code></pre>



<p>When you (or someone else) runs&nbsp;<em>btcrecover</em>&nbsp;to search for passwords, you will not need your wallet file, only the output from&nbsp;<em>extract-multibit-hd-data.py</em>. To continue the example:</p>



<pre id="__code_30" class="wp-block-code"><code>cd btcrecover-master
python3 btcrecover.py --data-extract --tokenlist tokens.txt
Please enter the data from the extract script
&gt; bTI6LbH/+ROEa0cQ0inH7V3thbdFJV4=
...
Password found: xxxx
</code></pre>



<h3 id="multibit-hd-technical-details">MultiBit HD Technical Details</h3>



<p>The&nbsp;<em>extract-multibit-hd-data</em>&nbsp;script is intentionally short and should be easy to read for any Python programmer. A MultiBit HD wallet file is entirely encrypted. The extract script simply reads the first 32 bytes from the wallet file.</p>



<p>These 32 bytes optionally (starting with MultiBit HD v0.5.0) start with a 16-byte AES initialization vector followed by the header bytes of a bitcoinj wallet file, specifically the byte string “\x0a?org.bitcoin.” once decrypted (where the ? can be any byte). It tries decrypting the bytes with each password, and once the result is what’s expected, it has found the correct password.</p>



<p>Without access to the rest of your wallet file, it is impossible the decrypted header information could ever lead to a loss of funds.</p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/17BTCRecoverCryptoGuide" target="_blank" rel="noreferrer noopener">Source codes</a></strong></p>



<p><strong><a href="https://t.me/cryptodeeptech" target="_blank" rel="noreferrer noopener">Telegram:&nbsp;https://t.me/cryptodeeptech</a></strong></p>



<p><a href="https://youtu.be/imTXE4rGqHw"><strong>Video: https://youtu.be/imTXE4rGqHw</strong></a></p>



<p><strong><a href="https://cryptodeeptech.ru/btc-recover-crypto-guide" target="_blank" rel="noreferrer noopener">Source: https://cryptodeeptech.ru/btc-recover-crypto-guide</a></strong></p>



<p></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="1024" height="576" src="./BTC Recover Crypto Guide wallet password and seed recovery tools open source - CRYPTO DEEP TECH_files/027-1024x576.png" alt="BTC Recover Crypto Guide wallet password and seed recovery tools open source" class="wp-image-1320" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/12/027-1024x576.png 1024w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/027-300x169.png 300w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/027-768x432.png 768w, https://cryptodeeptech.ru/wp-content/uploads/2022/12/027.png 1280w" sizes="(max-width: 1024px) 100vw, 1024px"></figure>
	</div><!-- .entry-content -->



-----
-----




|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2gTnMpxRUNBU85Hg4ruTwnpUPKdf3nV |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |


