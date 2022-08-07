import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerActive: true,
};

export const drawerTriggerSlice = createSlice({
  name: "drawerTrigger",
  initialState,
  reducers: {
    toggleDrawerState: (state, action) => {
      state.drawerActive = false;
    },
  },
});

export const { toggleDrawerState } = drawerTriggerSlice.actions;
export default drawerTriggerSlice.reducer;
