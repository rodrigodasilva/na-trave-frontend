import * as S from "./styles";

interface DefaultLayoutProps {
  header?: React.ReactNode;
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ header, children }) => {
  return (
    <S.DefaultLayoutWrapper>
      {header ? header : null}
      <S.DefaultLayoutContent>
        <S.DefaultLayoutChildren>{children}</S.DefaultLayoutChildren>
      </S.DefaultLayoutContent>
    </S.DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
