from abc import (
    ABCMeta,
    abstractmethod,
)


class BasePreImage(metaclass=ABCMeta):
    @abstractmethod
    def __init__(self, value: bytes) -> None:
        pass

    @abstractmethod
    def update(self, value: bytes) -> None:
        pass

    @abstractmethod
    def digest(self) -> bytes:
        return self.keccak_fn(b''.join(self.preimage_parts))

    @abstractmethod
    def copy(self) -> 'PreImage':
        pass
