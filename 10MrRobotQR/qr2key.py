#!/usr/bin/env python3

# Copyright (c) 2018 Marco Zollinger
# Licensed under MIT, the license file shall be included in all copies

from PIL import Image
from pycoin.symbols.btc import network
import requests
import zbarlight
import glob
import re

counter_images = 0
counter_qrcodes = 0
counter_privkeys = 0

with open('./keylist.txt', 'a') as key_list:
    print("scanning images for QR codes with bitcoin private keys...")
    for image_path in glob.glob('./qrbooty/*.*'):
        with open(image_path, 'rb') as image_file:
            counter_images += 1
            try:
                image = Image.open(image_file).convert('RGBA')
                image.load()
            except (OSError, IOError, ValueError, AttributeError) as e:
                print("Invalid image: {}".format(e))
                continue
            try:
                codes = zbarlight.scan_codes('qrcode', image)
            except SyntaxError as e:
                print("Could not decode: {}".format(e))
                continue
            for code in (codes or []):
                code = code.decode('ascii', errors='replace')
                counter_qrcodes += 1
                if ((re.match(r'5(H|J|K).{49}$', code) or      # match private key (WIF, uncompressed pubkey) with length 51
                   re.match(r'(K|L).{51}$', code) or           # match private key (WIF, compressed pubkey) with length 52
                   re.match(r'S(.{21}|.{29})$', code)) and     # match mini private key with length 22 (deprecated) or 30
                   re.match(r'[1-9A-HJ-NP-Za-km-z]+', code)):  # match only BASE58
                    counter_privkeys += 1
                    try:
                        key = network.parse.private_key(code)
                        req = requests.get('https://blockchain.info/q/addressbalance/{}?confirmations=1'.format(key.address()))
                        key_list.write(code + '\n')
                        print("booty found!: {} satoshi contained in key {}".format(req.json(), code))
                    except (AssertionError, AttributeError, IndexError, ValueError) as e:
                        print("Address lookup error: {}".format(e))
    print("qr2key done. scanned {} images, with {} QR codes containing {} bitcoin private keys".format(counter_images, counter_qrcodes, counter_privkeys))
    print("saved private keys to keylist.txt")
