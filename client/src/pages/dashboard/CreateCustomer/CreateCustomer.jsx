import { useState } from "react";
import Button from "../../../components/Button";
import { createCustomer } from "../../../utils/customerApi";

export default function CreateCustomer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email) return;

    createCustomer({ name, email, address }, true);
    setName("");
    setEmail("");
    setAddress("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-[20px] bg-white rounded-lg shadow-md "
    >
      <div className="max-w-[700px]">
        <div className="mb-1 flex flex-col gap-2">
          <label
            htmlFor="name"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Name
          </label>
          <input
            required
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
          />
        </div>
        <div className="mb-1 flex flex-col gap-2">
          <label
            htmlFor="email"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Email
          </label>
          <input
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
          />
        </div>

        <div className="mb-1 flex flex-col gap-2">
          <label
            htmlFor="adress"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Address
          </label>
          <input
            id="adress"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="w-full max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
          />
        </div>

        <Button extraClasses="ml-auto block w-fit bg-main text-white px-12 py-1.5 rounded-md mt-3  transition-all hover:opacity-80">
          Create
        </Button>
      </div>
    </form>
  );
}
