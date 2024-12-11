export default function ProductOrganization() {
  return (
    <div className="bg-white mb-3 p-3  rounded-lg flex flex-col gap-1">
      <h4 className="text-[15px]">Product Organization</h4>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="type" className="text-[14px] -mb-1">
          Product type
        </label>
        <input
          type="text"
          name="type"
          id="type"
          className="w-full px-3 py-2 outline-none border border-black rounded-md text-[15px]"
        />
      </div>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="vendor" className="text-[14px] -mb-1">
          Vendor
        </label>
        <input
          type="text"
          name="vendor"
          id="vendor"
          className="w-full px-3 py-2 outline-none border border-black rounded-md text-[15px]"
        />
      </div>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="collection" className="text-[14px] -mb-1">
          Collection
        </label>
        <input
          type="text"
          name="collection"
          id="collection"
          className="w-full px-3 py-2 outline-none border border-black rounded-md text-[15px]"
        />
      </div>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="tags" className="text-[14px] -mb-1">
          Tags
        </label>
        <input
          type="text"
          name="tags"
          id="tags"
          className="w-full px-3 py-2 outline-none border border-black rounded-md text-[15px]"
        />
      </div>
    </div>
  );
}
