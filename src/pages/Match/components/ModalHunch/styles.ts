import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const InputQuantityWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;

  input {
    font-size: var(--text-md);
    font-weight: 400;
    border: none;
    color: var(--gray-500);
    width: 32px;
    text-align: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const RadioGroup = styled(RadioGroupPrimitive.Root)`
  display: flex;
  gap: 18px;
`;

export const RadioGrougLabel = styled.label`
  height: 40px;
  gap: 8px;
  padding: 4px 24px;
  border-radius: var(--rounded-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  color: var(--gray-500);
  font-size: var(--text-sm);
  font-weight: normal;
  background-color: var(--gray-100);
`;

export const RadioGroupRadio = styled(RadioGroupPrimitive.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  position: relative;
  background-color: #fff;
  border: 1px solid var(--gray-500);
  border-radius: 50%;
  cursor: pointer;

  &[data-state="checked"] {
    border-color: var(--primary);

    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--primary);
    }
  }
`;
