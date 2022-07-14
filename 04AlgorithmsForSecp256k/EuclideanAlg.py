# Extended Euclidean algorithm

import numpy as np

def Euclide(a, b):
    '''
    ax + by = GCD(a, b)
    :return: GCD(a, b), x, y
    '''
    u = np.array([1, 0, a])
    v = np.array([0, 1, b])
    while(v[2]!= 0):
        q = u[2] // v[2]
        u, v = v, u - q * v
    return u[2], u[0], u[1]

def moduloInverse(a, mod):
    return Euclide(a, mod)[1] % mod
