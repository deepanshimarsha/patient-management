import React from "react";
import { useSelector } from "react-redux";

const HospitalStats = () => {
  const wardList = useSelector((state) => state.wards.wardList);
  const patientList = useSelector((state) => state.patients.patientList);

  var totalWardCapacity = wardList.reduce(
    (total, ward) => total + ward.capacity,
    0
  );
  var currentOccupancy = (patientList.length / totalWardCapacity) * 100;
  var averageLengthOfStay = 7;
  var topPerformingWard = wardList.reduce((prevWard, currentWard) =>
    prevWard.capacity > currentWard.capacity ? prevWard : currentWard
  );
  return (
    <div>
      <h2>Hospital-wide Statistics</h2>
      <p>Total Patients: {patientList.length}</p>
      <p>Occupancy Rate: {currentOccupancy.toFixed(2) + "%"}</p>
      <p>Average Length of Stay: {averageLengthOfStay}</p>
      <p>
        Top Performing Ward: {topPerformingWard.wardNumber}{" "}
        {topPerformingWard.specialization}
      </p>
      {/* Render other statistics */}
    </div>
  );
};

export default HospitalStats;
