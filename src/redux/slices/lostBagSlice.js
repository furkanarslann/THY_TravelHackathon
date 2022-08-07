import { createSlice } from "@reduxjs/toolkit";
import { getLostBaggage } from "../api/lostBaggage";

const lostBagSlice = createSlice({
  name: "lostBag",
  initialState: {
    lostBaggageFile: null,
    loadingState: "idle", //"idle"|"loading"|"failed"|"succeeded";
  },
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(getLostBaggage.pending, (state, action) => {
      
      state.loadingState = "loading";
    }),
      builder.addCase(getLostBaggage.rejected, (state, action) => {
        
        state.loadingState = "failed";
      }),
      builder.addCase(getLostBaggage.fulfilled, (state, action) => {
        
        state.loadingState = "idle";
        state.lostBaggageFile = action.payload;
        
      });
  },
});

export default lostBagSlice.reducer;
export const { setBag } = lostBagSlice.actions;
