=====================================================
:mod:`passlib.utils.binary` - Binary Helper Functions
=====================================================

.. module:: passlib.utils.binary
    :synopsis: internal helpers for binary data

.. warning::

    This module is primarily used as an internal support module.
    Its interface has not been finalized yet, and may be changed somewhat
    between major releases of Passlib, as the internal code is cleaned up
    and simplified.

Constants
=========
.. data:: BASE64_CHARS

    Character map used by standard MIME-compatible Base64 encoding scheme.

.. data:: HASH64_CHARS

    Base64 character map used by a number of hash formats;
    the ordering is wildly different from the standard base64 character map.

    This encoding system appears to have originated with
    :class:`~passlib.hash.des_crypt`, but is used by
    :class:`~passlib.hash.md5_crypt`, :class:`~passlib.hash.sha256_crypt`,
    and others. Within Passlib, this encoding is referred as the "hash64" encoding,
    to distinguish it from normal base64 and others.

.. data:: BCRYPT_CHARS

    Base64 character map used by :class:`~passlib.hash.bcrypt`.
    The ordering is wildly different from both the standard base64 character map,
    and the common hash64 character map.

..
   TODO: document the other constants

Base64 Encoding
===============

Base64Engine Class
------------------
Passlib has to deal with a number of different Base64 encodings,
with varying endianness, as well as wildly different character <-> value
mappings. This is all encapsulated in the :class:`Base64Engine` class,
which provides common encoding actions for an arbitrary base64-style encoding
scheme. There are also a couple of predefined instances which are commonly
used by the hashes in Passlib.

.. autoclass:: Base64Engine

Predefined Instances
--------------------
.. data:: h64

    Predefined instance of :class:`Base64Engine` which uses
    the :data:`!HASH64_CHARS` character map and little-endian encoding.
    (see :data:`HASH64_CHARS` for more details).

.. data:: h64big

    Predefined variant of :data:`h64` which uses big-endian encoding.
    This is mainly used by :class:`~passlib.hash.des_crypt`.

.. versionchanged:: 1.6
   Previous versions of Passlib contained
   a module named :mod:`!passlib.utils.h64`; As of Passlib 1.6 this
   was replaced by the the ``h64`` and ``h64big`` instances of
   the :class:`Base64Engine` class;
   the interface remains mostly unchanged.


Other
-----
.. autofunction:: ab64_encode
.. autofunction:: ab64_decode
.. autofunction:: b64s_encode
.. autofunction:: b64s_decode
.. autofunction:: b32encode
.. autofunction:: b32decode

..
    .. data:: AB64_CHARS

        Variant of standard Base64 character map used by some
        custom Passlib hashes (see :func:`ab64_encode`).
