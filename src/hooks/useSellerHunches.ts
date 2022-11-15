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
  payment: string;
  createdAt: string;
  match: Match;
}

async function fetchSellerHunches(matchId: string, sellerId: string) {
  const res = await baseApi.get(`/hunch/match/${matchId}/seller/${sellerId}`);
  return res.data as Hunch[];
}

export function useSellerHunches(
  matchId: string | undefined = "",
  sellerId: string
) {
  return useQuery(
    ["seller-hunches", matchId],
    () => fetchSellerHunches(matchId, sellerId),
    {
      enabled: !!matchId,
    }
  );
}
