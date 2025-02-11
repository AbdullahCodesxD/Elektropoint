import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCollection: null,
  currentCollectionProducts: [],
  noOfProducts: null,
  isFetched: false,
};

const clientCollectionSlice = createSlice({
  name: "clientCollection",
  initialState,
  reducers: {
    setCurrentCollection: function (state, action) {
      state.currentCollection = action.payload;
    },
    setCurrentCollectionProducts: function (state, action) {
      state.currentCollectionProducts = action.payload;
    },
    setCurrentNoOfProducts: function (state, action) {
      state.noOfProducts = action.payload;
    },
    setIsFetched: function (state, action) {
      state.isFetched = action.payload;
    },
  },
});

export const {
  setCurrentCollection,
  setCurrentCollectionProducts,
  setCurrentNoOfProducts,
  setIsFetched,
} = clientCollectionSlice.actions;

export default clientCollectionSlice.reducer;
