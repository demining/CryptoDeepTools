============================================
:mod:`passlib.hosts` - OS Password Handling
============================================

.. module:: passlib.hosts
    :synopsis: hashing & verifying operating system passwords

This module provides some preconfigured :ref:`CryptContext <context-reference>`
instances for hashing & verifying password hashes tied to user accounts of various operating systems.
While (most) of the objects are available cross-platform,
their use is oriented primarily towards Linux and BSD variants.

.. seealso::
    for Microsoft Windows, see the list of :ref:`windows-hashes`
    in :mod:`passlib.hash`.

.. rst-class:: html-toggle

Usage Example
=============
The :class:`!CryptContext` class itself has a large number of features,
but to give an example of how to quickly use the instances in this module:

Each of the objects in this module can be imported directly::

    >>> # as an example, this imports the linux_context object,
    >>> # which is configured to recognized most hashes found in Linux /etc/shadow files.
    >>> from passlib.apps import linux_context

Hashing a password is simple (and salt generation is handled automatically)::

    >>> hash = linux_context.hash("toomanysecrets")
    >>> hash
    '$5$rounds=84740$fYChCy.52EzebF51$9bnJrmTf2FESI93hgIBFF4qAfysQcKoB0veiI0ZeYU4'

Verifying a password against an existing hash is just as quick::

    >>> linux_context.verify("toomanysocks", hash)
    False
    >>> linux_context.verify("toomanysecrets", hash)
    True

You can also identify hashes::
    >>> linux_context.identify(hash)
    'sha512_crypt'

Or encrypt using a specific algorithm::
    >>> linux_context.schemes()
    ('sha512_crypt', 'sha256_crypt', 'md5_crypt', 'des_crypt', 'unix_disabled')
    >>> linux_context.hash("password", scheme="des_crypt")
    '2fmLLcoHXuQdI'
    >>> linux_context.identify('2fmLLcoHXuQdI')
    'des_crypt'

.. seealso::
    the :ref:`CryptContext Tutorial <context-tutorial>`
    and :ref:`CryptContext Reference <context-reference>`
    for more information about the CryptContext class.

Unix Password Hashes
====================
Passlib provides a number of pre-configured :class:`!CryptContext` instances
which can identify and manipulate all the formats used by Linux and BSD.
See the :ref:`modular crypt identifier list <mcf-identifiers>` for a complete
list of which hashes are supported by which operating system.

Predefined Contexts
-------------------
Passlib provides :class:`!CryptContext` instances
for the following Unix variants:

.. data:: linux_context

    context instance which recognizes hashes used
    by the majority of Linux distributions.
    encryption defaults to :class:`!sha512_crypt`.

.. data:: freebsd_context

    context instance which recognizes all hashes used by FreeBSD 8.
    encryption defaults to :class:`!bcrypt`.

.. data:: netbsd_context

    context instance which recognizes all hashes used by NetBSD.
    encryption defaults to :class:`!bcrypt`.

.. data:: openbsd_context

    context instance which recognizes all hashes used by OpenBSD.
    encryption defaults to :class:`!bcrypt`.

.. note::

    All of the above contexts include the :class:`~passlib.hash.unix_disabled` handler
    as a final fallback. This special handler treats all strings as invalid passwords,
    particularly the common strings ``!`` and ``*`` which are used to indicate
    that an account has been disabled [#shadow]_.

Current Host OS
---------------

.. data:: host_context

    :platform: Unix

    This :class:`~passlib.context.CryptContext` instance should detect and support
    all the algorithms the native OS :func:`!crypt` offers.
    The main differences between this object and :func:`!crypt`:

    * this object provides introspection about *which* schemes
      are available on a given system (via ``host_context.schemes()``).
    * it defaults to the strongest algorithm available,
      automatically configured to an appropriate strength
      for hashing new passwords.
    * whereas :func:`!crypt` typically defaults to using
      :mod:`~passlib.hash.des_crypt`; and provides little introspection.

    As an example, this can be used in conjunction with stdlib's :mod:`!spwd` module
    to verify user passwords on the local system::

        >>> # NOTE/WARNING: this example requires running as root on most systems.
        >>> import spwd, os
        >>> from passlib.hosts import host_context
        >>> hash = spwd.getspnam(os.environ['USER']).sp_pwd
        >>> host_context.verify("toomanysecrets", hash)
        True

    .. versionchanged:: 1.4
        This object is only available on systems where the stdlib :mod:`!crypt` module is present.
        In version 1.3 and earlier, it was available on non-Unix systems, though it did nothing useful.

.. rubric:: Footnotes

.. [#shadow] Man page for Linux /etc/shadow - `<http://linux.die.net/man/5/shadow>`_
