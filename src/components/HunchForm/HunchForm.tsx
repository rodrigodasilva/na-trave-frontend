import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { ReactComponent as IconPencil } from "@/assets/icons/pencil.svg";
import { useUpdateMatchScores } from "@/hooks/useUpdateMatchScores";

import Button from "../Button";
import Spinner from "../Spinner";
import TeamCard from "../TeamCard";
import { HunchFormIcon } from ".";
import HunchInput from "./HunchInput";
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

interface HunchFormProps extends React.HTMLAttributes<HTMLDivElement> {
  allowEditing?: boolean;
  match: Match;
}

const hunchScoresSchema = z.object({
  homeTeamScore: z.string(),
  awayTeamScore: z.string(),
});

type HunchScoreInputs = z.infer<typeof hunchScoresSchema>;

export const HunchForm: React.FC<HunchFormProps> = ({
  allowEditing = false,
  match,
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const { updateMatchScoreMutation } = useUpdateMatchScores();

  const { register, handleSubmit } = useForm<HunchScoreInputs>({
    resolver: zodResolver(hunchScoresSchema),
    defaultValues: {
      homeTeamScore:
        match.homeTeamScore !== null ? String(match.homeTeamScore) : "",
      awayTeamScore:
        match.awayTeamScore !== null ? String(match.awayTeamScore) : "",
    },
  });

  useEffect(() => {
    if (updateMatchScoreMutation.isSuccess) {
      setIsEditing(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateMatchScoreMutation.isSuccess]);

  const onSubmit = handleSubmit(data => {
    updateMatchScoreMutation.mutate({
      id: match.id,
      homeTeamScore: data.homeTeamScore,
      awayTeamScore: data.awayTeamScore,
    });
  });

  return (
    <S.HunchFormWrapper {...props}>
      <S.HunchForm onSubmit={onSubmit}>
        <S.HunchFormBody>
          <TeamCard team={match.homeTeam} type="home" />
          <HunchInput
            required
            defaultValue={match.homeTeamScore ?? ""}
            disabled={!isEditing}
            {...register("homeTeamScore")}
          />
          <HunchFormIcon />
          <HunchInput
            required
            defaultValue={match.awayTeamScore ?? ""}
            disabled={!isEditing}
            {...register("awayTeamScore")}
          />
          <TeamCard team={match.awayTeam} type="away" />
        </S.HunchFormBody>
        {allowEditing && !isEditing ? (
          <S.HunchFormFooter>
            <Button
              variant="ghost"
              color="neutral"
              startIcon={<IconPencil width={10} />}
              type="button"
              onClick={() => setIsEditing(true)}
            >
              Editar
            </Button>
          </S.HunchFormFooter>
        ) : null}
        {isEditing ? (
          <S.HunchFormFooter>
            <Button
              startIcon={<IconPencil width={10} />}
              isLoading={updateMatchScoreMutation.isLoading}
              loadingIndicator={<Spinner color="gray-100" size="sm" />}
            >
              Salvar
            </Button>
          </S.HunchFormFooter>
        ) : null}
      </S.HunchForm>
    </S.HunchFormWrapper>
  );
};
