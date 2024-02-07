---
sidebar_position: 10
---

# Importing Profiles
`envio` supports importing profiles from the internet. You can import an already existing profile from another user by downloading the profile and then importing it into your `envio` setup.

Users can download profiles over the internet using the following command:

```bash
$ envio import <profile_name_to_save_as> -u <url>
# OR
$ envio import <profile_name_to_save_as> --url <url>
```

`url` should point to a valid URL where the profile can be downloaded. The `profile_name_to_save_as` argument specifies the name of the profile to save as.
