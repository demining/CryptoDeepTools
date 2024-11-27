import sys
import bitcoin
from Crypto.Hash import SHA256
import txnUtils
import keyUtils

# tx = ""
tx = "" + sys.argv[1]

# Parse the transaction
m = txnUtils.parseTxn(tx)
e = txnUtils.getSignableTxn(m)

# Calculate the double SHA-256 hash
hash1 = SHA256.new(e).digest()
hash2 = SHA256.new(hash1).digest()

# Convert to hex and reverse for signature processing
z1 = hash2[::-1].hex()
z = hash2.hex()

# Get the signature and public key
s = keyUtils.derSigToHexSig(m[1][:-2])
pub = m[2]
sigR = s[:64]
sigS = s[-64:]
sigZ = z

# Print results
print("R = 0x" + sigR)
print("S = 0x" + sigS)
print("Z = 0x" + sigZ)
print("")
print("PUBKEY = " + pub)
print("")
print("======================================================================")
print("")
