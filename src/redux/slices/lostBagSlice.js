import { createSlice } from "@reduxjs/toolkit";
import { State } from "react-native-gesture-handler";
import { getLostBaggage } from "../api/lostBaggage";

const lostBagSlice = createSlice({
  name: "lostBag",
  initialState: {
    lostBaggageFile: null,
    loadingState: "idle", //"idle"|"loading"|"failed"|"succeeded";
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getLostBaggage.pending, (state, action) => {
      // Add user to the state array
      state.loadingState = "loading";
    }),
      builder.addCase(getLostBaggage.rejected, (state, action) => {
        // Add user to the state array
        state.loadingState = "failed";
      }),
      builder.addCase(getLostBaggage.fulfilled, (state, action) => {
        // Add user to the state array
        state.loadingState = "idle";
        state.lostBaggageFile = action.payload;
        
      });
  },
});

export default lostBagSlice.reducer;
export const { setBag } = lostBagSlice.actions;
