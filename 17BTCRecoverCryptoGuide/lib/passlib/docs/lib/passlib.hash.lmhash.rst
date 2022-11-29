.. index:: LAN Manager hash, Windows; LAN Manager hash

==================================================================
:class:`passlib.hash.lmhash` - LanManager Hash
==================================================================

.. include:: ../_fragments/insecure_hash_warning.rst

.. versionadded:: 1.6

.. currentmodule:: passlib.hash

This class implements the LanManager Hash (aka *LanMan* or *LM* hash).
It was used by early versions of Microsoft Windows to store user passwords,
until it was supplanted (though not entirely replaced) by
the :doc:`nthash <passlib.hash.nthash>` algorithm in Windows NT.
It continues to crop up in production due to its integral role
in the legacy NTLM authentication protocol.
This class can be used directly as follows::

    >>> from passlib.hash import lmhash

    >>> # hash password
    >>> h = lmhash.hash("password")
    >>> h
    'e52cac67419a9a224a3b108f3fa6cb6d'

    >>> # verify correct password
    >>> lmhash.verify("password", h)
    True
    >>> # verify incorrect password
    >>> lmhash.verify("secret", h)
    False

.. seealso:: the generic :ref:`PasswordHash usage examples <password-hash-examples>`

Interface
=========
.. autoclass:: lmhash()

Issues with Non-ASCII Characters
--------------------------------
Passwords containing only ``ascii`` characters should hash and compare
correctly across all LMhash implementations. However, due to historical
issues, no two LMhash implementations handle non-``ascii`` characters in quite
the same way. While Passlib makes every attempt to behave as close to correct
as possible, the meaning of "correct" is dependant on the software you are
interoperating with. If you think you will have passwords containing
non-``ascii`` characters, please read the `Deviations`_ section (below) for
details about the known interoperability issues. It's a mess of codepages.

.. rst-class:: html-toggle

Format & Algorithm
==================
A LM hash consists of 32 hexadecimal digits,
which encode the 16 byte digest. An example hash (of ``password``) is
``e52cac67419a9a224a3b108f3fa6cb6d``.

The digest is calculated as follows:

1. First, the password should be converted to uppercase, and encoded
   using the "OEM Codepage" of the Windows release that the host / target
   server is running [#cp]_.

   For pure-ASCII passwords, this step can be performed
   using the ``us-ascii`` encoding (as most OEM Codepages are ASCII-compatible).
   However, for passwords with non-ASCII characters, this step is fraught
   with compatibility issues and border cases (see `Deviations`_ for details).

2. The password is then truncated to 14 bytes,
   or the end NULL padded to 14 bytes; as appropriate.

3. The first 7 bytes of the truncated password from step 2 are used as a key
   to DES encrypt the constant ``KGS!@#$%``, resulting
   in the first 8 bytes of the final digest.

4. Step 3 is repeated using the second 7 bytes of the password from step 2,
   resulting in the second 8 bytes of the final digest.

5. The combined digests from 3 and 4 are then encoded to hexadecimal.

Security Issues
===============
Due to a myriad of flaws, and the existence high-speed password cracking software
dedicated to LMHASH, this algorithm should be considered broken. The major flaws include:

* It has no salt, making hashes easily pre-computable.

* It limits the password to 14 characters, and converts the password to
  uppercase before hashing, greatly reducing the keyspace.

* By breaking the password into two independent chunks,
  they can be attacked independently and simultaneously.

* The independence of the chunks reveals significant information
  about the original password: The second 8 bytes of the digest
  are the same for all passwords < 8 bytes; and for passwords
  of 8-9 characters, the second chunk can be broken *much* faster,
  revealing part of the password, and reducing the likely
  keyspace for the first chunk.

Deviations
==========
Passlib's implementation differs from others in a few ways, all related to
the handling of non-ASCII characters.

* Unicode Policy:

  Officially, unicode passwords should be encoded using the "OEM Codepage"
  used [#cp]_ by the specific release of Windows that the host or target server
  is running. Common encodings include ``cp437`` (used by the English
  edition of Windows XP), ``cp580`` (used by many Western European editions
  of XP), and ``cp866`` (used by many Eastern European editions of XP).
  Complicating matters further, some third-party implementations are known
  to use encodings such as ``latin-1`` and ``utf-8``, which cause
  non-ASCII characters to hash in a manner incompatible with the canonical
  MS Windows implementation.

  Thus if an application wishes to provide support for non-ASCII passwords,
  it must decide which encoding to use.

  Passlib uses ``cp437`` as it's default encoding for unicode strings.
  However, if your database used a different encoding, you will need to either
  first encode the passwords into bytes, or override the default encoding
  via ``lmhash.hash(secret, encoding="some-other-codec")``

  All known encodings are ``us-ascii``-compatible, so for ASCII passwords,
  the default should be sufficient.

* Upper Case Conversion:

  .. note::

    Future releases of Passlib may change this behavior
    as new information and code is integrated.

  Once critical step in the LMHASH algorithm is converting the password
  to upper case. While ASCII characters are uppercased as normal,
  non-ASCII characters are converted in implementation-dependant ways:

  Windows systems encode the password first, and then
  convert it to uppercase using an codepage-specific table.
  For the most part these tables seem to agree with the Unicode specification,
  but there are some codepoints where they deviate (for example,
  Unicode uppercases U+00B5 -> U+039C, but ``cp437`` leaves it unchanged [#uc]_).

  In contrast, most third-party implementations (Passlib included)
  perform the uppercase conversion first using the Unicode specification,
  and then encode the password second; despite the non-ASCII border cases where the
  resulting hash would not match the official Windows hash.

.. rubric:: Footnotes

.. [#] Article used as reference for algorithm -
       `<http://www.linuxjournal.com/article/2717>`_.

.. [#cp] The OEM codepage used by specific Window XP (and earlier) releases
         can be found at `<http://msdn.microsoft.com/nl-nl/goglobal/cc563921%28en-us%29.aspx>`_.

.. [#uc] Online discussion dealing with upper-case encoding issues -
         `<http://www.openwall.com/lists/john-dev/2011/08/01/2>`_.
