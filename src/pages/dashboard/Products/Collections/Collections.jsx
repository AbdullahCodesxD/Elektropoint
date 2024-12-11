import CollectionsComponent from "./CollectionsComponent";
import CollectionsComponentHeader from "./CollectionsComponentHeader";
import CollectionsHeader from "./CollectionsHeader";

export default function Collections() {
  const arr = Array.from({ length: 9 }).fill(null);
  return (
    <div className="p-7 rounded-lg bg-[#EBEBEB]">
      <h3 className="font-semibold text-2xl">Collections</h3>

      <div className="bg-white mt-3 rounded-lg overflow-hidden">
        <CollectionsHeader />
        <CollectionsComponentHeader />

        {arr.map((_, i) => (
          <CollectionsComponent
            key={i}
            title="Schalter"
            noOfProducts="222"
            conditions="Product vendor is equal to schalter"
          />
        ))}
      </div>
    </div>
  );
}
