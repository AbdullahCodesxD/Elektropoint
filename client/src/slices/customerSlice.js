import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: [],
  reducers: {
    addCustomers(state, action) {
      return action.payload;
    },
    addCustomer(state, action) {
      return [...state, action.payload];
    },
    removeCustomer(state, action) {
      return state.filter((customer) => customer.id !== action.payload);
    },
  },
});

export const { addCustomers, addCustomer, removeCustomer } =
  customerSlice.actions;
export default customerSlice.reducer;
