import { create } from "zustand";
import { persist } from "zustand/middleware"; // 1. Import the persist middleware

interface User {
  firstName: string;
  lastName: string;
}

interface AppState {
  user: User | null;
}

interface AppActions {
  setUser: (firstName: string, lastName: string) => void;
}

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      user: null,

      setUser: (firstName, lastName) => set({ user: { firstName, lastName } }),
    }),
    {
      name: "user-login-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
);
