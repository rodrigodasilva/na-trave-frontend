import { Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "@/assets/icons/arrow_left.svg";
import { ReactComponent as IconPlus } from "@/assets/icons/plus.svg";
import AppBar from "@/components/AppBar";
import Button from "@/components/Button";
import * as Dialog from "@/components/Dialog";
import * as MatchCard from "@/components/MatchCard";
import * as Tabs from "@/components/Tabs";
import DefaultLayout from "@/layouts/Default";

import AllHunchs from "./components/Hunchs/AllHunchs.";
import SellerHunchs from "./components/Hunchs/SellerHunchs";
import ModalHunch from "./components/ModalHunch";
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
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button startIcon={<IconPlus width={12} />}>Nova aposta</Button>
          </Dialog.Trigger>
          <ModalHunch />
        </Dialog.Root>
      </S.Header>
      <MatchCard.Card match={data} variant="clean" className="mb-40" />
      <Tabs.Root defaultValue="all" orientation="horizontal">
        <Tabs.List aria-label="tabs">
          <Tabs.Trigger value="all">Todos</Tabs.Trigger>
          <Tabs.Trigger value="by-seller">Feitos por mim</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="all">
          <AllHunchs />
        </Tabs.Content>
        <Tabs.Content value="by-seller">
          <SellerHunchs />
        </Tabs.Content>
      </Tabs.Root>
    </DefaultLayout>
  );
};

export default Match;
