# -*- coding: utf-8 -*-
# Zilliqa Python Library
# Copyright (C) 2019  Gully Chen
# MIT License
"""
pyzil.common.utils
~~~~~~~~~~~~

common utils

:copyright: (c) 2019 by Gully Chen.
:license: MIT License, see LICENSE for more details.
"""

import string
import secrets
from typing import Union, Optional


TOKEN_NUM_BYTES = 32
TOKEN_STR_LENGTH = TOKEN_NUM_BYTES * 2


def randbelow(exclusive_upper_bound: int) -> int:
    """Return a random int in the range [0, n)."""
    return secrets.randbelow(exclusive_upper_bound)


def rand_string(n_len: int) -> str:
    """Return a random string containing n_len chars."""
    alphabet = string.ascii_letters + string.digits
    return "".join(secrets.choice(alphabet) for _ in range(n_len))


def rand_bytes(n_bytes: int=TOKEN_NUM_BYTES) -> bytes:
    """Return a random binary containing n_bytes bytes."""
    return secrets.token_bytes(n_bytes)


def rand_hex_str(n_len: int=TOKEN_STR_LENGTH, prefix: str="") -> str:
    """Return a random string containing n_len chars."""
    return prefix + (secrets.token_hex(n_len // 2 + 1)[:n_len])


def hex_str_to_bytes(str_hex: str) -> bytes:
    """Convert hex string to bytes."""
    str_hex = str_hex.lower()
    if str_hex.startswith("0x"):
        str_hex = str_hex[2:]
    if len(str_hex) & 1:
        str_hex = "0" + str_hex
    return bytes.fromhex(str_hex)


def bytes_to_hex_str(bytes_hex: bytes, prefix="") -> str:
    """Convert bytes to hex string."""
    return prefix + bytes_hex.hex()


def int_to_bytes(i: int, n_bytes: Optional[int]=TOKEN_NUM_BYTES,
                 byteorder="big") -> bytes:
    """Convert int to bytes."""
    if n_bytes is None:
        n_bytes = (i.bit_length() + 7) // 8 or 1
    return i.to_bytes(length=n_bytes, byteorder=byteorder)


def bytes_to_int(bytes_hex: bytes, byteorder="big") -> int:
    """Convert bytes to int."""
    return int.from_bytes(bytes_hex, byteorder=byteorder)


def int_to_hex_str(i: int, n_bytes: Optional[int]=TOKEN_NUM_BYTES,
                   prefix="", byteorder="big") -> str:
    """Convert int to hex string."""
    return bytes_to_hex_str(int_to_bytes(i, n_bytes, byteorder), prefix=prefix)


def hex_str_to_int(str_hex: str, byteorder="big") -> int:
    """Convert hex string to int."""
    return bytes_to_int(hex_str_to_bytes(str_hex), byteorder=byteorder)


def ensure_bytes(str_or_bytes: Union[str, bytes],
                 encoding="utf-8", errors="strict") -> bytes:
    """Convert input to bytes if it's str."""
    if isinstance(str_or_bytes, str):
        return str_or_bytes.encode(encoding=encoding, errors=errors)

    if not isinstance(str_or_bytes, bytes):
        raise TypeError("Type bytes required")

    return str_or_bytes
