.. index:: MySQL; OLD_PASSWORD()

========================================================================
:class:`passlib.hash.mysql323` - MySQL 3.2.3 password hash
========================================================================

.. include:: ../_fragments/insecure_hash_warning.rst

.. currentmodule:: passlib.hash

This class implements the first of MySQL's password hash functions,
used to store its user account passwords. Introduced in MySQL 3.2.3
under the function ``PASSWORD()``, this function was renamed
to ``OLD_PASSWORD()`` under MySQL 4.1, when a newer password
hash algorithm was introduced (see :class:`~passlib.hash.mysql41`).
Users will most likely find the frontends provided by :mod:`passlib.apps`
to be more useful than accessing this class directly.
That aside, this class can be used as follows::

    >>> from passlib.hash import mysql323

    >>> # hash password
    >>> mysql323.hash("password")
    '5d2e19393cc5ef67'

    >>> # verify correct password
    >>> mysql323.verify("password", '5d2e19393cc5ef67')
    True
    >>> mysql323.verify("secret", '5d2e19393cc5ef67')
    False

.. seealso::

    * :ref:`password hash usage <password-hash-examples>` -- for more usage examples

    * :mod:`passlib.apps` -- for a list of predefined :ref:`mysql contexts <mysql-contexts>`.

Interface
=========
.. autoclass:: mysql323()

Format & Algorithm
==================
A mysql-323 password hash consists of 16 hexadecimal digits,
directly encoding the 64 bit checksum. MySQL always uses
lower-case letters, and so does Passlib
(though Passlib will recognize upper case letters as well).

The algorithm used is extremely simplistic, for details,
see the source implementation in the footnotes [#f1]_.

Security Issues
===============
Lacking any sort of salt, ignoring all whitespace,
and having a simplistic algorithm that amounts to little more than a checksum,
this is not secure, and should not be used for *any* purpose
but verifying existing MySQL 3.2.3 - 4.0 password hashes.

.. rubric:: Footnotes

.. [#f1] Source of implementation used by Passlib -
         `<http://djangosnippets.org/snippets/1508/>`_

.. [#f2] Mysql document describing transition -
         `<http://dev.mysql.com/doc/refman/4.1/en/password-hashing.html>`_
