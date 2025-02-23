import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HealthDataUpload from "./pages/HealthDataUpload";
import DoctorProfiles from "./pages/DoctorProfiles";
import CarePlan from "./pages/CarePlan";
import Settings from "./pages/Settings";
import ProtectedRoute from "./middlewares/ProtectedRoutes";
import LoggedOutRoute from "./middlewares/LoggedOutRoutes";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/login"
            element={<LoggedOutRoute element={<Login />} />}
          />
          <Route
            path="/basic-details"
            element={<LoggedOutRoute element={<SignUp />} />}
          />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route
            path="/health-data"
            element={<ProtectedRoute element={<HealthDataUpload />} />}
          />
          <Route
            path="/doctors"
            element={<ProtectedRoute element={<DoctorProfiles />} />}
          />
          <Route
            path="/care-plan"
            element={<ProtectedRoute element={<CarePlan />} />}
          />
          <Route
            path="/settings"
            element={<ProtectedRoute element={<Settings />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
