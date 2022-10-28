import cc from "classnames";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "text";
  color?: "primary" | "neutral";
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  className = "",
  children,
  active = false,
  ...rest
}) => {
  return (
    <S.ButtonWrapper
      className={cc(`button--${variant} button--${color}`, className, {
        "button--active": active,
      })}
      {...rest}
    >
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
