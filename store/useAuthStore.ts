import { create } from "zustand";

interface User {
  email: string;
}

interface AuthState {
  user: User | null;
  onLogin: (user: User) => void;
  onLogout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  onLogin: (user) => set({ user }),

  onLogout: () => set({ user: null }),
}));
