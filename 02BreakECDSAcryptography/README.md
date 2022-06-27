# CryptoDeepTools
Crypto Deep Tools a set of scripts for detailed cryptanalysis of the Blockchain network in cryptocurrency Bitcoin 

---

## Analyze the data from the file "RawTX.json" (which we received in [01BlockchainGoogleDrive](https://github.com/demining/CryptoDeepTools/01BlockchainGoogleDrive))

Script breakECDSA.py reconstructs the unsigned message for each to find the Z value. The result is returned as R, S, Z, PUBKEY for each of the inputs present in the data in the "RawTX.json" file.

---

## Command:

    git clone https://github.com/demining/CryptoDeepTools.git
    
    cd CryptoDeepTools/02BreakECDSAcryptography/
    
    pip2 install -r requirements.txt

    chmod +x getsign.sh
    
    ./getsign.sh



---
### All content will be saved in a file: "signatures.json"

---




|  | Donation Address |
| --- | --- |
| BTC | 1Lw2kh9WzCActXSGHxyypGLkqQZfxDpw8v |
| ETH | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
