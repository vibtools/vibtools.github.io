# Security Policy

## Supported version

The latest release on the `main` branch is supported.

## Reporting a vulnerability

Do not publish exploitable details in a public issue. Use GitHub private vulnerability reporting when enabled for the affected repository. If private reporting is unavailable, contact the maintainers at `hello@vib.tools` with:

- Affected repository and version
- Reproduction conditions
- Impact assessment
- Minimal proof of concept without unrelated data
- Suggested remediation, if known

## Website security model

This website is static, does not implement user accounts, and does not process form submissions. Build-time repository data is treated as untrusted metadata and rendered through Astro's escaped templates. No user-provided HTML is rendered.
