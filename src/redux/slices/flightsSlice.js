import { createSlice } from "@reduxjs/toolkit";
import { getFlightsByDate } from "../api/flight";

const initialState = {
  flights: null,
  loadingState: "idle", //"idle"|"loading"|"failed"|"succeeded";
};

export const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFlightsByDate.pending, (state, action) => {

      state.loadingState = "loading";
    }),
      builder.addCase(getFlightsByDate.rejected, (state, action) => {
  
        state.loadingState = "loading";
      }),
      builder.addCase(getFlightsByDate.fulfilled, (state, action) => {
  
        state.loadingState = "idle";

        state.flights = action.payload;
      });
  },
});


export const {} = flightSlice.actions;
export default flightSlice.reducer;
