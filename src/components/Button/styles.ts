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

  &.button--xs {
    height: 24px;
    padding: 4px 10px;
    font-size: 13px;
  }
  &.button--sm {
    height: 32px;
    padding: 4px 10px;
    font-size: 14px;
  }
  &.button--md {
    height: 40px;
    padding: 10px 16px;
  }

  &.button--contained.button--primary {
    background-color: var(--primary);
    color: #fff;
  }

  &.button--text.button--neutral {
    background-color: transparent;
    color: var(--gray-500);
  }

  &.button--ghost.button--primary {
    background-color: var(--primary-light);
    color: var(--primary);
  }
  &.button--ghost.button--blue {
    background-color: var(--blue-200);
    color: var(--blue-800);
  }
  &.button--ghost.button--neutral {
    background-color: var(--gray-200);
    color: var(--gray-800);
  }

  &.button--active {
    opacity: 0.8;
  }

  svg {
    fill: currentColor;
    color: currentColor;
  }
`;
