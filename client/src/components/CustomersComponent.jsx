import { Link } from "react-router-dom";

export default function CustomersComponent() {
  const handleCheckboxClick = (e) => {
    // Stop event propagation to prevent Link navigation
    e.stopPropagation();
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
          type="checkbox"
          className="h-5 w-5 appearance-none border-2 border-main rounded-md cursor-pointer checked:appearance-auto checked:accent-main checked:bg-main"
        />

        <p className="font-medium line-clamp-1 text-[15px]">Abdullahcodesxd</p>
      </div>

      <p className="text-[15px] text-center">Not subscribed</p>
      <p className="text-[15px] text-center">99 stock in 1 variant</p>
      <p className="text-[15px] text-center">2</p>
      <p className="text-[15px] text-center">Electronics</p>
    </Link>
  );
}
