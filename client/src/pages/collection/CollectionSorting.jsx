export default function CollectionSorting({
  sortBy,
  setSortBy,

  noOfItems,

  onlyStockItems,
  setOnlyStockItems,
}) {
  return (
    <div className="p-3">
      <h2 className="text-[24px] font-medium">{noOfItems} articles</h2>

      <div className="flex items-end justify-between gap-3 ">
        <div className="flex items-center gap-1">
          <input
            id="checkbox"
            type="checkbox"
            className="h-full w-[25px] aspect-square cursor-pointer"
            onChange={(e) => setOnlyStockItems(e.target.checked)}
            defaultChecked={onlyStockItems}
          />
          <label
            className="text-[#595959] text-[14px] cursor-pointer"
            htmlFor="checkbox"
          >
            Stock items only
          </label>
        </div>

        <div className="flex flex-col justify-center gap-0.5">
          <label
            className="text-[#595959] text-[14px] cursor-pointer"
            htmlFor="sorting"
          >
            Sorting
          </label>
          <select
            className="outline-none border p-1 border-black/30 text-[14px] w-[160px]"
            id="sorting"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option className="hidden" value="">
              Please Select
            </option>
            <option value="price">Price</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>
    </div>
  );
}
