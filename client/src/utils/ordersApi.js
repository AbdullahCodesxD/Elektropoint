import { deleteApi, getFromApi, postToApi } from "./api";
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

export const createOrder = async function (data, reload = false) {
  try {
    await postToApi("/orders", data);
    if (reload) {
      window.location = "/dashboard/orders";
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteOrder = async function (id) {
  try {
    const res = await deleteApi(`/orders/${id}`);

    window.location = "/dashboard/orders";
  } catch (err) {
    console.log(err);
  }
};
export const fulFillOrder = async function (id) {
  try {
    await postToApi(`/orders/fullfill/${id}`);

    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};
