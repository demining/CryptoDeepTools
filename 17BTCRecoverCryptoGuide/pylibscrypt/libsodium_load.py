# Copyright (c) 2015, Jan Varho
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

import ctypes.util
import sys


def get_libsodium():
    '''Locate the libsodium C library'''

    __SONAMES = (13, 10, 5, 4)
    # Import libsodium from system
    sys_sodium = ctypes.util.find_library('sodium')
    if sys_sodium is None:
        sys_sodium = ctypes.util.find_library('libsodium')

    if sys_sodium:
        try:
            return ctypes.CDLL(sys_sodium)
        except OSError:
            pass

    # Import from local path
    if sys.platform.startswith('win'):

        try:
            return ctypes.cdll.LoadLibrary('libsodium')
        except OSError:
            pass
        for soname_ver in __SONAMES:
            try:
                return ctypes.cdll.LoadLibrary(
                    'libsodium-{0}'.format(soname_ver)
                )
            except OSError:
                pass
    elif sys.platform.startswith('darwin'):
        try:
            return ctypes.cdll.LoadLibrary('libsodium.dylib')
        except OSError:
            try:
                libidx = __file__.find('lib')
                if libidx > 0:
                    libpath = __file__[0:libidx+3] + '/libsodium.dylib'
                    return ctypes.cdll.LoadLibrary(libpath)
            except OSError:
                pass
    else:
        try:
            return ctypes.cdll.LoadLibrary('libsodium.so')
        except OSError:
            pass

        for soname_ver in __SONAMES:
            try:
                return ctypes.cdll.LoadLibrary(
                    'libsodium.so.{0}'.format(soname_ver)
                )
            except OSError:
                pass

