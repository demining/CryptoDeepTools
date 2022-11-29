.. index::
    single: PasswordHash interface
    single: custom hash handler; requirements

.. module:: passlib.ifc
    :synopsis: abstract interfaces used by Passlib

=============================================
:mod:`passlib.ifc` -- Password Hash Interface
=============================================

.. _password-hash-api:

PasswordHash API
================
This module provides the :class:`!PasswordHash` abstract base class.
This class defines the common methods and attributes present
on all the hashes importable from the :mod:`passlib.hash` module.
Additionally, the :class:`passlib.context.CryptContext` class is deliberately
designed to parallel many of this interface's methods.

.. rst-class:: float-center

.. seealso::

    :ref:`hash-tutorial` -- Overview of this interface and how to use it.

Base Abstract Class
===================
.. class:: PasswordHash()

    This class provides an abstract interface for an arbitrary password hasher.

    Applications will generally not construct instances directly --
    most of the operations are performed via classmethods, allowing
    instances of a given class to be an internal detail used to implement
    the various operations.

    While :class:`!PasswordHash` offers a number of methods and attributes,
    most applications will only need the two primary methods:

    * :meth:`PasswordHash.hash` - generate new salt, return hash of password.
    * :meth:`PasswordHash.verify` - verify password against existing hash.

    Two additional support methods are also provided:

    * :meth:`PasswordHash.using` - create subclass with customized configuration.
    * :meth:`PasswordHash.identify` - check if hash belongs to this algorithm.

    Each hash algorithm also provides a number of :ref:`informational attributes <informational-attributes>`,
    allowing programmatic inspection of its options and parameter limits.

.. seealso::

    :ref:`hash-tutorial` -- Overview of this interface and how to use it.

.. _primary-methods:

Hashing & Verification Methods
==============================
Most applications will only need to use two methods:
:meth:`PasswordHash.hash` to generate new hashes, and :meth:`PasswordHash.verify`
to check passwords against existing hashes.
These methods provide an easy interface for working with a password hash,
and abstract away details such as salt generation, hash normalization,
and hash comparison.

.. classmethod:: PasswordHash.hash(secret, \*\*kwds)

    Digest password using format-specific algorithm,
    returning resulting hash string.

    For most hashes supported by Passlib, the returned string will contain:
    an algorithm identifier, a cost parameter, the salt string,
    and finally the password digest itself.

    :type secret: unicode or bytes
    :arg secret: string containing the password to encode.

    :param \*\*kwds:

        All additional keywords are algorithm-specific, and will be listed
        in that hash's documentation; though many of the more common keywords
        are listed under :attr:`PasswordHash.setting_kwds`
        and :attr:`PasswordHash.context_kwds`.

        .. deprecated:: 1.7

            Passing :attr:`PasswordHash.setting_kwds` such as ``rounds`` and ``salt_size``
            directly into the :meth:`hash` method is deprecated.  Callers should instead
            use ``handler.using(**settings).hash(secret)``.  Support for the old method
            is is tentatively scheduled for removal in Passlib 2.0.

            Context keywords such as ``user`` should still be provided to :meth:`!hash`.

    :returns:
        Resulting password hash, encoded in an algorithm-specific format.
        This will always be an instance of :class:`!str`
        (i.e. :class:`unicode` under Python 3, ``ascii``-encoded :class:`bytes` under Python 2).

    :raises ValueError:

        * If a ``kwd``'s value is invalid (e.g. if a ``salt`` string
          is too small, or a ``rounds`` value is out of range).

        * If ``secret`` contains characters forbidden by the hash algorithm
          (e.g. :class:`!des_crypt` forbids NULL characters).

    :raises TypeError:

        * if ``secret`` is not :class:`!unicode` or :class:`bytes`.
        * if a ``kwd`` argument has an incorrect type.
        * if an algorithm-specific required ``kwd`` is not provided.

    .. versionchanged:: 1.6
        Hashes now raise :exc:`TypeError` if a required keyword is missing,
        rather than :exc:`ValueError` like in previous releases; in order
        to conform with normal Python behavior.

    .. versionchanged:: 1.6
        Passlib is now much stricter about input validation: for example,
        out-of-range ``rounds`` values now cause an error instead of being
        clipped (though applications may set :ref:`relaxed=True <relaxed-keyword>`
        to restore the old behavior).

    .. versionchanged:: 1.7

        This method was renamed from :meth:`encrypt`.
        Deprecated support for passing settings directly into :meth:`!hash`.

