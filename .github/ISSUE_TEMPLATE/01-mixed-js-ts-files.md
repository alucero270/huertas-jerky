---
name: "🔴 Issue: Mixed JS/TS File Extensions — Zero Type Checking on Majority of Codebase"
about: "Inconsistent file extensions (.js/.jsx vs .ts/.tsx) mean TypeScript provides no type safety for ~70% of the project."
labels: ["bug", "typescript", "good first issue"]
---

## Problem

The codebase mixes `.js`/`.jsx` and `.ts`/`.tsx` files. The `tsconfig.json` does **not** have `"checkJs": true`, so **zero TypeScript type checking** is performed on `.js` files. This means type errors can silently reach production.

## Current State

**TypeScript files (checked):**
- `src/app/layout.tsx`
- `src/app/(home)/page.tsx`
- `src/components/ModeSwitch.tsx`
- `src/components/Providers.tsx`

**JavaScript files (NOT checked — ~70% of codebase):**
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/ProductCard.js`
- `src/app/about/page.js`
- `src/app/contact/page.js`
- `src/app/faq/page.js`
- `src/app/products/[slug]/page.js`
- `src/app/recipes/page.js`
- `src/app/shop/page.js`
- `src/app/wholesale/page.js`
- `src/lib/products.js`
- `src/lib/siteContent.js`
- `src/styles/theme.tsx`

## Impact

- No compile-time safety on the majority of the application
- Props are not validated at build time
- Runtime errors from incorrect prop types will surface to users
- Hard to refactor safely

## Recommended Fix (choose one)

**Option A — Migrate to TypeScript (recommended):**
1. Rename all `.js` → `.ts` and `.jsx` → `.tsx`
2. Add type annotations to function parameters and return values
3. Define interfaces for `products.js` data, `siteContent.js` exports, and page props
4. Remove any `// @ts-ignore` or `@ts-expect-error` comments that appear

**Option B — Enable `checkJs`:**
1. Add `"checkJs": true` to `tsconfig.json`
2. Add `// @ts-check` to the top of every `.js` file
3. Add JSDoc type annotations to exported functions and data structures

## Acceptance Criteria

- [ ] All source files under `src/` use `.ts` or `.tsx` extensions
- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] No `any` types remain (use proper interfaces instead)
- [ ] `products.js` exports are properly typed with an interface
- [ ] `siteContent.js` exports are properly typed
- [ ] All page components have typed props where applicable
