#!/usr/bin/env python

# extract-metamask-data.py -- Metamask data extractor
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

sys.path.append('../')
from lib.ccl_chrome_indexeddb import ccl_leveldb

if len(sys.argv) != 2 or sys.argv[1].startswith("-"):
    print("usage:", prog, "METAMASK_EXTENSION_FOLDER", file=sys.stderr)
    sys.exit(2)

wallet_folder = sys.argv[1]

leveldb_records = ccl_leveldb.RawLevelDb(wallet_folder)

walletdata_list = []
for record in leveldb_records.iterate_records_raw():
    #print(record)
    #For LDB files and Ronin wallet log files
    if b"vault" in record.key or b"encryptedVault" in record.key:
        data = record.value.decode("utf-8", "ignore").replace("\\", "")
        if "salt" in data:
            if data in walletdata_list:
                continue

            walletdata_list.append(data[1:-1])


    if b"data" in record.key:
        data = record.value.decode("utf-8", "ignore").replace("\\", "")
        if "salt" in data:
            walletStartText = "vault"

            wallet_data_start = data.lower().find(walletStartText)

            wallet_data_trimmed = data[wallet_data_start:]

            wallet_data_start = wallet_data_trimmed.find("data")
            wallet_data_trimmed = wallet_data_trimmed[wallet_data_start - 2:]

            wallet_data_end = wallet_data_trimmed.find("}")
            wallet_data = wallet_data_trimmed[:wallet_data_end + 1]

            if wallet_data in walletdata_list:
                continue

            walletdata_list.append(wallet_data)

for data in walletdata_list:
    if walletdata_list.index(data) == (len(walletdata_list)-1):
        print("===== Current Vault Data =====\n")
    else:
        print("===== (Likely) Old Vault Data =====\n")
    print(data)
    print()





