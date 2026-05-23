import Image from "next/image";
import { Box, Chip, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

export const metadata = {
  title: "Our Story",
  description:
    "How Mark Huerta turned decades of jerky craft into a family-run Albuquerque business rooted in New Mexico flavor.",
};

const timeline = [
  { year: "1996", event: "Mark starts making jerky at home for friends and family. Word spreads fast." },
  { year: "2000s", event: "Signature recipes develop — red chile, green chile, Christmas. The flavors become local legend among the people who try them." },
  { year: "2024", event: "Plans for a real storefront take shape. Mark locks in a location on San Pedro Dr. and starts production scaling." },
  { year: "2025", event: "Huerta's Albuquerque Jerky opens its doors. A family craft becomes a neighborhood business." },
];

export default function AboutPage() {
  return (
    <Box sx={{ pb: 6 }}>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 30% 10%, rgba(179,40,26,0.08) 0, transparent 50%), linear-gradient(180deg, #f5eadc 0%, #fffcf5 100%)",
          borderBottom: "1px solid",
          borderColor: "divider",
          pt: { xs: 6, md: 10 },
          pb: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1.5} sx={{ maxWidth: 780 }}>
            <Chip
              label="Family-owned since 2025"
              color="primary"
              sx={{ alignSelf: "flex-start" }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.8rem" } }}>
              Our Story
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              What started as a home kitchen experiment turned into an Albuquerque
              staple — one batch of jerky at a time.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -2 }}>
        <Grid container spacing={3}>
          {/* The origin story */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: { xs: 3, md: 4 } }}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h3" sx={{ mb: 1.5 }}>
                    From home batches to a storefront
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    Huerta's Albuquerque Jerky started with small home batches in 1996
                    and grew into a storefront in early 2025. Every bag still reflects
                    the same family craft mindset: honest ingredients, bold New Mexico
                    flavor, and a welcoming local vibe.
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    Mark Huerta spent decades refining his method — leaning into the
                    things that make New Mexico food unforgettable: red and green chile,
                    local honey, and a thin-cut texture that is balanced, never too dry
                    or too chewy.
                  </Typography>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 200, md: 280 },
                      borderRadius: 2,
                      overflow: "hidden",
                      mb: 3,
                      bgcolor: "grey.100",
                    }}
                  >
                    <Image
                      src="/images/1000013223.jpg"
                      alt="Huerta's Albuquerque Jerky — handcrafted in New Mexico"
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="h4" sx={{ fontSize: "1.15rem", mb: 1.5 }}>
                    What makes it different
                  </Typography>
                  <Stack spacing={1.5}>
                    {[
                      "Handmade in small batches — no mass production shortcuts",
                      "Lean cuts of beef, trimmed and sliced by hand",
                      "New Mexico chile and local honey in every savory recipe",
                      "Signature thin-cut texture: not too crispy, not too chewy",
                    ].map((item) => (
                      <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "primary.main",
                            mt: 0.6,
                            flexShrink: 0,
                          }}
                        />
                        <Typography color="text.secondary">{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Timeline */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Timeline
              </Typography>
              <Stack spacing={2.5}>
                {timeline.map((item, i) => (
                  <Stack key={item.year} direction="row" spacing={2}>
                    <Stack alignItems="center" sx={{ minWidth: 36 }}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          background: i === timeline.length - 1 ? "primary.main" : "secondary.main",
                          mt: 0.4,
                        }}
                      />
                      {i < timeline.length - 1 && (
                        <Box
                          sx={{
                            width: 2,
                            flexGrow: 1,
                            background: "divider",
                            minHeight: 40,
                          }}
                        />
                      )}
                    </Stack>
                    <Box sx={{ pb: i < timeline.length - 1 ? 0 : 0 }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontFamily: '"Alegreya", serif',
                          fontSize: "1.2rem",
                          color: i === timeline.length - 1 ? "primary.main" : "secondary.main",
                        }}
                      >
                        {item.year}
                      </Typography>
                      <Typography color="text.secondary" variant="body2">
                        {item.event}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Tagline quote */}
          <Grid size={{ xs: 12 }}>
            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                textAlign: "center",
                background: "linear-gradient(135deg, #fffcf5 0%, #f5eadc 100%)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Alegreya", serif',
                  fontStyle: "italic",
                  fontSize: { xs: "1.3rem", md: "1.6rem" },
                  color: "text.secondary",
                  maxWidth: 700,
                  mx: "auto",
                }}
              >
                &ldquo;Every bag is a piece of something Mark started making for people
                he cared about. That has not changed just because we have a storefront.&rdquo;
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
