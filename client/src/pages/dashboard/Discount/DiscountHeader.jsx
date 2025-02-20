import Button from "../../../components/Button";
import { SearchSvg, SortSvg, ThreeLinesSvg } from "../../../components/Svgs";

export default function DiscountHeader({ isAnySelected, handler }) {
  return (
    <div className="flex items-center justify-between gap-5 flex-wrap px-4 py-2 bg-[#F5F5F5] ">
      <div>
        <Button extraClasses="bg-main px-3 py-1 rounded-md">All</Button>
      </div>
      <div className="mr-2 flex gap-2">
        {/* <Button extraClasses="bg-main" type="orderHeader">
          <SearchSvg color="white" height={20} />
        </Button> */}
        {isAnySelected && (
          <Button handler={handler} extraClasses="bg-main" type="orderHeader">
            Delete
          </Button>
        )}
      </div>
    </div>
  );
}
