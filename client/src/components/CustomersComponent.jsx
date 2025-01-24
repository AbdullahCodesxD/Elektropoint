import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CustomersComponent({
  data,
  isSelected,
  toggleSelected,
}) {
  const [isChecked, setIsChecked] = useState(isSelected);

  useEffect(() => {
    setIsChecked(isSelected);
  }, [isSelected]);

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    toggleSelected();
  };

  return (
    <Link
      to="/dashboard/customers/customer/customer"
      className="p-3 grid min-w-[1000px] justify-between border-t border-dark/60"
      style={{
        gridTemplateColumns: "200px 150px 150px 120px 120px ",
      }}
    >
      <div
        onClick={handleCheckboxClick} // Prevents navigation on parent div click
        className="flex gap-2 items-center"
      >
        <input
          onChange={(e) => setIsChecked((prev) => e.target.checked)}
          checked={isChecked}
          type="checkbox"
          className="h-5 w-5 appearance-none border-2 border-main rounded-md cursor-pointer checked:appearance-auto checked:accent-main checked:bg-main"
        />

        <p className="font-medium line-clamp-1 text-[15px]">{data.name}</p>
      </div>

      <p className="text-[15px] text-center">
        {data.emailSubscription ? "Subscribed" : "Not subscribed"}
      </p>
      <p className="text-[15px] text-center capitalize line-clamp-1">
        {data.address}
      </p>
      <p className="text-[15px] text-center">{data.noOfOrders}</p>
      <p className="text-[15px] text-center">
        $
        {Number(data.amountSpent || "0")
          .toFixed(2)
          .padEnd(2, 0)}
      </p>
    </Link>
  );
}
