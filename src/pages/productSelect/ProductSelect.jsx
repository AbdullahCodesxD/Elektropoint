import ProductSelectComponent from "../../components/ProductSelectComponent";

export default function ProductSelect() {
  const arr = Array.from({ length: 9 }).fill("Chal o chal");
  return (
    <div className="p-3 flex flex-col gap-4 mt-2 md:grid md:grid-cols-3">
      {arr.map((_, i) => (
        <ProductSelectComponent price="19.25" src="/slider1.png" key={i}>
          Lightning arrester type 1
        </ProductSelectComponent>
      ))}
    </div>
  );
}
