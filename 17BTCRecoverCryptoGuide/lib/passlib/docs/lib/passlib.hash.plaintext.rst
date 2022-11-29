==================================================================
:class:`passlib.hash.plaintext` - Plaintext
==================================================================

.. currentmodule:: passlib.hash

This class stores passwords in plaintext. This is, of course, ridiculously insecure;
it is provided for backwards compatibility when migrating
existing applications. *It should not be used* for any other purpose.
This class should always be the last algorithm checked, as it will recognize all hashes.
It can be used directly as follows::

    >>> from passlib.hash import plaintext as plaintext

    >>> # "encrypt" password
    >>> plaintext.hash("password")
    'password'

    >>> # verify password
    >>> plaintext.verify("password", "password")
    True
    >>> plaintext.verify("secret", "password")
    False

.. seealso::

    * :ref:`password hash usage <password-hash-examples>` -- for more usage examples

    * :class:`ldap_plaintext <passlib.hash.ldap_plaintext>` -- on LDAP systems,
      this format is probably more appropriate for storing plaintext passwords.

Interface
=========
.. autoclass:: plaintext()
