const API = import.meta.env.VITE_API;
import { Link } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function ProductsComponent({
  product,
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
      to={`/dashboard/products/product/${product.title}`}
      className="p-3 grid min-w-[1000px] justify-between border-t border-dark/60"
      style={{
        gridTemplateColumns: "150px 150px 150px 120px 120px 150px",
      }}
    >
      <div
        onClick={handleCheckboxClick} // Prevents navigation on parent div click
        className="flex gap-2 items-center"
      >
        <input
          onChange={(e) => setIsChecked((prev) => e.target.checked)}
          type="checkbox"
          checked={isChecked}
          className="h-5 w-5 min-w-5 min-h-5s appearance-none border-2 border-main rounded-md cursor-pointer checked:appearance-auto checked:accent-main checked:bg-main"
        />

        <div className="flex items-center justify-center gap-1">
          {product.media.length > 0 ? (
            <img
              className="h-[45px] aspect-square object-contain"
              src={`${API}/products/${product.media[0]}`}
              alt={`An image of ${product.title}`}
            />
          ) : (
            <img
              className="h-[45px] aspect-square object-contain"
              src="/product.png"
              alt="An image of product"
            />
          )}
          <p className="font-semibold line-clamp-1 text-[15px] capitalize">
            {product.title}
          </p>
        </div>
      </div>

      <Button type="productsBtn" extraClasses="capitalize w-[90px]">
        {product.status}
      </Button>

      <p className="text-[15px] text-center">99 stock in 1 variant</p>
      <p className="text-[15px] text-center">2</p>
      <p className="text-[15px] text-center capitalize">
        {product?.category?.title || `Vendor : ${product?.vendor}`}
      </p>
      <p className="text-[15px] text-center">Vendor </p>
    </Link>
  );
}
