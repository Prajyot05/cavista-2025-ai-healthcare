import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import HealthDataUpload from "./pages/HealthDataUpload";
import DoctorProfiles from "./pages/DoctorProfiles";
import CarePlan from "./pages/CarePlan";
import Settings from "./pages/Settings";
import DoctorInfo from "./pages/DoctorInfo";
import PersonalInformation from "./pages/PersonalInformation";
import UserId from "./pages/UserId";
import Diagnosis from "./pages/Diagnosis";
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/health-data" element={<HealthDataUpload />} />
          <Route path="/doctors" element={<DoctorProfiles />} />
          <Route path="/care-plan" element={<CarePlan />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/doctor-info" element={<DoctorInfo />} />
          <Route path="/doctor/:id" element={<DoctorInfo />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/personal-information" element={<PersonalInformation />} />
          <Route path="/user-id" element={<UserId />} />
            <Route path="/diagnosis" element={<Diagnosis diagnosis={{
              condition: '',
              doctor: '',
              lastUpdated: '',
              medications: [],
              progressTimeline: []
            }} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
