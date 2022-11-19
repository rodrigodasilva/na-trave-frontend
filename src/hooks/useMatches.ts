import { useQuery } from "@tanstack/react-query";

import baseApi from "@/services/baseApi";

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
  const res = await baseApi.get(`/match?date=${date}`);
  return res.data as Match[];
}

export function useMatches(date: string) {
  return useQuery(["matches", date], () => fetchMatches(date), {
    // keepPreviousData: true,
    staleTime: 5000,
  });
}
