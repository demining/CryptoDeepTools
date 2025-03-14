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


K = 0x6bd261bd25ac54807552dfeec6454d6719ec8a05cb11ad5171e1ad68abb0acb2 # Value of K (secret key)
R = 0x5013dbed340fed00b6cb9778a713e1456b8138d00c3bcf6e7ff117be723335d0 # Value of R from signature
S = 0x5018ddd352a6bc61b86afee5001a3e25d26a328a833c8f3812a15465f542c1c9 # Value of S from signature
Z = 0x396ebf23dbcccce2a389ccb26198e25118bf7f72c38d2a4ab8d9e4648f2385f8 # Value of Z (message hash)


print (h((((S * K) - Z) * modinv(R,N)) % N))
