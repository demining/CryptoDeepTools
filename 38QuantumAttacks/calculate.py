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


K = 0x39588951cd20e38a6dc86d6b436da7abd2bcad84af3dd16b6f8a83c946c1d3c6 # Value of K (secret key)
R = 0xaafe80d17b0d30de09cbe39a85514aaae0a388135987ab80207e1eed3c915280 # Value of R from signature
S = 0x0d46fb28a4b30599d33325aa8b7633dd0f584f8125bb2e136c88a3e91a6f4238 # Value of S from signature
Z = 0xbbfd05c3355957cbdf44d283b9199eb9741f775a16081288187a82f544fac11f # Value of Z (message hash)


print (h((((S * K) - Z) * modinv(R,N)) % N))
