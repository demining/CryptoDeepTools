# A small script for parsing data from Ethereum ETL Output and converting it in to a list of addresses

import os, sys, pathlib

prog = os.path.basename(sys.argv[0])
if len(sys.argv) == 3 and not sys.argv[1].startswith("-"):
    etlInputFolder = sys.argv[1]
    outputFolder = sys.argv[2]
else:
    print("usage:", prog, "[FOLDER_WITH_ETL_TRANSACTION_CSVs] [FOLDER_FOR_OUTPUT_ADDRESS_LIST]", file=sys.stderr)
    sys.exit(2)

seenAddresses = set()
i = 0
writeFileIndex = 0

def writeAddresses():
    global writeFileIndex
    global seenAddresses
    outputFile = outputFolder + 'ETL_Addresses_' + str(writeFileIndex).zfill(4)
    with open(outputFile,'w') as f:
        for addr in seenAddresses:
            f.write(addr + '\n')
            
    print("Writing" + outputFile)
    writeFileIndex += 1
    seenAddresses = set()

# Iterate through transactions from Ethereum-ETL and extract addresses, writing a file every 10 million addresses. (This keeps memory usage and individual file sizes small)
fileList = pathlib.Path(etlInputFolder).iterdir()
for file in fileList:
    with open(file) as transactionListFile:
        print("Checking", str(file))
        for tx in transactionListFile:
            if len(tx.strip()) == 0: continue
            txdata = tx.strip().split(',')

            # Add addresses in to and from fields
            from_address = txdata[5]
            to_address = txdata[6]
            seenAddresses.add(from_address)
            seenAddresses.add(to_address)

            # Do some basic parsing of transaction data to pick up other addresses in there. (For token transfers, etc)
            transaction_input_data = txdata[10]
            transaction_input_data = transaction_input_data.split('000000000000000000000000')
            for data_segment in transaction_input_data:
                if (len(data_segment)) == 40 and '0000000000' not in data_segment and '0x' not in data_segment: 
                    seenAddresses.add("0x" + data_segment)   
                    
                if '000000000000' in data_segment[:12] and len(data_segment) == 52:
                    seenAddresses.add("0x" + data_segment[12:])

            i += 1
            
            if i % 100000 == 0:
                print("Checked", i, "lines, found", len(seenAddresses), "unique addresses")
                
            if len(seenAddresses) > 10000000:
                writeAddresses()
                
writeAddresses()

