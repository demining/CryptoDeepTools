#!/usr/bin/env python3
"""Synthetic ECDSA nonce-misuse lab (secp256k1). Uses ONLY random test keys generated here."""
import secrets, hashlib
p=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
n=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
G=(0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798,
   0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8)
def add(P,Q):
    if P is None: return Q
    if Q is None: return P
    if P[0]==Q[0] and (P[1]+Q[1])%p==0: return None
    l=(3*P[0]*P[0]*pow(2*P[1],-1,p) if P==Q else (Q[1]-P[1])*pow(Q[0]-P[0],-1,p))%p
    x=(l*l-P[0]-Q[0])%p
    return (x,(l*(P[0]-x)-P[1])%p)
def mul(k,P=G):
    R=None
    while k:
        if k&1: R=add(R,P)
        P=add(P,P); k>>=1
    return R
inv=lambda a:pow(a%n,-1,n)
rnd=lambda:secrets.randbelow(n-1)+1
H=lambda m:int.from_bytes(hashlib.sha256(m).digest(),'big')%n
def sign(d,h,k,r=None):
    r=mul(k)[0]%n if r is None else r
    return r,inv(k)*(h+d*r)%n
def verify(Q,h,r,s):
    w=inv(s); X=add(mul(h*w%n),mul(r*w%n,Q)); return X is not None and X[0]%n==r
def solve(A,b):
    m=len(A); M=[row[:]+[bb] for row,bb in zip(A,b)]
    for c in range(m):
        piv=next(i for i in range(c,m) if M[i][c]%n)
        M[c],M[piv]=M[piv],M[c]; iv=inv(M[c][c]); M[c]=[v*iv%n for v in M[c]]
        for i in range(m):
            if i!=c and M[i][c]%n:
                f=M[i][c]; M[i]=[(a-f*bb)%n for a,bb in zip(M[i],M[c])]
    return [M[i][m] for i in range(m)]
def check(name,ok): print(f"[{'PASS' if ok else 'FAIL'}] {name}"); return ok
res=[]
d=rnd(); Q=mul(d); h1,h2=H(b"msg-1"),H(b"msg-2")
# 1 revealed nonce
k=rnd(); r,s=sign(d,h1,k); res.append(check("verify() accepts own signature",verify(Q,h1,r,s)))
res.append(check("5.1 revealed nonce: d = r^-1 (k s - e)",inv(r)*(k*s-h1)%n==d))
# 2 nonce reuse
r1,s1=sign(d,h1,k); r2,s2=sign(d,h2,k)
res.append(check("5.3 same r in both signatures",r1==r2))
k_rec=(h1-h2)*inv(s1-s2)%n; d_rec=(h1*s2-h2*s1)*inv(r1*(s1-s2))%n
res.append(check("5.3 k recovered",k_rec==k)); res.append(check("5.3 d recovered",d_rec==d))
# control: different nonces
ra,sa=sign(d,h1,rnd()); rb,sb=sign(d,h2,rnd())
res.append(check("control: r differ",ra!=rb))
res.append(check("control: reuse formula does NOT give d",(h1*sb-h2*sa)*inv(ra*(sa-sb))%n!=d))
# 3 two keys, shared nonces (generic linear solve for x1,x2,k1,k2)
x1,x2,k1,k2=rnd(),rnd(),rnd(),rnd(); g=[H(bytes([i])) for i in range(1,5)]
R1,R2=mul(k1)[0]%n,mul(k2)[0]%n
S=[sign(x1,g[0],k1)[1],sign(x2,g[1],k1)[1],sign(x1,g[2],k2)[1],sign(x2,g[3],k2)[1]]
# unknown order [x1,x2,k1,k2]: s_i*k - r*x = h
A=[[-R1,0,S[0],0],[0,-R1,S[1],0],[-R2,0,0,S[2]],[0,-R2,0,S[3]]]
sol=solve(A,[g[0],g[1],g[2],g[3]])
res.append(check("5.4 two keys: x1,x2,k1,k2 recovered",sol==[x1,x2,k1,k2]))
# paper formula (38)/(39) literal test
s1_,s2_,s3_,s4_=S; h1_,h2_,h3_,h4_=g
f38=(h1_*R2*s2_*s3_-h2_*R2*s1_*s3_-h3_*R1*s1_*s4_+h4_*R1*s1_*s3_)*inv(R1*R2*(s1_*s4_-s2_*s3_))%n
print("     literal eq.(38) from preprint gives x1:",f38==x1)
# 4 fault
kf=rnd(); r,s=sign(d,h1,kf); rf=(r+rnd())%n; _,sf=sign(d,h1,kf,r=rf)
res.append(check("5.5 fault: d recovered",h1*(s-sf)*inv(r*sf-s*rf)%n==d))
print("ALL OK" if all(res) else "SOME FAILED")

try:
    from ecdsa import SigningKey, SECP256k1, BadSignatureError
    from ecdsa.util import sigencode_string, sigdecode_string
except ImportError:
    print("[SKIP] repository integration: install python-ecdsa to enable")
else:
    sk=SigningKey.from_secret_exponent(d, curve=SECP256k1, hashfunc=hashlib.sha256)
    digest=hashlib.sha256(b"repository-integration-test").digest()
    kk=rnd()
    sig=sk.sign_digest(digest,k=kk,sigencode=sigencode_string)
    rr,ss=sigdecode_string(sig,n)
    eh=int.from_bytes(digest,'big')%n
    assert (rr,ss)==sign(d,eh,kk)
    assert sk.verifying_key.verify_digest(sig,digest,sigdecode=sigdecode_string)
    a=sk.sign_deterministic(b"same-message",hashfunc=hashlib.sha256)
    b=sk.sign_deterministic(b"same-message",hashfunc=hashlib.sha256)
    assert a==b
    print("[PASS] repository signatures agree with independent arithmetic")
    print("[PASS] RFC6979 same-message signatures repeat safely")
