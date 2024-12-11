export default function CollectionsComponent({
  title,
  noOfProducts,
  conditions,
}) {
  return (
    <div className="p-3 grid grid-cols-3 items-center gap-3 border-t-2 border-dark/40">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="appearance-none h-[20px] aspect-square cursor-pointer border-2 border-main rounded-sm checked:appearance-auto"
        />
        <p className="text-medium text-[16px] capitalize">{title}</p>
      </div>

      <p className="text-medium text-[16px]">{noOfProducts}</p>

      <p className="text-medium text-[16px] capitalize">{conditions}</p>
    </div>
  );
}
