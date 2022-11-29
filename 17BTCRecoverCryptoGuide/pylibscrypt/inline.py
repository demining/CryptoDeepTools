# Copyright (c) 2014-2015, Jan Varho
#
# Permission to use, copy, modify, and/or distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

"""Inlines the salsa20 core lines into salsa20_8"""

of = open('pylibscrypt/pypyscrypt_inline.py', 'w')
assert of

def indent(line):
    i = 0
    while i < len(line) and line[i] == ' ':
        i += 1
    return i

with open('pylibscrypt/pypyscrypt.py', 'r') as f:
    in_loop = False
    loop_indent = 0
    lc = 0
    rl = []
    skipping = False
    for line in f:
        lc += 1
        if lc == 1:
            of.write('# Automatically generated file, see inline.py\n\n')
        i = indent(line)
        if line[i:].startswith('def R('):
            skipping = True
        elif line[i:].startswith('def array_overwrite('):
            skipping = True
        elif skipping:
            if line[i:].startswith('def'):
                of.write(line)
                skipping = False

        elif line[i:].startswith('R('):
            parts = line.split(';')
            rl += parts
            if len(rl) == 32:
                # Interleave to reduce dependencies for pypy
                rl1 = rl[:16]
                rl2 = rl[16:]
                rl1 = rl1[0::4] + rl1[1::4] + rl1[2::4] + rl1[3::4]
                rl2 = rl2[0::4] + rl2[1::4] + rl2[2::4] + rl2[3::4]
                rl = rl1 + rl2
                for p, q in zip(rl[::2], rl[1::2]):
                    pvals = p.split(',')[1:]
                    pvals = [int(v.strip(' )\n')) for v in pvals]
                    qvals = q.split(',')[1:]
                    qvals = [int(v.strip(' )\n')) for v in qvals]
                    of.write(' '*i)
                    of.write('a = (x[%d]+x[%d]) & 0xffffffff\n' %
                             (pvals[1], pvals[2]))
                    of.write(' '*i)
                    of.write('b = (x[%d]+x[%d]) & 0xffffffff\n' %
                             (qvals[1], qvals[2]))
                    of.write(' '*i)
                    of.write('x[%d] ^= (a << %d) | (a >> %d)\n' %
                             (pvals[0], pvals[3], 32 - pvals[3]))
                    of.write(' '*i)
                    of.write('x[%d] ^= (b << %d) | (b >> %d)\n' %
                             (qvals[0], qvals[3], 32 - qvals[3]))

        elif line[i:].startswith('array_overwrite('):
            vals = line.split(',')
            vals[0] = vals[0].split('(')[1]
            vals[-1] = vals[-1].split(')')[0]
            vals = [v.strip() for v in vals]
            assert len(vals) == 5
            of.write(' '*i)
            of.write(vals[2] + '[' + vals[3] + ':(' + vals[3] + ')+(' +
                     vals[4] + ')] = ' + vals[0] + '[' + vals[1] + ':(' +
                     vals[1] + ')+(' + vals[4] + ')]\n')

        else:
            of.write(line)

