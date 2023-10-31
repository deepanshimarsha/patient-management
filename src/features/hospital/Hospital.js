import React from "react";
import { useSelector } from "react-redux";

const HospitalStats = () => {
  const hospitalStats = useSelector((state) => state.hospitalStats);

  return (
    <div>
      <h2>Hospital-wide Statistics</h2>
      <p>Total Patients: {hospitalStats.totalPatients}</p>
      <p>Occupancy Rate: {hospitalStats.occupancyRate}</p>
      <p>Average Length of Stay: {hospitalStats.averageLengthOfStay}</p>
      <p>Top Performing Ward: {hospitalStats.topPerformingWard}</p>
      {/* Render other statistics */}
    </div>
  );
};

export default HospitalStats;
