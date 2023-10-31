import { configureStore } from "@reduxjs/toolkit";
import { patientsReducer } from "../features/patients/patientSlice";
import { hospitalStatsReducer } from "../features/hospital/hospitalSlice";
import { wardsReducer } from "../features/ward/wardSlice";
const store = configureStore({
  reducer: {
    patients: patientsReducer,
    wards: wardsReducer,
    hospitalStats: hospitalStatsReducer,
  },
});

export default store;
