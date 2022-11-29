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

"""Scrypt implementation that calls into system libscrypt"""


import base64
import ctypes
from ctypes import c_char_p, c_size_t, c_uint64, c_uint32
from ctypes.util import find_library
import os

from .common import (
    SCRYPT_N, SCRYPT_r, SCRYPT_p, SCRYPT_MCF_PREFIX_s1,
    SCRYPT_MCF_PREFIX_DEFAULT, SCRYPT_MCF_PREFIX_ANY, check_args, unicode)
from . import mcf as mcf_mod


_libscrypt_soname = find_library('scrypt')
if _libscrypt_soname is None:
    raise ImportError('Unable to find libscrypt')

try:
    _libscrypt = ctypes.CDLL(_libscrypt_soname)
    _libscrypt_scrypt = _libscrypt.libscrypt_scrypt
    _libscrypt_mcf = _libscrypt.libscrypt_mcf
    _libscrypt_check = _libscrypt.libscrypt_check
except OSError:
    raise ImportError('Unable to load libscrypt: ' + _libscrypt_soname)
except AttributeError:
    raise ImportError('Incompatible libscrypt: ' + _libscrypt_soname)

_libscrypt_scrypt.argtypes = [
    c_char_p,  # password
    c_size_t,  # password length
    c_char_p,  # salt
    c_size_t,  # salt length
    c_uint64,  # N
    c_uint32,  # r
    c_uint32,  # p
    c_char_p,  # out
    c_size_t,  # out length
]

_libscrypt_mcf.argtypes = [
    c_uint64,  # N
    c_uint32,  # r
    c_uint32,  # p
    c_char_p,  # salt
    c_char_p,  # hash
    c_char_p,  # out (125+ bytes)
]

_libscrypt_check.argtypes = [
    c_char_p,  # mcf (modified)
    c_char_p,  # hash
]


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

    out = ctypes.create_string_buffer(olen)
    ret = _libscrypt_scrypt(password, len(password), salt, len(salt),
                          N, r, p, out, len(out))
    if ret:
        raise ValueError

    return out.raw


def scrypt_mcf(password, salt=None, N=SCRYPT_N, r=SCRYPT_r, p=SCRYPT_p,
               prefix=SCRYPT_MCF_PREFIX_DEFAULT):
    """Derives a Modular Crypt Format hash using the scrypt KDF

    Parameter space is smaller than for scrypt():
    N must be a power of two larger than 1 but no larger than 2 ** 31
    r and p must be positive numbers between 1 and 255
    Salt must be a byte string 1-16 bytes long.

    If no salt is given, a random salt of 128+ bits is used. (Recommended.)
    """
    if (prefix != SCRYPT_MCF_PREFIX_s1 and prefix != SCRYPT_MCF_PREFIX_ANY):
        return mcf_mod.scrypt_mcf(scrypt, password, salt, N, r, p, prefix)
    if isinstance(password, unicode):
        password = password.encode('utf8')
    elif not isinstance(password, bytes):
        raise TypeError('password must be a unicode or byte string')
    if salt is None:
        salt = os.urandom(16)
    elif not (1 <= len(salt) <= 16):
        raise ValueError('salt must be 1-16 bytes')
    if N > 2**31:
        raise ValueError('N > 2**31 not supported')
    if b'\0' in password:
        raise ValueError('scrypt_mcf password must not contain zero bytes')

    hash = scrypt(password, salt, N, r, p)

    h64 = base64.b64encode(hash)
    s64 = base64.b64encode(salt)

    out = ctypes.create_string_buffer(125)
    ret = _libscrypt_mcf(N, r, p, s64, h64, out)
    if not ret:
        raise ValueError

    out = out.raw.strip(b'\0')
    # XXX: Hack to support old libscrypt (like in Ubuntu 14.04)
    if len(out) == 123:
        out = out + b'='

    return out


def scrypt_mcf_check(mcf, password):
    """Returns True if the password matches the given MCF hash"""
    if not isinstance(mcf, bytes):
        raise TypeError('MCF must be a byte string')
    if isinstance(password, unicode):
        password = password.encode('utf8')
    elif not isinstance(password, bytes):
        raise TypeError('password must be a unicode or byte string')
    if len(mcf) != 124 or b'\0' in password:
        return mcf_mod.scrypt_mcf_check(scrypt, mcf, password)

    mcfbuf = ctypes.create_string_buffer(mcf)
    ret = _libscrypt_check(mcfbuf, password)
    if ret < 0:
        return mcf_mod.scrypt_mcf_check(scrypt, mcf, password)

    return bool(ret)


if __name__ == "__main__":
    import sys
    from . import tests
    tests.run_scrypt_suite(sys.modules[__name__])

