from binascii import hexlify
from io import BytesIO

import hmac
import hashlib

from sign import (
    decode_base58,
    encode_base58_checksum,
    hash160,
    p2pkh_script
)


class FieldElement:

    def __init__(self, num, prime):
        self.num = num
        self.prime = prime
        if self.num >= self.prime or self.num < 0:
            error = 'Num {} not in field range 0 to {}'.format(
                self.num, self.prime-1)
            raise RuntimeError(error)

    def __eq__(self, other):
        if other is None:
            return False
        return self.num == other.num and self.prime == other.prime

    def __ne__(self, other):
        if other is None:
            return True
        return self.num != other.num or self.prime != other.prime

    def __repr__(self):
        return 'FieldElement_{}({})'.format(self.prime, self.num)

    def __add__(self, other):
        if self.prime != other.prime:
            raise RuntimeError('Primes must be the same')
        # self.num and other.num are the actual values
        num = (self.num + other.num) % self.prime
        # self.prime is what you'll need to mod against
        prime = self.prime
        # You need to return an element of the same class
        # use: self.__class__(num, prime)
        return self.__class__(num, prime)

    def __sub__(self, other):
        if self.prime != other.prime:
            raise RuntimeError('Primes must be the same')
        # self.num and other.num are the actual values
        num = (self.num - other.num) % self.prime
        # self.prime is what you'll need to mod against
        prime = self.prime
        # You need to return an element of the same class
        # use: self.__class__(num, prime)
        return self.__class__(num, prime)

    def __mul__(self, other):
        if self.prime != other.prime:
            raise RuntimeError('Primes must be the same')
        # self.num and other.num are the actual values
        num = (self.num * other.num) % self.prime
        # self.prime is what you'll need to mod against
        prime = self.prime
        # You need to return an element of the same class
        # use: self.__class__(num, prime)
        return self.__class__(num, prime)

    def __rmul__(self, coefficient):
        num = (self.num * coefficient) % self.prime
        return self.__class__(num=num, prime=self.prime)

    def __pow__(self, n):
        # remember fermat's little theorem:
        # self.num**(p-1) % p == 1
        # you might want to use % operator on n
        prime = self.prime
        num = pow(self.num, n % (prime-1), prime)
        return self.__class__(num, prime)

    def __truediv__(self, other):
        if self.prime != other.prime:
            raise RuntimeError('Primes must be the same')
        # self.num and other.num are the actual values
        other_inv = pow(other.num, self.prime - 2, self.prime)
        num = (self.num * other_inv) % self.prime
        # self.prime is what you'll need to mod against
        prime = self.prime
        # use fermat's little theorem:
        # self.num**(p-1) % p == 1
        # this means:
        # 1/n == pow(n, p-2, p)
        # You need to return an element of the same class
        # use: self.__class__(num, prime)
        return self.__class__(num, prime)


class Point:

    def __init__(self, x, y, a, b):
        self.a = a
        self.b = b
        self.x = x
        self.y = y
        # x being None and y being None represents the point at infinity
        # Check for that here since the equation below won't make sense
        # with None values for both.
        if self.x is None and self.y is None:
            return
        # make sure that the elliptic curve equation is satisfied
        # y**2 == x**3 + a*x + b
        if self.y**2 != self.x**3 + a*x + b:
            # if not, throw a RuntimeError
            raise RuntimeError('({}, {}) is not on the curve'.format(
                self.x, self.y))

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y \
            and self.a == other.a and self.b == other.b

    def __ne__(self, other):
        return self.x != other.x or self.y != other.y \
            or self.a != other.a or self.b != other.b

    def __repr__(self):
        if self.x is None:
            return 'Point(infinity)'
        else:
            return 'Point({},{})'.format(self.x, self.y)

    def __add__(self, other):
        if self.a != other.a or self.b != other.b:
            raise RuntimeError(
                'Points {}, {} are not on the same curve'.format(self, other))
        # Case 0.0: self is the point at infinity, return other
        if self.x is None:
            return other
        # Case 0.1: other is the point at infinity, return self
        if other.x is None:
            return self
        # Case 1: self.x == other.x, self.y != other.y
        # Result is point at infinity
        if self.x == other.x and self.y != other.y:
            # Remember to return an instance of this class:
            # self.__class__(x, y, a, b)
            return self.__class__(None, None, self.a, self.b)
        # Case 2: self.x != other.x
        if self.x != other.x:
            # Formula (x3,y3)==(x1,y1)+(x2,y2)
            # s=(y2-y1)/(x2-x1)
            s = (other.y - self.y) / (other.x - self.x)
            # x3=s**2-x1-x2
            x = s**2 - self.x - other.x
            # y3=s*(x1-x3)-y1
            y = s*(self.x-x) - self.y
            # Remember to return an instance of this class:
            # self.__class__(x, y, a, b)
            return self.__class__(x, y, self.a, self.b)
        # Case 3: self.x == other.x, self.y == other.y
        else:
            # Formula (x3,y3)=(x1,y1)+(x1,y1)
            # s=(3*x1**2+a)/(2*y1)
            s = (3*self.x**2 + self.a) / (2*self.y)
            # x3=s**2-2*x1
            x = s**2 - 2*self.x
            # y3=s*(x1-x3)-y1
            y = s*(self.x-x) - self.y
            # Remember to return an instance of this class:
            # self.__class__(x, y, a, b)
            return self.__class__(x, y, self.a, self.b)

    def __rmul__(self, coefficient):
        # rmul calculates coefficient * self
        # implement the naive way:
        # start product from 0 (point at infinity)
        # use: self.__class__(None, None, a, b)
        product = self.__class__(None, None, self.a, self.b)
        # loop coefficient times
        # use: for _ in range(coefficient):
        for _ in range(coefficient):
            # keep adding self over and over
            product += self
        # return the product
        return product
        # Extra Credit:
        # a more advanced technique uses point doubling
        # find the binary representation of coefficient
        # keep doubling the point and if the bit is there for coefficient
        # add the current.
        # remember to return an instance of the class


