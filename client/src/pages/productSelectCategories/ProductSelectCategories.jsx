import ProductSelectCategoriesComponent from "../../components/ProductSelectCategoriesComponent";

export default function ProductSelectCategories() {
  const arr = Array.from({ length: 9 }).fill("Chal o chal");
  return (
    <div
      className="p-3 flex flex-col gap-4 mt-2 md:grid"
      style={{
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      {arr.map((_, i) => (
        <ProductSelectCategoriesComponent
          key={i}
          products={2}
          src="/product.png"
        >
          Earthing & lighting protection
        </ProductSelectCategoriesComponent>
      ))}
    </div>
  );
}
