/*
    Scrypt OpenCL Optimized kernel
    (c) C.B. and B. Kerler 2018-2019
    MIT License
*/ 

// [Lines 1 and 2 are for defining N and invMemoryDensity, and must be blank]

/*
sCrypt kernel.. or just ROMix really, for use with my sBrute PyOpenCL core
Originally adapted from Bjorn Kerler's opencl_brute

Follows the variable names of wikipedia's psuedocode:
    https://en.wikipedia.org/wiki/Scrypt#Algorithm
Function/macro convention is F(output, input_1, input_2, ..), i.e. output first.
Generally work with pointers.
 
=== Design choices & reasoning =================================================

> initial and final pbkdf2s are left to python for a few reasons:
    - vastly simplier cl code, hopefully giving us better optimisation
    - reduced bugs
    - simplier parallelisation across the parameter 'p'
    - not a burden on python: work is tiny..
        & the special sBrute python core is careful that any work is while the GPUs are busy

> salsa20 is sort of inplace
    - fundamentally needs to copy the input internally
    - does (hopefully) make savings by having input = output, making the algo:
        orig_input < input
        Process(input)      // inplace
        input ^= orig_input
      where the last line should be faster than output = input ^ orig_input

> JUMBLES!
    - jumble(Y0|Y1|..|Y_2r-1) = Y0|Y2|..|Y_2r-1  |  Y1|Y3|..|Y_2r-1,
        which is effectively performed at the end of BlockMix in the original definition
    - jumble is of order 4, i.e. jumble^4 = id
    - we want to avoid doing this copying..
    - naturally we unroll the loop in BlockMix, so reordering the input is free
=> all this leads to us working in 4 different states of "jumbled-ness" throughout the program
    - indeed our V[j]s are jumbled j % 4 times.
    - xoring the V[j]'s back onto a (somewhat jumbled) X in the 2nd loop effectively requires a function call

> Salsa function is long, so can't be macro-ed and called lots of times.
    - We could have kept the BlockMix loop,
        but this would require reading the jumble index from an array each iteration
    - Instead we make Salsa a void Function
    - Also a xor loop is moved into Salsa, so that we can unroll it,
      at the small cost of an extra parameter

> All values except our huge V array are kept locally.
    - V[j] is accessed and xored onto a local array.

> After a long battle, the Salsa20/8's 4-pairs-of-rounds loop is unrolled.
    - Program size should still be fine.

> using "= {0}" to initialise local arrays is the classic fix copied from Bjorn Kerler's code:
    seems to be necessary to actually make the program work, even though it should have no effect.


=== FIN ========================================================================
*/




// ===========================================================================
// 1 / memory density
#ifndef invMemoryDensity
    #define invMemoryDensity 1
#endif
#define iMD_is_pow_2 (!(invMemoryDensity & (invMemoryDensity - 1)) && invMemoryDensity)


// sCrypt constants :
//  - p irrelevant to us
//  - r below cannot be changed (without altering the program)
//      > makes the 'jumble' operation order 4
//  - N can be changed if necessary, up until we run out of buffer space (so maybe <= 20?)
#ifndef N
    #define N 15        // <= 20?
#endif


#define r 8         // CAN'T BE CHANGED

// derivatives of constants :s
#define blockSize_bytes (128 * r)   // 1024
#define ceilDiv(n,d) (((n) + (d) - 1) / (d))
#define blockSize_int32 ceilDiv(blockSize_bytes, 4) // 256
#define iterations (1 << N) 

// Useful struct for internal processing: a lump of 64 bytes (sort of an atomic unit)
typedef struct {
    unsigned int buffer[16];    // 64 bytes
} T_Lump64;

// Comfy Block struct
typedef struct {
	T_Lump64 lump[2*r];    // 1024 bytes
} T_Block;

// Struct for the large V array which needs to be pseduo-randomly accessed.
// Now restricted in length by invMemoryDensity
typedef struct {
    T_Block blk[ceilDiv(iterations, invMemoryDensity)];
} T_HugeArray;






// ===========================================================================
// Simple macros
// Lump & Block macros take pointers

#define copy16_unrolled(dest,src)                    \
/* dest[i] = src[i] for i in [0..16) */     \
{                       \
    dest[0]  = src[0];  \
    dest[1]  = src[1];  \
    dest[2]  = src[2];  \
    dest[3]  = src[3];  \
    dest[4]  = src[4];  \
    dest[5]  = src[5];  \
    dest[6]  = src[6];  \
    dest[7]  = src[7];  \
    dest[8]  = src[8];  \
    dest[9]  = src[9];  \
    dest[10] = src[10]; \
    dest[11] = src[11]; \
    dest[12] = src[12]; \
    dest[13] = src[13]; \
    dest[14] = src[14]; \
    dest[15] = src[15]; \
}

