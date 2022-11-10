import { Link, useNavigate, useParams } from "react-router-dom";

import * as MatchCard from "@/components/MatchCard";
import { MessageInfo } from "@/components/MessageInfo";
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
        {data && data?.length > 0 ? (
          data.map(match => (
            <li key={match.id}>
              <MatchCard.Card match={match}>
                <MatchCard.Footer>
                  <Link to={`/match/${match.id}`}>
                    <Typography size="sm" color="primary" weight="normal">
                      Ver detalhes
                    </Typography>
                  </Link>
                </MatchCard.Footer>
              </MatchCard.Card>
            </li>
          ))
        ) : (
          <MessageInfo>
            {isError
              ? "Houve um erro ao carregar as partidas"
              : "Nenhuma partida nesse dia"}
          </MessageInfo>
        )}
      </S.MatchList>
    </>
  );
};

export default Home;
