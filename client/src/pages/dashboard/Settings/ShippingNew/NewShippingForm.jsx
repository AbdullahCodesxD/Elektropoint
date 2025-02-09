import { useState } from "react";
import Button from "../../../../components/Button";
import { createShippingAmount } from "../../../../utils/shippingApi";

export default function NewShippingForm() {
  const [type, setType] = useState("fixed");
  const [country, setCountry] = useState("switzerland");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const amountData =
      type === "dynamic"
        ? {
            dynamicAmount: [
              {
                from,
                to,
                amount,
              },
            ],
          }
        : {
            amount: [
              {
                from,
                to,
                amount,
              },
            ],
          };
    const data = {
      type,
      name,
      country,
      ...amountData,
    };
    createShippingAmount(data);
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-[700px]">
      <div className="mb-1 flex flex-col gap-2">
        <label
          htmlFor="type"
          className="mt-1 pl-0.5 -mb-2 text-base font-medium"
        >
          Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full cursor-pointer max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
        >
          <option value="fixed">Fixed</option>
          <option value="dynamic">Dynamic</option>
        </select>
      </div>

      <div className="mb-1 flex flex-col gap-2">
        <label
          htmlFor="type"
          className="mt-1 pl-0.5 -mb-2 text-base font-medium"
        >
          Country
        </label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full cursor-pointer max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
        >
          <option value="switzerland">Switzerland</option>
          <option value="others">Others</option>
        </select>
      </div>

      <div className="mb-1 flex flex-col gap-2">
        <label
          htmlFor="name"
          className="mt-1 pl-0.5 -mb-2 text-base font-medium"
        >
          Name
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
          className="w-full max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
        />
      </div>

      <div className="mb-1 flex flex-col gap-2">
        <label
          htmlFor="amount"
          className="mt-1 pl-0.5 -mb-2 text-base font-medium"
        >
          Amount
        </label>
        <input
          required
          value={amount}
          id="amount"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setAmount(value);
          }}
          className="w-full appearance-none max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
        />
      </div>

      <div className="mb-1 flex flex-col gap-2">
        <label
          htmlFor="apply-to"
          className="mt-1 pl-0.5 -mb-2 text-base font-medium"
        >
          Apply only when product price is between
        </label>

        <div className="flex gap-4">
          <div className="w-full">
            <label
              htmlFor="from"
              className="mt-1  pl-1 -mb-2 text-base font-medium"
            >
              From
            </label>
            <input
              required
              value={from}
              id="from"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setFrom(value);
              }}
              className="w-full  appearance-none max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="to"
              className="mt-1  pl-1 -mb-2 text-base font-medium"
            >
              To
            </label>
            <input
              required
              value={to}
              id="to"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setTo(value);
              }}
              className="w-full  appearance-none max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
            />
          </div>
        </div>
      </div>
      <Button extraClasses="ml-auto block w-fit bg-main text-white px-12 py-1.5 rounded-md mt-3  transition-all hover:opacity-80">
        Create
      </Button>
    </form>
  );
}
