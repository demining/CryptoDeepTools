/*
    SHA1 OpenCL Optimized kernel
    (c) B. Kerler 2018
    MIT License
*/

/*
    (small) Changes:
    outbuf and inbuf structs defined using the buffer_structs_template
    func_sha1 renamed to hash_main
    hash array trimmed to size 5
*/

#define rotl32(a,n) rotate ((a), (n)) 

#define mod(x,y) ((x)-((x)/(y)*(y)))

#define F2(x,y,z)  ((x) ^ (y) ^ (z))
#define F1(x,y,z)   (bitselect(z,y,x))
#define F0(x,y,z)   (bitselect (x, y, ((x) ^ (z))))

#define SHA1M_A 0x67452301u
#define SHA1M_B 0xefcdab89u
#define SHA1M_C 0x98badcfeu
#define SHA1M_D 0x10325476u
#define SHA1M_E 0xc3d2e1f0u

#define SHA1C00 0x5a827999u
#define SHA1C01 0x6ed9eba1u
#define SHA1C02 0x8f1bbcdcu
#define SHA1C03 0xca62c1d6u

#define SHA1_STEP(f,a,b,c,d,e,x)    \
{                                   \
  e += K;                           \
  e += x;                           \
  e += f (b, c, d);                 \
  e += rotl32 (a,  5u);             \
  b  = rotl32 (b, 30u);             \
}

