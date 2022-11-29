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

"""Modular Crypt Format support for scrypt

Compatible with libscrypt scrypt_mcf_check also supports the $7$ format.

libscrypt format:
$s1$NNrrpp$salt$hash
NN   - hex encoded N log2 (two hex digits)
rr   - hex encoded r in 1-255
pp   - hex encoded p in 1-255
salt - base64 encoded salt 1-16 bytes decoded
hash - base64 encoded 64-byte scrypt hash

$7$ format:
$7$Nrrrrrpppppsalt$hash
N     - crypt base64 N log2
rrrrr - crypt base64 r (little-endian 30 bits)
ppppp - crypt base64 p (little-endian 30 bits)
salt  - raw salt (0-43 bytes that should be limited to crypt base64)
hash  - crypt base64 encoded 32-byte scrypt hash (43 bytes)

(crypt base64 is base64 with the alphabet: ./0-9A-Za-z)

When reading, we are more lax, allowing salts and hashes to be longer and
incorrectly encoded, since the worst that can happen is that the password does
not verify.
"""


import base64
import binascii
import os
import struct

from .common import (
    SCRYPT_N, SCRYPT_r, SCRYPT_p, SCRYPT_MCF_PREFIX_7, SCRYPT_MCF_PREFIX_s1,
    SCRYPT_MCF_PREFIX_DEFAULT, SCRYPT_MCF_PREFIX_ANY, unicode)


def _scrypt_mcf_encode_s1(N, r, p, salt, hash):
    h64 = base64.b64encode(hash)
    s64 = base64.b64encode(salt)

    t = 1
    while 2**t < N:
        t += 1
    params = p + (r << 8) + (t << 16)

    return (
        b'$s1' +
        ('$%06x' % params).encode() +
        b'$' + s64 +
        b'$' + h64
    )


def _b64decode(b64):
    for b in (b64, b64 + b'=', b64 + b'=='):
        try:
            return base64.b64decode(b)
        except (TypeError, binascii.Error):
            pass
    raise ValueError('Incorrect base64 in MCF')


def _scrypt_mcf_decode_s1(mcf):
    s = mcf.split(b'$')
    if not (mcf.startswith(b'$s1$') and len(s) == 5):
        return None

    params, s64, h64 = s[2:]
    params = base64.b16decode(params, True)
    salt = _b64decode(s64)
    hash = _b64decode(h64)

    if len(params) != 3:
        raise ValueError('Unrecognized MCF parameters')
    t, r, p = struct.unpack('3B', params)
    N = 2 ** t
    return N, r, p, salt, hash, len(hash)


# Crypt base 64
_cb64 = b'./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
_cb64a = bytearray(_cb64)
_icb64 = (
    [None] * 46 +
    [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, None, None, None, None, None,
        None, None, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, None, None, None,
        None, None, None, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63
    ] +
    [None] * 133
)


def _cb64enc(arr):
    arr = bytearray(arr)
    out = bytearray()
    val = bits = pos = 0
    for b in arr:
        val += b << bits
        bits += 8
    while bits >= 0:
        out.append(_cb64a[val & 0x3f])
        bits -= 6
        val = val >> 6
    return bytes(out)


def _scrypt_mcf_encode_7(N, r, p, salt, hash):
    t = 1
    while 2**t < N:
        t += 1
    return (
        b'$7$' +
        # N
        _cb64[t::64] +
        # r
        _cb64[r & 0x3f::64] + _cb64[(r >> 6) & 0x3f::64] +
        _cb64[(r >> 12) & 0x3f::64] + _cb64[(r >> 18) & 0x3f::64] +
        _cb64[(r >> 24) & 0x3f::64] +
        # p
        _cb64[p & 0x3f::64] + _cb64[(p >> 6) & 0x3f::64] +
        _cb64[(p >> 12) & 0x3f::64] + _cb64[(p >> 18) & 0x3f::64] +
        _cb64[(p >> 24) & 0x3f::64] +
        # rest
        salt +
        b'$' + _cb64enc(hash)
    )


def _cb64dec(arr):
    out = bytearray()
    val = bits = pos = 0
    for b in arr:
        val += _icb64[b] << bits
        bits += 6
        if bits >= 8:
            out.append(val & 0xff)
            bits -= 8
            val >>= 8
    return out


