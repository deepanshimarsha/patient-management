import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPatient, deletePatient, editPatient } from "./patientSlice";
import { v4 as uuid } from "uuid";

const PatientList = () => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    medicalHistory: "",
    contact: "",
    information: "",
    wardNumber: "",
  });
  const { patientList } = useSelector((state) => state.patients);
  const [edit, setEdit] = useState(null);
  const [editedPatient, setEditedPatient] = useState();
  const { wardList } = useSelector((state) => {
    return state.wards;
  });

  const dispatch = useDispatch();
  const handleAddPatient = (e) => {
    e.preventDefault();

    dispatch(addPatient({ ...patient, id: uuid() }));
    setPatient({
      name: "",
      age: "",
      gender: "",
      medicalHistory: "",
      contact: "",
      information: "",
      wardNumber: "",
    });
  };

  const handleDelete = (patientId) => {
    dispatch(deletePatient(patientId));
  };

  const handleEdit = () => {
    dispatch(editPatient(editedPatient));
    setEdit(null);
  };
  console.log(edit);
  return (
    <div>
      <h2>Patients</h2>
      <div>
        <form className="form" onSubmit={(e) => handleAddPatient(e)}>
          <input
            type="text"
            placeholder="enter name"
            onChange={(e) => setPatient({ ...patient, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="enter age"
            onChange={(e) => setPatient({ ...patient, age: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="enter gender"
            onChange={(e) => setPatient({ ...patient, gender: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="enter medical history"
            onChange={(e) =>
              setPatient({ ...patient, medicalHistory: e.target.value })
            }
            required
          />
          <input
            type="number"
            placeholder="enter contact number"
            onChange={(e) =>
              setPatient({ ...patient, contact: e.target.value })
            }
            required
          />
          <select
            onChange={(e) =>
              setPatient({ ...patient, wardNumber: e.target.value })
            }
            required
          >
            <option disabled selected>
              select ward
            </option>
            {wardList.map((ward) => {
              return (
                <option value={ward.wardNumber}>
                  {ward.wardNumber} {ward.specialization}
                </option>
              );
            })}
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="patient-list">
        {patientList.map((patient) => {
          return (
            <div>
              {!edit ? (
                <div key={patient.id} className="patient-card">
                  <h3>{patient.name}</h3>
                  <div>Age: {patient.age}</div>
                  <div>Gender: {patient.gender}</div>
                  <div>Medical History: {patient.medicalHistory}</div>
                  <div>Contact: {patient.contact}</div>
                  <div c>Ward No. : {patient.wardNumber}</div>
                  <div className="action-btn">
                    <button
                      onClick={() => {
                        setEdit({ editMode: true, id: patient.id });
                        setEditedPatient(patient);
                      }}
                    >
                      edit
                    </button>
                    <button onClick={() => handleDelete(patient.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ) : edit.id === patient.id ? (
                <div key={patient.id} className="patient-card">
                  <h3>
                    <input
                      type="text"
                      value={editedPatient.name}
                      onChange={(e) =>
                        setEditedPatient({
                          ...editedPatient,
                          name: e.target.value,
                        })
                      }
                    />
                  </h3>
                  <div>
                    Age:{" "}
                    <input
                      type="number"
                      value={editedPatient.age}
                      onChange={(e) =>
                        setEditedPatient({
                          ...editedPatient,
                          age: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    Gender:{" "}
                    <input
                      type="text"
                      value={editedPatient.gender}
                      onChange={(e) =>
                        setEditedPatient({
                          ...editedPatient,
                          gender: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    Medical History:{" "}
                    <input
                      type="text"
                      value={editedPatient.medicalHistory}
                      onChange={(e) =>
                        setEditedPatient({
                          ...editedPatient,
                          medicalHistory: e.target.value,
                        })
                      }
                    />{" "}
                  </div>
                  <div>
                    Contact:{" "}
                    <input
                      type="text"
                      value={editedPatient.contact}
                      onChange={(e) =>
                        setEditedPatient({
                          ...editedPatient,
                          contact: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div c>
                    Ward No. :{" "}
                    <select
                      onChange={(e) =>
                        setEditedPatient({
                          ...editedPatient,
                          wardNumber: e.target.value,
                        })
                      }
                    >
                      {wardList.map((ward) => {
                        return (
                          <option
                            value={ward.wardNumber}
                            selected={ward.wardNumber === patient.wardNumber}
                          >
                            {" "}
                            {ward.wardNumber} {ward.specialization}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="action-btn">
                    <button onClick={() => handleEdit()}>save</button>
                  </div>
                </div>
              ) : (
                <div key={patient.id} className="patient-card">
                  <h3>{patient.name}</h3>
                  <div>Age: {patient.age}</div>
                  <div>Gender: {patient.gender}</div>
                  <div>Medical History: {patient.medicalHistory}</div>
                  <div>Contact: {patient.contact}</div>
                  <div c>Ward No. : {patient.wardNumber}</div>
                  <div className="action-btn">
                    <button
                      onClick={() => {
                        setEdit({ editMode: true, id: patient.id });
                        setEditedPatient(patient);
                      }}
                    >
                      edit
                    </button>
                    <button onClick={() => handleDelete(patient.id)}>
                      Delete
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

export default PatientList;
