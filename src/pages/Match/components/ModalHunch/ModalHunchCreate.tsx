import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import Button from "@/components/Button";
import * as Dialog from "@/components/Dialog";
import {
  HunchFormBody,
  HunchFormIcon,
  HunchFormWrapper,
  HunchInput,
} from "@/components/HunchForm";
import Input, { InputLabel } from "@/components/Input";
import Spinner from "@/components/Spinner";
import TeamCard from "@/components/TeamCard";
import Typography from "@/components/Typography";
import { useCreateHunch } from "@/hooks/useCreateHunch";
import { formatDate } from "@/utils/dateUtils";

import InputQuantity from "./InputQuantity";
import * as S from "./styles";

interface Match {
  id: number;
  homeTeamId: number;
  awayTeamId: number;
  homeTeamScore: null;
  awayTeamScore: null;
  datetime: string;
  stage: string;
  homeTeam: {
    id: number;
    name: string;
    abbr: string;
    logo: string;
  };
  awayTeam: {
    id: number;
    name: string;
    abbr: string;
    logo: string;
  };
}

interface ModalHunchCreateProps {
  match: Match;
  trigger: React.ReactNode;
}

const newHunchSchema = z.object({
  homeTeamScore: z.string(),
  awayTeamScore: z.string(),
  quantity: z.number(),
  contactName: z.string(),
  contactPhone: z.string(),
  payment: z.enum(["finished", "pending"]),
});

type NewHunchFormInputs = z.infer<typeof newHunchSchema>;

const ModalHunchCreate: React.FC<ModalHunchCreateProps> = ({
  match,
  trigger,
}) => {
  const [modalIsOpened, setModalIsOpened] = useState(false);

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpened]);

  const { control, register, handleSubmit, reset } =
    useForm<NewHunchFormInputs>({
      resolver: zodResolver(newHunchSchema),
      defaultValues: {
        payment: "pending",
        quantity: 1,
      },
    });

  const { addHunchMutation } = useCreateHunch();

  useEffect(() => {
    if (addHunchMutation.isSuccess) {
      setModalIsOpened(false);
    }
  }, [addHunchMutation.isSuccess]);

  const onSubmit = handleSubmit(data => {
    addHunchMutation.mutate({
      matchId: match.id,
      ...data,
    });
  });

  const formattedMatchDatetime = formatDate(
    match?.datetime,
    "DD[ de ]MMMM [ às ] HH:mm[h]"
  );

  return (
    <Dialog.Root open={modalIsOpened} onOpenChange={setModalIsOpened}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Novo palpite</Dialog.Title>
          <Dialog.Close />
        </Dialog.Header>
        <Dialog.Body>
          <Typography size="sm" color="gray-500" weight="bold">
            Fase de grupos
          </Typography>
          <Typography
            size="sm"
            color="gray-500"
            weight="normal"
            className="mb-32"
          >
            {formattedMatchDatetime}
          </Typography>
          <form id="form-create-hunch" onSubmit={onSubmit}>
            <HunchFormWrapper className="mb-18">
              <HunchFormBody>
                <TeamCard team={match.homeTeam} type="home" />
                <HunchInput required {...register("homeTeamScore")} />
                <HunchFormIcon />
                <HunchInput required {...register("awayTeamScore")} />
                <TeamCard team={match.awayTeam} type="away" />
              </HunchFormBody>
            </HunchFormWrapper>

            <Controller
              control={control}
              name="quantity"
              render={({ field }) => {
                return (
                  <InputQuantity
                    value={field.value}
                    onChange={field.onChange}
                  />
                );
              }}
            />

            <Input
              label="Nome"
              className="mb-12"
              {...register("contactName")}
              required
            />
            <Input
              label="Contato"
              className="mb-12"
              {...register("contactPhone")}
              required
            />

            <InputLabel className="mb-8">Status do pagamento</InputLabel>
            <Controller
              control={control}
              name="payment"
              render={({ field }) => {
                return (
                  <S.RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <S.RadioGrougLabel>
                      <S.RadioGroupRadio value="finished"></S.RadioGroupRadio>
                      Realizado
                    </S.RadioGrougLabel>
                    <S.RadioGrougLabel>
                      <S.RadioGroupRadio value="pending"></S.RadioGroupRadio>
                      Pendente
                    </S.RadioGrougLabel>
                  </S.RadioGroup>
                );
              }}
            />
          </form>
        </Dialog.Body>
        <Dialog.Footer>
          <Button
            variant="text"
            color="neutral"
            type="button"
            onClick={() => setModalIsOpened(false)}
          >
            Cancelar
          </Button>
          <Button
            isLoading={addHunchMutation.isLoading}
            form="form-create-hunch"
            loadingIndicator={<Spinner color="gray-100" size="sm" />}
          >
            Adicionar
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ModalHunchCreate;
