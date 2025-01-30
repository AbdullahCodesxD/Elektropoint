import Button from "../../../components/Button";
import ProductVariantComponent from "../../../components/ProductVariantComponent";
import { PlusSvg, VariantsSvg } from "../../../components/Svgs";

export default function ProductVariantsOptions() {
  return (
    <div className="py-6 px-5 border-2 border-dark/10 rounded-lg flex items-center gap-8">
      <VariantsSvg height={35} />
      <div>
        <ProductVariantComponent name="storage" value="2gb/30gb" />

        <Button extraClasses="flex items-center gap-1 mt-2 font-medium text-black/70">
          <PlusSvg height={11} color="black" />
          Add other option
        </Button>
      </div>
    </div>
  );
}
