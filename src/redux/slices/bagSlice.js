import { createSlice } from "@reduxjs/toolkit";
import { getBags } from "../api/bag";

const initialState = {
  bag: [],
  loadingState: "idle", //"idle"|"loading"|"failed"|"succeeded";
  error: false,
};

export const bagSlice = createSlice({
  name: "bags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(getBags.pending, (state, action) => {
      
      state.loadingState = "loading";
      state.error = false;
    }),
      builder.addCase(getBags.rejected, (state, action) => {
       
        state.loadingState = "loading";
        state.error = false;
      }),
      builder.addCase(getBags.fulfilled, (state, action) => {
        
        state.loadingState = "idle";
        state.error = false;

        state.bag = action.payload;
      });
  },
});


export const {} = bagSlice.actions;
export default bagSlice.reducer;
