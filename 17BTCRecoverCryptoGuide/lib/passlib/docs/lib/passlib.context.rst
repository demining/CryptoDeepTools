.. index:: CryptContext; reference

.. module:: passlib.context
    :synopsis: CryptContext class, for managing multiple password hash schemes

.. _context-reference:

======================================================
:mod:`passlib.context` - CryptContext Hash Manager
======================================================
This page provides a complete reference of all the methods
and options supported by the :class:`!CryptContext` class
and helper utilities.

.. seealso::

    * :ref:`context-tutorial` --
      overview of this class and walkthrough of how to use it.

.. rst-class:: emphasize-children toc-always-open

The CryptContext Class
======================
.. class:: CryptContext(schemes=None, \*\*kwds)

    Helper for hashing passwords using different algorithms.

    At its base, this is a proxy object that makes it easy to use
    multiple :class:`~passlib.ifc.PasswordHash` objects at the same time.
    Instances of this class can be created by calling the constructor
    with the appropriate keywords, or by using one of the alternate
    constructors, which can load directly from a string or a local file.
    Since this class has so many options and methods, they have been broken
    out into subsections:

    * `Constructor Keywords`_ -- all the keywords this class accepts.
        - `Context Options`_ -- options affecting the Context itself.
        - `Algorithm Options`_ -- options controlling the wrapped hashes.
    * `Primary Methods`_ -- the primary methods most applications need.
    * `Hash Migration`_ -- methods for automatically replacing deprecated hashes.
    * `Alternate Constructors`_ -- creating instances from strings or files.
    * `Changing the Configuration`_ -- altering the configuration of an existing context.
    * `Examining the Configuration`_ -- programmatically examining the context's settings.
    * `Saving the Configuration`_ -- exporting the context's current configuration.
    * `Configuration Errors`_ -- overview of errors that may be thrown by :class:`!CryptContext` constructor

.. index:: CryptContext; keyword options

.. rst-class:: html-toggle expanded toc-always-open

Constructor Keywords
--------------------
The :class:`CryptContext` class accepts the following keywords,
all of which are optional.
The keywords are divided into two categories: `context options`_, which affect
the CryptContext itself; and `algorithm options`_, which place defaults
and limits on the algorithms used by the CryptContext.

.. _context-options:

Context Options
...............
Options which directly affect the behavior of the CryptContext instance:

.. _context-schemes-option:

``schemes``
    List of algorithms which the instance should support.

    The most important option in the constructor,
    This option controls what hashes can be used
    by the :meth:`~CryptContext.hash` method,
    which hashes will be recognized by :meth:`~CryptContext.verify`
    and :meth:`~CryptContext.identify`, and other effects
    throughout the instance.
    It should be a sequence of names,
    drawn from the hashes in :mod:`passlib.hash`.
    Listing an unknown name will cause a :exc:`ValueError`.
    You can use the :meth:`~CryptContext.schemes` method
    to get a list of the currently configured algorithms.
    As an example, the following creates a CryptContext instance
    which supports the :class:`~passlib.hash.sha256_crypt` and
    :class:`~passlib.hash.des_crypt` schemes::

        >>> from passlib.context import CryptContext
        >>> myctx = CryptContext(schemes=["sha256_crypt", "des_crypt"])
        >>> myctx.schemes()
        ("sha256_crypt", "des_crypt")


    .. note::

        The order of the schemes is sometimes important,
        as :meth:`~CryptContext.identify` will run
        through the schemes from first to last until an algorithm
        "claims" the hash. So plaintext algorithms and
        the like should be listed at the end.

    .. seealso:: the :ref:`context-basic-example` example in the tutorial.

.. _context-default-option:

