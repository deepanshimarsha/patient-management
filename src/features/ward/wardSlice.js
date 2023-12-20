import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const wardsSlice = createSlice({
  name: "wards",
  initialState: {
    wardList: [
      {
        wardNumber: 101,
        capacity: 30,
        specialization: "General",
        id: uuid(),
      },
      {
        wardNumber: 201,
        capacity: 25,
        specialization: "Surgery",
        id: uuid(),
      },
      {
        wardNumber: 301,
        capacity: 15,
        specialization: "Cardiology",
        id: uuid(),
      },
    ],
  },
  reducers: {
    addWard: (state, action) => {
      state.wardList.push(action.payload);
    },
    editWard: (state, action) => {
      const idx = state.wardList.findIndex(
        (ele) => ele.id === action.payload.id
      );
      state.wardList[idx] = action.payload;
    },
    deleteWard: (state, action) => {
      const idx = state.wardList.findIndex((ele) => ele.id === action.payload);
      state.wardList.splice(idx, 1);
    },
  },
});

export const { addWard, editWard, deleteWard } = wardsSlice.actions;
export const wardsReducer = wardsSlice.reducer;
