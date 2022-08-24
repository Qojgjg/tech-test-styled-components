import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./styles/global";
import { CSTheme } from "./styles/theme";
import "./styles/fonts.css";

function App() {
  return (
    <ThemeProvider theme={CSTheme}>
      <GlobalStyles />
      <Container>
        <h1>hi</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