``default``
    Specifies the name of the default scheme.

    This option controls which of the configured
    schemes will be used as the default when creating
    new hashes. This parameter is optional; if omitted,
    the first non-deprecated algorithm in ``schemes`` will be used.
    You can use the :meth:`~CryptContext.default_scheme` method
    to retrieve the name of the current default scheme.
    As an example, the following demonstrates the effect
    of this parameter on the :meth:`~CryptContext.hash`
    method::

        >>> from passlib.context import CryptContext
        >>> myctx = CryptContext(schemes=["sha256_crypt", "md5_crypt"])

        >>> # hash() uses the first scheme
        >>> myctx.default_scheme()
        'sha256_crypt'
        >>> myctx.hash("password")
        '$5$rounds=80000$R5ZIZRTNPgbdcWq5$fT/Oeqq/apMa/0fbx8YheYWS6Z3XLTxCzEtutsk2cJ1'

        >>> # but setting default causes the second scheme to be used.
        >>> myctx.update(default="md5_crypt")
        >>> myctx.default_scheme()
        'md5_crypt'
        >>> myctx.hash("password")
        '$1$Rr0C.KI8$Kvciy8pqfL9BQ2CJzEzfZ/'

    .. seealso:: the :ref:`context-basic-example` example in the tutorial.

.. _context-deprecated-option:

``deprecated``
    List of algorithms which should be considered "deprecated".

    This has the same format as ``schemes``, and should be
    a subset of those algorithms. The main purpose of this
    method is to flag schemes which need to be rehashed
    when the user next logs in. This has no effect
    on the `Primary Methods`_; but if the special `Hash Migration`_
    methods are passed a hash belonging to a deprecated scheme,
    they will flag it as needed to be rehashed using
    the ``default`` scheme.

    This may also contain a single special value,
    ``["auto"]``, which will configure the CryptContext instance
    to deprecate *all* supported schemes except for the default scheme.

    .. versionadded:: 1.6
        Added support for the ``["auto"]`` value.

    .. seealso:: :ref:`context-migration-example` in the tutorial

:samp:`truncate_error`

    By default, some algorithms will truncate large passwords
    (e.g. :class:`~passlib.hash.bcrypt` truncates ones larger than 72 bytes).
    Such hashes accept a ``truncate_error=True`` option to make them
    raise a :exc:`~passlib.exc.PasswordTruncateError` instead.

    This can also be set at the CryptContext level,
    and will passed to all hashes that support it.

    .. versionadded:: 1.7

.. _context-min-verify-time-option:

``min_verify_time``

    If specified, unsuccessful :meth:`~CryptContext.verify`
    calls will be penalized, and take at least this may
    seconds before the method returns. May be an integer
    or fractional number of seconds.

    .. deprecated:: 1.6
        This option has not proved very useful, is ignored by 1.7,
        and will be removed in version 1.8.

    .. versionchanged:: 1.7

        Per deprecation roadmap above, this option is now ignored.

.. _context-harden-verify-option:

``harden_verify``

    Companion to ``min_verify_time``, currently ignored.

    .. versionadded:: 1.7

    .. deprecated:: 1.7.1

        This option is ignored by 1.7.1, and will be removed in 1.8
        along with ``min_verify_time``.

.. _context-algorithm-options:

Algorithm Options
.................
All of the other options that can be passed to a :class:`CryptContext`
constructor affect individual hash algorithms.
All of the following keys have the form :samp:`{scheme}__{key}`,
where :samp:`{scheme}` is the name of one of the algorithms listed
in ``schemes``, and :samp:`{option}` one of the parameters below:

.. _context-default-rounds-option:

:samp:`{scheme}__rounds`

    Set the number of rounds required for this scheme
    when generating new hashes (using :meth:`~CryptContext.hash`).
    Existing hashes which have a different number of rounds will be marked
    as deprecated.

    This essentially sets ``default_rounds``, ``min_rounds``, and ``max_rounds`` all at once.
    If any of those options are also specified, they will override the value specified
    by ``rounds``.

    .. versionadded:: 1.7

        Previous releases of Passlib treated this as an alias for ``default_rounds``.

