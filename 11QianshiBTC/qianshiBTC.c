/*
 * qianshiBTC.c
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

#include <assert.h>
#include <ctype.h>
#include <getopt.h>
#include <math.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>
#include <string.h>

#define USE_ASM_X86_64
#define USE_FIELD_5X52
#define USE_NUM_GMP
#define USE_FIELD_INV_NUM
#define USE_SCALAR_4X64
#define USE_SCALAR_INV_BUILTIN
#define HAVE___INT128

#include "secp256k1.c"
#include "hash160.c"

static secp256k1_context_t *cxt;

/****************************************************************************/
// LINUX CRUFT:

#ifdef LINUX

#include <pthread.h>
#include <stdlib.h>
#include <unistd.h>

typedef pthread_t thread;
typedef pthread_mutex_t mutex;

static inline void mutex_init(mutex *m)
{
    int res = pthread_mutex_init(m, NULL);
    assert(res == 0);
}

static inline void mutex_lock(mutex *m)
{
    int res = pthread_mutex_lock(m);
    assert(res == 0);
}

static inline void mutex_unlock(mutex *m)
{
    int res = pthread_mutex_unlock(m);
    assert(res == 0);
}

static thread spawn_thread(void *(f)(void *), void *arg)
{
    thread t;
    int res = pthread_create(&t, NULL, f, (void *)arg);
    if (res != 0)
        return (thread)NULL;
    return t;
}

static void join_thread(thread t)
{
    pthread_join(t, NULL);
}

static size_t num_threads(void)
{
    return (size_t)sysconf(_SC_NPROCESSORS_ONLN);
}

static bool init_rand(void *data, size_t size)
{
    FILE *stream = fopen("/dev/urandom", "r");
    if (stream == NULL)
        return false;
    bool ok = (fread(data, sizeof(uint8_t), size, stream) == size);
    fclose(stream);
    return ok;
}

static void set_bold(bool bold)
{
    if (!isatty(1))
        return;
    if (bold)
        printf("\33[1m");
    else
        printf("\33[0m");
}

static uint64_t get_time(void)
{
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return ts.tv_sec * 1000 + ts.tv_nsec / 1000000;
}

#define bswap16     __builtin_bswap16

#endif

/****************************************************************************/
// WINDOWS CRUFT:

#ifdef WINDOWS

#define _CRT_RAND_S
#include <stdlib.h>

#include <windows.h>

typedef HANDLE thread;
typedef HANDLE mutex;

static inline void mutex_init(mutex *m)
{
    *m = CreateMutex(NULL, FALSE, NULL);
    assert(*m != NULL);
}

static inline void mutex_lock(mutex *m)
{
    DWORD res = WaitForSingleObject(*m, INFINITE);
    assert(res == WAIT_OBJECT_0);
}

static inline void mutex_unlock(mutex *m)
{
    BOOL res = ReleaseMutex(*m);
    assert(res);
}

static thread spawn_thread(void *(f)(void *), void *arg)
{
    return CreateThread(NULL, 1, (LPTHREAD_START_ROUTINE)f,
        (LPVOID)arg, 0, NULL);
}

static void join_thread(thread t)
{
    WaitForSingleObject(t, INFINITE);
}

static size_t num_threads(void)
{
    SYSTEM_INFO sysinfo;
    GetSystemInfo(&sysinfo);
    return sysinfo.dwNumberOfProcessors;
}

static bool init_rand(void *data, size_t size)
{
    size_t size0 = size / sizeof(unsigned) + 1;
    assert(size0 * sizeof(unsigned) >= size);
    unsigned data0[size0];
    for (size_t i = 0; i < size0; i++)
    {
        int err = rand_s(data0 + i);
        if (err != 0)
            return false;
    }
    memcpy(data, data0, size);
    return true;
}

static void set_bold(bool bold)
{
    HANDLE console = GetStdHandle(STD_ERROR_HANDLE);
    if (bold)
        SetConsoleTextAttribute(console, FOREGROUND_RED | FOREGROUND_GREEN |
            FOREGROUND_BLUE | FOREGROUND_INTENSITY);
    else
        SetConsoleTextAttribute(console, FOREGROUND_RED | FOREGROUND_GREEN |
            FOREGROUND_BLUE);
}

static uint64_t get_time(void)
{
    return (uint64_t)GetTickCount64();
}

#define bswap16(x)      (((uint16_t)(x) << 8) | ((uint16_t)(x) >> 8))

#endif

/****************************************************************************/
// HASH FUNCTIONS:

union uint256_s
{
    uint8_t i8[32];
    uint16_t i16[16];
    uint32_t i32[8];
    uint64_t i64[4];
};
typedef union uint256_s uint256_t;

/*
 * SHA256
 */
static inline uint256_t sha256(const void *data, size_t len)
{
    secp256k1_sha256_t cxt;
    secp256k1_sha256_initialize(&cxt);
    secp256k1_sha256_write(&cxt, (uint8_t *)data, (int)len);
    uint256_t res;
    secp256k1_sha256_finalize(&cxt, (uint8_t *)&res);
    return res;
}

/*
 * SHA256d
 */
static uint256_t sha256d(const void *data, size_t len)
{
    uint256_t hsh = sha256(data, len);
    hsh = sha256(&hsh, sizeof(hsh));
    return hsh;
}

/****************************************************************************/
// RANDOM NUMBERS:

struct seed
{
    uint256_t seed;
    uint128_t counter;
};

/*
 * Create a new random seed.
 */
