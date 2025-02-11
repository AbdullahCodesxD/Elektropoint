import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./slices/orderSlice";
import productsSlice from "./slices/productsSlice";
import collectionSlice from "./slices/collectionSlice";
import customerSlice from "./slices/customerSlice";
import discountSlice from "./slices/discountSlice";
import storeSlice from "./slices/storeSlice";
import searchSlice from "./slices/searchSlice";
import shippingSlice from "./slices/shippingSlice";
import userSlice from "./slices/usersSlice";
import clientCollectionSlice from "./slices/clientCollectionSlice";
import homePageCollectionsSlice from "./slices/homePageCollectionsSlice";

export const store = configureStore({
  reducer: {
    orders: orderSlice,
    products: productsSlice,
    collections: collectionSlice,
    customers: customerSlice,
    discounts: discountSlice,
    stores: storeSlice,
    search: searchSlice,
    shipping: shippingSlice,
    users: userSlice,
    clientCollection: clientCollectionSlice,
    homePageCollections: homePageCollectionsSlice,
  },
});
