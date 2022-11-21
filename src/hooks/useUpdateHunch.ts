import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

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
      onError: (err: any) => {
        const message =
          err?.response?.data?.message || "Houve um erro ao editar o palpite";
        toast.error(message);
      },
    }
  );

  return {
    updateHunchMutation,
  };
}
