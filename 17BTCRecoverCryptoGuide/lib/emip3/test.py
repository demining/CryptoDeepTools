# EMIP-003 Python Implementation Test
# 2021 - Stephen Rothery

import emip3

correct_password = b'btcr-test-password'
incorrect_password = b'btcr-test-passwod'
test_master_password_shelley = b'A997F83D70BF83B32F8AC936AC32067653EE899979CCFDA67DFCBD535948C42A77DC' \
                              b'9E719BF4ECE7DEB18BA3CD86F53C5EC75DE2126346A791250EC09E570E8241EE4F84' \
                              b'0902CDFCBABC605ABFF30250BFF4903D0090AD1C645CEE4CDA53EA30BF419F4ECEA7' \
                              b'909306EAE4B671FA7EEE3C2F65BE1235DEA4433F20B97F7BB8933521C657C61BBE6C' \
                              b'031A7F1FEEF48C6978090ED009DD578A5382770A'

test_master_password_byron = b'2398F30D513B35A4433143D7679705E82F9698DCBA01450C95B6D4B2CF073C10C769E' \
                             b'F2804EFF2CCB560C3A4F5537BCAE6D3C1B258DB0A8C288F2DFA06484C13BCF2EFBEE6' \
                             b'B25A9624FC6C1AFADDB297AB2B379D567A48F590391B407AF9C912B21D2A63F17C4C5' \
                             b'934394EB387194DD392EE98BAEB37D2B1C3D46162DA5DC5C765D6A661457FFC15792F' \
                             b'A720B7142F2C374C3704EDBBBFFF8AF5A112'

# Test data from emip3js, should produce the same results at every step (for easy validation)
test_saltHex = b'50515253c0c1c2c3c4c5c6c750515253c0c1c2c3c4c5c6c750515253c0c1c2c3'
test_nonceHex = b'50515253c0c1c2c3c4c5c6c7'
test_data = b'some data to encrypt'
test_expected_ciphertext = b'50515253c0c1c2c3c4c5c6c750515253c0c1c2c3c4c5c6c750515253c0c1c2c35051525' \
                           b'3c0c1c2c3c4c5c6c7c266630887d216bf88cc4990f73bad7f35bc7c0225b38fe24a7c28b5f9bda6283e3c5768'
test_password = b'password'

if __name__ == "__main__":
    print("Encryption Test")
    test_ciphertext = emip3.encryptWithPassword(test_password, test_saltHex, test_nonceHex, test_data)
    if test_expected_ciphertext == test_ciphertext:
        print("Passed")
        print()
    else:
        print("Failed")
        exit()

    print("Decryption Test")
    test_decrypted_data = emip3.decryptWithPassword(test_password,test_ciphertext)
    if test_decrypted_data == test_data:
        print("Passed")
        print()
    else:
        print("Failed")
        exit()

    print("Test Shelley Wallet - Correct Password")
    try:
        emip3.decryptWithPassword(correct_password, test_master_password_shelley)
        print("Passed")
        print()
    except:
        print("Failed")
        exit()

    print("Test Shelley Wallet - Incorrect Password (Should throw exception)")
    try:
        emip3.decryptWithPassword(incorrect_password, test_master_password_shelley)
        print("Failed")
        exit()
    except:
        print("Passed")
        print()

    print("Test Byron Wallet - Correct Password")
    try:
        emip3.decryptWithPassword(correct_password, test_master_password_byron)
        print("Passed")
        print()
    except:
        print("Failed")
        exit()

    print("Test Byron Wallet - Incorrect Password (Should throw exception)")
    try:
        emip3.decryptWithPassword(incorrect_password, test_master_password_byron)
        print("Failed")
        exit()
    except:
        print("Passed")
        print()
