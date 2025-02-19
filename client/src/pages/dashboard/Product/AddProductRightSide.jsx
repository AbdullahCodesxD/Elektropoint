import { useState } from "react";
import ProductOrganization from "./ProductOrganization";

export default function AddProductRightSide({
  status,
  setStatus,
  vendor,
  setVendor,
  inventory,
  setInventory,
  currentInventory,
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
  currentPrice = 0,
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
        inventory={inventory}
        setInventory={setInventory}
        currentInventory={currentInventory}
        currentVendor={currentVendor}
        collection={collection}
        setCollection={setCollection}
        tags={tags}
        setTags={setTags}
        currentTags={currentTags}
        setProductType={setProductType}
        productType={productType}
        currentProductType={currentProductType}
        price={price}
        setPrice={setPrice}
        currentPrice={currentPrice}
        color={color}
        setColor={setColor}
        currentColor={currentColor}
        brand={brand}
        setBrand={setBrand}
        currentBrand={currentBrand}
        supplierNo={supplierNo}
        setSupplierNo={setSupplierNo}
        currentSupplierNo={currentSupplierNo}
        eldasNo={eldasNo}
        setEldasNo={setEldasNo}
        currentEldasNo={currentEldasNo}
      />
    </div>
  );
}
