import Button from "../../../../components/Button";
import { BackSvg } from "../../../../components/Svgs";
import NewShippingForm from "./NewShippingForm";

export default function ShippingNew() {
  return (
    <div className="bg-white p-3 pb-[200px] md:pb-3 rounded-md">
      <div className="flex gap-3 items-center">
        <Button to="/dashboard/settings/shipping">
          <BackSvg height={16} />
        </Button>
        <h4 className="text-xl font-semibold">Create Shipping</h4>
      </div>

      <NewShippingForm />
    </div>
  );
}
