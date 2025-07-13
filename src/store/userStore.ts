import { create } from "zustand";
import { persist } from "zustand/middleware"; // 1. Import the persist middleware
import { storageKeys } from "../constants/storageKeys";

interface User {
  firstName: string;
  lastName: string;
}

interface AppState {
  user: User | null;
}

interface AppActions {
  setUser: (firstName: string, lastName: string) => void;
  logout: () => void;
}

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      user: null,

      setUser: (firstName, lastName) => set({ user: { firstName, lastName } }),
      logout: () => set({ user: null }),
    }),
    {
      name: storageKeys.ZUSTAND_STORAGE_KEY,
      partialize: (state) => ({ user: state.user }),
    }
  )
);
