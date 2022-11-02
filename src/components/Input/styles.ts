import styled from "styled-components";

export const InputWrapper = styled.div<{ maxWidth: string | number }>`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.maxWidth};
`;

export const InputLabel = styled.label`
  font-size: 12px;
  color: var(--gray-500);
  font-weight: 400;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid var(--gray-400);
  border-radius: var(--rounded-xs);
  color: var(--gray-600);
  font-weight: 400;
  font-size: 12px;
  height: 32px;
  padding: 10px 12px;

  &::placeholder {
    color: var(--gray-400);
  }
`;
