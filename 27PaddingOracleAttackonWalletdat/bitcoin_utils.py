# https://github.com/demining/CryptoDeepTools.git
# INSTALL:
# pip3 install bitcoin-utils

from bitcoinutils.setup import setup
from bitcoinutils.keys import PrivateKey, PublicKey


def main():
    # always remember to setup the network
    setup("mainnet")

    # create a private key (deterministically)
    # priv = PrivateKey(secret_exponent=1)

    priv = PrivateKey.from_wif('KyAqkBWTbeR3w4RdzgT58R5Rp7RSL6PfdFDEkJbwjCcSaRgqg3Vz')
    # compressed is the default
    print("\nPrivate key WIF:", priv.to_wif(compressed=True))

    # could also instantiate from existing WIF key
    # get the public key

    pub = priv.get_public_key()

    # compressed is the default
    print("Public key:", pub.to_hex(compressed=True))

    # get address from public key
    address = pub.get_address()

    # print the address and hash160 - default is compressed address
    print("Address:", address.to_string())
    print("Hash160:", address.to_hash160())

    print("\n--------------------------------------\n")

    # sign a message with the private key and verify it
    message = "CryptoDeepTech"
    signature = priv.sign_message(message)
    assert signature is not None
    print("The message to sign:", message)
    print("The signature is:", signature)

    if PublicKey.verify_message(address.to_string(), signature, message):
        print("The signature is valid!")
    else:
        print("The signature is NOT valid!")


if __name__ == "__main__":
    main()