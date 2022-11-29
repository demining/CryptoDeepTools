#!/usr/bin/env python
# -*- coding: utf-8 -*-
from setuptools import (
    setup,
    find_packages,
)

extras_require={
    'test': [
        "pytest==3.3.2",
        "tox>=2.9.1,<3",
    ],
    'lint': [
        "flake8==3.4.1",
        "isort>=4.2.15,<5",
    ],
    'doc': [
        "Sphinx>=1.6.5,<2",
        "sphinx_rtd_theme>=0.1.9",
    ],
    'dev': [
        "bumpversion>=0.5.3,<1",
        "pytest-xdist",
        "pytest-watch>=4.1.0,<5",
        "wheel",
        "ipython",
    ],
    # optional backends:
    'pycryptodome': [
        "pycryptodome>=3.6.6,<4",
    ],
    'pysha3': [
        "pysha3>=1.0.0,<2.0.0",
    ],
}

extras_require['dev'] = (
    extras_require['dev']
    + extras_require['test']
    + extras_require['lint']
    + extras_require['doc']
)

setup(
    name='eth-hash',
    # *IMPORTANT*: Don't manually change the version here. Use `make bump`, as described in readme
    version='0.2.0',
    description="""eth-hash: The Ethereum hashing function, keccak256, sometimes (erroneously) called sha3""",
    long_description_markdown_filename='README.md',
    author='Jason Carver',
    author_email='ethcalibur+pip@gmail.com',
    url='https://github.com/ethereum/eth-hash',
    include_package_data=True,
    install_requires=[
    ],
    setup_requires=['setuptools-markdown'],
    python_requires='>=3.5, <4',
    extras_require=extras_require,
    py_modules=['eth_hash'],
    license="MIT",
    zip_safe=False,
    keywords='ethereum',
    packages=find_packages(exclude=["tests", "tests.*"]),
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: Implementation :: PyPy',
    ],
)
