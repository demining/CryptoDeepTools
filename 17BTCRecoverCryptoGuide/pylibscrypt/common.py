# Copyright (c) 2014-2018, Jan Varho
#
# Permission to use, copy, modify, and/or distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

"""Common constants and functions used by scrypt implementations"""

import numbers


SCRYPT_MCF_PREFIX_7 = b'$7$'
SCRYPT_MCF_PREFIX_s1 = b'$s1$'
SCRYPT_MCF_PREFIX_DEFAULT = b'$s1$'
SCRYPT_MCF_PREFIX_ANY = None

SCRYPT_N = 1<<14
SCRYPT_r = 8
SCRYPT_p = 1

# The last one differs from libscrypt defaults, but matches the 'interactive'
# work factor from the original paper. For long term storage where runtime of
# key derivation is not a problem, you could use 16 as in libscrypt or better
# yet increase N if memory is plentiful.

try:
    xrange = xrange
except:
    xrange = range

try:
    unicode = unicode
except:
    unicode = str


def check_args(password, salt, N, r, p, olen=64):
    if not isinstance(password, bytes):
        raise TypeError('password must be a byte string')
    if not isinstance(salt, bytes):
        raise TypeError('salt must be a byte string')
    if not isinstance(N, numbers.Integral):
        raise TypeError('N must be an integer')
    if not isinstance(r, numbers.Integral):
        raise TypeError('r must be an integer')
    if not isinstance(p, numbers.Integral):
        raise TypeError('p must be an integer')
    if not isinstance(olen, numbers.Integral):
        raise TypeError('length must be an integer')
    if N > 2**63:
        raise ValueError('N cannot be larger than 2**63')
    if (N & (N - 1)) or N < 2:
        raise ValueError('N must be a power of two larger than 1')
    if r <= 0:
        raise ValueError('r must be positive')
    if p <= 0:
        raise ValueError('p must be positive')
    if r * p >= 2**30:
        raise ValueError('r * p must be less than 2 ** 30')
    if olen <= 0:
        raise ValueError('length must be positive')

