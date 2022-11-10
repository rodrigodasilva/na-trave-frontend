import { Link } from "react-router-dom";

import logo from "@/assets/logo.svg";
import { useAuthentication } from "@/hooks/useAuthentication";

import Typography from "../Typography";
import * as S from "./styles";

const AppBar: React.FC = () => {
  const { session, deleteSession } = useAuthentication();
  console.log({ session });
  return (
    <S.AppBarWrapper>
      <S.AppBarContent>
        <img src={logo} alt="Logo do site" />

        {session ? (
          <Typography
            size="sm"
            color="white"
            role="button"
            className="cursor-pointer"
            onClick={deleteSession}
          >
            Sair
          </Typography>
        ) : (
          <Link to="/login">
            <Typography size="sm" color="white">
              Login
            </Typography>
          </Link>
        )}
      </S.AppBarContent>
    </S.AppBarWrapper>
  );
};

export default AppBar;
