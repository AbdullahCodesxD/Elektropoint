export default function OrdersComponentHeader() {
  return (
    <div
      className="p-3 grid min-w-[1250px] justify-between border-t  border-dark"
      style={{
        gridTemplateColumns: "100px 200px 150px 100px 150px 150px 150px 150px",
      }}
    >
      <div className=" flex gap-2 items-center ">
        <input
          id="checkbox"
          type="checkbox"
          className="h-5 w-5 appearance-none border-2 border-main rounded-md cursor-pointer checked:appearance-auto checked:accent-main checked:bg-main"
        />

        <label className="text-[15px]" htmlFor="checkbox">
          Orders
        </label>
      </div>

      <select className="text-[15px] w-fit" name="" id="">
        <option value="date">Date</option>
      </select>

      <p className="text-[15px]">Customer</p>

      <p className="text-[15px]">Total</p>

      <p className="text-[15px]">Payment Status</p>

      <p className="text-[15px]">Fulfillment status</p>

      <p className="text-[15px]">Items</p>

      <p className="text-[15px]">Delivery Methods</p>
    </div>
  );
}
