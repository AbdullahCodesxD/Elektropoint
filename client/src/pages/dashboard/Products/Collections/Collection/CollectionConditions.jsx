import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getVendors } from "../../../../../utils/productsApi";

export default function CollectionConditions({
  vendors,
  setVendors,
  matchCondition,
  setMatchCondition,
}) {
  const allVendors = useSelector((state) => state.products.vendors)?.filter(
    (val) => val
  );
  const notSelectedVendors = allVendors.filter(
    (vendor) => vendors.indexOf(vendor) === -1
  );
  const handleMatchConditionChange = (e) => {
    setMatchCondition(e.target.id === "need-condition");

    if (e.target.id !== "need-condition") {
      setVendors([]);
    }
  };

  function handleVendorChange(e, i) {
    e.preventDefault();
    setVendors([
      ...vendors.slice(0, i),
      e.target.value,
      ...vendors.slice(i + 1),
    ]);
    setVendors((vendors) => vendors.filter((vendor) => vendor));
  }

  useEffect(function () {
    getVendors();
  }, []);
  return (
    <div className="p-5 rounded-lg bg-white">
      <h4 className="text-lg">Conditions</h4>

      <div className="flex items-center gap-5 flex-wrap mt-3">
        <div className="flex items-center gap-2 ">
          <input
            className="h-[10px] aspect-square appearance-none border-1 border-white rounded-full cursor-pointer shadow-[0_0_0_2px_white,0_0_0_4px_black] checked:bg-main"
            type="radio"
            name="match-condition"
            id="no-condition"
            onChange={handleMatchConditionChange}
            defaultChecked
          />
          <label className="cursor-pointer text-dark/80" htmlFor="no-condition">
            {" "}
            No Condition
          </label>
        </div>

        <div className="flex items-center gap-2 ">
          <input
            className="h-[10px] aspect-square appearance-none border-1 border-white rounded-full cursor-pointer shadow-[0_0_0_2px_white,0_0_0_4px_black] checked:bg-main"
            type="radio"
            name="match-condition"
            id="need-condition"
            onChange={handleMatchConditionChange}
          />
          <label
            className="cursor-pointer text-dark/80"
            htmlFor="need-condition"
          >
            {" "}
            Need Condition
          </label>
        </div>
      </div>

      {matchCondition && (
        <>
          {/* <div className="flex items-center gap-5 flex-wrap mt-3">
            <p>Products must match : </p>

            <div className="flex items-center gap-2 ">
              <input
                className="h-[10px] aspect-square appearance-none border-1 border-white rounded-full cursor-pointer shadow-[0_0_0_2px_white,0_0_0_4px_black] checked:bg-main"
                type="radio"
                name="condition"
                id="all-conditions"
                defaultChecked
              />
              <label
                className="cursor-pointer text-dark/80"
                htmlFor="all-conditions"
              >
                {" "}
                All conditions
              </label>
            </div>

            <div className="flex items-center gap-2 ">
              <input
                className="h-[10px] aspect-square appearance-none border-1 border-white rounded-full cursor-pointer shadow-[0_0_0_2px_white,0_0_0_4px_black] checked:bg-main"
                type="radio"
                name="condition"
                id="any-condition"
              />
              <label
                className="cursor-pointer text-dark/80"
                htmlFor="any-condition"
              >
                {" "}
                Any condition
              </label>
            </div>
          </div> */}

          {/* <div  className="flex items-center gap-3 mt-3">
                <select className="w-[33%] max-w-[250px] outline-none border border-dark/70 rounded-md px-3 py-2 cursor-pointer">
                  <option value="">Vendor 1</option>
                  <option value="">Vendor 2</option>
                  <option value="">Vendor 3</option>
                  <option value="">Vendor 4</option>
                  <option value="">Vendor 5</option>
                </select>
                <select className="w-[33%] max-w-[250px] outline-none border border-dark/70 rounded-md px-3 py-2 cursor-pointer">
                  <option value="">Is equal to 1</option>
                  <option value="">Is equal to 2</option>
                  <option value="">Is equal to 3</option>
                  <option value="">Is equal to 4</option>
                  <option value="">Is equal to 5</option>
                </select>
                <select className="w-[33%] max-w-[250px] outline-none border border-dark/70 rounded-md px-3 py-2 cursor-pointer">
                  <option value="">Schalter 1</option>
                  <option value="">Schalter 2</option>
                  <option value="">Schalter 3</option>
                  <option value="">Schalter 4</option>
                  <option value="">Schalter 5</option>
                </select>
              </div> */}
          {Array.from({
            length: Math.min(vendors.length + 1, allVendors.length),
          }).map((_, i) => {
            return (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-3 mt-3 border-b border-dark md:border-none pb-2 md:pb-0 border-dotted"
              >
                <span className="w-full md:w-[33%] outline-none border border-dark/70 rounded-md px-3 py-2">
                  Vendor {i + 1}
                </span>
                <span className="w-full md:w-[33%]  outline-none border border-dark/70 rounded-md px-3 py-2">
                  Is equal to
                </span>
                <select
                  onChange={(e) => handleVendorChange(e, i)}
                  value={vendors[i]}
                  className="w-full md:w-[33%] capitalize outline-none border border-dark/70 rounded-md px-3 py-2 cursor-pointer"
                >
                  <option value="">None</option>
                  {i < vendors.length && (
                    <option className="capitalize" value={vendors[i]}>
                      {vendors[i]}
                    </option>
                  )}
                  {notSelectedVendors.map((vendor) => (
                    <option className="capitalize" key={vendor} value={vendor}>
                      {vendor}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
