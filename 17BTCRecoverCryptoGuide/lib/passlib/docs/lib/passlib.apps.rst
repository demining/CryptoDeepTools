==================================================================
:mod:`passlib.apps` - Helpers for various applications
==================================================================

.. module:: passlib.apps
    :synopsis: hashing & verifying passwords used in sql servers and other applications

.. _predefined-context-example:

This module contains a number of preconfigured :ref:`CryptContext <context-reference>` instances
that are provided by Passlib for easily handling the hash formats used by various applications.

.. rst-class:: html-toggle

Usage Example
=============
The :class:`!CryptContext` class itself has a large number of features,
but to give an example of how to quickly use the instances in this module:

Each of the objects in this module can be imported directly::

    >>> # as an example, this imports the custom_app_context object,
    >>> # a helper to let new applications *quickly* add password hashing.
    >>> from passlib.apps import custom_app_context

Hashing a password is simple (and salt generation is handled automatically)::

    >>> hash = custom_app_context.hash("toomanysecrets")
    >>> hash
    '$5$rounds=84740$fYChCy.52EzebF51$9bnJrmTf2FESI93hgIBFF4qAfysQcKoB0veiI0ZeYU4'

Verifying a password against an existing hash is just as quick::

    >>> custom_app_context.verify("toomanysocks", hash)
    False
    >>> custom_app_context.verify("toomanysecrets", hash)
    True

.. seealso:: the :ref:`CryptContext Tutorial <context-tutorial>`
    and :ref:`CryptContext Reference <context-reference>`
    for more information about the CryptContext class.

.. index:: Django; crypt context

.. _django-contexts:

Django
======
The following objects provide pre-configured :class:`!CryptContext` instances
for handling `Django <http://www.djangoproject.com>`_
password hashes, as used by Django's ``django.contrib.auth`` module.
They recognize all the :doc:`builtin Django hashes <passlib.hash.django_std>`
supported by the particular Django version.

.. note::

    These objects may not match the hashes in your database if a third-party
    library has been used to patch Django to support alternate hash formats.
    This includes the `django-bcrypt <http://pypi.python.org/pypi/django-bcrypt>`_
    plugin, or Passlib's builtin :mod:`django extension <passlib.ext.django>`.
    As well, Django 1.4 introduced a very configurable "hashers" framework,
    and individual deployments may support additional hashes and/or
    have other defaults.

.. data:: django10_context

    The object replicates the password hashing policy for Django 1.0-1.3.
    It supports all the Django 1.0 hashes, and defaults to
    :class:`~passlib.hash.django_salted_sha1`.

    .. versionadded:: 1.6

.. data:: django14_context

    The object replicates the stock password hashing policy for Django 1.4.
    It supports all the Django 1.0 & 1.4 hashes, and defaults to
    :class:`~passlib.hash.django_pbkdf2_sha256`. It treats all
    Django 1.0 hashes as deprecated.

    .. versionadded:: 1.6

.. data:: django16_context

    The object replicates the stock password hashing policy for Django 1.6.
    It supports all the Django 1.0-1.6 hashes, and defaults to
    :class:`~passlib.hash.django_pbkdf2_sha256`. It treats all
    Django 1.0 hashes as deprecated.

    .. versionadded:: 1.6.2

.. data:: django_context

    This alias will always point to the latest preconfigured Django
    context supported by Passlib, and as such should support
    all historical hashes built into Django.

    .. versionchanged:: 1.6.2
        This now points to :data:`django16_context`.

.. _ldap-contexts:

LDAP
====
Passlib provides two contexts related to ldap hashes:

.. data:: ldap_context

    This object provides a pre-configured :class:`!CryptContext` instance
    for handling LDAPv2 password hashes. It recognizes all
    the :ref:`standard ldap hashes <standard-ldap-hashes>`.

    It defaults to using the ``{SSHA}`` password hash.
    For times when there should be another default, using code such as the following::

        >>> from passlib.apps import ldap_context
        >>> ldap_context = ldap_context.replace(default="ldap_salted_md5")

        >>> # the new context object will now default to {SMD5}:
        >>> ldap_context.hash("password")
        '{SMD5}T9f89F591P3fFh1jz/YtW4aWD5s='

.. data:: ldap_nocrypt_context

    This object recognizes all the standard ldap schemes that :data:`!ldap_context`
    does, *except* for the ``{CRYPT}``-based schemes.

.. index:: MySQL; crypt context

.. _mysql-contexts:

