==================================================================
:class:`passlib.hash.bcrypt` - BCrypt
==================================================================

.. currentmodule:: passlib.hash

BCrypt was developed to replace :class:`~passlib.hash.md5_crypt` for BSD systems.
It uses a modified version of the Blowfish stream cipher. Featuring
a large salt and variable number of rounds, it's currently the default
password hash for many systems (notably BSD), and has no known weaknesses.
It is one of the four hashes Passlib :ref:`recommends <recommended-hashes>`
for new applications. This class can be used directly as follows::

    >>> from passlib.hash import bcrypt

    >>> # generate new salt, hash password
    >>> h = bcrypt.hash("password")
    >>> h
    '$2a$12$NT0I31Sa7ihGEWpka9ASYrEFkhuTNeBQ2xfZskIiiJeyFXhRgS.Sy'

    >>> # the same, but with an explicit number of rounds
    >>> bcrypt.using(rounds=13).hash("password")
    '$2b$13$HMQTprwhaUwmir.g.ZYoXuRJhtsbra4uj.qJPHrKsX5nGlhpts0jm'

    >>> # verify password
    >>> bcrypt.verify("password", h)
    True
    >>> bcrypt.verify("wrong", h)
    False

.. note::

    It is strongly recommended that you install
    `bcrypt <https://pypi.python.org/pypi/bcrypt>`_
    when using this hash.

.. seealso:: the generic :ref:`PasswordHash usage examples <password-hash-examples>`

Interface
=========
.. autoclass:: bcrypt()

.. _bcrypt-backends:

.. index::
    pair: environmental variable; PASSLIB_BUILTIN_BCRYPT

Bcrypt Backends
---------------

.. rst-class:: float-center

.. warning::

   Support for ``py-bcrypt`` and ``bcryptor`` will be dropped in Passlib 1.8,
   as these libraries are unmaintained.


This class will use the first available of five possible backends:

1. `bcrypt <https://pypi.python.org/pypi/bcrypt>`_, if installed.
2. `py-bcrypt <https://pypi.python.org/pypi/py-bcrypt>`_, if installed (DEPRECATED)
3. `bcryptor <https://bitbucket.org/ares/bcryptor/overview>`_, if installed (DEPRECATED).
4. stdlib's :func:`crypt.crypt()`, if the host OS supports BCrypt
   (primarily BSD-derived systems).
5. A pure-python implementation of BCrypt, built into Passlib.

If no backends are available, :meth:`hash` and :meth:`verify`
will throw :exc:`~passlib.exc.MissingBackendError` when they are invoked.
You can check which backend is in use by calling :meth:`!bcrypt.get_backend()`.

As of Passlib 1.6.3, a one-time check is peformed when the backend is first loaded,
to detect the backend's capabilities & bugs.  If this check detects a fatal bug,
a :exc:`~passlib.exc.PasslibSecurityError` will be raised.  This generally means
you need to upgrade the external package being used as the backend
(this will be detailed in the error message).

