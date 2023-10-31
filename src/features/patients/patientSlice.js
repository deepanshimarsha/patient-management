import { createSlice } from "@reduxjs/toolkit";

const patientsSlice = createSlice({
  name: "patients",
  initialState: {
    list: [], // Initial state with an empty array of patients
  },
  reducers: {
    addPatient: (state, action) => {
      state.list.push(action.payload); // Add a new patient
    },
    editPatient: (state, action) => {
      // Logic to find and update the patient's information
    },
    deletePatient: (state, action) => {
      // Logic to delete a patient from the list
    },
  },
});

export const { addPatient, editPatient, deletePatient } = patientsSlice.actions;
export const patientsReducer = patientsSlice.reducer;