.. classmethod:: PasswordHash.encrypt(secret, \*\*kwds)

    Legacy alias for :meth:`PasswordHash.hash`.

    .. deprecated:: 1.7

        This method was renamed to :meth:`!hash` in version 1.7.
        This alias will be removed in version 2.0, and should only
        be used for compatibility with Passlib 1.3 - 1.6.

.. classmethod:: PasswordHash.verify(secret, hash, \*\*context_kwds)

    Verify a secret using an existing hash.

    This checks if a secret matches against the one stored
    inside the specified hash.

    :type secret: unicode or bytes
    :param secret:
        A string containing the password to check.

    :type secret: unicode or bytes
    :param hash:
        A string containing the hash to check against,
        such as returned by :meth:`PasswordHash.hash`.

        Hashes may be specified as :class:`!unicode` or
        ``ascii``-encoded :class:`!bytes`.

    :param \*\*kwds:
        Very few hashes will have additional keywords.

        The ones that do typically require external contextual information
        in order to calculate the digest. For these hashes,
        the values must match the ones passed to the original
        :meth:`PasswordHash.hash` call when the hash was generated,
        or the password will not verify.

        These additional keywords are algorithm-specific, and will be listed
        in that hash's documentation; though the more common keywords
        are listed under :attr:`PasswordHash.context_kwds`.
        Examples of common keywords include ``user``.

    :returns:
        ``True`` if the secret matches, otherwise ``False``.

    :raises TypeError:
        * if either ``secret`` or ``hash`` is not a unicode or bytes instance.
        * if the hash requires additional ``kwds`` which are not provided,
        * if a ``kwd`` argument has the wrong type.

    :raises ValueError:
        * if ``hash`` does not match this algorithm's format.
        * if the ``secret`` contains forbidden characters (see
          :meth:`PasswordHash.hash`).
        * if a configuration/salt string generated by :meth:`PasswordHash.genconfig`
          is passed in as the value for ``hash`` (these strings look
          similar to a full hash, but typically lack the digest portion
          needed to verify a password).

    .. versionchanged:: 1.6
        This function now raises :exc:`ValueError` if ``None`` or a config string is provided
        instead of a properly-formed hash; previous releases were inconsistent
        in their handling of these two border cases.

.. seealso::

    * :ref:`hash-verifying` tutorial for a usage example

.. _crypt-methods:

.. rst-class:: html-toggle

Crypt Methods
=============
Taken together, the :meth:`PasswordHash.genconfig` and :meth:`PasswordHash.genhash`
are two tightly-coupled methods that mimic the standard Unix
"crypt" interface. The first method generates salt / configuration
strings from a set of settings, and the second hashes the password
using the provided configuration string.

.. seealso::

    Most applications will find :meth:`PasswordHash.hash` much more useful,
    as it combines the functionality of these two methods into one.

.. classmethod:: PasswordHash.genconfig(\*\*setting_kwds)

    .. deprecated:: 1.7

        As of 1.7, this method is deprecated, and slated for complete removal in Passlib 2.0.

        For all known real-world uses, ``.hash("", **settings)``
        should provide equivalent functionality.

        This deprecation may be reversed if a use-case presents itself in the mean time.

    Returns a configuration string encoding settings for hash generation.

    This function takes in all the same :attr:`PasswordHash.setting_kwds`
    as :meth:`PasswordHash.hash`, fills in suitable defaults,
    and encodes the settings into a single "configuration" string,
    suitable passing to :meth:`PasswordHash.genhash`.

    :param \*\*kwds:
        All additional keywords are algorithm-specific, and will be listed
        in that hash's documentation; though many of the more common keywords
        are listed under :attr:`PasswordHash.setting_kwds`
        Examples of common keywords include ``salt`` and ``rounds``.

    :returns:
        A configuration string (as :class:`!str`).

    :raises ValueError, TypeError:
        This function raises exceptions for the same
        reasons as :meth:`PasswordHash.hash`.

    .. versionchanged:: 1.7

        This should now always return a full hash string, even in cases
        where previous releases would return a truncated "configuration only" string,
        or ``None``.

