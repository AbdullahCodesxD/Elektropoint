import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CollectionsComponent({
  title,
  noOfProducts,
  conditions,
  isSelected,
  toggleSelected,
  id,
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
    <div
      // to={`/dashboard/products/collections/collection/${id}`}
      className="p-3 min-w-[700px] grid grid-cols-3 items-center gap-3 border-t-2 border-dark/40"
    >
      <div onClick={handleCheckboxClick} className="flex items-center gap-2">
        <input
          onChange={(e) => setIsChecked((prev) => e.target.checked)}
          type="checkbox"
          checked={isChecked}
          className="appearance-none h-[20px] aspect-square cursor-pointer border-2 border-main rounded-sm checked:appearance-auto"
        />
        <p className="text-medium text-[16px] capitalize line-clamp-1">
          {title}
        </p>
      </div>

      <p className="text-medium text-[16px]">{noOfProducts}</p>

      <p className="text-medium text-[14px] md:text-base capitalize ">
        {conditions}
      </p>
    </div>
  );
}
