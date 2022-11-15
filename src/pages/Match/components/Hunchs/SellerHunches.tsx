import { ReactComponent as IconPencil } from "@/assets/icons/pencil.svg";
import { ReactComponent as IconTrash } from "@/assets/icons/trash.svg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { MessageInfo } from "@/components/MessageInfo";
import Spinner from "@/components/Spinner";
import Table from "@/components/Table";
import { useSellerHunches } from "@/hooks/useSellerHunches";

import * as S from "./styles";

interface SellerHunchesProps {
  matchId: string | undefined;
  sellerId: string;
}

const SellerHunches: React.FC<SellerHunchesProps> = ({ matchId, sellerId }) => {
  const {
    data: hunches,
    isLoading,
    isError,
  } = useSellerHunches(matchId, sellerId);

  if (isLoading) return <Spinner className="mx-auto" />;
  if (isError)
    return <MessageInfo>Houve um erro ao carregar os palpites</MessageInfo>;
  if (!hunches.length)
    return <MessageInfo>Nenhum palpite encontrado</MessageInfo>;

  return (
    <S.Wrapper>
      <Input
        label="Buscar por:"
        placeholder="Ex: Maria"
        className="mb-16"
        maxWidth="300px"
      />
      <Table>
        <thead>
          <tr>
            <th className="text-left">Nome</th>
            <th className="text-left">Placar</th>
            <th className="text-center">#</th>
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
                  <S.TableTdActions>
                    <Button
                      variant="ghost"
                      color="blue"
                      size="sm"
                      startIcon={<IconPencil width={10} />}
                    >
                      Editar
                    </Button>
                    <Button variant="ghost" size="sm" startIcon={<IconTrash />}>
                      Deletar
                    </Button>
                  </S.TableTdActions>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </S.Wrapper>
  );
};

export default SellerHunches;
