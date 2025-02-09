import { addShippingAmounts } from "../slices/shippingSlice";
import { store } from "../store";
import { getFromApi, postToApi } from "./api";
const dispatch = store.dispatch;

export const createShippingAmount = async function (data) {
  const res = await postToApi("/shippingAmount", data);
  console.log(res, "--=");
};
export const getShippingAmounts = async function () {
  const res = await getFromApi("/shippingAmount");
  dispatch(addShippingAmounts(res.data));
};
