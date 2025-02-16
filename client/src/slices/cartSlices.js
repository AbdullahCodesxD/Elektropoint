import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  noOfProducts: 0,
  price: 0.0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const currentIndex = state.cart.findIndex(
        (p) => p.product._id === action.payload.product._id
      );
      if (currentIndex !== -1) {
        state.cart[currentIndex].product.quantity += action.payload.quantity;
        console.log(state.cart, "------------------------------");
        state.noOfProducts += action.payload.quantity;
        state.price += action.payload.product.price * action.payload.quantity;
        return;
      }
      state.cart = [...state.cart, action.payload];
      state.noOfProducts += action.payload.quantity;
      state.price += action.payload.product.price * action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.noOfProducts -= action.payload.quantity;
      state.price -= action.payload.product.price * action.payload.quantity;
    },
    incrementProduct: (state, action) => {
      const productIndex = state.cart.findIndex(
        (p) => p.product._id === action.payload.product._id
      );

      if (productIndex !== -1) {
        state.cart[productIndex].quantity += action.payload.quantity || 1;
        state.noOfProducts += action.payload.quantity || 1;
        state.price +=
          state.cart[productIndex].product.price *
          (action.payload.quantity || 1);
      }
    },

    decrementProduct: (state, action) => {
      const productIndex = state.cart.findIndex(
        (p) => p.product._id === action.payload.product._id
      );

      if (productIndex !== -1) {
        if (state.cart[productIndex].quantity > 1) {
          state.cart[productIndex].quantity -= 1; // Decrement quantity
          state.noOfProducts -= 1;
          state.price -= state.cart[productIndex].product.price;
        } else {
          // Remove product if quantity reaches 0
          state.price -= state.cart[productIndex].product.price;
          state.noOfProducts -= 1;
          state.cart.splice(productIndex, 1); // Remove item from array
        }
      }
    },
  },
});
export const { addToCart, removeFromCart, incrementProduct, decrementProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
