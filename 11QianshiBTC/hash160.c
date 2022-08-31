/*
 * hash160.c
 * (C) 2015 basil, all rights reserved,
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// NOTE: Some of this code is derived from code with a different license, as
//       noted below.

// Copyright (c) 2014 The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include "hash160.h"

#define Ch(x,y,z) ((z) ^ ((x) & ((y) ^ (z))))
#define Maj(x,y,z) (((x) & (y)) | ((z) & ((x) | (y))))
#define Sigma0(x) (((x) >> 2 | (x) << 30) ^ ((x) >> 13 | (x) << 19) ^ ((x) >> 22 | (x) << 10))
#define Sigma1(x) (((x) >> 6 | (x) << 26) ^ ((x) >> 11 | (x) << 21) ^ ((x) >> 25 | (x) << 7))
#define sigma0(x) (((x) >> 7 | (x) << 25) ^ ((x) >> 18 | (x) << 14) ^ ((x) >> 3))
#define sigma1(x) (((x) >> 17 | (x) << 15) ^ ((x) >> 19 | (x) << 13) ^ ((x) >> 10))

#define RoundSHA256(a,b,c,d,e,f,g,h,k,w) do { \
    uint32_t t1 = (h) + Sigma1(e) + Ch((e), (f), (g)) + (k) + (w); \
    uint32_t t2 = Sigma0(a) + Maj((a), (b), (c)); \
    (d) += t1; \
    (h) = t1 + t2; \
} while(0)

#define BSWAP32(x)      __builtin_bswap32((x))

// Internal implementation code.
/// Internal RIPEMD-160 implementation.
static uint32_t inline f1(uint32_t x, uint32_t y, uint32_t z) { return x ^ y ^ z; }
static uint32_t inline f2(uint32_t x, uint32_t y, uint32_t z) { return (x & y) | (~x & z); }
static uint32_t inline f3(uint32_t x, uint32_t y, uint32_t z) { return (x | ~y) ^ z; }
static uint32_t inline f4(uint32_t x, uint32_t y, uint32_t z) { return (x & z) | (y & ~z); }
static uint32_t inline f5(uint32_t x, uint32_t y, uint32_t z) { return x ^ (y | ~z); }
static uint32_t inline rol(uint32_t x, int i) { return (x << i) | (x >> (32 - i)); }
static void inline RoundRIPEMD160(uint32_t *a, uint32_t b, uint32_t *c, uint32_t d, uint32_t e, uint32_t f, uint32_t x, uint32_t k, int r)
{
    *a = rol(*a + f + x + k, r) + e;
    *c = rol(*c, 10);
}

static void inline R11(uint32_t* a, uint32_t b, uint32_t* c, uint32_t d, uint32_t e, uint32_t x, int r) { RoundRIPEMD160(a, b, c, d, e, f1(b, *c, d), x, 0, r); }
static void inline R21(uint32_t* a, uint32_t b, uint32_t* c, uint32_t d, uint32_t e, uint32_t x, int r) { RoundRIPEMD160(a, b, c, d, e, f2(b, *c, d), x, 0x5A827999ul, r); }
static void inline R31(uint32_t* a, uint32_t b, uint32_t* c, uint32_t d, uint32_t e, uint32_t x, int r) { RoundRIPEMD160(a, b, c, d, e, f3(b, *c, d), x, 0x6ED9EBA1ul, r); }
static void inline R41(uint32_t* a, uint32_t b, uint32_t* c, uint32_t d, uint32_t e, uint32_t x, int r) { RoundRIPEMD160(a, b, c, d, e, f4(b, *c, d), x, 0x8F1BBCDCul, r); }
static void inline R51(uint32_t* a, uint32_t b, uint32_t* c, uint32_t d, uint32_t e, uint32_t x, int r) { RoundRIPEMD160(a, b, c, d, e, f5(b, *c, d), x, 0xA953FD4Eul, r); }
static void inline R12(uint32_t* a, uint32_t b, uint32_t* c, uint32_t d, uint32_t e, uint32_t x, int r) { RoundRIPEMD160(a, b, c, d, e, f5(b, *c, d), x, 0x50A28BE6ul, r); }
static void inline R22(uint32_t* a, uint32_t b, uint32_t* c, uint32_t d, uint32_t e, uint32_t x, int r) { RoundRIPEMD160(a, b, c, d, e, f4(b, *c, d), x, 0x5C4DD124ul, r); }
static void inline R32(uint32_t* a, uint32_t b, uint32_t* c, uint32_t d, uint32_t e, uint32_t x, int r) { RoundRIPEMD160(a, b, c, d, e, f3(b, *c, d), x, 0x6D703EF3ul, r); }
static void inline R42(uint32_t* a, uint32_t b, uint32_t* c, uint32_t d, uint32_t e, uint32_t x, int r) { RoundRIPEMD160(a, b, c, d, e, f2(b, *c, d), x, 0x7A6D76E9ul, r); }
static void inline R52(uint32_t* a, uint32_t b, uint32_t* c, uint32_t d, uint32_t e, uint32_t x, int r) { RoundRIPEMD160(a, b, c, d, e, f1(b, *c, d), x, 0, r); }

/*
 * Specialized RIPEMD160(SHA256(PubKey)) routine.
 */
