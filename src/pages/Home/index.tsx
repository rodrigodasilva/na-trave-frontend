import { CaretLeft, CaretRight, X } from "phosphor-react";

import TeamCard from "@/components/TeamCard";
import Typography from "@/components/Typography";
import DefaultLayout from "@/layouts/Default";

import { Header } from "./components/Header";
import * as S from "./styles";

const data = [
  {
    id: 5,
    homeTeamId: 4,
    awayTeamId: 3,
    homeTeamScore: null,
    awayTeamScore: null,
    datetime: "2022-11-22T10:00:00.000Z",
    stage: "Fase de Grupos",
    homeTeam: { id: 4, name: "Argentina", abbr: "ARG", logo: "arg.png" },
    awayTeam: { id: 3, name: "Arábia Saudita", abbr: "SAU", logo: "sau.png" },
  },
  {
    id: 6,
    homeTeamId: 12,
    awayTeamId: 31,
    homeTeamScore: null,
    awayTeamScore: null,
    datetime: "2022-11-22T13:00:00.000Z",
    stage: "Fase de Grupos",
    homeTeam: { id: 12, name: "Dinamarca", abbr: "DIN", logo: "din.png" },
    awayTeam: { id: 31, name: "Tunísia", abbr: "TUN", logo: "tun.png" },
  },
  {
    id: 7,
    homeTeamId: 23,
    awayTeamId: 25,
    homeTeamScore: null,
    awayTeamScore: null,
    datetime: "2022-11-22T16:00:00.000Z",
    stage: "Fase de Grupos",
    homeTeam: { id: 23, name: "México", abbr: "MEX", logo: "mex.png" },
    awayTeam: { id: 25, name: "Polônia", abbr: "POL", logo: "pol.png" },
  },
  {
    id: 8,
    homeTeamId: 16,
    awayTeamId: 5,
    homeTeamScore: null,
    awayTeamScore: null,
    datetime: "2022-11-22T19:00:00.000Z",
    stage: "Fase de Grupos",
    homeTeam: { id: 16, name: "França", abbr: "FRA", logo: "fra.png" },
    awayTeam: { id: 5, name: "Austrália", abbr: "AUS", logo: "aus.png" },
  },
];

const Home: React.FC = () => {
  return (
    <DefaultLayout header={<Header />}>
      <S.CurrentDate>
        <CaretLeft size={24} />
        <Typography size="md" color="gray-700" weight="bold">
          28 de outubro
        </Typography>
        <CaretRight size={24} />
      </S.CurrentDate>
      <S.MatchList>
        {data.map(match => (
          <S.MatchItem key={match.id}>
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
              <X size={24} />
              <TeamCard team={match.awayTeam} type="away" />
            </S.MatchBody>
            <S.MatchFooter>
              <Typography size="md" color="primary" weight="normal">
                Ver detalhes
              </Typography>
            </S.MatchFooter>
          </S.MatchItem>
        ))}
      </S.MatchList>
    </DefaultLayout>
  );
};

export default Home;
