================================
New Application Quickstart Guide
================================

Need to quickly get password hash support added into your new application,
but don't have time to wade through pages of documentation,
comparing and contrasting all the different schemes? Then read on...

..
    NOTE: commented this out for now, considering deprecating
    the "custom_app_context", since it's hard to convey policy changes to users.
    May reenable if decide this is still good route to go.

    Really Quick Start
    ==================
    The fastest route is to use the preconfigured
    :data:`~passlib.apps.custom_app_context` object.
    It supports the :class:`~passlib.hash.sha256_crypt`
    and :class:`~passlib.hash.sha512_crypt` schemes,
    and defaults to 40000 hash iterations for increased strength.
    For applications which want to quickly add password hashing,
    all they need to do is the following::

        >>> # import the context under an app-specific name (so it can easily be replaced later)
        >>> from passlib.apps import custom_app_context as pwd_context

        >>> # hash a password...
        >>> hash = pwd_context.hash("somepass")

        >>> # verifying a password...
        >>> ok = pwd_context.verify("somepass", hash)

        >>> # [optional] hashing a password for an admin account...
        >>> #            the custom_app_context is preconfigured so that
        >>> #            if the category is set to "admin" instead of None,
        >>> #            it uses a stronger setting of 80000 rounds:
        >>> hash = pwd_context.hash("somepass", category="admin")

    For applications which started using this preset, but whose needs
    have grown beyond it, it is recommended to create your own :mod:`CryptContext <passlib.context>`
    instance; see below for more...

.. index:: Passlib; recommended hash algorithms

.. _recommended-hashes:
.. rst-class:: toc-always-open

Choosing a Hash
================

If you'd like to set up a configuration that's right for your
application, the first thing to do is choose a password hashing scheme.
Passlib contains a large number of schemes, but most of them
should only be used when a specific format is explicitly required.

.. rst-class:: float-center without-title

.. seealso::

    If you already know what hash algorithm(s) you want to use,
    skip to the next section: `Creating and Using a CryptContext`_.

The Options
-----------
There are currently four good choices [#choices]_ for secure hashing:

    * :class:`~passlib.hash.argon2`
    * :class:`~passlib.hash.bcrypt`
    * :class:`~passlib.hash.pbkdf2_sha256` / :class:`~passlib.hash.pbkdf2_sha512`
    * :class:`~passlib.hash.sha256_crypt` / :class:`~passlib.hash.sha512_crypt`

All four hashes share the following properties:

    * No known vulnerabilities.
    * Based on documented and widely reviewed algorithms.
    * Public-domain or BSD-licensed reference implementations available.
    * variable rounds for configuring flexible cpu cost on a per-hash basis.
    * At least 96 bits of salt.
    * Basic algorithm has seen heavy scrutiny and use for at least 10 years
      *(except for Argon2, born around 2013)*.
    * In use across a number of OSes and/or a wide variety of applications.

While Argon2 is much younger than the others, it has seen heavy scrutiny,
and was purpose-designed for password hashing.  In the near future, it stands likely to
become *the* recommended standard.

.. rst-class:: html-toggle

Detailed Comparison of Choices
------------------------------

Argon2
......
:class:`~passlib.hash.argon2` is the newest of the four recommended hashes.
It was selected as the winner of the `2013 Password Hashing Competition <https://password-hashing.net/>`_,
and draws on the design and lessons from BCrypt, PBKDF2, and SCrypt.  Despite
being much newer than the others, it has seen heavy scrutiny.  Since the Argon2 project
had the foresight to provide not just a reference implementation, but a standard
hash encoding format, these hashes should be reliably interoperatable across all implementations.

*Issues:* In its default configuration, Argon2 uses more memory than the other hashes.
However, this is one of its hallmarks as a "memory hard" hashing algorithm, and contributes to its security.
Furthermore the exact amount used is configurable.  Its only main drawback is that as of 2019-01-12,
it's only 6 years old.  It's seen only a few minor adjustments since 2013,
but as it is just now gaining widespread use, the next few years are the period in which it will
likely either prove itself, or be found wanting.  It's for this reason,
any cryptographic algorithm less than a decade old is generally considered "young". :)

