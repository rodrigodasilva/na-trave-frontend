import { ReactComponent as IconMinusCircle } from "@/assets/icons/minus_circle.svg";
import { ReactComponent as IconPlusCircle } from "@/assets/icons/plus_circle.svg";
import Button from "@/components/Button";
import { InputLabel } from "@/components/Input";

import * as S from "./styles";

interface InputQuantityProps {
  value: number;
  onChange: (value: number) => void;
}

const InputQuantity: React.FC<InputQuantityProps> = ({ value, onChange }) => {
  const handlePreviousValue = () => {
    const newValue = value === 1 ? 1 : value - 1;
    onChange(newValue);
  };

  const handleNextValue = () => {
    onChange(value + 1);
  };

  return (
    <>
      <InputLabel htmlFor="quantity" className="mb-8">
        Quantidade
      </InputLabel>
      <S.InputQuantityWrapper>
        <Button
          variant="ghost"
          color="neutral"
          type="button"
          onClick={handlePreviousValue}
        >
          <IconMinusCircle />
        </Button>
        <input disabled name="quantity" value={value} type="number" min="1" />
        <Button
          variant="ghost"
          color="neutral"
          type="button"
          onClick={handleNextValue}
        >
          <IconPlusCircle />
        </Button>
      </S.InputQuantityWrapper>
    </>
  );
};

export default InputQuantity;
