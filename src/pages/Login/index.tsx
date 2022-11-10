import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "@/assets/icons/arrow_left.svg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Typography from "@/components/Typography";
import { useAuthentication } from "@/hooks/useAuthentication";
import { useCreateSession } from "@/hooks/useCreateSession";

import * as S from "./styles";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { handleCreateSession, isLoading } = useCreateSession();
  const { saveSession } = useAuthentication();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const session = await handleCreateSession({ email, password });
    saveSession(session);
  });

  return (
    <>
      <S.LoginHeader>
        <Link to="/">
          <Button startIcon={<ArrowLeft />} variant="text" color="neutral">
            Voltar
          </Button>
        </Link>
      </S.LoginHeader>
      <S.LoginForm onSubmit={onSubmit}>
        <S.LoginFormHeader>
          <Typography color="gray-600" size="2xl">
            Login
          </Typography>
        </S.LoginFormHeader>
        <Input
          label="Email"
          className="mb-12"
          {...register("email")}
          required
        />
        <Input
          label="Password"
          {...register("password")}
          required
          type={"password"}
        />

        <S.LoginFormActions>
          <Button variant="text" color="neutral" type="button">
            Voltar
          </Button>
          <Button disabled={isLoading}>Acessar</Button>
        </S.LoginFormActions>
      </S.LoginForm>
    </>
  );
};

export default Login;
