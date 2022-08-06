import { createSlice } from "@reduxjs/toolkit";

const lostBagSlice = createSlice({
  name: "lostBag",
  initialState: {
    bag: null,
  },
  reducers: {
    setBag: (state, action) => {
        
    },
  },
});

export default lostBagSlice.reducer;
export const { setBag } = lostBagSlice.actions;
