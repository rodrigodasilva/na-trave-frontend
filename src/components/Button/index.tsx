import cc from "classnames";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "text";
  color?: "primary" | "neutral";
  active?: boolean;
  startIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  className = "",
  children,
  active = false,
  startIcon,
  ...rest
}) => {
  return (
    <S.ButtonWrapper
      className={cc(`button--${variant} button--${color}`, className, {
        "button--active": active,
      })}
      {...rest}
    >
      {startIcon ? startIcon : null}
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
