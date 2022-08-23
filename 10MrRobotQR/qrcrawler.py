#!/usr/bin/env python3

# Copyright (c) 2018 Marco Zollinger
# Licensed under MIT, the license file shall be included in all copies

from icrawler.builtin import GoogleImageCrawler, BingImageCrawler, BaiduImageCrawler
import sys
import time

keywords = sys.argv[1]
print('crawling search engines for images with description %s...' %keywords)
time.sleep(2)

google_crawler = GoogleImageCrawler(parser_threads=4, downloader_threads=8, storage={'root_dir': 'qrbooty/google'})
bing_crawler = BingImageCrawler(parser_threads=4, downloader_threads=8, storage={'root_dir': 'qrbooty/bing'})
baidu_crawler = BaiduImageCrawler(parser_threads=4, downloader_threads=8, storage={'root_dir': 'qrbooty/baidu'})

google_crawler.crawl(keyword=keywords, offset=0, max_num=1000)
bing_crawler.crawl(keyword=keywords, offset=0, max_num=1000)
baidu_crawler.crawl(keyword=keywords, offset=0, max_num=1000)

print('qrcrawler done.\n')
