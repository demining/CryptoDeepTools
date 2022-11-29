# Automatically generated file, see inline.py

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


def blockxor(source, s_start, dest, d_start, length):
    for i in xrange(length):
        dest[d_start + i] ^= source[s_start + i]


def integerify(B, r):
    """A bijection from ({0, 1} ** k) to {0, ..., (2 ** k) - 1"""

    Bi = (2 * r - 1) * 16
    return B[Bi]


def salsa20_8(B, x, src, s_start, dest, d_start):
    """Salsa20/8 http://en.wikipedia.org/wiki/Salsa20"""

    # Merged blockxor for speed
    for i in xrange(16):
        x[i] = B[i] = B[i] ^ src[s_start + i]

    # This is the actual Salsa 20/8: four identical double rounds
    for i in xrange(4):
        a = (x[0]+x[12]) & 0xffffffff
        b = (x[5]+x[1]) & 0xffffffff
        x[4] ^= (a << 7) | (a >> 25)
        x[9] ^= (b << 7) | (b >> 25)
        a = (x[10]+x[6]) & 0xffffffff
        b = (x[15]+x[11]) & 0xffffffff
        x[14] ^= (a << 7) | (a >> 25)
        x[3] ^= (b << 7) | (b >> 25)
        a = (x[4]+x[0]) & 0xffffffff
        b = (x[9]+x[5]) & 0xffffffff
        x[8] ^= (a << 9) | (a >> 23)
        x[13] ^= (b << 9) | (b >> 23)
        a = (x[14]+x[10]) & 0xffffffff
        b = (x[3]+x[15]) & 0xffffffff
        x[2] ^= (a << 9) | (a >> 23)
        x[7] ^= (b << 9) | (b >> 23)
        a = (x[8]+x[4]) & 0xffffffff
        b = (x[13]+x[9]) & 0xffffffff
        x[12] ^= (a << 13) | (a >> 19)
        x[1] ^= (b << 13) | (b >> 19)
        a = (x[2]+x[14]) & 0xffffffff
        b = (x[7]+x[3]) & 0xffffffff
        x[6] ^= (a << 13) | (a >> 19)
        x[11] ^= (b << 13) | (b >> 19)
        a = (x[12]+x[8]) & 0xffffffff
        b = (x[1]+x[13]) & 0xffffffff
        x[0] ^= (a << 18) | (a >> 14)
        x[5] ^= (b << 18) | (b >> 14)
        a = (x[6]+x[2]) & 0xffffffff
        b = (x[11]+x[7]) & 0xffffffff
        x[10] ^= (a << 18) | (a >> 14)
        x[15] ^= (b << 18) | (b >> 14)
        a = (x[0]+x[3]) & 0xffffffff
        b = (x[5]+x[4]) & 0xffffffff
        x[1] ^= (a << 7) | (a >> 25)
        x[6] ^= (b << 7) | (b >> 25)
        a = (x[10]+x[9]) & 0xffffffff
        b = (x[15]+x[14]) & 0xffffffff
        x[11] ^= (a << 7) | (a >> 25)
        x[12] ^= (b << 7) | (b >> 25)
        a = (x[1]+x[0]) & 0xffffffff
        b = (x[6]+x[5]) & 0xffffffff
        x[2] ^= (a << 9) | (a >> 23)
        x[7] ^= (b << 9) | (b >> 23)
        a = (x[11]+x[10]) & 0xffffffff
        b = (x[12]+x[15]) & 0xffffffff
        x[8] ^= (a << 9) | (a >> 23)
        x[13] ^= (b << 9) | (b >> 23)
        a = (x[2]+x[1]) & 0xffffffff
        b = (x[7]+x[6]) & 0xffffffff
        x[3] ^= (a << 13) | (a >> 19)
        x[4] ^= (b << 13) | (b >> 19)
        a = (x[8]+x[11]) & 0xffffffff
        b = (x[13]+x[12]) & 0xffffffff
        x[9] ^= (a << 13) | (a >> 19)
        x[14] ^= (b << 13) | (b >> 19)
        a = (x[3]+x[2]) & 0xffffffff
        b = (x[4]+x[7]) & 0xffffffff
        x[0] ^= (a << 18) | (a >> 14)
        x[5] ^= (b << 18) | (b >> 14)
        a = (x[9]+x[8]) & 0xffffffff
        b = (x[14]+x[13]) & 0xffffffff
        x[10] ^= (a << 18) | (a >> 14)
        x[15] ^= (b << 18) | (b >> 14)

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
        BY[i * 16:(i * 16)+(16)] = BY[Yi + (i * 2) * 16:(Yi + (i * 2) * 16)+(16)]
        BY[(i + r) * 16:((i + r) * 16)+(16)] = BY[Yi + (i*2 + 1) * 16:(Yi + (i*2 + 1) * 16)+(16)]


def smix(B, Bi, r, N, V, X):
    """SMix; a specific case of ROMix based on Salsa20/8"""

    X[0:(0)+(32 * r)] = B[Bi:(Bi)+(32 * r)]

    for i in xrange(N):                                # ROMix - 2
        V[i * (32 * r):(i * (32 * r))+(32 * r)] = X[0:(0)+(32 * r)]
        blockmix_salsa8(X, 32 * r, r)                  # ROMix - 4

    for i in xrange(N):                                # ROMix - 6
        j = integerify(X, r) & (N - 1)                 # ROMix - 7
        blockxor(V, j * (32 * r), X, 0, 32 * r)        # ROMix - 8(inner)
        blockmix_salsa8(X, 32 * r, r)                  # ROMix - 9(outer)

    B[Bi:(Bi)+(32 * r)] = X[0:(0)+(32 * r)]


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