static struct seed *make_seed(void)
{
    struct seed *seed = (struct seed *)malloc(sizeof(struct seed));
    assert(seed != NULL);
    seed->counter = 0;
    if (!init_rand(seed, sizeof(struct seed)))
    {
        fprintf(stderr, "error: failed to init random seed\n");
        exit(EXIT_FAILURE);
    }
    if (seed->counter == 0)     // Sanity check...
    {
        fprintf(stderr, "error: random seed initialization failed\n");
        exit(EXIT_FAILURE);
    }
    return seed;
}

/*
 * Get a new random number.
 */
static uint256_t rand256(struct seed *seed)
{
    seed->counter++;
    return sha256(seed, sizeof(struct seed));
}

/****************************************************************************/
// OUTPUT:

/*
 * Base58 encode
 */
static const char* base58str =
    "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
static bool base58_encode(char *str, size_t slen, const uint8_t *data,
    size_t dlen)
{
    size_t i = 0;
    for (; i < dlen && data[i] == 0x0; i++)
        ;
    size_t zeroes = i;      // Retained zeroes.
    char b58[(dlen - i) * 138 / 100 + 1];
    memset(b58, 0, sizeof(b58));
    for (; i < dlen; i++)
    {
        int carry = (int)data[i];
        for (ssize_t j = sizeof(b58)-1; j >= 0; j--)
        {
            carry += 256 * b58[j];
            b58[j] = carry % 58;
            carry /= 58;
        }
        assert(carry == 0);
    }
    for (i = 0; i < sizeof(b58) && b58[i] == 0; i++)
        ;
    size_t zeroes2 = i;     // Dropped zeroes.
    if (zeroes + sizeof(b58) - zeroes2 + 1 > slen)
        return false;
    memset(str, '1', zeroes);
    size_t j;
    for (j = zeroes; i < sizeof(b58); i++, j++)
        str[j] = base58str[b58[i]];
    str[j] = '\0';
    return true;
}

/*
 * Base58check encode.
 */
static bool base58check_encode(char *str, size_t slen, const uint8_t *data,
    size_t dlen)
{
    uint256_t hsh = sha256d(data, dlen);
    uint8_t tmp[dlen + 4];
    memcpy(tmp, data, dlen);
    tmp[dlen+0] = hsh.i8[0];
    tmp[dlen+1] = hsh.i8[1];
    tmp[dlen+2] = hsh.i8[2];
    tmp[dlen+3] = hsh.i8[3];
    return base58_encode(str, slen, tmp, sizeof(tmp));
}

/*
 * Base64 encode.
 */
static bool base64_encode(char *str, size_t slen, const uint8_t *data,
    size_t dlen)
{
     static const char *base64str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkl"
        "mnopqrstuvwxyz0123456789+/";
     
     if (slen < (dlen+2)/3*4 + 1)
         return false;

    int mode = 0, left = 0;
    const uint8_t *end = data + dlen;
    size_t i = 0;
    while (data < end)
    {
        int enc = *(data++);
        switch (mode)
        {
            case 0:
                str[i++] = base64str[enc >> 2];
                left = (enc & 3) << 4;
                mode = 1;
                break;
            case 1:
                str[i++] = base64str[left | (enc >> 4)];
                left = (enc & 15) << 2;
                mode = 2;
                break;
            case 2:
                str[i++] = base64str[left | (enc >> 6)];
                str[i++] = base64str[enc & 63];
                mode = 0;
                break;
        }
    }

    if (mode != 0)
    {
        str[i++] = base64str[left];
        str[i++] = '=';
        if (mode == 1)
            str[i++] = '=';
    }
    str[i++] = '\0';

    return true;
}

/*
 * Make an address string from a hash160.
 */
static void make_addr(char *str, size_t slen, uint160_t x)
{
    uint8_t raw_addr[1 + sizeof(x)];
    raw_addr[0] = 0;
    memcpy(raw_addr+1, &x, sizeof(x));
    if (!base58check_encode(str, slen, raw_addr, sizeof(raw_addr)))
    {
        fprintf(stderr, "error: failed to generate address\n");
        exit(EXIT_FAILURE);
    }
}

/*
 * Generate a hash160 from a public key,
 */
static uint160_t gen_hash160(const uint8_t *pub_key)
{
    uint160_t hsh160 = hash160(pub_key);
    return hsh160;
}

/*
 * Make a WIF (compressed) string from a private key.
 */
static void make_wif(char *str, size_t slen, uint256_t priv_key)
{
    uint8_t raw_wif[34];
    raw_wif[0] = 0x80;
    memcpy(raw_wif+1, &priv_key, sizeof(priv_key));
    raw_wif[33] = 0x01;
    if (!base58check_encode(str, slen, raw_wif, sizeof(raw_wif)))
    {
        fprintf(stderr, "error: failed to create WIF\n");
        exit(EXIT_FAILURE);
    }
}

/*
 * Make a signature (proof you own the private keys).
 */
static void make_sig(char *str, size_t slen, const char *message0,
    uint256_t key)
{
    const char *magic = "Bitcoin Signed Message:\n";
    size_t mlen = strlen(magic);
    size_t mlen0 = strlen(message0);
    char message[mlen + mlen0 + 2];
    message[0] = mlen;
    memcpy(message+1, magic, mlen);
    message[mlen+1] = mlen0;
    memcpy(message+mlen+2, message0, mlen0);
    uint256_t msg = sha256d(message, mlen + mlen0 + 2);
    uint8_t sig[65];
    int rec = -1;
    int res = secp256k1_ecdsa_sign_compact(cxt, msg.i8, sig+1, key.i8, 
        secp256k1_nonce_function_rfc6979, NULL, &rec);
    if (res == 0 || rec == -1)
    {
        fprintf(stderr, "error: failed to generate signature\n");
        exit(EXIT_FAILURE);
    }
    sig[0] = 27 + rec + 4;
    if (!base64_encode(str, slen, sig, sizeof(sig)))
    {
        fprintf(stderr, "error: failed to generate signature\n");
        exit(EXIT_FAILURE);
    }
}

