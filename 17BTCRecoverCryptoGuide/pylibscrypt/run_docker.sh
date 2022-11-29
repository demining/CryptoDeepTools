#!/usr/bin/env bash
set -e
PYTHON=python3.6
$PYTHON -m coverage run --branch -m pylibscrypt.tests
$PYTHON -m coverage run --branch -a -m pylibscrypt.test_properties
$PYTHON -m coverage run --branch -a -m pylibscrypt.pylibscrypt
$PYTHON -m coverage run --branch -a -m pylibscrypt.pylibsodium
$PYTHON -m coverage run --branch -a test_fallback.py
$PYTHON -m coverage run --branch -a test_fallback.py -e
$PYTHON -m coverage run --branch -a test_fallback.py -p
$PYTHON -m coverage run --branch -a test_fallback.py -e -p
PYTHON=python
$PYTHON -m coverage run --branch -a -m pylibscrypt.tests
$PYTHON -m coverage run --branch -a -m pylibscrypt.test_properties
$PYTHON -m coverage run --branch -a -m pylibscrypt.pylibscrypt
$PYTHON -m coverage run --branch -a -m pylibscrypt.pylibsodium
$PYTHON -m coverage run --branch -a test_fallback.py
$PYTHON -m coverage run --branch -a test_fallback.py -e
$PYTHON -m coverage run --branch -a test_fallback.py -e -p
$PYTHON -m coverage report
$PYTHON -m coverage html
