import { VEHICLE_TYPES_ENDPOINT } from "./routes";
import type { VehicleType } from "./types";

export const getVehicleTypes = async (): Promise<VehicleType[]> => {
  const response = await fetch(VEHICLE_TYPES_ENDPOINT);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};
