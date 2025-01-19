import CollectionItemComponent from "../../components/CollectionItemComponent";

export default function CollectionItems() {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="p-3 mt-5 flex flex-col gap-4">
      {arr.map((i) => (
        <CollectionItemComponent
          key={i}
          src="/product.png"
          description="Marking pen edding permanent marker for one time use only."
          pieces={1}
          to="/product/hager surge protection/amazing product"
        >
          Amazing Product
        </CollectionItemComponent>
      ))}
    </div>
  );
}
