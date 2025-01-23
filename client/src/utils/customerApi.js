import { getFromApi } from "./api";
import { store } from "../store";
import { addCustomers } from "../slices/customerSlice";
const dispatch = store.dispatch;
export const getCustomers = async function () {
  const res = await getFromApi("/customer");
  dispatch(addCustomers(res.data));
};
