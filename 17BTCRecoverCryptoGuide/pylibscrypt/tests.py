# Copyright (c) 2014-2019, Jan Varho
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

"""Tests scrypt and PBKDF2 implementations"""


import base64
import hashlib
import sys
import unittest


class ScryptTests(unittest.TestCase):
    """Tests an scrypt implementation from module"""
    set_up_lambda = lambda self:None
    tear_down_lambda = lambda self:None
    replace_scrypt_mcf = None
    module = None
    fast = False

    def setUp(self):
        if not self.module:
            self.skipTest('module not tested')
        self.set_up_lambda()

    def tearDown(self):
        self.tear_down_lambda()
        if self.replace_scrypt_mcf:
            self.module._libscrypt_mcf = self.replace_scrypt_mcf
            self.replace_scrypt_mcf = None

    def _test_vector(self, vector):
        pw, s, N, r, p, h, m = vector
        self.assertEqual(
            self.module.scrypt(pw, s, N, r, p),
            base64.b16decode(h, True)
        )
        if m is not None:
            self.assertEqual(
                self.module.scrypt_mcf(pw, s, N, r, p),
                m
            )
            self.assertTrue(self.module.scrypt_mcf_check(m, pw))
            self.assertFalse(self.module.scrypt_mcf_check(m, b'x' + pw))

    def test_vector0(self):
        # From http://www.tarsnap.com/scrypt/scrypt.pdf Appendix B
        self._test_vector((
            b'', b'', 16, 1, 1,
            b'77d6576238657b203b19ca42c18a0497f16b4844e3074ae8dfdffa3fede21442'
            b'fcd0069ded0948f8326a753a0fc81f17e8d3e0fb2e0d3628cf35e20c38d18906',
            None
        ))

    def test_vector1(self):
        # From http://www.tarsnap.com/scrypt/scrypt.pdf Appendix B
        # with MCF added
        if self.fast:
            self.skipTest('slow testcase')
        self._test_vector((
            b'password', b'NaCl', 1024, 8, 16,
            b'fdbabe1c9d3472007856e7190d01e9fe7c6ad7cbc8237830e77376634b373162'
            b'2eaf30d92e22a3886ff109279d9830dac727afb94a83ee6d8360cbdfa2cc0640',
            b'$s1$0a0810$TmFDbA==$/bq+HJ00cgB4VucZDQHp/nxq18vII3gw53N2Y0s3MWIu'
            b'rzDZLiKjiG/xCSedmDDaxyevuUqD7m2DYMvfoswGQA=='
        ))

    def test_vector2(self):
        # From http://www.tarsnap.com/scrypt/scrypt.pdf Appendix B
        # with MCF added
        if self.fast:
            self.skipTest('slow testcase')
        self._test_vector((
            b'pleaseletmein', b'SodiumChloride', 16384, 8, 1,
            b'7023bdcb3afd7348461c06cd81fd38ebfda8fbba904f8e3ea9b543f6545da1f2'
            b'd5432955613f0fcf62d49705242a9af9e61e85dc0d651e40dfcf017b45575887',
            b'$s1$0e0801$U29kaXVtQ2hsb3JpZGU=$cCO9yzr9c0hGHAbNgf046/2o+7qQT44+'
            b'qbVD9lRdofLVQylVYT8Pz2LUlwUkKpr55h6F3A1lHkDfzwF7RVdYhw=='
        ))

    def test_vector3(self):
        # From http://www.tarsnap.com/scrypt/scrypt.pdf Appendix B
        self.skipTest('very slow testcase')
        self._test_vector((
            b'pleaseletmein', b'SodiumChloride', 1048576, 8, 1,
            b'2101cb9b6a511aaeaddbbe09cf70f881ec568d574a2ffd4dabe5ee9820adaa47'
            b'8e56fd8f4ba5d09ffa1c6d927c40f4c337304049e8a952fbcbf45c6fa77a41a4',
            None
        ))

    def test_vector4(self):
        self._test_vector((
            b'password', b'NaCl', 2, 8, 1,
            b'e5ed8edc019edfef2d3ced0896faf9eec6921dcc68125ce81c10d53474ce'
            b'1be545979159700d324e77c68d34c553636a8429c4f3c99b9566466877f9'
            b'dca2b92b',
            b'$s1$010801$TmFDbA==$5e2O3AGe3+8tPO0Ilvr57saSHcxoElzoHBDVNHTO'
            b'G+VFl5FZcA0yTnfGjTTFU2NqhCnE88mblWZGaHf53KK5Kw=='
        ))

    def test_vector5(self):
        self._test_vector((
            b'pleaseletmein', b'SodiumChloride', 4, 1, 1,
            b'BB1D77016C543A99FE632C9C43C60180FD05E0CAC8B29374DBD1854569CB'
            b'534F487240CFC069D6A59A35F2FA5C7428B21D9BE9F84315446D5371119E'
            b'016FEDF7',
            b'$s1$020101$U29kaXVtQ2hsb3JpZGU=$ux13AWxUOpn+YyycQ8YBgP0F4MrI'
            b'spN029GFRWnLU09IckDPwGnWpZo18vpcdCiyHZvp+EMVRG1TcRGeAW/t9w=='
        ))

    def test_vector6(self):
        if self.fast:
            self.skipTest('slow testcase')
        self._test_vector((
            b'pleaseletmein', b'X'*32, 2**10, 8, 1,
            b'cd81f46bd79125651e017a1bf5a28295f68d4b68d397815514bfdc2f3684'
            b'f034ae2a5df332a48e915f7567306df2d401387b70d8f02f83bd6f4c69ff'
            b'89d2663c',
            None
        ))

    def test_vector7(self):
        self._test_vector((
            b'pa\0ss', b'salt'*4, 32, 2, 2,
            b'76c5260f1dc6339512ae87143d799089f5b508c823c870a3d55f641efa84'
            b'63a813221050c93a44255ac8027804c49a87c1ecc9911356b9fc17e06eda'
            b'85f23ff5',
            None
        ))

    def test_vector8(self):
        if self.fast:
            self.skipTest('slow testcase')
        self._test_vector((
            b'pleaseletmein', b'X'*32, 2**10, 8, 2,
            b'1693cc02b680b18b3d0a874d459d23a5f63ff4f9de0fb5917ef899226af6'
            b'bd33d3a3dfe569d3b6f4f762f0cb64f5f406d485aca501a54645d7389fe6'
            b'e28e261e',
            None
        ))

    def test_maxmem(self):
        """Tests hashlib maxmem, quite slow"""
        if self.fast:
            self.skipTest('slow testcase')
        self._test_vector((
            b'pleaseletmein', b'X'*32, 2**15, 8, 2,
            b'12e88b08ea7a534fb4bc97be54ebdcb93516efe73b3cff901a7ad565b1ae'
            b'511cd881b569bd9b65ed006f8ace0fbd75534035395e5967a340f0a4586e'
            b'f79e8ab1',
            None
        ))

    def test_bytes_enforced(self):
        assertError = self.assertRaisesRegexp
        self.assertRaisesRegexp(TypeError, 'password',
                                self.module.scrypt, u'pass', b'salt')
        self.assertRaisesRegexp(TypeError, 'password',
                                self.module.scrypt, 42, b'salt')
        self.assertRaisesRegexp(TypeError, 'salt',
                                self.module.scrypt, b'pass', None)

    def test_mcf_types_enforced(self):
        self.assertRaisesRegexp(TypeError, 'password',
                                self.module.scrypt_mcf, object)
        self.assertRaisesRegexp(TypeError, 'salt',
                                self.module.scrypt_mcf, b'pass', u'salt')
        umcf = (
            u'$s1$020101$U29kaXVtQ2hsb3JpZGU=$ux13AWxUOpn+YyycQ8YBgP0F4MrI'
            u'spN029GFRWnLU09IckDPwGnWpZo18vpcdCiyHZvp+EMVRG1TcRGeAW/t9w=='
        )
        self.assertRaisesRegexp(TypeError, 'MCF',
                                self.module.scrypt_mcf_check, umcf, b'blah')

    def test_salt_length_mcf(self):
        pw = b'pass'
        self.assertRaises(ValueError, self.module.scrypt_mcf, pw, b'')
        self.assertRaises(ValueError, self.module.scrypt_mcf, pw, b'a'*17)

    def test_salt_generation(self):
        pw, N = b'pass', 2
        m1 = self.module.scrypt_mcf(pw, N=N)
        m2 = self.module.scrypt_mcf(pw, N=N)
        self.assertNotEqual(m1, m2)
        self.assertTrue(self.module.scrypt_mcf_check(m1, pw))
        self.assertTrue(self.module.scrypt_mcf_check(m2, pw))

    def test_invalid_N(self):
        pw, s = b'password', b'salt'*8
        self.assertRaises(TypeError, self.module.scrypt, pw, s, 7.5)
        self.assertRaises(ValueError, self.module.scrypt, pw, s, -1)
        self.assertRaises(ValueError, self.module.scrypt, pw, s, 1)
        self.assertRaises(ValueError, self.module.scrypt, pw, s, 42)
        self.assertRaises(ValueError, self.module.scrypt, pw, s, 2**66)
        self.assertRaises(ValueError, self.module.scrypt, pw, s, 2**66+2)
        self.assertRaises(ValueError, self.module.scrypt_mcf, pw, None, 1)
        self.assertRaises(ValueError, self.module.scrypt_mcf, pw, None, 2**32)

    def test_huge_N(self):
        pw, s = b'password', b'salt'*8
        self.assertRaises(ValueError, self.module.scrypt, pw, s, 2**50)
        self.assertRaises(ValueError, self.module.scrypt, pw, s, 2**60)
        self.assertRaises(ValueError, self.module.scrypt_mcf, pw,
                          N=2**31, prefix=b'$7$')

    def test_invalid_r(self):
        pw, s, N = b'password', b'salt', 2
        self.assertRaises(ValueError, self.module.scrypt, pw, s, N, 0)
        self.assertRaises(ValueError, self.module.scrypt, pw, s, N, -1)
        self.assertRaises(TypeError, self.module.scrypt, pw, s, N, 7.5)
        self.assertRaises(ValueError, self.module.scrypt, pw, s, N, 2**31)
        self.assertRaises(ValueError, self.module.scrypt_mcf, pw, s, N, 256)

    def test_invalid_p(self):
        pw, s, N = b'password', b'salt', 2
        self.assertRaises(ValueError, self.module.scrypt, pw, s, N, 1, 0)
        self.assertRaises(ValueError, self.module.scrypt, pw, s, N, 1, -2**31)
        self.assertRaises(TypeError, self.module.scrypt, pw, s, N, 1, 7.5)
        self.assertRaises(ValueError, self.module.scrypt, pw, s, N, 2**35)
        self.assertRaises(ValueError, self.module.scrypt_mcf, pw, s, N, 1, 256)

    def test_olen(self):
        pw, s, N = b'password', b'salt', 2
        self.assertEquals(len(self.module.scrypt(pw, s, N, olen=42)), 42)
        self.assertEquals(len(self.module.scrypt(pw, s, N, olen=100)), 100)
        self.assertRaises(TypeError, self.module.scrypt, pw, s, N, olen=b'7')
        self.assertRaises(ValueError, self.module.scrypt, pw, s, N, olen=-1)

    def test_invalid_olen(self):
        pw, s, N = b'password', b'salt', 2**10
        self.assertRaises(TypeError, self.module.scrypt, pw, s, N, olen=b'7')
        self.assertRaises(ValueError, self.module.scrypt, pw, s, N, olen=-1)

    def test_mcf(self):
        pw = b'password'
        self.assertRaises(ValueError, self.module.scrypt_mcf_check, b'', pw)
        self.assertRaises(ValueError, self.module.scrypt_mcf_check,
                          b'$s1$ffffffff$aaaa$bbbb', pw)
        self.assertRaises(TypeError, self.module.scrypt_mcf_check, u'mcf', pw)
        self.assertRaises(TypeError, self.module.scrypt_mcf_check, b'mcf', 42)

    def test_mcf_padding(self):
        if self.fast:
            self.skipTest('slow testcase')
        pw = b'pleaseletmein'
        m1 = (
            b'$s1$020101$U29kaXVtQ2hsb3JpZGU$ux13AWxUOpn+YyycQ8YBgP0F4MrI'
            b'spN029GFRWnLU09IckDPwGnWpZo18vpcdCiyHZvp+EMVRG1TcRGeAW/t9w=='
        )
        m2 = (
            b'$s1$020101$U29kaXVtQ2hsb3JpZGU=$ux13AWxUOpn+YyycQ8YBgP0F4MrI'
            b'spN029GFRWnLU09IckDPwGnWpZo18vpcdCiyHZvp+EMVRG1TcRGeAW/t9w='
        )
        m3 = (
            b'$s1$020101$U29kaXVtQ2hsb3JpZGU=$ux13AWxUOpn+YyycQ8YBgP0F4MrI'
            b'spN029GFRWnLU09IckDPwGnWpZo18vpcdCiyHZvp+EMVRG1TcRGeAW/t9'
        )
        self.assertTrue(self.module.scrypt_mcf_check(m1, pw))
        self.assertTrue(self.module.scrypt_mcf_check(m2, pw))
        self.assertRaises(ValueError, self.module.scrypt_mcf_check, m3, pw)

    def test_mcf_nonstandard(self):
        pw = b'pass'
        m1 = ( # empty salt
            b'$s1$010801$$WA1vBj+HFlIk7pG/OPS5bY4NKHBGeGIxEY99farnu2C9uOHxKe'
            b'LWP3sCXRvP98F7lVi2JNT/Bmte38iodf81VEYB0Nu3pBw9JqTwiCAqMwL+2kqB'
        )
        m2 = ( # 31 byte hash
            b'$7$16..../....l/htqjrI38qNowkQZL8RxFVxS8JV9PPJr1+A/WTQWiU'
            b'$wOcPY0vsHHshxa0u87FDhmTo42WZr0JbSHY2w2Zkyr1'
        )
        m3 = ( # 44 byte salt, 31 byte hash
            b'$7$12..../....aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            b'$14hkhieutTQcbq.iU1FDZzYz1vW8NPYowy4WERDM70'
        )
        self.assertTrue(self.module.scrypt_mcf_check(m1, pw))
        self.assertTrue(self.module.scrypt_mcf_check(m2, pw))
        self.assertTrue(self.module.scrypt_mcf_check(m3, pw))

    def test_mcf_7(self):
        if self.fast:
            self.skipTest('slow testcase')
        p, m = b'pleaseletmein', (
            b'$7$C6..../....SodiumChloride'
            b'$kBGj9fHznVYFQMEn/qDCfrDevf9YDtcDdKvEqHJLV8D'
        )
        self.assertTrue(self.module.scrypt_mcf_check(m, p))
        self.assertFalse(self.module.scrypt_mcf_check(m, b'X'+p))
        self.assertRaises(ValueError, self.module.scrypt_mcf_check,
            b'$7$$', p
        )
        self.assertRaises(ValueError, self.module.scrypt_mcf_check,
            b'$7$$$', p
        )

    def test_mcf_7_2(self):
        if self.fast:
            self.skipTest('slow testcase')
        p = b'pleaseletmein'
        m1 = self.module.scrypt_mcf(p, None, 2**10, 8, 2, b'$7$')
        self.assertTrue(m1.startswith(b'$7$'))
        self.assertTrue(self.module.scrypt_mcf_check(m1, p))
        m2 = self.module.scrypt_mcf(p, None, 2**10, 8, 2, b'$s1$')
        self.assertTrue(m2.startswith(b'$s1$'))
        self.assertTrue(self.module.scrypt_mcf_check(m1, p))

    def test_mcf_7_fast(self):
        p, m1 = b'pleaseletmein', (
            b'$7$06..../....SodiumChloride'
            b'$ENlyo6fGw4PCcDBOFepfSZjFUnVatHzCcW55.ZGz3B0'
        )
        self.assertTrue(self.module.scrypt_mcf_check(m1, p))
        m2 = self.module.scrypt_mcf(p, b'NaCl', 4, 8, 1, b'$7$')
        self.assertTrue(self.module.scrypt_mcf_check(m2, p))

    def test_mcf_unknown(self):
        p = b'pleaseletmein'
        self.assertRaises(ValueError, self.module.scrypt_mcf, p, prefix=b'$$')

    def test_mcf_null(self):
        p1, p2, p3 = b'please', b'please\0letmein', b'pleaseletmein'
        self.assertRaises(ValueError, self.module.scrypt_mcf, p2, N=4)
        m = (
            b'$s1$020801$m8/OZVv4hi8rHFVTvOH3tQ==$jwi4vgiCjyqrZKOaksMFks5A'
            b'M9ZRcrVPhAwqT1iRMTqXYrwkTngwjR2rwbAet9cSGdFfSverOEVLiLuUzG4k'
            b'Hg=='
        )
        self.assertTrue(self.module.scrypt_mcf_check(m, p2))
        self.assertFalse(self.module.scrypt_mcf_check(m, p1))
        self.assertFalse(self.module.scrypt_mcf_check(m, p3))

    def test_mcf_salt_dollar(self):
        p, s = b'pass', b'sa$lt'
        m1 = self.module.scrypt_mcf(p, salt=s, N=4, prefix=b'$s1$')
        m2 = self.module.scrypt_mcf(p, salt=s, N=4, prefix=b'$7$')
        self.assertTrue(self.module.scrypt_mcf_check(m1, p))
        self.assertTrue(self.module.scrypt_mcf_check(m2, p))

    def test_mcf_utf(self):
        p, u = b'pass', u'pass'
        u2 = u'\xe5\xe4\xf6'
        m1 = self.module.scrypt_mcf(p, N=4)
        m2 = self.module.scrypt_mcf(u2, N=4)
        self.assertTrue(self.module.scrypt_mcf_check(m1, u))
        self.assertTrue(self.module.scrypt_mcf_check(m2, u2))

    def test_old_libscrypt_support(self):
        try:
            self.replace_scrypt_mcf = self.module._libscrypt_mcf
        except AttributeError:
            self.skipTest('not testing pylibscrypt')
        def scrypt_mcf(*a):
            r = self.replace_scrypt_mcf(*a)
            a[5][-2] = b'\0'
            self.assertTrue(len(a[5].raw.strip(b'\0')) == 123)
            return r
        self.module._libscrypt_mcf = scrypt_mcf
        pw, N = b'pass', 2
        m1 = self.module.scrypt_mcf(pw, N=N)
        m2 = self.module.scrypt_mcf(pw, N=N)
        self.assertNotEqual(m1, m2)
        self.assertTrue(self.module.scrypt_mcf_check(m1, pw))
        self.assertTrue(self.module.scrypt_mcf_check(m2, pw))


