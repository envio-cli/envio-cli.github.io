---
sidebar_position: 9
---

# Launching a Program with a Profile

The `envio launch` command allows you to run a program using a specific profile. This is useful when you need to switch between different sets of environment variables for different projects or environments.

To use this command, simply run:

```bash
$ envio launch <profile_name> <program>
```

where `<profile_name>` is the name of the profile you want to use and `<program>` is the name of the program you want to run and the arguments that you want to pass to the program.

For example, if you have a profile called `dev` with a set of environment variables specific to your development environment, you can run your program with these variables using the following command:

```bash
$ envio launch dev python my_program.py
```

This will run the `python my_program.py` command with the environment variables from the dev profile.
