import { create } from "zustand";

interface User {
  firstName: string;
  lastName: string;
}

interface UserState {
  user: User | null;
}

interface UserActions {
  setUser: (firstName: string, lastName: string) => void;
}

export const useAppStore = create<UserState & UserActions>((set) => ({
  user: null,
  setUser: (firstName, lastName) => set({ user: { firstName, lastName } }),
}));
