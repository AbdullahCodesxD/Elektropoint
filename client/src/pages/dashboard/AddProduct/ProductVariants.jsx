import Button from "../../../components/Button";
import ProductVariantsDetailsComponent from "../../../components/ProductVariantsDetailsComponent";
import ProductVariantsDetailsHeader from "../../../components/ProductVariantsDetailsHeader";
import { PlusSvg } from "../../../components/Svgs";
import ProductVariantsOptions from "./ProductVariantsOptions";

export default function ProductVariants() {
  return (
    <div className="bg-white rounded-lg ">
      <div className="flex items-center justify-between gap-3 flex-wrap pt-3 px-5">
        <h3 className="font-semibold ">Variants</h3>

        <Button extraClasses="flex text-[15px] font-medium items-center gap-2 px-8 py-1.5 bg-main rounded-md">
          <PlusSvg height={10} color="black" />
          Add variant
        </Button>
      </div>

      {/* <div className="px-5">
        <ProductVariantsOptions />
      </div> */}

      <div className="mt-3 pb-3">
        <ProductVariantsDetailsHeader />
        <ProductVariantsDetailsComponent />
      </div>
    </div>
  );
}
