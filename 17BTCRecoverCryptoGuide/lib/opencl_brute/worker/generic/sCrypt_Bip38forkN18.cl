// Improved OpenCL Scrypt Kernel
// Part of BTCRecover fork jeffersonn-1/btcrecover, licensed under the GNU General Public License v2.0
// 2020 Jefferson Nunn and Gaith

#define iterations 262144

#define reorder(B)                               \
{                                                \
  __private uint4 tmp[4];                        \
  tmp[0] = (uint4)(B[1].x,B[2].y,B[3].z,B[0].w); \
  tmp[1] = (uint4)(B[2].x,B[3].y,B[0].z,B[1].w); \
  tmp[2] = (uint4)(B[3].x,B[0].y,B[1].z,B[2].w); \
  tmp[3] = (uint4)(B[0].x,B[1].y,B[2].z,B[3].w); \
  B[0] = tmp[0];                                 \
  B[1] = tmp[1];                                 \
  B[2] = tmp[2];                                 \
  B[3] = tmp[3];                                 \
}                                                \

#define undo_reorder(B)                          \
{                                                \
  __private uint4 tmp[4];                        \
  tmp[0] = (uint4)(B[3].x,B[2].y,B[1].z,B[0].w); \
  tmp[1] = (uint4)(B[0].x,B[3].y,B[2].z,B[1].w); \
  tmp[2] = (uint4)(B[1].x,B[0].y,B[3].z,B[2].w); \
  tmp[3] = (uint4)(B[2].x,B[1].y,B[0].z,B[3].w); \
  B[0] = tmp[0];                                 \
  B[1] = tmp[1];                                 \
  B[2] = tmp[2];                                 \
  B[3] = tmp[3];                                 \
}                                                \

#define copy64(dest, idx_dest, src, idx_src) \
{                                            \
  dest[idx_dest    ] = src[idx_src    ];     \
  dest[idx_dest + 1] = src[idx_src + 1];     \
  dest[idx_dest + 2] = src[idx_src + 2];     \
  dest[idx_dest + 3] = src[idx_src + 3];     \
}                                            \

typedef struct {
  uint4 buf[64];
} T_Block;

void salsa(__private const uint4 Bx[4], __private uint4 B[4]);
void BlockMix(__private T_Block* B);

void salsa(__private const uint4 Bx[4], __private uint4 B[4])
{
  __private uint4 w[4];

  w[0] = (B[0] ^= Bx[0]);
  w[1] = (B[1] ^= Bx[1]);
  w[2] = (B[2] ^= Bx[2]);
  w[3] = (B[3] ^= Bx[3]);

  reorder(w);

  /* Rounds 1 + 2 */
  w[0] ^= rotate(w[3]     +w[2]     , 7U);
  w[1] ^= rotate(w[0]     +w[3]     , 9U);
  w[2] ^= rotate(w[1]     +w[0]     ,13U);
  w[3] ^= rotate(w[2]     +w[1]     ,18U);
  w[2] ^= rotate(w[3].wxyz+w[0].zwxy, 7U);
  w[1] ^= rotate(w[2].wxyz+w[3].zwxy, 9U);
  w[0] ^= rotate(w[1].wxyz+w[2].zwxy,13U);
  w[3] ^= rotate(w[0].wxyz+w[1].zwxy,18U);

  /* Rounds 3 + 4 */
  w[0] ^= rotate(w[3]     +w[2]     , 7U);
  w[1] ^= rotate(w[0]     +w[3]     , 9U);
  w[2] ^= rotate(w[1]     +w[0]     ,13U);
  w[3] ^= rotate(w[2]     +w[1]     ,18U);
  w[2] ^= rotate(w[3].wxyz+w[0].zwxy, 7U);
  w[1] ^= rotate(w[2].wxyz+w[3].zwxy, 9U);
  w[0] ^= rotate(w[1].wxyz+w[2].zwxy,13U);
  w[3] ^= rotate(w[0].wxyz+w[1].zwxy,18U);

  /* Rounds 5 + 6 */
  w[0] ^= rotate(w[3]     +w[2]     , 7U);
  w[1] ^= rotate(w[0]     +w[3]     , 9U);
  w[2] ^= rotate(w[1]     +w[0]     ,13U);
  w[3] ^= rotate(w[2]     +w[1]     ,18U);
  w[2] ^= rotate(w[3].wxyz+w[0].zwxy, 7U);
  w[1] ^= rotate(w[2].wxyz+w[3].zwxy, 9U);
  w[0] ^= rotate(w[1].wxyz+w[2].zwxy,13U);
  w[3] ^= rotate(w[0].wxyz+w[1].zwxy,18U);

  /* Rounds 7 + 8 */
  w[0] ^= rotate(w[3]     +w[2]     , 7U);
  w[1] ^= rotate(w[0]     +w[3]     , 9U);
  w[2] ^= rotate(w[1]     +w[0]     ,13U);
  w[3] ^= rotate(w[2]     +w[1]     ,18U);
  w[2] ^= rotate(w[3].wxyz+w[0].zwxy, 7U);
  w[1] ^= rotate(w[2].wxyz+w[3].zwxy, 9U);
  w[0] ^= rotate(w[1].wxyz+w[2].zwxy,13U);
  w[3] ^= rotate(w[0].wxyz+w[1].zwxy,18U);

  undo_reorder(w);

  B[0] += w[0];
  B[1] += w[1];
  B[2] += w[2];
  B[3] += w[3];
}

