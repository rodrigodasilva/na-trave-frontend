import styled from "styled-components";

export const ButtonWrapper = styled.button`
  align-items: center;
  border: none;
  border-radius: var(--rounded-md);
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  gap: 8px;
  position: relative;

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
    background-color: var(--gray-100);
    color: var(--gray-800);
  }

  &.button--active {
    opacity: 0.8;
  }

  &.button--is-loading {
    color: transparent !important;
  }

  svg {
    fill: currentColor;
    color: currentColor;
  }
`;

export const LoadingIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: default;
  border-radius: var(--rounded-md);
`;
