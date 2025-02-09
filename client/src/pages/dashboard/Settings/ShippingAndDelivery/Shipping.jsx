import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getShippingAmounts } from "../../../../utils/shippingApi";

import Button from "../../../../components/Button";
import ShippingComponent from "../../../../components/ShippingComponent";
import CustomShipping from "./CustomShipping";

export default function Shipping() {
  const shippings = useSelector((state) => state.shipping.amounts);

  useEffect(function () {
    getShippingAmounts();
  }, []);

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
          to="new"
          extraClasses="max-w-[190px] py-1.5  font-[400] text-[15px]"
        >
          New Profile
        </Button>
      </div>

      {shippings.map((shipping) => {
        return <ShippingComponent key={shipping._id} data={shipping} />;
      })}
      {/* <div className="mt-3">
        <CustomShipping />
      </div> */}
    </div>
  );
}
