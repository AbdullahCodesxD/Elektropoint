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
        (p) => p.id === action.payload.id
      );
      if (currentIndex !== -1) {
        state.cart[currentIndex].quantity += action.payload.quantity;
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
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      state.noOfProducts = state.cart.length;
      state.price += action.payload.price;
    },
    decrementProduct: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      state.noOfProducts = state.cart.length;
      state.price -= action.payload.price;
    },
  },
});
export const { addToCart, removeFromCart, incrementProduct, decrementProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
