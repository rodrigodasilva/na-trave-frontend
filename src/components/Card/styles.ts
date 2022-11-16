import styled from "styled-components";

export const Card = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--rounded-md);
  padding: 24px 24px 16px;
  border: 0.5px solid var(--gray-400);
`;

export const Header = styled.header`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  text-align: center;
`;

export const Footer = styled.footer`
  margin-top: 24px;
`;
