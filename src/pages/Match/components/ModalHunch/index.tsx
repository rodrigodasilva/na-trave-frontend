import { ReactComponent as IconMinusCircle } from "@/assets/icons/minus_circle.svg";
import { ReactComponent as IconPlusCircle } from "@/assets/icons/plus_circle.svg";
import Button from "@/components/Button";
import * as Dialog from "@/components/Dialog";
import HunchForm from "@/components/HunchForm";
import Input, { InputLabel } from "@/components/Input";
import Typography from "@/components/Typography";

import * as S from "./styles";

const InputQuantity = () => {
  return (
    <>
      <InputLabel htmlFor="quantity" className="mb-8">
        Quantidade
      </InputLabel>
      <S.InputQuantityWrapper>
        <Button variant="ghost" color="neutral">
          <IconMinusCircle />
        </Button>
        <Input id="quantity" />
        <Button variant="ghost" color="neutral">
          <IconPlusCircle />
        </Button>
      </S.InputQuantityWrapper>
    </>
  );
};

const ModalHunch = () => (
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Novo palpite</Dialog.Title>
      <Dialog.Close />
    </Dialog.Header>
    <Dialog.Body>
      <Typography size="sm" color="gray-500" weight="bold">
        Fase de grupos
      </Typography>
      <Typography size="sm" color="gray-500" weight="normal" className="mb-32">
        27 de outubro, às 13:00h
      </Typography>
      <HunchForm isEditing className="mb-18" />
      <InputQuantity />
      <Input label="Nome" className="mb-12" />
      <Input label="Contato" className="mb-12" />
      <InputLabel className="mb-8">Status do pagamento</InputLabel>
      <S.RadioGroup defaultValue="outcome">
        <S.RadioGrougLabel>
          <S.RadioGroupRadio value="income"></S.RadioGroupRadio>
          Realizado
        </S.RadioGrougLabel>
        <S.RadioGrougLabel>
          <S.RadioGroupRadio value="outcome"></S.RadioGroupRadio>
          Pendente
        </S.RadioGrougLabel>
      </S.RadioGroup>
    </Dialog.Body>
    <Dialog.Footer>
      <Button variant="text">Cancelar</Button>
      <Button>Adicionar</Button>
    </Dialog.Footer>
  </Dialog.Content>
);

export default ModalHunch;
