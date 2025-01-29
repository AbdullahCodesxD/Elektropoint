export default function CollectionProductsHeader({ setSearch, search }) {
  return (
    <div>
      <h4 className="text-lg">Products</h4>

      <input
        type="text"
        className="px-3 mt-1 py-1.5 outline-none border border-dark/20 w-full rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Product"
      />
    </div>
  );
}
