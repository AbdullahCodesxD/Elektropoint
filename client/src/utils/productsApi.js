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
  try {
    await postToApi("/products", data);
    window.location = "/dashboard/products";
  } catch (err) {
    console.log(err);
  }
};

export const patchProductData = async function (productId, data) {
  try {
    await patchApi(`/products/${productId}`, data);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};
export const patchProductMedia = async function (productId, data) {
  try {
    await patchApi(`/products/images/${productId}`, data);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};
export const patchProductCategory = async function (productId, data) {
  try {
    await patchApi(`/products/category/${productId}`, data);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};
