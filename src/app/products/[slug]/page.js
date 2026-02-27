import Link from "next/link";
import { notFound } from "next/navigation";
import { Alert, Box, Button, Chip, Container, Paper, Stack, Typography } from "@mui/material";
import products from "../../../lib/products";
import { business } from "../../../lib/siteContent";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return {
      title: "Flavor Not Found",
    };
  }

  return {
    title: `${product.name} Jerky`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: { xs: 3, md: 4 } }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1}>
            <Chip label={`${product.heatLevel} Heat`} color="secondary" variant="outlined" />
            <Chip label={product.sku} variant="outlined" />
          </Stack>

          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
            {product.name} Jerky
          </Typography>

          <Typography color="text.secondary">{product.fullDescription}</Typography>

          <Alert severity="info">
            Online checkout is currently disabled. Call{" "}
            <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a> for shipping support.
          </Alert>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Button component={Link} href="/shop" variant="contained">
              Back to Shop
            </Button>
            <Button component={Link} href="/contact" variant="outlined">
              Contact the Shop
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}
