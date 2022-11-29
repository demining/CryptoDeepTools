.. module:: passlib.pwd
    :synopsis: password generation helpers

=================================================
:mod:`passlib.pwd` -- Password generation helpers
=================================================

.. versionadded:: 1.7

Password Generation
===================

.. rst-class:: float-center

.. warning::

    Before using these routines, make sure your system's RNG entropy pool is
    secure and full. Also make sure that :func:`!genword` or :func:`!genphrase`
    is called with a sufficiently high ``entropy`` parameter
    the intended purpose of the password.

.. autofunction:: genword(entropy=None, length=None, charset="ascii_62", chars=None, returns=None)

.. autofunction:: genphrase(entropy=None, length=None, wordset="eff_long", words=None, sep=" ", returns=None)

Predefined Symbol Sets
======================
The following predefined sets are used by the generation functions above,
but are exported by this module for general use:

.. object:: default_charsets

    Dictionary mapping charset name -> string of characters, used by :func:`genword`.
    See that function for a list of predefined charsets present in this dict.

.. object:: default_wordsets

    Dictionary mapping wordset name -> tuple of words, used by :func:`genphrase`.
    See that function for a list of predefined wordsets present in this dict.

    (Note that this is actually a special object which will lazy-load
    wordsets from disk on-demand)

Password Strength Estimation
============================
Passlib does not currently offer any password strength estimation routines.
However, the (javascript-based) `zxcvbn <https://github.com/dropbox/zxcvbn>`_
project is a *very* good choice. 

Though there are a few different python ports of ZXCVBN library, as of 2019-11-13,
`zxcvbn (@ pypi) <https://pypi.python.org/pypi/zxcvbn>`_ is the most up-to-date, 
and is endorsed by the upstream zxcvbn developers.