// Get a "nybble".
#define get_nybble(xs, i)                                               \
    ((i)%2 == 1? (xs)[(i)/2] & 0xF: (xs)[(i)/2] >> 4)

/****************************************************************************/
// STEP FUNCTION:
//
// Given a hash160 H comprised on {h0, h1, .., h9} 16-bit parts, then H is
// mapped to a public key P as follows:
//     P = G.base[h0] + G.offset[h1] + .. + G.offset[h9]
// The calculation is truncated according to the length n.  The corresponding
// private key P' is:
//     P' = base[h0] + offset[h1] + .. + offset[h9]
// Each (offset[i], G.offset[i]) and (base[i], G.base[i]) is chosen randomly
// and computed in advanced. 

#define BASE_MAX            0xFFFF

static secp256k1_gej_t bases[BASE_MAX];
static secp256k1_scalar_t priv_bases[BASE_MAX];

#define OFFSET_MAX_COL      9
#define OFFSET_MAX_ROW      BASE_MAX

#define BITS                16
#define NUM_PARTS(n)        (((n) - 1) / 16 + 1)

#define NUM_INIT_WORKERS    4

static secp256k1_ge_t offsets[OFFSET_MAX_ROW][OFFSET_MAX_COL];
static secp256k1_scalar_t priv_offsets[OFFSET_MAX_ROW][OFFSET_MAX_COL];

// Prototypes:
static bool read_pub_table(FILE *stream);
static bool write_pub_table(FILE *stream);
static bool read_priv_table(FILE *stream);
static bool write_priv_table(FILE *stream);

/*
 * Initialization worker.
 */
static void *init_worker(void *arg)
{
    struct seed *seed = make_seed();
    size_t i = (size_t)arg;

    for (size_t j = 0; j < OFFSET_MAX_ROW; j++)
    {
        int overflow = 0;
        do
        {
            uint256_t x = rand256(seed);
            secp256k1_scalar_set_b32(&priv_offsets[j][i], x.i8, &overflow);
        }
        while (overflow);
        secp256k1_gej_t tmp;
        secp256k1_ecmult_gen(&cxt->ecmult_gen_ctx, &tmp, &priv_offsets[j][i]);
        secp256k1_ge_set_gej(&offsets[j][i], &tmp);
    }
    free(seed);
    putchar('.');
    fflush(stdout);

    return NULL;
}

/*
 * Initialize the base and offet tables.
 */
static void init(ssize_t n, const char *priv_name, const char *pub_name)
{
    if (pub_name != NULL)
    {
        FILE *stream = fopen(pub_name, "r");
        if (stream != NULL)
        {
            if (!read_pub_table(stream))
            {
                fprintf(stderr, "error: failed to read \"%s\"\n", pub_name);
                exit(EXIT_FAILURE);
            }
            fclose(stream);
            fputs("RRRRRRRRRR", stdout);
            return;
        }
        n = 160;    // Full n for job mode.
    }

    n = NUM_PARTS(n)-1;
    thread ts[OFFSET_MAX_COL];
    for (size_t i = 0; i < n; i++)
    {
        ts[i] = spawn_thread(init_worker, (void *)i);
        if (ts[i] == (thread)NULL)
        {
            fprintf(stderr, "error: failed to spawn init worker thread\n");
            exit(EXIT_FAILURE);
        }
    }

    struct seed *seed = make_seed();
    for (size_t i = 0; i < BASE_MAX; i++)
    {
        int overflow = 0;
        do
        {
            uint256_t x = rand256(seed);
            secp256k1_scalar_set_b32(&priv_bases[i], x.i8, &overflow);
        }
        while (overflow);
        secp256k1_ecmult_gen(&cxt->ecmult_gen_ctx, &bases[i], &priv_bases[i]);
    }
    free(seed);
    putchar('.');
    fflush(stdout);
    for (size_t i = 0; i < n; i++)
        join_thread(ts[i]);
    
    if (pub_name != NULL)
    {
        FILE *stream = fopen(pub_name, "w");
        if (stream == NULL || !write_pub_table(stream))
        {
            fprintf(stderr, "error: failed to write \"%s\"\n", pub_name);
            exit(EXIT_FAILURE);
        }
        fclose(stream);
        stream = fopen(priv_name, "w");
        if (stream == NULL || !write_priv_table(stream))
        {
            fprintf(stderr, "error: failed to write \"%s\"\n", priv_name);
            exit(EXIT_FAILURE);
        }
        fclose(stream);
    }
}

/*
 * Get bits from memory.
 */
static uint16_t get_bits(size_t n, const uint16_t *val, size_t i)
{
    static const size_t NUM_BITS = 8*sizeof(uint16_t);
    if (n < i * NUM_BITS)
        return 0;
    n -= i * NUM_BITS;
    uint16_t bits = bswap16(val[i]);
    if (n >= NUM_BITS)
        return bits;
    bits &= ((uint16_t)0xFFFF << (NUM_BITS - n));
    return bits;
}

/*
 * Generate a public key from a hash160.
 */
