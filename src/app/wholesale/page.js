import Link from "next/link";
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export const metadata = {
  title: "Wholesale",
  description:
    "Wholesale availability updates and partnership interest for Huerta's Albuquerque Jerky.",
};

export default function WholesalePage() {
  return (
    <Box sx={{ pb: 6 }}>
      <Box
        sx={{
          background: "linear-gradient(180deg, #f5eadc 0%, #fffcf5 100%)",
          borderBottom: "1px solid",
          borderColor: "divider",
          pt: { xs: 6, md: 10 },
          pb: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={1.5}>
            <Chip
              label="Partnerships"
              color="primary"
              sx={{ alignSelf: "flex-start" }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.8rem" } }}>
              Wholesale
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              We are laying the groundwork for wholesale distribution and would love
              to hear from interested partners.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -2 }}>
        <Stack spacing={2.5}>
          <Alert severity="warning" sx={{ borderRadius: 2 }}>
            We are preparing for wholesale expansion and working through USDA
            certification milestones first.
          </Alert>

          <Paper sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={2}>
              <Typography variant="h3" sx={{ fontSize: "1.3rem" }}>
                Interested in carrying Huerta's?
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                If you are a retailer, market operator, or regional distributor looking
                to carry Huerta's Albuquerque Jerky, we would like to hear from you
                now so we can follow up as soon as our wholesale program opens.
              </Typography>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{ alignSelf: "flex-start" }}
              >
                Submit Your Interest
              </Button>
            </Stack>
          </Paper>

          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              background: "linear-gradient(135deg, #fffcf5 0%, #f5eadc 100%)",
            }}
          >
            <Typography variant="h4" sx={{ fontSize: "1.1rem", mb: 1 }}>
              What we are working on
            </Typography>
            <Stack spacing={1}>
              {[
                "USDA certification and food safety documentation",
                "Production capacity planning for larger batch runs",
                "Packaging and branding for retail shelf placement",
                "Distribution logistics for regional and national shipping",
              ].map((item) => (
                <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                  <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "primary.main", mt: 0.6, flexShrink: 0 }} />
                  <Typography color="text.secondary">{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
