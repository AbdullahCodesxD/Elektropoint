import CollectionProductsProductComponent from "../../../../../components/CollectionProductsProductComponent";
import CollectionProductsHeader from "./CollectionProductsHeader";

export default function CollectionProducts() {
  const arr = Array.from({ length: 9 }).fill(null);
  return (
    <div className=" rounded-lg bg-white overflow-hidden">
      <div className="p-5">
        <CollectionProductsHeader />
      </div>
      {arr.map((_, i) => {
        return (
          <CollectionProductsProductComponent
            key={i}
            no={i + 1}
            name={`Schalter ${i + 1}`}
            status="active"
            src="/product.png"
          />
        );
      })}
    </div>
  );
}
