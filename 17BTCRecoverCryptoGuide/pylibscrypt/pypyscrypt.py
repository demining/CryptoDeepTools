# Copyright (c) 2014 Richard Moore
# Copyright (c) 2014-2019 Jan Varho
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

"""Python implementation of Scrypt password-based key derivation function"""

# Scrypt definition:
# http://www.tarsnap.com/scrypt/scrypt.pdf

# It was originally written for a pure-Python Litecoin CPU miner:
# https://github.com/ricmoo/nightminer
# Imported to this project from:
# https://github.com/ricmoo/pyscrypt
# And owes thanks to:
# https://github.com/wg/scrypt


from hashlib import pbkdf2_hmac as _pbkdf2
import struct

from . import mcf as mcf_mod
from .common import (
    SCRYPT_N, SCRYPT_r, SCRYPT_p, SCRYPT_MCF_PREFIX_DEFAULT, xrange,
    check_args)


def array_overwrite(source, s_start, dest, d_start, length):
    dest[d_start:d_start + length] = source[s_start:s_start + length]


def blockxor(source, s_start, dest, d_start, length):
    for i in xrange(length):
        dest[d_start + i] ^= source[s_start + i]


def integerify(B, r):
    """A bijection from ({0, 1} ** k) to {0, ..., (2 ** k) - 1"""

    Bi = (2 * r - 1) * 16
    return B[Bi]


def R(X, destination, a1, a2, b):
    """A single Salsa20 row operation"""

    a = (X[a1] + X[a2]) & 0xffffffff
    X[destination] ^= ((a << b) | (a >> (32 - b)))


def salsa20_8(B, x, src, s_start, dest, d_start):
    """Salsa20/8 http://en.wikipedia.org/wiki/Salsa20"""

    # Merged blockxor for speed
    for i in xrange(16):
        x[i] = B[i] = B[i] ^ src[s_start + i]

    # This is the actual Salsa 20/8: four identical double rounds
    for i in xrange(4):
        R(x, 4, 0,12, 7);R(x, 8, 4, 0, 9);R(x,12, 8, 4,13);R(x, 0,12, 8,18)
        R(x, 9, 5, 1, 7);R(x,13, 9, 5, 9);R(x, 1,13, 9,13);R(x, 5, 1,13,18)
        R(x,14,10, 6, 7);R(x, 2,14,10, 9);R(x, 6, 2,14,13);R(x,10, 6, 2,18)
        R(x, 3,15,11, 7);R(x, 7, 3,15, 9);R(x,11, 7, 3,13);R(x,15,11, 7,18)
        R(x, 1, 0, 3, 7);R(x, 2, 1, 0, 9);R(x, 3, 2, 1,13);R(x, 0, 3, 2,18)
        R(x, 6, 5, 4, 7);R(x, 7, 6, 5, 9);R(x, 4, 7, 6,13);R(x, 5, 4, 7,18)
        R(x,11,10, 9, 7);R(x, 8,11,10, 9);R(x, 9, 8,11,13);R(x,10, 9, 8,18)
        R(x,12,15,14, 7);R(x,13,12,15, 9);R(x,14,13,12,13);R(x,15,14,13,18)

    # While we are handling the data, write it to the correct dest.
    # The latter half is still part of salsa20
    for i in xrange(16):
        dest[d_start + i] = B[i] = (x[i] + B[i]) & 0xffffffff


def blockmix_salsa8(BY, Yi, r):
    """Blockmix; Used by SMix"""

    start = (2 * r - 1) * 16
    X = BY[start:start+16]                             # BlockMix - 1
    tmp = [0]*16

    for i in xrange(2 * r):                            # BlockMix - 2
        #blockxor(BY, i * 16, X, 0, 16)                # BlockMix - 3(inner)
        salsa20_8(X, tmp, BY, i * 16, BY, Yi + i*16)   # BlockMix - 3(outer)
        #array_overwrite(X, 0, BY, Yi + (i * 16), 16)  # BlockMix - 4

    for i in xrange(r):                                # BlockMix - 6
        array_overwrite(BY, Yi + (i * 2) * 16, BY, i * 16, 16)
        array_overwrite(BY, Yi + (i*2 + 1) * 16, BY, (i + r) * 16, 16)


def smix(B, Bi, r, N, V, X):
    """SMix; a specific case of ROMix based on Salsa20/8"""

    array_overwrite(B, Bi, X, 0, 32 * r)               # ROMix - 1

    for i in xrange(N):                                # ROMix - 2
        array_overwrite(X, 0, V, i * (32 * r), 32 * r) # ROMix - 3
        blockmix_salsa8(X, 32 * r, r)                  # ROMix - 4

    for i in xrange(N):                                # ROMix - 6
        j = integerify(X, r) & (N - 1)                 # ROMix - 7
        blockxor(V, j * (32 * r), X, 0, 32 * r)        # ROMix - 8(inner)
        blockmix_salsa8(X, 32 * r, r)                  # ROMix - 9(outer)

    array_overwrite(X, 0, B, Bi, 32 * r)               # ROMix - 10


def scrypt(password, salt, N=SCRYPT_N, r=SCRYPT_r, p=SCRYPT_p, olen=64):
    """Returns a key derived using the scrypt key-derivarion function

    N must be a power of two larger than 1 but no larger than 2 ** 63 (insane)
    r and p must be positive numbers such that r * p < 2 ** 30

    The default values are:
    N -- 2**14 (~16k)
    r -- 8
    p -- 1

    Memory usage is proportional to N*r. Defaults require about 16 MiB.
    Time taken is proportional to N*p. Defaults take <100ms of a recent x86.

    The last one differs from libscrypt defaults, but matches the 'interactive'
    work factor from the original paper. For long term storage where runtime of
    key derivation is not a problem, you could use 16 as in libscrypt or better
    yet increase N if memory is plentiful.
    """

    check_args(password, salt, N, r, p, olen)

    # Everything is lists of 32-bit uints for all but pbkdf2
    try:
        B  = _pbkdf2('sha256', password, salt, 1, p * 128 * r)
        B  = list(struct.unpack('<%dI' % (len(B) // 4), B))
        XY = [0] * (64 * r)
        V  = [0] * (32 * r * N)
    except (MemoryError, OverflowError):
        raise ValueError("scrypt parameters don't fit in memory")

    for i in xrange(p):
        smix(B, i * 32 * r, r, N, V, XY)

    B = struct.pack('<%dI' % len(B), *B)
    return _pbkdf2('sha256', password, B, 1, olen)


def scrypt_mcf(password, salt=None, N=SCRYPT_N, r=SCRYPT_r, p=SCRYPT_p,
               prefix=SCRYPT_MCF_PREFIX_DEFAULT):
    """Derives a Modular Crypt Format hash using the scrypt KDF

    Parameter space is smaller than for scrypt():
    N must be a power of two larger than 1 but no larger than 2 ** 31
    r and p must be positive numbers between 1 and 255
    Salt must be a byte string 1-16 bytes long.

    If no salt is given, a random salt of 128+ bits is used. (Recommended.)
    """
    return mcf_mod.scrypt_mcf(scrypt, password, salt, N, r, p, prefix)


def scrypt_mcf_check(mcf, password):
    """Returns True if the password matches the given MCF hash"""
    return mcf_mod.scrypt_mcf_check(scrypt, mcf, password)


__all__ = ['scrypt', 'scrypt_mcf', 'scrypt_mcf_check']


if __name__ == "__main__":
    import sys
    from . import tests
    tests.run_scrypt_suite(sys.modules[__name__])