static void sha1_process2 (const unsigned int *W, unsigned int *digest)
{
  unsigned int A = digest[0];
  unsigned int B = digest[1];
  unsigned int C = digest[2];
  unsigned int D = digest[3];
  unsigned int E = digest[4];

  unsigned int w0_t = W[0];
  unsigned int w1_t = W[1];
  unsigned int w2_t = W[2];
  unsigned int w3_t = W[3];
  unsigned int w4_t = W[4];
  unsigned int w5_t = W[5];
  unsigned int w6_t = W[6];
  unsigned int w7_t = W[7];
  unsigned int w8_t = W[8];
  unsigned int w9_t = W[9];
  unsigned int wa_t = W[10];
  unsigned int wb_t = W[11];
  unsigned int wc_t = W[12];
  unsigned int wd_t = W[13];
  unsigned int we_t = W[14];
  unsigned int wf_t = W[15];

  #undef K
  #define K SHA1C00

  SHA1_STEP (F1, A, B, C, D, E, w0_t);
  SHA1_STEP (F1, E, A, B, C, D, w1_t);
  SHA1_STEP (F1, D, E, A, B, C, w2_t);
  SHA1_STEP (F1, C, D, E, A, B, w3_t);
  SHA1_STEP (F1, B, C, D, E, A, w4_t);
  SHA1_STEP (F1, A, B, C, D, E, w5_t);
  SHA1_STEP (F1, E, A, B, C, D, w6_t);
  SHA1_STEP (F1, D, E, A, B, C, w7_t);
  SHA1_STEP (F1, C, D, E, A, B, w8_t);
  SHA1_STEP (F1, B, C, D, E, A, w9_t);
  SHA1_STEP (F1, A, B, C, D, E, wa_t);
  SHA1_STEP (F1, E, A, B, C, D, wb_t);
  SHA1_STEP (F1, D, E, A, B, C, wc_t);
  SHA1_STEP (F1, C, D, E, A, B, wd_t);
  SHA1_STEP (F1, B, C, D, E, A, we_t);
  SHA1_STEP (F1, A, B, C, D, E, wf_t);
  w0_t = rotl32 ((wd_t ^ w8_t ^ w2_t ^ w0_t), 1u); SHA1_STEP (F1, E, A, B, C, D, w0_t);
  w1_t = rotl32 ((we_t ^ w9_t ^ w3_t ^ w1_t), 1u); SHA1_STEP (F1, D, E, A, B, C, w1_t);
  w2_t = rotl32 ((wf_t ^ wa_t ^ w4_t ^ w2_t), 1u); SHA1_STEP (F1, C, D, E, A, B, w2_t);
  w3_t = rotl32 ((w0_t ^ wb_t ^ w5_t ^ w3_t), 1u); SHA1_STEP (F1, B, C, D, E, A, w3_t);

  #undef K
  #define K SHA1C01

  w4_t = rotl32 ((w1_t ^ wc_t ^ w6_t ^ w4_t), 1u); SHA1_STEP (F2, A, B, C, D, E, w4_t);
  w5_t = rotl32 ((w2_t ^ wd_t ^ w7_t ^ w5_t), 1u); SHA1_STEP (F2, E, A, B, C, D, w5_t);
  w6_t = rotl32 ((w3_t ^ we_t ^ w8_t ^ w6_t), 1u); SHA1_STEP (F2, D, E, A, B, C, w6_t);
  w7_t = rotl32 ((w4_t ^ wf_t ^ w9_t ^ w7_t), 1u); SHA1_STEP (F2, C, D, E, A, B, w7_t);
  w8_t = rotl32 ((w5_t ^ w0_t ^ wa_t ^ w8_t), 1u); SHA1_STEP (F2, B, C, D, E, A, w8_t);
  w9_t = rotl32 ((w6_t ^ w1_t ^ wb_t ^ w9_t), 1u); SHA1_STEP (F2, A, B, C, D, E, w9_t);
  wa_t = rotl32 ((w7_t ^ w2_t ^ wc_t ^ wa_t), 1u); SHA1_STEP (F2, E, A, B, C, D, wa_t);
  wb_t = rotl32 ((w8_t ^ w3_t ^ wd_t ^ wb_t), 1u); SHA1_STEP (F2, D, E, A, B, C, wb_t);
  wc_t = rotl32 ((w9_t ^ w4_t ^ we_t ^ wc_t), 1u); SHA1_STEP (F2, C, D, E, A, B, wc_t);
  wd_t = rotl32 ((wa_t ^ w5_t ^ wf_t ^ wd_t), 1u); SHA1_STEP (F2, B, C, D, E, A, wd_t);
  we_t = rotl32 ((wb_t ^ w6_t ^ w0_t ^ we_t), 1u); SHA1_STEP (F2, A, B, C, D, E, we_t);
  wf_t = rotl32 ((wc_t ^ w7_t ^ w1_t ^ wf_t), 1u); SHA1_STEP (F2, E, A, B, C, D, wf_t);
  w0_t = rotl32 ((wd_t ^ w8_t ^ w2_t ^ w0_t), 1u); SHA1_STEP (F2, D, E, A, B, C, w0_t);
  w1_t = rotl32 ((we_t ^ w9_t ^ w3_t ^ w1_t), 1u); SHA1_STEP (F2, C, D, E, A, B, w1_t);
  w2_t = rotl32 ((wf_t ^ wa_t ^ w4_t ^ w2_t), 1u); SHA1_STEP (F2, B, C, D, E, A, w2_t);
  w3_t = rotl32 ((w0_t ^ wb_t ^ w5_t ^ w3_t), 1u); SHA1_STEP (F2, A, B, C, D, E, w3_t);
  w4_t = rotl32 ((w1_t ^ wc_t ^ w6_t ^ w4_t), 1u); SHA1_STEP (F2, E, A, B, C, D, w4_t);
  w5_t = rotl32 ((w2_t ^ wd_t ^ w7_t ^ w5_t), 1u); SHA1_STEP (F2, D, E, A, B, C, w5_t);
  w6_t = rotl32 ((w3_t ^ we_t ^ w8_t ^ w6_t), 1u); SHA1_STEP (F2, C, D, E, A, B, w6_t);
  w7_t = rotl32 ((w4_t ^ wf_t ^ w9_t ^ w7_t), 1u); SHA1_STEP (F2, B, C, D, E, A, w7_t);

  #undef K
  #define K SHA1C02

  w8_t = rotl32 ((w5_t ^ w0_t ^ wa_t ^ w8_t), 1u); SHA1_STEP (F0, A, B, C, D, E, w8_t);
  w9_t = rotl32 ((w6_t ^ w1_t ^ wb_t ^ w9_t), 1u); SHA1_STEP (F0, E, A, B, C, D, w9_t);
  wa_t = rotl32 ((w7_t ^ w2_t ^ wc_t ^ wa_t), 1u); SHA1_STEP (F0, D, E, A, B, C, wa_t);
  wb_t = rotl32 ((w8_t ^ w3_t ^ wd_t ^ wb_t), 1u); SHA1_STEP (F0, C, D, E, A, B, wb_t);
  wc_t = rotl32 ((w9_t ^ w4_t ^ we_t ^ wc_t), 1u); SHA1_STEP (F0, B, C, D, E, A, wc_t);
  wd_t = rotl32 ((wa_t ^ w5_t ^ wf_t ^ wd_t), 1u); SHA1_STEP (F0, A, B, C, D, E, wd_t);
  we_t = rotl32 ((wb_t ^ w6_t ^ w0_t ^ we_t), 1u); SHA1_STEP (F0, E, A, B, C, D, we_t);
  wf_t = rotl32 ((wc_t ^ w7_t ^ w1_t ^ wf_t), 1u); SHA1_STEP (F0, D, E, A, B, C, wf_t);
  w0_t = rotl32 ((wd_t ^ w8_t ^ w2_t ^ w0_t), 1u); SHA1_STEP (F0, C, D, E, A, B, w0_t);
  w1_t = rotl32 ((we_t ^ w9_t ^ w3_t ^ w1_t), 1u); SHA1_STEP (F0, B, C, D, E, A, w1_t);
  w2_t = rotl32 ((wf_t ^ wa_t ^ w4_t ^ w2_t), 1u); SHA1_STEP (F0, A, B, C, D, E, w2_t);
  w3_t = rotl32 ((w0_t ^ wb_t ^ w5_t ^ w3_t), 1u); SHA1_STEP (F0, E, A, B, C, D, w3_t);
  w4_t = rotl32 ((w1_t ^ wc_t ^ w6_t ^ w4_t), 1u); SHA1_STEP (F0, D, E, A, B, C, w4_t);
  w5_t = rotl32 ((w2_t ^ wd_t ^ w7_t ^ w5_t), 1u); SHA1_STEP (F0, C, D, E, A, B, w5_t);
  w6_t = rotl32 ((w3_t ^ we_t ^ w8_t ^ w6_t), 1u); SHA1_STEP (F0, B, C, D, E, A, w6_t);
  w7_t = rotl32 ((w4_t ^ wf_t ^ w9_t ^ w7_t), 1u); SHA1_STEP (F0, A, B, C, D, E, w7_t);
  w8_t = rotl32 ((w5_t ^ w0_t ^ wa_t ^ w8_t), 1u); SHA1_STEP (F0, E, A, B, C, D, w8_t);
  w9_t = rotl32 ((w6_t ^ w1_t ^ wb_t ^ w9_t), 1u); SHA1_STEP (F0, D, E, A, B, C, w9_t);
  wa_t = rotl32 ((w7_t ^ w2_t ^ wc_t ^ wa_t), 1u); SHA1_STEP (F0, C, D, E, A, B, wa_t);
  wb_t = rotl32 ((w8_t ^ w3_t ^ wd_t ^ wb_t), 1u); SHA1_STEP (F0, B, C, D, E, A, wb_t);

  #undef K
  #define K SHA1C03

  wc_t = rotl32 ((w9_t ^ w4_t ^ we_t ^ wc_t), 1u); SHA1_STEP (F2, A, B, C, D, E, wc_t);
  wd_t = rotl32 ((wa_t ^ w5_t ^ wf_t ^ wd_t), 1u); SHA1_STEP (F2, E, A, B, C, D, wd_t);
  we_t = rotl32 ((wb_t ^ w6_t ^ w0_t ^ we_t), 1u); SHA1_STEP (F2, D, E, A, B, C, we_t);
  wf_t = rotl32 ((wc_t ^ w7_t ^ w1_t ^ wf_t), 1u); SHA1_STEP (F2, C, D, E, A, B, wf_t);
  w0_t = rotl32 ((wd_t ^ w8_t ^ w2_t ^ w0_t), 1u); SHA1_STEP (F2, B, C, D, E, A, w0_t);
  w1_t = rotl32 ((we_t ^ w9_t ^ w3_t ^ w1_t), 1u); SHA1_STEP (F2, A, B, C, D, E, w1_t);
  w2_t = rotl32 ((wf_t ^ wa_t ^ w4_t ^ w2_t), 1u); SHA1_STEP (F2, E, A, B, C, D, w2_t);
  w3_t = rotl32 ((w0_t ^ wb_t ^ w5_t ^ w3_t), 1u); SHA1_STEP (F2, D, E, A, B, C, w3_t);
  w4_t = rotl32 ((w1_t ^ wc_t ^ w6_t ^ w4_t), 1u); SHA1_STEP (F2, C, D, E, A, B, w4_t);
  w5_t = rotl32 ((w2_t ^ wd_t ^ w7_t ^ w5_t), 1u); SHA1_STEP (F2, B, C, D, E, A, w5_t);
  w6_t = rotl32 ((w3_t ^ we_t ^ w8_t ^ w6_t), 1u); SHA1_STEP (F2, A, B, C, D, E, w6_t);
  w7_t = rotl32 ((w4_t ^ wf_t ^ w9_t ^ w7_t), 1u); SHA1_STEP (F2, E, A, B, C, D, w7_t);
  w8_t = rotl32 ((w5_t ^ w0_t ^ wa_t ^ w8_t), 1u); SHA1_STEP (F2, D, E, A, B, C, w8_t);
  w9_t = rotl32 ((w6_t ^ w1_t ^ wb_t ^ w9_t), 1u); SHA1_STEP (F2, C, D, E, A, B, w9_t);
  wa_t = rotl32 ((w7_t ^ w2_t ^ wc_t ^ wa_t), 1u); SHA1_STEP (F2, B, C, D, E, A, wa_t);
  wb_t = rotl32 ((w8_t ^ w3_t ^ wd_t ^ wb_t), 1u); SHA1_STEP (F2, A, B, C, D, E, wb_t);
  wc_t = rotl32 ((w9_t ^ w4_t ^ we_t ^ wc_t), 1u); SHA1_STEP (F2, E, A, B, C, D, wc_t);
  wd_t = rotl32 ((wa_t ^ w5_t ^ wf_t ^ wd_t), 1u); SHA1_STEP (F2, D, E, A, B, C, wd_t);
  we_t = rotl32 ((wb_t ^ w6_t ^ w0_t ^ we_t), 1u); SHA1_STEP (F2, C, D, E, A, B, we_t);
  wf_t = rotl32 ((wc_t ^ w7_t ^ w1_t ^ wf_t), 1u); SHA1_STEP (F2, B, C, D, E, A, wf_t);

  // Macros don't have scope, so this K was being preserved
  #undef K

  digest[0] += A;
  digest[1] += B;
  digest[2] += C;
  digest[3] += D;
  digest[4] += E;
} 

