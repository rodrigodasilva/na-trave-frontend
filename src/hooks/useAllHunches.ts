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

interface Hunch {
  id: string;
  homeTeamScore: number;
  awayTeamScore: number;
  contactName: string;
  won: boolean;
  createdAt: string;
  match: Match;
}

async function fetchAllHunches(matchId: string) {
  const res = await baseApi.get(`/hunch/match/${matchId}`);
  return res.data as Hunch[];
}

export function useAllHunches(matchId: string | undefined = "") {
  return useQuery(["all-hunches", matchId], () => fetchAllHunches(matchId), {
    enabled: !!matchId,
  });
}
