import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./slices/orderSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    orders: orderSlice,
    products: productsSlice,
  },
});
