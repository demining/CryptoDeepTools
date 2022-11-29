import hashlib

# Enable functions that may not work for some standard libraries in some environments
try:
    # this will work with micropython and python < 3.10
    # but will raise and exception if ripemd is not supported (openssl 3)
    hashlib.new('ripemd160')
    print("Good News! RIPEMD160 available and working in Hashlib, so can be used by BTCRecover")
except:
    # otherwise use pure python implementation
    print("Bad News! RIPEMD160 not available via Hashlib, Pure Python implementation will be used. This is much slower, see BTCRecover installation docs for more information.")