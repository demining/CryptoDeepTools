===========================================================================
:class:`passlib.hash.atlassian_pbkdf2_sha1` - Atlassian's PBKDF2-based Hash
===========================================================================

.. index::
    pair: Atlassian; pbkdf2 hash

.. currentmodule:: passlib.hash

This class provides an implementation of
the PBKDF2 based hash used by Atlassian in Jira and other products.
Note that unlike the most PBKDF2 hashes supported by Passlib,
this one uses a fixed number of rounds (10000). That is currently
a sufficient amount, but it cannot be altered; so this
scheme should only be used to read existing hashes, and not
used in new applications.

.. seealso::

    * :ref:`password hash usage <password-hash-examples>` --
      for examples of how to use this class via the common hash interface.

    * :doc:`passlib.hash.pbkdf2_{digest} <passlib.hash.pbkdf2_digest>` --
      for some other PBKDF2-based hashes.

Interface
=========
.. autoclass:: atlassian_pbkdf2_sha1()

Format & Algorithm
==================

All of this scheme's hashes have the format :samp:`\\{PKCS5S2\\}{data}`,
where :samp:`{data}` is a 64 character base64 encoded string;
which (when decoded), contains a 16 byte salt,
and a 32 byte checksum.

A example hash (of ``password``) is:

    ``{PKCS5S2}DQIXJU038u4P7FdsuFTY/+35bm41kfjZa57UrdxHp2Mu3qF2uy+ooD+jF5t1tb8J``

Once decoded, the salt value (in hexadecimal octets) is:

    ``0d0217254d37f2ee0fec576cb854d8ff``

and the checksum value (in hexadecimal octets) is:

    ``edf96e6e3591f8d96b9ed4addc47a7632edea176bb2fa8a03fa3179b75b5bf09``

When calculating the checksum:
the password is encoded into UTF-8 if not already encoded.
Using the specified salt, and a fixed 10000 rounds,
PBKDF2-HMAC-SHA1 is used to generate a 32 byte key,
which appended to the salt and encoded in base64.

.. rubric:: Footnotes

.. [#pbkdf2] The specification for the PBKDF2 algorithm - `<http://tools.ietf.org/html/rfc2898#section-5.2>`_.
