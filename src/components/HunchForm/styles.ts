import styled from "styled-components";

export const HunchFormWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 480px;

  svg {
    color: var(--gray-400);
  }
`;

export const HunchInput = styled.input`
  outline: none;
  border: 1px solid var(--gray-400);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  font-size: var(--text-2xl);
  border-radius: var(--rounded-md);
  font-weight: bold;
  color: var(--gray-600);

  &:focus {
    border-color: var(--primary);
  }

  &:disabled {
    color: var(--gray-500);
    border: none;
  }
`;

export const Footer = styled.footer`
  margin-top: 24px;
`;
