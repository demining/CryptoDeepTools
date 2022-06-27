#!/bin/bash
grep 'PUBKEY = ' signatures.json > pubkeyall.json
sort -u pubkeyall.json > pubkey.json
rm pubkeyall.json
sed -i 's/PUBKEY = //g' pubkey.json
python3 pubtoaddr.py
python2 bitcoin-checker.py
