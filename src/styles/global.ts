import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  font-family:${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colours.midnight};
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colours.gallery};
  display: flex;
  align-items: flex-start;
  margin: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs};

  @media (${({ theme }) => theme.breakpoints.sm}) {
    margin: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.sm};
  }

  @media (${({ theme }) => theme.breakpoints.lg}) {
    margin: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (${({ theme }) => theme.breakpoints.lg}) {
    margin: ${({ theme }) => theme.spacing.xl};
    padding: ${({ theme }) => theme.spacing.xl};
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${({ theme }) => theme.fonts.bold};
}

p {
  line-height: 21px;
}

h1 {
  font-size: ${({ theme }) => theme.fontSize.xl};
}

h2 {
  font-size: ${({ theme }) => theme.fontSize.lg};
}

h3 {
  font-size: ${({ theme }) => theme.fontSize.md};
}

h4 {
  font-size: ${({ theme }) => theme.fontSize.sm};
}

h5 {
  font-size: ${({ theme }) => theme.fontSize.xs};
}

`;

export default GlobalStyles;
