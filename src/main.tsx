import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import { CSTheme } from "./styles/theme";
import "./styles/fonts.css";
import { DrawerProvider } from "./components/drawer/drawer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={CSTheme}>
      <GlobalStyles />
      <DrawerProvider>
        <App />
      </DrawerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
