/*
    MD5 OpenCL kernel
    Adapted from Bjorn Kerler's sha256.cl
    MIT License
*/
/*
    outbuf and inbuf structs defined using the buffer_structs_template
    NOTE the only arrays declared in the code are size 4.
*/

// Shift constants
#define MD5SH00 7u
#define MD5SH01 12u
#define MD5SH02 17u
#define MD5SH03 22u
#define MD5SH04 7u
#define MD5SH05 12u
#define MD5SH06 17u
#define MD5SH07 22u
#define MD5SH08 7u
#define MD5SH09 12u
#define MD5SH0a 17u
#define MD5SH0b 22u
#define MD5SH0c 7u
#define MD5SH0d 12u
#define MD5SH0e 17u
#define MD5SH0f 22u
#define MD5SH10 5u
#define MD5SH11 9u
#define MD5SH12 14u
#define MD5SH13 20u
#define MD5SH14 5u
#define MD5SH15 9u
#define MD5SH16 14u
#define MD5SH17 20u
#define MD5SH18 5u
#define MD5SH19 9u
#define MD5SH1a 14u
#define MD5SH1b 20u
#define MD5SH1c 5u
#define MD5SH1d 9u
#define MD5SH1e 14u
#define MD5SH1f 20u
#define MD5SH20 4u
#define MD5SH21 11u
#define MD5SH22 16u
#define MD5SH23 23u
#define MD5SH24 4u
#define MD5SH25 11u
#define MD5SH26 16u
#define MD5SH27 23u
#define MD5SH28 4u
#define MD5SH29 11u
#define MD5SH2a 16u
#define MD5SH2b 23u
#define MD5SH2c 4u
#define MD5SH2d 11u
#define MD5SH2e 16u
#define MD5SH2f 23u
#define MD5SH30 6u
#define MD5SH31 10u
#define MD5SH32 15u
#define MD5SH33 21u
#define MD5SH34 6u
#define MD5SH35 10u
#define MD5SH36 15u
#define MD5SH37 21u
#define MD5SH38 6u
#define MD5SH39 10u
#define MD5SH3a 15u
#define MD5SH3b 21u
#define MD5SH3c 6u
#define MD5SH3d 10u
#define MD5SH3e 15u
#define MD5SH3f 21u

// Put in a constanty bit
__constant uint s_md5[64] = {
    MD5SH00, MD5SH01, MD5SH02, MD5SH03, 
    MD5SH04, MD5SH05, MD5SH06, MD5SH07, 
    MD5SH08, MD5SH09, MD5SH0a, MD5SH0b, 
    MD5SH0c, MD5SH0d, MD5SH0e, MD5SH0f, 
    MD5SH10, MD5SH11, MD5SH12, MD5SH13, 
    MD5SH14, MD5SH15, MD5SH16, MD5SH17, 
    MD5SH18, MD5SH19, MD5SH1a, MD5SH1b, 
    MD5SH1c, MD5SH1d, MD5SH1e, MD5SH1f, 
    MD5SH20, MD5SH21, MD5SH22, MD5SH23, 
    MD5SH24, MD5SH25, MD5SH26, MD5SH27, 
    MD5SH28, MD5SH29, MD5SH2a, MD5SH2b, 
    MD5SH2c, MD5SH2d, MD5SH2e, MD5SH2f, 
    MD5SH30, MD5SH31, MD5SH32, MD5SH33, 
    MD5SH34, MD5SH35, MD5SH36, MD5SH37, 
    MD5SH38, MD5SH39, MD5SH3a, MD5SH3b, 
    MD5SH3c, MD5SH3d, MD5SH3e, MD5SH3f
};

// MD5 constants
#define MD5C00 0xd76aa478u
#define MD5C01 0xe8c7b756u
#define MD5C02 0x242070dbu
#define MD5C03 0xc1bdceeeu
#define MD5C04 0xf57c0fafu
#define MD5C05 0x4787c62au
#define MD5C06 0xa8304613u
#define MD5C07 0xfd469501u
#define MD5C08 0x698098d8u
#define MD5C09 0x8b44f7afu
#define MD5C0a 0xffff5bb1u
#define MD5C0b 0x895cd7beu
#define MD5C0c 0x6b901122u
#define MD5C0d 0xfd987193u
#define MD5C0e 0xa679438eu
#define MD5C0f 0x49b40821u
#define MD5C10 0xf61e2562u
#define MD5C11 0xc040b340u
#define MD5C12 0x265e5a51u
#define MD5C13 0xe9b6c7aau
#define MD5C14 0xd62f105du
#define MD5C15 0x02441453u
#define MD5C16 0xd8a1e681u
#define MD5C17 0xe7d3fbc8u
#define MD5C18 0x21e1cde6u
#define MD5C19 0xc33707d6u
#define MD5C1a 0xf4d50d87u
#define MD5C1b 0x455a14edu
#define MD5C1c 0xa9e3e905u
#define MD5C1d 0xfcefa3f8u
#define MD5C1e 0x676f02d9u
#define MD5C1f 0x8d2a4c8au
#define MD5C20 0xfffa3942u
#define MD5C21 0x8771f681u
#define MD5C22 0x6d9d6122u
#define MD5C23 0xfde5380cu
#define MD5C24 0xa4beea44u
#define MD5C25 0x4bdecfa9u
#define MD5C26 0xf6bb4b60u
#define MD5C27 0xbebfbc70u
#define MD5C28 0x289b7ec6u
#define MD5C29 0xeaa127fau
#define MD5C2a 0xd4ef3085u
#define MD5C2b 0x04881d05u
#define MD5C2c 0xd9d4d039u
#define MD5C2d 0xe6db99e5u
#define MD5C2e 0x1fa27cf8u
#define MD5C2f 0xc4ac5665u
#define MD5C30 0xf4292244u
#define MD5C31 0x432aff97u
#define MD5C32 0xab9423a7u
#define MD5C33 0xfc93a039u
#define MD5C34 0x655b59c3u
#define MD5C35 0x8f0ccc92u
#define MD5C36 0xffeff47du
#define MD5C37 0x85845dd1u
#define MD5C38 0x6fa87e4fu
#define MD5C39 0xfe2ce6e0u
#define MD5C3a 0xa3014314u
#define MD5C3b 0x4e0811a1u
#define MD5C3c 0xf7537e82u
#define MD5C3d 0xbd3af235u
#define MD5C3e 0x2ad7d2bbu
#define MD5C3f 0xeb86d391u

