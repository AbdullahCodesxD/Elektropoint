import OrdersComponent from "../../../components/OrdersComponent";
import OrdersComponentHeader from "../../../components/OrdersComponentHeader";
import OrdersHeader from "./OrdersHeader";

export default function Orders() {
  const arr = [
    {
      orderNo: "#123456",
      date: "Monday at 2:00pm",
      customer: "Asad",
      channel: "Online store",
      total: "$0.00",
      status: "unfulfilled",
      items: "1 item",
      method: "Doorstep pickup",
    },
    {
      orderNo: "#123457",
      date: "Tuesday at 3:15pm",
      customer: "Ali",
      channel: "Mobile app",
      total: "$25.50",
      status: "fulfilled",
      items: "2 items",
      method: "Delivery",
    },
    {
      orderNo: "#123458",
      date: "Wednesday at 10:30am",
      customer: "Sara",
      channel: "Online store",
      total: "$15.00",
      status: "pending",
      items: "1 item",
      method: "Doorstep pickup",
    },
    {
      orderNo: "#123459",
      date: "Thursday at 5:45pm",
      customer: "Ahmed",
      channel: "Mobile app",
      total: "$48.99",
      status: "fulfilled",
      items: "3 items",
      method: "Delivery",
    },
    {
      orderNo: "#123460",
      date: "Friday at 1:20pm",
      customer: "Zainab",
      channel: "Retail store",
      total: "$89.00",
      status: "unfulfilled",
      items: "5 items",
      method: "In-store pickup",
    },
    {
      orderNo: "#123461",
      date: "Saturday at 11:00am",
      customer: "Bilal",
      channel: "Online store",
      total: "$20.00",
      status: "fulfilled",
      items: "2 items",
      method: "Delivery",
    },
    {
      orderNo: "#123462",
      date: "Sunday at 6:00pm",
      customer: "Maha",
      channel: "Mobile app",
      total: "$12.75",
      status: "pending",
      items: "1 item",
      method: "Delivery",
    },
    {
      orderNo: "#123463",
      date: "Monday at 9:15am",
      customer: "Hassan",
      channel: "Retail store",
      total: "$150.00",
      status: "fulfilled",
      items: "7 items",
      method: "In-store pickup",
    },
    {
      orderNo: "#123464",
      date: "Tuesday at 4:30pm",
      customer: "Nida",
      channel: "Online store",
      total: "$35.00",
      status: "unfulfilled",
      items: "2 items",
      method: "Doorstep pickup",
    },
    {
      orderNo: "#123465",
      date: "Wednesday at 8:00pm",
      customer: "Farhan",
      channel: "Mobile app",
      total: "$50.00",
      status: "fulfilled",
      items: "4 items",
      method: "Delivery",
    },
  ];

  return (
    <div className="p-7 rounded-lg bg-[#EBEBEB]">
      <h3 className="font-semibold text-2xl">Orders</h3>

      <div className="mt-3 bg-white rounded-lg ">
        <OrdersHeader />
        <div className="overflow-x-auto order">
          <OrdersComponentHeader />
          {arr.map((data) => (
            <OrdersComponent data={data} key={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
