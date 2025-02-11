import { getFromApi } from "./api";
import { store } from "../store";
import {
  setCurrentCollection,
  setCurrentCollectionProducts,
  setCurrentNoOfProducts,
  setIsFetched,
} from "../slices/clientCollectionSlice";
const dispatch = store.dispatch;
export const getCollectionProducts = async function (collection) {
  dispatch(setIsFetched(false));
  const res = await getFromApi(`/products/collection/${collection}`);
  dispatch(setCurrentCollectionProducts(res?.data));
  dispatch(setCurrentNoOfProducts(res?.noOfProducts));
  dispatch(setIsFetched(true));
};

export const getCollection = async function (collection) {
  const res = await getFromApi(`collection/${collection}`);
  dispatch(setCurrentCollection(res?.data));
};
