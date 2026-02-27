import Link from "next/link";
import { Alert, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import products from "../../lib/products";
import ProductCard from "../../components/ProductCard";
import { ecommerceReadiness } from "../../lib/siteContent";

export const metadata = {
  title: "Shop Jerky Online",
  description:
    "Explore Huerta's full jerky lineup including chile classics, ranch, garlic, citrus, and high-heat flavors.",
};

export default function ShopPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={3}>
        <div>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Shop Our Flavors
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 840 }}>
            Every flavor is handmade, vacuum sealed, and prepared with lean cuts of
            beef. We are an informational site first, with e-commerce hooks already
            in place for an upcoming checkout launch.
          </Typography>
        </div>

        <Alert severity="info">
          <strong>{ecommerceReadiness.statusLabel}.</strong> Browse products now and
          call the shop for shipping support.
        </Alert>

        <Grid container spacing={2.5}>
          {products.map((product) => (
            <Grid key={product.slug} size={{ xs: 12, sm: 6, lg: 4 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Need help choosing?
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 1.5 }}>
            Start with Christmas, Red Chile, or Garlic Parmesan Green if you want
            the most New Mexico-forward flavor profile.
          </Typography>
          <Link href="/contact">Talk to the team</Link>
        </Paper>
      </Stack>
    </Container>
  );
}
