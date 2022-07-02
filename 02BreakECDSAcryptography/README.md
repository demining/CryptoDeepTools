# CryptoDeepTools
Crypto Deep Tools a set of scripts for detailed cryptanalysis of the Blockchain network in cryptocurrency Bitcoin 

---

## Analyze the data from the file "RawTX.json" (which we received in [01BlockchainGoogleDrive](https://github.com/demining/CryptoDeepTools/01BlockchainGoogleDrive))

Script [breakECDSA.py](https://github.com/demining/CryptoDeepTools/blob/main/02BreakECDSAcryptography/breakECDSA.py) reconstructs the signed message for each to find the Z value. The result is returned as R, S, Z, PUBKEY for each of the inputs present in the data in the "RawTX.json" file.

---

## Parsing Blockchain in Google Drive, we need to use Google Colab to log in

* Tutorial: https://youtu.be/BYd-cuFRZmM
* Open Our [Terminal for Google Colab](https://github.com/demining/TerminalGoogleColab)
* Create a folder "Blockchain" 
* Run script [getsign.sh](https://github.com/demining/CryptoDeepTools/blob/main/02BreakECDSAcryptography/getsign.sh)

---

## Commands:

    git clone https://github.com/demining/CryptoDeepTools.git
    
    cd CryptoDeepTools/02BreakECDSAcryptography/
    
    pip2 install -r requirements.txt

    chmod +x getsign.sh
    
    ./getsign.sh



---
### All content will be saved in a file: "signatures.json"

---


# [CryptoDeepTools](https://github.com/demining/CryptoDeepTools/)


---





|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2kh9WzCActXSGHxyypGLkqQZfxDpw8v |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
