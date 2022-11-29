==================================================================
:class:`passlib.hash.oracle11` - Oracle 11g password hash
==================================================================

.. currentmodule:: passlib.hash

This class implements the hash algorithm introduced in version 11g of the Oracle Database.
It supersedes the :class:`Oracle 10 <passlib.hash.oracle10>` password hash.
This class can be can be used directly as follows::

    >>> from passlib.hash import oracle11 as oracle11

    >>> # generate new salt, hash password
    >>> hash = oracle11.hash("password")
    >>> hash
    'S:4143053633E59B4992A8EA17D2FF542C9EDEB335C886EED9C80450C1B4E6'

    >>> # verify password
    >>> oracle11.verify("password", hash)
    True
    >>> oracle11.verify("secret", hash)
    False

.. seealso:: the generic :ref:`PasswordHash usage examples <password-hash-examples>`

.. warning::

    This implementation has not been compared
    very carefully against the official implementation or reference documentation,
    and its behavior may not match under various border cases.
    *caveat emptor*.

Interface
=========
.. autoclass:: oracle11()

Format & Algorithm
==================
An example oracle11 hash (of the string ``password``) is:

    ``S:4143053633E59B4992A8EA17D2FF542C9EDEB335C886EED9C80450C1B4E6``

An oracle11 hash string has the format :samp:`S:{checksum}{salt}`, where:

* ``S:`` is the prefix used to identify oracle11 hashes
  (as distinct from oracle10 hashes, which have no constant prefix).
* :samp:`{checksum}` is 40 hexadecimal characters;
  encoding a 160-bit checksum.

  (``4143053633E59B4992A8EA17D2FF542C9EDEB335`` in the example)

* :samp:`{salt}` is 20 hexadecimal characters;
  providing a 80-bit salt (``C886EED9C80450C1B4E6`` in the example).

The Oracle 11 hash has a very simple algorithm: The salt is decoded
from its hexadecimal representation into binary, and the SHA-1 digest
of :samp:`{password}{raw_salt}` is then encoded into hexadecimal, and returned as the checksum.

Deviations
==========
Passlib's implementation of the Oracle11g hash may deviate from the official
implementation in unknown ways, as there is no official documentation.
There is only one known issue:

* Unicode Policy

  Lack of testing (and test vectors) leaves it unclear
  as to how Oracle 11g handles passwords containing non-7bit ascii.
  In order to provide support for unicode strings,
  Passlib will encode unicode passwords using ``utf-8``
  before running them through Oracle11.
  This behavior may be altered in the future, if further testing
  reveals another behavior is more in line with the official representation.

.. rubric:: Footnotes

.. [#] Description of Oracle10g and Oracle11g algorithms -
       `<http://www.notesbit.com/index.php/scripts-oracle/oracle-11g-new-password-algorithm-is-revealed-by-seclistsorg/>`_.
