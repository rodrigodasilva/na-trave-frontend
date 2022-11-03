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

export const Footer = styled.footer`
  margin-top: 24px;
`;
