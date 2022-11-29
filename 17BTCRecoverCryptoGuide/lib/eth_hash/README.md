# eth-hash

[![Join the chat at https://gitter.im/ethereum/web3.py](https://badges.gitter.im/ethereum/web3.py.svg)](https://gitter.im/ethereum/web3.py?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/ethereum/eth-hash.png)](https://travis-ci.org/ethereum/eth-hash)
[![PyPI version](https://badge.fury.io/py/eth-hash.svg)](https://badge.fury.io/py/eth-hash)
[![Python versions](https://img.shields.io/pypi/pyversions/eth-hash.svg)](https://pypi.python.org/pypi/eth-hash)
[![Docs build](https://readthedocs.org/projects/eth-hash/badge/?version=latest)](http://eth-hash.readthedocs.io/en/latest/?badge=latest)
   

The Ethereum hashing function, keccak256, sometimes (erroneously) called sha3

Note: the similarly named [pyethash](https://github.com/ethereum/ethash)
has a completely different use: it generates proofs of work.

This is a low-level library, intended to be used internally by other Ethereum tools.
If you're looking for a convenient hashing tool, check out
[`eth_utils.keccak()`](https://github.com/ethereum/eth-utils#crypto-utils)
which will be a little friendlier, and provide access to other helpful utilities.

Read more in the [documentation on ReadTheDocs](http://eth-hash.readthedocs.io/). [View the change log](http://eth-hash.readthedocs.io/en/latest/releases.html).

## Quickstart

```sh
pip install eth-hash[pycryptodome]
```

```py
>>> from eth_hash.auto import keccak
>>> keccak(b'')
b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';{\xfa\xd8\x04]\x85\xa4p"
```

See the [docs](http://eth-hash.readthedocs.io/en/latest/quickstart.html#quickstart)
for more about choosing and installing backends.

## Developer setup

If you would like to hack on eth-hash, please check out the
[Ethereum Development Tactical Manual](https://github.com/pipermerriam/ethereum-dev-tactical-manual)
for information on how we do:

- Testing
- Pull Requests
- Code Style
- Documentation

### Development Environment Setup

You can set up your dev environment with:

```sh

git clone git@github.com:ethereum/eth-hash.git
cd eth-hash
virtualenv -p python3 venv
. venv/bin/activate
pip install -e .[dev]
```

### Testing Setup

During development, you might like to have tests run on every file save.

Show flake8 errors on file change:

```sh
# Test flake8
when-changed -v -s -r -1 eth_hash/ tests/ -c "clear; flake8 eth_hash tests && echo 'flake8 success' || echo 'error'"
```

Run multi-process tests in one command, but without color:

```sh
# in the project root:
pytest --numprocesses=4 --looponfail --maxfail=1
# the same thing, succinctly:
pytest -n 4 -f --maxfail=1
```

Run in one thread, with color and desktop notifications:

```sh
cd venv
ptw --onfail "notify-send -t 5000 'Test failure ⚠⚠⚠⚠⚠' 'python 3 test on eth-hash failed'" ../tests ../eth_hash
```

### Release setup

For Debian-like systems:
```
apt install pandoc
```

To release a new version:

```sh
make release bump=$$VERSION_PART_TO_BUMP$$
```

#### How to bumpversion

The version format for this repo is `{major}.{minor}.{patch}` for stable, and
`{major}.{minor}.{patch}-{stage}.{devnum}` for unstable (`stage` can be alpha or beta).

To issue the next version in line, specify which part to bump,
like `make release bump=minor` or `make release bump=devnum`.

If you are in a beta version, `make release bump=stage` will switch to a stable.

To issue an unstable version when the current version is stable, specify the
new version explicitly, like `make release bump="--new-version 4.0.0-alpha.1 devnum"`
