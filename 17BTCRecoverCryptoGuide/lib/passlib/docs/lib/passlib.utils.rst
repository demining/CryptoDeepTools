=============================================
:mod:`passlib.utils` - Helper Functions
=============================================

.. module:: passlib.utils
    :synopsis: internal helpers for implementing password hashes

.. warning::

    This module is primarily used as an internal support module.
    Its interface has not been finalized yet, and may be changed somewhat
    between major releases of Passlib, as the internal code is cleaned up
    and simplified.

This module primarily contains utility functions used internally by Passlib.
However, end-user applications may find some of the functions useful,
in particular:

    * :func:`consteq`
    * :func:`saslprep`
    * :func:`generate_password`

Constants
=========

..
    .. data:: sys_bits

        Native bit size of host architecture (either 32 or 64 bit).
        used for various purposes internally.

.. data:: unix_crypt_schemes

    List of the names of all the hashes in :mod:`passlib.hash`
    which are natively supported by :func:`crypt` on at least one operating
    system.

    For all hashes in this list, the expression
    :samp:`passlib.hash.{alg}.has_backend("os_crypt")`
    will return ``True`` if the host OS natively supports the hash.
    This list is used by :data:`~passlib.hosts.host_context`
    and :data:`~passlib.apps.ldap_context` to determine
    which hashes are supported by the host.

    .. seealso:: :ref:`mcf-identifiers` for a table of which OSes are known to support which hashes.

..
    PYPY
    JYTHON
    rounds_cost_values

..
    Decorators
    ==========
    .. autofunction:: classproperty

Unicode Helpers
===============
.. function:: consteq(left, right)

    Check two strings/bytes for equality.

    This is functionally equivalent to ``left == right``,
    but attempts to take constant time relative to the size of the righthand input.

    The purpose of this function is to help prevent timing attacks
    during digest comparisons: the standard ``==`` operator aborts
    after the first mismatched character, causing its runtime to be
    proportional to the longest prefix shared by the two inputs.
    If an attacker is able to predict and control one of the two
    inputs, repeated queries can be leveraged to reveal information about
    the content of the second argument. To minimize this risk, :func:`!consteq`
    is designed to take ``THETA(len(right))`` time, regardless
    of the contents of the two strings.
    It is recommended that the attacker-controlled input
    be passed in as the left-hand value.

    .. warning::

        This function is *not* perfect. Various VM-dependant issues
        (e.g. the VM's integer object instantiation algorithm, internal unicode representation, etc),
        may still cause the function's run time to be affected by the inputs,
        though in a less predictable manner.
        *To minimize such risks, this function should not be passed* :class:`unicode`
        *inputs that might contain non-* ``ASCII`` *characters*.

    .. versionadded:: 1.6

    .. versionchanged:: 1.7

        This is an alias for stdlib's :func:`hmac.compare_digest` under Python 3.3 and up.

.. autofunction:: saslprep

Bytes Helpers
=============
.. autofunction:: xor_bytes
.. autofunction:: render_bytes
.. autofunction:: int_to_bytes
.. autofunction:: bytes_to_int

Encoding Helpers
================
.. autofunction:: is_same_codec
.. autofunction:: is_ascii_codec
.. autofunction:: is_ascii_safe
.. autofunction:: to_bytes
.. autofunction:: to_unicode
.. autofunction:: to_native_str

..
    Host OS
    =======
    .. autofunction:: safe_crypt
    .. autofunction:: tick

Randomness
==========
.. data:: rng

    The random number generator used by Passlib to generate
    salt strings and other things which don't require a
    cryptographically strong source of randomness.

    If :func:`os.urandom` support is available,
    this will be an instance of :class:`!random.SystemRandom`,
    otherwise it will use the default python PRNG class,
    seeded from various sources at startup.

.. autofunction:: getrandbytes
.. autofunction:: getrandstr
.. autofunction:: generate_password(size=10, charset=<default charset>)

Interface Tests
===============
.. autofunction:: is_crypt_handler
.. autofunction:: is_crypt_context
.. autofunction:: has_rounds_info
.. autofunction:: has_salt_info

Submodules
==========
There are also a few sub modules which provide additional utility functions:

.. toctree::
    :maxdepth: 1

    passlib.utils.handlers
    passlib.utils.binary
    passlib.utils.des
    passlib.utils.pbkdf2

..
    passlib.utils.decor
    passlib.utils.compat
