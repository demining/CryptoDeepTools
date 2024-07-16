from binascii import hexlify
from io import BytesIO

from sign import (
    hash160,
    h160_to_p2pkh_address,
    h160_to_p2sh_address,
)


class Script:

    def __init__(self, elements):
        self.elements = elements

    def __repr__(self):
        result = ''
        for element in self.elements:
            if type(element) == int:
                result += '{} '.format(OP_CODES[element])
            else:
                result += '{} '.format(hexlify(element))
        return result

    @classmethod
    def parse(cls, binary):
        s = BytesIO(binary)
        elements = []
        current = s.read(1)
        while current != b'':
            op_code = current[0]
            if op_code > 0 and op_code <= 75:
                # we have an element
                elements.append(s.read(op_code))
            else:
                elements.append(op_code)
            current = s.read(1)
        return cls(elements)

    def type(self):
        '''Some standard pay-to type scripts.'''
        if len(self.elements) == 0:
            return 'blank'
        elif self.elements[0] == 0x76 \
            and self.elements[1] == 0xa9 \
            and type(self.elements[2]) == bytes \
            and len(self.elements[2]) == 0x14 \
            and self.elements[3] == 0x88 \
            and self.elements[4] == 0xac:
            # p2pkh:
            # OP_DUP OP_HASH160 <20-byte hash> <OP_EQUALVERIFY> <OP_CHECKSIG>
            return 'p2pkh'
        elif self.elements[0] == 0xa9 \
            and type(self.elements[1]) == bytes \
            and len(self.elements[1]) == 0x14 \
            and self.elements[-1] == 0x87:
            # p2sh:
            # OP_HASH160 <20-byte hash> <OP_EQUAL>
            return 'p2sh'
        elif type(self.elements[0]) == bytes \
            and len(self.elements[0]) in range(0x40, 0x50) \
            and type(self.elements[1]) == bytes \
            and len(self.elements[1]) in (0x21, 0x41):
            # p2pkh scriptSig:
            # <signature> <pubkey>
            return 'p2pkh sig'
        elif len(self.elements) > 1 \
            and type(self.elements[1]) == bytes \
            and len(self.elements[1]) in range(0x40, 0x50) \
            and type(self.elements[-1]) == bytes \
            and self.elements[-1][-1] == 0xae:
            # HACK: assumes p2sh is a multisig
            # p2sh multisig:
            # <x> <sig1> ... <sigm> <redeemscript ends with OP_CHECKMULTISIG>
            return 'p2sh sig'
        elif len(self.elements) == 1 \
            and type(self.elements[0]) == bytes \
            and len(self.elements[0]) == 0x16:
            # HACK: assumes p2sh can be p2sh-p2pkh
            return 'p2sh sig'
        else:
            return 'unknown: {}'.format(self)

    def serialize(self):
        result = b''
        for element in self.elements:
            if type(element) == int:
                result += bytes([element])
            else:
                result += bytes([len(element)]) + element
        return result

    def hash160(self):
        return hash160(self.serialize())

    def der_signature(self, index=0):
        '''index isn't used for p2pkh, for p2sh, means one of m sigs'''
        sig_type = self.type()
        if sig_type == 'p2pkh sig':
            return self.elements[0]
        elif sig_type == 'p2sh sig':
            return self.elements[index+1]
        else:
            raise RuntimeError('script type needs to be p2pkh sig or p2sh sig')

    def sec_pubkey(self, index=0):
        '''index isn't used for p2pkh, for p2sh, means one of n pubkeys'''
        sig_type = self.type()
        if sig_type == 'p2pkh sig':
            return self.elements[1]
        elif sig_type == 'p2sh sig':
            if len(self.elements) > 2:
                # HACK: assumes p2sh is a multisig
                redeem_script = Script.parse(self.elements[-1])
                return redeem_script.elements[index+1]
            else:
                return None

    def num_sigs_required(self):
        '''Returns the number of sigs required. For p2pkh, it's always 1,
        For p2sh multisig, it's the m in the m of n'''
        sig_type = self.type()
        if sig_type == 'p2pkh sig':
            return 1
        elif sig_type == 'p2sh sig':
            if len(self.elements) > 2:
                op_code = OP_CODES[self.elements[-1][0]]
                return int(op_code[3:])
            else:
                return 1
        else:
            raise RuntimeError('script type needs to be p2pkh sig or p2sh sig')

    def redeem_script(self):
        sig_type = self.type()
        if sig_type == 'p2sh sig':
            return self.elements[-1]
        else:
            return

    def address(self, prefix=b'\x00'):
        '''Returns the address corresponding to the script'''
        sig_type = self.type()
        if sig_type == 'p2pkh':
            # hash160 is the 3rd element
            h160 = self.elements[2]
            # convert to p2pkh address using h160_to_p2pkh_address
            # (remember testnet)
            return h160_to_p2pkh_address(h160, prefix)
        elif sig_type == 'p2sh':
            # hash160 is the 2nd element
            h160 = self.elements[1]
            # convert to p2sh address using h160_to_p2sh_address
            # (remember testnet)
            return h160_to_p2sh_address(h160, prefix)


