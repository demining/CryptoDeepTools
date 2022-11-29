#!/usr/bin/env python

from distutils.core import setup

# Read README for long description
readme = open('README').read()
try:
    import pypandoc
    pypandoc.get_pandoc_formats()
    readme = pypandoc.convert(readme, to='rst', format='markdown')
except:
    pass

with open('pylibscrypt/__init__.py') as f:
    for l in f.readlines():
        if l.startswith('__version__'):
            version = l.split('=')[1].strip().strip("'")

setup(name='pylibscrypt',
    version=version,
    description='Scrypt for Python',
    long_description=readme,
    author='Jan Varho',
    author_email='jan@varho.org',
    url='https://github.com/jvarho/pylibscrypt',
    license='ISC License',
    packages=['pylibscrypt'],
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: ISC License (ISCL)',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: Implementation :: CPython',
        'Programming Language :: Python :: Implementation :: PyPy',
        'Topic :: Security :: Cryptography',
        'Topic :: Software Development :: Libraries',
    ],
)

