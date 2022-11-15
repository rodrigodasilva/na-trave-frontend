import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import Button from "@/components/Button";
import * as Dialog from "@/components/Dialog";
import {
  HunchFormIcon,
  HunchFormWrapper,
  HunchInput,
} from "@/components/HunchForm";
import Input, { InputLabel } from "@/components/Input";
import Spinner from "@/components/Spinner";
import TeamCard from "@/components/TeamCard";
import Typography from "@/components/Typography";
import { useUpdateHunch } from "@/hooks/useUpdateHunch";
import { formatDate } from "@/utils/dateUtils";

import * as S from "./styles";

interface Match {
  id: number;
  homeTeamScore: number | null | string;
  awayTeamScore: number | null | string;
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

interface Hunch {
  id: string;
  homeTeamScore: number;
  awayTeamScore: number;
  contactName: string;
  contactPhone: string;
  payment: "finished" | "pending";
  createdAt: string;
  match: Match;
}

interface ModalHunchUpdateProps {
  hunch: Hunch;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const updateHunchSchema = z.object({
  homeTeamScore: z.string(),
  awayTeamScore: z.string(),
  contactName: z.string(),
  contactPhone: z.string(),
  payment: z.enum(["finished", "pending"]),
});

type NewHunchFormInputs = z.infer<typeof updateHunchSchema>;

const ModalHunchUpdate: React.FC<ModalHunchUpdateProps> = ({
  hunch,
  isOpen,
  onOpenChange,
}) => {
  const { control, register, handleSubmit, reset } =
    useForm<NewHunchFormInputs>({
      resolver: zodResolver(updateHunchSchema),
      defaultValues: {
        homeTeamScore: hunch.homeTeamScore ? String(hunch.homeTeamScore) : "0",
        awayTeamScore: hunch.awayTeamScore ? String(hunch.awayTeamScore) : "0",
        contactName: hunch.contactName,
        contactPhone: hunch.contactPhone,
        payment: hunch.payment,
      },
    });

  const { updateHunchMutation } = useUpdateHunch();

  useEffect(() => {
    if (updateHunchMutation.isSuccess) {
      onOpenChange(false);
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateHunchMutation.isSuccess]);

  const onSubmit = handleSubmit(data => {
    console.log({ data });
    updateHunchMutation.mutate({
      id: hunch.id,
      ...data,
    });
  });

  const formattedMatchDatetime = formatDate(
    hunch?.match?.datetime || "",
    "DD[ de ]MMMM [ às ] HH:mm[h]"
  );

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Editar palpite</Dialog.Title>
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
          <form id="form-update-hunch" onSubmit={onSubmit}>
            <HunchFormWrapper className="mb-18">
              <TeamCard team={hunch.match.homeTeam} type="home" />
              <HunchInput
                required
                defaultValue={hunch.homeTeamScore ?? ""}
                {...register("homeTeamScore")}
              />
              <HunchFormIcon />
              <HunchInput
                required
                defaultValue={hunch.awayTeamScore ?? ""}
                {...register("awayTeamScore")}
              />
              <TeamCard team={hunch.match.awayTeam} type="away" />
            </HunchFormWrapper>

            <Input
              label="Nome"
              className="mb-12"
              defaultValue={hunch.contactName}
              {...register("contactName")}
              required
            />
            <Input
              label="Contato"
              className="mb-12"
              defaultValue={hunch.contactPhone}
              {...register("contactPhone")}
              required
            />

            <InputLabel className="mb-8">Status do pagamento</InputLabel>
            <Controller
              control={control}
              name="payment"
              defaultValue={hunch.payment}
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
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>
          <Button
            isLoading={updateHunchMutation.isLoading}
            form="form-update-hunch"
            loadingIndicator={<Spinner color="gray-100" size="sm" />}
          >
            Atualizar
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ModalHunchUpdate;
