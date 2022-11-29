contributors: gurnec
## The Passwordlist ##

If you already have a simple list of whole passwords you'd like to test, and you don't need any of the features described above, you can use the `--passwordlist` command-line option (instead of the `--tokenlist` option as described later in the [Running *btcrecover*](#running-btcrecover) section). If your password contains any non-[ASCII](https://en.wikipedia.org/wiki/ASCII) (non-English) characters, you should read the section on [Unicode Support](#unicode-support) before continuing.

If you specify `--passwordlist` without a file, *btcrecover* will prompt you to type in a list of passwords, one per line, in the Command Prompt window. If you already have a text file with the passwords in it, you can use `--passwordlist FILE` instead (replacing `FILE` with the file name).

Be sure not to add any extra spaces, unless those spaces are actually a part of a password.

Each line is used verbatim as a single password when using the `--passwordlist` option (and none of the features from above are applied). You can however use any of the Typos features described below to try different variations of the passwords in the passwordlist.