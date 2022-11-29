import importlib
import os

from lib.eth_hash.backends import (
    SUPPORTED_BACKENDS,
)


def auto_choose_backend():
    env_backend = get_backend_in_environment()

    if env_backend:
        return load_environment_backend(env_backend)
    else:
        return choose_available_backend()


def get_backend_in_environment():
    return os.environ.get('ETH_HASH_BACKEND', None)


def load_backend(backend_name):
    return importlib.import_module('lib.eth_hash.backends.%s' % backend_name)


def load_environment_backend(env_backend):
    if env_backend in SUPPORTED_BACKENDS:
        try:
            return load_backend(env_backend)
        except ImportError as e:
            raise ImportError(
                "The backend specified in ETH_HASH_BACKEND, '{0}', is not installed. "
                "Install with `pip install eth-hash[{0}]`.".format(env_backend)
            )
    else:
        raise ValueError(
            "The backend specified in ETH_HASH_BACKEND, %r, is not supported. "
            "Choose one of: %r" % (env_backend, SUPPORTED_BACKENDS)
        )


def choose_available_backend():
    for backend in SUPPORTED_BACKENDS:
        try:
            return load_backend(backend)
        except ImportError:
            pass
    raise ImportError(
        "None of these hashing backends are installed: %r.\n"
        "Install with `pip install eth-hash[%s]`." % (
            SUPPORTED_BACKENDS,
            SUPPORTED_BACKENDS[0],
        )
    )
