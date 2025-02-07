import { useState } from "react";
import Button from "../../../../components/Button";

export default function NewStoreForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-[700px]">
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
          htmlFor="email"
          className="mt-1 pl-0.5 -mb-2 text-base font-medium"
        >
          Email
        </label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
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
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          id="adresss"
          type="text"
          className="w-full max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
        />
      </div>

      <Button extraClasses="ml-auto block w-fit bg-main text-white px-12 py-1.5 rounded-md mt-3  transition-all hover:opacity-80">
        Create
      </Button>
    </form>
  );
}
