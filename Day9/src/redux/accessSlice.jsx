// accessSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accesstype: localStorage.getItem("accesstype") || null,
};

export const accessSlice = createSlice({
  name: "access",
  initialState,
  reducers: {
    setAccessType: (state, action) => {
      state.accesstype = action.payload;
      localStorage.setItem("accesstype", action.payload);
    },
  },
});

export const { setAccessType } = accessSlice.actions;
export const selectAccess = (state) => state.access;

export default accessSlice.reducer;
