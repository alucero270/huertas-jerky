---
name: "Issue: No ESLint Configuration"
about: "The `next lint` script exists but has no configuration — no lint rules are enforced."
labels: ["enhancement", "code-quality", "good first issue"]
---

## Problem

`package.json` has `"lint": "next lint"` but **no ESLint configuration file** exists:
- No `.eslintrc` / `.eslintrc.json` / `.eslintrc.js`
- No `eslint.config.js` (flat config)
- No `eslint` key in `package.json`

This means `next lint` runs with zero custom rules. Dead code, unused imports, and common bugs go undetected.

## Recommended Fix

Create an ESLint config using Next.js's recommended preset:

```js
// eslint.config.mjs (Next.js 15 flat config)
import nextPlugin from '@next/eslint-plugin-next';

export default [
  {
    ignores: ['node_modules/', '.next/', 'public/'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
```

## Acceptance Criteria

- [ ] ESLint configuration file is created (`.eslintrc` or `eslint.config.mjs`)
- [ ] `@next/eslint-plugin-next` is installed as a devDependency
- [ ] `next lint` runs and reports issues (even if just warnings)
- [ ] Running `next lint --fix` auto-fixes any fixable issues
- [ ] No regressions from the lint run (all existing files pass)
