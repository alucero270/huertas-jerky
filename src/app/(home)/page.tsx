import Image from "next/image";
import Link from "next/link";
import {
  Alert,
  Box,
  Button,
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
  const redChileProducts = products.filter((p) => p.name.toLowerCase().includes("red") || p.name.toLowerCase().includes("christmas"));
  const greenChileProducts = products.filter((p) => p.name.toLowerCase().includes("green") || p.name.toLowerCase().includes("hatch"));

  return (
    <Box sx={{ pb: 6 }}>
      {/* Hero Section - Street Scene */}
      <Box
        sx={{
          background: `
            linear-gradient(135deg, rgba(42,31,26,0.85) 0%, rgba(68,50,42,0.8) 100%),
            url('/images/street-font-sign.jpg')
            center/cover no-repeat
          `,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Warm sun overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(204,135,80,0.25) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 }, position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: '"Alegreya", serif',
                    fontSize: { xs: "1.3rem", md: "1.6rem" },
                    color: "#f7e6ce",
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  Est. 1996
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.2rem", md: "3.2rem", lg: "3.8rem" },
                    lineHeight: 1.05,
                    color: "#fff",
                    textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  Handmade jerky with{" "}
                  <Box component="span" sx={{ color: "#e85c42" }}>
                    New Mexico attitude.
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#f7e6ce",
                    fontWeight: 400,
                    maxWidth: 600,
                    fontSize: { xs: "1.05rem", md: "1.25rem" },
                  }}
                >
                  For over two decades, Mark Huerta has been perfecting a signature
                  thin-cut jerky — lean beef, bold chile, zero shortcuts.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Alegreya", serif',
                    fontSize: "1.2rem",
                    color: "#f7e6ce",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{business.tagline}&rdquo;
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 2 }}>
                  <Button
                    component={Link}
                    href="/shop"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: "#c43c28",
                      "&:hover": { bgcolor: "#e85c42" },
                    }}
                  >
                    Browse All Flavors
                  </Button>
                  <Button
                    component={Link}
                    href="/locations"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: "#f7e6ce",
                      color: "#f7e6ce",
                      "&:hover": {
                        borderColor: "#fff",
                        bgcolor: "rgba(247,230,206,0.1)",
                      },
                    }}
                  >
                    Find Us In Person
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 380,
                  height: 380,
                  borderRadius: 4,
                  overflow: "hidden",
                  marginLeft: "auto",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                  border: "3px solid rgba(232,92,66,0.4)",
                }}
              >
                <Image
                  src="/images/1000013220.jpg"
                  alt="Huerta's Albuquerque Jerky storefront"
                  fill
                  sizes="380px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Highlights Section */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 4,
            fontSize: { xs: "1.4rem", md: "1.8rem" },
            fontFamily: '"Alegreya", serif',
          }}
        >
          Made the old-fashioned way
        </Typography>
        <Grid container spacing={2.5}>
          {homepageHighlights.map((item, i) => (
            <Grid key={item} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                sx={{
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                  bgcolor: "#fffbf2",
                  border: "1px solid #d4c4a8",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Alegreya", serif',
                    fontWeight: 800,
                    fontSize: "2.2rem",
                    color: i % 2 === 0 ? "#c43c28" : "#2d7c4a",
                    mb: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: "#2a1f1a" }}>
                  {item}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Red & Green Chile Section */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 1,
            fontSize: { xs: "1.6rem", md: "2.2rem" },
            fontFamily: '"Alegreya", serif',
          }}
        >
          New Mexico's Favorite Flavors
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textAlign: "center",
            mb: 5,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Red. Green. The holy grail of chile. Pick your side or grab both.
        </Typography>
        <Grid container spacing={3}>
          {/* Red Chile */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 3,
                bgcolor: "#fff5f2",
                border: "2px solid #c43c28",
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Alegreya", serif',
                    fontWeight: 800,
                    color: "#c43c28",
                    fontSize: "1.5rem",
                  }}
                >
                  🌶️ Red Chile
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Deep, smoky, and slow-building heat. The classic New Mexican favorite.
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                  {redChileProducts.slice(0, 3).map((p) => (
                    <Box
                      key={p.slug}
                      sx={{
                        px: 2,
                        py: 0.5,
                        bgcolor: "#e85c42",
                        color: "#fff",
                        borderRadius: 1,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      {p.name}
                    </Box>
                  ))}
                </Box>
              </Stack>
            </Paper>
          </Grid>
          {/* Green Chile */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 3,
                bgcolor: "#f0fdf4",
                border: "2px solid #2d7c4a",
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Alegreya", serif',
                    fontWeight: 800,
                    color: "#2d7c4a",
                    fontSize: "1.5rem",
                  }}
                >
                  🌶️ Green Chile
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bright, zesty Hatch green with a roasted kick. Summer in every bite.
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                  {greenChileProducts.slice(0, 3).map((p) => (
                    <Box
                      key={p.slug}
                      sx={{
                        px: 2,
                        py: 0.5,
                        bgcolor: "#4a9663",
                        color: "#fff",
                        borderRadius: 1,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      {p.name}
                    </Box>
                  ))}
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Products */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ sm: "end" }}
          justifyContent="space-between"
          sx={{ mb: 3 }}
        >
          <Stack spacing={0.5}>
            <Typography variant="h2">Signature Flavors</Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 560 }}>
              Our most popular picks — each one handmade with New Mexico chile and lean beef.
            </Typography>
          </Stack>
          <Button
            component={Link}
            href="/shop"
            variant="text"
            sx={{
              fontWeight: 700,
              color: "#c43c28",
              alignSelf: { sm: "end" },
              flexShrink: 0,
              "&:hover": { color: "#e85c42" },
            }}
          >
            See all {products.length} flavors &rarr;
          </Button>
        </Stack>
        <Grid container spacing={2.5}>
          {featured.map((product) => (
            <Grid key={product.slug} size={{ xs: 12, sm: 6, lg: 4 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Family Story Section */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            bgcolor: "#f7f1e6",
            border: "1px solid #d4c4a8",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Alegreya", serif',
                  fontWeight: 800,
                  fontSize: { xs: "1.6rem", md: "2rem" },
                  mb: 2,
                }}
              >
                A Family Tradition Since 1996
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Mark Huerta started making jerky for friends and family back in '96. 
                What began as weekend batches for the crew turned into Albuquerque's 
                favorite neighborhood jerky spot.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                No big machines. No shortcuts. Just lean beef, bold New Mexico chile, 
                and a whole lot of heart. Come by the shop and see why locals have 
                been lining up for over two decades.
              </Typography>
              <Alert severity="info" sx={{ bgcolor: "#fff5f2", border: "1px solid #c43c28" }}>
                <strong>Just Jerk It.</strong> That's the motto. That's the promise.
              </Alert>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 220, md: 280 },
                  borderRadius: 3,
                  overflow: "hidden",
                  bgcolor: "#d4c4a8",
                }}
              >
                <Image
                  src="/images/jerk-it-zia-logo.jpg"
                  alt="Huerta's Jerky branding"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Order/Visit Section */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            bgcolor: "#fffbf2",
            border: "1px solid #d4c4a8",
          }}
        >
          <Stack spacing={2.5} sx={{ maxWidth: 680 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Alegreya", serif',
                fontWeight: 800,
                fontSize: { xs: "1.5rem", md: "1.9rem" },
              }}
            >
              Want to order?
            </Typography>
            <Typography color="text.secondary">
              Our online checkout is coming soon. For now, grab a bag in person or
              call us for shipping support.
            </Typography>
            <Alert severity="info" sx={{ fontSize: 14, bgcolor: "#f0fdf4", border: "1px solid #2d7c4a" }}>
              {ecommerceReadiness.primaryMessage}
            </Alert>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Stack spacing={0.5}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontSize: "0.72rem",
                    }}
                  >
                    Call Us
                  </Typography>
                  <Typography
                    component="a"
                    href={`tel:${business.phoneTel}`}
                    sx={{
                      color: "#c43c28",
                      fontWeight: 800,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {business.phoneDisplay}
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Stack spacing={0.5}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontSize: "0.72rem",
                    }}
                  >
                    Visit the Shop
                  </Typography>
                  <Typography sx={{ fontWeight: 700, color: "#2a1f1a" }}>
                    {business.addressLine1}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {business.cityStateZip}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Button
              component={Link}
              href="/locations"
              variant="outlined"
              sx={{
                alignSelf: "flex-start",
                mt: 1,
                color: "#2d7c4a",
                borderColor: "#2d7c4a",
                "&:hover": {
                  bgcolor: "#2d7c4a",
                  color: "#fff",
                },
              }}
            >
              Store Hours & Map
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
