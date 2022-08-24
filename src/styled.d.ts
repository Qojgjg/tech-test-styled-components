import "styled-components";

interface ThemePropertySizes {
  xs?: string;
  sm?: string;
  md: string;
  lg?: string;
  xl?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      regular: string;
      bold: string;
    };
    colours: {
      [key: string]: string;
    };
    borderRadius: ThemePropertySizes;
    fontSize: ThemePropertySizes;
    spacing: ThemePropertySizes;
    boxShadow: ThemePropertySizes;
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
