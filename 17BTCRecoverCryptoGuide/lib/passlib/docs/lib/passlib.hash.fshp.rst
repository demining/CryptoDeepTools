==========================================================
:class:`passlib.hash.fshp` - Fairly Secure Hashed Password
==========================================================

.. index:: fshp

.. note::

    While the SHA-2 variants of PBKDF1 have no critical security vulnerabilities,
    PBKDF1 itself has been deprecated in favor of its successor, PBKDF2.
    Furthermore, FSHP has been listed as insecure by its author (for unspecified reasons);
    so this scheme should probably only be used to support existing hashes.

.. currentmodule:: passlib.hash

The Fairly Secure Hashed Password (FSHP) scheme [#home]_
is a cross-platform hash based on PBKDF1 [#pbk]_, and uses an LDAP-style hash format.
It features a variable length salt, variable rounds, and support for cryptographic
hashes from SHA-1 up to SHA-512.
This class supports the standard Passlib options for rounds and salt,
as well as a special digest keyword for selecting the variant of FSHP to use.
It can be used directly as follows::

    >>> from passlib.hash import fshp

    >>> # generate new salt, hash password
    >>> hash = fshp.hash("password")
    >>> hash
    '{FSHP1|16|16384}PtoqcGUetmVEy/uR8715TNqKa8+teMF9qZO1lA9lJNUm1EQBLPZ+qPRLeEPHqy6C'

    >>> # the same, but with an explicit number of rounds, larger salt, and specific variant
    >>> fshp.using(rounds=40000, salt_size=32, variant="sha512").hash("password")
    '{FSHP3|32|40000}cB8yE/CuADSgUTQZjWy+YTf/cvbU11D/rHNKiUiB6z4dIaO77U/rmNW
    pgZcZllZbCra5GJ8ZfFRNwCHirPqvYTAnbaQQeFQbWym/frRrRev3buoygFQRYexl4091Pc5m'

    >>> # verify password
    >>> fshp.verify("password", hash)
    True
    >>> fshp.verify("secret", hash)
    False

.. seealso:: the generic :ref:`PasswordHash usage examples <password-hash-examples>`

Interface
=========
.. autoclass:: fshp()

Format & Algorithm
==================

All of this scheme's hashes have the format: :samp:`\\{FSHP{variant}|{saltsize}|{rounds}\\}{data}`.
A example hash (of ``password``) is:

    ``{FSHP1|16|16384}PtoqcGUetmVEy/uR8715TNqKa8+teMF9qZO1lA9lJNUm1EQBLPZ+qPRLeEPHqy6C``

* :samp:`{variant}` is a decimal integer identifying the version of FSHP;
  in particular, which cryptographic hash function should be used
  to calculate the checksum. ``1`` in the example.
  (see the class description above for a list of possible values).

* :samp:`{saltsize}` is a decimal integer identifying the number of bytes
  in the salt. ``16`` in the example.

* :samp:`{rounds}` is a decimal integer identifying the number
  of rounds to apply when calculating the checksum (see below).
  ``16384`` in the example.

* :samp:`{data}` is a base64-encoded string which, when decoded,
  contains a salt string of the specified size, followed
  by the checksum. In the example, the data portion decodes to
  a salt value (in hexadecimal octets) of:

    ``3eda2a70651eb66544cbfb91f3bd794c``

  and a checksum value (in hexadecimal octets) of:

    ``da8a6bcfad78c17da993b5940f6524d526d444012cf67ea8f44b7843c7ab2e82``

FSHP is basically just a wrapper around PBKDF1:
The checksum is calculated using :func:`~passlib.crypto.digest.pbkdf1`,
passing in the password, the decoded salt string, the number of
rounds, and hash function specified by the variant identifier.
FSHP has one quirk in that the password is passed in as the pbkdf1 salt,
and the salt is passed in as the pbkdf1 password.

Security Issues
===============
* A minor issue is that FSHP swaps the location the password and salt
  from what is described in the PBKDF1 standard.
  This issue is mainly noted in order to dismiss it:
  while the swap permits an attacker to pre-calculate part of the initial digest,
  the impact of this is negligible when a large number of rounds is used.

* Since PBKDF1 is based on repeated composition of a hash,
  it is vulnerable to any first-preimage attacks on the underlying hash.
  This has led to the deprecation of using SHA-1 or earlier hashes with PBKDF1.
  In contrast, its successor PBKDF2 was designed to mitigate
  this weakness (among other things), and enjoys much stronger preimage resistance
  when used with the same cryptographic hashes.

Deviations
==========
* Unicode Policy:

  The official FSHP python implementation takes in a password specified
  as a series of bytes, and does not specify what encoding
  should be used; though a ``us-ascii`` compatible encoding
  is implied by the implementation,
  as well as all known reference hashes.

  In order to provide support for unicode strings,
  Passlib will encode unicode passwords using ``utf-8``
  before running them through FSHP. If a different
  encoding is desired by an application, the password should be encoded
  before handing it to Passlib.

.. rubric:: Footnotes

.. [#home] The FSHP homepage contains implementations in a wide variety of
           programming languages -- `<https://github.com/bdd/fshp-is-not-secure-anymore>`_.

.. [#pbk] rfc defining PBKDF1 & PBKDF2 -
          `<http://tools.ietf.org/html/rfc2898>`_ -
