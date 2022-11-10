def h(n):
    return hex(n).replace("0x","")

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
    if g != 1:
        raise ValueError
    return x % m
    
N = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141


K = 0x6251240a6cb656310dbd7f0da53a315ab88ec253352a5d5481ee08e977b6ef2d
R = 0x331353fedfd6e4d6805fc1f06443ade552a43a43237fb6c3de3c7f0969b4cc67
S = 0x0bfec7e7d2ae249b3d69cd8d666b5ee833394af3b0703fa023579200d9ab2ff4
Z = 0x9d86bea51385f6a56835d0148e7f23a353605bab339127e800112307e6727d2d


print (h((((S * K) - Z) * modinv(R,N)) % N))
