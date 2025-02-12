import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  noOfResults: 0,
  searched: false,
  pageNo: null,
  limit: null,

  currentProduct: {},
  isFetched: false,
  isSearched: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResults: function (state, action) {
      state.results = [...action.payload];
      state.noOfResults = action.payload.length;
      state.searched = true;
    },
    setSearched: function (state, action) {
      state.searched = action.payload;
    },
    setPageNo: function (state, action) {
      state.pageNo = action.payload;
    },
    setLimit: function (state, action) {
      state.limit = action.payload;
    },

    setCurrentProduct: function (state, action) {
      state.currentProduct = action.payload;
    },
    setIsFetched: function (state, action) {
      state.isFetched = action.payload;
    },
    setIsSearched: function (state, action) {
      state.isSearched = action.payload;
    },
  },
});
export const {
  setResults,
  setSearched,
  setPageNo,
  setLimit,
  setCurrentProduct,
  setIsFetched,
  setIsSearched,
} = searchSlice.actions;

export default searchSlice.reducer;
