import { COMPANIES_ENDPOINT } from "./routes";
import type { InsuranceCompany } from "./types";

export const getInsuranceCompanies = async (): Promise<InsuranceCompany[]> => {
  const response = await fetch(COMPANIES_ENDPOINT);

  if (!response.ok) {
    throw new Error("Failed to fetch insurance companies");
  }

  const data = await response.json();
  return data;
};
