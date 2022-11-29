.. index:: Cisco; Type 5 hash

==================================================================
:class:`passlib.hash.md5_crypt` - MD5 Crypt
==================================================================

.. include:: ../_fragments/insecure_hash_warning.rst

.. currentmodule:: passlib.hash

This algorithm was developed for FreeBSD in 1994 by Poul-Henning Kamp,
to replace the aging :class:`passlib.hash.des_crypt`.
It has since been adopted by a wide variety of other Unix flavors, and is found
in many other contexts as well. Due to its origins, it's sometimes referred to as "FreeBSD MD5 Crypt".
Security-wise it should now be considered weak,
and most Unix flavors have since replaced it with stronger schemes
(such as :class:`~passlib.hash.sha512_crypt` and :class:`~passlib.hash.bcrypt`).

This is also referred to on Cisco IOS systems as a "type 5" hash.
The format and algorithm are identical, though Cisco seems to require
4 salt characters instead of the full 8 characters
used by most systems [#cisco]_.

The :class:`!md5_crypt` class can be can be used directly as follows::

    >>> from passlib.hash import md5_crypt

    >>> # generate new salt, hash password
    >>> h = md5_crypt.hash("password")
    >>> h
    '$1$3azHgidD$SrJPt7B.9rekpmwJwtON31'

    >>> # verify the password
    >>> md5_crypt.verify("password", h)
    True
    >>> md5_crypt.verify("secret", h)
    False

    >>> # hash password using cisco-compatible 4-char salt
    >>> md5_crypt.using(salt_size=4).hash("password")
    '$1$wu98$9UuD3hvrwehnqyF1D548N0'

.. seealso::

    * :ref:`password hash usage <password-hash-examples>` -- for more usage examples

    * :doc:`apr_md5_crypt <passlib.hash.apr_md5_crypt>` -- Apache's variant of this algorithm.

Interface
=========
.. autoclass:: md5_crypt()

.. note::

    This class will use the first available of two possible backends:

    * stdlib :func:`crypt()`, if the host OS supports MD5-Crypt (most Unix systems).
    * a pure python implementation of MD5-Crypt built into Passlib.

    You can see which backend is in use by calling the :meth:`get_backend()` method.

Format
======
An example md5-crypt hash (of the string ``password``) is ``$1$5pZSV9va$azfrPr6af3Fc7dLblQXVa0``.

An md5-crypt hash string has the format :samp:`$1${salt}${checksum}`, where:

* ``$1$`` is the prefix used to identify md5-crypt hashes,
  following the :ref:`modular-crypt-format`
* :samp:`{salt}` is 0-8 characters drawn from the regexp range ``[./0-9A-Za-z]``;
  providing a 48-bit salt (``5pZSV9va`` in the example).
* :samp:`{checksum}` is 22 characters drawn from the same character set as the salt;
  encoding a 128-bit checksum (``azfrPr6af3Fc7dLblQXVa0`` in the example).

.. _md5-crypt-algorithm:

.. rst-class:: html-toggle

Algorithm
=========
The MD5-Crypt algorithm [#f1]_ calculates a checksum as follows:

1. A password string and salt string are provided.

   (The salt should not include the magic prefix,
   it should match the string referred to as :samp:`{salt}` in the format section, above).

2. If needed, the salt should be truncated to a maximum of 8 characters.

..

3. Start MD5 digest B.

4. Add the password to digest B.

5. Add the salt to digest B.

6. Add the password to digest B.

7. Finish MD5 digest B.

..

8. Start MD5 digest A.

9. Add the password to digest A.

10. Add the constant string ``$1$`` to digest A.
    (The Apache variant of MD5-Crypt uses ``$apr1$`` instead,
    this is the only change made by this variant).

11. Add the salt to digest A.

12. For each block of 16 bytes in the password string,
    add digest B to digest A.

13. For the remaining N bytes of the password string,
    add the first N bytes of digest B to digest A.

14. For each bit in the binary representation of the length
    of the password string; starting with the lowest value bit,
    up to and including the largest-valued bit that is set to ``1``:

    a. If the current bit is set 1, add the first character of the password to digest A.
    b. Otherwise, add a NULL character to digest A.

    (If the password is the empty string, step 14 is omitted entirely).

15. Finish MD5 digest A.

..

16. For 1000 rounds (round values 0..999 inclusive),
    perform the following steps:

    a. Start MD5 Digest C for the round.
    b. If the round is odd, add the password to digest C.
    c. If the round is even, add the previous round's result to digest C (for round 0, add digest A instead).
    d. If the round is not a multiple of 3, add the salt to digest C.
    e. If the round is not a multiple of 7, add the password to digest C.
    f. If the round is even, add the password to digest C.
    g. If the round is odd, add the previous round's result to digest C (for round 0, add digest A instead).
    h. Use the final value of MD5 digest C as the result for this round.

17. Transpose the 16 bytes of the final round's result in the
    following order: ``12,6,0,13,7,1,14,8,2,15,9,3,5,10,4,11``.

18. Encode the resulting 16 byte string into a 22 character
    :data:`hash64 <passlib.utils.binary.h64>`-encoded string
    (the 2 msb bits encoded by the last hash64 character are used as 0 padding).
    This results in the portion of the md5 crypt hash string referred to as :samp:`{checksum}` in the format section.

Security Issues
===============
MD5-Crypt has a couple of issues which have weakened severely:

* It relies on the MD5 message digest, for which theoretical pre-image attacks exist [#f2]_.

* More seriously, its fixed number of rounds (combined with the availability
  of high-throughput MD5 implementations) means this algorithm
  is increasingly vulnerable to brute force attacks.
  It is this issue which has motivated its replacement
  by new algorithms such as :class:`~passlib.hash.bcrypt`
  and :class:`~passlib.hash.sha512_crypt`.

Deviations
==========
Passlib's implementation of md5-crypt differs from the reference implementation (and others) in two ways:

* Restricted salt string character set:

  The underlying algorithm can unambiguously handle salt strings
  which contain any possible byte value besides ``\x00`` and ``$``.
  However, Passlib strictly limits salts to the
  :data:`hash64 <passlib.utils.binary.HASH64_CHARS>` character set,
  as nearly all implementations of md5-crypt generate
  and expect salts containing those characters,
  but may have unexpected behaviors for other character values.

* Unicode Policy:

  The underlying algorithm takes in a password specified
  as a series of non-null bytes, and does not specify what encoding
  should be used; though a ``us-ascii`` compatible encoding
  is implied by nearly all implementations of md5-crypt
  as well as all known reference hashes.

  In order to provide support for unicode strings,
  Passlib will encode unicode passwords using ``utf-8``
  before running them through md5-crypt. If a different
  encoding is desired by an application, the password should be encoded
  before handing it to Passlib.

.. rubric:: Footnotes

.. [#f1] The authoritative reference for MD5-Crypt is Poul-Henning Kamp's original
         FreeBSD implementation -
         `<http://www.freebsd.org/cgi/cvsweb.cgi/~checkout~/src/lib/libcrypt/crypt.c?rev=1.2>`_

.. [#f2] Security issues with MD5 -
         `<http://en.wikipedia.org/wiki/MD5#Security>`_.

.. [#cisco] Note about Cisco Type 5 salt size -
            `<http://serverfault.com/a/46399>`_.

.. [#phk] Deprecation Announcement from Poul-Henning Kamp - `<http://phk.freebsd.dk/sagas/md5crypt_eol.html>`_.
