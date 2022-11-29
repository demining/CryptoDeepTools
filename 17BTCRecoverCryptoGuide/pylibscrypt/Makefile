
all: inline


inline: pylibscrypt/pypyscrypt_inline.py

pylibscrypt/pypyscrypt_inline.py: pylibscrypt/inline.py pylibscrypt/pypyscrypt.py
	env python -m pylibscrypt.inline


clean:
	rm -f *~ .*~ *.pyc *,cover .coverage pylibscrypt/*~ pylibscrypt/*.pyc pylibscrypt/*,cover
	rm -rf __pycache__/ pylibscrypt/__pycache__/ htmlcov/


distclean: clean
	rm -f MANIFEST
	rm -rf build/ dist/


test: inline
	env python -m pylibscrypt.tests


fuzz: inline
	env python -m pylibscrypt.fuzz


coverage: inline
	./run_coverage.sh


bench: inline
	env python -m pylibscrypt.bench


pypi-upload:
	env python setup.py sdist upload -r https://upload.pypi.org/legacy/


docker-build:
	docker build -t pylibscrypt .


docker-run: docker-build
	docker run -v ${PWD}:/app pylibscrypt


docker-push: docker-build
	docker tag pylibscrypt jvarho/pylibscrypt
	docker push jvarho/pylibscrypt
