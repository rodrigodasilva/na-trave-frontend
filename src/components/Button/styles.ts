import styled from "styled-components";

export const ButtonWrapper = styled.button`
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  gap: 8px;
  height: 32px;
  padding: 10px 12px;

  &.button--contained.button--primary {
    background-color: var(--primary);
    color: #fff;
  }

  &.button--text.button--neutral {
    background-color: transparent;
    color: var(--gray-500);
  }

  &.button--active {
    opacity: 0.8;
  }
`;
