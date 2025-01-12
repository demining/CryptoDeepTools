from bitcoin import *
import sys
import re
import json
from time import sleep

try:    # if is python3
    from urllib.request import urlopen
except: # if is python2
    from urllib2 import urlopen

def get_address_from_private_key(private_key_wif):
    # decode WIF private key
    private_key = decode_privkey(private_key_wif)

    # get the public key from the private one
    public_key = privtopub(private_key)

    # get bitcoin address from public key
    address = pubtoaddr(public_key)

    return address

def check_balance(address):

    #Modify the value of the variable below to False if you do not want Bell Sound when the Software finds balance.
    SONG_BELL = True

    #Add time different of 0 if you need more security on the checks
    WARN_WAIT_TIME = 0

    blockchain_tags_json = [ 
        'total_received',
        ]

    SATOSHIS_PER_BTC = 1e+8

    check_address = address

    parse_address_structure = re.match(r' *([a-zA-Z1-9]{1,34})', check_address)
    if ( parse_address_structure is not None ):
        check_address = parse_address_structure.group(1)
    else:
        #print( "\nThis Bitcoin Address is invalid" + check_address )
        exit(1)

    #Read info from Blockchain about the Address
    reading_state=1
    while (reading_state):
        try:
            htmlfile = urlopen("https://blockchain.info/address/%s?format=json" % check_address, timeout = 10)
            htmltext = htmlfile.read().decode('utf-8')
            reading_state  = 0
        except:
            reading_state+=1
            print( "Checking... " + str(reading_state) )
            sleep(60*reading_state)

    #print( "\nBitcoin Address = " + check_address )

    blockchain_info_array = []
    tag = ''
    try:
        for tag in blockchain_tags_json:
            blockchain_info_array.append (
                float( re.search( r'%s":(\d+),' % tag, htmltext ).group(1) ) )
    except:
        print( "Error '%s'." % tag );
        exit(1)

    for i, btc_tokens in enumerate(blockchain_info_array):

        sys.stdout.write ("%s \t= " % blockchain_tags_json[i])
        if btc_tokens > 0.0:
            print( "%.8f Bitcoin" % (btc_tokens/SATOSHIS_PER_BTC) );
        else:
            print( "0 Bitcoin" );

        if (SONG_BELL and blockchain_tags_json[i] == 'final_balance' and btc_tokens > 0.0): 
            
            #If you have a balance greater than 0 you will hear the bell
            sys.stdout.write ('\a\a\a')
            sys.stdout.flush()

            with open('balance.json', 'a') as arq1:
                arq1.write("Bitcoin Address: %s" % check_address)
                arq1.write("\t Balance: %.8f Bitcoin" % (btc_tokens/SATOSHIS_PER_BTC))
                arq1.write("\n")

            if (WARN_WAIT_TIME > 0):
                sleep(WARN_WAIT_TIME)

# enter your private key in WIF format
private_key_wif = "5KKUoqxvJjUK8zM2jaeMMpKMhzUM9EBkaFT6LedAjhrQfkTs1BP"

# get bitcoin address
bitcoin_address = get_address_from_private_key(private_key_wif)
print ("__________________________________________________\n")
print(f"Private Key WIF: {private_key_wif}")
print(f"Bitcoin Address: {bitcoin_address}")

check_balance(bitcoin_address)
print ("__________________________________________________\n")
