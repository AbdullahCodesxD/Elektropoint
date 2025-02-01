import { setDiscounts } from "../slices/discountSlice";
import { getFromApi, postToApi } from "./api";
import { store } from "../store";

const dispatch = store.dispatch;
export const postDiscount = async function (data) {
  const res = await postToApi("/discounts", data);

  console.log(res, "--");
};

export const getDiscount = async function () {
  const res = await getFromApi("/discounts");

  dispatch(setDiscounts(res.data));
};
