import styled from "styled-components";

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colours.black};

  transition-property: opacity;
`;

export const DrawerContainer = styled.div`
  background-color: ${({ theme }) => theme.colours.white};
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;

  transition-property: width;
`;

export const DrawerContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
`;

export const DrawerCloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.xs};
`;
