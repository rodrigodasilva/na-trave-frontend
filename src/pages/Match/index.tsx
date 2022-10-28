import { ArrowLeft, Plus } from "phosphor-react";
import { Link } from "react-router-dom";

import AppBar from "@/components/AppBar";
import Button from "@/components/Button";
import * as MatchCard from "@/components/MatchCard";
// import Typography from "@/components/Typography";
import DefaultLayout from "@/layouts/Default";

import * as S from "./styles";

const data = {
  id: 5,
  homeTeamId: 4,
  awayTeamId: 3,
  homeTeamScore: null,
  awayTeamScore: null,
  datetime: "2022-11-22T10:00:00.000Z",
  stage: "Fase de Grupos",
  homeTeam: { id: 4, name: "Argentina", abbr: "ARG", logo: "arg.png" },
  awayTeam: { id: 3, name: "Arábia Saudita", abbr: "SAU", logo: "sau.png" },
};

const Match: React.FC = () => {
  return (
    <DefaultLayout header={<AppBar />}>
      <S.Header>
        <Link to="/">
          <Button
            startIcon={<ArrowLeft size={18} />}
            variant="text"
            color="neutral"
          >
            Voltar
          </Button>
        </Link>
        <Button startIcon={<Plus size={16} />}>Nova aposta</Button>
      </S.Header>
      <MatchCard.Card match={data} variant="clean" />
    </DefaultLayout>
  );
};

export default Match;
