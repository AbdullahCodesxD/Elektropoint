import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orders: [],
  currentOrder: {},
  isComplete: false,
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
    setIsComplete: (state, action) => {
      state.isComplete = action.payload;
    },
  },
});

export const {
  addAllOrders,
  addOrder,
  removeOrder,
  setCurrentOrder,
  removeCurrentOrder,
  setIsComplete,
} = orderSlice.actions;
export default orderSlice.reducer;
