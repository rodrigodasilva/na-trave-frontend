import React from "react";

import * as S from "./styles";

type HunchInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const HunchInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  HunchInputProps
> = (props, ref) => <S.HunchInput ref={ref} type="number" min="0" {...props} />;

export default React.forwardRef<HTMLInputElement, HunchInputProps>(HunchInput);