static void gen_pub_key(uint8_t *pub_key, size_t n, uint160_t x)
{
    size_t idx = get_bits(n, x.i16, 0);
    secp256k1_gej_t r = bases[idx];
    for (size_t i = 1; i < NUM_PARTS(n); i++)
    {
        size_t col = i - 1;
        size_t row = get_bits(n, x.i16, i);
        secp256k1_gej_add_ge(&r, &r, &offsets[row][col]);
    }
    secp256k1_ge_t s;
    secp256k1_ge_set_gej(&s, &r);
    pub_key[0] = 0x02 | (secp256k1_fe_is_odd(&s.y) ? 0x01 : 0x00);
    secp256k1_fe_get_b32(pub_key+1, &s.x);
}

/*
 * Generate a private key from a hash160.
 */
static uint256_t gen_priv_key(size_t n, uint160_t x)
{
    size_t idx = get_bits(n, x.i16, 0);
    secp256k1_scalar_t r = priv_bases[idx];
    for (size_t i = 1; i < NUM_PARTS(n); i++)
    {
        size_t col = i - 1;
        size_t row = get_bits(n, x.i16, i);
        secp256k1_scalar_add(&r, &r, &priv_offsets[row][col]);
    }
    uint256_t y;
    secp256k1_scalar_get_b32(y.i8, &r);
    return y;
}

/*
 * STEP FUNCTION:
 * Generate a new hash160 that depends on an old hash160 (and n).
 */
static inline uint160_t f(size_t n, uint160_t x)
{
    uint8_t pub_key[33];
    gen_pub_key(pub_key, n, x);
    uint160_t hsh160 = hash160(pub_key);
    return hsh160;
}

/****************************************************************************/
// TESTS

/*
 * Test if two hash160 values are equal (for a given n).
 */
static bool is_equal(size_t n, uint160_t x, uint160_t y)
{
    for (size_t i = 0; i < NUM_PARTS(n); i++)
    {
        uint16_t a = get_bits(n, x.i16, i);
        uint16_t b = get_bits(n, y.i16, i);
        if (a != b)
            return false;
    }
    return true;
}

/*
 * Test if a hash160 is "distinguished".
 */
static bool is_distinguished(size_t z, uint160_t x)
{
    if (z == 0)
        return true;
    for (size_t i = 0; i < NUM_PARTS(z); i++)
    {
        uint16_t a = get_bits(z, x.i16, i);
        if (a != 0)
            return false;
    }
    return true;
}

/*
 * Make a hash160 distinguished.
 */
static uint160_t make_distinguished(size_t z, uint160_t x)
{
    size_t j = z / 8, k = z % 8;
    for (size_t i = 0; i < j; i++)
        x.i8[i] = 0;
    x.i8[j] &= (0xFF >> k);
    return x;
}

/****************************************************************************/
// WORK TABLE
//
// Stores found work for collision detection.

struct entry
{
    uint160_t start;
    uint160_t end;
    struct entry *next;
};

#define TABLE_MAX           8192
static struct entry *table[TABLE_MAX] = {NULL};
static mutex table_lock;
static bool collision = false;
static uint160_t c1;            // First collider
static uint160_t c2;            // Second collider
static uint160_t c3;            // Collision result

#define lock_table()        mutex_lock(&table_lock)
#define unlock_table()      mutex_unlock(&table_lock)

#define FAUX_COLLISION      (-1)
#define COLLISION           0
#define NO_COLLISION        1
#define STOP                2

static void write_work(FILE *stream, bool comment, size_t n, size_t z,
    uint160_t start, uint160_t end);

/*
 * Get the collision result.
 */
static void get_collision(uint160_t *x, uint160_t *y, uint160_t *end)
{
    assert(collision);
    *x = c1;
    *y = c2;
    if (end != NULL)
        *end = c3;
}

/*
 * Work found, add it to the table.  Result indicates whether the work
 * corresponds to a (faux) collision or not.
 */
static int add_work(FILE *stream, size_t n, size_t z, uint160_t start,
    uint160_t end)
{
    struct entry *entry = (struct entry *)malloc(sizeof(struct entry));
    if (entry == NULL)
    {
        fprintf(stderr, "error: failed to allocate %lu bytes for entry",
            sizeof(struct entry));
        exit(EXIT_FAILURE);
    }
    entry->start = start;
    entry->end   = end;
    entry->next  = NULL;
    uint16_t hsh = 0;
    for (size_t i = 0; i < NUM_PARTS(n); i++)
        hsh += get_bits(n, end.i16, i);
    hsh = hsh % TABLE_MAX;

    lock_table();
    if (collision)
    {
        unlock_table();
        free(entry);
        return STOP;
    }
    if (table[hsh] == NULL)
        table[hsh] = entry;
    else
    {
        struct entry *curr = table[hsh], *prev = NULL;
        while (curr != NULL)
        {
            if (is_equal(n, curr->end, entry->end))
            {
                if (is_equal(n, curr->start, entry->start))
                {
                    // Faux collision:
                    unlock_table();
                    free(entry);
                    return FAUX_COLLISION;
                }

                // Collision:
                collision = true;
                c1 = curr->start;
                c2 = entry->start;
                c3 = curr->end;
                write_work(stream, true, n, z, start, end);
                unlock_table();
                free(entry);
                return COLLISION;
            }
            prev = curr;
            curr = curr->next;
        }
        prev->next = entry;
    }
    write_work(stream, false, n, z, start, end);
    unlock_table();
    return NO_COLLISION;
}

/*
 * Reset the work table state.
 */
static void reset_table(void)
{
    lock_table();
    collision = false;
    for (size_t i = 0; i < TABLE_MAX; i++)
    {
        struct entry *curr = table[i];
        while (curr != NULL)
        {
            struct entry *next = curr->next;
            free(curr);
            curr = next;
        }
        table[i] = NULL;
    }
    unlock_table();
}

