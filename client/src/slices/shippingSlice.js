import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amounts: [],
};

const shippingSlice = createSlice({
  name: "shippingSlice",
  initialState,
  reducers: {
    addShippingAmounts: function (state, action) {
      state.amounts = action.payload;
    },
  },
});

export const { addShippingAmounts } = shippingSlice.actions;

export default shippingSlice.reducer;
