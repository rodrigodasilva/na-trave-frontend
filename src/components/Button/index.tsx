import cc from "classnames";
import React from "react";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md";
  variant?: "contained" | "text" | "ghost";
  color?: "primary" | "blue" | "neutral";
  active?: boolean;
  startIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingIndicator?: React.ReactNode;
}

const ButtonComponent: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (
  {
    size = "md",
    variant = "contained",
    color = "primary",
    className = "",
    children,
    active = false,
    startIcon,
    isLoading = false,
    loadingIndicator,
    disabled,
    ...rest
  },
  ref
) => {
  return (
    <S.ButtonWrapper
      ref={ref}
      className={cc(
        `button--${size} button--${variant} button--${color}`,
        className,
        {
          "button--active": active,
          "button--is-loading": isLoading,
        }
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && loadingIndicator ? (
        <S.LoadingIndicatorWrapper
          className={cc(`button__loading-wrapper--${color}`)}
        >
          {loadingIndicator}
        </S.LoadingIndicatorWrapper>
      ) : null}
      {startIcon ? startIcon : null}
      {children}
    </S.ButtonWrapper>
  );
};

export default React.forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonComponent
);
