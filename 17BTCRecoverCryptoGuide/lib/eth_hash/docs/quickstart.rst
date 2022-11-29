Quickstart
============

Choose a hashing backend
---------------------------

If you're not sure, choose "pycryptodome" because it supports pypy3.

You can find a full list of each currently supported backend in :mod:`eth_hash.backends`.

Install
----------

Put the backend you would like to use in brackets during install, like:

.. code-block:: shell

  pip install eth-hash[pycryptodome]

Compute a Keccak256 Hash
-----------------------------

.. doctest::

  >>> from eth_hash.auto import keccak
  >>> keccak(b'')
  b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';{\xfa\xd8\x04]\x85\xa4p"


You may also compute hashes incrementally

.. doctest::

  >>> from eth_hash.auto import keccak
  >>> preimage = keccak.new(b'part-a')
  >>> preimage.update(b'part-b')
  >>> preimage.digest()
  b'6\x91l\xdd50\xd6[\x7f\xf9B\xff\xc9SW\x98\xc3\xaal\xd9\xde\xdd6I\xb7\x91\x9e\xf4`pl\x08'

The preimage object returned may be copied as well.

.. doctest::

  >>> from eth_hash.auto import keccak
  >>> preimage = keccak.new(b'part-a')
  >>> preimage_copy = preimage.copy()
  >>> preimage.update(b'part-b')
  >>> preimage.digest()
  b'6\x91l\xdd50\xd6[\x7f\xf9B\xff\xc9SW\x98\xc3\xaal\xd9\xde\xdd6I\xb7\x91\x9e\xf4`pl\x08'
  >>> preimage_copy.update(b'part-c')
  >>> preimage_copy.digest()
  b'\xffcy45\xea\xdd\xdf\x8e(\x1c\xfcF\xf3\xd4\xa1S\x0f\xdf\xd8\x01!\xb2(\xe1\xc7\xc6\xa3\x08\xc3\n\x0b'


Select one of many installed backends
---------------------------------------

If you have several backends installed, you may want to
explicitly specify which one to load. You can specify
in an environment variable, or at runtime.

Specify backend by environment variable
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: shell

  $ ETH_HASH_BACKEND="pysha3" python
  >>> from eth_hash.auto import keccak
  # This runs with the pysha3 backend
  >>> keccak(b'')
  b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';{\xfa\xd8\x04]\x85\xa4p"

Specify backend at runtime
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

  >>> from lib.eth_hash.backends import pysha3
  >>> from lib.eth_hash import Keccak256
  >>> keccak = Keccak256(pysha3)
  >>> keccak(b'')
  b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';{\xfa\xd8\x04]\x85\xa4p"
