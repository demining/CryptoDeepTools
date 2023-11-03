# MILK SAD VULNERABILITY IN LIBBITCOIN EXPLORER
# Tutorial: https://cryptodeeptech.ru/milk-sad-vulnerability-in-libbitcoin-explorer
# https://colab.research.google.com/drive/1OhspSm7GBGiqv3WfhAqU5SJ_BgXIbUh3

binaryFile = open("binary.txt", "r")
binaryFile = binaryFile.readlines()
hexFile = open("hex.txt", "w+")

# loop through each line of binaryFile then convert and write to hexFile
for line in binaryFile:
    binaryCode = line.replace(" ", "")
    hexCode = hex(int(binaryCode, 2))
    hexCode = hexCode.replace("0x", "").upper().zfill(4)
    hexFile.write(hexCode + "\n")

# close hexFile
hexFile.close()