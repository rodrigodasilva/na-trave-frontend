import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { apiBaseURL } from "@/constants/api";

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

async function fetchMatchById(id: string) {
  const res = await axios.get(`${apiBaseURL}/v1/match/${id}`);
  return res.data as Match;
}

export function useMatch(id: string | undefined = "") {
  return useQuery(["match", id], () => fetchMatchById(id), { enabled: !!id });
}
