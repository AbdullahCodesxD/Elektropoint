import ProductAddToCart from "./ProductAddToCart";

export default function ProductItemDetails({ product, box, children }) {
  const details = {
    Vendor: product.vendor || "No certain vendor",
    Type: product.productType || "No certain type",
    Price: `$${product.price?.toFixed(2) || 0.0}`,
    Available: product.inventory > 0 ? "Yes" : "No",
    Waterproof: "Yes",
    Color: "Black",
    Execution: "Felt-tip pen",
    Brand: product.vendor || "No brand",
    Manufacturer: "Artline",
    "Supplier item number": "120041009",
    "ELDAS No.": "983249289",
  };

  return (
    <div>
      <div className="mt-4 md:min-w-[40%]">
        <h2 className="capitalize max-w-[500px] text-[30px] font-semibold text-black/80 line-clamp-2">
          {children}
        </h2>

        {Object.keys(details).map((detail) => {
          return (
            <div
              className="flex gap-6 items-center  mt-3 px-1 md:min-w-full"
              key={detail}
            >
              <span className="w-full text-[#333] text-medium">{detail}</span>
              <span className="w-full text-[#333] text-medium capitalize">
                {details[detail]}
              </span>
            </div>
          );
        })}
      </div>
      <div className="w-fit mt-3">
        <ProductAddToCart reverse={true} piece={1} price={product.price || 0} />
      </div>
    </div>
  );
}
