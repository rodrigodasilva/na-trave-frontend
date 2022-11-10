import { ReactComponent as IconX } from "@/assets/icons/x.svg";

import TeamCard from "../TeamCard";
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

interface HunchFormProps extends React.HTMLAttributes<HTMLDivElement> {
  isEditing?: boolean;
  match: Match;
}

const HunchForm: React.FC<HunchFormProps> = ({
  isEditing = false,
  match,
  ...props
}) => (
  <S.HunchFormWrapper {...props}>
    <TeamCard team={match.homeTeam} type="home" />
    <S.HunchInput
      defaultValue={match.homeTeamScore ?? ""}
      disabled={!isEditing}
      name="home"
    />
    <IconX width={24} />
    <S.HunchInput
      defaultValue={match.awayTeamScore ?? ""}
      disabled={!isEditing}
      name="away"
    />
    <TeamCard team={match.awayTeam} type="away" />
  </S.HunchFormWrapper>
);

export default HunchForm;
