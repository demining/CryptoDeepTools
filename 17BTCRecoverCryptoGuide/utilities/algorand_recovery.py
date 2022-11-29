# A really basic Algorand seed recovery script used in an assisted recovery. (May be incorporated to BTCRecover at some time)
# Usage: Clone the py-algorand-sdk and place this file in the folder. Edit the test_seed_cut to match your seed.
# Example below uses a seed with two words missing.

from algosdk import mnemonic

test_seed = ("dumb essay favorite judge punch hood anger under "
             "talk earn anxiety follow scheme sea future response "
             "asset drum size concert sand loan cupboard above bread")

test_seed_cut = ("dumb essay favorite judge punch hood anger under "
            "talk earn anxiety follow scheme sea future response "
            "asset drum size concert sand loan cupboard")


test_address = "LZW5ASZP2DQQGM77EFFUGXUF4DUQPUJEOC5HSQ2TOXKQZQM5H6M2OGK6QY"


if __name__ == "__main__":
    word_list = mnemonic.wordlist.word_list_raw().split("\n")
    word_list2 = mnemonic.wordlist.word_list_raw().split("\n")
    print("Partial Seed: " + test_seed_cut)
    print("Searching for: " + test_address)
    for word in word_list:
        for word2 in word_list2:
            try:
                if(mnemonic.to_public_key(test_seed_cut + " " + word + " " + word2) == test_address):
                    print("Found At:")
                    print(test_seed_cut + " " + word + " " + word2)
                    print()
                    exit()
            except:
                pass
