import { ThemeProvider } from "styled-components";
import theme from "components/theme";
import GlobalStyles from "components/GlobalStyles";
import Tabs from "pages/Tabs";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Tabs />
    </ThemeProvider>
  );
}

export default App;
