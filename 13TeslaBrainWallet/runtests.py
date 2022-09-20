#!/usr/bin/python

import unittest
from lib.brainwallet import private_key, public_key
from lib.secp256k1 import secp256k1

class AddressTest(unittest.TestCase):

    phrase = "passphrase"
    private_key = "1e089e3c5323ad80a90767bdd5907297b4138163f027097fd3bdbeab528d2d68"
    public_key = "13YXiHAXcR7Ho53aExeHMwWEgHcBaAD7Zk"

    def test_phrase(self):
        self.assertTrue(self.phrase)

    def test_private_key(self):
        self.assertEqual(self.private_key, private_key(self.phrase))

    def test_public_key(self):
        self.assertEqual(self.public_key, public_key(self.phrase))

if __name__ == '__main__':
    unittest.main()

