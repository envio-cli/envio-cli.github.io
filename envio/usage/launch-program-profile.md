---
sidebar_position: 9
---

# Launching a Program with a Profile

The `envio launch` command allows you to run a program using a specific profile. This is useful when you want to run a program with a specific set of environment variables.

To use this command, simply run:

```bash
$ envio launch <profile_name> '<program>'
```

where `<profile_name>` is the name of the profile you want to use and `'<program>'` is the name of the program you want to run and its arguments. 

:::warning

Enclose the program and its arguments in single/double quotes to ensure that the entire command is passed as a single argument to `envio`.

:::

For example, if you have a profile called `dev` with a set of environment variables specific to your development environment and you want to run a python script called `my_program.py`, run the following command:

```bash
$ envio launch dev 'python my_program.py'
```

This will run the `python my_program.py` command with the environment variables from the dev profile.
