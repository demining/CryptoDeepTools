================
Library Overview
================

Passlib is a collection of routines for managing password hashes
such as found in unix "shadow" files, as returned by stdlib's :func:`crypt.crypt`,
as stored in mysql and postgres, and various other places.
Passlib's contents can be roughly grouped into four categories:
password hashes, password contexts, two-factor authentication,
and other utility functions.

Password Hashes
===============
All of the hashes supported by Passlib are implemented
as "hasher" classes which can be imported from the :mod:`passlib.hash` module.
In turn, all of the hashers have a uniform interface,
which is documented in the :ref:`hash-tutorial`.

*A word of warning:* Some the hashes in this library are marked as "insecure",
and are provided for historical purposes only.  Still others are specialized in ways that are not generally useful.
If you are creating a new application and need to choose a password hash,
please read the :doc:`quickstart` first.

.. rst-class:: float-center

.. seealso::

    - :ref:`hash-tutorial` -- walkthrough of using a hasher class.
    - :doc:`quickstart` -- if you need to choose a hash.
    - :mod:`passlib.ifc` -- PasswordHash API reference
    - :mod:`passlib.hash` -- list of all hashes in Passlib.

Password Contexts
=================
Mature applications frequently have to deal with tables of existing password hashes.
Over time, they have to support a number of tasks:

* Add support for new algorithms, and deprecate old ones.
* Raise the time-cost settings for existing algorithms as computing power increases.
* Perform rolling upgrades of existing hashes to comply with these changes.
* Eventually, these policies must be hardcoded in the source,
  or time must be spent implementing a configuration language to encode them.

In these situations, loading and handling multiple hash algorithms becomes
complicated and tedious. The :mod:`passlib.context` module provides a single class,
:class:`!CryptContext`, which attempts to solve all of these problems
(or at least relieve developers of most of the burden).

This class handles managing multiple password hash schemes,
deprecation & migration of old hashes, and supports a simple configuration
language that can be serialized to an INI file.

.. rst-class:: float-center

.. seealso::

    * :ref:`context-tutorial` -- walkthrough of the CryptContext class
    * :mod:`passlib.context` -- API reference

Two-Factor Authentication
=========================
While not strictly connected to password hashing, modern applications frequently
need to perform the related task of two-factor authentication.  One of the most
common protocols for doing this is TOTP (:rfc:`6238`).
To help get TOTP in place, the :mod:`passlib.totp` module provides a set of helper functions
for securely configuring, persisting, and verifying TOTP tokens.

.. rst-class:: float-center

.. seealso::

    * :ref:`TOTP tutorial <totp-tutorial>` -- walkthrough of setting up TOTP integration
    * :mod:`passlib.totp` -- API reference

Application Helpers
===================
Passlib also provides a number of pre-configured :class:`!CryptContext` instances
in order to get users started quickly:

    * :mod:`passlib.apps` -- contains pre-configured
      instances for managing hashes used by Postgres, Mysql, and LDAP, and others.

    * :mod:`passlib.hosts` -- contains pre-configured
      instances for managing hashes as found in the /etc/shadow files
      on Linux and BSD systems.

Passlib also contains a couple of additional modules which provide
support for certain application-specific tasks:

    * :mod:`passlib.apache` -- classes for managing htpasswd and htdigest files.

    * :mod:`passlib.ext.django` -- Django plugin which monkeypatches support for (almost) any hash in Passlib.
