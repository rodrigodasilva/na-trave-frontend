// import Input from "@/components/Input";
import { MessageInfo } from "@/components/MessageInfo";
import Spinner from "@/components/Spinner";
import Table from "@/components/Table";
import { usePublicHunches } from "@/hooks/usePublicHunches";

import * as S from "./styles";

interface PublicHunchesProps {
  matchId: string | undefined;
}

const PublicHunches: React.FC<PublicHunchesProps> = ({ matchId }) => {
  const { data: hunches, isLoading, isError } = usePublicHunches(matchId);

  if (isLoading) return <Spinner className="mx-auto" />;
  if (isError)
    return <MessageInfo>Houve um erro ao carregar os palpites</MessageInfo>;
  if (!hunches.length)
    return <MessageInfo>Nenhum palpite encontrado</MessageInfo>;

  return (
    <S.Wrapper>
      {/* <Input
        label="Buscar por:"
        placeholder="Ex: Maria"
        className="mb-16"
        maxWidth="300px"
      /> */}
      <Table>
        <thead>
          <tr>
            <th className="text-left">Nome</th>
            <th className="text-left">Placar</th>
          </tr>
        </thead>
        <tbody>
          {hunches?.length > 0
            ? hunches.map(hunch => (
                <tr key={hunch.id}>
                  <td>{hunch.contactName}</td>
                  <td>
                    {hunch.match.homeTeam.abbr} {hunch.homeTeamScore} x{" "}
                    {hunch.awayTeamScore} {hunch.match.awayTeam.abbr}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </S.Wrapper>
  );
};

export default PublicHunches;