:samp:`{scheme}__default_rounds`

    Sets the default number of rounds to use with this scheme
    when generating new hashes (using :meth:`~CryptContext.hash`).

    If not set, this will fall back to the an algorithm-specific
    :attr:`~passlib.ifc.PasswordHash.default_rounds`.
    For hashes which do not support a rounds parameter, this option is ignored.
    As an example::

        >>> from passlib.context import CryptContext

        >>> # no explicit default_rounds set, so hash() uses sha256_crypt's default (80000)
        >>> myctx = CryptContext(["sha256_crypt"])
        >>> myctx.hash("fooey")
        '$5$rounds=80000$60Y7mpmAhUv6RDvj$AdseAOq6bKUZRDRTr/2QK1t38qm3P6sYeXhXKnBAmg0'
                   ^^^^^

        >>> # but if a default is specified, it will be used instead.
        >>> myctx = CryptContext(["sha256_crypt"], sha256_crypt__default_rounds=77123)
        >>> myctx.hash("fooey")
        '$5$rounds=77123$60Y7mpmAhUv6RDvj$AdseAOq6bKUZRDRTr/2QK1t38qm3P6sYeXhXKnBAmg0'
                   ^^^^^

    .. seealso:: the :ref:`context-default-settings-example` example in the tutorial.

:samp:`{scheme}__vary_rounds`

    .. deprecated:: 1.7

        This option has been deprecated as of Passlib 1.7, and will be removed in Passlib 2.0.
        The (very minimal) security benefit it provides was judged to not be worth code complexity
        it requires.

    Instead of using a fixed rounds value (such as specified by
    ``default_rounds``, above); this option will cause each call
    to :meth:`~CryptContext.hash` to vary the default rounds value
    by some amount.

    This can be an integer value, in which case each call will use a rounds
    value within the range ``default_rounds +/- vary_rounds``. It may
    also be a floating point value within the range 0.0 .. 1.0,
    in which case the range will be calculated as a proportion of the
    current default rounds (``default_rounds +/- default_rounds*vary_rounds``).
    A typical setting is ``0.1`` to ``0.2``.

    As an example of how this parameter operates::

        >>> # without vary_rounds set, hash() uses the same amount each time:
        >>> from passlib.context import CryptContext
        >>> myctx = CryptContext(schemes=["sha256_crypt"],
        ...                      sha256_crypt__default_rounds=80000)
        >>> myctx.hash("fooey")
        '$5$rounds=80000$60Y7mpmAhUv6RDvj$AdseAOq6bKUZRDRTr/2QK1t38qm3P6sYeXhXKnBAmg0'
        >>> myctx.hash("fooey")
        '$5$rounds=80000$60Y7mpmAhUv6RDvj$AdseAOq6bKUZRDRTr/2QK1t38qm3P6sYeXhXKnBAmg0'
                   ^^^^^

        >>> # but if vary_rounds is set, each one will be randomized
        >>> # (in this case, within the range 72000 .. 88000)
        >>> myctx = CryptContext(schemes=["sha256_crypt"],
        ...                      sha256_crypt__default_rounds=80000,
        ...                      sha256_crypt__vary_rounds=0.1)
        >>> myctx.hash("fooey")
        '$5$rounds=83966$bMpgQxN2hXo2kVr4$jL4Q3ov41UPgSbO7jYL0PdtsOg5koo4mCa.UEF3zan.'
        >>> myctx.hash("fooey")
        '$5$rounds=72109$43BBHC/hYPHzL69c$VYvVIdKn3Zdnvu0oJHVlo6rr0WjiMTGmlrZrrH.GxnA'
                   ^^^^^

    .. note::

        This is not a *needed* security measure, but it lets some of the less-significant
        digits of the rounds value act as extra salt bits; and helps foil
        any attacks targeted at a specific number of rounds of a hash.

.. _context-min-rounds-option:
.. _context-max-rounds-option:

