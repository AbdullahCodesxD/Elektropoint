import Button from "./Button";
import { UnfulfilledSvg } from "./Svgs";

const API = import.meta.env.VITE_API;

export default function OrdersDetailsOrder({
  fullFilmentStatus,
  productName,
  price,
  deliveryMethod,
  src,
}) {
  return (
    <div className="">
      <div className="flex flex-col p-3 items-end md:flex-row md:items-center justify-between gap-5 mt-2 md:p-2 border-2 rounded-md border-dark/10">
        <div className="flex items-center justify-center gap-3">
          <img
            src={src ? `${API}/products/${src}` : "/product.png"}
            className="h-[90px] aspect-square object-contain rounded-lg border-2 border-dark/10"
          />
          <div>
            <h4 className="text-[15px] font-semibold text-dark/70 capitalize">
              {productName}
            </h4>
            {/* <p className="text-[15px] text-dark/70 max-w-[250px] leading-[1.1] capitalize">
              {productDescription}
            </p> */}
          </div>
        </div>

        <span>${price?.toFixed(2)?.padEnd(2, 0)}</span>

        <Button type="orderDetailsOrder" extraClasses="capitalize">
          {fullFilmentStatus} Item
        </Button>
      </div>
    </div>
  );
}
