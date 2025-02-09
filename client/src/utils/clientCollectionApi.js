import { getFromApi } from "./api";
import { store } from "../store";
import {
  setCurrentCollection,
  setCurrentCollectionProducts,
  setCurrentNoOfProducts,
} from "../slices/clientCollectionSlice";
const dispatch = store.dispatch;
export const getCollectionProducts = async function (collection) {
  const res = await getFromApi(`/products/collection/${collection}`);
  dispatch(setCurrentCollectionProducts(res?.data));
  dispatch(setCurrentNoOfProducts(res?.noOfProducts));
};

export const getCollection = async function (collection) {
  const res = await getFromApi(`collection/${collection}`);
  dispatch(setCurrentCollection(res?.data));
};
