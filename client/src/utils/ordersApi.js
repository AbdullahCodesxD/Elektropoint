import { getFromApi } from "./api";
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
