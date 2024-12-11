import Button from "../../components/Button";

export default function CardDetails() {
  return (
    <div className="py-3">
      <p className="text-[14px] mt-1">Pay secure using your card</p>

      <form>
        <label htmlFor="cardNumber" className="mt-2 block">
          Card Number
        </label>
        <input
          className="block w-full px-3 py-2.5 rounded-md bg-white border border-[#999] "
          type="text"
          id="cardNumber"
        />

        <label htmlFor="cardHolder" className="mt-2 block">
          Cardholder Name
        </label>
        <input
          className="block w-full px-3 py-2.5 rounded-md bg-white border border-[#999] "
          type="text"
          id="cardHolder"
        />

        <div className="flex gap-3 items-center justify-evenly mt-2 mb-5">
          <div>
            <label htmlFor="month">Month</label>
            <input
              className="block w-full px-3 py-2.5 rounded-md bg-white border border-[#999] "
              type="text"
              id="month"
            />
          </div>

          <div>
            <label htmlFor="year">Year</label>
            <input
              className="block w-full px-3 py-2.5 rounded-md bg-white border border-[#999] "
              type="text"
              id="year"
            />
          </div>

          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              className="block w-full px-3 py-2.5 rounded-md bg-white border border-[#999] "
              type="text"
              id="cvv"
            />
          </div>
        </div>

        <Button to="/order-complete" type="primary">
          Place Order
        </Button>
      </form>
    </div>
  );
}
