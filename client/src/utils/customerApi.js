import { getFromApi, postToApi } from "./api";
import { store } from "../store";
import { addCurrentCustomer, addCustomers } from "../slices/customerSlice";
const dispatch = store.dispatch;
export const getCustomers = async function () {
  const res = await getFromApi("/customer");
  dispatch(addCustomers(res.data));
};
export const getCustomer = async function (id) {
  const res = await getFromApi(`/customer/${id}`);
  dispatch(addCurrentCustomer(res.data));
};

export const createCustomer = async function (data) {
  const res = await postToApi("/customer", data);
};
