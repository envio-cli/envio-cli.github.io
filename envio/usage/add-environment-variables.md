---
sidebar_position: 3
---

# Add Environment Variables to a Profile

Once you have created a profile, you can use the `envio add <profile_name> --envs <key>=<value>` command to add enviorment variables to it. to add a variable named DATABASE_URL with a value of postgres://localhost/mydb, you would run the command:

```bash
$ envio add myprofile --envs DATABASE_URL=postgres://localhost/mydb
```

Or

```bash
$ envio add myprofile -e DATABASE_URL=postgres://localhost/mydb
```

You can add multiple environment variables too

```bash
$ envio add myprofile -e 'DATABASE_URL=postgres://localhost/mydb MY_VERY_SECRETIVE_KEY=1234'
```

Make sure you include the environment variables you want to add in between quotes seperated by a space

Instead of creating a profile first and then adding environment variables, users can directly add environment variables when creating a profile using the `create` command (See [create](#creating-a-profile)):

```bash
$ envio create <profile_name> -e <key>=<value>
# OR
$ envio create <profile_name> --envs <key>=<value>
```

Or if you want to use the `GPG` encryption
```bash
$ envio create <profile_name> -e <key>=<value> -g select
```

They can also import environment variables from a file too

```bash
$ envio create <profile_name> -f <file_name>
# OR
$ envio create <profile_name> --file-to-import-envs-from <file_name>
```

You can view all the environment variables in your profile using the `list` command (See [List](./list.md) command)