import Shipping from "./Shipping";

export default function ShippingAndDelivery() {
  return (
    <div className="bg-[#EBEBEB] px-5 rounded-lg py-7 min-h-[80vh] md:min-h-[initial]">
      <div className="max-w-screen-lg">
        <h3 className="font-semibold text-xl">Shipping and delivery</h3>

        <Shipping />
      </div>
    </div>
  );
}
