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

interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "center" | "inherit" | "justify" | "left" | "right";
  as?: React.ElementType;
  color?: string;
  className?: string;
  children: React.ReactNode;
  noWrap?: boolean;
  style?: React.CSSProperties;
  size?: Sizes;
}

const Typography: React.FC<TypographyProps> = ({
  align = "left",
  as: asProp = "h2",
  color = "text-gray-600",
  className = "",
  children,
  noWrap = false,
  style = {},
  size = "sm",
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
      className={`text-${size} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </S.TypographyWrapper>
  );
};

export default Typography;
