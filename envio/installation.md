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

   
    # Chocolatey (Windows Package Manager)
    
    To install `envio` using Chocolatey, run:
    
    ```bash
    choco install envio
    ```

    Chocolatey is a popular package manager for Windows. It allows you to install, update, and manage software packages from the command line or with a graphical user interface.
    
    # Scoop (Windows Package Manager)

    To install `envio` using Scoop, run:
    
    ```bash
    scoop install envio
    ```
    
    Scoop is another package manager for Windows that focuses on simplicity and minimalism. It's similar to Chocolatey but has a different approach to package management.
    
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
    You can install `envio` from the AUR using your favorite AUR helper. Here is an example using `paru`:

    ```bash
    paru -S envio-bin
    ```

    # Other Linux Distributions
    `envio` is also available as a `.deb` and also as a `.tar.gz` file for other Linux distributions. You can find the latest version on the [releases page](https://github.com/envio-cli/envio/releases/latest).

    Here is a list of the following architectures that are officially supported:
    - `aarch64`
    - `amd64`
    - `x86_64`
    - `i686`

    In the future we plan to support installing `envio` via other package managers
  </TabItem>

</Tabs>

:::danger

    When installing `envio` from the releases page, ensure you download the package that matches your system's **architecture**.

:::



