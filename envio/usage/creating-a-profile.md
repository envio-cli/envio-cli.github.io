---
sidebar_position: 2
---

# Creating a Profile

To use `envio`, you first need to create a profile.

 
Creating a profile is easy! Just use the `envio create` command. By default, `envio` uses `passphrase` encryption, securing your profile with the help of the 📦 [age](https://crates.io/crates/age) crate.

To create a profile with the default `passphrase` encryption method, run the following command:

```bash
$ envio create <profile_name>
```
Replace `<profile_name>` with the the name you want for your profile, like.

```bash
$ envio create myprofile
```

This command will create a new profile called `myprofile` and prompt you to type in a key. This key will be used later on to encrypt and decrypt your profile, so make sure to choose a strong one and keep it safe!

Prefer a different encryption method? No problem! `envio` also supports `GPG` encryption. To create a profile with `GPG` encryption, use the following command:

```bash
$ envio create <profile_name> -g <gpg_key_fingerprint>
```

Replace `<gpg_key_fingerprint>` with the fingerprint of your desired GPG key. 

Alternatively, if you'd like to choose from available public keys, run:

```bash
$ envio create <profile_name> -g select
```

This command will prompt you with a list of all the public `GPG` keys available on your system, and you can select the one you want to use.

It's important to note that different operating systems require different dependencies to use `GPG` encryption with envio.

For `Windows` users, you will need to have [`GPG4Win`](https://www.gpg4win.org/) installed on your system in order to use GPG encryption with envio.

For `Linux` users, the required dependencies for using `GPG` encryption with envio may vary depending on your specific distribution and setup. To determine which dependencies you need, we recommend visiting the `gpgme` crate's GitHub page at https://github.com/gpg-rs/gpgme.

On this page, you can find more information about how to install the required dependencies to use the crate. Since the package names may vary on different Linux distributions, it's important to carefully read the documentation and follow the installation instructions for your particular setup.

For `macOS` users, you will need to have `gnupg` and `gpgme` installed on your system. You can install these dependencies using `Homebrew`, a popular package manager for `macOS`.

## Creating a Profile Using Already Existing Environment Variables
If you have enviornment variables stored in a file, you can create a new profile and import them using the following command:

```bash
$ envio create <profile_name> -f <file_name>
```

Replace `<file_name>` with the name of the file you want to import environment variables from.

Now you're all set to secure your secrets with envio! 🎉
