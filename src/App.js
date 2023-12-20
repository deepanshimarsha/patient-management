import "./App.css";
import PatientList from "./features/patients/Patients";
import WardList from "./features/ward/Ward";
import HospitalStats from "./features/hospital/Hospital";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<PatientList />} />
        <Route path="/ward" element={<WardList />} />
        <Route path="/stats" element={<HospitalStats />} />
      </Routes>
    </div>
  );
}

export default App;
