import { createTheme } from "@mui/material/styles";

/**
 * Huerta’s Brand Theme
 * - Primary: Chile Red
 * - Secondary: Chile Green
 * - Background: Warm desert paper
 * - Text: Charcoal
 */
export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#B91C1C", // chile red
            dark: "#7F1D1D",
            light: "#EF4444",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#166534", // chile green
            dark: "#14532D",
            light: "#22C55E",
            contrastText: "#FFFFFF",
        },
        background: {
            default: "#FFF7ED", // warm sand
            paper: "#FFFFFF",
        },
        text: {
            primary: "#111827", // charcoal
            secondary: "#4B5563",
        },
        divider: "#E5E7EB",
    },

    typography: {
        fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        h1: { fontWeight: 800, letterSpacing: "-0.02em" },
        h2: { fontWeight: 800, letterSpacing: "-0.02em" },
        h3: { fontWeight: 800, letterSpacing: "-0.01em" },
        h4: { fontWeight: 800 },
        button: { fontWeight: 700, textTransform: "none" },
    },

    shape: {
        borderRadius: 12,
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    paddingLeft: 16,
                    paddingRight: 16,
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    border: "1px solid #E5E7EB",
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },

        MuiContainer: {
            defaultProps: {
                maxWidth: "lg",
            },
        },

        MuiLink: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                },
            },
        },
    },
});
