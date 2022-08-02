import { createSlice } from "@reduxjs/toolkit";
import { getAirports } from "../api/airport";

const initialState = {
  airports: [],
  loadingState: "idle", //"idle"|"loading"|"failed"|"succeeded";
};

export const airportSlice = createSlice({
  name: "airport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAirports.pending, (state, action) => {
      // Add user to the state array
        state.loadingState="loading";
    }),
      builder.addCase(getAirports.rejected, (state, action) => {
        // Add user to the state array
        state.loadingState="loading";

       }),
      builder.addCase(getAirports.fulfilled, (state, action) => {
        // Add user to the state array
        state.loadingState="idle";
       console.log(action.payload);
        state.airports=action.payload

       });
  },
});

// Action creators are generated for each case reducer function
export const {} = airportSlice.actions;
export default airportSlice.reducer;
