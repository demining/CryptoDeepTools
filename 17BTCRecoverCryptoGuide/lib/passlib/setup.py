"""
passlib setup script

This script honors one environmental variable:
SETUP_TAG_RELEASE
    if "yes" (the default), revision tag is appended to version.
    for release, this is explicitly set to "no".
"""
#=============================================================================
# init script env -- ensure cwd = root of source dir
#=============================================================================
import os
root_dir = os.path.abspath(os.path.join(__file__, ".."))
os.chdir(root_dir)

#=============================================================================
# imports
#=============================================================================
import setuptools
import sys

#=============================================================================
# init setup options
#=============================================================================
opts = dict(
    #==================================================================
    # sources
    #==================================================================
    packages=setuptools.find_packages(root_dir),
    package_data={
        "passlib.tests": ["*.cfg"],
        "passlib": ["_data/wordsets/*.txt"],
    },
    zip_safe=True,

    #==================================================================
    # metadata
    #==================================================================
    name="passlib",
    # NOTE: 'version' set below
    author="Eli Collins",
    author_email="elic@assurancetechnologies.com",
    license="BSD",

    url="https://bitbucket.org/ecollins/passlib",
    # NOTE: 'download_url' set below

    extras_require={
        # extras w/ recommended library for argon2 backend
        "argon2": "argon2_cffi>=18.2.0",

        # extras w/ recommended library for bcrypt backend (if not present on host)
        "bcrypt": "bcrypt>=3.1.0",

        # extras to make (full) use of "passlib.totp" module
        "totp": "cryptography",

        # extras required to build passlib docs
        # TODO: automate way to sync this w/ "./docs/requirements.txt"
        "build_docs": [
            "sphinx>=1.6",
            "sphinxcontrib-fulltoc>=1.2.0",
            "cloud_sptheme>=1.10.0",
        ],
    },

    #==================================================================
    # details
    #==================================================================
    description=
    "comprehensive password hashing framework supporting over 30 schemes",

    long_description="""\
Passlib is a password hashing library for Python 2 & 3, which provides
cross-platform implementations of over 30 password hashing algorithms, as well
as a framework for managing existing password hashes. It's designed to be useful
for a wide range of tasks, from verifying a hash found in /etc/shadow, to
providing full-strength password hashing for multi-user applications.

* See the `documentation <https://passlib.readthedocs.io>`_
  for details, installation instructions, and examples.

* See the `homepage <https://bitbucket.org/ecollins/passlib>`_
  for the latest news and more information.

* See the `changelog <https://passlib.readthedocs.io/en/stable/history>`_
  for a description of what's new in Passlib.

All releases are signed with the gpg key
`4D8592DF4CE1ED31 <http://pgp.mit.edu:11371/pks/lookup?op=get&search=0x4D8592DF4CE1ED31>`_.
""",

    keywords="""\
password secret hash security
crypt md5-crypt
sha256-crypt sha512-crypt pbkdf2 argon2 scrypt bcrypt
apache htpasswd htdigest
totp 2fa
""",

    classifiers="""\
Intended Audience :: Developers
License :: OSI Approved :: BSD License
Natural Language :: English
Operating System :: OS Independent
Programming Language :: Python :: 2
Programming Language :: Python :: 2.6
Programming Language :: Python :: 2.7
Programming Language :: Python :: 3
Programming Language :: Python :: 3.3
Programming Language :: Python :: 3.4
Programming Language :: Python :: 3.5
Programming Language :: Python :: 3.6
Programming Language :: Python :: 3.7
Programming Language :: Python :: 3.8
Programming Language :: Python :: Implementation :: CPython
Programming Language :: Python :: Implementation :: Jython
Programming Language :: Python :: Implementation :: PyPy
Topic :: Security :: Cryptography
Topic :: Software Development :: Libraries
""".splitlines(),

    # TODO: add "Programming Language :: Python :: Implementation :: IronPython"
    #       (blocked by issue 34)

    #==================================================================
    # testing
    #==================================================================
    tests_require='nose >= 1.1',
    test_suite='nose.collector',

    #==================================================================
    # custom setup
    #==================================================================
    script_args=sys.argv[1:],
    cmdclass={},
)

#=============================================================================
# set version string
#=============================================================================

# pull version string from passlib
from lib.passlib import __version__ as version

# append hg revision to builds
stamp_build = False
if stamp_build:
    from lib.passlib._setup.stamp import (
        as_bool, append_hg_revision, stamp_distutils_output,
        install_build_py_exclude, set_command_options
    )

    # add HG revision to end of version
    if as_bool(os.environ.get("SETUP_TAG_RELEASE", "yes")):
        version = append_hg_revision(version)

    # subclass build_py & sdist to rewrite source version string,
    # and clears stamp_build flag so this doesn't run again.
    stamp_distutils_output(opts, version)

    # exclude 'passlib._setup' from builds, only needed for sdist
    install_build_py_exclude(opts)
    set_command_options(opts, "build_py",
        exclude_packages=["passlib._setup"],
    )

opts['version'] = version

#=============================================================================
# set release status
#=============================================================================

if '.dev' in version:
    status = "Development Status :: 3 - Alpha"
elif '.post' in version:
    status = "Development Status :: 4 - Beta"
else:
    status = "Development Status :: 5 - Production/Stable"

    # only list download url for final release
    opts.update(
        download_url=("https://pypi.python.org/packages/source/p/passlib/"
                      "passlib-" + version + ".tar.gz")
    )

opts['classifiers'].append(status)

#=============================================================================
# run setup
#=============================================================================
setuptools.setup(**opts)

#=============================================================================
# eof
#=============================================================================
