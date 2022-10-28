import { X } from "phosphor-react";

import TeamCard from "../TeamCard";
import Typography from "../Typography";
import * as S from "./styles";

interface Team {
  abbr: string;
  logo: string;
}

interface MatchCardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  match: {
    stage: string;
    homeTeamScore: null | number;
    awayTeamScore: null | number;
    homeTeam: Team;
    awayTeam: Team;
  };
}

const MatchCard: React.FC<MatchCardProps> = ({ match, ...rest }) => {
  return (
    <S.MatchCard {...rest}>
      <S.MatchHeader>
        <Typography size="md" color="gray-600" weight="bold">
          {match.stage}
        </Typography>
        <Typography size="md" color="gray-600" weight="normal" as="span">
          13:00h
        </Typography>
      </S.MatchHeader>
      <S.MatchBody>
        <TeamCard team={match.homeTeam} type="home" />
        <S.MatchHunch>
          <Typography size="2xl" color="gray-600" weight="extrabold">
            {match.homeTeamScore ?? ""}
          </Typography>
        </S.MatchHunch>
        <X size={24} />
        <S.MatchHunch>
          <Typography size="2xl" color="gray-600" weight="extrabold">
            {match.awayTeamScore ?? ""}
          </Typography>
        </S.MatchHunch>
        <TeamCard team={match.awayTeam} type="away" />
      </S.MatchBody>
      <S.MatchFooter>
        <Typography size="md" color="primary" weight="normal">
          Ver detalhes
        </Typography>
      </S.MatchFooter>
    </S.MatchCard>
  );
};

export default MatchCard;
