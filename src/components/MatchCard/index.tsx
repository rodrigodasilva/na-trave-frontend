import cc from "classnames";
import { X } from "phosphor-react";

import TeamCard from "../TeamCard";
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
      <S.Body>
        <TeamCard team={match.homeTeam} type="home" />
        <S.Hunch>
          <Typography size="2xl" color="gray-500" weight="extrabold">
            {match.homeTeamScore ?? ""}
          </Typography>
        </S.Hunch>
        <X size={24} />
        <S.Hunch>
          <Typography size="2xl" color="gray-500" weight="extrabold">
            {match.awayTeamScore ?? ""}
          </Typography>
        </S.Hunch>
        <TeamCard team={match.awayTeam} type="away" />
      </S.Body>
      {children ? children : null}
    </S.Card>
  );
};

export { Footer } from "./styles";
