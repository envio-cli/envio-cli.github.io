---
sidebar_position: 11
---

# Exporting Environment Variables from a Profile
To export all environment variables from a profile, users can run the following command:

```bash
$ envio export <profile_name> -f <file_to_export_to>
# OR
$ envio export <profile_name> --file-to-export-to <file_to_export_to>
```

If the `file_to_export_to` argument is not specified, the command will export the environment variables to a file called `.env`

By exporting and importing environment variables, users can easily share configurations between different machines or team members, or save and load different configurations as needed.

Next, let's finally see how we can delete a profile from our setup.