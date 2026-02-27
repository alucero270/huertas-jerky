import Link from "next/link";
import { Alert, Container, Paper, Stack, Typography } from "@mui/material";

export const metadata = {
  title: "Wholesale",
  description:
    "Wholesale availability updates and partnership interest for Huerta's Albuquerque Jerky.",
};

export default function WholesalePage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={2.5}>
        <Typography variant="h2">Wholesale</Typography>

        <Alert severity="warning">
          We are preparing for wholesale expansion and working through USDA
          certification milestones first.
        </Alert>

        <Paper sx={{ p: 3 }}>
          <Typography sx={{ mb: 1.25 }} color="text.secondary">
            If you are a retailer, market operator, or regional distributor interested
            in carrying Huerta's Albuquerque Jerky, we would like to hear from you now
            so we can follow up as soon as our program opens.
          </Typography>
          <Link href="/contact">Submit your interest through our contact page</Link>
        </Paper>
      </Stack>
    </Container>
  );
}
