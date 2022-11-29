import pickle
import pytest

# Note that this file is symlink'd in all backend folders, so a change here is
# automatically shared across backend tests. If you want to add a backend-specific
# test, add it to a new file.


@pytest.fixture
def keccak_auto():
    from lib.eth_hash.auto import keccak
    return keccak


@pytest.mark.parametrize(
    'prehash, expected_result',
    (
        (
            b'',
            b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';\x7b\xfa\xd8\x04]\x85\xa4p",  # noqa: E501
        ),
        (
            bytearray(b''),
            b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';\x7b\xfa\xd8\x04]\x85\xa4p",  # noqa: E501
        ),
    ),
)
def test_keccak_256(keccak, prehash, expected_result):
    assert keccak(prehash) == expected_result


@pytest.mark.parametrize(
    'parts, expected_result',
    (
        (
            [b''],
            b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';\x7b\xfa\xd8\x04]\x85\xa4p",  # noqa: E501
        ),
        (
            [bytearray(b'')],
            b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';\x7b\xfa\xd8\x04]\x85\xa4p",  # noqa: E501
        ),
        (
            [b'', b'', b''],
            b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';\x7b\xfa\xd8\x04]\x85\xa4p",  # noqa: E501
        ),
        (
            [bytearray(b''), bytearray(b''), bytearray(b'')],
            b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';\x7b\xfa\xd8\x04]\x85\xa4p",  # noqa: E501
        ),
        (
            [b'arst', b'tsra'],
            b"\xb1\xf3T\xb2\x8f\xf2\x84R\xd6\xb9\xd6\x1fA\x06\x1b\xbe\x82\xbe\xb1\xfc\x98\xf33d\xa8\x05\x8d\x1a]\x16M\x05",  # noqa: E501
        ),
        (
            [bytearray(b'arst'), bytearray(b'tsra')],
            b"\xb1\xf3T\xb2\x8f\xf2\x84R\xd6\xb9\xd6\x1fA\x06\x1b\xbe\x82\xbe\xb1\xfc\x98\xf33d\xa8\x05\x8d\x1a]\x16M\x05",  # noqa: E501
        ),
        (
            [bytearray(b'arst'), b'tsra'],
            b"\xb1\xf3T\xb2\x8f\xf2\x84R\xd6\xb9\xd6\x1fA\x06\x1b\xbe\x82\xbe\xb1\xfc\x98\xf33d\xa8\x05\x8d\x1a]\x16M\x05",  # noqa: E501
        ),
        (
            [b'arst', bytearray(b'tsra')],
            b"\xb1\xf3T\xb2\x8f\xf2\x84R\xd6\xb9\xd6\x1fA\x06\x1b\xbe\x82\xbe\xb1\xfc\x98\xf33d\xa8\x05\x8d\x1a]\x16M\x05",  # noqa: E501
        ),
    ),
)
def test_keccak_256_preimage(keccak, parts, expected_result):
    preimage = keccak.new(parts[0])
    for part in parts[1:]:
        preimage.update(part)
    assert preimage.digest() == expected_result


def test_copy_keccak_256_preimage(keccak):
    preimage_origin = keccak.new(b'')
    preimage_copy = preimage_origin.copy()

    preimage_origin.update(b'arsttsra')

    assert preimage_origin.digest() == b"\xb1\xf3T\xb2\x8f\xf2\x84R\xd6\xb9\xd6\x1fA\x06\x1b\xbe\x82\xbe\xb1\xfc\x98\xf33d\xa8\x05\x8d\x1a]\x16M\x05"  # noqa: E501
    assert preimage_copy.digest() == b"\xc5\xd2F\x01\x86\xf7#<\x92~}\xb2\xdc\xc7\x03\xc0\xe5\x00\xb6S\xca\x82';\x7b\xfa\xd8\x04]\x85\xa4p"  # noqa: E501


def test_update_digest_update(keccak):
    preimage = keccak.new(b'')
    preimage.update(b'arst')
    assert preimage.digest() == b"\xc30[\xc9\xde\x12D\xe4\x80P\x96,\xedP\xb7Y4\xc3p\x06\xe9\x9e\x8bzb!>\x94\\=\xfc\xd7"  # noqa: E501
    preimage.update(b'tsra')
    assert preimage.digest() == b"\xb1\xf3T\xb2\x8f\xf2\x84R\xd6\xb9\xd6\x1fA\x06\x1b\xbe\x82\xbe\xb1\xfc\x98\xf33d\xa8\x05\x8d\x1a]\x16M\x05"  # noqa: E501


def test_auto_pickleable(keccak_auto):
    serialized = pickle.dumps(keccak_auto)
    deserialized = pickle.loads(serialized)

    assert deserialized(b'arst') == keccak_auto(b'arst')
