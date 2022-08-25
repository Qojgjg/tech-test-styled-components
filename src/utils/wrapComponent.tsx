import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { CSTheme } from "../styles/theme";

export const wrapComponent = (component: ReactNode) => {
  return (
    <ThemeProvider theme={CSTheme}>
      <GlobalStyles />
      {component}
    </ThemeProvider>
  );
};
