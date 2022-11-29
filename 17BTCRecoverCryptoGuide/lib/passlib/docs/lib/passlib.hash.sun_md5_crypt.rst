.. index:: Solaris; sun_md5_crypt

=================================================================
:class:`passlib.hash.sun_md5_crypt` - Sun MD5 Crypt
=================================================================

.. currentmodule:: passlib.hash

This algorithm was developed by Alec Muffett [#mct]_ for Solaris, as a replacement for the aging :class:`~passlib.hash.des_crypt`.
It was introduced in Solaris 9u2. While based on the MD5 message digest, it has very little at all
in common with the :class:`~passlib.hash.md5_crypt` algorithm. It supports
32 bit variable rounds and an 8 character salt.

.. seealso::
    :ref:`password hash usage <password-hash-examples>` --
    for examples of how to use this class via the common hash interface.

.. note::

    The original Solaris implementation has some hash encoding quirks
    which may not be properly accounted for in Passlib.
    Until more user feedback and sample hashes have been gathered,
    *caveat emptor*.

Interface
=========
.. autoclass:: sun_md5_crypt()

Format
======
An example hash (of ``passwd``) is ``$md5,rounds=5000$GUBv0xjJ$$mSwgIswdjlTY0YxV7HBVm0``.
A sun-md5-crypt hash string has the format :samp:`$md5,rounds={rounds}${salt}$${checksum}`, where:

* ``$md5,`` is the prefix used to identify the hash.
* :samp:`{rounds}` is the decimal number of rounds to use (5000 in the example).
* :samp:`{salt}` is 0-8 salt characters drawn from ``[./0-9A-Za-z]`` (``GUBv0xjJ`` in the example).
* :samp:`{checksum}` is 22 characters drawn from the same set,
  encoding a 128-bit checksum (``mSwgIswdjlTY0YxV7HBVm0`` in the example).

An alternate format, :samp:`$md5${salt}$${checksum}` is used when the rounds value is 0.

There also exists some hashes which have only a single ``$`` between the
salt and the checksum; these have a slightly different checksum calculation
(see :ref:`smc-bare-salt` for details).

.. note::
    Solaris seems to deviate from the :ref:`modular-crypt-format` in that
    it considers ``,`` to indicate the end of the identifier
    in addition to ``$``.

.. rst-class:: html-toggle

Algorithm
=========
The algorithm used is based around the MD5 message digest and the "Muffett Coin Toss" algorithm.

1. Given a password, the number of rounds, and a salt string.

.. _smc-digest-step:

2. an initial MD5 digest is created from the concatenation of the password,
   and the configuration string (using the format :samp:`$md5,rounds={rounds}${salt}$`,
   or :samp:`$md5${salt}$` if rounds is 0).

   (See :ref:`smc-bare-salt` for details about an issue affecting this step)

3. for rounds+4096 iterations, a new digest is created:
    i. a buffer is initialized, containing the previous round's MD5 digest (for the first round,
       the digest from step 2 is used).
    ii. ``MuffetCoinToss(rounds, previous digest)`` is called, resulting in a 0 or 1.
    iii. If step 3.ii results in a 1, a constant data string is added to the buffer;
         if the result is a 0, the string is not added for this round.
         The constant data string is a 1517 byte excerpt from Hamlet [#f2]_
         (``To be, or not to be...all my sins remember'd.\n``),
         including an appended null character.

    iv. the current iteration as a zero-indexed integer is converted to a string (not zero-padded) and added to the buffer.
    v. the output for this iteration is the MD5 digest of the buffer's contents.

4. The final digest is then encoded into :mod:`hash64 <passlib.hash.h64>` format using the same
   transposed byte order that :class:`~passlib.hash.md5_crypt` uses, and returned.

Muffet Coin Toss
----------------
The Muffet Coin Toss algorithm is as follows:
Given the current round number, and a 16 byte MD5 digest, it returns a 0 or 1,
using the following formula:

.. note::

    All references below to a specific bit of the digest should be interpreted mod 128.
    All references below to a specific byte of the digest should be interpreted mod 16.

1. A 8-bit integer :samp:`{X}` is generated from the following formula:
   for each :samp:`{i}` in 0..7 inclusive:

    * let :samp:`{A}` be the :samp:`{i}`'th byte of the digest, as an 8-bit int.
    * let :samp:`{B}` be the :samp:`{i}+3`'rd byte of the digest, as an 8-bit int.

    * let :samp:`{R}` be :samp:`{A}` shifted right by :samp:`{B} % 5` bits.

    * let :samp:`{V}` be the :samp:`{R}`'th byte of the digest.
    * if the :samp:`{A} % 8`'th bit of :samp:`{B}` is 1, divide :samp:`{V}` by 2.

    * use the :samp:`{V}`'th bit of the digest as the :samp:`{i}`'th bit of :samp:`{X}`.

2. Another 8-bit integer, :samp:`{Y}`, is generated exactly the same manner as :samp:`{X}`, except that:

    * :samp:`{A}` is the :samp:`{i}+8`'th byte of the digest,
    * :samp:`{B}` is the :samp:`{i}+11`'th byte of the digest.

3. if bit :samp:`{round}` of the digest is 1, :samp:`{X}` is divided by 2.

4. if bit :samp:`{round}+64` of the digest is 1, :samp:`{Y}` is divided by 2.

5. the final result is :samp:`{X}`'th bit of the digest XORed against :samp:`{Y}`'th bit of the digest.

.. _smc-bare-salt:

Bare Salt Issue
---------------
According to the only existing documentation of this algorithm [#mct]_,
its hashes were supposed to have the format :samp:`$md5${salt}${checksum}`,
and include only the bare string :samp:`$md5${salt}` in the salt digest step
(see :ref:`step 2 <smc-digest-step>`, above).

However, almost all hashes encountered in production environments
have the format :samp:`$md5${salt}$${checksum}` (note the double ``$$``).
Unfortunately, it is not merely a cosmetic difference: hashes of this format
incorporate the first ``$`` after the salt within the
salt digest step, so the resulting checksum is different.

The documentation hints that this stems from a bug within the production
implementation's parser. This bug causes the implementation to return
``$$``-format hashes when passed a configuration string that ends with ``$``.
It returns the intended original format & checksum
only if there is at least one letter after the ``$``, e.g. :samp:`$md5${salt}$x`.

Passlib attempts to accommodate both formats using the special ``bare_salt``
keyword. It is set to ``True`` to indicate a configuration or hash string which
contains only a single ``$``, and does not incorporate it into the hash calculation.
The ``$$`` hash is encountered more often in production since it seems
the Solaris salt generator always appends a ``$``; because of this ``bare_salt=False``
was chosen as the default, so that hashes will be generated which by default
conform to what users are used to.

Deviations
==========
Passlib's implementation of Sun-MD5-Crypt deliberately
deviates from the official implementation in the following ways:

* Unicode Policy:

  The underlying algorithm takes in a password specified
  as a series of non-null bytes, and does not specify what encoding
  should be used; though a ``us-ascii`` compatible encoding
  is implied by all known reference hashes.

  In order to provide support for unicode strings,
  Passlib will encode unicode passwords using ``utf-8``
  before running them through sun-md5-crypt. If a different
  encoding is desired by an application, the password should be encoded
  before handing it to Passlib.

* Rounds encoding

  The underlying scheme implicitly allows rounds to have zero padding (e.g. ``$md5,rounds=001$abc$``),
  and also allows 0 rounds to be specified two ways (``$md5$abc$`` and ``$md5,rounds=0$abc$``).
  Allowing either of these would result in multiple possible checksums
  for the same password & salt. To prevent ambiguity,
  Passlib will throw a :exc:`ValueError` if the rounds value is zero-padded,
  or specified explicitly as 0 (e.g. ``$md5,rounds=0$abc$``).

.. _smc-quirks:

Given the lack of documentation, lack of test vectors, and known bugs
which accompany the original Solaris implementation, Passlib may not
accurately be able to generate and verify all hashes encountered in a
Solaris environment. Issues of concern include:

* Some hashes found on the web use a ``$`` in place of the ``,``.
  It is unclear whether this is an accepted alternate format or just a typo,
  nor whether this is supposed to affect the checksum in the resulting hash string.

* The current implementation needs addition test vectors;
  especially ones which contain an explicitly specific number of rounds.

* More information is needed about the parsing / formatting issue described
  in the :ref:`smc-bare-salt` section.

.. rubric:: Footnotes

.. [#mct] Overview of & motivations for the algorithm - `<http://dropsafe.crypticide.com/article/1389>`_

.. [#f2] The source of Hamlet's speech, used byte-for-byte as the constant data - `<http://www.ibiblio.org/pub/docs/books/gutenberg/etext98/2ws2610.txt>`_
