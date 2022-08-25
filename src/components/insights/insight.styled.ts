import styled from "styled-components";

export const InsightContainer = styled.main`
  > * {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const InsightCardLayout = styled.div`
  display: grid;
  overflow-x: scroll;
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  grid-template-columns: repeat(3, minmax(45%, 1fr));
  grid-template-rows: 1fr;
  width: 100vw;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (${({ theme }) => theme.breakpoints.lg}) {
    overflow: visible;
    gap: ${({ theme }) => theme.spacing.md};
    width: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
  }

  @media (${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;
