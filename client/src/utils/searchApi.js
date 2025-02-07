import { setCurrentProduct, setResults } from "../slices/searchSlice";
import { store } from "../store";
import { getFromApi } from "./api";
const dispatch = store.dispatch;

export const searchProducts = async function (search, options) {
  if (options) {
    const res = await getFromApi(`/search?search=${search}&${options}`);
  } else {
    const res = await getFromApi(`/search?search=${search}`);
    dispatch(setResults(res.data));
    console.log(res);
  }
};
export const getProduct = async function (slug) {
  const res = await getFromApi(`/products/${slug}`);
  dispatch(setCurrentProduct(res.data));
};
