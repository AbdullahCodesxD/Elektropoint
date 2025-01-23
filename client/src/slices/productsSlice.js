import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProducts: function (state, action) {
      return [...action.payload];
    },
    addProduct: function (state, action) {
      return [...state, action.payload];
    },
    deleteProduct: function (state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, addProducts, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
