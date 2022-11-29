.. index:: SCRAM protocol

===================================================================
:class:`passlib.hash.scram` - SCRAM Hash
===================================================================

.. versionadded:: 1.6

.. currentmodule:: passlib.hash

SCRAM is a password-based challenge response protocol defined by :rfc:`5802`.
While Passlib does not provide an implementation of SCRAM, applications
which use SCRAM on the server side frequently need a way to store
user passwords in a secure format that can be used to authenticate users over
SCRAM.

To accomplish this, Passlib provides the following
:ref:`modular-crypt-format`-compatible password hash scheme which uses the
``$scram$`` identifier. This format encodes a salt, rounds settings, and one
or more :func:`~passlib.crypto.digest.pbkdf2_hmac` digests... one digest for each
of the hash algorithms the server wishes to support over SCRAM.

Since this format is PBKDF2-based, it has equivalent security to
Passlib's other :doc:`pbkdf2 hashes <passlib.hash.pbkdf2_digest>`,
and can be used to authenticate users using either the normal :ref:`password-hash-api`
or the SCRAM-specific class methods documented below.

.. note::

    If you aren't working with the SCRAM protocol, you probably
    don't need to use this hash format.

Usage
=====
This class can be used like any other Passlib hash, as follows::

    >>> from passlib.hash import scram

    >>> # generate new salt, hash password against default list of algorithms
    >>> hash = scram.hash("password")
    >>> hash
    '$scram$6400$.Z/znnNOKWUsBaCU$sha-1=cRseQyJpnuPGn3e6d6u6JdJWk.0,sha-256=5G
    cjEbRaUIIci1r6NAMdI9OPZbxl9S5CFR6la9CHXYc,sha-512=.DHbIm82ajXbFR196Y.9Ttbs
    gzvGjbMeuWCtKve8TPjRMNoZK9EGyHQ6y0lW9OtWdHZrDZbBUhB9ou./VI2mlw'

    >>> # same, but with an explicit number of rounds
    >>> scram.using(rounds=8000).hash("password")
    '$scram$8000$Y0zp/R/DeO89h/De$sha-1=eE8dq1f1P1hZm21lfzsr3CMbiEA,sha-256=Nf
    kaDFMzn/yHr/HTv7KEFZqaONo6psRu5LBBFLEbZ.o,sha-512=XnGG11X.J2VGSG1qTbkR3FVr
    9j5JwsnV5Fd094uuC.GtVDE087m8e7rGoiVEgXnduL48B2fPsUD9grBjURjkiA'

    >>> # verify password
    >>> scram.verify("password", hash)
    True
    >>> scram.verify("secret", hash)
    False

See the generic :ref:`PasswordHash usage examples <password-hash-examples>`
for more details on how to use the common hash interface.

----

Additionally, this class provides a number of useful methods for SCRAM-specific actions:

* You can override the default list of digests, and/or the number of iterations::

    >>> hash = scram.using(rounds=1000, algs="sha-1,sha-256,md5").hash("password")
    >>> hash
    '$scram$1000$RsgZo7T2/l8rBUBI$md5=iKsH555d3ctn795Za4S7bQ,sha-1=dRcE2AUjALLF
    tX5DstdLCXZ9Afw,sha-256=WYE/LF7OntriUUdFXIrYE19OY2yL0N5qsQmdPNFn7JE'

* Given a scram hash, you can use a single call to extract all the information
  the SCRAM needs to authenticate against a specific mechanism::

    >>> # this returns (salt_bytes, rounds, digest_bytes)
    >>> scram.extract_digest_info(hash, "sha-1")
    ('F\xc8\x19\xa3\xb4\xf6\xfe_+\x05@H',
     1000,
     'u\x17\x04\xd8\x05#\x00\xb2\xc5\xb5~C\xb2\xd7K\tv}\x01\xfc')

* Given a scram hash, you can extract the list of digest algorithms
  it contains information for (``sha-1`` will always be present)::

    >>> scram.extract_digest_algs(hash)
    ["md5", "sha-1", "sha-256"]

