import styled from "styled-components";

export const InsightDetailsContainer = styled.div`
  > :not(:first-child) {
    line-height: 24px;
    margin-top: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xl};

    * {
      margin-top: ${({ theme }) => theme.spacing.md};
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }
  }
`;