#define def_hash(funcName, passTag, hashTag)    \
/* The main hashing function */                 \
static void funcName(passTag const unsigned int *pass, int pass_len, hashTag unsigned int* hash)   \
{                                                                                       \
    /* pass is only given to SWAP
        and hash is just assigned to p, which is only accessed by p[i] =
        => both tags irrelevant! */     \
                                        \
    int plen=pass_len/4;                \
    if (mod(pass_len,4)) plen++;        \
                                        \
    hashTag unsigned int* p = hash;     \
                                        \
    unsigned int W[0x10]={0};           \
    int loops=plen;                     \
    int curloop=0;                      \
    unsigned int State[5]={0};          \
    State[0] = 0x67452301;              \
    State[1] = 0xefcdab89;              \
    State[2] = 0x98badcfe;              \
    State[3] = 0x10325476;              \
    State[4] = 0xc3d2e1f0;              \
                                        \
                                        \
    while (loops>0)     \
    {                   \
        W[0x0]=0x0;     \
        W[0x1]=0x0;     \
        W[0x2]=0x0;     \
        W[0x3]=0x0;     \
        W[0x4]=0x0;     \
        W[0x5]=0x0;     \
        W[0x6]=0x0;     \
        W[0x7]=0x0;     \
        W[0x8]=0x0;     \
        W[0x9]=0x0;     \
        W[0xA]=0x0;     \
        W[0xB]=0x0;     \
        W[0xC]=0x0;     \
        W[0xD]=0x0;     \
        W[0xE]=0x0;     \
        W[0xF]=0x0;     \
                        \
        for (int m=0;loops!=0 && m<16;m++)          \
        {                                           \
            W[m]^=SWAP(pass[m+(curloop*16)]);       \
            loops--;                                \
        }                                           \
                                                    \
        if (loops==0 && mod(pass_len,64)!=0)        \
        {                                           \
            unsigned int padding=0x80<<(((pass_len+4)-((pass_len+4)/4*4))*8);   \
            int v=mod(pass_len,64);                 \
            W[v/4]|=SWAP(padding);                  \
            if ((pass_len&0x3B)!=0x3B)              \
            {                                       \
                /* Let's add length */              \
                W[0x0F]=pass_len*8;                 \
            }                                       \
        }                                           \
                                                    \
        sha1_process2(W,State);                     \
        curloop++;                                  \
    }                                               \
                            \
    if (mod(plen,16)==0)    \
    {                       \
        W[0x0]=0x0;         \
        W[0x1]=0x0;         \
        W[0x2]=0x0;         \
        W[0x3]=0x0;         \
        W[0x4]=0x0;         \
        W[0x5]=0x0;         \
        W[0x6]=0x0;         \
        W[0x7]=0x0;         \
        W[0x8]=0x0;         \
        W[0x9]=0x0;         \
        W[0xA]=0x0;         \
        W[0xB]=0x0;         \
        W[0xC]=0x0;         \
        W[0xD]=0x0;         \
        W[0xE]=0x0;         \
        W[0xF]=0x0;         \
        if ((pass_len&0x3B)!=0x3B)  \
        {                           \
            unsigned int padding=0x80<<(((pass_len+4)-((pass_len+4)/4*4))*8); \
            W[0]|=SWAP(padding);    \
        }                           \
        /* Let's add length */      \
        W[0x0F]=pass_len*8;         \
                                    \
        sha1_process2(W,State);     \
    }                       \
                            \
    p[0]=SWAP(State[0]);    \
    p[1]=SWAP(State[1]);    \
    p[2]=SWAP(State[2]);    \
    p[3]=SWAP(State[3]);    \
    p[4]=SWAP(State[4]);    \
    return;                 \
}

def_hash(hash_global, __global, __global)
def_hash(hash_private, __private, __private)
def_hash(hash_glbl_to_priv, __global, __private)
def_hash(hash_priv_to_glbl, __private, __global)

#undef mod

#undef rotl32
#undef F0
#undef F1
#undef F2
                
__kernel void hash_main(__global const inbuf * inbuffer, __global outbuf * outbuffer)
{
    unsigned int idx = get_global_id(0);

    // unsigned int hash[20/4]={0};

    hash_global(inbuffer[idx].buffer, inbuffer[idx].length, outbuffer[idx].buffer);

/*     outbuffer[idx].buffer[0]=hash[0];
    outbuffer[idx].buffer[1]=hash[1];
    outbuffer[idx].buffer[2]=hash[2];
    outbuffer[idx].buffer[3]=hash[3];
    outbuffer[idx].buffer[4]=hash[4]; */
}
