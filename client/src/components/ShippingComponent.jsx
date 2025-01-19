export default function ShippingComponent() {
  return (
    <div className=" py-4 px-3 border border-dark/10 rounded-lg">
      <h4 className="font-semibold text-lg">General shipping rates</h4>

      <div className="flex gap-20 mt-3">
        <div>
          <h4 className="font-semibold text-base">General </h4>
          <p className="text-black/80 text-[15px]">All products</p>
        </div>

        <div>
          <h4 className="font-semibold text-base">Rates for </h4>
          <p className="text-black/80 text-[15px]">International</p>
        </div>
      </div>
    </div>
  );
}