:samp:`{scheme}__min_rounds`,
:samp:`{scheme}__max_rounds`

    These options place a limit on the number of rounds allowed for a particular
    scheme.

    For one, they limit what values are allowed for ``default_rounds``,
    and clip the effective range of the ``vary_rounds`` parameter.
    More importantly though, they proscribe a minimum strength for the hash,
    and any hashes which don't have sufficient rounds will be flagged as
    needing rehashing by the `Hash Migration`_ methods.

    .. note::

        These are configurable per-context limits.
        A warning will be issued if they exceed any hard limits
        set by the algorithm itself.

    .. seealso:: the :ref:`context-min-rounds-example` example in the tutorial.

.. _context-other-option:

:samp:`{scheme}__{other-option}`

    Finally, any other options are assumed to correspond to one of the
    that algorithm's :meth:`!hash` :attr:`settings <~passlib.ifc.PasswordHash.setting_kwds>`,
    such as setting a ``salt_size``.

    .. seealso:: the :ref:`context-default-settings-example` example in the tutorial.

Global Algorithm Options
........................
:samp:`all__{option}`

    The special scheme ``all`` permits you to set an option, and have
    it act as a global default for all the algorithms in the context.
    For instance, ``all__vary_rounds=0.1`` would set the ``vary_rounds``
    option for all the schemes where it was not overridden with an
    explicit :samp:`{scheme}__vary_rounds` option.

    .. deprecated:: 1.7

        This special scheme is deprecated as of Passlib 1.7, and will be removed in Passlib 2.0.
        It's only legitimate use was for ``vary_rounds``, which is also being removed in Passlib 2.0.

.. _user-categories:

.. rst-class:: html-toggle

User Categories
...............
:samp:`{category}__context__{option}`,
:samp:`{category}__{scheme}__{option}`

    Passing keys with this format to the :class:`CryptContext` constructor
    allows you to specify conditional context and algorithm options,
    controlled by the ``category`` parameter supported by most CryptContext
    methods.

    These options are conditional because they only take effect if
    the :samp:`{category}` prefix of the option matches the value of the ``category``
    parameter of the CryptContext method being invoked. In that case,
    they override any options specified without a category
    prefix (e.g. `admin__sha256_crypt__min_rounds` would override
    `sha256_crypt__min_rounds`).
    The category prefix and the value passed into the ``category`` parameter
    can be any string the application wishes to use, the only constraint
    is that ``None`` indicates the default category.

*Motivation:*
Policy limits such as default rounds values and deprecated schemes
generally have to be set globally. However, it's frequently desirable
to specify stronger options for certain accounts (such as admin accounts),
choosing to sacrifice longer hashing time for a more secure password.
The user categories system allows for this.
For example, a CryptContext could be set up as follows::

    >>> # A context object can be set up as follows:
    >>> from passlib.context import CryptContext
    >>> myctx = CryptContext(schemes=["sha256_crypt"],
    ...                      sha256_crypt__default_rounds=77000,
    ...                      staff__sha256_crypt__default_rounds=88000)

    >>> # In this case, calling hash() with ``category=None`` would result
    >>> # in a hash that used 77000 sha256-crypt rounds:
    >>> myctx.hash("password", category=None)
    '$5$rounds=77000$sj3XI0AbKlEydAKt$BhFvyh4.IoxaUeNlW6rvQ.O0w8BtgLQMYorkCOMzf84'
               ^^^^^

    >>> # But if the application passed in ``category="staff"`` when an administrative
    >>> # account set their password, 88000 rounds would be used:
    >>> myctx.hash("password", category="staff")
    '$5$rounds=88000$w7XIdKfTI9.YLwmA$MIzGvs6NU1QOQuuDHhICLmDsdW/t94Bbdfxdh/6NJl7'
               ^^^^^

.. rst-class:: html-toggle expanded

Primary Methods
---------------
The main interface to the CryptContext object deliberately mirrors
the :ref:`PasswordHash <password-hash-api>` interface, since its central
purpose is to act as a container for multiple password hashes.
Most applications will only need to make use two methods in a CryptContext
instance:

.. automethod:: CryptContext.hash
.. automethod:: CryptContext.encrypt
.. automethod:: CryptContext.verify
.. automethod:: CryptContext.identify
.. automethod:: CryptContext.dummy_verify

.. rst-class:: html-toggle

