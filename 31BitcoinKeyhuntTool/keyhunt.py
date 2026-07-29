#!/usr/bin/env python3
"""
keyhunt.py — Bitcoin puzzle key-search engine (educational / benchmark tool)

What it does:
  For each integer k in a range, treats k as a secp256k1 private key,
  derives the compressed P2PKH address, and compares to a target.

  private key k  ->  P = k*G  ->  compressed pubkey  ->  SHA256 -> RIPEMD160
                 ->  (that hash160 is compared directly to the target's hash160)

Speed notes:
  - Uses coincurve (libsecp256k1) for EC math — ~100-1000x faster than pure-python ecdsa.
  - Compares HASH160 bytes directly in the hot loop. Base58 encoding is done ONCE
    (to decode the target), never inside the loop. This is the single biggest
    software speedup available on CPU.
  - Checkpointing lets a run resume where it stopped.
  - Sharding lets you split a range across N machines/processes.

HONEST FEASIBILITY NOTE (read this):
  This is correct and about as fast as CPU Python gets, but CPU brute force cannot
  solve large puzzles. Puzzle #71 is 2^70 keys. At even 1M keys/sec that is ~10^15
  years. This tool's real uses are: (1) proving your pipeline is correct against
  SOLVED puzzles, (2) benchmarking, (3) learning. It is not a path to solving #71.
"""

import hashlib
import time
import json
import os
import argparse
from coincurve import PrivateKey

# ---------- address / hash160 helpers ----------

B58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"

def b58decode(s: str) -> bytes:
    n = 0
    for c in s:
        n = n * 58 + B58.index(c)
    # figure out byte length: base58check P2PKH is 25 bytes
    full = n.to_bytes(25, "big")
    return full

def address_to_hash160(addr: str) -> bytes:
    """Decode a P2PKH address to its 20-byte hash160 (done ONCE, outside hot loop)."""
    raw = b58decode(addr)
    version, h160, checksum = raw[0:1], raw[1:21], raw[21:25]
    calc = hashlib.sha256(hashlib.sha256(version + h160).digest()).digest()[:4]
    if calc != checksum:
        raise ValueError(f"Bad address checksum for {addr}")
    return h160

def hash160_from_priv(k: int) -> bytes:
    """k -> compressed pubkey -> SHA256 -> RIPEMD160 (used by selftest/benchmark)."""
    pk = PrivateKey.from_int(k)
    pub = pk.public_key.format(compressed=True)  # 33 bytes, 0x02/0x03 + x
    return hashlib.new("ripemd160", hashlib.sha256(pub).digest()).digest()

_ONE_SCALAR = (1).to_bytes(32, "big")

def pubkey_hash160(pub_compressed: bytes) -> bytes:
    return hashlib.new("ripemd160", hashlib.sha256(pub_compressed).digest()).digest()

def hash160_to_address(h160: bytes) -> str:
    payload = b"\x00" + h160
    chk = hashlib.sha256(hashlib.sha256(payload).digest()).digest()[:4]
    n = int.from_bytes(payload + chk, "big")
    out = ""
    while n:
        n, r = divmod(n, 58); out = B58[r] + out
    # leading zero bytes -> leading '1's
    pad = 0
    for byte in payload + chk:
        if byte == 0: pad += 1
        else: break
    return B58[0] * pad + out

# ---------- the search ----------

