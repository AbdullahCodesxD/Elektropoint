import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discounts: [],
};

const discount = createSlice({
  name: "discounts",
  initialState,
  reducers: {
    setDiscounts: (state, action) => {
      state.discounts = [...action.payload];
    },
  },
});

export const { setDiscounts } = discount.actions;

export default discount.reducer;