// Put into a constanty bit
__constant uint k_md5[64] = {
    MD5C00, MD5C01, MD5C02, MD5C03, 
    MD5C04, MD5C05, MD5C06, MD5C07, 
    MD5C08, MD5C09, MD5C0a, MD5C0b, 
    MD5C0c, MD5C0d, MD5C0e, MD5C0f, 
    MD5C10, MD5C11, MD5C12, MD5C13, 
    MD5C14, MD5C15, MD5C16, MD5C17, 
    MD5C18, MD5C19, MD5C1a, MD5C1b, 
    MD5C1c, MD5C1d, MD5C1e, MD5C1f, 
    MD5C20, MD5C21, MD5C22, MD5C23, 
    MD5C24, MD5C25, MD5C26, MD5C27, 
    MD5C28, MD5C29, MD5C2a, MD5C2b, 
    MD5C2c, MD5C2d, MD5C2e, MD5C2f, 
    MD5C30, MD5C31, MD5C32, MD5C33, 
    MD5C34, MD5C35, MD5C36, MD5C37, 
    MD5C38, MD5C39, MD5C3a, MD5C3b, 
    MD5C3c, MD5C3d, MD5C3e, MD5C3f
};

// Stolen from Bjorn's code. mod I used % ..
#define rotl32(a,n) rotate(a, n)

// Basic functions - be sure to wrap stuff!
#define F(B,C,D) (((B) & (C)) | ((~(B)) & (D)))
#define G(B,C,D) (((B) & (D)) | ((C) & (~(D))))
#define H(B,C,D) ((B) ^ (C) ^ (D))
#define I(B,C,D) ((C) ^ ((B) | (~(D))))

// Debugging
// #define showState(A,B,C,D) printf("Hashstate = {%u,%u,%u,%u}\n", A, B, C, D)

// Updating the state, where func is the chosen function. Read the pseudocode properly next time
#define updateState(A,B,C,D,i,g,func) (rotate(A + func((B),(C),(D)) + M[g] + K[i], s[i]) + (B))

// Minor macros
#define M inpBlock
#define K k_md5
#define s s_md5
#define g_F i                 
#define g_G ((5*i + 1) % 16)   
#define g_H ((3*i + 5) % 16)    
#define g_I ((7*i) % 16)        

#define def_process512Block(funcName, tag) \
/* Take a 512-bit (64 bytes, 16 ints) block and update the 4 ints of state */           \
static void funcName(tag const unsigned int *inpBlock, unsigned int *state) \
{                               \
    unsigned int A = state[0];  \
    unsigned int B = state[1];  \
    unsigned int C = state[2];  \
    unsigned int D = state[3];  \
                                \
/*  Perform the 64 rounds, with the different functions in each block of 16 */  \
    int i = 0;          \
    for (; i<16;){      \
        A = updateState(A,B,C,D,i,g_F,F); i++;  \
        D = updateState(D,A,B,C,i,g_F,F); i++;  \
        C = updateState(C,D,A,B,i,g_F,F); i++;  \
        B = updateState(B,C,D,A,i,g_F,F); i++;  \
    }               \
    for (; i<32;){  \
        A = updateState(A,B,C,D,i,g_G,G); i++;  \
        D = updateState(D,A,B,C,i,g_G,G); i++;  \
        C = updateState(C,D,A,B,i,g_G,G); i++;  \
        B = updateState(B,C,D,A,i,g_G,G); i++;  \
    }               \
    for (; i<48;){  \
        A = updateState(A,B,C,D,i,g_H,H); i++;  \
        D = updateState(D,A,B,C,i,g_H,H); i++;  \
        C = updateState(C,D,A,B,i,g_H,H); i++;  \
        B = updateState(B,C,D,A,i,g_H,H); i++;  \
    }               \
    for (; i<64;){  \
        A = updateState(A,B,C,D,i,g_I,I); i++;  \
        D = updateState(D,A,B,C,i,g_I,I); i++;  \
        C = updateState(C,D,A,B,i,g_I,I); i++;  \
        B = updateState(B,C,D,A,i,g_I,I); i++;  \
    }               \
                    \
    state[0] += A;  \
    state[1] += B;  \
    state[2] += C;  \
    state[3] += D;  \
                    \
    return;         \
}

