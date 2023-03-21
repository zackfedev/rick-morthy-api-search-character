import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    background: {
      paper: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: ["Righteous", "cursive"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body: {
          margin: 0,
          padding: 0,
        }
      `,
    },
  },
});

export function Palette({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
