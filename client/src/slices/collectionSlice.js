import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
  name: "collection",
  initialState: [],
  reducers: {
    addCollections(state, action) {
      return action.payload;
    },
    addCollection(state, action) {
      return [...state, action.payload];
    },
    deleteCollection(state, action) {
      return state.filter((collection) => collection.id !== action.payload);
    },
  },
});

export const { addCollections, addCollection, deleteCollection } =
  collectionSlice.actions;
export default collectionSlice.reducer;
