import { Link, useNavigate, useParams } from "react-router-dom";

import * as Card from "@/components/Card";
import { HunchForm } from "@/components/HunchForm";
import { MessageInfo } from "@/components/MessageInfo";
import Spinner from "@/components/Spinner";
import Typography from "@/components/Typography";
import { useMatches } from "@/hooks/useMatches";
import { formatDate, getInitialMatchesDate } from "@/utils/dateUtils";

import { MatchPagination } from "./components/MatchPagination";
import * as S from "./styles";

const Home: React.FC = () => {
  const { date } = useParams();
  const navigate = useNavigate();

  const currentDate = date || getInitialMatchesDate().toISOString();

  const { data, isLoading, isError } = useMatches(currentDate);

  const handleDateChange = (newDate: Date) => {
    const formattedDate = formatDate(newDate, "yy-MM-DD");
    navigate(`/${formattedDate}`);
  };

  return (
    <>
      <MatchPagination
        isLoading={isLoading}
        currentDate={currentDate}
        onDateChange={handleDateChange}
      />
      <S.MatchList>
        {isLoading && <Spinner className="mx-auto" />}

        {!isLoading && !!data && data?.length > 0
          ? data.map(match => (
              <li key={match.id}>
                <Card.Card>
                  <Card.Header>
                    <Typography size="md" color="gray-500" weight="bold">
                      {match.stage}
                    </Typography>
                    <Typography
                      size="md"
                      color="gray-500"
                      weight="normal"
                      as="span"
                    >
                      {formatDate(match.datetime, "HH:mm[h]")}
                    </Typography>
                  </Card.Header>

                  <HunchForm match={match} className="mb-18" />

                  <Card.Footer>
                    <Link to={`/match/${match.id}`}>
                      <Typography size="sm" color="primary" weight="normal">
                        Ver detalhes
                      </Typography>
                    </Link>
                  </Card.Footer>
                </Card.Card>
              </li>
            ))
          : null}

        {!isLoading && data && data?.length === 0 ? (
          <MessageInfo>
            {isError
              ? "Houve um erro ao carregar as partidas"
              : "Nenhuma partida nesse dia"}
          </MessageInfo>
        ) : null}
      </S.MatchList>
    </>
  );
};

export default Home;
