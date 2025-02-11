import { getFromApi, postToApi } from "./api";
import { store } from "../store";
import { addCollections } from "../slices/collectionSlice";
import {
  setHomePageCollections,
  setIsFetched as setHomePageFetched,
} from "../slices/homePageCollectionsSlice";
const dispatch = store.dispatch;
export const getCollections = async function () {
  const res = await getFromApi("/collection");
  dispatch(addCollections(res.data));
};
export const postCollection = async function (data) {
  const res = await postToApi("/collection", data);
  console.log(res.data);
};
export const getHomePageCollections = async function () {
  const res = await getFromApi("/collection/home");
  dispatch(setHomePageCollections(res.data));
  dispatch(setHomePageFetched(true));
};
