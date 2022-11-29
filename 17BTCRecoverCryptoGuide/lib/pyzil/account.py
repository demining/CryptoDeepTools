# -*- coding: utf-8 -*-
# Zilliqa Python Library
# Copyright (C) 2019  Gully Chen
# MIT License
"""
pyzil.account
~~~~~~~~~~~~

Zilliqa Account

:copyright: (c) 2019 by Gully Chen.
:license: MIT License, see LICENSE for more details.
"""

from typing import List, Union, Optional
from collections import namedtuple
from concurrent import futures
from concurrent.futures import ThreadPoolExecutor

from lib.pyzil.crypto import zilkey


BatchTransfer = namedtuple("BatchTransfer", ["to_addr", "zils"])


class Account:
    """Zilliqa Account"""

    _min_gas = None

    def __init__(self, address=None, public_key=None, private_key=None):
        if address is None and public_key is None and private_key is None:
            raise ValueError("missing argument")

        self.address = None
        if address is not None:
            address = zilkey.to_valid_address(address)
            assert address, "invalid address"
            self.address = address

        self.zil_key = None
        if public_key or private_key:
            self.zil_key = zilkey.ZilKey(public_key=public_key, private_key=private_key)

            if self.address is not None:
                if self.zil_key.address != self.address:
                    raise ValueError("mismatch address and zilkey")
            self.address = self.zil_key.address

        self.last_params = None
        self.last_txn_info = None
        self.last_txn_details = None

    def __str__(self):
        return "<Account: {}>".format(self.address)

    def __eq__(self, other):
        if self.zil_key is None and other.zil_key is None:
            return self.address == other.address

        if self.zil_key is None or other.zil_key is None:
            return False

        return self.zil_key == other.zil_key

    @property
    def address0x(self) -> str:
        return "0x" + self.address

    @property
    def checksum_address(self) -> str:
        """Return str of checksum address."""
        return zilkey.to_checksum_address(self.address)

    @property
    def bech32_address(self) -> str:
        """Return str of bech32 address."""
        return zilkey.to_bech32_address(self.address)


