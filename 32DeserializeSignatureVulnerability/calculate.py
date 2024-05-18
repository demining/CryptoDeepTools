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


K = 0x2863763e8ec6bf755cc152e5080e7c74a95295f06cfbe86d9cb7c37f28f1013c
R = 0xb44a31bd81d3c596cc4d3776263229b6f52f2a729fbcafefffc9a0d955d46307
S = 0x74e5feb333400732256fc44a681a1ba262b080a7cc5dfa11894e7ce4d9766c6f
Z = 0xa79974cb42f82890fcebcb9865cd512a34479d91211e2ce383def10a7388cf63


print (h((((S * K) - Z) * modinv(R,N)) % N))