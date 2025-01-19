import { Link } from "react-router-dom";

export default function OrdersComponent({ data }) {
  const { orderNo, date, customer, channel, total, status, items, method } =
    data;

  const handleCheckboxClick = (e) => {
    // Stop event propagation to prevent Link navigation
    e.stopPropagation();
  };

  return (
    <Link
      to="/dashboard/orders/order/order"
      className="p-3 grid min-w-[1250px] justify-between border-t border-dark/60"
      style={{
        gridTemplateColumns: "100px 200px 150px 100px 150px 150px 150px 150px",
      }}
    >
      <div
        onClick={handleCheckboxClick} // Prevents navigation on parent div click
        className="flex gap-2 items-center"
      >
        <input
          type="checkbox"
          className="h-5 w-5 appearance-none border-2 border-main rounded-md cursor-pointer checked:appearance-auto checked:accent-main checked:bg-main"
        />
        <label className="text-[15px]">{orderNo}</label>
      </div>

      <p className="text-[15px]">{date}</p>
      <p className="text-[15px]">{customer}</p>
      <p className="text-[15px]">{total}</p>
      <p className="text-[15px]">{status}</p>
      <p className="text-[15px]">{status}</p>
      <p className="text-[15px]">{items}</p>
      <p className="text-[15px]">{method}</p>
    </Link>
  );
}
