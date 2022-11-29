.. index:: TOTP; overview
.. index:: TOTP; usage examples
.. _totp-tutorial:

.. currentmodule:: passlib.totp

====================================
:class:`~passlib.totp.TOTP` Tutorial
====================================

Overview
========
The :mod:`passlib.totp` module provides a set of classes for adding
two-factor authentication (2FA) support into your application,
using the widely supported TOTP specification (:rfc:`6238`).

This module is based around the :class:`TOTP` class, which supports
a wide variety of use-cases, including:

    * Creating & transferring configured TOTP keys to client devices.

    * Generating & verifying tokens.

    * Securely storing configured TOTP keys.

.. seealso:: The :mod:`passlib.totp` API reference,
    which lists all details of all the classes and methods mentioned here.

Walkthrough
===========
There are a number of different ways to integrate TOTP support into a server application.
The following is a general outline of one of way to do this.  Some details and
alternate choices are omitted for brevity, see the remaining sections
of this tutorial for more detailed information about these steps.

.. _totp-walkthrough-step-1:

1. Generate an Application Secret
---------------------------------
First, generate a strong application secret to use when encrypting TOTP keys for storage.
Passlib offers a :meth:`generate_secret` method to help with this::

    >>> from passlib.totp import generate_secret
    >>> generate_secret()
    'pO7SwEFcUPvIDeAJr7INBj0TjsSZJr1d2ddsFL9r5eq'

This key should be assigned a numeric tag (e.g. "1", a timestamp, or an iso date such as "2016-11-10");
and should be stored in a file *separate* from your application's configuration.
Ideally, after this file has been loaded by the TOTP constructor below,
the application should give up access permissions to the file.

Example file contents::

    2016-11-10: pO7SwEFcUPvIDeAJr7INBj0TjsSZJr1d2ddsFL9r5eq

This key will be used in a later step to encrypt TOTP keys for storage in your database.
The sequential tag is used so that if your database (or the application secrets)
are ever compromised, you can add a new application secret (with a newer tag),
and gracefully migrate the compromised TOTP keys.

.. rst-class:: without-title float-center

.. seealso:: **For more details see** :ref:`totp-encryption-setup` (below).

2. TOTP Factory Initialization
------------------------------
When your application is being initialized, create a TOTP factory which is configured
for your application, and is set up to use the application secrets defined in step 1.
You can also set a default issuer here, instead of having to provide one explicitly in step 4::

    >>> from passlib.totp import TOTP
    >>> TotpFactory = TOTP.using(secrets_path='/path/to/secret/file/in/step/1',
    ...                          issuer="myapp.example.org")

The ``TotpFactory`` object returned by :meth:`TOTP.using` is actually a subclass
of :class:`TOTP` itself, and has the same methods and attributes.  The main difference is that (because
an application secret has been provided), the TOTP key will automatically be encrypted / decrypted
when serializing the object to disk.

.. rst-class:: without-title float-center

.. seealso:: **For more details see** :ref:`totp-creation` (below).

3. Rate-Limiting & Cache Initialization
---------------------------------------
As part of your application initialization, it **critically important** to
set up infrastructure to rate limit how many token verification
attempts a user / ip address is allowed to make, otherwise TOTP can be bypassed.

.. rst-class:: without-title float-center

.. seealso:: **For more details see** :ref:`totp-rate-limiting` (below)

.. rst-class:: clear

It's also **strongly recommended** to set up a per-user cache which can store the last matched TOTP counter (an integer)
for a period of a few minutes (e.g. using `dogpile.cache <https://pypi.python.org/pypi/dogpile.cache>`_,
memcached, redis, etc). This cache is used by later steps to protect your application during a narrow window of time
where TOTP would otherwise be vulnerable to a replay attack.

.. rst-class:: without-title float-center

.. seealso:: **For more details see** :ref:`totp-reuse-warning` (below)

4. Setting up TOTP for a User
-----------------------------
To set up TOTP for a new user: create a new TOTP object and key using :meth:`TOTP.new`.
This can then be rendered into a provisioning URI, and transferred to the user's TOTP client
of choice.

Rendering to a provisioning URI using :meth:`TOTP.to_uri` requires picking an "issuer" string
to uniquely identify your application, and a "label" string to uniquely identify the user.
The following example creates a new TOTP instance with a new key,
and renders it to a URI, plugging in application-specific information.

