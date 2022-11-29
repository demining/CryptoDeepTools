.. module:: passlib.totp
    :synopsis: totp / two factor authentaction

=======================================================
:mod:`passlib.totp` -- TOTP / Two Factor Authentication
=======================================================

.. versionadded:: 1.7

Overview
========
The :mod:`!passlib.totp` module provides a number of classes for implementing
two-factor authentication (2FA) using the TOTP [#totpspec]_ specification.
This page provides a reference to all the classes and methods in this module.

Passlib's TOTP support is centered around the :class:`TOTP` class.  There are also
some additional helpers, including the :class:`AppWallet` class, which
helps to securely encrypt TOTP keys for storage.

.. seealso::

    * :ref:`TOTP Tutorial <totp-tutorial>` --
      Overview of this module and walkthrough of how to use it.

TOTP Class
==========
.. autoclass:: TOTP(key=None, format="base32", \*, new=False, \*\*kwds)

See below for all the :class:`!TOTP` methods & attributes...

Alternate Constructors
======================
There are a few alternate class constructors offered.
These range from simple convenience wrappers such as :meth:`TOTP.new`,
to deserialization methods such as :meth:`TOTP.from_source`.

.. automethod:: TOTP.new()
.. automethod:: TOTP.from_source
.. automethod:: TOTP.from_uri
.. automethod:: TOTP.from_json
.. automethod:: TOTP.from_dict

Factory Creation
================
One powerful method offered by the TOTP class is :meth:`TOTP.using`.
This method allows you to quickly create TOTP subclasses with preconfigured defaults,
for configuration application secrets and setting default TOTP behavior
for your application:

.. automethod:: TOTP.using

.. _totp-configuration-attributes:

Basic Attributes
================
All the TOTP objects offer the following attributes,
which correspond to the constructor options above.
Most of this information will be serialized by :meth:`TOTP.to_uri` and :meth:`TOTP.to_json`:

.. autoattribute:: TOTP.key
.. autoattribute:: TOTP.hex_key
.. autoattribute:: TOTP.base32_key
.. autoattribute:: TOTP.label
.. autoattribute:: TOTP.issuer
.. autoattribute:: TOTP.digits
.. autoattribute:: TOTP.alg
.. autoattribute:: TOTP.period
.. autoattribute:: TOTP.changed

Token Generation
================
Token generation is generally useful client-side, and for generating
values to test your server implementation.  
There is one main generation method:

.. automethod:: TOTP.generate

.. rst-class:: float-right

.. warning::
    Tokens should be displayed as strings, as
    they may contain leading zeros which will get stripped if they are
    first converted to an :class:`!int`.

TotpToken
---------
The :meth:`!TOTP.generate` method returns instances of the following class,
which offers up detailed information about the generated token:

.. autoclass:: TotpToken()

Token Matching / Verification
=============================
Matching user-provided tokens is the main operation when implementing server-side TOTP support.
Passlib offers one main method: :meth:`!TOTP.match`, as well as a convenience wrapper :meth:`!TOTP.verify`:

.. automethod:: TOTP.match
.. automethod:: TOTP.verify

.. seealso:: :ref:`totp-verifying` tutorial for a usage example

TotpMatch
---------
If successful, the :meth:`!TOTP.verify` method returns instances of the following class,
which offers up detailed information about the matched token:

.. autoclass:: TotpMatch()

.. _totp-provisioning:

Client Configuration Methods
============================
Once a server has generated a new TOTP key & configuration,
it needs to be communicated to the user in order for them to store it
in a suitable TOTP client.

This can be done by displaying the key & configuration for the user
to hand-enter into their client, or by encoding TOTP object into a URI [#uriformat]_.
These configuration URIs can subsequently be displayed as a QR code,
for easy transfer to many smartphone-based TOTP clients
(such as Authy or Google Authenticator).

.. automethod:: TOTP.to_uri

.. automethod:: TOTP.pretty_key

.. seealso::

    * The :meth:`TOTP.from_source` and :meth:`TOTP.from_uri` constructors for decoding URIs.

    * The :ref:`totp-configuring-clients` tutorial for details
      about these methods, and how to render URIs to a QR Code.

.. _totp-serialization:

Serialization Methods
=====================
The :meth:`TOTP.to_uri` method is useful, but limited, because it requires
additional information (label & issuer), and lacks the ability to encrypt the key.
The :class:`TOTP` provides the following methods for serializing TOTP objects
to internal storage.  When application secrets are configured via :meth:`TOTP.using`,
these methods will automatically encrypt the resulting keys.

.. automethod:: TOTP.to_json
.. automethod:: TOTP.to_dict

.. seealso::

    * The :meth:`TOTP.from_source` and :meth:`TOTP.from_json` constructors for decoding
      the results of these methods.

    * The :ref:`totp-storing-instances` tutorial for more details.

Helper Methods
==============
While :meth:`TOTP.generate`, :meth:`TOTP.match`, and :meth:`TOTP.verify`
automatically handle normalizing tokens & time values, the following methods
are exposed in case they are useful in other contexts:

.. automethod:: TOTP.normalize_token
.. automethod:: TOTP.normalize_time

AppWallet
=========
The :class:`!AppWallet` class is used internally by the :meth:`TOTP.using` method
to store the application secrets provided for handling encrypted keys.
If needed, they can also be created and passed in directly.

.. autoclass:: AppWallet

Support Functions
=================
.. autofunction:: generate_secret(entropy=256)

Deviations
==========

* The TOTP Spec [#totpspec]_ includes an param (``T0``) providing an optional offset from the base time.
  Passlib omits this parameter (fixing it at ``0``), but so do pretty much all other TOTP implementations.

.. rubric:: Footnotes

.. [#totpspec] TOTP Specification - :rfc:`6238`

.. [#hotpspec] HOTP Specification - :rfc:`4226`

.. [#uriformat] Google's OTPAuth URI format -
       `<https://github.com/google/google-authenticator/wiki/Key-Uri-Format>`_