extern uint160_t hash160(const uint8_t *pub_key)
{
    uint160_t r;
    uint32_t a, b, c, d, e, f, g, h;

    // SHA256:
{
    const uint32_t *chunk = (uint32_t *)pub_key;
    a = 0x6A09E667ul, b = 0xBB67AE85ul, c = 0x3C6EF372ul,
    d = 0xA54FF53Aul, e = 0x510E527Ful, f = 0x9B05688Cul,
    g = 0x1F83D9ABul, h = 0x5BE0CD19ul;
    uint32_t w0 = BSWAP32(chunk[0]), w1 = BSWAP32(chunk[1]),
         w2 = BSWAP32(chunk[2]), w3 = BSWAP32(chunk[3]),
         w4 = BSWAP32(chunk[4]), w5 = BSWAP32(chunk[5]),
         w6 = BSWAP32(chunk[6]), w7 = BSWAP32(chunk[7]),
         w8 = (uint32_t)pub_key[32] << 24 | 0x00800000,
         w9 = 0, w10 = 0, w11 = 0, w12 = 0, w13 = 0, w14 = 0,
         w15 = 264;

    RoundSHA256(a, b, c, d, e, f, g, h, 0x428a2f98, w0);
    RoundSHA256(h, a, b, c, d, e, f, g, 0x71374491, w1);
    RoundSHA256(g, h, a, b, c, d, e, f, 0xb5c0fbcf, w2);
    RoundSHA256(f, g, h, a, b, c, d, e, 0xe9b5dba5, w3);
    RoundSHA256(e, f, g, h, a, b, c, d, 0x3956c25b, w4);
    RoundSHA256(d, e, f, g, h, a, b, c, 0x59f111f1, w5);
    RoundSHA256(c, d, e, f, g, h, a, b, 0x923f82a4, w6);
    RoundSHA256(b, c, d, e, f, g, h, a, 0xab1c5ed5, w7);
    RoundSHA256(a, b, c, d, e, f, g, h, 0xd807aa98, w8);
    RoundSHA256(h, a, b, c, d, e, f, g, 0x12835b01, w9);
    RoundSHA256(g, h, a, b, c, d, e, f, 0x243185be, w10);
    RoundSHA256(f, g, h, a, b, c, d, e, 0x550c7dc3, w11);
    RoundSHA256(e, f, g, h, a, b, c, d, 0x72be5d74, w12);
    RoundSHA256(d, e, f, g, h, a, b, c, 0x80deb1fe, w13);
    RoundSHA256(c, d, e, f, g, h, a, b, 0x9bdc06a7, w14);
    RoundSHA256(b, c, d, e, f, g, h, a, 0xc19bf174, w15);

    w0 = w0 + sigma1(w14) + w9 + sigma0(w1);
    RoundSHA256(a, b, c, d, e, f, g, h, 0xe49b69c1, w0);
    w1 = w1 + sigma1(w15) + w10 + sigma0(w2);
    RoundSHA256(h, a, b, c, d, e, f, g, 0xefbe4786, w1);
    w2 = w2 + sigma1(w0) + w11 + sigma0(w3);
    RoundSHA256(g, h, a, b, c, d, e, f, 0x0fc19dc6, w2);
    w3 = w3 + sigma1(w1) + w12 + sigma0(w4);
    RoundSHA256(f, g, h, a, b, c, d, e, 0x240ca1cc, w3);
    w4 = w4 + sigma1(w2) + w13 + sigma0(w5);
    RoundSHA256(e, f, g, h, a, b, c, d, 0x2de92c6f, w4);
    w5 = w5 + sigma1(w3) + w14 + sigma0(w6);
    RoundSHA256(d, e, f, g, h, a, b, c, 0x4a7484aa, w5);
    w6 = w6 + sigma1(w4) + w15 + sigma0(w7);
    RoundSHA256(c, d, e, f, g, h, a, b, 0x5cb0a9dc, w6);
    w7 = w7 + sigma1(w5) + w0 + sigma0(w8);
    RoundSHA256(b, c, d, e, f, g, h, a, 0x76f988da, w7);
    w8 = w8 + sigma1(w6) + w1 + sigma0(w9);
    RoundSHA256(a, b, c, d, e, f, g, h, 0x983e5152, w8);
    w9 = w9 + sigma1(w7) + w2 + sigma0(w10);
    RoundSHA256(h, a, b, c, d, e, f, g, 0xa831c66d, w9);
    w10 = w10 + sigma1(w8) + w3 + sigma0(w11);
    RoundSHA256(g, h, a, b, c, d, e, f, 0xb00327c8, w10);
    w11 = w11 + sigma1(w9) + w4 + sigma0(w12);
    RoundSHA256(f, g, h, a, b, c, d, e, 0xbf597fc7, w11);
    w12 = w12 + sigma1(w10) + w5 + sigma0(w13);
    RoundSHA256(e, f, g, h, a, b, c, d, 0xc6e00bf3, w12);
    w13 = w13 + sigma1(w11) + w6 + sigma0(w14);
    RoundSHA256(d, e, f, g, h, a, b, c, 0xd5a79147, w13);
    w14 = w14 + sigma1(w12) + w7 + sigma0(w15);
    RoundSHA256(c, d, e, f, g, h, a, b, 0x06ca6351, w14);
    w15 = w15 + sigma1(w13) + w8 + sigma0(w0);
    RoundSHA256(b, c, d, e, f, g, h, a, 0x14292967, w15);

    w0 = w0 + sigma1(w14) + w9 + sigma0(w1);
    RoundSHA256(a, b, c, d, e, f, g, h, 0x27b70a85, w0);
    w1 = w1 + sigma1(w15) + w10 + sigma0(w2);
    RoundSHA256(h, a, b, c, d, e, f, g, 0x2e1b2138, w1);
    w2 = w2 + sigma1(w0) + w11 + sigma0(w3);
    RoundSHA256(g, h, a, b, c, d, e, f, 0x4d2c6dfc, w2);
    w3 = w3 + sigma1(w1) + w12 + sigma0(w4);
    RoundSHA256(f, g, h, a, b, c, d, e, 0x53380d13, w3);
    w4 = w4 + sigma1(w2) + w13 + sigma0(w5);
    RoundSHA256(e, f, g, h, a, b, c, d, 0x650a7354, w4);
    w5 = w5 + sigma1(w3) + w14 + sigma0(w6);
    RoundSHA256(d, e, f, g, h, a, b, c, 0x766a0abb, w5);
    w6 = w6 + sigma1(w4) + w15 + sigma0(w7);
    RoundSHA256(c, d, e, f, g, h, a, b, 0x81c2c92e, w6);
    w7 = w7 + sigma1(w5) + w0 + sigma0(w8);
    RoundSHA256(b, c, d, e, f, g, h, a, 0x92722c85, w7);
    w8 = w8 + sigma1(w6) + w1 + sigma0(w9);
    RoundSHA256(a, b, c, d, e, f, g, h, 0xa2bfe8a1, w8);
    w9 = w9 + sigma1(w7) + w2 + sigma0(w10);
    RoundSHA256(h, a, b, c, d, e, f, g, 0xa81a664b, w9);
    w10 = w10 + sigma1(w8) + w3 + sigma0(w11);
    RoundSHA256(g, h, a, b, c, d, e, f, 0xc24b8b70, w10);
    w11 = w11 + sigma1(w9) + w4 + sigma0(w12);
    RoundSHA256(f, g, h, a, b, c, d, e, 0xc76c51a3, w11);
    w12 = w12 + sigma1(w10) + w5 + sigma0(w13);
    RoundSHA256(e, f, g, h, a, b, c, d, 0xd192e819, w12);
    w13 = w13 + sigma1(w11) + w6 + sigma0(w14);
    RoundSHA256(d, e, f, g, h, a, b, c, 0xd6990624, w13);
    w14 = w14 + sigma1(w12) + w7 + sigma0(w15);
    RoundSHA256(c, d, e, f, g, h, a, b, 0xf40e3585, w14);
    w15 = w15 + sigma1(w13) + w8 + sigma0(w0);
    RoundSHA256(b, c, d, e, f, g, h, a, 0x106aa070, w15);

    w0 = w0 + sigma1(w14) + w9 + sigma0(w1);
    RoundSHA256(a, b, c, d, e, f, g, h, 0x19a4c116, w0);
    w1 = w1 + sigma1(w15) + w10 + sigma0(w2);
    RoundSHA256(h, a, b, c, d, e, f, g, 0x1e376c08, w1);
    w2 = w2 + sigma1(w0) + w11 + sigma0(w3);
    RoundSHA256(g, h, a, b, c, d, e, f, 0x2748774c, w2);
    w3 = w3 + sigma1(w1) + w12 + sigma0(w4);
    RoundSHA256(f, g, h, a, b, c, d, e, 0x34b0bcb5, w3);
    w4 = w4 + sigma1(w2) + w13 + sigma0(w5);
    RoundSHA256(e, f, g, h, a, b, c, d, 0x391c0cb3, w4);
    w5 = w5 + sigma1(w3) + w14 + sigma0(w6);
    RoundSHA256(d, e, f, g, h, a, b, c, 0x4ed8aa4a, w5);
    w6 = w6 + sigma1(w4) + w15 + sigma0(w7);
    RoundSHA256(c, d, e, f, g, h, a, b, 0x5b9cca4f, w6);
    w7 = w7 + sigma1(w5) + w0 + sigma0(w8);
    RoundSHA256(b, c, d, e, f, g, h, a, 0x682e6ff3, w7);
    w8 = w8 + sigma1(w6) + w1 + sigma0(w9);
    RoundSHA256(a, b, c, d, e, f, g, h, 0x748f82ee, w8);
    w9 = w9 + sigma1(w7) + w2 + sigma0(w10);
    RoundSHA256(h, a, b, c, d, e, f, g, 0x78a5636f, w9);
    w10 = w10 + sigma1(w8) + w3 + sigma0(w11);
    RoundSHA256(g, h, a, b, c, d, e, f, 0x84c87814, w10);
    w11 = w11 + sigma1(w9) + w4 + sigma0(w12);
    RoundSHA256(f, g, h, a, b, c, d, e, 0x8cc70208, w11);
    w12 = w12 + sigma1(w10) + w5 + sigma0(w13);
    RoundSHA256(e, f, g, h, a, b, c, d, 0x90befffa, w12);
    w13 = w13 + sigma1(w11) + w6 + sigma0(w14);
    RoundSHA256(d, e, f, g, h, a, b, c, 0xa4506ceb, w13);
    w14 = w14 + sigma1(w12) + w7 + sigma0(w15);
    RoundSHA256(c, d, e, f, g, h, a, b, 0xbef9a3f7, w14);
    w15 = w15 + sigma1(w13) + w8 + sigma0(w0);
    RoundSHA256(b, c, d, e, f, g, h, a, 0xc67178f2, w15);

    a = BSWAP32(a + 0x6A09E667ul);
    b = BSWAP32(b + 0xBB67AE85ul);
    c = BSWAP32(c + 0x3C6EF372ul);
    d = BSWAP32(d + 0xA54FF53Aul);
    e = BSWAP32(e + 0x510E527Ful);
    f = BSWAP32(f + 0x9B05688Cul);
    g = BSWAP32(g + 0x1F83D9ABul);
    h = BSWAP32(h + 0x5BE0CD19ul);
}    

    // RIPEMD160:
{
    uint32_t a1 = 0x67452301ul, b1 = 0xEFCDAB89ul, c1 = 0x98BADCFEul,
             d1 = 0x10325476ul, e1 = 0xC3D2E1F0ul;
    uint32_t a2 = a1, b2 = b1, c2 = c1, d2 = d1, e2 = e1;
    uint32_t w0 = a, w1 = b, w2 = c, w3 = d;
    uint32_t w4 = e, w5 = f, w6 = g, w7 = h;
    uint32_t w8 = 0x80, w9 = 0, w10 = 0, w11 = 0;
    uint32_t w12 = 0, w13 = 0, w14 = 256, w15 = 0;

    R11(&a1, b1, &c1, d1, e1, w0, 11);
    R12(&a2, b2, &c2, d2, e2, w5, 8);
    R11(&e1, a1, &b1, c1, d1, w1, 14);
    R12(&e2, a2, &b2, c2, d2, w14, 9);
    R11(&d1, e1, &a1, b1, c1, w2, 15);
    R12(&d2, e2, &a2, b2, c2, w7, 9);
    R11(&c1, d1, &e1, a1, b1, w3, 12);
    R12(&c2, d2, &e2, a2, b2, w0, 11);
    R11(&b1, c1, &d1, e1, a1, w4, 5);
    R12(&b2, c2, &d2, e2, a2, w9, 13);
    R11(&a1, b1, &c1, d1, e1, w5, 8);
    R12(&a2, b2, &c2, d2, e2, w2, 15);
    R11(&e1, a1, &b1, c1, d1, w6, 7);
    R12(&e2, a2, &b2, c2, d2, w11, 15);
    R11(&d1, e1, &a1, b1, c1, w7, 9);
    R12(&d2, e2, &a2, b2, c2, w4, 5);
    R11(&c1, d1, &e1, a1, b1, w8, 11);
    R12(&c2, d2, &e2, a2, b2, w13, 7);
    R11(&b1, c1, &d1, e1, a1, w9, 13);
    R12(&b2, c2, &d2, e2, a2, w6, 7);
    R11(&a1, b1, &c1, d1, e1, w10, 14);
    R12(&a2, b2, &c2, d2, e2, w15, 8);
    R11(&e1, a1, &b1, c1, d1, w11, 15);
    R12(&e2, a2, &b2, c2, d2, w8, 11);
    R11(&d1, e1, &a1, b1, c1, w12, 6);
    R12(&d2, e2, &a2, b2, c2, w1, 14);
    R11(&c1, d1, &e1, a1, b1, w13, 7);
    R12(&c2, d2, &e2, a2, b2, w10, 14);
    R11(&b1, c1, &d1, e1, a1, w14, 9);
    R12(&b2, c2, &d2, e2, a2, w3, 12);
    R11(&a1, b1, &c1, d1, e1, w15, 8);
    R12(&a2, b2, &c2, d2, e2, w12, 6);

    R21(&e1, a1, &b1, c1, d1, w7, 7);
    R22(&e2, a2, &b2, c2, d2, w6, 9);
    R21(&d1, e1, &a1, b1, c1, w4, 6);
    R22(&d2, e2, &a2, b2, c2, w11, 13);
    R21(&c1, d1, &e1, a1, b1, w13, 8);
    R22(&c2, d2, &e2, a2, b2, w3, 15);
    R21(&b1, c1, &d1, e1, a1, w1, 13);
    R22(&b2, c2, &d2, e2, a2, w7, 7);
    R21(&a1, b1, &c1, d1, e1, w10, 11);
    R22(&a2, b2, &c2, d2, e2, w0, 12);
    R21(&e1, a1, &b1, c1, d1, w6, 9);
    R22(&e2, a2, &b2, c2, d2, w13, 8);
    R21(&d1, e1, &a1, b1, c1, w15, 7);
    R22(&d2, e2, &a2, b2, c2, w5, 9);
    R21(&c1, d1, &e1, a1, b1, w3, 15);
    R22(&c2, d2, &e2, a2, b2, w10, 11);
    R21(&b1, c1, &d1, e1, a1, w12, 7);
    R22(&b2, c2, &d2, e2, a2, w14, 7);
    R21(&a1, b1, &c1, d1, e1, w0, 12);
    R22(&a2, b2, &c2, d2, e2, w15, 7);
    R21(&e1, a1, &b1, c1, d1, w9, 15);
    R22(&e2, a2, &b2, c2, d2, w8, 12);
    R21(&d1, e1, &a1, b1, c1, w5, 9);
    R22(&d2, e2, &a2, b2, c2, w12, 7);
    R21(&c1, d1, &e1, a1, b1, w2, 11);
    R22(&c2, d2, &e2, a2, b2, w4, 6);
    R21(&b1, c1, &d1, e1, a1, w14, 7);
    R22(&b2, c2, &d2, e2, a2, w9, 15);
    R21(&a1, b1, &c1, d1, e1, w11, 13);
    R22(&a2, b2, &c2, d2, e2, w1, 13);
    R21(&e1, a1, &b1, c1, d1, w8, 12);
    R22(&e2, a2, &b2, c2, d2, w2, 11);

    R31(&d1, e1, &a1, b1, c1, w3, 11);
    R32(&d2, e2, &a2, b2, c2, w15, 9);
    R31(&c1, d1, &e1, a1, b1, w10, 13);
    R32(&c2, d2, &e2, a2, b2, w5, 7);
    R31(&b1, c1, &d1, e1, a1, w14, 6);
    R32(&b2, c2, &d2, e2, a2, w1, 15);
    R31(&a1, b1, &c1, d1, e1, w4, 7);
    R32(&a2, b2, &c2, d2, e2, w3, 11);
    R31(&e1, a1, &b1, c1, d1, w9, 14);
    R32(&e2, a2, &b2, c2, d2, w7, 8);
    R31(&d1, e1, &a1, b1, c1, w15, 9);
    R32(&d2, e2, &a2, b2, c2, w14, 6);
    R31(&c1, d1, &e1, a1, b1, w8, 13);
    R32(&c2, d2, &e2, a2, b2, w6, 6);
    R31(&b1, c1, &d1, e1, a1, w1, 15);
    R32(&b2, c2, &d2, e2, a2, w9, 14);
    R31(&a1, b1, &c1, d1, e1, w2, 14);
    R32(&a2, b2, &c2, d2, e2, w11, 12);
    R31(&e1, a1, &b1, c1, d1, w7, 8);
    R32(&e2, a2, &b2, c2, d2, w8, 13);
    R31(&d1, e1, &a1, b1, c1, w0, 13);
    R32(&d2, e2, &a2, b2, c2, w12, 5);
    R31(&c1, d1, &e1, a1, b1, w6, 6);
    R32(&c2, d2, &e2, a2, b2, w2, 14);
    R31(&b1, c1, &d1, e1, a1, w13, 5);
    R32(&b2, c2, &d2, e2, a2, w10, 13);
    R31(&a1, b1, &c1, d1, e1, w11, 12);
    R32(&a2, b2, &c2, d2, e2, w0, 13);
    R31(&e1, a1, &b1, c1, d1, w5, 7);
    R32(&e2, a2, &b2, c2, d2, w4, 7);
    R31(&d1, e1, &a1, b1, c1, w12, 5);
    R32(&d2, e2, &a2, b2, c2, w13, 5);

    R41(&c1, d1, &e1, a1, b1, w1, 11);
    R42(&c2, d2, &e2, a2, b2, w8, 15);
    R41(&b1, c1, &d1, e1, a1, w9, 12);
    R42(&b2, c2, &d2, e2, a2, w6, 5);
    R41(&a1, b1, &c1, d1, e1, w11, 14);
    R42(&a2, b2, &c2, d2, e2, w4, 8);
    R41(&e1, a1, &b1, c1, d1, w10, 15);
    R42(&e2, a2, &b2, c2, d2, w1, 11);
    R41(&d1, e1, &a1, b1, c1, w0, 14);
    R42(&d2, e2, &a2, b2, c2, w3, 14);
    R41(&c1, d1, &e1, a1, b1, w8, 15);
    R42(&c2, d2, &e2, a2, b2, w11, 14);
    R41(&b1, c1, &d1, e1, a1, w12, 9);
    R42(&b2, c2, &d2, e2, a2, w15, 6);
    R41(&a1, b1, &c1, d1, e1, w4, 8);
    R42(&a2, b2, &c2, d2, e2, w0, 14);
    R41(&e1, a1, &b1, c1, d1, w13, 9);
    R42(&e2, a2, &b2, c2, d2, w5, 6);
    R41(&d1, e1, &a1, b1, c1, w3, 14);
    R42(&d2, e2, &a2, b2, c2, w12, 9);
    R41(&c1, d1, &e1, a1, b1, w7, 5);
    R42(&c2, d2, &e2, a2, b2, w2, 12);
    R41(&b1, c1, &d1, e1, a1, w15, 6);
    R42(&b2, c2, &d2, e2, a2, w13, 9);
    R41(&a1, b1, &c1, d1, e1, w14, 8);
    R42(&a2, b2, &c2, d2, e2, w9, 12);
    R41(&e1, a1, &b1, c1, d1, w5, 6);
    R42(&e2, a2, &b2, c2, d2, w7, 5);
    R41(&d1, e1, &a1, b1, c1, w6, 5);
    R42(&d2, e2, &a2, b2, c2, w10, 15);
    R41(&c1, d1, &e1, a1, b1, w2, 12);
    R42(&c2, d2, &e2, a2, b2, w14, 8);

    R51(&b1, c1, &d1, e1, a1, w4, 9);
    R52(&b2, c2, &d2, e2, a2, w12, 8);
    R51(&a1, b1, &c1, d1, e1, w0, 15);
    R52(&a2, b2, &c2, d2, e2, w15, 5);
    R51(&e1, a1, &b1, c1, d1, w5, 5);
    R52(&e2, a2, &b2, c2, d2, w10, 12);
    R51(&d1, e1, &a1, b1, c1, w9, 11);
    R52(&d2, e2, &a2, b2, c2, w4, 9);
    R51(&c1, d1, &e1, a1, b1, w7, 6);
    R52(&c2, d2, &e2, a2, b2, w1, 12);
    R51(&b1, c1, &d1, e1, a1, w12, 8);
    R52(&b2, c2, &d2, e2, a2, w5, 5);
    R51(&a1, b1, &c1, d1, e1, w2, 13);
    R52(&a2, b2, &c2, d2, e2, w8, 14);
    R51(&e1, a1, &b1, c1, d1, w10, 12);
    R52(&e2, a2, &b2, c2, d2, w7, 6);
    R51(&d1, e1, &a1, b1, c1, w14, 5);
    R52(&d2, e2, &a2, b2, c2, w6, 8);
    R51(&c1, d1, &e1, a1, b1, w1, 12);
    R52(&c2, d2, &e2, a2, b2, w2, 13);
    R51(&b1, c1, &d1, e1, a1, w3, 13);
    R52(&b2, c2, &d2, e2, a2, w13, 6);
    R51(&a1, b1, &c1, d1, e1, w8, 14);
    R52(&a2, b2, &c2, d2, e2, w14, 5);
    R51(&e1, a1, &b1, c1, d1, w11, 11);
    R52(&e2, a2, &b2, c2, d2, w0, 15);
    R51(&d1, e1, &a1, b1, c1, w6, 8);
    R52(&d2, e2, &a2, b2, c2, w3, 13);
    R51(&c1, d1, &e1, a1, b1, w15, 5);
    R52(&c2, d2, &e2, a2, b2, w9, 11);
    R51(&b1, c1, &d1, e1, a1, w13, 6);
    R52(&b2, c2, &d2, e2, a2, w11, 11);

    r.i32[0] = c1 + d2 + 0xEFCDAB89ul;
    r.i32[1] = d1 + e2 + 0x98BADCFEul;
    r.i32[2] = e1 + a2 + 0x10325476ul;
    r.i32[3] = a1 + b2 + 0xC3D2E1F0ul;
    r.i32[4] = b1 + c2 + 0x67452301ul;
}

    return r;
}

