import { useMutation, useQueryClient } from "@tanstack/react-query";

import baseApi from "@/services/baseApi";

interface Match {
  id: number;
  homeTeamScore: string;
  awayTeamScore: string;
}

export function useUpdateMatchScores() {
  const queryClient = useQueryClient();

  const updateMatchScoreMutation = useMutation(
    (hunch: Match) => baseApi.patch("/match", hunch),
    {
      onSettled: () => {
        queryClient.invalidateQueries(["match"]);
        queryClient.invalidateQueries(["all-hunches"]);
        queryClient.invalidateQueries(["seller-hunches"]);
        queryClient.invalidateQueries(["winners-hunches"]);
      },
    }
  );

  return {
    updateMatchScoreMutation,
  };
}
