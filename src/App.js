import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import GlobalStyle from "./global";
import PageRoutes from "./routes";

function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "'Maven Pro', sans-serif",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <GlobalStyle />
        <PageRoutes />
      </>
    </ThemeProvider>
  );
}

export default App;
