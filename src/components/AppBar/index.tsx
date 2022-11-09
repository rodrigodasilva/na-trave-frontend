import { Link } from "react-router-dom";

import logo from "@/assets/logo.svg";

import Typography from "../Typography";
import * as S from "./styles";

const AppBar: React.FC = () => {
  return (
    <S.AppBarWrapper>
      <S.AppBarContent>
        <img src={logo} alt="Logo do site" />
        <Link to="/login">
          <Typography size="sm" color="white">
            Login
          </Typography>
        </Link>
      </S.AppBarContent>
    </S.AppBarWrapper>
  );
};

export default AppBar;
