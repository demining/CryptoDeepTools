#!/bin/bash
fileid="$1"
wget -qO- https://chain.so/api/v2/get_tx_spent/BTC/${fileid} > index.json
grep 'txid": "' index.json > index2.json
rm index.json
sed -i 's/        "txid": "//g' index2.json
sed -i 's/",//g' index2.json
echo "with open('index2.json') as myfile:" >> fileopen.py
echo "    listfile='\necho '' >> RawTX.json\n'.join(f'wget -qO- https://blockchain.info/rawtx/{line.rstrip()[:]}?format=hex >> RawTX.json' for line in myfile)" >> fileopen.py
echo "f = open('rawscript.sh', 'a')" >> fileopen.py
echo "f.write('#!/bin/bash' + '\n')" >> fileopen.py
echo "f.write('' + listfile + '' + '\n')" >> fileopen.py
echo "f.close()" >> fileopen.py
python3 fileopen.py
rm index2.json
chmod +x rawscript.sh
./rawscript.sh
rm rawscript.sh
rm fileopen.py
