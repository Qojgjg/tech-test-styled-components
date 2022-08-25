import styled from "styled-components";

export const PillContainer = styled.span`
  display: flex;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const PillText = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 0.8px;

  &.onTrack {
    background-color: ${({ theme }) => theme.colours.greenBg};
    color: ${({ theme }) => theme.colours.greenText};
  }

  &.offTrack {
    background-color: ${({ theme }) => theme.colours.orangeBg};
    color: ${({ theme }) => theme.colours.orangeText};
  }

  &.impact {
    background-color: ${({ theme }) => theme.colours.grayBg};
    width: 100%;
  }
`;
