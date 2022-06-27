#!/bin/bash
cat RawTX.json > index.json
for run in {1..4}; do
    export LINE=1 ; sed -n "${LINE}p" index.json > index2.json
    sed -i '1d' index.json
    echo "with open('index2.json') as myfile:" >> fileopen.py
    echo "    listfile='\n'.join(f'python2 breakECDSA.py {line.rstrip()[:]} >> signatures.json' for line in myfile)" >> fileopen.py
    echo "f = open('signscript.sh', 'a')" >> fileopen.py
    echo "f.write('#!/bin/bash' + '\n')" >> fileopen.py
    echo "f.write('' + listfile + '' + '\n')" >> fileopen.py
    echo "f.close()" >> fileopen.py
    python3 fileopen.py
    rm index2.json
    chmod +x signscript.sh
    ./signscript.sh
    rm signscript.sh
    rm fileopen.py
done
rm index.json
