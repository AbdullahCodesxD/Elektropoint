import { useState } from "react";
import CollectionProductsProductComponent from "../../../../../components/CollectionProductsProductComponent";
import CollectionProductsHeader from "./CollectionProductsHeader";

const API = import.meta.env.VITE_API;
export default function CollectionProducts({
  products,
  setSelectedProducts,
  selectedProducts,
}) {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) => {
    return product.title
      ?.toLowerCase()
      ?.trim()
      ?.includes(search?.toLowerCase()?.trim());
  });

  const noOfProducts = filteredProducts.length;

  function addAndRemoveProduct(product, add) {
    if (add) {
      setSelectedProducts((products) => [...products, product]);
    } else {
      setSelectedProducts((products) => products.filter((p) => p !== product));
    }
  }
  return (
    <div className=" rounded-lg bg-white overflow-hidden">
      <div className="p-5">
        <CollectionProductsHeader setSearch={setSearch} search={search} />
      </div>

      {noOfProducts === 0 && (
        <p className="text-center pb-5">
          No products found for{" "}
          <span className="break-words max-w-[95%] text-main underline capitalize inline-block">
            {search}
          </span>
        </p>
      )}
      {filteredProducts.map((product, i) => {
        return (
          <CollectionProductsProductComponent
            key={product._id}
            no={i + 1}
            name={product.title}
            status={product.status}
            src={`${API}/products/${product.media[0]}`}
            productId={product._id}
            handler={addAndRemoveProduct}
            isSelected={selectedProducts.includes(product._id)}
          />
        );
      })}
    </div>
  );
}
