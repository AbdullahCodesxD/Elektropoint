import CollectionItemComponent from "../../components/CollectionItemComponent";

export default function ProductDescription({ children }) {
  return (
    <div className="p-3 bg-white">
      <h3 className="font-semibold text-[26px] uppercase mb-2">
        Product Description
      </h3>

      {children}
    </div>
  );
}
