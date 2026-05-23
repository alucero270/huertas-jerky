import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { business } from "../../lib/siteContent";

export const metadata = {
  title: "Contact Us",
  description:
    "Call, visit, or message Huerta's Albuquerque Jerky. Find us in-store and at local Albuquerque events.",
};

export default function ContactPage() {
  return (
    <Box sx={{ pb: 6 }}>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 60% 10%, rgba(37,111,72,0.1) 0, transparent 50%), linear-gradient(180deg, #f5eadc 0%, #fffcf5 100%)",
          borderBottom: "1px solid",
          borderColor: "divider",
          pt: { xs: 6, md: 10 },
          pb: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1.5} sx={{ maxWidth: 680 }}>
            <Chip
              label="Get in touch"
              color="primary"
              sx={{ alignSelf: "flex-start" }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.8rem" } }}>
              Contact Huerta's
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              Questions, shipping help, and flavor requests are always welcome.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -2 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: { xs: 3, md: 4 } }}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneIcon color="primary" />
                  <Typography variant="h3">Visit or Call</Typography>
                </Stack>

                <Divider />

                <List disablePadding>
                  <ListItem disableGutters sx={{ py: 0.8 }}>
                    <ListItemText
                      primary={<Typography sx={{ fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.04em", mb: 0.3 }}>Phone</Typography>}
                      secondary={
                        <Typography
                          component="a"
                          href={`tel:${business.phoneTel}`}
                          sx={{ color: "primary.main", fontWeight: 600, fontSize: "1.1rem", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                        >
                          {business.phoneDisplay}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem disableGutters sx={{ py: 0.8 }}>
                    <ListItemText
                      primary={<Typography sx={{ fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.04em", mb: 0.3 }}>Address</Typography>}
                      secondary={
                        <Typography>
                          {business.addressLine1}, {business.cityStateZip}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>

                <Divider />

                <Typography color="text.secondary" sx={{ fontStyle: "italic", fontSize: "0.9rem" }}>
                  Store pickup and walk-in shopping are available during business hours.
                </Typography>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: { xs: 3, md: 4 } }}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <LocationOnIcon color="secondary" />
                  <Typography variant="h3">Markets & Social</Typography>
                </Stack>

                <Divider />

                <Box>
                  <Typography variant="h5" sx={{ fontSize: "1rem", mb: 1.5 }}>
                    Find us at events
                  </Typography>
                  <List disablePadding>
                    {business.events.map((event) => (
                      <ListItem
                        key={event}
                        disableGutters
                        sx={{
                          borderLeft: "3px solid",
                          borderColor: "secondary.main",
                          pl: 2,
                          mb: 1,
                          py: 0.3,
                        }}
                      >
                        <ListItemText primary={event} />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Divider />

                <Box>
                  <Typography variant="h5" sx={{ fontSize: "1rem", mb: 1.5 }}>
                    Follow us
                  </Typography>
                  <Stack spacing={1.5}>
                    <Stack
                      component="a"
                      href={business.social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      sx={{ color: "text.primary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
                    >
                      <InstagramIcon fontSize="small" />
                      <Typography sx={{ fontWeight: 600 }}>@HUERTAS_ALBUQUERQUE_JERKY_</Typography>
                    </Stack>
                    <Stack
                      component="a"
                      href={business.social.facebook}
                      target="_blank"
                      rel="noreferrer"
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      sx={{ color: "text.primary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
                    >
                      <FacebookIcon fontSize="small" />
                      <Typography sx={{ fontWeight: 600 }}>Huerta's Albuquerque Jerky</Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
