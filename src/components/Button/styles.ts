import styled from "styled-components";

export const ButtonWrapper = styled.button`
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  height: 40px;
  padding: 10px 16px;

  &.button--contained.button--primary {
    background-color: var(--primary-main-blip);
    color: #fff;
  }

  &.button--text.button--neutral {
    background-color: transparent;
    color: var(--neutral-city);
  }

  &.button--active {
    opacity: 0.8;
  }
`;
