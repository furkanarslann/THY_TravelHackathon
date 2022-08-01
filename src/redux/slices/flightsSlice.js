import { createSlice } from "@reduxjs/toolkit";
import { getFlightsByDate } from "../api/flight";
 
const initialState = {
  flights: [],
  loadingState: "idle", //"idle"|"loading"|"failed"|"succeeded";
};

export const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getFlightsByDate.pending, (state, action) => {
      // Add user to the state array
        state.loadingState="loading";
    }),
      builder.addCase(getFlightsByDate.rejected, (state, action) => {
        // Add user to the state array
        state.loadingState="loading";

       }),
      builder.addCase(getFlightsByDate.fulfilled, (state, action) => {
        // Add user to the state array
        state.loadingState="idle";

        state.flights=action.payload

       });
  },
});

// Action creators are generated for each case reducer function
export const {} = flightSlice.actions;
export default flightSlice.reducer;
