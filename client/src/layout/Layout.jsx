import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      {/* <PopupComponent /> */}
      <Navbar />

      <div className="md:mt-[90px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
