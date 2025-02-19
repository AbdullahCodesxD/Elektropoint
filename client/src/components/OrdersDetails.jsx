import { useParams } from "react-router";
import OrderDetailsTimeline from "./OrderDetailsTimeline";
import OrdersDetailsCustomer from "./OrdersDetailsCustomer";
import OrdersDetailsHeader from "./OrdersDetailsHeader";
import OrdersDetailsNotes from "./OrdersDetailsNotes";
import OrdersDetailsOrder from "./OrdersDetailsOrder";
import OrdersDetailsPaid from "./OrdersDetailsPaid";
import { useEffect } from "react";
import { getOrder } from "../utils/ordersApi";

import { useSelector } from "react-redux";
import Button from "./Button";
import { UnfulfilledSvg } from "./Svgs";
export default function OrdersDetails() {
  const { order } = useParams();
  const currentOrder = useSelector((state) => state.orders.currentOrder);

  useEffect(
    function () {
      getOrder(order);
    },
    [order]
  );
  if (!currentOrder) return null;
  return (
    <div className="pb-[150px] md:pb-5 p-5 bg-[#EBEBEB] rounded-lg">
      <OrdersDetailsHeader
        fullFilmentStatus={currentOrder.fullFilmentStatus}
        paymentStatus={currentOrder.paymentStatus}
        orderNo={currentOrder.orderNo}
        date={currentOrder.date}
        id={currentOrder._id}
      />

      <div
        className="flex flex-col md:grid gap-5 mt-3"
        style={{
          gridTemplateColumns: "auto  340px",
        }}
      >
        <div className="flex flex-col gap-5">
          <Button type="orderDetailsOrder" extraClasses="capitalize w-fit">
            <UnfulfilledSvg height={17} />
            {currentOrder.fullFilmentStatus}
          </Button>

          {/* Map over products here later on... */}
          <div className="bg-white p-3 rounded-md">
            {currentOrder.product?.map((product) => {
              return (
                <OrdersDetailsOrder
                  key={product._id}
                  fullFilmentStatus={currentOrder.fullFilmentStatus}
                  productName={product?.title}
                  productDescription={product?.description}
                  price={product.price}
                  deliveryMethod={currentOrder.deliveryMethod}
                  src={product?.media?.at(0)}
                />
              );
            })}
          </div>
          <OrdersDetailsPaid
            paymentStatus={currentOrder.paymentStatus}
            deliveryMethod={currentOrder.deliveryMethod}
            noOfItems={currentOrder.noOfItems}
            price={currentOrder.price}
          />
          <OrderDetailsTimeline />
        </div>

        <div className="flex flex-col gap-5">
          <OrdersDetailsNotes />
          <OrdersDetailsCustomer
            orderNo={currentOrder.orderNo}
            customer={currentOrder.customer}
          />
        </div>
      </div>
    </div>
  );
}
