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


K = 0xf99718ec8df44d695daa9eedd2b3cbe29d8a14a3fc026baeb279afe47c709de3
R = 0x061e5f5c2bc146cd5070cdef9cd2376a0b2fbbdbbda698858a38190d06caf1ff
S = 0x649db1b4fbaaba2d0669f7f7635157b273146b064248d04e76c25d41971d99a1
Z = 0xb8e936d143c8733bb1ede19146f8725fee1d10bfc19e14452a51cef0cb0014d8


print (h((((S * K) - Z) * modinv(R,N)) % N))
