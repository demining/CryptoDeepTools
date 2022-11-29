==================================================================
:class:`passlib.hash.oracle10` - Oracle 10g password hash
==================================================================

.. include:: ../_fragments/trivial_hash_warning.rst

.. currentmodule:: passlib.hash

This class implements the hash algorithm used by the Oracle Database up to
version 10g Rel.2. It was superseded by a newer algorithm in :class:`Oracle 11 <passlib.hash.oracle11>`.
This class can be used directly as follows (note that this class requires
a username for all encrypt/verify operations)::

    >>> from passlib.hash import oracle10 as oracle10

    >>> # hash password using specified username
    >>> hash = oracle10.hash("password", user="username")
    >>> hash
    '872805F3F4C83365'

    >>> # verify correct password
    >>> oracle10.verify("password", hash, user="username")
    True
    >>> # verify correct password w/ wrong username
    >>> oracle10.verify("password", hash, user="somebody")
    False
    >>> # verify incorrect password
    >>> oracle10.verify("letmein", hash, user="username")
    False

.. seealso:: the generic :ref:`PasswordHash usage examples <password-hash-examples>`

.. warning::

    This implementation has not been compared
    very carefully against the official implementation or reference documentation,
    and its behavior may not match under various border cases.
    *caveat emptor*.

Interface
=========
.. autoclass:: oracle10()

.. rst-class:: html-toggle

Format & Algorithm
==================
Oracle10 hashes all consist of a series of 16 hexadecimal digits,
representing the resulting checksum.
Oracle10 hashes can be formed by the following procedure:

1. Concatenate the username and password together.
2. Convert the result to upper case
3. Encoding the result in a multi-byte format [#enc]_ such that ascii characters (eg: ``USER``) are represented
   with additional null bytes inserted (eg: ``\x00U\x00S\x00E\x00R``).
4. Right-pad the result with null bytes, to bring the total size to an integer multiple of 8.
   this is the final input string.
5. The input string is then encoded using DES in CBC mode.
   The string ``\x01\x23\x45\x67\x89\xAB\xCD\xEF`` is used as the DES key,
   and a block of null bytes is used as the CBC initialization vector.
   All but the last block of ciphertext is discarded.
6. The input string is then run through DES-CBC a second time;
   this time the last block of ciphertext from step 5 is used as the DES key,
   a block of null bytes is still used as the CBC initialization vector.
   All but the last block of ciphertext is discarded.
7. The last block of ciphertext of step 6 is converted
   to a hexadecimal string, and returned as the checksum.

Security Issues
===============
This algorithm it not suitable for *any* use besides manipulating existing
Oracle10 account passwords, due to the following flaws [#flaws]_:

* Its use of the username as a salt value means that common usernames
  (e.g. ``system``) will occur more frequently as salts,
  weakening the effectiveness of the salt in foiling pre-computed tables.

* The fact that it is case insensitive, and simply concatenates the username
  and password, greatly reduces the keyspace that must be searched by
  brute-force or pre-computed attacks.

* Its simplicity, and decades of research on high-speed DES
  implementations, makes efficient brute force attacks much more feasible.

Deviations
==========
Passlib's implementation of the Oracle10g hash may deviate from the official
implementation in unknown ways, as there is no official documentation.
There is only one known issue:

* Unicode Policy

  Lack of testing (and test vectors) leaves it unclear
  as to how Oracle 10g handles passwords containing non-7bit ascii.
  In order to provide support for unicode strings,
  Passlib will encode unicode passwords using ``utf-16-be`` [#enc]_
  before running them through the Oracle10g algorithm.
  This behavior may be altered in the future, if further testing
  reveals another behavior is more in line with the official representation.
  This note applies as well to any provided username,
  as they are run through the same policy.

.. rubric:: Footnotes

.. [#enc] The exact encoding used in step 3 of the algorithm is not clear from known references.
          Passlib uses ``utf-16-be``, as this is both compatible with existing test vectors,
          and supports unicode input.

.. [#flaws] Whitepaper analyzing flaws in this algorithm -
            `<http://www.isg.rhul.ac.uk/~ccid/publications/oracle_passwd.pdf>`_.

.. [#] Description of Oracle10g and Oracle11g algorithms -
       `<http://www.notesbit.com/index.php/scripts-oracle/oracle-11g-new-password-algorithm-is-revealed-by-seclistsorg/>`_.