#define xor16_unrolled(dest,src)            \
/* dest[i] ^= src[i] for i in [0..16) */    \
{                        \
    dest[0]  ^= src[0];  \
    dest[1]  ^= src[1];  \
    dest[2]  ^= src[2];  \
    dest[3]  ^= src[3];  \
    dest[4]  ^= src[4];  \
    dest[5]  ^= src[5];  \
    dest[6]  ^= src[6];  \
    dest[7]  ^= src[7];  \
    dest[8]  ^= src[8];  \
    dest[9]  ^= src[9];  \
    dest[10] ^= src[10]; \
    dest[11] ^= src[11]; \
    dest[12] ^= src[12]; \
    dest[13] ^= src[13]; \
    dest[14] ^= src[14]; \
    dest[15] ^= src[15]; \
}

#define add16_unrolled(dest, src)   \
/* dest[i] += src[i] for i in [0..16) */    \
{                                   \
    dest[0] += src[0];  \
    dest[1] += src[1];  \
    dest[2] += src[2];  \
    dest[3] += src[3];  \
    dest[4] += src[4];  \
    dest[5] += src[5];  \
    dest[6] += src[6];  \
    dest[7] += src[7];  \
    dest[8] += src[8];  \
    dest[9] += src[9];  \
    dest[10] += src[10];    \
    dest[11] += src[11];    \
    dest[12] += src[12];    \
    dest[13] += src[13];    \
    dest[14] += src[14];    \
    dest[15] += src[15];    \
}

#define copyLump64_unrolled(dest, src)  \
/* &dest = &src */                        \
{                                       \
    copy16_unrolled(dest->buffer, src->buffer)  \
}

#define xorLump64_unrolled(dest, src)   \
/* &dest ^= &src */                       \
{                                       \
    xor16_unrolled(dest->buffer, src->buffer)   \
}

#define copyBlock_halfrolled(destTag, dest, srcTag, src)     \
/* [destTag] &dest = [srcTag] &src, copying lumps of 64 in a loop */ \
{                                           \
    destTag T_Lump64* _CB_d;                \
    srcTag T_Lump64* _CB_s;                 \
    for (int i = 2*r - 1; i >= 0; i--)      \
    {                                       \
        _CB_d = &(dest)->lump[i];           \
        _CB_s = &(src)->lump[i];            \
        copyLump64_unrolled(_CB_d, _CB_s)   \
    }                                       \
}

#define xorBlock_halfrolled(destTag, dest, srcTag, src)     \
/* [destTag] &dest ^= [srcTag] &src, xoring lumps of 64 in a loop */ \
{                                           \
    destTag T_Lump64* _XB_d;                \
    srcTag T_Lump64* _XB_s;                 \
    for (int i = 2*r - 1; i >= 0; i--)      \
    {                                       \
        _XB_d = &(dest)->lump[i];           \
        _XB_s = &(src)->lump[i];            \
        xorLump64_unrolled(_XB_d, _XB_s)    \
    }                                       \
}







// ==========================================================================
// Debug printing macros

#define printLump(lump) \
/* Takes the object not a pointer */    \
{                                       \
    for (int j = 0; j < 16; j++){       \
        printf("%08X", lump.buffer[j]); \
    }                                   \
}

#define printBlock(blk) \
/* Takes a pointer */   \
{                                   \
    for (int i = 0; i < 2*r; i++)   \
    {                               \
        printLump(blk->lump[i])     \
    }                               \
}







// ===========================================================================
// Salsa 20/8
// Adapted from https://en.wikipedia.org/wiki/Salsa20#Structure


// Rotation synonym and quarter round for Salsa20
#define rotl32(a,n) rotate((a), (n))
#define quarterRound(a, b, c, d)		\
/**/                                    \
{                                       \
	b ^= rotl32(a + d,  7u);	        \
	c ^= rotl32(b + a,  9u);	        \
	d ^= rotl32(c + b, 13u);	        \
	a ^= rotl32(d + c, 18u);            \
}

#define pairOfRounds(x)                         \
/* Pinched from wikipedia */                    \
{                                               \
    /* Odd round */                             \
    quarterRound(x[ 0], x[ 4], x[ 8], x[12]);   \
    quarterRound(x[ 5], x[ 9], x[13], x[ 1]);	\
    quarterRound(x[10], x[14], x[ 2], x[ 6]);	\
    quarterRound(x[15], x[ 3], x[ 7], x[11]);	\
    /* Even round */                            \
    quarterRound(x[ 0], x[ 1], x[ 2], x[ 3]);	\
    quarterRound(x[ 5], x[ 6], x[ 7], x[ 4]);	\
    quarterRound(x[10], x[11], x[ 8], x[ 9]);	\
    quarterRound(x[15], x[12], x[13], x[14]);	\
}

