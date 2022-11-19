import { Link } from "react-router-dom";

import { ReactComponent as IconUserCircle } from "@/assets/icons/user_circle.svg";
import { ReactComponent as Logo } from "@/assets/logo.svg";
import { useAuthentication } from "@/hooks/useAuthentication";

import Typography from "../Typography";
import * as S from "./styles";

const AppBar: React.FC = () => {
  const { session, deleteSession } = useAuthentication();

  return (
    <S.AppBarWrapper>
      <S.AppBarContent>
        <Logo className="logo" />

        {session ? (
          <S.AppBarContentRight>
            <Typography size="sm" color="white" weight="normal">
              {session?.user?.name}
            </Typography>
            <IconUserCircle />
            <Typography
              size="sm"
              color="white"
              role="button"
              className="cursor-pointer"
              onClick={deleteSession}
            >
              Sair
            </Typography>
          </S.AppBarContentRight>
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
