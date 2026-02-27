import { Container, Grid, Paper, Stack, Typography } from "@mui/material";

export const metadata = {
  title: "Recipes",
  description:
    "Simple ideas for using Huerta's jerky in snack boards, tacos, and trail mix.",
};

const ideas = [
  {
    title: "Green Chile Jerky Breakfast Taco",
    body: "Chop Green Chile Jerky and fold it into scrambled eggs with potatoes and roasted chile for a fast New Mexico breakfast taco.",
  },
  {
    title: "Jerky + Pinon Snack Mix",
    body: "Combine sliced jerky with pinon, pumpkin seeds, and dried fruit for a trail-ready Southwestern mix.",
  },
  {
    title: "Game Day Jerky Board",
    body: "Build a board with Christmas, Mango Habanero, and Garlic Parmesan Green plus cheeses, pickled vegetables, and crackers.",
  },
];

export default function RecipesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={2.5}>
        <div>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Jerky Recipes
          </Typography>
          <Typography color="text.secondary">
            Full recipe content is still in development. These are starter ideas we
            will expand with measured ingredients and prep steps.
          </Typography>
        </div>

        <Grid container spacing={2.5}>
          {ideas.map((idea) => (
            <Grid key={idea.title} size={{ xs: 12, md: 4 }}>
              <Paper sx={{ p: 3, height: "100%" }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {idea.title}
                </Typography>
                <Typography color="text.secondary">{idea.body}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
