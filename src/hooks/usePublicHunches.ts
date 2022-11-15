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
  createdAt: string;
  match: Match;
}

async function fetchPublicHunches(matchId: string) {
  const res = await baseApi.get(`/public/hunch/match/${matchId}`);
  return res.data as Hunch[];
}

export function usePublicHunches(matchId: string | undefined = "") {
  return useQuery(
    ["public-hunches", matchId],
    () => fetchPublicHunches(matchId),
    {
      enabled: !!matchId,
    }
  );
}
