import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";


const heatColors = {
  "None": { bg: "#f5f0e8", text: "#8b735b", chip: "#a89070" },
  "Mild": { bg: "#e8f5e9", text: "#1b5e20", chip: "#4caf50" },
  "Medium": { bg: "#fff3e0", text: "#e65100", chip: "#ff9800" },
  "Hot": { bg: "#ffebee", text: "#c62828", chip: "#ef4444" },
  "Very Hot": { bg: "#ffebee", text: "#b71c1c", chip: "#dc2626" },
};

export default function ProductCard({ product }) {
  const hc = heatColors[product.heatLevel] || heatColors["None"];

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          height: 6,
          background: `linear-gradient(90deg, ${hc.chip} 0%, transparent 100%)`,
          flexShrink: 0,
        }}
      />
      {product.image && (
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
            src={`/images/${product.image}`}
            alt={product.name}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1.5, flexWrap: "wrap" }}>
          <Chip
            label={product.heatLevel}
            size="small"
            sx={{
              bgcolor: hc.bg,
              color: hc.text,
              fontWeight: 700,
              fontSize: "0.7rem",
              border: "none",
            }}
          />
          {product.isFeatured ? (
            <Chip
              label="Featured"
              size="small"
              color="primary"
              sx={{ fontWeight: 700, fontSize: "0.7rem" }}
            />
          ) : null}
        </Stack>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Alegreya", serif',
            fontWeight: 800,
            fontSize: "1.2rem",
            mb: 0.5,
          }}
        >
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.shortDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 1 }}>
        <Button
          component={Link}
          href={`/products/${product.slug}`}
          variant="contained"
          color="primary"
          fullWidth
          size="small"
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
