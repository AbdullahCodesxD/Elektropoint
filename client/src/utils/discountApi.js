import { setDiscounts, setUserDiscounts } from "../slices/discountSlice";
import { getFromApi, patchApi, postToApi } from "./api";
import { store } from "../store";

const dispatch = store.dispatch;
export const postDiscount = async function (data) {
  try {
    await postToApi("/discounts", data);
    window.location = "/dashboard/discount";
  } catch (err) {
    console.log(err);
  }
};

export const getDiscount = async function () {
  const res = await getFromApi("/discounts");

  dispatch(setDiscounts(res.data));
};

export const getDiscountsForUser = async function () {
  const res = await getFromApi("/discounts");

  dispatch(setUserDiscounts(res.data));
};
export const discountUsed = async function (id) {
  await patchApi(`/discounts/discount/${id}`);
};
