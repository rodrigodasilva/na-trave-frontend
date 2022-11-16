import { Link, useParams } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "@/assets/icons/arrow_left.svg";
import { ReactComponent as IconPlus } from "@/assets/icons/plus.svg";
import Button from "@/components/Button";
import { HunchForm } from "@/components/HunchForm";
import { MessageInfo } from "@/components/MessageInfo";
import Spinner from "@/components/Spinner";
import * as Tabs from "@/components/Tabs";
import Typography from "@/components/Typography";
import { useAuthentication } from "@/hooks/useAuthentication";
import { useMatch } from "@/hooks/useMatch";
import { formatDate } from "@/utils/dateUtils";

import AllHunches from "./components/Hunchs/AllHunches";
import PublicHunches from "./components/Hunchs/PublicHunches";
import SellerHunches from "./components/Hunchs/SellerHunches";
import ModalHunchCreate from "./components/ModalHunch/ModalHunchCreate";
import * as S from "./styles";

const Match: React.FC = () => {
  const { id: matchId } = useParams();

  const { data: match, isLoading, isError } = useMatch(matchId);

  const { session } = useAuthentication();

  if (isLoading) return <Spinner className="mx-auto" />;
  if (isError)
    return <MessageInfo>Houve um erro ao carregar a partida</MessageInfo>;
  if (!match) return <MessageInfo>Partida não encontrada</MessageInfo>;

  const formattedMatchDatetime = formatDate(match?.datetime, "yy-MM-DD");

  const isSellerUser = session?.user?.role === "seller";
  const hasLoggedUser = !!session?.user;
  const isAdminUser = session?.user.role === "admin";

  return (
    <>
      <S.Header>
        <Link to={`/${formattedMatchDatetime}`}>
          <Button startIcon={<ArrowLeft />} variant="text" color="neutral">
            Voltar
          </Button>
        </Link>
        {isSellerUser ? (
          <ModalHunchCreate
            match={match}
            trigger={
              <Button startIcon={<IconPlus width={12} />}>Novo palpite</Button>
            }
          />
        ) : null}
      </S.Header>

      <S.FormWrapper>
        <S.FormHeader>
          <Typography size="md" color="gray-500" weight="bold">
            {match.stage}
          </Typography>
          <Typography size="md" color="gray-500" weight="normal" as="span">
            {formatDate(match.datetime, "HH:mm[h]")}
          </Typography>
        </S.FormHeader>
        <HunchForm match={match} allowEditing={isAdminUser} />
      </S.FormWrapper>

      {hasLoggedUser ? (
        <Tabs.Root defaultValue="all" orientation="horizontal">
          <Tabs.List aria-label="tabs">
            <Tabs.Trigger value="all">Todos</Tabs.Trigger>
            <Tabs.Trigger value="by-seller">Feitos por mim</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="all">
            <AllHunches matchId={matchId} />
          </Tabs.Content>
          <Tabs.Content value="by-seller">
            <SellerHunches matchId={matchId} sellerId={session.user.id} />
          </Tabs.Content>
        </Tabs.Root>
      ) : (
        <PublicHunches matchId={matchId} />
      )}
    </>
  );
};

export default Match;
