---
sidebar_position: 5
---

# Load a Profile

You can use the `envio load <profile_name>` command to load the profile and make the environment variables available in your terminal session.

```bash
$ envio load <profile_name>
```

On `Windows`, users just need to reload their shell and they can start using their environment variables as before. However, on `Unix-based` operating systems, a new approach has been implemented to load the environment variables securely. Whenever users open their shell, envio now asks users for the key used for the profile that was loaded. They have to type in the key to access their environment variables, which are then stored in a temporary file and sourced in the current session. This ensures that the environment variables are loaded securely and are not accessible to anyone without the correct key.

Now,
```bash
$ echo $DATABASE_URL
```

will return the value of the `DATABASE_URL` environment variable that was set in the `myprofile` profile.