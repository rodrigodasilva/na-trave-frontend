import { useMutation, useQueryClient } from "@tanstack/react-query";

import baseApi from "@/services/baseApi";

interface Hunch {
  id: string;
  homeTeamScore: string;
  awayTeamScore: string;
  contactName: string;
  contactPhone: string;
  payment: "finished" | "pending";
}

export function useUpdateHunch() {
  const queryClient = useQueryClient();

  const updateHunchMutation = useMutation(
    (hunch: Hunch) => baseApi.put("/hunch", hunch),
    {
      onSettled: () => {
        queryClient.invalidateQueries(["all-hunches"]);
        queryClient.invalidateQueries(["seller-hunches"]);
      },
    }
  );

  return {
    updateHunchMutation,
  };
}
