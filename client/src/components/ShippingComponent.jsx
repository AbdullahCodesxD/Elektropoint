export default function ShippingComponent({ data }) {
  console.log(data, "---");
  return (
    <div className=" py-4 px-3 border border-dark/10 rounded-lg">
      <h4 className="font-semibold text-lg">General shipping rates</h4>

      <div className="flex gap-20 mt-3">
        <div>
          <h4 className="font-semibold text-base">
            Country :{" "}
            <span className="capitalize text-main">{data.country}</span>{" "}
          </h4>

          {data?.dynamicAmount.length > 0 && (
            <p className="text-black/80 text-[15px]">
              Shipping fee of {data.dynamicAmount?.at(0)?.amount}% to products
              between ${data.dynamicAmount?.at(0)?.from} - $
              {data.dynamicAmount?.at(0)?.to}
            </p>
          )}
          {data?.amount.length > 0 && (
            <p className="text-black/80 text-[15px]">
              Shipping fee of ${data.amount?.at(0)?.amount} to products between
              ${data.amount?.at(0)?.from} - ${data.amount?.at(0)?.to}
            </p>
          )}
        </div>
        {/* 
        <div>
          <h4 className="font-semibold text-base">Rates for </h4>
          <p className="text-black/80 text-[15px]">{data.country}</p>
        </div> */}
      </div>
    </div>
  );
}
