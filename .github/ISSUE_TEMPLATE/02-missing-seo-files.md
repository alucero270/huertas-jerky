---
name: "🔴 Issue: Missing SEO Essentials — No robots.txt, sitemap.xml, or favicon"
about: "The site is missing critical SEO files that search engines and browsers rely on."
labels: ["bug", "seo", "priority: high"]
---

## Problem

The site is missing several critical files that affect discoverability, browser experience, and SEO rankings:

1. **No `favicon.ico`** — Browsers will show a broken icon in the tab
2. **No `robots.txt`** — Search engines have no guidance on what to crawl
3. **No `sitemap.xml`** — Search engines can't efficiently discover all pages
4. **No `public/` directory** — Static assets (images, favicon, etc.) have nowhere to live

## Missing Files

| File | Purpose |
|---|---|
| `public/favicon.ico` | Browser tab icon |
| `public/robots.txt` | Crawling directives for search engines |
| `app/sitemap.ts` or `public/sitemap.xml` | List of all pages for search engines |
| `app/icon.png` / `app/apple-icon.png` | Apple Touch icon & PWA |
| `public/` directory | Container for all static assets |

## Pages to Include in Sitemap

- `/` — Home
- `/about` — Our Story
- `/contact` — Contact Us
- `/faq` — FAQ
- `/products/[slug]` — Individual product pages (dynamic)
- `/recipes` — Recipes
- `/shop` — Shop
- `/wholesale` — Wholesale

## Recommended Implementation

```
public/
├── favicon.ico
├── robots.txt
└── og-image.png          (for social sharing preview)

app/
├── favicon.ico            (Next.js 15)
├── icon.png               (PWA icon)
├── apple-icon.png          (iOS home screen)
└── sitemap.ts              (dynamic sitemap generator)
```

**`app/sitemap.ts`:**
```ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.huertasabqjerky.com', lastModified: new Date() },
    { url: 'https://www.huertasabqjerky.com/about', lastModified: new Date() },
    { url: 'https://www.huertasabqjerky.com/contact', lastModified: new Date() },
    { url: 'https://www.huertasabqjerky.com/faq', lastModified: new Date() },
    { url: 'https://www.huertasabqjerky.com/recipes', lastModified: new Date() },
    { url: 'https://www.huertasabqjerky.com/shop', lastModified: new Date() },
    { url: 'https://www.huertasabqjerky.com/wholesale', lastModified: new Date() },
  ];
}
```

**`public/robots.txt`:**
```
User-agent: *
Allow: /
Sitemap: https://www.huertasababqjerky.com/sitemap.xml
```

## Acceptance Criteria

- [ ] `public/` directory exists and is included in `.gitignore` appropriately
- [ ] `public/favicon.ico` exists and displays in browser tabs
- [ ] `app/sitemap.ts` is created and returns all pages at `https://www.huertasabqjerky.com/sitemap.xml`
- [ ] `public/robots.txt` exists and allows crawling
- [ ] `app/icon.png` (180x180) and `app/apple-icon.png` (180x180) exist
- [ ] `next build` completes without warnings about missing icons
- [ ] Visiting `https://www.huertasabqjerky.com/sitemap.xml` returns valid XML
