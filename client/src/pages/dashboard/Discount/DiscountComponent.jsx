export default function DiscountComponent({ discount }) {
  console.log(discount);
  return (
    <div
      className="px-5 py-2 bg-white grid gap-4 min-w-[1100px] border-t border-dark/70  "
      style={{
        gridTemplateColumns: "300px repeat(3,1fr)",
      }}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="appearance-none h-[20px] aspect-square roudned-md border-2 border-main checked:appearance-auto cursor-pointer "
        />
        <p className="flex flex-col capitalize">
          {discount.name}
          {/* <span className="text-[10px]">
            {`${discount.percentage || 0}% off on ${
              discount.collections.length
            } collections`}
          </span> */}
        </p>
      </div>
      <p className="capitalize w-[75px] text-center bg-main h-fit my-auto mx-auto text-[14px] px-4 py-1 rounded-md">
        {discount.status}
      </p>

      <p className="w-fit my-auto mx-auto text-center text-[14px]">
        {`${discount.combination ? "Set to combined" : "Not set to combined"}`}
      </p>
      <p className="w-fit my-auto mx-auto text-center text-[15px]">
        {discount.noOfTimesUsed}
      </p>
    </div>
  );
}
