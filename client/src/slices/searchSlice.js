import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  noOfResults: 0,
  pageNo: null,
  limit: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResults: function (state, action) {
      state.results = [...action.payload];
      state.noOfResults = action.payload.length;
    },
    setPageNo: function (state, action) {
      state.pageNo = action.payload;
    },
    setLimit: function (state, action) {
      state.limit = action.payload;
    },
  },
});
export const { setResults, setPageNo, setLimit } = searchSlice.actions;

export default searchSlice.reducer;