// Function not a macro (see 'design choices' at the top)
// Xors X onto lump then computes lump <- Salsa20/8(lump)
__private void Xor_then_Salsa_20_8_InPlace(__private T_Lump64* lump, __private T_Lump64* X)
{
    // Includes xoring here, to allow for unrolling (at expense of an extra param)
    xorLump64_unrolled(lump, X)

    // Copy input into x (lowercase) for processing
    unsigned int x[16] = {0};
    copy16_unrolled(x, lump->buffer)

    // Do the 8 rounds
    // After much internal conflict I have unrolled this loop of 4
    pairOfRounds(x)
    pairOfRounds(x)
    pairOfRounds(x)
    pairOfRounds(x)

    // Add x to original input, and store into output.. which is the input :)
    add16_unrolled(lump->buffer, x)
}







// ====================================================================================
// BlockMix variants
//   Nomenclature of the variants is composition: f_g_h(x) = f(g(h(x)))


#define BlockMixLoopBody(_B_i, _BMLB_X)      \
/* My heavily adapted BlockMix loop body */ \
{                                           \
    /*  _B_i = _B_i ^ _BMLB_X
        _B_i = Salsa20(_B_i)
        _BMLB_X = _B_i (as pointers)
        [ Doesn't increment i ]
    */                                        \
    Xor_then_Salsa_20_8_InPlace(_B_i, _BMLB_X);\
    _BMLB_X = _B_i;                            \
}

#define _BlockMix_Generic(B, \
                        i_1, i_2, i_3, i_4, i_5, i_6, i_7,         \
                        i_8, i_9, i_10, i_11, i_12, i_13, i_14, i_15)   \
/* Takes {i_0, .. , i_15} a permutation of {0, .. , 15}, the order of indices
    i_0 = 0 implied. */                                                 \
{                                                                       \
    /* Don't even need to copy to _BM_X, can just point! */                 \
    /* Start with _BM_X = B[2r-1] (indexing across blocks of 64 bytes) */   \
    __private T_Lump64* _BM_X = &B->lump[i_15];   \
    __private T_Lump64* _BM_B_i;                  \
                                        \
    /* i_0 = 0 */                       \
    BlockMixLoopBody(&B->lump[0], _BM_X)\
    _BM_B_i = &B->lump[i_1];            \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
    _BM_B_i = &B->lump[i_2];            \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
    _BM_B_i = &B->lump[i_3];            \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
                                    \
    _BM_B_i = &B->lump[i_4];            \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
    _BM_B_i = &B->lump[i_5];            \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
    _BM_B_i = &B->lump[i_6];            \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
    _BM_B_i = &B->lump[i_7];            \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
                                    \
    _BM_B_i = &B->lump[i_8];            \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
    _BM_B_i = &B->lump[i_9];            \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
    _BM_B_i = &B->lump[i_10];           \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
    _BM_B_i = &B->lump[i_11];           \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
                                    \
    _BM_B_i = &B->lump[i_12];           \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
    _BM_B_i = &B->lump[i_13];           \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
    _BM_B_i = &B->lump[i_14];           \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
    _BM_B_i = &B->lump[i_15];           \
    BlockMixLoopBody(_BM_B_i, _BM_X)    \
}


#define BlockMix_J3(B) \
/* 3 jumbles then a BlockMix */   \
{    \
    _BlockMix_Generic(B, 8, 1, 9, 2, 10, 3, 11, 4, 12, 5, 13, 6, 14, 7, 15)  \
}

#define J1_BlockMix_J2(B) \
/* Jumble twice, BlockMixes, then jumbles.  */   \
{    \
    _BlockMix_Generic(B, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15)  \
}

#define J2_BlockMix_J1(B) \
/* Jumbles, BlockMixes, then 2 jumbles. */   \
{    \
    _BlockMix_Generic(B, 2, 4, 6, 8, 10, 12, 14, 1, 3, 5, 7, 9, 11, 13, 15)  \
}

#define J3_BlockMix(B) \
/* BlockMix followed by 3 jumbles (i.e. a jumble-inverse) */   \
{    \
    _BlockMix_Generic(B, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)  \
}








// ===============================================================================
// Integerify: gets it's own section

