.. index:: Windows; NT hash

==================================================================
:class:`passlib.hash.nthash` - Windows' NT-HASH
==================================================================

.. include:: ../_fragments/trivial_hash_warning.rst

.. versionadded:: 1.6

.. currentmodule:: passlib.hash

This class implements the NT-HASH algorithm, used by Microsoft Windows NT
and successors to store user account passwords, supplanting
the much weaker :doc:`lmhash <passlib.hash.lmhash>` algorithm.
This class can be used directly as follows::

    >>> from passlib.hash import nthash

    >>> # hash password
    >>> h = nthash.hash("password")
    >>> h
    '8846f7eaee8fb117ad06bdd830b7586c'

    >>> # verify password
    >>> nthash.verify("password", h)
    True
    >>> nthash.verify("secret", h)
    False

.. seealso:: the generic :ref:`PasswordHash usage examples <password-hash-examples>`

Interface
=========
.. autoclass:: nthash()

Format & Algorithm
==================
A nthash consists of 32 hexadecimal digits, which encode the digest.
An example hash (of ``password``) is ``8846f7eaee8fb117ad06bdd830b7586c``.

The digest is calculated by encoding the secret using ``UTF-16-LE``,
taking the MD4 digest, and then encoding
that as hexadecimal.

FreeBSD Variant
===============
For cross-compatibility, FreeBSD's :func:`!crypt` supports storing
NTHASH digests in a manner compatible with the :ref:`modular-crypt-format`,
to enable administrators to store user passwords in a manner compatible with
the SMB/CIFS protocol. This is accomplished by assigning NTHASH digests the
identifier ``$3$``, and prepending the identifier to the normal (lowercase)
NTHASH digest. An example digest (of ``password``) is
``$3$$8846f7eaee8fb117ad06bdd830b7586c`` (note the doubled ``$$``).

.. data:: bsd_nthash

    This object supports FreeBSD's representation of NTHASH
    (which is compatible with the :ref:`modular-crypt-format`),
    and follows the :ref:`password-hash-api`.

    It has no salt and a single fixed round.

    The :meth:`~passlib.ifc.PasswordHash.hash` and :meth:`~passlib.ifc.PasswordHash.genconfig` methods accept no optional keywords.

    .. versionchanged:: 1.6
        This hash was named ``nthash`` under previous releases of Passlib.

Security Issues
===============
This algorithm should be considered *completely* broken:

* It has no salt.
* The MD4 message digest has been severely compromised by collision and
  preimage attacks.
* Brute-force and pre-computed attacks exist targeting MD4 hashes in general,
  and the encoding used by NTHASH in particular.
