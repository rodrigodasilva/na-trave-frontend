import { Link } from "react-router-dom";

import { ReactComponent as IconCaretLeft } from "@/assets/icons/caret_left.svg";
import { ReactComponent as IconCaretRight } from "@/assets/icons/caret_right.svg";
import AppBar from "@/components/AppBar";
import * as MatchCard from "@/components/MatchCard";
import Typography from "@/components/Typography";
import DefaultLayout from "@/layouts/Default";

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
    homeTeamScore: 2,
    awayTeamScore: 0,
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
    <DefaultLayout header={<AppBar />}>
      <S.CurrentDate>
        <IconCaretLeft width={24} />
        <Typography size="md" color="gray-700" weight="bold">
          28 de outubro
        </Typography>
        <IconCaretRight width={24} />
      </S.CurrentDate>
      <S.MatchList>
        {data.map(match => (
          <li key={match.id}>
            <MatchCard.Card match={match}>
              <MatchCard.Footer>
                <Link to="/match">
                  <Typography size="md" color="primary" weight="normal">
                    Ver detalhes
                  </Typography>
                </Link>
              </MatchCard.Footer>
            </MatchCard.Card>
          </li>
        ))}
      </S.MatchList>
    </DefaultLayout>
  );
};

export default Home;