#define Integerify(j, block)                    \
/* Observe that the last 64 bytes is the last lump */ \
/* Correct regardless of the jumbled-ness of the block! */ \
/* Requires N <= 32 */ \
{                                               \
    j = block->lump[15].buffer[0] % iterations; \
}






// ===============================================================================
// Xoring methods for the 4 states of jumbled-ness
//   Culminates in the 'recover_and_xor_appropriately' function, which selects the correct one.

#define _xor_generic(dest, srcTag, src,                \
        i_0, i_1, i_2, i_3, i_4, i_5, i_6, i_7,         \
        i_8, i_9, i_10, i_11, i_12, i_13, i_14, i_15)   \
/* dest ^= perm(src), xor permuted source on, k -> i_k the permutation.
    requires src disjoint from dest : guaranteed by address spaces */      \
{                                           \
    __private T_Lump64* _XB_d;              \
    srcTag T_Lump64* _XB_s;                 \
    const int perm[16] = {i_0, i_1, i_2, i_3, i_4, i_5, i_6, i_7,   \
                    i_8, i_9, i_10, i_11, i_12, i_13, i_14, i_15};  \
    for (int i = 2*r - 1; i >= 0; i--)      \
    {                                       \
        _XB_d = &(dest)->lump[i];           \
        /* Select perm index instead of index */    \
        _XB_s = &(src)->lump[perm[i]];      \
        xorLump64_unrolled(_XB_d, _XB_s)    \
    }                                       \
}

#define xor_J1(dest, srcTag, src)   \
{                           \
    _xor_generic(dest, srcTag, src, 0, 2, 4, 6, 8, 10, 12, 14, 1, 3, 5, 7, 9, 11, 13, 15)   \
}

#define xor_J2(dest, srcTag, src)   \
{                           \
    _xor_generic(dest, srcTag, src, 0, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15)   \
}

#define xor_J3(dest, srcTag, src)   \
{                           \
    _xor_generic(dest, srcTag, src, 0, 8, 1, 9, 2, 10, 3, 11, 4, 12, 5, 13, 6, 14, 7, 15)   \
}

// Chooses the appropriate xoring based on the supplied value diff, which is modded by 4
//   diff is such that jumble^diff(inp) is 'equally jumbled' as out
//   diff will be pseudorandom, so case statement should maximise efficiency.
// Now also recomputes V'[j] from V[j // density]
void recover_and_xor_appropriately(__private T_Block* dest, __global T_Block* V, 
        unsigned int j, unsigned int diff){

    // Number of computations to make.
    int nComps = j % invMemoryDensity;
    int V_index = j / invMemoryDensity;

    if (nComps == 0){
        label_nComps_is_zero:
        // Do the xoring directly from the global block V[V_index]
        // Basically the old "xor_appropriately"
        switch(diff % 4){
            case 0:
                xorBlock_halfrolled(__private, dest, __global, &V[V_index])
                break;
            case 1:
                xor_J1(dest, __global, &V[V_index])
                break;
            case 2:
                xor_J2(dest, __global, &V[V_index])
                break;
            case 3:
                xor_J3(dest, __global, &V[V_index])
                break;
        }
    }
    else
    {
        // Copy V[j/iMD] into Y, where we'll do our work
        //   (using Bjorn's initialisation-bug-prevention once more)
        // Observe that this copy is pretty essential
        __private unsigned int _Y_bytes[ceilDiv(sizeof(T_Block), 4)] = {0};
        __private T_Block* Y = (T_Block*) _Y_bytes;
        copyBlock_halfrolled(__private, Y, __global, &V[V_index])

        // We have to decide where to enter the loop, based on how jumbled V[V_index] is
        //   i.e. (V_index * invMemoryDensity) % 4
        switch((j - nComps) % 4){
            case 0:
                goto label_j0;
            case 1:
                goto label_j3;
            case 2:
                goto label_j2;
            case 3:
                goto label_j1;
        }

        // Could change to nComps-- .. would save an assembly instruction? :)
        do {
            label_j0: J3_BlockMix(Y);
            if (--nComps == 0){
                break;
            }

            label_j3: J2_BlockMix_J1(Y);
            if (--nComps == 0){
                break;
            }

            label_j2: J1_BlockMix_J2(Y);
            if (--nComps == 0){
                break;
            }

            label_j1: BlockMix_J3(Y);
        } while (--nComps > 0);


        // With Y = V'[j] recovered, we can finish the job off by xoring appropriately.
        switch(diff % 4){
            case 0:
                xorBlock_halfrolled(__private, dest, __private, Y)
                break;
            case 1:
                xor_J1(dest, __private, Y)
                break;
            case 2:
                xor_J2(dest, __private, Y)
                break;
            case 3:
                xor_J3(dest, __private, Y)
                break;
        }
    }

}









