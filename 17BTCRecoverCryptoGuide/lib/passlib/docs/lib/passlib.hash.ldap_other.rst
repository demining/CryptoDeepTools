===============================================================
:samp:`passlib.hash.ldap_{other}` - Non-Standard RFC2307 Hashes
===============================================================

.. currentmodule:: passlib.hash

This section as a catch-all for a number of password hash
formats supported by Passlib which use :rfc:`2307` style encoding,
but are not part of any standard.

.. seealso::

    * :ref:`password hash usage <password-hash-examples>` --
      for examples of how to use these classes via the common hash interface.

    * :ref:`ldap-hashes` for a full list of RFC 2307 style hashes.

Hexadecimal Digests
===================
All of the digests specified in RFC 2307 use base64 encoding.
The following are non-standard versions which use hexadecimal
encoding, as is found in some applications.

.. class:: ldap_hex_md5

    hexadecimal version of :class:`ldap_md5`,
    this is just the md5 digest of the password.

    an example hash (of ``password``) is ``{MD5}5f4dcc3b5aa765d61d8327deb882cf99``.

.. class:: ldap_hex_sha1

    hexadecimal version of :class:`ldap_sha1`,
    this is just the sha1 digest of the password.

    an example hash (of ``password``) is ``{SHA}5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8``.

Other Hashes
============
.. class:: roundup_plaintext

    RFC 2307 specifies plaintext passwords should be stored
    without any identifying prefix.
    This class implements an alternate method used by the Roundup Issue Tracker [#roundup]_,
    which (when storing plaintext passwords) uses the identifying prefix ``{plaintext}``.

    an example hash (of ``password``) is ``{plaintext}password``.

.. rubric:: Footnotes

.. [#roundup] Roundup Issue Tracker homepage - `<http://www.roundup-tracker.org>`_.
