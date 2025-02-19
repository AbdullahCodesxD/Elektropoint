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
  try {
    await postToApi("/collection", data);
    window.location = "/dashboard/products/collections";
  } catch (err) {
    console.log(err);
  }
};
export const getHomePageCollections = async function () {
  const res = await getFromApi("/collection/home");
  dispatch(setHomePageCollections(res.data));
  dispatch(setHomePageFetched(true));
};
