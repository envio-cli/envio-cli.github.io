---
sidebar_position: 3
---

# Add Environment Variables to a Profile

Once you have created a profile, you can use the `envio add <profile_name> --envs <key>=<value>` or the `envio add <profile_name> --envs <key>` commands to add enviorment variables to it. The difference between the two commands is that the first command adds a the environment variable with a value while the second command prompts the user to enter the value of the environment variable. This is to prevent the environment variable from being stored in the **terminal history**.

To add a variable named `DATABASE_URL` with a value of `postgres://localhost/mydb`, you would run the command:

```bash
$ envio add myprofile --envs DATABASE_URL=postgres://localhost/mydb
# OR
$ envio add myprofile -e DATABASE_URL=postgres://localhost/mydb
```

Or if you want `envio` to prompt you for the value of the environment variable, you would run the command:

```bash
$ envio add myprofile --envs DATABASE_URL
# OR
$ envio add myprofile -e DATABASE_URL
```


You can add multiple environment variables at once too

```bash
$ envio add myprofile -e DATABASE_URL=postgres://localhost/mydb MY_VERY_SECRETIVE_KEY=1234
# OR
$ envio add myprofile -e DATABASE_URL MY_VERY_SECRETIVE_KEY

# You can also use a combination of both
$ envio add myprofile -e DATABASE_URL=postgres://localhost/mydb MY_VERY_SECRETIVE_KEY
```

Instead of creating a profile first and then adding environment variables, users can directly add environment variables when creating a profile using the `create` command (See [create](./creating-a-profile)):

```bash
$ envio create <profile_name> -e <key>=<value>
# OR
$ envio create <profile_name> -e <key>
```

Or if you want to use the `GPG` encryption
```bash
$ envio create <profile_name> -e <key>=<value> -g <GPG_KEY_FINGERPRINT>
# OR
$ envio create <profile_name> -e <key> -g <GPG_KEY_FINGERPRINT>
```

If you want to get a list of all the available GPG keys on your system and select one to use, you can replace the `<GPG_KEY_FINGERPRINT>` value with the keyword `select`:

```bash
$ envio create <profile_name> -e <key>=<value> -g select
# OR
$ envio create <profile_name> -e <key> -g select
```

You can also import environment variables from a file using the `--file-to-import-envs-from` or `-f` flag

```bash
$ envio create <profile_name> -f <file_name>
# OR
$ envio create <profile_name> --file-to-import-envs-from <file_name>
```

This will create a profile with the name `<profile_name>` and add the environment variables from the file `<file_name>` to it.

:::info

`envio` assumes that the file contains environment variables in the format `KEY=VALUE` and each environment variable is on a new line.

:::

You can view all the environment variables in your profile using the `list` command (See [List](./list.md) command)