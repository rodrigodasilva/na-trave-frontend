import cc from "classnames";
import React from "react";

import * as S from "./styles";

type Sizes =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

type FontWeight =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "center" | "inherit" | "justify" | "left" | "right";
  as?: React.ElementType;
  color?: string;
  className?: string;
  children: React.ReactNode;
  noWrap?: boolean;
  style?: React.CSSProperties;
  size?: Sizes;
  weight?: FontWeight;
}

const Typography: React.FC<TypographyProps> = ({
  align = "left",
  as: asProp = "h2",
  color = "gray-600",
  className = "",
  children,
  noWrap = false,
  style = {},
  size = "sm",
  weight = "medium",
  ...props
}) => {
  const asComponent = asProp;

  const customStyle = {
    ...(align !== "inherit" && {
      textAlign: align,
    }),
    ...(color && {
      color: `var(--${color})`,
    }),
    ...(noWrap && {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      display: "block",
    }),
    ...style,
  };

  return (
    <S.TypographyWrapper
      as={asComponent}
      className={cc(`text-${size}`, `font-${weight}`, className)}
      style={customStyle}
      {...props}
    >
      {children}
    </S.TypographyWrapper>
  );
};

export default Typography;
