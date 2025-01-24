import Button from "../../../components/Button";
import { SearchSvg, SortSvg } from "../../../components/Svgs";

export default function CustomersSearchbar({ setSearch }) {
  return (
    <div className="bg-white p-3 flex items-center px-5">
      <SearchSvg color="black" height={23} />
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search customers"
        className="border-none outline-none w-full px-3 py-1"
      />

      <Button extraClasses="bg-main" type="orderHeader">
        <SortSvg color="white" height={24} />
      </Button>
    </div>
  );
}