MySQL
=====
This module provides two pre-configured :class:`!CryptContext` instances
for handling MySQL user passwords:

.. data:: mysql_context

    This object should recognize the new :class:`~passlib.hash.mysql41` hashes,
    as well as any legacy :class:`~passlib.hash.mysql323` hashes.

    It defaults to mysql41 when generating new hashes.

    This should be used with MySQL version 4.1 and newer.

.. data:: mysql3_context

    This object is for use with older MySQL deploys which only recognize
    the :class:`~passlib.hash.mysql323` hash.

    This should be used only with MySQL version 3.2.3 - 4.0.

.. index:: Drupal; crypt context, Wordpress; crypt context, phpBB3; crypt context, PHPass; crypt context

PHPass
======
`PHPass <http://www.openwall.com/phpass/>`_ is a PHP password hashing library,
and hashes derived from it are found in a number of PHP applications.
It is found in a wide range of PHP applications, including Drupal and Wordpress.

.. data:: phpass_context

    This object following the standard PHPass logic:
    it supports :class:`~passlib.hash.bcrypt`, :class:`~passlib.hash.bsdi_crypt`,
    and implements an custom scheme called the "phpass portable hash" :class:`~passlib.hash.phpass` as a fallback.

    BCrypt is used as the default if support is available,
    otherwise the Portable Hash will be used as the default.

    .. versionchanged:: 1.5
        Now uses Portable Hash as fallback if BCrypt isn't available.
        Previously used BSDI-Crypt as fallback
        (per original PHPass implementation),
        but it was decided PHPass is in fact more secure.

.. data:: phpbb3_context

    This object supports phpbb3 password hashes, which use a variant of :class:`~passlib.hash.phpass`.

.. index:: Postgres; crypt context

PostgreSQL
==========
.. data:: postgres_context

    This object should recognize password hashes stores in PostgreSQL's ``pg_shadow`` table;
    which are all assumed to follow the :class:`~passlib.hash.postgres_md5` format.

    Note that the username must be provided whenever hashing or verifying a postgres hash::

        >>> from passlib.apps import postgres_context

        >>> # hashing a password...
        >>> postgres_context.hash("somepass", user="dbadmin")
        'md578ed0f0ab2be0386645c1b74282917e7'

        >>> # verifying a password...
        >>> postgres_context.verify("somepass", 'md578ed0f0ab2be0386645c1b74282917e7', user="dbadmin")
        True
        >>> postgres_context.verify("wrongpass", 'md578ed0f0ab2be0386645c1b74282917e7', user="dbadmin")
        False

        >>> # forgetting the user will result in an error:
        >>> postgres_context.hash("somepass")
        Traceback (most recent call last):
            <traceback omitted>
        TypeError: user must be unicode or bytes, not None

.. index:: Roundup; crypt context

Roundup
=======
The `Roundup Issue Tracker <http://www.roundup-tracker.org>`_ has long
supported a series of different methods for encoding passwords.
The following contexts are available for reading Roundup password hash fields:

.. data:: roundup10_context

    This object should recognize all password hashes used by Roundup 1.4.16 and earlier:
    :class:`~passlib.hash.ldap_hex_sha1` (the default),
    :class:`~passlib.hash.ldap_hex_md5`, :class:`~passlib.hash.ldap_des_crypt`,
    and :class:`~passlib.hash.roundup_plaintext`.

.. data:: roundup15_context

    Roundup 1.4.17 adds support for :class:`~passlib.hash.ldap_pbkdf2_sha1`
    as its preferred hash format.
    This context supports all the :data:`roundup10_context` hashes,
    but adds that hash as well (and uses it as the default).

.. data:: roundup_context

    this is an alias for the latest version-specific roundup context supported
    by passlib, currently the :data:`!roundup15_context`.

.. _quickstart-custom-applications:

Custom Applications
===================
.. data:: custom_app_context

    This :class:`!CryptContext` object is provided for new python applications
    to quickly and easily add password hashing support.
    It comes preconfigured with:

    * Support for :class:`~passlib.hash.sha256_crypt` and :class:`~passlib.hash.sha512_crypt`
    * Defaults to SHA256-Crypt under 32 bit systems, SHA512-Crypt under 64 bit systems.
    * Large number of ``rounds``, for increased time-cost to hedge against attacks.

    For applications which want to quickly add a password hash,
    all they need to do is import and use this object, per the
    :ref:`usage example <predefined-context-example>` at the top of this page.

    .. seealso::

        The :doc:`/narr/quickstart` for additional details.
