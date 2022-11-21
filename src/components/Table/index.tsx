import * as S from "./styles";

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children, ...props }) => {
  return (
    <S.TableOverflow>
      <S.TableWrapper {...props}>{children}</S.TableWrapper>
    </S.TableOverflow>
  );
};

interface TableMessageProps {
  children: React.ReactNode;
}

export const TableMessage: React.FC<TableMessageProps> = ({ children }) => (
  <S.TableMessageWrapper>
    <td colSpan={100}>{children}</td>
  </S.TableMessageWrapper>
);

export default Table;
