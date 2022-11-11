import { ReactComponent as IconX } from "@/assets/icons/x.svg";

import TeamCard from "../TeamCard";
import HunchInput from "./HunchInput";
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
    <HunchInput
      defaultValue={match.homeTeamScore ?? ""}
      disabled={!isEditing}
      name="homeTeamScore"
      type="number"
      min="0"
    />
    <HunchFormIcon />
    <HunchInput
      defaultValue={match.awayTeamScore ?? ""}
      disabled={!isEditing}
      name="awayTeamScore"
      type="number"
      min="0"
    />
    <TeamCard team={match.awayTeam} type="away" />
  </S.HunchFormWrapper>
);

export const HunchFormIcon = () => <IconX width={24} />;
export { HunchFormWrapper } from "./styles";
export { HunchInput };
export default HunchForm;
