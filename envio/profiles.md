---
sidebar_position: 4
---

# Profiles

In `envio`, a profile is a collection of environment variables that are associated with a specific project, application, or use case. Users can create multiple profiles, each with their own set of environment variables, and easily switch between them as needed.

For example, a developer might create a profile for a web development project that includes environment variables for the **database connection**, **API keys**, and other project-specific settings. They could then switch to a different profile for a mobile app project that requires a different set of environment variables.

The benefit of using profiles is that users can easily manage and switch between different sets of environment variables without having to manually set and unset them every time they switch tasks.

:::info

Profiles are encrypted using the [age](https://crates.io/crates/age) Rust crate by default. Users can also choose to use GPG encryption if they prefer. For more information, see [Encryption Methods](./encryption-methods.md).

:::

