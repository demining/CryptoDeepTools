# Copyright (c) 2017-2019, Jan Varho
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

"""Tests scrypt implementations using hypothesis"""


import base64
import hashlib
import sys
import unittest

from hypothesis import given, settings
from hypothesis.strategies import (
    binary, integers, none, one_of, sampled_from, text)

from .common import (
    SCRYPT_MCF_PREFIX_7, SCRYPT_MCF_PREFIX_s1,
    SCRYPT_MCF_PREFIX_DEFAULT, SCRYPT_MCF_PREFIX_ANY)


# Strategies for producing parameters

def valid_pass():
    return binary()

def valid_mcf_pass():
    return one_of(binary().filter(lambda b: b'\0' not in b),
                  text().filter(lambda b: u'\0' not in b))

def valid_salt():
    return binary()

def valid_mcf_salt():
    return one_of(binary(min_size=1, max_size=16), none())

def valid_olen():
    return integers(min_value=1, max_value=2**20)

def mcf_prefix():
    return sampled_from([
        SCRYPT_MCF_PREFIX_7,
        SCRYPT_MCF_PREFIX_s1,
        SCRYPT_MCF_PREFIX_DEFAULT,
        SCRYPT_MCF_PREFIX_ANY,
    ])


class ScryptTests(unittest.TestCase):
    """Tests an scrypt implementation from module"""
    set_up_lambda = lambda self:None
    tear_down_lambda = lambda self:None
    module = None
    ref = None

    def setUp(self):
        if not self.module:
            self.skipTest('module not tested')
        self.set_up_lambda()

    def tearDown(self):
        self.tear_down_lambda()

    def invalidPass(self, pw):
        try:
            return pw + b'_'
        except TypeError:
            return pw + u'_'

    @given(valid_pass(), valid_salt(), valid_olen())
    @settings(deadline=500)
    def test_scrypt(self, pw, salt, olen):
        h1 = self.module.scrypt(pw, salt, 2, 2, 2, olen)
        self.assertEqual(olen, len(h1))
        if (self.ref):
            h2 = self.ref.scrypt(pw, salt, 2, 2, 2, olen)
            self.assertEqual(h1, h2)
        if olen >= 16: # short hashes can collide
            h2 = self.module.scrypt(self.invalidPass(pw), salt, 2, 2, 2, olen)
            h3 = self.module.scrypt(pw, salt + b'_', 2, 2, 2, olen)
            self.assertNotEqual(h1, h2)
            self.assertNotEqual(h1, h3)

    @given(valid_mcf_pass(), valid_mcf_salt(), mcf_prefix())
    @settings(deadline=500)
    def test_mcf_scrypt(self, pw, salt, prefix):
        m = self.module.scrypt_mcf(pw, salt, 2, 2, 2, prefix)
        self.assertTrue(self.module.scrypt_mcf_check(m, pw))
        self.assertFalse(self.module.scrypt_mcf_check(m, self.invalidPass(pw)))
        if (self.ref):
            self.assertTrue(self.ref.scrypt_mcf_check(m, pw))
            self.assertFalse(self.ref.scrypt_mcf_check(m, self.invalidPass(pw)))
            if salt and prefix != SCRYPT_MCF_PREFIX_ANY:
                m2 = self.ref.scrypt_mcf(pw, salt, 2, 2, 2, prefix)
                self.assertEqual(m, m2)


def load_scrypt_suite(name, module, ref=None):
    tests = type(name, (ScryptTests,), {'module': module, 'ref': ref})
    return unittest.defaultTestLoader.loadTestsFromTestCase(tests)


if __name__ == "__main__":
    suite = unittest.TestSuite()
    ref = None
    try:
        from . import hashlibscrypt
        suite.addTest(load_scrypt_suite('hashlibscryptTests', hashlibscrypt, ref))
        ref = hashlibscrypt
    except ImportError:
        suite.addTest(load_scrypt_suite('hashlibscryptTests', None, ref))

    try:
        from . import pylibscrypt
        suite.addTest(load_scrypt_suite('pylibscryptTests', pylibscrypt, ref))
        ref = ref or pylibscrypt
    except ImportError:
        suite.addTest(load_scrypt_suite('pylibscryptTests', None, ref))

    try:
        from . import pyscrypt
        suite.addTest(load_scrypt_suite('pyscryptTests', pyscrypt, ref))
        ref = ref or pyscrypt
    except ImportError:
        suite.addTest(load_scrypt_suite('pyscryptTests', None, ref))

    try:
        from . import pylibsodium
        suite.addTest(load_scrypt_suite('pylibsodiumTests',
                                        pylibsodium, ref))
        from . import pylibscrypt
        loader = unittest.defaultTestLoader
        def set_up_ll(self):
            if not self.module._scrypt_ll:
                self.skipTest('no ll')
            self.tmp_ll = self.module._scrypt_ll
            self.tmp_scr = self.module.scr_mod
            self.module._scrypt_ll = None
            self.module.scr_mod = pylibscrypt
        def tear_down_ll(self):
            self.module._scrypt_ll = self.tmp_ll
            self.module.scr_mod = self.tmp_scr
        tmp = type(
            'pylibsodiumFallbackTests', (ScryptTests,),
            {
                'module': pylibsodium,
                'fast': False, # supports only large parameters
                'set_up_lambda': set_up_ll,
                'tear_down_lambda': tear_down_ll,
            }
        )
        suite.addTest(unittest.defaultTestLoader.loadTestsFromTestCase(tmp))
    except ImportError:
        suite.addTest(load_scrypt_suite('pylibsodiumTests', None, ref))

    try:
        from . import pypyscrypt_inline as pypyscrypt
        suite.addTest(load_scrypt_suite('pypyscryptTests', pypyscrypt, ref))
    except ImportError:
        suite.addTest(load_scrypt_suite('pypyscryptTests', None, ref))

    result = unittest.TextTestRunner().run(suite)
    sys.exit(not result.wasSuccessful())
