import { getFromApi } from "./api";
import { store } from "../store";
import { addAllOrders } from "../slices/orderSlice";
const dispatch = store.dispatch;
export const getOrders = async function () {
  const res = await getFromApi("/orders");
  dispatch(addAllOrders(res.data));
};
