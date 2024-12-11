import Button from "./Button";
import { UnfulfilledSvg } from "./Svgs";

export default function OrdersDetailsOrder() {
  return (
    <div className="bg-white p-3 rounded-md">
      <Button type="orderDetailsOrder">
        <UnfulfilledSvg height={17} />
        Unfulfilled
      </Button>

      <div className="mt-6">
        <p className="text-[15px] text-dark/70">Delivery methods</p>
        <p className="text-[15px] text-dark/70">Doorstep Pickup</p>
      </div>

      <div className="flex items-center justify-between gap-5 mt-2 p-2 border-2 rounded-md border-dark/10">
        <div className="flex items-center justify-center gap-3">
          <img
            src="/product.png"
            className="h-[90px] aspect-square object-fit rounded-lg border-2 border-dark/10"
          />
          <div>
            <h4 className="text-[15px] font-semibold text-dark/70">Schalter</h4>
            <p className="text-[15px] text-dark/70 max-w-[250px] leading-[1.1]">
              Schalter Dometic Electrolux 230V beleuchtet grün
            </p>
          </div>
        </div>

        <span>$0.00</span>

        <Button type="orderDetailsOrder">Fulfilled Item</Button>
      </div>
    </div>
  );
}
