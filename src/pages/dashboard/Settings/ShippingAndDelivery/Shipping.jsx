import Button from "../../../../components/Button";
import ShippingComponent from "../../../../components/ShippingComponent";
import CustomShipping from "./CustomShipping";

export default function Shipping() {
  return (
    <div className="bg-white p-4 rounded-lg mt-3">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
        <div>
          <h4 className="font-semibold text-lg">Shipping</h4>
          <p className="text-[14px] text-black/80">
            Choose where you slip and how much you charge for shipping at
            checkout
          </p>
        </div>
        <Button
          type="primary"
          extraClasses="max-w-[190px] py-1.5  font-[400] text-[15px]"
        >
          New Profile
        </Button>
      </div>

      <ShippingComponent />
      <div className="mt-3">
        <CustomShipping />
      </div>
    </div>
  );
}
