# pip3 install bitcoin
# MILK SAD VULNERABILITY IN LIBBITCOIN EXPLORER
# Tutorial: https://cryptodeeptech.ru/milk-sad-vulnerability-in-libbitcoin-explorer
# https://colab.research.google.com/drive/1OhspSm7GBGiqv3WfhAqU5SJ_BgXIbUh3

from bitcoin import *

with open("hex.txt","r") as f:
    content = f.readlines()
# you may also want to remove whitespace characters like `\n` at the end of each line
content = [x.strip() for x in content]
f.close()


outfile = open("privtoaddr.txt","w")
for x in content:
  outfile.write(x+":"+pubtoaddr(encode_pubkey(privtopub(x), "bin_compressed"))+"\n")

outfile.close()