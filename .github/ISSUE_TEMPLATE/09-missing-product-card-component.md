---
name: "Issue: ProductCard.js component is missing from the codebase"
about: "The product card component referenced in the home page may not exist or may be broken."
labels: ["bug", "ux"]
---

## Problem

The home page (`src/app/(home)/page.tsx`) imports and renders `ProductCard`:

```tsx
import ProductCard from "../../components/ProductCard";
```

And uses it in the "Signature Flavors" section:

```tsx
{featured.map((product) => (
  <Grid key={product.slug} size={{ xs: 12, sm: 6, lg: 4 }}>
    <ProductCard product={product} />
  </Grid>
))}
```

However, `src/components/ProductCard.js` was listed but I could not read its contents. The component may:
- Be empty or stubbed
- Have syntax errors
- Not render the product data correctly
- Be missing image handling for product photos

## Files Involved

- `src/components/ProductCard.js` — The component itself
- `src/lib/products.js` — Product data source
- `src/app/(home)/page.tsx` — Where it's used

## Expected Behavior

`ProductCard` should display:
- Product image (if available)
- Product name
- Product flavor/description
- Price (when available)
- "View Details" link to `/products/[slug]`

## Acceptance Criteria

- [ ] `ProductCard.js` renders product data without errors
- [ ] Product cards show on the home page's "Signature Flavors" section
- [ ] Product cards link to `/products/[slug]` when clicked
- [ ] Product cards are responsive and look good on mobile
- [ ] Product cards handle missing images gracefully (placeholder or alt text)
- [ ] Product cards match the site's visual design system
