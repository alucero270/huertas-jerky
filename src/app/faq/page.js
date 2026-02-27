import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={2.5}>
        <div>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Frequently Asked Questions
          </Typography>
          <Typography color="text.secondary">
            Quick answers about how to buy, where to find us, and what is next for
            Huerta's Albuquerque Jerky.
          </Typography>
        </div>

        {faqs.map((faq) => (
          <Accordion key={faq.question} disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 700 }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Container>
  );
}
