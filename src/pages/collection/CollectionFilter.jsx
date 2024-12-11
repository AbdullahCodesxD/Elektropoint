export default function CollectionFilter({ filter, setFilter }) {
  return (
    <div className="px-3 mb-3">
      <select
        className="w-full outline-none bg-transparent pb-1 border-b border-dark"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option className="hidden" value="">
          Filter
        </option>
        <option value="price">Price</option>
      </select>
    </div>
  );
}
