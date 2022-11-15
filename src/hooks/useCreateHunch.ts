import { useMutation, useQueryClient } from "@tanstack/react-query";

import baseApi from "@/services/baseApi";

interface Hunch {
  matchId: number;
  homeTeamScore: string;
  awayTeamScore: string;
  quantity: number;
  contactName: string;
  contactPhone: string;
  payment: "finished" | "pending";
}

export function useCreateHunch() {
  const queryClient = useQueryClient();

  const addHunchMutation = useMutation(
    (hunch: Hunch) => baseApi.post("/hunch", hunch),
    {
      onSettled: () => {
        queryClient.invalidateQueries(["all-hunches"]);
        queryClient.invalidateQueries(["seller-hunches"]);
      },
    }
  );

  return {
    addHunchMutation,
  };
}
