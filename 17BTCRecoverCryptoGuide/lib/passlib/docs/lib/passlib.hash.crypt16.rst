=======================================================================
:class:`passlib.hash.crypt16` - Crypt16
=======================================================================

.. include:: ../_fragments/trivial_hash_warning.rst

.. currentmodule:: passlib.hash

This class implements the Crypt16 password hash, commonly
found on Ultrix and Tru64. It's a minor modification of :class:`~passlib.hash.des_crypt`,
which allows passwords of up to 16 characters.

.. seealso::
    :ref:`password hash usage <password-hash-examples>` --
    for examples of how to use this class via the common hash interface.

Interface
=========
.. autoclass:: crypt16()

Format
======
An example hash (of the string ``passphrase``) is ``aaX/UmCcBrceQ0kQGGWKTbuE``.
A crypt16 hash string has the format :samp:`{salt}{checksum_1}{checksum_2}`, where:

* :samp:`{salt}` is the salt, stored as a 2 character
  :data:`hash64 <passlib.utils.binary.h64>`-encoded 12-bit integer (``aa`` in the
  example).

* each :samp:`{checksum_i}` is a separate checksum, stored as an 11 character
  :data:`hash64-big <passlib.utils.binary.h64big>`-encoded 64-bit integer
  (``X/UmCcBrceQ`` and ``0kQGGWKTbuE`` in the example).

.. note::

    This hash is frequently confused with the :doc:`bigcrypt <passlib.hash.bigcrypt>`
    hash algorithm, as it has the same size and uses the same character
    set as a :class:`!bigcrypt` hash of a password with 9 to 16
    characters; though the actual algorithms are different.

.. rst-class:: html-toggle

Algorithm
=========
The crypt16 algorithm uses a weakened version of the des-crypt algorithm:

1. Given a password string and a salt string.

2. The 2 character salt string is decoded to a 12-bit integer salt value;
   The salt string uses little-endian :data:`hash64 <passlib.utils.binary.h64>`
   encoding.

3. If the password is larger than 16 bytes, the end is truncated to 16 bytes.
   If the password is smaller than 16 bytes, the end is NULL padded to 16 bytes.

4. The lower 7 bits of the first 8 characters of the password are used
   to form a 56-bit integer; with the first character providing
   the most significant 7 bits, and the 8th character providing
   the least significant 7 bits.

5. 20 repeated rounds of modified DES encryption are performed;
   starting with a null input block,
   and using the 56-bit integer from step 4 as the DES key.

   The salt value from step 2 is used to to mutate the normal
   DES encrypt operation by swapping bits :samp:`{i}` and :samp:`{i}+24`
   in the DES E-Box output if and only if bit :samp:`{i}` is set in
   the salt value.

6. The 64-bit result of the last round of step 5 is then
   lsb-padded with 2 zero bits.

7. The resulting 66-bit integer is encoded in big-endian order
   using the :data:`hash64-big <passlib.utils.binary.h64big>` format.
   This is the first checksum segment.

8. The second checksum segment is created by repeating
   steps 4..7 using the second 8 bytes of the padding password (from step 3).
   The only difference is that step 5 uses only 5 rounds.

9. The final checksum string is the concatenation of the two checksum segments,
   in order.

Security Issues
===============
Crypt16 is dangerously flawed:

* It suffers from all the flaws of :class:`~passlib.hash.des_crypt`.

* Compared to des-crypt, its smaller number of rounds
  makes it even *more* vulnerable to brute-force attacks.

* For a given salt, passwords under 9 characters all have the same 2nd checksum.
  Given the 12-bit salt size, all such 2nd checksums can be easily pre-computed;
  making an attack easier, and giving away information about password size.

* Since both checksums use the same salt, they can be attacked at once
  (by doing 5 rounds, checking the result against checksum 2,
  doing 15 rounds more, and checking the result against checksum 1).

Deviations
==========
This implementation of crypt16 deviates from public documentation of the format in one way:

* Unicode Policy:

  The original crypt16 algorithm was designed for 7-bit ``us-ascii`` encoding only
  (as evidenced by the fact that it discards the 8th bit of all password bytes).

  In order to provide support for unicode strings,
  Passlib will encode unicode passwords using ``utf-8``
  before running them through crypt16. If a different
  encoding is desired by an application, the password should be encoded
  before handing it to Passlib.

.. rubric:: Footnotes

.. [#] One source of information about bigcrypt & crypt16 -
       `<http://www.mail-archive.com/exim-dev@exim.org/msg00970.html>`_
