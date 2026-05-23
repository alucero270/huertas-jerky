---
name: "Issue: Missing error.tsx and not-found.tsx pages"
about: "Users who hit a broken link or server error see a generic Next.js error, not a branded experience."
labels: ["enhancement", "ux", "good first issue"]
---

## Problem

The site has no custom error pages:
- **No `app/error.tsx`** — When a runtime error occurs, users see Next.js's generic error screen
- **No `app/not-found.tsx`** — When a user visits a non-existent page (e.g., `/products/nonexistent`), they see a generic 404

This is unbranded and creates a poor user experience, especially for a local business that wants to guide customers to relevant content.

## Recommended Fix

**1. Create `src/app/not-found.tsx`:**

```tsx
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container maxWidth="lg" sx={{ py: 12, textAlign: "center" }}>
      <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: 800, color: "text.disabled" }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Page not found
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Sorry, we couldn't find that page. It may have been moved or doesn't exist yet.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Button component={Link} href="/" variant="contained">
          Back to Home
        </Button>
        <Button component={Link} href="/contact">
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}
```

**2. Create `src/app/error.tsx`:**

```tsx
"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <Container maxWidth="lg" sx={{ py: 12, textAlign: "center" }}>
      <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: 800, color: "error.main" }}>
        Oops!
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Something went wrong
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        We're sorry for the inconvenience. Please try refreshing the page.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Button onClick={() => reset()} variant="contained">
          Try Again
        </Button>
        <Button component={Link} href="/">
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
```

## Acceptance Criteria

- [ ] `src/app/not-found.tsx` is created and shows a branded 404 page
- [ ] `src/app/error.tsx` is created and shows a branded error page with a "Try Again" button
- [ ] Both pages include a link to `/contact` for customer support
- [ ] Visiting a non-existent route (e.g., `/nonexistent`) shows the 404 page
- [ ] Both pages are mobile-responsive
- [ ] Both pages match the site's visual design (brand colors, typography)
