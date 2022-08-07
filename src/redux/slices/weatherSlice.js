import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "../api/weather";

const initialState = {
  weather: null,
  loadingState: "idle", //"idle"|"loading"|"failed"|"succeeded";
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.details = action.payload;
    },
  },
  extraReducers: (builder) => {
    
    builder.addCase(getWeather.pending, (state, action) => {
      
      state.loadingState = "loading";
    }),
      builder.addCase(getWeather.rejected, (state, action) => {
        
        state.loadingState = "loading";
      }),
      builder.addCase(getWeather.fulfilled, (state, action) => {
        
        state.loadingState = "idle";

        state.weather = action.payload;
      });
  },
});

export const {} = weatherSlice.actions;
export default weatherSlice.reducer;
