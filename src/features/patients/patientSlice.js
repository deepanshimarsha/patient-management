import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const patientsSlice = createSlice({
  name: "patients",
  initialState: {
    patientList: [
      {
        name: "John Doe",
        age: 35,
        gender: "Male",
        medicalHistory: "No significant medical history",
        contact: "123-456-7890",
        wardNumber: 101,
        id: uuid(),
      },
      {
        name: "Michael Brown",
        age: 60,
        gender: "Male",
        medicalHistory: "Previous heart surgery",
        contact: "999-888-7777",
        wardNumber: 201,
        id: uuid(),
      },
      {
        name: "Emily Davis",
        age: 50,
        gender: "Female",
        medicalHistory: "Hypertension",
        contact: "111-222-3333",
        wardNumber: 301,
        id: uuid(),
      },
    ],
  },
  reducers: {
    addPatient: (state, action) => {
      console.log(action.payload);
      state.patientList.push(action.payload);
    },
    editPatient: (state, action) => {
      const idx = state.patientList.findIndex(
        (ele) => ele.id === action.payload.id
      );
      state.patientList[idx] = action.payload;
    },
    deletePatient: (state, action) => {
      const idx = state.patientList.findIndex(
        (ele) => ele.id === action.payload
      );
      state.patientList.splice(idx, 1);
    },
  },
});

export const { addPatient, editPatient, deletePatient } = patientsSlice.actions;
export const patientsReducer = patientsSlice.reducer;
