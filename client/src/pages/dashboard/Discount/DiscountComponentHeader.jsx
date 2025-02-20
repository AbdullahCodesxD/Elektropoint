export default function DiscountComponentHeader({ selectAll, selected }) {
  const isAllSelected =
    selected.length > 0
      ? selected.map((select) => select.selected)?.indexOf(false)
      : 0;

  return (
    <div
      className="px-5 py-3 bg-white grid gap-4 min-w-[1100px]   "
      style={{
        gridTemplateColumns: "300px repeat(3,1fr)",
      }}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isAllSelected === -1}
          onChange={selectAll}
          className="appearance-none h-[20px] aspect-square roudned-md border-2 border-main checked:appearance-auto cursor-pointer "
        />
        <p className="text-center">Title</p>
      </div>
      <p className="text-center">Status</p>
      <p className="text-center">Combination</p>
      <p className="text-center">Used</p>
    </div>
  );
}
