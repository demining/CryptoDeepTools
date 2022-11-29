==================================================================
:class:`passlib.hash.unix_disabled` - Unix Disabled Account Helper
==================================================================

.. currentmodule:: passlib.hash

This class does not provide an encryption scheme,
but instead provides a helper for handling disabled
password fields as found in unix ``/etc/shadow`` files.
This class is mainly useful only for plugging into a
:class:`~passlib.context.CryptContext` instance.
It can be used directly as follows::

    >>> from passlib.hash import unix_disabled

    >>> # 'hashing' a password always results in "!" or "*"
    >>> unix_disabled.hash("password")
    '!'

    >>> # verifying will fail for all passwords and hashes
    >>> unix_disabled.verify("password", "!")
    False
    >>> unix_disabled.verify("letmein", "*NOPASSWORD*")
    False

    >>> # this class should identify all strings which aren't
    >>> # valid Unix crypt() output, while leaving MCF hashes alone
    >>> unix_disabled.identify('!')
    True
    >>> unix_disabled.identify('')
    True
    >>> unix_disabled.identify("$1$somehash")
    False

Interface
=========
.. autoclass:: unix_disabled()

Deprecated Interface
====================
.. autoclass:: unix_fallback()

Deviations
==========
According to the Linux ``shadow`` man page, an empty string is treated
as a wildcard by Linux, allowing all passwords. For security purposes,
this behavior is NOT supported; empty strings are treated the same as ``!`` or ``*``.
