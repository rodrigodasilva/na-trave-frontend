import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(DialogPrimitive.Overlay)`
  background-color: rgba(0, 0, 0, 0.44);
  position: fixed;
  inset: 0px;

  @keyframes overlayShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 18px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: var(--gray-400);
  border-radius: 100%;

  svg {
    fill: currentColor;
    width: 12px;
    height: 12px;
  }

  &:hover {
    background-color: var(--gray-200);
  }
`;

export const Content = styled(DialogPrimitive.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px,
    rgb(14 18 22 / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  overflow-y: auto;

  &:focus {
    outline: none;
  }

  @keyframes contentShow {
    0% {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const Title = styled(DialogPrimitive.Title)`
  margin: 0px;
  font-weight: 600;
  color: var(--gray-600);
  font-size: 16px;
`;

export const Header = styled.header`
  padding: 18px;
  border-bottom: 0.5px solid var(--gray-200);
`;

export const Body = styled.div`
  padding: 18px;
`;

export const Footer = styled.footer`
  padding: 18px;
  border-top: 0.5px solid var(--gray-200);
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;
