from typing import (
    Union,
)

from .preimage import (
    BasePreImage,
)


class Keccak256:
    def __init__(self, backend):
        self._backend = backend
        self.hasher = self._hasher_first_run
        self.preimage = self._preimage_first_run

    def _hasher_first_run(self, preimage):
        '''
        Invoke the backend on-demand, and check an expected hash result,
        then replace this first run with the new hasher method.
        This is a bit of a hacky way to minimize overhead on hash calls after this first one.
        '''
        new_hasher = self._backend.keccak256
        assert new_hasher(b'') == b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';\x7b\xfa\xd8\x04]\x85\xa4p"  # noqa: E501
        self.hasher = new_hasher
        return new_hasher(preimage)

    def _preimage_first_run(self, data):
        new_preimage = self._backend.preimage
        self.preimage = new_preimage
        return new_preimage(data)

    def __call__(self, preimage: Union[bytes, bytearray]) -> bytes:
        if not isinstance(preimage, (bytes, bytearray)):
            raise TypeError(
                "Can only compute the hash of `bytes` or `bytearray` values, not %r" % preimage
            )

        return self.hasher(preimage)

    def new(self, preimage: (Union[bytes, bytearray])) -> BasePreImage:
        if not isinstance(preimage, (bytes, bytearray)):
            raise TypeError(
                "Can only compute the hash of `bytes` or `bytearray` values, not %r" % preimage
            )
        return self.preimage(preimage)
