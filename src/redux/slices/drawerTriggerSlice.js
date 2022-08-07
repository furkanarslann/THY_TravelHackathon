import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "../api/weather";

const initialState = {
    drawerActive:true,//"idle"|"loading"|"failed"|"succeeded";
};

export const drawerTriggerSlice = createSlice({
  name: "drawerTrigger",
  initialState,
  reducers: {
    toggleDrawerState: (state, action) => {
      state.drawerActive=false;
    },
  },
  
});

// Action creators are generated for each case reducer function
export const {toggleDrawerState} = drawerTriggerSlice.actions;
export default drawerTriggerSlice.reducer;
