import * as S from "./styles";

type MatchCardProps = React.ButtonHTMLAttributes<HTMLDivElement>;

export const Card: React.FC<MatchCardProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <S.Card className={className} {...rest}>
      {children}
    </S.Card>
  );
};

export { Footer, Header } from "./styles";
