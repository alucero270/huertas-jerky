import Link from "next/link";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { business } from "../lib/siteContent";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 5,
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "#f3e6d5",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {business.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {business.addressLine1}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {business.cityStateZip}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Explore
            </Typography>
            <Stack spacing={0.5}>
              <Link href="/shop">Shop Flavors</Link>
              <Link href="/about">Our Story</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/wholesale">Wholesale</Link>
              <Link href="/recipes">Recipes</Link>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Follow
            </Typography>
            <Stack spacing={0.5}>
              <a href={business.social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={business.social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <Link href="/contact">Contact Us</Link>
            </Stack>
          </Grid>
        </Grid>
        <Typography variant="caption" display="block" sx={{ mt: 4 }}>
          Copyright {new Date().getFullYear()} {business.name}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
