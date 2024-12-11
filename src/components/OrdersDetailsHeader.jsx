import { useNavigate } from "react-router";
import Button from "./Button";
import { BackSvg } from "./Svgs";

export default function OrdersDetailsHeader() {
  const navigate = useNavigate();

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <div>
      <div className="flex items-center gap-3">
        <Button handler={goBack}>
          <BackSvg height={20} width={20} />
        </Button>

        <p className="text-xl font-medium">#10228</p>

        <p className="bg-white text-[14px] px-3 font-medium py-1 rounded-md flex items-center gap-1">
          <span className="block h-[7px] aspect-square rounded-full bg-main"></span>{" "}
          Paid
        </p>
        <p className="text-[14px] px-3 font-medium py-1 rounded-md bg-main ">
          Unfulfilled
        </p>
      </div>

      <div className="flex items-center justify-between  mt-1 gap-3">
        <p className="text-dark/70 text-[14px]">
          Monday at 2:00pm from Online Store
        </p>
        <Button
          type="primary"
          extraClasses="max-w-fit px-4 py-1 text-dark/70 font-medium"
        >
          Cancel Order
        </Button>
      </div>
    </div>
  );
}
