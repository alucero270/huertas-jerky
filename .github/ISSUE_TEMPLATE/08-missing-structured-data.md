---
name: "Issue: Missing Structured Data (JSON-LD) for SEO"
about: "No Schema.org structured data — Google can't understand the business context as well."
labels: ["enhancement", "seo", "accessibility"]
---

## Problem

The site has no structured data (JSON-LD) markup. This means search engines like Google can't:
- Recognize this as a local business
- Display rich results (address, phone, hours in search)
- Show the brand name in search snippets
- Display star ratings (if reviews were added later)

## Recommended Fix

Add `Organization` and `LocalBusiness` JSON-LD to `src/app/layout.tsx`:

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Huerta's Albuquerque Jerky",
  url: "https://www.huertasabqjerky.com",
  logo: "https://www.huertasabqjerky.com/images/logo.png",
  sameAs: [
    "https://www.instagram.com/HUERTAS_ALBUQUERQUE_JERKY_",
    "https://www.facebook.com/HuertasAlbuquerqueJerky",
  ],
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Huerta's Albuquerque Jerky",
  image: "https://www.huertasabqjerky.com/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "307 A San Pedro Dr. NE",
    addressLocality: "Albuquerque",
    addressRegion: "NM",
    postalCode: "87108",
    addressCountry: "US",
  },
  telephone: "+15056775375",
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-18:00", // Adjust based on actual hours
};
```

Render in `RootLayout`:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
/>
```

## Acceptance Criteria

- [ ] JSON-LD `Organization` structured data is added to `layout.tsx`
- [ ] JSON-LD `LocalBusiness` structured data is added to `layout.tsx`
- [ ] Google Rich Results Test shows valid results for `huertasabqjerky.com`
- [ ] Google's Structured Data Testing Tool shows the business name, address, and phone
- [ ] `sameAs` social media URLs are included
- [ ] Price range is set appropriately based on product pricing
