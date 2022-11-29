from lib.eth_hash.utils import (
    auto_choose_backend,
)


class AutoBackend:
    _keccak256 = None
    _preimage = None

    def _initialize(self):
        backend = auto_choose_backend()
        self._keccak256 = backend.keccak256
        self._preimage = backend.preimage

    @property
    def keccak256(self):
        if self._keccak256 is None:
            self._initialize()
        return self._keccak256

    @property
    def preimage(self):
        if self._preimage is None:
            self._initialize()
        return self._preimage
