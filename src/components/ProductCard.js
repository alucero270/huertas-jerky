import Link from "next/link";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: "wrap" }}>
          <Chip
            label={product.heatLevel}
            size="small"
            color="secondary"
            variant="outlined"
          />
          {product.isFeatured ? (
            <Chip label="Featured" size="small" color="primary" />
          ) : null}
        </Stack>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.shortDescription}
        </Typography>
      </CardContent>
      <Box sx={{ px: 2, pb: 1 }}>
        <Alert severity="info" sx={{ fontSize: 13 }}>
          Online checkout coming soon
        </Alert>
      </Box>
      <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
        <Button
          component={Link}
          href={`/products/${product.slug}`}
          variant="contained"
          color="primary"
          fullWidth
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
