import { addProducts } from "../slices/productsSlice";
import { store } from "../store";
import { getFromApi } from "./api";
const dispatch = store.dispatch;

export const getProducts = async function () {
  const res = await getFromApi("/products");
  console.log(res.data, "gg");
  dispatch(addProducts(res.data));
};
