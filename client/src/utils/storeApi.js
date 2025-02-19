import { addStores } from "../slices/storeSlice";
import { store } from "../store";
import { getFromApi, postToApi } from "./api";
const dispatch = store.dispatch;

export const getStores = async function () {
  const res = await getFromApi("/stores");
  dispatch(addStores(res.data));
};

export const postStore = async function (data) {
  await postToApi("/stores", data);
};
