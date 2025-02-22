import { create } from "zustand";

// Define the store interface
interface AuthState {
  user: {
    id: string;
    email: string;
    name: string;
    token: string;
  } | null;
  login: (userData: AuthState["user"]) => void;
  logout: () => void;
}

// Zustand store
export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"), // Load user from localStorage
  login: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData)); // Store user in localStorage
    set({ user: userData });
  },
  logout: () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    set({ user: null });
  },
}));
