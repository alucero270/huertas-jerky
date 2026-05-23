import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs } from "../../lib/siteContent";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about ordering, shipping, ingredients, and wholesale plans.",
};

export default function FaqPage() {
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
              label="Quick answers"
              color="secondary"
              sx={{ alignSelf: "flex-start" }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.8rem" } }}>
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              Everything you need to know about ordering, shipping, and what is next.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -1 }}>
        <Stack spacing={1.5}>
          {faqs.map((faq) => (
            <Accordion key={faq.question} disableGutters sx={{ borderRadius: "12px !important", overflow: "hidden" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  "& .MuiAccordionSummary-content": { py: 0.5 },
                }}
              >
                <Typography sx={{ fontWeight: 700 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
