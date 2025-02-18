import { useEffect } from "react";
import { getCollections } from "../../../utils/collectionApi";
import { useSelector } from "react-redux";

export default function ProductOrganization({
  vendor,
  setVendor,
  currentVendor,
  collection,
  setCollection,
  tags,
  setTags,
  currentTags,
  setProductType,
  productType,
  currentProductType,
  price,
  setPrice,
  currentPrice,
  color,
  setColor,
  currentColor,
  brand,
  setBrand,
  currentBrand,
  supplierNo,
  setSupplierNo,
  currentSupplierNo,
  eldasNo,
  setEldasNo,
  currentEldasNo,
}) {
  const collections = useSelector((state) => state.collections)?.map(
    (collection) => {
      return {
        _id: collection._id,
        title: collection.title,
      };
    }
  );
  useEffect(function () {
    getCollections();
  }, []);
  return (
    <div className="bg-white mb-3 p-3  rounded-lg flex flex-col gap-1">
      <h4 className="text-[15px]">Product Organization</h4>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="type" className="text-[14px] -mb-1">
          Product type
        </label>
        <input
          onChange={(e) => setProductType(e.target.value)}
          value={productType}
          type="text"
          name="type"
          id="type"
          placeholder={currentProductType}
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
          onChange={(e) => setVendor(e.target.value)}
          value={vendor}
          id="vendor"
          placeholder={currentVendor}
          className="w-full px-3 py-2 outline-none border border-black rounded-md text-[15px]"
        />
      </div>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="collection" className="text-[14px] -mb-1">
          Collection
        </label>

        <select
          className="w-full cursor-pointer px-3 py-2 outline-none border border-black rounded-md text-[15px]"
          onChange={(e) => {
            setCollection(e.target.value);
          }}
          value={collection}
        >
          <option value="" className="hidden">
            Select
          </option>
          <option value={null}>None</option>

          {collections.map((collection) => {
            return (
              <option key={collection.title} value={collection.title}>
                {collection.title}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="tags" className="text-[14px] -mb-1">
          Tags
        </label>
        <input
          type="text"
          name="tags"
          onChange={(e) => setTags(e.target.value)}
          value={tags}
          id="tags"
          placeholder={currentTags}
          className="w-full px-3 py-2 outline-none border border-black rounded-md text-[15px]"
        />
      </div>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="price" className="text-[14px] -mb-1">
          Price
        </label>
        <input
          type="text"
          name="price"
          onChange={(e) => {
            if (e.target.value >= 0) setPrice(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "e" || e.key === "-" || e.key === "+")
              e.preventDefault();
          }}
          required
          value={price}
          placeholder={`$${currentPrice.toFixed(2)}`}
          id="price"
          min="1"
          inputMode="numeric"
          className="w-full px-3 py-2 outline-none border border-black rounded-md text-[15px] appearance-none"
        />
      </div>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="color" className="text-[14px] -mb-1">
          Color
        </label>
        <input
          type="text"
          name="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
          id="color"
          placeholder={currentColor}
          className="w-full px-3 py-2 outline-none border border-black rounded-md text-[15px]"
        />
      </div>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="brand" className="text-[14px] -mb-1">
          Brand
        </label>
        <input
          type="text"
          name="brand"
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          id="brand"
          placeholder={currentBrand}
          className="w-full px-3 py-2 outline-none border border-black rounded-md text-[15px]"
        />
      </div>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="supplierNo" className="text-[14px] -mb-1">
          Supplier No
        </label>
        <input
          type="text"
          name="supplierNo"
          onChange={(e) => setSupplierNo(e.target.value)}
          value={supplierNo}
          id="supplierNo"
          placeholder={currentSupplierNo}
          className="w-full px-3 py-2 outline-none border border-black rounded-md text-[15px]"
        />
      </div>

      <div className="flex flex-col gap-1 mt-1.5">
        <label htmlFor="eldasNo" className="text-[14px] -mb-1">
          Eldas No
        </label>
        <input
          type="text"
          name="eldasNo"
          onChange={(e) => setEldasNo(e.target.value)}
          value={eldasNo}
          id="eldasNo"
          placeholder={currentEldasNo}
          className="w-full px-3 py-2 outline-none border border-black rounded-md text-[15px]"
        />
      </div>
    </div>
  );
}
