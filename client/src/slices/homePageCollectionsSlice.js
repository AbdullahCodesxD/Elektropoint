import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: [],
  isFetched: false,
};

const homePageCollectionsSlice = createSlice({
  name: "homePageCollections",
  initialState,
  reducers: {
    setHomePageCollections: function (state, action) {
      state.collections = action.payload;
    },
    setIsFetched: function (state, action) {
      state.isFetched = action.payload;
    },
  },
});

export const { setHomePageCollections, setIsFetched } =
  homePageCollectionsSlice.actions;

export default homePageCollectionsSlice.reducer;
