import { ReactComponent as IconX } from "@/assets/icons/x.svg";

import TeamCard from "../TeamCard";
import * as S from "./styles";

const data = {
  id: 5,
  homeTeamId: 4,
  awayTeamId: 3,
  homeTeamScore: 2,
  awayTeamScore: 0,
  datetime: "2022-11-22T10:00:00.000Z",
  stage: "Fase de Grupos",
  homeTeam: { id: 4, name: "Argentina", abbr: "ARG", logo: "arg.png" },
  awayTeam: { id: 3, name: "Arábia Saudita", abbr: "SAU", logo: "sau.png" },
};

interface HunchFormProps extends React.HTMLAttributes<HTMLDivElement> {
  isEditing?: boolean;
}

const HunchForm: React.FC<HunchFormProps> = ({
  isEditing = false,
  ...props
}) => (
  <S.HunchFormWrapper {...props}>
    <TeamCard team={data.homeTeam} type="home" />
    <S.HunchInput
      defaultValue={data.homeTeamScore ?? ""}
      disabled={!isEditing}
      name="home"
    />
    <IconX width={24} />
    <S.HunchInput
      defaultValue={data.awayTeamScore ?? ""}
      disabled={!isEditing}
      name="away"
    />
    <TeamCard team={data.awayTeam} type="away" />
  </S.HunchFormWrapper>
);

export default HunchForm;
