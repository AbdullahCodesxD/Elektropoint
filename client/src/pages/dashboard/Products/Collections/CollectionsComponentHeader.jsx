export default function CollectionsComponentHeader({ selectAll, selected }) {
  const isAllSelected =
    selected.length > 0
      ? selected.map((select) => select.selected)?.indexOf(false)
      : 0;

  return (
    <div className="p-3 grid grid-cols-3 items-center gap-3 border-t-2 border-dark/40">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="appearance-none h-[20px] aspect-square cursor-pointer border-2 border-main rounded-sm checked:appearance-auto"
          checked={isAllSelected === -1}
          onChange={selectAll}
        />
        <p className="text-medium text-[17px]">Title</p>
      </div>

      <p className="text-medium text-[17px]">Products</p>

      <p className="text-medium text-[17px]">Product Conditions</p>
    </div>
  );
}
