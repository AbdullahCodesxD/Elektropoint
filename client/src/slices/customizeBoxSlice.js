import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  box: [[], [], [], [], [], [], [], [], []],
};

const customizeBoxSlice = createSlice({
  name: "customBox",
  initialState,
  reducers: {
    addProduct: function (state, action) {
      state.box[action.payload.index] = action.payload.data;
    },
    removeOrToggleProduct: function (state, action) {
      if (state.box[action.payload.index].title !== action.payload.data.title) {
        state.box[action.payload.index] = action.payload.data;
      } else {
        state.box[action.payload.index] = [];
      }
    },
  },
});
export const { addProduct, removeOrToggleProduct } = customizeBoxSlice.actions;

export default customizeBoxSlice.reducer;
