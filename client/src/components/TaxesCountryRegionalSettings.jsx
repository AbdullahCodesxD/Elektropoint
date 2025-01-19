import Button from "./Button";
import { AddSvg } from "./Svgs";

export default function TaxesCountryRegionalSettings({ country }) {
  return (
    <div className="bg-white py-3 px-4 rounded-lg">
      <h4 className="font-semibold text-lg">Regional settings</h4>
      <h5 className="font-medium mt-2">GST collection</h5>
      <p className="text-[15px] mb-3">
        If you do business in {`"${country}"`}, may you be required to collect
        GST on sale in {`"${country}"`}.
      </p>

      <Button
        type="primary"
        extraClasses="flex gap-2 items-center font-[400] text-[15px] py-2 px-3"
      >
        <AddSvg height={20} />
        Create a new design
      </Button>
    </div>
  );
}
