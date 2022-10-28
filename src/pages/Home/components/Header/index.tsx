import logo from "@/assets/logo.svg";

import * as S from "./styles";

export const Header: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <img src={logo} alt="Logo do site" />
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};
