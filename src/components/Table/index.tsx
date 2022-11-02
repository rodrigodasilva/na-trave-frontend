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

export default Table;
