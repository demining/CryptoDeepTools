#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from functools import reduce

def extended_gcd(a, b):
    """Extended Euclidean algorithm for finding GCD and Bézout coefficients"""
    if a == 0:
        return b, 0, 1
    gcd, x1, y1 = extended_gcd(b % a, a)
    x = y1 - (b // a) * x1
    y = x1
    return gcd, x, y

def mod_inverse(a, m):
    """Calculating modular inverse function"""
    gcd, x, _ = extended_gcd(a, m)
    if gcd != 1:
        raise ValueError(f"Modular inverse does not exist for {a} and {m}")
    return x % m

def chinese_remainder_theorem(remainders, moduli):
    """
    Recovering the private key from remainders using the Chinese Remainder Theorem
    """
    total = 0
    prod = reduce(lambda x, y: x * y, moduli)
    
    for remainder, modulus in zip(remainders, moduli):
        p = prod // modulus
        total += remainder * mod_inverse(p, modulus) * p
    
    return total % prod

def load_remainders_from_file(filename="crt_remainders.txt"):
    """
    Recovering the private key from remainders using the Chinese Remainder Theorem
    """
    remainders = []
    moduli = []
    try:
        with open(filename, "r") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#"):
                    parts = line.split(",")
                    if len(parts) == 2:
                        remainders.append(int(parts[0]))
                        moduli.append(int(parts[1]))
        return remainders, moduli
    except FileNotFoundError:
        return None, None

def restore_hex_from_crt(remainders, moduli):
    """
    Recovering HEX value of the private key from remainders
    """
    restored_number = chinese_remainder_theorem(remainders, moduli)
    restored_hex = hex(restored_number)[2:]
    return restored_hex.upper()

def main():
    remainders, moduli = load_remainders_from_file()
    
    if remainders is None or moduli is None:
        remainders = [0x0E92, 0x45EB, 0x6E07, 0x317F, 
                      0x87A1, 0xB5C1, 0xE778, 0x996B,
                      0x6F69, 0xABB6, 0x2755, 0x2348, 
                      0xAB46, 0xA74E, 0x1A87, 0xC2D5]
        moduli = [0x10001, 0x10003, 0x10007, 0x1000F, 
                  0x10015, 0x1001B, 0x1002B, 0x1002D,
                  0x10033, 0x1003F, 0x10049, 0x10051, 
                  0x1005D, 0x10061, 0x1006F, 0x10073]

    restored_hex = restore_hex_from_crt(remainders, moduli)
    print("Private key Restored:")
    print(restored_hex)

if __name__ == "__main__":
    main()
