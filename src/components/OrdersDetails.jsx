import OrderDetailsTimeline from "./OrderDetailsTimeline";
import OrdersDetailsCustomer from "./OrdersDetailsCustomer";
import OrdersDetailsHeader from "./OrdersDetailsHeader";
import OrdersDetailsNotes from "./OrdersDetailsNotes";
import OrdersDetailsOrder from "./OrdersDetailsOrder";
import OrdersDetailsPaid from "./OrdersDetailsPaid";

export default function OrdersDetails() {
  return (
    <div className="pb-[150px] md:pb-5 p-5 bg-[#EBEBEB] rounded-lg">
      <OrdersDetailsHeader />

      <div
        className="flex flex-col md:grid gap-5 mt-3"
        style={{
          gridTemplateColumns: "auto  340px",
        }}
      >
        <div className="flex flex-col gap-5">
          <OrdersDetailsOrder />
          <OrdersDetailsPaid />
          <OrderDetailsTimeline />
        </div>

        <div className="flex flex-col gap-5">
          <OrdersDetailsNotes />
          <OrdersDetailsCustomer />
        </div>
      </div>
    </div>
  );
}
