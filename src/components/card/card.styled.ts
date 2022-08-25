import styled from "styled-components";

export const CardContainer = styled.article`
  background-color: ${({ theme }) => theme.colours.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  padding: ${({ theme }) => theme.spacing.lg};

  @media (${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: ${({ theme }) => theme.spacing.xl};
  }

  transition: box-shadow 0.3s ease-in-out;
  box-shadow: ${({ theme }) => theme.boxShadow.md};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.lg};
  }

  span:nth-child(2) {
    order: 999;
    margin-top: auto;
    width: 100%;

    @media (${({ theme }) => theme.breakpoints.lg}) {
      order: 0;
      width: auto;
    }
  }
`;

export const CardContent = styled.section`
  margin-top: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const CardCta = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colours.cta};
  order: 999;
  margin-top: auto;
  font-family: ${({ theme }) => theme.fonts.bold};

  &:hover {
    color: ${({ theme }) => theme.colours.ctaHover};
    text-decoration: underline;
    cursor: pointer;
  }
`;
