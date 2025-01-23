import { useEffect } from "react";
import Button from "../../../components/Button";
import CustomersComponent from "../../../components/CustomersComponent";
import CustomersComponentHeader from "../../../components/CustomersComponentHeader";
import CustomersFilter from "./CustomersFilter";
import CustomersSearchbar from "./CustomersSearchbar";
import { getCustomers } from "../../../utils/customerApi";
import { useSelector } from "react-redux";

export default function Customers() {
  const customers = useSelector((state) => state.customers);
  useEffect(function () {
    getCustomers();
  }, []);
  return (
    <div className="pb-[150px] md:pb-7 p-7 rounded-lg bg-[#EBEBEB]">
      <div className="flex items-center justify-between gap-1 flex-wrap">
        <h3 className="font-semibold text-2xl">Customers</h3>
        <Button type="primary" extraClasses="max-w-fit py-1 px-5 font-normal">
          Add Customer
        </Button>
      </div>

      <CustomersFilter />

      <div className="mt-3 rounded-lg overflow-x-auto order overflow-y-hidden bg-white">
        <CustomersSearchbar />
        <CustomersComponentHeader />

        {customers.map((_, i) => (
          <CustomersComponent key={i} />
        ))}
      </div>
    </div>
  );
}
