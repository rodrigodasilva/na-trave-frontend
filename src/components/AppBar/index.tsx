import logo from "@/assets/logo.svg";

import * as S from "./styles";

const AppBar: React.FC = () => {
  return (
    <S.AppBarWrapper>
      <S.AppBarContent>
        <img src={logo} alt="Logo do site" />
      </S.AppBarContent>
    </S.AppBarWrapper>
  );
};

export default AppBar;
