import Link from "next/link";
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import products from "../../lib/products";
import ProductCard from "../../components/ProductCard";
import {
  business,
  ecommerceReadiness,
  homepageHighlights,
} from "../../lib/siteContent";

export const metadata = {
  title: "Handmade New Mexico Beef Jerky",
  description:
    "Discover authentic handmade jerky from Albuquerque, New Mexico. Built on red and green chile flavor, made in small batches.",
};

export default function HomePage() {
  const featured = products.filter((product) => product.isFeatured).slice(0, 6);

  return (
    <Box sx={{ pb: 6 }}>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 15% 10%, rgba(203,77,50,0.26) 0, rgba(203,77,50,0) 45%), radial-gradient(circle at 85% 0%, rgba(55,121,77,0.24) 0, rgba(55,121,77,0) 42%), linear-gradient(180deg, #fff3df 0%, #f7efe2 100%)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 11 } }}>
          <Stack spacing={2} sx={{ maxWidth: 780 }}>
            <Chip
              label="Albuquerque, New Mexico"
              color="secondary"
              sx={{ alignSelf: "flex-start" }}
            />
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "2.2rem", md: "3.6rem" }, lineHeight: 1.08 }}
            >
              Handmade jerky with New Mexico attitude.
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 500, maxWidth: 690 }}
            >
              For over two decades, Mark Huerta has refined a signature thin-cut
              texture and bold chile flavor profile that locals know by name.
            </Typography>
            <Typography color="text.secondary">{business.tagline}</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 1 }}>
              <Button component={Link} href="/shop" variant="contained" size="large">
                Browse Flavors
              </Button>
              <Button component={Link} href="/contact" variant="outlined" size="large">
                Visit or Call to Order
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={2}>
          {homepageHighlights.map((item) => (
            <Grid key={item} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper sx={{ p: 2.25, height: "100%" }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {item}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ sm: "end" }}
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Typography variant="h2">Signature Flavors</Typography>
          <Link href="/shop">See all flavors</Link>
        </Stack>
        <Grid container spacing={2.5}>
          {featured.map((product) => (
            <Grid key={product.slug} size={{ xs: 12, sm: 6, lg: 4 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Alert severity="info" sx={{ mb: 2 }}>
          {ecommerceReadiness.primaryMessage}
        </Alert>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Order today
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            {ecommerceReadiness.currentOrdering}
          </Typography>
          <Typography>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
          </Typography>
          <Typography>
            <strong>Address:</strong> {business.addressLine1}, {business.cityStateZip}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
