# -*- coding: utf-8 -*-
# Zilliqa Python Library
# Copyright (C) 2019  Gully Chen
# MIT License
"""
pyzil.crypto.zilkey
~~~~~~~~~~~~

Zilliqa Key

:copyright: (c) 2019 by Gully Chen.
:license: MIT License, see LICENSE for more details.
"""

from typing import Optional
from collections import namedtuple

from lib.pyzil.crypto import bech32
from lib.pyzil.common import utils

# zilliqa address takes the last 20 bytes from hash digest of public key
ADDRESS_NUM_BYTES = 20
ADDRESS_STR_LENGTH = ADDRESS_NUM_BYTES * 2


def is_valid_address(address: str) -> bool:
    """Return True if address is valid."""
    if address.lower().startswith("0x"):
        address = address[2:]
    if len(address) != ADDRESS_STR_LENGTH:
        return False
    # noinspection PyBroadException
    try:
        utils.hex_str_to_int(address)
    except Exception:
        return False
    return True


def to_valid_address(address: str) -> Optional[str]:
    """Return lower case address if address is valid."""
    if is_bech32_address(address):
        address = from_bech32_address(address)

    if not is_valid_address(address):
        return None
    address = address.lower()
    if address.startswith("0x"):
        address = address[2:]
    return address


def to_checksum_address(address: str, prefix="0x") -> Optional[str]:
    """Convert address to checksum address."""
    if is_bech32_address(address):
        address = from_bech32_address(address)

    if not is_valid_address(address):
        return None

    address = address.lower().replace("0x", "")
    address_bytes = utils.hex_str_to_bytes(address)
    v = utils.bytes_to_int(tools.hash256_bytes(address_bytes))

    checksum_address = prefix
    for i, c in enumerate(address):
        if not c.isdigit():
            if v & (1 << 255 - 6 * i):
                c = c.upper()
            else:
                c = c.lower()
        checksum_address += c

    return checksum_address


def is_valid_checksum_address(address: str) -> bool:
    """Return True if address is valid checksum address."""
    if not is_valid_address(address):
        return False
    return to_checksum_address(address) == address


def to_bech32_address(address: str) -> Optional[str]:
    """Convert 20 bytes address to bech32 address."""
    if not is_valid_address(address):
        return None
    return bech32.encode("zil", utils.hex_str_to_bytes(address))


def from_bech32_address(bech32_address: str) -> Optional[str]:
    """Convert bech32 address to 20 bytes address."""
    data = bech32.decode("zil", bech32_address)
    if data is None:
        return None
    address = utils.bytes_to_hex_str(bytes(data))
    return to_valid_address(address)


def is_bech32_address(bech32_address: str) -> bool:
    """Return True if address is valid bech32 address."""
    if not bech32_address.startswith("zil1"):
        return False
    return from_bech32_address(bech32_address) is not None


def normalise_address(address: str) -> str:
    """Check address format, return checksum address."""
    if is_bech32_address(address):
        address = from_bech32_address(address)
        if not address:
            raise ValueError("Invalid address format")
        return to_checksum_address(address)

    if not is_valid_checksum_address(address):
        raise ValueError("Invalid address format")
    return address


KeyPair = namedtuple("KeyPair", ["public", "private"])

