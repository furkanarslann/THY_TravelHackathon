import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "../api/weather";
  
const initialState = {
  weather: null,
  loadingState:"idle" //"idle"|"loading"|"failed"|"succeeded";
 };

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather:(state,action)=>{
        state.details=action.payload;
        console.log(state.weather);
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getWeather.pending, (state, action) => {
      // Add user to the state array
        state.loadingState="loading";
    }),
      builder.addCase(getWeather.rejected, (state, action) => {
        // Add user to the state array
        state.loadingState="loading";

       }),
      builder.addCase(getWeather.fulfilled, (state, action) => {
        // Add user to the state array
        state.loadingState="idle";

        state.weather=action.payload

       })
    }
});

// Action creators are generated for each case reducer function
export const {} = weatherSlice.actions;
export default weatherSlice.reducer;
