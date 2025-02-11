import {
  setCurrentProduct,
  setIsFetched,
  setResults,
} from "../slices/searchSlice";
import { store } from "../store";
import { getFromApi } from "./api";
const dispatch = store.dispatch;

export const searchProducts = async function (search, options) {
  if (options) {
    const res = await getFromApi(`/search?search=${search}&${options}`);
  } else {
    const res = await getFromApi(`/search?search=${search}`);
    dispatch(setResults(res.data));
  }
};
export const getProduct = async function (slug) {
  try {
    dispatch(setIsFetched(false));
    const res = await getFromApi(`/products/${slug}`);
    dispatch(setCurrentProduct(res.data));
    dispatch(setIsFetched(true));
  } catch (err) {
    dispatch(setIsFetched(false));

    window.location = "/";
  }
};