Using the ``TotpFactory`` object set up in step 2::

    >>> totp = TotpFactory.new()
    >>> uri = totp.to_uri(issuer="myapp.example.org", label="username")
    >>> uri
    'otpauth://totp/username?secret=D6RZI4ROAUQKJNAWQKYPN7W7LNV43GOT&issuer=myapp.example.org'

This URI is generally passed to a QRCode renderer, though
as fallback it's recommended to also display the key using :meth:`TOTP.pretty_key`.

.. rst-class:: without-title float-center

.. seealso:: **For more details, and more about QR Codes, see** :ref:`totp-configuring-clients` (below).

5. Storing the TOTP object
--------------------------
Before enabling TOTP for the user's account, it's good practice to first have the
user successfully verify a token (per step 6); thus confirming their client h
as been correctly configured.

Once this is done, you can store the TOTP object in your database.
This can be done via the :meth:`TOTP.to_json` method::

    >>> totp.to_json()
    '{"enckey":{"c":14,"k":"FLEQC3VO6SIT3T7GN2GIG6ONPXADG5CZ","s":"UL2J4MZG4SONHOWXLKFQ","t":"1","v":1},"type":"totp","v":1}'

Note that if there is no application secret configured, the key will not be encrypted,
and instead look like this::

    >>> totp.to_json()
    '{"key":"D6RZI4ROAUQKJNAWQKYPN7W7LNV43GOT","type":"totp","v":1}'

To ensure you always save an encrypted token, you can use ``totp.to_json(encrypted=True)``.

.. rst-class:: float-center without-title

.. seealso:: **For more details see** :ref:`totp-storing-instances`

6. Verifying a Token
--------------------
Whenever attempting to verify a token provided by the user,
first load the serialized TOTP object from the database (stored step 5),
as well as the last counter value from the cache (set up in step 3).
You should use these values to call the :meth:`TOTP.verify` method.

If verify() succeeds, it will return a :class:`TotpMatch` object.
This object contains information about the match,
including :attr:`TotpMatch.counter` (a time-dependant integer tied to this token),
and :attr:`TotpMatch.cache_seconds` (minimum time this counter should be cached).

