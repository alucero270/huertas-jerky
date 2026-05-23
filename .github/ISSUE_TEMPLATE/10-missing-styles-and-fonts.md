---
name: "Issue: Google Fonts not loaded — Montserrat, Alegreya, Franklin Gothic may not render"
about: "The theme references fonts that are never loaded from any CDN or font file."
labels: ["bug", "ux", "priority: medium"]
---

## Problem

The MUI theme (`src/styles/theme.tsx`) specifies custom fonts:

```ts
typography: {
  fontFamily: '"Montserrat", "Franklin Gothic Medium", "Arial Narrow", sans-serif',
  h1: { fontFamily: '"Alegreya", "Book Antiqua", Georgia, serif', ... },
  h2: { fontFamily: '"Alegreya", "Book Antiqua", Georgia, serif', ... },
  h3: { fontFamily: '"Alegreya", "Book Antiqua", Georgia, serif', ... },
}
```

**None of these fonts are loaded anywhere in the project:**
- `Montserrat` — Not in `public/fonts/`
- `Franklin Gothic Medium` — Not a system font on all platforms
- `Alegreya` — Not loaded from Google Fonts
- `Book Antiqua` — Only available on macOS

This means the site will fall back to the browser default font on most systems, losing the intended brand typography.

## Recommended Fix

Add a Google Fonts import to `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Montserrat, Alegreya } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const alegreya = Alegreya({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alegreya",
});
```

Then apply to the root `<html>` or update the theme to use CSS variable-based font families.

Alternative: Use `next/font` with a single combined import:

```tsx
import { Montserrat, Alegreya } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const alegreya = Alegreya({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
```

Update `layout.tsx`:
```tsx
<html lang="en" className={`${montserrat.variable} ${alegreya.variable}`}>
```

## Acceptance Criteria

- [ ] Google Fonts (Montserrat, Alegreya) are loaded via `next/font/google` or a `<link>` in `<head>`
- [ ] `font-display: swap` is set to avoid FOIT (Flash of Invisible Text)
- [ ] Typography renders correctly on the home page, about page, and product pages
- [ ] Fonts load without causing layout shift (CLS = 0 for font-related changes)
- [ ] No font 404 errors in the browser console
- [ ] Fonts work on both desktop and mobile browsers
