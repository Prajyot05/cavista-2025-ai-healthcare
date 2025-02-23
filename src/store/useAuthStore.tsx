import { create } from "zustand";

// Define the store interface
interface AuthState {
  user: {
    _id: string;
    email: string;
    name: string;
    token: string;
    firstName?: string;
  } | null;
  login: (userData: AuthState["user"]) => void;
  logout: () => void;
  setUser: (updatedUser: any) => void;
}

// Zustand store
export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null").user, // Load user from localStorage
  login: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData)); // Store user in localStorage
    if (userData) set({ user: userData });
  },
  logout: () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    set({ user: null });
  },
  setUser: (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser)); // Update localStorage
    set({ user: updatedUser });
  },
}));
