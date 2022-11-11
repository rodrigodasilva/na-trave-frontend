import cc from "classnames";

import * as S from "./styles";

interface SpinnerProps {
  className?: string;
  size?: "sm" | "md";
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "primary",
  className,
}) => {
  const borderColor = `var(--${color}) transparent transparent transparent`;

  return (
    <S.SpinnerWrapper
      color={color}
      className={cc("spinner", `spinner--${size}`, className)}
    >
      <span className="spinner__item" style={{ borderColor }} />
      <span className="spinner__item" style={{ borderColor }} />
      <span className="spinner__item" style={{ borderColor }} />
    </S.SpinnerWrapper>
  );
};

export default Spinner;
