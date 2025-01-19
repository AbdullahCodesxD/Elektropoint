import Button from "./Button";
import { AddSvg } from "./Svgs";

export default function TaxesExamption() {
  return (
    <div>
      <h4 className="font-semibold text-[17px] mb-1 ">
        Tax rates and examptions
      </h4>

      <div className="bg-white py-3 px-4 rounded-lg">
        <h4 className="font-semibold text-lg">Shipping override</h4>

        <Button
          type="primary"
          extraClasses="flex gap-2 mt-3 items-center font-[400] text-[15px] py-2 px-3"
        >
          <AddSvg height={20} />
          Create a new design
        </Button>
      </div>
    </div>
  );
}
