import React from "react";

import * as S from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  maxWidth?: string | number;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, maxWidth = "100%", className, ...props },
  ref
) => (
  <S.InputWrapper ref={ref} className={className} maxWidth={maxWidth}>
    {label ? <S.InputLabel>{label}</S.InputLabel> : null} <S.Input {...props} />
  </S.InputWrapper>
);

export { InputLabel } from "./styles";

export default React.forwardRef<HTMLInputElement, InputProps>(Input);
