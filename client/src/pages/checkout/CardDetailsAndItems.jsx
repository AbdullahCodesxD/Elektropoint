import { useSelector } from "react-redux";
import CardDetails from "./CardDetails";

export default function CardDetailsAndItems() {
  const cart = useSelector((state) => state.cart);
  const order = cart.cart.map(
    (item) => `${item.product.title} * ${item.quantity}`
  );
  return (
    <div className="m-3 p-5 bg-[#eaeaea] h-fit rounded-md">
      <h2 className="text-[28px] font-medium mb-1 ">Your Order</h2>
      <div className="pb-3">
        {order.map((_, i) => (
          <p key={_} className="mb-0.5 text-[15px]">
            {_}
          </p>
        ))}
      </div>

      <div className="py-3 border-t border-b border-black">
        <p>Subtotal</p>
        <span>${cart.price?.toFixed(2)}</span>
      </div>
      <div className="py-3">
        <p>Tax</p>
        <span>$00.00</span>
      </div>
      <div className="py-3 border-t border-b border-black">
        <p>Total</p>
        <span>${cart.price?.toFixed(2)}</span>

        {/* <span>$200.00</span> */}
      </div>

      <CardDetails />
    </div>
  );
}
