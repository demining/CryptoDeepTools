from bitcoin import *

with open("PrivateKey.txt","r") as f:
    content = f.readlines()

content = [x.strip() for x in content]
f.close()


outfile = open("PrivateKeyAddr.txt","w")
for x in content:
  outfile.write(x+":"+pubtoaddr(encode_pubkey(privtopub(x), "bin_compressed"))+"\n")
 
outfile.close()