.. warning::
    *The pure-python backend (#5) is disabled by default!*

    That backend is currently too slow to be usable given the number of rounds required
    for security. That said, if you have no other alternative and need to use it,
    set the environmental variable ``PASSLIB_BUILTIN_BCRYPT="enabled"``
    before importing Passlib.

    What's "too slow"? Passlib's :ref:`rounds selection guidelines <rounds-selection-guidelines>`
    currently require BCrypt be able to do at least 12 cost in under 300ms. By this standard
    the pure-python backend is 128x too slow under CPython 2.7, and 16x too slow under PyPy 1.8.
    (speedups are welcome!)

Format & Algorithm
==================
Bcrypt is compatible with the :ref:`modular-crypt-format`, and uses a number of identifying
prefixes: ``$2$``, ``$2a$``, ``$2x$``, ``$2y$``, and ``$2b$``.  Each prefix indicates
a different revision of the BCrypt algorithm; and all but the ``$2b$`` identifier are
considered deprecated.

An example hash (of ``password``) is:

  ``$2b$12$GhvMmNVjRW29ulnudl.LbuAnUtN/LRfe1JsBm1Xu6LE3059z5Tr8m``

Bcrypt hashes have the format :samp:`$2a${rounds}${salt}{checksum}`, where:

* :samp:`{rounds}` is a cost parameter, encoded as 2 zero-padded decimal digits,
  which determines the number of iterations used via :samp:`{iterations}=2**{rounds}` (rounds is 12 in the example).
* :samp:`{salt}` is a 22 character salt string, using the characters in the regexp range ``[./A-Za-z0-9]`` (``GhvMmNVjRW29ulnudl.Lbu`` in the example).
* :samp:`{checksum}` is a 31 character checksum, using the same characters as the salt (``AnUtN/LRfe1JsBm1Xu6LE3059z5Tr8m`` in the example).

While BCrypt's basic algorithm is described in its design document [#f1]_,
the OpenBSD implementation [#f2]_ is considered the canonical reference, even
though it differs from the design document in a few small ways.

Security Issues
===============

.. _bcrypt-password-truncation:

* Password Truncation.

  While not a security issue per-se, bcrypt does have one major limitation:
  password are truncated on the first NULL byte (if any),
  and only the first 72 bytes of a password are hashed... all the rest are ignored.
  Furthermore, bytes 55-72 are not fully mixed into the resulting hash (citation needed!).
  To work around both these issues, many applications first run the password through a message
  digest such as SHA2-256. Passlib offers the premade :doc:`passlib.hash.bcrypt_sha256`
  to take care of this issue.

Deviations
==========
This implementation of bcrypt differs from others in a few ways:

* Restricted salt string character set:

  BCrypt does not specify what the behavior should be when
  passed a salt string outside of the regexp range ``[./A-Za-z0-9]``.
  In order to avoid this situation, Passlib strictly limits salts to the
  allowed character set, and will throw a :exc:`ValueError` if an invalid
  salt character is encountered.

* Unicode Policy:

  The underlying algorithm takes in a password specified
  as a series of non-null bytes, and does not specify what encoding
  should be used; though a ``us-ascii`` compatible encoding
  is implied by nearly all implementations of bcrypt
  as well as all known reference hashes.

  In order to provide support for unicode strings,
  Passlib will encode unicode passwords using ``utf-8``
  before running them through bcrypt. If a different
  encoding is desired by an application, the password should be encoded
  before handing it to Passlib.

* Padding Bits

  BCrypt's base64 encoding results in the last character of the salt
  encoding only 2 bits of data, the remaining 4 are "padding" bits.
  Similarly, the last character of the digest contains 4 bits of data,
  and 2 padding bits. Because of the way they are coded, many BCrypt implementations
  will reject *all* passwords if these padding bits are not set to 0.
  Due to a legacy :ref:`issue <bcrypt-padding-issue>` with Passlib <= 1.5.2,
  Passlib will print a warning if it encounters hashes with any padding bits set,
  and then validate the hash as if the padding bits were cleared.
  (This behavior will eventually be deprecated and such hashes
  will throw a :exc:`ValueError` instead).

* The *crypt_blowfish* 8-bit bug

  .. _crypt-blowfish-bug:

  Pre-1.1 versions of the `crypt_blowfish <http://www.openwall.com/crypt/>`_
  bcrypt implementation suffered from a serious flaw [#eight]_
  in how they handled 8-bit passwords. The manner in which the flaw was fixed resulted
  in *crypt_blowfish* adding support for two new BCrypt hash identifiers:

  ``$2x$``, allowing sysadmins to mark any ``$2a$`` hashes which were potentially
  generated with the buggy algorithm. Passlib 1.6 recognizes (but does not
  currently support generating or verifying) these hashes.

  ``$2y$``, the default for crypt_blowfish 1.1-1.2, indicates
  the hash was generated with the canonical OpenBSD-compatible algorithm,
  and should match *correctly* generated ``$2a$`` hashes.
  Passlib 1.6 can generate and verify these hashes.

  As well, crypt_blowfish 1.2 modified the way it generates ``$2a$`` hashes,
  so that passwords containing the byte value 0xFF are hashed in a manner
  incompatible with either the buggy or canonical algorithms. Passlib
  does not support this algorithmic variant either, though it should
  be *very* rarely encountered in practice.

  (crypt_blowfish 1.3 switched to the ``$2b$`` standard as the default)

  .. versionchanged:: 1.6.3

        Passlib will now throw a :exc:`~passlib.exc.PasslibSecurityError` if an attempt is
        made to use any backend which is vulnerable to this bug.

* The 'BSD wraparound' bug

  .. _bsd-wraparound-bug:

  OpenBSD <= 5.4, and most bcrypt libraries derived from it's source,
  are vulnerable to a 'wraparound' bug [#wraparound]_, where passwords larger
  than 254 characters will be incorrectly hashed using only the first few
  characters of the string, resulting in a severely weakened hash.

  OpenBSD 5.5 `fixed <http://undeadly.org/cgi?action=article&sid=20140224132743>`_ this flaw,
  and introduced the ``$2b$`` hash identifier to indicate the hash was generated with the correct
  algorithm.

  py-bcrypt <= 0.4 is known to be vulnerable to this, as well as the os_crypt
  backend (if running on a vulnerable operating system).

  Passlib 1.6.3 adds the following:

  * Support for the ``$2b$`` hash format (though for backward compat it has not been made
    the default yet).

  * Detects if the active backend is vulnerable to the bug, issues a warning,
    and enables a workaround so that vulnerable passwords will still be hashed correctly.
    (This does mean that existing hashes suffering this vulnerability will no longer verify
    using their correct password).

.. rubric:: Footnotes

.. [#f1] the bcrypt format specification -
         `<http://www.usenix.org/event/usenix99/provos/provos_html/>`_

.. [#f2] the OpenBSD BCrypt source -
         `<http://www.openbsd.org/cgi-bin/cvsweb/src/lib/libc/crypt/bcrypt.c>`_

.. [#eight] The flaw in pre-1.1 crypt_blowfish is described here -
            `CVE-2011-2483 <http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-2483>`_

.. [#wraparound] The wraparound flaw is described here -
            `<http://www.openwall.com/lists/oss-security/2012/01/02/4>`_

