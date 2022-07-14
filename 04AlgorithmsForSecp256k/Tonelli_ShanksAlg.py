import random


def Tonelli_Shanks(n, p):
    """
    Находит дискретный корень
    x^2 = n (mod p)
    :param n: prime
    :param p: prime
    :return: x
    """
    from Helper import EulerCriterion, moduloPow
    assert(EulerCriterion(n, p))
    S = 0 # number of offsets (количество смещений)
    m = (p - 1)
    while m % 2 == 0:
        S += 1
        m >>= 1
    Q = m
    while True:
        z = random.randint(0, p - 1)
        if not EulerCriterion(z, p):
            break
    #for z in range(p):
    #    if not EulerCriterion(z, p):
    #        break
    #if z == p:
    #    raise Exception("Can't find non-residue")
    M = S
    c = moduloPow(z, Q, p)
    t = moduloPow(n, Q, p)
    R = moduloPow(n, (Q + 1) // 2, p)
    while True:
        if t == 0:
            return 0
        if t == 1:
            return R
        tpower = (t ** 2) % p
        i = 1
        while tpower != 1:
            i += 1
            tpower = (tpower ** 2) % p
        #b = moduloPow(c, 2 ** (M - i - 1), p)
        b = moduloPow(c, 1 << (M - i), p)
        M = i
        c = (b ** 2) % p
        t = moduloPow(t, b ** 2, p)
        R = (R * b) % p
