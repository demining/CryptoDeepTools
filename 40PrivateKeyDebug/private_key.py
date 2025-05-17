# Copyright (C) 2019 Cheran Senthilkumar
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
"""Private Key Functions"""

import secrets

__all__ = ["gen_private_key", "is_private_key_valid"]

# order
N = (1 << 256) - 0x14551231950B75FC4402DA1732FC9BEBF


def gen_private_key():
    """generate a private key"""
    return secrets.randbelow(N)


def is_private_key_valid(private_key):
    """check if a given private key is valid"""
    return 0 < int(private_key, 16) < N
