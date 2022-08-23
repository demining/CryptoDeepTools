#!/bin/bash

# Copyright (c) 2018 Marco Zollinger
# Licensed under MIT, the license file shall be included in all copies

# crawling search engines for images matching description
./qrcrawler.py "$1"

for pathname in ./qrbooty/google/*; do filename=$(basename "$pathname"); mv "$pathname" "./qrbooty/google_$filename"; done
for pathname in ./qrbooty/bing/*; do filename=$(basename "$pathname"); mv "$pathname" "./qrbooty/bing_$filename"; done
for pathname in ./qrbooty/baidu/*; do filename=$(basename "$pathname"); mv "$pathname" "./qrbooty/baidu_$filename"; done

# read private keys from QR codes in images
./qr2key.py

# remove duplicates
sort keylist.txt | uniq > keylist_unique.txt
