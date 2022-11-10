import cc from "classnames";

import { formatDate } from "@/utils/dateUtils";

import HunchForm from "../HunchForm";
import Typography from "../Typography";
import * as S from "./styles";

interface Match {
  id: number;
  homeTeamId: number;
  awayTeamId: number;
  homeTeamScore: null;
  awayTeamScore: null;
  datetime: string;
  stage: string;
  homeTeam: {
    id: number;
    name: string;
    abbr: string;
    logo: string;
  };
  awayTeam: {
    id: number;
    name: string;
    abbr: string;
    logo: string;
  };
}

interface MatchCardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  variant?: "outline" | "clean";
  match: Match;
  dateFormat?: string;
}

export const Card: React.FC<MatchCardProps> = ({
  match,
  children,
  variant = "outline",
  dateFormat = "HH:mm[h]",
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
          {formatDate(match.datetime, dateFormat)}
        </Typography>
      </S.Header>
      <HunchForm match={match} />
      {children ? children : null}
    </S.Card>
  );
};

export { Footer } from "./styles";
