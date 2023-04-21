with open("SignatureRSZ.csv") as myfile:
    #listfile="\n".join(line.rstrip()[+3:-70] for line in myfile)
    listfile="\n".join(f'{line.rstrip()[+5:-5]}' for line in myfile)


f = open("NoncesHEX.txt", 'w')
f.write("" + listfile + "" + "\n")
f.close()

N = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141

def rrr(i):
    tmpstr = hex(i)
    hexstr = tmpstr.replace('0x','').replace('L','').replace(' ','').zfill(64)
    return hexstr

def extended_gcd(aa, bb):
    lastremainder, remainder = abs(aa), abs(bb)
    x, lastx, y, lasty = 0, 1, 1, 0
    while remainder:
        lastremainder, (quotient, remainder) = remainder, divmod(lastremainder, remainder)
        x, lastx = lastx - quotient*x, x
        y, lasty = lasty - quotient*y, y
    return lastremainder, lastx * (-1 if aa < 0 else 1), lasty * (-1 if bb < 0 else 1)

def modinv(a, m):
    g, x, y = extended_gcd(a, m)
    return x % m

def load(file):
    signatures=[]
    import csv
    with open(file,'r') as csv_file:
        csv_reader = csv.reader(csv_file,delimiter=",")
        line = 0
        for row in csv_reader:
            r=int(row[0],16)
            s=int(row[1],16)
            z=int(row[2],16)
            t=tuple([r,s,z])
            signatures.append(t)
            line+=1
    return signatures
signatures = load("NoncesHEX.txt")
nn = len(signatures)
for a in range(0,nn):
    mm = signatures[a][2]
    rr = signatures[a][0]
    ss = signatures[a][1]
    PrivKey = 0xfbc50a7158b3d9fd7fd58fe0874f20c10c650975dc118163debf442a44203fdf
    zrx = ((mm + rr * PrivKey) % N)
    key = ((zrx * modinv(ss,N)) % N)
    print("POLYNONCE >> "+rrr(key)+"")
