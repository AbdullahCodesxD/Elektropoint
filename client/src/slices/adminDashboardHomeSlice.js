import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  products: [],
};

const adminDashboardHomeSlice = createSlice({
  name: "adminDashboardHome",
  initialState,
  reducers: {
    setAdminDashboardHome: (state, action) => {
      state.orders = action.payload.orders;
      state.products = action.payload.products;
    },
  },
});
export const { setAdminDashboardHome } = adminDashboardHomeSlice.actions;
export default adminDashboardHomeSlice.reducer;
