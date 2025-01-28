import { addProducts, setVendors } from "../slices/productsSlice";
import { store } from "../store";
import { getFromApi } from "./api";
const dispatch = store.dispatch;

export const getProducts = async function () {
  const res = await getFromApi("/products");
  dispatch(addProducts(res.data));
};

export const getVendors = async function () {
  const res = await getFromApi("/products/product/vendors");

  dispatch(setVendors(res.data));
};
