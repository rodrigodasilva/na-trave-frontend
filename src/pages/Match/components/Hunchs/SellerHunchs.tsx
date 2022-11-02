import { ReactComponent as IconPencil } from "@/assets/icons/pencil.svg";
import { ReactComponent as IconTrash } from "@/assets/icons/trash.svg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Table from "@/components/Table";

import * as S from "./styles";

const SellerHunchs: React.FC = () => {
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
          <tr>
            <td className="text-left">Daniel da Sivla</td>
            <td className="text-left">BRA 2 x 0 ARG</td>
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
          <tr>
            <td className="text-left">João Coutinho</td>
            <td className="text-left">BRA 4 x 0 ARG</td>
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
        </tbody>
      </Table>
    </S.Wrapper>
  );
};

export default SellerHunchs;
