import Input from "@/components/Input";
import Table from "@/components/Table";

import * as S from "./styles";

const AllHunchs: React.FC = () => {
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
            <th>Nome</th>
            <th>Placar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daniel da Sivla</td>
            <td>BRA 2 x 0 ARG</td>
          </tr>
          <tr>
            <td>João Coutinho</td>
            <td>BRA 4 x 0 ARG</td>
          </tr>
          <tr>
            <td>João Coutinho</td>
            <td>BRA 4 x 0 ARG</td>
          </tr>
          <tr>
            <td>João Coutinho</td>
            <td>BRA 4 x 0 ARG</td>
          </tr>
          <tr>
            <td>João Coutinho</td>
            <td>BRA 4 x 0 ARG</td>
          </tr>
        </tbody>
      </Table>
    </S.Wrapper>
  );
};

export default AllHunchs;
