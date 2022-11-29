.. index::
    pair: custom hash handler; implementing

==========================================================================
:mod:`passlib.utils.handlers` - Framework for writing password hashes
==========================================================================

.. module:: passlib.utils.handlers
    :synopsis: framework for writing password hashes

.. warning::

    This module is primarily used as an internal support module.
    Its interface has not been finalized yet, and may be changed somewhat
    between major releases of Passlib, as the internal code is cleaned up
    and simplified.

.. todo::

    This module, and the instructions on how to write a custom handler,
    definitely need to be rewritten for clarity. They are not yet
    organized, and may leave out some important details.

Implementing Custom Handlers
============================
All that is required in order to write a custom handler that will work with
Passlib is to create an object (be it module, class, or object) that
exposes the functions and attributes required by the :ref:`password-hash-api`.
For classes, Passlib does not make any requirements about what a class instance
should look like (if the implementation even uses them).

That said, most of the handlers built into Passlib are based around the :class:`GenericHandler`
class, and its associated mixin classes. While deriving from this class is not required,
doing so will greatly reduce the amount of additional code that is needed for
all but the most convoluted password hash schemes.

Once a handler has been written, it may be used explicitly, passed into
a :class:`CryptContext` constructor, or registered
globally with Passlib via the :mod:`passlib.registry` module.

.. seealso::
    :ref:`testing-hash-handlers` for details about how to test
    custom handlers against Passlib's unittest suite.

The GenericHandler Class
========================

Design
------
Most of the handlers built into Passlib are based around the :class:`GenericHandler`
class. This class is designed under the assumption that the common
workflow for hashes is some combination of the following:

1. parse hash into constituent parts - performed by :meth:`~GenericHandler.from_string`.
2. validate constituent parts - performed by :class:`!GenericHandler`'s constructor,
   and the normalization functions such as :meth:`~GenericHandler._norm_checksum` and :meth:`~HasSalt._norm_salt`
   which are provided by its related mixin classes.
3. calculate the raw checksum for a specific password - performed by :meth:`~GenericHandler._calc_checksum`.
4. assemble hash, including new checksum, into a new string - performed by :meth:`~GenericHandler.to_string`.

With this in mind, :class:`!GenericHandler` provides implementations
of most of the :ref:`password-hash-api` methods, eliminating the need
for almost all the boilerplate associated with writing a password hash.

In order to minimize the amount of unneeded features that must be loaded in, the :class:`!GenericHandler`
class itself contains only the parts which are needed by almost all handlers: parsing, rendering, and checksum validation.
Validation of all other parameters (such as salt, rounds, etc) is split out into separate
:ref:`mixin classes <generic-handler-mixins>` which enhance :class:`!GenericHandler` with additional features.

Usage
-----
In order to use :class:`!GenericHandler`, just subclass it, and then do the following:

    * fill out the :attr:`name` attribute with the name of your hash.
    * fill out the :attr:`~PasswordHash.setting_kwds` attribute with a tuple listing
      all the settings your hash accepts.

    * provide an implementation of the :meth:`from_string` classmethod.

      this method should take in a potential hash string,
      parse it into components, and return an instance of the class
      which contains the parsed components. It should throw a :exc:`ValueError`
      if no hash, or an invalid hash, is provided.

    * provide an implementation of the :meth:`to_string` instance method.

      this method should render an instance of your handler class
      (such as returned by :meth:`from_string`), returning
      a hash string.

    * provide an implementation of the :meth:`_calc_checksum` instance method.

      this is the heart of the hash; this method should take in the password
      as the first argument, then generate and return the digest portion
      of the hash, according to the settings (such as salt, etc) stored
      in the parsed instance this method was called from.

      note that it should not return the full hash with identifiers, etc;
      that job should be performed by :meth:`to_string`.

Some additional notes:

    * In addition to simply subclassing :class:`!GenericHandler`, most handlers
      will also benefit from adding in some of the mixin classes
      that are designed to add features to :class:`!GenericHandler`.
      See :ref:`generic-handler-mixins` for more details.

    * Most implementations will want to alter/override the default :meth:`~GenericHandler.identify` method.
      By default, it returns ``True`` for all hashes that :meth:`~GenericHandler.from_string`
      can parse without raising a :exc:`ValueError`; which is reliable, but somewhat slow.
      For faster identification purposes, subclasses may fill in the :attr:`~GenericHandler.ident` attribute
      with the hash's identifying prefix, which :meth:`~GenericHandler.identify` will then test for
      instead of calling :meth:`~GenericHandler.from_string`.
      For more complex situations, a custom implementation should be used;
      the :class:`HasManyIdents` mixin may also be helpful.

    * This class does not support context kwds of any type,
      since that is a rare enough requirement inside passlib.

Interface
---------
.. autoclass:: GenericHandler

.. _generic-handler-mixins:

GenericHandler Mixins
---------------------
.. autoclass:: HasSalt
.. autoclass:: HasRounds
.. autoclass:: HasManyIdents
.. autoclass:: HasManyBackends
.. autoclass:: HasRawSalt
.. autoclass:: HasRawChecksum

Examples
--------

.. todo::

    Show some walk-through examples of how to use GenericHandler and its mixins

The StaticHandler class
=======================
.. autoclass:: StaticHandler

.. todo::

    Show some examples of how to use StaticHandler

.. index::
    pair: custom hash handler; testing

Other Constructors
==================
.. autoclass:: PrefixWrapper

.. _testing-hash-handlers:

Testing Hash Handlers
=====================
Within its unittests, Passlib provides the :class:`~passlib.tests.utils.HandlerCase` class,
which can be subclassed to provide a unittest-compatible test class capable of
checking if a handler adheres to the :ref:`password-hash-api`.

Usage
-----
As an example of how to use :class:`!HandlerCase`,
the following is an annotated version
of the unittest for :class:`passlib.hash.des_crypt`::

    from passlib.hash import des_crypt
    from passlib.tests.utils import HandlerCase

    # create a subclass for the handler...
    class DesCryptTest(HandlerCase):
        "test des-crypt algorithm"

        # [required] - store the handler object itself in the handler attribute
        handler = des_crypt

        # [required] - this should be a list of (password, hash) pairs,
        #              which should all verify correctly using your handler.
        #              it is recommend include pairs which test all of the following:
        #
        #              * empty string & short strings for passwords
        #              * passwords with 2 byte unicode characters
        #              * hashes with varying salts, rounds, and other options
        known_correct_hashes = (
            # format: (password, hash)
            ('', 'OgAwTx2l6NADI'),
            (' ', '/Hk.VPuwQTXbc'),
            ('test', 'N1tQbOFcM5fpg'),
            ('Compl3X AlphaNu3meric', 'um.Wguz3eVCx2'),
            ('4lpHa N|_|M3r1K W/ Cur5Es: #$%(*)(*%#', 'sNYqfOyauIyic'),
            ('AlOtBsOl', 'cEpWz5IUCShqM'),
            (u'hell\u00D6', 'saykDgk3BPZ9E'),
            )

        # [optional] - if there are hashes which are similar in format
        #              to your handler, and you want to make sure :meth:`identify`
        #              does not return ``True`` for such hashes,
        #              list them here. otherwise this can be omitted.
        #
        known_unidentified_hashes = [
            # bad char in otherwise correctly formatted hash
            '!gAwTx2l6NADI',
            ]

Interface
---------
.. autoclass:: passlib.tests.utils.HandlerCase()
