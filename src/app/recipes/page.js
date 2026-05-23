import Image from "next/image";
import { Box, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";

export const metadata = {
  title: "Recipes",
  description:
    "Simple ideas for using Huerta's jerky in snack boards, tacos, and trail mix.",
};

const recipeImages = [
  "1000010711.jpg",
  "1000010715.jpg",
  "IMG_20241203_194203 (1).jpg",
];

const ideas = [
  {
    title: "Green Chile Jerky Breakfast Taco",
    body: "Chop Green Chile Jerky and fold it into scrambled eggs with potatoes and roasted chile for a fast New Mexico breakfast taco.",
    image: recipeImages[0],
  },
  {
    title: "Jerky + Piñon Snack Mix",
    body: "Combine sliced jerky with piñon, pumpkin seeds, and dried fruit for a trail-ready Southwestern mix.",
    image: recipeImages[1],
  },
  {
    title: "Game Day Jerky Board",
    body: "Build a board with Christmas, Mango Habanero, and Garlic Parmesan Green plus cheeses, pickled vegetables, and crackers.",
    image: recipeImages[2],
  },
];

export default function RecipesPage() {
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
        <Container maxWidth="lg">
          <Stack spacing={1.5}>
            <Chip
              label="Cooking with jerky"
              color="secondary"
              sx={{ alignSelf: "flex-start" }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.8rem" } }}>
              Jerky Recipes
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 500, maxWidth: 680 }}
            >
              Simple ways to use Huerta's jerky beyond the bag — tacos, snack mixes,
              and shareable boards.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -2 }}>
        <Stack spacing={2.5}>
          <Grid container spacing={2.5}>
            {ideas.map((idea) => (
              <Grid key={idea.title} size={{ xs: 12, md: 4 }}>
                <Paper
                  sx={{
                    height: "100%",
                    borderTop: "3px solid",
                    borderTopColor: "primary.main",
                    overflow: "hidden",
                  }}
                >
                  {idea.image && (
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 180,
                        overflow: "hidden",
                        bgcolor: "grey.100",
                      }}
                    >
                      <Image
                        src={`/images/${idea.image}`}
                        alt={idea.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  )}
                  <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Alegreya", serif',
                      fontWeight: 800,
                      fontSize: "1.2rem",
                      mb: 1.5,
                    }}
                  >
                    {idea.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {idea.body}
                  </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              textAlign: "center",
              background: "linear-gradient(135deg, #fffcf5 0%, #f5eadc 100%)",
            }}
          >
            <Typography color="text.secondary">
              More recipes coming soon. Have a jerky idea?{" "}
              <Typography
                component="a"
                href="/contact"
                sx={{ color: "primary.main", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                Send it to us
              </Typography>
              .
            </Typography>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
