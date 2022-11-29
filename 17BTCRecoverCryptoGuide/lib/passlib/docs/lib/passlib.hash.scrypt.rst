==================================================================
:class:`passlib.hash.scrypt` - SCrypt
==================================================================

.. versionadded:: 1.7

.. currentmodule:: passlib.hash

This is a custom hash scheme provided by Passlib which allows storing password hashes
generated using the SCrypt [#scrypt-home]_ key derivation function, and is designed
as the of a new generation of "memory hard" functions.

.. warning::

    Be careful when using this algorithm, as the memory and CPU requirements
    needed to achieve adequate security are generally higher than acceptable for heavily used
    production systems [#scrypt-cost]_. This is because (unlike many password hashes), increasing
    the rounds value of scrypt will increase the *memory* required as well as the time.

    Unless you know what you're doing, **You probably want** :doc:`argon2 <passlib.hash.argon2>` **instead.**

This class can be used directly as follows::

    >>> from passlib.hash import scrypt

    >>> # generate new salt, hash password
    >>> h = scrypt.hash("password")
    >>> h
    '$scrypt$ln=16,r=8,p=1$aM15713r3Xsvxbi31lqr1Q$nFNh2CVHVjNldFVKDHDlm4CbdRSCdEBsjjJxD+iCs5E'

    >>> # the same, but with an explicit number of rounds
    >>> scrypt.using(rounds=8).hash("password")
    '$scrypt$ln=8,r=8,p=1$WKs1xljLudd6z9kbY0wpJQ$yCR4iDZYDKv+iEJj6yHY0lv/epnfB6f/w1EbXrsJOuQ'

    >>> # verify password
    >>> scrypt.verify("password", h)
    True
    >>> scrypt.verify("wrong", h)
    False

.. note::

    It is strongly recommended that you install
    `scrypt <https://pypi.python.org/pypi/scrypt>`_
    when using this hash.

.. seealso:: the generic :ref:`PasswordHash usage examples <password-hash-examples>`

Interface
=========
.. autoclass:: scrypt()

Scrypt Backends
---------------

This class will use the first available of two possible backends:

1. Python stdlib's :func:`hashlib.scrypt` method (only present for Python 3.6+ and OpenSSL 1.1+)
2. The C-accelerated `scrypt <https://pypi.python.org/pypi/scrypt>`_ package, if installed.
3. A pure-python implementation of SCrypt, built into Passlib.

.. warning::

    If :func:`hashlib.scrypt` is not present on your system, it is strongly recommended to install
    the external scrypt package.
    The pure-python backend is intended as a reference and last-resort implementation only;
    it is 10-100x too slow to be usable in production at a secure ``rounds`` cost.

.. versionchanged:: 1.7.2

   Added support for using stdlib's :func:`hashlib.scrypt`

Format & Algorithm
==================
This Scrypt hash format is compatible with the :ref:`PHC Format <phc-format>` and :ref:`modular-crypt-format`,
and uses ``$scrypt$`` as the identifying prefix
for all its strings. An example hash (of ``password``) is:

  ``$scrypt$ln=16,r=8,p=1$aM15713r3Xsvxbi31lqr1Q$nFNh2CVHVjNldFVKDHDlm4CbdRSCdEBsjjJxD+iCs5E``

This string has the format :samp:`$scrypt$ln={logN},r={R},p={P}${salt}${checksum}`, where:

* :samp:`{logN}` is the exponent for calculating SCRYPT's cost parameter (N), encoded as a decimal digit,
  (logN is 16 in the example, corresponding to n = 2**16 = 65536).

* :samp:`{R}` is the value of SCRYPT's block size parameter (r), encoded as a decimal digit,
  (r is 8 in the example).

* :samp:`{P}` is the value of SCRYPT's parallel count parameter (p), encoded as a decimal digit,
  (p is 1 in the example).

* :samp:`{salt}` - this base64 encoded salt bytes passed into the SCRYPT function
  (``aM15713r3Xsvxbi31lqr1Q`` in the example).

* :samp:`{checksum}` - this is the base64 encoded derived key bytes returned from the SCRYPT function.
  This hash currently always uses 32 bytes, resulting in a 43-character checksum.
  (``nFNh2CVHVjNldFVKDHDlm4CbdRSCdEBsjjJxD+iCs5E`` in the example).

All byte strings are encoded using the standard base64 encoding, but without
any trailing padding ("=") chars.  The password is encoded into UTF-8 if not already encoded,
and run throught the SCRYPT function; along with the salt, and the values of n, r, and p.
The first 32 bytes of the returned result are encoded as the checksum.

See `<http://www.tarsnap.com/scrypt.html>`_ for the canonical description of the scrypt kdf.

Security Issues
===============
`SCrypt <http://www.tarsnap.com/scrypt.html>`__ is the first in a class of "memory-hard"
key derivation functions. Initially, it looked very promising as a replacement for BCrypt,
PBKDF2, and SHA512-Crypt.  However, the fact that it's ``N`` parameter controls both
time *and* memory cost means the two cannot be varied completely independantly.  This
eventually proved to be problematic, as ``N`` values required for even BCrypt levels of security
resulting in memory requirements that were unacceptable on most production systems.

.. seealso::

   :class:`~passlib.hash.argon2`, a next generation memory-hard KDF designed as the
   successor to SCrypt.

.. rubric:: Footnotes

.. [#scrypt-home] the SCrypt KDF homepage -
   `<http://www.tarsnap.com/scrypt.html>`_

.. [#scrypt-cost] posts discussing security implications of scrypt's tying memory cost to calculation time -
   `<http://blog.ircmaxell.com/2014/03/why-i-dont-recommend-scrypt.html>`_,
   `<http://security.stackexchange.com/questions/26245/is-bcrypt-better-than-scrypt>`_,
   `<http://security.stackexchange.com/questions/4781/do-any-security-experts-recommend-bcrypt-for-password-storage>`_
