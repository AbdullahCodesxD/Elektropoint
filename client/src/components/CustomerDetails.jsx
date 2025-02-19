import { useParams } from "react-router";
import CustomerAccountDetails from "./CustomerAccountDetails";
import CustomerDetailsHeader from "./CustomerDetailsHeader";
import CustomerDetailsOrder from "./CustomerDetailsOrder";
import OrderDetailsTimeline from "./OrderDetailsTimeline";
import OrdersDetailsCustomer from "./OrdersDetailsCustomer";
import { useEffect } from "react";
import { getCustomer } from "../utils/customerApi";
import { useSelector } from "react-redux";

export default function CustomerDetails() {
  const { customer } = useParams();

  const currentCustomer = useSelector((state) => state.customers.customer);

  useEffect(
    function () {
      getCustomer(customer);
    },
    [customer]
  );
  return (
    <div className="pb-[140px] md:pb-5 p-5 bg-[#EBEBEB] rounded-lg">
      <CustomerDetailsHeader
        name={currentCustomer.name}
        date={currentCustomer.createdAt}
        address={currentCustomer.address}
        id={currentCustomer._id}
      />

      <div
        className="flex flex-col md:grid gap-5 mt-3"
        style={{
          gridTemplateColumns: "auto  340px",
        }}
      >
        <div className="flex flex-col gap-5">
          <CustomerAccountDetails
            noOfOrders={currentCustomer.noOfOrders}
            amount={currentCustomer.totalAmountSpent}
          />

          {currentCustomer.latestOrder && (
            <CustomerDetailsOrder order={currentCustomer.latestOrder} />
          )}
          {/* <OrderDetailsTimeline /> */}
        </div>

        <div className="flex flex-col gap-5">
          <OrdersDetailsCustomer
            customer={currentCustomer}
            orderNo={currentCustomer?.latestOrder?.orderNo}
          />
        </div>
      </div>
    </div>
  );
}
