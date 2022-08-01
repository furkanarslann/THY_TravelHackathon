import { createSlice } from "@reduxjs/toolkit";
 
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
        console.log(state);
        state.airports=action.payload

       });
  },
});

// Action creators are generated for each case reducer function
export const {} = flight.actions;
export default flightSlice.reducer;
