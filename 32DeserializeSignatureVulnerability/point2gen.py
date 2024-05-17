import sys
from ecpy.curves     import Curve,Point

cv = Curve.get_curve('secp256k1')
P  = Point(0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798,
           0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8,
           cv)

k   = int(sys.argv[1],16)

Q  = k*P

print(Q)