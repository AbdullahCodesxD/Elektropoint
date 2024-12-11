import { Outlet } from "react-router";
import DashboardNavigation from "./DashboardNavigation";

export default function Dashboard() {
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
