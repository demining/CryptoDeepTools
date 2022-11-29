====================================================
:mod:`passlib.utils.des` - DES routines [deprecated]
====================================================

.. module:: passlib.utils.des
    :synopsis: routines for performing DES encryption

.. warning::
    This module is deprecated as of Passlib 1.7:
    It has been relocated to :mod:`passlib.crypto.des`;
    and the aliases here will be removed in Passlib 2.0.

This module contains routines for encrypting blocks of data using the DES algorithm.
Note that these functions do not support multi-block operation or decryption,
since they are designed primarily for use in password hash algorithms
(such as :class:`~passlib.hash.des_crypt` and :class:`~passlib.hash.bsdi_crypt`).

.. autofunction:: expand_des_key
.. autofunction:: des_encrypt_block
.. autofunction:: des_encrypt_int_block
