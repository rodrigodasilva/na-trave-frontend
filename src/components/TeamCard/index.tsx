import cc from "classnames";

import * as S from "./styles";

interface TeamCard {
  type: "away" | "home";
  team?: {
    abbr: string;
    logo: string;
  };
}

const TeamCard: React.FC<TeamCard> = ({ type = "home", team }) => {
  return (
    <S.TeamCardWrapper className={cc(`team-card--${type}`)}>
      <span>{team?.abbr}</span>
      <span className="team-card__flag" />
    </S.TeamCardWrapper>
  );
};

export default TeamCard;
