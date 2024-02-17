---
sidebar_position: 5
---

# Quick Start Guide


Visit the [installation](./installation) page to learn how to install envio on your system.

## Creating a Profile

Before you can start using envio, you need to create a profile. A profile is a collection of environment variables that you want to manage together.

To create a profile, run the following command:

```bash
$ envio create <profile_name>
```

Replace `<profile_name>` with the name you want to give to your profile. For example:
```bash
$ envio create myprofile
```

By default, `envio` uses passphrase encryption to protect your profile. After running the above command, envio will prompt you to enter a passphrase to encrypt your profile. Make sure to remember the passphrase as it will be required to decrypt your profile later.

If you want to use `GPG` encryption instead of passphrase encryption, use the following command:

```bash
$ envio create <profile_name> -g <gpg_key_fingerprint>
```

Replace `<gpg_key_fingerprint>` with the fingerprint of the GPG key you want to use. Or you can replace `<gpg_key_fingerprint>` with **select**, this will prompt you with a list of all the public GPG keys available on your system, and you can select the one you want to use.

## Adding Environment Variables to a Profile

Once you have created a profile, you can add environment variables to it using the following commands:

```bash
$ envio add <profile_name> -e <key>=<value>
# OR
$ envio add <profile_name> -e <key>
```

The difference between the two commands is that the first command adds the environment variable with a value while the second command prompts the user to enter the value of the environment variable. This is to prevent the environment variable from being stored in the **terminal history**.

Replace `<profile_name>` with the name of the profile you want to add the environment variable to, `<key>` with the name of the environment variable you want to add, and `<value>` with the value you want to assign to the environment variable. 

If you choose to use the second command, you will be prompted to enter the value of the environment variable.

For example:

```bash
$ envio add myprofile -e DATABASE_URL=postgres://localhost/mydb
# OR
$ envio add myprofile -e DATABASE_URL
```

You can also add multiple environment variables at once:

```bash
$ envio add myprofile -e DATABASE_URL=postgres://localhost/mydb MY_VERY_SECRETIVE_KEY=1234
# OR
$ envio add myprofile -e DATABASE_URL MY_VERY_SECRETIVE_KEY

# You can also use a combination of both
$ envio add myprofile -e DATABASE_URL=postgres://localhost/mydb MY_VERY_SECRETIVE_KEY
```

If you have environment variables stored in a file, you can import them using the following command:

```bash
$ envio create <profile_name> -f <file_name>
```

Replace `<file_name>` with the name of the file containing the environment variables you want to import.

## Updating Environment Variables in a Profile

To update an existing environment variable, use the following commands:

```bash
$ envio update <profile_name> -e <key>=<new_value>
# OR
$ envio update <profile_name> -e <key>
```

Replace `<profile_name>` with the name of the profile you want to update the environment variable in, `<key>` with the name of the environment variable you want to update, and `<new_value>` with the new value you want to assign to the environment variable. 

If you choose to use the second command, you will be prompted to enter the new value of the environment variable.

For example:

```bash
$ envio update myprofile -e DATABASE_URL=postgres://myhost/mydb 
# OR
$ envio update myprofile -e DATABASE_URL
```

You can also update multiple environment variables at once:

```bash
$ envio update myprofile -e DATABASE_URL=postgres://myhost/mydb MY_VERY_SECRETIVE_KEY=1234
# OR
$ envio update myprofile -e DATABASE_URL MY_VERY_SECRETIVE_KEY
```

Just like the `add` command, you can also use a combination of both:

```bash
$ envio update myprofile -e DATABASE_URL=postgres://myhost/mydb MY_VERY_SECRETIVE_KEY
```

## Deleting Environment Variables from a Profile

To delete environment variables from a profile, use the following command:

```bash
$ envio remove <profile_name> -e <key>
```

You can remove multiple environment variables at once:

```bash
$ envio remove myprofile -e DATABASE_URL MY_VERY_SECRETIVE_KEY
```

Replace `<profile_name>` with the name of the profile you want 

## End
That's it! You now know how to create, add, update, and delete environment variables in a profile using envio. The tool has much more to offer such as launching a program with a profile, exporting a profile, and more. You can find more information in the [usage](./usage) section.