---
name: "Issue: package.json name is generic 'nextjs'"
about: "The package name should reflect the actual project."
labels: ["enhancement", "housekeeping"]
---

## Problem

`package.json` has `"name": "nextjs"`, which is the default Next.js template name. This makes it hard to:
- Identify the project in `node_modules` listings
- Publish to a private registry with the right identifier
- Reference in documentation or CI/CD pipelines

## Current

```json
{
  "name": "nextjs",
  "version": "0.1.0"
}
```

## Recommended Fix

```json
{
  "name": "huertas-jerky",
  "version": "0.1.0"
}
```

## Acceptance Criteria

- [ ] `package.json` name is changed to `"huertas-jerky"`
- [ ] `package-lock.json` is regenerated (run `npm install`)
- [ ] No other files reference `"nextjs"` as the project name (check README, CI configs, etc.)
