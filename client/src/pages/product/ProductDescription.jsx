import CollectionItemComponent from "../../components/CollectionItemComponent";

export default function ProductDescription({ children }) {
  return (
    <div className="p-3">
      <h3 className="font-semibold text-[26px] uppercase mb-2">
        Product Description
      </h3>

      <p>{children}</p>

      <h4 className="mt-4 mb-2 text-[24px] font-medium">
        Alternative articles
      </h4>

      <CollectionItemComponent
        src="/product.png"
        description="Marking pen edding permanent marker for one time use only."
        pieces={1}
        to="/product/hager surge protection/amazing product"
      >
        Amazing Product
      </CollectionItemComponent>
    </div>
  );
}
