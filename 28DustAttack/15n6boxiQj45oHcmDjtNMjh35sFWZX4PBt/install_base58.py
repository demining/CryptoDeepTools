#!/usr/bin/env python
import subprocess
import sys

package = 'base58'
subprocess.check_call([sys.executable, '-m', 'pip', 'install', package])

