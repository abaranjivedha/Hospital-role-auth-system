import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import DoctorDashboard from "./Components/DoctorDashboard";
import NurseDashboard from "./Components/NurseDashboard";
import ReceptionDashboard from "./Components/ReceptionDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/nurse" element={<NurseDashboard />} />
        <Route path="/reception" element={<ReceptionDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
