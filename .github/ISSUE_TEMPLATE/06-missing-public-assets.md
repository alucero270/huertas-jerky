---
name: "Issue: No public/ directory for static assets"
about: "Images, logos, and other static assets have no designated location in the project."
labels: ["bug", "enhancement", "priority: high"]
---

## Problem

The project has no `public/` directory. This means:
- No place to put the site logo, product photos, or hero images
- Any `<img src="/images/...">` references will return 404
- Favicon, manifest, and OG image have no home
- The site may appear broken at runtime if images are referenced but can't be loaded

## Current State

The file listing shows no `public/` directory exists. All styling is done via inline CSS and MUI components, but if the business needs product photos, a logo, or a hero image, there's nowhere to put them.

## Recommended Fix

```
public/
├── images/
│   ├── logo.png              (site logo, ~200x50px)
│   ├── hero-bg.jpg           (optional hero background)
│   ├── product-1-chipotle.jpg (product photos)
│   ├── product-2-classic.jpg
│   └── ...
├── favicon.ico
├── og-image.png              (1200x630, for social sharing)
├── robots.txt
└── site.webmanifest          (optional PWA manifest)
```

Update `next.config.ts` if any custom asset directories are needed:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.huertasabqjerky.com',
      },
    ],
  },
};

export default nextConfig;
```

## Acceptance Criteria

- [ ] `public/` directory is created
- [ ] `public/images/` subdirectory is created
- [ ] Site logo (`public/images/logo.png`) is added
- [ ] Product photos are added to `public/images/` for each product in `products.js`
- [ ] OG image (`public/og-image.png`, 1200x630) is created
- [ ] No broken image links appear on any page
- [ ] `next build` completes without asset warnings
