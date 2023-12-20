import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addWard, deleteWard, editWard } from "./wardSlice";
import { v4 as uuid } from "uuid";

const WardList = () => {
  const wards = useSelector((state) => state.wards.wardList);

  const [ward, setWard] = useState({
    wardNumber: "",
    capacity: "",
    specialization: "",
  });

  const [edit, setEdit] = useState(null);
  const [editedWard, setEditedWard] = useState();
  const dispatch = useDispatch();

  const handleAddWard = (e) => {
    e.preventDefault();
    dispatch(addWard({ ...ward, id: uuid() }));
  };

  const handleDelete = (wardId) => {
    dispatch(deleteWard(wardId));
  };

  return (
    <div>
      <h2>Wards</h2>
      <form className="form" onSubmit={(e) => handleAddWard(e)}>
        <input
          type="number"
          placeholder="enter ward number"
          required
          value={ward.wardNumber}
          onChange={(e) => setWard({ ...ward, wardNumber: e.target.value })}
        />
        <input
          type="number"
          placeholder="enter capacity"
          required
          value={ward.capacity}
          onChange={(e) => setWard({ ...ward, capacity: e.target.value })}
        />
        <input
          type="text"
          placeholder="enter specialization"
          required
          value={ward.specialization}
          onChange={(e) => setWard({ ...ward, specialization: e.target.value })}
        />

        <button type="submit">Add</button>
      </form>
      <div className="patient-list">
        {wards.map((ward) => {
          return (
            <div>
              {!edit ? (
                <div key={ward.id} className="patient-card">
                  <div>Ward Number: {ward.wardNumber}</div>
                  <div>Capacity: {ward.capacity}</div>
                  <div>Specializations: {ward.specialization}</div>
                  <div className="action-btn">
                    <button
                      onClick={() => {
                        setEditedWard(ward);
                        setEdit({ bool: true, id: ward.id });
                      }}
                    >
                      edit
                    </button>
                    <button onClick={() => handleDelete(ward.id)}>
                      delete
                    </button>
                  </div>
                </div>
              ) : edit?.id === ward.id ? (
                <div key={ward.id} className="patient-card">
                  <div>
                    Ward Number:{" "}
                    <input
                      type="number"
                      value={editedWard.wardNumber}
                      onChange={(e) =>
                        setEditedWard({
                          ...editedWard,
                          wardNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    Capacity:{" "}
                    <input
                      value={editedWard.capacity}
                      onChange={(e) =>
                        setEditedWard({
                          ...editedWard,
                          capacity: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    Specializations:{" "}
                    <input
                      value={editedWard.specialization}
                      onChange={(e) =>
                        setEditedWard({
                          ...editedWard,
                          specialization: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="action-btn">
                    <button
                      onClick={() => {
                        setEdit(null);
                        dispatch(editWard(editedWard));
                      }}
                    >
                      save
                    </button>
                  </div>
                </div>
              ) : (
                <div key={ward.id} className="patient-card">
                  <div>Ward Number: {ward.wardNumber}</div>
                  <div>Capacity: {ward.capacity}</div>
                  <div>Specializations: {ward.specialization}</div>
                  <div className="action-btn">
                    <button
                      onClick={() => {
                        setEditedWard(ward);
                        setEdit({ bool: true, id: ward.id });
                      }}
                    >
                      edit
                    </button>
                    <button onClick={() => handleDelete(ward.id)}>
                      delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WardList;
