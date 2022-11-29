================================================================
:samp:`passlib.hash.ldap_{crypt}` - LDAP crypt() Wrappers
================================================================

.. currentmodule:: passlib.hash

Passlib provides support for all the standard
LDAP hash formats specified by :rfc:`2307`.
One of these, identified by RFC 2307 as the ``{CRYPT}`` scheme,
is somewhat different from the others.
Instead of specifying a password hashing scheme,
it's supposed to wrap the host OS's :func:`!crypt()`.
Being host-dependant, the actual hashes supported
by this scheme may differ greatly between host systems.
In order to provide uniform support across platforms,
Passlib defines a corresponding :samp:`ldap_{crypt-scheme}` class
for each of the :ref:`standard unix hashes <standard-unix-hashes>`.
These classes all wrap the underlying implementations documented
elsewhere in Passlib, and can be used directly as follows::

    >>> from passlib.hash import ldap_md5_crypt

    >>> # hash password
    >>> hash = ldap_md5_crypt.hash("password")
    >>> hash
    '{CRYPT}$1$gwvn5BO0$3dyk8j.UTcsNUPrLMsU6/0'

    >>> # verify password
    >>> ldap_md5_crypt.verify("password", hash)
    True
    >>> ldap_md5_crypt.verify("secret", hash)
    False

    >>> # determine if the underlying crypt() algorithm is supported
    >>> # by your host OS, or if the builtin Passlib implementation is being used.
    >>> # "os_crypt" - host supported; "builtin" - passlib version
    >>> ldap_md5_crypt.get_backend()
    "os_crypt"

.. seealso::

    * :ref:`password hash usage <password-hash-examples>` -- for more usage examples

    * :doc:`ldap_{digest} <passlib.hash.ldap_std>` -- for the other standard LDAP hashes.

    * :mod:`passlib.apps` -- for a list of :ref:`premade ldap contexts <ldap-contexts>`.

Interface
=========
.. class:: ldap_des_crypt()
.. class:: ldap_bsdi_crypt()
.. class:: ldap_md5_crypt()
.. class:: ldap_bcrypt()
.. class:: ldap_sha1_crypt()
.. class:: ldap_sha256_crypt()
.. class:: ldap_sha512_crypt()

    All of these classes have the same interface as their corresponding
    underlying hash (e.g. :class:`des_crypt`, :class:`md5_crypt`, etc).

.. rubric:: Footnotes

.. [#pwd] The manpage for :command:`slappasswd` - `<http://gd.tuwien.ac.at/linuxcommand.org/man_pages/slappasswd8.html>`_.

.. [#rfc] The basic format for these hashes is laid out in RFC 2307 - `<http://www.ietf.org/rfc/rfc2307.txt>`_
