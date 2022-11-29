import pytest
import sys
from unittest import (
    mock,
)


def clean_module(name):
    """Clean a module import so all variables in it will be created again"""
    try:
        del sys.modules[name]
    except KeyError:
        pass
    return


def test_import_auto():
    clean_module("lib.eth_hash.auto")
    from lib.eth_hash.auto import keccak  # noqa: F401


def test_import_auto_empty_crash(monkeypatch):
    clean_module("lib.eth_hash.auto")
    from lib.eth_hash.auto import keccak
    with mock.patch.dict("sys.modules", {"sha3": None, "Crypto.Hash": None}):
        with pytest.raises(ImportError, match="None of these hashing backends are installed"):
            keccak(b'eh')


def test_import():
    clean_module("eth_hash")
    import lib.eth_hash  # noqa: F401


@pytest.mark.parametrize(
    'backend',
    [
        'pycryptodome',
        'pysha3',
    ],
)
def test_load_by_env(monkeypatch, backend):
    clean_module("lib.eth_hash.auto")
    from lib.eth_hash.auto import keccak
    monkeypatch.setenv('ETH_HASH_BACKEND', backend)
    with mock.patch.dict("sys.modules", {"sha3": None, "Crypto.Hash": None}):
        with pytest.raises(ImportError) as excinfo:
            keccak(b'triggered')
    expected_msg = (
        "The backend specified in ETH_HASH_BACKEND, '{0}', is not installed. "
        "Install with `pip install eth-hash[{0}]`.".format(backend)
    )
    assert expected_msg in str(excinfo.value)


def test_load_unavailable_backend_by_env(monkeypatch):
    clean_module("lib.eth_hash.auto")
    from lib.eth_hash.auto import keccak
    backend = 'this-backend-will-never-exist'
    monkeypatch.setenv('ETH_HASH_BACKEND', backend)
    with pytest.raises(ValueError) as excinfo:
        keccak(b'triggered')
    expected_msg = (
        "The backend specified in ETH_HASH_BACKEND, '{0}', is not supported. "
        "Choose one of".format(backend)
    )
    assert expected_msg in str(excinfo.value)
