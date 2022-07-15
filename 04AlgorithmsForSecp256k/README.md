# Elliptic Curve

For an elliptic curve **_E_** over the field **_GF(p)_** given by short Weierstrass equation

 _y<sup>2</sup> = x<sup>3</sup> + Ax + B_,
 
realized:

- [ ] **Algorithm for generating a point on the curve _E_**
- [ ] **Algorithm for adding points**
- [ ] **Point doubling algorithm**
- [ ] **Algorithm for finding the integer multiple point**
- [ ] **Algorithm for finding an integer multiple point (Scalar multiplication)**
- [ ] **Algorithm for generating a divisor _D_ over a curve _E_ with a carrier _supp(D)_ of a given size _d_**
- [ ] **Miller's algorithm for calculating the value of the Weil function _f<sub> n, P</sub>_ from a divisor _D_ such that** _supp(D)_ ∩ {P, O} = ∅
- [ ] **Weil pairing**
 
 ### Modular Operations (Integer) in finite field (or Galois field) 
 
 1. _x mod n_ means “the remainder of n dividing x”. In other words, if _x = an + b_, and a, b ∈ integer as well as 0 ≤ b ≤ n − 1, then _x mod n = b_.
 2. **Inverse**: If _ax = 1 mod n_,then _a_ is the inverse of _x mod n_. There are two popular methods to solve _a_:

    • _**Method 1**_: Try every value for _a < n_ until _xa mod n = 1_.
   
    • _**Method 2**_: Euclidean method, which is usually used to solve the inverse of big integers, so it is recommended to use Method 1 to solve the inverse of small integers. 

### Elliptic Curve Points Operation

A point _P(x<sub>0</sub>, y<sub>0</sub>)_ on elliptic curve _E_ means: its coordinates _x<sub>0</sub>_ and _y<sub>0</sub>_ are elements in the field, and the coordinates _x<sub>0</sub>_ and _y<sub>0</sub>_ satisfy Equation.

1. **Elliptic curve points addition**:
Let _P, Q_ and _R_ be three points on an elliptic curve. Points addition P + Q = R.
2. **Elliptic curve points doubling**:
Let _P, Q_ be two points on an elliptic curve. Points doubling P + P = 2P = Q
3. **Scalar multiplication**: Let _P_ be a point on curve _E_ defined in equation
   - Scalar multiplication _nP_ is defined as _nP = P + P + P + ... + P_ (_n_ times), where _n_ is an integer; _nP_ is also a point on the same curve _E_.
   - The minimal positive integer a for _aP = O_ is called the **order of _P_** .
   - Scalar multiplication is extensively required in elliptic curve cryptosystems.
   
### Divisor 

A divisor _D_ on curve _E_ is a convenient way to denote a **multi-set of points on _E_**, written as the formal sum

<img src="https://github.com/demining/CryptoDeepTools/blob/main/04AlgorithmsForSecp256k/img/Divisor.png" width="310" height="90,7">

- The set of all divisors on _E_ is denoted by _Div<sub>F<sub>q</sub></sub>(E)_ and forms a group, where addition of divisors is natural.
- The zero divisor: it is the divisor with all n<sub>P</sub> = 0, the zero divisor _0 ∈ Div<sub>F<sub>q</sub></sub>(E)_.
- If the field _F<sub>q</sub>_ is not specific, it can be omitted and simply written as _Div(E)_
to denote the group of divisors.

### The Divisor of a Function _f_ on _E_

The divisor of a function _f_ on _E_ is used to denote the intersection points (and their multiplicities) of _f_ and _E_.

### The Weil pairing


The Weil pairing, which is denoted by _e<sub>m</sub>_, takes as input a pair of points _P, Q ∈ E[m]_ and gives as output an _m<sup>th</sup> root of unity _e<sub>m</sub>(P, Q)_. The bilinearity of the Weil pairing is expressed by the equations

_e<sub>m</sub>(P<sub>1</sub> + P<sub>2</sub>, Q) = e<sub>m</sub>(P<sub>1</sub>, Q) * e<sub>m</sub>(P<sub></sub>2, Q),_

_e<sub>m</sub>(P, Q<sub>1</sub> + Q<sub>2</sub>) = e<sub>m</sub>(P, Q<sub>1</sub>) * e<sub>m</sub>(P, Q<sub>2</sub>)._

The **Weil pairing** of _P_ and _Q_ is the quantity

<img src="https://github.com/demining/CryptoDeepTools/blob/main/04AlgorithmsForSecp256k/img/Weil%20formula.png" width="433" height="88">

