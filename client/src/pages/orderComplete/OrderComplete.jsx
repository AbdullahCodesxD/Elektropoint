import { useSelector } from "react-redux";
import CheckoutStatusComponent from "../../components/CheckoutStatusComponent";
import CustomerInformation from "./CustomerInformation";
import OrderProducts from "./OrderProducts";
import ThanksForOrder from "./ThanksForOrder";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function OrderComplete() {
  const isOrderComplete = useSelector((state) => state.orders.isComplete);
  const navigate = useNavigate();

  useEffect(function () {
    if (!isOrderComplete) {
      navigate("/checkout");
    } else {
      setTimeout(function () {
        window.location = "/";
      }, 5000);
    }
  });
  return (
    <div className="p-3 mb:bg-white">
      <CheckoutStatusComponent currentPage="/order-complete" />

      <div
        className="md:grid gap-5"
        style={{
          gridTemplateColumns: "1fr 500px",
        }}
      >
        <div>
          <ThanksForOrder />

          <CustomerInformation />
        </div>
        <OrderProducts />
      </div>
    </div>
  );
}
