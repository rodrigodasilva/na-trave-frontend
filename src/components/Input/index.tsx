import * as S from "./styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = props => <S.Input {...props} />;

export default Input;
