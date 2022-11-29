.. index:: MySQL; PASSWORD()

=====================================================================
:class:`passlib.hash.mysql41` - MySQL 4.1 password hash
=====================================================================

.. include:: ../_fragments/insecure_hash_warning.rst

.. currentmodule:: passlib.hash

This class implements the second of MySQL's password hash functions,
used to store its user account passwords. Introduced in MySQL 4.1.1
under the function ``PASSWORD()``, it replaced the previous
algorithm (:class:`~passlib.hash.mysql323`) as the default
used by MySQL, and is still in active use under MySQL 5.
Users will most likely find the frontends provided by :mod:`passlib.apps`
to be more useful than accessing this class directly.

.. seealso::

    * :ref:`password hash usage <password-hash-examples>` --
      for examples of how to use this class via the common hash interface.

    * :mod:`passlib.apps` for a list of :ref:`premade mysql contexts <mysql-contexts>`.

Interface
=========
.. autoclass:: mysql41()

Format & Algorithm
==================
A mysql-41 password hash consists of an asterisk ``*`` followed
by 40 hexadecimal digits, directly encoding the 160 bit checksum.
An example hash (of ``password``) is ``*2470C0C06DEE42FD1618BB99005ADCA2EC9D1E19``.
MySQL always uses upper-case letters,
and so does Passlib (though Passlib will recognize lower-case letters as well).

The checksum is calculated simply, as the SHA1 hash of the SHA1 hash of the password,
which is then encoded into hexadecimal.

Security Issues
===============
Lacking any sort of salt, and using only 2 rounds
of the common SHA1 message digest, it's not very secure,
and should not be used for *any*
purpose but verifying existing MySQL 4.1+ password hashes.
