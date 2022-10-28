import * as S from "./styles";

type DividerProps = React.HTMLAttributes<HTMLHRElement>;

const Divider: React.FC<DividerProps> = props => {
  return <S.Divider {...props} />;
};

export default Divider;
