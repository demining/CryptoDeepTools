from lib.eth_hash.backends.auto import (
    AutoBackend,
)
from lib.eth_hash.main import (
    Keccak256,
)

keccak = Keccak256(AutoBackend())
