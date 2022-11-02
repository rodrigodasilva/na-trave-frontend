import { Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "@/assets/icons/arrow_left.svg";
import { ReactComponent as IconPlus } from "@/assets/icons/plus.svg";
import AppBar from "@/components/AppBar";
import Button from "@/components/Button";
import * as MatchCard from "@/components/MatchCard";
import * as Tabs from "@/components/Tabs";
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
          <Button startIcon={<ArrowLeft />} variant="text" color="neutral">
            Voltar
          </Button>
        </Link>
        <Button startIcon={<IconPlus width={12} />}>Nova aposta</Button>
      </S.Header>
      <MatchCard.Card match={data} variant="clean" className="mb-40" />
      <Tabs.Root defaultValue="tab1" orientation="horizontal">
        <Tabs.List aria-label="tabs example">
          <Tabs.Trigger value="tab1">Todos</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Feitos por mim</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Todos</Tabs.Content>
        <Tabs.Content value="tab2">Feitos por mim</Tabs.Content>
      </Tabs.Root>
    </DefaultLayout>
  );
};

export default Match;
