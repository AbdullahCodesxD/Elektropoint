import CheckoutStatusComponent from "../../components/CheckoutStatusComponent";
import CustomerInformation from "./CustomerInformation";
import OrderProducts from "./OrderProducts";
import ThanksForOrder from "./ThanksForOrder";

export default function OrderComplete() {
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
