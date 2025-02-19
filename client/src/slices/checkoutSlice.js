import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  country: "",
  streetAddress: "",
  city: "",
  state: "",
  postcode: "",
  phone: "",
  email: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateCheckout: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});
export const { updateCheckout } = checkoutSlice.actions;

export default checkoutSlice.reducer;
