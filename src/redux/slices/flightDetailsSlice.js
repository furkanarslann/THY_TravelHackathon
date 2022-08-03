import { createSlice } from "@reduxjs/toolkit";
import { getFlightsByDate } from "../api/flight";
 
const initialState = {
  details: [],
 };

export const flightDetailsSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setFlightDetails:(state,action)=>{
        state.details=action.payload;
        console.log(state.details);
    }
  },
});

// Action creators are generated for each case reducer function
export const {setFlightDetails} = flightDetailsSlice.actions;
export default flightDetailsSlice.reducer;
