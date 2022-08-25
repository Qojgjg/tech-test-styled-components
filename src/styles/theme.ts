import { DefaultTheme } from "styled-components";

const screenSizes = {
  sm: "375px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const CSTheme: DefaultTheme = {
  fonts: {
    regular: "CSClarity",
    bold: "CSClarity-Bold",
  },
  colours: {
    white: "#ffffff",
    black: "#000000",
    midnight: "#253648",
    gallery: "#f7f7f8",
    cta: "#0f81a3",
    ctaHover: "#66aec5",
    greenText: "#15693b",
    greenBg: "#ddf9ea",
    orangeText: "#764c25",
    orangeBg: "#fdefe2",
    grayBg: "#eeeff1",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "10px",
    lg: "16px",
    xl: "24px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
  },
  boxShadow: {
    md: "0 0.1rem 0.5rem rgba(0, 0, 0, 0.16)",
    lg: "0 0.5rem 0.75rem rgba(0, 0, 0, 0.16)",
  },
  breakpoints: {
    sm: `(min-width: ${screenSizes.sm})`,
    md: `(min-width: ${screenSizes.md})`,
    lg: `(min-width: ${screenSizes.lg})`,
    xl: `(min-width: ${screenSizes.xl})`,
  },
};

export { CSTheme };
