==================================================================
:class:`passlib.hash.argon2` - Argon2
==================================================================

.. versionadded:: 1.7

.. currentmodule:: passlib.hash

This hash provides support for the Argon2 [#argon2-home]_ password hash.
Argon2(i) is a state of the art memory-hard password hash, and the
winner of the 2013 Password Hashing Competition [#phc]_.  It has seen active development
and analysis in subsequent years, and while young, and is intended to replace
:class:`~passlib.hash.pbkdf2_sha256`, :class:`~passlib.hash.bcrypt`, and :class:`~passlib.hash.scrypt`.

It is one of the four hashes Passlib :ref:`recommends <recommended-hashes>`
for new applications. This class can be used directly as follows::

    >>> from passlib.hash import argon2

    >>> # generate new salt, hash password
    >>> h = argon2.hash("password")
    >>> h
    '$argon2i$v=19$m=512,t=2,p=2$aI2R0hpDyLm3ltLa+1/rvQ$LqPKjd6n8yniKtAithoR7A'

    >>> # the same, but with an explicit number of rounds
    >>> argon2.using(rounds=4).hash("password")
    '$argon2i$v=19$m=512,t=4,p=2$eM+ZMyYkpDRGaI3xXmuNcQ$c5DeJg3eb5dskVt1mDdxfw'

    >>> # verify password
    >>> argon2.verify("password", h)
    True
    >>> argon2.verify("wrong", h)
    False

.. seealso:: the generic :ref:`PasswordHash usage examples <password-hash-examples>`

Interface
=========
.. autoclass:: argon2()

Argon2 Backends
---------------

This class will use the first available of two possible backends:

1. `argon2_cffi  <https://pypi.python.org/pypi/argon2_cffi>`_, if installed.
   (this is the recommended option).

2. `argon2pure  <https://pypi.python.org/pypi/argon2pure>`_, if installed.

If no backends are available, :meth:`hash` and :meth:`verify`
will throw :exc:`~passlib.exc.MissingBackendError` when they are invoked.
You can check which backend is in use by calling :meth:`!argon2.get_backend()`.

Format & Algorithm
==================
The Argon2 hash format is defined by the argon2 reference implementation.
It's compatible with the :ref:`PHC Format <phc-format>` and :ref:`modular-crypt-format`,
and uses ``$argon2i$`` and ``$argon2d$``
as it's identifying prefixes for all its strings. An example hash (of ``password``) is:

  ``$argon2i$v=19$m=512,t=3,p=2$c29tZXNhbHQ$SqlVijFGiPG+935vDSGEsA``

This string has the format :samp:`$argon2{X}$v={V}$m={M},t={T},p={P}${salt}${digest}`, where:

* :samp:`{X}` is either ``i`` or ``d``, depending on the argon2 variant
  (``i`` in the example).

* :samp:`{V}` is an integer representing the argon2 revision.
  the value (when rendered into hexidecimal) matches the argon2 version
  (in the example, ``v=19`` corresponds to 0x13, or Argon2 v1.3).

* :samp:`{M}` is an integer representing the variable memory cost, in kibibytes
  (512kib in the example).

* :samp:`{T}` is an integer representing the variable time cost, in linear iterations.
  (3 in the example).

* :samp:`{P}` is a parallelization parameter, which controls how much of the hash calculation
  is parallelization (2 in the example).

* :samp:`{salt}` - this is the base64-encoded version of the raw salt bytes 
  passed into the Argon2 function (``c29tZXNhbHQ`` in the example).

* :samp:`{digest}` - this is the base64-encoded version of the raw derived key 
  bytes returned from the Argon2 function.  Argon2 supports a variable
  checksum size, though the hashes in passlib will typically be 16 bytes, resulting in a
  22 byte digest (``SqlVijFGiPG+935vDSGEsA`` in the example).

All integer values are encoded uses ascii decimal, with no leading zeros.
All byte strings are encoded using the standard base64 encoding, but without
any trailing padding ("=") chars.

.. note::

   The :samp:`v={version}$` segment was added in Argon2 v1.3; older version Argon2 v1.0
   hashes may not include this portion.

   The Argon2 specification also supports an optional :samp:`,data={data}` suffix
   following :samp:`p={parallelism}`; but this is not consistently or fully supported.

The algorithm used by all of these schemes is deliberately identical and simple:
The password is encoded into UTF-8 if not already encoded, and handed off to the Argon2 function.
A specified number of bytes (16 byte default in passlib) returned result are encoded as the checksum.

See `<https://github.com/P-H-C/phc-winner-argon2>`_ for the canonical description of the Argon2 hash.

Security Issues
===============
Argon2 is relatively new compared to other password hash algorithms, having started life in 2013,
and thus may still harbor some undiscovered issues.  That said, it's one of *very* few which were
designed explicitly with password hashing in mind; and draws strongly on the lessons of the algorithms
before it.  As of the release of Passlib 1.7, it has no known major security issues.

Deviations
==========
* While passlib supports verifying type "d" Argon2 hashes, it does not support generating
  them.  This is a deliberate choice, since type "d" is explicitly not designed for password hashing.

* This implementation currently encodes all unicode passwords using UTF-8 before hashing,
  other implementations may vary, or offer a configurable encoding; though UTF-8 is assumed
  to be the default.

.. rubric:: Footnotes

.. [#argon2-home] the Argon2 homepage -
   `<https://github.com/P-H-C/phc-winner-argon2>`_

.. [#phc] 2012 Password Hashing Competition -
   `<https://password-hashing.net/>`_
