import "./App.css";
import PatientList from "./features/patients/Patients";
import WardList from "./features/ward/Ward";
import HospitalStats from "./features/hospital/Hospital";

function App() {
  return (
    <div className="App">
      <h1>Patient Management Application</h1>
      <PatientList />
      <WardList />
      <HospitalStats />
    </div>
  );
}

export default App;
