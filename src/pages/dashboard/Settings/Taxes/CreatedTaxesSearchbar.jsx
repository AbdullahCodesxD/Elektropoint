import Button from "../../../../components/Button";
import { SearchSvg, SortSvg } from "../../../../components/Svgs";

export default function CreatedTaxesSearchbar() {
  return (
    <div className="px-3 py-1.5 flex items-center gap-1">
      <SearchSvg height={20} />
      <input
        type="text"
        placeholder="Search customers"
        className="w-full px-3 py-0 outline-none text-[14px]"
      />
      <Button type="orderHeader" extraClasses="bg-main">
        <SortSvg height={20} />
      </Button>
    </div>
  );
}
