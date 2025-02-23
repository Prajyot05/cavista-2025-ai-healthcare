import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const LoggedOutRoute = ({ element }: { element: JSX.Element }) => {
  const user = useAuthStore((state) => state.user);
  return user ? (
    user.firstName ? (
      <Navigate to="/" replace />
    ) : (
      <Navigate to="/basic-details" replace />
    )
  ) : (
    element
  );
};

export default LoggedOutRoute;
