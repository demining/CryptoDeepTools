from EuclideanAlg import *
from Tonelli_ShanksAlg import *
from Helper import *
import random


class ECurve:

    def __init__(self, A, B, mod):
        assert(ECurve.checkCurveParams(A, B, mod))
        self.A = A
        self.B = B
        self.mod = mod

    def __eq__(self, other): # self - a point on a curve, other - a natural number
        return self.A == other.A and self.B == other.B and self.mod == other.mod

    def __ne__(self, other):
        return not self == other

    def __repr__(self):
        return str(self)

    def __str__(self):
        return "E: y^2 = x^3 + " + str(self.A) + "x + " + str(self.B) + " mod " + str(self.mod)

    def genRandPoint(self):
        """
        :return: generate random point on the Curve
        """
        while True:
            x = random.randint(0, self.mod - 1 )
            f = (x ** 3 + self.A * x + self.B) % self.mod
            if EulerCriterion(f, self.mod):
                y = Tonelli_Shanks(f, self.mod)
                return EPoint(self, x, y)
        #for x in range(mod):
        #    f = (x ** 3 + A * x + B) % mod
        #    if EulerCriterion(f, mod):
        #        y = Tonelli_Shanks(f, mod)
        #        return EPoint(A, B, x, y, mod)
        #raise Exception("Can't generate point")

    @staticmethod
    def checkCurveParams(A, B, mod):
        return isinstance(A,int) and isinstance(B,int) and isinstance(mod,int) and mod > 1 and \
               0 <= A < mod and 0 <= B < mod



class EPoint:

    def __init__(self, E, x, y, inf = False):
        self.E = E
        self.x = x % self.E.mod
        self.y = y % self.E.mod
        self.inf = inf
        assert((self.y ** 2) % self.E.mod == (self.x ** 3 + E.A * x + E.B) % self.E.mod)


    def line_coeff(self, other):
        """
        Calculate Line Coefficient of Line self to Q (Lambda)
        """
        assert(onSameCurve(self, other))
        if self.x != other.x or self.y != other.y:
            if self.x == other.x:
                #return EPoint(self.A, self.B, self.x, self.y, self.mod, True)
                return self.E.mod
            l = (self.y - other.y) * moduloInverse(self.x - other.x, self.E.mod) % self.E.mod # l - lambda
        else:
            if self.y == 0:
                #return EPoint(self.A, self.B, self.x, self.y, self.mod, True)
                return self.E.mod
            l = (3 * self.x ** 2 + self.E.A) * moduloInverse(2 * self.y, self.E.mod) % self.E.mod
        return l

    def __add__(self, other):
        assert (onSameCurve(self ,other)) # if the points do not lie on the same curve
        if self.inf:
            return other
        if other.inf:
            return self
        l = self.line_coeff(other)
        if l == self.E.mod:
            return EPoint(self.E, self.x, self.y, True)
        x = (l ** 2 - self.x - other.x) % self.E.mod
        y = (l * (self.x - x) - self.y) % self.E.mod
        return EPoint(self.E, x, y)

    def __sub__(self, other):
        return self + ( - other)

    def __iadd__(self, other):
        return self + other

    def __neg__(self):
        return EPoint(self.E, self.x, (- self.y) % self.E.mod, self.inf)

    def __eq__(self, other):
        return onSameCurve(self, other) \
               and ((self.x == other.x and self.y == other.y) or (self.inf == True and other.inf == True))

    def __ne__(self, other):
        return not self == other

    def __rmul__(self, other):
        assert(isinstance(other, int))
        if other == 0:
            return EPoint(self.E, self.x, self.y, True)
        negate = False
        if other < 0:
            negate = True
            other = - other
        init = False
        powerOf2 = self
        while True:
            if other % 2 == 1:
                if init:
                    res += powerOf2
                else:
                    res = powerOf2
                    init = True
            other >>= 1 # one-bit right shift, same as integer / 2
            if other == 0:
                break
            powerOf2 += powerOf2
        if negate:
            res = - res
        return res

    def __imul__(self, other):
        return other * self

    def __hash__(self):
        if not self.inf:
            return hash(self.x + self.y)
        return hash(self.inf)

    def __repr__(self):
        return str(self)

    def __str__(self):
        if self.inf:
            res = "inf"
        else:
            res = "(" + str(self.x) + ", " + str(self.y) + ")"
        return res + " " + str(self.E)
