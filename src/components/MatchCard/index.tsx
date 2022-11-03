import cc from "classnames";

import HunchForm from "../HunchForm";
import Typography from "../Typography";
import * as S from "./styles";

interface Team {
  abbr: string;
  logo: string;
}

interface MatchCardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  variant?: "outline" | "clean";
  match: {
    stage: string;
    homeTeamScore: null | number;
    awayTeamScore: null | number;
    homeTeam: Team;
    awayTeam: Team;
  };
}

export const Card: React.FC<MatchCardProps> = ({
  match,
  children,
  variant = "outline",
  className,
  ...rest
}) => {
  return (
    <S.Card className={cc(`card--${variant}`, className)} {...rest}>
      <S.Header>
        <Typography size="md" color="gray-500" weight="bold">
          {match.stage}
        </Typography>
        <Typography size="md" color="gray-500" weight="normal" as="span">
          13:00h
        </Typography>
      </S.Header>
      <HunchForm />
      {children ? children : null}
    </S.Card>
  );
};

export { Footer } from "./styles";
