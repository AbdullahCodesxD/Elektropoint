import { CalenderSvg } from "./Svgs";

export default function CustomerAccountDetails() {
  return (
    <div className="px-7 bg-white rounded-lg overflow-hidden flex items-center">
      <div className="w-full py-4 flex items-center gap-3">
        <CalenderSvg height={17} />
        All time
      </div>
      <div className="w-full py-4 border-l border-r border-dark/10">
        <p className="font-semibold w-fit mx-auto text-[15px] block">
          Amount spent
        </p>
        <p className="font-semibold w-fit mx-auto text-[15px] block">$0.00</p>
      </div>
      <div className="w-full py-4">
        <p className="font-semibold w-fit mx-auto text-[15px] block">Order</p>
        <p className="font-semibold w-fit mx-auto text-[15px] block">4</p>
      </div>
    </div>
  );
}
