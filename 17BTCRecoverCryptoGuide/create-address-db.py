#!/usr/bin/env python

# create-address-db.py -- Bitcoin address database creator for seedrecover
# Copyright (C) 2017 Christopher Gurnee
#               2021 Stephen Rothery
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

# If you find this program helpful, please consider a small
# donation to the developer at the following Bitcoin address:
#
#           3Au8ZodNHPei7MQiSVAWb7NB2yqsb48GW4
#
#                      Thank You!

import compatibility_check

from btcrecover import addressset
import sys,argparse, atexit
from os import path

__version__ =  "1.11.0-CryptoGuide"

if __name__ == "__main__":
    print("Starting CreateAddressDB", __version__)

    parser = argparse.ArgumentParser()
    parser.add_argument("--datadir",    metavar="DIRECTORY", help="the Bitcoin data directory (default: auto)")
    parser.add_argument("--update",     action="store_true", help="update an existing address database")
    parser.add_argument("--force",      action="store_true", help="overwrite any existing address database")
    parser.add_argument("--no-pause",   action="store_true", default=len(sys.argv)>1, help="never pause before exiting (default: auto)")
    parser.add_argument("--no-progress",action="store_true", default=not sys.stdout.isatty(), help="disable the progress bar (shows cur. blockfile instead)")
    parser.add_argument("--version", "-v", action="version", version="%(prog)s " + addressset.__version__)
    parser.add_argument("--dbyolo",     action="store_true", help="Disable checking whether input blockchain is compatible with this tool...")
    parser.add_argument("--addrs_to_text", action="store_true", help="Append all found addresses to address.txt in the working directory while creating addressDB (Useful for debugging, will slow down AddressDB creation and produce a really big file, about 4x the size of the required AddressDB, about 32GB as of Jan 2020)")
    parser.add_argument("--dblength", default=31, help="The Maximum Number of Addresses the AddressDB can old, as a power of 2. Default = 31 ==> 2^31 Addresses. (Enough for BTC Blockchain @ April 2021", type=int)
    parser.add_argument("--first-block-file", default=0, help="Start creating the AddressDB from a specific block file (Useful to keep DB size down)", type=int)
    parser.add_argument("--blocks-startdate", default="2009-01-01", help="Ignore blocks earlier than the given date, format must be YYYY-MM-DD (Useful to keep DB size down)")
    parser.add_argument("--blocks-enddate", default="3000-12-31", help="Ignore blocks later than the given date, format must be YYYY-MM-DD (Useful to keep DB size down)")
    parser.add_argument("--dbfilename",   nargs="?", default="addresses.db", help="the name of the database file (default: addresses.db)")
    parser.add_argument("--inputlistfile", help="The file that contains a list of addresses that will be used to create the addressDB file")
    parser.add_argument("--multifileinputlist", action="store_true", help="Whether to try and load multiple sequential input list files (incrementing the last 4 letters of file name from 0 to 9998)")

    # Optional bash tab completion support
    try:
        import argcomplete
        argcomplete.autocomplete(parser)
    except ImportError:
        pass

    args = parser.parse_args()

    if not args.no_pause:
        atexit.register(lambda: input("\nPress Enter to exit ..."))

    if not args.update and not args.force and path.exists(args.dbfilename):
        sys.exit("Address database file already exists (use --update to update or --force to overwrite)")

    if args.datadir:
        blockdir = args.datadir
    elif sys.platform == "win32":
        blockdir = path.expandvars(r"%APPDATA%\Bitcoin")
    elif sys.platform.startswith("linux"):
        blockdir = path.expanduser("~/.bitcoin")
    elif sys.platform == "darwin":
        blockdir = path.expanduser("~/Library/Application Support/Bitcoin")
    else:
        sys.exit("Can't automatically determine Bitcoin data directory (use --datadir)")
    blockdir = path.join(blockdir, "blocks")

    addressset.create_address_db(args.dbfilename, blockdir, args.dblength, args.blocks_startdate, args.blocks_enddate, args.first_block_file, args.dbyolo, args.addrs_to_text, args.update, progress_bar=not args.no_progress, addresslistfile = args.inputlistfile, multiFile = args.multifileinputlist)
