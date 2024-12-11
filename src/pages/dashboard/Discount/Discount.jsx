import Button from "../../../components/Button";
import DiscountComponent from "./DiscountComponent";
import DiscountComponentHeader from "./DiscountComponentHeader";
import DiscountHeader from "./DiscountHeader";

export default function Discount() {
  return (
    <div className="p-5 rounded-md bg-[#e8e8e8]">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h3 className="text-xl font-medium">Discounts</h3>
        <Button extraClasses="bg-main text-dark px-5 py-1 text-[15px] rounded-md">
          Create discount
        </Button>
      </div>

      <div className="rounded-lg overflow-hidden mt-3.5">
        <DiscountHeader />
        <div className="overflow-x-auto order">
          <DiscountComponentHeader />

          <DiscountComponent />
          <DiscountComponent />
        </div>
      </div>
    </div>
  );
}
