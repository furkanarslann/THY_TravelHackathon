import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: [],
};

export const flightDetailsSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setFlightDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setFlightDetails } = flightDetailsSlice.actions;
export default flightDetailsSlice.reducer;