OP_CODES = {
  0: 'OP_0',
  76: 'OP_PUSHDATA1',
  77: 'OP_PUSHDATA2',
  78: 'OP_PUSHDATA4',
  79: 'OP_1NEGATE',
  80: 'OP_RESERVED',
  81: 'OP_1',
  82: 'OP_2',
  83: 'OP_3',
  84: 'OP_4',
  85: 'OP_5',
  86: 'OP_6',
  87: 'OP_7',
  88: 'OP_8',
  89: 'OP_9',
  90: 'OP_10',
  91: 'OP_11',
  92: 'OP_12',
  93: 'OP_13',
  94: 'OP_14',
  95: 'OP_15',
  96: 'OP_16',
  97: 'OP_NOP',
  98: 'OP_VER',
  99: 'OP_IF',
  100: 'OP_NOTIF',
  101: 'OP_VERIF',
  102: 'OP_VERNOTIF',
  103: 'OP_ELSE',
  104: 'OP_ENDIF',
  105: 'OP_VERIFY',
  106: 'OP_RETURN',
  107: 'OP_TOALTSTACK',
  108: 'OP_FROMALTSTACK',
  109: 'OP_2DROP',
  110: 'OP_2DUP',
  111: 'OP_3DUP',
  112: 'OP_2OVER',
  113: 'OP_2ROT',
  114: 'OP_2SWAP',
  115: 'OP_IFDUP',
  116: 'OP_DEPTH',
  117: 'OP_DROP',
  118: 'OP_DUP',
  119: 'OP_NIP',
  120: 'OP_OVER',
  121: 'OP_PICK',
  122: 'OP_ROLL',
  123: 'OP_ROT',
  124: 'OP_SWAP',
  125: 'OP_TUCK',
  126: 'OP_CAT',
  127: 'OP_SUBSTR',
  128: 'OP_LEFT',
  129: 'OP_RIGHT',
  130: 'OP_SIZE',
  131: 'OP_INVERT',
  132: 'OP_AND',
  133: 'OP_OR',
  134: 'OP_XOR',
  135: 'OP_EQUAL',
  136: 'OP_EQUALVERIFY',
  137: 'OP_RESERVED1',
  138: 'OP_RESERVED2',
  139: 'OP_1ADD',
  140: 'OP_1SUB',
  141: 'OP_2MUL',
  142: 'OP_2DIV',
  143: 'OP_NEGATE',
  144: 'OP_ABS',
  145: 'OP_NOT',
  146: 'OP_0NOTEQUAL',
  147: 'OP_ADD',
  148: 'OP_SUB',
  149: 'OP_MUL',
  150: 'OP_DIV',
  151: 'OP_MOD',
  152: 'OP_LSHIFT',
  153: 'OP_RSHIFT',
  154: 'OP_BOOLAND',
  155: 'OP_BOOLOR',
  156: 'OP_NUMEQUAL',
  157: 'OP_NUMEQUALVERIFY',
  158: 'OP_NUMNOTEQUAL',
  159: 'OP_LESSTHAN',
  160: 'OP_GREATERTHAN',
  161: 'OP_LESSTHANOREQUAL',
  162: 'OP_GREATERTHANOREQUAL',
  163: 'OP_MIN',
  164: 'OP_MAX',
  165: 'OP_WITHIN',
  166: 'OP_RIPEMD160',
  167: 'OP_SHA1',
  168: 'OP_SHA256',
  169: 'OP_HASH160',
  170: 'OP_HASH256',
  171: 'OP_CODESEPARATOR',
  172: 'OP_CHECKSIG',
  173: 'OP_CHECKSIGVERIFY',
  174: 'OP_CHECKMULTISIG',
  175: 'OP_CHECKMULTISIGVERIFY',
  176: 'OP_NOP1',
  177: 'OP_CHECKLOCKTIMEVERIFY',
  178: 'OP_CHECKSEQUENCEVERIFY',
  179: 'OP_NOP4',
  180: 'OP_NOP5',
  181: 'OP_NOP6',
  182: 'OP_NOP7',
  183: 'OP_NOP8',
  184: 'OP_NOP9',
  185: 'OP_NOP10',
  252: 'OP_NULLDATA',
  253: 'OP_PUBKEYHASH',
  254: 'OP_PUBKEY',
  255: 'OP_INVALIDOPCODE'
}