.. classmethod:: PasswordHash.genhash(secret, config, \*\*context_kwds)

    Encrypt secret using specified configuration string.

    .. deprecated:: 1.7

        As of 1.7, this method is deprecated, and slated for complete removal in Passlib 2.0.

        This deprecation may be reversed if a use-case presents itself in the mean time.

    This takes in a password and a configuration string,
    and returns a hash for that password.

    :type secret: unicode or bytes
    :arg secret:
        string containing the password to be encrypted.

    :type config: unicode or bytes
    :arg config:
        configuration string to use when hashing the secret.
        this can either be an existing hash that was previously
        returned by :meth:`PasswordHash.genhash`, or a configuration string
        that was previously created by :meth:`PasswordHash.genconfig`.

        .. versionchanged:: 1.7

            ``None`` is no longer accepted for hashes which (prior to 1.7)
            lacked a configuration string format.

    :param \*\*kwds:
        Very few hashes will have additional keywords.

        The ones that do typically require external contextual information
        in order to calculate the digest. For these hashes,
        the values must match the ones passed to the original
        :meth:`PasswordHash.hash` call when the hash was generated,
        or the password will not verify.

        These additional keywords are algorithm-specific, and will be listed
        in that hash's documentation; though the more common keywords
        are listed under ::attr:`PasswordHash.context_kwds`.
        Examples of common keywords include ``user``.

    :returns:
        Encoded hash matching specified secret, config, and kwds.
        This will always be a native :class:`!str` instance.

    :raises ValueError, TypeError:
        This function raises exceptions for the same
        reasons as :meth:`PasswordHash.hash`.

    .. warning::

        Traditionally, password verification using the "crypt" interface
        was done by testing if ``hash == genhash(password, hash)``.
        This test is only reliable for a handful of algorithms,
        as various hash representation issues may cause false results.
        Applications are strongly urged to use :meth:`~PasswordHash.verify` instead.

.. _support-methods:

Factory Creation
================
One powerful method offered by the :class:`!PasswordHash` class :meth:`PasswordHash.using`.
This method allows you to quickly create subclasses of a specific hash,
providing it with preconfigured defaults specific to your application:

.. classmethod:: PasswordHash.using(relaxed=False, \*\*settings)

    This method takes in a set of algorithm-specific settings,
    and returns a new handler object which uses the specified default settings instead.

    :param \*\*settings:

        All keywords are algorithm-specific, and will be listed
        in that hash's documentation; though many of the more common keywords
        are listed under :attr:`PasswordHash.setting_kwds`.
        Examples of common keywords include ``rounds`` and ``salt_size``.

    :returns:
        A new object which adheres to :class:`!PasswordHash` api.

    :raises ValueError:

        * If a keywords's value is invalid (e.g. if a ``salt`` string
          is too small, or a ``rounds`` value is out of range).

    :raises TypeError:

        * if a ``kwd`` argument has an incorrect type.

    .. versionadded:: 1.7

.. seealso:: :ref:`hash-configuring` tutorial for a usage example

Hash Inspection Methods
=======================
There are currently two hash inspection methods, :meth:`PasswordHash.identify`
and :meth:`PasswordHash.needs_update`.

