.. index::
    single: Windows; Domain Cached Credentials v2

======================================================================
:class:`passlib.hash.msdcc2` - Windows' Domain Cached Credentials v2
======================================================================

.. versionadded:: 1.6

.. currentmodule:: passlib.hash

This class implements the DCC2 (Domain Cached Credentials version 2) hash, used
by Windows Vista and newer to cache and verify remote credentials when the relevant
server is unavailable. It is known by a number of other names,
including "mscache2" and "mscash2" (Microsoft CAched haSH). It replaces
the weaker :doc:`msdcc v1<passlib.hash.msdcc>` hash used by previous releases
of Windows. Security wise it is not particularly weak, but due to its
use of the username as a salt, it should probably not be used for anything
but verifying existing cached credentials.
This class can be used directly as follows::

    >>> from passlib.hash import msdcc2

    >>> # hash password using specified username
    >>> hash = msdcc2.hash("password", user="Administrator")
    >>> hash
    '4c253e4b65c007a8cd683ea57bc43c76'

    >>> # verify correct password
    >>> msdcc2.verify("password", hash, user="Administrator")
    True
    >>> # verify correct password w/ wrong username
    >>> msdcc2.verify("password", hash, user="User")
    False
    >>> # verify incorrect password
    >>> msdcc2.verify("letmein", hash, user="Administrator")
    False

.. seealso::

    * :ref:`password hash usage <password-hash-examples>` -- for more usage examples

    * :doc:`msdcc <passlib.hash.msdcc>` -- the predecessor to this hash

Interface
=========
.. autoclass:: msdcc2()

.. rst-class:: html-toggle

Format & Algorithm
==================
Much like :class:`!lmhash`, :class:`!nthash`, and :class:`!msdcc`,
MS DCC v2 hashes consists of a 16 byte digest, usually encoded as 32
hexadecimal characters. An example hash (of ``"password"`` with the
account ``"Administrator"``) is ``4c253e4b65c007a8cd683ea57bc43c76``.

The digest is calculated as follows:

1. The password is encoded using ``UTF-16-LE``.
2. The MD4 digest of step 1 is calculated.
   (The result of this is identical to the :class:`~passlib.hash.nthash`
   digest of the password).
3. The unicode username is converted to lowercase,
   and encoded using ``UTF-16-LE``.
   This should be just the plain username (e.g. ``User``
   not ``SOMEDOMAIN\\User``)
4. The username from step 3 is appended to the
   digest from step 2; and the MD4 digest of the result
   is calculated (The result of this is identical to the
   :class:`~passlib.hash.msdcc` digest).
5. :func:`PBKDF2-HMAC-SHA1 <passlib.crypto.digest.pbkdf2_hmac>` is then invoked,
   using the result of step 4 as the secret, the username from step 3 as
   the salt, 10240 rounds, and resulting in a 16 byte digest.
6. The result of step 5 is encoded into hexadecimal;
   this is the DCC2 hash.

Security Issues
===============
This hash is essentially :doc:`msdcc v1 <passlib.hash.msdcc>` with a fixed-round PBKDF2 function
wrapped around it. The number of rounds of PBKDF2 is currently
sufficient to make this a semi-reasonable way to store passwords,
but the use of the lowercase username as a salt, and the fact
that the rounds can't be increased, means this hash is not particularly
future-proof, and should not be used for new applications.

Deviations
==========

* Max Password Size

  Windows appears to enforce a maximum password size,
  but the actual value of this limit is unclear; sources
  report it to be set at assorted values from 26 to 128 characters,
  and it may in fact vary between Windows releases. 
  The one consistent piece of information is that
  passwords above the limit are simply not allowed (rather
  than truncated ala :class:`~passlib.hash.des_crypt`).  
  Because of this, Passlib does not currently enforce a size limit:
  any hashes this class generates should be correct, provided Windows
  is willing to accept a password of that size.

.. rubric:: Footnotes

.. [#] Description of DCC v2 algorithm -
       `<http://openwall.info/wiki/john/MSCash2>`_
