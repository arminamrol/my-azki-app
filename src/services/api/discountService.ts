import { DISCOUNTS_ENDPOINT } from "./routes";
import type { Discount } from "./types";

export const getThirdDiscounts = async (): Promise<Discount[]> => {
  const response = await fetch(DISCOUNTS_ENDPOINT);

  if (!response.ok) {
    throw new Error("Failed to fetch discounts");
  }

  const data = await response.json();
  return data;
};