// ==================================================================================
// The big one: ROMix kernel

__kernel void ROMix( __global T_Block* blocksFlat,
                    __global T_HugeArray* hugeArraysFlat,
                    __global T_Block* outputsFlat
                    )
{
    // Get our id and so unflatten our block & huge array 'V', to get pointers
    //   &arr[i] and arr + i should be equivalent syntax?
    __private unsigned int id = get_global_id(0);
    __global T_Block* origBlock = &blocksFlat[id];
    __global T_Block* outputBlock = &outputsFlat[id];
    __global T_Block* V = hugeArraysFlat[id].blk;
    __global T_Block* curr_V_blk = V;
    
    // Copy our block into local X : could roll fully
    //   slightly weird to allow for Bjorn's bug-preventing-initialisation
    __private unsigned int _X_bytes[ceilDiv(sizeof(T_Block), 4)] = {0};
    __private T_Block* X = (T_Block*) _X_bytes;
    copyBlock_halfrolled(__private, X, __global, origBlock)



    // =====================================================
    // 1st loop, fill V with the correct values, in varying states of jumbled-ness:
    //  Let V' be the correct value. d the invMemoryDensity
    //  d*i mod 4     ||      state in V[i]
    // ============================================
    //      0         ||          V'[d*i]
    //      1         ||      J^3(V'[d*i])
    //      2         ||      J^2(V'[d*i])
    //      3         ||      J^1(V'[d*i])    
    // Now only storing the first in every invMemoryDensity

    #define maybeStore(curr_V_blk, X, _j)   \
    /* If due, stores X to curr_V_blk and increments it */  \
    {                                       \
        if ((_j) % invMemoryDensity == 0){  \
            copyBlock_halfrolled(__global, curr_V_blk, __private, X);   \
            curr_V_blk++;                   \
        }                                   \
    }

    // Still needs to do all 'iterations' loops, to compute the final X
    for (int j = 0; j < iterations; j+=4){
        maybeStore(curr_V_blk, X, j)
        J3_BlockMix(X);

        maybeStore(curr_V_blk, X, j+1)
        J2_BlockMix_J1(X);

        maybeStore(curr_V_blk, X, j+2)
        J1_BlockMix_J2(X);

        maybeStore(curr_V_blk, X, j+3)
        BlockMix_J3(X);
    }

    #undef maybeStore


    // ====================================================
    // 2nd loop, similarly X passes through 4 states of jumbled-ness
    // Observe that we need to choose our xor based on j-i % 4,
    //   which adds more complexity compared to the first loop.

    // Moreover we may need to actually recompute the value.
    // => sensibly (in terms of program length) this is in "recover_and_xor_appropriately"
    unsigned int j;
    for (unsigned int i = 0; i < iterations; i+=4){
        Integerify(j, X)
        recover_and_xor_appropriately(X, V, j, j - i);
        J3_BlockMix(X);

        Integerify(j, X);
        recover_and_xor_appropriately(X, V, j, j - (i+1));
        J2_BlockMix_J1(X);

        Integerify(j, X);
        recover_and_xor_appropriately(X, V, j, j - (i+2));
        J1_BlockMix_J2(X);

        Integerify(j, X);
        recover_and_xor_appropriately(X, V, j, j - (i+3));
        BlockMix_J3(X);
    }

    // Copy to output: could roll fully
    copyBlock_halfrolled(__global, outputBlock, __private, X)
}






// ===============================================================================
// For testing, Salsa20's each lump in place
// Same signature as ROMix for ease
__kernel void Salsa20(  __global T_Block* blocksFlat,
                        __global T_HugeArray* hugeArraysFlat,
                        __global T_Block* outputsFlat)
{
    __private unsigned int id = get_global_id(0);

    // Copy locally, initialising first for fear of bugs
    __private unsigned int _b[ceilDiv(sizeof(T_Block), 4)] = {0};
    __private T_Block* blk = (T_Block*) _b;
    copyBlock_halfrolled(__private, blk, __global, (&blocksFlat[id]))

    // Initialise a zero lump
    unsigned int _z[ceilDiv(sizeof(T_Lump64), 4)] = {0};
    T_Lump64* zeroLump = (T_Lump64*)_z;
    
    // Salsa each lump inPlace
    for (int j = 0; j < 2*r; j++)
    {
        Xor_then_Salsa_20_8_InPlace((&blk->lump[j]), zeroLump);
    }

    // Copy to output
    __global T_Block* output = &outputsFlat[id];
    copyBlock_halfrolled(__global, output, __private, blk)
}