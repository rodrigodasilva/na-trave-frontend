import { useState } from "react";
import { Link } from "react-router-dom";

import AppBar from "@/components/AppBar";
import * as MatchCard from "@/components/MatchCard";
import Typography from "@/components/Typography";
import { useMatches } from "@/hooks/useMatches";
import DefaultLayout from "@/layouts/Default";
import { getInitialMatchesDate } from "@/utils/dateUtils";

import { MatchPagination } from "./components/MatchPagination";
import * as S from "./styles";

const Home: React.FC = () => {
  const [date, setDate] = useState(getInitialMatchesDate());

  const { data, isLoading, isError } = useMatches(date);

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <DefaultLayout header={<AppBar />}>
      <MatchPagination
        isLoading={isLoading}
        currentDate={date}
        onDateChange={handleDateChange}
      />
      <S.MatchList>
        {data && data?.length > 0 ? (
          data.map(match => (
            <li key={match.id}>
              <MatchCard.Card match={match}>
                <MatchCard.Footer>
                  <Link to="/match">
                    <Typography size="sm" color="primary" weight="normal">
                      Ver detalhes
                    </Typography>
                  </Link>
                </MatchCard.Footer>
              </MatchCard.Card>
            </li>
          ))
        ) : (
          <S.MatchMessageInfo>
            {isError
              ? "Houve um erro ao carregar as partidas"
              : "Nenhuma partida nesse dia"}
          </S.MatchMessageInfo>
        )}
      </S.MatchList>
    </DefaultLayout>
  );
};

export default Home;
