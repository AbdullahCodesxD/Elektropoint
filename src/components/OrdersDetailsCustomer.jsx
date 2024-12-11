import Button from "./Button";
import { CopySvg, PencilSvg } from "./Svgs";

export default function OrdersDetailsCustomer() {
  return (
    <div className="bg-white py-3 px-5 rounded-lg">
      <h3 className="font-semibold text-lg">Customer</h3>

      <p className="tetx-[14px] text-black/80 mt-1">Asad</p>
      <p className="tetx-[14px] text-black/80">Order 1</p>

      <h3 className="font-semibold mt-3 text-lg flex items-center justify-between gap-1">
        <span>Contact Information</span>

        <Button>
          <PencilSvg height={15} />
        </Button>
      </h3>

      <p className="tetx-[14px] text-black/80 flex items-center justify-between gap-1 mt-1">
        <span>+920000000</span>
        <Button>
          <CopySvg height={15} />
        </Button>
      </p>
      <p className="tetx-[14px] text-black/80 flex items-center justify-between gap-1">
        <span>Asad11@gmail.com</span>
        <Button>
          <CopySvg height={15} />
        </Button>
      </p>

      <h3 className="font-semibold mt-3 text-lg flex items-center justify-between gap-1">
        <span>Shipping Address</span>

        <Button>
          <PencilSvg height={15} />
        </Button>
      </h3>

      <p className="tetx-[14px] text-black/80 mt-1">Gulshane-e-Lahore</p>
      <p className="tetx-[14px] text-black/80">Banglow no #555</p>
    </div>
  );
}
