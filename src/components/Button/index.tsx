import cc from "classnames";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md";
  variant?: "contained" | "text" | "ghost";
  color?: "primary" | "blue" | "neutral";
  active?: boolean;
  startIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size = "md",
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
      className={cc(
        `button--${size} button--${variant} button--${color}`,
        className,
        {
          "button--active": active,
        }
      )}
      {...rest}
    >
      {startIcon ? startIcon : null}
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
