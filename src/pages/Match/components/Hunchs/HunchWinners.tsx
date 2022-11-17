import { MessageInfo } from "@/components/MessageInfo";
import Spinner from "@/components/Spinner";
import Table, { TableMessage } from "@/components/Table";
import Typography from "@/components/Typography";
import { useHunchWinners } from "@/hooks/useHunchWinners";

import * as S from "./styles";

interface HunchWinnersProps {
  matchId: string | undefined;
  className?: string;
}

const HunchWinners: React.FC<HunchWinnersProps> = ({ matchId, className }) => {
  const { data: hunches, isLoading, isError } = useHunchWinners(matchId);

  if (isLoading) return <Spinner className="mx-auto" />;
  if (isError)
    return <MessageInfo>Houve um erro ao carregar os ganhadores</MessageInfo>;

  return (
    <S.Wrapper className={className}>
      <Typography size="lg" weight="bold" className="mb-8">
        {hunches?.length === 1 ? "1 Ganhador" : `${hunches.length} Ganhadores`}
      </Typography>
      <Table>
        <thead>
          <tr>
            <th className="text-left">Nome</th>
            <th className="text-left">Placar</th>
          </tr>
        </thead>
        <tbody>
          {hunches?.length > 0 ? (
            hunches.map(hunch => (
              <tr key={hunch.id}>
                <td>{hunch.contactName}</td>
                <td>
                  {hunch.match.homeTeam.abbr} {hunch.homeTeamScore} x{" "}
                  {hunch.awayTeamScore} {hunch.match.awayTeam.abbr}
                </td>
              </tr>
            ))
          ) : (
            <TableMessage>Nenhum ganhador</TableMessage>
          )}
        </tbody>
      </Table>
    </S.Wrapper>
  );
};

export default HunchWinners;
