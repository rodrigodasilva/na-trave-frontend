import { Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "@/assets/icons/arrow_left.svg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Typography from "@/components/Typography";

import * as S from "./styles";

const Login: React.FC = () => {
  return (
    <>
      <S.LoginHeader>
        <Link to="/">
          <Button startIcon={<ArrowLeft />} variant="text" color="neutral">
            Voltar
          </Button>
        </Link>
      </S.LoginHeader>
      <S.LoginForm>
        <S.LoginFormHeader>
          <Typography color="gray-600" size="2xl">
            Login
          </Typography>
        </S.LoginFormHeader>
        <Input label="Email" className="mb-12" />
        <Input label="Password" />

        <S.LoginFormActions>
          <Button variant="text" color="neutral">
            Voltar
          </Button>
          <Button>Acessar</Button>
        </S.LoginFormActions>
      </S.LoginForm>
    </>
  );
};

export default Login;