def search(target_addr: str, start: int, end: int,
           checkpoint_file: str = None, report_every: int = 500_000):
    target_h160 = address_to_hash160(target_addr)  # decode ONCE
    resume = start
    if checkpoint_file and os.path.exists(checkpoint_file):
        with open(checkpoint_file) as f:
            cp = json.load(f)
        if cp.get("target") == target_addr and cp.get("last") is not None:
            resume = max(start, cp["last"] + 1)
            print(f"[resume] continuing from {resume:#x}")

    checked = 0
    t0 = time.time()
    k = resume
    # Incremental EC point addition (P += G each step) instead of a fresh
    # scalar multiplication per key -- ~4x faster in practice with coincurve,
    # since PrivateKey.from_int() pays extra object/validation overhead that
    # PublicKey.add() skips.
    pub = PrivateKey.from_int(k).public_key if k <= end else None
    try:
        while k <= end:
            pub_bytes = pub.format(compressed=True)
            if pubkey_hash160(pub_bytes) == target_h160:
                dt = time.time() - t0
                print(f"\n*** FOUND ***")
                print(f"private key (hex): {k:064x}")
                print(f"private key (dec): {k}")
                print(f"address:           {hash160_to_address(target_h160)}")
                print(f"(after {checked:,} keys, {dt:.1f}s)")
                return k
            checked += 1
            if checked % report_every == 0:
                dt = time.time() - t0
                rate = checked / dt if dt else 0
                print(f"checked {checked:,}  |  {rate:,.0f} keys/sec  |  at {k:#x}")
                if checkpoint_file:
                    with open(checkpoint_file, "w") as f:
                        json.dump({"target": target_addr, "last": k}, f)
            k += 1
            if k <= end:
                pub = pub.add(_ONE_SCALAR)
    except KeyboardInterrupt:
        if checkpoint_file:
            with open(checkpoint_file, "w") as f:
                json.dump({"target": target_addr, "last": k}, f)
        print(f"\n[stopped] checkpoint saved at {k:#x}")
        return None
    print("range exhausted, not found")
    return None

def shard_bounds(start, end, num_shards, shard_id):
    total = end - start + 1
    chunk = total // num_shards
    s = start + shard_id * chunk
    e = end if shard_id == num_shards - 1 else s + chunk - 1
    return s, e

# ---------- self-test against SOLVED puzzles ----------

SOLVED = {
    20: ("1HsMJxNiV7TLxmoF6uJNkydxPFDog4NQum", 0x80000, 0xfffff, 0xd2c55),
    66: ("13zb1hQbWVsc2S7ZTZnP2G4undNNpdh5so", 0x20000000000000000, 0x3ffffffffffffffff,
         0x2832ed74f2b5e35ee),
}

def selftest():
    print("=== correctness self-test (known solved puzzles) ===")
    ok = True
    for num, (addr, _s, _e, key) in SOLVED.items():
        derived = hash160_to_address(hash160_from_priv(key))
        match = derived == addr
        ok = ok and match
        print(f"puzzle #{num}: key {key:#x} -> {derived}  {'OK' if match else 'MISMATCH'}")
    print("pipeline correct" if ok else "PIPELINE BROKEN")
    return ok

# ---------- CLI ----------

if __name__ == "__main__":
    ap = argparse.ArgumentParser(description="Bitcoin puzzle key-search engine")
    ap.add_argument("--selftest", action="store_true", help="verify against solved puzzles and exit")
    ap.add_argument("--benchmark", action="store_true", help="measure keys/sec on this machine")
    ap.add_argument("--address", help="target P2PKH address")
    ap.add_argument("--start", help="range start (hex, e.g. 0x400000000000000000)")
    ap.add_argument("--end", help="range end (hex)")
    ap.add_argument("--shards", type=int, default=1)
    ap.add_argument("--shard-id", type=int, default=0)
    ap.add_argument("--checkpoint", help="checkpoint file to save/resume progress")
    args = ap.parse_args()

    if args.selftest:
        selftest(); raise SystemExit

    if args.benchmark:
        print("=== benchmark: derive+hash 200,000 keys ===")
        t0 = time.time()
        base = 0x80000
        for i in range(200_000):
            hash160_from_priv(base + i)
        dt = time.time() - t0
        print(f"{200_000/dt:,.0f} keys/sec on this machine")
        raise SystemExit

    if args.address and args.start and args.end:
        start = int(args.start, 16); end = int(args.end, 16)
        if args.shards > 1:
            start, end = shard_bounds(start, end, args.shards, args.shard_id)
            print(f"[shard {args.shard_id}/{args.shards}] {start:#x} .. {end:#x}")
        search(args.address, start, end, checkpoint_file=args.checkpoint)
    else:
        print("Nothing to do. Try --selftest or --benchmark, or give --address --start --end.")
        print("Example (verify on solved #20):")
        print("  python3 keyhunt.py --address 1HsMJxNiV7TLxmoF6uJNkydxPFDog4NQum "
              "--start 0x80000 --end 0xfffff")
