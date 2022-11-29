# Copyright (c) 2014-2015, Jan Varho
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

"""Simple benchmark of python vs c scrypt"""

import time

from .pylibscrypt import scrypt
from .pypyscrypt_inline import scrypt as pyscrypt


# Benchmark time in seconds
tmin = 5
Nmax = 20

t1 = time.time()
for i in xrange(1, Nmax+1):
    pyscrypt(b'password', b'NaCl', N=2**i)
    if time.time() - t1 > tmin:
        Nmax = i
        break
t1 = time.time() - t1
print('Using N = 2,4,..., 2**%d' % Nmax)
print('Python scrypt took %.2fs' % t1)

t3 = time.time()
for i in xrange(1, Nmax+1):
    scrypt(b'password', b'NaCl', N=2**i)
t3 = time.time() - t3
print('C scrypt took      %.2fs' % t3)

print('Python scrypt took %.2f times as long as C' % (t1 / t3))