void BlockMix(__private T_Block* B)
{
  salsa(&B->buf[60], &B->buf[0 ]);
  salsa(&B->buf[0 ], &B->buf[4 ]);
  salsa(&B->buf[4 ], &B->buf[8 ]);
  salsa(&B->buf[8 ], &B->buf[12]);
  salsa(&B->buf[12], &B->buf[16]);
  salsa(&B->buf[16], &B->buf[20]);
  salsa(&B->buf[20], &B->buf[24]);
  salsa(&B->buf[24], &B->buf[28]);
  salsa(&B->buf[28], &B->buf[32]);
  salsa(&B->buf[32], &B->buf[36]);
  salsa(&B->buf[36], &B->buf[40]);
  salsa(&B->buf[40], &B->buf[44]);
  salsa(&B->buf[44], &B->buf[48]);
  salsa(&B->buf[48], &B->buf[52]);
  salsa(&B->buf[52], &B->buf[56]);
  salsa(&B->buf[56], &B->buf[60]);

  __private T_Block Y = *B;

  copy64(B->buf,  0, Y.buf,  0);
  copy64(B->buf,  4, Y.buf,  8);
  copy64(B->buf,  8, Y.buf, 16);
  copy64(B->buf, 12, Y.buf, 24);
  copy64(B->buf, 16, Y.buf, 32);
  copy64(B->buf, 20, Y.buf, 40);
  copy64(B->buf, 24, Y.buf, 48);
  copy64(B->buf, 28, Y.buf, 56);
  copy64(B->buf, 32, Y.buf,  4);
  copy64(B->buf, 36, Y.buf, 12);
  copy64(B->buf, 40, Y.buf, 20);
  copy64(B->buf, 44, Y.buf, 28);
  copy64(B->buf, 48, Y.buf, 36);
  copy64(B->buf, 52, Y.buf, 44);
  copy64(B->buf, 56, Y.buf, 52);
  copy64(B->buf, 60, Y.buf, 60);
}

__kernel void ROMix(__global T_Block* Xs,
                    __global T_Block* Vs,
                    __global T_Block* outputs
                   )
{
  __private unsigned int id = get_global_id(0);
  __private T_Block X = Xs[id];
  __private int i, j, k, v_idx;

  __private int v_idx_offset = id * iterations;

  for (i = 0, v_idx = v_idx_offset; i < iterations; ++i, ++v_idx)
  {
    Vs[v_idx] = X;
    BlockMix(&X);
  }

  for (i = 0; i < iterations; ++i)
  {
    j = X.buf[60].x & (iterations - 1);
    v_idx = v_idx_offset + j;
    for (k = 0; k < 64; ++k)
    {
      X.buf[k] ^= Vs[v_idx].buf[k];
    }
    BlockMix(&X);
  }

  __global T_Block* output = &outputs[id];
  for (i = 0; i < 64; ++i)
  {
    output->buf[i] = X.buf[i];
  }
}