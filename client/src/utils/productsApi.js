import { addProducts, setVendors } from "../slices/productsSlice";
import { store } from "../store";
import { getFromApi, patchApi, postToApi } from "./api";
const dispatch = store.dispatch;

export const getVendors = async function () {
  const res = await getFromApi("/products/product/vendors");

  dispatch(setVendors(res.data));
};

export const getProducts = async function () {
  const res = await getFromApi("/products");
  dispatch(addProducts(res.data));
};

export const postProduct = async function (data) {
  const res = await postToApi("/products", data);
  window.location = "/dashboard/products";
};

export const patchProductData = async function (productId, data) {
  await patchApi(`/products/${productId}`, data);
};
export const patchProductMedia = async function (productId, data) {
  await patchApi(`/products/images/${productId}`, data);
};
export const patchProductCategory = async function (productId, data) {
  const res = await patchApi(`/products/category/${productId}`, data);
};
