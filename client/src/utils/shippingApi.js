import { store } from "../store";
import { getFromApi } from "./api";
const dispatch = store.dispatch;

export const getShippingAmounts = async function () {
  const res = await getFromApi("/shippingAmount");
  console.log(res);
};
