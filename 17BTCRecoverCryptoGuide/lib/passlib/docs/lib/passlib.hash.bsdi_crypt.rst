=================================================================================
:class:`passlib.hash.bsdi_crypt` - BSDi Crypt
=================================================================================

.. include:: ../_fragments/insecure_hash_warning.rst

.. currentmodule:: passlib.hash

This algorithm was developed by BSDi for their BSD/OS distribution.
It's based on :class:`~passlib.hash.des_crypt`, and contains a larger
salt and a variable number of rounds. This algorithm is also
known as "Extended DES Crypt".
It class can be used directly as follows::

    >>> from passlib.hash import bsdi_crypt

    >>> # generate new salt, hash password
    >>> hash = bsdi_crypt.hash("password")
    >>> hash
    '_7C/.Bf/4gZk10RYRs4Y'

    >>> # same, but with explict number of rounds
    >>> bsdi_crypt.using(rounds=10001).hash("password")
    '_FQ0.amG/zwCMip7DnBk'

    >>> # verify password
    >>> bsdi_crypt.verify("password", hash)
    True
    >>> bsdi_crypt.verify("secret", hash)
    False

.. seealso:: the generic :ref:`PasswordHash usage examples <password-hash-examples>`

Interface
=========
.. autoclass:: bsdi_crypt()

.. note::

    This class will use the first available of two possible backends:

    * stdlib :func:`crypt()`, if the host OS supports BSDi-Crypt
      (primarily BSD-derived systems).
    * a pure Python implementation of BSDi-Crypt built into Passlib.

    You can see which backend is in use by calling the :meth:`get_backend()` method.

Format
======
An example hash (of the string ``password``) is ``_EQ0.jzhSVeUyoSqLupI``.
A bsdi_crypt hash string consists of a 20 character string of the form :samp:`_{rounds}{salt}{checksum}`.
All characters except the underscore prefix are drawn from ``[./0-9A-Za-z]``.

* ``_`` - the underscore is used to distinguish this scheme from others, such as des-crypt.
* :samp:`{rounds}` is the number of rounds, stored as a 4 character :data:`hash64 <passlib.utils.binary.h64>`-encoded 24-bit integer (``EQ0.`` in the example).
* :samp:`{salt}` is the salt, stored as as a 4 character hash64-encoded 24-bit integer (``jzhS`` in the example).
* :samp:`{checksum}` is the checksum, stored as an 11 character hash64-encoded 64-bit integer (``VeUyoSqLupI`` in the example).

A bsdi_crypt configuration string is also accepted by this module;
and has the same format as the hash string, but with the checksum portion omitted.

.. rst-class:: html-toggle

Algorithm
=========
The checksum is formed by a modified version of the DES cipher in encrypt mode:

1. Given a password string, a salt string, and rounds string.

2. The 4 character rounds string is decoded to a 24-bit integer rounds value;
   The rounds string uses little-endian :data:`hash64 <passlib.utils.binary.h64>`
   encoding.

3. The 4 character salt string is decoded to a 24-bit integer salt value;
   The salt string uses little-endian :data:`hash64 <passlib.utils.binary.h64>`
   encoding.

4. The password is NULL-padded on the end to the smallest non-zero multiple of 8 bytes.

5. The lower 7 bits of the first 8 bytes of the password are used
   to form a 56-bit integer; with the first byte providing
   the most significant 7 bits, and the 8th byte providing
   the least significant 7 bits. This is the DES key.

6. For each additional block of 8 bytes in the padded password:

    a. The current DES key is encrypted using a single round of normal DES,
       with itself as the input block.
    b. Step 5 is repeated for the current 8-byte block, and xored against the
       existing DES key.

7. Repeated rounds of (modified) DES encryption are performed;
   starting with a null input block,
   and using the 56-bit integer from step 5/6 as the DES key.

   The salt is used to to mutate the normal DES encrypt operation
   by swapping bits :samp:`{i}` and :samp:`{i}+24` in the DES E-Box output
   if and only if bit :samp:`{i}` is set in the salt value.

   The number of rounds is controlled by the value decoded in step 2.

8. The 64-bit result of the last round of step 7 is then
   lsb-padded with 2 zero bits.

9. The resulting 66-bit integer is encoded in big-endian order
   using the :data:`hash64-big <passlib.utils.binary.h64big>` format.

.. _bsdi-crypt-security-issues:

Security Issues
===============
BSDi Crypt should not be considered sufficiently secure, for a number of reasons:

* Its use of the DES stream cipher, which is vulnerable to practical pre-image attacks,
  and considered broken, as well as having too-small key and block sizes.

* The 24-bit salt is too small to defeat rainbow-table attacks
  (most modern algorithms provide at least a 48-bit salt).

* The fact that it only uses the lower 7 bits of each byte of the password
  restricts the keyspace which needs to be searched.

* Additionally, even *rounds* values are slightly weaker still,
  as they may reveal the hash used one of the weak DES keys [#weak]_.
  This information could theoretically allow an attacker to perform a
  brute-force attack on a reduced keyspace and against only 1-2 rounds of DES.
  (This issue is mitigated by the fact that few passwords are both valid *and*
  result in a weak key).

This algorithm is none-the-less stronger than :class:`!des_crypt` itself,
since it supports variable rounds, a larger salt size,
and uses all the bytes of the password.

Deviations
==========
This implementation of bsdi-crypt differs from others in one way:

* Unicode Policy:

  The original bsdi-crypt algorithm was designed for 7-bit ``us-ascii`` encoding only
  (as evidenced by the fact that it discards the 8th bit of all password bytes).

  In order to provide support for unicode strings,
  Passlib will encode unicode passwords using ``utf-8``
  before running them through bsdi-crypt. If a different
  encoding is desired by an application, the password should be encoded
  before handing it to Passlib.

.. rubric:: Footnotes

.. [#] Primary source used for description of bsdi-crypt format & algorithm -
       `<http://fuse4bsd.creo.hu/localcgi/man-cgi.cgi?crypt+3>`_

.. [#] Another source describing algorithm -
       `<http://ftp.lava.net/cgi-bin/bsdi-man?proto=1.1&query=crypt&msection=3&apropos=0>`_

.. [#weak] DES weak keys - `<https://en.wikipedia.org/wiki/Weak_key#Weak_keys_in_DES>`_
