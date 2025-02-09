import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stores: [],
  noOfStores: 0,
};

const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    addStores: function (state, action) {
      state.stores = action.payload;
      state.noOfStores = action.payload.length;
    },
  },
});

export const { addStores } = storeSlice.actions;

export default storeSlice.reducer;
