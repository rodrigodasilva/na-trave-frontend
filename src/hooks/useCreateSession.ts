import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

import { apiBaseURL } from "@/constants/api";

interface ICreateSession {
  email: string;
  password: string;
}

export function useCreateSession() {
  const [status, setStatus] = useState("idle");

  const handleCreateSession = async ({ email, password }: ICreateSession) => {
    try {
      setStatus("loading");
      const response = await axios.post(`${apiBaseURL}/v1/login`, {
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
