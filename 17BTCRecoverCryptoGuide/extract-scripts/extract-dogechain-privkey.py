#!/usr/bin/env python

# extract-dogechain-privkey.py -- Dogechain.info data extractor
# Copyright (C) 2021 Stephen Rothery

#
# This file is part of btcrecover.
#
# btcrecover is free software: you can redistribute it and/or
# modify it under the terms of the GNU General Public License
# as published by the Free Software Foundation; either version
# 2 of the License, or (at your option) any later version.
#
# btcrecover is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see http://www.gnu.org/licenses/

import sys, os.path, base64, json, zlib, struct

prog = os.path.basename(sys.argv[0])

if len(sys.argv) != 2 or sys.argv[1].startswith("-"):
    print("usage:", prog, "DOGECHAIN_WALLET_FILE", file=sys.stderr)
    sys.exit(2)

wallet_filename = sys.argv[1]
data = open(wallet_filename, "rb").read(64 * 2**20)  # up to 64M, typical size is a few k

#  dogechain files  are JSON encoded; try to parse it as such
data = json.loads(data)

payload = base64.b64decode(data["payload"])
iter_count = data["pbkdf2_iterations"]
salt = base64.b64decode(data["salt"])

print("Dogechain first 16 encrypted bytes, iv, and iter_count in base64:", file=sys.stderr)

bytes = b"dc:" + struct.pack("< 32s 16s I", payload[0:32], salt, iter_count)
crc_bytes = struct.pack("<I", zlib.crc32(bytes) & 0xffffffff)

print(base64.b64encode(bytes + crc_bytes).decode())
