import { useState } from "react";
import { toast } from "react-toastify";

import baseApi from "@/services/baseApi";

interface ICreateSession {
  email: string;
  password: string;
}

export function useCreateSession() {
  const [status, setStatus] = useState("idle");

  const handleCreateSession = async ({ email, password }: ICreateSession) => {
    try {
      setStatus("loading");
      const response = await baseApi.post("/login", {
        email,
        password,
      });
      return response.data;
    } catch (e: any) {
      setStatus("error");

      const error = e.response?.data?.message || "Erro ao realizar login";
      toast.error(error);
      return null;
    }
  };

  return {
    isLoading: status === "loading",
    isError: status === "error",
    handleCreateSession,
  };
}
