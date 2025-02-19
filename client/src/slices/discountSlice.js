import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discounts: [],
  userDiscounts: [],
};

const discount = createSlice({
  name: "discounts",
  initialState,
  reducers: {
    setDiscounts: (state, action) => {
      state.discounts = [...action.payload];
    },
    setUserDiscounts: (state, action) => {
      state.userDiscounts = [...action.payload];
    },
  },
});

export const { setDiscounts, setUserDiscounts } = discount.actions;

export default discount.reducer;
