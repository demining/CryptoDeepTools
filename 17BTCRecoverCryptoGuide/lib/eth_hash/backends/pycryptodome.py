from Crypto.Hash import (
    keccak,
)

from lib.eth_hash.preimage import (
    BasePreImage,
)


def keccak256(prehash: bytes) -> bytes:
    hasher = keccak.new(data=prehash, digest_bits=256)
    return hasher.digest()


class preimage(BasePreImage):
    _hash = None

    def __init__(self, prehash) -> None:
        self._hash = keccak.new(data=prehash, digest_bits=256, update_after_digest=True)
        # pycryptodome doesn't expose a `copy` mechanism for it's hash objects
        # so we keep a record of all of the parts for when/if we need to copy
        # them.
        self._parts = [prehash]

    def update(self, prehash) -> None:
        self._hash.update(prehash)
        self._parts.append(prehash)

    def digest(self) -> bytes:
        return self._hash.digest()

    def copy(self) -> 'preimage':
        return preimage(b''.join(self._parts))
