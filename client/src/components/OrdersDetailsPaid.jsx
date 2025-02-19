import Button from "./Button";
import { PaidSvg } from "./Svgs";

export default function OrdersDetailsPaid({
  paymentStatus,
  deliveryMethod,
  noOfItems,
  price = 0,
  shipping = 0,
}) {
  const arrOfDetails = [
    [
      "Subtotal",
      `${noOfItems} ${noOfItems > 1 ? "items" : "item"}`,
      `$${price?.toFixed(2)}`,
    ],
    [
      "Shipping",
      // "Doorstep Pickup (5 Kg : 1 tem 0.5 kg : Package 1.5  ",
      `${deliveryMethod}`,
      `$${shipping.toFixed(2)}`,
    ],
    ["Total", `$${(price + shipping).toFixed(2).padEnd(2, 0)}`],
    ["Paid", `$${(price + shipping).toFixed(2).padEnd(2, 0)}`],
  ];
  return (
    <div className="bg-white p-3 rounded-lg">
      <Button type="orderDetailsOrder" extraClasses="capitalize">
        <PaidSvg height={15} />
        {paymentStatus}
      </Button>

      <div className="rounded-lg overflow-hidden border mt-5 border-t-0 border-dark/10">
        {arrOfDetails.map((item) => (
          <OrdersDetailsPaidComponent key={item} items={item} />
        ))}
      </div>
    </div>
  );
}

function OrdersDetailsPaidComponent({ items }) {
  return (
    <div className="p-2 border-t flex items-center justify-between gap-5">
      {items.map((item, i) => (
        <p
          className={`text-[15px] ${i === 0 && "font-semibold"} capitalize `}
          key={i + item}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
