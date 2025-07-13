import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storageKeys } from "../constants/storageKeys";
import type { SelectOption } from "../components/core/Select.tsx";

interface StoredVehicleInfo {
  vehicleType: SelectOption | null;
  vehicleUsage: SelectOption | null;
}
interface StoredCompany {
  previousInsurer: SelectOption | null;
}
interface StoredDiscounts {
  thirdPartyDiscount: SelectOption | null;
  driverAccidentDiscount: SelectOption | null;
}
interface User {
  firstName: string;
  lastName: string;
}

interface AppState {
  user: User | null;
  vehicleInfo: StoredVehicleInfo | null;
  selectedCompany: StoredCompany | null;
  selectedDiscounts: StoredDiscounts | null;
}

const initialState: AppState = {
  user: null,
  vehicleInfo: null,
  selectedCompany: null,
  selectedDiscounts: null,
};

interface AppActions {
  setUser: (firstName: string, lastName: string) => void;
  setVehicleInfo: (data: StoredVehicleInfo) => void;
  setSelectedCompany: (data: StoredCompany) => void;
  setSelectedDiscounts: (data: StoredDiscounts) => void;
  logout: () => void;
}

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      ...initialState,
      setVehicleInfo: (data) => set({ vehicleInfo: data }),
      setSelectedCompany: (data) => set({ selectedCompany: data }),
      setSelectedDiscounts: (data) => set({ selectedDiscounts: data }),
      setUser: (firstName, lastName) => set({ user: { firstName, lastName } }),
      logout: () => set(initialState),
    }),
    {
      name: storageKeys.ZUSTAND_STORAGE_KEY,
      partialize: (state) => ({ user: state.user }),
    }
  )
);
