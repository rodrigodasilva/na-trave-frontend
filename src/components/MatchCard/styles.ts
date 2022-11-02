import styled from "styled-components";

export const Card = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--rounded-md);
  padding: 24px 24px 16px;

  &.card--outline {
    border: 0.5px solid var(--gray-400);
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 12px;
`;

export const Body = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 480px;

  svg {
    color: var(--gray-400);
  }
`;

export const Hunch = styled.span`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  margin-top: 24px;
`;
