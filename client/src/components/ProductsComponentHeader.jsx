export default function ProductsComponentHeader({ selectAll, selected }) {
  const isAllSelected =
    selected.length > 0
      ? selected.map((select) => select.selected)?.indexOf(false)
      : 0;

  return (
    <div
      className="p-3 grid min-w-[1000px] justify-between border-t  border-dark"
      style={{
        gridTemplateColumns: "270px 150px 150px  120px 150px",
      }}
    >
      <div className=" flex gap-2 items-center ">
        <input
          id="checkbox"
          type="checkbox"
          checked={isAllSelected === -1}
          onChange={selectAll}
          className="h-5 w-5 appearance-none border-2 border-main rounded-md cursor-pointer checked:appearance-auto checked:accent-main checked:bg-main"
        />

        {/* <select className="text-[15px] w-fit" name="" id="">
          <option value="date">Product</option>
        </select> */}
        <p className="text-[15px] w-fit">Product</p>
      </div>

      <p className="text-[15px] text-center">Status</p>

      <p className="text-[15px] text-center">Inventory</p>

      {/* <p className="text-[15px] text-center">Sales channels</p> */}

      <p className="text-[15px] text-center">Category</p>

      <p className="text-[15px] text-center">Vendor</p>
    </div>
  );
}
