export default function CustomersComponentHeader() {
  return (
    <div
      className="p-3 grid min-w-[900px] bg-[#F0F0F0] justify-between border-t  border-dark"
      style={{
        gridTemplateColumns: "200px 150px 150px 120px 120px ",
      }}
    >
      <div className=" flex gap-2 items-center ">
        <input
          id="checkbox"
          type="checkbox"
          className="h-5 w-5 appearance-none border-2 border-main rounded-md cursor-pointer checked:appearance-auto checked:accent-main checked:bg-main"
        />

        <p className="text-[15px] text-center">Customer Name</p>
      </div>

      <p className="text-[15px] text-center">Email Subscription</p>

      <p className="text-[15px] text-center">Location</p>

      <p className="text-[15px] text-center">Order</p>

      <p className="text-[15px] text-center">Amout Spent</p>
    </div>
  );
}
