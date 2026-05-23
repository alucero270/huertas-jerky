import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c43c28",
      light: "#e85c42",
      dark: "#8a2416",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2d7c4a",
      light: "#4a9663",
      dark: "#1a5230",
      contrastText: "#fff",
    },
    background: {
      default: "#f7f1e6",
      paper: "#fffbf2",
    },
    text: {
      primary: "#2a1f1a",
      secondary: "#6b5445",
    },
    divider: "#d4c4a8",
  },
  typography: {
    fontFamily: '"Montserrat", "Franklin Gothic Medium", "Arial Narrow", sans-serif',
    h1: {
      fontFamily: '"Alegreya", "Book Antiqua", Georgia, serif',
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: '"Alegreya", "Book Antiqua", Georgia, serif',
      fontWeight: 800,
      letterSpacing: "-0.01em",
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: '"Alegreya", "Book Antiqua", Georgia, serif',
      fontWeight: 700,
      lineHeight: 1.15,
    },
    h4: {
      fontFamily: '"Alegreya", "Book Antiqua", Georgia, serif',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: '"Montserrat", "Franklin Gothic Medium", "Arial Narrow", sans-serif',
      fontWeight: 700,
      letterSpacing: "0.01em",
    },
    h6: {
      fontFamily: '"Montserrat", "Franklin Gothic Medium", "Arial Narrow", sans-serif',
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "0.02em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backdropFilter: "blur(8px)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 22,
          paddingRight: 22,
          paddingTop: 8,
          paddingBottom: 8,
          fontSize: "0.95rem",
        },
        containedPrimary: {
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 4px 12px rgba(179, 40, 26, 0.25)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #d4bfa7",
          transition: "box-shadow 0.2s, transform 0.2s",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: "1px solid #d4bfa7",
          borderRadius: "12px !important",
          "&:before": { display: "none" },
        },
      },
    },
  },
});
