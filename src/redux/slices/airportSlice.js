import { createSlice } from "@reduxjs/toolkit";
import { getAirports } from "../api/airport";

const initialState = {
  airports: [],
  loadingState: "idle", //"idle"|"loading"|"failed"|"succeeded";
  tags: [],
  where: "",
};

export const airportSlice = createSlice({
  name: "airport",
  initialState,
  reducers: {
    setTags: (state, action) => {
      state.tags = [...action.payload];
    },
    setWhere: (state, action) => {
      state.where = action.payload;
    },
  },
  extraReducers: (builder) => {
   
    builder.addCase(getAirports.pending, (state, action) => {
      
      state.loadingState = "loading";
    }),
      builder.addCase(getAirports.rejected, (state, action) => {
       
        state.loadingState = "loading";
      }),
      builder.addCase(getAirports.fulfilled, (state, action) => {
       
        state.loadingState = "idle";
        state.airports = action.payload;
      });
  },
});

export const { setTags, setWhere } = airportSlice.actions;
export default airportSlice.reducer;
