import * as S from "./styles";

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return <S.CardWrapper {...props}>{children}</S.CardWrapper>;
};

export default Card;
