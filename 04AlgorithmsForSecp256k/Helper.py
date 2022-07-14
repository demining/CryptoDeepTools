from Tonelli_ShanksAlg import Tonelli_Shanks
import random


def reverseBits(m):
    """
    :param m: integer to reberse bits
    :return: integer with reverse bits and number of bits in m
    """
    mRev = 0
    n = 0
    while m > 0:
        mRev <<= 1
        mRev += m % 2
        m >>= 1
        n += 1
    return mRev, n

def moduloPow(n, pow, p):
    powRev, m = reverseBits(pow)
    powRev >>= 1
    res = n
    for i in range(m - 1):
        res = (res * res) % p
        if powRev % 2 == 1:
            res = (res * n) % p
        powRev >>= 1
    return res


def onSameCurve(*points):
    for P, Q in zip(points[:-1], points[1:]):
       if P.E != Q.E:
           return False
    return True


def EulerCriterion(n, p):
    """
    :param n: element of field
    :param p: module of field
    :return: True if n id quadratic residue; False - else
    """
    return moduloPow(n, (p - 1) // 2, p) == 1


'''
def l(P, Q, R):
    """
    функция, задающая прямую линию, проходящую через точки P и Q
    :param P:
    :param Q:
    :param R:
    :return:
    """
    assert (onSameCurve(P, Q, R))
    if P == Q:
        assert (P.y != 0)
        res = R.y
        denom  = moduloInverse(2 * P.y, P.mod)
        res -= R.x * (3 * P.x ** 2 + P.A) * denom
        res -= (- P.y + 2 * P.A * P.x + 3 * P.B) * denom
        res %= P.mod
    else:
        assert (P.x != Q.x)
        res = R.y
        denom = moduloInverse(Q.x - P.x, P.mod)
        res -= R.x * (Q.y - P.y) * denom
        res -= (Q.x * P.y - P.x * Q.y) * denom
        res %= P.mod
    return res

def v(P, R):
    """
    функция, задающая вертикальную линию, проходящую через точку P
    :param P:
    :param R:
    :return:
    """
    assert (onSameCurve(P, R))
    return (R.x - P.x) % P.mod
'''
