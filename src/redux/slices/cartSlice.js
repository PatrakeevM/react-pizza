import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
        state.totalPrice = state.totalPrice - findItem.price;
        state.totalCount = state.totalCount - 1;
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },

    clearItems(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
