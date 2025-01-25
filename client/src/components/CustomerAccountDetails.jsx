import { CalenderSvg } from "./Svgs";

export default function CustomerAccountDetails({ noOfOrders = 0, amount = 0 }) {
  return (
    <div className="px-7 bg-white rounded-lg overflow-hidden flex flex-col md:flex-row  items-center">
      <div className="mx-auto w-fit md:w-full py-4 flex items-center  gap-3">
        <CalenderSvg height={17} />
        All time
      </div>
      <div className="w-full py-4 border-t border-b md:border-t-0 md:border-b-0 md:border-l md:border-r border-dark/10">
        <p className="font-semibold w-fit mx-auto text-[15px] block">
          Amount spent
        </p>
        <p className="font-semibold w-fit mx-auto text-[15px] block">
          ${amount.toFixed(2).padStart(2, 0)}
        </p>
      </div>
      <div className="w-full py-4">
        <p className="font-semibold w-fit mx-auto text-[15px] block">Order</p>
        <p className="font-semibold w-fit mx-auto text-[15px] block">
          {noOfOrders}
        </p>
      </div>
    </div>
  );
}
