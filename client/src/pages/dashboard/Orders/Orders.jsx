import { useEffect, useState } from "react";
import OrdersComponent from "../../../components/OrdersComponent";
import OrdersComponentHeader from "../../../components/OrdersComponentHeader";
import { getOrders } from "../../../utils/ordersApi";
import OrdersHeader from "./OrdersHeader";
import { useSelector } from "react-redux";

export default function Orders() {
  const ordersUnfiltered = useSelector((state) => state.orders?.orders);

  const [filter, setFilter] = useState("all");
  const orders =
    filter === "all"
      ? ordersUnfiltered
      : filter === "unFulFilled"
      ? ordersUnfiltered.filter(
          (order) => order.fullFilmentStatus.toLowerCase() === "unfullfilled"
        )
      : ordersUnfiltered.filter(
          (order) => order.paymentStatus.toLowerCase() === "unpaid"
        );

  const [selected, setSelected] = useState([]);
  const noOfOrders = orders.length;

  useEffect(function () {
    getOrders();
  }, []);

  useEffect(
    function () {
      const isOrderSelected = Array.from({ length: noOfOrders }).map((_) => {
        return { selected: false };
      });
      setSelected(isOrderSelected);
    },
    [noOfOrders]
  );

  function selectAll(e) {
    if (e.target.checked) {
      setSelected(
        selected.map((_) => {
          return { selected: true };
        })
      );
    } else {
      setSelected(
        selected.map((_) => {
          return { selected: false };
        })
      );
    }
  }

  function toggleSelected(i) {
    setSelected((prevSelected) =>
      prevSelected.map((item, index) =>
        index === i ? { selected: !item.selected } : item
      )
    );
  }

  return (
    <div className="pb-[150px] md:pb-7 p-7 rounded-lg bg-[#EBEBEB]">
      <h3 className="font-semibold text-2xl">Orders</h3>

      <div className="mt-3 bg-white rounded-lg ">
        <OrdersHeader filter={filter} setFilter={setFilter} />
        {orders.length === 0 && (
          <p className="text-center py-2 font-semibold border border-t">
            No order found
          </p>
        )}

        {orders.length > 0 && (
          <div className="overflow-x-auto order">
            <OrdersComponentHeader selected={selected} selectAll={selectAll} />
            {orders.map((data, i) => (
              <OrdersComponent
                isSelected={selected[i]?.selected}
                toggleSelected={() => toggleSelected(i)}
                id={data._id}
                data={data}
                key={data._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
