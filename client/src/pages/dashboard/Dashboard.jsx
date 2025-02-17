import { Outlet } from "react-router";
import DashboardNavigation from "./DashboardNavigation";
import Cookies from "js-cookie";
export default function Dashboard() {
  const jwt = Cookies.get("jwt");
  if (!jwt.length > 0) window.location = "/login";
  return (
    <div
      className="md:grid gap-5 relative"
      style={{
        gridTemplateColumns: "320px calc(100% - 340px)",
      }}
    >
      <DashboardNavigation />
      <Outlet />
    </div>
  );
}
