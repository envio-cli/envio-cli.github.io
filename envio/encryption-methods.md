---
sidebar_position: 6
---

# Available encryption methods
`envio` provides two types of encryption for users to choose from based on their preferences and needs:

- **Passphrase**
- **GPG** 

## Passphrase Encryption
**Passphrase** encryption is the default encryption mechanism used by `envio`.

With passphrase encryption, users need to pass in a **key** while creating a profile. It is important to remember this key, as it is required to perform any sort of operation on the profile, such as adding environment variables, deleting them, updating them, exporting, etc.

If the key is lost, the profile becomes **inaccessible**, and there is no way to recover the data stored in it.

:::tip

It is recommended to use a **strong** and **unique** key for each profile to ensure the security of the data stored in it.

:::

## GPG Encryption
`envio` also supports GPG encryption, a widely used encryption tool that allows users to encrypt and sign their files using public-key cryptography.

On Unix systems, we use the `gpgme` Rust crate to provide GPG support. Users need to have `gpgme` and `libgpg-error` installed on their system to use GPG encryption with `envio`.

```bash
# On Arch-based systems

$ sudo pacman -S gpgme libgpg-error
```

:::caution

The **names** of the packages may vary depending on the Linux distribution. Users need to find the **equivalent** package names for their respective repo. Like for example, on Ubuntu, the package names are `libgpgme-dev` and `libgpg-error-dev`.

:::



On Windows, we use the [gpg4win](https://www.gpg4win.org/) program to provide GPG support. Users need to have it installed on their system to use GPG encryption with `envio`. 

They can install it using Chocolatey by running the following command in the terminal:

```pwsh
choco install gpg4win
```

On macOS, users need to have `gnupg` and `gpgme` installed. They can install these tools using `Homebrew` by running the following commands in the terminal:

```bash
$ brew install gnupg gpgme
```

:::info
You can install Homebrew by running the following command in the terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

:::
