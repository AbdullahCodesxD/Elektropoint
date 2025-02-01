import { useEffect } from "react";
import Button from "../../../components/Button";
import DiscountComponent from "./DiscountComponent";
import DiscountComponentHeader from "./DiscountComponentHeader";
import DiscountHeader from "./DiscountHeader";
import { useSelector } from "react-redux";
import { getDiscount } from "../../../utils/discountApi";

export default function Discount() {
  const discounts = useSelector((state) => state.discounts.discounts);

  useEffect(function () {
    getDiscount();
  }, []);
  return (
    <div className="p-5 rounded-md bg-[#e8e8e8] min-h-[70vh] md:min-h-[initial]">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h3 className="text-xl font-medium">Discounts</h3>
        <Button
          to="new"
          extraClasses="bg-main text-dark px-5 py-1 text-[15px] rounded-md"
        >
          Create discount
        </Button>
      </div>

      <div className="rounded-lg overflow-hidden mt-3.5">
        <DiscountHeader />
        <div className="overflow-x-auto order">
          <DiscountComponentHeader />

          {discounts.map((discount) => {
            return <DiscountComponent key={discount._id} discount={discount} />;
          })}
        </div>
      </div>
    </div>
  );
}
