import React from "react";
import { useSelector } from "react-redux";

const PatientList = () => {
  const { list } = useSelector((state) => state.patients);

  // Render logic for displaying patient list

  return (
    <div>
      <h2>Patients</h2>
      {list.map((patient) => (
        <div key={patient.id}>{/* Render patient details */}</div>
      ))}
    </div>
  );
};

export default PatientList;
