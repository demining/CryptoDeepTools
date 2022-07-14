from EllipticCurve import *
from EuclideanAlg import *
from Helper import *
import random


def genDivisor(E, d, maxN = 1,  G = None):
    """
    :param E: The Elliptic Curve
    :param d:  size of supp(D)
    :param maxN: maximum modulo divisor multiplier (максимальный по модулю множитель в дивизоре)
    :param G: [Optional] generator
    :return: divisor D with size of supp(D) is d
    """
    assert (maxN >= 1)
    if G is None:
        G = E.genRandPoint()
    assert(E == G.E)
    genMult = lambda: random.randint(1, maxN) if random.randint(0, 1) else random.randint(-maxN, -1) # generates a number from -maxN to +maxN without 0
    D = {} # Divisor (represented as dictionary), points are keys, values - multiplier
    P = G
    for i in range(d):
        D[P] = genMult()
        P += G
    return D
