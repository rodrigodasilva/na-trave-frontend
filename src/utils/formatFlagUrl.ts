import { apiBaseURL } from "@/constants/api";

export function formatFlagUrl(name: string) {
  if (!name) return "";
  return `${apiBaseURL}/flags/${name}`;
}