/****************************************************************************/
// WORK:

struct info
{
    uint160_t x;
    size_t n;
    size_t z;
    FILE *stream;
    size_t z0;
    uint160_t end;
};

// Stop when true.  A mere `volatile' should be OK here, although this is a
// bad idea in general.
static volatile bool stop = false;

/*
 * Spawn a worker thread.
 */
static void *worker(void *arg);
static thread spawn_worker(FILE *stream, size_t n, size_t z, uint160_t x,
    size_t z0, uint160_t end)
{
    struct info *info = (struct info *)malloc(sizeof(struct info));
    assert(info != NULL);
    info->x = x;
    info->n = n;
    info->z = z;
    info->stream = stream;
    info->z0 = z0;
    info->end = end;
    thread t = spawn_thread(worker, info);
    if (t == (thread)NULL)
    {
        fprintf(stderr, "error: failed to spawn thread");
        exit(EXIT_FAILURE);
    }
    return t;
}

/*
 * The worker thread.  Finds pairs (x, y) of distinguished hash160s such that
 * y = f(f(f(...f(x)...))).  The aim is to find a "Y", i.e. a pair of work
 * of the form (x, y) and (x', y) for x != x', and thus indicating a
 * collision.
 */
static void write_hash160(FILE *stream, uint160_t x);
static void *worker(void *arg)
{
    struct info *info = (struct info *)arg;
    uint160_t x = info->x;
    size_t n = info->n;
    size_t z = info->z;
    size_t z0 = info->z0;
    uint160_t end = info->end;
    FILE *stream = info->stream;
    free(info);

    while (true)
    {
        // COMPUTE WORK:
        uint160_t y = f(n, x);
        while (!stop && !is_distinguished(z, y))
            y = f(n, y);

        if (stop)
            return NULL;

        if (!is_distinguished(z, x))
        {
            // Work is not usable if x is not distinguished.
            putchar('U');
            fflush(stdout);
            x = y;
            continue;
        }

        // Add work to the data-base:
        int res = add_work(stream, n, z, x, y);
        switch (res)
        {
            case NO_COLLISION:
                putchar('.');
                fflush(stdout);
                break;
            case COLLISION:
                stop = true;
                putchar('Y');
                fflush(stdout);
                return NULL;
            case STOP:
                return NULL;
            case FAUX_COLLISION:
            {
                // Useless collision for a repeated x = wasted work.
                // Less likely for larger n.
                putchar('X');
                fflush(stdout);

                // Reset search:
                uint256_t hsh = sha256(&y, sizeof(y));
                memcpy(&x, &hsh, sizeof(x));
                x = make_distinguished(z, x);
                continue;
            }
        }

        if (is_distinguished(z0, y))
        {
            if (!is_equal(n, y, end))
            {
                stop = true;
                fprintf(stderr, "error: something went wrong; collision is not "
                    "valid (bug or hardware error?)\n");
                fprintf(stderr, "expected: ");
                write_hash160(stderr, end);
                fprintf(stderr, "\ngot     : ");
                write_hash160(stderr, y);
                putc('\n', stderr);
                exit(EXIT_FAILURE);
            }
            putchar('S');
            fflush(stdout);
            return NULL;
        }

        x = y;
    }
}

/****************************************************************************/
// I/O

static void write_hash160(FILE *stream, uint160_t x)
{
    for (size_t i = 0; i < sizeof(x); i++)
        fprintf(stream, "%.2x", x.i8[i]);
}

static bool read_hash160(FILE *stream, uint160_t *x)
{
    for (size_t i = 0; i < sizeof(uint160_t); i++)
    {
        char hex[3] = {getc(stream), getc(stream), '\0'};
        if (!isxdigit(hex[0]) || !isxdigit(hex[1]))
            return false;
        x->i8[i] = strtoul(hex, NULL, 16);
    }
    return true;
}

static void write_work(FILE *stream, bool comment, size_t n, size_t z,
    uint160_t start, uint160_t end)
{
    if (stream == NULL)
        return;
    if (comment)
        fputs("# ", stream);
    fprintf(stream, "W%.3u%.3u ", (unsigned)n, (unsigned)z);
    write_hash160(stream, end);
    putc(' ', stream);
    write_hash160(stream, start);
    putc('\n', stream);
    fflush(stream);
}

static bool read_work(FILE *stream, size_t n, size_t z)
{
    while (true)
    {
        char c = getc(stream);
        switch (c)
        {
            case '#':
            ignore_line:
                while ((c = getc(stream)) != '\n' && c != EOF)
                    ;
                continue;
            case 'W':
                break;
            default:
                return false;
        }
        char nstr[4] = {getc(stream), getc(stream), getc(stream), '\0'};
        char zstr[4] = {getc(stream), getc(stream), getc(stream), '\0'};
        if (!isdigit(nstr[0]) || !isdigit(nstr[1]) || !isdigit(nstr[2]) ||
                !isdigit(zstr[0]) || !isdigit(zstr[1]) || !isdigit(zstr[2]))
            return false;
        if (strtoul(nstr, NULL, 10) != n || strtoul(zstr, NULL, 10) != z)
        {
            putchar('_');
            goto ignore_line;
        }
        if (getc(stream) != ' ')
            return false;
        uint160_t end;
        if (!read_hash160(stream, &end))
            return false;
        if (getc(stream) != ' ')
            return false;
        uint160_t start;
        if (!read_hash160(stream, &start))
            return false;
        if (getc(stream) != '\n')
            return false;
        if (!is_distinguished(z, start) || !is_distinguished(z, end))
            return false;

        int res = add_work(NULL, n, z, start, end);
        switch (res)
        {
            case NO_COLLISION:
                putchar('R');
                fflush(stdout);
                break;
            case COLLISION:
                stop = false;
                putchar('Y');
                fflush(stdout);
                return true;
            case STOP:
                return false;
            case FAUX_COLLISION:
                putchar('X');
                fflush(stdout);
                continue;
        }
    }
}

