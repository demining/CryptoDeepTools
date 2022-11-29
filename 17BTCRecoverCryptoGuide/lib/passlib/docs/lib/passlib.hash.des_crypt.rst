=======================================================================
:class:`passlib.hash.des_crypt` - DES Crypt
=======================================================================

.. include:: ../_fragments/trivial_hash_warning.rst

.. currentmodule:: passlib.hash

This class implements the original DES-based Unix Crypt algorithm.
While no longer in active use in most places,
it is supported for legacy purposes by many Unix flavors.
It can used directly as follows::

    >>> from passlib.hash import des_crypt

    >>> # generate new salt, hash password
    >>> hash = des_crypt.hash("password")
    'JQMuyS6H.AGMo'

    >>> # verify the password
    >>> des_crypt.verify("password", hash)
    True
    >>> des_crypt.verify("letmein", hash)
    False

.. seealso:: the generic :ref:`PasswordHash usage examples <password-hash-examples>`

Interface
=========
.. autoclass:: des_crypt()

.. note::

    This class will use the first available of two possible backends:

    * stdlib :func:`crypt()`, if the host OS supports DES-Crypt (most Unix systems).
    * a pure Python implementation of DES-Crypt built into Passlib.

    You can see which backend is in use by calling the :meth:`get_backend()` method.

Format
======
A des-crypt hash string consists of 13 characters, drawn from ``[./0-9A-Za-z]``.
The first 2 characters form a :data:`hash64 <passlib.utils.binary.h64>`-encoded
12 bit integer used as the salt, with the remaining characters
forming a hash64-encoded 64-bit integer checksum.

A des-crypt configuration string is also accepted by this module,
consists of only the first 2 characters, corresponding to the salt only.

An example hash (of the string ``password``) is ``JQMuyS6H.AGMo``, where the salt is ``JQ``, and the checksum ``MuyS6H.AGMo``.

.. rst-class:: html-toggle

Algorithm
=========
The checksum is formed by a modified version of the DES cipher in encrypt mode:

1. Given a password string and a salt string.

2. The 2 character salt string is decoded to a 12-bit integer salt value;
   The salt string uses little-endian :data:`hash64 <passlib.utils.binary.h64>`
   encoding.

3. If the password is less than 8 bytes, it's NULL padded at the end to 8 bytes.

4. The lower 7 bits of the first 8 bytes of the password are used
   to form a 56-bit integer; with the first byte providing
   the most significant 7 bits, and the 8th byte providing
   the least significant 7 bits.

   The remainder of the password (if any) is ignored.

5. 25 repeated rounds of modified DES encryption are performed;
   starting with a null input block,
   and using the 56-bit integer from step 4 as the DES key.

   The salt is used to to mutate the normal DES encrypt operation
   by swapping bits :samp:`{i}` and :samp:`{i}+24` in the DES E-Box output
   if and only if bit :samp:`{i}` is set in the salt value.
   Thus, if the salt is set to ``0``, normal DES encryption is performed.
   (This was intended to prevent optimized implementations
   of regular DES encryption to be useful in attacking this algorithm).

6. The 64-bit result of the last round of step 5 is then
   lsb-padded with 2 zero bits.

7. The resulting 66-bit integer is encoded in big-endian order using the
   :data:`hash64-big <passlib.utils.binary.h64big>` format.

Security Issues
===============
DES-Crypt is no longer considered secure, for a variety of reasons:

* Its use of the DES stream cipher, which is vulnerable to practical pre-image attacks,
  and considered broken, as well as having too-small key and block sizes.

* The 12-bit salt is considered to small to defeat rainbow-table attacks
  (most modern algorithms provide at least a 48-bit salt).

* The fact that it only uses the lower 7 bits of the first 8 bytes of the password
  results in a dangerously small keyspace which needs to be searched.

Deviations
==========
This implementation of des-crypt differs from others in a few ways:

* Minimum salt string:

  Some implementations of des-crypt permit empty and single-character salt strings.
  However, behavior in these cases varies wildly;
  with implementations returning everything from errors
  to incorrect hashes that never validate.
  To avoid all this, Passlib will throw an "invalid salt" if the provided
  salt string is not at least 2 characters.

* Restricted salt string character set:

  The underlying algorithm expects salt strings to use the
  :data:`hash64 <passlib.utils.binary.HASH64_CHARS>` character set to encode
  a 12-bit integer. Many implementations of des-crypt will
  accept a salt containing other characters, but
  vary wildly in how they are handled, including errors and implementation-specific value mappings.
  To avoid all this, Passlib will throw an "invalid salt" if the salt
  string contains any non-standard characters.

* Unicode Policy:

  The original des-crypt algorithm was designed for 7-bit ``us-ascii`` encoding only
  (as evidenced by the fact that it discards the 8th bit of all password bytes).

  In order to provide support for unicode strings,
  Passlib will encode unicode passwords using ``utf-8``
  before running them through des-crypt. If a different
  encoding is desired by an application, the password should be encoded
  before handing it to Passlib.

.. rubric:: Footnotes

.. [#] A java implementation of des-crypt, used as base for Passlib's pure-python implementation,
       can be found at `<http://www.dynamic.net.au/christos/crypt/UnixCrypt2.txt>`_
