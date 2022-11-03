import styled from "styled-components";

export const InputWrapper = styled.div<{ maxWidth: string | number }>`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.maxWidth};
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: var(--gray-500);
  font-weight: 400;
  margin-bottom: 4px;
  display: flex;
  width: max-content;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid var(--gray-400);
  border-radius: var(--rounded-xs);
  color: var(--gray-600);
  font-weight: 400;
  font-size: 13px;
  height: 40px;
  padding: 10px 12px;

  &::placeholder {
    color: var(--gray-400);
  }
`;

// xs (24px)
// sm (32px)
// md (40px)
// lg (48px)
