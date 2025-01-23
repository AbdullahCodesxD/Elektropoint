import { getFromApi } from "./api";
import { store } from "../store";
import { addCollections } from "../slices/collectionSlice";
const dispatch = store.dispatch;
export const getCollections = async function () {
  const res = await getFromApi("/collection");
  dispatch(addCollections(res.data));
};
