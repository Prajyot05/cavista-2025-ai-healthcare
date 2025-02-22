import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <button onClick={handleLogout} className="submit-button">
      Logout
    </button>
  );
};

export default LogoutButton;
