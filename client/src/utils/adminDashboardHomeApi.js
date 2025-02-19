import { getFromApi } from "./api";
import { store } from "../store";
import { setAdminDashboardHome } from "../slices/adminDashboardHomeSlice";

const dispatch = store.dispatch;
export const getAdminDashboardHome = async function () {
  const res = await getFromApi("/adminDashboard");
  dispatch(setAdminDashboardHome(res.data));
};
