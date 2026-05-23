---
name: "Issue: Missing Open Graph & Twitter Social Preview Meta Tags"
about: "Sharing the site on social media produces no preview — no title, description, or image."
labels: ["enhancement", "seo", "social-media"]
---

## Problem

The site's root layout (`src/app/layout.tsx`) defines `metadata.title` and `metadata.description`, but does **not** define `openGraph` or `twitter` metadata objects. This means when the site URL is shared on:
- **Facebook** → No preview card (no image, no title)
- **Twitter/X** → No preview card
- **LinkedIn** → No preview card
- **Slack/Discord** → Minimal or no link preview

## Current Metadata (layout.tsx)

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://www.huertasabqjerky.com"),
  title: {
    default: "Huerta's Albuquerque Jerky | Handmade New Mexico Beef Jerky",
    template: "%s | Huerta's Albuquerque Jerky",
  },
  description:
    "Handmade Albuquerque jerky with New Mexico flavor roots. Shop in store today and get ready for online checkout coming soon.",
};
```

No `openGraph` or `twitter` fields are present.

## Recommended Fix

Add `openGraph` and `twitter` to `src/app/layout.tsx`:

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://www.huertasabqjerky.com"),
  title: {
    default: "Huerta's Albuquerque Jerky | Handmade New Mexico Beef Jerky",
    template: "%s | Huerta's Albuquerque Jerky",
  },
  description:
    "Handmade Albuquerque jerky with New Mexico flavor roots. Shop in store today and get ready for online checkout coming soon.",

  // Add these:
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.huertasabqjerky.com",
    title: "Huerta's Albuquerque Jerky | Handmade New Mexico Beef Jerky",
    description:
      "Handmade Albuquerque jerky with New Mexico flavor roots. Shop in store today and get ready for online checkout coming soon.",
    siteName: "Huerta's Albuquerque Jerky",
    images: [
      {
        url: "https://www.huertasabqjerky.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Huerta's Albuquerque Jerky — Handmade New Mexico Beef Jerky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huerta's Albuquerque Jerky | Handmade New Mexico Beef Jerky",
    description:
      "Handmade Albuquerque jerky with New Mexico flavor roots. Shop in store today and get ready for online checkout coming soon.",
    images: ["https://www.huertasabqjerky.com/og-image.png"],
  },
};
```

Each page can also override `openGraph` with its own title, description, and image for specific pages (e.g., individual product pages).

## Acceptance Criteria

- [ ] `openGraph` metadata object is added to `src/app/layout.tsx`
- [ ] `twitter` metadata object is added to `src/app/layout.tsx`
- [ ] `public/og-image.png` (1200×630) is created with branding
- [ ] Facebook Sharing Debugger shows a valid preview card for `huertasabqjerky.com`
- [ ] Twitter Card Validator shows a valid preview card for `huertasabqjerky.com`
- [ ] LinkedIn Post Inspector shows a valid preview card
- [ ] Each page with unique content (e.g., product pages, recipes) has page-specific OG overrides