"crypt"-style methods
.....................
Additionally, the main interface offers wrappers for the two Unix "crypt"
style methods provided by all the :class:`~passlib.ifc.PasswordHash` objects:

.. automethod:: CryptContext.genhash
.. automethod:: CryptContext.genconfig

.. rst-class:: html-toggle expanded

Hash Migration
--------------
Applications which want to detect and regenerate deprecated
hashes will want to use one of the following methods:

.. automethod:: CryptContext.verify_and_update
.. automethod:: CryptContext.needs_update
.. automethod:: CryptContext.hash_needs_update

.. rst-class:: html-toggle expanded

.. _context-disabled-hashes:

Disabled Hash Managment
-----------------------
.. versionadded:: 1.7

It's frequently useful to disable a user's ability to login by
replacing their password hash with a standin that's guaranteed
to never verify, against *any* password.   CryptContext offers
some convenience methods for this through the following API.

.. automethod:: CryptContext.disable
.. automethod:: CryptContext.enable
.. automethod:: CryptContext.is_enabled

Alternate Constructors
----------------------
In addition to the main class constructor, which accepts a configuration
as a set of keywords, there are the following alternate constructors:

.. automethod:: CryptContext.from_string
.. automethod:: CryptContext.from_path
.. automethod:: CryptContext.copy

.. rst-class:: html-toggle expanded

Changing the Configuration
--------------------------
:class:`CryptContext` objects can have their configuration replaced or updated
on the fly, and from a variety of sources (keywords, strings, files).
This is done through three methods:

.. automethod:: CryptContext.update(\*\*kwds)
.. automethod:: CryptContext.load
.. automethod:: CryptContext.load_path

.. rst-class:: html-toggle expanded

Examining the Configuration
---------------------------
The CryptContext object also supports basic inspection of its
current configuration:

.. automethod:: CryptContext.schemes
.. automethod:: CryptContext.default_scheme
.. automethod:: CryptContext.handler
.. autoattribute:: CryptContext.context_kwds

.. rst-class:: html-toggle expanded

Saving the Configuration
------------------------
More detailed inspection can be done by exporting the configuration
using one of the serialization methods:

.. automethod:: CryptContext.to_dict
.. automethod:: CryptContext.to_string

Configuration Errors
--------------------
The following errors may be raised when creating a :class:`!CryptContext` instance
via any of its constructors, or when updating the configuration of an existing
instance:

:raises ValueError:

    * If a configuration option contains an invalid value
      (e.g. ``all__vary_rounds=-1``).

    * If the configuration contains valid but incompatible options
      (e.g. listing a scheme as both :ref:`default <context-default-option>`
      and :ref:`deprecated <context-deprecated-option>`).

:raises KeyError:

    * If the configuration contains an unknown or forbidden option
      (e.g. :samp:`{scheme}__salt`).

    * If the :ref:`schemes <context-schemes-option>`,
      :ref:`default <context-default-option>`, or
      :ref:`deprecated <context-deprecated-option>` options reference an unknown
      hash scheme (e.g. ``schemes=['xxx']``)

:raises TypeError:

    * If a configuration value has the wrong type (e.g. ``schemes=123``).

    Note that this error shouldn't occur when loading configurations
    from a file/string (e.g. using :meth:`CryptContext.from_string`).

Additionally, a :exc:`~passlib.exc.PasslibConfigWarning` may be issued
if any invalid-but-correctable values are encountered
(e.g. if :samp:`sha256_crypt__min_rounds` is set to less than
:class:`~passlib.hash.sha256_crypt` 's minimum of 1000).

.. versionchanged:: 1.6
    Previous releases used Python's builtin :exc:`UserWarning` instead
    of the more specific :exc:`!passlib.exc.PasslibConfigWarning`.

Other Helpers
=============
.. autoclass:: LazyCryptContext([schemes=None,] \*\*kwds [, onload=None])

.. rst-class:: html-toggle

The CryptPolicy Class (deprecated)
==================================
.. autoclass:: CryptPolicy
