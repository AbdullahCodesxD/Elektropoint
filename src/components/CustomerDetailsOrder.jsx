import Button from "./Button";

export default function CustomerDetailsOrder() {
  return (
    <div className="bg-white p-3 rounded-md">
      <h3 className="font-semibold text-lg">Last order place</h3>

      <div className="mt-5 p-3 border-2 border-dark/10 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <p className="text-lg font-medium">#10228</p>

          <p className="bg-white border border-dark/10 text-[14px] px-3 font-medium py-1 rounded-md flex items-center gap-1">
            <span className="block h-[7px] aspect-square rounded-full bg-main"></span>{" "}
            Paid
          </p>
          <p className="text-[14px] px-3 font-medium py-1 rounded-md bg-main ">
            Unfulfilled
          </p>
        </div>

        {/* ///////////// */}
        <div className="flex items-center justify-between gap-5 mt-2 p-2 border-2 rounded-md border-dark/10">
          <div className="flex items-center justify-center gap-3">
            <img
              src="/product.png"
              className="h-[70px] aspect-square object-fit rounded-lg border-2 border-dark/10"
            />
            <div>
              <h4 className="text-[15px] font-semibold text-dark/70">
                Schalter
              </h4>
              <p className="text-[15px] text-dark/70 max-w-[250px] leading-[1.1]">
                Schalter Dometic Electrolux 230V beleuchtet grün
              </p>
            </div>
          </div>
          <span>1x</span>
          <span>$0.00</span>
        </div>
      </div>
    </div>
  );
}
