import { createSlice } from "@reduxjs/toolkit";
import { getBags } from "../api/bag";

const initialState = {
  bag: null,
  loadingState: "idle", //"idle"|"loading"|"failed"|"succeeded";
  error: false,
};

export const bagSlice = createSlice({
  name: "bags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getBags.pending, (state, action) => {
      // Add user to the state array
      state.loadingState = "loading";
      state.error = false;
    }),
      builder.addCase(getBags.rejected, (state, action) => {
        // Add user to the state array
        state.loadingState = "loading";
        state.error = false;
      }),
      builder.addCase(getBags.fulfilled, (state, action) => {
        // Add user to the state array
        state.loadingState = "idle";
        state.error = false;
        state.bag = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = bagSlice.actions;
export default bagSlice.reducer;