BCrypt
......
:class:`~passlib.hash.bcrypt`
is `based <http://www.usenix.org/event/usenix99/provos/provos_html/>`_
on the well-tested Blowfish cipher. In use since 1999,
it's the default hash on all BSD variants. If you want your application's
hashes to be readable by the native BSD crypt() function, this is the hash to use.
There is also an alternative LDAP-formatted version
(:class:`~passlib.hash.ldap_bcrypt`) available.

*Issues:* Neither the original Blowfish,
nor the modified version which BCrypt uses, have been NIST approved;
this matter of concern is what motivated the development of SHA512-Crypt.
As well, its rounds parameter is logarithmically scaled,
making it hard to fine-tune the amount of time taken to verify passwords;
which can be an issue for applications that handle a large number
of simultaneous logon attempts (e.g. web apps). Finally, BCrypt only hashes
the first 72 characters of a password, and will silently truncate longer ones
(Passlib's non-standard :class:`~passlib.hash.bcrypt_sha256` works around this last issue).

PBKDF2
......
:class:`~passlib.hash.pbkdf2_sha512` is a custom hash format designed for Passlib.
However, it directly uses the
`PBKDF2 <http://tools.ietf.org/html/rfc2898#section-5.2>`_
key derivation function, which was standardized in 2000, and found across a
`wide variety <http://en.wikipedia.org/wiki/PBKDF2#Systems_that_use_PBKDF2>`_
of applications and platforms. Unlike the previous two hashes,
PBKDF2 has a simple and portable design,
which is resistant (but not immune) to collision and preimage attacks
on the underlying message digest.
There is also :class:`~passlib.hash.pbkdf2_sha256`, which may be faster
on 32 bit processors; as well as LDAP-formatted versions of these (
:class:`~passlib.hash.ldap_pbkdf2_sha512` and
:class:`~passlib.hash.ldap_pbkdf2_sha256`).

*Issues:* PBKDF2 has no major security or portability issues,
and compares favorably against bcrypt.  However, bcrypt has proven slightly
more resistant to modern GPU-based cracking techniques.

SHA512-Crypt
............
:class:`~passlib.hash.sha512_crypt` is
based on the well-tested :class:`~passlib.hash.md5_crypt`
algorithm. In use since 2008, it's the default hash on most Linux systems;
its direct ancestor :class:`!md5_crypt` has been in use since 1994 on most Unix systems.
If you want your application's hashes to be readable by the
native Linux crypt() function, this is the hash to use.
There is also :class:`~passlib.hash.sha256_crypt`, which may be faster
on 32 bit processors; as well as LDAP-formatted versions of these (
:class:`~passlib.hash.ldap_sha512_crypt` and
:class:`~passlib.hash.ldap_sha256_crypt`).

*Issues:* Like :class:`~passlib.hash.md5_crypt`, its algorithm
composes the underlying message digest hash in a baroque
and somewhat arbitrary set of combinations.
So far this "kitchen sink" design has been successful in its
primary purpose: to prevent any attempts to create an optimized
version for use in a pre-computed or brute-force search.
However, this design also hampers analysis of the algorithm
for future flaws.

While this algorithm is still considered secure, it has fallen out of favor
in comparison to bcrypt and pbkdf2, due to its non-standard construction.

Furthermore, when compared to Argon2 and BCrypt,
SHA512-Crypt and PBKDF2 have proven more susceptible to cracking using modern GPU-based techniques.

.. index:: Google App Engine; recommended hash algorithm

:class:`~passlib.hash.sha512_crypt` is probably the best choice for Google App Engine,
as Google's production servers appear to provide native support
via :mod:`crypt`, which will be used by Passlib.

.. note::

    References to this algorithm are frequently confused with a raw SHA-512 hash.
    While :class:`!sha512_crypt` uses the SHA-512 hash as a cryptographic primitive,
    the algorithm's resulting password hash is far more secure.

Making a Decision
-----------------
For new applications, this decision comes down to a couple of questions:

1. Does the hash need to be natively supported by your operating system's :func:`!crypt` api,
   in order to allow inter-operation with third-party applications on the host?

   * If yes, the right choice is either :class:`~passlib.hash.bcrypt` for BSD variants,
     or :class:`~passlib.hash.sha512_crypt` for Linux; since these are natively supported.

   * If no, continue...

2. Does your hosting provider allow you to install C extensions?

   * If no, you probably want to use :class:`~passlib.hash.pbkdf2_sha256`,
     as this currently has the fastest pure-python backend.

   * If they allow C extensions, continue...

3. Do you want to use the latest and greatest, and don't mind increased memory usage
   when hashing?

   * :class:`~passlib.hash.argon2` is a next-generation hashing algorithm,
     attempting to become the new standard.  Its design has been being slightly tweaked
     since 2013, but will quite likely become *the* standard in the next few years.
     You'll need to install the `argon2_cffi  <https://pypi.python.org/pypi/argon2_cffi>`_
     support library.

   * If you want something secure, but more battle tested, continue...

4. The top choices left are :class:`~passlib.hash.bcrypt` and :class:`~passlib.hash.pbkdf2_sha256`.

   Both have advantages, and their respective rough edges;
   though currently the balance is in favor of bcrypt
   (pbkdf2 can be cracked somewhat more efficiently).

   * If choosing bcrypt, we strongly recommend installing the `bcrypt <https://pypi.python.org/pypi/bcrypt>`_
     support library on non-BSD operating systems.

   * If choosing pbkdf2, especially on python2 < 2.7.8 and python 3 < 3.4,
     you will probably want to install `fastpbk2 <https://pypi.python.org/pypi/fastpbkdf2>`_
     support library.

Creating and Using a CryptContext
=================================
Once you've chosen what password hash(es) you want to use,
the next step is to define a :class:`~passlib.context.CryptContext` object
to manage your hashes and related policy configuration.
Insert the following code into your application::

    #
    # import the CryptContext class, used to handle all hashing...
    #
    from passlib.context import CryptContext

    #
    # create a single global instance for your app...
    #
    pwd_context = CryptContext(
        # Replace this list with the hash(es) you wish to support.
        # this example sets pbkdf2_sha256 as the default,
        # with additional support for reading legacy des_crypt hashes.
        schemes=["pbkdf2_sha256", "des_crypt"],

        # Automatically mark all but first hasher in list as deprecated.
        # (this will be the default in Passlib 2.0)
        deprecated="auto",

        # Optionally, set the number of rounds that should be used.
        # Appropriate values may vary for different schemes,
        # and the amount of time you wish it to take.
        # Leaving this alone is usually safe, and will use passlib's defaults.
        ## pbkdf2_sha256__rounds = 29000,
        )

To start using your CryptContext, import the context you created wherever it's needed::

    >>> # import context from where you defined it...
    >>> from myapp.model.security import pwd_context

    >>> # hashing a password...
    >>> hash = pwd_context.hash("somepass")
    >>> hash
    '$pbkdf2-sha256$29000$BSBkLEXIeS9FKMW4F.I85w$SJMzqVU7fw49NDOJZHt2o9vKIfDUVM4cKlAD4MxIgD0'

    >>> # verifying a password...
    >>> pwd_context.verify("somepass", hash)
    True
    >>> pwd_context.verify("wrongpass", hash)
    False

There's many more features packed into the context objects, read
the walkthrough for more...

.. rst-class:: float-center

.. seealso::

    * :ref:`context-tutorial` -- full details of using the CryptContext class
    * :mod:`passlib.context` -- CryptContext API reference
    * :mod:`passlib.hash` -- list of all hashes supported by Passlib.

.. rubric:: Footnotes

.. [#choices] As of June 2016, the most commonly used password hashes are BCrypt and PBKDF2,
              followed by SHA512-Crypt, with Argon2 rapidly moving up the ranks.
              You should make sure you are reading a current
              copy of the Passlib documentation, in case the state
              of things has changed.
