import Button from "../../../components/Button";
import CustomersComponent from "../../../components/CustomersComponent";
import CustomersComponentHeader from "../../../components/CustomersComponentHeader";
import CustomersFilter from "./CustomersFilter";
import CustomersSearchbar from "./CustomersSearchbar";

export default function Customers() {
  const arr = Array.from({ length: 9 }).fill(undefined);
  return (
    <div className="p-7 rounded-lg bg-[#EBEBEB]">
      <div className="flex items-center justify-between gap-1 flex-wrap">
        <h3 className="font-semibold text-2xl">Customers</h3>
        <Button type="primary" extraClasses="max-w-fit py-1 px-5 font-normal">
          Add Customer
        </Button>
      </div>

      <CustomersFilter />

      <div className="mt-3 rounded-lg overflow-hidden bg-white">
        <CustomersSearchbar />
        <CustomersComponentHeader />

        {arr.map((_, i) => (
          <CustomersComponent key={i} />
        ))}
      </div>
    </div>
  );
}
