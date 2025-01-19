import CustomerAccountDetails from "./CustomerAccountDetails";
import CustomerDetailsHeader from "./CustomerDetailsHeader";
import CustomerDetailsOrder from "./CustomerDetailsOrder";
import OrderDetailsTimeline from "./OrderDetailsTimeline";
import OrdersDetailsCustomer from "./OrdersDetailsCustomer";

export default function CustomerDetails() {
  return (
    <div className="pb-[140px] md:pb-5 p-5 bg-[#EBEBEB] rounded-lg">
      <CustomerDetailsHeader />

      <div
        className="flex flex-col md:grid gap-5 mt-3"
        style={{
          gridTemplateColumns: "auto  340px",
        }}
      >
        <div className="flex flex-col gap-5">
          <CustomerAccountDetails />
          <CustomerDetailsOrder />
          <OrderDetailsTimeline />
        </div>

        <div className="flex flex-col gap-5">
          <OrdersDetailsCustomer />
        </div>
      </div>
    </div>
  );
}
