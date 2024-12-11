import Button from "./Button";
import { PaidSvg } from "./Svgs";

export default function OrdersDetailsPaid() {
  const arrOfDetails = [
    ["Subtotal", "1 item", "$0.00"],
    [
      "Shipping",
      "Doorstep Pickup (5 Kg : 1 tem 0.5 kg : Package 1.5  ",
      "$0.00",
    ],
    ["Total", "$0.00"],
    ["Paid", "$0.00"],
  ];
  return (
    <div className="bg-white p-3 rounded-lg">
      <Button type="orderDetailsOrder">
        <PaidSvg height={15} />
        Paid
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
          className={`text-[15px] ${i === 0 && "font-semibold"}`}
          key={i + item}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
