import { addProducts, setVendors } from "../slices/productsSlice";
import { store } from "../store";
import { getFromApi, postToApi } from "./api";
const dispatch = store.dispatch;

export const getProducts = async function () {
  const res = await getFromApi("/products");
  dispatch(addProducts(res.data));
};
export const postProduct = async function (data) {
  console.log("data,", data);
  const res = await postToApi("/products", data);
  console.log(res, "gg response hai bhaya");
};

export const getVendors = async function () {
  const res = await getFromApi("/products/product/vendors");

  dispatch(setVendors(res.data));
};
