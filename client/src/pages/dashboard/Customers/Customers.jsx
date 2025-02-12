import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CustomersComponent from "../../../components/CustomersComponent";
import CustomersComponentHeader from "../../../components/CustomersComponentHeader";
import CustomersFilter from "./CustomersFilter";
import CustomersSearchbar from "./CustomersSearchbar";
import { getCustomers } from "../../../utils/customerApi";
import { useSelector } from "react-redux";

export default function Customers() {
  const [search, setSearch] = useState("");
  const customersUnfiltered = useSelector((state) => state.customers.customers);
  const customers = customersUnfiltered.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  const [selected, setSelected] = useState([]);
  const noOfCustomers = customers.length;

  function selectAll(e) {
    if (e.target.checked) {
      setSelected(
        selected.map((_) => {
          return { selected: true };
        })
      );
    } else {
      setSelected(
        selected.map((_) => {
          return { selected: false };
        })
      );
    }
  }

  function toggleSelected(i) {
    setSelected((prevSelected) =>
      prevSelected.map((item, index) =>
        index === i ? { selected: !item.selected } : item
      )
    );
  }

  useEffect(function () {
    getCustomers();
  }, []);

  useEffect(
    function () {
      const isCustomerSelected = Array.from({ length: noOfCustomers }).map(
        (_) => {
          return { selected: false };
        }
      );
      setSelected(isCustomerSelected);
    },
    [noOfCustomers]
  );

  return (
    <div className="pb-[150px] md:pb-7 p-7 rounded-lg bg-[#EBEBEB]">
      <div className="flex items-center justify-between gap-1 flex-wrap">
        <h3 className="font-semibold text-2xl">Customers</h3>
        <Button
          to="new"
          type="primary"
          extraClasses="max-w-fit py-1 px-5 font-normal"
        >
          Add Customer
        </Button>
      </div>

      {customers.length === 0 && (
        <p className="p-3 text-center bg-white mt-3">No customers found</p>
      )}
      {customers.length > 0 && (
        <CustomersFilter noOfCustomers={noOfCustomers} />
      )}
      {customers.length > 0 && (
        <div className="mt-3 rounded-lg  bg-white">
          <CustomersSearchbar setSearch={setSearch} />
          <div className="overflow-x-auto order overflow-y-hidden">
            <CustomersComponentHeader
              selected={selected}
              selectAll={selectAll}
            />
            {customers.map((customer, i) => (
              <CustomersComponent
                customerId={customer._id}
                isSelected={selected[i]?.selected}
                toggleSelected={() => toggleSelected(i)}
                key={customer._id}
                data={customer}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