If verify() fails, it will raise one of the :exc:`passlib.exc.TokenError` subclasses
indicating what went wrong. This will be one of three cases: the token was
malformed (e.g. too few digits), the token was invalid (didn't match),
or a recent token was reused.

A skeleton example of how this should function::

    >>> from passlib.exc import TokenError, MalformedTokenError

    >>> # pull information from your application
    >>> token = # ... token string provided by user ...
    >>> source = # ... load totp json string from database ...
    >>> last_counter = # ... load counter value from cache ...

    >>> # ... check attempt rate limit for this account / address (per step 3 above) ...

    >>> # using the TotpFactory object defined in step 2, invoke verify
    >>> try:
    ...     match = TotpFactory.verify(token, source, last_counter=last_counter)
    ... except MalformedTokenError as err:
    ...     # --- malformed token ---
    ...     # * inform user, e.g. by displaying str(err)
    ... except TokenError as err:
    ...     # --- invalid or reused token ---
    ...     # * add to rate limit counter
    ...     # * inform user, e.g. by displaying str(err)
    ... else:
    ...     # --- successful match ---
    ...     # * reset rate-limit counter
    ...     # * store 'match.counter' in per-user cache for at least 'match.cache_seconds'

.. rst-class:: float-center without-title

.. seealso:: **For more details see** :ref:`totp-verifying` (below)

.. rst-class:: html-toggle

Alternate Caching Strategy
..........................
As an alternative to storing ``match.counter`` in the cache,
applications using a cache such as memcached may wish to simply set a key
based on ``user + token`` for ``match.cache_seconds``, and reject any
tokens coming in for that user who are marked in the cache.

In that case, they should run the tokens through :meth:`TOTP.normalize_token`
first, to make sure the token strings are normalized before comparison.
In this case, the skeleton example can be amended to::

    >>> # pull information from your application
    >>> token = # ... token string provided by user ...
    >>> source = # ... load totp json string from database ...
    >>> user_id = # ... user identifier for cache

    >>> # ... check attempt rate limit for this account / address (per step 3 above) ...

    >>> # check token format
    >>> try:
    ...     token = TotpFactory.normalize_token(token)
    ... except MalformedTokenError as err:
    ...     # --- malformed token ---
    ...     # * inform user, e.g. by displaying str(err)
    ...     return

    >>> # check if token has been used, using app-defined present_in_cache() helper
    >>> cache_key = "totp-token-%s-%s" % (user_id, token)
    >>> if present_in_cache(cache_key):
    ...     # * add to rate limit counter
    ...     # * present 'token already used' message
    ...     return

    >>> # using the TotpFactory object defined in step 2, invoke verify
    >>> try:
    ...     match = TotpFactory.verify(token, source)
    ... except TokenError as err:
    ...     # --- invalid token ---
    ...     # * add to rate limit counter
    ...     # * inform user, e.g. by displaying str(err)
    ... else:
    ...     # --- successful match ---
    ...     # * reset rate-limit counter
    ...     # * set 'cache_key' in per-user cache for at least 'match.cache_seconds'

7. Reserializing Existing Objects
---------------------------------
An organization's security policy may require that a developer periodically
change the application secret key used to decrypt/encrypt TOTP objects.
Alternately, the application secret may become compromised.

In either case, a new application secret will need to be created, and a new tag assigned
(per step 1).  Any deprecated secret(s) will need to be retained in the collection passed to the ``TotpFactory``,
in order to be able to decrypt existing TOTP objects.

.. rst-class:: float-right

.. note::

    You can verify which secret is will be used
    to encrypt new keys by inspecting ``tag = TotpFactory.wallet.default_tag``.

.. rst-class:: clear

Once the new secret has been added, you will need to update all the serialized TOTP objects in the database,
decrypting them using the old secret, and encrypting them with the new one.

This can be done in a few ways.  The following skeleton example gives a simple loop that can be used,
which would ideally be run in a process that's separate from your normal application::

    >>> # presuming query_user_totp() queries your database for all user rows,
    >>> # and update_user_totp() updates a specific row.
    >>> for user_id, totp_source in query_user_totp():
    >>>     totp = TotpFactory.from_source(totp_source)
    >>>     if totp.changed:
    >>>         update_user_totp(user_id, totp.to_json())

This uses the :attr:`TOTP.changed` attribute, which is set to ``True`` if
:meth:`TOTP.from_source` (or other constructor) detects the source data is
encrypted with an old secret, is using outdated encryption settings,
or is stored in deprecated serialization format.

Some refinements that may need to be made for specific situations:

* For applications with a large number of users, it may be faster to accumulate ``(user_id, totp.to_json())``
  pairs in a buffer, and do a bulk SQL update once every 100-1000 rows.

* Depending on the dbapi layer in use, it may take care of JSON serialization for you,
  in which case you'll need to use ``totp.to_dict()`` instead of ``totp.to_json()``.

Once all references to a deprecated secret have been replaced,
it can be removed from the secrets file.

.. rst-class:: float-center without-title

.. seealso:: **For more details see** :ref:`Step 1 <totp-walkthrough-step-1>` (above), or :ref:`totp-encryption-setup` (below)

.. _totp-creation:

Creating TOTP Instances
=======================

Direct Creation
---------------
Creating TOTP instances is straightforward:
The :class:`TOTP` class can be called directly to constructor a TOTP instance
from it's component configuration::

    >>> from passlib.totp import TOTP
    >>> totp = TOTP(key='GVDOQ7NP6XPJWE4CWCLFFSXZH6DTAZWM', digits=9)
    >>> totp.generate()
    '29387414'

You can also use a number of the alternate constructors,
such as :meth:`TOTP.new` or :meth:`TOTP.from_source`::

    >>> # create new instance w/ automatically generated key
    >>> totp = TOTP.new()

    >>> # or deserializing it from a string (e.g. the output of TOTP.to_json)
    >>> totp = TOTP.from_source('{"key":"D6RZI4ROAUQKJNAWQKYPN7W7LNV43GOT","type":"totp","v":1}')

Once created, you can inspect the object for it's configuration and key::

    >>> otp.base32_key
    'GVDOQ7NP6XPJWE4CWCLFFSXZH6DTAZWM'
    >>> otp.alg
    "sha1"
    >>> otp.period
    30

If you want a non-standard alg or period, you can specify it via the constructor.
You can also create TOTP instances from an existing key
(see the :class:`TOTP` constructor's ``key`` and ``format`` options for more details)::

    >>> otp2 = TOTP(new=True, period=60, alg="sha256")
    >>> otp2.alg
    'sha256'
    >>> otp2.period
    60

    >>> otp3 = TOTP(key='GVDOQ7NP6XPJWE4CWCLFFSXZH6DTAZWM')

Using a Factory
---------------
Most applications will have some default configuration which they want
all TOTP instances to have.  This includes application secrets (for encrypting
TOTP keys for storage), or setting a default issuer label (for rendering URIs).

Instead of having to call the :class:`TOTP` constructor each time and provide
all these options, you can use the :meth:`TOTP.using` method.
This method takes in a number of the same options as the TOTP constructor,
and returns a :class:`TOTP` subclass which has these options pre-programmed
in as defaults::

    >>> # here we create a TOTP factory with a random encryption secret and a default issuer
    >>> from passlib.totp import TOTP, generate_secret
    >>> TotpFactory = TOTP.using(issuer="myapp.example.org", secrets={"1": generate_secret()})

Since this object is a subclass of :class:`TOTP`, you can use all it's normal
methods.  The difference is that it will integrate the information provided by using()::

    >>> totp = TotpFactory.new()
    >>> totp.issuer
    'myapp.example.org'

    >>> totp.to_json()
    '{"enckey":{"c":14,"k":"FLEQC3VO6SIT3T7GN2GIG6ONPXADG5CZ","s":"UL2J4MZG4SONHOWXLKFQ","t":"1","v":1},"type":"totp","v":1}'

In typical usage, a server application will want to create a TotpFactory
as part of it's initialization, and then use that class for all operations,
instead of referencing :class:`TOTP` directly.

.. rst-class:: float-center

.. seealso::

    * :ref:`totp-configuring-clients` for details about the ``issuer`` option
    * :ref:`totp-storing-instances` for details about storage and key encryption

.. _totp-configuring-clients:

Configuring Clients
===================
Once a TOTP instance & key has been generated on the server,
it needs to be transferred to the client TOTP program for installation.
This can be done by having the user manually type the key into their TOTP client,
but an easier method is to render the TOTP configuration to a URI stored in a QR Code.

Rendering URIs
--------------
The `KeyUriFormat <https://github.com/google/google-authenticator/wiki/Key-Uri-Format>`_
is a de facto standard for encoding TOTP keys & configuration
information into a string.  Once the URI is rendered as a QR Code,
it can easily be imported into many smartphone clients (such as Authy and Google Authenticator)
via the smartphone's camera.

When transferring the TOTP configuration this way, you will need to provide unique identifiers
for both your application, and the user's account.  This allows TOTP clients to distinguish
this key from the others in it's database.  This can be done via the ``issuer`` and ``label``
parameters of the :meth:`TOTP.to_uri` method.

The ``issuer`` string should be a globally unique label for your application
(e.g. it's domain name).  Since the issuer string shouldn't change across users,
you can create a customized TOTP factory, and provide it with a default issuer.
*(If you skip this step, the issuer will need to be provided at every*
:meth:`TOTP.to_uri` *call)*::

    >>> from passlib.totp import TOTP
    >>> TotpFactory = TOTP.using(issuer="myapp.example.org")

Once this is done, rendering to a provisioning URI just requires
picking a ``label`` for the URI.  This label should identify the user
within your application (e.g. their login or their email)::

    >>> # assume an existing TOTP instance has been created
    >>> totp = TotpFactory.new()

    >>> # serialize the object to a URI, along with label for user
    >>> uri = totp.to_uri(label="demo-user")
    >>> uri
    'otpauth://totp/demo-user?secret=GVDOQ7NP6XPJWE4CWCLFFSXZH6DTAZWM&issuer=myapp.example.org'

Rendering QR Codes
------------------
This URI can then be encoded as a QR Code, using various python & javascript qrcode libraries.
As an example, the following uses `PyQrCode <https://pypi.python.org/pypi/PyQRCode>`_
to render the URI to the console as a text-based QR code::

    >>> import pyqrcode
    >>> uri = totp.to_uri(label="demo-user")
    >>> print(pyqrcode.create(uri).terminal(quiet_zone=1))
    ... very large ascii-art qrcode here...

As a fallback to the QR Code, it's recommended to alternately / also display
the key itself, so that users with camera-less TOTP clients can still enter it.
The :meth:`TOTP.pretty_key` method is provided to help with this::

    >>> totp.pretty_key()
    'D6RZ-I4RO-AUQK-JNAW-QKYP-N7W7-LNV4-3GOT'

Note that if you use a non-default ``alg``, ``digits``, or ``period`` values,
these should also be displayed next to the key.

Parsing URIs
------------
On the client side, passlib offers the :meth:`TOTP.from_uri` constructor creating
a TOTP object from a provisioning URI.  This can also be useful for testing URI encoding & output
during development::

    >>> # create new TOTP instance from a provisioning uri:
    >>> from passlib.totp import TOTP
    >>> totp = TOTP.from_uri('otpauth://totp/demo-user?secret=GVDOQ7NP6XPJWE4CWCLFFSXZH6DTAZWM&issuer=myapp.example.org')
    >>> otp.base32_key
    'GVDOQ7NP6XPJWE4CWCLFFSXZH6DTAZWM'
    >>> otp.alg
    "sha1"
    >>> otp.period
    30
    >>> otp.generate().token
    '897453'

.. _totp-storing-instances:

Storing TOTP instances
======================
Once a TOTP object has been created, it inevitably needs to be stored
in a database.  Using :meth:`~TOTP.to_uri` to serialize it to a URI
has a few disadvantages - it always includes an issuer & a label
(wasting storage space), and it stores the key in an unencrypted format.

JSON Serialization
------------------
To help with this passlib offers a way to serialize TOTP objects to and from
a simple JSON format, which can optionally encrypt the keys for storage.

To serialize a TOTP object to a string, use :meth:`TOTP.to_json`::

    >>> from passlib.totp import TOTP
    >>> totp = TOTP.new()
    >>> data = totp.to_json()
    >>> data
    '{"key":"GVDOQ7NP6XPJWE4CWCLFFSXZH6DTAZWM","type":"totp","v":1}'

This string can be stored in a database, and then deserialized as needed
using the :meth:`TOTP.from_json` constructor::

    >>> totp2 = TOTP.from_json(data)
    >>> totp2.base32_key
    'GVDOQ7NP6XPJWE4CWCLFFSXZH6DTAZWM'

There are also corresponding :meth:`TOTP.to_dict` and :meth:`TOTP.from_dict`
methods for applications that want to serialize the object without converting
it all the way into a JSON string.

.. rst-class:: float-center

.. caution::

    The above procedure should only be used for development purposes,
    as it will NOT encrypt the keys; and the IETF **strongly recommends**
    encrypting the keys for storage (`RFC-6238 sec 5.1 <https://tools.ietf.org/html/rfc6238#section-5.1>`_).
    Encrypting the keys is covered below.

.. _totp-encryption-setup:

Application Secrets
-------------------
The one thing lacking about the example above is that the resulting
data contained the plaintext key.  If the server were compromised,
the TOTP keys could be used directly to impersonate the user.
To solve this, Passlib offers a method for providing an application-wide
secret that :meth:`TOTP.to_json` will use to encrypt keys.

Per :ref:`Step 1 <totp-walkthrough-step-1>` of the walkthrough (above),
applications can use the :func:`generate_secret` helper to create new secrets.
All existing secrets (the current one, and any deprecated / compromised ones)
should be assigned an identifying tag, and stored in a dict or file.

Ideally, these secrets should be stored in a location which the application's process
does not have access to once it has been initialized.  Once this data is loaded,
applications can create a factory function using :meth:`TOTP.using`,
and provide these secrets as part of it's arguments.
This can take the form of a file path, a loaded string, or a dictionary::

    >>> # load from dict
    >>> from passlib.totp import TOTP
    >>> TotpFactory = TOTP.using(secrets={"1": "'pO7SwEFcUPvIDeAJr7INBj0TjsSZJr1d2ddsFL9r5eq'"})

    >>> # load from filepath
    >>> TotpFactory = TOTP.using(secrets_path="/path/to/secret/file")

The ``secrets`` and ``secrets_path`` values can be anything accepted
by the :class:`AppWallet` constructor (the internal class that's
used to load & store the application secrets in memory).  An instance
of this object is accessible for inspection from the :attr:`!TOTP.wallet` attribute
of each factory::

    >>> TotpFactory.wallet
    <passlib.totp.AppWallet at 0x2ba5310>

Encrypting Keys
---------------
Once you have a TOTP factory configured with one or more application secrets,
any objects you create through the factory will automatically have access
to the application secrets, and will use them to encrypt the key when
serializing to json.

Assuming ``TotpFactory`` is set up from the previous step,
contrast the output of this with the plain JSON serialization example above::

    >>> totp = TotpFactory.new()
    >>> data = totp.to_json()
    >>> data
    '{"enckey":{"c":14,"k":"FLEQC3VO6SIT3T7GN2GIG6ONPXADG5CZ","s":"UL2J4MZG4SONHOWXLKFQ","t":"1","v":1},"type":"totp","v":1}'

This data can be stored in the database like normal, but
will require access to the application secret in order to decrypt::

    >>> data = '{"enckey":{"c":14,"k":"FLEQC3VO6SIT3T7GN2GIG6ONPXADG5CZ","s":"UL2J4MZG4SONHOWXLKFQ","t":"1","v":1},"type":"totp","v":1}'
    >>> totp = TotpFactory.from_source(data)
    >>> totp.base32_key
    'FLEQC3VO6SIT3T7GN2GIG6ONPXADG5CZ'

Whereas trying to decode without a secret configured will result in::

    >>> totp = TOTP.from_source(data)
    ...
    TypeError: no application secrets present, can't decrypt TOTP key

Note that when loading TOTP objects this way, you can check the :attr:`TOTP.changed`
attr to see if the object needs to be re-serialized (e.g. deprecated secret,
too few encryption rounds, deprecated serialization format).

Generating Tokens (Client-Side Only)
====================================
Finally, the whole point of TOTP: generating and verifying tokens.
The TOTP protocol generates a new time & key -dependant token every <period> seconds (usually 30).

Generating a totp token is done with the :meth:`TOTP.generate` method,
which returns a :class:`TotpToken` instance.  This object looks and acts
like a tuple of ``(token, expire_time)``, but offers some additional
informational attributes::

    >>> from passlib import totp
    >>> otp = TOTP(key='GVDOQ7NP6XPJWE4CWCLFFSXZH6DTAZWM')

    >>> # generate a TOTP token for the current timestamp
    >>> # (your output will vary based on system time)
    >>> otp.generate()
    <TotpToken token='589720' expire_time=1475342400>

    >>> # to get just the token, not the TotpToken instance...
    >>> otp.generate().token
    '359275'

    >>> # you can generate a token for a specific time as well...
    >>> otp.generate(time=1475338840).token
    '359275'

.. rst-class:: float-right

.. seealso::

    For more details, see the :meth:`TOTP.generate` method.

.. _totp-verifying:

Verifying Tokens
================
In order for successful authentication, the user must generate the token
on the client, and provide it to your server before the :attr:`TOTP.period` ends.

Since this there will always be a little transmission delay (and sometimes
client clock drift) TOTP verification usually uses a small verification window,
allowing a user to enter a token a few seconds after the period has ended.
This window is usually kept as small as possible, and in passlib defaults to 30 seconds.

Match & Verify
--------------
To verify a token a user has provided, you can use the :meth:`TOTP.match` method.
If unsuccessful, a :exc:`passlib.exc.TokenError` subclass will be raised.
If successful, this will return a :class:`TotpMatch` instance, with details about the match.
This object acts like a tuple of ``(counter, timestamp)``, but offers some additional
informational attributes::

    >>> # NOTE: all of the following was done at a fixed time, to make these
    >>> #       examples repeatable. in real-world use, you would omit the 'time' parameter
    >>> #       from all these calls.

    >>> # assuming TOTP key & config was deserialized from database store
    >>> from passlib import totp
    >>> otp = TOTP(key='GVDOQ7NP6XPJWE4CWCLFFSXZH6DTAZWM')

    >>> # user provides malformed token:
    >>> otp.match('359', time=1475338840)
    ...
    MalformedTokenError: Token must have exactly 6 digits

    >>> # user provides token that isn't valid w/in time window:
    >>> otp.match('123456', time=1475338840)
    ...
    InvalidTokenError: Token did not match

    >>> # user provides correct token
    >>> otp.match('359275', time=1475338840)
    <TotpMatch counter=49177961 time=1475338840 cache_seconds=60>

As a further optimization, the :meth:`TOTP.verify` method allows deserializing
and matching a token in a single step.  Not only does this save a little code,
it has a signature much more similar to that of Passlib's :meth:`passlib.ifc.PasswordHash.verify`.

Typically applications will provide the TOTP key in whatever format it's stored by the server.
This will usually be a JSON string (as output by :meth:`TOTP.to_json`), but can be any
format accepted by :meth:`TOTP.from_source`.
As an example::

    >>> # application loads json-serialized TOTP key
    >>> from passlib.totp import TOTP
    >>> totp_source = '{"v": 1, "type": "totp", "key": "otxl2f5cctbprpzx"}'

    >>> # parse & match the token in a single call
    >>> match = TOTP.verify('123456', totp_source)

.. rst-class:: float-right

.. seealso::

    For more details, see the :meth:`TOTP.match` and :meth:`TOTP.verify` methods.

.. _totp-reuse-warning:

Preventing Token Reuse
----------------------
Even if an attacker is able to observe a user entering a TOTP token,
it will do them no good once ``period + window`` seconds have passed (typically 60).
This is because the current time will now have advanced far enough that
:meth:`!TOTP.match` will *never* match against the stolen token.

However, this leaves a small window in which the attacker can observe and replay
a token, successfully impersonating the user.
To prevent this, applications are strongly encouraged to record the
latest :attr:`TotpMatch.counter` value that's returned by the :meth:`!TOTP.match` method.

This value should be stored per-user in a temporary cache for at least
``period + window`` seconds.  (This is typically 60 seconds, but for an exact value,
applications may check the :attr:`TotpMatch.cache_seconds` value returned by
the :meth:`!TOTP.match` method).

Any subsequent calls to verify should check this cache,
and pass in that value to :meth:`!TOTP.match`'s "last_counter" parameter
(or ``None`` if no value found).  Doing so will ensure that tokens
can only be used once, preventing replay attacks.

As an example::

    >>> # NOTE: all of the following was done at a fixed time, to make these
    >>> #       examples repeatable. in real-world use, you would omit the 'time' parameter
    >>> #       from all these calls.

    >>> # assuming TOTP key & config was deserialized from database store
    >>> from passlib.totp import TOTP
    >>> otp = TOTP(key='GVDOQ7NP6XPJWE4CWCLFFSXZH6DTAZWM')

    >>> # retrieve per-user counter from cache
    >>> last_counter = ...consult application cache...

    >>> # if user provides valid value, a TotpMatch object will be returned.
    >>> # (if they provide an invalid value, a TokenError will be raised).
    >>> match = otp.match('359275', last_counter=last_counter, time=1475338830)
    >>> match.counter
    49177961
    >>> match.cache_seconds
    60

    >>> # application should now cache the new 'match.counter' value
    >>> # for at least 'match.cache_seconds'.

    >>> # now that last_counter has been properly updated: say that
    >>> # 10 seconds later attacker attempts to re-use token user just entered:
    >>> last_counter = 49177961
    >>> match = otp.match('359275', last_counter=last_counter, time=1475338840)
    ...
    UsedTokenError: Token has already been used, please wait for another.

.. rst-class:: float-right

.. seealso::

    For more details, see the :meth:`TOTP.match` method;
    for more examples, see Step 6 above.

.. _totp-rate-limiting:

Why Rate-Limiting is Critical
-----------------------------

The :meth:`TOTP.match` method offers a ``window``
parameter, expanding the search range to account for the client getting
slightly out of sync.

While it's tempting to be user-friendly, and make this window as large as possible,
there is a security downside: Since any token within the window will be
treated as valid, the larger you make the window, the more likely it is
that an attacker will be able to guess the correct token by random luck.

Because of this, **it's critical for applications implementing OTP to rate-limit
the number of attempts on an account**, since an unlimited number of attempts
guarantees an attacker will be able to guess any given token.

**The Gory Details**

For TOTP, the formula is ``odds = guesses * (1 + 2 * window / period) / 10**digits``;
where ``window`` in this case is the :meth:`TOTP.match` window (measured in seconds),
and ``period`` is the number of seconds before the token is rotated.

This formula can be inverted to give the maximum window we want to allow
for a given configuration, rate limit, and desired odds:
``max_window = floor((odds * 10**digits / guesses - 1) * period / 2)``.

For example (assuming TOTP with 7 digits and 30 second period),
if you want an attacker's odds to be no better than 1 in 10000,
and plan to lock an account after 4 failed attempts --
the maximum window you should use would be
``floor((1/10000 * 10**6 / 4 - 1) * 30 / 2)`` or 360 seconds.

..
    xxx: The above formulas are not accurate for 10 digit tokens, since the 10th
    digit takes on fewer values -- subtitute ``3e9`` instead of ``10**digits``
    in this case.
