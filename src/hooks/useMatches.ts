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

async function fetchMatches(date: string) {
  const res = await axios.get(`${apiBaseURL}/v1/match?date=${date}`);
  return res.data as Match[];
}

export function useMatches(date: string) {
  return useQuery(["matches", date], () => fetchMatches(date), {
    keepPreviousData: true,
    staleTime: 5000,
  });
}
