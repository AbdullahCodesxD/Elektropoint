export default function DiscountComponent() {
  return (
    <div
      className="px-5 py-2 bg-white grid gap-4 min-w-[1100px] border-t border-dark/70  "
      style={{
        gridTemplateColumns: "300px repeat(5,1fr)",
      }}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="appearance-none h-[20px] aspect-square roudned-md border-2 border-main checked:appearance-auto cursor-pointer "
        />
        <p className="flex flex-col">
          Doorstep pickup
          <span className="text-[10px]">
            100% off 10 Collection + minimum purchase of $1.00
          </span>
        </p>
      </div>
      <p className="w-fit bg-main h-fit my-auto mx-auto text-[14px] px-4 py-1 rounded-md">
        Active
      </p>
      <p className="w-fit my-auto mx-auto text-center text-[15px]">Automatic</p>
      <p className="w-fit my-auto mx-auto text-center text-[15px]">
        Amount of product
      </p>
      <p className="w-fit my-auto mx-auto text-center text-[14px]">
        Not set to combined
      </p>
      <p className="w-fit my-auto mx-auto text-center text-[15px]">0</p>
    </div>
  );
}
