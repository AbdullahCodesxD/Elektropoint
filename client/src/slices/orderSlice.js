import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orders: [],
  currentOrder: {},
};
const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    addAllOrders: (state, action) => {
      state.orders = action.payload;
    },
    addOrder: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },

    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    removeCurrentOrder: (state, action) => {
      state.currentOrder = {};
    },
  },
});

export const {
  addAllOrders,
  addOrder,
  removeOrder,
  setCurrentOrder,
  removeCurrentOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
