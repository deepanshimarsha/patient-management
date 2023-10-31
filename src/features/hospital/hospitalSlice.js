import { createSlice } from "@reduxjs/toolkit";

const hospitalStatsSlice = createSlice({
  name: "hospitalStats",
  initialState: {
    totalPatients: 0,
    occupancyRate: 0,
    averageLengthOfStay: 0,
    topPerformingWard: null,
  },
  reducers: {
    updateHospitalStats: (state, action) => {
      // Logic to update hospital-wide statistics
    },
  },
});

export const { updateHospitalStats } = hospitalStatsSlice.actions;
export const hospitalStatsReducer = hospitalStatsSlice.reducer;
