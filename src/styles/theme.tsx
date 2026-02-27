import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9f1f18",
      light: "#d34a30",
      dark: "#6e130f",
      contrastText: "#fffaf2",
    },
    secondary: {
      main: "#1f5f3a",
      light: "#3b8457",
      dark: "#134127",
      contrastText: "#fffaf2",
    },
    background: {
      default: "#f7efe2",
      paper: "#fffaf2",
    },
    text: {
      primary: "#221814",
      secondary: "#5f4a3f",
    },
    divider: "#d8c5ae",
  },
  typography: {
    fontFamily: '"Montserrat", "Franklin Gothic Medium", "Arial Narrow", sans-serif',
    h1: {
      fontFamily: '"Alegreya", "Book Antiqua", Georgia, serif',
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: '"Alegreya", "Book Antiqua", Georgia, serif',
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: '"Alegreya", "Book Antiqua", Georgia, serif',
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "0.02em",
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backdropFilter: "blur(6px)",
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
          paddingLeft: 18,
          paddingRight: 18,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #d8c5ae",
        },
      },
    },
  },
});
