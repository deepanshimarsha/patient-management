import { createSlice } from "@reduxjs/toolkit";

const wardsSlice = createSlice({
  name: "wards",
  initialState: {
    list: [], // Initial state with an empty array of wards
  },
  reducers: {
    addWard: (state, action) => {
      state.list.push(action.payload); // Add a new ward
    },
    editWard: (state, action) => {
      // Logic to find and update the ward's information
    },
    deleteWard: (state, action) => {
      // Logic to delete a ward from the list
    },
  },
});

export const { addWard, editWard, deleteWard } = wardsSlice.actions;
export const wardsReducer = wardsSlice.reducer;
