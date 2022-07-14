from Curves import *
from EllipticCurve import *
from Divisor import *
from Pairing import *
from Helper import *
import unittest


class TestECurves(unittest.TestCase):

    def test_generating_point(self):
        E = curves[0][0]
        P = E.genRandPoint()
        self.assertEqual((P.y * P.y) % E.mod, (P.x ** 3 + E.A * P.x + E.B) % E.mod)

    def test_addition(self):
        E = curves[0][0]
        P = EPoint(E, 846930889, 914895438423939880721154620442986359470249180327)
        Q = EPoint(E, 1681692781, 413392049233386513684462954206000931924331146767)
        PplusQ = EPoint(E, 793516751077922864463424192516420234268439968247, 369649928168204083999552433310618595221275787400)
        self.assertEqual(P + Q, PplusQ)

    def test_doubling(self):
        E = curves[0][0]
        P = EPoint(E, 846930889, 914895438423939880721154620442986359470249180327)
        P2 = EPoint(E, 656140758275595462266911470733314801368742930868, 520016598759908788970158118245083307454255169535)
        self.assertEqual(2 * P, P2)

    def test_mult(self):
        E = curves[0][0]
        P = EPoint(E, 846930889, 914895438423939880721154620442986359470249180327)
        P1000 = EPoint(E, 744844647859786955424391562333164932941599456494,
                       68976613961526457558914601512385766959755651551)
        self.assertEqual(1000 * P, P1000)

    def test_generating_divisor(self):
        E = curves[0][0]
        d = 1000
        D = genDivisor(E, d)
        self.assertEqual(d, len(D))

    def test_reverseBits(self):
        a = 0b100
        a_n_actual = 3 # количество бит в a
        b = 0b001
        rev_a, a_n = reverseBits(a)
        self.assertEqual(rev_a, b)
        self.assertEqual(a_n, a_n_actual)

    def test_Weil(self):
        E = secp192k1
        G = EPoint(E, 0xDB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D,
                   0x9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D)
        P = 2343432432243 * G
        Q = 4233434343432443243 * G
        r = 0xFFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D
        a = 2
        b = 1
        #print("Weil: ", Weil(P, Q, r))
        self.assertEqual(Weil(a * P, b * Q, r), moduloPow(Weil(P, Q, r), a * b, P.E.mod))

    def test_Weil1(self):
        E = secp192k1
        G = EPoint(E, 0xDB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D,
                   0x9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D)
        j = 4233434343432443243 * 2343432432243
        P = 2343432432243 * G
        Q = 4233434343432443243 * G
        r = 0xFFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D
        a = 2
        b = 1
        print(j==r)
        print("Weil1: ", Weil(P, Q, r))
        self.assertEqual(Weil(a * P, b * Q, r), moduloPow(Weil(P, Q, r), a * b, P.E.mod))

    def test_Weil2(self):
        E = ECurve(30, 34, 631)
        P = EPoint(E, 36, 60)
        Q = EPoint(E, 121, 387)
        r = 5
        #S = EPoint(E, 0, 36)
        first = Weil(P, Q, r)
        second = Weil(P + P, Q, r)
        self.assertEqual((first * first) % E.mod, second)




if __name__ == '__main__':
    unittest.main()
