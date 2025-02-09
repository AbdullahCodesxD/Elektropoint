import { addUsers } from "../slices/usersSlice";
import { store } from "../store";
import { getFromApi, postToApi } from "./api";
const dispatch = store.dispatch;

export const createUser = async function (data) {
  const res = await postToApi("/users", data);
};
export const getUsers = async function () {
  const res = await getFromApi("/users");
  dispatch(addUsers(res.data));
};
