import * as S from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  maxWidth?: string | number;
}

const Input: React.FC<InputProps> = ({
  label,
  maxWidth = "100%",
  ...props
}) => (
  <S.InputWrapper maxWidth={maxWidth}>
    {label ? <S.InputLabel>{label}</S.InputLabel> : null} <S.Input {...props} />
  </S.InputWrapper>
);

export default Input;
