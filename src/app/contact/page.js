import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { business } from "../../lib/siteContent";

export const metadata = {
  title: "Contact Us",
  description:
    "Call, visit, or message Huerta's Albuquerque Jerky. Find us in-store and at local Albuquerque events.",
};

export default function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={3}>
        <div>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Contact Huerta's
          </Typography>
          <Typography color="text.secondary">
            Questions, shipping help, and flavor requests are always welcome.
          </Typography>
        </div>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Visit or Call
              </Typography>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Phone"
                    secondary={
                      <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
                    }
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Address"
                    secondary={`${business.addressLine1}, ${business.cityStateZip}`}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Instagram"
                    secondary={
                      <a
                        href={business.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        @HUERTAS_ALBUQUERQUE_JERKY_
                      </a>
                    }
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Facebook"
                    secondary={
                      <a
                        href={business.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Huerta's Albuquerque Jerky
                      </a>
                    }
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Find us at events
              </Typography>
              <List disablePadding>
                {business.events.map((event) => (
                  <ListItem key={event} disableGutters>
                    <ListItemText primary={event} />
                  </ListItem>
                ))}
              </List>
              <Typography color="text.secondary" sx={{ mt: 2 }}>
                Store pickup and walk-in shopping are available at our Albuquerque
                location.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
