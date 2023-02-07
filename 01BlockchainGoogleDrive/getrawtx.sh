#!/bin/bash
fileid="$1"
curl -o index.json https://api.blockcypher.com/v1/btc/main/addrs/${fileid}?spentOnly=1&limit=500000
sleep 25
grep '"spent_by": "' index.json > index2.json
rm index.json
sed -i 's/      "spent_by": "//g' index2.json
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
