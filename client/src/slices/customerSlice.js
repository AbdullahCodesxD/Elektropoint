import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
  customer: {},
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomers(state, action) {
      state.customers = action.payload;
    },
    addCustomer(state, action) {
      state.customers = [...state.customers, action.payload];
    },
    removeCustomer(state, action) {
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload
      );
    },

    addCurrentCustomer(state, action) {
      state.customer = action.payload;
    },
  },
});

export const { addCustomers, addCustomer, removeCustomer, addCurrentCustomer } =
  customerSlice.actions;
export default customerSlice.reducer;
