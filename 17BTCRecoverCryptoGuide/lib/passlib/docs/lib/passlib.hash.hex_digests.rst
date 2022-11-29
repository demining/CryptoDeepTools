===============================================================
:samp:`passlib.hash.hex_{digest}` - Generic Hexadecimal Digests
===============================================================

.. danger::

    Using a single round of any cryptographic hash
    (especially without a salt) is so insecure
    that it's barely better than plaintext.
    Do not use these schemes in new applications.

.. currentmodule:: passlib.hash

Some existing applications store passwords by storing them using
hexadecimal-encoded message digests, such as MD5 or SHA1.
Such schemes are *extremely* vulnerable to pre-computed brute-force attacks,
and should not be used in new applications. However, for the sake
of backwards compatibility when converting existing applications,
Passlib provides wrappers for few of the common hashes.
These classes all wrap the underlying hashlib implementations,
and can be used directly as follows::

    >>> from passlib.hash import hex_sha1 as hex_sha1

    >>> # hash password
    >>> h = hex_sha1.hash("password")
    >>> h
    '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8'

    >>> # verify correct password
    >>> hex_sha1.verify("password", h)
    True
    
    >>> # verify incorrect password
    >>> hex_sha1.verify("secret", h)
    False

.. seealso:: the generic :ref:`PasswordHash usage examples <password-hash-examples>`

.. index:: virtualbox; passwordhash

Interface
=========
.. class:: hex_md4()
.. class:: hex_md5()
.. class:: hex_sha1()
.. class:: hex_sha256()
.. class:: hex_sha512()

    Each of these classes implements a plain hexadecimal encoded
    message digest, using the relevant digest function from :mod:`!hashlib`,
    and following the :ref:`password-hash-api`.

    They support no settings or other keywords.

.. note::

   Oracle VirtualBox's :command:`VBoxManager internalcommands passwordhash` command
   uses :class:`hex_sha256`.

Format & Algorithm
==================
All of these classes just report the result of the specified digest,
encoded as a series of lowercase hexadecimal characters;
though upper case is accepted as input.
