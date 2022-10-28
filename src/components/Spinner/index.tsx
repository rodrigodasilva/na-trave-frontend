import * as S from "./styles";

interface SpinnerProps {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = props => {
  return (
    <S.SpinnerWrapper {...props}>
      <span />
      <span />
      <span />
      <span />
    </S.SpinnerWrapper>
  );
};

export default Spinner;
