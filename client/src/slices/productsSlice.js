import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  vendors: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: function (state, action) {
      state.products = action.payload;
    },
    addProduct: function (state, action) {
      state.products = [...state.products, action.payload];
    },
    deleteProduct: function (state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },

    setVendors: function (state, action) {
      state.vendors = action.payload;
    },
  },
});

export const { addProduct, addProducts, deleteProduct, setVendors } =
  productSlice.actions;

export default productSlice.reducer;
