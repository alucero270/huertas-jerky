import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Alert, Box, Button, Chip, Container, Paper, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import products from "../../../lib/products";
import { business } from "../../../lib/siteContent";

const heatColors = {
  "None": { bg: "#f5f0e8", text: "#8b735b", chip: "#a89070" },
  "Mild": { bg: "#e8f5e9", text: "#1b5e20", chip: "#4caf50" },
  "Medium": { bg: "#fff3e0", text: "#e65100", chip: "#ff9800" },
  "Hot": { bg: "#ffebee", text: "#c62828", chip: "#ef4444" },
  "Very Hot": { bg: "#ffebee", text: "#b71c1c", chip: "#dc2626" },
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return { title: "Flavor Not Found" };
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

  const hc = heatColors[product.heatLevel] || heatColors["None"];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Button
        component={Link}
        href="/shop"
        startIcon={<ArrowBackIcon />}
        variant="text"
        sx={{ mb: 2, fontWeight: 600, color: "text.secondary" }}
      >
        Back to all flavors
      </Button>

      {product.image && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 240, md: 360 },
            borderRadius: 2,
            overflow: "hidden",
            mb: 2,
            bgcolor: "grey.100",
          }}
        >
          <Image
            src={`/images/${product.image}`}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </Box>
      )}

      <Paper sx={{ p: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            height: 6,
            background: `linear-gradient(90deg, ${hc.chip} 0%, transparent 100%)`,
            borderRadius: "6px 6px 0 0",
            mx: -3,
            mt: -3,
            mb: 3,
            ...{ mx: { xs: -3, md: -4 }, mt: { xs: -3, md: -4 } },
          }}
        />

        <Stack spacing={2.5}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "wrap", gap: 0.5 }}>
            <Chip
              label={`${product.heatLevel} Heat`}
              size="small"
              sx={{
                bgcolor: hc.bg,
                color: hc.text,
                fontWeight: 700,
                border: "none",
              }}
            />
            {product.isFeatured && (
              <Chip label="Featured" size="small" color="primary" sx={{ fontWeight: 700 }} />
            )}
            <Chip label={product.sku} size="small" variant="outlined" sx={{ fontSize: "0.65rem" }} />
          </Stack>

          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, fontFamily: '"Alegreya", serif' }}>
            {product.name} Jerky
          </Typography>

          <Typography color="text.secondary" sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            {product.fullDescription}
          </Typography>

          <Alert severity="info" sx={{ borderRadius: 2, fontSize: 14 }}>
            Online checkout is coming soon. Call{" "}
            <Typography
              component="a"
              href={`tel:${business.phoneTel}`}
              sx={{ color: "primary.main", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
              {business.phoneDisplay}
            </Typography>{" "}
            for shipping support.
          </Alert>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            <Button component={Link} href="/shop" variant="contained">
              Browse All Flavors
            </Button>
            <Button component={Link} href="/locations" variant="outlined">
              Find in Store
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}
