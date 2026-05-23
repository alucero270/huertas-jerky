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
import { ecommerceReadiness, business } from "../../lib/siteContent";

const heatOrder = ["None", "Mild", "Medium", "Hot", "Very Hot"];
const heatColors = {
  "None": "#757575",
  "Mild": "secondary.main",
  "Medium": "#d97706",
  "Hot": "#dc2626",
  "Very Hot": "#991b1b",
};

const heatFilters = [...new Set(products.map((p) => p.heatLevel))].sort(
  (a, b) => heatOrder.indexOf(a) - heatOrder.indexOf(b)
);

export const metadata = {
  title: "Shop Our Flavors",
  description:
    "Explore Huerta's full jerky lineup — New Mexico chile classics, ranch, garlic, citrus, and high-heat flavors.",
};

export default function ShopPage() {
  return (
    <Box sx={{ pb: 6 }}>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(179,40,26,0.1) 0, transparent 50%), radial-gradient(circle at 90% 10%, rgba(37,111,72,0.08) 0, transparent 50%), linear-gradient(180deg, #f5eadc 0%, #fffcf5 100%)",
          borderBottom: "1px solid",
          borderColor: "divider",
          pt: { xs: 6, md: 10 },
          pb: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1.5} sx={{ maxWidth: 780 }}>
            <Chip
              label={`${products.length} flavors and counting`}
              color="primary"
              sx={{ alignSelf: "flex-start" }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.8rem" } }}>
              Shop Our Flavors
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              Every flavor is handmade in small batches — lean beef, New Mexico chile,
              zero shortcuts.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -2 }}>
        <Stack spacing={3}>
          <Alert severity="info" sx={{ fontSize: 14, borderRadius: 2 }}>
            <strong>{ecommerceReadiness.statusLabel}.</strong> Browse all the flavors
            below, then call{" "}
            <Typography
              component="a"
              href={`tel:${business.phoneTel}`}
              sx={{ color: "primary.main", fontWeight: 700, textDecoration: "none" }}
            >
              {business.phoneDisplay}
            </Typography>{" "}
            for shipping support.
          </Alert>

          {/* Heat level filter chips */}
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, color: "text.secondary", alignSelf: "center", mr: 0.5 }}
            >
              Heat:
            </Typography>
            {heatFilters.map((level) => (
              <Chip
                key={level}
                label={level}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: heatColors[level],
                  color: heatColors[level],
                  fontWeight: 600,
                  "&:hover": { bgcolor: `${heatColors[level]}15` },
                }}
              />
            ))}
          </Stack>

          <Grid container spacing={2.5}>
            {products.map((product) => (
              <Grid key={product.slug} size={{ xs: 12, sm: 6, lg: 4 }}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>

          <Paper sx={{ p: { xs: 3, md: 4 }, background: "#fffcf5" }}>
            <Stack spacing={1.5} sx={{ maxWidth: 560 }}>
              <Typography variant="h4" sx={{ fontSize: "1.2rem" }}>
                Not sure where to start?
              </Typography>
              <Typography color="text.secondary">
                First-timers usually go with <strong>Christmas</strong>,{" "}
                <strong>Red Chile</strong>, or{" "}
                <strong>Garlic Parmesan Green</strong>. Those three are the most
                New Mexico-forward flavors in the lineup.
              </Typography>
              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                sx={{ alignSelf: "flex-start" }}
              >
                Ask us for a recommendation
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