def _scrypt_mcf_decode_7(mcf):
    s = mcf.split(b'$')
    if not (mcf.startswith(b'$7$') and len(s) == 4):
        return None

    s64 = bytearray(s[2])
    h64 = bytearray(s[3])
    try:
        N = 2 ** _icb64[s64[0]]
        r = (_icb64[s64[1]] + (_icb64[s64[2]] << 6) + (_icb64[s64[3]] << 12) +
             (_icb64[s64[4]] << 18) + (_icb64[s64[5]] << 24))
        p = (_icb64[s64[6]] + (_icb64[s64[7]] << 6) + (_icb64[s64[8]] << 12) +
             (_icb64[s64[9]] << 18) + (_icb64[s64[10]] << 24))
        salt = bytes(s64[11:])
        hash = bytes(_cb64dec(h64))
    except (IndexError, TypeError):
        raise ValueError('Unrecognized MCF format')

    return N, r, p, salt, hash, len(hash)


def _scrypt_mcf_7_is_standard(mcf):
    params = _scrypt_mcf_decode_7(mcf)
    if params is None:
        return False
    N, r, p, salt, hash, hlen = params
    return len(salt) == 43 and hlen == 32


def _scrypt_mcf_decode(mcf):
    params = _scrypt_mcf_decode_s1(mcf)
    if params is None:
        params = _scrypt_mcf_decode_7(mcf)
    if params is None:
        raise ValueError('Unrecognized MCF hash')
    return params


def scrypt_mcf(scrypt, password, salt=None, N=SCRYPT_N, r=SCRYPT_r, p=SCRYPT_p,
               prefix=SCRYPT_MCF_PREFIX_DEFAULT):
    """Derives a Modular Crypt Format hash using the scrypt KDF given

    Expects the signature:
    scrypt(password, salt, N=SCRYPT_N, r=SCRYPT_r, p=SCRYPT_p, olen=64)

    If no salt is given, a random salt of 128+ bits is used. (Recommended.)
    """
    if isinstance(password, unicode):
        password = password.encode('utf8')
    elif not isinstance(password, bytes):
        raise TypeError('password must be a unicode or byte string')
    if salt is not None and not isinstance(salt, bytes):
        raise TypeError('salt must be a byte string')
    if salt is not None and not (1 <= len(salt) <= 16):
        raise ValueError('salt must be 1-16 bytes')
    if r > 255:
        raise ValueError('scrypt_mcf r out of range [1,255]')
    if p > 255:
        raise ValueError('scrypt_mcf p out of range [1,255]')
    if N > 2**31:
        raise ValueError('scrypt_mcf N out of range [2,2**31]')
    if b'\0' in password:
        raise ValueError('scrypt_mcf password must not contain zero bytes')

    if prefix == SCRYPT_MCF_PREFIX_s1:
        if salt is None:
            salt = os.urandom(16)
        hash = scrypt(password, salt, N, r, p)
        return _scrypt_mcf_encode_s1(N, r, p, salt, hash)
    elif prefix == SCRYPT_MCF_PREFIX_7 or prefix == SCRYPT_MCF_PREFIX_ANY:
        if salt is None:
            salt = os.urandom(32)
        salt = _cb64enc(salt)
        hash = scrypt(password, salt, N, r, p, 32)
        return _scrypt_mcf_encode_7(N, r, p, salt, hash)
    else:
        raise ValueError("Unrecognized MCF format")


def scrypt_mcf_check(scrypt, mcf, password):
    """Returns True if the password matches the given MCF hash

    Supports both the libscrypt $s1$ format and the $7$ format.
    """
    if not isinstance(mcf, bytes):
        raise TypeError('MCF must be a byte string')
    if isinstance(password, unicode):
        password = password.encode('utf8')
    elif not isinstance(password, bytes):
        raise TypeError('password must be a unicode or byte string')

    N, r, p, salt, hash, hlen = _scrypt_mcf_decode(mcf)
    h = scrypt(password, salt, N=N, r=r, p=p, olen=hlen)
    cmp = 0
    for i, j in zip(bytearray(h), bytearray(hash)):
        cmp |= i ^ j
    return cmp == 0

