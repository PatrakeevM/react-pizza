import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSize: 0,
  activeType: 0,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setActiveSize(state, action) {
      state.activeSize = action.payload;
    },
    setActiveType(state, action) {
      state.activeType = action.payload;
    },
  },
});

export const { setActiveSize, setActiveType } = pizzaSlice.actions;
export default pizzaSlice.reducer;