def load_scrypt_suite(name, module, fast=True):
    tests = type(name, (ScryptTests,), {'module': module, 'fast': fast})
    return unittest.defaultTestLoader.loadTestsFromTestCase(tests)


def run_scrypt_suite(module, fast=False):
    suite = unittest.TestSuite()
    suite.addTest(load_scrypt_suite('scryptTests', module, fast))
    unittest.TextTestRunner().run(suite)


if __name__ == "__main__":
    suite = unittest.TestSuite()
    try:
        from . import hashlibscrypt
        suite.addTest(load_scrypt_suite('hashlibscryptTests', hashlibscrypt, True))
    except ImportError:
        suite.addTest(load_scrypt_suite('hashlibscryptTests', None, True))

    try:
        from . import pylibscrypt
        suite.addTest(load_scrypt_suite('pylibscryptTests', pylibscrypt, True))
    except ImportError:
        suite.addTest(load_scrypt_suite('pylibscryptTests', None, True))

    try:
        from . import pyscrypt
        suite.addTest(load_scrypt_suite('pyscryptTests', pyscrypt, True))
    except ImportError:
        suite.addTest(load_scrypt_suite('pyscryptTests', None, True))

    try:
        from . import pylibsodium
        suite.addTest(load_scrypt_suite('pylibsodiumTests',
                                        pylibsodium, True))
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
        suite.addTest(load_scrypt_suite('pylibsodiumTests', None, True))

    try:
        from . import pypyscrypt_inline as pypyscrypt
        suite.addTest(load_scrypt_suite('pypyscryptTests', pypyscrypt, True))
    except ImportError:
        suite.addTest(load_scrypt_suite('pypyscryptTests', None, True))

    result = unittest.TextTestRunner().run(suite)
    sys.exit(not result.wasSuccessful())

