import { getFromApi, postToApi } from "./api";
import { store } from "../store";
import { addAllOrders, setCurrentOrder } from "../slices/orderSlice";
const dispatch = store.dispatch;
export const getOrders = async function () {
  const res = await getFromApi("/orders");
  dispatch(addAllOrders(res.data));
};

export const getOrder = async function (id) {
  const res = await getFromApi(`/orders/${id}`);

  dispatch(setCurrentOrder(res.data));
};

export const createOrder = async function (data) {
  const res = await postToApi("/orders", data);

  console.log(res.data);
};
