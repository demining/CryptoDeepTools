=================================================================
:class:`passlib.hash.cta_pbkdf2_sha1` - Cryptacular's PBKDF2 hash
=================================================================

.. index:: pbkdf2 hash; Cryptacular

.. currentmodule:: passlib.hash

This class provides an implementation of Cryptacular's
PBKDF2-HMAC-SHA1 hash format [#cta]_. PBKDF2 is a key derivation function [#pbkdf2]_
that is ideally suited as the basis for a password hash, as it provides
variable length salts, variable number of rounds.

.. seealso::

    * :ref:`password hash usage <password-hash-examples>` --
      for examples of how to use this class via the common hash interface.

    * :doc:`dlitz_pbkdf2_sha1 <passlib.hash.dlitz_pbkdf2_sha1>`
      for another hash which looks almost exactly like this one.

Interface
=========
.. autoclass:: cta_pbkdf2_sha1()

Format & Algorithm
==================

A example hash (of ``password``) is:

    ``$p5k2$2710$oX9ZZOcNgYoAsYL-8bqxKg==$AU2JLf2rNxWoZxWxRCluY0u6h6c=``

All of this scheme's hashes have the format :samp:`$p5k2${rounds}${salt}${checksum}`,
where:

* ``$p5k2$`` is used as the :ref:`modular-crypt-format` identifier.

* :samp:`{rounds}` is the number of PBKDF2 iterations to perform,
  stored as lowercase hexadecimal number with no zero-padding (in the example: ``2710`` or 10000 iterations).

* :samp:`{salt}` is the salt string encoding using
  base64 (with ``-_`` as the high values).
  ``oX9ZZOcNgYoAsYL-8bqxKg==`` in the example.

* :samp:`{checksum}` is 28 characters encoding
  the resulting 20-byte PBKDF2 derived key using
  base64 (with ``-_`` as the high values).
  ``AU2JLf2rNxWoZxWxRCluY0u6h6c=`` in the example.

In order to generate the checksum, the password is first encoded into UTF-8 if it's unicode.
The salt is decoded from its base64 representation.
PBKDF2 is called using the encoded password, the full salt,
the specified number of rounds, and using HMAC-SHA1 as its pseudorandom function.
20 bytes of derived key are requested, and the resulting key is encoded and used
as the checksum portion of the hash.

.. rubric:: Footnotes

.. [#cta] The reference for this hash format - `<https://bitbucket.org/dholth/cryptacular/>`_.

.. [#pbkdf2] The specification for the PBKDF2 algorithm - `<http://tools.ietf.org/html/rfc2898#section-5.2>`_.
