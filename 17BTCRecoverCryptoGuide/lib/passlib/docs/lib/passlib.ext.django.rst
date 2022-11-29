.. index:: Django; password hashing plugin

.. module:: passlib.ext.django

==========================================================
:mod:`passlib.ext.django` - Django Password Hashing Plugin
==========================================================

.. versionadded:: 1.6

.. versionchanged:: 1.7

    As of Passlib 1.7, this module requires Django 1.8 or newer.

.. rst-class:: float-center without-title

.. warning::

    This extension is a high maintenance, with an uncertain number of users.
    The current plan is to split this out as a separate package concurrent
    with Passlib 1.8, and then judge whether it should continue to be maintained
    in it's own right. See :issue:`81`.

This module contains a `Django <http://www.djangoproject.com>`_ plugin which
overrides all of Django's password hashing functions, replacing them
with wrappers around a Passlib :ref:`CryptContext <context-reference>` object
whose configuration is controlled from Django's ``settings``.
While this extension's utility is diminished with the advent
of Django 1.4's *hashers* framework, this plugin still has a number
of uses:

* Make use of the new Django 1.4 :ref:`pbkdf2 & bcrypt formats <django-1.4-hashes>`,
  even under earlier Django releases.

* Allow your application to work with any password hash format
  :doc:`supported </lib/passlib.hash>` by Passlib, allowing you to import
  existing hashes from other systems.
  Common examples include SHA512-Crypt, PHPass, and BCrypt.

* Set different iterations / cost settings based on the type of user account,
  and automatically update hashes that use weaker settings when the user
  logs in.

* Mark any hash algorithms as deprecated, and automatically migrate to stronger
  hashes when the user logs in.

.. note::

    This plugin should be considered "release candidate" quality.
    It works, and has good unittest coverage, but has seen only
    limited real-world use. Please report any issues.
    It has been tested with Django 1.8 - 1.9.

    (Support for Django 1.0 - 1.7 was dropped after Passlib 1.6).

Installation
=============
Installation is simple: once Passlib itself has been installed, just add
``"passlib.ext.django"`` to Django's ``settings.INSTALLED_APPS``,
as soon as possible after ``django.contrib.auth``.

Once installed, this plugin will automatically monkeypatch
Django to use a Passlib :class:`!CryptContext`
instance in place of the normal Django password authentication routines
(as an unfortunate side effect, this disables Django 1.4's hashers framework entirely,
though the default configuration supports all the built-in Django 1.4 hashers).

Configuration
=============
While this plugin will function perfectly well without setting any configuration
options, you can customize it using the following options in Django's ``settings.py``:

``PASSLIB_CONFIG``

    This option specifies the CryptContext configuration options
    that will be used when the plugin is loaded.

    * Its value will usually be an INI-formatted string or a dictionary, containing
      options to be passed to :class:`~passlib.context.CryptContext`.

    * Alternately, it can be the name of any preset supported by
      :func:`~passlib.ext.django.utils.get_preset_config`, such as
      ``"passlib-default"`` or ``"django-default"``.

    * Finally, it can be the special string ``"disabled"``, which will disable
      this plugin.


    At any point after this plugin has been loaded, you can serialize
    its current configuration to a string::

        >>> from passlib.ext.django.models import password_context
        >>> print password_context.to_string()

    This string can then be modified, and used as the new value
    of ``PASSLIB_CONFIG``.

    .. note::

         It is *strongly* recommended to use a configuration which will support
         the existing Django hashes. Dumping and then modifying one of the
         preset strings is a good starting point.

``PASSLIB_GET_CATEGORY``

    By default, Passlib will assign users to one of three categories:
    ``"superuser"``, ``"staff"``, or ``None``; based on the attributes
    of the ``User`` object. This allows ``PASSLIB_CONFIG``
    to have per-category policies, such as a larger number of iterations
    for the superuser account.

    This option allows overriding the function which performs this mapping,
    so that more fine-grained / alternate user categories can be used.
    If specified, the function should have the call syntax
    ``get_category(user) -> category_string|None``.

   .. seealso::

        See :ref:`user-categories` for more details.

``PASSLIB_CONTEXT``

    .. deprecated:: 1.6
        This is a deprecated alias for ``PASSLIB_CONFIG``,
        used by the (undocumented) version of this plugin that was
        released with Passlib 1.5. It should not be used by new applications.

Module Contents
===============
.. module:: passlib.ext.django.models

.. data:: password_context

    The :class:`!CryptContext` instance that drives this plugin.
    It can be imported and examined to inspect the current configuration,
    changes made to it will immediately alter how Django hashes passwords.

    (Do not replace the reference with another CryptContext, it will break things;
    just update the context in-place).

.. function:: context_changed
 
    If the context is modified after loading, call this function to clear internal caches.

.. module:: passlib.ext.django.utils

.. autofunction:: get_preset_config

.. data:: PASSLIB_DEFAULT

    This constant contains the default configuration for ``PASSLIB_CONFIG``.
    It provides the following features:

    * uses :class:`~passlib.hash.django_pbkdf2_sha256` as the default algorithm.
    * supports all of the Django 1.0-1.4 :doc:`hash formats </lib/passlib.hash.django_std>`.
    * additionally supports SHA512-Crypt, BCrypt, and PHPass.
    * is configured to use a larger number of rounds for the superuser account.
    * is configured to automatically migrate all Django 1.0 hashes
      to use the default hash as soon as each user logs in.

    As of Passlib 1.6, it contains the following string::

        [passlib]

        ; list of schemes supported by configuration
        ; currently all django 1.4 hashes, django 1.0 hashes,
        ; and three common modular crypt format hashes.
        schemes =
            django_pbkdf2_sha256, django_pbkdf2_sha1, django_bcrypt,
            django_salted_sha1, django_salted_md5, django_des_crypt, hex_md5,
            sha512_crypt, bcrypt, phpass

        ; default scheme to use for new hashes
        default = django_pbkdf2_sha256

        ; hashes using these schemes will automatically be re-hashed
        ; when the user logs in (currently all django 1.0 hashes)
        deprecated =
            django_pbkdf2_sha1, django_salted_sha1, django_salted_md5,
            django_des_crypt, hex_md5

        ; sets some common options, including minimum rounds for two primary hashes.
        ; if a hash has less than this number of rounds, it will be re-hashed.
        all__vary_rounds = 0.05
        sha512_crypt__min_rounds = 80000
        django_pbkdf2_sha256__min_rounds = 10000

        ; set somewhat stronger iteration counts for ``User.is_staff``
        staff__sha512_crypt__default_rounds = 100000
        staff__django_pbkdf2_sha256__default_rounds = 12500

        ; and even stronger ones for ``User.is_superuser``
        superuser__sha512_crypt__default_rounds = 120000
        superuser__django_pbkdf2_sha256__default_rounds = 15000

