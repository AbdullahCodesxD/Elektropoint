import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function OrdersComponent({
  data,
  isSelected,
  toggleSelected,
  id,
}) {
  const [isChecked, setIsChecked] = useState(isSelected);

  useEffect(() => {
    setIsChecked(isSelected);
  }, [isSelected]);

  const {
    orderNo,
    date,
    customer,
    price,
    fullFilmentStatus,
    paymentStatus,
    noOfItems,
    deliveryMethod,
  } = data;

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    toggleSelected();
  };

  return (
    <Link
      to={`/dashboard/orders/order/${id}`}
      className="p-3 grid min-w-[1250px] justify-between border-t border-dark/60"
      style={{
        gridTemplateColumns: "100px 200px 150px 100px 150px 150px 150px 150px",
      }}
    >
      <div onClick={handleCheckboxClick} className="flex gap-2 items-center">
        <input
          onChange={(e) => setIsChecked((prev) => e.target.checked)}
          type="checkbox"
          checked={isChecked}
          className="h-5 w-5 appearance-none border-2 border-main rounded-md cursor-pointer checked:appearance-auto checked:accent-main checked:bg-main"
        />
        <label className="text-[15px] max-w-[50px] overflow-hidden">
          {orderNo}
        </label>
      </div>

      {/* <p className="text-[15px]">{date}</p>
      <p className="text-[15px]">{customer}</p>
      <p className="text-[15px]">{total}</p>
      <p className="text-[15px]">{status}</p>
      <p className="text-[15px]">{status}</p>
      <p className="text-[15px]">{items}</p>
      <p className="text-[15px]">{method}</p> */}

      <p className="text-[15px]">{new Date(date).toDateString()}</p>
      <p className="text-[15px]">{customer.name}</p>
      <p className="text-[15px]">${String(price.toFixed(2))}</p>
      <p className="text-[15px]">{paymentStatus}</p>
      <p className="text-[15px]">{fullFilmentStatus}</p>
      <p className="text-[15px]">{noOfItems}</p>
      <p className="text-[15px]">{deliveryMethod}</p>
      {/* <p className="text-[15px]">{method}</p> */}
    </Link>
  );
}
