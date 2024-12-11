import Button from "../../../components/Button";

export default function OrdersDraft() {
  return (
    <div className="bg-[#ebebeb] pb-[150px] md:pb-7 p-7 rounded-lg">
      <h2 className="text-2xl font-semibold">Draft Orders</h2>

      <div className="bg-white  rounded-lg my-5 flex flex-col items-center justify-center px-5 py-[100px]">
        <img className="max-w-[200px]" src="/draft.png" alt="draft image" />

        <h3 className="font-semibold text-lg mt-5 mb-2">
          Manual create orders and invoices
        </h3>
        <p className="max-w-[500px] text-center text-[15px]">
          Use draft orders to take orders over the phone, email invoices to
          customers, and collect payments
        </p>

        <Button
          type="primary"
          extraClasses="max-w-fit px-8 mt-3 py-2 text-[14px] font-medium"
        >
          Create draft order
        </Button>
      </div>
    </div>
  );
}
