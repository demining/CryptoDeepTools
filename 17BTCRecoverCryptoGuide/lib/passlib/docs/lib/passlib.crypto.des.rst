==============================================
:mod:`passlib.crypto.des` - DES routines
==============================================

.. module:: passlib.crypto.des
    :synopsis: routines for performing DES encryption

.. versionchanged:: 1.7

    This module was relocated from :mod:`!passlib.utils.des`;
    the old location will be removed in Passlib 2.0.

.. warning::

    NIST has declared DES to be "inadequate" for cryptographic purposes.
    These routines, and the password hashes based on them,
    should not be used in new applications.

This module contains routines for encrypting blocks of data using the DES algorithm.
Note that these functions do not support multi-block operation or decryption,
since they are designed primarily for use in password hash algorithms
(such as :class:`~passlib.hash.des_crypt` and :class:`~passlib.hash.bsdi_crypt`).

.. autofunction:: expand_des_key
.. autofunction:: des_encrypt_block
.. autofunction:: des_encrypt_int_block