OP_0 = 0
OP_PUSHDATA1 = 76
OP_PUSHDATA2 = 77
OP_PUSHDATA4 = 78
OP_1NEGATE = 79
OP_RESERVED = 80
def OP_N(n):
    if n == 0:
        return OP_0
    if n <= 16:
        return 80+n
    raise RuntimeError("Wrong OP code")
OP_1 = 81
OP_2 = 82
OP_3 = 83
OP_4 = 84
OP_5 = 85
OP_6 = 86
OP_7 = 87
OP_8 = 88
OP_9 = 89
OP_10 = 90
OP_11 = 91
OP_12 = 92
OP_13 = 93
OP_14 = 94
OP_15 = 95
OP_16 = 96
OP_NOP = 97
OP_VER = 98
OP_IF = 99
OP_NOTIF = 100
OP_VERIF = 101
OP_VERNOTIF = 102
OP_ELSE = 103
OP_ENDIF = 104
OP_VERIFY = 105
OP_RETURN = 106
OP_TOALTSTACK = 107
OP_FROMALTSTACK = 108
OP_2DROP = 109
OP_2DUP = 110
OP_3DUP = 111
OP_2OVER = 112
OP_2ROT = 113
OP_2SWAP = 114
OP_IFDUP = 115
OP_DEPTH = 116
OP_DROP = 117
OP_DUP = 118
OP_NIP = 119
OP_OVER = 120
OP_PICK = 121
OP_ROLL = 122
OP_ROT = 123
OP_SWAP = 124
OP_TUCK = 125
OP_CAT = 126
OP_SUBSTR = 127
OP_LEFT = 128
OP_RIGHT = 129
OP_SIZE = 130
OP_INVERT = 131
OP_AND = 132
OP_OR = 133
OP_XOR = 134
OP_EQUAL = 135
OP_EQUALVERIFY = 136
OP_RESERVED1 = 137
OP_RESERVED2 = 138
OP_1ADD = 139
OP_1SUB = 140
OP_2MUL = 141
OP_2DIV = 142
OP_NEGATE = 143
OP_ABS = 144
OP_NOT = 145
OP_0NOTEQUAL = 146
OP_ADD = 147
OP_SUB = 148
OP_MUL = 149
OP_DIV = 150
OP_MOD = 151
OP_LSHIFT = 152
OP_RSHIFT = 153
OP_BOOLAND = 154
OP_BOOLOR = 155
OP_NUMEQUAL = 156
OP_NUMEQUALVERIFY = 157
OP_NUMNOTEQUAL = 158
OP_LESSTHAN = 159
OP_GREATERTHAN = 160
OP_LESSTHANOREQUAL = 161
OP_GREATERTHANOREQUAL = 162
OP_MIN = 163
OP_MAX = 164
OP_WITHIN = 165
OP_RIPEMD160 = 166
OP_SHA1 = 167
OP_SHA256 = 168
OP_HASH160 = 169
OP_HASH256 = 170
OP_CODESEPARATOR = 171
OP_CHECKSIG = 172
OP_CHECKSIGVERIFY = 173
OP_CHECKMULTISIG = 174
OP_CHECKMULTISIGVERIFY = 175
OP_NOP1 = 176
OP_CHECKLOCKTIMEVERIFY = 177
OP_CHECKSEQUENCEVERIFY = 178
OP_NOP4 = 179
OP_NOP5 = 180
OP_NOP6 = 181
OP_NOP7 = 182
OP_NOP8 = 183
OP_NOP9 = 184
OP_NOP10 = 185
OP_NULLDATA = 252
OP_PUBKEYHASH = 253
OP_PUBKEY = 254
OP_INVALIDOPCODE = 255
