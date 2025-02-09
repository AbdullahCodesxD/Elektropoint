import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./slices/orderSlice";
import productsSlice from "./slices/productsSlice";
import collectionSlice from "./slices/collectionSlice";
import customerSlice from "./slices/customerSlice";
import discountSlice from "./slices/discountSlice";
import searchSlice from "./slices/searchSlice";
import clientCollectionSlice from "./slices/clientCollectionSlice";

export const store = configureStore({
  reducer: {
    orders: orderSlice,
    products: productsSlice,
    collections: collectionSlice,
    customers: customerSlice,
    discounts: discountSlice,
    search: searchSlice,
    clientCollection: clientCollectionSlice,
  },
});
