import { useState } from "react";
import ProductOrganization from "./ProductOrganization";

export default function AddProductRightSide({
  status,
  setStatus,
  vendor,
  setVendor,
  collection,
  setCollection,
  tags,
  setTags,
  setProductType,
  productType,
}) {
  // const [status, setStatus] = useState("active");
  return (
    <div className="h-fit">
      <div className="bg-white mb-3 p-3 pb-5 rounded-lg flex flex-col gap-1">
        <label className="text-[15px]">Status</label>
        <select
          className="w-full outline-none border border-dark rounded-md cursor-pointer text-[15px] p-2"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          value={status}
        >
          <option value="active">Active</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <ProductOrganization
        vendor={vendor}
        setVendor={setVendor}
        collection={collection}
        setCollection={setCollection}
        tags={tags}
        setTags={setTags}
        setProductType={setProductType}
        productType={productType}
      />
    </div>
  );
}
