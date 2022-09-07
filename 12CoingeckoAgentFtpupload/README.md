# Coingecko & Agent Ftpupload

Coingecko-VanityGen is a command-line utility that can generate cryptocurrency addresses given initial parameters.
Coingecko-VanityGen works with GPU runtime support (Google Colab) and generates beautiful crypto wallet addresses for the full list of the Coingecko aggregator according to its own parameters. The selection of the utility is based on a probabilistic search, which takes some time. The time depends on the complexity of the given template, computer speed and luck. To increase the speed of generating cryptocurrency addresses, there is oclvanitygen - which uses OpenCL-compatible GPUs.



---

* Tutorial: https://youtu.be/
* Tutorial: https://cryptodeep.ru/coingecko-agent-ftpupload

---

# Commands:

    git clone https://github.com/demining/CryptoDeepTools.git

    cd CryptoDeepTools/12CoingeckoAgentFtpupload/
    
    apt-get update
    
    sudo apt-get install g++ -y
    
    sudo apt-get install libgmp3-dev libmpfr-dev -y
    
    make
    
# Run LIST and check all existing cryptocurrencies from the CoinGecko aggregator:
    
    ./coingeckogen -C LIST
    
# Run "coingeckogen" and generate a Bitcoin Address with "1DEEP" prefix:

    ./coingeckogen 1DEEP



---

# Result:

    --RESULT-(PRIVATEKEY)--------------------------------------------------------

    Pattern: 1DEEP
    Address: 1DEEPQxozZXeUmuVZxKb7JjHq28DhX99AG
    Privkey: 5JdG1jvsDgHrS8E8NpRLabzrA1tCbR6ePp9zvv1q1dV6efpSqMH

    ---------------------------------------------------------------------------------



---



* Tutorial: https://youtu.be/
* Tutorial: https://cryptodeep.ru/coingecko-agent-ftpupload



---



|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2kh9WzCActXSGHxyypGLkqQZfxDpw8v |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
