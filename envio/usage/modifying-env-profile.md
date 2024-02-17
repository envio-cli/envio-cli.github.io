---
sidebar_position: 4
---
# Modifying Environment Variables in a Profile

## Updating Environment Variables in a Profile

To edit an existing variable, you can use the `envio update <profile_name> --env <key>=<new_value>` or the `envio update <profile_name> --env <key>` commands. 

Just like the `add` command, the difference between the two commands is to update the environment variable with a new value or to prompt the user to enter the new value of the environment variable. This is to prevent the environment variable from being stored in the **terminal history**.

For example, to change the value of the `DATABASE_URL` variable in the `myprofile` profile to `postgres://myhost/mydb`, you would run the command:

```bash
$ envio update myprofile --envs DATABASE_URL=postgres://myhost/mydb
# OR
$ envio update myprofile -e DATABASE_URL=postgres://myhost/mydb
```

Or if you want `envio` to prompt you for the new value of the environment variable, you would run the command:

```bash
$ envio update myprofile --envs DATABASE_URL
# OR
$ envio update myprofile -e DATABASE_URL
```

You can update multiple environment variables at once too

```bash
$ envio update myprofile -e DATABASE_URL=postgres://myhost/mydb MY_VERY_SECRETIVE_KEY=1234
# OR
$ envio update myprofile -e DATABASE_URL MY_VERY_SECRETIVE_KEY
```

Just like the `add` command, you can use a combination of both methods of updating environment variables.

```bash
$ envio update myprofile -e DATABASE_URL=postgres://myhost/mydb MY_VERY_SECRETIVE_KEY
```

## Removing Environment Variables in a Profile

To remove a variable from a profile, use the `envio remove <profile_name> --envs-to-remove <key>` command. For example, to remove the `DATABASE_URL` variable from the `myprofile` profile, you would run the command:

```bash
$ envio remove myprofile --envs-to-remove DATABASE_URL
# OR
$ envio remove myprofile -e DATABASE_URL
```

You can remove multiple environment variables at once too

```bash
$ envio remove myprofile -e DATABASE_URL MY_VERY_SECRETIVE_KEY
```

