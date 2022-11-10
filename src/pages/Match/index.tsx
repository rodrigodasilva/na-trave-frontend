import { Link, useParams } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "@/assets/icons/arrow_left.svg";
import { ReactComponent as IconPlus } from "@/assets/icons/plus.svg";
import Button from "@/components/Button";
import * as Dialog from "@/components/Dialog";
import * as MatchCard from "@/components/MatchCard";
import { MessageInfo } from "@/components/MessageInfo";
import Spinner from "@/components/Spinner";
import * as Tabs from "@/components/Tabs";
import { useMatch } from "@/hooks/useMatch";

import AllHunchs from "./components/Hunchs/AllHunchs.";
import SellerHunchs from "./components/Hunchs/SellerHunchs";
import ModalHunch from "./components/ModalHunch";
import * as S from "./styles";

const Match: React.FC = () => {
  const { id } = useParams();

  const { data: match, isLoading, isError } = useMatch(id);

  if (isLoading) return <Spinner className="mx-auto" />;
  if (isError)
    return <MessageInfo>Houve um erro ao carregar a partida</MessageInfo>;
  if (!match) return <MessageInfo>Partida não encontrada</MessageInfo>;

  return (
    <>
      <S.Header>
        <Link to="/">
          <Button startIcon={<ArrowLeft />} variant="text" color="neutral">
            Voltar
          </Button>
        </Link>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button startIcon={<IconPlus width={12} />}>Novo palpite</Button>
          </Dialog.Trigger>
          <ModalHunch />
        </Dialog.Root>
      </S.Header>
      <MatchCard.Card
        match={match}
        variant="clean"
        className="mb-40"
        dateFormat="DD[ de ]MMMM [ às ] HH:mm[h]"
      />
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
    </>
  );
};

export default Match;
