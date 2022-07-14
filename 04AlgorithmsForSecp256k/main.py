from EuclideanAlg import *
from EllipticCurve import *
from Divisor import *
from Pairing import *
from Curves import *
import random

#P = EPoint(3, 0, 2, 2, 5)
#Q = EPoint(3, 0, 1, 2, 5)
# R = Q + P

# print(R.x, R.y)

# R = 3 * Q
#print(R.x, R.y)

#R = Q

#for k in range(5):
#    R += Q
#    print(R.inf)

#f = Miller(Q, P, 5)
#print(f)

#print(4 * genRandPoint(1, 0, 3))

#print(genDivisor(3, 0, 5, 3))
#print(len(genDivisor(3, 0, 5, 3)))

#A = 0x000000000000000000000000000000000000000000000000
#B = 0x000000000000000000000000000000000000000000000003
#p = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37

#E = ECurve(A, B, p)

E, name = curves[0]

#E, name = random.choice(Curves)
print(name)

print(E.genRandPoint())

x = 515599647191372385423069896174791944513925907388
y = 644332753987385577337273273985499448404563989537

lhs = (y * y) % E.mod
rhs = (x * x * x + E.A * x + E.B) % E.mod
print(lhs == rhs)

#D = genDivisor(E, 25)
#print(len(D))
#print(D)
