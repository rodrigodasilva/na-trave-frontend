import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { apiBaseURL } from "@/constants/api";
import { formatDate } from "@/utils/dateUtils";

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

export function useMatches(date: Date) {
  const formattedDate = formatDate(date, "yy-MM-DD");

  return useQuery(["matches", date], () => fetchMatches(formattedDate), {
    keepPreviousData: true,
    staleTime: 5000,
  });
}
