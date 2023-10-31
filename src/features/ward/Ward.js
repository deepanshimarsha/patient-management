import React from "react";
import { useSelector } from "react-redux";

const WardList = () => {
  const wards = useSelector((state) => state.wards.list);

  return (
    <div>
      <h2>Wards</h2>
      {wards.map((ward) => (
        <div key={ward.id}>
          <p>Ward Number: {ward.wardNumber}</p>
          <p>Capacity: {ward.capacity}</p>
          <p>Specializations: {ward.specializations.join(", ")}</p>
          {/* Render other ward details */}
        </div>
      ))}
    </div>
  );
};

export default WardList;
