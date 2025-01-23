import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addAllOrders: (state, action) => {
      return action.payload;
    },
    addOrder: (state, action) => {
      return [...state, action.payload];
    },
    removeOrder: (state, action) => {
      return state.filter((order) => order.id !== action.payload);
    },
  },
});

export const { addAllOrders, addOrder, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
