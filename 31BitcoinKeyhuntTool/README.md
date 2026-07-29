# Bitcoin Keyhunt Tool

---

* `keyhunt.py` is a Bitcoin puzzle key-search engine for CPU. For each integer `k` in a range it treats `k` as a secp256k1 private key, derives the compressed P2PKH address, and compares its HASH160 directly against a target address (decoded once, outside the hot loop). It uses `coincurve` (libsecp256k1) for fast EC math, supports checkpoint/resume, and can shard a range across multiple machines/processes.

* **Honest feasibility note:** this is about as fast as CPU Python gets, but CPU brute force cannot solve large puzzles — puzzle #71 alone is 2^70 keys. Its real uses are proving your pipeline is correct against already-solved puzzles, benchmarking, and learning.

---

# Commands:

    git clone https://github.com/demining/CryptoDeepTools.git

    cd CryptoDeepTools/31BitcoinKeyhuntTool/

    pip3 install -r requirements.txt

Verify the pipeline against solved puzzles:

    python3 keyhunt.py --selftest

Benchmark keys/sec on this machine:

    python3 keyhunt.py --benchmark

Search a range for a target address (example: solved puzzle #20):

    python3 keyhunt.py --address 1HsMJxNiV7TLxmoF6uJNkydxPFDog4NQum --start 0x80000 --end 0xfffff

Resume with a checkpoint file:

    python3 keyhunt.py --address 1HsMJxNiV7TLxmoF6uJNkydxPFDog4NQum --start 0x80000 --end 0xfffff --checkpoint progress.json

Split a range across shards (e.g. shard 0 of 4):

    python3 keyhunt.py --address <addr> --start 0x... --end 0x... --shards 4 --shard-id 0

---




|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2gTnMpxRUNBU85Hg4ruTwnpUPKdf3nV |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
