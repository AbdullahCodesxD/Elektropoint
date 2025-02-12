import { addUsers } from "../slices/usersSlice";
import { store } from "../store";
import { getFromApi, postToApi } from "./api";
import Cookies from "js-cookie";
const dispatch = store.dispatch;

export const createUser = async function (data) {
  const res = await postToApi("/users", data);
};
export const login = async function (data) {
  try {
    const res = await postToApi("/users/login", data);
    Cookies.set("jwt", res.data);
    window.location = "/dashboard";
  } catch (err) {
    console.log(err);
  }
};
export const getUsers = async function () {
  const res = await getFromApi("/users");
  dispatch(addUsers(res.data));
};
