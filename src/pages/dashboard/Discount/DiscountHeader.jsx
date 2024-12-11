import Button from "../../../components/Button";
import { SearchSvg, SortSvg, ThreeLinesSvg } from "../../../components/Svgs";

export default function DiscountHeader() {
  return (
    <div className="flex items-center justify-between gap-5 flex-wrap px-4 py-2 bg-[#F5F5F5] ">
      <div>
        <Button extraClasses="bg-main px-3 py-1 rounded-md">All</Button>
      </div>

      <div className="flex items-center gap-2">
        <Button extraClasses="bg-main rounded-md p-2 flex items-center gap-1">
          <SearchSvg height={18} color="white" />
          <ThreeLinesSvg height={10} color="white" />
        </Button>

        <Button extraClasses="bg-main rounded-md p-2 flex items-center gap-1">
          <SortSvg height={18} color="white" />
        </Button>
      </div>
    </div>
  );
}
