import styled from "styled-components";

export const HunchFormWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 480px;
`;

export const HunchForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 480px;
`;

export const HunchFormBody = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

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
  margin-bottom: auto;
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
    background-color: var(--white);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const HunchFormFooter = styled.footer`
  margin-top: 24px;
`;
