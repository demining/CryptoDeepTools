from sha3 import (
    keccak_256 as _keccak_256,
)

from lib.eth_hash.preimage import (
    BasePreImage,
)


def keccak256(prehash: bytes) -> bytes:
    return _keccak_256(prehash).digest()


class preimage(BasePreImage):
    _hash = None

    def __init__(self, prehash) -> None:
        self._hash = _keccak_256(prehash)

    def update(self, prehash) -> None:
        return self._hash.update(prehash)

    def digest(self) -> bytes:
        return self._hash.digest()

    def copy(self) -> 'preimage':
        dup = preimage(b'')
        dup._hash = self._hash.copy()
        return dup