// Create the function definitions
def_process512Block(process512Block__global, __global)
def_process512Block(process512Block__private, __private)

// Undefine all macros from above def_process512Block
#undef M
#undef K
#undef s
#undef g_F
#undef g_G
#undef g_H
#undef g_I

#undef F
#undef G
#undef H
#undef I
#undef updateState
#undef rotl32

#undef def_process512Block

__constant uint padInt[4] = {
    0x1 << 7, 0x1 << 15, 0x1 << 23, 0x1 << 31 
};
__constant uint maskInt[4] = {
    0x00000000, 0x000000FF, 0x0000FFFF, 0x00FFFFFF
};

#define bs_int hashBlockSize_int32
#define def_md_pad(funcName, tag)               \
/* The standard padding,
    add a 1 bit, then little-endian original length mod 2^64 at the end of a block
    RETURN number of blocks */                  \
static int funcName(tag unsigned int *msg, const int msgLen_bytes)      \
{                                                                       \
    /* Appends the 1 bit to the end, and 0s to the end of the byte */   \
    int padIntIndex = msgLen_bytes / 4;                                 \
    int overhang = (msgLen_bytes - padIntIndex*4);                      \
    /* Don't assume that there are zeros here! */                       \
    msg[padIntIndex] &= maskInt[overhang];                              \
    msg[padIntIndex] |= padInt[overhang];                               \
    int l = bs_int - 1 - (padIntIndex % bs_int);                        \
    l = ((l + (bs_int - 2)) % bs_int);                                  \
    for (int i = 1; i <= l && i <= 1; i++)                              \
    {                                                                   \
        msg[padIntIndex + i] = 0;                                       \
    }                                                                   \
                                                                        \
    /* Add the bit length to the end.. little-endian */                 \
    int lastI = padIntIndex + l + 2;                                    \
    msg[lastI-1] = msgLen_bytes * 8;                                    \
    msg[lastI] = 0;                                                     \
                                                                        \
    int nBlocks = (lastI + 1) / bs_int;                                 \
    return nBlocks;                                                     \
};                                                                      

// Define it with the various tags to cheer OpenCL up
def_md_pad(md_pad__global, __global)
def_md_pad(md_pad__private, __private)

#undef bs_int
#undef def_md_pad


#define def_hash(funcName, m_tag, output_tag, md_pad_func, process512Block_func)    \
/*  The main hashing function, for use with hash_main and pbkdf2 */                 \
static void funcName(m_tag unsigned int *m, const int m_len_bytes, output_tag unsigned int *output)    \
{                                               \
    int nBlocks = md_pad_func(m,m_len_bytes);   \
                                                \
    /* Initialise state */                      \
    unsigned int hashState[4]={0x67452301,0xefcdab89,0x98badcfe,0x10325476};    \
                                                \
    /* Do the required number of rounds */      \
    for (int i=0;i<nBlocks;i++)                 \
    {                                           \
        process512Block_func(m + hashBlockSize_int32*i, hashState);  \
    }                                           \
                            \
    output[0]=hashState[0]; \
    output[1]=hashState[1]; \
    output[2]=hashState[2]; \
    output[3]=hashState[3]; \
}
// Macro pays off now!
def_hash(hash_global, __global, __global, md_pad__global, process512Block__global)
def_hash(hash_private, __private, __private, md_pad__private, process512Block__private)
def_hash(hash_glbl_to_priv, __global, __private, md_pad__global, process512Block__global)
def_hash(hash_priv_to_glbl, __private, __global, md_pad__private, process512Block__private)

#undef def_hash


// Main function, this name is referenced in the code.
// Calls hash_global, with __private used in pbkdf2
__kernel void hash_main(__global inbuf * inbuffer, __global outbuf * outbuffer)
{
    // Select our buffer areas
    unsigned int idx = get_global_id(0);
    __global unsigned int *inp_buffer = inbuffer[idx].buffer;

    hash_global(inp_buffer, inbuffer[idx].length, outbuffer[idx].buffer);
    
/*     printf("Global call output: ");
    printFromInt_glbl(outbuffer[idx].buffer, hashDigestSize_bytes,true);
    printf("\n"); */

    unsigned int inp[inBufferSize];
    for (int j = 0; j < inBufferSize; j++){
        inp[j] = inp_buffer[j];
    }

/*     unsigned int out[hashDigestSize_int32];
    hash_private(inp, inbuffer[idx].length, out);
    printf("local call output: ");
    printFromInt(out, hashDigestSize_bytes,true);
    printf("\n"); */

}