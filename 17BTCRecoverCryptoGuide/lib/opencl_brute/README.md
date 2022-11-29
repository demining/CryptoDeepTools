# MD5,SHA1,SHA256,HMAC,PBKDF2,SCrypt Bruteforcing tools using OpenCL (GPU, yay!) and Python
(c) B. Kerler and C.B. 2017-2019

Why
===
- Because bruteforcing PBKDF2/HMAC/SCrypt and hashing MD5/SHA1/SHA256/SHA512 using just CPU sucks.
- Because Python itself is very slow for bruteforcing
- Because we'd like to bruteforce using Python and not rely on other
  tools like Hashcat (sorry Atom :D) and do not want to compile c++ first
  
Installation
=============
- Get python >= 3.7 64-Bit

Windows: 
- Download pyopencl-2018.2.1+cl12-cp37-cp37m-win_amd64.whl from
   [Here] (http://www.lfd.uci.edu/~gohlke/pythonlibs/#pyopencl) or use from Installer directory
- Download and install the Win32 OpenCL driver (from Intel) from 
   [Here] (http://registrationcenter-download.intel.com/akdlm/irc_nas/12512/opencl_runtime_16.1.2_x64_setup.msi)
- Install pyOpenCL using: python -m pip install pyopencl-2018.2.1+cl12-cp37-cp37m-win_amd64.whl
- Install scrypt using: python -m pip install scrypt

Linux:
```
sudo pip3 install numpy pybind11 pycryptodome
sudo apt install libssl-dev libssl
sudo ldconfig
sudo pip3 install scrypt
sudo apt install opencl-dev && sudo pip3 install pyopencl
wget http://registrationcenter-download.intel.com/akdlm/irc_nas/12556/opencl_runtime_16.1.2_x64_rh_6.4.0.37.tgz
tar xzvf opencl_runtime_16.1.2_x64_rh_6.4.0.37.tgz
cd opencl_runtime_16.1.2_x64_rh_6.4.0.37
./install_gui.sh
``` 

Run
===
- To test if Library works correctly, run:
  "python test.py" -> to print info
  "python test.py 0" -> to run on first platform
- See test.py for example implementation, Library is in Library folder

Issues
======
- Tested with : Intel CPU and GPU, NVIDIA GTX 1080 Ti, AMD 970 (HMAC fails on AMD right now)

 
Published under MIT license
Additional license limitations: No use in commercial products without prior permit.

Enjoy !
