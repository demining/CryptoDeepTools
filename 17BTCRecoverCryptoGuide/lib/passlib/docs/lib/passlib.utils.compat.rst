======================================================
:mod:`passlib.utils.compat` - Python 2/3 Compatibility
======================================================

.. module:: passlib.utils.compat
    :synopsis: python 2/3 compatibility wrappers

This module contains a number of wrapper functions used by Passlib
to run under Python 2 and 3 without changes.

.. todo::

    finish documenting this module.

Unicode Helpers
===============
.. autofunction:: uascii_to_str
.. autofunction:: str_to_uascii

.. function:: join_unicode

    Join a sequence of unicode strings, e.g.
    ``join_unicode([u"a",u"b",u"c"]) -> u"abc"``.

Bytes Helpers
=============
.. autofunction:: bascii_to_str
.. autofunction:: str_to_bascii

.. function:: join_bytes

    Join a sequence of byte strings, e.g.
    ``join_bytes([b"a",b"b",b"c"]) -> b"abc"``.

.. function:: join_byte_values

    Join a sequence of integers into a byte string,
    e.g. ``join_byte_values([97,98,99]) -> b"abc"``.

.. function:: join_byte_elems

    Join a sequence of byte elements into a byte string.

    Python 2 & 3 return different things when accessing
    a single element of a byte string:

    * Python 2 returns a 1-element byte string (e.g. ``b"abc"[0] -> b"a"``).
    * Python 3 returns the ordinal value (e.g. ``b"abc"[0] -> 97``).

    This function will join a sequence of the appropriate type
    for the given python version -- under Python 2, this is an alias
    for :func:`join_bytes`, under Python 3 this is an alias for :func:`join_byte_values`.

.. function:: byte_elem_value

    Function to convert byte element to integer (a no-op under PY3)

.. function:: iter_byte_values

    Function to iterate over a byte string as a series of integers.
    (This is just the native bytes iterator under PY3).
