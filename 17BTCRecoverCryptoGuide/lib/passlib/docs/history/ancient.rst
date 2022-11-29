=====================
Passlib 1.4 & Earlier
=====================

**1.4** (2011-05-04)
====================

This release contains a large number of changes, both large and small.
It adds a number of PBKDF2-based schemes, better support
for LDAP-format hashes, improved documentation,
and faster load times. In detail...

Hashes
------

    * added LDAP ``{CRYPT}`` support for all hashes
      known to be supported by OS crypt()
    * added 3 custom PBKDF2 schemes for general use,
      as well as 3 LDAP-compatible versions.
    * added support for Dwayne Litzenberger's PBKDF2 scheme.
    * added support for Grub2's PBKDF2 hash scheme.
    * added support for Atlassian's PBKDF2 password hash
    * added support for all hashes used by the Roundup Issue Tracker
    * bsdi_crypt, sha1_crypt now check for OS crypt() support
    * ``salt_size`` keyword added to encrypt() method of all
      the hashes which support variable-length salts.
    * security fix: disabled unix_fallback's "wildcard password" support
      unless explicitly enabled by user.

CryptContext
------------

    * host_context now dynamically detects which formats
      OS crypt() supports, instead of guessing based on sys.platform.
    * added predefined context for Roundup Issue Tracker database.
    * added CryptContext.verify_and_update() convenience method,
      to make it easier to perform both operations at once.
    * *bugfix:* fixed NameError in category+min_verify_time border case
    * apps & hosts modules now use new
      :class:`LazyCryptContext` wrapper class -
      this should speed up initial import,
      and reduce memory by not loading unneeded hashes.

Documentation
-------------

    * greatly expanded documentation on how to use CryptContexts.
    * roughly documented framework for writing & testing
      custom password handlers.
    * various minor improvements.

Internals
---------

    * added generate_password() convenience method
    * refactored framework for building hash handlers,
      using new mixin-based system.
    * deprecated old handler framework - will remove in 1.5
    * deprecated list_to_bytes & bytes_to_list - not used, will remove in 1.5

Other
-----

    * password hash api - as part of cleaning up optional attributes
      specification, renamed a number of them to reduce ambiguity:

        - renamed *{xxx}_salt_chars* attributes -> *xxx_salt_size*
        - renamed *salt_charset* -> *salt_chars*
        - old attributes still present, but deprecated - will remove in 1.5

    * password hash api - tightened specifications for salt & rounds parameters,
      added support for hashes w/ no max salt size.

    * improved password hash api conformance tests

    * PyPy compatibility

**1.3.1** (2011-03-28)
======================

    Minor bugfix release.

    * bugfix: replaced "sys.maxsize" reference that was failing under py25
    * bugfix: fixed default_rounds>max_rounds border case that could
      cause ValueError during CryptContext.encrypt()
    * minor documentation changes
    * added instructions for building html documentation from source

**1.3** (2011-03-25)
====================

    First public release.

    * documentation completed
    * 99% unittest coverage
    * some refactoring and lots of bugfixes
    * added support for a number of additional password schemes:
      bigcrypt, crypt16, sun md5 crypt, nthash, lmhash, oracle10 & 11,
      phpass, sha1, generic hex digests, ldap digests.

**1.2** (2011-01-06)
====================

    .. note::

        For this and all previous versions, Passlib did not exist independently,
        but as a subpackage of *BPS*, a private & unreleased toolkit library.

    * many bugfixes
    * global registry added
    * transitional release for applications using BPS library.
    * first truly functional release since splitting from BPS library (see below).

**1.0** (2009-12-11)
====================

    * CryptContext & CryptHandler framework
    * added support for: des-crypt, bcrypt (via py-bcrypt), postgres, mysql
    * added unit tests

**0.5** (2008-05-10)
====================

    * initial production version
    * consolidated from code scattered across multiple applications
    * MD5-Crypt, SHA256-Crypt, SHA512-Crypt support
