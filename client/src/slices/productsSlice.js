import { createSlice } from "@reduxjs/toolkit";
import StarterKit from "@tiptap/starter-kit";

const initialState = {
  products: [],
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
  },
});

export const { addProduct, addProducts, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
