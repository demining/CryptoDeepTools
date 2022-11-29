==================================================================
:class:`passlib.hash.bcrypt_sha256` - BCrypt+SHA256
==================================================================

.. versionadded:: 1.6.2

.. currentmodule:: passlib.hash

BCrypt was developed to replace :class:`~passlib.hash.md5_crypt` for BSD systems.
It uses a modified version of the Blowfish stream cipher.
It does, however, truncate passwords to 72 bytes, and some other minor quirks
(see :ref:`BCrypt Password Truncation <bcrypt-password-truncation>` for details).
This class works around that issue by first running the password through SHA2-256.
This class can be used directly as follows::

    >>> from passlib.hash import bcrypt_sha256

    >>> # generate new salt, hash password
    >>> h = bcrypt_sha256.hash("password")
    >>> h
    '$bcrypt-sha256$2a,12$LrmaIX5x4TRtAwEfwJZa1.$2ehnw6LvuIUTM0iz4iz9hTxv21B6KFO'

    >>> # the same, but with an explicit number of rounds
    >>> bcrypt_sha256.using(rounds=13).hash("password")
    '$bcrypt-sha256$2b,13$Mant9jKTadXYyFh7xp1W5.$J8xpPZR/HxH7f1vRCNUjBI7Ev1al0hu'

    >>> # verify password
    >>> bcrypt_sha256.verify("password", h)
    True
    >>> bcrypt_sha256.verify("wrong", h)
    False

.. note::

    It is strongly recommended that you install
    `bcrypt <https://pypi.python.org/pypi/bcrypt>`_
    when using this hash. See :doc:`passlib.hash.bcrypt` for more details.

Interface
=========
.. autoclass:: bcrypt_sha256()

Format
======
Bcrypt-SHA256 is compatible with the :ref:`modular-crypt-format`, and uses ``$bcrypt-sha256$`` as the identifying prefix
for all it's strings.
An example hash (of ``password``) is:

  ``$bcrypt-sha256$2a,12$LrmaIX5x4TRtAwEfwJZa1.$2ehnw6LvuIUTM0iz4iz9hTxv21B6KFO``

Bcrypt-SHA256 hashes have the format :samp:`$bcrypt-sha256${variant},{rounds}${salt}${checksum}`, where:

* :samp:`{variant}` is the BCrypt variant in use (usually, as in this case, ``2a``).
* :samp:`{rounds}` is a cost parameter, encoded as decimal integer,
  which determines the number of iterations used via :samp:`{iterations}=2**{rounds}` (rounds is 12 in the example).
* :samp:`{salt}` is a 22 character salt string, using the characters in the regexp range ``[./A-Za-z0-9]`` (``LrmaIX5x4TRtAwEfwJZa1.`` in the example).
* :samp:`{checksum}` is a 31 character checksum, using the same characters as the salt (``2ehnw6LvuIUTM0iz4iz9hTxv21B6KFO`` in the example).

Algorithm
=========
The algorithm this hash uses is as follows:

* first the password is encoded to ``UTF-8`` if not already encoded.
* then it's run through SHA2-256 to generate a 32 byte digest.
* this is encoded using base64, resulting in a 44-byte result
  (including the trailing padding ``=``). For the example ``"password"``,
  the output from this stage would be ``"XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg="``.
* this base64 string is then passed on to the underlying bcrypt algorithm
  as the new password to be hashed. See :doc:`passlib.hash.bcrypt` for details
  on it's operation.
