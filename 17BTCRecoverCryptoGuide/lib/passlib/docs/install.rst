============
Installation
============

.. index:: Google App Engine; compatibility

Supported Platforms
===================
Passlib requires Python 2 (>= 2.6) or Python 3 (>= 3.3).
It is known to work with the following Python implementations:

.. rst-class:: float-right

.. warning::

    * Support for Python 2.6 and 3.3 will be dropped in Passlib 1.8

    * Support for Python 2.x will be dropped in Passlib 2.0

* CPython 2 -- v2.6 or newer.
* CPython 3 -- v3.3 or newer.
* PyPy -- v2.0 or newer.
* PyPy3 -- v5.3 or newer.
* Jython -- v2.7 or newer.

Passlib should work with all operating systems and environments,
as it contains builtin fallbacks for almost all OS-dependant features.
Google App Engine is supported as well.

.. versionchanged:: 1.7

    Support for Python 2.5, 3.0-3.2 was dropped.
    Support for PyPy 1.x was dropped.

.. _optional-libraries:

Optional Libraries
==================
* `bcrypt <https://pypi.python.org/pypi/bcrypt>`_,
  `py-bcrypt <https://pypi.python.org/pypi/py-bcrypt>`_, or
  `bcryptor <https://bitbucket.org/ares/bcryptor/overview>`_

   .. rst-class:: float-right

   .. warning::

       Support for ``py-bcrypt`` and ``bcryptor`` will be dropped in Passlib 1.8,
       as these libraries are unmaintained.

   If any of these packages are installed, they will be used to provide
   support for the BCrypt hash algorithm.
   This is required if you want to handle BCrypt hashes,
   and your OS does not provide native BCrypt support
   via stdlib's :mod:`!crypt` (which includes pretty much all non-BSD systems).

   `bcrypt <https://pypi.python.org/pypi/bcrypt>`_ is currently the recommended
   option -- it's actively maintained, and compatible with both CPython and PyPy.

   Use ``pip install passlib[bcrypt]`` to get the recommended bcrypt setup.

* `argon2_cffi  <https://pypi.python.org/pypi/argon2_cffi>`_ (>= 18.2.0), or
  `argon2pure  <https://pypi.python.org/pypi/argon2pure>`_ (>= 1.3)

   If any of these packages are installed, they will be used to provide
   support for the :class:`~passlib.hash.argon2` hash algorithm.
   `argon2_cffi  <https://pypi.python.org/pypi/argon2_cffi>`_  is currently the recommended
   option.

   Use ``pip install passlib[argon2]`` to get the recommended argon2 setup.

* `Cryptography <https://pypi.python.org/pypi/cryptography>`_

   If installed, will be used to enable encryption of TOTP secrets for storage
   (see :mod:`passlib.totp`).

   Use ``pip install passlib[totp]`` to get the recommended TOTP setup.

* `fastpbkdf2 <https://pypi.python.org/pypi/fastpbkdf2>`_

   If installed, will be used to greatly speed up :func:`~passlib.crypto.digest.pbkdf2_hmac`,
   and any pbkdf2-based hashes.

* `SCrypt <https://pypi.python.org/pypi/scrypt>`_ (>= 0.6)

   If installed, this will be used to provide support for the :class:`~passlib.hash.scrypt`
   hash algorithm.  If not installed, a MUCH slower builtin reference implementation will be used.

.. versionchanged:: 1.7

    Added fastpbkdf2, cryptography, argon2_cffi, argon2pure, and scrypt support.
    Removed M2Crypto support.

Installation Instructions
=========================
To install from PyPi using :command:`pip`::

    pip install passlib

..
    As noted above, you can ensure you have feature-specific extras installed
    via any of::

        pip install passlib[argon2]
        pip install passlib[bcrypt]
        pip install passlib[totp]

To install from the source using :command:`setup.py`::

    python setup.py install

.. index::
    pair: environmental variable; PASSLIB_TEST_MODE

.. rst-class:: html-toggle

Testing
=======
Passlib contains a comprehensive set of unittests (about 38% of the total code),
which provide nearly complete coverage, and verification of the hash
algorithms using multiple external sources (if detected at runtime).

All unit tests are contained within the :mod:`passlib.tests` subpackage,
and are designed to be run using the
`Nose <http://somethingaboutorange.com/mrl/projects/nose>`_ unit testing library
(as well as the ``unittest2`` library under Python 2.6).

Once Passlib and Nose have been installed, the main suite of tests may be run using::

    nosetests --tests passlib.tests

By default, this runs the main battery of tests, but omits some additional ones
(such as internal cross-checks, and mock-testing of features not provided natively by the host OS).
To run these tests as well, set the following environmental variable::

    PASSLIB_TEST_MODE="full" nosetests --tests passlib.tests

To run a quick check to confirm just basic functionality, with a pared-down set of tests::

    PASSLIB_TEST_MODE="quick" nosetests --tests passlib.tests

Tests may also be run via ``setup.py test`` or the included ``tox.ini`` file.
The ``tox.ini`` file is used to test passlib before each release, 
and contains a number different environment setups.
These tests require `tox <https://pypi.python.org/pypi/tox>`_ 2.5 or later.

.. rst-class:: html-toggle

Building the Documentation
==========================
The latest copy of this documentation should always be available
online at `<https://passlib.readthedocs.io>`_.
If you wish to generate your own copy of the documentation,
you will need to:

1. Download the Passlib source, extract it, and ``cd`` into the source directory.
2. Install all the dependencies required via ``pip install -e .[build_docs]``.
3. Run :samp:`python setup.py build_sphinx`.
4. Once Sphinx completes its run, point a web browser to the file at :samp:`{SOURCE}/build/sphinx/html/index.html`
   to access the Passlib documentation in html format.
