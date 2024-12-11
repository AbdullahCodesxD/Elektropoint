import Button from "./Button";
import { PencilSvg } from "./Svgs";

export default function OrdersDetailsNotes() {
  return (
    <div className="bg-white py-3 px-5 rounded-lg">
      <div className="flex items-center justify-between gap-5">
        <h3 className="font-semibold text-lg">Notes</h3>

        <Button>
          <PencilSvg height={15} />
        </Button>
      </div>

      <p className="mt-3 text-[14px]">No notes from customer</p>
    </div>
  );
}