#define PRIV_KEY_SIZE       32
#define PUB_KEY_SIZE        33
#define PRIV_TABLE_SIZE     \
    (PRIV_KEY_SIZE * (BASE_MAX + OFFSET_MAX_ROW * OFFSET_MAX_COL))
#define PUB_TABLE_SIZE      \
    (PUB_KEY_SIZE * (BASE_MAX + OFFSET_MAX_ROW * OFFSET_MAX_COL))

static bool read_pub_table(FILE *stream)
{
    uint8_t *table = (uint8_t *)malloc(PUB_TABLE_SIZE + sizeof(uint256_t));
    assert(table != NULL);
    if (fread(table, PUB_TABLE_SIZE + sizeof(uint256_t), 1, stream) != 1)
        return false;
    uint256_t chk = sha256(table, PUB_TABLE_SIZE);
    if (memcmp(table + PUB_TABLE_SIZE, &chk, sizeof(chk)) != 0)
        return false;
    uint8_t *ptr = table;
    for (size_t i = 0; i < BASE_MAX; i++)
    {
        secp256k1_ge_t r;
        if (!secp256k1_eckey_pubkey_parse(&r, ptr, PUB_KEY_SIZE))
            return false;
        secp256k1_gej_set_ge(&bases[i], &r);
        ptr += PUB_KEY_SIZE;
    }
    for (size_t i = 0; i < OFFSET_MAX_COL; i++)
    {
        for (size_t j = 0; j < OFFSET_MAX_ROW; j++)
        {
            if (!secp256k1_eckey_pubkey_parse(&offsets[j][i], ptr,
                    PUB_KEY_SIZE))
                return false;
            ptr += PUB_KEY_SIZE;
        }
    }
    free(table);
    return true;
}

static bool write_pub_table(FILE *stream)
{
    uint8_t *table = (uint8_t *)malloc(PUB_TABLE_SIZE + sizeof(uint256_t));
    assert(table != NULL);
    uint8_t *ptr = table;
    int size, compressed = 1;
    for (size_t i = 0; i < BASE_MAX; i++)
    {
        secp256k1_ge_t r;
        secp256k1_ge_set_gej(&r, &bases[i]);
        if (!secp256k1_eckey_pubkey_serialize(&r, ptr, &size, compressed))
            return false;
        ptr += PUB_KEY_SIZE;
    }
    for (size_t i = 0; i < OFFSET_MAX_COL; i++)
    {
        for (size_t j = 0; j < OFFSET_MAX_ROW; j++)
        {
            if (!secp256k1_eckey_pubkey_serialize(&offsets[j][i], ptr, &size,
                    compressed))
                return false;
            ptr += PUB_KEY_SIZE;
        }
    }
    assert(ptr - table == PUB_TABLE_SIZE);
    uint256_t chk = sha256(table, PUB_TABLE_SIZE);
    memcpy(ptr, &chk, sizeof(chk));
    if (fwrite(table, PUB_TABLE_SIZE + sizeof(uint256_t), 1, stream) != 1)
        return false;
    free(table);
    return true;
}

static bool read_priv_table(FILE *stream)
{
    uint8_t *table = (uint8_t *)malloc(PRIV_TABLE_SIZE + sizeof(uint256_t));
    assert(table != NULL);
    if (fread(table, PRIV_TABLE_SIZE + sizeof(uint256_t), 1, stream) != 1)
        return false;
    uint256_t chk = sha256(table, PRIV_TABLE_SIZE);
    if (memcmp(table + PRIV_TABLE_SIZE, &chk, sizeof(chk)) != 0)
        return false;
    uint8_t *ptr = table;
    int overflow;
    for (size_t i = 0; i < BASE_MAX; i++)
    {
        secp256k1_scalar_set_b32(&priv_bases[i], ptr, &overflow);
        if (overflow)
            return false;
        ptr += PRIV_KEY_SIZE;
    }
    for (size_t i = 0; i < OFFSET_MAX_COL; i++)
    {
        for (size_t j = 0; j < OFFSET_MAX_ROW; j++)
        {
            secp256k1_scalar_set_b32(&priv_offsets[j][i], ptr, &overflow);
            if (overflow)
                return false;
            ptr += PRIV_KEY_SIZE;
        }
    }
    free(table);
    return true;
}

static bool write_priv_table(FILE *stream)
{
    uint8_t *table = (uint8_t *)malloc(PRIV_TABLE_SIZE + sizeof(uint256_t));
    assert(table != NULL);
    uint8_t *ptr = table;
    for (size_t i = 0; i < BASE_MAX; i++)
    {
        secp256k1_scalar_get_b32(ptr, &priv_bases[i]);
        ptr += PRIV_KEY_SIZE;
    }
    for (size_t i = 0; i < OFFSET_MAX_COL; i++)
    {
        for (size_t j = 0; j < OFFSET_MAX_ROW; j++)
        {
            secp256k1_scalar_get_b32(ptr, &priv_offsets[j][i]);
            ptr += PRIV_KEY_SIZE;
        }
    }
    assert(ptr - table == PRIV_TABLE_SIZE);
    uint256_t chk = sha256(table, PRIV_TABLE_SIZE);
    memcpy(ptr, &chk, sizeof(chk));
    if (fwrite(table, PRIV_TABLE_SIZE + sizeof(uint256_t), 1, stream) != 1)
        return false;
    free(table);
    return true;
}

