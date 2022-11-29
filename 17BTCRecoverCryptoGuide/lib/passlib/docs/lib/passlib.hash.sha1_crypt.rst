===================================================================
:class:`passlib.hash.sha1_crypt` - SHA-1 Crypt
===================================================================

.. currentmodule:: passlib.hash

SHA1-Crypt is a hash algorithm introduced by NetBSD in 2004.
It's based on a variation of the PBKDF1 algorithm,
and supports a large salt and variable number of rounds.

.. seealso::
    :ref:`password hash usage <password-hash-examples>` --
    for examples of how to use this class via the common hash interface.

Interface
=========
.. autoclass:: sha1_crypt()

.. note::

    This class will use the first available of two possible backends:

    * stdlib :func:`crypt()`, if the host OS supports sha1-crypt (NetBSD).
    * a pure python implementation of sha1-crypt built into Passlib.

    You can see which backend is in use by calling the :meth:`get_backend()` method.

Format
======
An example hash (of ``password``) is ``$sha1$40000$jtNX3nZ2$hBNaIXkt4wBI2o5rsi8KejSjNqIq``.
An sha1-crypt hash string has the format :samp:`$sha1${rounds}${salt}${checksum}`, where:

* ``$sha1$`` is the prefix used to identify sha1-crypt hashes,
  following the :ref:`modular-crypt-format`

* :samp:`{rounds}` is the decimal number of rounds to use (40000 in the example).

* :samp:`{salt}` is 0-64 characters drawn from ``[./0-9A-Za-z]``
  (``jtNX3nZ2`` in the example).

* :samp:`{checksum}` is 28 characters drawn from the same set, encoding a 168-bit
  checksum. (``hBNaIXkt4wBI2o5rsi8KejSjNqIq/`` in the example).

.. rst-class:: html-toggle

Algorithm
=========
The checksum is calculated using a modified version of PBKDF1 [#pbk]_,
replacing its use of the SHA1 message digest with HMAC-SHA1,
(which does not suffer from the current vulnerabilities that SHA1 itself does,
as well as providing some of the advancements made in PBKDF2).

* first, the HMAC-SHA1 digest of :samp:`{salt}$sha1${rounds}` is generated,
  using the password as the HMAC-SHA1 key.

* then, for :samp:`{rounds}-1` iterations, the previous HMAC-SHA1 digest
  is fed back through HMAC-SHA1, again using the password
  as the HMAC-SHA1 key.

* the checksum is then rendered into hash-64 format
  using an ordering that roughly corresponds to big-endian
  encoding of 24-bit chunks (see :data:`passlib.hash.sha1_crypt._chk_offsets` for exact byte order).

Deviations
==========
This implementation of sha1-crypt differs from the NetBSD implementation
in a few ways:

* Default Rounds:

  The NetBSD implementation randomly varies the actual number of rounds
  when generating a new configuration string, in order to decrease
  predictability. This feature is provided by Passlib to *all* hashes,
  via the :class:`CryptContext` class, and so it omitted
  from this implementation.

* Zero-Padded Rounds:

  The specification does not specify how to deal with zero-padding
  within the rounds portion of the hash. No existing examples
  or test vectors have zero padding, and allowing it would
  result in multiple encodings for the same configuration / hash.
  To prevent this situation, Passlib will throw an error if the rounds in a hash
  have leading zeros.

* Restricted salt string character set:

  The underlying algorithm can unambiguously handle salt strings
  which contain any possible byte value besides ``\x00`` and ``$``.
  However, Passlib strictly limits salts to the
  :data:`hash64 <passlib.utils.binary.HASH64_CHARS>` character set,
  as nearly all implementations of sha1-crypt generate
  and expect salts containing those characters.

* Unicode Policy:

  The underlying algorithm takes in a password specified
  as a series of non-null bytes, and does not specify what encoding
  should be used; though a ``us-ascii`` compatible encoding
  is implied by nearly all known reference hashes.

  In order to provide support for unicode strings,
  Passlib will encode unicode passwords using ``utf-8``
  before running them through sha1-crypt. If a different
  encoding is desired by an application, the password should be encoded
  before handing it to Passlib.

.. rubric:: Footnotes

.. [#desc] description of sha1-crypt algorithm -
           `<http://mail-index.netbsd.org/tech-userlevel/2004/05/29/0001.html>`_

.. [#source] NetBSD implementation of SHA1-Crypt -
             `<http://fxr.googlebit.com/source/lib/libcrypt/crypt-sha1.c?v=NETBSD-CURRENT>`_

.. [#pbk] rfc defining PBKDF1 & PBKDF2 -
          `<http://tools.ietf.org/html/rfc2898>`_ -
