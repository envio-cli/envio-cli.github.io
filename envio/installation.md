---
sidebar_position: 3
---

# Installation

This section will guide you through the installation process of `envio` on your machine.

:::warning

After installing `envio`, take a look at the [GPG Encryption](./encryption-methods.md#gpg-encryption) section to install the necessary dependencies for GPG encryption.

Failure to do so will result in `envio` crashing. In a future release, we plan to make the installation of these dependencies optional. But for now, it is **mandatory** to install them.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>
    #

    # Installer

    There are MSI installers available for Windows. You can find the latest version on the [releases page](https://github.com/envio-cli/envio/releases/latest)

    Or you can download the `.tar.gz` archive from the releases page as well. Ensure it matches your architecture.


    # Chocolatey
    🚧 Will be available soon

    # Scoop
    🚧 Will be available soon

</TabItem>

  <TabItem value="macos" label="Mac OS">
    #
    # Homebrew
    `envio` is available on Homebrew. To install `envio` using Homebrew, run:

    ```bash
    brew tap envio-cli/tap
    brew install envio
    ```

    # Releases
    Like other platforms, you can install `envio` via the [releases page](https://github.com/envio-cli/envio/releases/latest) and download the `.tar.gz` file which contains the binary. Ensure you download the `.tar.gz` file which contains the word `darwin` in it.

  </TabItem>

  <TabItem value="linux" label="Linux">
    #

    # AUR (Arch User Repository)
    The AUR repository for `envio` is maintained by [vitaliikuzhdin](https://aur.archlinux.org/account/vitaliikuzhdin)

    You can install `envio` from the AUR using your favorite AUR helper. Here is an example using `paru`:

    ```bash
    paru -S envio
    ```

    # Debian/Ubuntu
    On Debian based systems you can currently only install `envio` via the `.deb` package available on the [releases page](https://github.com/envio-cli/envio/releases/latest).

    ```sh
    sudo dpkg -i envio_0.5.0_amd64.deb # Adjust the version and architecture accordingly
    ```
    # Nix
    You can install `envio` using the [nix package manager](https://nixos.org/)

    ```bash
    nix-env -i envio
    ```

    # Releases
    Archives are available on the [releases page](https://github.com/envio-cli/envio/releases/latest). They contain the binary and some extra files such as shell completions.

    Here is a list of the following architectures that are officially supported:
    - `aarch64`
    - `amd64`
    - `x86_64`
    - `i686`

    In the future we plan to support installing `envio` via other package managers as well.

  </TabItem>

</Tabs>

:::danger

    When installing `envio` from the releases page, ensure you download the package that matches your system's **architecture**.

:::
