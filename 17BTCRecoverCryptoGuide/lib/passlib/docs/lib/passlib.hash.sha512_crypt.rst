===================================================================
:class:`passlib.hash.sha512_crypt` - SHA-512 Crypt
===================================================================

.. currentmodule:: passlib.hash

Defined by the same specification as :class:`~passlib.hash.sha256_crypt`,
SHA512-Crypt is identical to SHA256-Crypt in almost every way, including
design and security issues. The only difference is the doubled digest size;
while this provides some increase in security, it's also a bit slower 32 bit operating systems.

.. seealso::

    * :ref:`password hash usage <password-hash-examples>` --
      for examples of how to use this class via the common hash interface.

    * :doc:`sha256_crypt <passlib.hash.sha256_crypt>` -- the companion 256-bit version
      of this hash.

Interface
=========
.. autoclass:: sha512_crypt()

.. note::

    This class will use the first available of two possible backends:

    * stdlib :func:`crypt()`, if the host OS supports SHA512-Crypt (most Linux systems).
    * a pure python implementation of SHA512-Crypt built into passlib.

    You can see which backend is in use by calling the :meth:`get_backend()` method.

Format & Algorithm
==================
SHA512-Crypt is defined by the same specification as SHA256-Crypt.
The format and algorithm are exactly the same, except for
the following notable differences:

* it uses the :ref:`modular crypt prefix <modular-crypt-format>` ``$6$``, whereas SHA256-Crypt uses ``$5$``.
* it uses the SHA-512 message digest in place of the SHA-256 message digest.
* its output hash is correspondingly larger in size,
  with an 86-character encoded checksum, instead of 43 characters.

See :doc:`sha256_crypt <passlib.hash.sha256_crypt>`
for the format and algorithm descriptions,
as well as security notes.
