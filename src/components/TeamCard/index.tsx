import cc from "classnames";

import Typography from "../Typography";
import * as S from "./styles";

interface TeamCardProps {
  type: "away" | "home";
  team?: {
    abbr: string;
    logo: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ type = "home", team }) => {
  return (
    <S.TeamCardWrapper className={cc(`team-card--${type}`)}>
      <Typography size="md" color="gray-500" weight="normal" as="span">
        {team?.abbr}
      </Typography>
      <span className="team-card__flag" />
    </S.TeamCardWrapper>
  );
};

export default TeamCard;
