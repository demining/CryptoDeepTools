.. index::
    single: Windows; Domain Cached Credentials
    see: mscash; msdcc
    see: mscache; msdcc

======================================================================
:class:`passlib.hash.msdcc` - Windows' Domain Cached Credentials
======================================================================

.. include:: ../_fragments/insecure_hash_warning.rst

.. versionadded:: 1.6

.. currentmodule:: passlib.hash

This class implements the DCC (Domain Cached Credentials) hash, used
by Windows to cache and verify remote credentials when the relevant
server is unavailable. It is known by a number of other names,
including "mscache" and "mscash" (Microsoft CAched haSH). Security wise
it is not particularly strong, as it's little more than :doc:`nthash <passlib.hash.nthash>`
salted with a username. It was replaced by :doc:`msdcc2 <passlib.hash.msdcc2>`
in Windows Vista.
This class can be used directly as follows::

    >>> from passlib.hash import msdcc

    >>> # hash password using specified username
    >>> hash = msdcc.hash("password", user="Administrator")
    >>> hash
    '25fd08fa89795ed54207e6e8442a6ca0'

    >>> # verify correct password
    >>> msdcc.verify("password", hash, user="Administrator")
    True
    >>> # verify correct password w/ wrong username
    >>> msdcc.verify("password", hash, user="User")
    False
    >>> # verify incorrect password
    >>> msdcc.verify("letmein", hash, user="Administrator")
    False

.. seealso::

    * :ref:`password hash usage <password-hash-examples>` -- for more usage examples

    * :doc:`msdcc2 <passlib.hash.msdcc2>` -- the successor to this hash

Interface
=========
.. autoclass:: msdcc()

.. rst-class:: html-toggle

Format & Algorithm
==================
Much like :class:`!lmhash` and :class:`!nthash`, MS DCC hashes
consists of a 16 byte digest, usually encoded as 32 hexadecimal characters.
An example hash (of ``"password"`` with the account ``"Administrator"``) is
``25fd08fa89795ed54207e6e8442a6ca0``.

The digest is calculated as follows:

1. The password is encoded using ``UTF-16-LE``.
2. The MD4 digest of step 1 is calculated.
   (The result of this step is identical to the :class:`~passlib.hash.nthash`
   of the password).
3. The unicode username is converted to lowercase,
   and encoded using ``UTF-16-LE``.
   This should be just the plain username (e.g. ``User``
   not ``SOMEDOMAIN\\User``)
4. The username from step 3 is appended to the
   digest from step 2; and the MD4 digest of the result
   is calculated.
5. The result of step 4 is encoded into hexadecimal,
   this is the DCC hash.

Security Issues
===============
This algorithm is should not be used for any purpose besides
manipulating existing DCC v1 hashes, due to the following flaws:

* Its use of the username as a salt value (and lower-case at that),
  means that common usernames (e.g. ``Administrator``) will occur
  more frequently as salts, weakening the effectiveness of the salt in
  foiling pre-computed tables.

* The MD4 message digest has been severely compromised by collision and
  preimage attacks.

* Efficient brute-force attacks on MD4 exist.

.. rubric:: Footnotes

.. [#] Description of DCC v1 algorithm -
       `<http://openwall.info/wiki/john/MSCash>`_
