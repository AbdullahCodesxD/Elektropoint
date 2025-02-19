import { deleteApi, getFromApi, postToApi } from "./api";
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
  try {
    const res = await postToApi("/customer", data);
    return res;
  } catch (_) {
    console.log("err hai");
  }
};
export const deleteCustomer = async function (id) {
  try {
    const res = await deleteApi(`/customer/${id}`);
    window.location = "/dashboard/customers";
  } catch (err) {
    console.log(err);
  }
};
