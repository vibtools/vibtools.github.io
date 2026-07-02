# Contributing

## Before opening a change

1. Select the repository that owns the affected behavior.
2. Search existing issues and pull requests.
3. Reproduce defects and record the environment, current behavior, and expected behavior.
4. Keep the change focused and preserve existing supported behavior.

## Development

```bash
npm ci
npm run dev
```

## Required checks

```bash
npm run validate
npm run audit:prod
```

A pull request must not introduce build errors, type errors, inaccessible controls, broken internal links, unapproved brand colors, new fonts, non-Lucide icons, or unnecessary client JavaScript.

## Commit scope

Use clear, imperative commit messages. Separate unrelated refactors from functional changes.

## Pull request evidence

Include:

- Purpose and affected routes
- Screenshots at relevant responsive widths for visual changes
- Keyboard and focus verification
- Build and validation results
- Backward-compatibility impact
- Security implications
