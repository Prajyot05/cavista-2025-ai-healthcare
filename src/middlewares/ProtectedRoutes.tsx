import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore"; // Import Zustand store

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const user = useAuthStore((state) => state.user);

  return user ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
