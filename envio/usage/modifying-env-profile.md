---
sidebar_position: 4
---
# Modifying Environment Variables in a Profile

## Updating Environment Variables in a Profile

To edit an existing variable, you can use the `envio update <profile_name> --env <key>=<new_value>` command. For example, to change the value of the DATABASE_URL variable in the `myprofile` profile to postgres://myhost/mydb, you would run the command:

```bash
$ envio update myprofile --envs DATABASE_URL=postgres://myhost/mydb
# OR
$ envio update myprofile -e DATABASE_URL=postgres://myhost/mydb
```

## Removing Environment Variables in a Profile

To remove a variable from a profile, use the `envio remove <profile_name> --envs-to-remove <key>` command. For example, to remove the DATABASE_URL variable from the `myprofile` profile, you would run the command:

```bash
$ envio remove myprofile --envs-to-remove MY_VERY_SECRETIVE_KEY
# OR
$ envio remove myprofile -e MY_VERY_SECRETIVE_KEY
```

