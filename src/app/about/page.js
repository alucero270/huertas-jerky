import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { business } from "../../lib/siteContent";

export const metadata = {
  title: "Our Story",
  description:
    "Learn how Mark Huerta turned decades of jerky craft into a family-run Albuquerque business rooted in New Mexico flavor.",
};

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Our Story
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 840 }}>
            Huerta's Albuquerque Jerky started with small home batches in 1996 and
            grew into a storefront in {business.launchDate}. Every bag still reflects
            a family craft mindset: honest ingredients, bold New Mexico flavor, and a
            welcoming local vibe.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Built in Albuquerque
              </Typography>
              <Typography color="text.secondary">
                Our shop and production are both based in Albuquerque. We serve local
                customers in store, at weekend markets, and at community events across
                the metro area.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                New Mexico anchored
              </Typography>
              <Typography color="text.secondary">
                Chile-forward flavor, local honey, and Southwest texture preferences
                shape our lineup. From Christmas to Habanero, our catalog reflects how
                New Mexico likes jerky: assertive and full of character.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Founder timeline
          </Typography>
          <Typography color="text.secondary">
            {business.aboutFounder} After supporting his family for three decades,
            Mark opened Huerta's Albuquerque Jerky as a full business and continues
            building it flavor by flavor.
          </Typography>
        </Paper>
      </Stack>
    </Container>
  );
}
