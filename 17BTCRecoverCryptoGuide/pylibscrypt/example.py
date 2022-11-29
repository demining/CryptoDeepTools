#!/usr/bin/env python

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

from base64 import b16encode

from pylibscrypt import scrypt, scrypt_mcf, scrypt_mcf_check

# Print a raw scrypt hash in hex
print(b16encode(scrypt(b'Hello World', b'salt')))

# Generate an MCF hash with random salt
mcf = scrypt_mcf(b'Hello World')

# Test it
print(scrypt_mcf_check(mcf, b'Hello World'))
print(scrypt_mcf_check(mcf, b'HelloPyWorld'))