A = 0
B = 7
P = 2**256 - 2**32 - 977
N = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141


class S256Field(FieldElement):

    def __init__(self, num, prime=None):
        super().__init__(num=num, prime=P)

    def hex(self):
        return '{:x}'.format(self.num).zfill(64)

    def __repr__(self):
        return self.hex()

    def sqrt(self):
        return self**((P+1)//4)


class S256Point(Point):
    bits = 256

    def __init__(self, x, y, a=None, b=None):
        a, b = S256Field(A), S256Field(B)
        if x is None:
            super().__init__(x=None, y=None, a=a, b=b)
        elif type(x) == int:
            super().__init__(x=S256Field(x), y=S256Field(y), a=a, b=b)
        else:
            super().__init__(x=x, y=y, a=a, b=b)

    def __repr__(self):
        if self.x is None:
            return 'Point(infinity)'
        else:
            return 'Point({},{})'.format(self.x, self.y)

    def __rmul__(self, coefficient):
        # current will undergo binary expansion
        current = self
        # result is what we return, starts at 0
        result = S256Point(None, None)
        # we double 256 times and add where there is a 1 in the binary
        # representation of coefficient
        for i in range(self.bits):
            if coefficient & 1:
                result += current
            current += current
            # we shift the coefficient to the right
            coefficient >>= 1
        return result

    def sec(self, compressed=True):
        # returns the binary version of the sec format, NOT hex
        # if compressed, starts with b'\x02' if self.y.num is even,
        # b'\x03' if self.y is odd then self.x.num
        # remember, you have to convert self.x.num/self.y.num to binary
        # (some_integer.to_bytes(32, 'big'))
        if compressed:
            if self.y.num % 2 == 0:
                return b'\x02' + self.x.num.to_bytes(32, 'big')
            else:
                return b'\x03' + self.x.num.to_bytes(32, 'big')
        else:
            # if non-compressed, starts with b'\x04' followod by self.x
            # and then self.y
            return b'\x04' + self.x.num.to_bytes(32, 'big') \
                + self.y.num.to_bytes(32, 'big')

    def h160(self, compressed=True):
        return hash160(self.sec(compressed))

    def p2pkh_script(self, compressed=True):
        h160 = self.h160(compressed)
        return p2pkh_script(h160)

    def address(self, compressed=True, prefix=b'\x00'):
        '''Returns the address string'''
        h160 = self.h160(compressed)
        return encode_base58_checksum(prefix + h160)

    def segwit_redeem_script(self):
        return b'\x16\x00\x14' + self.h160(True)

    def segwit_address(self, prefix=b'\x05'):
        address_bytes = hash160(self.segwit_redeem_script()[1:])
        return encode_base58_checksum(prefix + address_bytes)

    def verify(self, z, sig):
        # remember sig.r and sig.s are the main things we're checking
        # remember 1/s = pow(s, N-2, N)
        s_inv = pow(sig.s, N-2, N)
        # u = z / s
        u = z * s_inv % N
        # v = r / s
        v = sig.r * s_inv % N
        # u*G + v*P should have as the x coordinate, r
        total = u*G + v*self
        return total.x.num == sig.r

    @classmethod
    def parse(self, sec_bin):
        '''returns a Point object from a compressed sec binary (not hex)
        '''
        if sec_bin[0] == 4:
            x = int(hexlify(sec_bin[1:33]), 16)
            y = int(hexlify(sec_bin[33:65]), 16)
            return S256Point(x=x, y=y)
        is_even = sec_bin[0] == 2
        x = S256Field(int(hexlify(sec_bin[1:]), 16))
        # right side of the equation y^2 = x^3 + 7
        alpha = x**3 + S256Field(B)
        # solve for left side
        beta = alpha.sqrt()
        if beta.num % 2 == 0:
            even_beta = beta
            odd_beta = S256Field(P - beta.num)
        else:
            even_beta = S256Field(P - beta.num)
            odd_beta = beta
        if is_even:
            return S256Point(x, even_beta)
        else:
            return S256Point(x, odd_beta)


G = S256Point(
    0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798,
    0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8)


class Signature:

    def __init__(self, r, s):
        self.r = r
        self.s = s

    def __repr__(self):
        return 'Signature({:x},{:x})'.format(self.r, self.s)

    def der(self):
        rbin = self.r.to_bytes(32, byteorder='big')
        # remove all null bytes at the beginning
        rbin = rbin.lstrip(b'\x00')
        # if rbin has a high bit, add a 00
        if rbin[0] & 0x80:
            rbin = b'\x00' + rbin
        result = bytes([2, len(rbin)]) + rbin
        sbin = self.s.to_bytes(32, byteorder='big')
        # remove all null bytes at the beginning
        sbin = sbin.lstrip(b'\x00')
        # if sbin has a high bit, add a 00
        if sbin[0] & 0x80:
            sbin = b'\x00' + sbin
        result += bytes([2, len(sbin)]) + sbin
        return bytes([0x30, len(result)]) + result

    @classmethod
    def parse(cls, signature_bin):
        s = BytesIO(signature_bin)
        compound = s.read(1)[0]
        if compound != 0x30:
            raise RuntimeError("Bad Signature")
        length = s.read(1)[0]
        if length + 2 != len(signature_bin):
            raise RuntimeError("Bad Signature Length")
        marker = s.read(1)[0]
        if marker != 0x02:
            raise RuntimeError("Bad Signature")
        rlength = s.read(1)[0]
        r = int(hexlify(s.read(rlength)), 16)
        marker = s.read(1)[0]
        if marker != 0x02:
            raise RuntimeError("Bad Signature")
        slength = s.read(1)[0]
        s = int(hexlify(s.read(slength)), 16)
        if len(signature_bin) != 6 + rlength + slength:
            raise RuntimeError("Signature too long")
        return cls(r, s)


class PrivateKey:

    def __init__(self, secret, compressed=False, testnet=False):
        self.secret = secret
        self.point = secret*G
        self.compressed = compressed
        self.testnet = testnet

    def hex(self):
        return '{:x}'.format(self.secret).zfill(64)

    def deterministic_k(self, z):
        # RFC6979, optimized for secp256k1
        k = b'\x00' * 32
        v = b'\x01' * 32
        if z > N:
            z -= N
        z_bytes = z.to_bytes(32, 'big')
        secret_bytes = self.secret.to_bytes(32, 'big')
        s256 = hashlib.sha256
        k = hmac.new(k, v + b'\x00' + secret_bytes + z_bytes, s256).digest()
        v = hmac.new(k, v, s256).digest()
        k = hmac.new(k, v + b'\x01' + secret_bytes + z_bytes, s256).digest()
        v = hmac.new(k, v, s256).digest()
        while 1:
            v = hmac.new(k, v, s256).digest()
            candidate = int.from_bytes(v, 'big')
            if candidate >= 1 and candidate < N:
                return candidate
            k = hmac.new(k, v + b'\x00', s256).digest()
            v = hmac.new(k, v, s256).digest()

    def sign(self, z):
        # use deterministic signatures
        k = self.deterministic_k(z)
        # r is the x coordinate of the resulting point k*G
        r = (k*G).x.num
        # remember 1/k = pow(k, N-2, N)
        k_inv = pow(k, N-2, N)
        # s = (z+r*secret) / k
        s = (z + r*self.secret) * k_inv % N
        if s > N/2:
            s = N - s
        # return an instance of Signature:
        # Signature(r, s)
        return Signature(r, s)

    def wif(self, prefix=None):
        if prefix is None:
            if self.testnet:
                prefix = b'\xef'
            else:
                prefix = b'\x80'
        # convert the secret from integer to a 32-bytes in big endian using
        # num.to_bytes(32, 'big')
        secret_bytes = self.secret.to_bytes(32, 'big')
        # append b'\x01' if compressed
        if self.compressed:
            suffix = b'\x01'
        else:
            suffix = b''
        # encode_base58_checksum the whole thing
        return encode_base58_checksum(prefix + secret_bytes + suffix)

    def address(self, prefix=None):
        if prefix is None:
            if self.testnet:
                prefix = b'\x6f'
            else:
                prefix = b'\x00'
        return self.point.address(compressed=self.compressed, prefix=prefix)

    def segwit_redeem_script(self):
        return self.point.segwit_redeem_script()

    def segwit_address(self, prefix=None):
        if prefix is None:
            if self.testnet:
                prefix = b'\xc4'
            else:
                prefix = b'\x05'
        return self.point.segwit_address(prefix=prefix)

    @classmethod
    def parse(cls, wif):
        secret_bytes = decode_base58(
            wif,
            num_bytes=40,
            strip_leading_zeros=True,
        )
        # remove the first and last if we have 34, only the first if we have 33
        testnet = secret_bytes[0] == 0xef
        if len(secret_bytes) == 34:
            secret_bytes = secret_bytes[1:-1]
            compressed = True
        elif len(secret_bytes) == 33:
            secret_bytes = secret_bytes[1:]
            compressed = False
        else:
            raise RuntimeError('not valid WIF')
        secret = int.from_bytes(secret_bytes, 'big')
        return cls(secret, compressed=compressed, testnet=testnet)
