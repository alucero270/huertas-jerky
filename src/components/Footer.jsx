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
            borderTop: "2px solid",
            borderColor: "#d4c4a8",
            backgroundColor: "#f7f1e6",
          }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  fontFamily: '"Alegreya", serif',
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  color: "primary.main",
                }}
              >
                {business.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                {business.addressLine1}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                {business.cityStateZip}
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href={`tel:${business.phoneTel}`}
                sx={{ color: "primary.main", fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                {business.phoneDisplay}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5, textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "0.7rem", fontWeight: 700 }}>
                Explore
              </Typography>
              <Stack spacing={0.8}>
                <Link href="/shop" style={{ color: "inherit", textDecoration: "none", fontWeight: 500 }}>Shop Flavors</Link>
                <Link href="/about" style={{ color: "inherit", textDecoration: "none", fontWeight: 500 }}>Our Story</Link>
                <Link href="/locations" style={{ color: "inherit", textDecoration: "none", fontWeight: 500 }}>Locations</Link>
                <Link href="/faq" style={{ color: "inherit", textDecoration: "none", fontWeight: 500 }}>FAQ</Link>
                <Link href="/wholesale" style={{ color: "inherit", textDecoration: "none", fontWeight: 500 }}>Wholesale</Link>
                <Link href="/recipes" style={{ color: "inherit", textDecoration: "none", fontWeight: 500 }}>Recipes</Link>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5, textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "0.7rem", fontWeight: 700 }}>
                Follow
              </Typography>
              <Stack spacing={0.8}>
                <a href={business.social.instagram} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none", fontWeight: 500 }}>
                  Instagram
                </a>
                <a href={business.social.facebook} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none", fontWeight: 500 }}>
                  Facebook
                </a>
                <Link href="/contact" style={{ color: "inherit", textDecoration: "none", fontWeight: 500 }}>Contact Us</Link>
              </Stack>
            </Grid>
          </Grid>
          <Typography
            variant="caption"
            display="block"
            sx={{
              mt: 4,
              pt: 2.5,
              borderTop: "1px solid",
              borderColor: "divider",
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            &copy; {new Date().getFullYear()} {business.name}. Handmade in Albuquerque, New Mexico.
          </Typography>
        </Container>
      </Box>
  );
}
