import { useState } from "react";
import { toast } from "react-toastify";

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
  const [status, setStatus] = useState("idle");

  const handleCreateHunch = async (hunch: Hunch) => {
    try {
      setStatus("loading");

      const response = await baseApi.post("/hunch", hunch);
      return response.data as Hunch[];
    } catch (e: any) {
      setStatus("error");

      const error = e.response?.data?.message || "Erro ao criar o palpite";
      toast.error(error);
      return null;
    } finally {
      setStatus("idle");
    }
  };

  return {
    isLoading: status === "loading",
    isError: status === "error",
    handleCreateHunch,
  };
}
