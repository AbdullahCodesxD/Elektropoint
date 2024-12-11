export default function ProductItemDetails({ children }) {
  const details = {
    Type: "EK-041T",
    EAN: "4974052807404",
    Waterproof: "Yes",
    Color: "Black",
    Execution: "Felt-tip pen",
    Brand: "Artline",
    Manufacturer: "Artline",
    "Supplier item number": "120041009",
    "ELDAS No.": "983249289",
    Price: "$25.00",
  };

  return (
    <div className="mt-4 md:min-w-[40%]">
      <h2 className="capitalize text-[30px] font-semibold text-black/80 line-clamp-2">
        {children}
      </h2>

      {Object.keys(details).map((detail) => {
        return (
          <div
            className="flex gap-6 items-center  mt-3 px-1 md:min-w-full"
            key={detail}
          >
            <span className="w-full text-[#333] text-medium">{detail}</span>
            <span className="w-full text-[#333] text-medium">
              {details[detail]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
