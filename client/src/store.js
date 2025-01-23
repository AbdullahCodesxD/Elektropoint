import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./slices/orderSlice";
import productsSlice from "./slices/productsSlice";
import collectionSlice from "./slices/collectionSlice";
import customerSlice from "./slices/customerSlice";

export const store = configureStore({
  reducer: {
    orders: orderSlice,
    products: productsSlice,
    collections: collectionSlice,
    customers: customerSlice,
  },
});