static char *gen_filename(const char *base, const char *ext)
{
    if (base == NULL)
        return NULL;
    size_t blen = strlen(base);
    size_t elen = strlen(ext);
    char *name = (char *)malloc(blen + elen + 1);
    assert(name != NULL);
    memcpy(name, base, blen);
    memcpy(name+blen, ext, elen);
    name[blen+elen] = '\0';
    return name;
}


/****************************************************************************/
// MAIN:

#define next_z(z)       \
    ((z) > 24? (z)-10: ((z) > 12? (z)-8: ((z) > 8? (z)-4: 0)))

#define OPTION_JOB      1
#define OPTION_HELP     2
#define OPTION_MESSAGE  3

/*
 * MAIN:
 */
int main(int argc, char **argv)
{
    static struct option long_options[] =
    {
        {"job",     1, 0, OPTION_JOB},
        {"help",    0, 0, OPTION_HELP},
        {"message", 1, 0, OPTION_MESSAGE},
        {NULL, 0, 0, 0}
    };
    const char *message = "This is a real Bitcoin address.";
    const char *job = NULL;
    size_t z = SIZE_MAX;
    while (true)
    {
        int idx;
        int opt = getopt_long(argc, argv, "", long_options, &idx);
        if (opt < 0)
            break;
        switch (opt)
        {
            case OPTION_JOB:
                job = strdup(optarg);
                assert(job != NULL);
                break;
            case OPTION_MESSAGE:
                if (strlen(optarg) >= 100)
                {
                    fprintf(stderr, "error: message length too long "
                        "(max = 100).\n");
                    return EXIT_FAILURE;
                }
                message = strdup(optarg);
                assert(message != NULL);
                break;
            case OPTION_HELP:
            default:
            usage:
                fprintf(stderr, "usage: %s [--job=JOB] [--message=MESSAGE] "
                    "bits [distinguished-bits]\n\n", argv[0]);
                fprintf(stderr, "WHERE:\n");
                fprintf(stderr, "\t--job=JOB\n");
                fprintf(stderr, "\t\tSave/restore state under JOB\n");
                fprintf(stderr, "\t--message=MESSAGE\n");
                fprintf(stderr, "\t\tGenerate signatures using MESSAGE.\n");
                return EXIT_SUCCESS;
        }
    }
    if (optind != argc-1 && optind != argc-2)
        goto usage;
    size_t n = atoi(argv[optind]);
    if (n < 32 || n > 160)
    {
        fprintf(stderr, "error: number-of-bits must be within the range "
            "32..160, got %lu\n", n);
        return EXIT_FAILURE;
    }
    if (optind == argc-2)
        z = atoi(argv[optind+1]);
    if (z != SIZE_MAX && z >= n)
    {
        fprintf(stderr, "error: number-of-distinguished-bits must be "
            "within the range 0..%lu, got %lu\n", n, z);
        return EXIT_FAILURE;
    }

    printf("n = %lubits\n", n);
    static const double BIRTHDAY_CONSTANT = 1.17741002251547;
    double diff = BIRTHDAY_CONSTANT * pow(2, (double)n/2.0);
    printf("difficulty = %.30g\n", round(diff));
    if (z == SIZE_MAX)
        z = (size_t)round(54.0/128.0 * (double)n) - 6;
    printf("distinguished = %lubits\n", z);

    memset(bases, 0, sizeof(bases));
    memset(offsets, 0, sizeof(offsets));
    memset(priv_bases, 0x80, sizeof(priv_bases));
    memset(priv_offsets, 0x80, sizeof(priv_offsets));
    cxt = secp256k1_context_create(
        SECP256K1_CONTEXT_SIGN | SECP256K1_CONTEXT_VERIFY);
    mutex_init(&table_lock);

    size_t NUM_WORKERS = num_threads();
    printf("threads = %lu\n", NUM_WORKERS);

    uint64_t t0 = get_time();

    // Initialize the base and offset table.
    printf("init |");
    fflush(stdout);
    const char *pub_name  = gen_filename(job, ".public");
    const char *priv_name = gen_filename(job, ".secret");
    init(n, priv_name, pub_name);
    printf("|\n");

    // The main stage, find a "Y".
    printf("find_Y |");
    fflush(stdout);
    const char *work_name = gen_filename(job, ".work");
    stop = false;
    FILE *stream = (work_name == NULL? NULL: fopen(work_name, "r"));
    if (stream != NULL)
    {
        // Load previous work:
        stop = read_work(stream, n, z);
        fclose(stream);
    }
    if (!stop)
    {
        // Start new work:
        thread ts[NUM_WORKERS];
        struct seed *seed = make_seed();
        stream = (work_name == NULL? NULL: fopen(work_name, "a"));
        if (work_name != NULL && stream == NULL)
        {
            fprintf(stderr, "error: failed to open file \"%s\"\n", work_name);
            return EXIT_FAILURE;
        }
        for (size_t i = 0; i < NUM_WORKERS; i++)
        {
            uint256_t r = rand256(seed);
            uint160_t x, end;
            memcpy(&x, &r, sizeof(x));
            memset(&end, 0, sizeof(end));
            x = make_distinguished(z, x);
            ts[i] = spawn_worker(stream, n, z, x, 160, end);
        }
        free(seed);
        for (size_t i = 0; i < NUM_WORKERS; i++)
            join_thread(ts[i]);
        if (stream != NULL)
        {
            fflush(stream);
            fclose(stream);
        }
    }
    printf("|\n");
    fflush(stdout);

    // Refine the "Y" into an actual collision by repeatedly shortening z.
    // This is much faster since we already have found the collision.
    size_t z0 = z;
    z = next_z(z);
    uint160_t a, b, end;
    while (z0 != 0)
    {
        printf("refine_Y[%lu] |", z);
        fflush(stdout);
        stop = false;
        get_collision(&a, &b, &end);
        reset_table();
        thread t = spawn_worker(NULL, n, z, a, z0, end);
        thread s = spawn_worker(NULL, n, z, b, z0, end);
        join_thread(t);
        join_thread(s);
        printf("|\n");
        z0 = z;
        z = next_z(z);
    }

    // OUTPUT:
    uint64_t t1 = get_time();
    get_collision(&a, &b, NULL);
    printf("Y[0] = ");
    write_hash160(stdout, a);
    printf("\nY[1] = ");
    write_hash160(stdout, b);
    printf("\ntime = %lums\n", t1 - t0);

    printf("\n--RESULT-(SECRET)-----------------------------------------------"
        "----------------\n\n");
    bool have_priv = true;
    if (priv_name != NULL)
    {
        have_priv = false;
        stream = fopen(priv_name, "r");
        if (stream != NULL && read_priv_table(stream))
            have_priv = true;
        else
            fprintf(stderr, "warning: failed to read \"%s\"\n", priv_name);
        if (stream != NULL)
            fclose(stream);
    }
    uint256_t key0 = gen_priv_key(n, a);
    uint256_t key1 = gen_priv_key(n, b);
    printf("priv_key[1] = ");
    if (have_priv)
        for (size_t i = 0; i < sizeof(key0); i++)
            printf("%.2X", key0.i8[i]);
    else
        printf("UNKNOWN");
    printf("\npriv_key[2] = ");
    if (have_priv)
        for (size_t i = 0; i < sizeof(key1); i++)
            printf("%.2X", key1.i8[i]);
    else
        printf("UNKNOWN");
    putchar('\n');

    uint8_t pub_key0[33];
    uint8_t pub_key1[33];
    gen_pub_key(pub_key0, n, a);
    gen_pub_key(pub_key1, n, b);
    uint160_t hsh0 = gen_hash160(pub_key0);
    uint160_t hsh1 = gen_hash160(pub_key1);
    char wif0[100];
    make_wif(wif0, sizeof(wif0), key0);
    char wif1[100];
    make_wif(wif1, sizeof(wif1), key1);
    char addr0[100];
    make_addr(addr0, sizeof(addr0), hsh0);
    char addr1[100];
    make_addr(addr1, sizeof(addr1), hsh1);
    char sig0[100];
    make_sig(sig0, sizeof(sig0), message, key0);
    char sig1[100];
    make_sig(sig1, sizeof(sig1), message, key1);

    // bonus = how many extra bits we got for "free".
    size_t bonus = 0;
    for (size_t i = n+1; i < 160; i++)
    {
        if (!is_equal(i, hsh0, hsh1))
            break;
        bonus++;
    }

    // share = how many characters of the address are shared.
    size_t share = 0;
    for (size_t i = 0; addr0[i] != '\0' && addr0[i] == addr1[i]; i++)
        share++;
    size_t share160 = (n + bonus) / 4;

    printf("\nWIF[1] = %s\n", (have_priv? wif0: "UNKNOWN"));
    printf("WIF[2] = %s\n\n", (have_priv? wif1: "UNKNOWN"));

    printf("--RESULT-(SIGNATURES)-------------------------------------------"
        "----------------\n\n");

    printf("message = \"%s\"\n", message);
    printf("sig[1] = %s\n", (have_priv? sig0: "UNKNOWN"));
    printf("sig[2] = %s\n\n", (have_priv? sig1: "UNKNOWN"));

    printf("--RESULT-(PUBLIC)-----------------------------------------------"
        "----------------\n\n");

    printf("pub_key[1] = ");
    for (size_t i = 0; i < sizeof(key0); i++)
        printf("%.2X", pub_key0[i]);
    printf("\npub_key[2] = ");
    for (size_t i = 0; i < sizeof(key1); i++)
        printf("%.2X", pub_key1[i]);

    printf("\n\nbonus = %lubits\n", bonus);
    printf("shared = %luchars\n", share160);
    printf("hash160[1] = ");
    set_bold(true);
    for (size_t i = 0; i < share160; i++)
        printf("%.1x", get_nybble(hsh0.i8, i));
    set_bold(false);
    for (size_t i = share160; i < 2*sizeof(uint160_t); i++)
        printf("%.1x", get_nybble(hsh0.i8, i));
    putchar('\n');
    printf("hash160[2] = ");
    set_bold(true);
    for (size_t i = 0; i < share160; i++)
        printf("%.1x", get_nybble(hsh1.i8, i));
    set_bold(false);
    for (size_t i = share160; i < 2*sizeof(uint160_t); i++)
        printf("%.1x", get_nybble(hsh1.i8, i));
    putchar('\n');
    putchar('\n');

    printf("shared = %luchars\n", share);
    printf("addr[1] = ");
    set_bold(true);
    for (size_t i = 0; i < share; i++)
        putchar(addr0[i]);
    set_bold(false);
    printf("%s\n", addr0+share);
    printf("addr[2] = ");
    set_bold(true);
    for (size_t i = 0; i < share; i++)
        putchar(addr1[i]);
    set_bold(false);
    printf("%s\n\n", addr1+share);
    printf("warning: verify the keys/addresses before use!\n\n");

    return 0;
}

