==========================================================================
:mod:`passlib.utils.pbkdf2` - PBKDF2 key derivation algorithm [deprecated]
==========================================================================

.. module:: passlib.utils.pbkdf2
    :synopsis: PBKDF2 and related key derivation algorithms

.. warning::

    This module has been deprecated as of Passlib 1.7,
    and will be removed in Passlib 2.0.
    The functions in this module have been replaced by equivalent
    (but not identical) functions in the :mod:`passlib.crypto` module.

This module provides a couple of key derivation functions,
as well as supporting utilities.
Primarily, it offers :func:`pbkdf2`,
which provides the ability to generate an arbitrary
length key using the PBKDF2 key derivation algorithm,
as specified in `rfc 2898 <http://tools.ietf.org/html/rfc2898>`_.
This function can be helpful in creating password hashes
using schemes which have been based around the pbkdf2 algorithm.

PKCS#5 Key Derivation Functions
===============================
.. autofunction:: pbkdf1
.. autofunction:: pbkdf2

.. note::

    The details of PBKDF1 and PBKDF2 are specified in :rfc:`2898`.

Helper Functions
================
.. autofunction:: norm_hash_name

.. autofunction:: get_prf