.. classmethod:: PasswordHash.identify(hash)

    Quickly identify if a hash string belongs to this algorithm.

    :type hash: unicode or bytes
    :arg hash:
        the candidate hash string to check

    :returns:
        * ``True`` if the input is a configuration string or hash string
           identifiable as belonging to this scheme (even if it's malformed).
        * ``False`` if the input does not belong to this scheme.

    :raises TypeError:
        if :samp:`{hash}` is not a unicode or bytes instance.

    .. note::

        A small number of the hashes supported by Passlib lack a reliable
        method of identification (e.g. :class:`~passlib.hash.lmhash`
        and :class:`~passlib.hash.nthash` both consist of 32 hexadecimal characters,
        with no distinguishing features). For such hashes, this method
        may return false positives.

    .. seealso::

        If you are considering using this method to select from multiple
        algorithms (e.g. in order to verify a password), you will be better served
        by the :ref:`CryptContext <context-reference>` class.

.. automethod:: PasswordHash.needs_update

..
    the undocumented and experimental support methods currently include
    parsehash() and bitsize()


    .. todo::

        document the :attr:`is_disabled` and DisabledHash interface
        added in passlib 1.7.

.. _informational-attributes:

.. _general-attributes:

General Informational Attributes
================================
Each hash provides a handful of informational attributes, allowing
programs to dynamically adapt to the requirements of different
hash algorithms. The following attributes should be defined for all
the hashes in passlib:

.. attribute:: PasswordHash.name

    Name uniquely identifying this hash.

    For the hashes built into Passlib, this will always match
    the location where it was imported from — :samp:`passlib.hash.{name}` —
    though externally defined hashes may not adhere to this.

    This should always be a :class:`!str` consisting of lowercase ``a-z``,
    the digits ``0-9``, and the underscore character ``_``.

.. attribute:: PasswordHash.setting_kwds

    Tuple listing the keywords supported by :meth:`PasswordHash.using` control hash generation,
    and which will be encoded into the resulting hash.

    (These keywords will also be accepted by :meth:`PasswordHash.hash` and :meth:`PasswordHash.genconfig`,
     though that behavior is deprecated as of Passlib 1.7; and will be removed in Passlib 2.0).

    This list commonly includes keywords for controlling salt generation,
    adjusting time-cost parameters, etc. Most of these settings are optional,
    and suitable defaults will be chosen if they are omitted (e.g. salts
    will be autogenerated).

    While the documentation for each hash should have a complete list of
    the specific settings the hash uses, the following keywords should have
    roughly the same behavior for all the hashes that support them:

    .. index::
        single: salt; PasswordHash keyword

    ``salt``
        Specifies a fixed salt string to use, rather than randomly
        generating one.

        This option is supported by most of the hashes in Passlib,
        though typically it isn't used, as random generation of a salt
        is usually the desired behavior.

        Hashes typically require this to be a :class:`!unicode` or
        :class:`!bytes` instance, with additional constraints
        appropriate to the algorithm.

    .. index::
        single: salt_size; PasswordHash keyword

    ``salt_size``

        Most algorithms which support the ``salt`` setting will
        autogenerate a salt when none is provided. Most of those hashes
        will also offer this option, which allows the caller to specify
        the size of salt which should be generated. If omitted,
        the hash's default salt size will be used.

        .. seealso:: the :ref:`salt info <salt-attributes>` attributes (below)

    .. index::
        single: rounds; PasswordHash keyword

    ``rounds``
        If present, this means the hash can vary the number
        of internal rounds used in some part of its algorithm,
        allowing the calculation to take a variable amount of processor
        time, for increased security.

        While this is almost always a non-negative integer,
        additional constraints may be present for each algorithm
        (such as the cost varying on a linear or logarithmic scale).

        This value is typically omitted, in which case a default
        value will be used. The defaults for all the hashes in Passlib
        are periodically retuned to strike a balance between
        security and responsiveness.

        .. seealso:: the :ref:`rounds info <rounds-attributes>` attributes (below)

    .. index::
        single: ident; PasswordHash keyword

    ``ident``
        If present, the class supports multiple formats for encoding
        the same hash. The class's documentation will generally list
        the allowed values, allowing alternate output formats to be selected.

        Note that these values will typically correspond to different
        revision of the hash algorithm itself, and they may not all
        offer the same level of security.

    ``truncate_error``

        This will be present if and only if the hash truncates passwords
        larger than some limit (reported via it's :attr:`truncate_size` attribute).
        By default, they will silently truncate passwords above their limit.
        Setting ``truncate_error=True`` will cause :meth:`PasswordHash.hash`
        to raise a :exc:`~passlib.exc.PasswordTruncateError` instead.

    .. index::
        single: relaxed; PasswordHash keyword

    .. _relaxed-keyword:

    ``relaxed``
        By default, passing an invalid value to :meth:`PasswordHash.using`
        will result in a :exc:`ValueError`. However, if ``relaxed=True``
        then Passlib will attempt to correct the error and (if successful)
        issue a :exc:`~passlib.exc.PasslibHashWarning` instead.
        This warning may then be filtered if desired.
        Correctable errors include (but are not limited to): ``rounds``
        and ``salt_size`` values that are too low or too high, ``salt``
        strings that are too large.

        .. versionadded:: 1.6

.. _context-keywords:

.. attribute:: PasswordHash.context_kwds

    Tuple listing the keywords supported by :meth:`PasswordHash.hash`,
    :meth:`PasswordHash.verify`, and :meth:`PasswordHash.genhash`.
    These keywords are different from the settings kwds in that the context keywords
    affect the hash, but are not encoded within it, and thus must be provided each time
    the hash is calculated.

    This list commonly includes a user account, http realm identifier,
    etc. Most of these keywords are required by the hashes which support them,
    as they are frequently used in place of an embedded salt parameter.

    *Most hash algorithms in Passlib will have no context keywords.*

    While the documentation for each hash should have a complete list of
    the specific context keywords the hash uses,
    the following keywords should have roughly the same behavior
    for all the hashes that support them:

    .. index::
        single: user; PasswordHash keyword

    ``user``

        If present, the class requires a username be specified whenever
        performing a hash calculation (e.g.
        :class:`~passlib.hash.postgres_md5` and
        :class:`~passlib.hash.oracle10`).

    .. index::
        single: encoding; PasswordHash keyword

    ``encoding``

        Some hashes have poorly-defined or host-dependant unicode behavior,
        and properly hashing a non-ASCII password requires providing
        the correct encoding (:class:`~passlib.hash.lmhash` is perhaps the worst offender).
        Hashes which provide this keyword will always expose
        their default encoding programmatically via the
        :attr:`PasswordHash.default_encoding` attribute.

.. attribute:: truncate_size

    A positive integer, indicating the hash will truncate any passwords larger than this many bytes.
    If ``None`` (the more common case), indicates the hash will use
    the entire password provided.

    Hashes which specify this setting will also support a ``truncate_error``
    flag via their :meth:`PasswordHash.using` method, to configure
    how truncation is handled.

.. seealso:: :ref:`hash-configuring` tutorial for a usage example

.. _salt-attributes:

Salt Information Attributes
===========================
For schemes which support a salt string,
``"salt"`` should be listed in their :attr:`PasswordHash.setting_kwds`,
and the following attributes should be defined:

.. attribute:: PasswordHash.max_salt_size

    The maximum number of bytes/characters allowed in the salt.
    Should either be a positive integer, or ``None`` (indicating
    the algorithm has no effective upper limit).

.. attribute:: PasswordHash.min_salt_size

    The minimum number of bytes/characters required for the salt.
    Must be an integer between 0 and :attr:`PasswordHash.max_salt_size`.

.. attribute:: PasswordHash.default_salt_size

    The default salt size that will be used when generating a salt,
    assuming ``salt_size`` is not set explicitly. This is typically
    the same as :attr:`max_salt_size`,
    or a sane default if ``max_salt_size=None``.

.. attribute:: PasswordHash.salt_chars

    A unicode string containing all the characters permitted
    in a salt string.

    For most :ref:`modular-crypt-format` hashes,
    this is equal to :data:`passlib.utils.binary.HASH64_CHARS`.
    For the rare hashes where the ``salt`` parameter must be specified
    in bytes, this will be a placeholder :class:`!bytes` object containing
    all 256 possible byte values.

..
    not yet documentated, want to make sure this is how we want to do things:

    .. attribute:: PasswordHash.default_salt_chars

        sequence of characters used to generate new salts.
        this is typically the same as :attr:`PasswordHash.salt_chars`, but some
        hashes accept a larger-than-useful range, and this will
        contain only the "common" values used for generation.

.. _rounds-attributes:

Rounds Information Attributes
=============================
For schemes which support a variable time-cost parameter,
``"rounds"`` should be listed in their :attr:`PasswordHash.setting_kwds`,
and the following attributes should be defined:

.. attribute:: PasswordHash.max_rounds

    The maximum number of rounds the scheme allows.
    Specifying a value beyond this will result in a :exc:`ValueError`.
    This will be either a positive integer, or ``None`` (indicating
    the algorithm has no effective upper limit).

.. attribute:: PasswordHash.min_rounds

    The minimum number of rounds the scheme allows.
    Specifying a value below this will result in a :exc:`ValueError`.
    Will always be an integer between 0 and :attr:`PasswordHash.max_rounds`.

.. attribute:: PasswordHash.default_rounds

    The default number of rounds that will be used if none is explicitly
    provided to :meth:`PasswordHash.hash`.
    This will always be an integer between :attr:`PasswordHash.min_rounds`
    and :attr:`PasswordHash.max_rounds`.

.. attribute:: PasswordHash.rounds_cost

    While the cost parameter ``rounds`` is an integer, how it corresponds
    to the amount of time taken can vary between hashes. This attribute
    indicates the scale used by the hash:

    * ``"linear"`` - time taken scales linearly with rounds value
      (e.g. :class:`~passlib.hash.sha512_crypt`)
    * ``"log2"`` - time taken scales exponentially with rounds value
      (e.g. :class:`~passlib.hash.bcrypt`)

.. todo:: document the additional :meth:`PasswordHash.using` keywords
   available for setting rounds limits.

..
    todo: haven't decided if this is how I want the api look before
    formally publishing it in the documentation:

    .. _password-hash-backends:

    Multiple Backends
    =================
    .. note::

        For the most part, applications will not need this interface,
        outside of perhaps calling the :meth:`PasswordHash.get_backend`
        to determine which the active backend.

    Some hashes provided by Passlib have multiple backends which they
    select from at runtime, to provide the fastest implementation available.
    Algorithms which offer multiple backends will expose the following
    methods and attributes:

    .. attribute:: PasswordHash.backends

        Tuple listing names of potential backends (which may or may not be available).
        If this attribute is not present, the hash does not support
        multiple backends.

        While the names of the backends are specific to the hash algorithm,
        the following standard names may be present:

        * ``"os_crypt"`` - backend which uses stdlib's :mod:`!crypt` module.
          this backend will not be available if the underlying host OS
          does not support the particular hash algorithm.

        * ``"builtin"`` - backend using pure-python implementation built into
          Passlib. All hashes will have this as their last backend, as a fallback.

    .. method:: PasswordHash.get_backend()

        This method should return the name of the currently active backend
        that will be used by :meth:`PasswordHash.hash` and :meth:`PasswordHash.verify`.

        :raises passlib.exc.MissingBackendError:
            in the rare case that *no* backends can be loaded.

    .. method:: PasswordHash.has_backend(backend)

        This method can be used to test if a specific backend is available.
        Returns ``True`` or ``False``.

    .. method:: PasswordHash.set_backend(backend)

        This method can be used to select a specific backend.
        The ``backend`` argument must be one of the backends listed
        in :attr:`PasswordHash.backends`, or the special value ``"default"``.

        :raises passlib.exc.MissingBackendError:
            if the specified backend is not available.
