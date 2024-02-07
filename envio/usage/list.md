---
sidebar_position: 8
---

# List Profiles and Environment Variables
You can view all your existing profiles and also all the environment variables in a specific profile

To list all the existing profiles, users can run the following command:
```bash
$ envio list -p
# OR
$ envio list --profiles
```

To list all the environment variables in a profile, users can run the following command:
```bash
$ envio list -n <profile_name>
# OR
$ envio list --profile-name <profile_name>
```

Users can also view their profiles and environment variables in a profile without any visual formatting using the `--no-pretty-print` flag

To list all existing profiles:
```bash
$ envio list -p -v
# OR
$ envio list -p --no-pretty-print
```

To list all the environment variables in a profile:
```bash
$ envio list -n <profile_name> -v
```

Now we have covered all the basic commands of `envio`. The upcoming sections will cover some of the additional features that `envio` provides.

