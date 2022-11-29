=================================================================
:samp:`passlib.hash.ldap_pbkdf2_{digest}` - Generic PBKDF2 Hashes
=================================================================

.. index:: pbkdf2 hash; generic ldap

.. currentmodule:: passlib.hash

Passlib provides three custom hash schemes based on the PBKDF2 [#pbkdf2]_ algorithm
which are compatible with the :ref:`ldap hash format <ldap-hashes>`:
:class:`!ldap_pbkdf2_sha1`, :class:`!ldap_pbkdf2_sha256`, :class:`!ldap_pbkdf2_sha512`.
They feature variable length salts, variable rounds.

.. seealso::

    These classes are simply wrappers around the :doc:`MCF-Compatible Simple PBKDF2 Hashes <passlib.hash.pbkdf2_digest>`.

Interface
=========
.. class:: ldap_pbkdf2_sha1()

    this is the same as :class:`pbkdf2_sha1`, except that it
    uses ``{PBKDF2}`` as its identifying prefix instead of ``$pdkdf2$``.

.. class:: ldap_pbkdf2_sha256()

    this is the same as :class:`pbkdf2_sha256`, except that it
    uses ``{PBKDF2-SHA256}`` as its identifying prefix instead of ``$pdkdf2-sha256$``.

.. class:: ldap_pbkdf2_sha512()

    this is the same as :class:`pbkdf2_sha512`, except that it
    uses ``{PBKDF2-SHA512}`` as its identifying prefix instead of ``$pdkdf2-sha512$``.

.. rubric:: Footnotes

.. [#pbkdf2] The specification for the PBKDF2 algorithm - `<http://tools.ietf.org/html/rfc2898#section-5.2>`_,
             part of :rfc:`2898`.
