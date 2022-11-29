===================================================
:mod:`passlib.registry` - Password Handler Registry
===================================================

.. module:: passlib.registry
    :synopsis: registry for tracking password hash handlers.

This module contains the code Passlib uses to track all password hash handlers
that it knows about. While custom handlers can be used directly within an application,
or even handed to a :class:`!CryptContext`; it is frequently useful to register
them globally within a process and then refer to them by name.
This module provides facilities for that, as well as programmatically
querying Passlib to detect what algorithms are available.

.. warning::

    This module is primarily used as an internal support module.
    Its interface has not been finalized yet, and may be changed somewhat
    between major releases of Passlib, as the internal code is cleaned up
    and simplified.

    Applications should access hashes through the :mod:`passlib.hash` module
    where possible (new ones may also be registered by writing to that module).

Interface
=========
.. autofunction:: get_crypt_handler(name[, default])
.. autofunction:: list_crypt_handlers
.. autofunction:: register_crypt_handler_path
.. autofunction:: register_crypt_handler(handler, force=False)

.. note::

    All password hashes registered with passlib
    can be imported by name from the :mod:`passlib.hash` module.
    This is true not just of the built-in hashes,
    but for any hash registered with the registration functions
    in this module.

Usage
=====
Example showing how to use :func:`!registry_crypt_handler_path`::

        >>> # register the location of a handler without loading it
        >>> from passlib.registry import register_crypt_handler_path
        >>> register_crypt_handler_path("myhash", "myapp.support.hashes")

        >>> # even before being loaded, its name will show up as available
        >>> from passlib.registry import list_crypt_handlers
        >>> 'myhash' in list_crypt_handlers()
        True
        >>> 'myhash' in list_crypt_handlers(loaded_only=True)
        False

        >>> # when the name "myhash" is next referenced,
        >>> # the class "myhash" will be imported from the module "myapp.support.hashes"
        >>> from passlib.context import CryptContext
        >>> cc = CryptContext(schemes=["myhash"]) #<-- this will cause autoimport

Example showing how to load a hash by name::

        >>> from passlib.registry import get_crypt_handler
        >>> get_crypt_handler("sha512_crypt")
        <class 'passlib.handlers.sha2_crypt.sha512_crypt'>

        >>> get_crypt_handler("missing_hash")
        KeyError: "no crypt handler found for algorithm: 'missing_hash'"

        >>> get_crypt_handler("missing_hash", None)
        None