* This class also provides a standalone helper which can calculate
  the ``SaltedPassword`` portion of the SCRAM protocol, taking
  care of the SASLPrep step as well::

    >>> scram.derive_digest("password", b'\x01\x02\x03', 1000, "sha-1")
    b'k\x086vg\xb3\xfciz\xb4\xb4\xe2JRZ\xaet\xe4`\xe7'

Interface
=========
.. note::

    This hash format is new in Passlib 1.6, and its SCRAM-specific API
    may change in the next few releases, depending on user feedback.

.. autoclass:: scram()

.. rst-class:: html-toggle

Format & Algorithm
==================
An example scram hash (of the string ``password``) is::

    $scram$6400$.Z/znnNOKWUsBaCU$sha-1=cRseQyJpnuPGn3e6d6u6JdJWk.0,sha-256=5G
    cjEbRaUIIci1r6NAMdI9OPZbxl9S5CFR6la9CHXYc,sha-512=.DHbIm82ajXbFR196Y.9Ttb
    sgzvGjbMeuWCtKve8TPjRMNoZK9EGyHQ6y0lW9OtWdHZrDZbBUhB9ou./VI2mlw

An scram hash string has the format :samp:`$scram${rounds}${salt}${alg1}={digest1},{alg2}={digest2},...`, where:

* ``$scram$`` is the prefix used to identify Passlib scram hashes,
  following the :ref:`modular-crypt-format`

* :samp:`{rounds}` is the number of decimal rounds to use (6400 in the example),
  zero-padding not allowed. this value must be in ``range(1, 2**32)``.

* :samp:`{salt}` is a base64 salt string (``.Z/znnNOKWUsBaCU`` in the example),
  encoded using :func:`~passlib.utils.binary.ab64_encode`.

* :samp:`{alg}` is a lowercase IANA hash function name [#hnames]_, which should
  match the digest in the SCRAM mechanism name.

* :samp:`{digest}` is a base64 digest for the specific algorithm,
  encoded using :func:`~passlib.utils.binary.ab64_encode`.
  Digests for ``sha-1``, ``sha-256``, and ``sha-512`` are present in the example.

* There will always be one or more :samp:`{alg}={digest}` pairs, separated by a
  comma. Per the SCRAM specification, the algorithm ``sha-1`` should always be present.

There is also an alternate format (:samp:`$scram${rounds}${salt}${alg},...`)
which is used to represent a configuration string that doesn't contain
any digests. An example would be::

    $scram$6400$.Z/znnNOKWUsBaCU$sha-1,sha-256,sha-512

The algorithm used to calculate each digest is::

    pbkdf2(salsprep(password).encode("utf-8"), salt, rounds, alg_digest_size, "hmac-"+alg)

...as laid out in the SCRAM specification [#scram]_. All digests
should verify against the same password, or the hash is considered malformed.

.. note::

    This format is similar in spirit to the LDAP storage format for SCRAM hashes,
    defined in :rfc:`5803`, except that it encodes everything into a single
    string, and does not have any storage requirements (outside of the ability
    to store 512+ character ascii strings).

Security
========
The security of this hash is only as strong as the weakest digest used
by this hash. Since the SCRAM [#scram]_ protocol requires SHA1
always be supported, this will generally be the weakest link, since
the other digests will generally be stronger ones (e.g. SHA2-256).

None-the-less, since PBKDF2 is sufficiently collision-resistant
on its own, any pre-image weaknesses found in SHA1 should be mitigated
by the PBKDF2-HMAC-SHA1 wrapper; and should have no flaws outside of
brute-force attacks on PBKDF2-HMAC-SHA1.

.. rubric:: Footnotes

.. [#scram] The SCRAM protocol is laid out in :rfc:`5802`.

.. [#hnames] The official list of IANA-assigned hash function names -
             `<http://www.iana.org/assignments/hash-function-text-names>`_
