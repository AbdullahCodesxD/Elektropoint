import Button from "./Button";

export default function ProductsHeader({ slug, children }) {
  const stylesActive = {
    true: "text-[#222]",
    false: "border-r border-[#595959] text-[#595959]",
  };
  return (
    <header className="flex flex-wrap items-center my-3">
      <Button
        extraClasses={stylesActive["false"]}
        to="/"
        type="collectionHeader"
      >
        home
      </Button>

      <Button
        extraClasses={stylesActive["true"]}
        to={`/collection/${slug?.toLowerCase()}`}
        type="collectionHeader"
      >
        {children}
      </Button>
    </header>
  );
}
