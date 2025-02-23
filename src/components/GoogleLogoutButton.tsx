import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const GoogleLogoutButton = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <button onClick={handleLogout} className="p-3 bg-gray-400 rounded-md">
      Logout
    </button>
  );
};

export default GoogleLogoutButton;
