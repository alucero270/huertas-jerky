import Image from "next/image";
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EventIcon from "@mui/icons-material/Event";
import { business, hours } from "../../lib/siteContent";

export const metadata = {
  title: "Find Us",
  description:
    "Visit Huerta's Albuquerque Jerky in-store, at local markets, or call for shipping. Store hours and event schedule.",
};

export default function LocationsPage() {
  return (
    <Box sx={{ pb: 6 }}>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 75% 20%, rgba(37,111,72,0.12) 0, rgba(37,111,72,0) 50%), linear-gradient(180deg, #f5eadc 0%, #fffcf5 100%)",
          borderBottom: "1px solid",
          borderColor: "divider",
          pt: { xs: 6, md: 10 },
          pb: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1.5}>
            <Chip
              icon={<LocationOnIcon />}
              label="Albuquerque, New Mexico"
              color="secondary"
              sx={{ alignSelf: "flex-start" }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.8rem" } }}>
              Find Huerta's
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 500, maxWidth: 680 }}
            >
              Stop by the shop, catch us at a market, or call in an order.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -2 }}>
        <Grid container spacing={3}>
          {/* Storefront card */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: { xs: 3, md: 4 } }}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <StorefrontIcon color="primary" />
                  <Typography variant="h3">The Shop</Typography>
                </Stack>

                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 200, md: 240 },
                    borderRadius: 2,
                    overflow: "hidden",
                    bgcolor: "grey.100",
                  }}
                >
                  <Image
                    src="/images/1000013220.jpg"
                    alt="Huerta's Albuquerque Jerky storefront"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <LocationOnIcon fontSize="small" color="action" sx={{ mt: 0.3 }} />
                    <Box>
                      <Typography>{business.addressLine1}</Typography>
                      <Typography color="text.secondary">{business.cityStateZip}</Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <PhoneIcon fontSize="small" color="action" />
                    <Typography
                      component="a"
                      href={`tel:${business.phoneTel}`}
                      sx={{ color: "primary.main", fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                    >
                      {business.phoneDisplay}
                    </Typography>
                  </Stack>
                </Stack>

                <Divider />

                <Box>
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                    <AccessTimeIcon fontSize="small" color="action" />
                    <Typography variant="h5" sx={{ fontFamily: '"Alegreya", serif', fontWeight: 700, fontSize: "1.15rem" }}>
                      Store Hours
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    {hours.map(({ day, hours: time }) => (
                      <Stack
                        key={day}
                        direction="row"
                        justifyContent="space-between"
                        sx={{
                          py: 0.6,
                          borderBottom: "1px solid",
                          borderColor: "divider",
                          "&:last-child": { borderBottom: 0 },
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: time === "Closed" ? 400 : 600,
                            color: time === "Closed" ? "text.secondary" : "text.primary",
                          }}
                        >
                          {day}
                        </Typography>
                        <Typography
                          color={time === "Closed" ? "text.secondary" : "text.primary"}
                        >
                          {time}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Events card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <EventIcon color="primary" />
                  <Typography variant="h3">Markets & Events</Typography>
                </Stack>

                <Typography color="text.secondary">
                  Catch us around town. We pop up at local markets and community
                  events throughout the season.
                </Typography>

                <List disablePadding>
                  {business.events.map((event) => (
                    <ListItem
                      key={event}
                      disableGutters
                      sx={{
                        borderLeft: "3px solid",
                        borderColor: "primary.main",
                        pl: 2,
                        mb: 1.5,
                        py: 0.5,
                      }}
                    >
                      <Typography sx={{ fontWeight: 600 }}>{event}</Typography>
                    </ListItem>
                  ))}
                </List>

                <Divider />

                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    Store pickup & walk-in shopping
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our shop is open for walk-in visits during store hours.
                    Call ahead if you are looking for a specific flavor.
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Shipping info card */}
          <Grid size={{ xs: 12 }}>
            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                background: "linear-gradient(135deg, #fffcf5 0%, #f5eadc 100%)",
              }}
            >
              <Stack spacing={1}>
                <Typography variant="h4" sx={{ fontSize: "1.3rem" }}>
                  Not in Albuquerque?
                </Typography>
                <Typography color="text.secondary">
                  We handle phone orders and shipping support while our online
                  checkout is being finalized. Give us a call at{" "}
                  <Typography
                    component="a"
                    href={`tel:${business.phoneTel}`}
                    sx={{ color: "primary.main", fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                  >
                    {business.phoneDisplay}
                  </Typography>{" "}
                  and we will help you get a bag shipped wherever you are.
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