where _S ∈ E_ is any point satisfying _S ∉ {O, P, −Q, P − Q}_. (This ensures that all of the quantities on the right-hand side of are defined and nonzero.) One can check that the value of _e<sub>m</sub>(P,Q)_ does not depend on the choice of _f<sub>P</sub>_, _f<sub>Q</sub>_, and _S_.

### An efficient algorithm to compute the Weil pairing

Let _E_ be an elliptic curve and let P = (x<sub>P</sub>,y<sub>P</sub>) and Q = (x<sub>Q</sub>, y<sub>Q</sub>) be nonzero points on _E_.

Let _λ_ be the slope of the line connecting _P_ and _Q_, or the slope of the tangent line to _E_ at P if _P = Q_. (If the line is vertical, we let _λ_ = ∞.) Define a function g<sub>P, Q</sub> on _E_ as follows:

<img src="https://github.com/demining/CryptoDeepTools/blob/main/04AlgorithmsForSecp256k/img/g(P%2CQ).png" width="425" height="105">

Then 

div(g<sub>P, Q</sub>) = [P] +[Q] - [P + Q] -[_O_].

**Miller’s Algorithm**

Let _m ≥_ and write the binary expansion of _m_ as

_m = m<sub>0</sub> + m<sub>1</sub> * 2 + m<sub>2</sub> * 2<sup>2</sup> +···+ m<sub>n - 1</sub> 2<sup>n - 1</sup>_

with _m<sub>i</sub> ∈ {0, 1}_ and _m<sub>n - 1</sub> ≠ 0_. The following algorithm returns a function _f<sub>P</sub>_ whose divisor satisfies

div(_f<sub>P</sub>_) = _m_[_P_] − [_mP_] − (_m − 1_)[_O_],

where the functions _g<sub>T, T</sub>_ and _g<sub>T, P</sub>_ used by the algorithm are as defined in (a).

<img src="https://github.com/demining/CryptoDeepTools/blob/main/04AlgorithmsForSecp256k/img/Miller’s%20Algorithm.png" width="260" height="230">

In particular, if _P ∈ E[m]_, then div(_f<sub>P</sub>_) = _m_[_P_] − _m_[_O_].

## Requirements

- `Python 3.5`
- `numpy`

---

## Commands:

    git clone https://github.com/demining/CryptoDeepTools.git
    
    cd CryptoDeepTools/04AlgorithmsForSecp256k/
    
    pip3 install numpy



## Code Organization

    ├── Curves.py             <- Dataset of elleptic curves
    ├── Divisor.py            <- Generarate divisor
    ├── EllipticCurve.py      <- Classes of elliptic curve and point on elliptic curve
    ├── EuclideanAlg.py       <- Extended Euclidean algorithm
    ├── Helper.py             <- Helping functions(Reverse bits, modulo power...) 
    ├── Pairing.py            <- Weil pairing and Miller’s Algorithm
    ├── Tests.py              <- Unit tests for functions
    ├── Tonelli_ShanksAlg.py  <- Tonelli–Shanks algorithm
    ├── main.py               <- main



## Acknowledgements <a name = "acknowledgement"></a>

We would like to thank [@ElizaLo](https://github.com/ElizaLo/) for her valuable work.


## Useful Articles

- [Efficient Computation of Miller's Algorithm in Pairing-Based Cryptography](https://scholar.uwindsor.ca/cgi/viewcontent.cgi?article=7026&context=etd)
- [An Introduction to Mathematical Cryptography](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.182.9999&rep=rep1&type=pdf)
- [Tonelli–Shanks algorithm](https://en.wikipedia.org/wiki/Tonelli–Shanks_algorithm)
- [Quadratic residue](https://en.wikipedia.org/wiki/Quadratic_residue)
- [Exponentiation by squaring](https://en.wikipedia.org/wiki/Exponentiation_by_squaring)
- [Extended Euclidean algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm)

## Useful Links

- [Elliptic Curves](https://www.desmos.com/calculator/ialhd71we3)
- [How to find primitive point on an elliptic curve?](https://math.stackexchange.com/questions/866829/how-to-find-primitive-point-on-an-elliptic-curve)
- [Generating random (torsion) point on elliptic curve efficiently](https://math.stackexchange.com/questions/3075947/generating-random-torsion-point-on-elliptic-curve-efficiently)

---




|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2kh9WzCActXSGHxyypGLkqQZfxDpw8v |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
